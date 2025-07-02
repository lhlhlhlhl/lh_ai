# promise
- CPU轮询
- 同步任务，异步任务
  异步任务
  先跳到后面去执行 代码的编写顺序和执行顺序不一样
  异步任务比较花时间
- 有个需求
111 输出放在后面
控制执行顺序

## Promise的底层逻辑
画个饼
- 异步任务需要些时间，不管的话，会跳到后面执行
 代码的可读性不好，代码的编写顺序和执行顺序不一样
- const p = new Promise(fn函数)
  类，专门用于解决异步问题
  Promise的prototype有then方法
- 异步任务放到这个fn里面
- fn里面的异步任务做完了，执行resolve()
- p.then(()=>{
    可以运行
})
- 我们把任务放到then里面，就可以把执行的流程交给resolve来处理

## 控制执行流程的es6套路
 - new promise()//请Promise类 控制异步流程 专业
 - ()=>{ //executor耗时性的异步任务
   异步任务 setTimeout,readFile,fetch....
 }
 - then原型方法
 - resolve() 执行之后，then 函数执行

 - promise .then升级到async await 成对出现
 async用于修饰函数，函数里面有异步任务
 await等待异步任务完成 异步变同步
