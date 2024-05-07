import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as c,c as r,b as l,a as i,w as e,e as a,d as s}from"./app-C0-zUjo9.js";const u={},d=l("h1",{id:"1-java-语言概述",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#1-java-语言概述"},[l("span",null,"1. Java 语言概述")])],-1),h={class:"table-of-contents"},v=s('<h2 id="11-历史" tabindex="-1"><a class="header-anchor" href="#11-历史"><span>1.1 历史</span></a></h2><p>在 1972 年，C 语言就诞生了，但直到 1995 年 Java 才问世，我们先说说 C 语言的一些特点：</p><ol><li>贴近硬件，运行极快，效率极高</li><li>应用于操作系统、编译器、数据库和网络系统等</li><li>使用指针和手动内存管理</li></ol><p>1982 年 C++ 诞生：</p><ol><li>面向对象</li><li>兼容 C 语言</li><li>通用编程语言</li><li>多应用于图形领域、游戏等</li></ol><p>由于 C++ 的一些特征晦涩难懂，严重依赖平台和编译器实现，因此我们迫切需要一门语言：</p><ul><li>语法像 C</li><li>没有指针</li><li>自动内存管理</li><li>真正编写一次，到处运行</li><li>面向对象</li><li>类型安全</li><li>拥有高质量的类库</li></ul><p>1995 年的网页简单而粗糙，Java 的 Applet 带来了生机。于是 Java 成为了那个时代最好的语言，并持续流行了 30 年：</p><ul><li>Java 2 SE：桌面</li><li>Java 2 ME：移动端</li><li>Java 2 EE：服务器</li></ul><p>许多基于 Java 的平台和中间件、工具：</p><ul><li>构建工具：Ant、Maven、Jekins</li><li>服务器：Tomcat、Jetty、Jboss、Websphere、weblogic</li><li>Web 开发：Structs、Spring、Hibernate、MyBatis</li><li>开发工具：Eclipse、NetBeans、Intellij Idea、Jbuilder</li></ul><p>有一些应用服务器展示了网络开发的标准：</p><ul><li>高性能</li><li>高可用</li><li>高并发</li></ul><p>跨时代的作品：</p><ul><li>Hadoop，2006</li><li>Android，2008</li></ul><h2 id="12-语言特性" tabindex="-1"><a class="header-anchor" href="#12-语言特性"><span>1.2 语言特性</span></a></h2><p>Java 的特性和优势：</p><ul><li>简单性</li><li>面向对象</li><li>可移植性</li><li>高性能</li><li>分布式</li><li>动态性</li><li>多线程</li><li>安全性</li><li>健壮性</li></ul><h2 id="13-发行版本" tabindex="-1"><a class="header-anchor" href="#13-发行版本"><span>1.3 发行版本</span></a></h2><p>几个概念：</p><ul><li>JDK：Java Development Kit</li><li>JRE：Java Runtime Environment</li><li>JVM：Java Virtual Machine</li></ul><p>Java 语言：</p><ul><li>Java 语言</li><li>工具和 APIs <ul><li>java</li><li>javac</li><li>javadoc</li><li>apt</li><li>jar</li><li>javap</li><li>JPDA</li><li>JConsole</li><li>Java VisualVM</li><li>Security</li><li>Int&#39;I</li><li>RMI</li><li>IDL</li><li>Deploy</li><li>Monitoring</li><li>Troubleshoot</li><li>Scripting</li><li>JVM TI</li></ul></li><li>RIAs <ul><li>Java Web Start</li><li>Applet / Java Plug-in</li></ul></li><li>用户界面工具包 <ul><li>AWT <ul><li>Accessibility</li><li>Drag n Drop</li></ul></li><li>Swing <ul><li>Input Methods</li><li>Image I/O</li></ul></li><li>Java 2D <ul><li>Print Service</li><li>Sound</li></ul></li></ul></li><li>集成库 <ul><li>IDL</li><li>JDBC</li><li>JNDI</li><li>RMI</li><li>RMI-IIOP</li><li>Scripting</li></ul></li><li>其他基准库 <ul><li>Beans</li><li>Intl Support</li><li>I/O</li><li>JMX</li><li>JNI</li><li>Math</li><li>Networking</li><li>Override Mechanism</li><li>Security</li><li>Serialization</li><li>Extension Mechanism</li><li>XML JAXP</li></ul></li><li>语言和工具标准库 <ul><li>lang &amp; util</li><li>Collections</li><li>Concurrency Utilities</li><li>Jar</li><li>Logging</li><li>Management</li><li>Preferences API</li><li>Ref Objects</li><li>Reflection</li><li>Regular Expression</li><li>Versioning</li><li>Zip</li><li>Instrumentation</li></ul></li><li>JVM <ul><li>Java Hotspot Client ans Server VM</li></ul></li></ul>',23),g=s(`<h2 id="14-安装开发环境" tabindex="-1"><a class="header-anchor" href="#14-安装开发环境"><span>1.4 安装开发环境</span></a></h2><p>这里使用的环境为：</p><ul><li>Java 1.8+</li><li>IntelliJ IDEA</li></ul><p>我们可以测试 <code>Hello.java</code> 是否能正常运行：</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>在命令行编译并运行：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>javac Hello.java
<span class="token function">java</span> Hello
</code></pre></div><h2 id="15-编码习惯" tabindex="-1"><a class="header-anchor" href="#15-编码习惯"><span>1.5 编码习惯</span></a></h2><p>变量方法、类名可遵循驼峰命名。</p><p>好的程序需要善于使用各种注释，Java 注释有下面几种：</p><ul><li>单行注释（<code>// ...</code>）</li><li>多行注释（<code>/* ... */</code>）</li><li>文档注释（<code>/** ... @xxx ... */</code>）</li></ul><p>JDK 7 的数字支持下划线分割：</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">int</span> money <span class="token operator">=</span> <span class="token number">10_000_000</span><span class="token punctuation">;</span>
</code></pre></div><p>常见的文档注释内容：</p><table><thead><tr><th>表示</th><th>含义</th></tr></thead><tbody><tr><td><code>@Description</code></td><td>描述</td></tr><tr><td><code>@Author</code></td><td>作者</td></tr></tbody></table>`,15);function m(J,k){const n=t("router-link"),o=t("Badge");return c(),r("div",null,[d,l("nav",h,[l("ul",null,[l("li",null,[i(n,{to:"#11-历史"},{default:e(()=>[a("1.1 历史")]),_:1})]),l("li",null,[i(n,{to:"#12-语言特性"},{default:e(()=>[a("1.2 语言特性")]),_:1})]),l("li",null,[i(n,{to:"#13-发行版本"},{default:e(()=>[a("1.3 发行版本")]),_:1})]),l("li",null,[i(n,{to:"#14-安装开发环境"},{default:e(()=>[a("1.4 安装开发环境")]),_:1})]),l("li",null,[i(n,{to:"#15-编码习惯"},{default:e(()=>[a("1.5 编码习惯")]),_:1})])])]),v,l("p",null,[i(o,{type:"danger"},{default:e(()=>[a("TODO")]),_:1}),a(" 插入图片")]),g])}const y=p(u,[["render",m],["__file","index.html.vue"]]),f=JSON.parse('{"path":"/java-lang/java-tutorial/chapter01/","title":"1. Java 语言概述","lang":"zh-CN","frontmatter":{"description":"1. Java 语言概述 1.1 历史 在 1972 年，C 语言就诞生了，但直到 1995 年 Java 才问世，我们先说说 C 语言的一些特点： 贴近硬件，运行极快，效率极高 应用于操作系统、编译器、数据库和网络系统等 使用指针和手动内存管理 1982 年 C++ 诞生： 面向对象 兼容 C 语言 通用编程语言 多应用于图形领域、游戏等 由于 C+...","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/vuepress-backend-notes/vuepress-backend-notes/java-lang/java-tutorial/chapter01/"}],["meta",{"property":"og:site_name","content":"后端笔记"}],["meta",{"property":"og:title","content":"1. Java 语言概述"}],["meta",{"property":"og:description","content":"1. Java 语言概述 1.1 历史 在 1972 年，C 语言就诞生了，但直到 1995 年 Java 才问世，我们先说说 C 语言的一些特点： 贴近硬件，运行极快，效率极高 应用于操作系统、编译器、数据库和网络系统等 使用指针和手动内存管理 1982 年 C++ 诞生： 面向对象 兼容 C 语言 通用编程语言 多应用于图形领域、游戏等 由于 C+..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-06T13:09:45.000Z"}],["meta",{"property":"article:author","content":"鸭梨"}],["meta",{"property":"article:modified_time","content":"2024-05-06T13:09:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1. Java 语言概述\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-06T13:09:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鸭梨\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[{"level":2,"title":"1.1 历史","slug":"11-历史","link":"#11-历史","children":[]},{"level":2,"title":"1.2 语言特性","slug":"12-语言特性","link":"#12-语言特性","children":[]},{"level":2,"title":"1.3 发行版本","slug":"13-发行版本","link":"#13-发行版本","children":[]},{"level":2,"title":"1.4 安装开发环境","slug":"14-安装开发环境","link":"#14-安装开发环境","children":[]},{"level":2,"title":"1.5 编码习惯","slug":"15-编码习惯","link":"#15-编码习惯","children":[]}],"git":{"createdTime":1677226167000,"updatedTime":1715000985000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":2.29,"words":688},"filePathRelative":"java-lang/java-tutorial/chapter01/index.md","localizedDate":"2023年2月24日","autoDesc":true,"excerpt":"\\n\\n<h2>1.1 历史</h2>\\n<p>在 1972 年，C 语言就诞生了，但直到 1995 年 Java 才问世，我们先说说 C 语言的一些特点：</p>\\n<ol>\\n<li>贴近硬件，运行极快，效率极高</li>\\n<li>应用于操作系统、编译器、数据库和网络系统等</li>\\n<li>使用指针和手动内存管理</li>\\n</ol>\\n<p>1982 年 C++ 诞生：</p>\\n<ol>\\n<li>面向对象</li>\\n<li>兼容 C 语言</li>\\n<li>通用编程语言</li>\\n<li>多应用于图形领域、游戏等</li>\\n</ol>\\n<p>由于 C++ 的一些特征晦涩难懂，严重依赖平台和编译器实现，因此我们迫切需要一门语言：</p>"}');export{y as comp,f as data};