console.log('同步Start');
const promise1 =  Promise.resolve('promise1');//立即执行
const promise2 =  Promise.resolve('promise2');//立即执行
const promise3 = new Promise(resolve=>{
    console.log('promise3');
    resolve('promise3///');//立即执行
})//executor是执行器，是立即执行的
promise1.then(value=>{
    console.log(value);
})
promise2.then(value=>{
    console.log(value);
})
promise3.then(value=>{
    console.log(value);
})
setTimeout(()=>{
    console.log('下一个宏任务');
    const promise4 = Promise.resolve('promise4')//executor是执行器，是立即执行的
    promise4.then(value=>{
        console.log(value);
    })
},10)
setTimeout(()=>{
    console.log('下下一个宏任务');
    const promise5 = Promise.resolve('promise5')
    promise5.then(value=>{
        console.log(value);
    })
    setTimeout(()=>{
        console.log('下下下一个宏任务');
        
    },0)
},100)
console.log('同步End');