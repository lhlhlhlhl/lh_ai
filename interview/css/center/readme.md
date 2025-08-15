# 居中

- 居中的方式
    - 水平居中
    - 垂直居中
    - 水平垂直居中（难搞的点在于垂直居中不听话）
- 方法不是关键，关键在于区别和优劣，场景，在什么情况下
    - 水平居中 text-align
    - 单行文本垂直居中 line-height = height padding
    - 固定宽高块级盒子水平垂直居中 
        1.absolute + 负margin 
        缺点：需要知道盒子的宽高
        2.absolute + margin auto //当前元素与父元素之间的margin自动分配,如果没有指定宽高，则auto不知道怎么分配 （重要）
        3.absolute + calc (css里面calc的计算函数，将父元素的50%减去子元素的50%)
            缺点：性能差，很少用，依赖计算

        
    - 不固定宽高块级盒子水平垂直居中 
        1.absolute + transform 赋值
            transform 相对于自身的大小的百分比
            优点：不需要知道盒子的宽高
        2.line-height(行高 initial 不继承父元素) + vertical-align（垂直居中）
            场景：有一段文字要在我的盒子里面水平垂直居中
            缺点：只能垂直居中，不能水平居中
        3.writing-mode(文字书写的方式)，让文字即在垂直和水平方向上分别居中，就可以实现水平垂直居中
        4.table-cell 
            display属性，相当于表格的单元格，在这里面vertical-align和text-align都一定生效
        5.flex
            
        6.grid 布局
            我自己相当于我的父元素怎么排列
            align-items: center;
            justify-content: center;

