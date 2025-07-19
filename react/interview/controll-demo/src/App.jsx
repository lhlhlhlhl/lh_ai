import { useState,useRef } from 'react'
import './App.css'

function ControlledInput({onSubmit}) {
  const [value, setValue] = useState('') // 响应式状态
  const [error, setError] = useState('') // 错误状态
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(value, '//////');
    onSubmit(value)
  }
  const handleChange = (e) => {
    setValue(e.target.value)
    //频繁触发，实时判断表单是否合格
    if(e.target.value.length < 3) {
      setError('输入的内容必须大于3个字符')
    }else {
      setError('')
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="controlled-input">受控组件</label>
      <input 
        type="text" 
        value={value}
        onChange={handleChange}
      />
      {error && <p>{error}</p>}
      <input type="submit" value="提交" />
    </form>
  )
}
function UncontrolledInput({onSubmit}) {
  const inputRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    const value = inputRef.current.value
    console.log(value, '??????');
    onSubmit(value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="uncontrolled-input">非受控组件</label>
      <input 
      type="text"
      id='uncontrolled-input'
      ref={inputRef} />
      <input type="submit" value='提交' />
    </form>
  )
}
function App() {
  const handleSubmit = (value) => {
    console.log(value, '??????????')
  }

  return (
    <>
      <ControlledInput onSubmit={handleSubmit}/>
      <UncontrolledInput onSubmit={handleSubmit}/>
    </>
  )
}

export default App