//内置的hook 函数
import { useState } from 'react'
import '../Todo.css'
import TodoForm from './TodoForm'
import Todos from './Todos'
//为什么函数是一个组件?
function TodoList(){
    //数据驱动的界面
    //静态页面？
    //DOM编程  数组->map->join('')->innerHTML底层API 编程
    //缺点：低效、面向API
    //面向业务 懂业务
    //数据 -> 变化 -> 数据状态 -> 自动刷新页面 -> **数据**驱动页面 
    //返回数组，第一项是数据变量，第二项是一个函数 执行，并传入新的todos的值
    // 页面会自动刷新
    //挂载点 tbody
    //{todos.map}
    //setTodos DOM及动态更新
    //响应式界面开发
    //hi 数据状态 sethi 修改数据状态的方法
    //es6 解构
    const[hi,setHi]=useState('haha')
    // const hi=useState('haha')[0];
    // const setHi=useState('haha')[1];
    const [title,setTitle]=useState('Todo list')
    const [todos,setTodos]=useState([
        {
            id:1,
            text:'吃饭',
            completed:false//是否完成s
        }
    ])
    const handleAdd =(text)=>{
        setTodos([
            ...todos,
            // 把原来的保留
            {
                id:todos.length+1,
                text,
                completed:false
            }
        ])
    }
    // setTimeout(()=>{
    //     setTodos([
    //         ...todos,
    //         {
    //             id:2,
    //             text:'睡觉',
    //             completed:false//是否完成
    //         }
    //     ])
    //    setTitle('字节')
    //    setHi('加油')
    // },3000)
 
    return(
        <div className="container">
            <h1 className="title">{title}{hi}</h1>
            {/* 表单 */}
            <TodoForm onAdd={handleAdd}/>
            {/* 列表 */}
            <Todos todos={todos}/>
            {/* {
                //当下这个位置
                //数据为王，界面是被驱动的
                //数据驱动
                //数据绑定 data binding
                //发生改变 自动改变
                todos.map(todo=>(
                    <li>{todo.text}</li>
                ))
            } */}
        </div>
    )
}

export default TodoList;//将组件导出，向外输出