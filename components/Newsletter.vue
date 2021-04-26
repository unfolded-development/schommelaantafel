<template>
  <section class="newsletter">
    <div class="content-section">
      <div class="content-section__content">
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
            </form> -->

          <!-- <div id="mc_embed_signup"> -->
            <form
              action="https://schommelaantafel.us1.list-manage.com/subscribe/post?u=def7ae31482d20dbee5d6b1e1&amp;id=ae0d55987e"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              class="validate newsletter__form"
              target="_blank"
              novalidate
            >
              <!-- <div id="mc_embed_signup_scroll"> -->
                <!-- <div class="indicates-required"> -->
                  <!-- <span class="asterisk">*</span> indicates required -->
                <!-- </div> -->
                <!-- <div class="mc-field-group"> -->
                  <!-- <label for="mce-EMAIL"
                    >Email Address <span class="asterisk">*</span>
                  </label> -->
                  <input
                    type="email"
                    value=""
                    name="EMAIL"
                    class="required email input-field"
                    id="mce-EMAIL"
                    placeholder="Email adres"
                  />
                <!-- </div> -->
                <!-- <div id="mce-responses" class="clear">
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
                </div> -->
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
                <!-- <div class="clear"> -->
                  <input
                    type="submit"
                    value="Download"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="button btn btn-orange"
                  />
                <!-- </div> -->
              <!-- </div> -->
            </form>
          <!-- </div> -->

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    // var downloadFilePath = "./images/logo.svg";
    // document.getElementById("free-brochure-email").oninvalid = function (e) {
    //     e.preventDefault();
    //     document.getElementsByClassName("newsletter__error")[0].classList.add("newsletter__error-active");
    // };
    // document.getElementsByClassName("newsletter__form")[0].onsubmit = function (e) {
    //     e.preventDefault();
    //     var link = document.createElement("a");
    //     link.setAttribute('download', name);
    //     link.href = downloadFilePath;
    //     document.body.appendChild(link);
    //     link.click();
    //     link.remove();
    //     if (document.getElementsByClassName("newsletter__error")[0].classList.contains("newsletter__error-active")) {
    //         document.getElementsByClassName("newsletter__error")[0].classList.remove("newsletter__error-active");
    //     }
    // };
  },
};
</script>

<style></style>