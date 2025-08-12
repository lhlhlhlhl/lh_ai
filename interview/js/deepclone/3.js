const target = {
    a:1,
}
const source = {
    //对象的嵌套
    b:{
        name:'小明',
        hobbies:['篮球','足球'],
    },
    c:4,
}

Object.assign(target,source)
console.log(target) // {a: 1, b: {name: '小明', hobbies: ['篮球', '足球']}, c: 4}
target.b.name="小红"
target.b.hobbies.push('跑步')
target.c =2
console.log(target) // {a: 1, b: {name: '小红', hobbies: ['篮球', '足球', '跑步']}, c: 2}
console.log(source) // {b: {name: '小红', hobbies: ['篮球', '足球', '跑步']}, c: 4}

// 浅拷贝，目标对象的属性值是引用类型，那么目标对象的属性值会指向源对象的属性值
// 所以，目标对象的属性值会被改变，会影响源对象的属性值

// 解决方法：深拷贝
