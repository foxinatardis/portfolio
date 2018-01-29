<template lang="html">
  <div>
    <div class="jumbotron">
     <div class="container-fluid">
     </div>
   </div>
   <div class="container content">
     <traffic-circle></traffic-circle>
     <promises></promises>
   </div>
  </div>
</template>

<script>
import PromisesSummary from '@/components/blog/posts/promises/promises.summary'
import TrafficCircleSummary from '@/components/blog/posts/traffic-circle/traffic-circle.summary'
export default {
  name: 'BlogDirectory',
  components: {
    'promises': PromisesSummary,
    'traffic-circle': TrafficCircleSummary
  }
}
</script>

<style lang="css" scoped>
  >>> .img-responsive {
    border-radius: 5px;
  }
  >>> h3 {
    padding-left: 15px;
  }
  >>> p {
    padding: 0 20px;
  }
</style>
