import service from './service'

// 耦合度低 定义传参方式  
export function requestOfPost(url, params) {
  return service.post(url, params)
}

export function requestOfGet(url) {
  return service.get(url)
}