import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // Disable CDN to get fresh content
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Blog post queries
export async function getBlogPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      "author": author->name
    }
  `);
}

export async function getBlogPost(slug: string) {
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      body,
      publishedAt,
      "author": author->name
    }
  `, { slug });
}

// Career queries
export async function getCareers() {
  return client.fetch(`
    *[_type == "career"] | order(_createdAt desc) {
      _id,
      title,
      department,
      location,
      type,
      description,
      responsibilities,
      requirements,
      desiredExperience
    }
  `);
}
