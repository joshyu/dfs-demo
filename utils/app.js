/**
 *  App service class
 *  most business will be put here
 *
 **/


class App {
  constructor() {
    this.leadList = wx.getStorageSync('leadList') || [];
    this.userInfo = {};
  }

  init(context) {
    const that = this;
    return new Promise((resolve, reject) => {
      // 登录
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
        }
      })

      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
              success: res => {
                // 可以将 res 发送给后台解码出 unionId
                that.userInfo = res.userInfo;
                resolve(true);
              }
            })
          }
        }
      })
    })

  }

  appendItem(item, sync = true) {
    this.leadList.push(item);
    if (sync) {
      wx.setStorageSync('leadList', this.leadList);
    }
  }
}


export const app = new App();