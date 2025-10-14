<template>
  <a :href="'#'+props.to">
    <!--:href="to"表示是动态的，可改变，由外部传入  -->
    <slot />
    <!-- slot插槽 作用：用于自定义链接的内容 -->
  </a>
</template>
<script setup>
import {defineProps} from 'vue'
let props = defineProps({
  to: {
    type: String,
    default: '/'
  }
})
</script>
<style scoped>

</style>
