import { useState } from 'react'

import './App.css'
import PictureCard from './components/PictureCard'
function App() {
 

  return (
    //jsx react 优势 方便写HTML模板
    <div className="container">
      {/* 自定义组件 子组件
      组件 html,css,js沙子一样,三明治组合,图片上传功能
      模块化，复用，页面有DOM树=》组件树 */}
      <PictureCard/>

    </div>
  )
}

export default App
