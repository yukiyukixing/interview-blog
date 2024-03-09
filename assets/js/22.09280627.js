(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{296:function(t,s,a){t.exports=a.p+"assets/img/vector.a20d3b50.png"},308:function(t,s,a){"use strict";a.r(s);var e=a(10),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_8-3d"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-3d"}},[t._v("#")]),t._v(" 8.3D")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://threejs.org/docs/index.html#manual/zh/introduction/Creating-a-scene",target:"_blank",rel:"noopener noreferrer"}},[t._v("three.js官网文档"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"_1-three-js-中点击拾取是怎么做的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-three-js-中点击拾取是怎么做的"}},[t._v("#")]),t._v(" 1.Three.js 中点击拾取是怎么做的")]),t._v(" "),s("p",[t._v("Three.js 中点击拾取是通过射线投射去做的。")]),t._v(" "),s("ul",[s("li",[t._v("1.创建一个 Raycaster 对象和一个用于存储鼠标位置的二维向量。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化射线投射器和鼠标向量")]),t._v("\nraycaster "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Raycaster")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmouse "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Vector2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("2.转换鼠标位置：当用户点击屏幕时，需要将鼠标的屏幕坐标转换为 Three.js 使用的标准化设备坐标（NDC）。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("mouse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientX "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerWidth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmouse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("3.检测物体和射线的交集：在用户点击事件的处理函数中，使用射线投射器来检测与场景中物体的交集。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新射线投射方向")]),t._v("\nraycaster"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setFromCamera")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mouse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" camera"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取射线和物体的交集")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" intersects "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" raycaster"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("intersectObject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cubes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("4.处理选中的物体：在 intersects 数组中，你会得到所有与射线相交的物体。这个数组是按距离摄像机从近到远排序的，所以 intersects[0] 是最近的物体。你可以在这里添加自己的逻辑来处理这些物体，比如更改它们的颜色、显示信息标签等。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 还原所有线框立方体的颜色")]),t._v("\ncubes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("c")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("material"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x00ff00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("intersects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 改变选中线框立方体的颜色")]),t._v("\n    intersects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("material"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xff0000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"_2-three-js性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-three-js性能优化"}},[t._v("#")]),t._v(" 2.Three.js性能优化")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("1.只渲染相机视角内的物体。")])]),t._v(" "),s("li",[s("p",[t._v("2.优化几何体或模型本身，通过建模软件或者通过合并几何体减少三角面的数量和顶点的数量。")])]),t._v(" "),s("li",[s("p",[t._v("3.不同层级加载不同精度的模型或几何体（Lod）。")])]),t._v(" "),s("li",[s("p",[t._v("4.使用webworker多线程做一些解析和复杂计算的工作")])]),t._v(" "),s("li",[s("p",[t._v("5.利用 Instancing，当需要渲染大量相同对象（变换可以不同，位置，旋转，缩放可以不同）时，使用 instancing 可以大幅提高性能。这个其实是优化了数据从CPU传输到GPU的数据量与传输的次数。")])])]),t._v(" "),s("h2",{attrs:{id:"_3-描述一下-three-js-的主要组成和工作原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-描述一下-three-js-的主要组成和工作原理"}},[t._v("#")]),t._v(" 3.描述一下 Three.js 的主要组成和工作原理")]),t._v(" "),s("p",[t._v("Three.js是一个基于webgl封装的3D可视化的图形库。")]),t._v(" "),s("ul",[s("li",[s("ol",[s("li",[t._v("主要组成:")])])]),t._v(" "),s("li",[s("p",[t._v("1.场景（Scene）: 一个场景代表了一个3D的空间，里面包含了物体、光源等元素。想象它就像一个3D的舞台。")])]),t._v(" "),s("li",[s("p",[t._v("2.相机（Camera）: 相机定义了从哪个视角查看场景。Three.js 提供了多种相机，如正交相机（OrthographicCamera）和透视相机（PerspectiveCamera）。")])]),t._v(" "),s("li",[s("p",[t._v("3.物体（Objects）: 在 Three.js 中，一个物体通常由几何体（Geometry）和材料（Material）组成。几何体定义了物体的形状，而材料定义了物体的表面特性，如颜色、纹理等。")])]),t._v(" "),s("li",[s("p",[t._v("4.光源（Lights）: 光源影响场景中物体的明暗和颜色。Three.js 提供了多种光源，如点光源（PointLight）、方向光（DirectionalLight）、聚光灯（SpotLight）等。")])]),t._v(" "),s("li",[s("p",[t._v("5.渲染器（Renderer）: 负责将场景和相机的信息转化为像素，从而在屏幕上显示3D图像。WebGLRenderer 是 Three.js 中最常用的渲染器，基于 WebGL 实现。")])]),t._v(" "),s("li",[s("p",[t._v("6.动画和交互: Three.js 提供了动画系统和射线投影（Raycasting）等工具来支持动画和交互。")])]),t._v(" "),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[t._v("工作原理:")])])]),t._v(" "),s("li",[s("p",[t._v("1.初始化: 创建场景、相机、渲染器等基础组件。")])]),t._v(" "),s("li",[s("p",[t._v("2.添加内容: 将物体、光源等添加到场景中。")])]),t._v(" "),s("li",[s("p",[t._v("3.渲染循环: 在动画或交互期间，渲染器会不断地重新绘制场景。")])]),t._v(" "),s("li",[s("p",[t._v("4.渲染器使用场景和相机的数据，通过 WebGL API 绘制每一帧。")])]),t._v(" "),s("li",[s("p",[t._v("5.若有动画或交互，场景中的物体可能会移动或变形，需要在每一帧中更新。")])]),t._v(" "),s("li",[s("p",[t._v("6.交互: 通过监听事件和射线投影检测用户的交互操作。")])]),t._v(" "),s("li",[s("p",[t._v("7.动画: 使用 Three.js 的动画系统或请求动画帧（requestAnimationFrame）来更新场景中物体的状态。")])])]),t._v(" "),s("h2",{attrs:{id:"_4-three-js与babylon-js对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-three-js与babylon-js对比"}},[t._v("#")]),t._v(" 4.Three.js与Babylon.js对比")]),t._v(" "),s("h3",{attrs:{id:"_1-性能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-性能"}},[t._v("#")]),t._v(" 1.性能")]),t._v(" "),s("ul",[s("li",[t._v("大型场景中Babylon.js提供的性能可能会比Three更好")])]),t._v(" "),s("h3",{attrs:{id:"_2-功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-功能"}},[t._v("#")]),t._v(" 2.功能")]),t._v(" "),s("ul",[s("li",[t._v("Babylon.js拥有更多的内置功能和高级功能")])]),t._v(" "),s("h3",{attrs:{id:"_3-适用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-适用场景"}},[t._v("#")]),t._v(" 3.适用场景")]),t._v(" "),s("ul",[s("li",[t._v("Babylon.js可能更适用于复杂的场景和游戏开发，而Three.js更适合小型或中型的项目开发。")])]),t._v(" "),s("h2",{attrs:{id:"_5-点和直线的对称点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-点和直线的对称点"}},[t._v("#")]),t._v(" 5.点和直线的对称点")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("1.做垂线，知道了一个在直线上的点")])]),t._v(" "),s("li",[s("p",[t._v("2.然后这条垂线的斜率也是已知的")])]),t._v(" "),s("li",[s("p",[t._v("3.通过直线上的一个点和斜率可以列两个方程，求出对称点。")])])]),t._v(" "),s("blockquote",[s("p",[t._v("向量的方法：")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(296),alt:"vector.png"}})]),t._v(" "),s("h2",{attrs:{id:"_6-判断点是否在一个多边形内"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-判断点是否在一个多边形内"}},[t._v("#")]),t._v(" 6.判断点是否在一个多边形内")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("1.从点 P 向任意方向发出一条射线")])]),t._v(" "),s("li",[s("p",[t._v("2.计算射线与多边形边界的交点数量。")])]),t._v(" "),s("li",[s("p",[t._v("3.如果交点数量是奇数，那么点 P 在多边形内；如果是偶数，点 P 在多边形外。")])])]),t._v(" "),s("h2",{attrs:{id:"_7-矩阵的乘法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-矩阵的乘法"}},[t._v("#")]),t._v(" 7.矩阵的乘法")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("1.两个矩阵相乘，前提是第一个矩阵的列数等于第二个矩阵的行数。")])]),t._v(" "),s("li",[s("p",[t._v("2.得到的矩阵的每一项等于第一个矩阵的行数乘以第二个矩阵的列数。")])])]),t._v(" "),s("h2",{attrs:{id:"webgl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webgl"}},[t._v("#")]),t._v(" webgl")]),t._v(" "),s("h2",{attrs:{id:"shader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shader"}},[t._v("#")]),t._v(" shader")])])}),[],!1,null,null,null);s.default=n.exports}}]);