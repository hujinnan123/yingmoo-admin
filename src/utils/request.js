import axios from 'axios'
// create an axios instance
const service = axios.create({
  withCredentials: true, // 跨域请求时发送 cookies
  timeout: 5000 // request timeout
})

export default service
