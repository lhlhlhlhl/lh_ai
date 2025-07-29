import React from 'react'
//如何约束函数的返回值为reactnode  jsx
//FC == functionComponent
//如何约定自己需要一个name的props? 接口

interface Props{
    name:string;
}
//typescrip类型约束，重要的地方一定要类型约束
//参数，返回值
//泛型 fan'zhifanzhi 内部的类型
//泛型
const HelloComponent: React.FC<Props> = (props)=>{
    //const {name,age} = props
    return (
        <h2>Hello ts:{props.name}</h2>
    )
}
export default HelloComponent