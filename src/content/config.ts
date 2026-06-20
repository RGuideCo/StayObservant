import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),

    // Used for the card grid thumbnail
    cover: z.string(),

    // Optional big image at top of the case study
    hero: z.string().optional(),

    // Optional metadata
    role: z.string().optional(),
    tools: z.array(z.string()).optional(),
    deliverables: z.array(z.string()).optional(),
  }),
});

export const collections = { projects };