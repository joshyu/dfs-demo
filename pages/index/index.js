//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hasLeadList: false,
  },

  onLoad() {
    const leadList = app.getLeadList();
    if (leadList) {
      this.setData({
        leadList: leadList,
        hasLeadList: true
      })
    }
  },

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    
  },

  formReset() {
    console.log('form发生了reset事件')
  }
})