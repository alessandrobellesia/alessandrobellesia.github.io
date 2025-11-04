import { ViteSSG } from 'vite-ssg'
import { routes } from 'vue-router/auto-routes'
import App from '~/App.vue'
import { AppModule } from '~/types'

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
	// the root component
	App,
	// vue-router options
	{
		routes,
		linkActiveClass: 'selected',
		linkExactActiveClass: 'current',
		base: import.meta.env.BASE_URL,
	},
	// function to have custom setups
	({ app, router, head }) => {
		// setup store (auto-imported from pinia)
		const store = createPinia()
		app.use(store)

		Promise.all(
			Object.values(
				import.meta.glob<{ install: AppModule }>('./modules/*.ts', {
					eager: true,
				}),
			).map((i) =>
				Promise.resolve(
					i.install?.({ app, router, routes, head, store }),
				),
			),
		)
	},
)
