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
}
.element {
  position: absolute;
  background-color: grey;
  border: 1px solid black;
  height: 300px;
  width: 400px;
}
.far-left {
  -ms-transform: perspective(200px) translateZ(-175px) translateX(-47vw);
  -webkit-transform: perspective(200px) translateZ(-175px) translateX(-47vw);
  transform: perspective(200px) translateZ(-175px) translateX(-47vw);
  z-index: 3;
}
.left {
  -ms-transform: perspective(200px) translateZ(-75px) translateX(-22vw);
  -webkit-transform: perspective(200px) translateZ(-75px) translateX(-22vw);
  transform: perspective(200px) translateZ(-75px) translateX(-22vw);
  z-index: 5;
}
.center {
  -ms-transform: perspective(200px) translateZ(0px) translateX(0vw);
  -webkit-transform: perspective(200px) translateZ(0px) translateX(0vw);
  transform: perspective(200px) translateZ(0px) translateX(0vw);
  z-index: 7;
}
.right {
  -ms-transform: perspective(200px) translateZ(-75px) translateX(22vw);
  -webkit-transform: perspective(200px) translateZ(-75px) translateX(22vw);
  transform: perspective(200px) translateZ(-75px) translateX(22vw);
  z-index: 5;
}
.far-right {
  -ms-transform: perspective(200px) translateZ(-175px) translateX(47vw);
  -webkit-transform: perspective(200px) translateZ(-175px) translateX(47vw);
  transform: perspective(200px) translateZ(-175px) translateX(47vw);
  z-index: 3;
}
</style>
