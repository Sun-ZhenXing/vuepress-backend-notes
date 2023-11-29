import{_ as a,r as n,o as r,c as i,b as t,a as d,w as s,d as e,e as l}from"./app-0dJ2_MxH.js";const p={},m=t("h1",{id:"mime-类型",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#mime-类型","aria-hidden":"true"},"#"),e(" MIME 类型")],-1),f={class:"table-of-contents"},h=t("h2",{id:"1-常见-mime-类型",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#1-常见-mime-类型","aria-hidden":"true"},"#"),e(" 1. 常见 MIME 类型")],-1),_={href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types",target:"_blank",rel:"noopener noreferrer"},g=t("sup",{class:"footnote-ref"},[t("a",{href:"#footnote1"},"[1]"),t("a",{class:"footnote-anchor",id:"footnote-ref1"})],-1),x=l(`<table><thead><tr><th>文件扩展名</th><th>MIME 类型</th><th>描述</th></tr></thead><tbody><tr><td><code>.html</code> / <code>.htm</code></td><td><code>text/html</code></td><td>HTML 文档</td></tr><tr><td><code>.css</code></td><td><code>text/css</code></td><td>CSS 文档</td></tr><tr><td><code>.js</code></td><td><code>text/javascript</code></td><td>JavaScript 文档</td></tr><tr><td><code>.gif</code></td><td><code>image/gif</code></td><td>GIF 图片</td></tr><tr><td><code>.jpg</code> / <code>.jpeg</code></td><td><code>image/jpeg</code></td><td>JPEG 图片</td></tr><tr><td><code>.webp</code></td><td><code>image/webp</code></td><td>WebP 图片</td></tr><tr><td><code>.png</code></td><td><code>image/png</code></td><td>PNG 图片</td></tr><tr><td><code>.svg</code></td><td><code>image/svg+xml</code></td><td>SVG 图片</td></tr><tr><td><code>.tiff</code></td><td><code>image/tiff</code></td><td>TIFF 图片</td></tr><tr><td><code>.ico</code></td><td><code>image/x-icon</code></td><td>ICO 图标</td></tr><tr><td><code>.txt</code></td><td><code>text/plain</code></td><td>纯文本文档</td></tr><tr><td><code>.json</code></td><td><code>application/json</code></td><td>JSON 文档</td></tr><tr><td><code>.xml</code></td><td><code>application/xml</code> / <code>text/xml</code></td><td>XML 文档</td></tr><tr><td><code>.pdf</code></td><td><code>application/pdf</code></td><td>PDF 文档</td></tr><tr><td><code>.bin</code></td><td><code>application/octet-stream</code></td><td>二进制文件</td></tr><tr><td><code>.woff</code></td><td><code>font/font-woff</code></td><td>WOFF 字体</td></tr><tr><td><code>.woff2</code></td><td><code>font/font-woff2</code></td><td>WOFF2 字体</td></tr><tr><td><code>.ttf</code></td><td><code>font/ttf</code></td><td>TTF 字体</td></tr><tr><td><code>.otf</code></td><td><code>font/otf</code></td><td>OTF 字体</td></tr></tbody></table><h2 id="2-nginx-配置-mime-类型" tabindex="-1"><a class="header-anchor" href="#2-nginx-配置-mime-类型" aria-hidden="true">#</a> 2. Nginx 配置 MIME 类型</h2><p>如果你的网站使用了 Nginx 默认不识别的文件类型，那么你需要在配置文件中添加对应的 MIME 类型。</p><p>如果配置不正确，浏览器会可能无法正确识别文件类型：<code>Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type</code>。</p><p>大部分常用的 MIME 类型已经被默认支持，如果需要，记得引入 <code>mime.types</code> 文件：</p><div class="language-nginx" data-ext="nginx"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">http</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">   </span><span style="color:#569CD6;"> include </span><span style="color:#D4D4D4;">/etc/nginx/mime.types;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;"># ...</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><p>在 Debian/Ubuntu/Alpine 等系统中，<code>mime.types</code> 文件的路径为 <code>/etc/nginx/mime.types</code>。</p><hr class="footnotes-sep">`,8),M={class:"footnotes"},u={class:"footnotes-list"},b={id:"footnote1",class:"footnote-item"},y={href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types",target:"_blank",rel:"noopener noreferrer"},E=t("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1);function D(I,T){const o=n("router-link"),c=n("ExternalLinkIcon");return r(),i("div",null,[m,t("nav",f,[t("ul",null,[t("li",null,[d(o,{to:"#1-常见-mime-类型"},{default:s(()=>[e("1. 常见 MIME 类型")]),_:1})]),t("li",null,[d(o,{to:"#2-nginx-配置-mime-类型"},{default:s(()=>[e("2. Nginx 配置 MIME 类型")]),_:1})])])]),h,t("p",null,[e("可通过 MDN 查看 "),t("a",_,[e("常见的 MIME 类型"),d(c)]),g,e("。")]),x,t("section",M,[t("ol",u,[t("li",b,[t("p",null,[e("MDN，Common MIME types，"),t("a",y,[e("https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types"),d(c)]),e(),E])])])])])}const k=a(p,[["render",D],["__file","mime.html.vue"]]);export{k as default};