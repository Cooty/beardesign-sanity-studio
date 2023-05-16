import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {codeInput} from '@sanity/code-input'
//import {googleMapsInput} from '@sanity/google-maps-input'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Beardesign',

  projectId: 'hotw50ip',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    codeInput(),
    //googleMapsInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
