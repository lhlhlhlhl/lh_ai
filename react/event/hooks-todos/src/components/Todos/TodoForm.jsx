import {
    useState//私有状态
}from 'react'
const TodoForm = ({onAddTodo}) => {
    // const{onAddTodo}=props
    //数据
    //props参数数据
    //state 私有状态
    //单向数据流
    const[text,setText]=useState('')
    const handleSubmit = (e) => {
        e.preventDefault();//阻止表单的默认提交行为
        let result = text.trim();//dry= don't repeat yourself 性能优化:将简单数据类型String包装成对象,再调用trim()方法
        if(!result) return;//如果没有输入内容或者输入空格，直接返回
        onAddTodo(result);//调用父组件的函数，将输入的内容传递给父组件
        setText('')//清空输入框,数据状态和界面状态要一致要敏感
    }
    //JSX一定要有唯一的最外层元素 树状结构（一定要有根） 树来编译解析JSX
 return (
    <>
        <h1 className="header">TodoList</h1>
        <form className='todo-input' onSubmit={handleSubmit}>
            <input 
                type="text"
                value={text}// 数据绑定
                onChange={e=>setText(e.target.value)}//维护数据值跟input状态的同步
                 placeholder='请输入任务内容'
                required//必填项
               
            />
            <button type='submit'>Add</button>
        </form>
    </>
 )
}
export default TodoForm