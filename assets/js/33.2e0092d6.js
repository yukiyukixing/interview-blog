(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{318:function(_,v,t){"use strict";t.r(v);var p=t(10),a=Object(p.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"_6-计算机原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-计算机原理"}},[_._v("#")]),_._v(" 6.计算机原理")]),_._v(" "),v("h2",{attrs:{id:"_1-tcp的3次握手和4次挥手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-tcp的3次握手和4次挥手"}},[_._v("#")]),_._v(" 1.tcp的3次握手和4次挥手？")]),_._v(" "),v("h3",{attrs:{id:"_1-三次握手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-三次握手"}},[_._v("#")]),_._v(" 1.三次握手")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("1.SYN: 客户端发送一个 TCP 数据包给服务器，请求建立连接。该数据包的 SYN 标志位被设置为 1。")])]),_._v(" "),v("li",[v("p",[_._v("2.SYN-ACK: 服务器收到 SYN 数据包后，发送一个新的 TCP 数据包，其 SYN 和 ACK 标志位都被设置为 1，以确认 SYN 数据包已经收到。")])]),_._v(" "),v("li",[v("p",[_._v("3.ACK: 最后，客户端再次发送一个 TCP 数据包，其 ACK 标志位被设置为 1，以确认它已经收到服务器的 SYN-ACK 数据包。")])])]),_._v(" "),v("h3",{attrs:{id:"_2-四次挥手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-四次挥手"}},[_._v("#")]),_._v(" 2.四次挥手")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("1.FIN（终止请求）: 当一方（通常是客户端，但也可能是服务器）完成数据发送并希望关闭连接时，它会发送一个TCP包，其中设置了"),v("code",[_._v("FIN")]),_._v("（Finish）标志位，来通知另一方它想要终止连接。")])]),_._v(" "),v("li",[v("p",[_._v("2.ACK（确认） : 收到"),v("code",[_._v("FIN")]),_._v("包的一方（通常是服务器）会发送一个"),v("code",[_._v("ACK")]),_._v("（Acknowledgment，确认）包来确认已经收到"),v("code",[_._v("FIN")]),_._v('包。这一步并不会立即关闭连接，它只是告诉对方"我知道你想要关闭连接了"。')])]),_._v(" "),v("li",[v("p",[_._v("3.FIN（终止请求）: 服务器完成最后的数据发送后，也会发送一个设置了"),v("code",[_._v("FIN")]),_._v("标志位的TCP包给客户端，来请求关闭连接。")])]),_._v(" "),v("li",[v("p",[_._v("4.ACK（确认）: 最后，客户端收到服务器的"),v("code",[_._v("FIN")]),_._v("包后，会发送一个"),v("code",[_._v("ACK")]),_._v("包作为回应，确认已经收到服务器的终止请求。收到这个"),v("code",[_._v("ACK")]),_._v("包后，服务器关闭连接。")])])]),_._v(" "),v("h2",{attrs:{id:"_2-说一说常见的状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-说一说常见的状态码"}},[_._v("#")]),_._v(" 2.说一说常见的状态码？")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("1.1xx (信息响应)：101: 服务器已理解并准备切换协议。")])]),_._v(" "),v("li",[v("p",[_._v("2.2xx (成功)：200 OK: 请求成功。具体的操作取决于所用的请求方法。")])]),_._v(" "),v("li",[v("p",[_._v("3.3xx (重定向)：304 Not Modified: 资源未修改，可以使用缓存的版本。")])]),_._v(" "),v("li",[v("p",[_._v("4.4xx (客户端错误)")])]),_._v(" "),v("li",[v("p",[_._v("400 Bad Request: 服务器无法理解请求，因为其格式错误。")])]),_._v(" "),v("li",[v("p",[_._v("401 Unauthorized: 请求未认证。这意味着用户没有提供凭据或提供的凭据是无效的。")])]),_._v(" "),v("li",[v("p",[_._v("404 Not Found: 请求的资源在服务器上找不到。")])]),_._v(" "),v("li",[v("p",[_._v("5.5xx (服务器错误)")])]),_._v(" "),v("li",[v("p",[_._v("500 Internal Server Error: 服务器遇到错误，使其无法完成请求。")])]),_._v(" "),v("li",[v("p",[_._v("502 Bad Gateway: 作为网关或代理的服务器从上游服务器接收到无效响应。")])]),_._v(" "),v("li",[v("p",[_._v("504 Gateway Timeout: 作为网关或代理的服务器未及时从上游服务器接收响应。")])])]),_._v(" "),v("h2",{attrs:{id:"_3-https加密是怎么加密的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-https加密是怎么加密的"}},[_._v("#")]),_._v(" 3.https加密是怎么加密的？")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("HTTPS的加密包含两部分：非对称加密和对称加密。")])]),_._v(" "),v("li",[v("p",[_._v("1.非对称加密:")])]),_._v(" "),v("li",[v("p",[_._v("用于握手过程。")])]),_._v(" "),v("li",[v("p",[_._v("服务器有一对密钥：公钥和私钥。公钥是公开的，任何人都可以获取；私钥是私有的，只有服务器知道。")])]),_._v(" "),v("li",[v("p",[_._v("客户端使用公钥加密数据，只有服务器的私钥可以解密。")])]),_._v(" "),v("li",[v("p",[_._v("2.对称加密:")])]),_._v(" "),v("li",[v("p",[_._v("用于数据传输。")])]),_._v(" "),v("li",[v("p",[_._v("客户端和服务器双方都知道这个密钥，用它来加密和解密数据。")])])]),_._v(" "),v("h2",{attrs:{id:"_4-tcp和udp的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-tcp和udp的区别"}},[_._v("#")]),_._v(" 4.tcp和udp的区别？")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("1.tcp是面向连接的，udp是无连接的。")])]),_._v(" "),v("li",[v("p",[_._v("2.tcp更加的可靠，udp不是可靠的。")])]),_._v(" "),v("li",[v("p",[_._v("3.tcp可以保证消息的有序性，而udp不能保证消息的有序性。")])]),_._v(" "),v("li",[v("p",[_._v("4.udp速度比tcp更快，因为它不用建立连接也不用保证消息的有序性。")])]),_._v(" "),v("li",[v("p",[_._v("5.tcp是重量级协议，而udp是轻量级的，因为udp不用建立连接和保证消息的顺序，所以请求头里的元数据会少于tap。")])]),_._v(" "),v("li",[v("p",[_._v("6.tcp头大小大于udp。")])]),_._v(" "),v("li",[v("p",[_._v("7.tcp可以进行流控制，而udp不可以。")])])])])}),[],!1,null,null,null);v.default=a.exports}}]);