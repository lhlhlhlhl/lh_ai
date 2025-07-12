# react-router-dom

- 路由？
 - 后端路由
   网站的核心：资源  后端路由-暴露资源
 - 前端路由
   - 首页
   - 列表页
   - 登入页面
   前端的页面导航由前端路由控制
- react 开头
  react 生态系统的一部分
  - react（响应式组件的脚本）
    负责响应式，状态管理，组件，hooks等核心功能
  - 为什么路由不由react直接完成？
     - 会导致react体积大，笨重
     - 页面慢
     - 少就是多 less is more
  - react-dom
    负责将react的虚拟DOM渲染到页面上
  - react-router-dom
    负责路由的管理
  - redux/mobx 状态管理
  - axios 发送数据请求
## react 开发全家桶
- react 19
- react-dom 19
- react-router-dom 7.6.3(大版本.小版本.紧急修改版本)
    大版本会进行大型的修改（推翻之前的版本）
    小版本会增加一些功能，完善，更新
    更新；紧急修改版本会修改一些bug

## react 特色
- 全面组件化
  比vue更执着
  react 函数化编程

- 动态路由
url:协议(https://)，域名(juejin.cn)，端口（80省略），路径(/users)，params(id 123),queryString(查询参数),hash,
  https://juejin.cn/users/123?a=1&b=2#hash
  path: /users/123
  # restful 国际规范（BEM国际命名规范）
  url 定义是核心部分
  Method 资源的描述
  GET /user/:id
  GET /post/:id 显示某篇文章
  POST /post 新增文章
  PATCH /post/:id 修改文章的部分内容
  PUT /post/:id 修改文章的全部内容
  DELETE /post/:id 删除文章
  HEAD /post/:id 获取文章的元信息(只返回头信息，不返回body)
  前端路由 控制页面的导航
  - 什么时候用PUT替换PATCH（局部）修改？
  上传头像 PUT/avatar/:id
  - 后端路由 暴露资源

- 前端路由
  
- 后端路由
  早期只有后端路由 为什么？早期是传统的后端驱动开发（JS storage目录下cookies）
  server->http服务->路由（后端）->响应html网页 传统的后端驱动的web开发方式
  展示下一个页面 再来一个请求
  /
  /about
  - 优点是足够简单
  - 缺点是前后端耦合 后端要写前端的页面 jsp
  - 事件浪费在沟通
  - 逻辑，数据库，套页面 **MVC开发方式 Model(数据)View(视图)Controller(控制器)**
  - 不再以返回页面为主
  - 现代开发后端路由依旧不能少，但是功能变了
  - /api/user/123 接口 返回 JSON 数据


- 前后端分离 MVVM Model(fetch) View(JSX) ViewModel(视图模型层 useState,数据绑定JSX)
  - 前后端联调 api开发文档，约定
  - 前后端分离开发，以开发文档为约定
  - 前端当家做主
  - 前端也有了路由 react-router-dom
    /user/:id  path 页面级别组件
  - html/css/js react框架
    useState
    useEffect
      fetch 后端api接口，拿到数据
      完成web 应用
      PC/Mobile/App/小程序/桌面端 大前端