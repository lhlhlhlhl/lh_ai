const arr = new Array(5)
console.log(arr[0])//undefined 尝试去访问，就有这个key了
let obj = {
    name:'zf',
}
let obj2 = {
    skill:'ph',
}
obj.__proto__ = obj2//原型链
console.log(obj.skill)//ph 原型链查找

for(let key in obj){//for in 会遍历原型链上的属性
    console.log(key,obj[key])
}
console.log(obj.hasOwnProperty('skill'))//false 原型链查找
console.log(obj.hasOwnProperty('name'))//true 自身属性
console.log(arr.hasOwnProperty(0))// false 判断一个对象（或数组）是否拥有某个自身的属性（键）
