let arr = [3, 1, 2]
// arr.sort排序，会修改原数组，并且返回值也为排序之后的原数组
// console.log(arr.sort(), arr)
// console.log(arr.sort((a, b) => a - b))//a为前面那一项，b为后面那一项，a-b如果为true则调换
// 降序
// console.log(arr.sort((a, b) => b - a))

console.log([10, 1, 20, 3, 5].sort())//如果不给回调函数，会默认字典ascll码排序
// sort会将数组的每个元素转为字符串，字符串化
// [1, 10, 20, 3, 5]
// 10的ascll码为49，1的ascll码为48，所以10会排在1的前面

// console.log(arr.reverse(), arr)//reverse会修改原数组，并且返回值也为反转之后的原数组
//回文，reverse->.join

console.log(arr.fill(0, 1, 3), arr)//fill会修改原数组，并且返回值也为填充之后的原数组
// 0为填充的值，1为填充的起始位置，3为填充的结束位置，不包括3

console.log(arr.slice(1, 3), arr)//slice不会修改原数组，并且返回值也为截取之后的新数组
// 1为截取的起始位置，3为截取的结束位置，不包括3





