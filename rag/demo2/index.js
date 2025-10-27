// index.ts
import { ChatOpenAI } from "@langchain/openai";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { PyPDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { USearch } from "@langchain/community/vectorstores/usearch";
import { OllamaEmbeddings } from "@langchain/community/embeddings/ollama";
import { RetrievalQAChain, loadQAStuffChain } from "@langchain/chains";
import * as dotenv from "dotenv";

dotenv.config();

async function main() {
  console.log("🚀 开始运行 Assessment 报告 RAG POC...");

  // Step 1: 创建 Ollama LLM 客户端（兼容 OpenAI 接口）
  const llm = new ChatOpenAI({
    configuration: {
      baseURL: process.env.OPENAI_API_BASE_URL, // http://localhost:11434/v1
      apiKey: process.env.OPENAI_API_KEY,       // 任意值
    },
    model: process.env.MODEL_NAME || "llama3:8b",
    temperature: 0.7,
  });

  // Step 2: 加载 PDF 文档
  console.log("📄 正在加载 PDF 文件...");
  const loader = new PyPDFLoader("documents/sample.pdf");
  const docs = await loader.load();
  console.log(`✅ 加载完成，共 ${docs.length} 页`);

  // Step 3: 分块
  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 50,
  });
  const splitDocs = await textSplitter.splitDocuments(docs);

  // Step 4: 使用 Ollama Embeddings 生成向量（需单独启动 embedding 模型）
  // 注意：Ollama 默认 embedding 模型是 `nomic-embed-text`
  console.log("🧠 正在生成向量 embeddings...");
  const embeddings = new OllamaEmbeddings({
    model: "nomic-embed-text", // 推荐用于 embedding 的轻量模型
  });

  // Step 5: 创建向量数据库（内存中）
  const vectorStore = await USearch.fromDocuments(splitDocs, embeddings);
  const retriever = vectorStore.asRetriever();

  // Step 6: 创建 RAG 问答链
  const qaChain = new RetrievalQAChain({
    combineDocumentsChain: loadQAStuffChain(llm),
    retriever,
  });

  // Step 7: 测试问答
  const question = "这份报告的主要结论是什么？";
  console.log(`\n❓ 问题: ${question}`);
  const answer = await qaChain.invoke({ query: question });
  console.log(`✅ 回答: ${answer.output}`);

  // Step 8: 测试总结功能
  console.log("\n📝 正在尝试总结报告...");
  const fullText = splitDocs.slice(0, 3).map((d) => d.pageContent).join("\n");
  const summaryPrompt = `
请用中文总结以下评估报告的核心内容，包括：
- 评估对象
- 主要发现
- 风险或问题
- 建议或结论

内容：
${fullText}
  `;
  const summary = await llm.invoke(summaryPrompt);
  console.log("📋 总结:\n", summary);
}

main().catch(console.error);