import{r as o,j as s,q as m,t as r}from"./app-BlLtzEYu.js";import{B as i}from"./button-B1uJRR0J.js";import{c}from"./createLucideIcon-blSOKLvU.js";/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],u=c("moon",h);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],l=c("sun",d);function k(){if(typeof window>"u")return"light";const e=localStorage.getItem("theme");return e==="dark"||e==="light"?e:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function p(){const[e,t]=o.useState(k);o.useEffect(()=>{document.documentElement.classList.toggle("dark",e==="dark"),localStorage.setItem("theme",e)},[e]);const n=o.useCallback(()=>{t(a=>a==="dark"?"light":"dark")},[]);return{theme:e,setTheme:t,toggleTheme:n}}function x(){const{theme:e,toggleTheme:t}=p();return s.jsx(i,{variant:"ghost",size:"icon",onClick:t,"aria-label":"Cambiar tema",children:e==="dark"?s.jsx(l,{className:"h-4 w-4"}):s.jsx(u,{className:"h-4 w-4"})})}function T(){const{flash:e}=m().props;o.useEffect(()=>{e!=null&&e.success&&r.success(e.success),e!=null&&e.error&&r.error(e.error)},[e])}export{x as T,T as u};
