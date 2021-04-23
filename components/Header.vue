<template>
  <header class="site-header">
    <div class="content-section">
      <nav class="site-header__nav">
        <div class="site-header__logo">
          <img src="~/static/images/logo.svg" alt="" />
        </div>
        <div class="site-header__cta">
          <a v-if="this.$attrs.showBrochureBtn" href="#">download brochure</a>
          <a v-scroll-to="'#section-contact'" v-if="this.$attrs.showContactBtn" class="btn btn-orange">Contact</a>
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
let prevScrollpos = null;

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

      var currentScrollPos = window.pageYOffset;

      // if (prevScrollpos > currentScrollPos) {
      //   document.getElementsByClassName("site-header")[0].style.top = "0rem";
      // } else {
      //   document.getElementsByClassName("site-header")[0].style.top = "-5rem";
      // }

      prevScrollpos = currentScrollPos;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll()

    prevScrollpos = window.pageYOffset;
  }
};
</script>
