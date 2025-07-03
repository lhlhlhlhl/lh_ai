# 智能前端之单词学习
- 产品和商业模式
  - 学单词
  - 拍照记单词
    - 图片交给多模态模型 返回一个单词
    - deepseek aigc 例句
    - 调用tts拿到发音
- focus
  - 拍照背单词，用单词
- 解决一些特定的效率性，创新型APP

- npm init vite
  vite是工程化的脚手架，构建工具
- npm i慢了点
react项目依赖
怎样更快一点？
- 换源
  - 淘宝镜像
  - 阿里云镜像
    npm config get registry
    npm config set registry https://registry.npmmirror.com
- pnpm 代替npm
  不同的项目当中 重复去安装了react
  react等包放到一个地方，如果之前安装过，能不能把它链接过来，只需安装一次
## react语法
- 单向数据流
  数据状态流动
  - 父组件负责提供数据和api接口请求
  - 拆成多个子组件
  - 数据会从父组件流向子组件
  - 子组件负责消费数据
- props
 <PictureCard
    uploadImage={uploadImage}
 />
 传来的uploadImage会像函数参数一样可以解构

## 项目中一定要安排的技能点
- pnpm
- rect思想
  - 数据状态 useState
  - 数据驱动
  - 响应式 数据状态发生变化，视图会自动更新
    - 不用频繁操作DOM,只需要关注业务
- 业务
  - 图片上传
    - 图片预览
- 组件化设计（组件之间的数据通讯）
  - App
    - 提供数据
    - 图片上传大模型，父组件负责对外提供数据
    - 先要给父组件
  - PictureCard
    单向数据流
    - 子组件只负责消费数据
    - 父组件负责提供数据，数据的请求
- 性能优化
    - linear-gradient 代替图片做背景，少一个请求，性能更好
- 用户体验
   - 上传图片的功能，预览功能
   - 无障碍访问
    label htmlFor + input#id
- es6的新特性
   - 可选链操作符
- html5的功能
   - file 文件对象，可以直接操作文件
- 智能
   - 多模态模型
     ？ 月之暗面 base64
     prompt ?
    - prompt 设计原则
      - 给它一个明确的身份 LLM交流 当人
      - 清晰且具体的任务
      - 限制，指定结果
        返回的结构 JSON
        有利于接下来的业务执行
        拿着大模型的回答接着干活
        JSON是最好的接口格式
      - 分步做
      "{
  "image_discription": "The image shows a skull made of pink particles above a flower-like structure with a similar color scheme.",
  "representative_word": "skull",
  "example_sentence": "The skull in the image is made of tiny pink dots.",
  "explaination": "Look at the image. The top part looks like a skull.\nIt is made of many small pink dots.\nThis skull is not real, it's an art piece.\nIt's above a flower-like shape.\nDo you know any art that uses dots to create images?",
  "explaination_replys": [
    "Yes, I know pointillism, a style that uses small dots to create images.",
    "I've seen similar art in digital art pieces."
  ]
}
"
## 前端为什么要搞AI
- 时代的需求和趋势
- vibe coding 提升了开发效率 trae cursor
- LLM的发展，产品需要更多更好的智能体验
  用户体验是前端的职责，智能前端工程师的新角色中
