import { 
  useState,
  Suspense,// suspense 组件,配合路由懒加载
  lazy//懒加载
 } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Navigation from './components/Navigation'
import ProtectRoute from './pages/ProtectRoute'
import Pay from './pages/Pay'
//函数 路由-》Route时执行
//新的组件，当组件挂载到页面时，此函数一定会运行
//懒加载 
const Home = lazy(()=>import('./pages/Home'))
const About = lazy(()=>import('./pages/About'))
const Login = lazy(()=>import('./pages/Login'))
// const ProtectRoute = lazy(()=>import('./pages/Prot'))
const NotFound = lazy(()=>import('./pages/NotFound'))//将import放在函数里面，叫做动态加载
// import Home from './pages/Home'
// import About from './pages/About'
//如果直接引用一定会运行
//30几个页面


function App() {

  return (
    <>

      <Router>
      <Navigation />
        <Suspense fallback={<div>加载中...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          {/* 校验权限，只有登入了才可以买 */}
          {/* 鉴权 */}
          <Route path="/pay" element={
            <ProtectRoute >
              {/* 一个组件还包着一个组件 */}
               <Pay /> 
              <div>123</div>
              <div>456</div>
            </ProtectRoute >
          } />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App