<template>

  <section class='intro-section'>

    <div class='intro' v-cloak>

    <div class='intro__counter'>
      <div class='intro__counter-pre'>Nog maar</div>
      <!-- <div class='intro__counter-numbers' v-text='days'></div> -->
      <div class='intro__counter-post'>
        <!-- <span v-if='days == 1'>Nachtje</span>
        <span v-else>Nachtjes</span> -->
        slapen
      </div>
    </div>
  </div>
  </section>
</template>
<script>

export default {
  // computed: {
  //   days() {
  //     const eventDate = this.$moment('2021-04-27')
  //     const now = this.$moment().startOf('day')
  //     return eventDate.diff(now, 'days')
  //   }
  // },
  // data() {
  //   return {
  //     animationOptions: { autoplay: true }
  //   }
  // },
  // methods: {
  //   playAnimation() {
  //     setTimeout(() => this.completeIntro(), 1000)
  //   },
  //   completeIntro() {
  //     this.$emit('finished');
  //   }
  // },
  // mounted() {
  //   setTimeout(() => {
  //     setTimeout(() => this.completeIntro(), 3000);
  //     this.$refs.animation.player.play();
  //     this.$refs.animation.player.addEventListener('complete', () => this.completeIntro());
  //   }, 100);
  // }
}
</script>
