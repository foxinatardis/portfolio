<template lang="html">
    <div>
        <a class="thumbnail" target='_blank' :href="image.source">
            <img :src="image.thumbnail" :alt="image.alt">
        </a>
        <div class="caption">
            <h3>{{ image.title }}</h3>
            <p>{{ image.caption }}</p>
        </div>
    </div>
</template>

<script>

    export default {
        props: ['image']
    };

</script>

<style lang="postcss" scoped>
</style>
