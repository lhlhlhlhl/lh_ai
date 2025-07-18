import axios from 'axios';//http请求库
//http请求时所有接口地址的公共部分
const BASE_URL ='http://api.github.com/';//基础地址
//标准的http请求库
//axios method url
//Axios 是基于 Promise 的 HTTP 客户端，支持浏览器和 Node.js 环境，提供请求/响应拦截、自动 JSON 数据转换、CSRF 防御等特性，广泛用于前端网络请求场景。
//promise 现代
//api模块 应用之外
export const getRepos = (username) => {
    return axios.get(`${BASE_URL}users/${username}/repos`);//专业！！！
}
export const getRepoDetail = async (username, repoName) => {
    return await axios.get(`${BASE_URL}repos/${username}/${repoName}`)
  }