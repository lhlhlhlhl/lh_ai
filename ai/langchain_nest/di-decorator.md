# 依赖注入 (DI) vs 装饰器模式 - 详细对比

## 一、依赖注入 (DI) - 解决的问题

### 没有 DI 的问题

```typescript
// ❌ 没有 DI：手动管理依赖
class UserService {
  private db: Database;
  
  constructor() {
    this.db = new Database();  // 自己 new，还要处理配置
  }
  
  async getUser(id: string) {
    return this.db.query(id);
  }
}

// 问题：
// 1. UserService 和 Database 强耦合
// 2. 如果要换数据库？改代码
// 3. 单元测试困难：无法替换为 mock
// 4. 配置分散
```

### 有 DI 的写法

```typescript
// ✅ 有 DI：框架自动注入
@Injectable()
export class UserService {
  constructor(private db: Database) {}  // 框架自动传入
  
  async getUser(id: string) {
    return this.db.query(id);
  }
}

// module 中声明依赖
@Module({
  providers: [Database, UserService],  // 框架自动实例化并注入
})
export class AppModule {}
```

**对比表格：**

| 对比项 | 没有 DI | 有 DI |
|--------|---------|-------|
| 依赖创建 | 类自己 new | 框架创建 |
| 耦合度 | 高 | 低 |
| 测试 | 困难 | 容易 mock |
| 配置 | 分散各处 | 集中在 Module |

---

## 二、装饰器模式 - 解决的问题

### 没有装饰器的写法

```typescript
// ❌ 没有装饰器：冗长、不直观
class ChatController {
  private service: ChatService;
  
  constructor(service: ChatService) {
    this.service = service;
  }
  
  // 手动定义路由
  handleRequest(req: Request, res: Response) {
    const body = req.body;
    const message = body.message;
    
    if (req.method === 'POST' && req.path === '/chat') {
      this.service.chat(message).then(result => {
        res.json(result);
      });
    }
  }
}
```

### 有装饰器的写法

```typescript
// ✅ 有装饰器：简洁、直观
@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}
  
  @Post()
  async chat(@Body() dto: ChatDto) {
    return this.chatService.chat(dto.message);
  }
}
```

**装饰器对应表：**

| 装饰器 | 作用 | 相当于没有装饰器的代码 |
|--------|------|----------------------|
| `@Controller('chat')` | 定义路由前缀 | `if (path.startsWith('/chat'))` |
| `@Post()` | 定义 POST 方法 | `if (method === 'POST')` |
| `@Get(':id')` | 定义 GET + 路径参数 | `if (method === 'GET' && /^\/\d+$/.test(path))` |
| `@Body()` | 提取请求体 | `req.body` |
| `@Param('id')` | 提取路径参数 | `req.params.id` |
| `@Query('name')` | 提取查询参数 | `req.query.name` |
| `@Injectable()` | 标记可注入的服务 | 手写依赖注入逻辑 |

---

## 三、两者结合的真实项目示例

```typescript
// chat.module.ts - Module 配置依赖关系
@Module({
  controllers: [ChatController],
  providers: [ChatService, LangChainService, DatabaseService]
})
export class ChatModule {}

// chat.controller.ts - 用装饰器定义路由
@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}
  
  @Post()
  async chat(@Body() dto: ChatDto) {
    return this.chatService.chat(dto.message);
  }
  
  @Get('history/:sessionId')
  async getHistory(@Param('sessionId') sessionId: string) {
    return this.chatService.getHistory(sessionId);
  }
}

// chat.service.ts - 用 @Injectable() 声明可注入
@Injectable()
export class ChatService {
  // 依赖自动注入，不需要手动 new
  constructor(
    private readonly llmService: LangChainService,
    private readonly dbService: DatabaseService
  ) {}
  
  async chat(message: string) {
    const result = await this.llmService.invoke(message);
    await this.dbService.saveMessage(message, result);
    return result;
  }
}
```

---

## 面试回答模板

> "**依赖注入** 解决的是'谁创建依赖'的问题。传统写法需要在类内部手动 new 依赖，DI 模式由框架统一创建并注入，这样类之间解耦，测试时也方便替换 mock 对象。
>
> **装饰器模式** 解决的是'代码可读性'问题。比如 `@Get(':id')` 这一个装饰器，自动帮我们处理了路由匹配、参数提取这些重复工作，比手写 if-else 清晰很多。"
