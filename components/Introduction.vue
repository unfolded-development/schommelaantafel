<template>
  <section class="intro" id="site-intro">
    <a v-scroll-to="'#site-about'" class="intro__btn-down">
      <i class="icon icon--arrow-down"></i>
    </a>

    <div class="content-section">
      <div class="intro__content">
        <h1 class="intro__heading hide">It’s better when you move.</h1>
      </div>
    </div>

    <svg viewBox="0 0 100 100" id="backgroundImageMaskOverlay">
      <g mask="url(#acutalMaskForIntro)" width="100%" height="100%" x="0" y="0">
        <rect width="100%" height="100%" x="0" y="0" fill="white" />
        <svg
          class="intro__schommelLogo"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          :width="schommelLogo.width"
          :x="schommelLogo.x"
          y="-2.5%"
          viewBox="0 0 145 50.001"
        >
          <defs>
            <clipPath id="clip-path">
              <path
                id="Clip_2"
                data-name="Clip 2"
                d="M0,0H11.819V19.685H0Z"
                transform="translate(0 0.08)"
                fill="none"
              />
            </clipPath>
          </defs>
          <g id="Group_34" data-name="Group 34" transform="translate(0 0)">
            <g id="Group_3" data-name="Group 3" transform="translate(0 8)">
              <path
                id="Clip_2-2"
                data-name="Clip 2"
                d="M0,0H11.819V19.685H0Z"
                transform="translate(0 0.08)"
                fill="none"
              />
              <g id="Group_3-2" data-name="Group 3" clip-path="url(#clip-path)">
                <path
                  id="Fill_1"
                  data-name="Fill 1"
                  d="M5.6,7.32c.866.384,1.732.713,2.73,1.179a5.4,5.4,0,0,1,3.49,5.291,5.606,5.606,0,0,1-5.984,5.894c-4.8,0-5.957-3.262-5.825-6.2H3.474c-.027,1.535.577,2.906,2.361,2.906A2.06,2.06,0,0,0,8.065,14.2c0-1.261-.76-1.919-1.942-2.44-1.023-.493-2.1-.822-3.149-1.453a5.3,5.3,0,0,1-2.7-4.962A5.176,5.176,0,0,1,5.835,0c4.094,0,5.537,2.577,5.406,5.675H7.882c0-1.4-.708-2.413-2.047-2.413A1.8,1.8,0,0,0,3.893,5.154c0,.987.525,1.645,1.705,2.166"
                  transform="translate(0 0.08)"
                  fill="#ff6047"
                />
              </g>
            </g>
            <path
              id="Fill_4"
              data-name="Fill 4"
              d="M16,16.592A8.715,8.715,0,0,1,9.811,19C3.784,19,0,14.925,0,9.527A9.284,9.284,0,0,1,9.73,0a9.183,9.183,0,0,1,6.216,2.143L13.73,4.9A6.148,6.148,0,0,0,9.757,3.413C6.136,3.413,3.946,6.06,3.946,9.5a5.728,5.728,0,0,0,5.865,6.06,6.115,6.115,0,0,0,4-1.535Z"
              transform="translate(14 8)"
              fill="#ff6047"
            />
            <path
              id="Fill_6"
              data-name="Fill 6"
              d="M15,19H11.237V11.065H3.763V19H0V0H3.763V7.441h7.473V0H15Z"
              transform="translate(33 8)"
              fill="#ff6047"
            />
            <path
              class="animate-letter"
              :transform="letterOTransform"
              id="Fill_8"
              data-name="Fill 8"
              d="M9.5,19a9.4,9.4,0,0,1-6.927-2.7A9.58,9.58,0,0,1,0,9.527,9.627,9.627,0,0,1,2.632,2.739,9.352,9.352,0,0,1,9.421,0C15.061,0,19,3.9,19,9.473a9.63,9.63,0,0,1-2.6,6.778A9.345,9.345,0,0,1,9.5,19ZM9.474,3.414c-3.362,0-5.621,2.446-5.621,6.086,0,3.568,2.322,6.061,5.648,6.061,3.378,0,5.648-2.436,5.648-6.061C15.148,5.916,12.815,3.414,9.474,3.414Z"
              fill="#ff6047"
            />
            <path
              id="Fill_10"
              data-name="Fill 10"
              d="M12.221,19h-3.6L3.469,4.8V19H0V0H5.609l4.958,14.03L15.526,0H21V19H17.369V4.8Z"
              transform="translate(74 8)"
              fill="#ff6047"
            />
            <path
              id="Fill_12"
              data-name="Fill 12"
              d="M12.22,19h-3.6L3.468,4.8V19H0V0H5.609l4.959,14.03L15.527,0H21V19H17.369V4.8Z"
              transform="translate(99 8)"
              fill="#ff6047"
            />
            <path
              id="Fill_14"
              data-name="Fill 14"
              d="M0,19V0H8.915V3.569H3.909V7.523H8.775v3.515H3.909v4.393H9V19Z"
              transform="translate(124 8)"
              fill="#ff6047"
            />
            <path
              id="Fill_16"
              data-name="Fill 16"
              d="M0,0V19H8V15.431H3.541V0Z"
              transform="translate(137 8)"
              fill="#ff6047"
            />
            <path
              id="Fill_18"
              data-name="Fill 18"
              d="M3.747,19H0L6.839,0h3.994L18,19H13.979l-1.887-5.216H5.608L3.748,19ZM8.836,4.832,6.784,10.543h4.131L8.836,4.832Z"
              transform="translate(8 31)"
              fill="#ff6047"
            />
            <path
              id="Fill_20"
              data-name="Fill 20"
              d="M3.747,19H0L6.839,0h3.993L18,19H13.979l-1.887-5.216H5.608L3.748,19ZM8.835,4.832,6.784,10.543h4.131Z"
              transform="translate(27 31)"
              fill="#ff6047"
            />
            <path
              id="Fill_22"
              data-name="Fill 22"
              d="M12.25,0V12.74L4,0H0V19H3.751V6.48L12.167,19H16V0Z"
              transform="translate(47 31)"
              fill="#ff6047"
            />
            <path
              id="Fill_24"
              data-name="Fill 24"
              d="M0,0V3.569H3.545V19H7.455V3.569H11V0Z"
              transform="translate(72 31)"
              fill="#ff6047"
            />
            <path
              id="Fill_26"
              data-name="Fill 26"
              d="M3.747,19H0L6.839,0h3.993L18,19H13.979l-1.887-5.216H5.608L3.748,19ZM8.835,4.832,6.784,10.543h4.131Z"
              transform="translate(83 31)"
              fill="#ff6047"
            />
            <path
              id="Fill_28"
              data-name="Fill 28"
              d="M0,0V19H3.909V11.038h4.95V7.523H3.909V3.569H9V0Z"
              transform="translate(103 31)"
              fill="#ff6047"
            />
            <path
              id="Fill_30"
              data-name="Fill 30"
              d="M0,0V19H9V15.431H3.909V11.038H8.775V7.523H3.909V3.569H8.915V0Z"
              transform="translate(115 31)"
              fill="#ff6047"
            />
            <path
              id="Fill_32"
              data-name="Fill 32"
              d="M0,0V19H8V15.431H3.541V0Z"
              transform="translate(128 31)"
              fill="#ff6047"
            />
          </g>
        </svg>
      </g>

      <rect mask="url(#InvertMaskForIntro)" width="100%" height="100%" x="0" y="0" fill="#000000" style="opacity: .2;" />

      <mask id="acutalMaskForIntro" preserveAspectRatio="slice">
        <rect width="100%" height="100%" x="0" y="0" fill="white" />
        <rect
          class="intro__animation-block-item --1"
          width="97.5%"
          height="55%"
          x="-3.25%"
          y="1%"
          fill="black"
        />
        <rect
          class="intro__animation-block-item --2"
          width="115%"
          height="45%"
          x="0%"
          y="45%"
          fill="black"
        />
      </mask>

      <mask id="InvertMaskForIntro" preserveAspectRatio="slice">
        <rect width="100%" height="100%" x="0" y="0" fill="black" />
        <rect
          class="intro__animation-block-item --1"
          width="97.5%"
          height="55%"
          x="-3.25%"
          y="1%"
          fill="white"
        />
        <rect
          class="intro__animation-block-item --2"
          width="115%"
          height="45%"
          x="0%"
          y="45%"
          fill="white"
        />
      </mask>
    </svg>
  </section>
</template>

<script>
export default {
  data() {
    return {
      letterOTransform: "translate(51, 8)",
      schommelLogo: {
        width: "60%",
        x: "20%",
      },
    };
  },
  methods: {
    svgIntroResize: function (e) {
      let offsetBlockWidth = String(document.getElementById("backgroundImageMaskOverlay").clientWidth);
      let offsetBlockHeight = String(document.getElementById("backgroundImageMaskOverlay").clientHeight);

      document
        .getElementById("backgroundImageMaskOverlay")
        .setAttribute(
          "viewBox",
          0 + " " + 0 + " " + offsetBlockWidth + " " + offsetBlockHeight
        );

      document.getElementById("backgroundImageMaskOverlay").style.opacity = 1;
    }
  },
  mounted() {
    window.scrollTo(0, 0);

    this.svgIntroResize();

    if (window.innerWidth > 1024) {
      this.schommelLogo.width = "25%";
      this.schommelLogo.x = "37.5%";
    }

    setTimeout(() => {
      this.letterOTransform = "translate(51, 0)";
      window.addEventListener("resize", this.svgIntroResize);
    }, 500);

    setTimeout(() => {
      document.getElementsByClassName("intro__schommelLogo")[0].classList.add("hide");
    }, 1750);

    setTimeout(() => {
      document.getElementsByClassName("intro__animation-block-item")[0].classList.add("intro__animation-block-item--load");
      document.getElementsByClassName("intro__animation-block-item")[1].classList.add("intro__animation-block-item--load");
      document.getElementsByClassName("intro__animation-block-item")[2].classList.add("intro__animation-block-item--load");
      document.getElementsByClassName("intro__animation-block-item")[3].classList.add("intro__animation-block-item--load");

      setTimeout(() => {
        document.getElementsByClassName("site-header")[0].classList.add("apple-sticky-active");
        document.getElementById("backgroundImageMaskOverlay").classList.add("loaded");

        document.body.style.overflowY = "auto";
        document.getElementById("site-about").style.marginTop = "-25vh";
        document.getElementById("cookieBar").classList.add("active");

        document.getElementsByClassName("intro__heading")[0].classList.remove("hide");
      }, 2500);
    }, 1250);
  },
};
</script>
