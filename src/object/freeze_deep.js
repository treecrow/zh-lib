// 彻底冻结对象
function freeze_deep(obj) {
  Object.freeze(obj);
  Object.keys(obj).forEach((key, value) => {
    if (typeof obj[key] === "object") freeze_deep(obj[key]);
  });
}

export default freeze_deep;
