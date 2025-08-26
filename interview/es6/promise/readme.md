# Promise.all
## 使用
要学会如何去处理Promise.all被rejected的情况
```js
Promise.all([p1, p2, p3])
      .then(res => {
        console.log(res)//打印Promise.all返回的结果

      })
      .catch(err => //catch第一个失败的值
        console.log(err))
```

## MDN 定义（js专业文档）
  Promise.all 方法接受一个promise的 **iterable**（可迭代对象） 类型的输入
  并且只返回一个Promise实例。输入的所有promise的resolve回调结果是一个数组，并按顺序放
  只要任何一个输入的reject 回调执行，就会抛出错误，Promise.all的promise失败，catch执行。reject是第一个抛出的错误
  
  - 如果有一个Promise.all有一个promise子项已经失败了，那么其他还没有完成的promise子项还会继续执行吗?
    会的！其他还没有完成的 Promise 子项会继续执行，不会被中断或取消。
    Promise.all 只是监听这些 Promise，一旦有任意一个失败，它就立刻进入 reject 状态，但不会阻止其他 Promise 继续运行。

### iterable
  Array,Map,Set都属于iterable类型
  Iterable 是一种协议（规范），表示一个对象可以被“遍历”——也就是可以被 for...of、展开运算符 ...、Array.from() 等方式逐个取出其中的值。
只要一个对象实现了 Symbol.iterator 方法，它就是可迭代的。

## Promise的方法
- all,race,any,allSettled,finally
  这一组Promise 上的静态方法，带来了promise的并行
  async await简单，不需要then的链式调用，优雅的异步变同步，但是也不能乱用，他是串行的
  如果多个promise的值前后有依赖，async/await有优势
  如果没有的化，promise.all并发更快

  如果并行业务需求，all/race/any/allSettled会更加高效适合

  - Promise.all()	全成功才成功：所有 Promise 都 fulfilled 时，它才 fulfilled；任何一个 rejected，它就立即 rejected。
  - Promise.race()	谁快听谁的：哪个 Promise 最先完成（无论 fulfilled 或 rejected），它的结果就决定了 Promise.race() 的最终状态。
  - Promise.any()	首个成功即成功：只要有一个 Promise fulfilled，它就立即 fulfilled；只有当所有 Promise 都 rejected 时，它才 rejected（返回 AggregateError）。
  - Promise.allSettled()	全部完成才结束：等待所有 Promise 都 settled（fulfilled 或 rejected），然后返回一个包含每个 Promise 结果（含状态和值/原因）的数组。

- promise.resolve
  将promise的状态从pending改变为fulfilled
  返回一个新的promise
- promise.reject
  将promise的状态从pending改变为rejected
  返回一个新的promise

- const p2 = new Promise((resolve,reject)=>{})
    这是一个完整的promise的实例化过程