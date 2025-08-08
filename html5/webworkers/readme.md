# webworkers

- html5 的特性
- js在做复杂、耗费计算性能、时间等任务时开启多线程
    浏览器端跑大模型
- js是脆皮 单线程
    不太适合计算
    Web Worker worker 线程
- 端模型是一个趋势
    电脑、浏览器、手机、植入（下载）大模型

- api
    new Worker('./worker.js')
    发送消息：
        主线程和Worker之间通过postMessage()方法互相发送消息。
        在Worker内部，可以监听onmessage事件来接收来自主线程的消息。
    接收消息：
        同样地，主线程也可以监听Worker发出的消息。通过为Worker实例添加onmessage事件监听器来实现。
        在Worker内部，可以使用postMessage()方法向主线程发送消息。   

- 复杂任务实例 图片压缩
    JS不擅长，计算
    worker 线程 不影响主线程，慢慢做，由浏览器支持做
