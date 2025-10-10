# 组件通信

- 父子
  - 父传子 props
- 子父
  - 子传父 事件触发 emit
- 兄弟
- 跨组件
- 全局共享
- 事件总线
## vue 选项式(Options)API
- 选项式类式写法，非常傻瓜，好理解
  data 数据 自有状态
  props 参数
  method 方法
  components 组件
  setup 组合式API 函数式写法
    return{
      ref 响应式数据 组合API
    }
  好处是新手喜欢
  高手特别烦 被类式写法所限制，有this丢失的问题

- vue3 从setup 组合式api 借鉴react 走向函数式写法
- provide/inject 跨组件通信
- 背后其实就是订阅发布者模式 事件总线机制
- vuex/pinia