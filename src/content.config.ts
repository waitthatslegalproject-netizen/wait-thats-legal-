import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: z.string(),
    author: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    description: z.string(),
    sources: z.array(z.string()).optional()
  })
});

export const collections = {
  articles
};
