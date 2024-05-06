import React from 'react'

export default {
  name: 'photo',
  type: 'image',
  title: 'Photo',
  options: {
    hotspot: false
  },
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'caption',
      type: 'blockPortableText',
      title: 'Caption',
      options: {
        isHighlighted: true,
      },
      validation: Rule => Rule.custom(blocks => {
        if (!blocks) return true;
        let children = blocks.map(block => block.children);
        if (!children) return true;
        let text_length = children.map(
          block => block.map(
            span => span._type === 'span' ? span.text.length : 0)
          )
          .reduce((a,b) => a + b)
          .reduce((a,b) => a + b);
        return text_length <= 440
          ? true
          : 'Must be less than 440 characters';
      })
    },
    {
      name: 'homepage',
      title: 'Show on Homepage',
      type: 'boolean',
      options: {
        isHighlighted: true,
      },
    }
  ],
  preview: {
    select: {
      url: 'asset.url',
      homepage: 'homepage'
    },
    prepare: (selection) => {
      const { url, homepage } = selection;
      let style = homepage ? {
        border: 'skyblue 4px solid',
        boxSizing: 'border-box'
      } : {};

      return {
        media: <img src={url} style={style} />
      };
    }
  }
}