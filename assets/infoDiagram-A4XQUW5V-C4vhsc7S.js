import{_ as a,l as o,G as p,j as s,H as n}from"./mermaid.core-CHfjiBf4.js";import{p as m}from"./gitGraph-YCYPL57B-BS30gGRF.js";import"./index-CQyP8B5t.js";import"./owner-sa0n2ZaD.js";import"./StyledButton-ix3rf22Q.js";import"./proxy-Du5g21x7.js";import"./isEmpty-C1jPZ8p9.js";import"./line-DunZT52S.js";import"./array-BKyUJesY.js";import"./path-CbwjOpE9.js";import"./_baseUniq-Cr4PoKqM.js";import"./_basePickBy-CyWLllq_.js";import"./has-BgM3CcEf.js";import"./clone-BRQVr5N1.js";var g={parse:a(async r=>{const t=await m("info",r);o.debug(t)},"parse")},v={version:n},d=a(()=>v.version,"getVersion"),c={getVersion:d},l=a((r,t,i)=>{o.debug(`rendering info diagram
`+r);const e=p(t);s(e,100,400,!0),e.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text(`v${i}`)},"draw"),f={draw:l},B={parser:g,db:c,renderer:f};export{B as diagram};
