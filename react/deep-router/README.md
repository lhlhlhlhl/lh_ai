# deep router

- router
router routes route 路由的配置
页面级别组件
Link 实现单页应用
outline 嵌套子路由
hash Change
- 401 forbiden 状态码
- 301/302 重定向
- 404 url输错
- 性能优化
- SPA 单页应用 带来了优质的用户体验 没有白屏了，全部由前端控制
   - 快
   - 不会白屏
   - 不依赖于http 去服务器端请求页面
- 前端首先加路由，开发SPA应用
   React
   ReactRouter
   Redux三驾马车
- 导航，封装
- 路由懒加载
  lazyload
  - / home
  - /about About
  只加载当前需要的
  其他的不加载
  首页优化 以最快的速度将首页显现出来
- es6 module 引入模块并且会执行
- 懒加载的流程
    - import es6 加载并执行太多非必要组件
       影响首页的加载速度，特别是页面多的时候
    - 导入lazy,Suspense
       lazy 高阶组件 参数或者返回值是组件
    - import('./pages/Home')动态加载响应的组件
    - <Route/>匹配到 才会去动态加载响应的组件
    - Suspense 在还未加载前 fallback
