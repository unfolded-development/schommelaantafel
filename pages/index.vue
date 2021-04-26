<template>
    <div>
        <Header :showBrochureBtn="false" :showContactBtn="false" />

        <section class="temporary">
            <div class='content-section'>
                <div class="temporary__content">
                    <h1 class="temporary__heading">Wij zijn even <br/> schommelen...</h1>
                </div>
            </div>
        </section>

        <footer class="temporary-footer">
            <div class='content-section'>
                <div class="temporary-footer__content">
                    <div class="temporary-footer__item">
                        <a class="temporary-footer__contact-option" href="tel:+31 0620239611">+31(0)6 20 23 96 11</a>
                        <a class="temporary-footer__contact-option" href="mailto:info@schommelaantafel.nl">info@schommelaantafel.nl</a>
                    </div>

                    <div class="temporary-footer__item">
                        <ul class="socials-list --white">
                            <li class="socials-list__item">
                                <a target="_blank" href="https://www.instagram.com/schommelaantafel/">
                                    <i class="icon icon--instagram"></i>
                                </a>
                            </li>
                            <li class="socials-list__item">
                                <a target="_blank" href="https://www.linkedin.com/company/schommel-aan-tafel/">
                                    <i class="icon icon--linkedin"></i>
                                </a>
                            </li>
                            <li class="socials-list__item">
                                <a target="_blank" href="https://nl.pinterest.com/timchristophe/">
                                    <i class="icon icon--pinterest"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {

}
</script>