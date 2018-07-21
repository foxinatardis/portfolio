<template lang="html">
    <div class="">
        <div class="well col-xs-12 col-sm-10 col-sm-offset-1">
            <h3>Promises &gt; Callbacks</h3>
            <img src="/static/images/promise.png" alt="code" class="img-responsive col-xs-12 col-sm-8"/>
            <div class="image-spacer visible-xs col-xs-12">
            </div>
            <p>JavaScript Promises are more than just callbacks, I believe that proper use of Promises can reduce development time and improve the readability of your code base. This has the added benefit of making future maintenance of your code much easier when going back to make changes months later.</p>
            <h3 class="pull-right"><router-link :to="{ path: '/blog/posts/promises' }">Read More  &gt;&gt;</router-link></h3>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'PromisesSummary'
    };

</script>

<style lang="css">

    .image-spacer {
        margin-bottom: 20px;
    }

</style>
