(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{318:function(_,v,t){"use strict";t.r(v);var p=t(10),l=Object(p.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"_8-计算机原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8-计算机原理"}},[_._v("#")]),_._v(" 8.计算机原理")]),_._v(" "),v("h2",{attrs:{id:"_1-http2新增-http3做了哪些优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-http2新增-http3做了哪些优化"}},[_._v("#")]),_._v(" 1.http2新增，http3做了哪些优化")]),_._v(" "),v("blockquote",[v("p",[_._v("1.http2大幅度的提升了网页的性能。")])]),_._v(" "),v("blockquote",[v("p",[_._v("2.http2是一个二进制协议，http1是一个超文本协议。")])]),_._v(" "),v("blockquote",[v("p",[_._v("3.http2遵循多路复用，同一域名下的内容只建立一次连接。")])]),_._v(" "),v("blockquote",[v("p",[_._v("4.http2会压缩请求头内容，http1不会进行压缩。")])]),_._v(" "),v("blockquote",[v("p",[_._v("5.http2允许服务器预先将网页所需要的资源PUSH到浏览器内存中。")])]),_._v(" "),v("blockquote",[v("p",[_._v("缺点，还未解决队头阻塞问题。")])]),_._v(" "),v("h2",{attrs:{id:"_2-http3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-http3"}},[_._v("#")]),_._v(" 2. http3")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("HTTP/3 基于之前的 HTTP/2 版本，进一步作出了以下优化：")])]),_._v(" "),v("li",[v("p",[_._v("1.QUIC 协议: 最重要的变化是从 TCP 转向 QUIC（基于 UDP）。这使得连接更快，减少了往返时延（RTT）。")])]),_._v(" "),v("li",[v("p",[_._v("2.更好的多路复用: 由于 QUIC 的设计，其多路复用不再受到“队头阻塞”（Head-of-line blocking）的影响。")])]),_._v(" "),v("li",[v("p",[_._v("3.0-RTT 连接（Zero Round Trip Time）: QUIC 支持 0-RTT 连接，进一步减少了握手的延时。")])])]),_._v(" "),v("h2",{attrs:{id:"_3-http1-1和http2的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-http1-1和http2的区别"}},[_._v("#")]),_._v(" 3.http1.1和http2的区别")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("HTTP/1.1：")])]),_._v(" "),v("li",[v("p",[_._v("1.文本协议: HTTP/1.1 是基于文本的，这使得它易于阅读和调试。")])]),_._v(" "),v("li",[v("p",[_._v("2.连接: 每个请求都需要一个新的 TCP 连接，或者使用持久连接（keep-alive）来减少多次建立和断开连接的开销。")])]),_._v(" "),v("li",[v("p",[_._v("3.队列阻塞: 在持久连接中，即使是并行发出的多个请求也必须一个接一个地得到响应，这会导致队列阻塞问题。")])]),_._v(" "),v("li",[v("p",[_._v("4.无服务器推送: 服务器不能主动将资源推送给客户端，除非客户端明确请求。")])]),_._v(" "),v("li",[v("p",[_._v("5.头部冗余: 每次请求都会携带相同的头信息，导致数据传输的低效。")])]),_._v(" "),v("li",[v("p",[_._v("HTTP/2：")])]),_._v(" "),v("li",[v("p",[_._v("1.二进制协议: HTTP/2 使用二进制格式，这使得解析、网络传输更高效。")])]),_._v(" "),v("li",[v("p",[_._v("2.多路复用: 单一的 TCP 连接可以处理多个请求和响应，减少了因多次建立和关闭连接导致的延迟。")])]),_._v(" "),v("li",[v("p",[_._v("3.服务器推送: 服务器可以预先推送客户端可能需要的资源，提高页面加载速度。")])])]),_._v(" "),v("h2",{attrs:{id:"_4-tcp的3次握手和4次挥手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-tcp的3次握手和4次挥手"}},[_._v("#")]),_._v(" 4.tcp的3次握手和4次挥手？")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("3次握手：")])]),_._v(" "),v("li",[v("p",[_._v("1.SYN: 客户端发送一个 TCP 数据包给服务器，请求建立连接。该数据包的 SYN 标志位被设置为 1。")])]),_._v(" "),v("li",[v("p",[_._v("2.SYN-ACK: 服务器收到 SYN 数据包后，发送一个新的 TCP 数据包，其 SYN 和 ACK 标志位都被设置为 1，以确认 SYN 数据包已经收到。")])]),_._v(" "),v("li",[v("p",[_._v("3.ACK: 最后，客户端再次发送一个 TCP 数据包，其 ACK 标志位被设置为 1，以确认它已经收到服务器的 SYN-ACK 数据包。")])]),_._v(" "),v("li",[v("p",[_._v("四次挥手：")])]),_._v(" "),v("li",[v("p",[_._v("1.FIN（终止请求）: 当一方（通常是客户端，但也可能是服务器）完成数据发送并希望关闭连接时，它会发送一个TCP包，其中设置了"),v("code",[_._v("FIN")]),_._v("（Finish）标志位，来通知另一方它想要终止连接。")])]),_._v(" "),v("li",[v("p",[_._v("2.ACK（确认） : 收到"),v("code",[_._v("FIN")]),_._v("包的一方（通常是服务器）会发送一个"),v("code",[_._v("ACK")]),_._v("（Acknowledgment，确认）包来确认已经收到"),v("code",[_._v("FIN")]),_._v('包。这一步并不会立即关闭连接，它只是告诉对方"我知道你想要关闭连接了"。')])]),_._v(" "),v("li",[v("p",[_._v("3.FIN（终止请求）: 服务器完成最后的数据发送后，也会发送一个设置了"),v("code",[_._v("FIN")]),_._v("标志位的TCP包给客户端，来请求关闭连接。")])]),_._v(" "),v("li",[v("p",[_._v("4.ACK（确认）: 最后，客户端收到服务器的"),v("code",[_._v("FIN")]),_._v("包后，会发送一个"),v("code",[_._v("ACK")]),_._v("包作为回应，确认已经收到服务器的终止请求。收到这个"),v("code",[_._v("ACK")]),_._v("包后，服务器关闭连接。")])])]),_._v(" "),v("h2",{attrs:{id:"_5-get和post区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-get和post区别"}},[_._v("#")]),_._v(" 5.get和post区别？")]),_._v(" "),v("blockquote",[v("p",[_._v("1.get传参通过url地址传递，post传参方式url不可见")])]),_._v(" "),v("blockquote",[v("p",[_._v("2.post更加的安全")])]),_._v(" "),v("blockquote",[v("p",[_._v("3.get请求可以被缓存，post不可以被缓存")])]),_._v(" "),v("blockquote",[v("p",[_._v("4.get请求有长度限制，因为URL长度是限制的，post请求没有长度限制。")])]),_._v(" "),v("h2",{attrs:{id:"_6-说一说常见的状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-说一说常见的状态码"}},[_._v("#")]),_._v(" 6.说一说常见的状态码？")]),_._v(" "),v("blockquote",[v("p",[_._v("1xx (信息响应)")])]),_._v(" "),v("p",[_._v("101 Switching Protocols: 服务器已理解并准备切换协议。")]),_._v(" "),v("blockquote",[v("p",[_._v("2xx (成功)")])]),_._v(" "),v("p",[_._v("200 OK: 请求成功。具体的操作取决于所用的请求方法。")]),_._v(" "),v("blockquote",[v("p",[_._v("3xx (重定向)")])]),_._v(" "),v("p",[_._v("304 Not Modified: 资源未修改，可以使用缓存的版本。")]),_._v(" "),v("blockquote",[v("p",[_._v("4xx (客户端错误)")])]),_._v(" "),v("p",[_._v("400 Bad Request: 服务器无法理解请求，因为其格式错误。\n401 Unauthorized: 请求未认证。这意味着用户没有提供凭据或提供的凭据是无效的。\n404 Not Found: 请求的资源在服务器上找不到。")]),_._v(" "),v("blockquote",[v("p",[_._v("5xx (服务器错误)")])]),_._v(" "),v("p",[_._v("500 Internal Server Error: 服务器遇到错误，使其无法完成请求。\n502 Bad Gateway: 作为网关或代理的服务器从上游服务器接收到无效响应。\n504 Gateway Timeout: 作为网关或代理的服务器未及时从上游服务器接收响应。")]),_._v(" "),v("h2",{attrs:{id:"_7-https有什么用-原理是什么-https加密是怎么加密的-https如何保证证书是可信任的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-https有什么用-原理是什么-https加密是怎么加密的-https如何保证证书是可信任的"}},[_._v("#")]),_._v(" 7.HTTPS有什么用，原理是什么？https加密是怎么加密的？https如何保证证书是可信任的？")]),_._v(" "),v("h3",{attrs:{id:"https的作用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#https的作用"}},[_._v("#")]),_._v(" HTTPS的作用：")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("1.加密: HTTPS使用TLS/SSL协议，确保数据在传输过程中的安全性，防止数据被窃取或篡改。")])]),_._v(" "),v("li",[v("p",[_._v("2.数据完整性: 确保数据在传输过程中没有被篡改。")])]),_._v(" "),v("li",[v("p",[_._v("3.身份验证: 确保用户访问的是他们预期访问的站点，并不是中间人攻击者的伪造站点。")])])]),_._v(" "),v("h3",{attrs:{id:"https的原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#https的原理"}},[_._v("#")]),_._v(" HTTPS的原理：")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("1.HTTPS是建立在HTTP之上，通过TLS（传输层安全协议，是SSL协议的后续版本）来加密数据包。整个过程涉及到公钥加密、私钥解密以及对称加密等多种技术。")])]),_._v(" "),v("li",[v("p",[_._v("2.握手过程:")])]),_._v(" "),v("li",[v("p",[_._v("客户端向服务器发起HTTPS请求。")])]),_._v(" "),v("li",[v("p",[_._v("服务器返回其公开证书，这个证书包含公钥。")])]),_._v(" "),v("li",[v("p",[_._v("客户端使用公钥对一个随机生成的对称密钥（session key）进行加密，然后将其发送回服务器。")])]),_._v(" "),v("li",[v("p",[_._v("服务器使用其私钥解密获得这个对称密钥。")])]),_._v(" "),v("li",[v("p",[_._v("从此，客户端和服务器双方都有了相同的对称密钥，之后的通信都使用这个密钥进行加密。")])]),_._v(" "),v("li",[v("p",[_._v("3.数据传输过程:")])]),_._v(" "),v("li",[v("p",[_._v("使用上述建立的对称密钥进行数据加密和解密。")])])]),_._v(" "),v("h3",{attrs:{id:"https加密"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#https加密"}},[_._v("#")]),_._v(" HTTPS加密")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("HTTPS的加密包含两部分：非对称加密和对称加密。")])]),_._v(" "),v("li",[v("p",[_._v("1.非对称加密:")])]),_._v(" "),v("li",[v("p",[_._v("用于握手过程。")])]),_._v(" "),v("li",[v("p",[_._v("服务器有一对密钥：公钥和私钥。公钥是公开的，任何人都可以获取；私钥是私有的，只有服务器知道。")])]),_._v(" "),v("li",[v("p",[_._v("客户端使用公钥加密数据，只有服务器的私钥可以解密。")])]),_._v(" "),v("li",[v("p",[_._v("2.对称加密:")])]),_._v(" "),v("li",[v("p",[_._v("用于数据传输。")])]),_._v(" "),v("li",[v("p",[_._v("客户端和服务器双方都知道这个密钥，用它来加密和解密数据。")])])]),_._v(" "),v("h3",{attrs:{id:"https如何保证证书是可信任的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#https如何保证证书是可信任的"}},[_._v("#")]),_._v(" HTTPS如何保证证书是可信任的：")]),_._v(" "),v("p",[_._v("证书的可信任性是通过证书颁发机构来保证的。")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("1.CA的角色:")])]),_._v(" "),v("li",[v("p",[_._v("CA是一个受信任的第三方机构，它会对申请证书的实体（例如网站）进行验证。")])]),_._v(" "),v("li",[v("p",[_._v("验证后，CA会为实体颁发一个数字证书。")])]),_._v(" "),v("li",[v("p",[_._v("该证书内含有实体的公钥以及一些其它信息，全部被CA的私钥加密。")])]),_._v(" "),v("li",[v("p",[_._v("2.浏览器和CA:")])]),_._v(" "),v("li",[v("p",[_._v("大多数浏览器都有预装的受信任的CA列表。")])]),_._v(" "),v("li",[v("p",[_._v("当浏览器收到服务器的证书时，会使用内置的CA公钥来解密服务器的证书，从而验证证书的真实性和完整性。")])]),_._v(" "),v("li",[v("p",[_._v("如果证书是受信任的CA签发的，并且证书中的域名与当前访问的域名相匹配，浏览器则认为这个证书是可信的。")])]),_._v(" "),v("li",[v("p",[_._v("3.中间人攻击:")])]),_._v(" "),v("li",[v("p",[_._v("由于CA的存在，即使攻击者可以拦截到通信，他们也无法伪造一个有效的证书来进行中间人攻击，因为他们没有受信任的CA的私钥。")])])]),_._v(" "),v("blockquote",[v("p",[_._v("通过以上机制，HTTPS确保了在浏览器与服务器之间进行的所有通信都是安全和私密的。")])]),_._v(" "),v("h2",{attrs:{id:"_8-tcp和udp的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8-tcp和udp的区别"}},[_._v("#")]),_._v(" 8.tcp和udp的区别？")]),_._v(" "),v("blockquote",[v("p",[_._v("1.tcp是面向连接的，udp是无连接的。")])]),_._v(" "),v("blockquote",[v("p",[_._v("2.tcp更加的可靠，udp不是可靠的。")])]),_._v(" "),v("blockquote",[v("p",[_._v("3.tcp可以保证消息的有序性，而udp不能保证消息的有序性。")])]),_._v(" "),v("blockquote",[v("p",[_._v("4.udp速度比tcp更快，因为它不用建立连接也不用保证消息的有序性。")])]),_._v(" "),v("blockquote",[v("p",[_._v("5.tcp是重量级协议，而udp是轻量级的，因为udp不用建立连接和保证消息的顺序，所以请求头里的元数据会少于tap。")])]),_._v(" "),v("blockquote",[v("p",[_._v("6.tcp头大小大于udp。")])]),_._v(" "),v("blockquote",[v("p",[_._v("7.tcp可以进行流控制，而udp不可以。")])]),_._v(" "),v("h2",{attrs:{id:"_9-osi七层网络模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_9-osi七层网络模型"}},[_._v("#")]),_._v(" 9.OSI七层网络模型")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("1.物理层")])]),_._v(" "),v("li",[v("p",[_._v("2.数据链路层")])]),_._v(" "),v("li",[v("p",[_._v("3.网络层")])]),_._v(" "),v("li",[v("p",[_._v("4.传输层")])])]),_._v(" "),v("p",[_._v("主要协议: TCP（传输控制协议）、UDP（用户数据报协议）。")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("5.会话层")])]),_._v(" "),v("li",[v("p",[_._v("6.表示层")])]),_._v(" "),v("li",[v("p",[_._v("7.应用层")])])]),_._v(" "),v("p",[_._v("主要协议: HTTP、FTP、SMTP、DNS等。")])])}),[],!1,null,null,null);v.default=l.exports}}]);