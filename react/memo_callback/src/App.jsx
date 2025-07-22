import { 
  useState,
  useEffect,
  useCallback,//当子组件有一个回调函数时，使用useCallback，避免子组件rerender
  useMemo,//缓存一个复杂计算的值
} from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)
  const [num,setNum] = useState(0)
  console.log('App render')
  const expensiveComputation = (n)=>{
    console.log('expensiveComputation')
    //模拟复杂计算，开销大
    for(let i = 0; i < 1000000000; i++){
      i++;
    }
    return n * 2;
  }
  const result = useMemo(()=>expensiveComputation(num),[num])
  //useMemo缓存一个复杂计算的值，只有num变化才会重新计算，rerender时，useMemo不会重新计算
  useEffect(() => {
    console.log('count',count)
  },[count])//只有第一次挂载，count变化才会执行useEffect
  useEffect(() => {
    console.log('num',num)
  },[num])//useEffect依赖于num，num变化才会执行useEffect，rerender时，useEffect不会执行
  //作为父组件里面的函数，时候rerender时handleClick 会重新生成
  //callback回调函数 缓存
  const handleClick = useCallback(() => {
    console.log('handleClick')
  },[num])
  return (
   <>
   {/* <div>{expensiveComputation(num)}</div> */}
   <div>{result}</div>
   <div>{count}</div>
   <button onClick={() => setCount(count + 1)}>count加一</button>
   <br />
   <button onClick={() => setNum(num + 1)}>num加一</button>
   <br />
   {/* <Button text="click me"/>使用props即可 */}
   {/* <Button count={count}>Click Me</Button> */}
   <Button num={num} onClick={handleClick}>Click Me</Button>

   {/* childer传参 */}
   </>
  )
}

export default App
