function Person(name,age){
    //this 指向的是实例化的对象
    this.name=name;
    this.age=age;
}
// Person.prototype={
//     sayHello:function(){
//         console.log(`Hello,my name is ${this.name},I am ${this.age} years old`);
//     }
// }
Person.prototype.sayHello=function(){
        console.log(`Hello,my name is ${this.name},I am ${this.age} years old`);
    }

var p1=new Person('zs',18);
console.log(p1.__proto__);
var a = {
    name:'zs',
    country:'China',
}
p1.__proto__=a;
console.log(p1.__proto__);
console.log(Person.prototype);

console.log(Person.prototype);
console.log(Person.prototype.constructor)
console.log(Person.prototype.constructor == Person)
Person.prototype=a;
console.log(Person.prototype.constructor)
console.log(p1.aaa)//undefined 沿着原型链查找