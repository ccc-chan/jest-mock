import { requestOfPost, requestOfGet } from '../service/common.js'

export function postRequrst(url, params) {
  return new Promise((resolve, reject) => {
    requestOfPost(url, params)
      .then(res => resolve(res))
      .catch(error => reject(error))
  })
}

export function getRequrst(url, params) {
  return new Promise((resolve, reject) => {
    requestOfGet(url, params)
      .then(res => resolve(res))
      .catch(error => reject(error))
  })
}