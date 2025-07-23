# jwt 登入鉴权
- isLogin ,user 全局状态 zustand
- mock 登入模拟
    - apifox api请求模拟
    不用写页面，就可以发送请求  相当于Linux的curl命令

- 会话授权（有过期时间）
    - 服务器知道我们是谁？
    - http是无状态的
        - 请求头 cookie
        - server 种下一个 cookie 唯一的section id值 sid => user
        - 每次请求中 从cookie中读取section id值
        - server 知道这个id值 对应的是哪个用户，服务器端就知道是我们了
    - 登入的本质是服务器端给你打了个标记
    - 登入和用户鉴权方案JWT  JSON Web Token
        - {id:112,username:'a',level:'4'} user JSON格式的数据
        - 通过一种算法 生成一个hash 串
        - token 服务器端令牌
        - 每次请求带上token
        - decode 解码，解出{id:112,username:'a',level:'4'}
    
    - jsonwebtoken
        jwt 鉴权的库
        sign 颁发一个token user,secret
        decode secret 解码 验证token user
        - pnpm i jwt
        - import jwt from 'jsonwebtoken'
        - jwt.sign
        - HTTP 请求头 Authorization 带上token
        - Cookie 每次自动带上
        - token需要手动设置

- 加盐
    secret
    传递token的时候 前面会加上Bearer${token} Bearer表示持有者
    通过http header Authorization 带上token

- 前端的用户权限状态 流程
    - zustand
        登入、user useUserStore
    - 登入页面
        受控/非受控组件
    - 路由守卫
    - api/ 