// 执行命令的tool
import{
  spawn// 新建一个子进程
// node内置模块
// 高级 新建一个子进程
// 进程是分配资源的最小单位，线程是执行的最小单位
// 主进程 node-exec.mjs
// 执行 npm i npm run dev npm init vite
// cmd命令本身就是一个进程 不能阻塞主进程
// js虽然是单线程的但是node是多进程架构
// 所以有了父子进程，父进程去启动一个新的子进程
// 父mini-cursor 子
}from 'node:child_process'
// bash 命令
const command = 'ls -la'
const[cmd,...args] = command.split(' ')
const cwd = process.cwd()// 当前工作目录
console.log(`当前工作目录：${cwd}`)
const child = spawn(cmd,args,{
  cmd,
  // 继承父进程的输入输出流
  stdio:'inherit',// 子进程的输出直接打印到父进程
  shell:true// 开启shell模式，shell脚本
})
let errorMsg = ''
//进程间的通信，基于时间
child.on('error',(err)=>{
  errorMsg = err.message
})
child.on('exit',(code)=>{
  if(code === 0){
    // 子进程执行成功，退出
    console.log('命令执行成功，子进程退出')
    process.exit(0)
  }else{
    if(errorMsg){
      console.error(`错误：${errorMsg}`)
    }
    process.exit(code ||1)
  }
})