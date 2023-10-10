import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@containers': `${path.resolve(__dirname, 'src/containers')}`,
			'@components': `${path.resolve(__dirname, 'src/components')}`,
			'@pages': `${path.resolve(__dirname, 'src/pages')}`,
			'@hooks': `${path.resolve(__dirname, 'src/hooks')}`,
			'@images': `${path.resolve(__dirname, 'src/assets/images')}`,
			'@utils': `${path.resolve(__dirname, 'src/utils')}`,
			'@contexts': `${path.resolve(__dirname, 'src/contexts')}`,
			'@enums': `${path.resolve(__dirname, 'src/enums')}`,
			'@interfaces': `${path.resolve(__dirname, 'src/interfaces')}`,
			'@types': `${path.resolve(__dirname, 'src/types')}`,
			'@routes': `${path.resolve(__dirname, 'src/routes')}`,
			'@theme': `${path.resolve(__dirname, 'src/theme')}`,
			public: `${path.resolve(__dirname, 'public')}`,
		},
	},
});
