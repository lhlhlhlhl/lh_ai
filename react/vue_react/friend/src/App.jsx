// 1. 引入核心魔法卷轴 (React 和 useState)
import React, { useState } from 'react';

function App() {
  // 2. 建立你的“待办咒语”能量源 (状态)！
  //    - `todos`：当前存储的咒语列表 (能量状态)
  //    - `setTodos`：更新咒语列表的咒语 (改变能量的方法)
  //    - `['召唤水元素', '学习火球术', '练习传送门']`：初始能量 (初始状态)
  const [todos, setTodos] = useState([
    '召唤水元素',
    '学习火球术',
    '练习传送门'
  ]);
  setTimeout(()=>{
    //setTodos(['吃饭','睡觉','打豆豆','养鱼'])
    setTodos(['字节','百度','微软'])
   },5000)

  // 3. 描绘你的魔法阵 (UI)！使用 {} 嵌入 JS 能量 (表达式)。
  return (
    <div className="app">
      <h1>🧙‍♂️ 我的魔法修炼清单</h1>
      <ul>
        {/* 4. 用 `map` 咒语将能量(todos)转化为符印(<li>) */}
        {todos.map((spell, index) => (
          <li key={index}>✨ {spell}</li> // `key` 是给每个符印的唯一标识符
        ))}
      </ul>
    </div>
  );
}

export default App; // 5. 导出你的法术书