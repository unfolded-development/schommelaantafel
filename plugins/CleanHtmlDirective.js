import DOMPurify from 'isomorphic-dompurify'
import Vue from 'vue'

Vue.directive('clean-html', {
  bind: (el, binding) => {
    el.innerHTML = DOMPurify.sanitize(binding.value).replace(
      /<a /g,
      '<a target="_blank" rel="noopener noreferrer nofollow" '
    )
  },
})
