import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import { useCountStore } from './store/count'
import TodoList from './components/TodoList'
import RepoList from './components/RepoList'
function App() {
const {count} = useCountStore()
  return (
    <>
      App中的{count}
      <br />
      <Counter />
      <TodoList/>
      <RepoList/>
    </>
  )
}

export default App
