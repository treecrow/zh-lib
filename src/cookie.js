// 根据cookie名获取cookie值
function getCookie(name) {
  var v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return v ? v[2] : null;
}

// 导出
export default {
  getCookie
};
