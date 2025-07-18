# react repos 项目开发
- api.github.io/users/shunwuyu/repos
- 综合react开发全家桶、项目级别、大型的、性能

## 路由设计
  - react-router-dom
  - /users/:username/repos
     - repos/username
  - /repos/:id
  路由懒加载
  hash/history
  热更新
  路由守卫
  useParams  :username
## 数据管理
    App 数据管理（跨层级）
    repos
    useContext+useReducer+hooks
    creacteContext+reducer+useRepos
## react
    组件的粒度
## api 管理
    fetch
    - axios(专业的http请求库)
    - 独立的模块，所有的请求会从组件中抽离出来，分离到api目录下，单独管理

## 项目的目录结构，项目架构
    - api
         应用中所有的接口
    - main.jsx
        入口文件
        添加路由，SPA
        添加全局应用状态管理

- RepoList 功能模块
    - params的解析
        - useParams拿到动态参数对象
        - 不要放到useEffect里面
        - 校验 id
           不要相信用户的任何提交
        - navigate('/')->放到useEffect里面 不要阻止页面渲染
- 组件的开发模式
    - UI组件（JSX）
    - 自定义hooks useRepos 方便
    - 状态管理 应用全局 context来管
       - repos loading error => context value
       - useReducer  提供reducer函数，重新计算状态