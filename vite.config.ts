import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import ESLint from 'vite-plugin-eslint'
import Stylelint from 'vite-plugin-stylelint'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { VolverResolver } from '@volverjs/ui-vue/resolvers/unplugin'
import {
	VueRouterAutoImports,
	getPascalCaseRouteName,
} from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import generateSitemap from 'vite-ssg-sitemap'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
	resolve: {
		alias: {
			'~/': `${path.resolve(__dirname, 'src')}/`,
		},
	},

	plugins: [
		// https://github.com/vitejs/vite-plugin-vue
		Vue({
			include: [/\.vue$/],
		}),

		// https://github.com/gxmari007/vite-plugin-eslint
		ESLint({
			exclude: [
				'**/node_modules/**',
				'**/@volverjs/ui-vue/**',
				'**/volver/ui-vue/**',
			],
		}),

		// https://github.com/ModyQyW/vite-plugin-stylelint
		Stylelint(),

		// https://github.com/posva/unplugin-vue-router
		VueRouter({
			importMode: 'async',
			getRouteName: (routeNode) => getPascalCaseRouteName(routeNode),
		}),

		// https://github.com/antfu/unplugin-vue-components
		Components({
			extensions: ['vue'],
			// allow auto import and register components
			include: [/\.vue$/, /\.vue\?vue/],
			dts: 'src/components.d.ts',
			exclude: [
				/[\\/]ui-vue[\\/]/,
				/[\\/]\.git[\\/]/,
				/[\\/]\.nuxt[\\/]/,
			],
			resolvers: [
				VolverResolver({
					importStyle: 'scss',
					directives: true,
				}),
			],
		}),

		// https://github.com/antfu/unplugin-auto-import
		AutoImport({
			imports: [
				'vue',
				VueRouterAutoImports,
				'vue-i18n',
				'@vueuse/head',
				'@vueuse/core',
				'pinia',
			],
			dts: 'src/auto-imports.d.ts',
			dirs: ['src/composables', 'src/constants'],
			vueTemplate: true,
			eslintrc: {
				enabled: true,
			},
		}),

		// https://github.com/antfu/vite-plugin-pwa
		VitePWA({
			registerType: 'autoUpdate',
			includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
			manifest: {
				name: 'Volver Startup Template',
				short_name: 'Scania',
				theme_color: '#ffffff',
				icons: [
					{
						src: '/pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: '/pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
					{
						src: '/pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable',
					},
				],
			},
		}),
	],

	// https://github.com/antfu/vite-ssg
	ssgOptions: {
		script: 'async',
		formatting: 'minify',
		onFinished() {
			generateSitemap({
				hostname: 'https://alessandrobellesia.github.io',
				outDir: 'dist',
			})
		},
	},

	ssr: {
		noExternal: ['@volverjs/ui-vue'],
	},

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "~/assets/scss/settings" as *;`,
				api: 'modern',
			},
		},
	},
})
