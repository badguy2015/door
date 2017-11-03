var navigate_js = require("../common/navigate_template.js");
var product_data = require("../../data/product-data.js");

Page({
  ontap:function(e){
    var product_id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: "./detail/detail?id=" + product_id});
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
      product_list: product_data.product_list,
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