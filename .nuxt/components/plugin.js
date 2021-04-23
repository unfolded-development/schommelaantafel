import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  FullImageSize: () => import('../..\\components\\FullImageSize.vue' /* webpackChunkName: "components/full-image-size" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  Introduction: () => import('../..\\components\\Introduction.vue' /* webpackChunkName: "components/introduction" */).then(c => wrapFunctional(c.default || c)),
  IntroLoader: () => import('../..\\components\\IntroLoader.vue' /* webpackChunkName: "components/intro-loader" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Newsletter: () => import('../..\\components\\Newsletter.vue' /* webpackChunkName: "components/newsletter" */).then(c => wrapFunctional(c.default || c)),
  Referrals: () => import('../..\\components\\Referrals.vue' /* webpackChunkName: "components/referrals" */).then(c => wrapFunctional(c.default || c)),
  Slider: () => import('../..\\components\\Slider.vue' /* webpackChunkName: "components/slider" */).then(c => wrapFunctional(c.default || c)),
  Sliderselector: () => import('../..\\components\\Sliderselector.vue' /* webpackChunkName: "components/sliderselector" */).then(c => wrapFunctional(c.default || c)),
  SocialLinks: () => import('../..\\components\\SocialLinks.vue' /* webpackChunkName: "components/social-links" */).then(c => wrapFunctional(c.default || c)),
  Subjectsliders: () => import('../..\\components\\Subjectsliders.vue' /* webpackChunkName: "components/subjectsliders" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
