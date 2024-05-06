export default {
  name: 'accordionText',
  type: 'object',
  title: 'Accordion Text',
  fields:[
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'body',
      type: 'blockPortableText',
      title: 'Body',
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}