<template>
	<div>
		<!-- <div class="site-header"></div> -->
		<!-- <div class="slider-text-center"></div> -->
		
		<section class='content-section bg-white'>
			<div class='content-section__container'>
				<div class='content-section__content'>
					<div class="quote text-center">
						<span class="label text-dimmed">Schommel aan Tafel</span>
						<h2 class="quote__title">Met Schommel aan Tafel trek je de aandacht en creéer je een Plek waar mensen samen komen.</h2>
						<a class="btn" href="#section-contact">Vraag informatie aan</a>
					</div>
				</div>
			</div>
		</section>

		<section class="cta">
			<div class='content-section'>
				<div class="cta__content">
					<div class="cta__title">Kopen of huren? Het kan allebei</div>
					<a href="#" class="btn btn-white">Neem contact op</a>
				</div>
			</div>
		</section>

		<section class="newsletter">
			<div class='content-section'>
				<div class='content-section__content'>
					<div class="newsletter__image">
						<img src="~/static/images/newsletter.png" alt="">
					</div>
					<div class="newsletter__content">
						<h3 class="newsletter__title">Interesse om te schommelen? Download de gratis brochure</h3>
						<form class="newsletter__form" action="">
							<input class="input-field" type="text" placeholder="Email adres">
							<button type="submit" class="btn btn-orange">Download</button>
						</form>
						<div class="newsletter__disclaimer">
							<p>*Vul een geldig emailadres in (pas zichtbaar wanneer foutief)</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="image-full-size">
			<img src="~/static/images/full-size-image.png" alt="">
		</section>
		
		<!-- <div class="slider-selector"></div>
		<div class="newsletter"></div>
		<div class="slider-cards"></div> -->
		
		<section class="section-referrals bg-white">
			<div class="text-center">
				<div>
					<i class="icon icon--star"></i>
					<i class="icon icon--star"></i>
					<i class="icon icon--star"></i>
					<i class="icon icon--star"></i>
					<i class="icon icon--star"></i>
				</div>
				<h5>“Bij ons is deze tafel altijd als eerste volgeboekt”</h5>
			</div>
		</section>

		<section class="contact" id="section-contact">
			<div class='content-section'>
				<div class='content-section__content'>
					<h3 class="text-center">Interesse of een bezichtiging inplannen?</h3>
					<p>Laat uw gegevens achter en wij nemen zo spoedig mogelijk contact met u op.</p>
					<form class="contact-form" action="post">
						<input class="input-field" type="text" placeholder="Naam*">
						<input class="input-field" type="email" placeholder="Emailadres*">
						<input class="input-field" type="tel" placeholder="Telefoonnummer*">
						<input class="input-field" type="text" placeholder="Opmerking">
						<div class="contact-form__action">
							<button type="submit" class="btn btn-orange">Versturen</button>
						</div>
					</form>
				</div>
			</div>
		</section>


		<section class="section-socials">
			<ul class="socials-list --white">
				<li class="socials-list__item">
					<a href="#">
						<i class="icon icon--instagram"></i>
					</a>
				</li>
				<li class="socials-list__item">
					<a href="#">
						<i class="icon icon--facebook"></i>
					</a>
				</li>
				<li class="socials-list__item">
					<a href="#">
						<i class="icon icon--linkedin"></i>
					</a>
				</li>
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
			<a class="text-dimmed" href="fffunction.studio">design by fffunction.studio</a>
		</footer>
	</div>
  
</template>

<script>
export default {
  head() {
    return {
      title: 'Koningsdag Eindhoven',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'De Koning komt KennisMaken met Eindhoven. Doe dat ook! Eindhoven, stad van Kennis, stad van het Maken.'
        }
      ]
    }
  },
  data() {
    return {
      introFinished: false,
      scrolled: false
    }
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 25)
        this.scrolled = true
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  }
}
</script>
