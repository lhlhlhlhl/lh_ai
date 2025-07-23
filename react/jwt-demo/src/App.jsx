import { 
  useState,
  useEffect,
  lazy,
  Suspense
 } from 'react'
// import {
//   getUser
// } from './api/user'
import './App.css'
import{
  Routes,
  Route
} from 'react-router-dom'
import NavBar from './components/NavBar'

const Home = lazy(()=>import('./views/Home'))
const Login = lazy(()=>import('./views/Login'))
const Pay = lazy(()=>import('./views/Pay'))
const RequiredAuth = lazy(()=>import('./components/RequiredAuth'))

function App() {

  useEffect(()=>{
    
  },[])
  return (
    <>
    <NavBar />
    <Suspense fallback={<div>loading</div>}>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/pay' element={
        <RequiredAuth>
          <Pay />
        </RequiredAuth>
      } />
    </Routes>
    </Suspense>
    </>
  )
}

export default App
