// // console.log('WebLLM 项目已启动');
// // js 主动的去拉取http 接口
// // web 1.0 时代 html/css/js  服务器端java 返回的 js 只做简单的交互
// // web 2.0 时代 js 主动的请求后端服务器  动态页面 
// fetch('https://api.github.com/users/shunwuyu/repos')
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//     document.querySelector('#reply').innerHTML += data.map(repo =>`
//     <ul>
//       <li>${repo.name}</li>
//     </ul> 
//     `).join('')
//   })
//当LLM API 服务
//chat 方式 AIGC 生成/完成 返回的内容
//openai 制定的
//请求行
//命名 endpoint 端点,终点 也可以命名为deepseek-endpoint
//webllm web的底层是 http协议
//llm api 服务
//api.deepseek.comm 二级域名 让LLM服务以api的方式提供
//https 加密的http 更安全
// chat 聊天的方式交流 messages
const endpoint="https://api.deepseek.com/chat/completions"
// 请求头
const headers={
    //内容类型
    'Content-Type':'application/json',
    //授权
    Authorization:'Bearer sk-9ce093d4a0cd42378a152384ba439fb8'
}
//请求体
const payload={
    model:'deepseek-chat',
    messages:[
        //chat 三种方式
        //1. system 系统角色 只会出现一次 用来设置系统的角色
        //2. user 用户角色
        //3. assistant 助手角色
        {role:'system',content:'你是一个有用的助手'},
        {role:'user',content:'你好deepseek'}
    ]
}

fetch(endpoint,{
    method:'POST',//请求方法post方式
    headers:headers,//指定请求头
    body:JSON.stringify(payload)//HTTP请求传输只能是字符串 二进制数据 所以需要将json对象转换为字符串
    //请求+LLM 生成需要花时间 所以需要.then 异步操作
    //http 是基于请求响应的简单协议
    //返回的是文本或二进制流
}).then(res=>res.json())
//解析返回的json数据也需要花费时间
.then(data=>{
    console.log(data);
    document.querySelector('#reply').innerHTML = data.choices[0].message.content
    //data.choices[0]返回的数据结构较深，为一个json对象，我们需要的便是choices[0]中的message.content，也就是返回的文本内容。
})

