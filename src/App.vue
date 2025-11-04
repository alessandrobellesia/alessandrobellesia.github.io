<script setup lang="ts">
	import { useHead } from '@unhead/vue'
	import '~/composables/useTheme'

	useHead({
		title: 'Alessandro Bellesia',
		meta: [
			{
				name: 'description',
				content:
					'Sviluppatore con oltre 16 anni di esperienza, appassionato di motociclismo, subacquea e open-source, specializzato in TypeScript, Vue.js e Node.js.',
			},
		],
	})
</script>

<template>
	<RouterView />
</template>
