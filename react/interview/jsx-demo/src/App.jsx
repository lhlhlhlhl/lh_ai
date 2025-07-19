import { useState,createElement } from 'react'

import './App.css'

function App() {
  const [todos,setTodos] = useState([
    {
      id:1,
      name:'标题一'
    },
    {
      id:2,
      name:'标题二'
    },
    {
      id:3,
      name:'标题三'
    }
  ])
const element = <h1 >Hello World</h1>
const element2 = createElement('h1',{className:'title',id:'tit'},'Hello world')
  return (
   <>
   <ul>
    {
      todos.map(todo=>(
        <li key={todo.id}>{todo.name}</li>
      ))
    }
    {
      todos.map(todo=>(
        createElement('li',{key:todo.id},todo.name)
      ))
    }
   </ul>
   {element}
   {element2}
   </>
  )
}

export default App
