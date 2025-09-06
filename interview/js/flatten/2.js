// reduce  []=>一项 
// 多维数组 =》 一项一维数组
// reduce方法把数组合并成一个值
const flatten = arr =>
  arr.reduce((acc, cur) =>
    acc.concat(Array.isArray(cur) ? flatten(cur) : cur), [])