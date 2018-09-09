<template>
  <ul >
    <li v-for="item in this.blogMsgs" :key="item.title" v-on:click="goContent(item)">
      {{item.title}}
    </li>
  </ul>
</template>

<script>

export default {
  name: 'blogList',
  props: ['blogMsgs'],
  methods: {
    goContent() {
      debugger;
      // console.log(item);
    },
  },
};
</script>

<style scoped>

</style>
