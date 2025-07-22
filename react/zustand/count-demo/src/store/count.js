//zustand react 状态管理框架
import { 
    create,//创建一个store 存储状态的地方
 } from 'zustand'

// count store
//use开头  hook
 export const useCountStore = create ((set)=>({
    // 对象
    // 状态
    // 修改状态的方法
    count: 0,
    // 原先在reducer 函数里面的 规定怎么变
    increment:()=>set((state)=>({count:state.count + 1})),
    decrement:()=>set((state)=>({count:state.count - 1}))

 }))
