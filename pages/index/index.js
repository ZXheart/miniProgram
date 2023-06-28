// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    pages: [
      {
        name: '01_ReachBotton',
        url: '/pages/reachBottom/demo'
      },
      {
        name: '02_counter',
        url: '/pages/counter/test'
      }
    ],
    tools: []
  },
  btnOnClick(event) {
    const path = event.target.dataset.current.url
    wx.navigateTo({
      url: path
    })
  },
  onLoad() {
    this.setData({
      tools: app.globalData.tools
    })
  }
})
