import {defineField, defineType} from 'sanity'
import {MdBuild as icon} from 'react-icons/md'

export default defineType({
  name: 'technology',
  title: 'Technology',
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
      name: 'website',
      title: 'Website',
      type: 'url',
      validation: (Rule) => Rule.uri({}),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        storeOriginalFilename: false,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured',
      description:
        'Switch this on if you want to include it in the featured section on the frontend',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'orderOfAppearance',
      title: 'Order of appearance',
      description: "Controls in what order will it'll appear in the list on the frontend",
      type: 'number',
      validation: (Rule) => Rule.min(1) && Rule.integer() && Rule.positive(),
      hidden: ({document}) => !document?.isFeatured,
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'orderOfAppearance', media: 'logo'},
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
      title: 'name',
      name: 'nameAsc',
      by: [{field: 'name', direction: 'asc'}],
    },
    {
      title: 'Order of Appearance',
      name: 'orderOfAppearanceAsc',
      by: [{field: 'orderOfAppearance', direction: 'asc'}],
    },
  ],
})
