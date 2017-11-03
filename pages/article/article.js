var navigate_js = require("../common/navigate_template.js");
var article_data = require("../../data/article-data.js");

Page({
  ontap:function(e){
    var article_id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: "./detail/detail?id=" + article_id});
  },
  redirect_index: navigate_js.redirect_index,
  redirect_product: navigate_js.redirect_product,
  redirect_article: navigate_js.redirect_article,
  redirect_contactus: navigate_js.redirect_contactus,
  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      article_list: article_data.article_list,
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
})