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
export default {
}
</script>

<style lang="css" scoped>
.container {
  position: relative;
  height: 300px;
  clear: both;
  perspective: 200px;
}
.element {
  position: absolute;
  background-color: grey;
  border: 1px solid black;
  height: 300px;
  width: 400px;
}
.far-left {
  -ms-transform: translate3d(-47vw, 0, -175px);
  -webkit-transform: translate3d(-47vw, 0, -175px);
  transform: translate3d(-47vw, 0, -175px);
  z-index: 3;
}
.left {
  -ms-transform: translate3d(-22vw, 0, -75px);
  -webkit-transform: translate3d(-22vw, 0, -75px);
  transform: translate3d(-22vw, 0, -75px);
  z-index: 5;
}
.center {
  -ms-transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  z-index: 7;
}
.right {
  -ms-transform: translate3d(22vw, 0, -75px);
  -webkit-transform: translate3d(22vw, 0, -75px);
  transform: translate3d(22vw, 0, -75px);
  z-index: 5;
}
.far-right {
  -ms-transform: translate3d(47vw, 0, -175px);
  -webkit-transform: translate3d(47vw, 0, -175px);
  transform: translate3d(47vw, 0, -175px);
  z-index: 3;
}
</style>
