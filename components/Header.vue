<template>
  <header class="site-header">
    <div class="content-section">
      <nav class="site-header__nav">
        <div class="site-header__logo">
          <img src="~/static/images/logo.svg" alt="Schommel aan Tafel" />
        </div>
        <div class="site-header__cta">
          <a v-if="showBrochureBtn" id="brochure-btn-header" v-scroll-to="'#nieuwsbrief'">download brochure</a>
          <a v-scroll-to="'#contact'" v-if="showContactBtn" class="btn btn-orange">Contact</a>
        </div>
      </nav>
    </div>

    <a
      v-scroll-to="'#welkom'"
      class="site-header__btn-up"
      :class="{ 'site-header__btn-up-active': headerUpButton }"
    >
      <i class="icon icon--arrow-up"></i>
    </a>
  </header>
</template>

<script>
import {throttle} from "lodash";

let prevScrollpos = null;

export default {
  props: {
    showBrochureBtn: {
      type: Boolean,
      default: false
    },
    showContactBtn: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
        headerUpButton: false
    }
  },
  methods: {
    handleScroll: throttle(function() { // Cannot use arrow function here
      if (document.documentElement.scrollTop > 0) {
        this.headerUpButton = true;
      } else {
        this.headerUpButton = false;
      }

      let currentScrollPos = window.pageYOffset;

      if (window.scrollY > 50) {
        if (prevScrollpos > currentScrollPos) {
          document.getElementsByClassName("site-header")[0].classList.add("apple-sticky-active");
        } else {
          document.getElementsByClassName("site-header")[0].classList.remove("apple-sticky-active");
        }

        prevScrollpos = currentScrollPos;
      }
    }, 100),
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll()

    prevScrollpos = window.pageYOffset;
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll)
  }
};
</script>
