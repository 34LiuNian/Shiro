import{p as P,d as N,s as W}from"./styles-6aaf32cf-DHC1D_gX.js";import{s as H,c as R}from"./isEmpty-C1jPZ8p9.js";import{G as v}from"./graph-DPVF48RO.js";import{l as U}from"./layout-eqQnYm25.js";import{c as t,l as b,h as C,i as T,u as F}from"./index.demo-CZg3ZAs9.js";import"./owner-sa0n2ZaD.js";import{l as $}from"./line-DunZT52S.js";import"./has-BgM3CcEf.js";import"./_baseUniq-Cr4PoKqM.js";import"./union-BRRwlvLQ.js";import"./zipObject--EnKqV8U.js";import"./_basePickBy-CyWLllq_.js";import"./index-CQyP8B5t.js";import"./use-is-dark-znqPLcO_.js";import"./LinkCard-DulhcBXN.js";import"./StyledButton-ix3rf22Q.js";import"./proxy-Du5g21x7.js";import"./image-d7QsErsd.js";import"./viewport-GjHJfcy8.js";import"./provider-n32NuTHL.js";import"./spring-C80N1tKa.js";import"./index-lSZfz-mQ.js";import"./use-is-unmounted-C8GiBwwY.js";import"./use-event-callback-Sv-SRi6p.js";import"./dom-BowoBODo.js";import"./use-drag-controls-drsIlvtO.js";import"./visual-element-DVFGuMeJ.js";import"./index-Cnv1K-qM.js";import"./bangumi-DGWEI3g8.js";import"./use-motion-template-_5KG6_3H.js";import"./Gallery-CRJnY5Cq.js";import"./use-ref-value-BANN9C7E.js";import"./index-RiKMAOTQ.js";import"./useQuery-vW1YaSIW.js";import"./util-BaePuELK.js";import"./Shiki-9sP8sorb.js";import"./alert-CtVhcp5N.js";import"./index-CAMsWv3n.js";import"./FloatPopover-D3ZrIRwU.js";import"./SocialSourceLink-CCBNHwzX.js";import"./Collapse-D886LiP6.js";import"./CodeEditor-C5jTsdo8.js";import"./index-LAI3pait.js";import"./cookie-DERRA7Ij.js";import"./Mermaid-4F4GEMJp.js";import"./array-BKyUJesY.js";import"./path-CbwjOpE9.js";const O=e=>e.append("circle").attr("class","start-state").attr("r",t().state.sizeUnit).attr("cx",t().state.padding+t().state.sizeUnit).attr("cy",t().state.padding+t().state.sizeUnit),X=e=>e.append("line").style("stroke","grey").style("stroke-dasharray","3").attr("x1",t().state.textHeight).attr("class","divider").attr("x2",t().state.textHeight*2).attr("y1",0).attr("y2",0),J=(e,a)=>{const s=e.append("text").attr("x",2*t().state.padding).attr("y",t().state.textHeight+2*t().state.padding).attr("font-size",t().state.fontSize).attr("class","state-title").text(a.id),c=s.node().getBBox();return e.insert("rect",":first-child").attr("x",t().state.padding).attr("y",t().state.padding).attr("width",c.width+2*t().state.padding).attr("height",c.height+2*t().state.padding).attr("rx",t().state.radius),s},Y=(e,a)=>{const s=function(p,w,y){const E=p.append("tspan").attr("x",2*t().state.padding).text(w);y||E.attr("dy",t().state.textHeight)},r=e.append("text").attr("x",2*t().state.padding).attr("y",t().state.textHeight+1.3*t().state.padding).attr("font-size",t().state.fontSize).attr("class","state-title").text(a.descriptions[0]).node().getBBox(),l=r.height,h=e.append("text").attr("x",t().state.padding).attr("y",l+t().state.padding*.4+t().state.dividerMargin+t().state.textHeight).attr("class","state-description");let i=!0,o=!0;a.descriptions.forEach(function(p){i||(s(h,p,o),o=!1),i=!1});const m=e.append("line").attr("x1",t().state.padding).attr("y1",t().state.padding+l+t().state.dividerMargin/2).attr("y2",t().state.padding+l+t().state.dividerMargin/2).attr("class","descr-divider"),x=h.node().getBBox(),d=Math.max(x.width,r.width);return m.attr("x2",d+3*t().state.padding),e.insert("rect",":first-child").attr("x",t().state.padding).attr("y",t().state.padding).attr("width",d+2*t().state.padding).attr("height",x.height+l+2*t().state.padding).attr("rx",t().state.radius),e},I=(e,a,s)=>{const c=t().state.padding,r=2*t().state.padding,l=e.node().getBBox(),h=l.width,i=l.x,o=e.append("text").attr("x",0).attr("y",t().state.titleShift).attr("font-size",t().state.fontSize).attr("class","state-title").text(a.id),x=o.node().getBBox().width+r;let d=Math.max(x,h);d===h&&(d=d+r);let p;const w=e.node().getBBox();a.doc,p=i-c,x>h&&(p=(h-d)/2+c),Math.abs(i-w.x)<c&&x>h&&(p=i-(x-h)/2);const y=1-t().state.textHeight;return e.insert("rect",":first-child").attr("x",p).attr("y",y).attr("class",s?"alt-composit":"composit").attr("width",d).attr("height",w.height+t().state.textHeight+t().state.titleShift+1).attr("rx","0"),o.attr("x",p+c),x<=h&&o.attr("x",i+(d-r)/2-x/2+c),e.insert("rect",":first-child").attr("x",p).attr("y",t().state.titleShift-t().state.textHeight-t().state.padding).attr("width",d).attr("height",t().state.textHeight*3).attr("rx",t().state.radius),e.insert("rect",":first-child").attr("x",p).attr("y",t().state.titleShift-t().state.textHeight-t().state.padding).attr("width",d).attr("height",w.height+3+2*t().state.textHeight).attr("rx",t().state.radius),e},_=e=>(e.append("circle").attr("class","end-state-outer").attr("r",t().state.sizeUnit+t().state.miniPadding).attr("cx",t().state.padding+t().state.sizeUnit+t().state.miniPadding).attr("cy",t().state.padding+t().state.sizeUnit+t().state.miniPadding),e.append("circle").attr("class","end-state-inner").attr("r",t().state.sizeUnit).attr("cx",t().state.padding+t().state.sizeUnit+2).attr("cy",t().state.padding+t().state.sizeUnit+2)),q=(e,a)=>{let s=t().state.forkWidth,c=t().state.forkHeight;if(a.parentId){let r=s;s=c,c=r}return e.append("rect").style("stroke","black").style("fill","black").attr("width",s).attr("height",c).attr("x",t().state.padding).attr("y",t().state.padding)},Z=(e,a,s,c)=>{let r=0;const l=c.append("text");l.style("text-anchor","start"),l.attr("class","noteText");let h=e.replace(/\r\n/g,"<br/>");h=h.replace(/\n/g,"<br/>");const i=h.split(T.lineBreakRegex);let o=1.25*t().state.noteMargin;for(const m of i){const x=m.trim();if(x.length>0){const d=l.append("tspan");if(d.text(x),o===0){const p=d.node().getBBox();o+=p.height}r+=o,d.attr("x",a+t().state.noteMargin),d.attr("y",s+r+1.25*t().state.noteMargin)}}return{textWidth:l.node().getBBox().width,textHeight:r}},K=(e,a)=>{a.attr("class","state-note");const s=a.append("rect").attr("x",0).attr("y",t().state.padding),c=a.append("g"),{textWidth:r,textHeight:l}=Z(e,0,0,c);return s.attr("height",l+2*t().state.noteMargin),s.attr("width",r+t().state.noteMargin*2),s},L=function(e,a){const s=a.id,c={id:s,label:a.id,width:0,height:0},r=e.append("g").attr("id",s).attr("class","stateGroup");a.type==="start"&&O(r),a.type==="end"&&_(r),(a.type==="fork"||a.type==="join")&&q(r,a),a.type==="note"&&K(a.note.text,r),a.type==="divider"&&X(r),a.type==="default"&&a.descriptions.length===0&&J(r,a),a.type==="default"&&a.descriptions.length>0&&Y(r,a);const l=r.node().getBBox();return c.width=l.width+2*t().state.padding,c.height=l.height+2*t().state.padding,c};let G=0;const Q=function(e,a,s){const c=function(o){switch(o){case N.relationType.AGGREGATION:return"aggregation";case N.relationType.EXTENSION:return"extension";case N.relationType.COMPOSITION:return"composition";case N.relationType.DEPENDENCY:return"dependency"}};a.points=a.points.filter(o=>!Number.isNaN(o.y));const r=a.points,l=$().x(function(o){return o.x}).y(function(o){return o.y}).curve(R),h=e.append("path").attr("d",l(r)).attr("id","edge"+G).attr("class","transition");let i="";if(t().state.arrowMarkerAbsolute&&(i=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,i=i.replace(/\(/g,"\\("),i=i.replace(/\)/g,"\\)")),h.attr("marker-end","url("+i+"#"+c(N.relationType.DEPENDENCY)+"End)"),s.title!==void 0){const o=e.append("g").attr("class","stateLabel"),{x:m,y:x}=F.calcLabelPosition(a.points),d=T.getRows(s.title);let p=0;const w=[];let y=0,E=0;for(let u=0;u<=d.length;u++){const g=o.append("text").attr("text-anchor","middle").text(d[u]).attr("x",m).attr("y",x+p),f=g.node().getBBox();y=Math.max(y,f.width),E=Math.min(E,f.x),b.info(f.x,m,x+p),p===0&&(p=g.node().getBBox().height,b.info("Title height",p,x)),w.push(g)}let k=p*d.length;if(d.length>1){const u=(d.length-1)*p*.5;w.forEach((g,f)=>g.attr("y",x+f*p-u)),k=p*d.length}const n=o.node().getBBox();o.insert("rect",":first-child").attr("class","box").attr("x",m-y/2-t().state.padding/2).attr("y",x-k/2-t().state.padding/2-3.5).attr("width",y+t().state.padding).attr("height",k+t().state.padding),b.info(n)}G++};let B;const z={},V=function(){},j=function(e){e.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},D=function(e,a,s,c){B=t().state;const r=t().securityLevel;let l;r==="sandbox"&&(l=H("#i"+a));const h=r==="sandbox"?H(l.nodes()[0].contentDocument.body):H("body"),i=r==="sandbox"?l.nodes()[0].contentDocument:document;b.debug("Rendering diagram "+e);const o=h.select(`[id='${a}']`);j(o);const m=c.db.getRootDoc();A(m,o,void 0,!1,h,i,c);const x=B.padding,d=o.node().getBBox(),p=d.width+x*2,w=d.height+x*2,y=p*1.75;C(o,w,y,B.useMaxWidth),o.attr("viewBox",`${d.x-B.padding}  ${d.y-B.padding} `+p+" "+w)},tt=e=>e?e.length*B.fontSizeFactor:1,A=(e,a,s,c,r,l,h)=>{const i=new v({compound:!0,multigraph:!0});let o,m=!0;for(o=0;o<e.length;o++)if(e[o].stmt==="relation"){m=!1;break}s?i.setGraph({rankdir:"LR",multigraph:!0,compound:!0,ranker:"tight-tree",ranksep:m?1:B.edgeLengthFactor,nodeSep:m?1:50,isMultiGraph:!0}):i.setGraph({rankdir:"TB",multigraph:!0,compound:!0,ranksep:m?1:B.edgeLengthFactor,nodeSep:m?1:50,ranker:"tight-tree",isMultiGraph:!0}),i.setDefaultEdgeLabel(function(){return{}}),h.db.extract(e);const x=h.db.getStates(),d=h.db.getRelations(),p=Object.keys(x);for(const n of p){const u=x[n];s&&(u.parentId=s);let g;if(u.doc){let f=a.append("g").attr("id",u.id).attr("class","stateGroup");g=A(u.doc,f,u.id,!c,r,l,h);{f=I(f,u,c);let S=f.node().getBBox();g.width=S.width,g.height=S.height+B.padding/2,z[u.id]={y:B.compositTitleSize}}}else g=L(a,u);if(u.note){const f={descriptions:[],id:u.id+"-note",note:u.note,type:"note"},S=L(a,f);u.note.position==="left of"?(i.setNode(g.id+"-note",S),i.setNode(g.id,g)):(i.setNode(g.id,g),i.setNode(g.id+"-note",S)),i.setParent(g.id,g.id+"-group"),i.setParent(g.id+"-note",g.id+"-group")}else i.setNode(g.id,g)}b.debug("Count=",i.nodeCount(),i);let w=0;d.forEach(function(n){w++,b.debug("Setting edge",n),i.setEdge(n.id1,n.id2,{relation:n,width:tt(n.title),height:B.labelHeight*T.getRows(n.title).length,labelpos:"c"},"id"+w)}),U(i),b.debug("Graph after layout",i.nodes());const y=a.node();i.nodes().forEach(function(n){n!==void 0&&i.node(n)!==void 0?(b.warn("Node "+n+": "+JSON.stringify(i.node(n))),r.select("#"+y.id+" #"+n).attr("transform","translate("+(i.node(n).x-i.node(n).width/2)+","+(i.node(n).y+(z[n]?z[n].y:0)-i.node(n).height/2)+" )"),r.select("#"+y.id+" #"+n).attr("data-x-shift",i.node(n).x-i.node(n).width/2),l.querySelectorAll("#"+y.id+" #"+n+" .divider").forEach(g=>{const f=g.parentElement;let S=0,M=0;f&&(f.parentElement&&(S=f.parentElement.getBBox().width),M=parseInt(f.getAttribute("data-x-shift"),10),Number.isNaN(M)&&(M=0)),g.setAttribute("x1",0-M+8),g.setAttribute("x2",S-M-8)})):b.debug("No Node "+n+": "+JSON.stringify(i.node(n)))});let E=y.getBBox();i.edges().forEach(function(n){n!==void 0&&i.edge(n)!==void 0&&(b.debug("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(i.edge(n))),Q(a,i.edge(n),i.edge(n).relation))}),E=y.getBBox();const k={id:s||"root",label:s||"root",width:0,height:0};return k.width=E.width+2*B.padding,k.height=E.height+2*B.padding,b.debug("Doc rendered",k,i),k},et={setConf:V,draw:D},Kt={parser:P,db:N,renderer:et,styles:W,init:e=>{e.state||(e.state={}),e.state.arrowMarkerAbsolute=e.arrowMarkerAbsolute,N.clear()}};export{Kt as diagram};
