/**
 *  App service class
 *  most business will be put here
 *
 **/


class App {
  constructor() {
    this.leadList = wx.getStorageSync('leadList') || [];
    /*this.appendItem({
      username: 'josh',
      phonenumber: '15542316917',
      email: 'p.yu@accenture.com',
      birthdate: '1979/07/07',
      timestamp: '3131243124312'
    }, false);

    this.appendItem({
      username: 'andy',
      phonenumber: '15542316918',
      email: 'andy.lpqin@accenture.com',
      birthdate: '1979/01/07',
      timestamp: '31312431ss24312'
    }, false);*/

    this.userInfo = null;
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
    item.timestamp = Date.now();
    this.leadList.push(item);

    if (sync) {
      wx.setStorageSync('leadList', this.leadList);
    }
  }
}


export const app = new App();