// 判断字符首位是否是空字符
export default function(value) {
  let characterCode = value.charCodeAt(0);
  return (characterCode > 8 && characterCode < 14) || characterCode === 32;
}
