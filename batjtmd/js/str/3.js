//包装类写法(全面的面向对象式写法)
let a="abc"
let b=new String("abc")
console.log(a==b)//true 值
console.log(a===b)//false 值和类型 类型不同
//js给所有简单类型提供了相应类型的类  包装类
console.log(b.split(''))//string 类型
// 为了统一面向对象写法
// js会自动将简单数据类型包装成对象
//a->new String(a)
console.log(a.split(''))
//之后会瞬间销毁,回归原来的简单数据类型