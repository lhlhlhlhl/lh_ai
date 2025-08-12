# React Transformer TextToSpeech

- transformer
    transformer.js  JS AI 机器学习库
    来自于huggingface社区 全球最大开源大模型社区
    将模型下载到浏览器端，JS 开发者的智能战场未来
- 项目的亮点
    - 使用transformer.js 的端模型
    - 使用tailwindcss 原子css 几乎不用写css了
        类名文档语义很好，特别适合AI生成
        移动端适配 兼容所有设备 高效解决适配 w-full + max-w-md 底层是mediaQuery
    - webworker nlp 任务
        1.延迟加载大模型
        2.先实现组件再实例化，有利于性能
        3.卸载时移除事件
    - 封装组件
    - 单例模式：多次执行tts ai 业务，但是只会实例化一次，减小开销
- 项目的难点
    - 单例模式封装 MyTextToSpeechPipeline
    - getInstance 只实例化一次
    - 懒执行 延迟加载模型
    - Promise.all + nlp 流程的理解(tokenizer,model,vocoder)