const imageUrl = require('@sanity/image-url')
const sanityClient = require('./sanityClient')

// Learn more: https://www.sanity.io/docs/asset-pipeline/image-urls
function urlFor(source, thumb) {
  if (thumb) {
    return imageUrl(sanityClient).image(source)
      .width(100)
      .auto('format')
      .blur(10);
  }

  return imageUrl(sanityClient).image(source)
    .width(1600)
    .auto('format')
}

module.exports = urlFor
