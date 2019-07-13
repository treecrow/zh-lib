// 金钱格式化
export default function(money, digit) {
  digit = digit || 2;
  var tens = Math.pow(10, digit);
  var money = (Math.round(money * tens) / tens).toFixed(digit);
  var moneyArr = money.split(".");
  moneyArr[0].replace(/\B((?=\d{3})+(?!\d))/g, ",");
  return moneyArr.join(".");
}
