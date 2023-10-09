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
			'@context': `${path.resolve(__dirname, 'src/context')}`,
			'@enums': `${path.resolve(__dirname, 'src/enums')}`,
			public: `${path.resolve(__dirname, 'public')}`,
		},
	},
});
