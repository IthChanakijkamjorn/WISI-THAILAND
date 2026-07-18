import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 's7zfxbfa',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
})
