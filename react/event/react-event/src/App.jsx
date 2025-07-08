import { useState } from 'react'

import './App.css'

function App() {
  
//react不能直接操作DOM,性能差 高速 v8引擎->渲染引擎
//react 借鉴了DOM 0 行内的写法
//相似，react event 并不是原生事件，叫合成事件
//接受度高，学习成本低
//onClick 不是 onclick 不是字符串，而是事件函数绑定
const handleClick = (e) => {
  //事件模块是项目，框架的核心部分，react 性能，封装优化
  console.log(e);//合成事件SyntheticEvent
  console.log(e.nativeEvent);//原生事件
  //事件代理 #root + 唯一值  合成事件
  console.log('立即访问',e.type);
  setTimeout(() => {
    console.log('延迟访问',e.type);
  }, 2000);
}
//框架帮我们完成了性能优化，将所有的事件绑定到了document上#root上，封装成了合成事件
  return (
    <>
      <button onClick={handleClick}>click</button>
    </>
  )
}

export default App
