<template>
  <div>
    <!-- <vue-cookie
      :disableDecline="true"
      type="bar"
      transitionName="slideFromTop"
      position="top"
      elementId="eindhoven-koningsdag-7"
    >
      <template slot="message">
        Koningsdag Eindhoven gebruikt functionele en Analytische cookies voor
        website optimalisatie en statistieken.
        <a class="btn btn-link" href="/privacy" target="_blank">Meer info</a>
      </template>
      <div slot="acceptContent">Ok</div>
    </vue-cookie> -->
    <Nuxt />
    <!-- For license information please see https://koningsdageindhoven.nl/LICENSES -->
  </div>
</template>

<script>
export default {
  methods: {
    measure() {
      document.documentElement.style.setProperty('--vw', window.innerWidth + "px");
      document.documentElement.style.setProperty('--vh', window.innerHeight + "px");
    }
  },
  mounted() {
    this.measure()
    // window.addEventListener('resize', this.measure)
  },
  beforeDestroy() {
    // window.removeEventListener('resize', this.measure)
  },
}
</script>
