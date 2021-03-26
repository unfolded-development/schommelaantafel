<template>
  <Slider
    :option="{ wrapAround: true, prevNextButtons: false, pageDots: true }"
    ref="slider"
    :class="{ 'slider--dragging': dragging }"
  >
    <div class="slider__slide">
      <vue-plyr ref="plyr1" :options="playerOptions">
        <div
          data-plyr-provider="youtube"
          data-plyr-embed-id="tT7n-K0suAA"
        ></div>
      </vue-plyr>
    </div>
    <div class="slider__slide" @click="clickGate">
      <vue-plyr ref="plyr2" :options="playerOptions">
        <div
          data-plyr-provider="youtube"
          data-plyr-embed-id="I1j8X9la6SI"
        ></div>
      </vue-plyr>
    </div>
    <div class="slider__slide" @click="clickGate">
      <vue-plyr ref="plyr3" :options="playerOptions">
        <div
          data-plyr-provider="youtube"
          data-plyr-embed-id="I-4XSXjjxBc"
        ></div>
      </vue-plyr>
    </div>
  </Slider>
</template>

<script>
export default {
  data() {
    return {
      dragging: false,
      playerOptions: {
        youtube: {
          noCookie: true,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          modestbranding: 1,
        },
        controls: [
          "play-large",
          "play",
          "progress",
          "current-time",
          "mute",
          "volume",
          "pip",
          "airplay",
          "fullscreen",
        ],
      },
    };
  },
  methods: {
    init() {
      this.$refs.slider.flickity.on("dragEnd", () => {
        setTimeout(() => {
          this.dragging = false;
        }, 100);
      });
      this.$refs.slider.flickity.on("dragStart", () => {
        this.pausePlayers();
        this.dragging = true;
      });
      this.$refs.slider.flickity.on("change", () => {
        this.pausePlayers();
      });
    },
    pausePlayers() {
      this.$refs.plyr1.player.pause();
      this.$refs.plyr2.player.pause();
      this.$refs.plyr3.player.pause();
    },
    clickGate(e) {
      if (this.dragging) e.preventDefault();
    },
  },
  mounted() {
    setTimeout(this.init, 100);
  },
};
</script>
