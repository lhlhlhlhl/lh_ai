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
//深拷贝
const newObj = JSON.parse(JSON.stringify(source))//将源对象字符串化，再解析为对象，会生成新的对象
console.log(newObj)
newObj.b.name = 'aaa'
newObj.b.hobbies.push('跑步')
newObj.c = 2


console.log(newObj,source)//源对象不会改变



