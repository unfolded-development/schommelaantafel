export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Koningsdag Eindhoven',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [{
				charset: 'utf-8'
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: ''
			},
			{
				name: 'msapplication-TileColor',
				content: '#ffa803'
			},
			{
				name: 'msapplication-config',
				content: '/favicons/browserconfig.xml'
			},
			{
				name: 'theme-color',
				content: '#ffffff'
			},
		],
		link: [{
				rel: 'icon',
				type: 'image/x-icon',
				href: '/favicon.ico'
			},
			{
				rel: 'apple-touch-icon',
				size: '180x180',
				href: '/favicons/apple-touch-icon.png',
			},
			{
				rel: 'icon',
				type: 'image/png',
				size: '32x32',
				href: '/favicons/favicon-32x32.png',
			},
			{
				rel: 'icon',
				type: 'image/png',
				size: '16x16',
				href: '/favicons/favicon-16x16.png',
			},
			{
				rel: 'mask-icon',
				type: 'image/png',
				color: '#ff6e00',
				href: '/favicons/safari-pinned-tab.svg',
			},
		],
		script: [{
			// src: process.env.JWPLAYER_PLAYER_LIBRARY_URL ||
			// 	'https://cdn.jwplayer.com/libraries/0XbBf8Uu.js',
		}, ],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['~/assets/scss/styles.scss'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		// {
		// 	src: '~/plugins/CleanHtmlDirective.js',
		// 	ssr: true
		// },
		// {
		// 	src: '~/plugins/ServiceContainer.js',
		// 	ssr: true
		// },
		// {
		// 	src: '~/plugins/VueFlickity.js',
		// 	ssr: false
		// },
		// {
		// 	src: '~/plugins/VuePlyr.js',
		// 	ssr: false
		// },
		// {
		// 	src: '~/plugins/VueLottiePlayer.js',
		// 	ssr: false
		// },
		// {
		// 	src: '~/plugins/VueCookie.js',
		// 	ssr: true
		// },
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@nuxtjs/axios',
		'@nuxtjs/gtm',
		'@nuxtjs/moment',
		'@nuxtjs/pwa',
		'@nuxtjs/svg-sprite',
		'nuxt-fontagon',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [],

	iconFont: {
		files: ['assets/icons/*.svg'],
		dist: 'assets/icons/generated',
		fontName: 'Icons',
		style: 'scss',
		styleTemplate: {
			scss: 'assets/icons/template/scss.hbs',
		},
	},

	moment: {
		timezone: true,
		defaultTimezone: 'Europe/Amsterdam',
	},

	pwa: {
		meta: {
			name: 'Koningsdag Eindhoven',
			author: 'Gemeente Eindhoven',
			description: 'De Koning komt KennisMaken met Eindhoven. Doe dat ook! Eindhoven, stad van Kennis, stad van het Maken.',
			theme_color: '#FF6E00',
			lang: 'nl',
			ogHost: 'https://koningsdageindhoven.nl',
		},
		manifest: {
			name: 'Koningsdag Eindhoven',
			short_name: 'Koningsdag Eindhoven',
			icons: [{
					src: '/favicons/android-chrome-192x192.png',
					sizes: '192x192',
					type: 'image/png',
				},
				{
					src: '/favicons/android-chrome-512x512.png',
					sizes: '512x512',
					type: 'image/png',
				},
			],
			theme_color: '#ffffff',
			background_color: '#ffffff',
			display: 'standalone',
		},
		icon: false,
	},

	render: {
		bundleRenderer: {
			shouldPreload: (file, type) => {
				return ['font'].includes(type)
			},
		},
	},

	gtm: {
		id: 'GTM-M78QBR3', // Live id
	},

	publicRuntimeConfig: {
		media: {
			apiUri: process.env.MEDIA_API_URI || '/api/media',
			refreshRate: process.env.MEDIA_REFRESH_RATE || 60000,
		},
		hash: 'ddfruvagyhjiux33oxmu',
	},

	axios: {
		baseURL: '/',
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
}