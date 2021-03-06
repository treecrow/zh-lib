// 反转矩阵数组
function matrixReverse(arr) {
  var ret = [];
  var i, j;
  if (arr.length == 0) {
    return [];
  }
  if (arr[0].length == 0) {
    return [[]];
  }
  for (var i = 0; i < arr[0].length; i++) {
    ret.push([]);
  }
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      ret[j].push(arr[i][j]);
    }
  }
  return ret;
}

// 数组矩阵
export default function(arr, flag) {
  let result;
  switch (flag) {
    case "reverse":
      result = matrixReverse(arr);
      break;
  }
  return result;
}
