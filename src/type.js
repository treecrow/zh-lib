// 判断是否为真
function judgeTrue(val) {
  if (val === null) return false;
  if (!isNaN(val)) return val > 0;
  if (typeof val === 'object') return Object.keys(val).length === 0 ? false : true;
  return !!val;
}

// 判断变量是否空值
function isEmpty(val) {
  switch (typeof val) {
    case 'undefined':
      return true;
      break;
    case 'string':
      if (val.trim().length == 0) return true;
      break;
    case 'boolean':
      if (!val) return true;
      break;
    case 'number':
      if (0 === val) return true;
      break;
    case 'object':
      if (null === val) return true;
      if (undefined !== val.length && val.length == 0) return true;
      for (var k in val) {
        return false;
      }
      return true;
      break;
  }
  return false;
}

// 判断对象的基础类型
function classOf(o) {
  if (o === null) return "Null";
  if (o === undefined) return "Undefined";
  return Object.prototype.toString.call(o).slice(8, -1);
}

// 导出
export default {
  judgeTrue,
  isEmpty,
  classOf,
}