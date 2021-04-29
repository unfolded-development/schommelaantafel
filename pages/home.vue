<template>
  <main>
    <client-only>
      <Header :showBrochureBtn="true" :showContactBtn="true"/>
      <div style="min-height: 100vh">
        <Introduction/>
      </div>
      <vue-cookie-accept-decline
          ref="cookieBar"
          :elementId="'cookieBar'"
          :debug="false"
          :type="'bar'"
          :disableDecline="true"
          :transitionName="'slideFromBottom'"
          :showPostponeButton="false"
          @clicked-accept="cookieClickedAccept"
      >
        <div slot="message">
          Deze website maakt gebruik van cookies om je ervaring te verbeteren.
          Bekijk onze <a href="./privacy-statement.pdf" class="cookie__bar__underlined" target="_blank">Privacy
          voorwaarden.</a>
        </div>
        <div slot="acceptContent" class="btn">Akkoord</div>
      </vue-cookie-accept-decline>
      <section class="content-section bg-white" id="site-about" v-on-screen>
        <div class="content-section__container">
          <div class="content-section__content">
            <div class="quote text-center">
              <span class="label text-dimmed">Schommel aan Tafel</span>
              <h2 class="quote__title">
                Met Schommel aan Tafel trek je de aandacht en creéer je een Plek
                waar mensen samen komen.
              </h2>
              <a href="#section-contact" v-scroll-to class="btn orange-hover">
                Vraag informatie aan
              </a>
            </div>
          </div>
        </div>
      </section>
      <Sliderselector/>
      <CtaSection v-on-screen/>
      <Newsletter v-on-screen/>
      <FullImageSize/>
      <section class="cards">
        <div class="content-section">
          <div class="cards__header" v-on-screen>
            <h3>De voordelen van Schommel aan Tafel</h3>
          </div>
          <div class="cards__container" v-on-screen>
            <div class="card">
              <div class="card__image">
                <img src="~/static/images/card-1.png" alt=""/>
              </div>
              <div class="card__content">
                <h5 class="card__title h4">Customisable</h5>
                <p>
                  Bepaal zelf de afwerking van het frame, de schommels en het
                  tafelblad.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card__image">
                <img src="~/static/images/card-2.png" alt=""/>
              </div>
              <div class="card__content">
                <h5 class="card__title h4">Eenvoudig te monteren</h5>
                <p>
                  De tafels bestaan uit verschillende delen waardoor deze
                  eentvoudig te <span style="white-space: nowrap;">demonteren is.</span>
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card__image">
                <img src="~/static/images/card-3.png" alt=""/>
              </div>
              <div class="card__content">
                <h5 class="card__title h4">Zowel binnen als buiten</h5>
                <p>
                  Schommel aan Tafel kan geleverd worden met speciale
                  weerbestendige afwerking.
                </p>
              </div>
            </div>
          </div>
          <div class="cards__cta" v-on-screen>
            <a v-scroll-to class="btn orange-hover" href="#section-contact"
            >Vraag naar de opties</a
            >
          </div>
        </div>
      </section>

      <Referrals/>

      <section class="contact" id="section-contact">
        <div class="content-section">
          <div class="content-section__content">
            <h3 v-on-screen>Interesse of een bezichtiging inplannen?</h3>
            <p v-on-screen>
              Laat uw gegevens achter en wij nemen zo spoedig mogelijk contact met
              u op.
            </p>
            <div v-on-screen>
              <form class="contact-form" action="post">
                <input class="input-field" type="text" placeholder="Naam*"/>
                <input class="input-field" type="email" placeholder="Emailadres*"/>
                <input
                    class="input-field"
                    type="tel"
                    placeholder="Telefoonnummer*"
                />
                <input class="input-field" type="text" placeholder="Opmerking"/>
                <div class="contact-form__action">
                  <button type="submit" class="btn btn-orange btn-orange-odd-hover">
                    Versturen
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section class="section-socials">
        <ul class="socials-list --white">
          <a target="_blank" href="https://www.instagram.com/schommelaantafel/">
            <li class="socials-list__item">
              <i class="icon icon--instagram"></i>
            </li>
          </a>
          <a target="_blank" href="https://www.linkedin.com/company/schommel-aan-tafel/">
            <li class="socials-list__item">
              <i class="icon icon--linkedin"></i>
            </li>
          </a>
          <a target="_blank" href="https://nl.pinterest.com/timchristophe/">
            <li class="socials-list__item">
              <i class="icon icon--pinterest"></i>
            </li>
          </a>
        </ul>
      </section>
      <footer class="site-footer">
        <ul class="contact-list">
          <li class="contact-list__item">
            <a href="tel:+310620239611">+31(0)6 20 23 96 11</a>
          </li>
          <li class="contact-list__item">
            <a href="mailto:info@schommelaantafel.nl">info@schommelaantafel.nl</a>
          </li>
        </ul>
        <div class="site-footer__wrap">
          <a class="text-dimmed" href="fffunction.studio"
          >design by fffunction.studio</a
          >
          <a class="text-dimmed" href="./privacy-statement.pdf" target="_blank"
          >Privacy statement</a
          >
        </div>
      </footer>
    </client-only>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: "Schommel aan Tafel",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
              "Met Schommel aan Tafel trek je de aandacht en creéer je een Plek waar mensen samen komen.",
        },
      ],
    };
  },
  data() {
    return {};
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 25) this.scrolled = true;
    },
    cookieClickedAccept() {
      document.getElementById("cookieBar").classList.remove("active");
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.removeCookie;

    setTimeout(() => {
      this.$refs.cookieBar.removeCookie()
    }, 50);
  },
};
</script>