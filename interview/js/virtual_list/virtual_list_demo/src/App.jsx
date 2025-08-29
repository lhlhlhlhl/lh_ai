import { useState } from 'react'
import VirtualList from './components/VirtualList'
import './App.css'

// 生成10万条数据函数
const generateData = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    name: `item${i}`,
    description: `这是第${i}项，随着视窗加载`
  }))
function App() {
  const data = generateData(100000)
  const renderItem = (item, index) => (
    <div
      style={{
        padding: '10px',
        borderBottom: '1px solid #eee',
        backgroundColor: index % 2 === 0 ? '#f5f5f5' : '#fff',
      }}
    >
      <strong>[{index}]</strong>{item.name}
      <p style={{ margin: '4px 0', fontSize: '0.9em', color: '#666' }}>{item.description}</p>
    </div>
  )

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>固定高度的虚拟列表</h1>
      <p>Smooth scrolling with Virtualization</p>
      <VirtualList
        data={data}
        height={window.innerHeight - 100}
        itemHeight={80}
        renderItem={renderItem}
        overscan={3}//预渲染上下个3个额外项
      />
    </div>
  )
}

export default App
