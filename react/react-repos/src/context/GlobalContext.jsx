import{
    createContext,
    useReducer
} from 'react'
import {repoReducer} from '@/reducers/repoReducer'
//将响应式业务逻辑抽离到hooks中
export const GlobalContext = createContext();
const initialState = {
    repos:[],
    loading:false,
    error:null
}
export const GlobalProvider = ({children})=>{//解构 children 是一个组件，相当于一个占位符，用于接收其他组件作为子组件
    const [state,dispatch] = useReducer(repoReducer,initialState)
    return (
        //value  state是应用状态
        <GlobalContext.Provider value={{state,dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}