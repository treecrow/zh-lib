// 获取url参数对象
function url_param(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}

// 获取url参数对象
export default function() {
  const obj = {};
  const searchArr = window.location.search.substring(1).split("&");
  searchArr.forEach(item => {
    const arr = item.split("=");
    obj[arr[0]] = arr[1];
  });
  return obj;
}
