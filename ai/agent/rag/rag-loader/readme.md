# Rag loader

- loader
  载入任何类型文件
- splitter
  rawDocument Document[pageContent chunks]

## loader

- @langchain/community 文件类型很多 社区
- 网页loader
  - cheerio
  ```js
  import "cheerio"; // 后端，使用css选择器 像操作前端一样查找DOM节点
  import { CheerioWebBaseLoader } from "@langchain/community/document_loaders/web/cheerio";
  const cheerioLoader = new CheerioWebBaseLoader(
    "https://juejin.cn/post/7233327509919547452?searchId=20260302193603120AE3328025B138C1FB",
    {
      selector: ".main-area p",
    },
  );
  const documents = await cheerioLoader.load();
  ```
  ## splitter
  - 。,? 天然的语意分割器
  - chunkSize 大小
