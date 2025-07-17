import axios from 'axios';//http请求库
//http请求时所有接口地址的公共部分
const BASE_URL ='http://api.github.com/';//基础地址
//标准的http请求库
//axios method url
//promise 现代
//api模块 应用之外
export const getRepos = (username) => {
    return axios.get(`${BASE_URL}users/${username}/repos`);//专业！！！
}
export const getRepoDetail = async (username, repoName) => {
    return await axios.get(`${BASE_URL}repos/${username}/${repoName}`)
  }