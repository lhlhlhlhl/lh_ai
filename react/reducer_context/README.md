# reducer and context
- useReducer 的核心
    - 响应式状态管理
    - reducer 纯函数 状态生产 为状态的改变定规矩
    - initValue 初始值
    - dispatch 派发action
        {type:'',payload:} payload调用函数时传入的参数,相当于useState的setState内传入的参数
- useContext
    createContext 申明上下文
    Context.Provider 上下文提供者
    useContext
- useContext(通信) + useReducer(响应式状态管理)
  跨层级全局-》应用（theme/login/todos/...）状态管理

- 自定义hook的价值
       组件（渲染）+ hook(状态)

- hook + useContext
  全局应用级别响应式状态

- hook + useContext + useReducer
  全局应用级别响应式状态管理

   