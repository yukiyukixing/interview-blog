(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{311:function(e,a,l){"use strict";l.r(a);var r=l(10),t=Object(r.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_4-前端工程化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-前端工程化"}},[e._v("#")]),e._v(" 4.前端工程化")]),e._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6844904094281236487#heading-0",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack参考学习资料"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"_1-webpack构建流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-webpack构建流程"}},[e._v("#")]),e._v(" 1.Webpack构建流程")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("1.初始化配置参数：从配置文件和shell语句中读取与合并参数，得出最终的参数；")])]),e._v(" "),a("li",[a("p",[e._v("2.开始编译：用上一步得到的参数初始化一个Compiler对象，加载所有配置的插件，执行对象的run方法开始执行编译")])]),e._v(" "),a("li",[a("p",[e._v("3.确定入口：从配置中的entry找出所有的入口文件")])]),e._v(" "),a("li",[a("p",[e._v("4.模块解析：从入口文件开始，递归解析出文件中所依赖的所有模块")])]),e._v(" "),a("li",[a("p",[e._v("5.模块加载：对于每个依赖的模块，使用相应的loader处理它们。例如：babel-loader将ES6代码转成ES5代码")])]),e._v(" "),a("li",[a("p",[e._v("6.依赖图构建：将所有的模块和它们之间的依赖关系表示为一个依赖图")])]),e._v(" "),a("li",[a("p",[e._v("7.输出资源生成：根据依赖图和配置，生成一系列的输出资源，例如：bundle.js")])]),e._v(" "),a("li",[a("p",[e._v("8.输出完成：根据配置确定输出的路径和文件名，把生成的输出资源内容写入到文件系统，通常是dist文件夹")])])]),e._v(" "),a("h2",{attrs:{id:"_2-你使用过哪些loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-你使用过哪些loader"}},[e._v("#")]),e._v(" 2.你使用过哪些Loader")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("1.babel-loader：用于将ES6转成ES5")])]),e._v(" "),a("li",[a("p",[e._v("2.css-loader：用于处理css，会对 @import 和 url() 进行处理")])]),e._v(" "),a("li",[a("p",[e._v("3.style-loader：用于将css插入到html中")])]),e._v(" "),a("li",[a("p",[e._v("4.postcss-loader：用于将css添加浏览器前缀，确保你的 CSS 兼容各种浏览器。")])]),e._v(" "),a("li",[a("p",[e._v("4.less-loader：用于将less转成css")])]),e._v(" "),a("li",[a("p",[e._v("5.url-loader：用于将图片转成base64")])]),e._v(" "),a("li",[a("p",[e._v("6.file-loader：用于将图片转成文件")])])]),e._v(" "),a("h2",{attrs:{id:"_3-你使用过哪些plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-你使用过哪些plugin"}},[e._v("#")]),e._v(" 3.你使用过哪些Plugin")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("1.terser-webpack-plugin：该插件使用 terser 来压缩 JS")])]),e._v(" "),a("li",[a("p",[e._v("2.html-webpack-plugin：简化 HTML 文件创建，以便为打包出来的webpack其他文件服务")])]),e._v(" "),a("li",[a("p",[e._v("3.eslint-webpack-plugin：在 Webpack 的构建过程中运行 ESLint，检查你的代码是否符合规范")])]),e._v(" "),a("li",[a("p",[e._v("4.progress-bar-webpack-plugin：在构建过程中显示一个进度条")])]),e._v(" "),a("li",[a("p",[e._v("5.mini-css-extract-plugin：将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件，并且支持 CSS 按需加载")])]),e._v(" "),a("li",[a("p",[e._v("6.css-minimizer-webpack-plugin：优化和压缩CSS")])])]),e._v(" "),a("h2",{attrs:{id:"_4-说一说loader和plugin的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-说一说loader和plugin的区别"}},[e._v("#")]),e._v(" 4.说一说Loader和Plugin的区别")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("1.Loader本质上是一个函数，因为有些资源Webpack不认识，需要Loader进行翻译处理，对其他类型的资源做转译工作，返回转换后的结果。然后Loader是在module.rules中配置，类型是一个数组，然后每一项是一个对象，可以配置对应的loader和规则。")])]),e._v(" "),a("li",[a("p",[e._v("2.Plugin是插件，插件可以用来扩展Webpack的功能，例如上面说到的简化 HTML 创建的插件，都是属于扩展Webpack功能的。Plugin是单独配置的，类型也是一个数组，每一项是一个Plugin实例，参数通过构造函数传入。")])])]),e._v(" "),a("h2",{attrs:{id:"_4-webpack热更新原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-webpack热更新原理"}},[e._v("#")]),e._v(" 4.Webpack热更新原理")]),e._v(" "),a("h2",{attrs:{id:"_8-loader-plugin-原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-loader-plugin-原理"}},[e._v("#")]),e._v(" 8.loader plugin 原理")]),e._v(" "),a("h2",{attrs:{id:"_9-webpack打包优化的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-webpack打包优化的方式"}},[e._v("#")]),e._v(" 9.webpack打包优化的方式")]),e._v(" "),a("blockquote",[a("p",[e._v("参考链接1："),a("a",{attrs:{href:"https://www.cnblogs.com/wangjiachen666/p/11561186.html#_label1_4",target:"_blank",rel:"noopener noreferrer"}},[e._v("常用的webpack优化方法"),a("OutboundLink")],1)])]),e._v(" "),a("blockquote",[a("p",[e._v("参考链接2："),a("a",{attrs:{href:"https://webpack.wuhaolin.cn/4%E4%BC%98%E5%8C%96/4-3%E4%BD%BF%E7%94%A8HappyPack.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("深入浅出webpack"),a("OutboundLink")],1)])]),e._v(" "),a("blockquote",[a("p",[e._v("分为优化打包速度和优化打包后的体积。")])]),e._v(" "),a("blockquote",[a("p",[e._v("优化打包速度：1.优化Loader搜索范围。2.cache-loader缓存loader处理结果，只对性能开销较大的loader进行缓存。因为保存和读取这些缓存会有一些时间开销。3.使用多线程打包的方法。4.noParse：可以配置让webpack不去进行某些模块的解析。5.webpack-bundle-analyzer生成代码分析报告。")])]),e._v(" "),a("blockquote",[a("p",[e._v("优化打包体积：")])]),e._v(" "),a("blockquote",[a("p",[e._v("1.使用image-webpack-loader对图片进行压缩和优化。")])]),e._v(" "),a("blockquote",[a("p",[e._v("2.删除无用的CSS样式。使用purgecss-webpack-plugin插件")])]),e._v(" "),a("blockquote",[a("p",[e._v("3.以CDN的方式加载资源。使用add-asset-html-cdn-webpack-plugin插件。")])]),e._v(" "),a("blockquote",[a("p",[e._v("4.开启Tree Shaking。去除代码中的无用代码。")])]),e._v(" "),a("blockquote",[a("p",[e._v("7.按需加载。")])]),e._v(" "),a("h2",{attrs:{id:"_10-tree-shaking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-tree-shaking"}},[e._v("#")]),e._v(" 10.Tree-Shaking")]),e._v(" "),a("blockquote",[a("p",[e._v("作用：用来删除掉没有用的代码。")])]),e._v(" "),a("blockquote",[a("p",[e._v("tree-shaking消除原理利用的是ES6的模块特性。")])]),e._v(" "),a("blockquote",[a("p",[e._v("ES6模块依赖关系是确定的，和运行时的状态无关，可以进行可靠的静态分析，这是tree-shaking的基础。")])]),e._v(" "),a("h2",{attrs:{id:"_11-babel原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-babel原理"}},[e._v("#")]),e._v(" 11.babel原理")]),e._v(" "),a("blockquote",[a("p",[e._v("babel核心处理流程：1.将源代码解析成AST 2.转换AST为需要的样子 3.打印AST为源码")])]),e._v(" "),a("blockquote",[a("p",[e._v("将ES6的代码转换为ES6以下版本可以运行的代码。")])])])}),[],!1,null,null,null);a.default=t.exports}}]);