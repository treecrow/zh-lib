// 获取url参数对象
function getSearchObj() {
  var searchArr = window.location.search.substring(1).split('&');
  var obj = {};
  searchArr.forEach(function (item) {
    var arr = item.split('=');
    obj[arr[0]] = arr[1];
  });
  return obj;
}

// 根据key获取url查询参数
function getParameter(key) {
  var query = window.location.search;
  var startPos = query.indexOf(key);
  if (startPos < 0) return '';
  var endPos = query.indexOf("&", startPos + 1);
  endPos = endPos > 0 ? endPos : undefined;
  var strArr = query.substring(startPos, endPos);
  return strArr.split('=')[1];
}

// 导出
export default {
  getSearchObj,
  getParameter,
}