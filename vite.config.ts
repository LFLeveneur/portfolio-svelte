import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$lib: '/src/lib',
			$components: '/src/lib/components',
			$stores: '/src/lib/stores',
			$utils: '/src/lib/utils',
			$types: '/src/lib/types',
			$styles: '/src/lib/styles',
			$assets: '/src/lib/assets',
			$images: '/src/lib/assets/images',
			$fonts: '/src/lib/assets/fonts',
			$icons: '/src/lib/assets/icons',
			$routes: '/src/routes',
			$src: '/src'
		}
	}
});
