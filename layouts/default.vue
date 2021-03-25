<template comments>
  <div>
    <vue-cookie
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
    </vue-cookie>
    <Nuxt />
    <!-- For license information please see https://koningsdageindhoven.nl/LICENSES -->
  </div>
</template>

<script>
export default {
  mounted() {
    this.$services.interval.start('program/fetch', this.$config.media.refreshRate)
  },
  beforeDestroy() {
    this.$services.interval.stop('program/fetch')
  },
}
</script>
