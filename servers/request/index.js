// A. post-packaging with Function
function myRequest(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      ...options,
      success: res => resolve(res.data),
      fail: err => reject(err)
    })
  })
}
// B. post-packaging with Class




export default myRequest