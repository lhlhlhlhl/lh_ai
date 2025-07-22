// todoList store
// 全局状态模块化
import { create } from 'zustand'

export const useTodosStore = create((set) => ({
  // 状态
  todos: [
    {
        id:1,
        text:'打豆豆',
        completed:false
    }
  ],
  // 方法
  addTodo: (text) => set((state) => ({ 
    todos: [
        ...state.todos, 
        {
            id: state.todos.length + 1,
            text,
            completed: false
        }
    
    ] })),
    toggleTodo: (id) => set((state) => ({ 
        todos: state.todos.map(
            todo => todo.id === id ? 
            { ...todo, completed: !todo.completed } : todo) })), // 切换 tod
  deleteTodo: (id) => set((state) => ({ todos: state.todos.filter(todo => todo.id !== id) }))
}))