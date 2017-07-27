//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    name: 'IT人Tony',
    note: 'Java Engineer & PM',
    imghidden: 1,
    txthidden: 0
  },
  //事件处理函数
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '18560237656', //此号码并非真实电话号码，仅用于测试
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },

  openLocation: function (e) {
    var value = e.detail.value
    wx.openLocation({
      longitude: 117.015050,
      latitude: 36.675360,
      name: '金冠商务中心',
      address: '山东省济南市天桥区铜元局前街1号'
    })
  },

  showImg: function () {
    this.setData({imghidden: 0});
    this.setData({txthidden: 1});
  }

})
