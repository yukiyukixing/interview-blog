# 2.CSS

## 1.BFC

BFC（Block Formatting Context，块级格式化上下文）是 Web 页面的可视化 CSS 渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。

### 创建 BFC 的条件

>块级格式上下文，块盒子布局过程中发生的区域，也是浮动元素与其他元素发生交互的区域。

>创建BFC的情况。

>1.根元素。

>2.position设置未absolute和fixed。

>3.float元素设置为非none。

>4.display的inline-block和fixed。

>5.overflow设置为非visible。

>应用：1.解决margin会导致的外边距塌陷问题。2.清除浮动。3.阻止元素被浮动元素覆盖。

## 2.水平垂直居中？

## 3.flex属性？flex:1

## 4.上下固定，中间自适应布局。
## 5.外边距折叠问题

>如果有2个外边距相接的元素，都分别设置外边距的话，那么两个外边距将合并为一个外边距，即取最大的单个外边距大小。

## 6.CSS盒模型

>1.css盒模型的组成：content，padding，border，margin。

>2.标准盒模型：标准盒模型的宽度为with+padding+border。

>3.IE盒模型：设置的content就是盒模型的大小。

>也就是说盒模型的大小并不等于width，而标准盒模型的大小是width+padding+border，而IE盒模型的大小就是with，而content等于width-padding-border。

>首先，盒模型由4部分组成，从内到外分别是content，padding，border，margin。然后盒模型的大小其实也是由content，padding，border来决定的，标准盒模型大小等于width+padding+border，例如设置width为100，padding为10，border为10，那么这个盒模型的大小为140，如果是IE盒模型设置width为100，那么这个盒模型的大小就为100，且content等于100-40=60。也就是说标准盒模型content等于width，ie盒模型，content等width-padding-border。然后我们可以去通过box-sizing属性切换标准盒模型和ie盒模型，box-sizing默认是标准盒模型，content-box，ie盒模型值是border-box。
