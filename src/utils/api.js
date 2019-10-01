import axios from 'axios'
let base = 'http://106.14.191.82:8008'
// let base = 'http://localhost:8008'
export const postRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export const getRequest = (url, params) => {
    return axios({
      method: 'get',
      url: `${base}${url}`,
      data: params
    })
  }