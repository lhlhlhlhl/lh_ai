import { useState } from 'react'
import './App.css'
import Page from './components/Page'
import { ThemeContext} from './ThemeContext'
function App() {
  const [theme, setTheme] = useState('light')
  console.log(ThemeContext,'//////')
  return (
    <ThemeContext.Provider value={theme}>
      <Page />
      <button onClick={() => setTheme("dark")}>切换主题</button>
      {/* <Uncle /> */}
      {/* 怎么解决Uncle,Page兄弟之间的通信？Page将数据传给他们共同的父亲，然后再从父组件拿到数据  麻烦——全局变量解决 */}
      {/* <Parent>
        <Child>
          <GrandChild>
            <GrandGrandChild>

            </GrandGrandChild>
          </GrandChild>
        </Child>
      </Parent> */}
    </ThemeContext.Provider>
  )
}

export default App
