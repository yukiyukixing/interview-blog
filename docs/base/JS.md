# 1.JS

## 1.事件循环（Event Loop） ⭐

### 浏览器中的事件循环（Event Loop）

- 1.定义：因为JS是单线程执行的，所以它一次只能执行一个任务，如果这个任务时间过长就会造成阻塞，所以JS需要一个异步执行代码的机制，然后就有了事件循环的机制。主线程首先从上到下将JS代码放到执行栈中执行，当执行到异步代码的时候，会将这部分要执行的代码放到异步的任务队列里面，如果是宏任务，就会放到宏任务队列里，如果是微任务，就会放到微任务队列里。当同步代码执行完成后，这时候执行栈为空，js引擎会先查看当前微任务队列里面有没有要执行的任务，如果有的话一个一个的拿出来放到执行栈中执行，执行完看当前宏任务队列里面有没有要执行的任务，有的话也一个一个的拿出来放到执行栈中执行，执行完开始执行下一个宏任务代码。这个过程是循环的，因此称为“事件循环”。

- 2.宏任务包含哪些

- （1）整个script标签里的代码块

- （2）setTimeout

- （3）setInterval

- （4）I/O操作（输入/输出）

- （5）UI渲染

- 3.微任务

- （1）Promise.then catch

## 2.深拷贝，浅拷贝 ⭐
    
- 1.深浅拷贝是针对引用类型说的，原始类型不存在深浅拷贝。

- 2.然后浅拷贝是复制的是对象的引用，而深拷贝是拷贝了一个完全一模一样的对象。

- 3.浅拷贝的方式：1.Object.assign() 2.展开运算符 3.循环遍历

- 4.深拷贝的方式：1.JSON.parse(JSON.stringify(obj)) 2.递归 3.lodash中的_.defaultsDeep()方法。

>tips: JSON.stringify()的缺陷，处理不了function对象、undefined以及symbol类型，原因是JSON.stringify()在处理这些类型，这些类型会被忽略，不会被处理。并且JSON.stringify()也解决不了循环引用的问题。

>深拷贝怎么解决循环引用？

解决循环引用问题，你通常需要维护一个“已访问”的对象列表。当你试图拷贝一个对象时，你首先检查这个对象是否已经被拷贝过了。如果是，你直接返回之前拷贝过的新对象的引用，不需要重新拷贝它。
    
```js
        const obj = {
            quote: null
        }
        obj.quote = obj;
        function deepCopy(obj, visited = new Map()) {
            // 基础类型或 null，直接返回
            if (!obj || typeof obj !== 'object') {
                return obj
            }
            // 检查是否循环引用
            if (visited.has(obj)) {
                return visited.get(obj)
            }
            // 对于数组或对象，创建一个新的空数组或对象
            const copyObj = Array.isArray(obj) ? [] : {};
            // 将当前正在拷贝的对象加入已访问列表
            visited.set(obj, copyObj);
            // 递归拷贝所有属性
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    copyObj[key] = deepCopy(obj[key], visited);
                }
            }
            return copyObj
        }
        console.log(deepCopy(obj));
```

## 3.防抖、节流 ⭐

- 1.防抖：函数被触发n秒之后再执行，如果在这n秒内函数被再次触发，则重新计时。

应用场景:
    
- 搜索框文本输入。当用户停止输入一段时间后，才发送请求进行搜索。
- 窗口调整大小。当用户停止调整窗口大小一段时间后，才重新计算布局。(注：这个场景根据需求来，使用防抖和节流理论上都是可以的，看你的需求是什么。)

```js
function debounce(fn, delay) {
    let timer = null;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay)
    }
}
```

- 2.节流：节流确保一个函数在指定的时间间隔内只执行一次，即使在这段时间内触发多次。

应用场景:
    
- 滚动事件。例如，在用户滚动时定期检查页面的位置，而不是每次滚动都检查。
- 窗口调整大小。间隔一段时间更新一次，让你在调整的过程中能看到布局的变化。

```js
function throttle(fn, delay) {
    let lastCall = 0
    return function (...args) {
        const now = new Date().getTime()
        if (now - lastCall >= delay) {
            lastCall = now
            fn.apply(this,args)
        }
    }
}
```

## 4.原型和原型链 ⭐

- 1.原型的定义：每一个除了null之外的JS对象在创建的时候都会与之关联另一个对象，这个对象就是它的原型。并且可以从这个对象继承属性和方法。

- 2.原型链定义：当你试图访问一个对象的属性时，JS会首先在对象本身查找，如果没有找到，则会继续在该对象的原型上查找，然后就是原型的原型，以此类推。这样构成的一条链路我们称之为原型链。

- 3.对象原型：JS中所有对象的原型最终都会指向 `Object.prototype`，而 `Object.prototype` 的原型等于 `null`。

- 4.函数原型：当函数作为对象时，它的原型是 `__proto__`，最终指向都是 `Function.prototype`。当函数作为构造函数时，它的原型是 `prototype`。

## 5.requestAnimationFrame ⭐

- 1.作用：requestAnimationFrame告诉浏览器你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。

- 2.性能：
 
（1）因为requestAnimationFrame的执行时机是在每次重绘之前，所以会减少不必要的帧和重绘，并且它也会尽量的跟浏览器的刷新率同步，通常是60帧/秒。

（2）当页面标签切换后或页面不可见时，requestAnimationFrame会被暂停，以提升性能。

## 6.for in 和 for of 的区别 ⭐ 

- 1.for...in遍历的是key，而for...of遍历的是value

- 2.for...in可以遍历普通对象，而for...of只能遍历可迭代类型对象

- 3.for...in遍历对象的时候会遍历对象原型链上面的属性。

- 4.for...in一般被用来遍历对象，for...of一般被用来遍历数组。

- 5.for...in迭代对象的顺序是不确定的。

>tips：hasOwnProperty()方法可以判断属性是否是属于对象本身，属于的话为true，不属于为false。

## 7.箭头函数和普通函数的区别？ ⭐

- 1.箭头函数没有自己的this，this来自于执行上下文。

- 2.箭头函数不能用作构造函数，所以它也没有prototype。

- 3.箭头函数没有arguments，不能使用arguments取函数的参数。

## 8.写出new的执行过程，并自己实现一个new函数？ ⭐

- 定义：new运算符可以用来创建一个新的对象实例。

>new关键字的执行过程：

- 1.创建一个空的JS对象（即{}）

- 2.将新创建的对象的原型链接到构造函数的原型，确保新对象可以继承构造函数原型上的方法和属性

- 3.将新创建的对象作为this的上下文

- 4.如果该函数没有返回对象，则返回新创建的对象

>手写一个new：

```js
function myNew(fn, ...args) {
    const obj = {}
    obj.__proto__ = fn.prototype
    const res = fn.apply(obj, args)
    return res instanceof Object ? res : obj
}
```

## 9.instanceof

>instanceof运算符用来检测某个构造函数的原型是否在某个对象实例的原型链上。

>手写一个instanceof？

```js
function myInstanceof(obj, fn) {
    let left = obj.__proto__, right = fn.prototype
    while (left) {
        if (left === right) {
            return true
        } else {
            left = left.__proto__
        }
    }
    return false
}
```

## 10.Promise ⭐

- 1.什么是Promise? ⭐

JS中的Promise是一种用于处理异步操作的机制，可以更好的处理回调地狱问题。

>回调地狱：在异步编程中，多层嵌套的回调函数导致代码变得难以阅读和维护的情况。这种情况通常发生在处理多个异步操作，每个操作都依赖于前一个操作的结果时，代码中充斥着大量的回调函数。

- 2.Promise的三种状态 ⭐

（1）pending：待定

（2）fulfilled：已兑现

（3）rejected：已拒绝

- 3.Prmise的3个实例方法 ⭐

（1）then：当Promise返回的状态为成功时要执行的回调函数。

（2）catch：当Promise返回的状态为失败时要执行的回调函数。

（3）finally：当Promise返回的状态不管是成功还是失败时要执行的回调函数。

- 4.Promise常用的6个静态方法 ⭐

| 序号 | 方法名称 | 定义 |
| :----: |:----: |:----: |
| 1 | Promise.resolve() | 创建一个立即成功的 Promise 对象，其结果就是你给它的值。 |
| 2 | Promise.reject() | 创建一个立即失败的 Promise 对象，其拒绝原因就是你指定的值。 |
| 3 | Promise.all() | 接收一个 Promise 对象数组，等对象数组中的Promise全部都成功解决后，返回一个包含所有成功结果的数组，按照输入的顺序排列。 |
| 4 | Promise.race() | 接收一个 Promise 对象数组，立即返回第一个解决的结果，不论结果是成功还是失败。 |
| 5 | Promise.allSettled() | 接收一个Promise对象数组，等对象数组中的Promise全部都解决后，不论结果是成功还是失败都会全部返回，返回一个包含所有结果的数组，按照输入的顺序排列。 |
| 6 | Promise.any() | 接收一个Promise对象数组，立即返回第一个成功解决的结果。如果全部失败，返回一个被拒绝的带有拒绝原因的数组。 |

- 5.手写一个Promise.all ⭐

```js
function promiseAll(promiseArr) {
    return new Promise((resolve, reject) => {
        const res = [], len = promiseArr.length
        let count = 0
        for (let i = 0; i < len; i++) {
            Promise.resolve(promiseArr[i]).then(val => {
                res[i] = val
                count++
                if (count === len) {
                    resolve(res)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}
```

- 6.手写一个Promise.race ⭐

```js
function promiseRace(promiseArr) {
    return new Promise((resovle, reject) => {
        const len = promiseArr.length
        if (len === 0) return;
        for (let promiseItem of promiseArr) {
            Promise.resolve(promiseItem).then(resovle, reject)
        }
    })
}
```

- 7.手写一个Promise.any ⭐

```js
function promiseAny(promiseArr) {
    return new Promise((resolve, reject) => {
        const errors = [], len = promiseArr.length
        let count = 0;
        for (let i = 0; i < len; i++) {
            Promise.resolve(promiseArr[i]).then(val => {
                resolve(val)
            }).catch(err => {
                errors[i] = err
                count++
                if (count === len) {
                    reject(new AggregateError(errors, '所有的Promise都被拒绝'))
                }
            })
        }
    })
}
```

## 11.async/await ⭐

- 1.定义：**async/await** 是JS中处理异步操作的一种语法，是基于 **Promise** 的一种更简洁、更易读的方式。这种语法让异步代码看起来和写起来更像同步代码，从而减少了代码的复杂性。

- 2.async 关键字

-   **定义**：**async** 是一个放在函数定义前的关键字，它使得函数总是返回一个 **Promise**。如果函数返回的不是 **Promise**，该返回值将被自动包装在一个 **Promise** 中。

-   **用法**：当你在一个函数声明前加上 **async**，这个函数就成为了一个异步函数。

- 3.await 关键字

-   **定义**：**await** 只能在 **async** 函数内部使用。它会暂停异步函数的执行，等待 **Promise** 的解决（fulfill）或拒绝（reject），然后继续异步函数的执行并返回解决结果。

-   **用法**：**await** 后面通常跟着一个 **Promise**。它使得代码等待直到 **Promise** 解决，并返回结果。

- 4.async/await优点

- 1.**代码可读性**：使得异步代码更容易阅读和理解。

- 2.**错误处理**：可以使用传统的 `try/catch` 块来捕获错误。

- 3.**减少回调函数**：避免了 Promise 链中嵌套 `.then()` 和 `.catch()` 方法的需要。

## 12.函数柯里化 ⭐
    
>将多个参数的一个函数转换成使用一系列一个参数的函数。

>也就是将fn(1,2,3,4)转换成fn(1)(2)(3)(4)

```js
function curry(fn) {
    return function curryFn(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args)
        } else {
            return function (...newArgs) {
                return curryFn.apply(this, args.concat(newArgs))
            }
        }
    }
}
```

>柯里化的好处：延迟执行，提前返回。

## 12.设计模式 ⭐

- 1.单例模式：保证一个类仅有一个实例，并提供一个访问它的全局访问点。

```js
class Singleton {
  constructor() {
    if (!Singleton.instacne) {
      Singleton.instacne = this
    }
    return Singleton.instacne
  }
}
```

- 2.观察者模式：也被称为发布/订阅模式。在这种模式中，一个对象（发布者）维护一系列依赖于它的对象（观察者），并在任何状态更改时自动通知它们。

```js
class Observer {
    constructor() {
        this.listeners = []
    }

    on(listener) {
        this.listeners.push(listener)
    }
    emit(data) {
        this.listeners.forEach(listener => listener(data))
    }
}
const obs = new Observer();
obs.subscribe(data => console.log("Listener 1: " + data));
obs.subscribe(data => console.log("Listener 2: " + data));
obs.notify("Hello World!");
```

- 3.工厂模式：这种模式用于创建对象，让子类决定实例化哪一个类。它提供了一个创建对象的接口，但允许子类更改将要实例化的类。

- 4.原型模式：JS是基于原型的语言，所以这种模式在语言核心中已经内建。它允许你复制或克隆对象，而不是每次都从零开始创建。

## 13.实现一个发布订阅系统 ⭐

```js
class EventBus {
  constructor() {
    this.subscribes = {}
  }

  subscribe(event, callback) {
    if (!this.subscribes[event]) {
      this.subscribes[event] = []
    }
    this.subscribes[event].push(callback)
  }

  unsubscribe(event, callback) {
    if (!this.subscribes[event]) return
    const index = this.subscribes[event].indexOf(callback)
    this.subscribes[event].splice(index, 1)
  }

  publish(event, data) {
    this.subscribes[event].forEach(item => {
      item(data)
    })
  }
}
const eventBus = new EventBus()
function callback(data) {
  console.log(`收到的数据为：${data}`);
}
eventBus.subscribe('event', callback)
eventBus.publish('event', 'Hello')
```

## 14.call，bind，apply，apply和call哪个性能更好？
 
- 1.call、apply、bind都可以改变函数内部this的指向。

- 2.bind返回的是一个函数，call和apply返回的是值。

- 3.bind和call的第二参数都是接收的一个参数列表，而apply的第二个参数接收的是一个数组。

- 4.call的性能比apply的性能更好。

```js
// 1.手写bind
Function.prototype.myBind = function (obj = window, ...args1) {
  const that = this
  return function (...args2) {
    if (new.target) {
      return new that(...args1, ...args2)
    } else {
      return that.apply(obj, [...args1, ...args2])
    }
  }
}
```

```js
// 手写call
Function.prototype.myCall = function (obj = window, ...args) {
  obj.fn = this
  const res = obj.fn(...args)
  delete obj.fn
  return res
}
```

```javascript
// 手写apply
Function.prototype.myApply = function (obj = window, args) {
  obj.fn = this
  const res = obj.fn(...args)
  delete obj.fn
  return res
}
```

## 15.ES6有哪些新属性？

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

## 16.let、var、const的区别
    
1.let不能重复定义变量，而var可以

2.var存在变量提升，可在声明前使用变量，而let由于存在暂时性死区不能在声明变量前使用

3.var声明的变量会挂载到window下面，而let不会挂到window下面，而是形成一个块级作用域。

4.const定义的是常量，定义之后就不可更改，而且初始化的时候必须赋值，其他和let一样。

## 17.JS数据类型
    
- 1.原始类型：number、boolean、null、undefined、string、Symbol、BigInt

- 2.引用类型：Object

## 18.Map和Object的区别

Map：

-  键可以是任何类型
-  有序集合（按插入顺序排序）
-  内置方法（如 `get`、`set`、`has`、`delete`）
-  可以轻易地获取大小（`.size`）

Object：
    
-   键必须是String或Symbol（虽然可以看起来是其他类型，但实际上会被转化为字符串）
-   无序集合
-   没有内置方法来获取大小
-   更适用于作为记录（record）或者字典（dictionary）

>什么情况下用Map，什么情况下用Object？
    
- 1.增删性能：如果代码涉及到大量插入操作，那么显然Map的性能更佳，同样，如果代码涉及到大量的删除操作，也是Map的性能更佳。

- 2.查找操作，如果代码涉及到大量的查找操作，那么可能Object性能会更优一点。
    
## 19.Map和Set
   
- Map: 存储键-值对。键可以是任何类型（包括对象、函数等）。
    
- Set: 存储唯一值，不允许重复。值可以是任何类型。
    
## 20.Map和WeakMap，WeakMap和WeakSet
    
Map:

-   键可以是任何类型
-   键和值都可以被枚举
-   强引用键，即使你删除了对键的引用，它也不会被垃圾回收
    
WeakMap:

-   键必须是对象
-   键和值都不可枚举
-   弱引用键，如果你删除了对键的引用，它就会被垃圾回收

WeakMap: 存储键-值对，键必须是对象。
    
WeakSet: 存储唯一对象值。
    
## 21.WeakMap用于哪些场景下
    
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

## 22.重绘、重排的区别？

- 1.重绘不会导致页面重新渲染。

- 2.回流(重排)会导致页面重新渲染。

>哪些操作会导致重绘操作？哪些操作会导致回流（重排）操作？

- 1.会导致重绘的操作，color，background，visibility等这些属性的改变会导致重绘。

- 2.导致重排的操作，添加/删除可见的dom元素，改变元素位置，改变浏览器窗口尺寸等等，display，padding，margin，postion等等。

- 3.重排优化：

1.不要频繁操作样式。

2.使用absolute和fixed脱离正常文档流 

3.优化动画，可以把动画加在使用absolute和fixed的元素上。

## 23.export default和export的区别？

- 1.export可以直接导出表达式，而export default不行。

- 2.export导出的，在导入的时候需要加入{}进行导入，而export default则不需要。

- 3.在一个文件模块中，export可以有多个，而export default只有一个。

## 24.闭包

- 1.定义：函数和与其相关的引用环境的组合就是闭包。

- 2.创建：当一个内部函数在一个外部函数里被定义，并且内部函数引用了外部函数的变量或参数，那么闭包就被创建了。

- 3.不会被垃圾回收：在外部函数执行完毕之后，内部函数中引用的变量或参数不会被回收。

- 4.闭包的作用：

- 数据封装和私有变量：闭包可以用来模拟私有变量，提供公开的API而隐藏内部实现细节。

```js
function createCounter() {
  let count = 0; // 私有变量

  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter(); // 创建一个新的计数器

console.log(counter.getCount()); // 输出 0，通过API获取count的值
counter.increment(); // 通过API增加count
console.log(counter.getCount()); // 输出 1
counter.decrement(); // 通过API减少count
console.log(counter.getCount()); // 输出 0

console.log(counter.count); // 输出 undefined，因为count是私有变量，无法直接访问
```

>在这个例子中，createCounter 函数返回一个包含三个方法的对象（increment, decrement, 和 getCount）。这些方法都有权访问createCounter 的局部变量count，但是从外部是无法直接访问 count 的。这样，count 就成了一个私有变量，只能通过提供的API来进行操作。

>这种方式提供了一种封装内部实现细节的机制，你可以自由地改变内部的实现而不影响到外部代码，增加了代码的可维护性和安全性。

- 动态生成函数：根据不同的参数或条件生成具有特定行为的函数。

```js
function greeting(language) {
  return function(name) {
    if (language === 'English') {
      return `Hello, ${name}!`;
    }
    if (language === 'Spanish') {
      return `Hola, ${name}!`;
    }
    if (language === 'Chinese') {
      return `你好, ${name}！`;
    }
    return `Hi, ${name}!`;
  };
}

const greetInEnglish = greeting('English');
const greetInSpanish = greeting('Spanish');
const greetInChinese = greeting('Chinese');

console.log(greetInEnglish('John')); // 输出 "Hello, John!"
console.log(greetInSpanish('Juan')); // 输出 "Hola, Juan!"
console.log(greetInChinese('张三')); // 输出 "你好, 张三！"
```

>在这个例子中，greeting 函数接收一个language 参数，并返回一个新的函数。这个新函数根据传入的language 参数来决定如何生成问候语。

>返回的函数（闭包）有权访问greeting 函数的language 参数，即使greeting 函数的执行上下文已经被销毁。这就是闭包的魔力所在。

>通过这样的方式，你可以创建一个非常灵活和可配置的函数，用于处理各种不同的场景和需求。

- 函数柯里化：使用闭包逐步传递少量参数。

```js
// 普通的加法函数
function add(a, b) {
  return a + b;
}

// 柯里化的加法函数
function curriedAdd(a) {
  return function(b) {
    return a + b;
  };
}

// 使用
const addFive = curriedAdd(5); // 此时，addFive 是一个闭包，保存了 a 的值为 5
console.log(addFive(3)); // 输出 8（5 + 3）
console.log(addFive(4)); // 输出 9（5 + 4）
```

>在上面的例子中，curriedAdd 函数接受一个参数 a，然后返回一个新的函数，这个新函数期望接受第二个参数 b。这里就产生了一个闭包，因为返回的函数能够“记住”第一个参数 a。

>通过使用闭包和柯里化，你可以编写更灵活、更可复用的代码。这也是函数式编程中的一种常见模式。

- 5.注意事项：

- 闭包使用不当会导致内存泄漏

- 过度使用闭包会导致代码难以理解和维护

## 25.说一下ES6中的Proxy？

>Proxy对象用于创建一个对象的代理，从而实现基本的拦截和自定义（属性查找，赋值，枚举，函数调用等）。

>语法：

```js
let p = new Proxy(target,handler);
```

>参数：target：要使用Proxy包装的目标对象。handler：一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行操作时代理p的行为。

>Proxy本质上是一个构造函数。

>Proxy.revocable()用来创建一个可撤销的Proxy对象，撤销方法revoke()。

>Proxy作用：用于拦截和自定义对象的一些操作。

- 总结：Proxy对象用于创建一个对象的代理，从而实现对对象的一些操作，例如拦截和自定义。Vue3中就使用了Proxy代替了Vue2中的Object.defineProperty。
    
## 26.js中哪些情况会造成内存泄漏？
    
1.闭包使用不当可能会导致内存泄漏。

2.Dom对象内存泄漏。

3.使用setTimeout和setInterval没有及时销毁。

4.隐式声明的全局变量。

## 27.什么是事件委托和事件冒泡
    
事件冒泡：在一个对象上触发某类事件（比如单击onclick事件），如果此对象定义了此事件的处理程序，那么此事件就会调用这个处理程序，如果没有定义此事件处理程序或者事件返回true，那么这个事件会向这个对象的父级对象传播，从里到外，直至它被处理（父级对象所有同类事件都将被激活），或者它到达了对象层次的最顶层，即document对象（有些浏览器是window）。

事件委托：就是利用冒泡的原理，把事件加到父级上，通过判断事件来源的子集，执行相应的操作，事件委托首先可以极大减少事件绑定次数，提高性能；其次可以让新加入的子元素也可以拥有相同的操作。  

## 28.说一说JS数组中的方法？

>总共31个。

- 1.增删：push()、pop()、shift()、unshift()

- 2.遍历：forEach()、reduce()、reduceRight()、some()、every()、filter()、map()

- 3.查：indexOf()、lastIndexOf()、includes()、find()、findIndex()

- 4.排序：sort()、reverse()

- 5.合并：concat()、join()

- 6.拆分：splice()、slice()

- 7.填充：fill()、copyWithin()

- 8.迭代：keys()、values()、entries()

- 9.转换方法：toString()、toLoacaleString()

- 10.扁平化方法：flat()、flatMap()

## 29.ES Module、CommonJS

- 1.语法：CommonJS 使用 `require` 和 `module.exports`，而 ESM 使用 `import` 和 `export`。

- 2.运行时 vs 编译时：CommonJS 是运行时执行，而 ESM 是编译时执行。

- 3.动态 vs 静态：CommonJS 可以动态加载模块，而 ESM 是静态的。

- 4.适用场景：CommonJS 主要用于服务器端（Node.js），而 ESM 主要用于浏览器，但现在 Node.js 也越来越支持 ESM。

## 30.map 和 forEach的区别

- 1.map返回一个新数组，forEach不返回任何值。

## 31.数组去重，数组对象去重。

>1.new Set()

>2.双循环。

>3.利用indexOf。

>采用fiter，map，reduce等方法。

## 32.用Promise实现一个延时？

```js
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time))
}
delay(3000).then(() => {
  console.log('3秒后触发');
})
```

## 33.写一个ES5的继承？

```js
        // 1.原型链继承
        function A() { }
        function B() { }
        B.prototype = new A();
```

>缺点：引用类型所有属性被实例共享。

```javascript
        // 2.盗用构造函数继承
        function A() { }
        function B() {
            A.call(this);
        }
```

>方法都在构造函数中定义，每次创建实例都会创建一遍方法。

```javascript
        // 3.组合继承
        function A() { }
        function B() {
            A.call(this);
        }
        B.prototype = new A();
```

>融合了上面2种模式的优点，是JS种最常用的继承方式。

```javascript
        // 4.原型式继承
        function A(o) {
            function F() { }
            F.prototype = o;
            return new F();
        }
```

>所有实例会共享引用类型属性

```javascript
        // 5.寄生式继承
        function A(o) {
            const clone = Object.create(o);
            clone.sayName = function () {
                console.log('小王');
            }
            return clone;
        }
```

>缺点：每次创建实例的时候，方法都会被重新创建一遍。

```javascript
        // 6.寄生式组合继承
        function object(o) {
            function F() { };
            F.prototype = 0;
            return new F();
        }
        function inheritPrototype(B, A) {
            const prototype = object(A.prototype);
            prototype.constructor = B;
            B.prototype = prototype;
        }
        function A() { }
        function B() {
            A.call(this);
        }
        inheritPrototype(B, A);
```

>引用类型最佳的继承范式

## 34.作用域

>什么是作用域？作用域就是变量，函数可访问的范围。

>什么是作用域链？js引擎在运行的时候，查找变量的时候会从当前执行作用域逐级向外查找，形成一条链状结构，就是作用域链。

>切换作用域是消耗性能的。

## 35.JS中this的指向

1.一般情况下，this是指向调用者。如果在全局调用那就是指向window。

2.使用new的时候，this指向创建的对象。

3.箭头函数中的this来自于上下文。

4.在使用call和apply以及bind的时候绑定到指定的对象。

## 36.跨域

## 37.Web Workers

>Web Workers通信最后处理完的数据是什么（序列化的）？哪些数据不能传？（dom，对象等）

>webworker中为什么能提升js执行的性能？

>你是怎么使用webworker的？
