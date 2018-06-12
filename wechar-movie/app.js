//app.js
var Bmob = require('utils/bmob.js');
Bmob.initialize("a01d2ac347011a4a9f1ef2b7d37fbaba", "f750a933ef0e7cd1fce8bb3b3baa26eb");

App({
  onLaunch: function () {
    var user = new Bmob.User();
    var newOpenid = wx.setStorageSync('openid');//获取用户id
    if (!newOpenid) {
      //第一次登陆
      wx.login({
        success: function (res) {
          user.loginWithWeapp(res.code).then(function (user) {
            var openid = user.get("authData").weapp.openid;
            console.log(user, 'user', user.id, res);

            //  第二次访问
            if (user.get("nickName")) {
              console.log(user.get("nickName"), 'res.get("nickName")');
              wx.setStorageSync('openid', openid)
            } else {
              // 第一次访问就保存用户信息
              wx.getUserInfo({
                success: function (result) {
                  var userInfo = result.userInfo;
                  var nickName = userInfo.nickName;
                  var avataUrl = userInfo.avataUrl;
                  var u = Bmob.Object.extend("_User");
                  var query = new Bmob.Query(u);
                  query.get(user.id, {
                    success: function (result) {
                      // 否则更新用户信息
                      result.set('nickName', nickName);
                      result.set("userPic", avataUrl);
                      result.set("openid", openid);
                      result.save();
                    }
                  });
                }
              });
            }
          }, function (err) {
            console.log(err, 'err');
          });
        }
      });
    }
  }, getUserInfo: function (cb) {
    var that = this;
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      // 调用登陆接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo);
            }
          });
        }
      });
    }
  },
  globalData: {
    userInfo: null,
    pageReady: false
  }
});
