/**
 * app.js
 * application entry file
 **/

import {
  app
} from 'utils/app';

import {
  genCouponCode
} from 'utils/util';

import WxValidate from 'utils/validate';

App({
  onLaunch() {
    app.init(this).then(() => {
      this.userInfo = app.userInfo;
      this.leadList = app.leadList;
      console.log('app is inited');
    })
  },

  appendItem(item) {
    item.coupon = genCouponCode();
    this.userInfo.coupon = item.coupon;
    app.appendItem(item);
  },

  /*get userInfo() {
    return app.userInfo;
  },

  set userInfo(userInfo) {
    app.userInfo = userInfo;
  },*/

  validate(formConext, validateRules, validateMessages) {
    const validator = new WxValidate(validateRules, validateMessages);

    validator.addMethod('uniquePhone', (value, param) => {
      const leadList = app.leadList;
      return app.leadList.filter((it) => {
        return it.phonenumber == value;
      }).length === 0;
    }, 'Phone number must be unique.');

    validator.addMethod('uniqueEmail', (value, param) => {
      const leadList = app.leadList;
      return app.leadList.filter((it) => {
        return it.email == value;
      }).length === 0;
    }, 'Email must be unique.');

    return new Promise((resolve, reject) => {
      if (validator.checkForm(formConext)) {
        resolve(true);
      } else {
        reject(validator.validationErrorsMap());
      }
    });
  }
})