import axios from 'axios'
import store from '../store/index'

// const base = 'http://106.14.191.82:8008'
const base = 'http://localhost:8008'


// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
    config => {
        if (localStorage.getItem('Authorization')) {
            config.headers.Authorization =  localStorage.getItem('Authorization')
        }
        return config;
    },
    error => {
        // 如果请求返回401,则说明token无效了
        window.console.log(error.status)
        if (error.response && error.response.status === 401) {
            store.commit('removeAuth')
        }
        return Promise.reject(error);
    });

// 请求返回拦截，错误码401则删除登录信息
axios.interceptors.response.use(
    (response) => {
        window.console.log(response)
        return response
    },
     (error)=> {
         if (error.response && error.response.status === 401) {
             store.commit('removeAuth')
             // localStorage.removeItem('Authorization')
             // localStorage.removeItem('userInfo')
         }
         return Promise.reject(error);
});

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


export const uploadFile = (url, params) => {
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params,
        headers: {
            "Content-Type": "multipart/form-data"
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

export default {
    base
}