// 验证是否是手机号
function isPhoneNum(num) {
  var reg = /^1[3|4|5|7|8][0-9]{9}$/;
  return reg.test(num);
}

// 验证是否是电话
function isTelNum(num) {
  var reg = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
  return reg.test(num);
}

// 姓名验证
function isName(name) {
  var reg = /^[a-zA-Z\u4e00-\u9fa5]+$/;
  return reg.test(name);
}

// 密码验证(6-20位数字字母混合密码)
function isPwd(pwd) {
  var reg = /^[a-zA-Z0-9!@#$%^&*()-+=~:()><,.'?\"]{6,20}$/;
  return reg.test(pwd);
}

// 金额输入纠正
function moneyValid(id) {
  function moneyFormat(str) {
    return str.replace(/[^\d\.]|^\./g, '').replace(/\.{2}/g, '.').replace(/^([1-9]\d*|0)(\.\d{1,2})(\.|\d{1})?$/, '$1$2').replace(/^0\d{1}/g, '0');
  }
  // 添加事件
  $(id).on('input propertychange', function () {
    var value = $(this).val(),
      validValue = moneyFormat(value);

    $(this).val(validValue);
  });
}

// 金额千分位分割+保留两位小数
// var n2 = (n || 0).toString().replace(/^(\d*)$/g, '$1.00');
// var reg = /\d{1,3}(?=(\d{3})+$)/g;
// var n3 = n2.replace(/^(\d+)((\.\d+)?)$/, function (s, s1, s2) {
//   return s1.replace(reg, "$&,") + s2;
// });