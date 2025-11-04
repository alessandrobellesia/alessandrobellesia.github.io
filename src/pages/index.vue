<template>
	<div
		class="flex flex-col flex-1 mx-auto px-lg min-w-full bg-surface-1 min-h-full">
		<div class="flex flex-col items-center justify-center py-lg my-auto">
			<a href="https://volverjs.github.io/style" target="_blank">
				<img
					src="/alessandro-bellesia.jpg"
					width="200"
					height="200"
					class="rounded-full border-4 border-white shadow mb-md"
					alt="Alessandro Bellesia" />
			</a>
			<div class="text-center mb-lg">
				<h1 class="vv-text vv-text--size-1 font-bold">
					Alessandro Bellesia
				</h1>
				<h2 class="vv-text vv-text--size-4 text-word-3">
					Lead Developer - CTO
				</h2>
			</div>
			<VvButtonGroup class="no-print mb-md">
				<VvButton
					modifiers="primary rounded"
					target="_blank"
					icon="akar-icons:download"
					download
					href="/alessandro-bellesia_cv_ita.pdf"
					label="Scarica il CV" />
				<VvButton
					modifiers="secondary rounded"
					target="_blank"
					icon="akar-icons:linkedin-fill"
					href="https://www.linkedin.com/in/alessandrobellesia/"
					label="Linkedin" />
			</VvButtonGroup>
			<section class="w-10/12 md:w-6/12 xxl:w-4/12 mx-auto mt-lg">
				<p class="text-balance leading-normal">
					Sono Alessandro, sviluppatore con oltre 16 anni di
					esperienza, appassionato di motociclismo, subacquea e
					open-source. Specializzato in TypeScript, Vue.js e Node.js,
					oggi coordino un gruppo di più di 15 sviluppatori,
					promuovendo eccellenza tecnica, innovazione e crescita
					professionale. Sono autore di
					<em class="italic">Volver.js</em>, una collezione di
					librerie sponsorizzata da 8 Wave, utilizzata e mantenuta
					attivamente da tutto il team.
				</p>
			</section>
			<section class="w-10/12 md:w-6/12 xxl:w-4/12 mx-auto mt-lg">
				<h3
					class="vv-text vv-text--headline vv-text--size-2 block text-center leading-loose">
					Experience
				</h3>
				<ul class="flex flex-col gap-sm">
					<li
						class="leading-relaxed bg-surface rounded-lg p-md border border-surface-4">
						<div class="flex justify-between align-baseline gap-sm">
							<span class="font-bold">8 wave</span>
							<span class="text-smaller text-word-3 text-right">
								Dicembre 2023 - Presente
							</span>
						</div>
						<div class="mb-sm">Chief Technology Officer</div>
						<p class="text-smaller">
							Responsabile tecnico del team di sviluppo software.
							Supervisione dell'architettura applicativa, della
							qualità del codice e delle pratiche di sviluppo.
						</p>
					</li>
					<li
						class="leading-relaxed bg-surface rounded-lg p-md border border-surface-4">
						<div class="flex justify-between align-baseline gap-sm">
							<span class="font-bold">24/Consulting</span>
							<span class="text-smaller text-word-3 text-right">
								Luglio 2017 - Novembre 2023
							</span>
						</div>
						<div class="mb-sm">Lead Front-end Developer</div>
						<p class="text-smaller">
							Guida di un team di 4 sviluppatori front-end.
							Stretta collaborazione con il team di design e di
							back-end. Definizione degli standard di codifica,
							delle pratiche e dei processi di sviluppo.
							Contributo costante all'analisi tecnica e funzionale
							dei progetti.
						</p>
					</li>
					<li
						class="leading-relaxed bg-surface rounded-lg p-md border border-surface-4">
						<div class="flex justify-between align-baseline gap-sm">
							<span class="font-bold">WinTrade</span>
							<span class="text-smaller text-word-3 text-right">
								Marzo 2015 - Giugno 2017
							</span>
						</div>
						<div class="mb-sm">Front-end / App Developer</div>
						<p class="text-smaller">
							Sviluppo front-end di applicazioni web, portali di
							prenotazione alberghiera ed e-commerce. Consulenza e
							sviluppo di app mobile native.
						</p>
					</li>
					<li
						class="leading-relaxed bg-surface rounded-lg p-md border border-surface-4">
						<div class="flex justify-between align-baseline gap-sm">
							<span class="font-bold">IFOA</span>
							<span class="text-smaller text-word-3 text-right">
								Marzo 2011 - Marzo 2015
							</span>
						</div>
						<div class="mb-sm">Docente</div>
						<p class="text-smaller">
							Docente in corsi di formazione professionale per lo
							sviluppo web, mobile ed Adobe Flash.
						</p>
					</li>
					<li
						class="leading-relaxed bg-surface rounded-lg p-md border border-surface-4">
						<div class="flex justify-between align-baseline gap-sm">
							<span class="font-bold">AN-Soft</span>
							<span class="text-smaller text-word-3 text-right">
								Marzo 2011 - Marzo 2015
							</span>
						</div>
						<div class="mb-sm">Full Stack / App Developer</div>
						<p class="text-smaller">
							Programmatore full-stack su piattaforma LAMP.
							Sviluppo di applicativi web, e-commerce ed app
							mobile native.
						</p>
					</li>
					<li
						class="leading-relaxed bg-surface rounded-lg p-md border border-surface-4">
						<div class="flex justify-between align-baseline gap-sm">
							<span class="font-bold">Freelance</span>
							<span class="text-smaller text-word-3 text-right">
								Gennaio 2009 - Marzo 2011
							</span>
						</div>
						<div class="mb-sm">Libero Professionista</div>
						<p class="text-smaller">
							Consulente informatico e designer. Realizzazione di
							siti web e materiale pubblicitario. Progetto
							editoriale Rustiko.it in collaborazione con le
							agenzie immobiliari del territorio.
						</p>
					</li>
				</ul>
			</section>
			<section class="w-10/12 md:w-6/12 xxl:w-4/12 mx-auto mt-lg">
				<h3
					class="vv-text vv-text--headline vv-text--size-2 block text-center leading-loose">
					Education
				</h3>
				<ul class="flex flex-col gap-sm">
					<li
						class="leading-relaxed bg-surface rounded-lg p-md border border-surface-4">
						<div class="flex justify-between align-baseline gap-sm">
							<span class="font-bold"
								>Università degli Studi di Verona</span
							>
							<span class="text-smaller text-word-3 text-right">
								Settembre 2006 - Marzo 2011
							</span>
						</div>
						<div>Laurea in Informatica Multimediale</div>
					</li>
					<li
						class="leading-relaxed bg-surface rounded-lg p-md border border-surface-4">
						<div class="flex justify-between align-baseline gap-sm">
							<span class="font-bold">Liceo Scientifico</span>
							<span class="text-smaller text-word-3 text-right">
								Settembre 2001 - Luglio 2006
							</span>
						</div>
						<div>Diploma di Liceo Scientifico</div>
					</li>
				</ul>
			</section>
			<section class="w-10/12 md:w-6/12 xxl:w-4/12 mx-auto mt-xl">
				<h3
					class="vv-text vv-text--headline vv-text--size-2 block text-center leading-loose">
					Open Source
				</h3>
				<a
					href="https://github.com/volverjs"
					target="_blank"
					class="block bg-surface rounded-xl p-lg border border-surface-4">
					<div class="flex items-start gap-md">
						<img
							src="/volverjs.svg"
							width="80"
							height="80"
							class="flex-shrink-0"
							alt="Volver.js Logo" />
						<div class="flex-1">
							<h4
								class="vv-text vv-text--size-3 font-bold mb-4 flex items-center gap-sm">
								Volver.js
								<span
									class="iconify text-primary"
									data-icon="akar-icons:github-fill"></span>
							</h4>
							<p class="text-smaller mb-sm leading-relaxed">
								Suite di librerie open-source per Vue.js 3 e
								TypeScript, sviluppata per semplificare e
								ottimizzare lo sviluppo di applicazioni moderne.
							</p>
							<ul class="flex flex-wrap gap-xs">
								<li class="vv-badge vv-badge--outline">
									UI Components
								</li>
								<li class="vv-badge vv-badge--outline">
									Forms & Validation
								</li>
								<li class="vv-badge vv-badge--outline">
									Authentication
								</li>
								<li class="vv-badge vv-badge--outline">
									State Management
								</li>
							</ul>
						</div>
					</div>
				</a>
			</section>
			<section class="w-10/12 md:w-6/12 xxl:w-4/12 mx-auto mt-lg">
				<h3
					class="vv-text vv-text--headline vv-text--size-2 block text-center leading-loose">
					Technologies I ♥️
				</h3>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-sm">
					<div
						class="bg-surface rounded-lg p-md border border-surface-4">
						<h4 class="font-bold text-smaller mb-sm text-primary">
							💻 Languages
						</h4>
						<p class="text-tiny leading-relaxed">
							TypeScript • PHP • Python
						</p>
					</div>
					<div
						class="bg-surface rounded-lg p-md border border-surface-4">
						<h4 class="font-bold text-smaller mb-sm text-primary">
							⚡️ Frameworks
						</h4>
						<p class="text-tiny leading-relaxed">
							Vue.js • Fastify • Pinia • Nuxt • Tailwind • React •
							Next.js
						</p>
					</div>
					<div
						class="bg-surface rounded-lg p-md border border-surface-4">
						<h4 class="font-bold text-smaller mb-sm text-primary">
							🎨 DX & Tooling
						</h4>
						<p class="text-tiny leading-relaxed">
							Vite • ESLint • Stylelint • Nx • Storybook
						</p>
					</div>
					<div
						class="bg-surface rounded-lg p-md border border-surface-4">
						<h4 class="font-bold text-smaller mb-sm text-primary">
							✅ Testing & Quality
						</h4>
						<p class="text-tiny leading-relaxed">
							Vitest • Playwright • SonarCloud • CodeRabbit
						</p>
					</div>
					<div
						class="bg-surface rounded-lg p-md border border-surface-4">
						<h4 class="font-bold text-smaller mb-sm text-primary">
							🗄️ Database
						</h4>
						<p class="text-tiny leading-relaxed">
							PostgreSQL • Firebase
						</p>
					</div>
					<div
						class="bg-surface rounded-lg p-md border border-surface-4">
						<h4 class="font-bold text-smaller mb-sm text-primary">
							🛠️ Tools & DevOps
						</h4>
						<p class="text-tiny leading-relaxed">
							Git • Docker • CI/CD • Monorepo
						</p>
					</div>
				</div>
			</section>
		</div>
		<PjFooter />
	</div>
</template>
