<template>
    <section class="newsletter">
        <div class='content-section'>
            <div class='content-section__content'>
                <div class="newsletter__image">
                    <img src="~/static/images/newsletter.png" alt="">
                </div>
                <div class="newsletter__content">
                    <h3 class="newsletter__title">Interesse om te schommelen? Download de gratis brochure</h3>

                    <div class="newsletter__error">
                        <p>Vul een geldig email adres in om de gratis brochure te downloaden.</p>
                    </div>
                    
                    <form class="newsletter__form" action="">
                        <input id="free-brochure-email" class="input-field" type="email" placeholder="Email adres" on required>
                        <button id="free-brochure-submit" type="submit" class="btn btn-orange">Download</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    mounted() {
        var downloadFilePath = "./images/logo.svg";

        document.getElementById("free-brochure-email").oninvalid = function (e) {
            e.preventDefault();

            document.getElementsByClassName("newsletter__error")[0].classList.add("newsletter__error-active");
        };

        document.getElementsByClassName("newsletter__form")[0].onsubmit = function (e) {
            e.preventDefault();

            var link = document.createElement("a");
            link.setAttribute('download', name);
            link.href = downloadFilePath;
            document.body.appendChild(link);
            link.click();
            link.remove();

            if (document.getElementsByClassName("newsletter__error")[0].classList.contains("newsletter__error-active")) {
                document.getElementsByClassName("newsletter__error")[0].classList.remove("newsletter__error-active");
            }
        };
    }
}
</script>

<style>

</style>