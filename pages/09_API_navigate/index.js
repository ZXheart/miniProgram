// pages/09_API_navigate/index.js
Page({
  data: { firstName: 'Julien', lastName: 'Godfrey' },
  navTo() {
    const firstName = this.data.firstName
    const lastName = this.data.lastName
    wx.navigateTo({
      url: `/nav/01_navTo/index?first=${firstName}&last=${lastName}`,
      events: {
        acceptDataFromOpenedPage: data => {
          const { firstName, lastName } = data
          this.setData({ firstName, lastName })
        }
      },
      routeType: 'routeType',
      success: (result) => { },
      fail: (res) => { },
      complete: (res) => { },
    })
  }
})