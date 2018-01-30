// 验证是否是手机号
function isPhoneNum(num) {
  var reg = /^1[3|4|5|7|8][0-9]{9}$/;
  return reg.test(num);
}

// 验证是否是电话
function isTelNum(num) {
  var reg = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
  return reg.test(num);
}

// 姓名验证
function isName(name) {
  var reg = /^[a-zA-Z\u4e00-\u9fa5]+$/;
  return reg.test(name);
}

// 密码验证(6-20位数字字母混合密码)
function isPwd(pwd) {
  var reg = /^[a-zA-Z0-9!@#$%^&*()-+=~:()><,.'?\"]{6,20}$/;
  return reg.test(pwd);
}