(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{324:function(e,t,r){"use strict";r.r(t);var a=r(10),o=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"_4-项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-项目"}},[e._v("#")]),e._v(" 4.项目")]),e._v(" "),t("h2",{attrs:{id:"_1-标注成果数据查看平台"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-标注成果数据查看平台"}},[e._v("#")]),e._v(" 1.标注成果数据查看平台")]),e._v(" "),t("ul",[t("li",[e._v("1.介绍一下你们的这个标注成果数据查看平台的项目")])]),e._v(" "),t("p",[e._v("标注成果数据查看平台这个项目是我们公司有一批标注结果数据，长安汽车那边需要买去做算法训练用，然后就需要一个可视化查看这些数据的一个平台。然后我们就做了这个标注成果数据查看平台。然后主要的功能是根据数据分为三种模式，图片模式，点云融合模式，点云分割模式。然后每种模式都有的功能就是左侧一个标注数据信息列表，右侧就是图片的展示或点云的展示，图片点云的展示包含图片和点云的渲染以及图片点云上的标注信息的渲染，然后还有就是左侧的列表里的每条标注信息可以和图片或点云上的标注框联动，也可以操作标注框的显示和隐藏，当然也有全局显示和全局隐藏的功能。还有缩放，导出数据等功能。然后我主要负责这些功能的开发。然后主要涉及到技术就是，首先框架是React，状态管理用的Redux，图片渲染和画框用的fabric.js，点云的渲染和画框用的three.js。")]),e._v(" "),t("ul",[t("li",[e._v("2.你在做这个项目过程中有没有遇到什么难点？")])]),e._v(" "),t("p",[e._v("有的，因为我们做的是标注成果数据查看平台，因为我们的点云数据是带标注结果的，所以文件比较大，有五六十M的大小，一般我们的点云文件都是10M以内的，然后分割点云数据这么大的话，加载渲染就会慢，打开页面大概3秒左右你才会看见点云渲染出来。之前我们是使用webwork的方式进行优化，但是优化之后效果不是很好，后面我们又使用potree进行优化，效果比较好，大概在0.5秒左右就可以渲染出来。")]),e._v(" "),t("blockquote",[t("p",[e._v("你们怎么使用webwork进行优化的？")])]),e._v(" "),t("p",[e._v("首先我们要说下点云的加载渲染，我们是使用 three 的 PCDLoader 这个模块进行点云加载渲染的，然后 PCDLoader 主要做了哪些事情呢。首先是通过 load 方法记载点云文件的 url，加载完成之后调用解析方法 parse ，然后解析的过程是，首先将获取到的二进制数据转成文本数据，然后从这个文本数据中解析出点云文件的头信息，包含版本、字段、大小、类型、数量、宽度、高度、视点和点数信息，然后通过头文件中的data字段判断这个点云是什么类型的，PCD 点云文件分3个类型，ascii文本类型、binary二进制类型、binary_compressed类型，我们使用的都是binary_compressed类型，然后通过头文件中解析出来的 points 字段信息遍历得到点云所有点的位置、法线、颜色、强度、label标签的数据，然后创建一个geometry对象，将这些信息设置到geometry上，最后构建点云对象 new Points(geometry) 返回。我们将这部分的点云解析的工作放到webwork中去做了，但是优化的效果并不是很好。")]),e._v(" "),t("blockquote",[t("p",[e._v("那你们是怎么使用potree进行优化的？")])]),e._v(" "),t("p",[e._v("我们之前拿到的是url是一个pcd文件地址，但是使用potree的话需要将pcd转成potree格式的数据，后端就将这个pcd文件转成一个potree格式的js文件，这里他们应该使用PotreeConverter这个去转的，然后前端拿到一个potree格式数据的js地址，然后使用potree的js库去加载这个文件，然后这种优化效果比较好，原来大概需要3秒，使用这种方式大概0.5秒不到就加载渲染完成了。potree的主要优化首先是将数据格式重新组织成层次化结构数据，例如八叉树的数据格式，从而实现对数据的高效管理和访问。从而可以实现渐进式加载，也就是逐步加载不同级别的数据。同时也会对点云进行简化，移除一些不必要的点来减少数据量，还会根据用户的视角对点云进行性能优化，调整点云的密度和质量，同时potree内部也会使用多线程技术对点云加载进行处理，从而提高性能。")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("3.你们的图片的渲染具体是怎么做的？")])]),e._v(" "),t("li",[t("p",[e._v("图片渲染，首先创建一个fabric实例（new fabric.Canvas），获取到数据之后，从数据里面拿到图片的url地址，然后通过fabric.Image.fromURL()方法加载图片，然后图片加载完成之后再加载标注框数据，从加载完的图片身上获取到宽度，然后得到要渲染框的缩放比例，然后从数据里面拿到对应的标注框的数据遍历渲染，根据数据里的框类型进行渲染，类型有矩形框，点，多边形。")])]),e._v(" "),t("li",[t("p",[e._v("渲染矩形框，主要传的参数有框的id，名称category，left，top，width，height，fill，stroke，strokeWidth，cornerSize。")])]),e._v(" "),t("li",[t("p",[e._v("4.你们点云上的标注框的渲染具体是怎么做的？")])]),e._v(" "),t("li",[t("p",[e._v("从数据里面拿到点框的一个中心点坐标，然后拿到标注框的长宽高，以及一个旋转角度参数angle以及标注框的id和其他属性信息，然后通过BoxGeometry创建3D标注框。")])]),e._v(" "),t("li",[t("p",[e._v("5.你们单个显示隐藏和全局显示隐藏是怎么做的？")])])]),e._v(" "),t("p",[e._v("全局显示隐藏：通过objectCanvas.getObjects()获取到所有的点框，然后遍历通过设置不透明度opacity为1或0实现显示和隐藏的功能。")]),e._v(" "),t("p",[e._v("单个显示隐藏：点击列表上哪一条数据的时候，点击的回调方法中可以拿到这条数据的id，然后拿到所有的框去进行遍历，然后找到与这个id相等的框，然后通过设置不透明度来实现显示隐藏。")]),e._v(" "),t("h2",{attrs:{id:"_2-数据智能平台"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据智能平台"}},[e._v("#")]),e._v(" 2.数据智能平台")])])}),[],!1,null,null,null);t.default=o.exports}}]);