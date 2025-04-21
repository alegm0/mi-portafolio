import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";

export default {
  name: "shoot",
  type: "document",
  title: "Shoot",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Título",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title", maxLength: 96 },
    },
    {
      name: "cover",
      type: "image",
      title: "Imagen de portada",
      options: { hotspot: true },
    },
    {
      name: "images",
      type: "array",
      title: "Galería de imágenes",
      of: [{ type: "image" }],
    },
  ],
};

