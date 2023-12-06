import { z, defineCollection } from 'astro:content';
// 2. Define a `type` and `schema` for each collection
const playas = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        titulo: z.string().max(80, "Para un mejor Seo, por favor ingrese un titulo de menos de 80 caracteres"),
        extracto: z.string(),
        descripcion: z.string().min(100, "Para un mejor Seo, por favor ingrese una descripcion de minimo 100 caracteres"),
        playadestacada: z.boolean(),
        slug: z.string(),
        image: z.string(),
        tags: z.array(z.string()),
        draft: z.boolean(),
        nado: z.boolean().optional(),
        comer: z.boolean().optional(),
        hospedaje: z.boolean().optional(),
        atascada: z.boolean().optional(),
        lat: z.number(),
        lang: z.number(),
        autor: z.enum(['Claudio', 'El Zanca']),
        date: z.date()
    }),
    
  });

  const imagenes = defineCollection({
    schema: ({ image }) => z.object({
      title: z.string(),
      cover: image().refine((img) => img.width >= 1080, {
        message: "Cover image must be at least 1080 pixels wide!",
      }),
      Alt: z.string(),
    }),
  });
  
//   Aqui puedo hacer otro esquema como playa y agregarlo al array de collections con una coma
  export const collections = {playas, imagenes};