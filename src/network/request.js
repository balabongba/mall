// 对axios进行封装
import axios from 'axios'

export function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 5000
  })

  // 2.axios拦截器
  instance.interceptors.request.use(config => {
      return config
    }, err => {
      console.log(err, 'err')
    }
  )
  // 拦截响应
  instance.interceptors.response.use(res => {
    return res.data
    }, err => {
      console.log(err)
    }
  )

  // 3.发送网络请求
  return instance(config)
}
