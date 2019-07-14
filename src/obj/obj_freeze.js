// 对象冻结
function obj_freeze(obj) {
  Object.freeze(obj);
  Object.keys(obj).forEach((key, value) => {
    if (typeof obj[key] === "object") obj_freeze(obj[key]);
  });
}

export default obj_freeze;
