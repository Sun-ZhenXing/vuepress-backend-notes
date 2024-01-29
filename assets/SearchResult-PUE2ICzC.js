import{u as U,f as ee,g as Y,h as B,Y as se,i as ae,t as le,j as te,k as D,l as $,m as re,n as M,p as a,q as _,s as F,v as I,x as ue,y as ie,z as ne,A as oe,R as ce,O as ve,B as pe,C as he,D as ye,E as de,F as me,G as fe,H as E,I as He}from"./app-uNb852KP.js";const ge="SEARCH_PRO_QUERY_HISTORY",y=U(ge,[]),Re=()=>{const{queryHistoryCount:u}=E,o=u>0;return{enabled:o,queryHistory:y,addQueryHistory:t=>{o&&(y.value.length<u?y.value=Array.from(new Set([t,...y.value])):y.value=Array.from(new Set([t,...y.value.slice(0,u-1)])))},removeQueryHistory:t=>{y.value=[...y.value.slice(0,t),...y.value.slice(t+1)]}}},ke="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:A}=E,d=U(ke,[]),Qe=()=>{const u=Y(),o=A>0,t=l=>u.resolve({name:l.key,..."anchor"in l?{hash:`#${l.anchor}`}:{}}).fullPath;return{enabled:o,resultHistory:d,addResultHistory:l=>{if(o){const i={link:t(l),display:l.display};"header"in l&&(i.header=l.header),d.value.length<A?d.value=[i,...d.value]:d.value=[i,...d.value.slice(0,A-1)]}},removeResultHistory:l=>{d.value=[...d.value.slice(0,l),...d.value.slice(l+1)]}}},xe=u=>{const o=ce(),t=B(),{search:l,terminate:i}=ve(),f=D(!1),H=pe([]);return he(()=>{const m=()=>{H.value=[],f.value=!1},x=He(g=>{f.value=!0,g?l({type:"search",query:g,locale:t.value,options:o}).then(h=>{H.value=h,f.value=!1}).catch(h=>{console.error(h),m()}):m()},E.searchDelay);M([u,t],()=>x(u.value),{immediate:!0}),ye(()=>{i()})}),{searching:f,results:H}};var qe=ee({name:"SearchResult",props:{query:{type:String,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(u,{emit:o}){const t=Y(),l=B(),i=se(ae),{enabled:f,addQueryHistory:H,queryHistory:m,removeQueryHistory:x}=Re(),{enabled:g,resultHistory:h,addResultHistory:b,removeResultHistory:j}=Qe(),O=f||g,w=le(u,"query"),{results:R,searching:z}=xe(w),r=te({isQuery:!0,index:0}),p=D(0),c=D(0),T=$(()=>O&&(m.value.length>0||h.value.length>0)),q=$(()=>R.value.length>0),C=$(()=>R.value[p.value]||null),L=e=>t.resolve({name:e.key,..."anchor"in e?{hash:`#${e.anchor}`}:{}}).fullPath,G=()=>{const{isQuery:e,index:s}=r;s===0?(r.isQuery=!e,r.index=e?h.value.length-1:m.value.length-1):r.index=s-1},V=()=>{const{isQuery:e,index:s}=r;s===(e?m.value.length-1:h.value.length-1)?(r.isQuery=!e,r.index=0):r.index=s+1},J=()=>{p.value=p.value>0?p.value-1:R.value.length-1,c.value=C.value.contents.length-1},K=()=>{p.value=p.value<R.value.length-1?p.value+1:0,c.value=0},N=()=>{c.value<C.value.contents.length-1?c.value=c.value+1:K()},W=()=>{c.value>0?c.value=c.value-1:J()},S=e=>e.map(s=>de(s)?s:a(s[0],s[1])),X=e=>{if(e.type==="customField"){const s=me[e.index]||"$content",[n,Q=""]=fe(s)?s[l.value].split("$content"):s.split("$content");return e.display.map(v=>a("div",S([n,...v,Q])))}return e.display.map(s=>a("div",S(s)))},k=()=>{p.value=0,c.value=0,o("updateQuery",""),o("close")};return re("keydown",e=>{if(u.isFocusing){if(q.value){if(e.key==="ArrowUp")W();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const s=C.value.contents[c.value],n=L(s);H(u.query),b(s),t.push(n),k()}}else if(g){if(e.key==="ArrowUp")G();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const{index:s}=r;r.isQuery?(o("updateQuery",m.value[s]),e.preventDefault()):(t.push(h.value[s].link),k())}}}}),M([p,c],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:w.value?!q.value:!T.value}],id:"search-pro-results"},w.value===""?O?T.value?[f?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.queryHistory),m.value.map((e,s)=>a("div",{class:["search-pro-result-item",{active:r.isQuery&&r.index===s}],onClick:()=>{o("updateQuery",e)}},[a(_,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:F,onClick:n=>{n.preventDefault(),n.stopPropagation(),x(s)}})]))])):null,g?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.resultHistory),h.value.map((e,s)=>a(I,{to:e.link,class:["search-pro-result-item",{active:!r.isQuery&&r.index===s}],onClick:()=>{k()}},()=>[a(_,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(n=>S(n)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:F,onClick:n=>{n.preventDefault(),n.stopPropagation(),j(s)}})]))])):null]:i.value.emptyHistory:i.value.emptyResult:z.value?a(ue,{hint:i.value.searching}):q.value?a("ul",{class:"search-pro-result-list"},R.value.map(({title:e,contents:s},n)=>{const Q=p.value===n;return a("li",{class:["search-pro-result-list-item",{active:Q}]},[a("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),s.map((v,Z)=>{const P=Q&&c.value===Z;return a(I,{to:L(v),class:["search-pro-result-item",{active:P,"aria-selected":P}],onClick:()=>{H(u.query),b(v),k()}},()=>[v.type==="text"?null:a(v.type==="title"?ie:v.type==="heading"?ne:oe,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[v.type==="text"&&v.header?a("div",{class:"content-header"},v.header):null,a("div",X(v))])])})])})):i.value.emptyResult)}});export{qe as default};
