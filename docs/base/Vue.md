# 10.Vue

## 1.MVVM

MVVM是Model-View-ViewModel缩写，也就是把MVC中的Controller演变成ViewModel。Model层代表数据模型，View代表UI组件，ViewModel是View和Model层的桥梁，数据会绑定到viewModel层并自动将数据渲染到页面中，视图变化的时候会通知viewModel层更新数据。

## 2.nextTick知道吗，实现原理是什么

在下次 DOM 更新循环结束之后执行延迟回调。nextTick主要使用了宏任务和微任务。根据执行环境分别尝试采用

Promise MutationObserver setImmediate如果以上都不行则采用setTimeout

定义了一个异步方法，多次调用nextTick会将方法存入队列中，通过这个异步方法清空当前队列。

## 3.生命周期

### 1.创建阶段

- 1.beforeCreate: 在 Vue 实例创建之初，属性和方法还未被定义。

- 2.created: Vue 实例创建完毕，data、methods、computed、watch 等已可用，但 DOM 还未生成。

### 2.挂载阶段

- 1.beforeMount: 发生在挂载之前，此时template模板已经导入渲染函数编译，虚拟dom已经创建完成，即将开始渲染，此时修改数据不会触发updated函数。

- 2.mounted: 发生在挂载完成之后，此时dom已经创建完成，可以获取到dom的节点，可以使用$refs对dom进行操作。

### 3.更新阶段

- 1.beforeUpdate: 发生在数据更新之前，此时虚拟dom还未重新渲染，在此阶段修改数据不会导致虚拟dom重新渲染。

- 2.updated: 发生在数据更新完成之后，即响应式数据发生更新，此时dom已经更新完成，避免在此时修改数据，因为在此时修改数据可能会导致无限循环更新。

### 4.销毁阶段

- 1.beforeDestroy: 在实例销毁之前调用。在这一步，实例仍然完全可用。

- 2.destroyed: 在 Vue 实例销毁之后调用。

## 4.Computed和Watch

Computed本质是一个具备缓存的watcher，可以将复杂的逻辑放入计算属性中处理。

Watch没有缓存性，更多的是观察的作用，可以监听某些数据执行回调。当我们需要深度监听对象中的属性时，可以打开

deep：true

## 5.v-if和v-show的区别

当条件不成立时，

v-if不会渲染DOM元素，

v-show操作的是样式(display)，切换当前DOM的显示和隐藏。

## 6.Diff算法

diff算法比较新旧节点的时候，比较只会在同层级进行, 不会跨层级比较

当数据发生改变时，set方法会让调用 Dep.notify 通知所有订阅者Watcher，订阅者就会调用 patch 给真实的DOM打补丁，更新相应的视图。

## 7.Vue双向绑定原理？

>Vue2版本中，Vue初始化数据的时候，首先会使用Object.defineProperty重新定义data中的所有属性，当页面使用对应属性时，首先会进行依赖收集，如果属性发生改变就通知相应的依赖进行更新操作。

>Vue3版本中，将Object.defineProperty换成了Proxy，Proxy可以直接监听数组和对象的变化。

## 8.Vue和React的区别？

### 1.设计思想和编程模式上：

- 1.vue更为集成化，提供了很多内置功能，例如v-if、v-for指令

- 2.react更注重组件化，一切都是组件，状态管理需要借助第三方库：例如Redux

### 2.模板

- 1.vue使用基于html的模板语法，更易于上手和理解

- 2.React使用JSX语法，可以将js和html写到一起

### 3.数据绑定

- 1.vue提供数据的双向绑定（v-model）

- 2.react默认单向数据流
