import{
    useState,
    useEffect
} from 'react'
export const useTodos = () => {
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem("todos")
    ))
    useEffect(()=>{
        //console.log(",,,,,,")
        //只接受字符串
        window.localStorage.setItem('todos',JSON.stringify(todos))//window可以省略
    },[todos])
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
    return {
        todos,
        setTodos,
        addTodo,
        onDelete,
        onToggle
    }
}