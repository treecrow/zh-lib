// 根据key获取url查询参数
// export default function (key) {
//   var query = window.location.search;
//   var startPos = query.indexOf(key);
//   if (startPos < 0) return "";
//   var endPos = query.indexOf("&", startPos + 1);
//   endPos = endPos > 0 ? endPos : undefined;
//   var strArr = query.substring(startPos, endPos);
//   return strArr.split("=")[1];
// }
export default function(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}
