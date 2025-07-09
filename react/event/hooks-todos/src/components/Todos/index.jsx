import {
    useState,//hook是react 函数式编程，提供了一些好用的，以use开头的函数，比如useState
    useEffect
} from "react"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import {useTodos} from '@/hooks/useTodos'
const Todos = () => {
    const{
        todos,
        addTodo,
        onToggle,
        onDelete,
    } = useTodos();
    // 数据流管理：单向数据流
    //父组件持有管理数据，props传递数据，子组件通过props自定义函数通知父组件
    
    //localStorage 的操作属于同步执行，会阻塞主线程，不过在大多数情况下，其耗时极短，通常不会对性能造成明显影响
    //新增todo
   
    
    return (
        <div className="app">
            {/* 自定义事件 on+函数名 表示要向父组件汇报时使用的函数 */}
            <TodoForm onAddTodo={addTodo}/>
            <TodoList  
                todos={todos}
                onToggle={onToggle}
                onDelete={onDelete}
            />
        </div>
    )
}
export default Todos