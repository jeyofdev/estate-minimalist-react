module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb-base',
		'airbnb-typescript/base',
		'airbnb/hooks',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			tsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['./tsconfig.json', './tsconfig.node.json'],
	},
	plugins: ['react', '@typescript-eslint'],
	settings: {
		react: { version: 'detect' },
		'import/resolver': {
			alias: {
				map: [
					['@containers', './src/containers'],
					['@components', './src/components'],
					['@pages', './src/pages'],
					['@hooks', './src/hooks'],
					['@images', './src/assets/images'],
					['@utils', './src/utils'],
					['@context', './src/context'],
					['@enums', './src/enums'],
					['@public', './public'],
				],
				extensions: ['.js', '.ts', '.jsx', '.tsx'],
			},
		},
	},
	rules: {
		'react/react-in-jsx-scope': 0,
		'import/no-extraneous-dependencies': 'off',
	},
};
