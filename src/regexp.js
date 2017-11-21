// 验证是否是手机号
function isPhone(num) {
  let reg = /^1[3|4|5|7|8][0-9]{9}$/;
  return reg.test(num);
}

// 验证是否是邮箱
function isEmail(str) {
  let pattern = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
  return pattern.test(str)
}

// 检测字符串中特定的字符的个数
function getCharNum(str) {
  return str.split(/[aeiou]/ig).length - 1
}

// 获得文件扩展名
function etFileExtension(filename) {
  return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename)[0] : undefined
}

// 过滤非中文
function onlyChinese(str) {
  return str.replace(/[^\u4e00-\u9fa5]/g, "")
}

// 首字母大写
function upperStart(str) {
  return str.replace(/\b(\w)(\w*)/g, () => {
    return $1.toUpperCase() + $2.toLowerCase()
  })
}

// 转化为驼峰
function turnToHump(str) {
  return str.replace(/_(\w)/g, ($0, $1) => {
    return $1.toUpperCase()
  })
}

// 转化为下划线
function turnToLine(str) {
  return str.replace(/([A-Z])/g, "_$1").toLowerCase()
}

// 验证日期格式
function verifyDate(vDate) {
  //验证格式必须为  "YYYY-MM-DD hh:mm:ss" 格式，类似“2014-02-12 16:34:57”
  return /^(\d{4}-\d{2}-\d{2})\s{1}(\d{2}:\d{2}:\d{2})$/.test(vDate)
}

// 导出
export default {
  isPhone,
  isEmail,
  getCharNum,
  etFileExtension,
  onlyChinese,
  upperStart,
  turnToHump,
  turnToLine,
  verifyDate,
}