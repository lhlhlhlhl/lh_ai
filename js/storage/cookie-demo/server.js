// node 后端
// 用node启动http服务
//http模块是node内置的核心模块
//js在命令行中运行叫做后端
//js有两种模块化方案
//require  node早期模块化commonJS
//import  es6模块化 更先进的
//require  old
//node受欢迎 中小型项目开发
//端口 -> 某个服务
//3306 mysql 服务
// 1234 8080端口被占用 
// 端口背后对应一个服务，一个服务对应一个进程（资源），进程的背后是线程（执行）
//域名domain(localhost) -> ip地址(127.0.0.1) -> 
//-> 某台设备 -> port 设备上的某个服务（进程）

//一台设备上可以有很多端口使用，有多个http服务 多个网站
//不要使用一些特殊端口
const http = require('http') // 引入http模块
const fs = require('fs')//file system 文件系统模块 操作文件的api
const path = require('path')//路径模块 操作路径的api
const server = http.createServer((req,res)=>{
    //res.end('hello world')
    //http协议是基于请求响应的协议
    //路由 Method + url 定位了服务器端的资源
    //
    if(req.method == 'GET' && (req.url == '/'||req.url=='/index.html')){//首页
        //读取index.html文件
        console.log(__dirname,'public','index.html',path.join(__dirname,'public','index.html'))
        const html = fs.readFile(path.join(__dirname,'public','index.html'),
        //回调函数，处理异步
        (err,content)=>{
            //前端体验为主

            //后端稳定为主
            if(err){//文件不存在
                res.writeHead(500);//服务器错误
                res.end('Server Error')
                return;}
        res.writeHead(200,{'Content-Type':'text/html'})//响应头
        res.end(content);
        })
        //响应不只是html,还可以是css,js,图片,视频,音频,json
        //'Content-Type':'text/html'指定返回的内容是html,浏览器会解析html
        
    }
    //后端路由，资源暴露
    if(req.method == 'GET' && req.url == '/style.css'){//首页
        fs.readFile(path.join(__dirname,'public','style.css'),(err,content)=>{
            if(err){//文件不存在
                res.writeHead(500);//服务器错误
                res.end('Server Error')
                return;}
        res.writeHead(200,{'Content-Type':'text/css'})//响应头
        res.end(content);
        })
    }
    if(req.method == 'GET' && req.url == '/script.js'){//首页
        fs.readFile(path.join(__dirname,'public','script.js'),(err,content)=>{
            if(err){//文件不存在
                res.writeHead(500);//服务器错误
                res.end('Server Error')
                return;}
        res.writeHead(200,{'Content-Type':'text/javascript'})//响应头
        res.end(content);
        })
    }
});
server.listen(8080);    