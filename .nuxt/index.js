import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_78f99300 from 'nuxt_plugin_plugin_78f99300' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_nuxtsvgsprite_20f31281 from 'nuxt_plugin_nuxtsvgsprite_20f31281' // Source: .\\nuxt-svg-sprite.js (mode: 'all')
import nuxt_plugin_workbox_797e8102 from 'nuxt_plugin_workbox_797e8102' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_a6207602 from 'nuxt_plugin_metaplugin_a6207602' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_moment_e6b22256 from 'nuxt_plugin_moment_e6b22256' // Source: .\\moment.js (mode: 'all')
import nuxt_plugin_gtm_11a3bab9 from 'nuxt_plugin_gtm_11a3bab9' // Source: .\\gtm.js (mode: 'all')
import nuxt_plugin_axios_ce94f1ba from 'nuxt_plugin_axios_ce94f1ba' // Source: .\\axios.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    return this.$root.$options.$nuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Koningsdag Eindhoven","htmlAttrs":{"lang":"en"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":""},{"name":"msapplication-TileColor","content":"#ffa803"},{"name":"msapplication-config","content":"\u002Ffavicons\u002Fbrowserconfig.xml"},{"name":"theme-color","content":"#ffffff"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"apple-touch-icon","size":"180x180","href":"\u002Ffavicons\u002Fapple-touch-icon.png"},{"rel":"icon","type":"image\u002Fpng","size":"32x32","href":"\u002Ffavicons\u002Ffavicon-32x32.png"},{"rel":"icon","type":"image\u002Fpng","size":"16x16","href":"\u002Ffavicons\u002Ffavicon-16x16.png"},{"rel":"mask-icon","type":"image\u002Fpng","color":"#ff6e00","href":"\u002Ffavicons\u002Fsafari-pinned-tab.svg"}],"script":[{"src":"https:\u002F\u002Fcdn.jwplayer.com\u002Flibraries\u002F0XbBf8Uu.js"}],"style":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_78f99300 === 'function') {
    await nuxt_plugin_plugin_78f99300(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtsvgsprite_20f31281 === 'function') {
    await nuxt_plugin_nuxtsvgsprite_20f31281(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_797e8102 === 'function') {
    await nuxt_plugin_workbox_797e8102(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_a6207602 === 'function') {
    await nuxt_plugin_metaplugin_a6207602(app.context, inject)
  }

  if (typeof nuxt_plugin_moment_e6b22256 === 'function') {
    await nuxt_plugin_moment_e6b22256(app.context, inject)
  }

  if (typeof nuxt_plugin_gtm_11a3bab9 === 'function') {
    await nuxt_plugin_gtm_11a3bab9(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_ce94f1ba === 'function') {
    await nuxt_plugin_axios_ce94f1ba(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, (err) => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err)
        if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    app,
    router
  }
}

export { createApp, NuxtError }