# 2.React

## 1.React的fiber架构 ⭐

- 1.react fiber架构：fiber架构本质上是一种数据结构，其实是棵树。然后fiber分两个阶段：协调阶段和提交阶段。协调阶段做的事情就是将虚拟dom转成fiber结构，转的过程中知道哪些dom是更新了的，并打上对应的变更标签，然后这个转的过程是可以中断的，因为它是通过链表去处理这颗树的，每个fiber节点有父节点，兄弟节点以及子节点，所以可以中断，然后关键的点是每个节点的更新可以分配到浏览器每帧的空闲时间里，这里有一个函数，requestIdleCallback，这个函数可以让任务在每帧的空闲时间执行，当然react实现的时候用的不是这个函数，而是自己模拟了一个拥有requestIdleCallback这样功能的函数，因为requestIdleCallback浏览器兼容性有问题，所以react自己模拟了一个。协调阶段是将虚拟dom转成fiber数据结构，这个阶段是可以中断的，第二个是提交阶段，将fiber数据结构转成真实的dom,这个阶段是不可以中断的，因为协调阶段已经将要增删改的dom都算好了，所以提交阶段就会很快。

- 2.requestIdleCallback：在浏览器空闲时间被调用，有两个参数，第一个是回调函数，第二个是timeout，在timeout毫秒后没被调用，那么将加入事件循环中排队。

- 3.react16之前的stack架构实现虚拟dom转成真实dom，是采用循环递归的方式，这个过程是不可中断的，如果你的虚拟dom树很大的话，那页面就得等待，主线程一直被占用，而且这个过程不可被打断。

- 4.浏览器一帧里面会做哪些工作？

>标准屏幕刷新率下面（1秒60帧），那么每帧也就是16.6ms

浏览器在一帧里面会依次执行：

输入事件（阻塞输入事件，非阻塞输入事件） => 定时器 => 开始帧 => requestAnimationFrame => 计算样式，更新布局，布局 => 绘制 => 空闲阶段

![JS.png](@images/js.png)

## 2.React中的diff算法 ⭐

React diff算法是react虚拟dom系统的核心，它允许react快速确定虚拟dom树上的哪些部分需要更新，从而使得UI更新非常的高效。

# 1.同级比较

- React 不会进行跨层级的 DOM 比较。它只比较同一层级的元素。

# 2.元素类型

- 1.当在两棵树的相同位置找到两个不同类型的元素时，React 会直接销毁旧节点及其子节点，并从头开始创建新节点。

- 2.类型相同，复用节点：如果两个元素是相同类型的，React 会保留该 DOM 节点，并仅更新变化的属性。并递归地对其子节点进行比较。

# 3.Keys 的重要性

- 当在数组中渲染子节点时，必须为每个子节点分配一个稳定的 key 值。通过为每个节点分配一个 key，React 可以使用这个 key 来识别那些在不同的渲染中仍然保持不变的元素。

>如果你没有设置key，react内部会默认使用元素的索引作为它们的key。

>如果设置一个随机key会怎样？

（1）性能下降：

- 每次组件渲染时，随机 key 都会改变，即使实际上渲染的数据没有变化，这个元素也会被销毁重新创建。

（2）状态丢失：

- 如果一个组件或元素依赖于本地状态或维护状态（如输入字段），每次重新渲染时使用随机 key 都会导致这个组件或元素被销毁并重新创建。

（3）不一致的 DOM 行为

- 当使用随机 key 时，DOM 元素将会频繁地被销毁和创建，而非仅仅更新，这可能导致不可预测的行为，如焦点丢失、文本选择丢失等。

## 3.React虚拟dom

虚拟 DOM 本质上是一个 JS 对象，它反映了真实 DOM 的结构和内容。

- 1.提供一个中间缓存，使得直接操作实际的 DOM（这通常是昂贵的操作）不再那么频繁。

- 2.通过对比新旧虚拟 DOM 来计算出最小的变动，从而优化实际 DOM 的更新。

虚拟dom可以让react更优雅高效的更新真实dom，虚拟dom可以让开发者不用关注dom操作，只操作数据。

## 4.React中的hooks ⭐

React Hooks 是从 React 16.8 版本开始引入的一个新特性，它允许你在不使用类组件的情况下使用 state 和其他 React 特性。Hooks 的引入使得函数组件更加强大和灵活。

常用的 React Hooks：

- 1.useState：允许函数组件使用状态

- 2.useEffect：用于处理函数组件中的副作用

- 3.useLayoutEffect：与useEffect一样，只是执行时机不同，在所有的 DOM 变更之后同步执行的，在浏览器进行绘制之前。

- 4.useMemo：会缓存计算结果，只有当数据变化的时候才会重新计算，用户避免不必要的计算，并优化函数组件性能。

- 5.useCallback： 用于缓存函数实例，以避免不必要的重新渲染。用于需要传递给子组件的函数，减少子组件的重复渲染。

- 6.useRef：可以用来访问DOM元素，或者保存跨渲染周期的数据，而不会触发组件的重新渲染。

- 7.useContext：提供一种在组件树中传递数据的方法，而不必在每个层级手动传递props。缺点是可能会导致过度渲染，只要context改变，所有使用这个context的组件都会重新渲染。

- 8.useReducer：用于在函数组件中管理复杂的状态逻辑。优点是可以统一管理单个组件的状态，然后有清晰的状态更新逻辑，随着迭代开发的进行，维护和更新状态逻辑将会更加容易。缺点是useReducer相对于useState更加复杂一点，没有useState直观简洁。

```js
function reduce(state, action) {
    switch (action.type) {
        case 'add':
            return { count: state.count + 1 }
        case 'cut':
            return { count: state.count - 1 }
        default:
            throw new Error()
    }
}
const initialState = {
    count: 100
}
const [state, dispatch] = useReducer(reduce, initState)
dispatch({ type: 'add' })
```

>在 React 中，"副作用"（side effects）指的是那些超出渲染流程的操作。这些操作通常涉及与外部系统的交互，例如发起网络请求、直接操作 DOM、设置订阅以及定时器、以及异步操作等。副作用可能会影响其他组件或与外部世界交互，因此它们不能在纯渲染过程中进行。

## 5.useMemo、React.memo、useCallback区别 ⭐

### 1.useMemo

- 1.用于缓存计算的结果，从而避免在每次渲染时重复执行昂贵的计算。

- 2.缺点

- 过度优化：在不需要优化的场景中使用 useMemo 可能是一种过度优化。对于一些轻量级的计算，重新计算的成本可能远低于记忆化的开销。

- 增加代码复杂度：useMemo 引入了额外的复杂性，因为你需要管理依赖数组。如果依赖项不正确，可能导致错误的行为或性能问题。

- 内存占用：记忆化值会在内存中占据空间。在大型应用中，过度使用 useMemo 可能会导致过多的内存占用。

### 2.useCallback

- 1.用于缓存函数实例，useCallback主要用于避免父组件渲染导致子组件不必要的渲染。

- 2.使用场景：当你将回调函数作为 prop 传递给子组件，特别是那些使用了 React.memo 或 shouldComponentUpdate 进行性能优化的子组件时，使用 useCallback 非常有用。如果不使用 useCallback，每次父组件渲染时都会创建一个新的函数实例，即使逻辑相同，这会导致子组件不必要的重新渲染。

- 3.缺点

- 过度优化：在许多情况下，函数的重新创建代价非常小，使用 useCallback 可能是一种过度优化。过度使用 useCallback 可能不会带来明显的性能改善，反而会增加代码的复杂性。

- 增加代码复杂度：useCallback 需要额外管理依赖项数组，这可能增加组件的维护难度。错误地管理依赖项可能导致 bug 或性能问题。

- 可能的性能损失：使用 useCallback 时，你需要在组件的渲染间保持函数的引用。这意味着 React 需要在内存中存储这些函数的引用，对于大量的函数，这可能导致额外的内存占用。

### 3.React.memo

- 1.React.memo 是一个高阶组件。它用于对组件进行性能优化，用于防止组件在相同的 props 下重新渲染。

- 2.缺点

- 浅层比较：React.memo 默认进行浅层比较 props。如果 props 是复杂对象，即使对象内容没有改变，对象的引用改变也会导致组件重新渲染。

- 过度使用可能导致性能问题:在不需要优化的组件上使用 React.memo 可能会带来额外的性能开销，因为即使是浅层比较也需要时间。

- 不适用于频繁变化的 props：对于那些经常变化的 props，使用 React.memo 可能不会带来太多性能提升，反而可能增加不必要的负担。

## 6.useState和useRef的区别 ⭐

- 1.触发渲染：useState 更新状态时会触发组件的重新渲染，而 useRef 更新 .current 属性时不会。

- 2.用途：useState 用于那些组件状态（通常是用户界面状态），这些状态的改变需要导致组件重新渲染。useRef 用于持久化存储数据，这些数据的改变不应该引起渲染。

- 3.返回值：useState 返回一个状态值和一个更新这个状态值的函数。useRef 返回一个具有 .current 属性的对象，你可以在其中存储任何值。

## 7.介绍一下 useEffect 和 useLayoutEffect ⭐

### 1.useEffect

- 作用：useEffect 用于在组件渲染到屏幕之后执行副作用操作。这些副作用包括数据获取、订阅或手动更改 React 组件树之外的 DOM。

- 执行时机：useEffect 在组件渲染到屏幕之后被调用，因此不会阻塞 DOM 的更新。这对于大多数副作用是合适的，尤其是那些不需要同步到屏幕的操作。

- 示例用途：数据请求、设置订阅、以及任何需要在组件加载后执行且不需要立即反映在屏幕上的操作。

### 2.useLayoutEffect

- 作用：useLayoutEffect 的使用和 useEffect 相似，但它在 DOM 更新完成后、浏览器绘制之前同步调用。这使得它可以读取 DOM 布局并同步重新渲染。

- 执行时机：useLayoutEffect 会在 DOM 更新后立即同步执行，但在浏览器进行任何绘制之前，这意味着你可以在浏览器绘制之前读取布局并同步更新它，避免不必要的视觉闪烁。

- 示例用途：用于需要同步计算和重新渲染的操作，例如测量 DOM 节点的布局、同步动画等。

## 8.说一下React中的类组件和函数式组件 ⭐

### 1.类组件

- 1.定义方式：类组件通过扩展 React.Component 类来定义。它们通常包含一个 render 方法，用于返回 JSX。

- 2.状态和生命周期：类组件可以有自己的状态（this.state）和生命周期方法（如 componentDidMount, componentDidUpdate 等）。

- 3.示例：

```jsx
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { /* 初始化状态 */ };
    }

    componentDidMount() {
        // 生命周期方法
    }

    render() {
        return <div>Hello, World!</div>;
    }
}
```

- 4.特点：

- 可以使用生命周期方法。

- 有自己的状态。

- 通常更适合大型和复杂的组件。

### 2.函数式组件

- 1.定义方式：函数式组件是用普通 JavaScript 函数或箭头函数定义的。它们接收 props 作为参数，并返回 JSX。

- 2.Hooks 的使用：引入 Hooks 后，函数式组件也能够使用状态（useState）和生命周期特性（useEffect 等）。

- 3.示例：

```jsx
function MyComponent(props) {
    const [state, setState] = useState(initialState);
    useEffect(() => {
        // 生命周期行为
    }, [dependencies]);

    return <div>Hello, World!</div>;
}
```

- 4.特点：

- 使用 Hooks 来管理状态和生命周期。

- 代码通常更简洁、易于阅读和维护。

- 适合大多数场景，特别是在 Hooks 引入后。

### 3.比较

- 1.语法和结构：类组件使用 ES6 类语法，函数式组件则是普通的 JavaScript 函数。

- 2.状态和生命周期：在 Hooks 出现之前，只有类组件可以使用状态和生命周期方法。现在，函数式组件通过 Hooks 也能使用这些特性。

- 3.使用场景：随着 Hooks 的普及，函数式组件变得更加强大，适用于绝大多数场景。类组件在某些复杂场景或者由于历史原因（旧代码库）仍然在使用。

## 9.高阶组件 ⭐

- 1.定义：高阶组件是一个接受组件作为参数并返回新组件的函数。

- 2.用途：用于复用组件逻辑，增强现有组件的功能。

- 3.实现：通常通过包裹原始组件来添加新的属性或行为。

## 10.受控组件与非受控组件 ⭐

### 1.受控组件

- 1.定义：受控组件是其值由 React 的 state 控制的组件。每当表单数据改变时，都会通过一个事件处理函数来更新 state，然后组件会根据这个新的 state 来重新渲染。

- 2.特点：

- 数据驱动：组件的状态完全由 React 的 state 和 props 控制。

- 即时更新：每个状态的改变都伴随着组件的重新渲染。

```jsx
import React, { useState } from 'react';

function ControlledComponent() {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return <input type="text" value={value} onChange={handleChange} />;
}
```

### 2.非受控组件

- 1.定义：非受控组件是其表单数据由 DOM 本身处理的组件。在非受控组件中，数据是由 DOM 节点自己维护的，而不是将数据存储在组件的 state 中。

- 2.特点：

- DOM 驱动：表单数据由 DOM 节点自己管理，React 不负责维护状态。

- 使用 ref 访问：通常通过 ref 来从 DOM 节点获取表单数据。

```jsx
import React, { useRef } from 'react';

function UncontrolledComponent() {
    const inputRef = useRef(null);

    const handleSubmit = (event) => {
        alert('A name was submitted: ' + inputRef.current.value);
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} />
            <button type="submit">Submit</button>
        </form>
    );
}
```

### 3.比较

- 1.数据管理：受控组件由 React 管理数据，而非受控组件由 DOM 管理数据。

- 2.更新方式：受控组件通过 state 和 props 实时更新，非受控组件通过 ref 在需要时获取当前值。

- 3.使用场景：受控组件适合于需要实时验证或控制输入内容的场景。非受控组件适合于表单数据不需要立即由 React 处理，或者在表单提交时处理数据的场景。

### 4.选择依据

- 1.受控组件更适合于实现更复杂的表单逻辑，如实时验证。

- 2.非受控组件更适合于不需要紧密集成到 React 应用状态中的表单。

>React 推荐使用受控组件来实现表单，因为这样可以更好地控制组件的状态和行为。然而，非受控组件在某些场景下（如对性能要求极高的场合）可能更为简便。

## 11.React18有哪些升级 ⭐

[官方文档](https://zh-hans.react.dev/blog/2022/03/29/react-v18)

- 1.并发渲染

在React18之前，所有任务都被视为急迫任务，react18引入了并发模式，在这个模式下，渲染是可以中断的，高优先级的任务可以优先渲染更新。开启并发模式只需要将之前的ReactDom.render换成ReactDom.createRoot这个新的api即可。

- 2.批量更新

在React 18 之前，我们只在 React 事件处理函数 中进行批处理更新。默认情况下，在promise、setTimeout、原生事件处理函数中、或任何其它事件内的更新都不会进行批处理。React18之后，默认自动执行批处理，多次更新合并为一次更新。

## 12.React 生命周期 ⭐

### 1.挂载阶段

当组件第一次被插入到 DOM 中时，它进入挂载阶段。其生命周期调用顺序如下：

- 1.constructor(): 在 React 组件挂载之前，会调用它的构造函数。

- 2.static getDerivedStateFromProps(): 当组件实例化后和接收新的 props 之前被调用。

- 3.render(): 必需的方法，返回组件要渲染的内容。

- 4.componentDidMount(): 在组件挂载到 DOM 后立即调用。用于执行需要 DOM 节点的操作，如数据加载、订阅等。

### 2.更新阶段

组件在挂载后可能会多次进入更新阶段。更新可以由 props 更改、state 更改或父组件重新渲染引起。组件更新的生命周期调用顺序如下：

- 1.static getDerivedStateFromProps(): 当组件接收新的 props 时调用。

- 2.shouldComponentUpdate(): 决定组件是否应该重新渲染。返回 false 可以阻止渲染。

- 3.render(): 与挂载阶段相同，用于渲染 UI。

- 4.getSnapshotBeforeUpdate(): 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。

- 5.componentDidUpdate(): 在组件更新后立即调用。可以在此进行 DOM 操作或执行更多的数据加载。

### 3.卸载阶段

当组件从 DOM 中移除时调用：

- 1.componentWillUnmount(): 在组件卸载和销毁之前直接调用。用于执行必要的清理操作，如取消网络请求、移除事件监听器等。

## 13.React的父子组件渲染过程 ⭐

>React 遵循自顶向下的数据流，所以父组件会在其子组件之前完成渲染。

### 1.挂载阶段

- 1.父组件的 constructor 执行
- 2.父组件的 getDerivedStateFromProps 执行
- 3.父组件的 render 执行
- 4.子组件的 constructor 执行
- 5.子组件 getDerivedStateFromProps 执行
- 6.子组件 render 执行
- 7.子组件 componentDidMount 执行
- 8.父组件的 componentDidMount 执行

### 2.更新阶段

- 1.父组件的 getDerivedStateFromProps 执行
- 2.父组件 shouldComponentUpdate 执行
- 3.父组件的 render 执行
- 4.子组件 getDerivedStateFromProps 执行
- 5.子组件 shouldComponentUpdate 执行
- 6.子组件 render 执行
- 7.子组件 getSnapshotBeforeUpdate 执行
- 8.父组件 getSnapshotBeforeUpdate 执行
- 9.子组件 componentDidUpdate 执行
- 10.父组件 componentDidUpdate 执行

## 3.卸载阶段

- 1.父组件 componentWillUnmount 执行
- 2.子组件 componentWillUnmount 执行
- 3.移除dom

### 4.父组件更新

- 如果父组件的状态或传递给子组件的 props 改变，父组件将重新渲染。

- 在父组件重新渲染时，子组件也会随之重新渲染，除非子组件通过特定的优化手段（如 React.memo 或 shouldComponentUpdate）阻止了渲染过程。

### 5.子组件更新

- 如果子组件的状态改变，只有该子组件会重新渲染，不会导致父组件重新渲染。

- 子组件的更新是独立的，除非这些更新涉及到父组件传递给子组件的 props。

### 6.渲染优化

- 在某些情况下，即使父组件重新渲染，你也可能不希望子组件进行无谓的渲染。这时，可以使用 React.memo（对于函数组件）或 shouldComponentUpdate 和 PureComponent（对于类组件）来防止不必要的渲染。

- 使用 React.memo 可以使子组件仅在其接收的 props 发生变化时才重新渲染。

### 7.传递函数

- 当父组件需要将函数传递给子组件以调用父组件的方法时（例如，更新父组件的状态），需要注意的是，这种情况下，如果父组件的状态或方法改变，子组件也会重新渲染，因为传递给子组件的函数 prop 已更改。

### 8.上下文（Context）API：

- React 的 Context API 允许数据在组件树中跨层级传递，而不必在每个层级手动传递 props。当使用 Context 时，如果 Context 的值发生变化，所有消费该 Context 的组件都会重新渲染。

## 14.Reatc高阶组件父子组件渲染过程 ⭐

### 1.初始渲染：

- 当使用高阶组件时，初始渲染的过程通常是：首先渲染高阶组件返回的组件，然后渲染传递给高阶组件的原始组件。

- 高阶组件可以在渲染过程中添加额外的逻辑、状态管理或者道具（props）转换。

### 2.高阶组件更新：

- 如果高阶组件的状态或道具发生变化，它将导致重新渲染。

- 由于高阶组件包裹了原始组件，因此任何导致高阶组件重新渲染的变化也会导致原始组件重新渲染。

### 3.原始组件更新：

- 原始组件自身的状态变化只会导致原始组件本身重新渲染，不会影响到高阶组件。

- 但是，如果高阶组件传递新的道具到原始组件，原始组件也会因此重新渲染。

### 4.优化：

- 与普通的父子组件相似，可以使用 React.memo、PureComponent 或 shouldComponentUpdate 等手段优化渲染性能，避免不必要的重新渲染。

- 特别是在高阶组件中，注意避免频繁改变传递给原始组件的道具，因为这会导致额外的渲染。

### 5.上下文（Context）API：

- 如果高阶组件或原始组件使用了 Context API，那么 Context 的变化可能会导致高阶组件和原始组件重新渲染，这取决于它们如何消费 Context。

## 15.高阶组件的生命周期 ⭐

> 高阶组件（HOC）本身不具备独立的生命周期方法，因为它们是函数，而不是组件类。但是，它们通过返回一个新的组件来影响包裹的组件的生命周期。理解如何通过高阶组件间接影响生命周期是掌握 React 高阶组件的关键。

- 高阶组件可以返回一个类组件，这个类组件则拥有自己的生命周期方法。通过这些生命周期方法，高阶组件可以在包裹的组件的生命周期的不同阶段执行额外的逻辑。

### 1.高阶组件和包裹组件的生命周期交互

- 1.初始化和挂载：

- 当使用高阶组件创建的组件被挂载时，首先会触发高阶组件返回的组件的 constructor 和 componentDidMount 方法，然后是包裹的组件的相应方法。

- 2.更新：

- 当组件的 props 或 state 发生变化时，首先会触发高阶组件返回的组件的 componentDidUpdate 方法，然后是包裹的组件的相应方法。

- 3.卸载：

- 当组件被卸载时，首先会触发高阶组件返回的组件的 componentWillUnmount 方法，然后是包裹的组件的相应方法。

### 2.注意事项

- 1.传递 props：确保高阶组件透传所有接收到的 props 给包裹的组件，否则可能导致意外的行为。

- 2.静态方法：如果包裹的组件有静态方法，应在高阶组件中进行相应的处理，以确保这些方法仍然可用。

- 3.Ref 的转发：由于高阶组件返回的是新组件，需要使用 React.forwardRef 来转发 ref。

## 16.类组件和函数组件中怎么进行组件卸载 ⭐

- 在 React 中，组件的卸载通常涉及清理操作，比如取消网络请求、移除事件监听器、清除定时器等，以防止内存泄漏。在类组件和函数组件中，组件卸载的处理方式有所不同。

### 1.类组件中的组件卸载

- 1.在类组件中，componentWillUnmount 生命周期方法用于执行组件卸载前的清理工作。这个方法是在组件从 DOM 中移除之前调用的。

- 2.示例：

```jsx
class MyComponent extends React.Component {
    componentDidMount() {
        // 挂载时的操作，例如添加事件监听
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        // 卸载前的清理操作
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        // 处理窗口调整大小的逻辑
    };

    render() {
        // 渲染 UI
    }
}
```

### 2.函数组件中的组件卸载

- 1.在函数组件中，可以使用 useEffect Hook 来处理副作用，包括组件的卸载逻辑。useEffect 允许你通过返回一个函数来指定卸载时的行为，这个返回的函数会在组件卸载时调用。

- 2.示例：

```jsx
import React, { useEffect } from 'react';

function MyComponent() {
    useEffect(() => {
        // 挂载时的操作
        window.addEventListener('resize', handleResize);

        // 卸载时的清理操作
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // 空依赖数组表示这个 effect 只在组件挂载和卸载时运行

    const handleResize = () => {
        // 处理窗口调整大小的逻辑
    };

    // 渲染 UI
}
```

### 3.总结

- 1.在类组件中，使用 componentWillUnmount 方法来执行清理操作。

- 2.在函数组件中，使用 useEffect Hook 并在其中返回一个清理函数来处理卸载逻辑。

## 17.React和Vue的区别 ⭐

- 1.写法：

>React采用JSX的写法，允许在JS中混合html

>Vue采用基于HTML的模板语法

- 2.数据可变性

>React采用数据不可变以及单向数据流

>Vue采用的是响应式数据的机制，数据更新视图自动更新。

- 3.指令系统

>React没有指令的概念，所有事情都通过JS和JSX完成

>Vue有一系列内置的指令，例如：v-if、v-for

相对而言，Vue提供了更多的封装和内置功能，使得开发者可以更快地上手和开发。而React则提供了更大的自由度，允许开发者选择他们需要的工具和库。

## 18.React的状态管理库Redux ⭐

redux是react的一个状态管理库。

Redux 的三大原则：

- 1.单一数据源：应用的状态存储在唯一的 store 中。

- 2.状态是只读的：唯一改变状态的方式是触发 action。

- 2.使用纯函数执行修改：为了指定 action 如何改变状态，你需要编写 reducers。

常用概念：

- 1.Actions：描述发生了什么的对象。

- 2.Reducers：指定每个 action 如何改变应用状态的函数。

- 3.Store：将 Actions 和 Reducers 绑定在一起的对象。

Redux 通过解耦状态和 UI，使得状态管理更加明确和可预测。但也因为其模式和约束，对于一些简单的应用，使用 Redux 可能会显得过于复杂。不过，在大型应用和复杂状态管理场景下，Redux 的优势就显现出来了。

## 19.React 的主要特点是什么?

### 1.组件化

React的应用是由多个组件组成的。组件可以被看作是独立的、可重复使用的代码块，它们各自管理自己的状态和渲染。

### 2.数据驱动视图

React是基于单向数据流的，就意味着在React应用中从父组件流向子组件（也就是props）。当数据改变时，UI自动更新；但反之并不是这样，UI中的改变不会直接回流影响数据。也就是说渲染界面，不应该直接操作dom，而是通过修改数据，数据驱动视图更新。

### 3.虚拟DOM

虚拟DOM是React用来提高性能的核心概念之一。它是一个在内存中的DOM的轻量级表示。当组件的状态改变时，React创建一个新的虚拟DOM树并与前一个树进行比较，然后决定如何进行有效的更新。

## 20.React 中 ref 的作用是什么？

- 1.允许直接访问 DOM 元素或组件实例。

## 21.说一下React 中的 props?

React是单向数据流的，而父组件给子组件传递数据就是使用props的。

props特性：

- 1.props是只读的，这意味着在一个组件内部，你不应该修改props。

- 2.传递数据和函数：不仅可以传递数据，还可以传递函数，从而允许子组件与父组件交互。

- 3.默认 Props：React 允许设置默认 props。这是当父组件没有提供某个 prop 时，组件可以有一个默认值。

## 22.状态和属性有什么区别?

### 1.状态（State）

- 1.定义：状态是组件内部维护的数据，它可以在组件内部被改变。状态是组件的私有属性，只能在定义它的组件内部访问和修改。

- 2.用途：状态用于存储组件的动态数据和控制组件的行为。当组件的状态改变时，组件会重新渲染。

- 3.特点：

- 可变的：组件可以改变自己的状态。

- 本地化：状态通常只在定义它的组件内部使用。

- 初始化：通常在组件的构造函数中初始化。

- 4.示例：使用类组件的 this.state 或函数组件的 useState 钩子来定义状态。

```jsx
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    // ...
}

function MyComponent() {
    const [count, setCount] = useState(0);
    // ...
}
```

### 2.属性（Props）

- 1.定义：属性是从父组件传递给子组件的数据。Props 是只读的，组件不能修改接收到的 props。

- 2.用途：Props 用于组件之间的通信，传递数据和配置。

- 3.特点：

- 只读的：组件不能修改自己接收的 props。

- 用于组件间通信：用于将数据从父组件传递到子组件。

- 可以是任何值：Props 可以是任何 JavaScript 数据类型，包括函数和 JSX。

- 4.示例：在父组件中定义，在子组件中通过 this.props 或直接作为参数访问。

```jsx
function ChildComponent(props) {
    return <div>{props.message}</div>;
}

function ParentComponent() {
    return <ChildComponent message="Hello from parent" />;
}
```

### 3.区别

- 1.可变性：状态是可变的（组件内部可以改变），而属性是不可变的（组件不能改变接收到的 props）。

- 2.所有权：状态由组件自己维护，而属性由父组件传递给子组件。

- 3.用途：状态用于管理组件的内部状态和行为，属性用于配置子组件和传递数据。

## 23.setState执行机制?

- 1.异步执行：在大多数情况下，setState 是异步的。这意味着在调用 setState 后，状态不会立即更新。这是为了性能优化：当在短时间内多次调用 setState 时，React 会批量处理这些更新，从而避免不必要的重渲染。

- 2.合并更新：当在一个事件处理函数中多次调用 setState 时，React 会将多个更新合并为一个更新。这意味着如果你多次对同一个状态字段调用 setState，只有最后一次的更新会被应用。

- 3.触发重新渲染：一旦状态更新（和可能的 props 更新），React 会重新执行 render 方法来确定是否需要更新 DOM。在这个过程中，React 会执行其“diffing”算法来比较新旧虚拟 DOM，并只更新必要的部分。

- 4.回调：setState 可以接受一个可选的第二个参数，这是一个在状态更新和组件渲染之后执行的回调函数。

## 24.React-Router工作原理

- React-Router 的工作原理是通过监听浏览器地址栏的变化，并根据当前 URL 动态地渲染一组 React 组件。这个过程完全在客户端上完成，所以 React-Router 是一个单页应用（SPA）的路由解决方案。

## 25.React代码层面有哪些性能优化的方式？

### 1.使用 React.memo 对函数组件进行优化

- React.memo：类似于 PureComponent，但用于函数组件。它可以防止不必要的渲染，如果组件的 props 没有发生变化，就不会重新渲染。

### 2.使用 useCallback 和 useMemo 钩子

- useCallback：用于缓存函数，避免不必要的重新创建函数实例。

- useMemo：用于缓存计算结果，减少昂贵的计算过程。

### 3.避免在渲染方法中创建新的对象或函数

- 避免在 render 方法或函数组件内部直接定义新的对象、数组或函数，因为这会在每次渲染时创建新的引用，导致子组件不必要的重新渲染。

### 4.适当使用 Fragment 和 Key

- 1.使用 React.Fragment 避免额外的 DOM 层级，减少 DOM 节点数量。

- 2.在渲染列表时正确使用 key，确保 React 可以有效地识别和重新使用 DOM 元素。

### 5.延迟组件加载（懒加载）

- 使用 React.lazy 和 Suspense 实现组件的懒加载，尤其适用于大型组件或在首次渲染时不必立即展示的组件。

### 6.避免不必要的 DOM 操作

- 尽量减少直接的 DOM 操作，让 React 控制 DOM 更新。

## 26.在组件库中当使用 forward refs 时，你需要额外的注意?

- 1.forwardRef 是 React 提供的一个工具，允许组件接收并“转发”接收到的 ref 到其子组件。它对于某些组件类型，尤其是可能作为高阶组件或是库中的组件，特别有用。这是因为在很多情况下，你可能想要从父组件直接获取子组件的 DOM 节点，而不是通过中间组件。

- 2.在 React 中，ref 并不是一个像 props 或 state 那样的属性。这意味着你不能直接将 ref 传递给子组件，除非使用特殊的手段。这就是 forwardRef 的用武之地。

## 拓展

>React面试比较重要的点：

- 1.fiber

- 2.diff

- 3.hooks

- 4.高阶组件

- 5.对生命周期的理解

- 6.React与Vue对比
