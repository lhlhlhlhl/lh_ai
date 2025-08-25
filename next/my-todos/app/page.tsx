'use client'
import {
  useEffect, useState
} from 'react'
import {
  type Todo
} from '@/types/todo'

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState('')

  useEffect(() => {
    fetchTodos()
  }, [])
  const fetchTodos = async () => {
    const res = await fetch('/api/todos')
    const data = await res.json()
    setTodos(data)
  }
  const addTodo = async () => {
    if (input.trim() === '') {
      return
    }
    const res = await fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify({
        title: input,
        completed: false
      })
    })
    const data = await res.json()
    setTodos([...todos, data])
    setInput('')
  }
  const deleteTodo = async (id: number) => {
    await fetch(`/api/todos/${id}`, {
      method: 'DELETE'
    })
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const editTodo = async (id: number, completed: boolean) => {
    const res = await fetch(`/api/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        completed: !completed
      })
    })
    const updated = await res.json()
    setTodos(todos.map(todo => todo.id === id ? updated : todo))
  }

  return (
    <main className="max-w-xl max-auto p-6">
      <h1 className="text-2xl font-blod mb-4">Todos</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Add todo...'
          className="flex-1 p-2 border border-gray-300 rounded-md"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={addTodo}
        >
          Add
        </button>

      </div>
      <ul className="space-y-4 ">
        {
          todos.map(todo => (
            <li
              key={todo.id}
              className="flex justify-between items-center p-2 border border-gray-300 rounded-md"
            >
              <span
                className={`cursor-pointer select-none
                ${todo.completed ? 'line-through text-gray-500' : ''}
              `}
                onClick={e => editTodo(todo.id, todo.completed)}

              >{todo.title}</span>
              <div>
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mr-2"
                  onClick={e => editTodo(todo.id, todo.completed)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        }
      </ul>
    </main>
  )
}