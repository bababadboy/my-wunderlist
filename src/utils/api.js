import axios from 'axios'

// let base = 'http://106.14.191.82:8008'
let base = 'http://localhost:8008'


// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
    config => {
        if (localStorage.getItem('Authorization')) {
            window.console.log(localStorage.getItem('Authorization'))
            config.headers.Authorization =  localStorage.getItem('Authorization')
        }
        return config;
    },
    error => {
        // 如果请求返回401,则说明token无效了
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('Authorization')
        }
        return Promise.reject(error);
    });

//请求返回拦截，
// axios.interceptors.response.use(
//     (response) => {
//     //特殊错误处理，状态为10时为登录超时
//         window.console.log(response)
//
//     },
//      (error)=> {
//          if (error.response && error.response.status === 401) {
//              localStorage.removeItem('Authorization')
//          }
//          return Promise.reject(error);
// });

export const postRequest = (url, params) => {
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params,

        headers: {
            'Content-Type': 'application/json',
        }
    })
};


export const getRequest = (url, params) => {
    return axios({
        method: 'get',
        url: `${base}${url}`,
        params: params,
    });
};