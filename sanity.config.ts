import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {codeInput} from '@sanity/code-input'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'
//import {googleMapsInput} from '@sanity/google-maps-input'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Beardesign',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID as string,
  dataset: process.env.SANITY_STUDIO_DATASET as string,

  plugins: [
    deskTool(),
    visionTool(),
    codeInput(),
    unsplashImageAsset(),
    //googleMapsInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
