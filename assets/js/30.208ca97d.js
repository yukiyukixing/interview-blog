(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{316:function(a,t,_){"use strict";_.r(t);var e=_(10),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"_7-微前端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-微前端"}},[a._v("#")]),a._v(" 7.微前端")]),a._v(" "),t("h2",{attrs:{id:"_1-webpack5的模块联邦实现原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-webpack5的模块联邦实现原理"}},[a._v("#")]),a._v(" 1.Webpack5的模块联邦实现原理")]),a._v(" "),t("ul",[t("li",[a._v("允许一个 JS 应用动态地从另一个应用加载代码，而不需要将这些代码打包在一起。模块联邦主要用于微前端架构，使得不同团队可以独立开发和部署应用的不同部分。")])]),a._v(" "),t("h3",{attrs:{id:"_1-模块联邦的基本原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-模块联邦的基本原理"}},[a._v("#")]),a._v(" 1.模块联邦的基本原理")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("模块联邦的核心概念是允许一个 Webpack 构建的应用（称为主机）动态地从另一个应用（称为远程）加载模块。")])]),a._v(" "),t("li",[t("p",[a._v("1.远程模块：在远程应用中，某些模块被标记为可供其他应用使用。这是通过 Webpack 配置中的 ModuleFederationPlugin 实现的，其中定义了哪些模块是暴露给外部使用的。")])]),a._v(" "),t("li",[t("p",[a._v("2.动态加载：主机应用可以通过动态导入（如 import()）从远程应用加载这些暴露的模块。这个过程是异步的，允许应用在运行时按需加载代码。")])]),a._v(" "),t("li",[t("p",[a._v("3.共享模块：模块联邦还允许多个应用共享依赖库，避免重复加载相同的库代码。这通过配置共享模块来实现。")])])]),a._v(" "),t("h3",{attrs:{id:"_2-工作流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-工作流程"}},[a._v("#")]),a._v(" 2.工作流程")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("1.配置远程应用：在远程应用的 Webpack 配置中，使用 ModuleFederationPlugin 定义暴露的模块和共享的库。")])]),a._v(" "),t("li",[t("p",[a._v("2.配置主机应用：在主机应用的 Webpack 配置中，同样使用 ModuleFederationPlugin，指定它将从哪个远程应用中加载模块。")])]),a._v(" "),t("li",[t("p",[a._v("3.运行时加载：主机应用在运行时，根据需要从远程应用动态加载模块。Webpack 会处理从远程应用加载模块的细节，包括网络请求和模块初始化。")])]),a._v(" "),t("li",[t("p",[a._v("4.共享依赖：如果主机和远程应用共享一些依赖，Webpack 会尽量确保这些依赖只加载一次，即使它们被多个应用使用。")])])]),a._v(" "),t("h3",{attrs:{id:"_3-优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-优点"}},[a._v("#")]),a._v(" 3.优点")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("1.独立部署：模块联邦允许不同团队独立开发和部署应用的不同部分，提高了开发效率和部署灵活性。")])]),a._v(" "),t("li",[t("p",[a._v("2.减少代码重复：通过共享依赖，减少了代码冗余和加载时间。")])]),a._v(" "),t("li",[t("p",[a._v("3.灵活的微前端架构：使得微前端架构的实现更加灵活和高效。")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);