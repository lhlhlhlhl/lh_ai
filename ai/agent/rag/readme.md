# rag

- llm 的知识来源于哪里？
  训练的时候会给他数据集，
- llm 的幻觉？
  AIGC
  当用户问了llm不知道的问题，他会认认真真地胡说八道
- RAG 可以解决llm幻觉
  - llm thinking planing
  - 检索增强
  - Augument Prompt
  - 如果没有匹配到--就回答不知道

## RAG

- Retriver
  - 原始的prompt embeding
  - 知识库 提前embedding
  - con sin 相似的计算
- 知识库
  - 专家知识库
  - 企业私有/安全知识库
  - 各种类型的文件，txt,pdf,mp3,video
  - 大大文件切片，document文档碎片
  - embedding 化了

- Augmented 增强
  - 原始的Prompt 增加 检索出来的几段相关文档

- Generation 生成
  - llm拿到增强的Prompt 完美解答

## 为啥使用向量表达？

向量意味着跟文字匹配告别了

- 关键词的文本匹配不能实现语义搜索
  - 查询文中提到的水果。文字只能匹配水果这两个字，匹配不到苹果，香蕉，荔枝等？
- 向量 Vector [0.1,0.2,....,1]
  用数字表达一个存储的信息,只要不停地去加维度，我们关于某一个信息物体的理解就更加全面
  - 食用性 0 无 1 高
  - 硬度 0 液体 1 骨头

  水果 [0.9,0.3] 食用性极高，硬度偏低
  苹果 [0.9,0.5]
  香蕉 [0.9,0.1]
  石头 [0.1，0.9]

- 语义搜索的流程
  - 向量每个维度有独特的语义（食用性，硬度）
  - 可视化 空间
  - 使用cosine的计算表达相似度，空间之间的远近
# Splitter 理解

- loader 加载的大Document @langchain/community 
    paf doc 不是一个类型
- RecursiveCharaterTextSplitter 
    Text 
- splitter 
    character 按这个切 符合语义
    ["。", "？", "!", "，"]
    优先级 。最优先 
    chunk_size的靠近 递归的尝试, ? ! 
    保持语义
    切断 overlap 牺牲一定的空间（chunk_size 10%） 重复

    先character 切 再 chunkSize 最后 Overlap

- RAG 问题
    - 流程
    - loader
    - splitter 细节 三个参数
    - splitter 面向对象体系和关系 
        父类 TextSplitter  切割的是文本， mp3, mp4 不适合
        一系列的子类  CharacterTextSplitter  按字符切割
        TokenTextSplitter 按token数量切割
        RecursiveTextSplitter 语义的完整性特别好
            MarkdownTextSplitter 为什么属于
            RecursiveTextSplitter子类
            # ## ### 递归

- CharacterTextSplitter 
    直接按Character separator 切割 
- RecursiveCharacterTextSplitter
    Recursive递归地去切割
    尽量在 语义边界 （句子、段落）处切割，而不是随意截断。
    更人性化，更努力 
    尝试其他符号时，语义就弱下来了， overlap 来弥补一下
    ```plainText
    文本输入
        ↓
    用 separators[0] = "\n" 分割
        ↓
    检查每个片段是否 ≤ chunkSize(200)?
        ↓ 是 → 完成
        ↓ 否 → 递归用 separators[1] = "。
        " 分割
        ↓
        ↓ 否 → 递归用 separators[2] = "，
        " 分割
        ↓
        ↓ 否 → 继续递归或强制按字符数截断
    ```

    ```js
    const logSplitter = new RecursiveCharacterTextSplitter({
    separators: ["\n", "。", "，"],//在切割时，会先按照\n切割，如果远远大于200个字符左右没有该字符，就会递归查询是否有。还是没有的话就找，
    chunkSize: 200,
    chunkOverlap: 20,
    })

    const logSplitter = new CharacterTextSplitter({
    separators: "\n",//区别在这里
    chunkSize: 200,
    chunkOverlap: 20,
    })
    ```
- TokenTextSplitter
    按token数量切割，这种切割方式可以确保每一个片段都是token数量
    ```js
  import { TokenTextSplitter } from"@langchain/textsplitters";
  import { Document } from"@langchain/core/documents";
  import { getEncoding } from"js-tiktoken"; 

  const logDocument = new Document({
      pageContent: `[2024-01-15 10:00:00] INFO: Application started
  [2024-01-15 10:00:05] DEBUG: Loading configuration file
  [2024-01-15 10:00:10] INFO: Database connection established
  [2024-01-15 10:00:15] WARNING: Rate limit approaching
  [2024-01-15 10:00:20] ERROR: Failed to process request
  [2024-01-15 10:00:25] INFO: Retrying operation
  [2024-01-15 10:00:30] SUCCESS: Operation completed`
  });

  const logTextSplitter = new TokenTextSplitter({
      chunkSize: 50,        // 每个块最多 50 个 Token
      chunkOverlap: 10,    // 块之间重叠 10 个 Token
      encodingName: 'cl100k_base',  // OpenAI 使用的编码方式
    });//这种切割方式可以确保每一个片段都是token数

  const splitDocuments = await logTextSplitter.splitDocuments([logDocument]);

  // console.log(splitDocuments);

  const enc = getEncoding("cl100k_base");
  splitDocuments.forEach(document => {
      console.log(document);
      console.log('charater length:',document.pageContent.length);
      console.log('token length:',enc.encode(document.pageContent).length);
  });
    ```
# jstoken
为啥要有token？
  因为 LLM 是按 token 工作的 ，所以用 token 来控制chunk大小更准确，能更好地控制成本和上下文长度。
  token 更符合 LLM 的"感觉"
  ```
  字符视角: "今天天气很好" (6个字符)
  Token视角: ["今天", "天气", "很好"] (3
  个token，更符合语言理解)
  ```
```js
import {
    getEncodingNameForModel,
    getEncoding
} from "js-tiktoken";
// AIGC 生成的文本 要计算 token 数量 按token 不断推理生成的

const modelName = "gpt-4";
const encodingName = getEncodingNameForModel(modelName);
console.log(encodingName, "/////");

const enc = getEncoding(encodingName);
// 不同语言 字符语义一样， 但长度不一样， token 按语义（算力）来计算开销
console.log('apple', enc.encode('apple'), 
enc.encode('apple').length);
console.log('pineapple', enc.encode('pineapple'), 
enc.encode('pineapple').length);
console.log('苹果', enc.encode('苹果'), 
enc.encode('苹果').length);
console.log('吃饭', enc.encode('吃饭'), 
enc.encode('吃饭').length);
console.log('一二三', enc.encode('一二三'), 
enc.encode('一二三').length);
```

