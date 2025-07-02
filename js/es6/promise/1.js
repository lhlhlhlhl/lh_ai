//读取1.html里面的内容
//读取完后打印 读完了
const fs = require('fs');//引入js内置的文件模块
// fs.readFile('./1.html',(err,data)=>{
//     console.log(data.toString());
// })
// console.log('1111')
const readFilePromise = new Promise((resolve)=>{
   //异步任务
   fs.readFile('./1.html',(err,data)=>{
         console.log(data.toString());
         resolve();
     }) 
     //resolve();
})
readFilePromise.then(()=>{
    console.log('1111')
})