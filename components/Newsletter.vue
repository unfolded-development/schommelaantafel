<template>
  <section class="newsletter" id="nieuwsbrief">
    <div class="content-section">
      <div class="content-section__content" v-on-screen>
        <div class="newsletter__image">
          <img src="~/static/images/brochure_mockup.png" alt="" />
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

          <!-- <form class="newsletter__form" action="">
                <input id="free-brochure-email" class="input-field" type="email" placeholder="Email adres" on required>
                <button id="free-brochure-submit" type="submit" class="btn btn-orange">Download</button>
            </form>

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
                <div class="indicates-required">
                  <span class="asterisk">*</span> indicates required
                </div>
                <div class="mc-field-group">
                  <label for="mce-EMAIL"
                    >Email Address <span class="asterisk">*</span>
                  </label>
                  <input
                    type="email"
                    value=""
                    name="EMAIL"
                    class="required email input-field"
                    id="mce-EMAIL"
                    placeholder="Email adres"
                  />
                </div>
                <div id="mce-responses" class="clear">
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
                real people should not fill this in and expect good things - do not remove this or risk form bot signup
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
                <div class="clear">
                  <input
                    type="submit"
                    value="Download"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="button btn btn-orange"
                  />
                </div>
              </div>
            </form>
          </div> -->

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
                <!-- <div class="indicates-required">
                  <span class="asterisk">*</span> indicates required
                </div> -->
                <div class="mc-field-group" style="position: absolute; left: -5000px">
                  <!-- <label for="mce-FORMTYPE">Type </label> -->
                  <select name="FORMTYPE" class="" id="mce-FORMTYPE">
                    <option value=""></option>
                    <option value="Download" selected>Download</option>
                    <option value="Contact aanvraag">Contact aanvraag</option>
                  </select>
                </div>
                <div class="mc-field-group for-email" style="order: 1;">
                  <!-- <label for="mce-EMAIL"
                    >Email Address <span class="asterisk">*</span>
                  </label> -->
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
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="button btn btn-orange"
                  />
                </div>
              </div>
            </form>
          </div>
          <script
            type="text/javascript"
            src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
          ></script>
          <!-- <script type="text/javascript">
            (function ($) {
              window.fnames = new Array();
              window.ftypes = new Array();
              fnames[1] = "FORMTYPE";
              ftypes[1] = "dropdown";
              fnames[0] = "EMAIL";
              ftypes[0] = "email";
            })(jQuery);
            var $mcj = jQuery.noConflict(true);
          </script> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    var CorrectInterval = CorrectInterval = setInterval(() => {
      if (document.getElementById("mce-success-response").innerHTML == "Thank you for subscribing!") {
        downloadBrochure();
        clearInterval(CorrectInterval);
      }
    }, 250);
    
    function downloadBrochure () {
      var downloadFilePath = "./Schommelaantafel_brochure_2021_april.pdf";

      var link = document.createElement("a");
      link.setAttribute('download', name);
      link.href = downloadFilePath;
      document.body.appendChild(link);
      link.click();
      link.remove();
      }
  },
};
</script>

<style></style>
