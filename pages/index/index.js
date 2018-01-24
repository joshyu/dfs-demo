//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Welcome to Coupon Application Form ',
    userInfo: {},
    get leadList() {
      return app.leadList
    },
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad() {
    if (app.userInfo) {
      this.setData({
        userInfo: app.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    }
  },
  
  getUserInfo (e) {
    app.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  formSubmit (e) {
    const params = e.detail.value;
    debugger;
  },

  formReset(e) {

  }
})