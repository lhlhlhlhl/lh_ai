function *fruitGenerator(){
  console.log('开始生成水果')
    yield "apple";
    console.log('继续生产')
    yield "orange";
    console.log('生产介绍')
    return '没有水果了'
}
// 生成器对象 迭代器 可以实现暂停和继续
const fruitMachine = fruitGenerator()
console.log(fruitMachine.next())
console.log(fruitMachine.next())
console.log(fruitMachine.next())
