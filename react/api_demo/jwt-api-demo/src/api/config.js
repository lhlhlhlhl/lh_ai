//前端的请求框架，原生xhr太复杂，fetch太麻烦
//axios 标准的http请求库，vue/react 都用他
import axios from 'axios'
//mock 地址
// axios.defaults.baseURL = 'http://localhost:5173'
//url + json
//线上有了
axios.defaults.baseURL='https://api.github.com/users/shunwuyu'
export default axios;
