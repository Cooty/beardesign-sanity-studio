import {defineField, defineType} from 'sanity'
import {MdOutlineArticle as icon} from 'react-icons/md'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'person'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publicationDate',
      title: 'Publication Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      initialValue: new Date().toISOString(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
        storeOriginalFilename: false,
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'Short summary or intro that appears before the main content',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'tag'}]}],
    }),
  ],
  preview: {
    select: {title: 'title', media: 'coverImage'},
  },
})
