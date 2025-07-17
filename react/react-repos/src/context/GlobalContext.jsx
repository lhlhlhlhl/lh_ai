import{
    createContext,
} from 'react'

export const GlobalContext = createContext();
export const GlobalProvider = ({children})=>{//解构 children 是一个组件，相当于一个占位符，用于接收其他组件作为子组件
    return (
        <GlobalContext.Provider value="">
            {children}
        </GlobalContext.Provider>
    )
}