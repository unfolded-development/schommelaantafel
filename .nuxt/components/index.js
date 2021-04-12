export { default as Dropdown } from '../..\\components\\Dropdown.vue'
export { default as DropdownGroup } from '../..\\components\\DropdownGroup.vue'
export { default as ExpandTransition } from '../..\\components\\ExpandTransition.vue'
export { default as Intro } from '../..\\components\\Intro.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Newsletter } from '../..\\components\\Newsletter.vue'
export { default as Referrals } from '../..\\components\\Referrals.vue'
export { default as Slider } from '../..\\components\\Slider.vue'
export { default as Sliderselector } from '../..\\components\\Sliderselector.vue'
export { default as SocialLinks } from '../..\\components\\SocialLinks.vue'
export { default as Subjectsliders } from '../..\\components\\Subjectsliders.vue'
export { default as Toggle } from '../..\\components\\Toggle.vue'
export { default as VideoSlider } from '../..\\components\\VideoSlider.vue'

export const LazyDropdown = import('../..\\components\\Dropdown.vue' /* webpackChunkName: "components/dropdown" */).then(c => wrapFunctional(c.default || c))
export const LazyDropdownGroup = import('../..\\components\\DropdownGroup.vue' /* webpackChunkName: "components/dropdown-group" */).then(c => wrapFunctional(c.default || c))
export const LazyExpandTransition = import('../..\\components\\ExpandTransition.vue' /* webpackChunkName: "components/expand-transition" */).then(c => wrapFunctional(c.default || c))
export const LazyIntro = import('../..\\components\\Intro.vue' /* webpackChunkName: "components/intro" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyNewsletter = import('../..\\components\\Newsletter.vue' /* webpackChunkName: "components/newsletter" */).then(c => wrapFunctional(c.default || c))
export const LazyReferrals = import('../..\\components\\Referrals.vue' /* webpackChunkName: "components/referrals" */).then(c => wrapFunctional(c.default || c))
export const LazySlider = import('../..\\components\\Slider.vue' /* webpackChunkName: "components/slider" */).then(c => wrapFunctional(c.default || c))
export const LazySliderselector = import('../..\\components\\Sliderselector.vue' /* webpackChunkName: "components/sliderselector" */).then(c => wrapFunctional(c.default || c))
export const LazySocialLinks = import('../..\\components\\SocialLinks.vue' /* webpackChunkName: "components/social-links" */).then(c => wrapFunctional(c.default || c))
export const LazySubjectsliders = import('../..\\components\\Subjectsliders.vue' /* webpackChunkName: "components/subjectsliders" */).then(c => wrapFunctional(c.default || c))
export const LazyToggle = import('../..\\components\\Toggle.vue' /* webpackChunkName: "components/toggle" */).then(c => wrapFunctional(c.default || c))
export const LazyVideoSlider = import('../..\\components\\VideoSlider.vue' /* webpackChunkName: "components/video-slider" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
export function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
