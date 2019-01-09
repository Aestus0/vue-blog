<template>
  <header :style="{height: '200px',background: 'url('+ back +') center','background-size': '100%'}">
    <transition name="fade">
      <div :class="['nav','nav-background']" v-if="isShow">
        <router-link class="router-link" to="/about">关于</router-link>
        <router-link class="router-link" to="/">首页</router-link>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'HeadTop',
  components: ['routerLink'],
  props: ['back'],
  data() {
    return {
      isShow: true,
    };
  },
  created() {
    this.scroll();
  },
  methods: {
    scroll() {
      let initialTop = window.pageYOffset ||
          document.documentElement.scrollTop || document.body.scrollTop || 0;
      window.onscroll = () => {
        const currentTop = window.pageYOffset ||
            document.documentElement.scrollTop || document.body.scrollTop || 0;
        const delta = currentTop - initialTop;
        initialTop = currentTop;
        this.isShow = delta < 0;
      };
    },
  },
};
</script>

<style scoped>

  .nav {
    position: fixed;
    top: 0;
    float: right;
    width: 100%;
  }

  .nav-background {
    background-color: #fff;
    opacity: .5;
  }

  .router-link {
    color: #000;
    float: right;
    margin-right: 10px;
  }

  .router-link:hover {
    color: #fff;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>
