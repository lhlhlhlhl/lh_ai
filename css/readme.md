# css antimation
- html
  div
  眉毛
  眼睛
  鼻子
  嘴巴

- css
  ? 在一起?
  border-radius
  antimation 世界

  - html的快捷输入方式
   div#l-ball.ball  emmet语法 css选择器
    <div id="l-ball" class="ball"></div>

   .container>#l-ball.ball+#r-ball.ball
    <div class="container">
        <div id="l-ball" class="ball"></div>
        <div id="r-ball" class="ball"></div>
    </div>

    - id 唯一的元素 不能重复 
    - class 类名 表示一类元素
    - container> 表示container的子元素
    - container 
    容器 盒子 页面居中
    水平垂直居中
    - container>#l-ball.ball+#r-ball.ball
      > 表示子选择器
      + 兄弟元素选择器

- display 属性
  div block 默认块级元素
  span,i a inline 默认行内元素
  display 切换行内块级的格式化上下文
  inline-block 行内块级元素 既可以设置宽高 又可以多个元素同行
  inline 行内 不可设置宽高
  block 块级 独占一行

  - 面向对象的css
    多种状态
    复用 多类名
- 定位
  - position属性 定位
    static 默认值 不定位 没有定位能力
    relative 相对定位
      - 子元素相对他定位
      - 相当于自身的位置定位

    absolute 绝对定位 找到离他最近的(管着他的)position不为static的元素定位 直到body为止
    fixed 固定定位
    sticky 粘性定位
    
    .container absolute body
