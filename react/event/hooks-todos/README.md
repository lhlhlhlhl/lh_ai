## hooks todos

- 安排个css的亮点
  - stylus
     css 超集
  - 拥有vite脚手架
     stylus 预编译 安装stylus vite直接编译
     vite来自vue社区
  - react 组件设计
     - 开发任务单元
     - 设计组件
         界面功能 状态 响应式
        - 新建todos 表单
        - 修改todos 列表
        - 删除todos
     - 按功能划分 粒度
        - form
        - list 列表
           - item 组件 有利于维护和**性能**(更新组件时,只更新单个组件,不更新其他组件)
- 字体
   - 设置多个，看设备的支持（设备里是否支持，本地包含）
   - 苹果设备优化 -apple-system 前端负责体验，字体也是体验的一部分

- rem
    - 相对单位
    - 移动端的重要单位 px像素点单位不要用 绝对单位
       移动端 宽高不定的 用相对单位 rem（html font-size） vw/vh(viewport) em(相当于自身的font-size)
       使用相对单位，可以在所以设备上适配
- props  组件通信
    - 传递状态
    - 传递自定义事件
    - 直接解构
      const{
         todos,//任务
         onAddTodo//添加
      } = props（一行一个数据状态或者函数，方便些注释）

- 数据绑定
   - 变量 修改值
   - 数据状态
      - Data Binding **数据**绑定 jsx就是静态的
      {}数据绑定
      - 数据和界面状态的统一
         - 界面由数据驱动
         - 数据与页面状态的一致性
      - 响应式的
- vue和react区别
   - vue 好入门，api文档好用
   - react 倾向于原生JS 入门难
      - hooks? 
   - <input v-model="text"/>
     vue双向数据绑定
     <input value={text} onChange = {() => setText(text);}>
     react坚持单向数据绑定

- 本地存储
   - **localStorage 和 cookie有什么异同**
   - http是无状态的,head cookie 带上
   - cookie 太大,影响http性能 4KB
   - cookie 前端,后端都可以设置
      过期时间  document.cookie = "qindi=value; max-age=30;";
      domain 域名 隔离
   - localStorage 只在浏览器端
     domain
     todos
     5MB
   - IndexDB 数据库 GB
   - localStorage  html5
       key:value 存储
       setItem(key,value)
       getItem(key)
       removeItem(key)
   
   - BOM Browser Object Model  超出浏览器的可见区域:收藏夹,历史记录之类的
   - DOM Document Object Model 浏览器的可见区域

## 自定义hooks
  - 自己定义的
  - use
  - 某一项功能
     不是一个简单函数的封装
     可以包含响应式的状态
            effect
            todos -> hooks
  - 自定义hooks
     - 现代react app架构的一部分
     - hooks目录
        自定义的hooks
        框架只能做公共部分
        业务定制 ahooks
     - use开头
        state,effect 逻辑封装复用
     - return 
        todos
        toggle
        addTodos
        deleteTodos
        函数式编程思想的体现
   - 组件更好地聚焦于模板渲染
   - 全面hooks函数式编程

- 两个遗憾
   - ../../路径曲折  
       vite 配置alias 短路径