# 路由

history
hash

- 传统页面开发
    <a> 重要的用户体验缺失
    - 需要去到后端拿到新的html，重新渲染
        没有了白屏
    - a 链接切换页面
    - 相比于react-router-dom 局部热更新
    前端路由 去负责

- 新的react-router-dom SPA 单页应用
   只有一个页面 但能带来多页面的效果

## SPA
- Single Page Application 单页应用
- 只有一个页面
   - react组件
       页面级别组件
   - Routes/Route 申明，文档流中占位
   - Routes外面，Outlet（二级路由）外面 不用更新，不动的
   - url
   - Route内部显示哪个页面组件
      热更新

   - 一个页面完成了多个页面的显示
   - SPA用户体验特别棒

## 核心
- url切换
    不能用a
    用Link
    不去重新发送请求
    事件，js动态加载
- 事件 hashChange/pushState
- 根据当前的url,取出对应的租价
   替换掉之前的页面级别组件
   明明url发生了改变，为什么说是同一个页面？
   并没有改变整个页面
- 体验是
  URL改变了，竟然不用刷新整个页面
- 不再看白屏
  页面很快
  About
  Home 全是前端组件 不再需要去后端拿

## url 改变，但不重新渲染的解决方案
- hash的改变 很早就有
   原来是用来做页面锚点的，长页面的电梯
   不会刷新页面
   #/
   #/about
- 触发事件
   hashChange

## 基于SPA
- url可以改变，但不会向后端发送请求,不会刷新页面 前端路由
   - hash + hashChange 事件 + DOM
   - history + popstate + DOM
- 前端路由react-router-dom配置 页面级别组件
   热更新 Route
   Outlet 二级路由
- 单页应用
   只有一个页面 但可以有多个url路由状态 但是可以显示某个页面级别组件的内容
   页面级别组件
   window.location
   window.history 浏览器历史记录
   栈
   State 路由状态

- history
   很早就有，在浏览器的历史记录中游走
   - html5 赋予history新的功能
   - hash + hashChange 有优点，但是有很大的缺点
      兼容性好
      缺点：http://127.0.0.1:5500/3.html#home
      hash不好理解
      不这样，传统后端路由一样
      http://127.0.0.1:5500/ 首页
      http://127.0.0.1:5500/about 关于
   - 怎么样像后端路由一样，但是又像前端路由一样 不刷新页面？
   html5 升级了history api来实现
     