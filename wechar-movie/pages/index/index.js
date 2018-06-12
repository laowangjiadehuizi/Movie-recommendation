//index.js
var Bmob = require('../../utils/bmob.js');
Page({
  data: {
    inputShowed: false,
    inputVal: ""
  },
  viewSearch: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  onLoad: function (options) {
   var _this=this;

  //  猜你喜欢 ---轮播图
   var Diary = Bmob.Object.extend("guesslike");
   var query = new Bmob.Query(Diary);
   query.limit(5);
   // 查询所有数据
   query.find({
     success: function (results) {
       _this.setData({
         results:results
       });
       console.log("共查询到 " + results.length + " 条记录");
     },
     error: function (error) {
       console.log("查询失败: " + error.code + " " + error.message);
     }
   });


// 最近上映
   var coming = Bmob.Object.extend("new11");
   var query = new Bmob.Query(coming);
   // 查询所有数据
   query.find({
     success: function (results) {
       _this.setData({
         comingList:results
       });
       console.log("共查询到 " + results.length + " 条记录");
     },
     error: function (error) {
       console.log("查询失败: " + error.code + " " + error.message);
     }
   });


// 正在上映
   var now = Bmob.Object.extend("hot11");
   var query = new Bmob.Query(now);
   // 查询所有数据
   query.find({
     success: function (results) {
       _this.setData({
         nowList: results
       });
       console.log("共查询到 " + results.length + " 条记录");
     },
     error: function (error) {
       console.log("查询失败: " + error.code + " " + error.message);
     }
   });

   // 经典电影
   var classic = Bmob.Object.extend("douban11");
   var query = new Bmob.Query(classic);
   // 查询所有数据
   query.find({
     success: function (results) {
       _this.setData({
         classicList: results
       });
       console.log("共查询到 " + results.length + " 条记录");
     },
     error: function (error) {
       console.log("查询失败: " + error.code + " " + error.message);
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

  }
}
)