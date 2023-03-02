import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'resources',
  title: 'Resources',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'resource',
      type: 'array',
      of: [
        defineType({
          type: 'reference',
          name: 'blog',
          to: [{type: 'blog'}],
        }),
        defineType({
          type: 'reference',
          name: 'faqs',
          to: [{type: 'faqs'}],
        }),
      ],
    },
  ],
})
