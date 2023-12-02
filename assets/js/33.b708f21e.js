(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{318:function(_,t,v){"use strict";v.r(t);var a=v(10),s=Object(a.a)({},(function(){var _=this,t=_._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"_6-计算机原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-计算机原理"}},[_._v("#")]),_._v(" 6.计算机原理")]),_._v(" "),t("h2",{attrs:{id:"_1-http1-1与http2-0的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-http1-1与http2-0的区别"}},[_._v("#")]),_._v(" 1.http1.1与http2.0的区别")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("1.协议类型：http1.1是文本协议。http2.0是二进制协议。")])]),_._v(" "),t("li",[t("p",[_._v("2.服务器推送：http1.1只支持客户端向服务端发起请求，而http2.0支持服务端推送。")])]),_._v(" "),t("li",[t("p",[_._v("3.多路复用：http1.1一个tcp连接只能处理一个请求，如果前面请求慢的话就会阻塞后面的请求。而http2支持多路复用，也就是一个tcp连接支持多个请求，这解决了队头阻塞问题。")])]),_._v(" "),t("li",[t("p",[_._v("4.头部压缩：http1.1不会对请求的头部进行压缩，而http2会对请求的头部进行压缩处理，减少头部大小，从而降低延迟和宽带消耗。")])])]),_._v(" "),t("h2",{attrs:{id:"_2-tcp的3次握手和4次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-tcp的3次握手和4次挥手"}},[_._v("#")]),_._v(" 2.TCP的3次握手和4次挥手？")]),_._v(" "),t("h3",{attrs:{id:"_1-三次握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-三次握手"}},[_._v("#")]),_._v(" 1.三次握手")]),_._v(" "),t("blockquote",[t("p",[_._v("三次握手是建立连接的过程。")])]),_._v(" "),t("ul",[t("li",[t("p",[_._v("1.SYN: 客户端发送一个 TCP 数据包给服务器，请求建立连接。该数据包的 SYN 标志位被设置为 1。")])]),_._v(" "),t("li",[t("p",[_._v("2.SYN-ACK: 服务器收到 SYN 数据包后，发送一个新的 TCP 数据包，其 SYN 和 ACK 标志位都被设置为 1，以确认 SYN 数据包已经收到。")])]),_._v(" "),t("li",[t("p",[_._v("3.ACK: 最后，客户端再次发送一个 TCP 数据包，其 ACK 标志位被设置为 1，以确认它已经收到服务器的 SYN-ACK 数据包。")])])]),_._v(" "),t("h3",{attrs:{id:"_2-四次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-四次挥手"}},[_._v("#")]),_._v(" 2.四次挥手")]),_._v(" "),t("blockquote",[t("p",[_._v("四次挥手是断开连接的过程。")])]),_._v(" "),t("ul",[t("li",[t("p",[_._v("1.FIN（终止请求）: 当一方（通常是客户端，但也可能是服务器）完成数据发送并希望关闭连接时，它会发送一个TCP包，其中设置了"),t("code",[_._v("FIN")]),_._v("（Finish）标志位，来通知另一方它想要终止连接。")])]),_._v(" "),t("li",[t("p",[_._v("2.ACK（确认） : 收到"),t("code",[_._v("FIN")]),_._v("包的一方（通常是服务器）会发送一个"),t("code",[_._v("ACK")]),_._v("（Acknowledgment，确认）包来确认已经收到"),t("code",[_._v("FIN")]),_._v('包。这一步并不会立即关闭连接，它只是告诉对方"我知道你想要关闭连接了"。')])]),_._v(" "),t("li",[t("p",[_._v("3.FIN（终止请求）: 服务器完成最后的数据发送后，也会发送一个设置了"),t("code",[_._v("FIN")]),_._v("标志位的TCP包给客户端，来请求关闭连接。")])]),_._v(" "),t("li",[t("p",[_._v("4.ACK（确认）: 最后，客户端收到服务器的"),t("code",[_._v("FIN")]),_._v("包后，会发送一个"),t("code",[_._v("ACK")]),_._v("包作为回应，确认已经收到服务器的终止请求。收到这个"),t("code",[_._v("ACK")]),_._v("包后，服务器关闭连接。")])])]),_._v(" "),t("h2",{attrs:{id:"_3-说一说常见的状态码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-说一说常见的状态码"}},[_._v("#")]),_._v(" 3.说一说常见的状态码？")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("1.1xx (信息响应)：101: 服务器已理解并准备切换协议。")])]),_._v(" "),t("li",[t("p",[_._v("2.2xx (成功)：200 OK: 请求成功。具体的操作取决于所用的请求方法。")])]),_._v(" "),t("li",[t("p",[_._v("3.3xx (重定向)：304 Not Modified: 资源未修改，可以使用缓存的版本。")])]),_._v(" "),t("li",[t("p",[_._v("4.4xx (客户端错误)")])]),_._v(" "),t("li",[t("p",[_._v("400 Bad Request: 服务器无法理解请求，因为其格式错误。")])]),_._v(" "),t("li",[t("p",[_._v("401 Unauthorized: 请求未认证。这意味着用户没有提供凭据或提供的凭据是无效的。")])]),_._v(" "),t("li",[t("p",[_._v("404 Not Found: 请求的资源在服务器上找不到。")])]),_._v(" "),t("li",[t("p",[_._v("5.5xx (服务器错误)")])]),_._v(" "),t("li",[t("p",[_._v("500 Internal Server Error: 服务器遇到错误，使其无法完成请求。")])]),_._v(" "),t("li",[t("p",[_._v("502 Bad Gateway: 作为网关或代理的服务器从上游服务器接收到无效响应。")])]),_._v(" "),t("li",[t("p",[_._v("504 Gateway Timeout: 作为网关或代理的服务器未及时从上游服务器接收响应。")])])]),_._v(" "),t("h2",{attrs:{id:"_4-https加密是怎么加密的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-https加密是怎么加密的"}},[_._v("#")]),_._v(" 4.https加密是怎么加密的？")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("HTTPS的加密包含两部分：非对称加密和对称加密。")])]),_._v(" "),t("li",[t("p",[_._v("1.非对称加密:")])]),_._v(" "),t("li",[t("p",[_._v("用于握手过程。")])]),_._v(" "),t("li",[t("p",[_._v("服务器有一对密钥：公钥和私钥。公钥是公开的，任何人都可以获取；私钥是私有的，只有服务器知道。")])]),_._v(" "),t("li",[t("p",[_._v("客户端使用公钥加密数据，只有服务器的私钥可以解密。")])]),_._v(" "),t("li",[t("p",[_._v("2.对称加密:")])]),_._v(" "),t("li",[t("p",[_._v("用于数据传输。")])]),_._v(" "),t("li",[t("p",[_._v("客户端和服务器双方都知道这个密钥，用它来加密和解密数据。")])])]),_._v(" "),t("h2",{attrs:{id:"_5-tcp和udp的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-tcp和udp的区别"}},[_._v("#")]),_._v(" 5.tcp和udp的区别？")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("1.tcp是面向连接的，udp是无连接的。")])]),_._v(" "),t("li",[t("p",[_._v("2.tcp更加的可靠，udp不是可靠的。")])]),_._v(" "),t("li",[t("p",[_._v("3.tcp可以保证消息的有序性，而udp不能保证消息的有序性。")])]),_._v(" "),t("li",[t("p",[_._v("4.udp速度比tcp更快，因为它不用建立连接也不用保证消息的有序性。")])]),_._v(" "),t("li",[t("p",[_._v("5.tcp是重量级协议，而udp是轻量级的，因为udp不用建立连接和保证消息的顺序，所以请求头里的元数据会少于tap。")])]),_._v(" "),t("li",[t("p",[_._v("6.tcp头大小大于udp。")])]),_._v(" "),t("li",[t("p",[_._v("7.tcp可以进行流控制，而udp不可以。")])])]),_._v(" "),t("h2",{attrs:{id:"_6-osi-七层网络模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-osi-七层网络模型"}},[_._v("#")]),_._v(" 6.OSI 七层网络模型")]),_._v(" "),t("blockquote",[t("p",[_._v("OSI将计算机网络体系结构划分为以下七层，标有1～7，第1层在底部。")])]),_._v(" "),t("h3",{attrs:{id:"_1-第1层-物理层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-第1层-物理层"}},[_._v("#")]),_._v(" 1.第1层 物理层")]),_._v(" "),t("ul",[t("li",[_._v("负责在物理媒介上传输原始比特流。包括物理设备和传输介质（如电缆、光纤）。")])]),_._v(" "),t("h3",{attrs:{id:"_2-第2层-数据链路层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-第2层-数据链路层"}},[_._v("#")]),_._v(" 2.第2层 数据链路层")]),_._v(" "),t("ul",[t("li",[_._v("负责在两个直接连接的节点之间创建、维护和终止可靠的链接。包括帧定界、地址解析、错误检测和纠正。")])]),_._v(" "),t("h3",{attrs:{id:"_3-第3层-网络层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-第3层-网络层"}},[_._v("#")]),_._v(" 3.第3层 网络层")]),_._v(" "),t("ul",[t("li",[_._v("负责在不同网络间的数据传输和路由选择。包括分组交换、路由选择和流量控制。")])]),_._v(" "),t("h3",{attrs:{id:"_4-第4层-传输层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-第4层-传输层"}},[_._v("#")]),_._v(" 4.第4层 传输层")]),_._v(" "),t("ul",[t("li",[_._v("负责为两台主机之间的通信提供可靠的数据传输服务。包括错误恢复、数据完整性和流量控制。例如：TCP、UDP协议")])]),_._v(" "),t("h3",{attrs:{id:"_5-第5层-会话层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-第5层-会话层"}},[_._v("#")]),_._v(" 5.第5层 会话层")]),_._v(" "),t("ul",[t("li",[_._v("负责在网络中的两节点之间建立、管理和终止会话。包括会话建立、管理和终止。")])]),_._v(" "),t("h3",{attrs:{id:"_6-第6层-表现层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-第6层-表现层"}},[_._v("#")]),_._v(" 6.第6层 表现层")]),_._v(" "),t("ul",[t("li",[_._v("负责数据的翻译、加密和压缩。确保传输的数据可以被接收端的应用层正确解读。")])]),_._v(" "),t("h3",{attrs:{id:"_7-第7层-应用层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-第7层-应用层"}},[_._v("#")]),_._v(" 7.第7层 应用层")]),_._v(" "),t("ul",[t("li",[_._v("负责处理特定的应用程序细节。包括各种应用程序协议，如 HTTP、FTP、SMTP 等。")])])])}),[],!1,null,null,null);t.default=s.exports}}]);