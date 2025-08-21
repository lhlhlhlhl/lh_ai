- CSR SPA 单页应用 seo(搜索引擎)不好 #root
  移动端时代，流量入口不再是百度，应用市场
  Web app 体验好

- SSR 服务器端渲染
    组件在服务器端渲染
    页面渲染更快 SEO好
    AI Web Site 在Google/Baidu 打榜的
    AI 出海

- shadcn-ui

  - shadcn-ui 更现代化的前端框架
    直接懒加载
    npx shadcn@latest init
    - base color 主题风格
    - npx shadcn-ui@latest add button input card只安装你要用的组件，性能优化，按需安装
    - 用的组件要按需安装
      init
      add
- next.js 约定俗称
    - app
        可以不需要src
        app 应用目录
        - 目录即路由
          AppRouter技术
          repos/page.tsx
    - api
        后端接口定义
    - types
        类型定义,在types目录下定义，封装

  RESTful 是一种基于 HTTP 协议设计的软件架构风格，后端通过定义资源的 URI，利用 HTTP 动词（如 GET、POST、PUT、DELETE）对资源进行操作，实现前后端分离和接口的统一化管理。

- AppRouter
    自动配置路由，文件夹即路由
- layout
    布局

1.类型约束
2.加速代码开发，代码提示
3.减少错误