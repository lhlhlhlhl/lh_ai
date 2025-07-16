import { 
  useState,
  Fragment // 文档碎片组件
 } from 'react'

import './App.css'
// function Demo(){
//   return(
//     // <div>
//     // <h1>Hello</h1>
//     // <p>你好</p>
//     // </div>
//     // 给DOM树增加负担，多了一层，不管DOM树在查找，渲染的时候都多了一层树的操作，多了一层不需要的节点
//     //DOM解析性能下载，多迭代一层
//     <Fragment>
//     <h1>Hello</h1>
//     <p>你好</p>
//     </Fragment>
//   )
// }
function Demo({items}) {
  return  items.map(item => {
          return (
            <Fragment key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.content}</p>
            </Fragment>
          )
        })
}
       
function App() {
  const items = [
    {id:1,title:'apple'},
    {id:2,title:'banana'},
    {id:3,title:'orange'},
  ]
  const [count, setCount] = useState(0)

  return (
  <>
    <Demo items={items}/>
  </>
  )
}

export default App
