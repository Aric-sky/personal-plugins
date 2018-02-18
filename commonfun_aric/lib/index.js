module.exports = {

  //获取对象、数组的长度、元素个数
  getLength: function (obj) {

    var typeRes = this.typeCheck(obj).toString().trim();

    if (typeRes == "string" || typeRes == "number") { //string、number
      return obj.length;

    } else if (typeRes == "object" || typeRes == "Array") { //Object、Array
      var objLen = 0;
      for (var i in obj) {
        objLen++;
      }
      return objLen;
    } else { //无法检测类型

      return "function or 无法判断的数据类型";
    }

  },
  // 判断数据类型
  typeCheck: function (obj) {
    var objType = typeof (obj);
    if (objType == "object") {
      if (obj instanceof Array) { // 当为array时
        objType = "Array"
      }
    }
    return objType
  },
  //首次登录判断,仅判断唯一物理机
  isFirst: function () {
    var day = '101';
    var shareTime = window.localStorage.getItem('shareTime');
    if (shareTime == null) {
      window.localStorage.setItem('shareTime', day);
      return true;
    } else {
      return false;
    }
  },
  //移动端，触屏阻止和触发
  handler: function (event) {
    event.preventDefault();
  },
  prevent: function () {
    document.addEventListener('touchmove', this.handler, false);
  },
  dispatch: function () {
    document.removeEventListener('touchmove', this.handler, false);
  },
  //stringly、parsely方法函数
  stringly: function (obj) {
    return JSON.stringify(obj);
  },
  parsely: function (obj) {
    return JSON.parse(obj);
  },
  //设置单个值
  localSigleSet: function (item, value) {
    window.localStorage.setItem(item, value);
  },
  //设置数组的存储值
  localArrSet: function (item, key, val) {
    var dataList = {};
    if (this.localGet(item)) {
      dataList = this.localGet(item);
    }
    dataList[key] = val;
    this.localSigleSet(item, this.stringly(dataList));
  },
  //获得整个item的内容
  localGet: function (item) {
    return this.parsely(window.localStorage.getItem(item));
  },

  //地址栏后缀获取
  linkParamGet: function (p) {
    var url = location.href.split('?');
    var obj;
    if (url.length > 1) {
      obj = this.param(url[1]);
    } else {
      obj = this.param(url);
    }
    return obj[p];
  },
  //linkGet字符串转化为对象
  param: function (str) {
    var obj = {};
    if (str !== undefined && str.indexOf('=') > -1) {
      str = str.replace('&=on', '');
      var arr = str.split('&');
      for (var i = 0; i < arr.length; i++) {
        var t = arr[i].split('=');
        obj[t[0]] = t[1];
      }
    }
    return obj;
  },

  // 让一个高频触发的函数在一定时间内只触发一次
  debounce: function (func, wait) {
    var _timestamp, _timer
    return function () {
      var now = Date.now()
      if (_timestamp && ((now - _timestamp) < wait)) {
        clearTimeout(_timer)
      }
      _timestamp = now
      _timer = setTimeout(func.bind(this, ...arguments), wait)
    }
  },

  //对象按属性排序
  compare: function (prop) {
    return function (obj1, obj2) {
      var val1 = obj1[prop];
      var val2 = obj2[prop];
      if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
        val1 = Number(val1);
        val2 = Number(val2);
      }
      if (val1 < val2) {
        return -1;
      } else if (val1 > val2) {
        return 1;
      } else {
        return 0;
      }
    }
  },

  //属性判断是否包含  arg：对象或者数组  item：属性或者单位
  has: function(arg, item){  //true 包含, false 不含
    var type = this.typeCheck(arg);
    if (type === 'object') {
      return arg.hasOwnProperty(item);
    }else if (type === 'Array') {
      if(arg.length > 0 ){
        for(var i= 0, len = arg.length; i< len; i++){
          if(arg[i] == item){
            return true;
          }
        }
        return false;
      }else{
        return false ;
      }
    }
  }

}