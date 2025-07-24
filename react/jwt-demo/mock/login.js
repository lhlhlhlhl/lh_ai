//模拟后端，返回前端需要的本来由后端提供的token,用户信息

// login 模块的 mock,模拟发送请求，生成token，进行鉴权判断
import jwt from 'jsonwebtoken'
//安全性 编码的时候用于加密
// 解码的时候用于解密
//加盐
const secret = 'ababab';// 加密的字符串,这个token只有我们的服务器可以打开
export default [
    {
        url: '/api/login',
        method: 'post',
        timeout:2000,//请求耗时
        response: (req,res) => {
            const {username,password} = req.body
            if(username !== 'a'||password!=='1'){
                return {
                    code:1,
                    message:'用户名或密码出错了'
                }
            }
            // json用户数据对象
            const token = jwt.sign({
              user:{
                id:'001',
                username:'a'
              }  
            },secret,{
                expiresIn:86400
            })
            console.log(token,'----')

            //生成token 颁发令牌
            return {
                token,
                data:{
                    id:"001",
                    username:"a"
                }
            }
           
        }
    },
    {
        url:'/api/user',
        method:'get',
        response:(req,res)=>{
            //用户端 token headers
            const token = req.headers["authorization"].split(' ')[1];
            console.log(token)
            try{
                const decode = jwt.decode(token,secret)
                console.log(decode)
                return {
                    code:0,
                    data:decode.user
                }
            }catch(err){
                return {
                    code:1,
                    message:'Invalid token'
                }
            }
            return {
                token
            }
        }
    }
]