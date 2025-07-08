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
            text:"打豆豆",
            isComplete:false
        },
        {
            id:2,
            text:"算法比赛",
            isComplete:true
        }
    ])
    //新增todo
    const addTodo = (text) => {
        //setTodo
        //当我们的数据状态是对象时候，要完全改变,引用的地址要发生改变
        // 我们要使用展开运算符...来复制对象，然后再修改属性值，这样才能保证数据状态的不可变性，否则会导致数据状态的丢失
        setTodos([
            ...todos,
            {
                id:Date.now(),//生成一个唯一的id,时间戳
                text,
                isComplete:false
            }
        ])
    }
    const onToggle = (id) => {
        console.log(id);
        //todos数组找到id为id的元素,将isComplete属性值取反
        //响应式?返回一个全新的todos map

        //state是对象或者数组时,setState(返回一个全新的对象)

        //[原数组].map会返回一个全新的数组
        setTodos(todos.map(
            todo=>todo.id === id 
            ?{...todo,isComplete:!todo.isComplete}
            : todo

        ))
    }
    const onDelete = (id)=>{
        setTodos(todos.filter(todo=>todo.id !==id))
    }
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