<template>
  <div>
    Child
  </div>
</template>

<script setup>
defineExpose({
  childName:'子组件',
  someMethod(){
    console.log('子组件的方法调用')
  }
})
</script>

<style  scoped>

</style>