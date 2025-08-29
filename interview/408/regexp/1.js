const str = '我的手机号是13812345678，有空打给我'
const str2 = 'aaaa'
const reg = /1[3-9][0-9]{9}/
console.log(reg.test(str))
console.log(reg.test(str2))
console.log(str.match(reg))
console.log(str.match(reg)[0])

const str3 = 'my {name}'
console.log(str3.replace(/\{name\}/, 'hh'))




