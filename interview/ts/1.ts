let a: any = 1 // any 表示可以是任何类型，ts新手，狂用any
a = '12' // 不能滥用，要做类型的传参，学会用泛型
function getFirstElement(arr: any[]): any {
  return arr[0]
}
const numbers = [1, 2, 3, 4]
const firstNum = getFirstElement(numbers)
console.log(firstNum)//any类型
firstNum.toFixed(2)//报错

const strs = ['1', '2', '3']
const firstStr = getFirstElement(strs)
console.log(firstStr) // any类型

// 想要提高函数的复用性，但是ts对于函数参数，返回值都需要指定类型
// 想要在复用这个函数的同时，传入类型参数
// 可以使用泛型来解决这个问题
// 这个函数接受类型的传参
function getFirstElement2<T>(arr: T[]): T | undefined {
  return arr.length ? arr[0] : undefined
}
const firstNum2 = getFirstElement2<number>(numbers)//显示传参
firstNum2?.toFixed(2)
console.log(firstNum2) // number类型
const firstStr2 = getFirstElement2(strs)//ts的类型推导，不需要传参
console.log(firstStr2) // string类型
