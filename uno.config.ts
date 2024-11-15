import { defineConfig, presetUno, transformerVariantGroup, transformerDirectives } from 'unocss';

export default defineConfig({
	presets: [presetUno()],
	theme: {
		colors: {
			link: '#3273DC'
		}
	},
	transformers: [
		transformerVariantGroup(),
		transformerDirectives({
			applyVariable: '--apply'
		})
	]
});
