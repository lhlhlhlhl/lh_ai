# react 旅游 APP
ReadMe.md 很重要 方便面试官
- 移动 App
- 模仿 App
    - 喜欢的、国外的
    - 有点改变
- 绝大多数的考点
    - 都适用于任何App

##  技术栈
- React 全家桶
    - React组件开发
        组件的封装
        第三方组件库
        受控和非受控
        hooks编程 自定义的hooks
    - React-router-dom
        SPA
        路由守卫
        懒加载
    - Zustand
- mock 接口模拟
- axios 请求拦截和代理
- jwt进行登入
- module css
- vite 配置
- 性能优化
    防抖节流
    useCallback useMemo
- css预处理器 stylus
    flex transition transform
- LLM 大模型
    - chat
    - 生图
    - 语音
    - coze 工作流 调用
    - 流式输出
- 移动端适配
    rem
- 单例模式 设计模式的理解
- git 提交等编程风格

## 项目的架构
- components
- pages
- store
- api
- hook
- mock

## 开发前的准备
- 安装的包
    react-router-dom
    zustand
    axios
    vite-plugin-mock
    lib-flexible(解决移动端适配)
    开发期间的依赖
        jwt
        react-vant 第三方的UI组件库
- vite 配置
    - alias
    - mock
    - .env.local
    llm apiKey
    - user-scalable=no 不允许用户缩放
    - css 预处理
        box-sizing font-family:-apply-system
        怎么区分 index.css,App.css,module.css
        index.css  reset
        App.css 全局样式
        module.css 模块化样式
    - 移动端的适配 rem
        不能用px,用相对单位rem html
        不同设备上体验要一致
        不同尺寸手机 等比例缩放
        设计师的设计稿 750px iphone 4 375pt
        小米
        css 一行代码 手机的不同尺寸 html font-size 等比例
        layout
        flexible.js 阿里 在任何设备上
        1 rem = 屏幕宽度/10

- lib-flexible 
    阿里开源
    设置html font-size = window.innerWidth/10
    css的px 像素宽度 = 手机设备宽度 = 375
    1px = 2发光源
    750px 设计稿

- 设计稿上查看一个盒子的大小？
    - 一像素不差的还原设计稿
    - 设计稿中像素单位
    - /75

## 项目亮点
- 移动端适配
    - lib-flexible 库，将1rem=屏幕宽度/10
    - 设计稿 尺寸是iphone标准尺寸750px
    - 设计稿中像素单位/75
    - 前端的职责是还原设计稿
    - 频繁地单位换算 260/75 = 3.46667rem
    - 自动化？ 
    pnpm i -D postcss postcss-pxtorem
    postcss.config.js
    postcss 是css预编译器，很强大
    vite会自动读取postcss.config.js 将css文件编译
    px -> rem

## git 提交规范
- 项目初始化
## 功能模块
- UI组件库
    - react-vant 第三方组件库 70%组件已经有了，不用写
    - 选择一个适合业务的UI组件库 或者公司内部的组件库
- 配置路由及懒加载
    - 懒加载
    - 路由守卫
    - Layout组件
        - 嵌套路由Outlet分组路由配置
        - 网页有几个模板 Layout
            - Route 不加path 对应的路由自动选择
            - tabbar 模板
            - blank 模板
    - tabbar
        - react-vant + @react-vant/icons
        - value + onChange 响应式
        - 直接点击链接分享 active 的设置
- chatbot 模块
    - llm模块 chat 封装
    - 迭代chat,支持任意的模型
- Search
    - 防抖
    - api
        GooleSuggest
    - localStorage

## 项目的亮点难点
- 前端智能
    - chat 函数
    - 对各家模型比较感兴趣，升级为kimiChat,doubaoChat...
        性能、能力、性价比
        随意切换大模型，通过参数抽象
    - 文生图
        - 优化prompt 设计
- 原子css
    - App.css 里添加了通用样式
    - 各自模块里 module.css,不影响别的组件
    - lib-flexible 移动端适配
    - postcss pxtorem插件 快速还原设计稿
    - 原子类的css
        一个元素按功能逻辑拆分成多个类，和原子一样
        元素的样式就可以由这些原子类组合而成
        样式可以复用的更好，以后几乎可以不用写样式
## 项目遇到过什么问题，怎么解决的
- chat message 遇到message 覆盖问题
- 闭包陷阱
    - 一次时间里面两次setMessages()

- 自定义Hooks
    - useTitle 用于修改网页标题
    一定要设计

- es6 特性使用
    tabbar的高亮
    - arr.findIndex
    - str.startsWith
    - promise

- 项目迭代
    - 功能由浅入深
    - chatbot deepseek 简单chat
    - deepseek-R1 推理模型 显示推理过程
    - 流式输出
    - 上下文 LRU缓存
    - coze 工作流 接口调用

## 通用组件开发
- Loading
    - 居中方案
        position:fixed + tlrb0 + margin:auto
    - react.memo无状态的组件，不重新渲染
    - animation