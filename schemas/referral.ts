import {defineField, defineType} from 'sanity'
import {MdHandshake as icon} from 'react-icons/md'

export default defineType({
  name: 'referral',
  title: 'Referral',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'from',
      title: 'From',
      description: 'The person who gave the referral',
      type: 'reference',
      to: [{type: 'person'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'orderOfAppearance',
      title: 'Order of appearance',
      description: "Controls in what order will it'll appear in the list on the frontend",
      type: 'number',
      validation: (Rule) => Rule.min(1) && Rule.integer() && Rule.positive(),
    }),
  ],
  preview: {
    select: {title: 'from.name', subtitle: 'orderOfAppearance', media: 'from.image'},
    prepare(selection) {
      const {title, subtitle, media} = selection
      console.log(media)
      return {
        title,
        media,
        subtitle: subtitle ? `Order of appearance: #${subtitle}` : '',
      }
    },
  },
  orderings: [
    {
      title: 'name',
      name: 'nameAsc',
      by: [{field: 'from.name', direction: 'asc'}],
    },
    {
      title: 'Order of Appearance',
      name: 'orderOfAppearanceAsc',
      by: [{field: 'orderOfAppearance', direction: 'asc'}],
    },
  ],
})
