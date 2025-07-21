# 全栈开发
## 表演型项目
- 前端 react
- mockjs 前端伪接口
    /api  axios
- 后端 java/node/go

## vite-plugin-mock
    - mock
    前端在后端给出真实接口前，需要mock一下，前端自己去伪造接口
    - vite-plugin-mock 插件
    - mock 服务启动
    - /mock/test.js 根目录（src是前端代码，这个偏后端，所以不放在src里面）
        export default [
            {
                url:'/api/todos',//请求todos地址
                method:'get',//请求方式
                response:()=>{
                    return{
                        code:0,
                        data:todos
                    }
                }
            }
        ]

- 前后端联调
    - 开会立项
    - 前后端接口文档
    /api/todos
    [
        {
            id:'',
            title:'',
            completed:true|false
        }
    ]