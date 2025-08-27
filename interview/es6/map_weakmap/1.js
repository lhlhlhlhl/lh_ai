// global表示在node终端环境下运行 node里的顶级对象类似浏览器的window
// global.gc() //手动触发垃圾回收
console.log(process.memoryUsage())//查看内存占用

let map = new Map()
let key = new Array(1000000)//值为empty 分配了连续的大段内存给他

map.set(key, 1)

console.log(process.memoryUsage())

key = null //手动释放key,但是内存没有回收，map是强引用，
console.log(process.memoryUsage())
map = null
global.gc()//手动触发垃圾回收

console.log(process.memoryUsage())
