const obj1 = {
    name:'张三',
    age:18,
}
let obj2 = obj1//没有实现拷贝
//不是复印，是引用传递 obj2只是换个名字还是同一个东西

obj2.age = 99

let arr1 =[1,2,3]
let arr2 = arr1
arr2.push(4)
//怎么实现数组对象的拷贝？

