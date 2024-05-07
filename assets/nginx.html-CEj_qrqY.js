import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as r,c as l,b as t,a as n,w as a,d as c,e as o}from"./app-C0-zUjo9.js";const i={},p=t("h1",{id:"使用-docker-部署-nginx",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#使用-docker-部署-nginx"},[t("span",null,"使用 Docker 部署 Nginx")])],-1),h={class:"table-of-contents"},g=c(`<h2 id="1-常见标签" tabindex="-1"><a class="header-anchor" href="#1-常见标签"><span>1. 常见标签</span></a></h2><table><thead><tr><th>标签</th><th>容器环境</th></tr></thead><tbody><tr><td><code>latest</code></td><td>最新版本</td></tr><tr><td><code>mainline*</code></td><td>主线版本</td></tr><tr><td><code>stable*</code></td><td>稳定版本</td></tr><tr><td><code>*alpine*</code></td><td>Alpine</td></tr><tr><td><code>*bullseye*</code></td><td>Debian 11</td></tr><tr><td><code>*bullseye-perl</code></td><td>Debian 11 + Perl</td></tr><tr><td><code>*alpine*-perl</code></td><td>Alpine + Perl</td></tr><tr><td><code>*alpine*-slim</code></td><td>Alpine 最小版本</td></tr></tbody></table><p>如果不需要任何插件或扩展，而只使用配置文件部署 Nginx，可以直接使用 <code>nginx:stable-alpine-slim</code> 系列镜像，这些是体积最小的镜像，通常不含有其他依赖。</p><h2 id="2-示例" tabindex="-1"><a class="header-anchor" href="#2-示例"><span>2. 示例</span></a></h2><p>拉取镜像：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull nginx:1.25.3-alpine3.18-slim
</code></pre></div><p>示例 <code>Dockerfile</code> 文件：</p><div class="language-docker" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> nginx:1.25.3-alpine3.18-slim</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /usr/share/nginx/html/docs/</span>

<span class="token instruction"><span class="token keyword">COPY</span> <span class="token variable">$PWD</span>/dist/ ./</span>

<span class="token instruction"><span class="token keyword">EXPOSE</span> 80</span>

<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;nginx&quot;</span>, <span class="token string">&quot;-g&quot;</span>, <span class="token string">&quot;daemon off;&quot;</span>]</span>
</code></pre></div>`,8);function u(m,k){const e=s("router-link");return r(),l("div",null,[p,t("nav",h,[t("ul",null,[t("li",null,[n(e,{to:"#1-常见标签"},{default:a(()=>[o("1. 常见标签")]),_:1})]),t("li",null,[n(e,{to:"#2-示例"},{default:a(()=>[o("2. 示例")]),_:1})])])]),g])}const y=d(i,[["render",u],["__file","nginx.html.vue"]]),_=JSON.parse('{"path":"/tools/docker/nginx.html","title":"使用 Docker 部署 Nginx","lang":"zh-CN","frontmatter":{"description":"使用 Docker 部署 Nginx 1. 常见标签 如果不需要任何插件或扩展，而只使用配置文件部署 Nginx，可以直接使用 nginx:stable-alpine-slim 系列镜像，这些是体积最小的镜像，通常不含有其他依赖。 2. 示例 拉取镜像： 示例 Dockerfile 文件：","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/vuepress-backend-notes/vuepress-backend-notes/tools/docker/nginx.html"}],["meta",{"property":"og:site_name","content":"后端笔记"}],["meta",{"property":"og:title","content":"使用 Docker 部署 Nginx"}],["meta",{"property":"og:description","content":"使用 Docker 部署 Nginx 1. 常见标签 如果不需要任何插件或扩展，而只使用配置文件部署 Nginx，可以直接使用 nginx:stable-alpine-slim 系列镜像，这些是体积最小的镜像，通常不含有其他依赖。 2. 示例 拉取镜像： 示例 Dockerfile 文件："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-06T13:09:45.000Z"}],["meta",{"property":"article:author","content":"鸭梨"}],["meta",{"property":"article:modified_time","content":"2024-05-06T13:09:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用 Docker 部署 Nginx\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-06T13:09:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鸭梨\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[{"level":2,"title":"1. 常见标签","slug":"1-常见标签","link":"#1-常见标签","children":[]},{"level":2,"title":"2. 示例","slug":"2-示例","link":"#2-示例","children":[]}],"git":{"createdTime":1682841391000,"updatedTime":1715000985000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":0.49,"words":147},"filePathRelative":"tools/docker/nginx.md","localizedDate":"2023年4月30日","autoDesc":true,"excerpt":"\\n\\n<h2>1. 常见标签</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>标签</th>\\n<th>容器环境</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td><code>latest</code></td>\\n<td>最新版本</td>\\n</tr>\\n<tr>\\n<td><code>mainline*</code></td>\\n<td>主线版本</td>\\n</tr>\\n<tr>\\n<td><code>stable*</code></td>\\n<td>稳定版本</td>\\n</tr>\\n<tr>\\n<td><code>*alpine*</code></td>\\n<td>Alpine</td>\\n</tr>\\n<tr>\\n<td><code>*bullseye*</code></td>\\n<td>Debian 11</td>\\n</tr>\\n<tr>\\n<td><code>*bullseye-perl</code></td>\\n<td>Debian 11 + Perl</td>\\n</tr>\\n<tr>\\n<td><code>*alpine*-perl</code></td>\\n<td>Alpine + Perl</td>\\n</tr>\\n<tr>\\n<td><code>*alpine*-slim</code></td>\\n<td>Alpine 最小版本</td>\\n</tr>\\n</tbody>\\n</table>"}');export{y as comp,_ as data};