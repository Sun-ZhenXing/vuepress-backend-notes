import{p as J,d as B,s as Q,D as H,a as X,S as Z,b as F,c as I}from"./styles-d20c7d72-B1AtV4tT.js";import{G as tt}from"./graph-CJEFZfmN.js";import{s as x}from"./transform-CqGPC-JM.js";import{l as E,c as g,y as et,h as ot,i as w}from"./mermaid.core-CSkjtlVc.js";import{r as st}from"./index-fc10efb0-BMpz8Hnr.js";import"./layout-DL--SzGI.js";import"./app-B1gzhM40.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./clone-DcZCVBpL.js";import"./edges-d32062c0-q_o2eFA_.js";import"./createText-6b48ae7d-D-7KLadU.js";import"./line-Dfs8D6lY.js";import"./array-DEnAxiAM.js";import"./path-CbwjOpE9.js";import"./point-DWREGWZc.js";const h="rect",C="rectWithTitle",nt="start",it="end",ct="divider",rt="roundedWithTitle",lt="note",at="noteGroup",_="statediagram",dt="state",Et=`${_}-${dt}`,m="transition",St="note",pt="note-edge",Tt=`${m} ${pt}`,_t=`${_}-${St}`,ut="cluster",ft=`${_}-${ut}`,Dt="cluster-alt",bt=`${_}-${Dt}`,U="parent",V="note",At="state",N="----",ht=`${N}${V}`,M=`${N}${U}`,Y="fill:none",W="fill: #333",z="c",q="text",K="normal";let y={},d=0;const yt=function(t){const n=Object.keys(t);for(const e of n)t[e]},gt=function(t,n){return n.db.extract(n.db.getRootDocV2()),n.db.getClasses()};function $t(t){return t==null?"":t.classes?t.classes.join(" "):""}function R(t="",n=0,e="",i=N){const c=e!==null&&e.length>0?`${i}${e}`:"";return`${At}-${t}${c}-${n}`}const A=(t,n,e,i,c,r)=>{const o=e.id,u=$t(i[o]);if(o!=="root"){let p=h;e.start===!0&&(p=nt),e.start===!1&&(p=it),e.type!==H&&(p=e.type),y[o]||(y[o]={id:o,shape:p,description:w.sanitizeText(o,g()),classes:`${u} ${Et}`});const s=y[o];e.description&&(Array.isArray(s.description)?(s.shape=C,s.description.push(e.description)):s.description.length>0?(s.shape=C,s.description===o?s.description=[e.description]:s.description=[s.description,e.description]):(s.shape=h,s.description=e.description),s.description=w.sanitizeTextOrArray(s.description,g())),s.description.length===1&&s.shape===C&&(s.shape=h),!s.type&&e.doc&&(E.info("Setting cluster for ",o,G(e)),s.type="group",s.dir=G(e),s.shape=e.type===X?ct:rt,s.classes=s.classes+" "+ft+" "+(r?bt:""));const T={labelStyle:"",shape:s.shape,labelText:s.description,classes:s.classes,style:"",id:o,dir:s.dir,domId:R(o,d),type:s.type,padding:15};if(T.centerLabel=!0,e.note){const l={labelStyle:"",shape:lt,labelText:e.note.text,classes:_t,style:"",id:o+ht+"-"+d,domId:R(o,d,V),type:s.type,padding:15},a={labelStyle:"",shape:at,labelText:e.note.text,classes:s.classes,style:"",id:o+M,domId:R(o,d,U),type:"group",padding:0};d++;const f=o+M;t.setNode(f,a),t.setNode(l.id,l),t.setNode(o,T),t.setParent(o,f),t.setParent(l.id,f);let S=o,D=l.id;e.note.position==="left of"&&(S=l.id,D=o),t.setEdge(S,D,{arrowhead:"none",arrowType:"",style:Y,labelStyle:"",classes:Tt,arrowheadStyle:W,labelpos:z,labelType:q,thickness:K})}else t.setNode(o,T)}n&&n.id!=="root"&&(E.trace("Setting node ",o," to be child of its parent ",n.id),t.setParent(o,n.id)),e.doc&&(E.trace("Adding nodes children "),xt(t,e,e.doc,i,c,!r))},xt=(t,n,e,i,c,r)=>{E.trace("items",e),e.forEach(o=>{switch(o.stmt){case F:A(t,n,o,i,c,r);break;case H:A(t,n,o,i,c,r);break;case Z:{A(t,n,o.state1,i,c,r),A(t,n,o.state2,i,c,r);const u={id:"edge"+d,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:Y,labelStyle:"",label:w.sanitizeText(o.description,g()),arrowheadStyle:W,labelpos:z,labelType:q,thickness:K,classes:m};t.setEdge(o.state1.id,o.state2.id,u,d),d++}break}})},G=(t,n=I)=>{let e=n;if(t.doc)for(let i=0;i<t.doc.length;i++){const c=t.doc[i];c.stmt==="dir"&&(e=c.value)}return e},Ct=async function(t,n,e,i){E.info("Drawing state diagram (v2)",n),y={},i.db.getDirection();const{securityLevel:c,state:r}=g(),o=r.nodeSpacing||50,u=r.rankSpacing||50;E.info(i.db.getRootDocV2()),i.db.extract(i.db.getRootDocV2()),E.info(i.db.getRootDocV2());const p=i.db.getStates(),s=new tt({multigraph:!0,compound:!0}).setGraph({rankdir:G(i.db.getRootDocV2()),nodesep:o,ranksep:u,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});A(s,void 0,i.db.getRootDocV2(),p,i.db,!0);let T;c==="sandbox"&&(T=x("#i"+n));const l=c==="sandbox"?x(T.nodes()[0].contentDocument.body):x("body"),a=l.select(`[id="${n}"]`),f=l.select("#"+n+" g");await st(f,s,["barb"],_,n);const S=8;et.insertTitle(a,"statediagramTitleText",r.titleTopMargin,i.db.getDiagramTitle());const D=a.node().getBBox(),L=D.width+S*2,P=D.height+S*2;a.attr("class",_);const O=a.node().getBBox();ot(a,P,L,r.useMaxWidth);const k=`${O.x-S} ${O.y-S} ${L} ${P}`;E.debug(`viewBox ${k}`),a.attr("viewBox",k);const j=document.querySelectorAll('[id="'+n+'"] .edgeLabel .label');for(const $ of j){const v=$.getBBox(),b=document.createElementNS("http://www.w3.org/2000/svg",h);b.setAttribute("rx",0),b.setAttribute("ry",0),b.setAttribute("width",v.width),b.setAttribute("height",v.height),$.insertBefore(b,$.firstChild)}},Rt={setConf:yt,getClasses:gt,draw:Ct},Wt={parser:J,db:B,renderer:Rt,styles:Q,init:t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,B.clear()}};export{Wt as diagram};
