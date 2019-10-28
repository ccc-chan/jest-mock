import axios from 'axios'

// 获取token
function getTokenByLocal() {
  let token = sessionStorage.getItem('token') || '';
  return token;
}

// 创建实例
const service = axios.create({
  baseURL: 'http://127.0.0.1:8080',
  timeout: 5000
})

// console.dir(service);

// request拦截器   // formdata
service.interceptors.request.use(
  service.port = 8080,
  config => {
    // 判断用户是否登录
    if (getTokenByLocal) {
      config.headers['token'] = getTokenByLocal();
      // config.header['Content Type'] = 'application/json;charset=utf-8';
    }
    return config;
  },
  error => {
    Promise.reject(error)
  }
)

// response拦截器
service.interceptors.response.use(
  response => {
    let res = response.data;
    if (res.code == '401') {
      // not login
      // do something
    } else if (res.code == '402') {
      // do something
    } else {
      // do something
    }
    return Promise.resolve(response.data);
  },
  error => {
    Promise.reject(error)
  }
)

export default service