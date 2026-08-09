import{q as p,r as g,j as e,L as r,a as j}from"./app-BlLtzEYu.js";import{c}from"./utils-BEYmlqM_.js";import{B as b}from"./button-B1uJRR0J.js";import{u as N,T as y}from"./useFlashToasts-BPiT9apy.js";import{c as a}from"./createLucideIcon-blSOKLvU.js";import{X as k}from"./x-C3j9pOZS.js";/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]],w=a("book-open",v);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],A=a("circle-question-mark",M);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],C=a("log-out",_);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],O=a("menu",L);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],z=a("settings",q),B=[{key:"complaint",label:"Reclamos",href:"complaint.index",icon:w},{key:"question",label:"Preguntas",href:"question.index",icon:A},{key:"config",label:"Configuración",href:"config.index",icon:z}];function $({children:i,title:l}){N();const{url:d,props:m}=p();m.company;const[t,o]=g.useState(!1),n=d.split("/").filter(Boolean)[0]??"",f=s=>s==="complaint"?n==="reclamos"||n==="":s==="question"?n==="preguntas":s==="config"?n==="configuracion":!1;return e.jsxs("div",{className:"flex h-screen w-screen overflow-hidden bg-muted/40",children:[e.jsx("aside",{className:c("fixed inset-y-0 left-0 z-40 w-64 border-e border-border bg-card transition-transform lg:static lg:translate-x-0",t?"translate-x-0":"-translate-x-full"),children:e.jsxs("div",{className:"flex h-full flex-col px-3 py-4",children:[e.jsxs(r,{href:"/reclamos",className:"flex flex-col items-center gap-2 py-2 text-center",children:[e.jsx("img",{src:"/logo.png",className:"h-14 w-14 rounded-full object-cover shadow-sm ring-1 ring-border",alt:"Logo"}),e.jsxs("span",{className:"text-sm font-medium leading-tight text-foreground",children:["LIBRO DE ",e.jsx("strong",{className:"font-semibold",children:"RECLAMACIONES"})]})]}),e.jsx("div",{className:"my-4 border-t border-border"}),e.jsx("ul",{className:"space-y-1 font-medium",children:B.map(({key:s,label:x,href:h,icon:u})=>e.jsx("li",{children:e.jsxs(r,{href:route(h),className:c("menuItem",f(s)&&"itemActive"),onClick:()=>o(!1),children:[e.jsx(u,{className:"menuIcon"}),e.jsx("span",{className:"flex-1 whitespace-nowrap",children:x})]})},s))})]})}),t&&e.jsx("div",{className:"fixed inset-0 z-30 bg-black/50 lg:hidden",onClick:()=>o(!1)}),e.jsxs("div",{className:"flex min-w-0 flex-1 flex-col",children:[e.jsxs("header",{className:"flex w-full items-center justify-between border-b border-border bg-card p-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(b,{variant:"ghost",size:"icon",className:"lg:hidden",onClick:()=>o(s=>!s),children:t?e.jsx(k,{className:"h-5 w-5"}):e.jsx(O,{className:"h-5 w-5"})}),e.jsx("h1",{className:"text-lg font-semibold text-foreground",children:l??"Panel de Administración"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(y,{}),e.jsxs("button",{type:"button",onClick:()=>j.post(route("logout")),className:"btn-outline",children:[e.jsx(C,{className:"h-4 w-4"}),"Cerrar Sesión"]})]})]}),e.jsx("main",{className:"flex-1 overflow-y-auto p-4 lg:p-6",children:i})]})]})}export{$ as A};
