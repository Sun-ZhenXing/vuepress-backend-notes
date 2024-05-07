import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as t,c as o,b as n,a as i,w as p,d as l,e as c}from"./app-C0-zUjo9.js";const r={},d=n("h1",{id:"try_files-指令",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#try_files-指令"},[n("span",null,"try_files 指令")])],-1),u={class:"table-of-contents"},k=l(`<h2 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h2><p>尝试返回文件/文件夹，如果不存在就重定向到二级目录下的 <code>index.html</code> 文件，如果不存在则重定向到根目录下的 <code>index.html</code> 文件。</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> example.com</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">root</span> /path/to/your/website</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ <span class="token variable">$uri</span>/index.html @secondary</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token directive"><span class="token keyword">location</span> @secondary</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">rewrite</span> ^/([^/]+)/.*$ /<span class="token variable">$1</span>/index.html last</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> /index.html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function m(v,y){const s=a("router-link");return t(),o("div",null,[d,n("nav",u,[n("ul",null,[n("li",null,[i(s,{to:"#实例"},{default:p(()=>[c("实例")]),_:1})])])]),k])}const b=e(r,[["render",m],["__file","try-files.html.vue"]]),_=JSON.parse('{"path":"/tools/nginx/try-files.html","title":"try_files 指令","lang":"zh-CN","frontmatter":{"description":"try_files 指令 实例 尝试返回文件/文件夹，如果不存在就重定向到二级目录下的 index.html 文件，如果不存在则重定向到根目录下的 index.html 文件。","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/vuepress-backend-notes/vuepress-backend-notes/tools/nginx/try-files.html"}],["meta",{"property":"og:site_name","content":"后端笔记"}],["meta",{"property":"og:title","content":"try_files 指令"}],["meta",{"property":"og:description","content":"try_files 指令 实例 尝试返回文件/文件夹，如果不存在就重定向到二级目录下的 index.html 文件，如果不存在则重定向到根目录下的 index.html 文件。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-06T13:09:45.000Z"}],["meta",{"property":"article:author","content":"鸭梨"}],["meta",{"property":"article:modified_time","content":"2024-05-06T13:09:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"try_files 指令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-06T13:09:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鸭梨\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[{"level":2,"title":"实例","slug":"实例","link":"#实例","children":[]}],"git":{"createdTime":1701249407000,"updatedTime":1715000985000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":0.27,"words":80},"filePathRelative":"tools/nginx/try-files.md","localizedDate":"2023年11月29日","autoDesc":true,"excerpt":"\\n\\n<h2>实例</h2>\\n<p>尝试返回文件/文件夹，如果不存在就重定向到二级目录下的 <code>index.html</code> 文件，如果不存在则重定向到根目录下的 <code>index.html</code> 文件。</p>\\n<div class=\\"language-nginx\\" data-ext=\\"nginx\\" data-title=\\"nginx\\"><pre class=\\"language-nginx\\"><code><span class=\\"token directive\\"><span class=\\"token keyword\\">server</span></span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token directive\\"><span class=\\"token keyword\\">listen</span> <span class=\\"token number\\">80</span></span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token directive\\"><span class=\\"token keyword\\">server_name</span> example.com</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token directive\\"><span class=\\"token keyword\\">root</span> /path/to/your/website</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token directive\\"><span class=\\"token keyword\\">location</span> /</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token directive\\"><span class=\\"token keyword\\">try_files</span> <span class=\\"token variable\\">$uri</span> <span class=\\"token variable\\">$uri</span>/ <span class=\\"token variable\\">$uri</span>/index.html @secondary</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token directive\\"><span class=\\"token keyword\\">location</span> @secondary</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token directive\\"><span class=\\"token keyword\\">rewrite</span> ^/([^/]+)/.*$ /<span class=\\"token variable\\">$1</span>/index.html last</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token directive\\"><span class=\\"token keyword\\">try_files</span> <span class=\\"token variable\\">$uri</span> /index.html</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>"}');export{b as comp,_ as data};
