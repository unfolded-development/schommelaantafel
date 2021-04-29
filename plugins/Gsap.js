import Vue from 'vue'
import {gsap} from 'gsap'

Vue.directive('gsap', (el, binding) => {
  const options = {...binding.value}
  const modifiers = binding.modifiers

  if (modifiers.set) {
    gsap.set(el, options)
  }

  if (modifiers.to) {
    gsap.to(el, options)
  }

  if (modifiers.from) {
    gsap.from(el, options)
  }

  if (modifiers.fromTo) {
    gsap.fromTo(el, {...binding.value[0]}, {...binding.value[1]})
  }
})

Vue.prototype.$gsap = gsap
Vue.prototype.$gsapPlugins = {}
Vue.prototype.$gsapEases = {}

if (process.client) {
  const eases = require('gsap/EasePack')
  Vue.prototype.$gsapPlugins.ScrollToPlugin = require('gsap/ScrollToPlugin').ScrollToPlugin
  Vue.prototype.$gsapPlugins.ScrollTrigger = require('gsap/ScrollTrigger').ScrollTrigger
  // Vue.prototype.$gsapPlugins.PhysicsPropsPlugin = require('gsap/PhysicsPropsPlugin').PhysicsPropsPlugin
  Vue.prototype.$gsapEases.ExpoScaleEase = eases.ExpoScaleEase

  gsap.registerPlugin(
    ...[
      ...Object.values(Vue.prototype.$gsapPlugins),
      ...Object.values(Vue.prototype.$gsapEases),
    ]
  )

  Vue.directive('on-screen', {
    inserted(element) {
      element.classList.add('v-on-screen');
      element.scrollTrigger = Vue.prototype.$gsapPlugins.ScrollTrigger.create({
        trigger: element,
        onEnter: () => {
          element.classList.add('v-on-screen__active')
        },
        onLeaveBack: () => {
          element.classList.remove('v-on-screen__active')
        }
      })
    },
    unbind(element) {
      element.scrollTrigger.kill(true);
    }
  })

}

