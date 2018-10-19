// 密码验证(6-20位数字字母混合密码)
export default function(pwd) {
  var reg = /^[a-zA-Z0-9!@#$%^&*()-+=~:()><,.'?\"]{6,20}$/;
  return reg.test(pwd);
}
