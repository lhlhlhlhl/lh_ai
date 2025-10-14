import {
  createRouter,//创建路由实例
  createWebHashHistory//创建hash模式的路由历史记录
} from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'

const routes = [
  {
    path: '/',
    name:'home',
    component: Home
  },
  {
    path: '/about',
    name:'about',
    component: About
  }
]
const router = createRouter({
  history: createWebHashHistory(),//创建hash模式的路由历史记录
  routes
})
console.log(router,'////')
export default router
