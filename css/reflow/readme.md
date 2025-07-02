# 回流重绘
- 布局的难点 列式布局 理解BFC/FFC
  - html 根元素 最外层的第一个BFC元素
   Block Formatting Context 块级格式化上下文 从上到下，行内从左到右，BFC 格式化上下文
   有了文档流
  - float overflow:hidden flex
  - 有没有什么标签  可以做列式布局 table 
  tr td
  - 为什么不用？
    - 触发太多回流和重绘
    - 语义不和 table设计的初衷是展示表格数据
     tr row
     td column
    - 不够灵活

## 回流和重绘
- 回流 重排reflow  浏览器重新计算元素几何属性（位置、尺寸）并重新构建渲染树的过程
  当RenderTree(cssom,dom)中部分或全部元素的尺寸，结构，或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程称为回流。
  table 不适，table中局部的改变，会触发整个table的回流重排
  火烧赤壁
  display:none 不参与回流重绘 性能优化的一种方案
  - 触发回流（重排 reflow）的方式
  1. 页面首次渲染 严格意义上不是 0->有 最耗时 网页每慢0.1s，会少1000万的收入
  2. 浏览器窗口的大小改变
  3. 元素尺寸或位置发生改变（transition,transform/opacity新图层除外）
  4. 元素内容的变化
  appendChild removeChild
  5. display:none block
  6. 字体大小的变化
  7. 激活css的一些伪类 :hover
    color:? 浏览器需要重新计算元素的样式和布局
  8. 查询某些属性或调用某些方法时
    - getBoundingClientRect() 触发回流，样式的重新计算，为了精确计算各个元素的位置，进行一次回流，消耗大
    ret{

    }
- 重绘 repaint
  当页面元素样式的改变并不影响它在文档流中的位置时（例如：color、background-color、visibility（hidden show）等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。
## 页面是怎么渲染的？
- 输入url
- 下载html
  - 下载字节，网络传输
  - html 字符  utf-8 编码
  - 解析html 根据开关标签 属性....
  - 节点对象（文本节点）
  - 构建dom树  （html标签 元素节点）
- link css 下载css
  - 下载字节码 Content-Type text/html text/css
  - 编码 utf-8 得到css文本
  - token 词法分析
  - css rule 节点
  - cssOM树
  - RenderTree 渲染树
  - Layout树
   布局，盒模型，大小
  - 图层
    - z-index 
    - position:fixed 弹窗
    - transtion + transform / opacity
    antimation
    - translate(50%,50%,50%)，3D页面 GPU 加速
    1个图层 主要文档流 = DOM树+cssOM -> RenderTree <-> LayoutTree
    2个图层 = DOM树+cssOM -> RenderTree <-> LayoutTree
  - 图层的合并
  - 浏览器的渲染引擎 绘制平面 像素点绘制

- 只有当渲染树（cssom,dom）构建完成后，浏览器才会开始渲染页面

    