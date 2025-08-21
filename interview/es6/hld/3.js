// thenable
function light(color, ms) {
  console.log(color);
  return new Promise(r => setTimeout(r, ms))
}

function loop() {
  light('red', 3000)
    // 控制流程，异步变同步
    .then(() => light('yellow', 2000))
    // 当返回值也是promise时，可以继续thenable
    .then(() => light('green', 3000))
    .then(() => loop())// 递归调用

}

loop()
