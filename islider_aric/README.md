
# aric-iSlider轮播方法：

## iSlider可绑定事件:
- onslide
- onslidechange
- onslideend
- onslidestart

### iSlider定义在全局，cosole出来看


## HTML ELEMENT

```<div id="animation-effect" class="iSlider-effect"></div>```

## CSS

```
#iSlider-effect-wrapper {
    height: 517.5px;
    width: 375px;
    margin: 0 auto;
    // background: url('../images/bg_1.png') no-repeat top center;
    background-size: 100%;
    overflow: hidden;
    position: relative;
}

.iSlider-effect {
  overflow: hidden;
  position: relative;
  margin: 0 auto;
}

.iSlider-effect ul {
  list-style: none;
  padding: 0;
  margin: 0;
  height: 100%;
  overflow: hidden;
}
.iSlider-effect li {
  position: absolute;
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  list-style: none;
}
.iSlider-effect ul li img{
  max-width: 100%;
  max-height: 100%;
  margin: 0;
  padding: 0;
}

.iSlider-effect div{
  background-color: #ffffff;
  padding: 3px;
}

#menu-select {
  margin-top: 10px;
  text-align: center;
}

#menu-select span {
  display: inline-block;
  border: 2px solid #777;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  width: 60px;
  cursor: pointer;
}

#animation-effect {
  border: 0;
  width: 100%;
  height: 680/@bi;
  background-color: #000000;
  margin-top: 55px;
}

#animation-effect ul li img {
  border: 0;
}

#menu-select span:hover {
  background-color: #e74c3c;
}

#menu-select span.on {
  background-color: #e74c3c;
}
```

## 数据定义在data中

```

  var data = [{
    height: '100%',
    width: '100%',
    content: ""   //img or dom
},{
    height: '100%',
    width: '100%',
    content: ""
},{
    height: '100%',
    width: '100%',
    content: ""
}];

```

## 实例化iSlider

```

var iSlider = new self.iSlider({

    data : data,
    
    dom : document.getElementById('animation-effect'),//挂载点
    
    animateType: 'depth',
    
//轮播方式，default, rotate, flip ， depth

    isAutoplay: false,
    
    isLooping: true,
    
    duration:1000,
    
    type:'dom'
    
});

```
