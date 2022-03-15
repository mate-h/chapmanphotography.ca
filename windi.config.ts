import { defineConfig } from 'windicss/helpers';

export default defineConfig({
	extract: {
		/**
		 * Globs of files to be included from extractions
		 */
		include: ['**/*.{svelte,ts,svx,html}']
	},

	theme: {
		extend: {
			colors: {
				primary: {
					default: '#b39500'
				}
			}
		}
	},
	plugins: [
		require('windicss/plugin/forms'),
	]
});
