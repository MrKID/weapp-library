
Page({
  data: {
    show: [false, false, false, false]
  },

  onShowPopup: function (e) {
    this.data.show[e.currentTarget.id] = true
    this.setData({show: this.data.show})
  },

  onHidePopup: function (e) {
    this.data.show[e.currentTarget.id] = false
    this.setData({show: this.data.show})
    if (e.currentTarget.id == 3) {
      wx.showModal({content: '关闭了 popup', showCancel: false})
    }
  }
})
