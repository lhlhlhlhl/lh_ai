import {
  createRouter,
  createWebHistory,
} from 'vue-router'

import type {RouteRecordRaw} from 'vue-router'

const routes:RouteRecordRaw[]=[
  {
    path:'/login',
    name:'login',
    component:()=>import('@/views/Login.vue'),
  }
]