<template>
  <div id="app">
    <header-top></header-top>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import headerTop from './components/headTop';

export default {
  name: 'App',
  components: {
    headerTop,
  },
};
</script>

<style lang="stylus">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/

body
  margin: 0;

</style>
