import Vue from 'vue';
import Router from 'vue-router';
import blogTitles from '../page/blogTitles';

Vue.use(Router);

const other = { template: '<p>wrong pages!</p>' };
const about = { template: '<p>It\'s about page</p>' };


export default new Router({
  mode: 'history',
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
    {
      path: '/about',
      name: 'about',
      component: about,
    },
  ],
});
