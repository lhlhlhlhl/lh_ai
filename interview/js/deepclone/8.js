const s = Symbol('id')//独一无二，可以作为对象的属性 SYmbol是可枚举的
const source = {
    [s]:123,
    a:1
}
const target =[]
Object.assign(target,source)
console.log(target)
