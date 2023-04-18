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
    defineField({
      name: 'orderOfAppearance',
      title: 'Order of appearance',
      description: "Controls in what order will it'll appear in the list on the frontend",
      type: 'number',
      hidden: ({document}) => !document?.isFeatured,
      validation: (Rule) => Rule.min(1) && Rule.integer() && Rule.positive(),
    }),
  ],
  preview: {
    select: {title: 'organization.name', media: 'organization.logo', subtitle: 'orderOfAppearance'},
    prepare(selection) {
      const {title, subtitle, media} = selection

      return {
        title,
        media,
        subtitle: subtitle ? `Order of appearance: #${subtitle}` : '',
      }
    },
  },
  orderings: [
    {
      title: 'Order of Appearance',
      name: 'orderOfAppearanceAsc',
      by: [{field: 'orderOfAppearance', direction: 'asc'}],
    },
  ],
})
