// 获取url参数对象
function getUrlParams() {
  var searchArr = window.location.search.substring(1).split('&');
  var obj = {};
  searchArr.forEach(function (item) {
    var arr = item.split('=');
    obj[arr[0]] = arr[1];
  });
  return obj;
}

// 根据key获取url查询参数
function getUrlParam(key) {
  var query = window.location.search;
  var startPos = query.indexOf(key);
  if (startPos < 0) return '';
  var endPos = query.indexOf("&", startPos + 1);
  endPos = endPos > 0 ? endPos : undefined;
  var strArr = query.substring(startPos, endPos);
  return strArr.split('=')[1];
}
function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}

// 获取域名主机
function getHost(url) {
  if (typeof url == "undefined" || null == url) {
    url = window.location.href;
  }
  let host = "null",
    regex = /^\w+\:\/\/([^\/]*).*/,
    match = url.match(regex);
  if (typeof match != "undefined" && null != match) {
    host = match[1];
  }
  return host;
}

// 判断是否是url
function isUrl(strUrl) {
  let regular = /^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|asia|coop|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:\@&?=+,.!\/~%\$]*)?)$/i;
  return regular.test(strUrl);
}

// 获取链接的绝对地址
function getAbsoluteUrl(url) {
  var a = document.createElement('a');
  a.href = url;
  var result = a.href;
  a = null;
  return result;
}

// 导出
export default {
  getUrlParams,
  getUrlParam,
  getHost,
  isUrl,
  getAbsoluteUrl,
}