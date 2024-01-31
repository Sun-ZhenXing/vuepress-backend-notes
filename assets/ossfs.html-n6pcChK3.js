import{_ as a,r as l,o as e,c as p,b as s,a as o,w as c,d as t,e as r}from"./app-ju10JTa9.js";const D={},i=s("h1",{id:"ossfs-挂载",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#ossfs-挂载"},[s("span",null,"OSSFs 挂载")])],-1),d={class:"table-of-contents"},u=r(`<h2 id="1-概述" tabindex="-1"><a class="header-anchor" href="#1-概述"><span>1. 概述</span></a></h2><p>下面使用 <code>Dockerfile</code> 用于构建 <code>ossfs</code> 镜像，<code>docker run</code> 启动容器并挂载 OSS。</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">FROM</span><span style="color:#D4D4D4;"> ubuntu:22.04</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">ENV</span><span style="color:#D4D4D4;"> OSSFS_URL=https://gosspublic.alicdn.com/ossfs/ossfs_1.91.1_ubuntu22.04_amd64.deb</span></span>
<span class="line"><span style="color:#569CD6;">ENV</span><span style="color:#D4D4D4;"> OSS_ENDPOINT=oss-cn-hangzhou.aliyuncs.com</span></span>
<span class="line"><span style="color:#569CD6;">ENV</span><span style="color:#D4D4D4;"> OSS_BUCKET=test-bucket</span></span>
<span class="line"><span style="color:#569CD6;">ENV</span><span style="color:#D4D4D4;"> OSS_ACCESS_KEY_ID=AccessKeyId</span></span>
<span class="line"><span style="color:#569CD6;">ENV</span><span style="color:#D4D4D4;"> OSS_ACCESS_KEY_SECRET=AccessKeySecret</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">WORKDIR</span><span style="color:#D4D4D4;"> /oss</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">RUN</span><span style="color:#D4D4D4;"> echo </span><span style="color:#CE9178;">&quot;deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy main restricted universe multiverse&quot;</span><span style="color:#D4D4D4;"> &gt; /etc/apt/sources.list  &amp;&amp; \\</span></span>
<span class="line"><span style="color:#D4D4D4;">    echo </span><span style="color:#CE9178;">&quot;deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse&quot;</span><span style="color:#D4D4D4;"> &gt;&gt; /etc/apt/sources.list  &amp;&amp; \\</span></span>
<span class="line"><span style="color:#D4D4D4;">    echo </span><span style="color:#CE9178;">&quot;deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse&quot;</span><span style="color:#D4D4D4;"> &gt;&gt; /etc/apt/sources.list  &amp;&amp; \\</span></span>
<span class="line"><span style="color:#D4D4D4;">    echo </span><span style="color:#CE9178;">&quot;deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-security main restricted universe multiverse&quot;</span><span style="color:#D4D4D4;"> &gt;&gt; /etc/apt/sources.list &amp;&amp; \\</span></span>
<span class="line"><span style="color:#D4D4D4;">    apt update &amp;&amp; \\</span></span>
<span class="line"><span style="color:#D4D4D4;">    apt upgrade -y &amp;&amp; \\</span></span>
<span class="line"><span style="color:#D4D4D4;">    apt install curl gdebi-core mime-support -y &amp;&amp; \\</span></span>
<span class="line"><span style="color:#D4D4D4;">    curl -o ossfs.deb $OSSFS_URL &amp;&amp; \\</span></span>
<span class="line"><span style="color:#D4D4D4;">    gdebi -n ossfs.deb &amp;&amp; \\</span></span>
<span class="line"><span style="color:#D4D4D4;">    echo \${OSS_BUCKET}:\${OSS_ACCESS_KEY_ID}:\${OSS_ACCESS_KEY_SECRET} &gt; /etc/passwd-ossfs &amp;&amp; \\</span></span>
<span class="line"><span style="color:#D4D4D4;">    chmod 640 /etc/passwd-ossfs &amp;&amp; \\</span></span>
<span class="line"><span style="color:#D4D4D4;">    mkdir -p /oss/\${OSS_BUCKET} &amp;&amp; \\</span></span>
<span class="line"><span style="color:#D4D4D4;">    rm -rf ossfs.deb &amp;&amp; \\</span></span>
<span class="line"><span style="color:#D4D4D4;">    apt clean</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">CMD</span><span style="color:#D4D4D4;"> [ </span><span style="color:#CE9178;">&quot;python3&quot;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&quot;-m&quot;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&quot;http.server&quot;</span><span style="color:#D4D4D4;"> ]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构建镜像：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">docker</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">build</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-t</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">ossfs</span><span style="color:#D4D4D4;"> </span><span style="color:#D7BA7D;">\\</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">--build-arg</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">OSS_ENDPOINT=oss-cn-shanghai.aliyuncs.com</span><span style="color:#D4D4D4;"> </span><span style="color:#D7BA7D;">\\</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">--build-arg</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">OSS_BUCKET=alexsun</span><span style="color:#D4D4D4;"> </span><span style="color:#D7BA7D;">\\</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">--build-arg</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">OSS_ACCESS_KEY_ID=xxx</span><span style="color:#D4D4D4;"> </span><span style="color:#D7BA7D;">\\</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">--build-arg</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">OSS_ACCESS_KEY_SECRET=xxx</span><span style="color:#D4D4D4;"> </span><span style="color:#D7BA7D;">\\</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#CE9178;">.</span></span>
<span class="line"></span></code></pre></div><p>启动容器：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">docker</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">run</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-it</span><span style="color:#D4D4D4;"> </span><span style="color:#D7BA7D;">\\</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">--name</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">oss</span><span style="color:#D4D4D4;"> </span><span style="color:#D7BA7D;">\\</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">--privileged=true</span><span style="color:#D4D4D4;"> </span><span style="color:#D7BA7D;">\\</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">-p</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">8000</span><span style="color:#CE9178;">:8000</span><span style="color:#D4D4D4;"> </span><span style="color:#D7BA7D;">\\</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#CE9178;">ossfs</span></span>
<span class="line"></span></code></pre></div>`,7);function y(m,v){const n=l("router-link");return e(),p("div",null,[i,s("nav",d,[s("ul",null,[s("li",null,[o(n,{to:"#1-概述"},{default:c(()=>[t("1. 概述")]),_:1})])])]),u])}const C=a(D,[["render",y],["__file","ossfs.html.vue"]]);export{C as default};