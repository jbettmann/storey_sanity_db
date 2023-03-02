import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faqs',
  title: 'FAQs',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineType({
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [
        {
          title: 'FAQ',
          name: 'FAQ',
          type: 'object',
          fields: [
            {
              title: 'Question',
              name: 'question',
              type: 'string',
            },
            {
              title: 'Answer',
              name: 'answer',
              type: 'text',
            },
          ],
        },
      ],
    }),
  ],
})
