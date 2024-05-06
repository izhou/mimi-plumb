const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const groq = require('groq')
const client = require('../utils/sanityClient')
const serializers = require('../utils/serializers')

module.exports = async function () {
  const projection = await client.fetch(groq`
    *[_type == "page" && defined(slug)]{
      title,
      slug,
      description,
      contents
    }
  `);

  
  return projection.map((page) => {
    return {
      ...page,
      contents: BlocksToMarkdown(page.contents, { serializers, ...client.config() }),
    }
  })
}