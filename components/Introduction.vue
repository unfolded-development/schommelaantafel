<template>
    <section class="intro" id="site-intro">

        <div class='content-section'>
            <div class="intro__content">
                <h1>It’s better when you move.</h1>
            </div>
        </div>

        <a v-scroll-to="'#site-about'" class="intro__btn-down">
            <i class="icon icon--arrow-down"></i>
        </a>

        <svg class="intro__animation-blocks" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <title>Text Pattern Fill Example</title>

            <image height="100%" id="intro-image" x="0" y="0" href="~/static/images/intro-2.jpg" mask="url(#animationMask)" />

            <mask id="animationMask">
                <rect class="intro__animation-block-item --1" width="97.5%" height="55%" x="-1%" y="0%" fill="white" />
                <rect class="intro__animation-block-item --2" width="103%" height="49%" x="2%" y="50%"  fill="white" />
            </mask>
        </svg>
    </section>
</template>

<script>
export default {
    mounted() {
        setTimeout(() => {
            document.getElementsByClassName("intro__animation-block-item")[0].classList.add("load");
            document.getElementsByClassName("intro__animation-block-item")[1].classList.add("load");

            setTimeout(() => {
                document.getElementsByClassName("intro__btn-down")[0].click();
            }, 2750);
        }, 500);
    }
}
</script>