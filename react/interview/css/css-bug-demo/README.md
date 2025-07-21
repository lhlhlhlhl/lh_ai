# css 模块化
- Button AnotherButton 按钮组件
     自己写的组件
     别人写的组件
     第三方写的组件
     冲突
- 唯一的类名  代价：可读性不好
      取名 烦
      css 模块化的能力
      不会影响外界
      不受外界影响
- style.module.css 模块化的css
      - react vite
          确保唯一hash 值  加到原先的类名上
      - vue scoped
      - 可读性会受到影响吗？
         不会影响
         - 读的是源码 .button
         - 被模块化保护起来了
         - npm run build 将项目上线
- dev/build/test/product
    开发的时候在dev 代码的可读性
    vite,react.jsx babel preset-react
    style.module.css
    import styles from './style.module.css'
    styles  js对象 css的每一个类名都可以面向对象访问绑定
    变量 绑定时侯生成一个唯一值

    npm run build 为了上线打包
    npm run test 测试一下
    阿里云服务器 ngnix 跑起来 dist/