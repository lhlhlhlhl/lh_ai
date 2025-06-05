import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// todos 列表需要渲染
//函数组件 App 组件  组合其他的组件完成应用
//返回html的函数叫函数组件
// html css js用函数组合在一起,成为一个组件
function App() {
  //数据->数据状态 数据业务 改变的 
  // react 比vue 更存粹
 const [todos,setTodos]=useState(['吃饭','睡觉','打豆豆']);//数组->数据
 const[title,setTitle]=useState('ECUT 一明')
 setTimeout(()=>{
  //setTodos(['吃饭','睡觉','打豆豆','养鱼'])
  setTitle('字节一明')
 },5000)

  return (
    <div>
    <h1 className="title">{title}</h1>
     <table>
      <thead>
        <tr>
          <th>序号</th>
          <th>任务</th>
        </tr>
      </thead>
      <tbody>
       
        {
          // html模板
          //动态的
          //react 一个花括号
          //js DOM编程API
          //在html里面 写js代码
          todos.map((item,index)=>(
          <tr>
          <td>{index+1}</td>
          <td>{item}</td>
          </tr>
          
        )
          )
        }
      </tbody>
     </table>
    </div>
  )
}
// function App() {
//   const todos=['吃饭','睡觉','打豆豆'];//数组->数据
//   return(
//     <div>
//       <h1 className="title">皮老板拿下字节就乐了</h1>
//     </div>
//   )
// }
export default App


