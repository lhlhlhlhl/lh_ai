# css 基础

- 一个属性与值的键值对称为申明 declaration。
- 一个申明块 {}中可以包含多个申明
- 选择器 申明块作用的选择器选择的对应元素
- ruleset 多个 
- css 层叠样式表

## css选择器
+ 相邻兄弟选择器 选择某元素后面的紧挨着的兄弟元素
~ 一般兄弟选择器 选择某元素后面的兄弟元素，选择后续所有同级元素
伪类选择器 状态
css 伪类选择器 选择元素的特定状态 动态效果 ：
hover 鼠标悬浮
active 鼠标按下
focus 获得焦点
visited 访问过的
//序号
结构伪类选择器 选择元素的特定位置 ：

.container p:nth-child(2) {
  background: red;
}
first-child 第一个  last-child 最后一个  nth-child(n) 第n个  nth-child(even) 偶数  nth-child(odd) 奇数  nth-child(2n) 偶数
.container里面的第三个p元素
.container p:nth-of-type(3){
            background-color: red;
            color: white;
        }        
:nth-child()元素在其父元素中的位置选择,不管元素的类型,所有类型进行排序
:nth-of-type()元素在其父元素中相同类型的元素的位置,对指定的类型元素进行排序
