import {
    useReducer,
}from 'react'
import todoReducer from '../reducers/todoReducer'
// es6的新特性 initial = []提供了一个参数的默认值
//{todos,}key:value key和value相同，所以可以省略value
//模板字符串`${}`，多行
//...展开运算符(rest运算符)，将数组展开为多个元素，将对象展开为多个属性 
//解构 []=[] {}={}
export function useTodos(initial = []){
    const [todos,dispatch] = useReducer(todoReducer, initial)

    const addTodo = text => dispatch({type:'ADD_TODO', text})
    const toggleTodo = id => dispatch({type:'TOGGLE_TODO', id})
    const removeTodo = id =>dispatch({type:'REMOVE_TODO', id})
    

    return {
        todos,
        addTodo,
        toggleTodo,
        removeTodo,
    }
}