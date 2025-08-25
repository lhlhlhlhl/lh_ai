# 数据可视化

- echarts
    老板，客户，数据表库
    开源的用于绘制柱状图，饼状图等可视化库
- @types/echarts
    echarts 类型声明文件，单独的
    为什么react 不需要单独安装类型声明文件？
    react 是用ts写出来的
    echarts 原生js 和类型声明文件是分开的

- 直观看出数据的价值
    echarts 2D
    three.js 3D
    数据可视化

- echarts 流程
    - 安装echarts, @types/echarts
    - init 实例化
        要传给他一个图标的DOM 挂载点
        useRef<HTMLDivElement>(null)
        null | HTMLDivElement 联合类型 因为useRef 是可变对象，所以可能为null
    - setOption(option)
        series 数据条目
## 性能测试
  - chrome 的performance 面板
  可以看到各项指标，如重绘重排，js执行时间，内存占用等
  可以根据这些指标优化代码
  针对性地优化，给出优化建议

  - 减少首屏JS/css 体积（code spliting）
  代码分割（code spliting）是一种将代码库拆分成更小、更易于管理块的技术，
  以便按需加载或并行加载，从而优化应用的加载性能和执行效率
  - 使用transform 代替位置调整，预加载相关资源
    juejin js = (vue + vue-router) + App.vue + Home.vue + Components
    vue+vue-router 单独拆分 缓存 基本是不会变的 可以命中缓存
    App.vue + home.vue + Components 业务代码 经常修改，所以要单独切分文件
    做了一次升级
    
- lighthouse 
    是chrome 的一款性能打分插件，会在 性能、无障碍、最佳实现、SEO 四个方面打分
    给出问题和优化的建议，非常细致
    - 图片大小的优化 webp
    - 字体库
    - 渲染屏蔽请求

## 性能的关键指标
- FCP First Contentful Paint
    首次内容绘制（FCP）是衡量网页加载的性能关键指标
    表示浏览器首次绘制页面内容的时间
    包括文本、图像、SVG 等元素

- LCP Largest Contentful Paint
    最大内容绘制（LCP）是衡量网页加载的性能关键指标
    表示页面中最大的内容元素绘制完成的时间
    通常是图片或文本块

