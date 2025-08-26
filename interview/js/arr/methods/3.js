const people = [
  { name: '张三', age: 18, role: 'user' },
  { name: '李四', age: 19, role: 'user' },
  { name: '王五', age: 20, role: 'admin' }
]
const allAdult = people.every(person => person.age >= 18)
console.log(allAdult)
const allUser = people.some(person => person.role === 'user')
console.log(allUser)


