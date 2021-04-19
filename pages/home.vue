<template>
	<div class="paralex-wrapper">

		<Header :showBrochureBtn="true" :showContactBtn="true" />

		<section class="intro" id="site-intro">
			<div class='content-section'>
				<div class="intro__content">
					<h1>It’s better when you move.</h1>
				</div>
			</div>
			<img src="~/static/images/intro.png" alt="">

			<a v-scroll-to="'#site-about'" class="intro__btn-down">
				<i class="icon icon--arrow-down"></i>
			</a>
		</section>
		
		<section class='content-section bg-white' id="site-about">
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

		<Sliderselector />

		<section class="cta">
			<div class='content-section'>
				<div class="cta__content">
					<div class="cta__title">Kopen of huren? Het kan allebei</div>
					<a v-scroll-to="'#section-contact'" class="btn btn-white">Neem contact op</a>
				</div>
			</div>
		</section>


		<Newsletter />

		<FullImageSize />

		<section class="cards">
			<div class='content-section'>
				<div class="cards__header">
					<h3>De voordelen van Schommel aan Tafel</h3>
				</div>
				<div class="cards__container">
					<div class="card">
						<div class="card__image">
							<img src="~/static/images/card-1.png" alt="">
						</div>
						<div class="card__content">
							<h5>Customisable</h5>
							<p>Bepaal zelf de afwerking van het frame, de schommels en het tafelblad.</p>
						</div>
					</div>
					<div class="card">
						<div class="card__image">
							<img src="~/static/images/card-2.png" alt="">
						</div>
						<div class="card__content">
							<h5>Customisable</h5>
							<p>Bepaal zelf de afwerking van het frame, de schommels en het tafelblad.</p>
						</div>
					</div>
					<div class="card">
						<div class="card__image">
							<img src="~/static/images/card-3.png" alt="">
						</div>
						<div class="card__content">
							<h5>Customisable</h5>
							<p>Bepaal zelf de afwerking van het frame, de schommels en het tafelblad.</p>
						</div>
					</div>
				</div>
				<div class="cards__cta">
					<a v-scroll-to="'#section-contact'" class="btn">Vraag naar de opties</a>
				</div>
			</div>
		</section>
		
		<Referrals />

		<section class="contact" id="section-contact">
			<div class='content-section'>
				<div class='content-section__content'>
					<h3>Interesse of een bezichtiging inplannen?</h3>
					<p>Laat uw gegevens achter en wij nemen zo spoedig mogelijk contact met u op.</p>
					<form class="contact-form" action="post">
						<input class="input-field" type="text" placeholder="Naam*">
						<input class="input-field" type="email" placeholder="Emailadres*">
						<input class="input-field" type="tel" placeholder="Telefoonnummer*">
						<input class="input-field" type="text" placeholder="Opmerking">
						<div class="contact-form__action">
							<button type="submit" class="btn btn-orange btn-orange-odd-hover">Versturen</button>
						</div>
					</form>
				</div>
			</div>
		</section>


		<section class="section-socials">
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

		<!-- Google Tag Manager -->
		<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-KCBFCXX');</script>
		<!-- End Google Tag Manager -->

		<!-- Google Tag Manager (noscript) -->
		<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KCBFCXX"
		height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
		<!-- End Google Tag Manager (noscript) -->
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
