import { 
  useState,
  useEffect,
  Suspense,
  lazy,
 } from 'react'
 import{
  // BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
 }from 'react-router-dom'
 import Loading from './components/Loading'
 const RepoList = lazy(()=>import('./pages/RepoList'))
// import{ 
//   getRepos,
//   getRepoDetail
//  }from './api/repos'
import './App.css'

function App() {
  // useEffect(()=>{//不能再这里写async
  //   (async () =>{
  //     const repos = await getRepos('lhlhlhlhl')
  //     const repo = await getRepoDetail('lhlhlhlhl','lh_ai')
  //     console.log(repos,repo)
  //   })()
  //   // return ()=>{
  //   //   console.log('卸载')
  //   // }
  // },[])//副作用，数组(依赖项)为空，证明只会在第一次渲染的时候执行一次，卸载的时候也会执行
  return (
   <Suspense fallback={<Loading/>}>
     <Routes>
      <Route path='/users/:id/repos' element={<RepoList />}/>
      <Route path='/*' element={<Navigate to="/users/shunwuyu/repos"/>}/>
     </Routes>
   </Suspense>
  )
}

export default App
