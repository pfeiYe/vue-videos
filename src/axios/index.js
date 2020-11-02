import axios from 'axios'

let request = axios.create({
  baseURL: '/datapanel',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  },
  timeout: 30000
})

// http request 拦截器
request.interceptors.request.use(config => {
  const UC_TOKEN = sessionStorage.getItem('uc-token')
  if (UC_TOKEN && !config.url.includes('login')) {
    config.headers.common['uc-token'] = UC_TOKEN
  }
  return config
}, error => {
  return Promise.reject(error)
})

// http response 拦截器
request.interceptors.response.use(response => {
  return response
}, error => {
  console.log(error)
  return Promise.reject(error)
})

// eslint-disable-next-line no-undef
export default request
