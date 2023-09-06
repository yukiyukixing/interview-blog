# JS##

## 1.for in 和 for of 的区别（✔被问到概率很高）

- 1.for...in遍历的是key，而for...of遍历的是value

- 2.for...in可以遍历普通对象，而for...of只能遍历可迭代类型对象

- 3.for...in遍历对象的时候会遍历对象原型链上面的属性。

## 2.ES6有哪些新属性？

- 1.let和const

- 2.Promise

- 3.for...of

- 4.展开语法和对象数组解构

- 5.箭头函数

- 6.函数传默认参数

- 7.Map，Set，WeakMap，WeakSet

- 8.类

- 9.模板字符串

- 10.Proxy

## 3.箭头函数和普通函数的区别？
    
- 1.箭头函数没有自己的this，this来自于执行上下文。

- 2.箭头函数不能用作构造函数，所以它也没有prototype。

- 3.箭头函数没有arguments，不能使用arguments取函数的参数。

## 4.JS数据类型？
    
- 1.原始类型：number、boolean、null、undefined、string、Symbol、BigInt

- 2.引用类型：Object

## 5.Map和Object的区别

[Map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)：

-  键可以是任何类型
-  有序集合（按插入顺序排序）
-  内置方法（如 `get`、`set`、`has`、`delete`）
-  可以轻易地获取大小（`.size`）

[Object](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)：
    
-   键必须是String或Symbol（虽然可以看起来是其他类型，但实际上会被转化为字符串）
-   无序集合
-   没有内置方法来获取大小
-   更适用于作为记录（record）或者字典（dictionary）

>什么情况下用Map，什么情况下用Object？
    
- 1.内存占用：给定固定大小的内存，Map大约可以比Object多存储50%的键值对，这是因为浏览器对Map和Object的内存分配的实现不一样。
    
- 2.增删性能：如果代码涉及到大量插入操作，那么显然Map的性能更佳，同样，如果代码涉及到大量的删除操作，也是Map的性能更佳。

- 3.查找操作，如果代码涉及到大量的查找操作，那么可能Object性能会更优一点。
    
    
## 6.Map和Set
   
**Map**: 存储键-值对。键可以是任何类型（包括对象、函数等）。
    
**[Se](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)t**: 存储唯一值，不允许重复。值可以是任何类型。
    
## 7.Map和WeakMap，WeakMap和WeakSet
    
**Map**:

-   键可以是任何类型
-   键和值都可以被枚举
-   强引用键，即使你删除了对键的引用，它也不会被垃圾回收
    
**[WeakMap](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)**:

-   键必须是对象
-   键和值都不可枚举
-   弱引用键，如果你删除了对键的引用，它就会被垃圾回收

**WeakMap**: 存储键-值对，键必须是对象。
    
**WeakSet**: 存储唯一对象值。
    
## 8.WeakMap用于哪些场景下
    
- 1.缓存和记忆化：WeakMap 可用于缓存已经计算过的结果，以便将来快速检索。由于它是弱引用的，所以当对象不再需要时，它们可以被垃圾收集。
    
```js
        const cache = new WeakMap();
        function expensiveOperation(obj) {
            if (cache.has(obj)) {
                return cache.get(obj);
            }
            const result = /* perform expensive calculation（执行昂贵的计算） */
            cache.set(obj, result);
            return result;
        }
```
    
- 2.关联额外数据：当你想给一个对象（比如网页上的一个按钮或图像）添加一些额外信息，但又不想直接改变这个对象，那么可以用 WeakMap。这样做的好处是，当这个对象不再需要时，它和你添加的额外信息都会自动被清除，不会占用多余的内存。
    
```js
        const domData = new WeakMap();
        // 在某个 DOM 元素上设置数据
        domData.set(document.getElementById('myDiv'), { clicks: 0 });
        // 在事件监听器中更新或读取数据
        document.addEventListener('click', event => {
            const data = domData.get(event.target);
            if (data) {
                data.clicks++;
            }
        });
```


    
## 9.深拷贝，浅拷贝
    
- 1.深浅拷贝是针对引用类型说的，原始类型不存在深浅拷贝。

- 2.然后浅拷贝是复制的是对象的引用，而深拷贝是拷贝了一个完全一模一样的对象。

- 3.浅拷贝的方式：1.Object.assign() 2.展开运算符 3.循环遍历

- 4.深拷贝的方式：1.JSON.parse(JSON.stringify(obj)) 2.递归 3.jquery的$.extend()方法 4.lodash中的_.defaultsDeep()方法。

>tips: 利用JSON.stringify()的缺陷，处理不了function对象、undefined以及symbol类型，原因是JSON.stringify()在处理这些类型，这些类型会被忽略，不会被处理。并且JSON.stringify()也解决不了循环引用的问题，例如下面这个代码是会报错的，会报Converting circular structure to JSON，也就是将循环结构转换成JSON

```js
        const obj = {
            quote: null
        }
        obj.quote = obj
        JSON.parse(JSON.stringify(obj))
```
    
[JS基础之深浅拷贝](https://juejin.cn/post/6908309980206759943)
    
>深拷贝怎么解决循环引用？

解决循环引用问题，你通常需要维护一个“已访问”的对象列表。当你试图拷贝一个对象时，你首先检查这个对象是否已经被拷贝过了。如果是，你直接返回之前拷贝过的新对象的引用，而不是重新拷贝它。
    
```js
        const obj = {
            quote: null
        }
        obj.quote = obj;
        function deepCopy(obj, visited = new Map()) {
            // 基础类型或 null，直接返回
            if (obj === null || typeof obj !== 'object') {
                return obj
            }
            // 检查是否循环引用
            if (visited.has(obj)) {
                return visited.get(obj)
            }
            // 对于数组或对象，创建一个新的空数组或对象
            const copy = Array.isArray(obj) ? [] : {};
            // 将当前正在拷贝的对象加入已访问列表
            visited.set(obj, copy);
            // 递归拷贝所有属性
            for (const key in obj) {
                if (Object.hasOwnProperty.call(obj, key)) {
                    copy[key] = deepCopy(obj[key], visited);
                }
            }
            return copy
        }
        console.log(deepCopy(obj));
```
      
## 10.浏览器事件机制？
    
- 1.事件委托基于事件冒泡的原理，允许我们不直接绑定事件处理程序到每个单独的元素，而是绑定到一个共同的父元素。当该父元素的子元素触发了特定的事件时，事件处理程序会被执行。

事件委托的好处：

- 1.性能优化: 当你有大量的子元素需要相同的事件处理时，使用事件委托可以减少事件处理程序的数量，从而提高性能。
  
- 2.动态元素: 对于在后期通过JavaScript动态添加到DOM的元素，你不需要为它们单独绑定事件。因为它们自然会继承父元素的事件处理。

## 7.防抖、节流

- 1.防抖：当你使用防抖时，如果连续触发函数，它会延迟执行直到一段时间没有再次触发。也就是说只有在你停止触发函数一段时间后，函数才会执行。

应用场景:
    
- 搜索框文本输入。当用户停止输入后，才发送请求进行搜索。
- 窗口调整大小。当用户停止调整窗口大小时，才重新计算布局。

```js
        function debounce(fn, delay) {
            let timer;
            return function () {
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout((...args) => {
                    fn.apply(this, args);
                }, delay)
            }
        }  
```
    
- 2.节流：节流确保一个函数在指定的时间间隔内只执行一次，即使在这段时间内触发多次。

应用场景:
    
- 滚动事件。例如，在用户滚动时定期检查页面的位置，而不是每次滚动都检查。


```js
        function throttle(fn, delay) {
            let timer;
            return function () {
                if (timer) {
                    return
                }
                timer = setTimeout((...args) => {
                    fn.apply(this, args);
                    timer = null;
                }, delay);
            }
        }
```

区别：

-  防抖: 保证在一系列连续的函数触发后，只执行一次。
-  节流: 保证在一段时间内，函数只执行一次。

## 8.重绘、重排的区别？

- 1.重绘不会导致页面重新渲染。

- 2.回流(重排)会导致页面重新渲染。

>哪些操作会导致重绘操作？哪些操作会导致回流（重排）操作？

- 1.会导致重绘的操作，color，background，visibility等这些属性的改变会导致重绘。

- 2.导致重排的操作，添加/删除可见的dom元素，改变元素位置，改变浏览器窗口尺寸等等，display，padding，margin，postion等等。

- 3.重排优化：1.不要频繁操作样式。2.使用absolute和fixed脱离正常文档流 3.优化动画，可以把动画加在使用absolute和fixed的元素上。


## 9.展开语法和解构语法

展开语法：主要用于“展开”数组或对象。
 
解构赋值：主要用于从数组或对象中“提取”值或属性，并赋值给新的变量。

## 10.export default和export的区别？

- 1.export可以直接导出表达式，而export default不行。

- 2.export导出的，在导入的时候需要加入{}进行导入，而export default则不需要。

- 3.在一个文件模块中，export可以有多个，而export default只有一个。

## 11.let、var、const的区别
    
1.let不能重复定义变量，而var可以

2.var存在变量提升，可在声明前使用变量，而let由于存在暂时性死区不能在声明变量前使用

3.var声明的变量会挂载到window下面，而let不会挂到window下面，而是形成一个块级作用域。

4.const定义的是常量，定义之后就不可更改，而且初始化的时候必须赋值，其他和let一样。

## 12.闭包
    
闭包的作用，可以访问函数内部变量，可以让变量一直存在于内存中不被回收。

## 13.事件循环（Event Loop）
    
首先，因为JS是单线程执行的，所以它一次只能执行一个任务。然后就有了事件循环，事件循环是JS在浏览器和Node中用来处理异步操作的机制。
    
主线程首先执行所有的同步代码。当同步代码执行完成后，它会查看任务队列以查找有无等待的回调函数。如果任务队列中有回调函数，主线程会从队列中取出并执行它。这个过程是循环的，因此称为“事件循环”。

## 14.说一下ES6中的Proxy？
    
Proxy用于创建一个对象的代理，从而实现对对象的基本的拦截和自定义。

## 15.原型和原型链

## 16.promise

1、概念：Promise 对象用于表示一个异步操作的最终完成 (或失败)及其结果值。

2、状态：大致分为三种状态。

①：pending：未决定的

②、resolved / fullfilled：成功

③、rejected：失败

状态的改变：pending -》 resolved

pending -》 rejected

3、解决了什么问题？

①、支持链式调用，解决了回掉地狱的问题。
    
## 17.call，bind，apply

`call` 使用参数列表，`apply` 使用参数数组，而 `bind` 可以接受两者。
    
使用 `call` 或 `apply` 当你需要立即执行函数，并改变 `this` 上下文。 
    
使用 `bind` 当你需要稍后执行函数，并希望该函数在执行时具有特定的 `this` 上下文。
 
## 18.怎么实现一个迭代器？

>普通对象不是可迭代类型对象，可迭代类型对象需要实现 Symbol.iterator 方法。
    
## 20.js中哪些情况会造成内存泄漏？
    
1.闭包使用不当可能会导致内存泄漏。

2.Dom对象内存泄漏。

3.使用setTimeout和setInterval没有及时销毁。

4.隐式声明的全局变量。
    
## 21.webworker
    
1.同源限制：分配给worker线程运行的脚本文件，必须与主线程的脚本文件同源

2.DOM限制：worker线程不可以操作dom

3.文件限制：worker线程无法读取本地文件

4.通信限制：如果需要访问上下文环境需要通过消息去完成postMessage/onmessage

5.脚本限制：不能用alert和confirm，可以发送ajax请求
    
## 22.函数柯里化
    
柯里化是指将多个参数的函数转换成一系列使用一个参数的函数。
    

```js
   
```
    
## 23.写出new的执行过程，并自己实现一个new函数？
    
1.创建一个空的JavaScript对象（即{}）；

2.链接该对象（设置该对象的constructor）到另一个对象；

3.将步骤1新创建的对象作为this的上下文；

4.如果该函数没有返回对象，则返回this。    
    
## 24.什么是事件委托和事件冒泡
    
事件冒泡：在一个对象上触发某类事件（比如单击onclick事件），如果此对象定义了此事件的处理程序，那么此事件就会调用这个处理程序，如果没有定义此事件处理程序或者事件返回true，那么这个事件会向这个对象的父级对象传播，从里到外，直至它被处理（父级对象所有同类事件都将被激活），或者它到达了对象层次的最顶层，即document对象（有些浏览器是window）。

事件委托：就是利用冒泡的原理，把事件加到父级上，通过判断事件来源的子集，执行相应的操作，事件委托首先可以极大减少事件绑定次数，提高性能；其次可以让新加入的子元素也可以拥有相同的操作。  

## 25.requestAnimationFrame
    
## 26.Promise.all实现思路
    
1.首先返回的是一个new Promise
    
2.判断一下输入是不是数组，不是数组直接reject
    
3.是的话创建一个跟输入数组长度相同的空数组，用于保存最终结果
    
4.定义一个计数器，成功一个就+1 
    
5.遍历并创建新的Promise实例Promise.resolve,成功的话就将结果push到定义的空数组中，当计数器等于输入的数组大小时，将结果数组resolve出去
 
## 27.Promise.race实现思路    
    
1.首先返回的是一个new Promise
    
2.判断一下输入是不是数组，不是数组直接reject  

3.遍历所有promise
    
4.Promise.resolve(promise) 然后直接reslove或者reject
