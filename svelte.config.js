import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { windi } from 'svelte-windicss-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', '.svx', '.md'],
	preprocess: [preprocess(), windi(), mdsvex({ extensions: ['.svx', '.md'] })],

	kit: {
		adapter: adapter()
	}
};

export default config;
