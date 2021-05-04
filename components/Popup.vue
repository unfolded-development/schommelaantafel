<template>
  <div class="popup" :class='{ "popup--active": active }' v-if="active">
    <div class="popup__background"></div>
    <div class="popup__wrapper content-section">
      <div class="popup__content content-section__content">
        <h2 class="popup__heading h2">{{ heading }}</h2>

        <p class="popup__description">{{ description }}</p>

        <button @click="$emit('close')" class="popup__close-btn btn">Sluiten</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["active", "heading", "description"],
}
</script>