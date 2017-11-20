// 根据健值对获取数组中对应元素
function getItem(arr, obj) {
  let key = ''
  for (let i in obj) {
    key = i
    break
  }
  return arr.filter((item) => item[key] === obj[key])[0]
}

// 去除数组重复项
function unique(arr) {
  return [...new Set(arr)]
}

// 判断数组中是否有重复项
function judgeRepeat(arr) {
  return arr.every((item, index, arr) => {
    return arr.indexOf(item) == arr.lastIndexOf(item)
  })
}

// 按大小排列数组
function sortToLarge(arr) {
  return arr.sort((x, y) => x - y)
}
function sortToSmall(arr) {
  return arr.sort((x, y) => y - x)
}

// 取得数组的最大值/最小值
function getMax(arr) {
  return Math.max(...arr)
}
function getMin(arr) {
  return Math.min(...arr)
}

// 打乱数组顺序
function disOrder(arr) {
  return arr.sort(() => Math.random() - 0.5)
}

// 从数组中随机取出几个元素
function getRandom(arr, count) {
  let result = arr.concat().sort(() => Math.random() - 0.5)
  return result.slice(-count)
}

// 反转矩阵数组
function turnMatrix(arr) {
  var ret = [];
  var i, j;
  if (arr.length == 0) { return []; }
  if (arr[0].length == 0) { return [[]]; }
  for (var i = 0; i < arr[0].length; i++) { ret.push([]); }
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) { ret[j].push(arr[i][j]); }
  }
  return ret;
}

// 两个数组的交集
function intersection(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item))
}

// 两个数组的补集
function difference(arr1, arr2) {
  return arr1.concat(arr2).filter((item) => {
    return !arr1.includes(item) || !arr2.includes(item)
  })
}

// 两个数组的并集
function union(arr1, arr2) {
  return [... new Set([...arr1, ...arr2])]
}

// 去除数组中的错误项（清楚数组中为null、undefind、0、空字符的元素）
function removeError(arr) {
  return arr.filter(item => !!item)
}

// 将多维数组转变为一维数组
function flatten(arr) {
  return [].concat(...arr)
}

export default {
  getItem,
  unique,
  sortToLarge,
  sortToSmall,
  getMax,
  getMin,
  disOrder,
  getRandom,
  turnMatrix,
  intersection,
  difference,
  union,
  removeError,
  flatten,
}