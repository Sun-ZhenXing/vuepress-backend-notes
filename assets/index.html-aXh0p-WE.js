import{_ as c,r as n,o as d,c as h,b as a,a as e,w as s,d as t,e as p}from"./app-uNb852KP.js";const i={},_=a("h1",{id:"阿里-java-开发手册",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#阿里-java-开发手册"},[a("span",null,"阿里 Java 开发手册")])],-1),u={class:"table-of-contents"},v=a("h2",{id:"说明",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#说明"},[a("span",null,"说明")])],-1),b={href:"https://github.com/alibaba/p3c",target:"_blank",rel:"noopener noreferrer"},f=p('<table><thead><tr><th>版本号</th><th>制定团队</th><th>更新日期</th><th>备注</th></tr></thead><tbody><tr><td>1.7.1</td><td>全球 Java 社区开发者</td><td>2022.02.03</td><td>黄山版，新增 11 条新规约</td></tr></tbody></table><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>《Java 开发手册》是 Java 社区爱好者的集体智慧结晶和经验总结，经历了多次大规模一线实战的检验及不断完善，整理成册后，众多社区开发者踊跃参与打磨完善，系统化地整理成册，当前的最新版本是黄山版。现代软件行业的高速发展对开发者的综合素质要求越来越高，因为不仅是编程知识点，其它维度的知识点也会影响到软件的最终交付质量。比如：五花八门的错误码会人为地增加排查问题的难度；数据库的表结构和索引设计缺陷带来的系统架构缺陷或性能风险；工程结构混乱导致后续项目维护艰难；没有鉴权的漏洞代码容易被黑客攻击等。所以本手册以 Java 开发者为中心视角，划分为编程规约、异常日志、单元测试、安全规约、MySQL 数据库、工程结构、设计规约七个维度，再根据内容特征，细分成若干二级子目录。此外，依据约束力强弱及故障敏感性，规约依次分为 <span style="color:var(--c-danger);">【强制】</span>、<span style="color:var(--c-warning);">【推荐】</span>、<span style="color:var(--c-tip);">【参考】</span> 三大类。在延伸的信息中，<span style="color:var(--c-warning);">说明：</span> 对规约做了适当扩展和解释；<span style="color:var(--c-tip);">正例：</span> 提倡什么样的编码和实现方式；<span style="color:var(--c-danger);">反例：</span> 说明需要提防的雷区，以及真实的错误案例。</p><p>手册的愿景是码出高效，码出质量。现代软件架构的复杂性需要协同开发完成，如何高效地协同呢？无规矩不成方圆，无规范难以协同，比如，制定交通法规表面上是要限制行车权，实际上是保障公众的人身安全，试想如果没有限速，没有红绿灯，谁还敢上路行驶？对软件来说，适当的规范和标准绝不是消灭代码内容的创造性、优雅性，而是限制过度个性化，以一种普遍认可的统一方式一起做事，提升协作效率，降低沟通成本。代码的字里行间流淌的是软件系统的血液，代码质量的提升是尽可能少踩坑，杜绝踩重复的坑，切实提升系统稳定性，码出质量。</p>',4),m={href:"https://github.com/alibaba/p3c",target:"_blank",rel:"noopener noreferrer"};function x(g,y){const o=n("router-link"),l=n("AutoCatalog"),r=n("ExternalLinkIcon");return d(),h("div",null,[_,a("nav",u,[a("ul",null,[a("li",null,[e(o,{to:"#说明"},{default:s(()=>[t("说明")]),_:1})]),a("li",null,[e(o,{to:"#前言"},{default:s(()=>[t("前言")]),_:1})])])]),e(l),v,a("p",null,[t("本系列全部摘录了《Java 开发手册（黄山版）》的内容，"),a("a",b,[t("GitHub"),e(r)]),t(" 上可查看最新的内容。")]),f,a("p",null,[t("2017 年杭州云栖大会上发布了配套的 "),a("a",m,[t("Java 开发规约 IDE 插件"),e(r)]),t("，下载量已达到 275 万人次，阿里云效也集成了代码规约扫描引擎。2018年9月在云栖厅发布 36 万字的配套详解图书《码出高效》，秉持“图胜于表，表胜于言”的理念，深入浅出地将计算机基础、面向对象思想、数据结构与集合、JVM 探源与内存分析、并发与多线程、单元测试等知识丰富立体地呈现出来。本书紧扣学以致用、学以精进的目标，结合一线开发的实践经验和故障案例，与底层源码解析融会贯通，娓娓道来。《码出高效》和《Java 开发手册（第 2 版）》稿费所得收入均捐赠公益事情，希望用技术情怀帮助到更多的人。")])])}const k=c(i,[["render",x],["__file","index.html.vue"]]);export{k as default};
