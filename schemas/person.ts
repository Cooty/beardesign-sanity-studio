import {defineField, defineType} from 'sanity'
import {MdPerson as icon} from 'react-icons/md'

export default defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Please use "Firstname Lastname" format',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'jobTitle',
      title: 'Job title',
      type: 'string',
      validation: (Rule) => Rule.required() && Rule.max(180),
    }),
    defineField({
      name: 'organization',
      title: 'Organization of the person',
      type: 'reference',
      to: [{type: 'organization'}],
      description: 'The organization associated with the person',
    }),
    defineField({
      name: 'link',
      title: 'External link',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
          allowRelative: true,
        }),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
        storeOriginalFilename: false,
      },
    }),
  ],
  preview: {
    select: {title: 'name', media: 'image'},
  },
})
