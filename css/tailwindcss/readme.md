# tailwindcss 原子css

css框架，提供了样式类
- 非常好用
- 几乎不用写css
- AI生成代码css用的都是tailwindcss的样式类
- 配置步骤：
    1.安装pnpm i tailwindcss @tailwindcss/vite
    2.在vite.config.js中配置tailwindcss插件
    3.在index.css中引入tailwindcss的样式
    4.直接在你要用的地方用class类名即可
- 有各种内置的css类名，分门别类
- 1rem = 4 个单位

- 文字行数限制
    -webkit-line-clamp:2;不能独自生效
    -webkit浏览器内核 Chrome+safari
    -mozilla 火狐浏览器内核代号
    实验阶段的属性 新的
    dispaly:-webkit-box 创建弹性容器
    -webkit-box-orient:vertical; 设置为垂直弹性布局 弹性方向
    -webkit-line-clamp:2; 限制行数 最多显示两行
    overflow:hidden;超出隐藏 文字超出部分隐藏






