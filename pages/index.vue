<template>
	<div>

		<section class="intro">
			<div class='content-section'>
				<div class="intro__content">
					<h1>It’s better when you move.</h1>
				</div>
			</div>
			<img src="~/static/images/intro.png" alt="">
		</section>
		
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

		<section class="slider-selector">
			<nav class="slider-selector__navigation">
				<span class="label">Schommel aan Tafel voor:</span>
				<ul>
					<li class="active"><span>Horeca</span></li>
					<li><span>Events</span></li>
					<li><span>Kantoren</span></li>
					<li><span>Educatie</span></li>
				</ul>
			</nav>
			<div class="slider-selector__main">
				<div class="slider-selector__image">
					<img src="~/static/images/eye-catcher.png" alt="">
				</div>
				<div class="slider-selector__content">
					<div class="slider-selector__controls">
						<i class="icon icon--arrow-left"></i>
						<i class="icon icon--arrow-right"></i>
					</div>
					<span class="slider-selector__label">Eye-catcher</span>
					<p class="slider-selector__text">Met schommel aan tafel maak je een statement op je terras.</p>
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
      title: 'Schommel aan Tafel',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Met Schommel aan Tafel trek je de aandacht en creéer je een Plek waar mensen samen komen.'
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
