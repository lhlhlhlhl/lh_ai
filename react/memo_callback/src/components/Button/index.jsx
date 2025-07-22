import {
    useEffect,
    memo,// 记忆组件，跟我没关系，不要重新渲染
} from 'react'
const Button = ({num}) => {
    useEffect(()=>{
        console.log('Button useEffect')
    },[])
    console.log('Button render')
    return (
        <button>{num}Click me</button>
    )
}
//高阶组件
export default memo(Button)