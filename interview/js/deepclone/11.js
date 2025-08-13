const arr1 =[1,2,3]
const newArr = [...arr1]

let arr2 = arr1.slice()
arr2[1] = 99
console.log(arr2,arr1)

const arr3 = [[1,2],[3,4],[5,[6,7]]];
// 当我们要拷贝的值也是对象时候，我没有把[1,2]等数组拷贝过来，我只是拷贝了数组的引用

let arr4 = arr3.slice(arr3)//切割数组，返回一个新的数组
arr4[2][0]=100
console.log(arr4,arr3)
let arr5 = arr3.concat()