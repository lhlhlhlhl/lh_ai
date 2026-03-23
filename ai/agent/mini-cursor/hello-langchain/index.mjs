import { ChatOpenAI } from "@langchain/openai";
import dotenv from 'dotenv'
dotenv.config()
const model = new ChatOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    modelName: process.env.OPENAI_MODEL_NAME,
    configuration: {
      baseURL: process.env.OPENAI_BASE_URL,       
    }
});
const response = await model.invoke('介绍一下高德地图的功能')
console.log(response.content)
