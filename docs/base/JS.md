# 1.JS

## 1.浏览器中的事件循环（Event Loop） ⭐

- 1.定义：因为JS是单线程执行的，所以它一次只能执行一个任务，如果这个任务时间过长就会造成阻塞，所以JS需要一个异步执行代码的机制，然后就有了事件循环的机制。主线程首先从上到下将JS代码放到执行栈中执行，当执行到异步代码的时候，会将这部分要执行的代码放到异步的任务队列里面，如果是宏任务，就会放到宏任务队列里，如果是微任务，就会放到微任务队列里。当同步代码执行完成后，这时候执行栈为空，js引擎会先查看当前微任务队列里面有没有要执行的任务，如果有一个一个的拿出来放到执行栈中执行，执行完看当前宏任务队列里面有没有要执行的任务，有的话也一个一个的拿出来放到执行栈中执行，执行完开始执行下一个宏任务代码。这个过程是循环的，因此称为“事件循环”。

- 2.什么是宏任务和微任务？

- 宏任务定义：宏任务是异步执行的代码块，事件循环中独立调度的一个工作单元。

- 微任务定义：微任务也是异步执行的代码块，不过执行的优先级比宏任务更高。

- 3.宏任务包含哪些

- （1）整个script标签里的代码块

- （2）setTimeout

- （3）setInterval

- （4）setImmediate

- （5）I/O操作（输入/输出）

- （6）UI渲染

- 5.微任务

- （1）Promise.then catch

- （2）MutationObserver（监控dom树的变化）

## 2.深拷贝，浅拷贝 ⭐
    
- 1.深浅拷贝是针对引用类型说的，原始类型不存在深浅拷贝。

- 2.然后浅拷贝是复制的是对象的引用，而深拷贝是拷贝了一个完全一模一样的对象。

- 3.浅拷贝的方式：1.Object.assign() 2.展开运算符 3.循环遍历

- 4.深拷贝的方式：1.JSON.parse(JSON.stringify(obj)) 2.递归 3.lodash中的_.defaultsDeep()方法。

>tips: 利用JSON.stringify()的缺陷，处理不了function对象、undefined以及symbol类型，原因是JSON.stringify()在处理这些类型，这些类型会被忽略，不会被处理。并且JSON.stringify()也解决不了循环引用的问题。
    
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
                if (obj.hasOwnProperty(key)) {
                    copy[key] = deepCopy(obj[key], visited);
                }
            }
            return copy
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
    let timer;
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

- 1.原型的定义：JS中每个对象都有一个特殊的隐藏属性，这里我们就用 [[Prototype]] 表示，这个属性要么是null，要么是对另一个对象的引用。这个对象也称为当前对象的“原型”。

>tips：每个函数都有一个prototype属性，每个对象都有一个__proto__属性。

- 2.原型链定义：因为原型本身也可能会有原型，这种关系形成一个链式结构，也就被称为原型链。

- 3.作用：
  
- 属性查找，当视图访问一个对象的属性时，如果对象本身没有这个属性，那么js就会去这个对象的原型上去找，一直找到这条原型链的终点null。

- 继承：原型链允许一个对象继承另一个对象的属性和方法。

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
function myInstanceof(leftObj, rightFn) {
    let left = leftObj.__proto__
    const right = rightFn.prototype
    while (left) {
        if (left === right) {
            return true
        }
        left = left.__proto__
    }
    return false
}
```

## 10.Promise ⭐

（1）状态：大致分为三种状态。

①：pending：待定

②、fullfilled：已实现

③、rejected：已拒绝

3、解决了什么问题？

①、支持链式调用，解决了回调地狱的问题。

（2）手写一个Promise.all ⭐

```js
function promiseAll(promiseArr) {
    return new Promise((resolve, reject) => {
        const res = []
        let completed = 0
        const len = promiseArr.length
        for (let i = 0; i < len; i++) {
            Promise.resolve(promiseArr[i]).then(val => {
                res[i] = val
                completed++
                if (completed === len) {
                    resolve(res)
                }
            }).catch(error => {
                reject(error)
            })
        }
    })
}
```

（3）手写一个Promise.race

```js
function promiseRace(promiseArr) {
    return new Promise((resolve, reject) => {
        const len = promiseArr.length
        if (len === 0) return
        for (let i = 0; i < len; i++) {
            Promise.resolve(promiseArr[i]).then(resolve, reject)
        }
    })
}
```

## 11.函数柯里化 ⭐
    
>将多个参数的一个函数转换成使用一系列一个参数的函数。

>也就是将fn(1,2,3,4)转换成fn(1)(2)(3)(4)

```js
function curry(fn) {
    const len = fn.length
    return function curryFn(...args) {
        if (args.length >= len) {
            return fn(...args)
        } else {
            return function (...newArgs) {
                return curryFn(...args, ...newArgs)
            }
        }
    }
}
```

>柯里化的好处：延迟执行，提前返回。

## 12.设计模式 ⭐

- 1.模块模式：创建私有和公共封装的方式。在ES6之前，JS没有内置的模块系统，所以模块模式成为了实现封装和避免全局作用域污染的流行方法。ES6引入了模块导入和导出。

```js
const myMoudel = (function () {
    const name = 'Jack'
    function getName() {
        return name
    }
    return {
        publicMethod: function () {
            return getName() + '18'
        }
    }
})()
console.log(myMoudel.publicMethod());
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

- 4.单例模式：该模式确保一个类只有一个实例，并提供了一个全局访问该实例的点。

- 5.原型模式：JS是基于原型的语言，所以这种模式在语言核心中已经内建。它允许你复制或克隆对象，而不是每次都从零开始创建。

## 13.实现一个发布订阅系统 ⭐

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

## 14.call，bind，apply，apply和call哪个性能更好？
 
- 1.call、apply、bind都可以改变函数内部this的指向。

- 2.bind返回的是一个函数，call和apply返回的是值。

- 3.bind和call的第二参数都是接收的一个参数列表，而apply的第二个参数接收的是一个数组。

- 4.call的性能比apply的性能更好。

```js
        // 1.手写bind
        Function.prototype.myBind = function (obj = window, ...rest) {
            const _that = this;
            return function () {
                if (new.target) {
                    return new _that([...rest, ...arguments]);
                } else {
                    return _that.apply(obj, [...rest, ...arguments])
                }
            }
        }
```

```javascript
        // 手写call
        Function.prototype.myCall = function (obj = window, ...rest) {
            obj.fn = this;
            const res = obj.fn(...rest);
            obj.fn = null;
            return res;
        }
```

```javascript
        // 手写apply
        Function.prototype.myApply = function (obj = window, ...rest) {
            obj.fn = this;
            const res = obj.fn(rest);
            obj.fn = null;
            return res;
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

## 23.展开语法和解构语法

展开语法：主要用于“展开”数组或对象。
 
解构赋值：主要用于从数组或对象中“提取”值或属性，并赋值给新的变量。

## 24.export default和export的区别？

- 1.export可以直接导出表达式，而export default不行。

- 2.export导出的，在导入的时候需要加入{}进行导入，而export default则不需要。

- 3.在一个文件模块中，export可以有多个，而export default只有一个。

## 25.闭包

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

- 事件处理和回调：保留某些状态以供稍后使用。

```html
<!-- HTML部分 -->
<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

```js
// 错误示例：这样做将会在每次点击时都输出最后一个索引
const list = document.querySelectorAll('#myList li');
for (var i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function() {
    console.log("Clicked item index: " + i);
  });
}

// 正确示例：使用闭包来捕获每个索引
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', (function(index) {
    return function() {
      console.log("Clicked item index: " + index);
    };
  })(i));
}
```

>在错误示例中，由于JavaScript的变量提升和异步执行，点击任何一个列表项都会输出最后一个索引。

>在正确示例中，我们使用了一个立即执行函数表达式（IIFE）和闭包来捕获循环中的每一个索引值。这样，当点击事件发生时，每一个列表项都能正确地访问到它自己的索引。

>这个简单的例子展示了如何使用闭包在事件处理和回调中保存状态，这在实际开发中是非常常见的需求。通过这种方式，你可以编写更灵活和更强大的代码。

- 5.注意事项：

- 闭包使用不当会导致内存泄漏

- 过度使用闭包会导致代码难以理解和维护

## 26.说一下ES6中的Proxy？

>Proxy对象用于创建一个对象的代理，从而实现基本的拦截和自定义（属性查找，赋值，枚举，函数调用等）。

>语法：

```javascript
let p = new Proxy(target,handler);
```

>参数：target：要使用Proxy包装的目标对象。handler：一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行操作时代理p的行为。

>Proxy本质上是一个构造函数。

>Proxy.revocable()用来创建一个可撤销的Proxy对象，撤销方法revoke()。

>Proxy作用：用于拦截和自定义对象的一些操作。

- 总结：Proxy对象用于创建一个对象的代理，从而实现对对象的一些操作，例如拦截和自定义。Vue3中就使用了Proxy代替了Vue2中的Object.defineProperty。
    
## 27.js中哪些情况会造成内存泄漏？
    
1.闭包使用不当可能会导致内存泄漏。

2.Dom对象内存泄漏。

3.使用setTimeout和setInterval没有及时销毁。

4.隐式声明的全局变量。

## 28.什么是事件委托和事件冒泡
    
事件冒泡：在一个对象上触发某类事件（比如单击onclick事件），如果此对象定义了此事件的处理程序，那么此事件就会调用这个处理程序，如果没有定义此事件处理程序或者事件返回true，那么这个事件会向这个对象的父级对象传播，从里到外，直至它被处理（父级对象所有同类事件都将被激活），或者它到达了对象层次的最顶层，即document对象（有些浏览器是window）。

事件委托：就是利用冒泡的原理，把事件加到父级上，通过判断事件来源的子集，执行相应的操作，事件委托首先可以极大减少事件绑定次数，提高性能；其次可以让新加入的子元素也可以拥有相同的操作。  

## 29.说一说JS数组中的方法？

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

## 30.ES Module、CommonJS

- 1.  **语法**：CommonJS 使用 `require` 和 `module.exports`，而 ESM 使用 `import` 和 `export`。

- 2.  **运行时 vs 编译时**：CommonJS 是运行时执行，而 ESM 是编译时执行。

- 3.  **动态 vs 静态**：CommonJS 可以动态加载模块，而 ESM 是静态的。

- 4.  **适用场景**：CommonJS 主要用于服务器端（Node.js），而 ESM 主要用于浏览器，但现在 Node.js 也越来越支持 ESM。

## 31.map 和 forEach的区别

## 32.数组对象排序

```javascript
const arr = [{ a: 1, b: 2 }, { a: 0, b: 1 }, { a: 10, b: 11 }];

console.log(arr.sort(function (a, b) {
    return (a.a + a.b) - (b.a + b.b);
}));
```

## 33.数组去重，数组对象去重。

>1.new Set()

>2.双循环。

>3.利用indexOf。

>采用fiter，map，reduce等方法。

## 34.用Promise实现一个延时？

## 35.用ES5的语法实现ES6的类？

## 36.写一个ES5的继承？

```javascript
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

## 37.作用域

>什么是作用域？作用域就是变量，函数可访问的范围。

>什么是作用域链？js引擎在运行的时候，查找变量的时候会从当前执行作用域逐级向外查找，形成一条链状结构，就是作用域链。

>切换作用域是消耗性能的。

## 38.JS中this的指向

1.一般情况下，this是指向调用者。如果在全局调用那就是指向window。

2.使用new的时候，this指向创建的对象。

3.箭头函数中的this来自于上下文。

4.在使用call和apply以及bind的时候绑定到指定的对象。

## 39.浏览器事件机制？

- 1.事件委托基于事件冒泡的原理，允许我们不直接绑定事件处理程序到每个单独的元素，而是绑定到一个共同的父元素。当该父元素的子元素触发了特定的事件时，事件处理程序会被执行。

事件委托的好处：

- 1.性能优化: 当你有大量的子元素需要相同的事件处理时，使用事件委托可以减少事件处理程序的数量，从而提高性能。
  
- 2.动态元素: 对于在后期通过JavaScript动态添加到DOM的元素，你不需要为它们单独绑定事件。因为它们自然会继承父元素的事件处理。
