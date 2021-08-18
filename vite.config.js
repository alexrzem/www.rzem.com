import path from 'path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		outDir: 'docs',
	},
	plugins: [vue()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '/src'),
		},
	}
});
