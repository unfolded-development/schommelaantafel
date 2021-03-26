<template>
  <div class='dropdown-group'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$children.forEach(item => {
        item.$on('input', (value) => {
          if (!value) return
          this.$children
            .filter(i => i != item)
            .forEach(i => i.active = false)
        })
      })
    }, 100)
  }
}
</script>
