<template>
  <div>
    <Child/>
  </div>
</template>

<script setup>
import Child from './Child.vue'
import { provide } from 'vue' //向外提供
provide('name','木兰花')

</script>

<style  scoped>

</style>