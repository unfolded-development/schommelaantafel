<template>
  <section class="slider-selector">
    <client-only>
      <nav class="slider-selector__navigation" v-on-screen>
        <ul>
          <li class="slider-selector__nav-item" :class="{ active: activeItem == 0 }"
              v-on:click="updateSubject($event, 0)"><span>Horeca</span></li>
          <li class="slider-selector__nav-item" :class="{ active: activeItem == 1 }"
              v-on:click="updateSubject($event, 1)"><span>Events</span></li>
          <li class="slider-selector__nav-item" :class="{ active: activeItem == 2 }"
              v-on:click="updateSubject($event, 2)"><span>Kantoren</span></li>
          <li class="slider-selector__nav-item" :class="{ active: activeItem == 3 }"
              v-on:click="updateSubject($event, 3)"><span>Educatie</span></li>
        </ul>
      </nav>

      <Subjectsliders :sliderSubject="subjectSlug" v-on-screen/>
    </client-only>
  </section>
</template>

<script>
import Subjectslider from './Subjectsliders.vue'

export default {
  components: {Subjectslider},
  data() {
    return {
      subjectSlug: "horeca",
      activeItem: 0
    }
  },
  methods: {
    updateSubject: function (elem, id) {
      this.subjectSlug = elem.target.innerHTML.toLowerCase();
      this.activeItem = id;
    }
  }
}
</script>

<style>

</style>