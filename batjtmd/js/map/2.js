//parseInt 有三个参数num,index,arr,第一个参数num是数组中的每一项，第二个参数index是数组中的每一项的索引，第三个参数arr是数组本身
//不管你要不要都会有，而且程序一定会执行
['1','2','3'].map((num,index,arr)=>{
    console.log(num,index,arr);
    return num;
})
//第二个参数是进制
console.log(parseInt('1',0,['1','2','3']));
console.log(parseInt('2',1,['1','2','3']));//一进制中没有2
console.log(parseInt('3',2,['1','2','3']));//2进制中没有3
