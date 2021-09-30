<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/blogo.png" class="mb-5">
    <Pare></Pare>
  </div>
</template>

<script>
import Pare from './components/Pare.vue'

export default {
  name: 'App',
  components: {
    Pare
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
.pare, .fill {
border: 2px solid mediumaquamarine;
}
.pare {
  background: #b4babe;
}

</style>
