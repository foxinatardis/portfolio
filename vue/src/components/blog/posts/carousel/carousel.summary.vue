<template lang="html">
  <div class="">
    <div class="well col-xs-12 col-sm-10 col-sm-offset-1">
      <h3>Round &amp; Round</h3>
      <img src="/static/images/round_and_round.jpg" alt="code" class="img-responsive col-xs-12 col-sm-8"/>
      <div class="image-spacer visible-xs col-xs-12">
      </div>
      <p>While 'Round and Round' may be one of the most recognized of singles by 80's hair band Ratt, that is not what this blog post is about. I am here to talk about CSS in 3D and how simple it can be for creating a great carousel display especially in the context of a modern front end framework.</p>
      <h3 class="pull-right"><router-link :to="{ path: '/blog/posts/promises' }">Read More  &gt;&gt;</router-link></h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarouselSummary'
}
</script>

<style lang="css">
.image-spacer {
  margin-bottom: 20px;
}
</style>
