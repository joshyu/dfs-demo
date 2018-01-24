/**
 *Index.js
 *
 **/

import {
  showToast
} from '../../utils/util';
const app = getApp()

Page({
  data: {
    motto: 'Welcome to Coupon Application Form ',
    userInfo: {},
    formErrors: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  validation: {
    rules: {
      username: {
        required: true,
      },

      phonenumber: {
        required: true,
        tel: true,
        uniquePhone: true
      },

      email: {
        required: true,
        email: true,
        uniqueEmail: true
      },
      birthdate: {
        required: true,
        date: true
      }
    },

    messages: {}
  },

  onLoad() {
    if (app.userInfo) {
      this.setData({
        userInfo: app.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    }
  },

  getUserInfo(e) {
    app.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },

  formSubmit(e) {
    const formModel = e.detail.value;
    app.validate(e, this.validation.rules, this.validation.messages)
      .then(() => {
        app.appendItem(formModel);
        showToast('submit OK!');

        wx.navigateTo({
          url: '../coupon/coupon'
        });
      })
      .catch((errors) => {
        this.setData({
          formErrors: errors
        });


        //console.log(errors);
      });
  },

  formReset(e) {
    this.setData({
      formErrors: {},
      date: ''
    });
  }
})