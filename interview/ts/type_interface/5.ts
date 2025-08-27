//约定函数(参数):返回值
interface AddFn {
  (a: number, b: number): number
}
type AddType = (a: number, b: number) => number

// 类型的别名
type NumberOther = number
let c: NumberOther = 1
