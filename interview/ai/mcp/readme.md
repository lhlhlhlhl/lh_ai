# AI

- Function Call（功能，命令）
    可以让LLM 突破自身知识和能力的局限，通过调用外部工具或API来获取实时信息、执行计算或操作，从而获取最新数据，从而精确计算与外部系统交互的复杂任务

- mcp（Model Context Protocol）（协议）
    是一个协议，类似web开发中Restful协议，如何讲外部资源暴露给LLM的协议和编程风格
    是Function Call 的升级版

    在做各种Function Call有点乱的时候，mcp统一了一切

    mcp是LLM与外界之间的通信协议，它就好像USB,LLM训练完后的不了解的知识

    LLM本身不知道怎么调用地图、数据库、搜索引擎，MCP规定了标准的上下文交换方式，让模型能像调用API一样去访问外部能力

## 举例
    高德地图MCP,请帮我规划从公司到机场的路线
    模型会根据高德地图MCP插件，获取实时的路径和交通数据

## 意义
    - LLM 输出更可靠
    - 降低集成成本（自有系统和LLM集成）
    - 数据安全可控
    高德地图接入MCP,就像LLM的眼睛和耳朵，让AI真正理解和使用实时世界

## mcp的使用
- mcp server 是基于mcp协议的服务器软件
    定义tool...
- LLM
- mcp client  cline/cursor
    支持我们配置mcp server
- LLM -> client -> server Transport 通信

- 安装mcp 客户端