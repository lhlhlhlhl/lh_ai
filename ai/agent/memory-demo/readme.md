# Agent 记忆模块

- Rag 太重要了
    - 最低的成本（embedding的成本）去丰富了llm的精准的上下文
    - 大模型的微调（finetue）也可以提升llm的能力，但是花费巨大，巨复杂,成本比较高

- llm 的扩展
    llm + tool(干活) + RAG（知识库Context）+ Memory(记忆)

- memory 是基石
    messages 数组 最基础的memory
    tool ? 基于Memory toolMessage
    rag? Prompt 增强 我们之前的对话，能力的积累 修改prompt
    SSD 规范驱动编程

- 和llm的对话 是无状态的 Stateless 
    - Stateless 让llm变得简单，消费算力、电力、高并发基础设施
        基于请求 AIGC 生成，生成内容返回
    - http 也是这样的，无状态Stateless
        因为他是万物互联，所以要简单
        http 头中带上Cookie,Authorization 等信息让请求带上了状态，还是http依旧是无状态的
    - 带上了memory 
        messages 数组
- modelWithTools
    message数组放入了SystemMessage,告诉他的角色、功能
    然后放入HumanMessage,用户的问题(干什么)
    基于智能循环判断tool_calls
    讲Tool的返回结果ToolMessage 放入messages 数组
    利用了Memory把需要多轮对话的复杂任务，无状态的大模型也能搞定

- 单纯的Messages数组很简单，但是有问题
    - token消耗越来越多，context消耗越来越多，触犯到上下文窗口大小限制

- 解决方案
    - 截断 slice(-3)取倒数第三个元素，最近最关心的对话还在 滑动窗口 LRU
    - 将要截断的messages总结一下（summarize）总结
        当前的多轮对话中
    - 检索 （先存 数据库、文件）下一次提问就可以做rag
        trae,cursor强大就在多次对话的检索能力，超越当前对话，将之前的对话存储，rag利用的常见
        AI Agent越来越懂我们

        清空messages
        新的任务，节省token

        - cursor 要能够通过messages去计算token的开销
            40%， 0%
        - 自动触发总结
        - 手动触发
            /compact
            /clear
            又能vibe coding 又能省token的ai工程师


## FileSystemMessageHistory
- cursor 的messages history的实现方案
    - session_ID 会话ID 一次会话 有一个会话ID,会话主题
    - 如果是一个全新的主题，就新开一个session
- 持久化存储 messageHistory
- 恢复某个session 继续chat
- 实现了cursor 的Memory的持久化功能的理解

## 截断