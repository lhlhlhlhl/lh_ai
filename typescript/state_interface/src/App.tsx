import { useState } from 'react'
import NameEditComponent from './components/NameEditComponent.tsx'
import './App.css'

function App() {
  const [name,setName] = useState<string>('张三')
  //单向数据流
  const setUsernameState = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setName(e.target.value)
  }
  return (
   <>
   <NameEditComponent  userName={name} onChange={setUsernameState}/>
   </>
  )
}

export default App
