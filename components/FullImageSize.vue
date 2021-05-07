<template>
  <section class="image-full-size" >
    <div class="image-full-size__clip">
      <div class="image-full-size__image" style="background-image: url('/images/full-size-image.jpg');" :style="style">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    speed: {
      type: Number,
      default: .25
    }
  },
  data() {
    return {
      position: 0
    }
  },
  computed: {
    style() {
      let size = 'cover'

      if(this.$el) {

        const imageRatio = 1634 / 1365
        const containerRatio = this.$el.clientHeight / this.$el.clientWidth

        size = imageRatio < containerRatio
            ? 'auto ' + (this.$el.clientHeight * 1.25) + 'px'
            : (this.$el.clientWidth) + 'px auto'
      }

      return {
        'background-size': size,
        'background-position-y': this.position + 'px'
      }
    }
  },
  methods: {
    scrollHandle: function () {
      const screenHeight = window.innerHeight;

      const start = this.$el.offsetTop + (this.$el.clientHeight / 2) - screenHeight;
      const end = this.$el.offsetTop + (this.$el.clientHeight / 2);
      const height = end - start;

      const relativePosition = ((window.scrollY - start) / height)

      let speed = CSS?.supports('background-attachment', 'none') ? .1 : .1

      this.position = relativePosition * -(screenHeight * speed)

      // if (window.scrollY + (window.innerHeight / 3 * 2) > document.body.getElementsByClassName("cta")[0].offsetTop) {
      //   document.getElementsByClassName("cta")[0].classList.add("cta--show");
      // }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHandle)
    window.addEventListener('resize', this.scrollHandle)
    this.scrollHandle()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollHandle)
    window.removeEventListener('resize', this.scrollHandle)
  }
}
</script>