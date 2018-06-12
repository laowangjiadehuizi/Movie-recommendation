// pages/topFilm/topFilm.js
var Bmob = require('../../utils/bmob.js');
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["豆瓣高分", "猫眼高分"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });


    // 豆瓣高分
    var _this = this;
    var douban = Bmob.Object.extend("douban11");
    var query = new Bmob.Query(douban);
    query.descending("rating");
    // 查询所有数据
    query.find({
      success: function (results) {
        _this.setData({
         doubanList: results
        });
        console.log("共查询到 " + results.length + " 条记录");
      },
      error: function (error) {
        console.log("查询失败: " + error.code + " " + error.message);
      }
    });

    // 烂番茄高分
    var tomatoes = Bmob.Object.extend("rottentomatoes");
    var query = new Bmob.Query(tomatoes);
    query.descending("rating");
    // 查询所有数据
    query.find({
      success: function (results) {
        _this.setData({
          tomatoesList: results
        });
        console.log("共查询到 " + results.length + " 条记录");
      },
      error: function (error) {
        console.log("查询失败: " + error.code + " " + error.message);
      }
    });

  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
})