import { 
  useRef,
  useEffect,
  forwardRef//父组件里面控制子组件里面的ref
} from 'react'

import './App.css'

function Guang(props,ref){
  console.log(props,ref)
  return (
    <div >
      <input type="text" ref={ref} />
    </div>
  )
}
//将一个组件作为参数，返回一个新的组件，被包裹的组件，具有ref向下传递的能力
//高阶组件
const WrapperGuang = forwardRef(Guang)//将ref要传递的组件当作参数传递
function App() {
  //父组件 持有ref
const ref = useRef(null)
console.log(ref.current)
//当前指向的那个对象
useEffect(() => {
  //ref.current.focus()
  ref.current?.focus()//可选链操作符
  //如果ref.current 存在，则调用 focus() 方法；否则，不执行任何操作。
},[])
  return (
   <div className="App">
    {/* <input ref={ref} />
    将 input 元素的引用赋值给 ref 变量。也就是说，当组件渲染完成后，ref.current 将指向这个 <input> DOM 节点。
    这样，你就可以通过 ref.current 直接访问该输入框元素，比如可以调用它的方法或属性（例如：focus()、value 等）。
    */}
    {/* <Guang title='hello' ref={ref}/> */}
    <WrapperGuang ref={ref}/>
   </div>
  )
}

export default App
