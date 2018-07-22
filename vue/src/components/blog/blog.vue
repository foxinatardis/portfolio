<template lang="html">
    <div>
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script>

    export default {};

</script>

<style lang="postcss" scoped>

    >>> .jumbotron {
        background: url('/static/images/video-card.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        padding-bottom: 40vh;
    }
    >>> p {
        padding: 10px;
    }

</style>
