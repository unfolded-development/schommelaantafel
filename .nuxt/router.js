import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _32f880bc = () => interopDefault(import('../node_modules/@nuxtjs/svg-sprite/lib/pages/icons-list.vue' /* webpackChunkName: "" */))
const _99cd19a6 = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _045235f4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _28b1d401 = () => interopDefault(import('../pages/_.vue' /* webpackChunkName: "pages/_" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/_icons",
    component: _32f880bc,
    name: "icons-list"
  }, {
    path: "/home",
    component: _99cd19a6,
    name: "home"
  }, {
    path: "/",
    component: _045235f4,
    name: "index"
  }, {
    path: "/*",
    component: _28b1d401,
    name: "all"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
