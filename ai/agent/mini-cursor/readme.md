# 手写cursor 最小版本
## 近期Agent 爆火产品
- 千问点奶茶 豆包 元宝
    互联网计算向AI Agent 推理，郧西的一个跨时代的产品，更复杂，更智能，更强大
- OpenClaw 养虾
    开源版本的Manus
    一人公司
    虚拟数字人，多Agent
    编程Agent（cursor）ppt 算账 市场
    任务拆解、计划、找到一批需要的Agent 完成任务
    Manus 
- seedance 抖音视频的数据
- 从 llm prompt engineering（DeepSeek） -> Agentic Engineering(智能全栈)

- AI Agent 如何打造？
    - 直接调大模型？ 获得智能，生成代码
        gemini 3.1 pro
    - 你上周和它聊过的消息，它是不是记不住？（bug） Memory
    - 你让他帮你访问一个网页，做一些事情  Tool
    - 你想让他基于公司内部的私密文档做一些解答  RAG
RAG
    AI Agent = llm + memory + tool + RAG

## Agent 是什么？
其实就是给大模型扩展了Tool和memory的功能，他本来就可以思考，规划，我们给他用来tool扩展了能力
他就可以自动做事情，用memory管理记忆，他就可以记住你想他记住的东西，还可以使用RAG查询内部知识来获取（context）

这样知道内部知识，能思考规划，有记忆，能够帮你做事情的扩展后的大模型，就是一个Agent

## Tool 工具

### 用react 创建一个todoList
- 任务 期待Cursor 编程Agent 完成
- llm思考（thinking），规划（planing） aigc生成代码
- tool 让llm扩展，有读写文件的能力，项目就生成了
- tool bash 执行命令

### LangChain
LangChain 是一个 AI Agent 框架 提供了 memory tool rag 等功能
后端功底（node）nest.js

AI 全栈Agent开发

## LLM with Tools

- llm 选择 
    qwen-coder:
    sk-243ada9b3d674ffe8b7161127955e3f1
    https://dashscope.aliyuncs.com/compatible-mode/v1
- tools
    [read,write,exec]
-  pnpm i @langchain/openai 适配了常见的llm模型