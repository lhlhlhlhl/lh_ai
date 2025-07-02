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
- 组件化设计
  - PictureCard
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
