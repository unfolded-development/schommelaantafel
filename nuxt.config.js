export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  server: {
    host: '0.0.0.0'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Schommel aan Tafel',
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
    link: [
      // {
      // 	rel: 'icon',
      // 	type: 'image/x-icon',
      // 	href: '/favicon.ico'
      // },
      // {
      // 	rel: 'apple-touch-icon',
      // 	size: '180x180',
      // 	href: '/favicons/apple-touch-icon.png',
      // },
      // {
      // 	rel: 'icon',
      // 	type: 'image/png',
      // 	size: '32x32',
      // 	href: '/favicons/favicon-32x32.png',
      // },
      // {
      // 	rel: 'icon',
      // 	type: 'image/png',
      // 	size: '16x16',
      // 	href: '/favicons/favicon-16x16.png',
      // },
      // {
      // 	rel: 'mask-icon',
      // 	type: 'image/png',
      // 	color: '#ff6e00',
      // 	href: '/favicons/safari-pinned-tab.svg',
      // },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/styles.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/Gsap.js',
      ssr: true
    },
    {
      src: '~/plugins/VueFlickity.js',
      ssr: false
    },
    {
      src: '~/plugins/VueCookie.js',
      ssr: false
    },
		{
			src: '~/plugins/VueScrollTo.js',
			ssr: false
		}
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
  modules: [
    '@nuxtjs/axios',
    ['nuxt-mail', {
      message: {
        to: 'info@schommelaantafel.nl',
      },
      smtp: {
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "537b5bfcdc7362",
          pass: "0d0dc79b12255e"
        }
      },
    }],
  ],

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
      name: 'Schommel aan Tafel',
      author: 'Schommel aan Tafel',
      description: 'Met Schommel aan Tafel trek je de aandacht en creéer je een Plek waar mensen samen komen.',
      theme_color: '#FF6E00',
      lang: 'nl',
      // ogHost: 'https://koningsdageindhoven.nl',
    },
    manifest: {
      name: 'Schommel aan Tafel',
      short_name: 'Schommel aan Tafel',
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
    id: 'GTM-KCBFCXX', // Live id
  },

  publicRuntimeConfig: {},

  axios: {
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}