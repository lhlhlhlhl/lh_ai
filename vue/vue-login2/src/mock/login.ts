export default [
  {
    url:'/api/login',
    method:'post',
    response:({body}:{body:{username:string,password:string}})=>{
      const {username,password}= body
      if(username === 'admin' && password === '123456'){
        return {
          code:200,
          msg:'登录成功',
          data:{
            token:'admin-token',
            username,
          }
        }
      }else{
        return {
          code:400,
          msg:'登录失败',
        }
      }
    }
  }
]