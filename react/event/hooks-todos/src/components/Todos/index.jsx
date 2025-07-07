import {
    useState//hook是react 函数式编程，提供了一些好用的，以use开头的函数，比如useState
} from "react"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

const Todos = () => {
    // 数据流管理：单向数据流
    //父组件持有管理数据，props传递数据，子组件通过props自定义函数通知父组件
    const [todos, setTodos] = useState([
        {
            id:1,
            title:"打豆豆",
            isComplete:false
        },
        {
            id:2,
            title:"算法比赛",
            isComplete:true
        }
    ])
    //新增todo
    const addTodo = (title) => {
        //setTodo
    }
    return (
        <div className="app">
            {/* 自定义事件 on+函数名 表示要向父组件汇报时使用的函数 */}
            <TodoForm onAddTodo={addTodo}/>
            <TodoList  todos={todos}/>
        </div>
    )
}
export default Todos