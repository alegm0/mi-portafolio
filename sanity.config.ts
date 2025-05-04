'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'


import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'
// Directamente desde process.env

export default defineConfig({
  basePath: '/studio',
  projectId:'q27ugq00',
  dataset:'production',
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: '2023-01-01'}),
  ],
})
