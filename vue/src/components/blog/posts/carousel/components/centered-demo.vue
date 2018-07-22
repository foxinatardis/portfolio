<template lang="html">
    <div class="container">
        <div class="wrapper">
            <div class="element far-left"></div>
            <div class="element left"></div>
            <div class="element center"></div>
            <div class="element right"></div>
            <div class="element far-right"></div>
        </div>
    </div>
</template>

<script>

    export default {};

</script>

<style lang="postcss" scoped>

    .container {
        position: relative;
        height: 300px;
        clear: both;
        width: 0px;
        margin: 0 auto;
        perspective: 200px;

        .wrapper {
            margin-left: -200px;

            .element {
                position: absolute;
                background-color: grey;
                border: 1px solid black;
                height: 300px;
                width: 400px;

                &.far-left {
                    -o-transform: translate3d(-47vw, 0px, -175px);
                    -moz-transform: translate3d(-47vw, 0px, -175px);
                    -webkit-transform: translate3d(-47vw, 0px, -175px);
                    -ms-transform: translate3d(-47vw, 0px, -175px);
                    transform: translate3d(-47vw, 0px, -175px);
                    z-index: 3;
                }
                &.left {
                    -o-transform: translate3d(-22vw, 0px, -75px);
                    -moz-transform: translate3d(-22vw, 0px, -75px);
                    -webkit-transform: translate3d(-22vw, 0px, -75px);
                    -ms-transform: translate3d(-22vw, 0px, -75px);
                    transform: translate3d(-22vw, 0px, -75px);
                    z-index: 5;
                }
                &.center {
                    -o-transform: translate3d(0vw, 0px, 0px);
                    -moz-transform: translate3d(0vw, 0px, 0px);
                    -webkit-transform: translate3d(0vw, 0px, 0px);
                    -ms-transform: translate3d(0vw, 0px, 0px);
                    transform: translate3d(0vw, 0px, 0px);
                    z-index: 7;
                }
                &.right {
                    -o-transform: translate3d(22vw, 0px, -75px);
                    -moz-transform: translate3d(22vw, 0px, -75px);
                    -webkit-transform: translate3d(22vw, 0px, -75px);
                    -ms-transform: translate3d(22vw, 0px, -75px);
                    transform: translate3d(22vw, 0px, -75px);
                    z-index: 5;
                }
                &.far-right {
                    -o-transform: translate3d(47vw, 0px, -175px);
                    -moz-transform: translate3d(47vw, 0px, -175px);
                    -webkit-transform: translate3d(47vw, 0px, -175px);
                    -ms-transform: translate3d(47vw, 0px, -175px);
                    transform: translate3d(47vw, 0px, -175px);
                    z-index: 3;
                }
            }
        }
    }

</style>
