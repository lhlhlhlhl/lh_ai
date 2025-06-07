//列表的渲染
function Todos(props){
    console.log(props,'/////')
    //父组件传过来的数据呢？传参
    const todos=props.todos
    return(
        <ul>
            {
                todos.map(todo=>(
                    <li key={todo.id}> {todo.text} </li>
                ))
            }

        </ul>
    )
}
export default Todos;