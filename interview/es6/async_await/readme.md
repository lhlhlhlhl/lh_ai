# async/await 是什么，如何实现的

他是es2017（es8）引入的异步编程语法糖（说明本质上没有发生变化，只是看起来更优雅）,让异步代写起来像同步，解决了链式调用很麻烦的问题

- async/await 组合使用
- async 申明的函数一定返回一个Promise
- await 会暂停async函数的执行，等待右边的promise解决后继续执行
- 本质还是异步的，后面的代码会封装到promise的then里面

- 本质上，async/await 是对Promise + Generator是封装
    generator 思想很好，*区别于普通函数，yield来暂停执行
    运行得到一个生成器 next() value 和done 状态
    太复杂了，
    async 函数内部会被编译成一个状态机(等待？完成？)
- async/await简单优雅，但是不要滥用，并发的请用Promise.all