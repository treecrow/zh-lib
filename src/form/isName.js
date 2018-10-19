// 姓名验证
export default function(name) {
  var reg = /^[a-zA-Z\u4e00-\u9fa5]+$/;
  return reg.test(name);
}
