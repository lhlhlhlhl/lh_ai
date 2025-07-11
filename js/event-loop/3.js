console.log('start');
//微任务
//process 进程对象
process.nextTick(()=>{
    //prosess是node环境下的event loop
    
    console.log('nextTick');
})
//微任务
Promise.resolve().then(()=>{
    console.log('promise Resolve');
})
//宏任务(开始新的循环)
setTimeout(()=>{
    console.log('setTimeout');
    Promise.resolve().then(()=>{
        console.log('promise Resolve 2');
    })
},0)
console.log('end');