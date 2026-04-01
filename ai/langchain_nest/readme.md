# Nest + Langchain 实现AI接口

- 大多数Agent都是跑在后端服务中
  Nest + LangChain 开发api接口
- nest?
  nodejs + typrscript  的最主流框架
  底层是express（轻量级）
  提供了MVC(前端是MVVM)、DI(依赖注入Dependencies Inject)等架构特性
- 创建项目
  - MVC 在哪里？
    后端开发的经典的设计模式
    数据不能直接展示在视图中，要加一个Controller层,去控制
    Model: 数据模型层(service数据操作，远程rpc调用)
    View: 视图层(前后端分离)
    Controller: 控制层 参数校验和逻辑
    module 会将Controller Service（providers） import 外部服务
    组合起来形成一个功能模块
    适合企业开发
    - DI
      依赖注入Dependencies Inject，然后在module中配置
      就可以实现类之间的依赖关系自动注入
      一个类可以依赖其他类的实例
      例如：一个服务依赖数据库连接
      一个服务依赖其他服务
      依赖注入可以将这些依赖关系自动注入到类中
    - 装饰器模式
      面向对象设计模式之一
      函数或者类快速通过装饰器添加功能 增加功力
    - restful
      一切皆资源
      book(名词) + CURD(HTTP Method 动词)
## SSE
### SSE 是什么
SSE (Server-Sent Events，服务器推送事件) 是一种前端技术，用于实现 服务器主动向浏览器推送消息 。

### 对比理解
HTTP 请求 客户端 → 服务器 客户端发起，服务器响应后断开

轮询 客户端 → 服务器 客户端反复请求，实时性差，浪费资源 

WebSocket 双向 服务器和客户端可以互相发消息 

SSE 服务器 → 客户端 服务器主动推送，单向（服务器→客户端）

### 为什么 AI 接口常用 SSE？
因为 AI 生成内容需要 逐字/逐词返回 ，使用 SSE 可以实现"打字机"效果，用户体验更好，而不是等 AI 全部生成完才一次性返回。
