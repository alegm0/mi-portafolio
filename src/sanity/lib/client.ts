import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

console.log("Sanity Config:", {
  projectId,
  dataset,
  apiVersion
});


// 👉 Función para generar URLs de imagen con soporte hotspot
// ✅ Agrega esto
const builder = imageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source);
}