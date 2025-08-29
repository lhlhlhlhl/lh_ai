# 虚拟列表

- 一次性给你10万条数据插入页面，你会怎么做？
    - 时间分片
    - 虚拟列表
        没有必要，只需要加载视窗
        #container 有一定高度，可以scroll
        offsetTop 滚动条的偏移量，具体滚动了多少 transform: translateY()
        index start -> end 20
        item height 


- eventLoop 
    - JS单线程的开销很大，页面卡顿
    - 页面渲染开销也很大，10万条数据的绘制
