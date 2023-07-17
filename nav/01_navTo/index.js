Page({
  data: { firstName: 'default', lastName: 'default' },
  backTo() {
    wx.navigateBack({
      delta: 1 // defalt: n; 返回上 n 级
    })
  },
  onLoad(options) {
    let first, last
    if (Object.keys(options).length) {
      const { first: firstName, last: lastName } = options
      this.setData({ firstName, lastName })
    }
  },
  onUnload() {
    // wayA. 向上级传递数据
    // const pages = getCurrentPages()
    // const prePage = pages[pages.length - 2]
    // prePage.setData({ firstName: this.data.firstName + '.' })
    // prePage.setData({ lastName: this.data.lastName + '.' })

    // wayB. 向上级传递数据
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.emit('acceptDataFromOpenedPage', { firstName: 'juliana', lastName: 'Emma' })
  }
})