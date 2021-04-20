<template>
  <section class="referrals bg-white">
    <client-only>
      <div class="referrals__wrapper" :class='{ "no-slider": !slider }'>
        <div class="referrals__stars">
          <i v-for="rating in activeElement.rating" :key="rating" class="icon icon--star"></i>
        </div>
        <div class="content-section">
          <span class="referrals__title">"{{ activeElement.quote }}"</span>

          <!-- When slider is active -->
          <div v-if="slider" class="referrals__logos">
            <Slider :options="{ autoPlay: 2500, pageDots: false, prevNextButtons: false }">
              <div class="referrals__logo-wrapper" v-for="referral in referrals" :key="referral.id" :id="referral.id">
                <img class="referrals__logo" :src="referral.logoUrl">
              </div>
            </Slider>
          </div>

          <!-- When slider is inactive -->
          <div v-if="!slider" class="referrals__logos">
            <div class="referrals__logo-wrapper" v-on:click="activeElement = referrals[referral.id];" :class='{ "is-selected": activeElement == referrals[referral.id] }' v-for="referral in referrals" :key="referral.id" :id="referral.id">
              <img class="referrals__logo" :src="referral.logoUrl">
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slider: true,
      console: console,
      referrals: [
        {
          id: 0,
          rating: 4,
          quote: "Een mooie toevoeging aan ons evenement.",
          logoUrl: "./images/referrals/logo_1.png",
          active: true
        },
        {
          id: 1,
          rating: 4,
          quote: "De tafels waren een hit, de volgende keer weer.",
          logoUrl: "./images/referrals/logo_2.png",
          active: false
        },
        {
          id: 2,
          rating: 4,
          quote: "We zien dat mensen speciaal komen voor de schommeltafel.",
          logoUrl: "./images/referrals/logo_3.png",
          active: false
        },
        {
          id: 3,
          rating: 4,
          quote: "Deze doet het goed in de zomer voor onze zaak!.",
          logoUrl: "./images/referrals/logo_4.png",
          active: false
        },
        {
          id: 4,
          rating: 4,
          quote: "De tafels worden geplaatst en weer netjes opgehaald. top service",
          logoUrl: "./images/referrals/logo_5.png",
          active: false
        },
      ],
      activeElement: {
        id: 0,
        rating: 4,
        quote: "Een mooie toevoeging aan ons evenement.",
        logoUrl: "./images/referrals/logo_1.png",
        active: true
      }
    };
  },
  mounted() {
    var elem = document.getElementsByClassName("referrals__logo-wrapper");
    
    document.getElementsByTagName("body")[0].onresize = this.bodyResize;
    this.bodyResize(window);

    setInterval(() => {
      for (let index = 0; index < elem.length; index++) {
        if (elem[index].classList.contains("is-selected")) {
          this.activeElement = this.referrals[index]
        }
      }
    }, 25);
  },
  methods: {
    bodyResize(event) {
      if (event.innerWidth == null) {
        event = event.path[0];
      }

      if (event.innerWidth >= 1024) {
        this.slider = false;
      } else {
        this.slider = true;
      }
    }
  },
  beforeMount() {
    this.activeElement = this.referrals[0]
  }
}
</script>