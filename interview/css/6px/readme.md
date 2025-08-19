# 6px 字体大小

- 在之前浏览器支持的最小字体大小是 12px,现在可以支持更小字体了
- 12px + transform: scale(0.5) 所有方向都进行一个压缩

- 1px 像素
  - 来自于移动端
  - 1px的边框看过去有点粗，手机比较好，像素密度比较大
  - 浏览器不支持小数像素的绘制，与硬件相关
  - 伪元素
    方便，content 必须
    定位 专职去做下边框
    transform: scaleY(0.5);在垂直方向上压缩0.5
    transform-origin center bottom; 变换原点为底部，默认是中心
    

