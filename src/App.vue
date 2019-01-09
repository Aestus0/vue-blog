<template>
  <div id="app">

    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
import 'animate.css';

export default {
  name: 'App',
  data() {
    return {
    };
  },
  components: {
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
