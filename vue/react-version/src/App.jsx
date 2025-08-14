import { useState } from 'react'
import './App.css'
import LifecycleDemo from './components/LifecycleDemo'
import {
  useToggle,
  useRequest,//封装请求 比用的请求
} from 'ahooks'

function getUsername(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{//定时器模拟AI请求
      resolve('高傲的严')
    },2000)
  })
  
}
function App() {
  const [state, { 
    toggle, 
    setLeft, //坚持设为false
    setRight //坚持设为true
  }] = useToggle();
  const {data,error,loading} = useRequest(getUsername)
  if (error) {
    return <div>failed to load</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  return <div>Username: {data}</div>;
  return (
    <>
      <p>Effects：{`${state}`}</p>
      <p>
        <button type="button" onClick={toggle}>
          Toggle
        </button>
        <button type="button" onClick={setLeft} style={{ margin: '0 8px' }}>
          Toggle False
        </button>
        <button type="button" onClick={setRight}>
          Toggle True
        </button>
      </p>
      <LifecycleDemo/>
      
    </>
  )
}

export default App