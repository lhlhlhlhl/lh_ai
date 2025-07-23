import axios from 'axios'
axios.defaults.baseURL='http://localhost:5173/api'

//拦截请求  interceptors 拦截器
axios.interceptors.request.use((config)=>{
    // const token = localStorage.getItem('token')
    // if(token){
    //     config.headers.Authorization = token
    // }
    // console.log('/////')
    const token = localStorage.getItem('token')||""
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    // config.headers.Authorization = token
    return config
})
//拦截响应,请求结束
axios.interceptors.response.use((res)=>{
    console.log('||||')
    return res
})



export default axios