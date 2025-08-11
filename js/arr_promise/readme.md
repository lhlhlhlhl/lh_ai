# arr_promise

- 多个异步任务
    api.github.io/users/LeeAt67/repos
    api.github.io/users/lhlhlhlhl/repos
    要这些异步任务都执行完成，才能继续执行后面的代码
    - Promise.all 等待所有的异步任务都执行完成，才能继续执行后面的代码
    - Promise.race 等待第一个异步任务执行完成，就继续执行后面的代码

- 有一堆的异步任务要执行
- 每一项都是一个Promise
- Promise.all 本身也是返回一个promise
- 启动所有的promise,所有项都解决了，都成功，promise.all才解决，不然就失败
- 如果都成功，每个promise的结果会按原promise的下标存放
- Promise.all 是静态方法 类，不是实例方法

