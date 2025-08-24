const http = require('http')
const fs = require('fs')

http.createServer(function (request, response) {
  if (request.url === '/') {
    // 下载index.html
    // async是异步的（node默认异步读取文件），异步无阻塞
    // fs.readFile('test.html','utf-8',(err,data)=>{

    // })

    // sync是同步的 性能差点，会卡在这里，流程控制变简单了
    const html = fs.readFileSync('text.html', 'utf-8')
    response.writeHead(200, {
      'Content-Type': 'text/html'//在响应头是就声明改文件为html,浏览器就可以做好准备，直接渲染DOM树
    })
    response.end(html)

  }
  if (request.url === '/script.js') {
    const js = fs.readFileSync('script.js', 'utf-8')
    response.writeHead(200, {
      'Content-Type': 'text/javascript',
      // 'Cache-Control': 'max-age=20,public'
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString()
    })
    response.end(js)
  }

})
  .listen(8888)
