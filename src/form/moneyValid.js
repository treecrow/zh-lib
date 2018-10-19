// 金额输入纠正
export default function(id) {
  function moneyFormat(str) {
    return str
      .replace(/[^\d\.]|^\./g, "")
      .replace(/\.{2}/g, ".")
      .replace(/^([1-9]\d*|0)(\.\d{1,2})(\.|\d{1})?$/, "$1$2")
      .replace(/^0\d{1}/g, "0");
  }
  // 添加事件
  $(id).on("input propertychange", function() {
    var value = $(this).val(),
      validValue = moneyFormat(value);

    $(this).val(validValue);
  });
}
