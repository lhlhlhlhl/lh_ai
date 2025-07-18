const arr = [1,2,3]
// 可迭代对象，es6新增
for(let item of arr){
    console.log(item)
}
// for of 除了想拿到item还想拿到index，使用entries
for(let [index,item] of arr.entries()){
    console.log(index,item)
}
for(let item in arr.entries){
    //每一项都是数组，第一项是key,第二项是value
    console.log(item)
}
console.log(arr.entries())//[object Array Iterator] 迭代器，可迭代对象，es6新增