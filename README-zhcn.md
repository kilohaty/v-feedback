# v-feedback

<a href="./README.md">English</a> | 中文


#### 触摸反馈指令（vue2.0 ）

![gif preview](example.gif)

## ES6 方式引入
```
npm install v-feedback --save
```

```javascript
import Vue from 'vue';
import vFeedback from 'v-feedback';
Vue.use(vFeedback);
```

## 直接引入js文件
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1"/>
  <title>Example</title>
  <style type="text/css">
    p {
      margin-top: 10px;
      border: 1px solid gray;
      line-height: 60px;
      border-radius: 6px;
      text-align: center;
    }

    .e-feedback {
      background-color: lightskyblue;
    }

    /* 自定义类名 */
    .my-className {
      background-color: pink;
    }
  </style>
</head>
<body>

<div id="app">
  <!-- 默认类名 "e-feedback" -->
  <p v-feedback>默认类名</p>

  <!-- 自定义类名 "my-className" -->
  <p v-feedback="'my-className'">自定义类名</p>
</div>
<script src="https://unpkg.com/vue"></script>
<script src="../dist/index.js"></script>
<script>
  new Vue({el: '#app'});
</script>
</body>
</html>

```

## 使用说明
#### 默认类名
```html
<p v-feedback>默认类名</p>
```

#### 自定义类名
```html
<p v-feedback="'your-class-name'">自定义类名</p>
```
#### 禁用
```javascript
/**
 * value !== undefined && !value 
 * 示例值: null, false, '', 0, ......
 */
```
```html
<p v-feedback="''">禁用指令</p>
<p v-feedback="false">禁用指令</p>
<p v-feedback="null">禁用指令</p>
```
