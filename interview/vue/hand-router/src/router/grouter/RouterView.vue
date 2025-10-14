<template>
  <div>
    <!-- 全局组件
    component 表示动态组件
    :is="currentComponent" 表示动态组件的名称，由外部传入
    -->
    <component :is="component" />
  </div>
</template>
<script setup>
import { computed } from 'vue';//计算属性
import {useRouter} from '../grouter/index'// hooks 路由实例
let router = useRouter()// 路由实例
// 计算属性
const component = computed(()=>{
  const route = router.routes.find(item=>item.path === window.location.hash.slice(1))
  return route ? route.component : null
})

</script>
<style scoped>

</style>
