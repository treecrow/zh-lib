// json方式深拷贝
export default function(obj) {
  return JSON.parse(JSON.stringify(obj));
}
