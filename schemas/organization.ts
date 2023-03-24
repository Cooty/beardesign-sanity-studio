import {defineField, defineType} from 'sanity'
import {MdWork as icon} from 'react-icons/md'

export default defineType({
  name: 'organization',
  title: 'Organization',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'External link',
      type: 'url',
      validation: (Rule) => Rule.uri({}),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
        storeOriginalFilename: false,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
  preview: {
    select: {title: 'name', media: 'logo'},
  },
})
