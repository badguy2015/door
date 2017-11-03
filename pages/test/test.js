Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 小程序总是会读取data对象做数据绑定，这个动作我们称作A
    // 动作A在onLoad事件执行后发生
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var detail = {
      title: "放假通知",
      content: "做梦！",
    };
    var tempa = [
      { sn: 1 },
      { sn: 2 },
      { sn: 3 },
      { sn: 4 },
      { sn: 5 },
      { sn: 6 },
      { sn: 7 },
      { sn: 8 },
      { sn: 9 },
      { sn: 10 },
      { sn: 11 },
      { sn: 12 },
      { sn: 13 },
      { sn: 14 },
      { sn: 15 },
      { sn: 16 },
      { sn: 17 },
      { sn: 18 },
    ];

    this.setData({
      image_list: tempa,
      detail: detail
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