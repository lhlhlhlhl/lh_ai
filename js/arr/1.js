// {}是对象，[]是数组
// {} key:value 时间复杂度O(1) HashMap Map
// 对象 第一种重要的数据结构
// 数组 第二种重要的数据结构 链表、队列、栈
// 长度的限定
// js没有数组长度的限制，弱类型，可以限定长度，可以动态扩容
const arr = [1,2,3];
const arr2 = new Array(5).fill(undefined);
//为什么下标从0开始 方便计算偏移量
console.log(arr2);
arr2[8] = undefined//如果我们直接操作第九个元素，会自动扩容，中间三个为empty
console.log(arr2,'~~~~~~~');
for(let key in arr2){
    console.log(key,arr2[key],'------');
}
for(let item of arr2){
    console.log(item,'`````');
}
// for key in 与 for of 区别？