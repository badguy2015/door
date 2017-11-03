var name = "火炎焱";
var mobile = "13431234567";
var address = "联系地址：广东省佛山市大力镇民主南路1号";



// 首页图片显示数量
var totalNum = '30';
// 图片默认路径
var path = '/images/article/contactus/';
// 图片后缀
var SuffixName = ".jpg";

var tempArr = new Array();
for (var i = 0; i < totalNum; i++) {
  tempArr[i] = {
    url: path + (i + 1) + SuffixName,
    navigate_url: ''
  };
}

module.exports = {
  contectus_images_list: tempArr,
  name : name,
  mobile : mobile,
  address : address,
};