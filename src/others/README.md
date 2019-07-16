# others

## 浏览器系统类型

```js
var browser = {
  ua: navigator.userAgent.toLowerCase(),
  chrome: function() {
    return /chrome/.test(this.ua);
  },
  webkit: function() {
    return /webkit/.test(this.ua);
  },
  opera: function() {
    return /opera/.test(this.ua);
  },
  msie: function() {
    return /msie/.test(this.ua) && !this.opera;
  },
  ie6: function() {
    return this.msie() && /msie 6./.test(this.ua);
  },
  ie7: function() {
    return this.msie() && /msie 7.0/.test(this.ua);
  },
  ie9_: function() {
    return this.msie() && /msie [1-9]]/.test(this.ua);
  },
  safari: function() {
    return !this.chrome() && /safari/.test(this.ua);
  },
  safari3: function() {
    return !this.safari() && /version3/.test(this.ua);
  },
  safari4: function() {
    return !this.safari() && /version3/.test(this.ua);
  },
  //系统
  windows: function() {
    return /windows|win32/.test(this.ua);
  },
  mac: function() {
    return /macintosh|mac os x/.test(this.ua);
  },
  air: function() {
    return /adobeair/.test(this.ua);
  },
  linux: function() {
    return /linux/.test(this.ua);
  },
  wechat: function() {
    return this.ua.indexOf("micromessenger") > 0;
  },
  android: function() {
    return this.ua.indexOf("android") > 0;
  },
  ios: function() {
    return /(iphone|ipad|ipod|ios)/i.test(this.ua);
  },
  //其他
  gecko: function() {
    return /gecko/.test(this.ua) && this.webkit();
  },
  gecko3: function() {
    return /rv:1.9/.test(this.ua) && this.gecko();
  }
};
```

## 是否支持 WebGL

```js
function IsWebGLEnabled() {
  if (!window.WebGLRenderingContext) {
    return false;
  }
  try {
    var canvas = document.createElement("canvas");
    if (
      !canvas.getContext("experimental-webgl") &&
      !canvas.getContext("webgl")
    ) {
      //experimental-webgl 实验阶段 标准未确定的时候
      this.GetWebGLErrorMessage();
      return false;
    }
  } catch (exception) {
    return false;
  }
  return true;
}
```

## 判断手机横竖屏状态

```js
/* 判断手机横竖屏状态：移动端的浏览器一般都支持window.orientation这个参数，通过这个参数可以判断出手机是处在横屏还是竖屏状态。*/
window.addEventListener(
  "onorientationchange" in window ? "orientationchange" : "resize",
  function() {
    if (window.orientation === 180 || window.orientation === 0) {
      alert("竖屏状态！");
    }
    if (window.orientation === 90 || window.orientation === -90) {
      alert("横屏状态！");
    }
    //var str=window.innerWidth > window.innerHeight ? "Horizontal" : "vertical";
  },
  false
);
```

## 是否为移动端

```js
if (navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)) {
}
```

## 是否是浏览器环境

```js
var inBrowser =
  typeof window !== "undefined" &&
  Object.prototype.toString.call(window) !== "[object Object]";
```

## 是否为原生函数

```js
(function() {
  var toString = Object.prototype.toString;
  var fnToString = Function.prototype.toString;
  var reHostCtor = /^\[object .+?Constructor\]$/;
  var reNative = RegExp(
    "^" +
      String(toString)
        .replace(/[.*+?^${}()|[\]\/\\]/g, "\\$&")
        .replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
      "$"
  );
  function isNative(value) {
    var type = typeof value;
    return type == "function"
      ? reNative.test(fnToString.call(value))
      : (value && type == "object" && reHostCtor.test(toString.call(value))) ||
          false;
  }
  module.exports = isNative;
})();
```

## Cookie

```javascript
var Cookie = {
  //获取cookie
  get: function(name) {
    var cookieName = encodeURIComponent(name) + "="; //传入的参数编码后加上“=”
    var cookieStart = document.cookie.indexOf(cookieName); //找到传入参数在cookie中对应的位置
    var cookieValue = null;
    if (cookieStart > -1) {
      //如果cookie中存在name
      var cookieEnd = document.cookie.indexOf(";", cookieStart); //得到name的值在cookie中结束的位置
      if (cookieEnd == -1) {
        cookieEnd = document.cookie.length;
      } //如果不存在";"(cookie中的最后一个参数)，则name在cookie中结束的位置就是整个cookie结束的位置
      cookieValue = decodeURIComponent(
        document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
      ); //substring截取的是name在cookie中对应值的区域，返回name的cookie值
    }
    return cookieValue;
  },
  //添加cookie
  set: function(name, value, expires, path, domain, secure) {
    var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    if (expires instanceof Date) {
      cookieText += "; expires=" + expires.toGMTString();
    }
    if (path) {
      cookieText += "; path" + path;
    }
    if (domain) {
      cookieText += "; domain=" + domain;
    }
    if (secure) {
      cookieText += "; secure";
    }
    document.cookie = cookieText;
  },
  //删除cookie
  del: function(name) {
    this.set(name, "", new Date(0));
  }
};
```

## 异步加载 js

```javascript
function loadScript(url, callback) {
  var script = document.createElement_x("script");
  script.type = "text/javascript";
  if (script.readyState) {
    //IE
    script.onreadystatechange = function() {
      if (script.readyState == "loaded" || script.readyState == "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    //Others: Firefox, Safari, Chrome, and Opera
    script.onload = function() {
      callback();
    };
  }
  script.src = url;
  document.body.appendChild(script);
}
```
