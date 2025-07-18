//fill一样的
// 不同值的初始化需求，of方法是Array这个类的静态方法，不需要实例化，而fill是实例方法
console.log(Array.of(1,2,3))//不同值的初始化
//复杂的计算或转变
console.log(Array.from(new Array(26),(val,index)=>String.fromCodePoint(65+index)))
