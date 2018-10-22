// 验证是否是6位数字验证码
export default function(code) {
  return /^\d{6}$/.test(code);
}
