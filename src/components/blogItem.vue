<template>
  <section class="" v-on:click="showDetail">
    <h1>{{detail.title}}</h1>
    <p>{{detail.description}}...</p>
    <h5 style="color: #808080">{{detail.creationDate}}</h5>
  </section>
</template>

<script>

export default {
  name: 'blogItem',
  props: ['detail'],
  created() {
    // debugger;
  },
  beforeCreate() {
    // debugger
  },
  methods: {
    showDetail() {
      alert(this.detail.blogId);
    },
  },
};
</script>

<style scoped>

</style>
