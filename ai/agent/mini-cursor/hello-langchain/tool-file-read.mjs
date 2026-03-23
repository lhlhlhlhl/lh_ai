import 'dotenv/config'
import {ChatOpenAI} from "@langchain/openai";
import { tool } from "@langchain/core/tools";
import {
  HumanMessage,
  SystemMessage,
  ToolMessage//大模型返回的工具调用的信息，llm告知用户我在调用什么工具，会返回什么信息等
} from "@langchain/core/messages";
// node 内置文件模板 异步IO
import fs from 'node:fs/promises'
// 数据校验库 zod tool parameter 校验
import { z } from "zod";

const model = new ChatOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    modelName: process.env.OPENAI_MODEL_NAME,
    configuration: {
      baseURL: process.env.OPENAI_BASE_URL,       
    },
    temperature: 0,
    // 温度参数，控制模型输出的随机性，0 表示最确定的输出,严谨
})
// 原生写法 麻烦
// 新建一个tool
const readFileTool = tool(
  // tool 处理函数的函数体
  // 分析xx代码文件有没有bug
  // 先tool 读取文件内容，path 作为参数 等待文件读取完成
  // 再分析有没有bug
  async({path})=>{
    const content = await fs.readFile(path,'utf-8')
    console.log(`[工具调用]read_file("${path}")成功读取${content.length}个字节`)
    return content
  },
  {
    name:'read_file',
    description:`
    用此工具读取文件内容。当用户读取文件，查看代码，分析文件内容时，使用此工具。
    输入的文件路径可以是相对路径也可以是绝对路径`,
    schema:z.object({
      path:z.string().describe('要读取的文件路径')
    })
  }
)
const tools = [readFileTool]
// langchain 提供了一个方法，绑定工具
// model不再孤单，有了工具的陪伴
const modelWithTools = model.bindTools(tools)
const messages = [
  new SystemMessage(`
    你是一个专业的代码分析助手,可以使用工具去读取文件并分析代码。
    
    工作流程：
    1. 当用户需要查看文件内容、分析代码、查找bug时，使用read_file工具。
    2. 等待工具返回文件内容
    3. 基于文件内容进行分析和解释

    可用工具：
    - read_file：读取文件内容（使用此工具获取文件内容）
  `),
  new HumanMessage('请读取`tool-file-read.mjs`文件内容，并解释代码')
]
// llm返回的决策，他要调用工具了
// tool_calls的api部分
// name执行函数result
// message ->llm
// 最后的结果
let response = await modelWithTools.invoke(messages)
messages.push(response)//把大模型要调用工具的message也加入messages数组，形成多轮对话

while(response.tool_calls && response.tool_calls.length > 0){
  console.log(`\n[检测到${response.tool_calls.length}个工具调用]`)
  const toolResults = await Promise.all(
    response.tool_calls.map(async (toolCall)=>{
      const tool = tools.find((t)=>t.name === toolCall.name)
      if(!tool){
        return `错误：找不到工具${toolCall.name}`
      }
      console.log(`[执行工具]${toolCall.name}(${JSON.stringify(toolCall.args)})`)
      try{
        const result = await tool.invoke(toolCall.args)//调用工具
        return result
      }catch(error){
        return `错误：${error.message}`
      }
    })
  )
  // console.log(toolResults)
  response.tool_calls.forEach((toolCall,index)=>{
    messages.push(
      new ToolMessage({
        content:toolResults[index],
        tool_call_id:toolCall.id
      })
    )
  })
  //console.log(messages)
  response = await modelWithTools.invoke(messages)
  // response中不再有tool_calls
  console.log(response)
}
// console.log(response,response.content)
