- JSX ?
  - JSX 不能独立运行
  - vite 工程化
    jsx -> React.createElement -> document.createElement -> 页面
  - React 环境中

- babel
  Make JavaScript Great Again
  大胆使用使用JS最新语法，不用等待,babel 帮我降级
  语法降级
  es6 promise -> es8 async await
  let -> var
  () => {} -> function() {}

- 编译的流程
   - pnpm i @babel/cli @babel/core -D(D表示开发依赖)
      @babel/cli babel 命令行工具
      @babel/core babel 核心库 转译
      babel 负责JS转码
      -D  开发阶段的依赖 dev
      上线后是不用的
- ./node_modules/.bin/babel
      转化的规则
      react -> IOS 代码
      es6+ -> es5
      JSX -> React.createElement