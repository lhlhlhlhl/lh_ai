# Storage 存储
- 前端存储
  - cookie
  存储啥东西？ 
    - 登入状态
    - 购物车 不需要登入也可以访问购物车
  - localStorage
  - sessionStorage
  - IndexedDB

- 后端存储
  - MySQL NoSQL MongoDB

- 缓存

## 首页
- 用户的登入状态
 cookie
  - 服务器识别用户身份
  - 起源
  - B/S架构软件 http协议
  - http 0.9 版本 没有关于身份这样的概念
  - http 是无状态协议
    请求一次和一千次，拿到的内容都一致
    如何在请求的过程中带上用户的身份状态呢
  - http 1.0 版本 正式版
    header请求头
    Content-Type:
    Authorization
    Cookie uid = 1241212
    用户带上，服务器端再解析，服务器端就知道你的身份了
    http协议是基于请求响应的无状态简单协议
    http协议还是无状态的，请求头可以夹带一些私货
  - 界面有哪些状态：
    未登入，已登入（显示用户身份），时间，登入日期会过期，主动登出
  
  - 前后端联调
    - 前端负责表单
      阻止默认行为
      收集表单值
      fetch请求 await 等待服务器端响应请求
      前后端的交界处：路由post /login api地址 前后端接口
    - 后端
      构建后端路由 /login
      用户名和密码的校验
      通过设置一个cookies 响应头 Set-Cookie
      服务器端的返回 http 一起回到请求端
      前端存储里 Cookie里面有了内容

## cookie
Cookie 是浏览器存储的小文本数据，用于记录用户会话、偏好等信息，便于网站识别用户。
- 每次http访问的时候,会自动带上cookie 信息
- cookie 小饼干（内容小） 只负责关键的身份信息，存储在浏览器中（位置）
- http 协议是无状态的，每次请求都是独立的，没有上下文关系，它是通过在请求头中携带 cookie 来识别用户身份的，实现身份的认证