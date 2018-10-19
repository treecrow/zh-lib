// 验证是否是电话
export default function(num) {
  var reg = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
  return reg.test(num);
}
