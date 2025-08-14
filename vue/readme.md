# vue 中的hooks
- 你用的react是什么版本的？
    react 19
    react 16.8 划时代的更新 函数式组件，hooks 出现 2019
    16.8 之前 类组件 Component 基类 那时候其实也有函数组件，不过一般是用来做子组件
    函数组件 子组件+父组件通过props传递数据 无状态组件
    UI 展示 Stateless  简单，性能好
    函数组件 + useState + useEffect.. hooks 类组件就没有必要了
    16.8 之后 函数式组件
- 类组件
    和函数组件都有，各司其职
    - 类组件比较固守于类的格式，繁琐
    - 还会产生this丢失问题 事件处理
    - 生命周期钩子函数 由useEffect 副作用代替
    - 开销大些 函数组件结合memo,useMemo,useCallback 更好的性能优化
    - Vue抄袭了React
        hooks 函数式编程思想,mvvm响应式，数据绑定，状态管理，生命周期，hooks
如果有老的项目要我维护我也可以,早就有函数式组件了只不过那时候没有状态管理,所以用的是类组件

- hooks思想
ahooks
hooks 现代开发 复用响应式的业务，帮助react函数式组件的崛起，帮我们封装响应式业务
useCallback
useMemo
useContext
自定义hooks

- vue与react有什么区别
- ahooks

- hooks 表达总线
    - 内置的hook
        useState,useEffect(副作用)，useMemo（复杂计算比较好性能）,useCallback(对性能优化的理解)，
        useContext(全局数据共享),useReducer（状态管理），useRef(用于创建一个可变的引用对象)，
        useLayoutEffect(在 DOM 更新后、浏览器绘制前同步执行，适合用于需要读取 DOM 布局并同步更新的场景，以避免视觉闪烁)
        useImperativeHandle(用于自定义暴露给父组件的实例值)


    - 自定义的hooks 
        useTitle,useTodos,useMouse,useRepos
        响应式业务、响应式场景封装到hooks目录下，复用
        UI组件干净
    - ahooks 第三方hooks/vueuse 库
     useToggle、useRequest（所有的请求 data,loading,error） 我在业务中就经常用
