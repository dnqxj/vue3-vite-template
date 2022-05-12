import axios from 'axios'

const timeout = 60000
const request = axios.create({
  baseURL: '/api',
  timeout: timeout
})
// 请求拦截器
request.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    let data = response.data
    return data
  },
  (err) => {
    return Promise.reject(err)
  }
)
export default request
