showName() // 驼峰式命名
console.log(myName);

var myName = '曾欣'
function showName() {
  let b = 2;
  console.log(myName); // 局部变量，只能在函数内部使用，不能在函数外部使用，否则会报错：Uncaught ReferenceError: b is not defined at showName (:1:1) at :1:1
  console.log('函数执行了')
}