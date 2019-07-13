// 验证是否是手机号
export default function(num) {
  var reg = /^1[3|4|5|7|8][0-9]{9}$/;
  return reg.test(num);
}
