import Vue from 'vue';
import Router from 'vue-router';
import blogTitles from '../page/blogTitles';

Vue.use(Router);

const other = { template: '<p>wrong pages!</p>' };


export default new Router({
  routes: [
    {
      path: '/',
      name: 'blogTitles',
      component: blogTitles,
    },
    {
      path: '/blog',
      name: 'blog',
      component: other,
    },
  ],
});
