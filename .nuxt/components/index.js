import { wrapFunctional } from './utils'

export { default as ContactForm } from '../..\\components\\ContactForm.vue'
export { default as CtaSection } from '../..\\components\\CtaSection.vue'
export { default as FullImageSize } from '../..\\components\\FullImageSize.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as Introduction } from '../..\\components\\Introduction.vue'
export { default as IntroLoader } from '../..\\components\\IntroLoader.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Newsletter } from '../..\\components\\Newsletter.vue'
export { default as Referrals } from '../..\\components\\Referrals.vue'
export { default as Slider } from '../..\\components\\Slider.vue'
export { default as Sliderselector } from '../..\\components\\Sliderselector.vue'
export { default as SocialLinks } from '../..\\components\\SocialLinks.vue'
export { default as Subjectsliders } from '../..\\components\\Subjectsliders.vue'

export const LazyContactForm = import('../..\\components\\ContactForm.vue' /* webpackChunkName: "components/contact-form" */).then(c => wrapFunctional(c.default || c))
export const LazyCtaSection = import('../..\\components\\CtaSection.vue' /* webpackChunkName: "components/cta-section" */).then(c => wrapFunctional(c.default || c))
export const LazyFullImageSize = import('../..\\components\\FullImageSize.vue' /* webpackChunkName: "components/full-image-size" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyIntroduction = import('../..\\components\\Introduction.vue' /* webpackChunkName: "components/introduction" */).then(c => wrapFunctional(c.default || c))
export const LazyIntroLoader = import('../..\\components\\IntroLoader.vue' /* webpackChunkName: "components/intro-loader" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyNewsletter = import('../..\\components\\Newsletter.vue' /* webpackChunkName: "components/newsletter" */).then(c => wrapFunctional(c.default || c))
export const LazyReferrals = import('../..\\components\\Referrals.vue' /* webpackChunkName: "components/referrals" */).then(c => wrapFunctional(c.default || c))
export const LazySlider = import('../..\\components\\Slider.vue' /* webpackChunkName: "components/slider" */).then(c => wrapFunctional(c.default || c))
export const LazySliderselector = import('../..\\components\\Sliderselector.vue' /* webpackChunkName: "components/sliderselector" */).then(c => wrapFunctional(c.default || c))
export const LazySocialLinks = import('../..\\components\\SocialLinks.vue' /* webpackChunkName: "components/social-links" */).then(c => wrapFunctional(c.default || c))
export const LazySubjectsliders = import('../..\\components\\Subjectsliders.vue' /* webpackChunkName: "components/subjectsliders" */).then(c => wrapFunctional(c.default || c))
