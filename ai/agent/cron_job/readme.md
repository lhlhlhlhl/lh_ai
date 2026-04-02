# 定时任务

任务：明早九点帮我把最新关于open claw的新闻，整理成一篇日报，发到我的邮箱。

- 日历的能力交给小龙虾，日程安排
- 网络搜索tool 
- 写文章
- 发邮箱

## 生成器

普通函数：一调用就从头跑到尾
生成器函数： 跑一些遇到yield停下来，
            promise解决后可以从暂停的地方继续跑，是async await的前身
            这个比较困难与复杂

## RxJS
是js的响应式扩展库，核心是observable（可观察对象）
  用于处理异步数据流，提供丰富的操作符 

用数据流的方式去处理异步事件

- JS里常见的异步方式
  - callback 回调地狱
  - promise
  - generator/yield
  - event listener
  - async/await
  以上是一次性的异步任务
  但是又很多异步任务是连续发生的事件
    - SSE 服务器发送事件
    - 输入框输入
    - 鼠标移动
    - AI 流式

  事件1 =》 事件2 =》 事件3 =》 事件4 
  像一条河流
  
## 流式输出
- nest.js + rxjs 实现服务器端sse接口
    - nest.js 以@Sse 装饰器模式 /ai/chat/stream
    - 本质是设置了 
        Content-Type: text/event-stream
        Cache-Control: no-cache  别缓存
        Connection: keep-alive 保持连接
        Transfer-Encoding: chunked 分块传输
    - service 模块根据langchain stream:true llm流式响应
    - 使用rxjs from api 将llm流式响应转换为observable对象
        pipe一下map 操作符，将每个chunk转换为前端需要的格式
    - service 使用langchain tool 定义了queryUserToo;等tool
    - llm 流式大模型响应 for await chunk of stream
    - chunk 不断concat
    - 判断fullAIMessageChunk.tool_call_chunks
        - 如果是，不干
        - 如果不是，yield输出
    - agentLoop
        - 如果要调用工具 执行tool(args)
    - 结束