# v-feedback

English | <a href="./README-zhcn.md">中文</a>

#### touch feedback directive for vue2.0 

![gif preview](example.gif)

## Default import
```
npm install v-feedback --save
```

```javascript
import Vue from 'vue';
import vFeedback from 'v-feedback';
Vue.use(vFeedback);
```

## Browser
```html
<!DOCTYPE html>
<html lang="en">
<head></head>
<body>
<script src="./dist/index.js"></script>
</body>
```

## Example
<a href="./src/example.html">click to view example code</a>

#### example code
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

    /* with custom class */
    .my-className {
      background-color: pink;
    }
  </style>
</head>
<body>

<div id="app">
  <!-- default class "e-feedback" -->
  <p v-feedback>with default class</p>

  <!-- with custom class "my-className" -->
  <p v-feedback="'my-className'">with custom class</p>
</div>
<script src="https://unpkg.com/vue"></script>
<script src="../dist/index.js"></script>
<script>
  new Vue({el: '#app'});
</script>
</body>
</html>

```

## Usage
#### default classname
```html
<p v-feedback>with default class</p>
```

#### custom classname
```html
<p v-feedback="'your-class-name'">with custom class</p>
```
#### disable
```javascript
/**
 * value !== undefined && !value 
 * Example: null, false, '', 0, ......
 */
```
```html
<p v-feedback="''">disable</p>
<p v-feedback="false">disable</p>
<p v-feedback="null">disable</p>
```
