import {
  useState,//响应式更新
  useEffect,//DOM节点的变化，响应式对象的变化
  useRef,//获取DOM节点,标记一个组件,响应式对象,
  useLayoutEffect,
} from 'react'
import './App.css'

// function App() {
//   //响应式对象
//   //当绑定到某个对象是，current才会有值
//  const boxRef = useRef()
//  console.log(boxRef.current,boxRef)
//  useEffect(()=>{
//   console.log('useEffect height',boxRef.current.offsetHeight)
//  },[])//[]表示在渲染之后只执行一次
//  useLayoutEffect(()=>{
//   console.log('useLayoutEffect height',boxRef.current.offsetHeight)
//  },[])
//   return (
//     <>
//     {/* height:100,内容的高度，如果有padiding之类的，盒子高度不等于内容高度 */}
//       <div ref={boxRef} style={{height:100}}></div>
//     </>
//   )
// }
// function App() {
//   const[content,setContent] = useState('ahhhhhhhhhhhhhh');
//   const ref = useRef();
//   // useEffect(()=>{
//   //   setContent('啊哈哈哈哈哈哈哈哈哈')
//   //   ref.current.style.height='200px'//两次重排，重新布局
//   // },[])
//   useLayoutEffect(()=>{
//     //阻塞渲染 有点同步的感觉
//     setContent('啊哈哈哈哈哈哈哈哈哈')
//     ref.current.style.height='200px'//两次重排，重新布局
//   },[])
//   return(
//     <div ref={ref} style={{height:'50px',background:'lightblue'}}>{content}</div>
//   )
// }

//弹窗
function Modal(){
  const ref = useRef();
  useLayoutEffect(()=>{
    const height = ref.current.offsetHeight;
    ref.current.style.marginTop = `${(window.innerHeight - height)/2}px`
  },[]);
  return <div ref={ref} style={{position:'absolute',width:'200px',backgroundColor:'red'}}>我是弹窗</div>
}
function App() {
  return (
    <>
      <Modal/>
    </>
  )
}

export default App
