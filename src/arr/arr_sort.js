// 数组排序
export default function(arr, sortType = "large") {
  return arr.sort((x, y) => {
    let feedback = null;
    switch (sortType) {
      case "large":
        feedback = x - y;
        break;
      case "small":
        feedback = y - x;
        break;
      case "random":
        feedback = Math.random() - 0.5;
        break;
    }
    return feedback;
  });
}
