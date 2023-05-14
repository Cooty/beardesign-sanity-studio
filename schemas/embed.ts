import {defineField, defineType} from 'sanity'
import EmbedPreview from '../components/EmbedPreview'

export default defineType({
  name: 'embed',
  type: 'object',
  title: 'Embedded content',
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'URL to embed',
    }),
  ],
  preview: {
    select: {
      url: 'url',
    },
  },
  components: {
    preview: EmbedPreview,
  },
})
