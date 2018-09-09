<template>
  <blog-list v-bind:blogMsgs="blogs"></blog-list>
</template>

<script>
import blogList from '../components/blogList';

export default {
  components: { blogList },
  data() {
    return {
      blogs: [
        {
          title: 'first blog',
          date: new Date(),
        },
        {
          title: 'second blog',
          date: new Date(),
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
