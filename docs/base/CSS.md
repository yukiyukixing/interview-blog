# 2.CSS

## 1.BFC ⭐

- BFC：块级格式上下文

（1）创建 BFC 的条件：

- 1.position设置为absolute和fixed。

- 2.float不为none。

- 3.display为inline-block或fixed。

- 4.overflow不为visible

（2）应用：

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

- 定义：flex: 1 是 flex-grow:1, flex-shrink:2, 和 flex-basis:0% 这三个属性的简写。

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

## 3.盒模型

- 1.标准盒模型大小：width+padding+border，box-sizing默认值content-box是标准盒模型。

- 2.ie盒模型大小：width，content = width - padding - border，box-sizing: border-box

## 4.水平垂直居中

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
