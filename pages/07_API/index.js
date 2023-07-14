// pages/07_API/index.js
import myRequest from "../../servers/request/index"
import { fetchCityGroup, fetchHouseList } from "../../servers/index"
Page({
  data: {
    cityGroup: {},
    houseList: [],
    currentPage: 1
  },

  getCityGroup() {
    fetchCityGroup().then(res => {
      this.setData({ cityGroup: res })
    })
  },
  getHouseList(currentPage) {
    fetchHouseList(currentPage).then(res => {
      const finalHouseList = [...this.data.houseList, ...res]
      this.setData({ houseList: finalHouseList })
    })
    this.data.currentPage++
  },
  onLoad(options) {
    // A. fetchCityGroup 基本使用
    // wx.request({
    //     url: 'http://123.207.32.32:1888/api/city/all',
    //     success: res => {
    //       const cityGroup = res.data.data.cityGroup.title
    //       this.setData({
    //         cityGroup
    //       })
    //     },
    //     fail: err => console.log(err),
    //   }),

    // B. fetchCityGroup 使用封装函数
    // myRequest({
    //   url: 'http://123.207.32.32:1888/api/city/all',
    // }).then(res => {
    //   const cityGroup = res.data.cityGroup.title
    //   this.setData({
    //     cityGroup
    //   })
    // })

    // C. fetchCityGroup 再封装
    this.getCityGroup()


    // A. fetchHouseList 基本使用
    // wx.request({
    //   url: 'http://123.207.32.32:1888/api/home/houselist',
    //   data: {
    //     page: 1
    //   },
    //   success: res => {
    //     const houseList = res.data.data
    //     const newHouseList = []
    //     houseList.forEach((item, index) => {
    //       newHouseList.push(item.data)
    //       newHouseList[index]['discoveryContentType'] = item.discoveryContentType
    //     })
    //     this.setData({
    //       houseList: newHouseList
    //     })
    //   },
    //   fail: err => console.log(err)
    // })

    // B. fetchHouseList 再封装
    this.getHouseList(this.data.currentPage)
  },
  onReady() { },
  onShow() { },
  onHide() { },
  onUnload() { },
  onPullDownRefresh() { },
  onReachBottom() {
    this.getHouseList(this.data.currentPage)
  },
  onShareAppMessage() { }
})