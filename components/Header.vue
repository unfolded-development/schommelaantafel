<template>
  <header class="site-header">
    <div class="content-section">
      <nav class="site-header__nav">
        <div class="site-header__logo">
          <img src="~/static/images/logo.svg" alt="" />
        </div>
        <div class="site-header__cta">
          <a v-if="this.$attrs.showBrochureBtn" href="#">download brochure</a>
          <a v-if="this.$attrs.showContactBtn" href="#" class="btn btn-orange">Contact</a>
        </div>
      </nav>
    </div>

    <a
      v-scroll-to="'#site-intro'"
      class="site-header__btn-up"
      :class="{ 'site-header__btn-up-active': headerUpButton == true }"
    >
      <i class="icon icon--arrow-up"></i>
    </a>
  </header>
</template>

<script>
export default {
  props: {
    default: () => {
      return {
        showBrochureBtn,
        showContactBtn
      };
    }
  },
  data() {
    return {
        headerUpButton: false
    }
  },
  methods: {
    handleScroll() {
      if (document.documentElement.scrollTop > 0) {
        this.headerUpButton = true;
      } else {
        this.headerUpButton = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll()
  }
};
</script>
