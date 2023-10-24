(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{297:function(t,e,a){t.exports=a.p+"assets/img/js.5aba1a3f.png"},314:function(t,e,a){"use strict";a.r(e);var _=a(10),r=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_3-react"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-react"}},[t._v("#")]),t._v(" 3.React")]),t._v(" "),e("h2",{attrs:{id:"_1-react的fiber架构-⭐"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-react的fiber架构-⭐"}},[t._v("#")]),t._v(" 1.React的fiber架构 ⭐")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("1.requestIdleCallback：在浏览器空闲时间被调用，有两个参数，第一个是回调函数，第二个是timeout，在timeout毫秒后没被调用，那么将加入事件循环中排队。")])]),t._v(" "),e("li",[e("p",[t._v("2.react16之前的stack架构实现虚拟dom转成真实dom，是采用循环递归的方式，这个过程是不可中断的，如果你的虚拟dom树很大的话，那页面就得等待，主线程一直被占用，而且这个过程不可被打断。")])]),t._v(" "),e("li",[e("p",[t._v("3.浏览器一帧里面会做哪些工作？")])])]),t._v(" "),e("blockquote",[e("p",[t._v("标准屏幕刷新率下面（1秒60帧），那么每帧也就是16.6ms")])]),t._v(" "),e("p",[t._v("浏览器在一帧里面会依次执行：")]),t._v(" "),e("p",[t._v("输入事件（阻塞输入事件，非阻塞输入事件） => 定时器 => 开始帧 => requestAnimationFrame => 计算样式，更新布局，布局 => 绘制 => 空闲阶段")]),t._v(" "),e("p",[e("img",{attrs:{src:a(297),alt:"JS.png"}})]),t._v(" "),e("ul",[e("li",[t._v("4.react fiber架构，fiber架构本质上是一种数据结构，其实是棵树。然后fiber做的事情就是将虚拟dom转成fiber结构，转的过程中知道哪些dom是更新了的，并打上对应的变更标签，然后这个转的过程是可以中断的，因为它是通过链表去处理这颗树的，每个fiber节点有父节点，兄弟节点以及子节点，所以可以中断，然后关键的点是每个节点的更新可以分配到浏览器每帧的空闲时间里，这里有一个函数，requestIdleCallback，这个函数可以让任务在每帧的空闲时间执行，当然react实现的时候用的不是这个函数，而是自己模拟了一个拥有requestIdleCallback这样功能的函数，因为requestIdleCallback只能在谷歌浏览器下面运行，不兼容老的其他的浏览器，所以react自己模拟了一个。然后fiber架构分为两个阶段，一个协调阶段，也就是将虚拟dom转成fiber数据结构，这个阶段是可以中断的，然后第二个是提交阶段，将fiber数据结构转成真实的dom,这个阶段是不可以中断的，因为协调阶段已经将要增删改的dom都算好了，所以提交阶段就会很快。")])]),t._v(" "),e("h2",{attrs:{id:"_2-react虚拟dom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-react虚拟dom"}},[t._v("#")]),t._v(" 2.React虚拟dom")]),t._v(" "),e("p",[t._v("虚拟 DOM 本质上是一个 JS 对象，它反映了真实 DOM 的结构和内容。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("1.提供一个中间缓存，使得直接操作实际的 DOM（这通常是昂贵的操作）不再那么频繁。")])]),t._v(" "),e("li",[e("p",[t._v("2.通过对比新旧虚拟 DOM 来计算出最小的变动，从而优化实际 DOM 的更新。")])])]),t._v(" "),e("p",[t._v("虚拟dom可以让react更优雅高效的更新真实dom，虚拟dom可以让开发者不用关注dom操作，只操作数据。")]),t._v(" "),e("h2",{attrs:{id:"_3-react中的diff算法-⭐"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-react中的diff算法-⭐"}},[t._v("#")]),t._v(" 3.React中的diff算法 ⭐")]),t._v(" "),e("p",[t._v("React diff算法是react虚拟dom系统的核心，它允许react快速确定虚拟dom树上的哪些部分需要更新，从而使得UI更新非常的高效。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("1.同级比较：React diff算法的基本策略是通过对树的层级进行比较，也就是意味着只会在同一层级的节点之间进行比较，而不是跨层级。")])]),t._v(" "),e("li",[e("p",[t._v("2.元素类型：当在两棵树的相同位置找到两个不同类型的元素时，React 会直接卸载前一个元素及其所有子元素，并创建并挂载新的元素。")])]),t._v(" "),e("li",[e("p",[t._v("3.类型相同，复用节点：如果两个元素是相同类型的，React 会保留 DOM 节点，并仅比较和更改它们之间的差异。")])]),t._v(" "),e("li",[e("p",[t._v("4.Keys 的重要性：")])])]),t._v(" "),e("p",[t._v("当在数组中渲染子节点时，必须为每个子节点分配一个稳定的 key 值。通过为每个节点分配一个 key，React 可以使用这个 key 来识别那些在不同的渲染中仍然保持不变的元素。如果组件的数组顺序改变，但没有 key，React 将重新渲染大多数或所有组件。")]),t._v(" "),e("ul",[e("li",[t._v("5.递归子节点：一旦确定了两个元素是相同的类型并被复用，React 将递归地对其子节点进行比较。")])]),t._v(" "),e("h2",{attrs:{id:"_4-react的状态管理库redux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-react的状态管理库redux"}},[t._v("#")]),t._v(" 4.React的状态管理库Redux")]),t._v(" "),e("p",[t._v("redux是react的一个状态管理库。")]),t._v(" "),e("p",[t._v("Redux 的三大原则：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("1.单一数据源：应用的状态存储在唯一的 store 中。")])]),t._v(" "),e("li",[e("p",[t._v("2.状态是只读的：唯一改变状态的方式是触发 action。")])]),t._v(" "),e("li",[e("p",[t._v("2.使用纯函数执行修改：为了指定 action 如何改变状态，你需要编写 reducers。")])])]),t._v(" "),e("p",[t._v("常用概念：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("1.Actions：描述发生了什么的对象。")])]),t._v(" "),e("li",[e("p",[t._v("2.Reducers：指定每个 action 如何改变应用状态的函数。")])]),t._v(" "),e("li",[e("p",[t._v("3.Store：将 Actions 和 Reducers 绑定在一起的对象。")])])]),t._v(" "),e("p",[t._v("Redux 通过解耦状态和 UI，使得状态管理更加明确和可预测。但也因为其模式和约束，对于一些简单的应用，使用 Redux 可能会显得过于复杂。不过，在大型应用和复杂状态管理场景下，Redux 的优势就显现出来了。")]),t._v(" "),e("h2",{attrs:{id:"_5-react中的hooks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-react中的hooks"}},[t._v("#")]),t._v(" 5.React中的hooks")]),t._v(" "),e("p",[t._v("React Hooks 是从 React 16.8 版本开始引入的一个新特性，它允许你在不使用类组件的情况下使用 state 和其他 React 特性。Hooks 的引入是为了解决类组件中的一些常见问题，如复杂性、重复的逻辑和组件之间的状态逻辑重用。")]),t._v(" "),e("p",[t._v("常用的 React Hooks：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("1.useState：允许函数组件使用状态")])]),t._v(" "),e("li",[e("p",[t._v("2.useEffect：可以看作componentDidMount、componentDidUpdate、componentWillUnmount生命周期方法的结合。")])]),t._v(" "),e("li",[e("p",[t._v("3.useMemo：会缓存计算结果，只有当数据变化的时候才会重新计算，用户避免不必要的计算，并优化函数组件性能。")])]),t._v(" "),e("li",[e("p",[t._v("4.useRef：返回一个可变的ref对象")])])]),t._v(" "),e("h2",{attrs:{id:"_6-react-hooks和高阶组件差别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-react-hooks和高阶组件差别"}},[t._v("#")]),t._v(" 6.React hooks和高阶组件差别")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("1.hooks只能用于函数组件，而高阶组件可以用于函数组件和类组件")])]),t._v(" "),e("li",[e("p",[t._v("2.hooks使用起来更加的简单，而高阶组件使用起来相对比较麻烦")])]),t._v(" "),e("li",[e("p",[t._v("3.hooks没有那么多的层级嵌套，而高阶组件是有层级嵌套的")])]),t._v(" "),e("li",[e("p",[t._v("4.hooks更容易组合，而高阶组件组合可能更加复杂")])])]),t._v(" "),e("h2",{attrs:{id:"_7-useeffect要注意的地方"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-useeffect要注意的地方"}},[t._v("#")]),t._v(" 7.useEffect要注意的地方")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("1.正确处理依赖数组，因为依赖数组决定了"),e("code",[t._v("useEffect")]),t._v("的渲染频率")])]),t._v(" "),e("li",[e("p",[t._v("2.如果有使用定时器的话，在组件卸载的时候要清理，以免造成内存泄漏")])]),t._v(" "),e("li",[e("p",[t._v("3.不要在useEffect内使用async函数，避免造成不可预知的错误")])])]),t._v(" "),e("h2",{attrs:{id:"_8-usememo-usecallback差别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-usememo-usecallback差别"}},[t._v("#")]),t._v(" 8.useMemo，useCallback差别")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("1.useMemo是用于优化复杂计算的，可以记住之前已经计算过的结果")])]),t._v(" "),e("li",[e("p",[t._v("2.useCallback是用于记住函数实例本身的，useCallback主要用于避免父组件渲染导致子组件不必要的渲染")])])]),t._v(" "),e("h2",{attrs:{id:"_9-react-的主要特点是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-react-的主要特点是什么"}},[t._v("#")]),t._v(" 9.React 的主要特点是什么?")]),t._v(" "),e("h3",{attrs:{id:"_1-组件化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-组件化"}},[t._v("#")]),t._v(" 1.组件化")]),t._v(" "),e("p",[t._v("React的应用是由多个组件组成的。组件可以被看作是独立的、可重复使用的代码块，它们各自管理自己的状态和渲染。")]),t._v(" "),e("h3",{attrs:{id:"_2-数据驱动视图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据驱动视图"}},[t._v("#")]),t._v(" 2.数据驱动视图")]),t._v(" "),e("p",[t._v("React是基于单向数据流的，就意味着在React应用中从父组件流向子组件（也就是props）。当数据改变时，UI自动更新；但反之并不是这样，UI中的改变不会直接回流影响数据。也就是说渲染界面，不应该直接操作dom，而是通过修改数据，数据驱动视图更新。")]),t._v(" "),e("h3",{attrs:{id:"_3-虚拟dom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-虚拟dom"}},[t._v("#")]),t._v(" 3.虚拟DOM")]),t._v(" "),e("p",[t._v("虚拟DOM是React用来提高性能的核心概念之一。它是一个在内存中的DOM的轻量级表示。当组件的状态改变时，React创建一个新的虚拟DOM树并与前一个树进行比较，然后决定如何进行有效的更新。")]),t._v(" "),e("h2",{attrs:{id:"_10-react-生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-react-生命周期"}},[t._v("#")]),t._v(" 10.React 生命周期")]),t._v(" "),e("h3",{attrs:{id:"_1-挂载阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-挂载阶段"}},[t._v("#")]),t._v(" 1.挂载阶段")]),t._v(" "),e("p",[t._v("当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("1.constructor(): 在 React 组件挂载之前，会调用它的构造函数。")])]),t._v(" "),e("li",[e("p",[t._v("2.getDerivedStateFromProps(): 在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。")])]),t._v(" "),e("li",[e("p",[t._v("3.render(): render() 方法是 class 组件中唯一必须实现的方法。")])]),t._v(" "),e("li",[e("p",[t._v("4.componentDidMount(): 在组件挂载后（插入 DOM 树中）立即调用。")])])]),t._v(" "),e("h3",{attrs:{id:"_2-更新阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-更新阶段"}},[t._v("#")]),t._v(" 2.更新阶段")]),t._v(" "),e("p",[t._v("当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("1.getDerivedStateFromProps(): 在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。根据 shouldComponentUpdate() 的返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响。")])]),t._v(" "),e("li",[e("p",[t._v("2.shouldComponentUpdate():当 props 或 state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用。")])]),t._v(" "),e("li",[e("p",[t._v("3.render(): render() 方法是 class 组件中唯一必须实现的方法。")])]),t._v(" "),e("li",[e("p",[t._v("4.getSnapshotBeforeUpdate(): 在最近一次渲染输出（提交到 DOM 节点）之前调用。")])]),t._v(" "),e("li",[e("p",[t._v("5.componentDidUpdate(): 在更新后会被立即调用。")])])]),t._v(" "),e("h3",{attrs:{id:"_3-卸载阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-卸载阶段"}},[t._v("#")]),t._v(" 3.卸载阶段")]),t._v(" "),e("p",[t._v("当组件从 DOM 中移除时会调用如下方法：")]),t._v(" "),e("ul",[e("li",[t._v("1.componentWillUnmount(): 在组件卸载及销毁之前直接调用。")])]),t._v(" "),e("h2",{attrs:{id:"_11-react-中-refs-的作用是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-react-中-refs-的作用是什么"}},[t._v("#")]),t._v(" 11.React 中 refs 的作用是什么？")]),t._v(" "),e("ul",[e("li",[t._v("直接访问dom元素")])]),t._v(" "),e("h2",{attrs:{id:"_12-说一下react中的类组件和函数式组件、"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12-说一下react中的类组件和函数式组件、"}},[t._v("#")]),t._v(" 12.说一下React中的类组件和函数式组件、")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("1.写法：类组件使用 ES6 类，而函数式组件使用普通函数。")])]),t._v(" "),e("li",[e("p",[t._v("2.状态管理：在引入 React Hooks 之前，类组件可以有状态，而函数式组件则是无状态的。")])]),t._v(" "),e("li",[e("p",[t._v("3.生命周期方法：类组件可以使用所有的生命周期方法，而函数式组件在引入 React Hooks 之前不能使用它们。")])]),t._v(" "),e("li",[e("p",[t._v("4.this 关键字：类组件可以使用 this，而函数式组件不能。")])])]),t._v(" "),e("p",[t._v("然后日常开发中是推荐使用函数组件的，因为写法更简洁，并且可以使用hooks提供的所有功能。")]),t._v(" "),e("h2",{attrs:{id:"_13-什么是高阶组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-什么是高阶组件"}},[t._v("#")]),t._v(" 13.什么是高阶组件")]),t._v(" "),e("p",[t._v("高阶组件就是一个函数，这个函数接受一个组件作为参数，并返回一个新的组件。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("1.代码重用：通过将组件包裹在高阶组件中，可以重用某些相似的逻辑，如数据获取、状态管理、props 修改等。")])]),t._v(" "),e("li",[e("p",[t._v("2.渲染劫持：高阶组件可以控制被包裹组件的渲染过程，基于条件渲染不同的内容。")])]),t._v(" "),e("li",[e("p",[t._v("3.Props 修改：可以添加新的 props 或修改传递给被包裹组件的 props。")])]),t._v(" "),e("li",[e("p",[t._v("4.State 抽象和操作：高阶组件可以为其包裹的组件提供额外的状态或方法。")])]),t._v(" "),e("li",[e("p",[t._v("5.访问生命周期方法：可以利用高阶组件在内部实现组件的生命周期方法。")])])]),t._v(" "),e("p",[t._v("注意：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("1.不要在高阶组件内部改变原始组件。相反，通过组合来产生新组件。")])]),t._v(" "),e("li",[e("p",[t._v("2.高阶组件不应该修改传入组件的原型。")])]),t._v(" "),e("li",[e("p",[t._v("3.应避免无谓的嵌套：每使用一个高阶组件，组件树的深度都会增加一层。如果过度使用，可能会导致组件树过于复杂。")])])]),t._v(" "),e("h2",{attrs:{id:"_14-什么是受控组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_14-什么是受控组件"}},[t._v("#")]),t._v(" 14.什么是受控组件")]),t._v(" "),e("p",[t._v("在 React 中，当一个输入元素（如输入框和选择框）的值由组件的 state 控制时，我们称其为“受控组件”。")]),t._v(" "),e("h2",{attrs:{id:"_15-说一下react-中的-props"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_15-说一下react-中的-props"}},[t._v("#")]),t._v(" 15.说一下React 中的 props?")]),t._v(" "),e("p",[t._v("React是单向数据流的，而父组件给子组件传递数据就是使用props的。")]),t._v(" "),e("p",[t._v("props特性：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("1.props是只读的，这意味着在一个组件内部，你不应该修改props。")])]),t._v(" "),e("li",[e("p",[t._v("2.传递数据和函数：不仅可以传递数据，还可以传递函数，从而允许子组件与父组件交互。")])]),t._v(" "),e("li",[e("p",[t._v("3.默认 Props：React 允许设置默认 props。这是当父组件没有提供某个 prop 时，组件可以有一个默认值。")])])]),t._v(" "),e("h2",{attrs:{id:"_16-状态和属性有什么区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_16-状态和属性有什么区别"}},[t._v("#")]),t._v(" 16.状态和属性有什么区别?")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("1.props 是为了使组件在不同情况下重用，并允许数据从父组件流入子组件。")])]),t._v(" "),e("li",[e("p",[t._v("2.state 是为了存储组件内部状态，以及响应用户的交互行为。")])])]),t._v(" "),e("h2",{attrs:{id:"_17-在组件库中当使用-forward-refs-时-你需要额外的注意"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_17-在组件库中当使用-forward-refs-时-你需要额外的注意"}},[t._v("#")]),t._v(" 17.在组件库中当使用 forward refs 时，你需要额外的注意?")]),t._v(" "),e("p",[t._v("forwardRef 是 React 提供的一个工具，允许组件接收并“转发”接收到的 ref 到其子组件。它对于某些组件类型，尤其是可能作为高阶组件或是库中的组件，特别有用。这是因为在很多情况下，你可能想要从父组件直接获取子组件的 DOM 节点，而不是通过中间组件。")]),t._v(" "),e("p",[t._v("在 React 中，ref 并不是一个像 props 或 state 那样的属性。这意味着你不能直接将 ref 传递给子组件，除非使用特殊的手段。这就是 forwardRef 的用武之地。")]),t._v(" "),e("h2",{attrs:{id:"_18-react-多个setstate会触发几次render"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_18-react-多个setstate会触发几次render"}},[t._v("#")]),t._v(" 18.react 多个setState会触发几次render")]),t._v(" "),e("p",[t._v("在react的本身的生命周期中或react事件处理器中（如onClick），连续多个setState会被批量处理，只会有一次render。")]),t._v(" "),e("p",[t._v("但是在非react的异步代码中，例如setTimeout中，一次setState就会触发一次render，但是多次render并不代码会多次更新dom，因为react的虚拟dom的更新机制。")]),t._v(" "),e("h2",{attrs:{id:"_19-setstate执行机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_19-setstate执行机制"}},[t._v("#")]),t._v(" 19.setState执行机制?")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("1.异步执行：在大多数情况下，setState 是异步的。这意味着在调用 setState 后，状态不会立即更新。这是为了性能优化：当在短时间内多次调用 setState 时，React 会批量处理这些更新，从而避免不必要的重渲染。")])]),t._v(" "),e("li",[e("p",[t._v("2.合并更新：当在一个事件处理函数中多次调用 setState 时，React 会将多个更新合并为一个更新。这意味着如果你多次对同一个状态字段调用 setState，只有最后一次的更新会被应用。")])]),t._v(" "),e("li",[e("p",[t._v("3.触发重新渲染：一旦状态更新（和可能的 props 更新），React 会重新执行 render 方法来确定是否需要更新 DOM。在这个过程中，React 会执行其“diffing”算法来比较新旧虚拟 DOM，并只更新必要的部分。")])]),t._v(" "),e("li",[e("p",[t._v("4.回调：setState 可以接受一个可选的第二个参数，这是一个在状态更新和组件渲染之后执行的回调函数。")])])]),t._v(" "),e("h2",{attrs:{id:"_20-react-router工作原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_20-react-router工作原理"}},[t._v("#")]),t._v(" 20.React-Router工作原理")]),t._v(" "),e("ul",[e("li",[t._v("React-Router 的工作原理是通过监听浏览器地址栏的变化，并根据当前 URL 动态地渲染一组 React 组件。这个过程完全在客户端上完成，所以 React-Router 是一个单页应用（SPA）的路由解决方案。")])]),t._v(" "),e("h2",{attrs:{id:"_21-react和vue的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_21-react和vue的区别"}},[t._v("#")]),t._v(" 21.React和Vue的区别")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://juejin.cn/post/7144648542472044558",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考资料"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);