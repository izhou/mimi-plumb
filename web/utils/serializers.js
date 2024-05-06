const BlocksToMarkdown = require('@sanity/block-content-to-markdown');
const client = require('./sanityClient');
const urlFor = require('./imageUrl');

// Allow for some nested serializers
const base_serializer = {
  types: {
    image: ({ node }) => {
      return `<img
        class="lazyload inline-image"
        src="${urlFor(node, true)}"
        data-src="${urlFor(node)}"
        alt="${node.title}"
      >`;
    }
  }
}

// Learn more on https://www.sanity.io/guides/introduction-to-portable-text
module.exports = {
  types: {
    ...base_serializer.types,
    accordionText: ({node}) => {
      const body =  BlocksToMarkdown(node.body, { serializers: base_serializer, ...client.config() });
      return `+++${node.title}\n${body}\n+++`;
    },
  },
}