import axios from 'axios'
import store from '@/store'
import { Toast } from 'vant'
import settings from '@/settings'

// axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8' //若强制规定无需设置，axios适配不同数据类型
axios.defaults.headers['versionName'] = '0.0.3'

// create an axios instance
const service = axios.create({
  baseURL: '', //`baseURL` 将自动加在'url' 前面，除非 'url' 是一个绝对的
  
  timeout: settings.timeout, // 如果请求时间超过 `timeout` 的值，则请求会被中断
  
  // withCredentials: true, // send cookies when cross-domain requests//跨域是否cookie
  
  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 它只能用于 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 数组中最后一个函数必须返回一个字符串， 一个Buffer实例，ArrayBuffer，FormData，或 Stream
  // transformRequest: [function (data, headers) { 
  //   return data;
  // }],


  // `paramsSerializer`是可选方法，主要用于序列化`params`
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  // paramsSerializer: function (params) {
  //   return Qs.stringify(params, {arrayFormat: 'brackets'})
  // },
})

// request拦截器 request interceptor
service.interceptors.request.use(
  config => {
    // 不传递默认开启loading
    if (!config.hideloading) {
      Toast.loading({ // loading
        forbidClick: true
      })
    }
    if (store.getters.token) {
      config.headers['X-Token'] = '123123123'
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    // Toast.clear()
    const res = response.data
    if (res.status && res.status !== 200) {
      // 登录超时,重新登录
      if (res.status === 401) {
        store.dispatch('FedLogOut').then(() => {
          location.reload()
        })
      }
      return Promise.reject(res || 'error')
    } else {
      return Promise.resolve(res)
    }
  },
  error => {
    // Toast.clear()
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service


