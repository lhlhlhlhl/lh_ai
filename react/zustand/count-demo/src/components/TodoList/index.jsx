import {
    useTodosStore
} from '../../store/todos'
const TodoList = () => {
    const {
        todos,
        addTodo,
        deleteTodo,
        toggleTodo,
    } = useTodosStore()
    return(
        <div>
            <ul>
                <input type='text' placeholder='请输入待办事项' onSubmit={(e) => addTodo(e.target.value)} />
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
                        {todo.text}
                        <button onClick={() => deleteTodo(todo.id)}>删除</button>
                    </li>
                ))}
            </ul>

        </div>
    )
}
export default TodoList