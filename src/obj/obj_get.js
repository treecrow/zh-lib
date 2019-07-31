// 安全的获取对象指定字段
function obj_get(obj, keyPath) {
  return keyPath.split(".").reduce((curObj, key) => {
    if (curObj && curObj[key]) {
      return curObj[key];
    } else {
      return null;
    }
  }, obj);
}

export default obj_get;
