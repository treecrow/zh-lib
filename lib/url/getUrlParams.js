// 获取url参数对象
export default function() {
  var searchArr = window.location.search.substring(1).split("&");
  var obj = {};
  searchArr.forEach(function(item) {
    var arr = item.split("=");
    obj[arr[0]] = arr[1];
  });
  return obj;
}
