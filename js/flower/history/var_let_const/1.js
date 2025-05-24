//  代码:
//    编译阶段
//     一霎那,编译的时候会把所有的变量和函数都提升到当前作用域的顶部,实现语法检测
//        在代码执行前做点准备(变量查找)
//    执行阶段 
//    js会先编译,然后再运行
// 变量提升是面试官喜欢的,js开发者设计的
// 不好,代码的执行结果和代码阅读顺序不一致，有歧义
// 糟粕，避开
// 声明变量不在使用var，用let



// showName()//驼峰式命名
// console.log(myName)//输出hello world
// var myName = '曾欣'//全局变量
// function showName(){//函数
//     console.log('函数执行了')
// }//函数结束
// 
let potion = "隐身药水"
   {
       console.log(potion)
       let potion = "治疗药水"
   }