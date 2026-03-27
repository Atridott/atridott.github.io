import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const notes = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/notes" }),
	schema: z.object({
		tone: z.enum(["warm", "cool"]),
		title: z.string(),
		emoji: z.emoji(),
	})
})

export const collections = { notes }