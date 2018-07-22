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
        z-index: 1;
        position: fixed;
        top: 50px;
        width: 100%;
        padding-bottom: 40vh;
    }
    >>> .content {
        z-index: 2;
        width: 100%;
        background-color: #eee;
        position: absolute;
        left: 0;
        top: 52vh;
        padding: 40px 7vw 80px 7vw;
    }

</style>
