<template>
  <section class="newsletter" id="nieuwsbrief">
    <div class="content-section">
      <div class="content-section__content" v-on-screen>
        <div class="newsletter__image">
          <img src="~/static/images/brochure.png" alt="Interesse om te schommelen? Download de brochure" />
        </div>
        <div class="newsletter__content">
          <h3 class="newsletter__title">
            Interesse om te schommelen? Download de brochure
          </h3>

          <div class="newsletter__error">
            <p>
              Vul een geldig email adres in om de gratis brochure te downloaden.
            </p>
          </div>

          <!-- Begin Mailchimp Signup Form -->
          <div id="mc_embed_signup">
            <form
              action="https://schommelaantafel.us1.list-manage.com/subscribe/post?u=def7ae31482d20dbee5d6b1e1&amp;id=ae0d55987e"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              class="validate newsletter__form"
              target="_blank"
              novalidate
            >
              <div id="mc_embed_signup_scroll">
                <div class="mc-field-group" style="position: absolute; left: -5000px">
                  <select name="FORMTYPE" class="" id="mce-FORMTYPE">
                    <option value=""></option>
                    <option value="Download" selected>Download</option>
                    <option value="Contact aanvraag">Contact aanvraag</option>
                  </select>
                </div>
                <div class="mc-field-group for-email" style="order: 1;">
                  <input
                    type="email"
                    value=""
                    name="EMAIL"
                    class="required email input-field"
                    placeholder="Email adres" 
                    id="mce-EMAIL"
                  />
                </div>
                <div id="mce-responses" class="clear" style="order: 3;">
                  <div
                    class="response"
                    id="mce-error-response"
                    style="display: none"
                  ></div>
                  <div
                    class="response"
                    id="mce-success-response"
                    style="display: none"
                  ></div>
                </div>
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div
                  style="position: absolute; left: -5000px"
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_def7ae31482d20dbee5d6b1e1_ae0d55987e"
                    tabindex="-1"
                    value=""
                  />
                </div>
                <div class="clear" style="order: 2;">
                  <input
                    type="submit"
                    value="Download"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="button btn btn-orange"
                    @click="validateApprovalDataUsage"
                  />
                </div>
              </div>
              <div class="newsletter__approve">
                <input ref="approveNewsLetter" id="approve-data-usage-newsletter" type="checkbox">
                <label for="approve-data-usage-newsletter">Ik geef toestemming aan Schommel aan Tafel om mijn e-mailadres op te slaan en alleen te gebruiken om contact met mij op te nemen.</label>
              </div>
            </form>
          </div>
          <script
            type="text/javascript"
            src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
          ></script>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    validateApprovalDataUsage (event) {
      const errorResponse = document.getElementById("mce-error-response");

      if (this.$refs.approveNewsLetter.checked == false) {
        event.preventDefault();
        errorResponse.innerHTML = "Geen toestemming om e-mailadres op te slaan en te gebruiken om contact op te nemen.";
        errorResponse.style.display = "block";
      } else {
        errorResponse.innerHTML = "";
      }
    },
    downloadBrochure () {
      var downloadFilePath = "./SAT_brochure_2021_v2.pdf";

      var link = document.createElement("a");
      link.setAttribute('download', name);
      link.href = downloadFilePath;
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  },
  mounted() {
    var CorrectInterval = CorrectInterval = setInterval(() => {
      if (
          document.getElementById("mce-success-response").innerHTML.includes("Dank voor uw aanmelding!") ||
          document.getElementById("mce-error-response").innerHTML.includes("is reeds geabonneerd op lijst schommel aan tafel.")
      ) {
        if (document.getElementById("mce-success-response").innerHTML.includes("Dank voor uw aanmelding!")) {
          document.getElementById("mce-success-response").innerHTML = "";
        }
        this.downloadBrochure();
        clearInterval(CorrectInterval);
      }
    }, 250);
  },
};
</script>

<style></style>
