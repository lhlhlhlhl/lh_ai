<template>
  <div>
    abc
  </div>
</template>

<script setup>
import mitter from '../mitt.js'
const someMethod = () =>{
  console.log('abc')
}
// 订阅者
mitter.on('handleChange',someMethod)//可以触发MittB组件内的事件

</script>

<style  scoped>

</style>