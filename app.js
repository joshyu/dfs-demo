/**
* app.js
* application entry file
**/

import {
  app
} from 'utils/app';

App({
  onLaunch() {
    app.init(this).then(()=>{
      console.log('app is inited');
    })
  },

  appendItem(item) {
    app.appendItem(item);
  },

  getLeadList(){
    return app.leadList;
  },

  get userInfo(){
    return app.userInfo;
  }


})