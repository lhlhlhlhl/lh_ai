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