// 获取域名主机
export default function(url) {
  if (typeof url == "undefined" || null == url) {
    url = window.location.href;
  }
  let host = "null",
    regex = /^\w+\:\/\/([^\/]*).*/,
    match = url.match(regex);
  if (typeof match != "undefined" && null != match) {
    host = match[1];
  }
  return host;
}
