// 获取链接的绝对地址
export default function(url) {
  let a = document.createElement("a");
  a.href = url;
  const result = a.href;
  a = null;
  return result;
}
