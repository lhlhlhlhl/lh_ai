# 原型
- 什么叫做原型？
  - OOP机制 Object Oriented Programming面向对象编程
  - 封装、**继承**、多态、

## JS OOP
- 对象字面量
 一堆一样的对象创建 麻烦
- 类的概念，但是没有class关键字 编程语言一旦有了class关键字就会变得很复杂
- 构造函数绝对不能省
- 赋予函数新的使命，身兼两职

## JS面向对象更强大，它是原型式的
- 任何对象 都会默认指向Object  
- __prototo__
  任何对象都有这个私有属性 对象和构造函数和类之间没有什么血缘关系（代孕）
- JS本来没有类
 只不过function大写 来表示类
- JS对象和类，构造函数 没有血缘关系
  __proto__指向构造函数的prototype对象
- __protp__指向任何对象
- 不指定 默认是Object
- 原型对象、原型链
- 类是大写的函数
- 实例 是new出来的对象
- 任何函数都有prototype属性，值就是构造函数的原型对象

## new的过程
new -> {} -> constructor运行 -> this -> {} -> 完成了构造
-> __proto__ -> constructor.prototype -> Object 原型链
-> null为原型链的终点