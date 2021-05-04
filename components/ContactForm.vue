<template>
  <section class="contact" id="contact">
    <div class="content-section">
      <div class="content-section__content">
        <h3 v-on-screen>Interesse of een bezichtiging inplannen?</h3>
        <p v-on-screen>
          Laat uw gegevens achter en wij nemen zo spoedig mogelijk contact met
          u op.
        </p>
        <div v-on-screen>
          <ValidationObserver ref="form" v-slot="{invalid}">
            <form class="contact-form" @submit.prevent="send">
              <ValidationProvider rules="required" v-slot="{errors}">
                <input class="input-field" id="contact-form-name" type="text" v-model="name" placeholder="Naam*"
                       :class="{'input-field--error': errors.length > 0}"/>
              </ValidationProvider>

              <ValidationProvider rules="required|email" v-slot="{errors}">
                <input class="input-field" id="contact-form-email" type="email" v-model="email"
                       :class="{'input-field--error': errors.length > 0}"
                       placeholder="Emailadres*"/>
              </ValidationProvider>

              <ValidationProvider rules="required" v-slot="{errors}">
                <input
                    id="contact-form-phonenumber"
                    class="input-field"
                    type="tel"
                    placeholder="Telefoonnummer*"
                    v-model="phone"
                    :class="{'input-field--error': errors.length > 0}"
                />
              </ValidationProvider>

              <input class="input-field" v-model="message" type="text" placeholder="Opmerking"/>

              <div class="contact-form__error" v-if="invalid && submitted">
                Controleer uw gegevens
              </div>

              <div class="contact-form__action">
                <button type="submit" class="btn btn-orange btn-orange-odd-hover">
                  Versturen
                </button>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>

      <Popup @close="popupActive = false" :active="popupActive" heading="Bedankt voor uw aanvraag"
             description="We nemen zo spoedig mogelijk contact met u op."/>
    </div>
  </section>
</template>

<script>
import {extend, ValidationProvider, ValidationObserver} from 'vee-validate';
import {required, email} from 'vee-validate/dist/rules';

extend('required', required)
extend('email', email)

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
      popupActive: false,
      submitted: false
    }
  },
  methods: {
    async send() {
      const valid = await this.$refs.form.validate()
      this.submitted = true;
      if(valid) {

        const connection = await fetch('https://formcarry.com/s/V7qJDIcrrWP', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({email: this.email, name: this.name, phone: this.phone, message: this.message}),
        })

        const response = await connection.json();

        this.submitted = false;
        this.name = "";
        this.email = "";
        this.phone = "";
        this.message = "";

        this.popupActive = true;

        this.$nextTick(() => {
          this.popupActive = true;
          this.$refs.form.reset();
        });
      }
    }
  }
}
</script>