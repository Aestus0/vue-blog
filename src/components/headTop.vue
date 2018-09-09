<template>
  <header v-bind:class="[headerClass]">
    <span class="logo">{{myBlog}}</span>
    <div>
      <router-link to="/other">首页</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeadTop',
  components: ['routerLink'],
  data() {
    return {
      headerClass: 'header',
      myBlog: '黄田阳个人博客',
    };
  },
};
</script>

<style scoped>
  .header {
    /*background-color: red;*/
    height: 60px;
    background-color: black;
    opacity: 0.9;
    line-height: 60px;
  }

  .logo {
    float: left;
    margin-left: 30px;
    color: #00A7EB;
    font: 22px;
    font-weight: bold;
    cursor: pointer;
  }
</style>
