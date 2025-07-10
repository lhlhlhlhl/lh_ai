import { useState } from 'react'
import './App.css'

function App() {
 
  const [count,setCount] = useState(0);
  const [title,setTitle] = useState("")
  const [color,setColor] = useState("")
  const handleClick =()=>{
    //异步，执行这个函数，count只+1
    //react 为了性能优化会合并多次更新
    //一定时间内，有多次响应式更新，会统一处理
    //重绘重排
    //数据绑定，界面更新
    //JS V8引擎，高速过路费 渲染引擎 Blink
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);//这三次set的触发是同步的（同时触发闭包，拿到闭包内的count都是0），执行是异步的，结果是一样的

    setCount(prev=>prev+1);
    setCount(prev=>prev+1);
    setCount(prev=>prev+1);
    setColor("a")
    setTitle("a")
  }
  return (
    <>
      <p>当前计数：{count}</p>
      <button onClick={handleClick}>+3</button>
    </>
  )
}

export default App
