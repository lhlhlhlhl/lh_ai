// 协商缓存，在返回文件的同时，响应头
const http = require('http')
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')//加密 hash计算

// 单向加密，别人看不到这是什么 生成hash值
function md5(data) {
  return crypto.createHash('md5').update(data).digest('hex')
}
http.createServer(function (request, response) {
  if (request.url === '/') {
    const html = fs.readFileSync('text.html', 'utf-8')
    response.writeHead(200, {
      'Content-Type': 'text/html',
    })
    response.end(html)
  }
  if (request.url === '/script.js') {
    const noneMatch = request.headers['if-none-match']//配对
    const filePath = path.join(__dirname, 'script.js')
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const buffer = fs.readFileSync(filePath)
    const fileMd5 = md5(buffer)

    if (noneMatch === fileMd5) {
      response.statusCode = 304//304 Not Modified
      response.end()
      return;
    }
    response.writeHead(200, {
      'Content-Type': 'text/javascript',
      'Cache-Control': 'max-age=0',
      'ETag': fileMd5//协商缓存,给这个文件打上一个标签
    })

    const readStream = fs.createReadStream(filePath)
    readStream.pipe(response)

    response.end(fileContent)


  }
}).listen(1234)