import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import autoImports from './.eslintrc-auto-import.json' with { type: 'json' }

export default [
	{
		ignores: [
			'**/dist/*',
			'**/node_modules/**',
			'**/@volverjs/**',
			'**/volver/**',
			'**/*.cjs',
			'**/*.mjs',
			'**/*.json',
			'**/*.svg',
			'**/*.hbs',
			'**/*.d.ts',
			'**/*?raw',
			'.vite-ssg-temp/**',
		],
	},
	pluginJs.configs.recommended,
	...pluginVue.configs['flat/recommended'],
	...vueTsEslintConfig(),
	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		rules: {
			'no-console': 'warn',
			'no-debugger': 'warn',
			'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
			'vue/multi-word-component-names': 'off',
			'vue/no-deprecated-slot-attribute': 'off',
			'vue/no-v-html': 'off',
			'no-unused-vars': 'off',
			'sort-imports': 'off',
			// for shims Window interface
			'@typescript-eslint/no-empty-interface': 'off',
			// enable _ for unused vars
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					args: 'all',
					argsIgnorePattern: '^_',
					caughtErrors: 'all',
					caughtErrorsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					ignoreRestSiblings: true,
				},
			],
		},
	},
	{
		files: ['src/**/*'],
		languageOptions: autoImports,
	},
	eslintPluginPrettierRecommended,
]
