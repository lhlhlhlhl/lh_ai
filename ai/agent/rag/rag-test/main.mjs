import "dotenv/config"
import {
  ChatOpenAI,
  OpenAIEmbeddings
} from "@langchain/openai"
// 知识库中一段知识的抽象概念
import {
  Document
} from "@langchain/core/documents"
import {
  MemoryVectorStore
} from '@langchain/classics/vectorstores/memory'

const model = new ChatOpenAI({
  modelName: process.env.MODEL_NAME,
  apiKey: process.env.OPENAI_API_KEY,
  configuration: {
    baseURL: process.env.OPENAI_BASE_URL
  },
  temperature: 0,
})

const embeddings = new OpenAIEmbeddings({
  model: process.env.EMBEDDINGS_MODE,
  apiKey: process.env.OPENAI_API_KEY,
  configuration: {
    baseURL: process.env.OPENAI_BASE_URL
  },
})