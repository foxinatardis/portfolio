<template lang="html">
    <div class="container">
        <div class="element far-left"></div>
        <div class="element left"></div>
        <div class="element center"></div>
        <div class="element right"></div>
        <div class="element far-right"></div>
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
        perspective: 200px;

        .element {
            position: absolute;
            background-color: grey;
            border: 1px solid black;
            height: 300px;
            width: 400px;

            &.far-left {
                transform: translate3d(-47vw, 0, -175px);
                z-index: 3;
            }
            &.left {
                transform: translate3d(-22vw, 0, -75px);
                z-index: 5;
            }
            &.center {
                transform: translate3d(0, 0, 0);
                z-index: 7;
            }
            &.right {
                transform: translate3d(22vw, 0, -75px);
                z-index: 5;
            }
            &.far-right {
                transform: translate3d(47vw, 0, -175px);
                z-index: 3;
            }
        }
    }

</style>
