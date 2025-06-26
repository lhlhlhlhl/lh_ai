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
- 重绘 repaint
  当页面元素样式的改变并不影响它在文档流中的位置时（例如：color、background-color、visibility（hidden show）等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。

    