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

