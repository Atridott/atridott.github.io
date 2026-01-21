import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro"
import eslintConfigPrettier from "eslint-config-prettier"
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss';
import { defineConfig } from "eslint/config";

export default defineConfig([
	js.configs.recommended,
	...tseslint.configs.recommended,

	...eslintPluginAstro.configs["flat/recommended"],
	...eslintPluginAstro.configs["flat/jsx-a11y-recommended"],

	eslintConfigPrettier,

	{
		plugins: { "better-tailwindcss": eslintPluginBetterTailwindcss },
		rules: {
			...eslintPluginBetterTailwindcss.configs["recommended-error"].rules,
			"tailwindcss/no-custom-classname": [
				"warn",
				{
					"whitelist": ["bg-stripe"]
				}
			]
		},
		ignores: ["dist/", ".astro/", "node_modules/"],
		settings: {
			"better-tailwindcss": {
				"entryPoint": "src/styles/global.css",
			}
		}
	}
]);
