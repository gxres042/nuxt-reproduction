// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	future: {
		compatibilityVersion: 4
	},
	experimental: {
		componentIslands: true
	},
	modules: [
		'@nuxt/content',
		'@nuxt/eslint',
		'@nuxt/image',
		'@nuxtjs/sitemap',
		'@nuxtjs/color-mode',
		'@unocss/nuxt',
		'@pinia/nuxt',
		'nuxt-schema-org',
		'nuxt-umami'
	],
	css: ['~/assets/css/reset.css'],
	colorMode: {
		preference: 'system',
		fallback: 'light',
		classPrefix: '',
		classSuffix: '',
		storageKey: 's-complex-theme'
	},
	content: {
		highlight: {
			theme: 'one-dark-pro'
		}
	}
});
