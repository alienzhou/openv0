import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		proxy: {
			'/component': {
				target: 'http://127.0.0.1:3000',
				changeOrigin: true,
			},
		},
	},
	plugins: [sveltekit()]
});
