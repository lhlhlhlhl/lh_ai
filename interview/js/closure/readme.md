# 闭包

## 介绍闭包
- 一句话介绍闭包
  closure是js的重要语法特性，能访问**自由变量**的函数就叫闭包
  当一个内部函数访问了它所在的外部函数作用域中的变量，
  即使外部函数以及执行完毕，这些变量仍然停留在内存中，像背包一样，内部函数还可以调用
  这种机制叫做闭包

  你不知道的JavaScript书中写道： 闭包 = 函数 + 词法作用域
  setTimeout是不是闭包？
  在于词法作用域是否有对外部的引用

  形成条件：函数嵌套函数，内部函数可以在外界访问（通过返回或挂载在全局）
          立即执行函数
          块级作用域 + 定时器

  - 底层原理
      词法作用域（Lexical Scope）
        JavaScript 在定义函数时，就确定了函数能访问哪些变量（作用域链在申明阶段就确定了）
      作用域链（Scope Chain）
        内部函数在查找变量时，会沿着作用域链，向上查找外层变量
      变量的持久化
         由于闭包函数依然引用自由变量，JS V8引擎的GC（垃圾回收机制）认为
         这些外部变量还在用，所以不会销毁，导致变量值持久存在
- 模型图
    [Global Scope]
          ^
          |
    [Outer Function Scope]
          ^
          |
    [Inner Function Scope]

- 业务场景
  - 数据的私有化
      封装类或函数的复杂性
  - 防抖节流
  - 循环绑定事件
  ```js
  for(var i = 0; i < 5; i++){
    setTimeout(() => {
      console.log(i)
    }, 1000)
  }

  //var->let就闭包了
  // 或者弄一个立即执行函数 IIFE
  ```
  - 缓存记忆
  ```js
  function memoize(fn){
    const cache = {}
    return function(key){
      if(cache[key]) return cache[key]
      const result = fn(key)
      cache[key] = result
      return result
    }
  }
  ```
  - 柯里化
  一个接受多个参数的函数，转换为一系列只接受一个参数的函数链
  柯里化的实现
  ```js
  function curry(fn){
    return function(){
      const args = Array.from(arguments)
      if(args.length >= fn.length){
        return fn.apply(this, args)
      }else{
        return curry(fn.bind(this, ...args))
      }
    }
  }
  ```
  - 偏函数
  固定函数的一些参数，返回一个新的函数，新函数接受剩余的参数
  偏函数的实现
  ```js
  function partial(fn, ...args){
    return function(){
      const newArgs = [...args, ...arguments]
      return fn.apply(this, newArgs)
    }
  }
  ```
  - 函数组合
  多个函数组合成一个函数，每个函数的输出作为下一个函数的输入
  函数组合的实现
  ```js
  function compose(...fns){
    return function(){
      const args = Array.from(arguments)
      let result = fns[0].apply(this, args)
      for(let i = 1; i < fns.length; i++){
        result = fns[i].call(this, result)
      }
      return result
    }
  }
  ```
## 总结

闭包是函数与其外部词法作用域的组合，它让函数在外部作用域执行完后依然能访问里面的变量
本质是：作用域链导致变量持久化，在工程中常用于数据私有化，防抖节流，事件绑定，缓存优化等

我在项目中经常用闭包减少全局变量污染，但也要注意可能带来内存的泄漏，不需要时手动释放引用

## setTimeout 里的回调函数是闭包吗？
从闭包的定义上说，setTimeout的回调一般会形成闭包。因为它在创建的时候捕获了外层函数的变量
即使外层函数执行结束，变量依旧可访问

但严格来说，setTimeout的回调函数本身不是闭包，因为闭包的本质是函数+词法环境的绑定
是否是闭包，取决于回调是否会调用自由变量，而不是setTimeout API

比如在循环定时器时，用let申明块级作用域或IIFE 闭包定时器回调，时闭包