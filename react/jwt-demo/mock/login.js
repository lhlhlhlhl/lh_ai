// login 模块的 mock

export default [
    {
        url: '/api/login',
        method: 'post',
        timeout:2000,//请求耗时
        response: (req,res) => {
            const {username,password} = req.body
            return {
                username,
                password
            }
            // if(username === 'admin' && password === '123456'){
            //     return {
            //         code: 0,
            //         message: 'success',
            //         data: {
            //             token: '123456',
            //         }
            //     }
            // }
            // return {
            //     code: 1,
            //     message: 'username or password error',
            // }
        }
    }
]