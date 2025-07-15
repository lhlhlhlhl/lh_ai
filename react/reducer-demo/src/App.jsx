import { 
  useState,
  useReducer
} from 'react'

import './App.css'

// function App() {

//   return (
//     <>
//     <LoginContext.provider>
//       <ThemeContext.Provider>{/* 背景切换 */}
//         <TodosContext.Provider>
//         <Layout>
//           <Header/>{/* childern */ }
//           <Main/>
//           <Footer/>
//         </Layout>
//         </TodosContext.Provider>
//       </ThemeContext.Provider>
//     </LoginContext.provider>
//     </>
//   )
// }

//可以管理很多，而且很到位
const initialState = {
  count:0,
  // isLogin:false,
  // theme:'light'
}
// 管理 分部门
//reducer 纯函数 返回可靠的状态
//状态生产器
//case 状态修改的规定
const reducer = (state,action)=>{
  switch(action.type){
    //increment
    case 'increment':
      //返回新的状态
      return{
        count:state.count+1
      }
    case 'decrement':
      return{
        count:state.count-1
      }
    case 'incrementByNum':
      return{
        count:state.count+parseInt(action.payload)
      }
    default:
      return state
  }
}
function App(){
  //初始值 initialValue
  //当前的状态值 旧状态 新状态
  //界面由当前状态来驱动
  //修改状态的方法
  //响应式
  //管理 useState有的，useReducer都有，高级
  const [count,setCount] = useState(0)
  //大型项目
  //reducer负责生产状态 usrReducer内自带dispatch
  //dispatch派发 函数 有固定的参数 {type:''} action_type
  const[state,dispatch]= useReducer(reducer,initialState)
  return(
    <>
      <p>Count:{state.count}</p>
      <button onClick={()=>dispatch({type:'increment'})}>+</button>
      <button onClick={()=>dispatch({type:'decrement'})}>-</button>
      <br />
      <input type="text" value={count} onChange={(e)=>setCount(e.target.value)}/>
      <button onClick={()=>dispatch({type:'incrementByNum',payload:count})}>incrementByNum</button>
    </>
  )
}
export default App
