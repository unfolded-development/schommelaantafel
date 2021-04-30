<template>
  <div class="slider-selector__main">
    <Slider ref="mainslider" class="slider-selector__image-slider"
            :options="{ prevNextButtons: false, pageDots: false, wrapAround: true }" style="grid-column: span 8;">
      <div class="slider__slide slider-selector__wrapper" v-for="imageVarient in setSubject" :key="imageVarient.name">
        <div class="slider-selector__image">
          <img :src="imageVarient.image" :alt="imageVarient.title + '-image'">
        </div>
      </div>
    </Slider>


    <div class="slider__slide slider-selector__wrapper content-wrap">

      <div class="slider-selector__content">
        <div class="slider-selector__controls">
          <!-- <i class="icon icon--arrow-left"></i>
          <i class="icon icon--arrow-right"></i> -->
        </div>

        <Slider v-if="loaded" ref="contentSlider" class="slider-selector__content-slider"
                :options="{ prevNextButtons: true, pageDots: false, fade: true, sync:'.slider-selector__image-slider .slider', wrapAround: true }">
          <div v-for="contentVarient in setSubject" :key="contentVarient.name" class="slider-selector__content-slide">
            <span class="slider-selector__label">{{ contentVarient.title }}</span>
            <p class="slider-selector__text">{{ contentVarient.desc }}</p>
          </div>
        </Slider>
      </div>

    </div>
  </div>
</template>

<script>
import Slider from './Slider.vue';

export default {
  data() {
    return {
      loaded: false,
      flickity: Slider,
      varients: {
        horeca: [
          {
            image: "./images/slider-selector-images/horeca_1@2x.jpg",
            title: "Instagrammable",
            desc: "De selfietafel op ieders instagram story #jouwhorecazaak."
          },
          {
            image: "./images/slider-selector-images/horeca_2@2x.jpg",
            title: "Eyecatcher",
            desc: "Aandacht trekken op een speelse manier."
          },
          {
            image: "./images/slider-selector-images/horeca_3@2x.jpg",
            title: "Unieke beleving",
            desc: "Sfeer verhogend/maker; brengt bij iedereen het kind in je naar boven."
          }
        ],
        events: [
          {
            image: "./images/slider-selector-images/events_1@2x.jpg",
            title: "sfeerverhogend",
            desc: "Speels karakter op jouw event; geen handjes maar.....voetjes in de lucht."
          },
          {
            image: "./images/slider-selector-images/events_2@2x.jpg",
            title: "Instagrammable",
            desc: "De ‘selfie-tafel’ in ieders instagram story #jouweven."
          },
          {
            image: "./images/slider-selector-images/events_3@2x.jpg",
            title: "Verbinder",
            desc: "Schommel samen en ontmoet nieuwe mensen aan tafel."
          }
        ],
        kantoren: [
          {
            image: "./images/slider-selector-images/kantoren_1@2x.jpg",
            title: "Social spot",
            desc: "Ontmoet je collega’s op een speelse manier."
          },
          {
            image: "./images/slider-selector-images/kantoren_2@2x.jpg",
            title: "Actieve meetings met FUN",
            desc: "Reserveer deze ruimte snel! ;)."
          },
          {
            image: "./images/slider-selector-images/kantoren_3@2x.jpg",
            title: "Vergaderen uit je comfort zone",
            desc: "Stimuleert de creativiteit en productiviteit."
          }
        ],
        educatie: [
          {
            image: "./images/slider-selector-images/educatie_1@2x.jpg",
            title: "Cognitieve prestatie",
            desc: "Beter leren door bewegen."
          },
          {
            image: "./images/slider-selector-images/educatie_2@2x.jpg",
            title: "Eye-catcher",
            desc: "Voor jong en oud."
          },
          {
            image: "./images/slider-selector-images/educatie_3@2x.jpg",
            title: "Enthousiasmeren van kinderen",
            desc: "Pap, mam, opa, oma; “ik heb vandaag tijdens hetschommelen mogen lezen, rekenen en ...”"
          }
        ],
      },
      subjectLoopItem: null,
    };
  },
  props: [
    "sliderSubject"
  ],
  computed: {
    setSubject: function () {
      switch (this.sliderSubject) {
        case "events":
          this.subjectLoopItem = this.varients.events
          break;

        case "kantoren":
          this.subjectLoopItem = this.varients.kantoren
          break;

        case "educatie":
          this.subjectLoopItem = this.varients.educatie
          break;

        default:
          this.subjectLoopItem = this.varients.horeca
          break;
      };

      return this.subjectLoopItem
    }
  },
  updated() {
    if(this.$refs.contentSlider) this.$refs.contentSlider.flickity.select(0);
  },
  mounted() {
    setTimeout(() => {
      this.$nextTick(() => this.loaded = true)
    },100)
  }
}
</script>