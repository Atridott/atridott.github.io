import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const notes = defineCollection({
   loader: glob({ base: "./src/content/notes", pattern: "**/*.{md,mdx}" }),
   schema: z.object({
      title: z.string(),
      pubDate: z.coerce.date(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()),
   }),
});

export const collections = { notes };
