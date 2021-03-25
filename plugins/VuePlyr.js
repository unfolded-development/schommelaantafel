import Vue from 'vue'
import VuePlyr from './vendor/vue-plyr.ssr.js'
import './vendor/vue-plyr.css'

// The second argument is optional and sets the default config values for every player.
Vue.use(VuePlyr, {
  plyr: {},
})
