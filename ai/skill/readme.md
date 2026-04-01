# Skills

## MCP

定义了一个协议，规定大模型如何与外部系统进行通信。
Model Context Protocol 标准协议 让AI连接外部世界（工具/PromptTemplate/文档）

MCP 解决的是能做什么，但是无法替代人类或高级智能体所具备的复杂情景判断，创造性策略制定活领域模糊问题

llm with tool 从聊天编程到执行任务
mcp 将tool伸伸向了外部服务器，将原有的服务提供给大模型，mcp其实就是写server
sdk @tool 工具
@prompt prompt模板
@resource 资源

SKILLs 技能

- 文件夹 ppt 专家
  - SKILL.md 必须的 Prompt
    技能声明
  - scripts 文件夹
    完成任务
  - resources 文件夹
    资源文件
    SKILLs == 可复用的AI专业能力包（Prompt + 规划 + 工具 + 资源）

类比：
Prompt 一次性对话 无状态 RAG Tool 任务
SKILLs 把prompt转变为可复用的工作经验
小龙虾就是安装了各种SKILLs 自动化工作

- 为什么SKILLS 会火
  1. 传统prompt的问题
     帮我写一个PRD
     问题：
     - 每次都要重复描述
     - 不稳定
     - 不可复用

  skill解决什么
  - 可复用 一次写好 多次使用
  - 标准化，团队统一AI行为
  - 可组合 多个SKILLS 组成Agent
  - 低成本，不需要开发服务器端，MCP的区别
    SKILLS 是instructions + scripts + resources 的组合
    MCP 可以完成任务，SKILLS 可以将任务怎么完成得更好
    小龙虾是Manus的开源版本 智能体管家 opc的实例
    智能体的windows 操作系统来了

  skills + mcp = 完整的 AI Agent

  用户：分析这个excel
  MCP: 读取excel
  SKILLS: 在读取excel后，按公司规划分析+输出报告

  ### brand-guidlines
  - gemini3 生成landing page 按照这个skill这个要求
    颜色，风格，主题 anthorpic公司
    公式开发skill，有利于统一
  - skills 的名字和文件夹一样 小写，多个单词-连接
  - SKILL.md 是prompt文件
    - 头部，YAML（json） 前置元数据
      name
      description
      license 许可

  - 总述他的作用

### ppt skills

- 渐进式的
  技能比较复杂，多种场景，渐进式的加载
  Skill.md 模块化加载别的md文件
  省token

  This guide covers essential PDF processing operations using Python libraries and command-line tools. For advanced features, JavaScript libraries, and detailed examples, see **REFERENCE.md**. If you need to fill out a PDF form, read **FORMS.md** and follow its instructions
