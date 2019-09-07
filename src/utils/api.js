import axios from 'axios'
// let base = 'http://106.14.191.82:8004'
let base = 'http://localhost:8004'
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