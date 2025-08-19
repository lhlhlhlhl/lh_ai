# dns

- 全称 Domain Name System
- 作用: 把好理解和记忆的域名解析成IP地址的*分布式数据库*系统
    浏览器在真正发起HTTP(s)请求前，通常都会做一次DNS解析
- 一条命令
    ping www.baidu.com 递归查找的过程，结果IP

- dns 解析过程
    URL 输入到页面显示的第一个表达
    - 补充URL的完整性
    - dns 浏览器缓存
        chrome://net-internals/#dns
        第一次访问，需要解析，否则使用缓存
    - 操作系统缓存
        windows: ipconfig /displaydns
        mac: dscacheutil -q all
    - hosts 文件配置
        指定域名 解析IP 手动配置
        加一行配置记录，指定ip 域名
        比如我们会将项目本地ip 配公司的域名，那么开发效果就可以和线上域名效果一样 更安全
        开发中经常用
    - 如果上面三者都没有，也就是没有命中缓存
        递归解析器查询
        假设 www.baidu.com
        分布式数据库 key=>value key domain value ip
        dns 软件 13 组根服务器的ip 地址和域名，
        写死的

        - 根域名服务器
            .com 的地址是多少
        - 域名服务器
            baidu.com 服务器在哪？
        - 权威服务器
            IP地址

        局域网 -》 城域网 （电信或移动服务商）

- 设备用ip地址区三次握手，建立tcp链接，使用http 请求，网页打开了

- 如何做dns优化
    dns-prefetch dns预解析
    <link rel="dns-prefetch" href="https://www.baidu.com">
    网络层的优化

- pre-connect
    tcp 连接提前 通道打开，多路复用
    <link data-n-head="ssr" rel="preconnect" href="//unpkg.byted-static.com/" crossorigin="anonymous">

- ping www.baidu.com
PING www.a.shifen.com(183.2.172.177)
  a.shifen.com 的意思
  百度用于搜索服务的内部域名系统
  域名 -》 IP  不是绝对的  因为访问者太多了
  域名背后是一堆的服务器，分布式，多地的机房
  - 负载均衡
      挡在最前面
      容灾、高性能
      算法，服务器
      当前哪些机器还有接待的能力，随机算法
  - CDN 服务器
      Content Delivery Network 内容分发网络
      离用户最近的服务器，缓存内容，用户访问时，从最近的服务器获取内容
      部署静态资源的
      访问内容分成两部分
      动态的，走中央数据库
      静态的，css/js/jpg, 等静态资源，走CDN 服务器
        双11
      



