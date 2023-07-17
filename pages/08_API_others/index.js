// pages/08_API_others/index.js
Page({
  data: {

  },
  // A. 弹窗功能
  onShowToast() {
    wx.showToast({
      title: 'Successful !',
    })
  },
  onShowModal() {
    wx.showModal({
      title: 'We wana keep the cookie!',
      content: 'Using the cookie to ...',
      complete: (res) => {
        if (res.cancel) {
          console.log('rejected!')
        }
        if (res.confirm) {
          console.log('done!')
        }
      }
    })
  },
  onShowLoading() {
    wx.showLoading({
      title: 'Loading...',
      mask: true
    })
    setTimeout(() => {
      wx.hideLoading()
    }, 2000);
  },
  onShowActionSheet() {
    wx.showActionSheet({
      itemList: ['1', '2', '3', '4'],
    })
  },
  // B. 分享功能
  onShareAppMessage() {
    wx.onShareAppMessage(() => {
      return {
        title: 'share title',
        path: '/pages/me/me',
        imageUrl
      }
    })
  },

  // C. 获取信息 
  onGetSystemInfo() {
    // 设备信息
    wx.getSystemInfo({
      success: res => {
        console.log(res)
      },
      fail: err => {
        console.log(err)
      }
    })
    wx.getLocation({
      success: res => {
        console.log(res)
      },
      fail: err => {
        console.log(err)
      }
    })
  },

  // D. Storage
  // D_1. Sync
  setStorageSync() {
    wx.setStorageSync('sync', 'value')
  },
  getStorageSync() {
    const res = wx.getStorageSync('sync')
    console.log(res)
  },
  // D_2. Async  
  setStorageAsync() {
    wx.setStorage({
      key: 'async',
      data: 'value',
      encrypt: true
    })
  },
  getStorageAsync() {
    wx.getStorage({
      key: 'async',
      encrypt: true,
      success: res => { console.log(res) }
    })
  },
  onLoad(options) {
  },
  onReady() {
  },
  onShow() {
  },
  onHide() {
  },
  onUnload() {
  },
  onPullDownRefresh() {
  },
  onReachBottom() {
  },
  onShareAppMessage() {
  }
})