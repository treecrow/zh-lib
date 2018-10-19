// 生成指定位数数字验证码
export default function(len) {
  let result = "";
  while (len > 0) {
    len--;
    result += Math.floor(Math.random() * 10);
  }
  return result;
}
