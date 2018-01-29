<template lang="html">
  <div class="">
    <div class="jumbotron">
      <div class="container-fluid">
      </div>
    </div>
    <div class="container">
      <transition name="fade" mode="out-in">
        <router-view class="content"/>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="css" scoped>
</style>
