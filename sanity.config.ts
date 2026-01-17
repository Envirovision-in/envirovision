import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schema';

export default defineConfig({
  name: 'envirovision',
  title: 'EnviroVision CMS',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ffni648b',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  basePath: '/studio',

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
