// 判断name属性是否处于原型链上
export default function(obj, name) {
  return !obj.hasOwnProperty(name) && name in obj;
}
