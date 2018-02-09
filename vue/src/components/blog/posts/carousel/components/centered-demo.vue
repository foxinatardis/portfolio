<template lang="html">
  <div class="container">
    <div class="wrapper">
      <div class="element far-left"></div>
      <div class="element left"></div>
      <div class="element center"></div>
      <div class="element right"></div>
      <div class="element far-right"></div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.container {
  position: relative;
  height: 200px;
  clear: both;
  width: 0px;
  margin: 0 auto;
}
.wrapper {
  margin-left: -150px;
}
.element {
  position: absolute;
  background-color: grey;
  border: 1px solid black;
  height: 200px;
  width: 300px;
}
.far-left {
  transform: perspective(200px) translateZ(-175px) translateX(-47vw);
  z-index: 3;
}
.left {
  transform: perspective(200px) translateZ(-75px) translateX(-22vw);
  z-index: 5;
}
.center {
  transform: perspective(200px) translateZ(0px) translateX(0vw);
  z-index: 7;
}
.right {
  transform: perspective(200px) translateZ(-75px) translateX(22vw);
  z-index: 5;
}
.far-right {
  transform: perspective(200px) translateZ(-175px) translateX(47vw);
  z-index: 3;
}
</style>
