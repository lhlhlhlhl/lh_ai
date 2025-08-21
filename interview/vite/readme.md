# 工程化:vite,webpack（是vite的前辈）

- 哪些问题？工程一揽子方案
    - web server 5173端口 http模块？express 框架
        index.html作为首页
    - tsx -> jsx -> babel -> js
    - .styl -> css
    ....
    基础，后方工作

    npm run vite 启动项目 -》 index.html入口文件 -》 唯一的一个挂载点root,
    入口文件<script type="module" src="/src/main.jsx"></script>，实现按需加载

- 怎么介绍vite
  - 兼容性问题
      IE 11以下，不支持
  <script type="module" src="/src/main.jsx"></script>
  VITE 是一个基于原生ES模块（支持import解析）（浏览器很多还不支持模块化esm）
  可以通过按需编译实现急速冷启动（快，不需要把所有文件都启动，只需要把入口文件所依赖的文件编译即可）与
  热更新的新一代前端构建工具（页面更新快，不需要刷新页面，只需要更新修改的文件，SPA）

  - 快？
    - 基于原生es模块（ESM），不需要打包所有文件(type="module"),按需加载

  main.js 入口文件，模块的依赖
  mian.jsx -> App.jsx -> App.css + react + components + router + api + store
  VITE要整理这里模块的依赖关系(链条)

- webpack：工程化套件，以node的方式运行
    由于要支持老旧的浏览器，不支持esm，要打包
    a->b->c->d(由于import没有办法运行，找不到依赖关系)
    不用模块化
    d 编译成 js放到最上面
    c 编译 放到d下面
    b 编译 放到c下面
    a 编译 放到b下面
    把这些文件一起打个包，成为一个文件
    - 写的时候使用import,实际运行是全部打包成一个文件
      因此，webpack的打包速度很慢，文件越多，速度越慢

## webpack 和 vite 的区别
- index.html 里面没有type="module"，怕浏览器不支持esm，vite利用浏览器原生 ESM（import）,在开发时不需要提前整理和打包依赖
    webpack要去整理依赖关系，打包文件，慢
- 适合大型项目，丰富的配置
    - entry，output这是核心
    - plugins
        html-webpack-plugin 指定html模板在哪
    - devServer
        启动一个服务器，监听文件变化，自动刷新页面 http server的细节
    web bundler 一切静态资源皆可打包
    vite 快 不需要打包 但是有兼容性，生态定制性不如webpack
    webpack 打包，慢一点，但是兼容性好，生态丰富，有很长时间的生物验证
