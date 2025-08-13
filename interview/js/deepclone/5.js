const target = {
    a:1
}
//如果源对象是简单数据类型会忽略
Object.assign(target,null)
Object.assign(target,undefined)
console.log(target)

Object.assign(undefined,target)//报错
const obj ={name:'张三'};
Object.assign(obj)//源对象可以不传
