//没有class的js如何在苦苦追求OOP
//函数 首字母大写 就是一个类  驼峰命名法 约定 类的概念
//将类的概念用函数来实现

//1.类的概念
//2.构造函数 （既是一个类，又是一个构造函数）
function Person(name,age){
    //this 指向的是实例化的对象
    this.name=name;
    this.age=age;
}
//原型对象 类的属性和方法都放在原型对象上
//函数对象原型对象
//解决了js如何表示类的方法的问题
Person.prototype={
    sayHello:function(){
        console.log(`Hello,my name is ${this.name},I am ${this.age} years old`);
    }
}
//new一下 将函数变成类 实例化对象
//new 运行构造函数
console.log(new Person('zs',18))
console.log(new Person(11,18))
let p1=new Person('zs',18);
p1.sayHello();
//p1.__proto__指向了原型对象，是构造函数的原型对象
console.log(p1.__proto__)//{ sayHello: [Function: sayHello] }
console.log(p1.__proto__.__proto__)//[Object: null prototype] {}
let o ={a:1};
console.log(o.__proto__)//[Object: null prototype] {}
console.log(o.toString())//[object Object]
//我们成功构造了一个类