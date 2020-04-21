module.exports = function cloneAnything(objectToBeCloned) {
  "use strict";
  // 如果不是对象则直接返回
  if (!(objectToBeCloned instanceof Object)) {
    return objectToBeCloned;
  }
  var objectClone;

  // 对DOM对象特殊处理，列表就用数组把克隆结果装起来
  if (objectToBeCloned instanceof Node || objectToBeCloned instanceof NodeList || objectToBeCloned instanceof HTMLCollection) {
    if (objectToBeCloned.length || objectToBeCloned.length === 0) {
      return objectClone = [].slice.call(objectToBeCloned);
    }
    return objectClone = objectToBeCloned.cloneNode(true);
  }

  // 获取对象的构造函数
  var Constructor = objectToBeCloned.constructor;

  // 对特殊构造器进行特殊处理。
  switch (Constructor) {
    case RegExp:
      return objectClone = new Constructor(objectToBeCloned);
    case Date:
      return objectClone = new Constructor(objectToBeCloned.getTime());
    case Number:
      return objectClone = toLiteral(objectToBeCloned);
    case String:
      return objectClone = toLiteral(objectToBeCloned);
    case Boolean:
      return objectClone = toLiteral(objectToBeCloned);
    case Function:
      return objectClone = objectToBeCloned;
    default:
      objectClone = new Constructor();
  }

  // 递归遍历.
  for (var prop in objectToBeCloned) {
    if (objectToBeCloned.hasOwnProperty(prop)) {
      objectClone[prop] = cloneAnything(objectToBeCloned[prop]);
    }
  }
  return objectClone;
  // 构造函数生成的实例还原成字面量的方法
  function toLiteral(vVal) {
    return JSON.parse(JSON.stringify(vVal));
  }
}
