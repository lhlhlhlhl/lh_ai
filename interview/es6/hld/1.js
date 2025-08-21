// # 红绿灯

// - 同步阻塞
// sleep 函数 
// - 显示时间
// - 轮询

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function trafficLight() {
  const seq = [
    { color: 'red', ms: 3000 },
    { color: 'yellow', ms: 2000 },
    { color: 'green', ms: 3000 },
  ]
  while (true) {
    for (const { color, ms } of seq) {
      console.log(color)
      await sleep(ms)

    }
  }
}
trafficLight()

