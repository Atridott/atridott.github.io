import type { Config } from "tailwindcss"

export default {
	content: ["./src/**/*.{astro,html,md,mdx,ts,tsx,css}"],
	theme: {
		extend: {
			transitionDuration: {
				"normal": 300,
			}
		}
	}
} satisfies Config