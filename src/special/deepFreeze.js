// 彻底冻结对象
function deepFreeze(obj) {
  Object.freeze(obj);
  Object.keys(obj).forEach((key, value) => {
    if (typeof obj[key] === "object") deepFreeze(obj[key]);
  });
}

export default deepFreeze;
