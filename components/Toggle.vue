<template>
  <div>
    <slot name="before" v-bind="{ toggle, open, close }"></slot>
    <component
      :is="typeof transition === 'string' ? 'transition' : transition"
      :name="typeof transition === 'string' ? transition : ''"
      :duration="duration"
      @before-enter="$emit('before-enter', $event)"
      @enter="$emit('enter', $event)"
      @after-enter="$emit('after-enter', $event)"
      @enter-cancelled="$emit('enter-cancelled', $event)"
      @before-leave="$emit('before-leave', $event)"
      @leave="$emit('leave', $event)"
      @after-leave="$emit('after-leave', $event)"
      @leave-cancelled="$emit('leave-cancelled', $event)"
    >
      <slot v-bind="{ toggle, open, close }"></slot>
    </component>
    <slot name="after" v-bind="{ toggle, open, close }"></slot>
  </div>
</template>

<script>
export default {
  props: {
    transition: {
      type: [Object, String],
      default: 'transition',
    },
    duration: {
      type: [Number, Object],
      default: 300,
      validate(value) {
        if (typeof value === 'number') return true
        return ['enter', 'leave'].every((i) => i in value)
      },
    },
    cancelOptions: {
      type: Array,
      validator(value) {
        return value.every((i) => ['outside', 'escape'].includes(i))
      },
      default: () => ['escape'],
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      active: this.value,
    }
  },
  watch: {
    value(val) {
      this.active = val
    },
  },
  beforeMount() {
    document.addEventListener('mouseup', this.onClickedOutside)
    document.addEventListener('keyup', this.onKeyPress)
  },
  beforeDestroy() {
    document.removeEventListener('mouseup', this.onClickedOutside)
    document.removeEventListener('keyup', this.onKeyPress)
  },
  methods: {
    toggle() {
      return this.active ? this.close() : this.open()
    },
    open() {
      console.log('open')
      this.active = true
      this.$emit('input', this.active)
      this.$emit('open', this.active)
      return this.active
    },
    close() {
      console.log('close')
      this.active = false
      this.$emit('input', this.active)
      this.$emit('close', this.active)
      return this.active
    },
    onClickedOutside({ path }) {
      if (!this.cancelOptions.includes('outside')) return
      if (path.includes(this.$el)) return
      this.close()
    },
    onKeyPress({ key }) {
      if (!this.cancelOptions.includes('escape')) return
      if (!this.active) return
      if (key === 'Escape' || key === 'Esc') this.close()
    },
  },
}
</script>

<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
