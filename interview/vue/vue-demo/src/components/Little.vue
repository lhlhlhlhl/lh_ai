<template>
  <div>
    {{name}}
  </div>
</template>

<script setup>
import {inject} from 'vue' // 向内注入,邀请
const name = inject('name')
</script>

<style  scoped>

</style>