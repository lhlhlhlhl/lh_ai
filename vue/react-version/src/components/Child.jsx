// 子组件一般仅仅用于纯UI StatelessComponents 性能优化
// 无状态  函数组件
const Child =(props)=>{
    return (
        <>
            {props.title}
       </>
    )
}
export default Child
