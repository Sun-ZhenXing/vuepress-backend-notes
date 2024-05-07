import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as r,c as i,b as t,a as o,w as a,e,d as l}from"./app-C0-zUjo9.js";const p={},m=t("h1",{id:"mime-类型",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#mime-类型"},[t("span",null,"MIME 类型")])],-1),f={class:"table-of-contents"},h=t("h2",{id:"1-常见-mime-类型",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#1-常见-mime-类型"},[t("span",null,"1. 常见 MIME 类型")])],-1),M={href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types",target:"_blank",rel:"noopener noreferrer"},g=t("sup",{class:"footnote-ref"},[t("a",{href:"#footnote1"},"[1]"),t("a",{class:"footnote-anchor",id:"footnote-ref1"})],-1),_=l(`<table><thead><tr><th>文件扩展名</th><th>MIME 类型</th><th>描述</th></tr></thead><tbody><tr><td><code>.html</code> / <code>.htm</code></td><td><code>text/html</code></td><td>HTML 文档</td></tr><tr><td><code>.css</code></td><td><code>text/css</code></td><td>CSS 文档</td></tr><tr><td><code>.js</code></td><td><code>text/javascript</code></td><td>JavaScript 文档</td></tr><tr><td><code>.gif</code></td><td><code>image/gif</code></td><td>GIF 图片</td></tr><tr><td><code>.jpg</code> / <code>.jpeg</code></td><td><code>image/jpeg</code></td><td>JPEG 图片</td></tr><tr><td><code>.webp</code></td><td><code>image/webp</code></td><td>WebP 图片</td></tr><tr><td><code>.png</code></td><td><code>image/png</code></td><td>PNG 图片</td></tr><tr><td><code>.svg</code></td><td><code>image/svg+xml</code></td><td>SVG 图片</td></tr><tr><td><code>.tiff</code></td><td><code>image/tiff</code></td><td>TIFF 图片</td></tr><tr><td><code>.ico</code></td><td><code>image/x-icon</code></td><td>ICO 图标</td></tr><tr><td><code>.txt</code></td><td><code>text/plain</code></td><td>纯文本文档</td></tr><tr><td><code>.json</code></td><td><code>application/json</code></td><td>JSON 文档</td></tr><tr><td><code>.xml</code></td><td><code>application/xml</code> / <code>text/xml</code></td><td>XML 文档</td></tr><tr><td><code>.pdf</code></td><td><code>application/pdf</code></td><td>PDF 文档</td></tr><tr><td><code>.bin</code></td><td><code>application/octet-stream</code></td><td>二进制文件</td></tr><tr><td><code>.woff</code></td><td><code>font/font-woff</code></td><td>WOFF 字体</td></tr><tr><td><code>.woff2</code></td><td><code>font/font-woff2</code></td><td>WOFF2 字体</td></tr><tr><td><code>.ttf</code></td><td><code>font/ttf</code></td><td>TTF 字体</td></tr><tr><td><code>.otf</code></td><td><code>font/otf</code></td><td>OTF 字体</td></tr></tbody></table><h2 id="2-nginx-配置-mime-类型" tabindex="-1"><a class="header-anchor" href="#2-nginx-配置-mime-类型"><span>2. Nginx 配置 MIME 类型</span></a></h2><p>如果你的网站使用了 Nginx 默认不识别的文件类型，那么你需要在配置文件中添加对应的 MIME 类型。</p><p>如果配置不正确，浏览器会可能无法正确识别文件类型：<code>Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type</code>。</p><p>大部分常用的 MIME 类型已经被默认支持，如果需要，记得引入 <code>mime.types</code> 文件：</p><div class="language-nginx" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">include</span> /etc/nginx/mime.types</span><span class="token punctuation">;</span>

    <span class="token comment"># ...</span>
<span class="token punctuation">}</span>
</code></pre></div><p>在 Debian/Ubuntu/Alpine 等系统中，<code>mime.types</code> 文件的路径为 <code>/etc/nginx/mime.types</code>。</p><hr class="footnotes-sep">`,8),u={class:"footnotes"},x={class:"footnotes-list"},E={id:"footnote1",class:"footnote-item"},I={href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types",target:"_blank",rel:"noopener noreferrer"},y=t("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1);function b(T,k){const d=c("router-link"),n=c("ExternalLinkIcon");return r(),i("div",null,[m,t("nav",f,[t("ul",null,[t("li",null,[o(d,{to:"#1-常见-mime-类型"},{default:a(()=>[e("1. 常见 MIME 类型")]),_:1})]),t("li",null,[o(d,{to:"#2-nginx-配置-mime-类型"},{default:a(()=>[e("2. Nginx 配置 MIME 类型")]),_:1})])])]),h,t("p",null,[e("可通过 MDN 查看 "),t("a",M,[e("常见的 MIME 类型"),o(n)]),g,e("。")]),_,t("section",u,[t("ol",x,[t("li",E,[t("p",null,[e("MDN，Common MIME types，"),t("a",I,[e("https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types"),o(n)]),e(),y])])])])])}const P=s(p,[["render",b],["__file","mime.html.vue"]]),F=JSON.parse('{"path":"/tools/nginx/mime.html","title":"MIME 类型","lang":"zh-CN","frontmatter":{"description":"MIME 类型 1. 常见 MIME 类型 可通过 MDN 查看 常见的 MIME 类型[1]。 2. Nginx 配置 MIME 类型 如果你的网站使用了 Nginx 默认不识别的文件类型，那么你需要在配置文件中添加对应的 MIME 类型。 如果配置不正确，浏览器会可能无法正确识别文件类型：Failed to load module script: ...","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/vuepress-backend-notes/vuepress-backend-notes/tools/nginx/mime.html"}],["meta",{"property":"og:site_name","content":"后端笔记"}],["meta",{"property":"og:title","content":"MIME 类型"}],["meta",{"property":"og:description","content":"MIME 类型 1. 常见 MIME 类型 可通过 MDN 查看 常见的 MIME 类型[1]。 2. Nginx 配置 MIME 类型 如果你的网站使用了 Nginx 默认不识别的文件类型，那么你需要在配置文件中添加对应的 MIME 类型。 如果配置不正确，浏览器会可能无法正确识别文件类型：Failed to load module script: ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-06T13:09:45.000Z"}],["meta",{"property":"article:author","content":"鸭梨"}],["meta",{"property":"article:modified_time","content":"2024-05-06T13:09:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MIME 类型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-06T13:09:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鸭梨\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[{"level":2,"title":"1. 常见 MIME 类型","slug":"1-常见-mime-类型","link":"#1-常见-mime-类型","children":[]},{"level":2,"title":"2. Nginx 配置 MIME 类型","slug":"2-nginx-配置-mime-类型","link":"#2-nginx-配置-mime-类型","children":[]}],"git":{"createdTime":1682841391000,"updatedTime":1715000985000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":0.96,"words":287},"filePathRelative":"tools/nginx/mime.md","localizedDate":"2023年4月30日","autoDesc":true,"excerpt":"\\n\\n<h2>1. 常见 MIME 类型</h2>\\n<p>可通过 MDN 查看 <a href=\\"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">常见的 MIME 类型</a><sup class=\\"footnote-ref\\"><a href=\\"#footnote1\\">[1]</a><a class=\\"footnote-anchor\\" id=\\"footnote-ref1\\"></a></sup><a class=\\"footnote-anchor\\" id=\\"footnote-ref1\\">。</a></p>"}');export{P as comp,F as data};