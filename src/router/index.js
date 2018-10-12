import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import City from '@/pages/city/City'
import Details from '@/pages/detail/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/City',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Details
    }
  ],
  scrollBehavior (to, from, savedPosition) {  //解决页面用滚动的时候，影响别的页面，比如说，在首页用了scroll。拉到下面进入某饿详情的时候，详情页面也会被拉到下面
    return { x: 0, y: 0 }
  }
})
// /detail/:id' 动态路由，id是参数