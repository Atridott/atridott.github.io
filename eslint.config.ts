import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro"
import eslintConfigPrettier from "eslint-config-prettier"
import { defineConfig } from "eslint/config";

export default defineConfig([
	js.configs.recommended,
	...tseslint.configs.recommended,

	...eslintPluginAstro.configs["flat/recommended"],
	...eslintPluginAstro.configs["flat/jsx-a11y-recommended"],

	{
		files: ["**/*.astro", "**/*.ts", "**/*.tsx"],
		rules: {
			"tailwindcss/classnames-order": "off",
			"tailwindcss/no-custom-classname": [
				"warn",
				{
					"whitelist": ["bg-stripe"]
				}
			],
		},
	},

	eslintConfigPrettier,

	{
		ignores: ["dist/", ".astro/", "node_modules/"],
	}
]);
