<template lang="html">
    <div>
        <div class="jumbotron">
            <div class="container-fluid">
            </div>
        </div>
        <transition name="fade" mode="out-in">
            <router-view class="content"/>
        </transition>
    </div>
</template>

<script>

    export default {
        name: 'Interests'
    };

</script>

<style lang="css" scoped>

    .jumbotron {
        background: url('/static/portfolio_pics/sitting-climbing-quarter-size.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }

</style>
