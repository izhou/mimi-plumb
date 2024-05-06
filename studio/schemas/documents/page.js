import { isUniqueAcrossAllDocuments } from '../lib/isUniqueAcrossAllDocuments'


export default {
  name: 'page',
  type: 'document',
  title: 'Page',
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
        'A short description of the page. This ends up on summary pages, on Google, when people share your post in social media.'
    },
    {
      name: 'contents',
      type: 'bodyPortableText',
      title: 'Contents',
      description:
        'The page contents.'
    },
  ]
}