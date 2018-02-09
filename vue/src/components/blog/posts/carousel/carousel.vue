<template lang="html">
  <div class="container-fluid">
    <!-- <carousel-wrapper :items="items">
      <template lang="html" slot-scope="thing">
        <div class="parents" :style="{'background-color': thing.color}">
        </div>
      </template>
    </carousel-wrapper> -->

  </div>
</template>

<script>
import CarouselWrapper from './carousel-component.vue'
export default {
  components: {
    CarouselWrapper
  },
  data () {
    return {
      items: [
        {name: 'far-left', color: 'blue', text: 'FooBar'},
        {name: 'left', color: 'green'},
        {name: 'center', color: 'red'},
        {name: 'right', color: 'violet'},
        {name: 'far-right', color: 'cyan'},
        {name: '', color: 'darkslategray'}
      ]
    }
  }
}
</script>

<style lang="css">
  .parents {
    height: 300px;
    width: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
