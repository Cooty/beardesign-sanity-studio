import {defineField, defineType} from 'sanity'
import {MdMonitor as icon} from 'react-icons/md'

export default defineType({
  name: 'portfolioItem',
  title: 'Porfolio Item',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'orderOfAppearance',
      title: 'Order of appearance',
      description: "Controls in what order will it'll appear in the list on the frontend",
      type: 'number',
      validation: (Rule) => Rule.required() && Rule.min(1) && Rule.integer() && Rule.positive(),
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'reference',
      to: [{type: 'organization'}],
    }),
    defineField({
      name: 'myRichTextExample',
      title: 'Rich text example',
      type: 'blockContent',
    }),
    defineField({
      name: 'websiteLink',
      title: 'Website Link',
      description: 'Pubic website for the project',
      type: 'url',
      validation: (Rule) => Rule.uri({}),
    }),
    defineField({
      name: 'articleLink',
      title: 'Article Link',
      description: 'Article or case study about the project',
      type: 'url',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https'], allowRelative: true}),
    }),
    defineField({
      name: 'repositoryLink',
      title: 'Repository Link',
      description: 'Link to the source code repository of the project',
      type: 'url',
      validation: (Rule) => Rule.uri({}),
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies used',
      description: 'Tags associated with a Technology will be automatically added to the frontend',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'technology'}]}],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      description: 'Only add Tags that are not related to an associated Technology',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'tag'}]}],
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'orderOfAppearance'},
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title,
        subtitle: subtitle ? `Order of appearance: #${subtitle}` : '',
      }
    },
  },
  orderings: [
    {
      title: 'Title',
      name: 'titleAsc',
      by: [{field: 'title', direction: 'asc'}],
    },
    {
      title: 'Order of Appearance',
      name: 'orderOfAppearanceAsc',
      by: [{field: 'orderOfAppearance', direction: 'asc'}],
    },
  ],
})
