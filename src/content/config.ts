import { z, defineCollection } from "astro:content"

const notes = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		emoji: z.string().emoji().optional().default('📝'),
		tone: z.string(),
		desc: z.string(),
	})
})

export const collections = {
	notes: notes,
}