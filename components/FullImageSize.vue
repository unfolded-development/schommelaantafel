<template>
    <section class="image-full-size" ref="imageFullSize">
        <img :style="{ top: imageAbsoluteOffset }" class="image-full-size__image" ref="paralexImage" src="/images/full-size-image.jpeg">
    </section>
</template>

<script>
    export default {
        data() {
            return {
                imageAbsoluteOffset: "50%"
            }
        },
        mounted() {
            document.getElementsByTagName("body")[0].onscroll = this.scrollHandle;
        },
        methods: {
            scrollHandle: function (scrollEvent) {
                var userTopOffset   = scrollEvent.path[1].scrollY;
        	    var screenHeight    = scrollEvent.path[1].innerHeight;

                if (userTopOffset + screenHeight > this.$refs.imageFullSize.offsetTop &&  userTopOffset < (this.$refs.imageFullSize.offsetTop + this.$refs.imageFullSize.clientHeight))  {
                    var pixelTop = userTopOffset - this.$refs.imageFullSize.offsetTop;
                    
                    if (this.$refs.paralexImage.offsetWidth > 2000) {
                        var pixelPercentage = ((pixelTop / this.$refs.imageFullSize.clientHeight * 3 * 100) + 50) * (1.2 / 2);
                    } else {
                        var pixelPercentage = ((pixelTop / this.$refs.imageFullSize.clientHeight * 100) + 50) * (1.2 / 2);
                    }
                    
                    this.imageAbsoluteOffset = pixelPercentage + "%";
                }
            }
        }
    }
</script>