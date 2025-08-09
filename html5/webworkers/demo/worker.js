//不是js  单线程
//Worker 线程 复杂或耗性能的计算
//这个能力来自于浏览器 浏览器赋予了js启动了JS增加一个线程的能力
//js 还是单线程，只不过是在复杂计算时候用worker 线程(不是语言方面的，是浏览器功能方面的)
//不可以使用document,this不是原来的this，在worker线程中使用self
//线程间的通信，消息机制

console.log(this)
//console.log(document.getElementById('box'));
self.onmessage = function (e) {
    console.log(e.data)
    self.postMessage('hello from worker')
}

