import { 
  useState,
  useEffect,
} from 'react'
import './App.css'
import {
  getTodos,
  getRepos,
}from '@/api'

function App() {
  // const [todos, setTodos] = useState([])
  const [repos, setRepos] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      // const todosResult = await getTodos();
      const reposResult = await getRepos();
      // console.log(todosResult)
      console.log(reposResult,'`````')
      // setTodos(todosResult.data.data)
      setRepos(reposResult.data)
      console.log(reposResult.data)
    }
    fetchData()
  },[])

  return (
    <>
    {/* {
      todos.map(todo=>(
        <div key={todo.id}>
          {todo.title}
        </div>
      ))
    } */}
    {
      repos.map(repo=>(
        <div key={repo.id}>
          {repo.title}
          {repo.description}
        </div>
      ))
    }
    </>
  )
}

export default App
