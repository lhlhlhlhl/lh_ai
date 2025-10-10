<template>
  <div>
    {{ count }}
    <!-- @是vue中的事件绑定 vue的文档特别好 -->
    <EmitChild @myClick="onMyClick"/>
  </div>
</template>

<script setup>
import EmitChild from './EmitChild.vue'
import { ref } from 'vue'
const count = ref(0)
const onMyClick = (msg) =>{
  console.log('点击了子组件')
  console.log(msg)
  count.value++
}
</script>

<style  scoped>

</style>