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
                    <form class="contact-form" action="post">
                        <div class="input-error" data-input="contact-form-name" style="display: none;"><p>Vul een naam in</p></div>
                        <input class="input-field" id="contact-form-name" type="text" v-model="name" placeholder="Naam*"/>
                        <div class="input-error" data-input="contact-form-email" style="display: none;"><p>Vul een emailadres in</p></div>
                        <input class="input-field" id="contact-form-email" type="email" v-model="email" placeholder="Emailadres*"/>
                        <div class="input-error" data-input="contact-form-phonenumber" style="display: none;"><p>Vul een Telefoonnummer in</p></div>
                        <input
                            id="contact-form-phonenumber"
                            class="input-field"
                            type="tel"
                            placeholder="Telefoonnummer*"
                            v-model="phonenumber"
                        />
                        <input class="input-field" v-model="message" type="text" placeholder="Opmerking" />
                        <div class="contact-form__action"><button type="submit" class="btn btn-orange btn-orange-odd-hover" @click.prevent="send" >Versturen</button></div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data: () => ({
            name: "",
            email: "",
            phonenumber: "",
            message: ""
        }),
        methods: {
            send () {
                if (this.validate() === true) {
                    this.$mail.send({
                        from: this.email,
                        subject: "Nieuw ingevuld contact formulier",
                        text: "Afzender:" + this.name + "\r\n" + "Telefoonnummer:" + this.phonenumber + "\r\n" + this.message,
                    });

                    alert("Bericht is verzonden!");
                }
            },
            validate () {
                let noErrors = true; 
                const errors = document.getElementsByClassName("input-error");

                for (let index = 0; index < errors.length; index++) {
                    const input = document.getElementById(errors[index].dataset.input);

                    switch (input.id) {
                        case "contact-form-name":
                            if (input.value == "") {
                                this.showError(errors[index], "Je moet een naam invullen");
                                noErrors = false;
                            }
                        break;

                        case "contact-form-email":
                            if (input.value == "") {
                                this.showError(errors[index], "Je moet een emailadres invullen");
                                noErrors = false;
                            }

                            if (!this.validateEmail(input.value)) {
                                this.showError(errors[index], "E-mailadres is niet correct.");
                                noErrors = false;
                            }
                        break;

                        case "contact-form-phonenumber":
                            if (input.value == "") {
                                this.showError(errors[index], "Je moet een telefoonnummer invullen");
                                noErrors = false;
                            }

                            if (!this.validatePhonenumber(input.value)) {
                                this.showError(errors[index], "Telefoonnummer is niet correct.");
                                noErrors = false;
                            }
                        break;
                    }
                }

                return noErrors
            },
            showError (errorWrapper, errorMessage) {
                errorWrapper.firstChild.innerHTML = errorMessage;
                errorWrapper.style.display = "block";
            },
            validateEmail(email) {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            },
            validatePhonenumber (phonenumber) {
                const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
                return re.test(String(phonenumber).toLowerCase());
            }
        }
    }
</script>