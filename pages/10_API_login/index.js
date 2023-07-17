import { zxRequestInstnaceWO } from "../../servers/request/index"

Page({
  data: {
    code: '',
    token: ''
  },
  onLoad() {
    wx.login({
      success: res => {
        const code = res.code
        this.setData({ code })
      },
    })
    // A. 微信默认方式
    // wx.request({
    //   url: 'http://123.207.32.32:3000/login',
    //   data: { code: this.data.code },
    //   method: 'POST',
    //   success: res => {
    //     console.log(res)
    //   }
    // })

    // B. 封装类方法
    const token = wx.getStorageSync('token')
    if (token) {
      console.log(token)
      this.setData({ token: token })
    } else {
      zxRequestInstnaceWO.post({
        url: 'http://123.207.32.32:3000/login',
        data: { code: this.data.code }
      }).then(res => {
        wx.setStorage({
          key: "token",
          data: res.data.token
        })
      })
    }
  }
})