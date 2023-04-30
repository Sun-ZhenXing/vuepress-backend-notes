import{_ as p,M as l,p as c,q as i,R as n,N as e,V as t,t as s,Q as u,a1 as o}from"./framework-5f7e94ef.js";const d={},r=n("h1",{id:"_2-java-基础语法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-java-基础语法","aria-hidden":"true"},"#"),s(" 2. Java 基础语法")],-1),k=n("h2",{id:"_2-1-java-标识符",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-1-java-标识符","aria-hidden":"true"},"#"),s(" 2.1 Java 标识符")],-1),v=n("p",null,"Java 有哪些关键字？",-1),m=o('<p>Java 标识符的要求：</p><ul><li>所有的标识符都应该以字母（<code>A-Z</code> 或者 <code>a-z</code>），美元符（<code>$</code>）、或者下划线（<code>_</code>）开始</li><li>首字符之后可以是字母（<code>A-Z</code> 或者 <code>a-z</code>），美元符（<code>$</code>）、下划线（<code>_</code>）或数字（<code>0-9</code>）的任何字符组合</li><li>关键字不能用作标识符</li><li>标识符是大小写敏感的</li></ul><h2 id="_2-2-数据类型" tabindex="-1"><a class="header-anchor" href="#_2-2-数据类型" aria-hidden="true">#</a> 2.2 数据类型</h2><p>Java 是强类型语言：要求变量的使用要严格符合规定，所有的变量必须先定义才能使用。</p><p>Java 的数据分为两大类：</p><ul><li><strong>基本类型</strong>（Primitive Type） <ul><li>数值类型 <ul><li>整数类型 <ul><li><code>byte</code>，1 个字节</li><li><code>short</code>，2 个字节</li><li><code>int</code>，4 个字节</li><li><code>long</code>，8 个字节</li></ul></li><li>浮点类型 <ul><li><code>float</code>，4 个字节</li><li><code>double</code>，8 个字节</li></ul></li><li>字符类型 <ul><li><code>char</code>，2 个字节</li></ul></li></ul></li><li>布尔类型 <ul><li><code>boolean</code> 类型，占 1 位</li></ul></li></ul></li><li><strong>引用类型</strong>（Reference Type） <ul><li>类</li><li>接口</li><li>数组</li></ul></li></ul><h2 id="_2-3-类型转换" tabindex="-1"><a class="header-anchor" href="#_2-3-类型转换" aria-hidden="true">#</a> 2.3 类型转换</h2>',7),b=o(`<h2 id="附录-易错类型讲解" tabindex="-1"><a class="header-anchor" href="#附录-易错类型讲解" aria-hidden="true">#</a> 附录：易错类型讲解</h2><p>注意看下面的代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">float</span> f <span class="token operator">=</span> <span class="token number">0.1f</span><span class="token punctuation">;</span>
        <span class="token keyword">double</span> d <span class="token operator">=</span> <span class="token number">1.0</span> <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>f <span class="token operator">==</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">float</span> f1 <span class="token operator">=</span> <span class="token number">1241234124134123f</span><span class="token punctuation">;</span>
        <span class="token keyword">float</span> f2 <span class="token operator">=</span> f1 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>f1 <span class="token operator">==</span> f2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后输出结果为：</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token boolean">false</span>
<span class="token boolean">true</span>
</code></pre></div><p>我们再看下面的 <code>String</code> 类型示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> s2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1 <span class="token operator">==</span> s2<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// false</span>

        <span class="token class-name">String</span> s3 <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> s4 <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s3 <span class="token operator">==</span> s4<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是引用类型和值类型的比较问题。</p>`,8);function h(f,g){const a=l("Badge");return c(),i("div",null,[r,k,v,n("p",null,[e(a,{type:"danger"},{default:t(()=>[s("TODO")]),_:1})]),u(" https://www.runoob.com/java/java-basic-syntax.html "),m,n("p",null,[e(a,{type:"danger"},{default:t(()=>[s("TODO")]),_:1})]),b])}const y=p(d,[["render",h],["__file","index.html.vue"]]);export{y as default};