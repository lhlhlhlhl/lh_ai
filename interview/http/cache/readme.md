# 缓存
## url输入到页面显示
- 知识体系
- 多进程多线程架构是前提
- 输入网站并解析
    非结构的字符串，搜索关键词
    
    我们输入的网址是一个有结构的字符串（baidu.com也属于结构化字符串）
      协议：//域名:端口/path/:params?qs#hash
      http(s)
      web 80 端口 nginx 反向代理 proxy 3000
      443 端口 https协议向主机的443端口发送请求
      3306 端口 mysql
      6379 端口 redis
      27017 端口 mongodb
  
- 浏览器解析协议、主机（DNS域名解析为主机）、端口、路径等，并**构造**一个http请求
    - 发送请求前，根据请求头的 expires和cache-control 判断是否过期,是否命中了强缓存策略（强缓存是加速静态资源的关键）
        https://www.baidu.com/index.js + 请求头（最开始是服务器提供的）
        缓存文件+请求头在一起（文件的属性一样）
    - 强缓存
        Expires 过期时间 http 1.0 的产物

        响应头cache-control + 文件本地缓存，在过期时间范围内，不用请求
        直接使用本地缓存内容 http 1.1 升级为cache-control

    - 协商缓存
        强缓存没有命中，这个资源在服务器端也不一定修改了，比对一下
        If-None-Match / ETag
        If-Modified-Since / Last-Modified
        工作原理：
        第一次请求：
        服务器返回资源，同时返回资源的hash值（ETag）或者最后修改时间（Last-Modified）
        后续请求：
        浏览器再次请求资源时，会在请求头中携带上之前返回的hash值（ETag）或者最后修改时间（Last-Modified）
        服务器收到请求后，会对比资源的hash值或者最后修改时间与之前返回的是否一致
        如果一致，服务器会返回304 Not Modified，告诉浏览器资源未修改，浏览器可以使用本地缓存
        如果不一致，服务器会返回资源的最新内容，同时返回新的hash值或者最后修改时间



    Cookie 要在请求头中构建
    url 背后的 请求行、请求头、请求体
    同一主机的不同端口，对应的是不同的程序或服务(应用)
    dns -> ip地址 80 -> http
    dns -> ip地址 443 -> https
    dns -> ip地址 3306 -> mysql

    - 补全url
    比如输入的是baidu.com ，因为有.com所有这是结构化字符串，补全为https://baidu.com/
    - 如果输入http://baidu.com 浏览器会任务不安全
      服务器依旧会跳转到baidu.com  发送307再跳转
      307 Temporary Redirect 临时跳转
      Location:https://baidu.com/
      再请求一次
      - 301/302 资源跳转，只支持GET,哪怕你的请求不是GET，也会改成GET
          301 Moved Permanently 永久跳转
          302 Found Moved Temporarily 临时跳转
      - 307/308 资源跳转,可以支持各种方法，不会改
          307 Temporary Redirect 临时跳转
          308 Permanent Redirect 永久跳转
    


