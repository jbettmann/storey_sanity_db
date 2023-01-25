import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    // Title *************************
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Home title all lowercase',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    // Logo *************************
    defineField({
      name: 'logo',
      title: 'Logo Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    // Hero *************************
    defineType({
      name: 'hero',
      title: 'Hero',
      type: 'document',
      fields: [
        defineField({
          name: 'title',
          title: 'Hero Title',
          type: 'string',
        }),
        defineField({
          name: 'slug',
          title: 'Hero Slug',
          type: 'slug',
          description: 'Hero title all lowercase',
          options: {
            source: 'title',
            maxLength: 96,
          },
        }),
        defineField({
          name: 'mainImage',
          title: 'Hero Main image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'body',
          title: 'Hero Body',
          type: 'blockContent',
        }),
      ],
    }),

    // Specialty Cards *************************
    defineType({
      name: 'cards',
      title: 'Cards',
      type: 'document',
      fields: [
        // Card 1
        defineType({
          name: 'card_1',
          title: 'Card 1',
          type: 'document',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'slug',
              title: 'Slug Card 1',
              type: 'slug',
              description: 'Card title all lowercase',
              options: {
                source: 'title',
                maxLength: 96,
              },
            }),
            defineField({
              name: 'mainImage',
              title: 'Main image Card 1',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'body',
              title: 'Body Card 1',
              type: 'blockContent',
            }),
            defineField({
              name: 'button',
              title: 'Button Text Card 1',
              type: 'string',
              description: 'This text will be shown on card button',
              options: {
                source: 'title',
                maxLength: 20,
              },
            }),
          ],
        }),
        // Card 2
        defineType({
          name: 'card_2',
          title: 'Card 2',
          type: 'document',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'slug',
              title: 'Slug Card 2',
              type: 'slug',
              description: 'Card title all lowercase',
              options: {
                source: 'title',
                maxLength: 96,
              },
            }),
            defineField({
              name: 'mainImage',
              title: 'Main image Card 2',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'body',
              title: 'Body Card 2',
              type: 'blockContent',
            }),
            defineField({
              name: 'button',
              title: 'Button Text Card 2',
              type: 'string',
              description: 'This text will be shown on card button',
              options: {
                source: 'title',
                maxLength: 20,
              },
            }),
          ],
        }),
        // Card 3
        defineType({
          name: 'card_3',
          title: 'Card 3',
          type: 'document',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'slug',
              title: 'Slug Card 3',
              type: 'slug',
              description: 'Card title all lowercase',
              options: {
                source: 'title',
                maxLength: 96,
              },
            }),
            defineField({
              name: 'mainImage',
              title: 'Main image Card 3',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'body',
              title: 'Body Card 3',
              type: 'blockContent',
            }),
            defineField({
              name: 'button',
              title: 'Button Text Card 3',
              type: 'string',
              description: 'This text will be shown on card button',
              options: {
                source: 'title',
                maxLength: 20,
              },
            }),
          ],
        }),
      ],
    }),

    // About section on Homepage *************************
    defineType({
      name: 'homeAbout',
      title: 'About Section on Homepage',
      type: 'document',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          description: 'About title all lowercase',
          options: {
            source: 'title',
            maxLength: 96,
          },
        }),
        defineField({
          name: 'videoUrl',
          title: 'About Video URL',
          type: 'url',
          description:
            'Needs to be in https://www.youtube.com/watch?v=ViDeOID1234 or https://youtu.be/ViDeoId1234 format!',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'body',
          title: 'About body on Hompage',
          type: 'blockContent',
        }),
        defineField({
          name: 'button',
          title: 'Button Text for About Homepage',
          type: 'string',
          description: 'This text will be shown on button',
          options: {
            source: 'title',
            maxLength: 20,
          },
        }),
      ],
    }),

    // Se habla español *************************
    defineType({
      name: 'language',
      title: 'Se Habla Español',
      type: 'document',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          description: 'Si Habla title all lowercase',
          options: {
            source: 'title',
            maxLength: 96,
          },
        }),
        defineField({
          name: 'body',
          title: 'Si Habla body on Hompage',
          type: 'blockContent',
        }),
      ],
    }),
  ],
})
