// 生成器函数
// async 更好理解
// 函数内部有异步任务
function* idGenerator() {
  let id = 1
  while (id < 4) {
    yield id++
  }

}
// es8 的async/await其实在es6里面就有了 * + yield
// yield 暂停

const gen = idGenerator()
//gen为一个可以迭代的生成器函数,迭代器
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().done)

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().done)
