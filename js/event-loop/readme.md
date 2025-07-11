# event loop
时间循环机制  JS执行机制

- js 单线程
同一时刻只能做一件事
同步任务尽快执行完，尽快渲染页面（重绘重排），响应用户的交互
耗时性的任务
    - setTimeout/setIntervsal
    - fetch/ajax
    - envetListener

- script 脚本
  一个宏任务

- 微任务有哪些？
  紧急的，优先的，同步任务执行完之后的一个补充
  - Promise.then
  - MutationObserver（为什么要把它设计为微任务？）
    dom的改变 在页面渲染前执行 在页面渲染前拿到DOM 有啥改变
  - queueMicrotask  微任务队列
  - process.nextTick()
  - requestAnimationFrame 