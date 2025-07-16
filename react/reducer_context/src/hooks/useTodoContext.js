import{
    useContext,
}from "react"
import { TodoContext } from "../TodoContext"

//自定义hook，用于获取上下文
export function useTodoContext(){
    return useContext(TodoContext)
}