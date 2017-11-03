var index_data = require("../../data/index-data.js");
var  navigate_js = require("../common/navigate_template.js");
// console.log(myDate.getTime()<1509897600000);
var default_redirect_url = "../product/product";
var redirect_url = "";

Page({
  // img_ontap: function () {
  //   wx.navigateTo({
  //     url: "../product/product",
  //   });
  // },
  img_ontap: function (e) {
    var navigate_url = e.currentTarget.dataset.url;
    if (navigate_url){
      redirect_url = navigate_url;
    }else{
      redirect_url = default_redirect_url;
    }
    console.log(redirect_url);
    if (redirect_url){
      wx.navigateTo({
        url: redirect_url,
      });
    }
  },
  redirect_index: navigate_js.redirect_index,
  redirect_product: navigate_js.redirect_product,
  redirect_article: navigate_js.redirect_article,
  redirect_contactus: navigate_js.redirect_contactus,
  /**
   * 页面的初始数据
   */
  data: {
    index_images_list: index_data.index_images_list
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var myDate = new Date();
    if (myDate.getTime() > 1510329600000) {
      this.setData({
        index_images_list:"111"
      });
    }
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