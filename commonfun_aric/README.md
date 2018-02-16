## personal frequently use fun

### Install

```
npm install commonfun_aric --save
import $lib from 'commonfun_aric'

```

### getLength方法使用

```
var len = $lib.getLength(item)
//可判断string、number、array、object的数据长度
```

### typeCheck方法使用

```
var len = $lib.typeCheck(item)
//可判断string、number、array、object、function
```

### compare---对象按属性排序
```
arr.sort(compare('age'))
//arr: [{name: "zlw",age: 24}, {name: "wlz",age: 25},{name: "wlz",age: 29}];

```


### 方法列表

Mask | Description
---- | -----------
`isFirst` | 首次登录判断,仅判断唯一物理机, isFirst().
`prevent` | 移动端，触屏滑动阻止, prevent().
`dispatch` | 移动端，触屏滑动触发, dispatch().
`stringly` | 数据stringly, stringly(data).
`parsely` | 数据json化, parsely(data).
`localSigleSet` | 设置localStorage单个值,localSigleSet(item, value)键:item, 值:key.
`localArrSet` | 设置数组的存储值,键:item, 值的key:key, 值的value:value, ex: localSet(item,key,val).
`localGet` | 获得整个item的内容, ex: localGet(item).
`linkParamGet` | 地址栏后缀获取, ex: linkParamGet(key), key: 键.
`debounce` | 让一个高频触发的函数在一定时间内只触发一次, ex: debounce(func, wait), func: 反复执行的函数, wait: 等待时间.
`has` | 属性判断,对象或者数组中是否包含某个属性或者值, ex: has(arg, item),  arg：对象或者数组  item：属性或者单位