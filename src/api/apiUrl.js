import {
  getRequrst
} from './api'

export function loginApi(params, callback) {
  return getRequrst('/api/login.json', params, callback)
}