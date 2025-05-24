//JavaScript 允许基本数据类型调用对象方法，主要是为了提高代码的简洁性和可读性。要是每次使用字符串方法时都得手动创建包装对象，代码就会变得很繁琐。

"hello".split("")
//js 为了实现面向对象的同意写法,没有函数式的写法 len("hello")
"hello".length
// 背后魔法
// JS面向对象的统一写法
//数组对象
['h','e','l','o','l'].reverse()
//"hello" -> new String("hello") 子符串对象 系统自带的
//"hello"==new String("hello")
// true
// "hello"===new String("hello")
// false