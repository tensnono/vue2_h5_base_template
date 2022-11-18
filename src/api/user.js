import request from '@/utils/request'

//JSON DATA
export function getUserInfo(data) {
  return request({
    url: 'user/userinfo',
    method: 'post',
    data: data,
    hideloading: true
  })
}

//Query string
export function getUserInfo0(params) {
  return request({
    url: 'user/userinf0',
    method: 'post',
    params,
    hideloading: true,
  })
}

//Form-data
export function getUserInfo1(data) {
  return request({
    url: 'user/userinfo1',
    method: 'post',
    data: data,
    hideloading: true,
    headers: {
      'Content-Type': "multipart/form-data",
    }
  })
}

//Form-data
export function getUserInfo2(data) {
  return request({
    url: 'user/userinfo2',
    method: 'post',
    data,
    hideloading: true,
  })
}

//
export function getUserName(params) {
  return request({
    url: 'user/name',
    method: 'get',
    params,
    hideloading: true,
    responseType: 'blob' // 更改responseType类型为 blob
  })

  // 转换pdf
  // const blob = new Blob([res.data], { type: 'application/pdf' });
  // const url = window.URL.createObjectURL(blob);
  // window.open(url)
}
