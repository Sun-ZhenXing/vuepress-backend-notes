import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as r,c as i,b as e,a as n,w as l,d,e as o}from"./app-B1gzhM40.js";const p={},c=e("h1",{id:"1-kubernetes-入门",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#1-kubernetes-入门"},[e("span",null,"1. Kubernetes 入门")])],-1),u={class:"table-of-contents"},h=d('<h2 id="基础概念" tabindex="-1"><a class="header-anchor" href="#基础概念"><span>基础概念</span></a></h2><h3 id="1-node" tabindex="-1"><a class="header-anchor" href="#1-node"><span>1. Node</span></a></h3><p>一个节点（Node）就是一个物理机或者虚拟机，在一个节点上我们可以运行一个或多个 Pod。</p><h3 id="2-pod" tabindex="-1"><a class="header-anchor" href="#2-pod"><span>2. Pod</span></a></h3><p>Pod 是 Kubernetes 调度的最小单位。一个 Pod 是一个或多个应用容器的组合，这意味着一个 Pod 能运行多个容器。</p><p>最佳实践是，一个 Pod 只运行一个容器，这样可以实现应用程序的解耦和扩展。</p><h3 id="3-service" tabindex="-1"><a class="header-anchor" href="#3-service"><span>3. Service</span></a></h3><p>Service 可以将 Pod 组合成一个服务，这个服务可以通过 Service 的 IP 和端口访问到。</p><h3 id="4-ingress" tabindex="-1"><a class="header-anchor" href="#4-ingress"><span>4. Ingress</span></a></h3><p>Ingress 是对外暴露服务的一种方式，它可以将外部的请求转发到集群内部的 Service 上。</p><h3 id="5-configmap" tabindex="-1"><a class="header-anchor" href="#5-configmap"><span>5. ConfigMap</span></a></h3><p>ConfigMap 可以将配置信息以键值对的形式保存起来，然后在 Pod 中使用。</p><h3 id="6-secret" tabindex="-1"><a class="header-anchor" href="#6-secret"><span>6. Secret</span></a></h3><p>Secret 可以将敏感信息以键值对的形式保存起来，然后在 Pod 中使用。</p><h3 id="7-volume" tabindex="-1"><a class="header-anchor" href="#7-volume"><span>7. Volume</span></a></h3><p>Volume 可以将 Pod 中的数据持久化到磁盘上。</p><h3 id="8-deployment" tabindex="-1"><a class="header-anchor" href="#8-deployment"><span>8. Deployment</span></a></h3><p>Deployment 可以将 Pod 进行编排，它可以实现 Pod 的滚动升级和回滚。</p><h3 id="9-statefulset" tabindex="-1"><a class="header-anchor" href="#9-statefulset"><span>9. StatefulSet</span></a></h3><p>StatefulSet 可以将 Pod 进行编排，它可以实现部署有状态的 Pod。</p><h2 id="kubernetes-架构" tabindex="-1"><a class="header-anchor" href="#kubernetes-架构"><span>Kubernetes 架构</span></a></h2><p>Kubernetes 有一个 Master 节点和多个 Node 节点组成。</p><p>为了使 Node 能够正常对外提供服务，Node 通常还需要三个组件：kubelet、kube-proxy 和容器运行时（container runtime）。</p><p>常见的容器运行时如下：</p><ul><li>Docker Engine</li><li>containerd</li><li>CRI-O</li><li>Mirantis Container Runtime</li></ul><p>kubelet 是 Kubernetes 的一个核心组件，它运行在每个 Node 上，负责管理 Pod 和容器。它也会定期汇报 Node 的状态，并从 apiserver 中获取 Pod 的调度更新信息。</p><p>k-proxy 是 Kubernetes 的一个核心组件，负责提供负载均衡和代理服务。</p><h3 id="1-master-节点" tabindex="-1"><a class="header-anchor" href="#1-master-节点"><span>1. Master 节点</span></a></h3>',28);function m(f,g){const t=s("router-link");return r(),i("div",null,[c,e("nav",u,[e("ul",null,[e("li",null,[n(t,{to:"#基础概念"},{default:l(()=>[o("基础概念")]),_:1}),e("ul",null,[e("li",null,[n(t,{to:"#1-node"},{default:l(()=>[o("1. Node")]),_:1})]),e("li",null,[n(t,{to:"#2-pod"},{default:l(()=>[o("2. Pod")]),_:1})]),e("li",null,[n(t,{to:"#3-service"},{default:l(()=>[o("3. Service")]),_:1})]),e("li",null,[n(t,{to:"#4-ingress"},{default:l(()=>[o("4. Ingress")]),_:1})]),e("li",null,[n(t,{to:"#5-configmap"},{default:l(()=>[o("5. ConfigMap")]),_:1})]),e("li",null,[n(t,{to:"#6-secret"},{default:l(()=>[o("6. Secret")]),_:1})]),e("li",null,[n(t,{to:"#7-volume"},{default:l(()=>[o("7. Volume")]),_:1})]),e("li",null,[n(t,{to:"#8-deployment"},{default:l(()=>[o("8. Deployment")]),_:1})]),e("li",null,[n(t,{to:"#9-statefulset"},{default:l(()=>[o("9. StatefulSet")]),_:1})])])]),e("li",null,[n(t,{to:"#kubernetes-架构"},{default:l(()=>[o("Kubernetes 架构")]),_:1}),e("ul",null,[e("li",null,[n(t,{to:"#1-master-节点"},{default:l(()=>[o("1. Master 节点")]),_:1})])])])])]),h])}const v=a(p,[["render",m],["__file","1.k8s.html.vue"]]),_=JSON.parse('{"path":"/tools/k8s/1.k8s.html","title":"1. Kubernetes 入门","lang":"zh-CN","frontmatter":{"description":"1. Kubernetes 入门 基础概念 1. Node 一个节点（Node）就是一个物理机或者虚拟机，在一个节点上我们可以运行一个或多个 Pod。 2. Pod Pod 是 Kubernetes 调度的最小单位。一个 Pod 是一个或多个应用容器的组合，这意味着一个 Pod 能运行多个容器。 最佳实践是，一个 Pod 只运行一个容器，这样可以实现应...","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/vuepress-frontend-notes/vuepress-frontend-notes/tools/k8s/1.k8s.html"}],["meta",{"property":"og:site_name","content":"后端笔记"}],["meta",{"property":"og:title","content":"1. Kubernetes 入门"}],["meta",{"property":"og:description","content":"1. Kubernetes 入门 基础概念 1. Node 一个节点（Node）就是一个物理机或者虚拟机，在一个节点上我们可以运行一个或多个 Pod。 2. Pod Pod 是 Kubernetes 调度的最小单位。一个 Pod 是一个或多个应用容器的组合，这意味着一个 Pod 能运行多个容器。 最佳实践是，一个 Pod 只运行一个容器，这样可以实现应..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-06T13:09:45.000Z"}],["meta",{"property":"article:author","content":"鸭梨"}],["meta",{"property":"article:modified_time","content":"2024-05-06T13:09:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1. Kubernetes 入门\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-06T13:09:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鸭梨\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[{"level":2,"title":"基础概念","slug":"基础概念","link":"#基础概念","children":[{"level":3,"title":"1. Node","slug":"1-node","link":"#1-node","children":[]},{"level":3,"title":"2. Pod","slug":"2-pod","link":"#2-pod","children":[]},{"level":3,"title":"3. Service","slug":"3-service","link":"#3-service","children":[]},{"level":3,"title":"4. Ingress","slug":"4-ingress","link":"#4-ingress","children":[]},{"level":3,"title":"5. ConfigMap","slug":"5-configmap","link":"#5-configmap","children":[]},{"level":3,"title":"6. Secret","slug":"6-secret","link":"#6-secret","children":[]},{"level":3,"title":"7. Volume","slug":"7-volume","link":"#7-volume","children":[]},{"level":3,"title":"8. Deployment","slug":"8-deployment","link":"#8-deployment","children":[]},{"level":3,"title":"9. StatefulSet","slug":"9-statefulset","link":"#9-statefulset","children":[]}]},{"level":2,"title":"Kubernetes 架构","slug":"kubernetes-架构","link":"#kubernetes-架构","children":[{"level":3,"title":"1. Master 节点","slug":"1-master-节点","link":"#1-master-节点","children":[]}]}],"git":{"createdTime":1706507402000,"updatedTime":1715000985000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":1.52,"words":456},"filePathRelative":"tools/k8s/1.k8s.md","localizedDate":"2024年1月29日","autoDesc":true,"excerpt":"\\n\\n<h2>基础概念</h2>\\n<h3>1. Node</h3>\\n<p>一个节点（Node）就是一个物理机或者虚拟机，在一个节点上我们可以运行一个或多个 Pod。</p>\\n<h3>2. Pod</h3>\\n<p>Pod 是 Kubernetes 调度的最小单位。一个 Pod 是一个或多个应用容器的组合，这意味着一个 Pod 能运行多个容器。</p>\\n<p>最佳实践是，一个 Pod 只运行一个容器，这样可以实现应用程序的解耦和扩展。</p>\\n<h3>3. Service</h3>\\n<p>Service 可以将 Pod 组合成一个服务，这个服务可以通过 Service 的 IP 和端口访问到。</p>"}');export{v as comp,_ as data};
