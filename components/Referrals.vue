<template>
    <section class="referrals bg-white">
        
           <div class="referrals__wrapper" >
                <div class="referrals__stars">
                    <i v-for="rating in activeElement.rating" :key="rating" class="icon icon--star"></i>
                </div>
                <div class='content-section'>
                    <span class="referrals__title">{{ activeElement.quote }}</span>

                    <div class="referrals__logos" >
                        <Slider :options="{ pageDots: false, prevNextButtons: false }">
                            <div class="referrals__logo-wrapper" v-for="referral in referrals" :key="referral.id" :id="referral.id">
                                <img class="referrals__logo" :src="referral.logoUrl">
                            </div>
                        </Slider>
                    </div>
                </div>
           </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            referrals: [
                {id: 0, rating: 4, quote: "Een mooie toevoeging aan ons evenement.", logoUrl: "./images/referrals/logo_1.png", active: true},
                {id: 1, rating: 4, quote: "De tafels waren een hit, de volgende keer weer.", logoUrl: "./images/referrals/logo_2.png", active: false},
                {id: 2, rating: 4, quote: "We zien dat mensen speciaal komen voor de", logoUrl: "./images/referrals/logo_3.png", active: false},
                {id: 3, rating: 4, quote: "Deze doet het goed in de zomer voor onze zaak!.", logoUrl: "./images/referrals/logo_4.png", active: false},
                {id: 4, rating: 4, quote: "De tafels worden geplaatst en weer netjes opgehaald. top service", logoUrl: "./images/referrals/logo_5.png", active: false},
            ],
            activeElement: {id: 0, rating: 4, quote: "Een mooie toevoeging aan ons evenement.", logoUrl: "./images/referrals/logo_1.png", active: true}
        };
    },
    mounted() {
        var elem = document.getElementsByClassName("referrals__logo-wrapper");
        
        setInterval(() => {
            for (let index = 0; index < elem.length; index++) {
                if (elem[index].classList.contains("is-selected")) {
                    this.activeElement = this.referrals[index]
                }
            }
        }, 25);
    }
}
</script>