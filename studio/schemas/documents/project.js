import { isUniqueAcrossAllDocuments } from '../lib/isUniqueAcrossAllDocuments'

export default {
  name: 'project',
  type: 'document',
  title: 'Projects',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'The website URL ending.',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: isUniqueAcrossAllDocuments
      }
    },

    {
      name: 'description',
      type: 'blockPortableText',
      title: 'Description',
      description:
        'A short description of the project. This ends up on summary pages, on Google, when people share your post in social media.'
    },

    {
      name: 'statement',
      type: 'bodyPortableText',
      title: 'Statement',
      description:
        'The full project statement.'
    },
    {
      name: 'gallery',
      type: 'array',
      description:
        `You can drag and drop multiple images directly onto this section here. Click on each image to edit it's information. Drag and drop them to rearrange their order.`,
      options: {
        layout: 'grid'
      },
      of: [{
        type: 'photo'
      }],
      validation: Rule => Rule.custom( gallery => {
        let homepage_photos = (gallery || []).filter((photo) => photo.homepage);
        let num_homepage = homepage_photos.length;

        return (num_homepage > 0 && num_homepage <= 8) 
          ? true
          : 'You must include between 1-8 homepage images'
      })
    },
    {
      name: 'aspect_ratio',
      type: 'object',
      description: `The forced aspect ratio that should be displayed, e.g. for the index. Leave blank to dynamically resize.`,
      fields: [
        {
          name: 'width',
          type: 'number',
          validation: Rule => Rule.positive()
        },
        {
          name: 'height',
          type: 'number',
          validation: Rule => Rule.positive()
        },
      ],
      validation: Rule => Rule.custom( fields => {
        if (!!fields.width !== !!fields.height) return "You must have both a width AND height";
        if (fields.height == 0 || fields.width == 0) return "The width and height cannot be 0";
        return true;
      })
    },
    {
      name: 'noindex',
      title: 'Hide page from search engines',
      type: 'boolean',
    }
  ],
  preview: {
    select: {
      title: 'title',
      gallery: 'gallery',
    },
    prepare(selection) {
      const {title, gallery } = selection;
      
      if (gallery && gallery[0] && gallery[0].asset) {
        return {
          title: title,
          media: gallery[0].asset
        };
      }

      return {
        title: title,
      }
    }
  }
}
