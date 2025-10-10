<template>
  <div>
    <h1>ParentOne</h1>
    <ChildOne :msg1="msg1" :msg2="msg2"/>
    <!-- :msg="msg1" 是将 msg1 这个变量传递给子组件 ChildOne 数据绑定-->
  </div>
</template>
<script>
import ChildOne from './ChildOne.vue'
import {ref} from 'vue'
// vue2时代类组件写法 没有函数式写法，就是一个对象，老时代的类式写法
// 借鉴react 函数式写法 现在？
export default{
  //数据部分
  data(){
    return{
      msg1:'这是给子组件的信息1'
    }
  },
  // 返回的部分template也直接调用
  setup(){
    const msg2 = ref('这是给子组件的信息2')
    return{
      msg2
    }
  },
  // 注册组件，在vue2之前如果需要在父组件内使用子组件，需要在父组件内注册
  components:{
    ChildOne
  }
}
</script>
