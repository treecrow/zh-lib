// 对象属性信息
export default function(obj, property) {
  const propertyInfo = {
    // 属性是否只在原型链上有
    onlyInPrototype: !obj.hasOwnProperty(property) && property in obj
  };
  return propertyInfo;
}
