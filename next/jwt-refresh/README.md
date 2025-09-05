# next.js全栈项目

- users & posts 数据库表
- jwt的双token  鉴权
- 虚拟列表  
    AI爬虫 爬取掘金的100条数据
- 大文件上传
- ai 工程化
    流式输出
    function Tool
    mcp
- ai 搜索

## 双token 安全+无感刷新
单token  localStorage 长期，第三方拦截 不安全
双token
  - accessToken 校验身份 重要 时间有效期变短 以h为单位 存在cookie中
      过期怎么办？

  - refreshToken 刷新 7天 时间长
      没有过期，refreshToken 发到服务器  /api/auth/refresh
      返回新的accessToken 无感刷新
      过期后，重新登录获取新的token


## 开发流程
- .env
  mysql url
  create database demo4 建立数据库
- prisma 初始化
    orm 工具
    object relation mapping
    User(表)=》User类
    一行    =》 new User()实例
    将底层数据库操作 映射成 高级的面向对象操作
- Prisma Schema 是定义数据库模型、关系和数据类型的配置文件，
用于生成类型安全的数据库客户端。
    数据库的设计图
    navicat 好的地方，schema+git留下数据库设计和修改的版本历史
    文档型的，可以追踪，留底

- Model 表的映射模型
    @@map("users")  指定模型对应的表名
    posts Post[] 一对多的关系
    createdAt updatedAt  primsa自动维护
    @id 主键 @unique 唯一索引
    Model User{
      cloumns name type @default
      索引
      relation
    }

    - migration 迁移
        留下记录

- restful API
- lib/复用的js 模块
- regexp 正则表达式
    前端、后端都要会正则
    /^.+?[]{}$/ test
    ^开始  $结束
    . 都匹配 只匹配一个字符
    ? 0次或一次
    [] 范围
    {} 长度
- bcryptjs 加密js模块 单向加密算法（不能被解密）
    register 注册时 加密一次
    login 登录时 再加密一次
    比较的是加密后的字符串是否一样
- 状态码
    - 200 OK  成功
    - 201 Created 成功创建
    - 400 Bad Request 客户端错误
    - 401 Unauthorized 未授权
    - 403 Forbidden 禁止访问
    - 404 Not Found 未找到
    - 409 Conflict 冲突
    - 500 Internal Server Error 服务器错误

- middleware 的概念
    是中间件，用于请求和响应之间执行预处理逻辑，如日志，认证，数据解析等
    中间件 配置一个白名单
    /dashboard 