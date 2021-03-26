<script>
export default {
  name: 'ExpandTransition',
  functional: true,
  props: {
    duration: {
      type: [Number, Object],
      default: 300,
      validate(value) {
        if (typeof value === 'number') return true
        return ['enter', 'leave'].every((i) => i in value)
      },
    },
  },
  render(createElement, context) {
    const data = {
      ...context.data,
      props: {
        name: 'expand',
        duration: context.props.duration,
      },
      on: {
        ...context.listeners,
        enter(element) {
          const duration =
            context.props.duration.enter || context.props.duration
          element.style.transitionDuration = `${duration}ms`

          const { width } = getComputedStyle(element)
          /* eslint-disable no-param-reassign */
          element.style.width = width
          element.style.position = 'absolute'
          element.style.visibility = 'hidden'
          element.style.height = 'auto'
          /* eslint-enable */
          const { height } = getComputedStyle(element)
          /* eslint-disable no-param-reassign */
          element.style.width = null
          element.style.position = null
          element.style.visibility = null
          element.style.height = 0
          /* eslint-enable */
          // Force repaint to make sure the
          // animation is triggered correctly.
          // eslint-disable-next-line no-unused-expressions
          getComputedStyle(element).height
          requestAnimationFrame(() => {
            // eslint-disable-next-line no-param-reassign
            element.style.height = height
          })
        },
        afterEnter(element) {
          // eslint-disable-next-line no-param-reassign
          element.style.height = 'auto'
        },
        leave(element) {
          const duration =
            context.props.duration.enter || context.props.duration
          element.style.transitionDuration = `${duration}ms`

          const { height } = getComputedStyle(element)
          // eslint-disable-next-line no-param-reassign
          element.style.height = height
          // Force repaint to make sure the
          // animation is triggered correctly.
          // eslint-disable-next-line no-unused-expressions
          getComputedStyle(element).height
          requestAnimationFrame(() => {
            // eslint-disable-next-line no-param-reassign
            element.style.height = 0
          })
        },
      },
    }
    return createElement('transition', data, context.children)
  },
}
</script>

<style scoped>
* {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
  will-change: height;
}
</style>

<style>
.expand-enter-active,
.expand-leave-active {
  overflow: hidden;
  transition: height ease-in-out;
}
.expand-enter,
.expand-leave-to {
  height: 0;
}
</style>
