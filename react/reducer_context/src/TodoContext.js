import{
    createContext,
}from "react"
//上下文
export const TodoContext=createContext(null);//默认输出，引入时要解构
//自定义hook，用于获取上下文
