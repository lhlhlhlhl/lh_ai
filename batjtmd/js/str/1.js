/**
 * @func 反转字符串
 * @param {string} str 
 * @return {string}
 */
// function reverseString(str){
//     //str是什么类型? 字符串 简单数据类型 primitive
//     //
//     return str.split('').reverse().join('')

// }
//es5 函数表达式
// const reverseString = function (str) {
//     return str.split('').reverse().join('')
// }
//es6 箭头函数 简洁 function 不要了 用简单的箭头代替 左边是参数 右边是函数体
//{}也省了 函数体只有一句话的时候可以省
//如果这仅有的一句代码他是返回值的时候,return也省了
const reverseString = (str) => str.split('').reverse().join('')
console.log(reverseString('abc')) //a