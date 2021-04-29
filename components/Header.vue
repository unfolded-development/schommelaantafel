<template>
  <header class="site-header">
    <div class="content-section">
      <nav class="site-header__nav">
        <div class="site-header__logo">
          <img src="~/static/images/logo.svg" alt="" />
        </div>
        <div class="site-header__cta">
          <a v-if="this.$attrs.showBrochureBtn" id="brochure-btn-header" href="#site-download-newsletter" v-scroll-to>download brochure</a>
          <a href="#section-contact" v-scroll-to v-if="this.$attrs.showContactBtn" class="btn btn-orange">Contact</a>
        </div>
      </nav>
    </div>

    <a
      href="#site-intro"
      v-scroll-to
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

      if (window.scrollY > 50) {
        if (prevScrollpos > currentScrollPos && window.scrollY) {
          // document.getElementsByClassName("site-header")[0].style.top = "0rem";
          document.getElementsByClassName("site-header")[0].classList.add("apple-sticky-active");
        } else {
          // document.getElementsByClassName("site-header")[0].style.top = "-5.1rem";
          document.getElementsByClassName("site-header")[0].classList.remove("apple-sticky-active");
        }

        prevScrollpos = currentScrollPos;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll()

    prevScrollpos = window.pageYOffset;
  }
};
</script>
