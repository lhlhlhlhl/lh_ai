const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const removed = arr.splice(2, 2)
console.log(removed)
console.log(arr)
// 如果不修改原数组，如何实现
// slice表示提取一部分
const arr1 = [1, 2, 3, 4, 5]
const newArr = arr1.slice(0, 2).concat(arr1.slice(4))
console.log(newArr)
console.log(arr1)