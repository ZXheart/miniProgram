// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    pages: [{
        name: '01_ReachBotton',
        url: '/pages/01_reachBottom/demo'
      },
      {
        name: '02_counter',
        url: '/pages/02_counter/test'
      },
      {
        name: '03_components',
        url: '/pages/03_components/index'
      },
      {
        name: '04_wxs',
        url: '/pages/04_wxs/index'
      },
      {
        name: '05_custom_components',
        url: '/pages/05_custom_components/index'
      },
      {
        name: '06_slot',
        url: '/pages/06_slot/index'
      },
      {
        name: '07_API',
        url: '/pages/07_API/index'
      },
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
    wx.request({
      // url: 'http://123.207.32.32:1888/api/detail/infos?houseId=44173741'
      // success: res => console.log('index > indexport.js: ', res)
    })
  }
})