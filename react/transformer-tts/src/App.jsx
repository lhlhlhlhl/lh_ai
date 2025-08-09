import { 
  useState,
  useRef,
  useEffect
 } from 'react'
import Progress from './components/Progress'
import AudioPlayer from './components/AudioPlayer'
import { 
  SPEAKERS,
  DEFAULT_SPEAKER } from './constants'//项目的常量
function App() {
  // 界面的状态
  // llm ready 大模型准备好了吗？
  const [ready,setReady] = useState(null)
  // 按钮是否可以点击 防止多次点击
  const [disabled,setDisabled] = useState(false)
  // 进度条数组
  const[progressItems,setProgressItems] = useState([])
  // 表单文本
  const [text,setText] = useState('I love Hugging Face!')
  // 音色
  const [selectedSpeaker,setSelectedSpeaker] = useState(DEFAULT_SPEAKER)
  // 大模型返回的数据
  const [output,setOutput] = useState(null)

  const worker = useRef(null)
  useEffect(()=>{
    // 引入 transformer
    //import.meta.url表示http://localhost:5173
    worker.current = new Worker(new URL('./worker.js', import.meta.url),{
      type:'module'//默认是es6模块化
    })
    worker.current.postMessage({
      type:'文字转语音'
    })
    const onMessageReceived = (e)=>{
      //console.log(e.data)
    }
    // 订阅发布者模式
    worker.current.onmessage = onMessageReceived;//移除一个事件时要传入这个事件的那个函数，所以要声明一个函数
    return ()=> worker.current.removeEventListener('message',onMessageReceived)
  },[])
  
  return (
   <div className="flex">

   </div>
  )
}

export default App
