import { useState } from "react";
function TodoForm(props) {
    const onAdd=props.onAdd
    const[text,setText]=useState('打豆豆')
    const handleSubmit=(e)=>{
        //阻止默认的行为
        //由js控制
        e.preventDefault();
        //console.log(text);
        onAdd(text)
        //如何修改todos? 打报告
    }
    const handleChange=(e)=>{
        setText(e.target.value)
    }
    return (
        <form action="http://www.baidu.com" onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="请输入代办事项"
            // 占位置，一个输入框一定要写placeholder 增强语义化
            value={text}
            onChange={handleChange}
            />
            <button type='submit'>添加</button>
        </form>
    )

}
export default TodoForm;