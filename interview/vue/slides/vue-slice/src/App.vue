<script setup>
import {
  ref,// 响应式数据 ref(简单的响应式) reactive（对象，表单，密码）
  onMounted,// 生命周期，组件挂载完成后执行，目的是在卸载时清除定时器
  onUnmounted,// 组件卸载完成后执行
} from 'vue'

const images = ['#ff6b6b','#4ecdc4','#1abc9c','#f39c12','#2c3e50']//颜色块代替图片
const currentIndex = ref(0)// 默认显示第一张 ref放的是简单数据类型0
// currentIndex 的数据类型是对象
let timer = null// 定时器

const nextSlide = () => {
  // currentIndex.value++// 0 1 2 3 4 0 1 2 3 4 ...
  // if (currentIndex.value >= images.length) {
  //   currentIndex.value = 0// 超过数组长度，重置为0
  // }
  currentIndex.value = (currentIndex.value + 1) % images.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}

// 挂载之后
onMounted(() => {
  timer = setInterval(nextSlide, 3000)
})

onUnmounted(() => {
  clearInterval(timer)// 组件卸载时清除定时器
})

</script>

<template>
  <div class="carousel">
    <div class="slides"
      :style="{transform:`translateX(-${currentIndex * 100}%)`}"
      
    >
    <!-- transform:`translateX(-${currentIndex * 100}%)`:负值：往左移动 -->
     <div 
      class="slide"
      v-for="(item,index) in images"
      :key="index"
      :style="{backgroundColor:item}"
     >
      Slide {{ index+1 }}
    </div>
    </div>
    <button class="arrow left" @click="prevSlide">
      &lt;
      <!-- &lt; 左箭头 -->
    </button>
    <button class="arrow right" @click="nextSlide">
      &gt;
      <!-- &gt; 右箭头 -->
    </button>
  </div>
</template>

<style scoped>
/* scoped 模块化样式 */
.carousel {
  position: relative;
  width: 400px;
  height: 200px;
  overflow: hidden;
  /* 隐藏超出部分 */
  border-radius: 12px;
}
.slides {
  display: flex;
  /* 水平排列 启动弹性布局*/
  transition: transform 0.5s ease;
  /* 过渡效果：0.5秒内平滑过渡 */
  width: 100%;
  height: 100%;
  /* 继承父元素的宽度和高度 */
}
.slide{
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 24px;
}
.arrow{
  position: absolute;
  /* 定位 */
  top: 50%;
  transform: translateY(-50%);
  /* 垂直居中 */
  width: 40px;
  height: 40px;
  background-color: rgba(0,0,0,0.5);
  color: #fff;
  font-size: 20px;
  border: none;
  /* 边框 */
  border-radius: 4px;
  cursor: pointer;
  /* 鼠标悬停样式 */
  padding: 8px 12px;
}
.arrow.left{
  left: 10px;
}
.arrow.right{
  right: 10px;
}
.arrow:hover{
  background-color: rgba(0,0,0,0.6);
}
</style>
