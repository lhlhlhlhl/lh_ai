# position

教科书式的表达

- 五种属性 准确简洁地表达
    - static 默认值，不固定，回到文档流
        让之前定位的元素回到文档流
    - relative 相对自身原位置偏移，不脱离文档流
    - absolute 绝对定位 相对离自身最近的非static 祖先定位
        脱离文档流 如果没有，那么相对body定位
    - fixed 相对于视窗定位
    - sticky 粘性定位，是一种css定位方式，它让元素在滚动到特定阀值前表现得像相对定位，到达阀值后固定在视口中，实现类似吸顶或吸附的效果
- 业务场景（我在开发中做过一下几种定位）
    - 结合relative和absolute 消息提醒，在右上角
    - absolute + transform 水平垂直居中
    - fixed 回到顶部 聊天客服图标
    - sticky 粘连导航 不管页面多长，导航在超出阀值后，一直都在
        table 表头沾连，距离其最近的具有滚动机制的祖先容器
        和intersectionObserver 有点像，自己去观察是否到达了临界值


- 底层
    - 定位参照系
    absolute 最近position !== static 的祖先 || body
    fixed 视窗 ？ bug
    sticky 依赖滚动容器
    - 独立图层渲染
    absolute ? + ?

- 适当使用transform:translate3d(0,0,0)
    GPU 硬件加速，有利于css页面性能优化
    但也不能乱用，过多的图层会增加内存和管理开销
    比如，登录弹窗，transform/opacity动画

will-change：可以提前告诉浏览器，某个元素会有动画，浏览器会提前创建独立图层，避免动画过程中出现重绘重排

- position:fixed 如果在一个tranform:translateZ(0)下面，会失效
    transform会有一个新的包含块 fixed不再相对于视口定位，而是相对于这个transform容器

- 打麻将 每道题都有惊喜 刺激
    面试是当面准备自己，可以准备的

## positon 回答技巧
先干净利落回答五种特性，再举出应用场景，提出底层原理（定位的规则） 图层和fixed失效的亮点

- 页面的渲染过程（图层生成）
- intersectionObserver
- 重绘重排（主要的文档流没有受影响，优化性能）

