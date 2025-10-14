import {
  ref,
  inject,//依赖注入，全局共享
}from 'vue'
import RouterLink from './RouterLink.vue'
import RouterView from './RouterView.vue'

const ROUTER_KEY = '__router__'// 路由实例的key

function createRouter(options){
  return new Router(options)
}
function createWebHashHistory(){

}
function useRouter(){
  return inject(ROUTER_KEY)
}

class Router{
  constructor(options){
    this.routes = options.routes
  }
  install(app){
    app.provide(ROUTER_KEY,this)
    // console.log(app)
    app.component('router-link',RouterLink)
    app.component('router-view',RouterView)
  }
}

export {
  createRouter,
  createWebHashHistory,
  useRouter
}