// pages/filmDetail/filmDetail.js
var Bmob = require('../../utils/bmob.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    // 豆瓣
    var _this = this;
    var id=options.id
    var Diary = Bmob.Object.extend("douban");
    var query = new Bmob.Query(Diary);
    query.get(id, {
      success: function (result) {
        _this.setData({
          row: result
        });
        // The object was retrieved successfully.
        console.log("该日记标题为" + result.get("name"));
      },
      error: function (result, error) {
        console.log("查询失败");
      }
    });

  // 烂番茄
    var Diary = Bmob.Object.extend("rottentomatoes");
    var query = new Bmob.Query(Diary);
    query.get(id, {
      success: function (result) {
        _this.setData({
          row: result
        });
        // The object was retrieved successfully.
        console.log("该日记标题为" + result.get("name"));
      },
      error: function (result, error) {
        console.log("查询失败");
      }
    });

    // now
    var Diary = Bmob.Object.extend("now");
    var query = new Bmob.Query(Diary);
    query.get(id, {
      success: function (result) {
        _this.setData({
          row: result
        });
        // The object was retrieved successfully.
        console.log("该日记标题为" + result.get("name"));
      },
      error: function (result, error) {
        console.log("查询失败");
      }
    });

    // coming
    var Diary = Bmob.Object.extend("coming");
    var query = new Bmob.Query(Diary);
    query.get(id, {
      success: function (result) {
        _this.setData({
          row: result
        });
        // The object was retrieved successfully.
        console.log("该日记标题为" + result.get("name"));
      },
      error: function (result, error) {
        console.log("查询失败");
      }
    });

    // guesslike
    var Diary = Bmob.Object.extend("guesslike");
    var query = new Bmob.Query(Diary);
    query.get(id, {
      success: function (result) {
        _this.setData({
          row: result
        });
        // The object was retrieved successfully.
        console.log("该日记标题为" + result.get("name"));
      },
      error: function (result, error) {
        console.log("查询失败");
      }
    });

    // classic
    var Diary = Bmob.Object.extend("classic");
    var query = new Bmob.Query(Diary);
    query.get(id, {
      success: function (result) {
        _this.setData({
          row: result
        });
        // The object was retrieved successfully.
        console.log("该日记标题为" + result.get("name"));
      },
      error: function (result, error) {
        console.log("查询失败");
      }
    });


    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  
})