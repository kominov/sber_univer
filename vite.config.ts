import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { checker } from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({mode}) => {
  console.log(mode,'mode');
  
	return {
		plugins: [
			svgr(),
			react(),
			checker({
				typescript: {
					tsconfigPath: './tsconfig.json',
				},
				overlay: { initialIsOpen: true },
			}),
		],
		resolve: {
			tsconfigPaths: true,
		},
     build:{
      sourcemap: mode==='development'
  }
	};
 
});
