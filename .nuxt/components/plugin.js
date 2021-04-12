import Vue from 'vue'
import { wrapFunctional } from './index'

const components = {
  Dropdown: () => import('../..\\components\\Dropdown.vue' /* webpackChunkName: "components/dropdown" */).then(c => wrapFunctional(c.default || c)),
  DropdownGroup: () => import('../..\\components\\DropdownGroup.vue' /* webpackChunkName: "components/dropdown-group" */).then(c => wrapFunctional(c.default || c)),
  ExpandTransition: () => import('../..\\components\\ExpandTransition.vue' /* webpackChunkName: "components/expand-transition" */).then(c => wrapFunctional(c.default || c)),
  Intro: () => import('../..\\components\\Intro.vue' /* webpackChunkName: "components/intro" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Newsletter: () => import('../..\\components\\Newsletter.vue' /* webpackChunkName: "components/newsletter" */).then(c => wrapFunctional(c.default || c)),
  Referrals: () => import('../..\\components\\Referrals.vue' /* webpackChunkName: "components/referrals" */).then(c => wrapFunctional(c.default || c)),
  Slider: () => import('../..\\components\\Slider.vue' /* webpackChunkName: "components/slider" */).then(c => wrapFunctional(c.default || c)),
  Sliderselector: () => import('../..\\components\\Sliderselector.vue' /* webpackChunkName: "components/sliderselector" */).then(c => wrapFunctional(c.default || c)),
  SocialLinks: () => import('../..\\components\\SocialLinks.vue' /* webpackChunkName: "components/social-links" */).then(c => wrapFunctional(c.default || c)),
  Subjectsliders: () => import('../..\\components\\Subjectsliders.vue' /* webpackChunkName: "components/subjectsliders" */).then(c => wrapFunctional(c.default || c)),
  Toggle: () => import('../..\\components\\Toggle.vue' /* webpackChunkName: "components/toggle" */).then(c => wrapFunctional(c.default || c)),
  VideoSlider: () => import('../..\\components\\VideoSlider.vue' /* webpackChunkName: "components/video-slider" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
