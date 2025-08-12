// 有两个容器，盒子A 放有钥匙，钱包
// 盒子B 放有手机，充电宝

const target = {a:1};
const source = {b:2};
// Object.assign() 方法用于将一个或多个源对象的所有属性复制到目标对象(第一个参数为目标对象)
// 并返回修改后的目标对象。常用于对象的浅拷贝或属性合并
const result = Object.assign(target,source,source);
console.log(result,target)// {a: 1, b: 2} {a: 1, b: 2}
console.log(result === target) // true 与目标对象指向同一块堆内存
console.log(result ,source) // {a: 1, b: 2} {b: 2}
result.a = 11
console.log(target)// {a: 11, b: 2}





