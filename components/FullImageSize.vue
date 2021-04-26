<template>
    <section class="image-full-size" style="background-image: url('/images/full-size-image.jpeg');" :style="style"></section>
</template>

<script>
    export default {
        props: {
            speed: {
                type: Number,
                default: .05
            }
        },
        data() {
            return {
                position: 0
            }
        },
        computed: {
            style() {
                return {
                    'background-position-y': this.position + 'px'
                }
            }
        },
        mounted() {
            document.getElementsByTagName("body")[0].onscroll = this.scrollHandle;
        },
        methods: {
            scrollHandle: function () {
                const screenHeight = window.innerHeight;

                const start = this.$el.offsetTop + (this.$el.clientHeight / 2) - screenHeight;
                const end = this.$el.offsetTop + (this.$el.clientHeight / 2);
                const height = end - start;

                const relativePosition = ((window.scrollY - start) / height)

                let speed  = 0;

                if (window.innerWidth > 1024) {
                    speed = this.speed * 2

                    if (window.innerWidth > 1600) {
                        speed = this.speed * 25
                    }
                } else {
                    speed = this.speed
                }

                if (window.innerWidth > 1024 && window.innerWidth < 1600) {
                    this.position = relativePosition * -(screenHeight * speed) - 300
                } else {
                    this.position = relativePosition * -(screenHeight * speed)
                }

                if (window.scrollY + window.innerHeight > document.body.getElementsByClassName("cta")[0].offsetTop) {
                    document.getElementsByClassName("cta")[0].classList.add("cta--show");
                }
            }
        }
    }
</script>