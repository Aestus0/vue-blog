<template>
  <div>
    <header-top :back="back"></header-top>
    <template v-for="item in blogs">
      <blog-item :detail="item"></blog-item>
    </template>
    <!--<blog-item :detail="blogs[0]"></blog-item>-->
  </div>
</template>

<script>
import blogItem from '../components/blogItem';
import headerTop from '../components/headTop';
import { getBlogDescription } from '../api/getdata';

const imgUrl = require('../assets/7V8uyapbxLw.jpg');

export default {
  components: { headerTop, blogItem },
  data() {
    return {
      back: imgUrl,
      carouselClass: [],
      imgs: [''],
      blogs: {},
    };
  },
  created() {
    this.getBlogDescription()
      .then((response) => {
        this.blogs = response.data;
      })
      .catch(error => console.log(error));
  },
  methods: {
    getBlogDescription,
  },
};
</script>

<style scoped>

</style>
