# 流式输出

- 为什么会考这题？
  25年大厂必考题
  - LLM 聊天机器人（23年的AI爆款-》24年推理-》25年 AI Agent年） AI产品
  - 流式输出属于用户体验，前端职责，

- 为何需要流式输出？
  - 边生成边输出？
  后端、LLM API方式提供给我们？
  AIGC GenerticContent 生成式的
  大模型 一个token一个token transform（google）出来的
  "我是你的assistant" 基于token开销付费的
  更快的看到响应

- 前端的职责
  - 良好的用户体验
  - 尽快反馈结果，不让用户等待
  障眼法  生成要花事件哦，我愿意等
  最懂用户心理的

- 步骤
  - 前端能实现流式输出呢？
  setInterval 定时器 简单版本的流式输出
  异步：回调函数，then，async await
  事件监听机制 message
  - 后端又怎么实现？
  socket 长连接  长轮询
  http请求是基于请求响应式简单式协议 关闭连接？
  http 2.0 server push 服务器端推送。

## 全栈能力
- npm init -y  node后端
- npm i express