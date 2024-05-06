const groq = require('groq')
const client = require('../utils/sanityClient')

module.exports = async function() {
  const projection =  await client.fetch(groq`
    *[_id == "siteSettings"]{
      ...,
      timeline[] -> {
        _id,
        title,
        slug,
        gallery[] {
          _key,
          asset,
          homepage
        },
        aspect_ratio
      },
      sidebar[] {
        ...,
        _type == "project" => {
          "title": @->title,
          "slug": @->slug.current,
        },
        _type == "page" => {
          "title": @->title,
          "slug": @->slug.current,
        }
      },
      redirects[] {
        ...,
        redirectTo {
          "slug": @->slug.current,
        }
      }
    }[0]
  `)

  // Filter here to maintain the photo index in the project
  projection.timeline.forEach((project, index) => {
    let gallery = project.gallery.map((photo, index) => {
      return {
        ...photo,
        project_index : index,
      };
    });

    gallery = gallery.filter((photo) => photo.homepage);
    projection.timeline[index].gallery = gallery;
  });

  return projection;
}
