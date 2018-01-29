<template>
  <div id="app">
    <navigation></navigation>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 3.5em;
  }

  h2 {
    font-family: 'Roboto', sans-serif;
  }

  h3 {
    font-family: 'Roboto', sans-serif;
  }

  h4 {
    font-family: 'Roboto', sans-serif;
  }

  h5 {
    font-family: 'Roboto', sans-serif;
  }

  body {
    color: #000;
    background-color: #eee;
    font-family: 'Open Sans', sans-serif;
    text-align: justify;
  }
  .bottom {
    height: 100px;
  }
  .fade-enter-active {
    transition: opacity 0.5s ease-in;
  }
  .fade-leave-active {
    transition: opacity 0.3s ease-out;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>
