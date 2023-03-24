import {defineField, defineType} from 'sanity'
import {MdBusiness as icon} from 'react-icons/md'

export default defineType({
  name: 'client',
  title: 'Client',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'organization',
      title: 'Organization',
      type: 'reference',
      to: [{type: 'organization'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured',
      description:
        'Switch this on if you want to include the client in the featured work section on the frontend',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {select: {title: 'organization.name', media: 'organization.logo'}},
})
