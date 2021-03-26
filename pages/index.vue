<template>
	<div>
		<div class="site-header"></div>
		
		<div class="slider-text-center"></div><!-- Slider -->
		
		
		<section class='content-section'>
			<div class='content-section__container'>
				<div class='content-section__content'>
					<div class="quote text-center">
						<span class="label text-grey">Schommel aan Tafel</span>
						<p class="h1">Met Schommel aan Tafel trek je de aandacht en creéer je een Plek waar mensen samen komen.</p>
						<a class="button" href="#">Vraag informatie aan</a>
					</div>
				</div>
			</div>
		</section>

		<section class="image-full-size">
			<img src="~/static/images/full-size-image.png" alt="">
		</section>
		
		<div class="slider-selector"></div><!-- Slider -->
		<div class="cta"></div>
		<div class="newsletter"></div>
		<div class="full-image"></div>
		<div class="slider-cards"></div><!-- Slider -->
		
		<section class="section-referrals">
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

		<section class="contact">
			<div class='content-section'>
				<div class='content-section__content'>
					<h2>Interesse of een bezichtiging inplannen?</h2>
					<p>Laat uw gegevens achter en wij nemen zo spoedig mogelijk contact met u op.</p>
					<form class="contact-form" action="post">
						<input type="text" placeholder="Naam*">
						<input type="email" placeholder="Emailadres*">
						<input type="tel" placeholder="Telefoonnummer*">
						<input type="text" placeholder="Opmerking">
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
			<a class="text-grey" href="fffunction.studio">design by fffunction.studio</a>
		</footer>
	</div>
  <!-- <div class='page page--home' :class='{"container--intro-finished": introFinished, "document--scrolled": scrolled }'>
    <header class='site-header'>
      <div class='site-header__container'>
        <div class='site-header__right'>
          <SocialLinks class='social-links--centered'></SocialLinks>
        </div>
      </div>
    </header>
    <div class='background--orange'>
      <Intro @finished='introFinished = true'></Intro>
      <section class='content-section'>
        <div class='content-section__container'>
          <div class='content-section__content'>
            <div class='zig-zag'></div>
            <h1 class='title text-center'>Koningsdag 2021, KennisMaken met Eindhoven</h1>
            <p>De Koning komt KennisMaken met Eindhoven. Doe dat ook! Eindhoven, stad van Kennis, stad van het Maken.
              Waar creativiteit en technisch vernuft hand in hand gaan. Van pienter pookje & zonne-auto, van
              Cassettebandje & CD, van MRI-scan & cuddlevest. Luchtfietserij, toekomstmuziek en droombeelden, daar
              houden we van. Of je nu auto rijdt, koffie zet in de keuken, op de bank hangt voor de tv, muziek luistert,
              de dokter bezoekt, het licht aandoet of met je telefoon speelt, Eindhoven is bij je. Al meer dan 100 jaar
              lang. Ook op Koningsdag 2021. Hoe dat zover gekomen is in Eindhoven? <a
                href='https://uploads.knightlab.com/storymapjs/9e927cc38d858c00983bc78cec9d299e/high-tech-eindhoven/index.html'
                target='_blank'>Lees hier</a></p>
          </div>
        </div>
      </section>
    </div>
    <div class='background--blue'>
      <section class='videos-section'>
        <h2 class='title text-center'>Beleef Koningsdag thuis</h2>
      </section>
      <section class='content-section'>
        <div class='content-section__container'>
          <div class='content-section__content'>
            <h2 class='title text-center'>Eindhovenaren maken samen Koningsdag!</h2>
            <p>Het wordt een andere Koningsdag dan anders. Maar niet minder feestelijk! Cultureel Eindhoven is daar nu
              druk mee bezig. Schooljeugd, ouderen, wijkbewoners, ze worden allemaal opgeroepen mee te doen aan één van
              de onderstaande activiteiten. Die zijn allemaal verbonden met het programma dat de koning zal gaan
              bezoeken. Zo maken we van een door corona noodgedwongen besloten bezoek, een feest voor iedereen. Elke
              Eindhovenaar kan meedoen.</p>
            <Dropdown title='Koning voor één Dag'>
              <p>De buurten van Eindhoven, én hun bijzondere bewoners, in het zonnetje zetten. Dat is de gedachte
                achter Koning voor 1 Dag. Online én live gaan we de buurten in met de vraag: wie is wat jou betreft
                koning van de buurt? Je mag iedereen nomineren, en iedereen mag genomineerd worden. Of het nou de
                buurman is die boodschappen doet voor ouderen, de buurvrouw die zwerfafval raapt, of de buurtpreventie
                die de donkere straten veilig houdt. Uit alle nominaties wordt een buurtkoning gekozen die de
                vertegenwoordiger is van zijn of haar buurt in de online Buurten Battles. Hoort jouw buurtkoning bij
                de beste zeven? Dan schopt die het tot de grote finale op Koningsdag. Een bezoekje aan de echte koning
                is dan niet uitgesloten!</p>
              <p>
                Alle Eindhovenaren kunnen inloggen om hun buurtkoning te steunen tijdens de Buurten Battles. Inmiddels
                hebben al veel enthousiaste buurtorganisaties zich aangemeld voor Koning voor 1 Dag.</p>
              <p>Onze buurten krijgen ook een live actie aangeboden tijdens Koningsdag: ‘De Koning voor 1 Dag on
                tour’. Een lakei met een troon, een fotograaf en een groepje muzikanten strijken neer in een straat,
                bij een park, of letterlijk voor de voordeur. En dan mogen álle buurtbewoners die willen Koning voor 1
                Dag zijn. Ze mogen op de troon zitten, krijgen live het Wilhelmus toegezongen, én worden koninklijk op
                de foto gezet door een fotograaf. Als dát geen majestueuze traktatie is! Leuk detail: de rondreizende
                tronen worden gemaakt door Eindhovense basisscholen. Samen laten we de mooiste kant van Eindhoven
                zien. Want juist in de buurten maken we Eindhoven samen tot een fijne, leefbare en bijzondere stad.
                Een stad om trots op te zijn.</p>
              <p>Door: <a href='https://koningvoor1dag.nl' target='_blank'>CKE</a></p>
            </Dropdown>
            <Dropdown title='Eindhoven Kleurt Oranje'>
              <p>Samen kleuren we Eindhoven oranje! Iedereen wordt opgeroepen om de hun tuin, balkon en huis te
                versieren. Door Stichting Oranje Comité Eindhoven wordt in samenwerking met het project ‘Koning voor 1
                dag’, de straat en het huis van ‘de koning van de buurt’ versierd.</p>
              <p>Goed voorbeeld doet goed volgen. Samen kleuren we Eindhoven oranje!</p>
              <p>
                Leuk hoor, zo’n oranje stad, maar wat heb je d’r aan? Nou, dat laten we zien: tijdens de twee uur
                durende NOS uitzending uit Eindhoven vliegt er een drone boven de stad die hopelijk via de NOS veel van
                het prachtige oranje in beeld brengt. En we leveren het vliegschema erbij, zodat je naar heel Nederland
                kunt zwaaien. Of naar je familie. Zo vieren we thuis feest, maar zijn we toch samen.</p>
              <p>Door: Oranje-comite Eindhoven</p>
            </Dropdown>
            <Dropdown title='Jouw wijk in de picture'>
              <p>Eindhoven. Groots als stad. Met internationale allure. Maar ook met vijf prachtige stadsdelen die in
                dat grootse geheel altijd hun eigen kleinschalige karakter behielden. ‘Jouw wijk in de picture’ wil dat
                karakter in beeld brengen. Met vijf bijzondere foto-exposities in vijf bijzondere stadsdelen: Strijp,
                Woensel, Gestel, Tongelre en Stratum. Iedere expositie toont beelden van de wijk door fotografen,
                amateur en professioneel, uit de wijk. Metershoog op een prominente buitenlocatie. De wijk door de ogen
                van de fotograaf. Wat maakt het zo bijzonder; mensen, gebeurtenissen, gebouwen. De foto’s worden tijdens
                een wedstrijd door een vakjury geselecteerd uit vele inzendingen. Wat rest zijn negen beelden per wijk
                die het eigen verhaal vertellen.</p>
              <p>Door: <a href='http://www.wijkindepicture.nl' target='_blank'>Jouw woonplaats in de picture</a></p>
            </Dropdown>
            <Dropdown title='Leve de Koning-stories!'>
              <p>
                Kinderen en jongeren maken zelf een Storie. Een kort filmpje vanaf de telefoon of tablet via de gratis
                app VN (vlognow). Thuis, op school of ergens anders. Ze kunnen de koning daarin feliciteren en een wens
                uitspreken. Maar ze kunnen ook laten zien en horen wat ze zelf zouden doen als ze de koning(in) zouden
                zijn! Verhalen van wensen en verlangens van de volwassenen van straks.
              </p>
              <p>
                Om kinderen en jongeren, maar ook hun docenten, begeleiders en ouders te ondersteunen, is er een
                tutorial (een instructie) online gezet. Ook komt CultuurStation graag met hun mobiele studio naar je
                toe, om de kinderen en jongeren de gelegenheid te bieden hun Leve de Koning Storie professioneel te
                filmen.
              </p>
              <p>Het uploaden vindt plaats vóór 20 april en moet uiteraard met toestemming van de ouder(s)/verzorger(s)
                van de kinderen en jongeren gebeuren. CultuurStation bekijkt of de stories voldoen aan de fatsoensnormen
                en stuurt ze door naar een website waar ze op Koningsdag te zien zijn. Een aantal daarvan wordt
                waarschijnlijk op Koningsdag ook bij de NOS getoond. Wat zou het geweldig zijn als er veel filmpjes van
                onze Eindhovense jeugd te zien zijn.</p>
              <p>Door: <a href='https://www.cultuurstation.nl/koningsdag-2021' target='_blank'>Cultuurstation</a></p>
            </Dropdown>
            <Dropdown title='EindjeMinecraft'>
              <p>Een eigen digitale stad waaraan alle Eindhovense kinderen en jongeren mogen meebouwen, met een
                vijftienjarige burgemeester. Dat is EindjeMinecraft! De plattegrond van Eindhoven is eind 2020 via deze
                creatieve computergame ontsloten. Alle Eindhovense kinderen en jongeren zijn sindsdien uitgenodigd
                hierin hun eigen huis te bouwen, of mee te werken aan de eigen school, sportvereniging of een publiek
                gebouw.</p>
              <p>Speciaal voor Koningsdag nodigt Minecraft-burgemeester en ontwikkelaar Tim iedereen uit om de digitale
                variant van Eindhoven mooi te maken voor het bezoek van de Koninklijke familie. Dat kan vanuit huis,
                maar ook samen met de hele klas</p>
              <p>Inloggen kan nu al: je krijgt een gebied toegewezen om te bouwen. Vanaf eind maart komen er speciale
                Koningsdag-activiteiten op de server en zijn er dagelijks ervaren Minecrafters actief om te helpen.
                Tijdens Koningsdag kunnen kinderen ook meedoen aan een digitale kraampjesmarkt in EindjeMinecraft en
                wordt de Koninklijke familie uitgenodigd voor een rondleiding door de stad. Een deel van de digitale
                stad zal ook echt te zien zijn op Koningsdag, en dan zullen daar sportieve activiteiten plaatsvinden.
                Maar dat verklappen we nog niet verder.</p>
              <p>Wil je met je hele klas de school bouwen, neem dan via de site contact op met burgemeester Tim, dan
                regelt hij de toegang.</p>
              <p>Door: <a href='https://eindjeminecraft.nl'>Studio Fleur Bestens, Tim-NL, Tech Playgrounds</a></p>
            </Dropdown>
            <p>&nbsp;</p>
            <h2 class='title text-center'>Veelgestelde vragen</h2>
            <DropdownGroup>
              <Dropdown title='Wanneer is Koningsdag 2021?'>
                <p>Koningsdag is de nationale feestdag waarop de verjaardag van de Koning wordt gevierd. Koningsdag 2021
                  vindt plaats op dinsdag 27 april. Op deze dag viert Koning Willem-Alexander zijn 54e verjaardag.</p>
              </Dropdown>
              <Dropdown title='Waar is Koningsdag 2021?'>
                <p>De Koninklijke Familie viert Koningsdag 2021 mee in Eindhoven. Koningsdag 2021 vindt vooral ook
                  plaats bij jou thuis op de bank. We zorgen voor een aantrekkelijk online programma dat je thuis kunt
                  volgen.</p>
              </Dropdown>
              <Dropdown title='Waarom vindt Koningsdag 2021 in Eindhoven plaats?'>
                <p>Vanwege de coronapandemie vieren we Koningsdag 2021 op een andere manier dan normaal: met de nadruk
                  op thuisblijven. De online programmering op <a href='https://www.koningsdageindhoven.nl'>www.koningsdageindhoven.nl</a>
                  geeft veel ruimte om de festiviteiten thuis te beleven. Eindhoven is de stad van Technologie, Design
                  en Kennis. Vanuit die expertise zorgt Eindhoven voor een uniek programma voor een breed publiek dat
                  past binnen de geldende maatregelen op dat moment. Een perfecte match dus!</p>
              </Dropdown>
              <Dropdown title='Kan ik naar Eindhoven komen met Koningsdag 2021?'>
                <p>Om corona te bestrijden blijven we zoveel mogelijk thuis. Kom daarom op Koningsdag niet naar
                  Eindhoven: de koninklijke familie bezoekt de stad op een besloten locatie. Thuis krijg je via de
                  NOS-registratie en via de online programmering op <a href='https://www.koningsdageindhoven.nl'>www.koningsdageindhoven.nl</a>
                  bijna alles mee van het bezoek.</p>
              </Dropdown>
              <Dropdown title='Hoe laat kan ik het bezoek van de Koning zien op Koningsdag 2021?'>
                <p>Het bezoek van de koning aan Eindhoven is op 27 april 2021 van ongeveer 11.00u tot 13.00u live te
                  volgen via NOS en via <a href='https://www.koningsdageindhoven.nl'>www.koningsdageindhoven.nl</a></p>
              </Dropdown>
              <Dropdown title='Wat is het programma van Koningsdag 2021?'>
                <p>We werken op dit moment hard aan een verrassende digitale Koningsdag 2021, hou daarom deze website
                  goed in de gaten. Zo kunnen we straks op een veilige manier toch samen het feest vieren.</p>
              </Dropdown>
              <Dropdown title='Is er ook muziek tijdens Koningsdag 2021?'>
                <p>Jazeker! Een Koningsdag zonder muziek is geen echte Koningsdag. Het programma biedt diverse optredens
                  aan waar je thuis van kunt genieten. Blijf via deze website en social media op de hoogte. Later wordt
                  hier meer over bekend.</p>
              </Dropdown>
              <Dropdown title='Waar kan ik parkeren tijdens Koningsdag in Eindhoven?'>
                <p>Alhoewel je met je mobiel overal mee kunt kijken, is het handig om je laptop, pc, tablet of telefoon
                  op een vaste plek te parkeren waar je goede WiFi hebt. Want je weet nooit wie je op bezoek krijgt!</p>
              </Dropdown>
              <Dropdown title='Is het gratis?'>
                <p>Voor niets gaat de zon op, maar het programma vanuit Eindhoven voor Koningsdag 2021 doet dat wel.
                  Zonder extra kosten kan je van het officiële programma genieten. Je tompoucen en oranjebitter zijn
                  voor eigen rekening.</p>
              </Dropdown>
              <Dropdown title='Waar kan ik het nieuws over Koningsdag in Eindhoven volgen?'>
                <p><a href='https://www.facebook.com/gemeente.Eindhoven' target='_blank'>Hier</a>. <a
                  href='https://www.instagram.com/gemeente_eindhoven/' target='_blank'>Hier</a>. <a
                  href='https://www.youtube.com/EHV4U' target='_blank'>Hier</a>, maar ook <a
                  href='https://nl.linkedin.com/company/gemeente-eindhoven' target='_blank'>hier</a> en <a
                  href='https://twitter.com/gem_eindhoven' target='_blank'>hier</a>.</p>
              </Dropdown>
              <Dropdown title='Mag ik op Koningsdag 2021 met meer mensen bij elkaar zijn?'>
                <p>Check altijd de huidige maatregelen en adviezen via <a
                  href='https://www.rijksoverheid.nl/onderwerpen/coronavirus-covid-19' target='_blank'>www.rijksoverheid.nl</a>.
                  Voor Koningsdag zijn er geen uitzonderingen en het programma in Eindhoven past binnen de dan geldende
                  maatregelen. Wel kun je natuurlijk online samen genieten via een second screen.</p>
              </Dropdown>
              <Dropdown title='Wordt mijn privacy gewaarborgd op het online platform?'>
                <p>Ja. De gemeente Eindhoven zorgt voor passende beveiliging van de persoonsgegevens die zij onder zich
                  heeft, in lijn met de daarvoor geldende wettelijke eisen en richtlijnen. Deze website slaat geen
                  persoonsgegevens op en maakt alleen gebruik van cookies voor functionele en analytische
                  doeleinden. </p>
                <p>Lees ook de <a href='https://www.eindhoven.nl/cookies' target='_blank'>cookieverklaring</a> van de
                  gemeente Eindhoven.</p>
              </Dropdown>
            </DropdownGroup>

            <h2 class='title text-center'>Pers</h2>
            <DropdownGroup>
              <Dropdown title='Persaccreditatie Koningsdag 2021'>
                <p>De persaccreditatie vindt plaats van eind maart tot begin april. Vanwege de corona maatregelen is het
                  mogelijk dat minder media dan gebruikelijk op Koningsdag worden toegelaten. Hou deze website in de
                  gaten voor meer informatie over de accreditatie.</p>
              </Dropdown>
              <Dropdown title='Wat is het programma van Koningsdag 2021?'>
                <p>Eind maart presenteren we het programma. Hou deze website in de gaten voor de exacte datum.</p>
              </Dropdown>
              <Dropdown title='Waar kan ik HR-beeldmateriaal opvragen?'>
                <p>Via <a href='https://www.eindhoven.nl/koningsdag' target='_blank'>deze link</a> is LR en HR materiaal
                  voor de media rechtenvrij beschikbaar. Daar is al het grafisch materiaal van Koningsdag 2021 te
                  downloaden. Het is rechtenvrij, we vragen wel uw aandacht voor de
                  aanwijzingen van toepassing in het guidebook.</p>
              </Dropdown>
            </DropdownGroup>
          </div>
        </div>
      </section>
      <footer class='site-footer'>
        <div class='site-footer__col'>
          <h2 class='title'>
            Contact met&nbsp;de organisatie?
          </h2>
          <p>
            <a href='mailto:koningsdag2021@eindhoven.nl' class='button'>
              Stuur ons een email <i class='arrow'>→</i>
            </a>
          </p>
          <SocialLinks></SocialLinks>
          <p class='small' style='margin-top: 2.5rem;'>
            <a href='/privacy' target='_blank'>Cookies &amp; Privacy</a>
          </p>
        </div>
        <div class='site-footer__col'>
          <h2 class='title'>
            Pers
          </h2>
          <p>Accreditatie vindt plaats eind maart, houdt deze website in de gaten.</p>
          <p>
            <a href='https://www.eindhoven.nl/koningsdag' class='button' target='_blank'>
              Mediakit <i class='arrow'>→</i>
            </a><br />
            <a href='https://www.eindhoven.nl/koningsdag' class='button' target='_blank'>
              Facts and figures <i class='arrow'>→</i>
            </a>
          </p>
        </div>
      </footer>
    </div>
    <div class='pattern-rwb'></div>
  </div> -->
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
