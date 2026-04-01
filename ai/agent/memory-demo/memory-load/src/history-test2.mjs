// 加载Memory
import 'dotenv/config';
import { ChatOpenAI } from '@langchain/openai';
import { FileSystemChatMessageHistory } from "@langchain/community/stores/message/file_system";
import { HumanMessage, AIMessage, SystemMessage } from "@langchain/core/messages";
import path from "node:path";

const model = new ChatOpenAI({ 
  modelName: process.env.MODEL_NAME,
  apiKey: process.env.OPENAI_API_KEY,
  temperature: 0,
  configuration: {
      baseURL: process.env.OPENAI_BASE_URL,
  },
});

async function fileHistoryDemo(){
// 指定存储文件的路径
  const filePath = path.join(process.cwd(), "chat_history.json");
  const sessionId = "user_session_001";//new Chat相当于增加了一个sessionId

  // 系统提示词
  const systemMessage = new SystemMessage(
    "你是一个友好的做菜助手，喜欢分享美食和烹饪技巧。"
  );
  const restoreHistory = new FileSystemChatMessageHistory({
    filePath:filePath,
    sessionId: sessionId,
  })
  // console.log(await restoreHistory.getMessages())
  console.log("[第三轮对话]")
  const userMessage3 = new HumanMessage("需要哪些食材")
  await restoreHistory.addMessage(userMessage3)
  const message3 = [systemMessage,...(await restoreHistory.getMessages())]
  const response3 = await model.invoke(message3)
  await restoreHistory.addMessage(response3)
  
  console.log(`用户${userMessage3.content}`)
  console.log(`助手${response3.content}`)
  console.log(`✓ 对话已保存到文件: ${filePath}\n`);
}
fileHistoryDemo().catch(console.error)
