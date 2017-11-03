var redirect_index = function () {
  wx.redirectTo({
    url: '/pages/index/index',
  });
};
var redirect_product = function () {
  wx.redirectTo({
    url: '/pages/product/product',
  });
};
var redirect_article = function () {
  wx.redirectTo({
    url: '/pages/article/article',
  });
};
var redirect_contactus = function () {
  wx.redirectTo({
    url: '/pages/article/contactus/contactus',
  });
};
module.exports = {
  redirect_index: redirect_index,
  redirect_product: redirect_product,
  redirect_article: redirect_article,
  redirect_contactus: redirect_contactus,
};