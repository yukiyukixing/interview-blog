# 5.CSS

## 1.BFC ⭐

- 1.定义：块级格式上下文，它是页面中的一块渲染区域，具有一定的渲染规则，决定了其中子元素的布局方式和与其他元素的相互作用和关系。

### 1.如何创建 BFC

- 1.根元素 html 本身就是一个 BFC。

- 2.浮动元素（元素的 float 不是 none）。

- 3.绝对定位元素（元素的 position 为 absolute 或 fixed）。

- 4.Display：inline-block。

- 5.Overflow：overflow设置为不为 visible 的值（hidden、auto、scroll）。

### 2.BFC 的应用

- 1.清除内部浮动：当内部有浮动元素时，可以设置父元素为BFC，避免高度塌陷。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>BFC Example</title>
    <style>
        .container {
            border: 3px solid red;
            /* 创建BFC */
            /* overflow: auto; */
        }

        .float-box {
            float: left;
            width: 50px;
            height: 50px;
            background-color: blue;
            margin: 5px;
        }
    </style>
</head>

<body>

    <div class="container">
        <div class="float-box"></div>
        <div class="float-box"></div>
    </div>

</body>

</html>
```

- 2.避免外边距合并。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Margin Collapsing Example</title>
    <style>
        .box1 {
            height: 50px;
            background-color: salmon;
            margin-bottom: 20px;
        }

        .box2 {
            height: 50px;
            background-color: lightblue;
            margin-top: 30px;
        }

        .bfc-container {
            overflow: auto;
        }
    </style>
</head>

<body>

    <h3>Without BFC:</h3>
    <div class="box1"></div>
    <div class="box2"></div>

    <h3>With BFC:</h3>
    <div class="bfc-container">
        <div class="box1"></div>
    </div>
    <div class="box2"></div>

</body>

</html>
```

- 3.阻止元素被浮动元素覆盖。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>BFC Float Interaction Example</title>
    <style>
        .float-box {
            float: left;
            width: 100px;
            height: 100px;
            background-color: salmon;
        }

        .normal-box {
            width: 150px;
            height: 150px;
            background-color: lightblue;
            margin-left: 50px;
            /* Intentionally overlap with .float-box without BFC */
        }

        .bfc-box {
            overflow: auto;
            /* This creates a new BFC */
        }
    </style>
</head>

<body>

    <h3>Without BFC:</h3>
    <div class="float-box"></div>
    <div class="normal-box"></div>

    <h3>With BFC:</h3>
    <div class="float-box"></div>
    <div class="normal-box bfc-box"></div>

</body>

</html>
```

## 2.flex:1 ⭐

>当你在一个 flex 容器中的多个子元素上使用 flex: 1 时，这些元素将平均分配容器的空间，不管它们的原始大小如何。

- 定义：flex: 1 是 flex-grow:1, flex-shrink:1, 和 flex-basis:0% 这三个属性的简写。

- 1.flex-grow：定义了在 flex 容器中分配剩余空间的相对比例

- 2.flex-shrink：定义了在flex 容器空间不足时的收缩能力

- 3.flex-basis: 定义了 flex元素在主轴方向上的初始大小

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flex Example</title>
    <style>
        .flex-container {
            display: flex;
            height: 100px;
            border: 2px solid black;
        }

        .flex-item {
            flex: 1;
        }

        /* 下面是可选的，仅用于为每个flex item设置不同的背景色，使它们更容易区分 */
        .flex-item:nth-child(1) {
            background-color: lightblue;
        }

        .flex-item:nth-child(2) {
            background-color: lightcoral;
        }

        .flex-item:nth-child(3) {
            background-color: lightgreen;
        }
    </style>
</head>

<body>

    <div class="flex-container">
        <div class="flex-item">Item 1</div>
        <div class="flex-item">Item 2</div>
        <div class="flex-item">Item 3</div>
    </div>

</body>

</html>
```

## 3.position有哪些属性？

- 1.static（默认值）：没有定位，元素出现在正常的文档流中。不受 top, bottom, left, right 和 z-index 属性影响。

- 2.relative：元素相对于其正常位置进行定位。

- 3.absolute：元素脱离正常文档流，并相对于最近的已定位（非 static）祖先元素进行定位。

- 4.fixed：元素脱离正常文档流，并相对于浏览器窗口进行定位。

## 4.盒模型

- 1.标准盒模型大小：width = width+padding+border，box-sizing:content-box。

- 2.ie盒模型大小：width = width，content = width - padding - border，box-sizing: border-box。

## 5.水平垂直居中

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox Centering Example</title>
    <style>
        .container {
            display: flex;
            justify-content: center;
            /* 水平居中 */
            align-items: center;
            /* 垂直居中 */
            height: 100vh;
            /* 使容器填满整个视口的高度 */
            border: 2px solid black;
            /* 为了更明显地看到居中效果，添加了边框 */
        }

        .centered-item {
            padding: 20px;
            background-color: salmon;
            border: 1px solid darkred;
        }
    </style>
</head>

<body>

    <div class="container">
        <div class="centered-item">我是居中的内容</div>
    </div>

</body>

</html>
```
