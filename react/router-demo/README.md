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