// 获取链接的绝对地址
export default function(url) {
  var a = document.createElement("a");
  a.href = url;
  var result = a.href;
  a = null;
  return result;
}
