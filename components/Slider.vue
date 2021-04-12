<template>
  <div class='slider' :class="{'is-moving': isMoving}">
    <flickity
      :options='fullOptions'
      ref='flickity'
      class='slider'>
      <slot></slot>
    </flickity>
  </div>
</template>

<script>
import merge from 'lodash/merge'

export default {
  computed: {
    fullOptions() {
      let options = this.transferOptions

      if (options.breakpoints) {
        options = Object.entries(options.breakpoints).reduce((acc, [key, value]) => {
          return (window.innerWidth > key)
            ? merge(acc, value)
            : acc
        }, options)
      }

      options = {
        ...options,
        on: {
          ready: () => this.onReady(),
          settle: () => this.onSettle(),
          scroll: () => this.onScroll(),
          resize: () => this.onResize()
        }
      }

      return options
    }
  },
  props: {
    options: {
      type: Object,
      default: () => {
        return {
          prevNextButtons: true,
          pageDots: true,
          wrapAround: true
        }
      }
    }
  },
  data() {
    return {
      transferOptions: { ...this.options },
      isMoving: false,
      isDragable: false,
      asNavFor: null,
      wrapAround: false,
      fade: false,
    }
  },
  methods: {
    onReady() {
      this.isMoving = false
    },
    onSettle() {
      this.isMoving = false
      this.$emit('settle')
    },
    onScroll() {
      this.isMoving = true
    },
    onResize() {
      if (window.width == this.windowWidth) return
      this.transferOptions = { ...this.options }
      this.refresh()
      this.windowWidth = window.width
    },
    refresh() {
      this.flickity.$flickity.destroy()
      this.flickity.init()
    }
  },
  mounted() {
    this.flickity = this.$refs.flickity
    this.refresh()
  }
}
</script>
