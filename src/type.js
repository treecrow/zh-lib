// 判断是否为真
function judgeTrue(obj) {
  if (typeof obj !== 'object') return !!obj;
  if (obj === null) return false;
  return Object.keys(obj).length !== 0;
}


// 判断所有对象的类型
function judgeClassType(obj) {
  if (obj === null) return 'null';
  if (obj !== obj) return 'NaN';
  if (typeof obj !== 'object') return typeof obj;
  var objectType = Object.prototype.toString.call(obj).slice(8, -1);
  if (objectType !== 'Object') {
    return objectType;
  } else if (obj.constructor && typeof obj.constructor === 'function') {
    return obj.constructor.name || '匿名构造函数';
  } else {
    return 'Object';
  }
}


// 导出
export default {
  judgeTrue,
  isEmpty,
  judgeClassType,
}