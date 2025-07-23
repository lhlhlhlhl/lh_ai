import axios from './config'

export const getUser = async () => {
    const res = await axios.get('/user')
    return res.data
}

export const doLogin = (data) => {
    return axios.post('/login',data)
}

// export const getUserArticles =  () => {
//     return axios.get('/user')
// }