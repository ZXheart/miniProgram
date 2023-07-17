import { BASE_URL } from './config'
// A. repackaging into Function
export function myRequest(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      ...options,
      success: res => resolve(res.data),
      fail: err => reject(err)
    })
  })
}
// B. repackaging into Class
class zxRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }
  request(options) {
    const { url } = options
    return new Promise((resolve, reject) => {
      wx.request({
        ...options,
        url: this.url ? this.baseUrl + url : url,
        success: res => resolve(res),
        fail: err => reject(err)
      })
    })
  }
  get(options) {
    return this.request({
      ...options, method: 'GET'
    })
  }
  post(options) {
    return this.request({
      ...options, method: 'POST'
    })
  }
}
// with defult parameter of BASE_URL
export const zxRequestInstnace = new zxRequest(BASE_URL)

// without defult parameter
export const zxRequestInstnaceWO = new zxRequest()

