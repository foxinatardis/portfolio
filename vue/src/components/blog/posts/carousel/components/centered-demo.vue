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
                    transform: translate3d(-47vw, 0px, -175px);
                    z-index: 3;
                }
                &.left {
                    transform: translate3d(-22vw, 0px, -75px);
                    z-index: 5;
                }
                &.center {
                    transform: translate3d(0vw, 0px, 0px);
                    z-index: 7;
                }
                &.right {
                    transform: translate3d(22vw, 0px, -75px);
                    z-index: 5;
                }
                &.far-right {
                    transform: translate3d(47vw, 0px, -175px);
                    z-index: 3;
                }
            }
        }
    }

</style>
