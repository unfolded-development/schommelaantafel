<template>
  <Toggle
    class="dropdown"
    :class="{'dropdown--active': active}"
    v-model="active"
    :transition="transition">
    <template #before>
      <h3 class='dropdown__title' @click='active = !active'>
        {{ title }}
        <i class='arrow'>↓</i>
      </h3>
    </template>
    <template #default>
      <div class='dropdown__content' v-show='active'>
        <slot></slot>
      </div>
    </template>
  </Toggle>
</template>

<script>
  import ExpandTransition from '~/components/ExpandTransition'

  export default {
    props: {
      value: {
        type: Boolean,
        default: false,
      },
      title: {
        type: String
      }
    },
    data() {
      return {
        active: false,
        transition: ExpandTransition,
      };
    },
    watch: {
      value(val) {
        this.active = val
      },
      active(val) {
        this.$emit('input', val)
      },
    },
  }
</script>
