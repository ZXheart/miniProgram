// pages/04_wxs/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    books: [{
        id: 555,
        name: 'emerald',
        price: 99
      },
      {
        id: 666,
        name: 'peral',
        price: 88
      },
      {
        id: 777,
        name: 'ruby',
        price: 89
      }
    ],
    currentItme: 0
  },
  onItemTap(event) {
    var currentIndex = event.currentTarget.dataset.index
    this.setData({
      currentItme: currentIndex
    })
  },
  onMarkTap(event) {
    console.log(event.target.dataset.name, event.mark.name);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {}
})