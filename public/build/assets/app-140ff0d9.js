function jc(t,e){return function(){return t.apply(e,arguments)}}const{toString:nu}=Object.prototype,{getPrototypeOf:wr}=Object,N2=(t=>e=>{const a=nu.call(e);return t[a]||(t[a]=a.slice(8,-1).toLowerCase())})(Object.create(null)),ee=t=>(t=t.toLowerCase(),e=>N2(e)===t),q2=t=>e=>typeof e===t,{isArray:z1}=Array,ya=q2("undefined");function ru(t){return t!==null&&!ya(t)&&t.constructor!==null&&!ya(t.constructor)&&Bt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Zc=ee("ArrayBuffer");function iu(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Zc(t.buffer),e}const ou=q2("string"),Bt=q2("function"),Uc=q2("number"),j2=t=>t!==null&&typeof t=="object",hu=t=>t===!0||t===!1,n2=t=>{if(N2(t)!=="object")return!1;const e=wr(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},su=ee("Date"),cu=ee("File"),du=ee("Blob"),pu=ee("FileList"),lu=t=>j2(t)&&Bt(t.pipe),uu=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Bt(t.append)&&((e=N2(t))==="formdata"||e==="object"&&Bt(t.toString)&&t.toString()==="[object FormData]"))},fu=ee("URLSearchParams"),[vu,Mu,yu,gu]=["ReadableStream","Request","Response","Headers"].map(ee),mu=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ca(t,e,{allOwnKeys:a=!1}={}){if(t===null||typeof t>"u")return;let n,i;if(typeof t!="object"&&(t=[t]),z1(t))for(n=0,i=t.length;n<i;n++)e.call(null,t[n],n,t);else{const h=a?Object.getOwnPropertyNames(t):Object.keys(t),c=h.length;let l;for(n=0;n<c;n++)l=h[n],e.call(null,t[l],l,t)}}function Wc(t,e){e=e.toLowerCase();const a=Object.keys(t);let n=a.length,i;for(;n-- >0;)if(i=a[n],e===i.toLowerCase())return i;return null}const a1=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),$c=t=>!ya(t)&&t!==a1;function jn(){const{caseless:t}=$c(this)&&this||{},e={},a=(n,i)=>{const h=t&&Wc(e,i)||i;n2(e[h])&&n2(n)?e[h]=jn(e[h],n):n2(n)?e[h]=jn({},n):z1(n)?e[h]=n.slice():e[h]=n};for(let n=0,i=arguments.length;n<i;n++)arguments[n]&&Ca(arguments[n],a);return e}const xu=(t,e,a,{allOwnKeys:n}={})=>(Ca(e,(i,h)=>{a&&Bt(i)?t[h]=jc(i,a):t[h]=i},{allOwnKeys:n}),t),wu=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),bu=(t,e,a,n)=>{t.prototype=Object.create(e.prototype,n),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),a&&Object.assign(t.prototype,a)},_u=(t,e,a,n)=>{let i,h,c;const l={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),h=i.length;h-- >0;)c=i[h],(!n||n(c,t,e))&&!l[c]&&(e[c]=t[c],l[c]=!0);t=a!==!1&&wr(t)}while(t&&(!a||a(t,e))&&t!==Object.prototype);return e},Cu=(t,e,a)=>{t=String(t),(a===void 0||a>t.length)&&(a=t.length),a-=e.length;const n=t.indexOf(e,a);return n!==-1&&n===a},Au=t=>{if(!t)return null;if(z1(t))return t;let e=t.length;if(!Uc(e))return null;const a=new Array(e);for(;e-- >0;)a[e]=t[e];return a},Hu=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&wr(Uint8Array)),Su=(t,e)=>{const n=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=n.next())&&!i.done;){const h=i.value;e.call(t,h[0],h[1])}},ku=(t,e)=>{let a;const n=[];for(;(a=t.exec(e))!==null;)n.push(a);return n},Eu=ee("HTMLFormElement"),Lu=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(a,n,i){return n.toUpperCase()+i}),r0=(({hasOwnProperty:t})=>(e,a)=>t.call(e,a))(Object.prototype),Vu=ee("RegExp"),Kc=(t,e)=>{const a=Object.getOwnPropertyDescriptors(t),n={};Ca(a,(i,h)=>{let c;(c=e(i,h,t))!==!1&&(n[h]=c||i)}),Object.defineProperties(t,n)},Du=t=>{Kc(t,(e,a)=>{if(Bt(t)&&["arguments","caller","callee"].indexOf(a)!==-1)return!1;const n=t[a];if(Bt(n)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+a+"'")})}})},Tu=(t,e)=>{const a={},n=i=>{i.forEach(h=>{a[h]=!0})};return z1(t)?n(t):n(String(t).split(e)),a},Ou=()=>{},Pu=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,An="abcdefghijklmnopqrstuvwxyz",i0="0123456789",Gc={DIGIT:i0,ALPHA:An,ALPHA_DIGIT:An+An.toUpperCase()+i0},Iu=(t=16,e=Gc.ALPHA_DIGIT)=>{let a="";const{length:n}=e;for(;t--;)a+=e[Math.random()*n|0];return a};function Ru(t){return!!(t&&Bt(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Bu=t=>{const e=new Array(10),a=(n,i)=>{if(j2(n)){if(e.indexOf(n)>=0)return;if(!("toJSON"in n)){e[i]=n;const h=z1(n)?[]:{};return Ca(n,(c,l)=>{const v=a(c,i+1);!ya(v)&&(h[l]=v)}),e[i]=void 0,h}}return n};return a(t,0)},Fu=ee("AsyncFunction"),zu=t=>t&&(j2(t)||Bt(t))&&Bt(t.then)&&Bt(t.catch),Xc=((t,e)=>t?setImmediate:e?((a,n)=>(a1.addEventListener("message",({source:i,data:h})=>{i===a1&&h===a&&n.length&&n.shift()()},!1),i=>{n.push(i),a1.postMessage(a,"*")}))(`axios@${Math.random()}`,[]):a=>setTimeout(a))(typeof setImmediate=="function",Bt(a1.postMessage)),Nu=typeof queueMicrotask<"u"?queueMicrotask.bind(a1):typeof process<"u"&&process.nextTick||Xc,D={isArray:z1,isArrayBuffer:Zc,isBuffer:ru,isFormData:uu,isArrayBufferView:iu,isString:ou,isNumber:Uc,isBoolean:hu,isObject:j2,isPlainObject:n2,isReadableStream:vu,isRequest:Mu,isResponse:yu,isHeaders:gu,isUndefined:ya,isDate:su,isFile:cu,isBlob:du,isRegExp:Vu,isFunction:Bt,isStream:lu,isURLSearchParams:fu,isTypedArray:Hu,isFileList:pu,forEach:Ca,merge:jn,extend:xu,trim:mu,stripBOM:wu,inherits:bu,toFlatObject:_u,kindOf:N2,kindOfTest:ee,endsWith:Cu,toArray:Au,forEachEntry:Su,matchAll:ku,isHTMLForm:Eu,hasOwnProperty:r0,hasOwnProp:r0,reduceDescriptors:Kc,freezeMethods:Du,toObjectSet:Tu,toCamelCase:Lu,noop:Ou,toFiniteNumber:Pu,findKey:Wc,global:a1,isContextDefined:$c,ALPHABET:Gc,generateString:Iu,isSpecCompliantForm:Ru,toJSONObject:Bu,isAsyncFn:Fu,isThenable:zu,setImmediate:Xc,asap:Nu};function et(t,e,a,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),a&&(this.config=a),n&&(this.request=n),i&&(this.response=i,this.status=i.status?i.status:null)}D.inherits(et,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:D.toJSONObject(this.config),code:this.code,status:this.status}}});const Yc=et.prototype,Jc={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Jc[t]={value:t}});Object.defineProperties(et,Jc);Object.defineProperty(Yc,"isAxiosError",{value:!0});et.from=(t,e,a,n,i,h)=>{const c=Object.create(Yc);return D.toFlatObject(t,c,function(v){return v!==Error.prototype},l=>l!=="isAxiosError"),et.call(c,t.message,e,a,n,i),c.cause=t,c.name=t.name,h&&Object.assign(c,h),c};const qu=null;function Zn(t){return D.isPlainObject(t)||D.isArray(t)}function Qc(t){return D.endsWith(t,"[]")?t.slice(0,-2):t}function o0(t,e,a){return t?t.concat(e).map(function(i,h){return i=Qc(i),!a&&h?"["+i+"]":i}).join(a?".":""):e}function ju(t){return D.isArray(t)&&!t.some(Zn)}const Zu=D.toFlatObject(D,{},null,function(e){return/^is[A-Z]/.test(e)});function Z2(t,e,a){if(!D.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,a=D.toFlatObject(a,{metaTokens:!0,dots:!1,indexes:!1},!1,function(V,H){return!D.isUndefined(H[V])});const n=a.metaTokens,i=a.visitor||g,h=a.dots,c=a.indexes,v=(a.Blob||typeof Blob<"u"&&Blob)&&D.isSpecCompliantForm(e);if(!D.isFunction(i))throw new TypeError("visitor must be a function");function y(k){if(k===null)return"";if(D.isDate(k))return k.toISOString();if(!v&&D.isBlob(k))throw new et("Blob is not supported. Use a Buffer instead.");return D.isArrayBuffer(k)||D.isTypedArray(k)?v&&typeof Blob=="function"?new Blob([k]):Buffer.from(k):k}function g(k,V,H){let T=k;if(k&&!H&&typeof k=="object"){if(D.endsWith(V,"{}"))V=n?V:V.slice(0,-2),k=JSON.stringify(k);else if(D.isArray(k)&&ju(k)||(D.isFileList(k)||D.endsWith(V,"[]"))&&(T=D.toArray(k)))return V=Qc(V),T.forEach(function(Z,z){!(D.isUndefined(Z)||Z===null)&&e.append(c===!0?o0([V],z,h):c===null?V:V+"[]",y(Z))}),!1}return Zn(k)?!0:(e.append(o0(H,V,h),y(k)),!1)}const C=[],I=Object.assign(Zu,{defaultVisitor:g,convertValue:y,isVisitable:Zn});function R(k,V){if(!D.isUndefined(k)){if(C.indexOf(k)!==-1)throw Error("Circular reference detected in "+V.join("."));C.push(k),D.forEach(k,function(T,j){(!(D.isUndefined(T)||T===null)&&i.call(e,T,D.isString(j)?j.trim():j,V,I))===!0&&R(T,V?V.concat(j):[j])}),C.pop()}}if(!D.isObject(t))throw new TypeError("data must be an object");return R(t),e}function h0(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(n){return e[n]})}function br(t,e){this._pairs=[],t&&Z2(t,this,e)}const td=br.prototype;td.append=function(e,a){this._pairs.push([e,a])};td.toString=function(e){const a=e?function(n){return e.call(this,n,h0)}:h0;return this._pairs.map(function(i){return a(i[0])+"="+a(i[1])},"").join("&")};function Uu(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ed(t,e,a){if(!e)return t;const n=a&&a.encode||Uu,i=a&&a.serialize;let h;if(i?h=i(e,a):h=D.isURLSearchParams(e)?e.toString():new br(e,a).toString(n),h){const c=t.indexOf("#");c!==-1&&(t=t.slice(0,c)),t+=(t.indexOf("?")===-1?"?":"&")+h}return t}class Wu{constructor(){this.handlers=[]}use(e,a,n){return this.handlers.push({fulfilled:e,rejected:a,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){D.forEach(this.handlers,function(n){n!==null&&e(n)})}}const s0=Wu,ad={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},$u=typeof URLSearchParams<"u"?URLSearchParams:br,Ku=typeof FormData<"u"?FormData:null,Gu=typeof Blob<"u"?Blob:null,Xu={isBrowser:!0,classes:{URLSearchParams:$u,FormData:Ku,Blob:Gu},protocols:["http","https","file","blob","url","data"]},_r=typeof window<"u"&&typeof document<"u",Un=typeof navigator=="object"&&navigator||void 0,Yu=_r&&(!Un||["ReactNative","NativeScript","NS"].indexOf(Un.product)<0),Ju=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Qu=_r&&window.location.href||"http://localhost",t4=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:_r,hasStandardBrowserEnv:Yu,hasStandardBrowserWebWorkerEnv:Ju,navigator:Un,origin:Qu},Symbol.toStringTag,{value:"Module"})),Ot={...t4,...Xu};function e4(t,e){return Z2(t,new Ot.classes.URLSearchParams,Object.assign({visitor:function(a,n,i,h){return Ot.isNode&&D.isBuffer(a)?(this.append(n,a.toString("base64")),!1):h.defaultVisitor.apply(this,arguments)}},e))}function a4(t){return D.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function n4(t){const e={},a=Object.keys(t);let n;const i=a.length;let h;for(n=0;n<i;n++)h=a[n],e[h]=t[h];return e}function nd(t){function e(a,n,i,h){let c=a[h++];if(c==="__proto__")return!0;const l=Number.isFinite(+c),v=h>=a.length;return c=!c&&D.isArray(i)?i.length:c,v?(D.hasOwnProp(i,c)?i[c]=[i[c],n]:i[c]=n,!l):((!i[c]||!D.isObject(i[c]))&&(i[c]=[]),e(a,n,i[c],h)&&D.isArray(i[c])&&(i[c]=n4(i[c])),!l)}if(D.isFormData(t)&&D.isFunction(t.entries)){const a={};return D.forEachEntry(t,(n,i)=>{e(a4(n),i,a,0)}),a}return null}function r4(t,e,a){if(D.isString(t))try{return(e||JSON.parse)(t),D.trim(t)}catch(n){if(n.name!=="SyntaxError")throw n}return(a||JSON.stringify)(t)}const Cr={transitional:ad,adapter:["xhr","http","fetch"],transformRequest:[function(e,a){const n=a.getContentType()||"",i=n.indexOf("application/json")>-1,h=D.isObject(e);if(h&&D.isHTMLForm(e)&&(e=new FormData(e)),D.isFormData(e))return i?JSON.stringify(nd(e)):e;if(D.isArrayBuffer(e)||D.isBuffer(e)||D.isStream(e)||D.isFile(e)||D.isBlob(e)||D.isReadableStream(e))return e;if(D.isArrayBufferView(e))return e.buffer;if(D.isURLSearchParams(e))return a.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(h){if(n.indexOf("application/x-www-form-urlencoded")>-1)return e4(e,this.formSerializer).toString();if((l=D.isFileList(e))||n.indexOf("multipart/form-data")>-1){const v=this.env&&this.env.FormData;return Z2(l?{"files[]":e}:e,v&&new v,this.formSerializer)}}return h||i?(a.setContentType("application/json",!1),r4(e)):e}],transformResponse:[function(e){const a=this.transitional||Cr.transitional,n=a&&a.forcedJSONParsing,i=this.responseType==="json";if(D.isResponse(e)||D.isReadableStream(e))return e;if(e&&D.isString(e)&&(n&&!this.responseType||i)){const c=!(a&&a.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(l){if(c)throw l.name==="SyntaxError"?et.from(l,et.ERR_BAD_RESPONSE,this,null,this.response):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ot.classes.FormData,Blob:Ot.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};D.forEach(["delete","get","head","post","put","patch"],t=>{Cr.headers[t]={}});const Ar=Cr,i4=D.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),o4=t=>{const e={};let a,n,i;return t&&t.split(`
`).forEach(function(c){i=c.indexOf(":"),a=c.substring(0,i).trim().toLowerCase(),n=c.substring(i+1).trim(),!(!a||e[a]&&i4[a])&&(a==="set-cookie"?e[a]?e[a].push(n):e[a]=[n]:e[a]=e[a]?e[a]+", "+n:n)}),e},c0=Symbol("internals");function aa(t){return t&&String(t).trim().toLowerCase()}function r2(t){return t===!1||t==null?t:D.isArray(t)?t.map(r2):String(t)}function h4(t){const e=Object.create(null),a=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=a.exec(t);)e[n[1]]=n[2];return e}const s4=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Hn(t,e,a,n,i){if(D.isFunction(n))return n.call(this,e,a);if(i&&(e=a),!!D.isString(e)){if(D.isString(n))return e.indexOf(n)!==-1;if(D.isRegExp(n))return n.test(e)}}function c4(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,a,n)=>a.toUpperCase()+n)}function d4(t,e){const a=D.toCamelCase(" "+e);["get","set","has"].forEach(n=>{Object.defineProperty(t,n+a,{value:function(i,h,c){return this[n].call(this,e,i,h,c)},configurable:!0})})}class U2{constructor(e){e&&this.set(e)}set(e,a,n){const i=this;function h(l,v,y){const g=aa(v);if(!g)throw new Error("header name must be a non-empty string");const C=D.findKey(i,g);(!C||i[C]===void 0||y===!0||y===void 0&&i[C]!==!1)&&(i[C||v]=r2(l))}const c=(l,v)=>D.forEach(l,(y,g)=>h(y,g,v));if(D.isPlainObject(e)||e instanceof this.constructor)c(e,a);else if(D.isString(e)&&(e=e.trim())&&!s4(e))c(o4(e),a);else if(D.isHeaders(e))for(const[l,v]of e.entries())h(v,l,n);else e!=null&&h(a,e,n);return this}get(e,a){if(e=aa(e),e){const n=D.findKey(this,e);if(n){const i=this[n];if(!a)return i;if(a===!0)return h4(i);if(D.isFunction(a))return a.call(this,i,n);if(D.isRegExp(a))return a.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,a){if(e=aa(e),e){const n=D.findKey(this,e);return!!(n&&this[n]!==void 0&&(!a||Hn(this,this[n],n,a)))}return!1}delete(e,a){const n=this;let i=!1;function h(c){if(c=aa(c),c){const l=D.findKey(n,c);l&&(!a||Hn(n,n[l],l,a))&&(delete n[l],i=!0)}}return D.isArray(e)?e.forEach(h):h(e),i}clear(e){const a=Object.keys(this);let n=a.length,i=!1;for(;n--;){const h=a[n];(!e||Hn(this,this[h],h,e,!0))&&(delete this[h],i=!0)}return i}normalize(e){const a=this,n={};return D.forEach(this,(i,h)=>{const c=D.findKey(n,h);if(c){a[c]=r2(i),delete a[h];return}const l=e?c4(h):String(h).trim();l!==h&&delete a[h],a[l]=r2(i),n[l]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const a=Object.create(null);return D.forEach(this,(n,i)=>{n!=null&&n!==!1&&(a[i]=e&&D.isArray(n)?n.join(", "):n)}),a}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,a])=>e+": "+a).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...a){const n=new this(e);return a.forEach(i=>n.set(i)),n}static accessor(e){const n=(this[c0]=this[c0]={accessors:{}}).accessors,i=this.prototype;function h(c){const l=aa(c);n[l]||(d4(i,c),n[l]=!0)}return D.isArray(e)?e.forEach(h):h(e),this}}U2.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);D.reduceDescriptors(U2.prototype,({value:t},e)=>{let a=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(n){this[a]=n}}});D.freezeMethods(U2);const Qt=U2;function Sn(t,e){const a=this||Ar,n=e||a,i=Qt.from(n.headers);let h=n.data;return D.forEach(t,function(l){h=l.call(a,h,i.normalize(),e?e.status:void 0)}),i.normalize(),h}function rd(t){return!!(t&&t.__CANCEL__)}function N1(t,e,a){et.call(this,t??"canceled",et.ERR_CANCELED,e,a),this.name="CanceledError"}D.inherits(N1,et,{__CANCEL__:!0});function id(t,e,a){const n=a.config.validateStatus;!a.status||!n||n(a.status)?t(a):e(new et("Request failed with status code "+a.status,[et.ERR_BAD_REQUEST,et.ERR_BAD_RESPONSE][Math.floor(a.status/100)-4],a.config,a.request,a))}function p4(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function l4(t,e){t=t||10;const a=new Array(t),n=new Array(t);let i=0,h=0,c;return e=e!==void 0?e:1e3,function(v){const y=Date.now(),g=n[h];c||(c=y),a[i]=v,n[i]=y;let C=h,I=0;for(;C!==i;)I+=a[C++],C=C%t;if(i=(i+1)%t,i===h&&(h=(h+1)%t),y-c<e)return;const R=g&&y-g;return R?Math.round(I*1e3/R):void 0}}function u4(t,e){let a=0,n=1e3/e,i,h;const c=(y,g=Date.now())=>{a=g,i=null,h&&(clearTimeout(h),h=null),t.apply(null,y)};return[(...y)=>{const g=Date.now(),C=g-a;C>=n?c(y,g):(i=y,h||(h=setTimeout(()=>{h=null,c(i)},n-C)))},()=>i&&c(i)]}const p2=(t,e,a=3)=>{let n=0;const i=l4(50,250);return u4(h=>{const c=h.loaded,l=h.lengthComputable?h.total:void 0,v=c-n,y=i(v),g=c<=l;n=c;const C={loaded:c,total:l,progress:l?c/l:void 0,bytes:v,rate:y||void 0,estimated:y&&l&&g?(l-c)/y:void 0,event:h,lengthComputable:l!=null,[e?"download":"upload"]:!0};t(C)},a)},d0=(t,e)=>{const a=t!=null;return[n=>e[0]({lengthComputable:a,total:t,loaded:n}),e[1]]},p0=t=>(...e)=>D.asap(()=>t(...e)),f4=Ot.hasStandardBrowserEnv?function(){const e=Ot.navigator&&/(msie|trident)/i.test(Ot.navigator.userAgent),a=document.createElement("a");let n;function i(h){let c=h;return e&&(a.setAttribute("href",c),c=a.href),a.setAttribute("href",c),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:a.pathname.charAt(0)==="/"?a.pathname:"/"+a.pathname}}return n=i(window.location.href),function(c){const l=D.isString(c)?i(c):c;return l.protocol===n.protocol&&l.host===n.host}}():function(){return function(){return!0}}(),v4=Ot.hasStandardBrowserEnv?{write(t,e,a,n,i,h){const c=[t+"="+encodeURIComponent(e)];D.isNumber(a)&&c.push("expires="+new Date(a).toGMTString()),D.isString(n)&&c.push("path="+n),D.isString(i)&&c.push("domain="+i),h===!0&&c.push("secure"),document.cookie=c.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function M4(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function y4(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function od(t,e){return t&&!M4(e)?y4(t,e):e}const l0=t=>t instanceof Qt?{...t}:t;function c1(t,e){e=e||{};const a={};function n(y,g,C){return D.isPlainObject(y)&&D.isPlainObject(g)?D.merge.call({caseless:C},y,g):D.isPlainObject(g)?D.merge({},g):D.isArray(g)?g.slice():g}function i(y,g,C){if(D.isUndefined(g)){if(!D.isUndefined(y))return n(void 0,y,C)}else return n(y,g,C)}function h(y,g){if(!D.isUndefined(g))return n(void 0,g)}function c(y,g){if(D.isUndefined(g)){if(!D.isUndefined(y))return n(void 0,y)}else return n(void 0,g)}function l(y,g,C){if(C in e)return n(y,g);if(C in t)return n(void 0,y)}const v={url:h,method:h,data:h,baseURL:c,transformRequest:c,transformResponse:c,paramsSerializer:c,timeout:c,timeoutMessage:c,withCredentials:c,withXSRFToken:c,adapter:c,responseType:c,xsrfCookieName:c,xsrfHeaderName:c,onUploadProgress:c,onDownloadProgress:c,decompress:c,maxContentLength:c,maxBodyLength:c,beforeRedirect:c,transport:c,httpAgent:c,httpsAgent:c,cancelToken:c,socketPath:c,responseEncoding:c,validateStatus:l,headers:(y,g)=>i(l0(y),l0(g),!0)};return D.forEach(Object.keys(Object.assign({},t,e)),function(g){const C=v[g]||i,I=C(t[g],e[g],g);D.isUndefined(I)&&C!==l||(a[g]=I)}),a}const hd=t=>{const e=c1({},t);let{data:a,withXSRFToken:n,xsrfHeaderName:i,xsrfCookieName:h,headers:c,auth:l}=e;e.headers=c=Qt.from(c),e.url=ed(od(e.baseURL,e.url),t.params,t.paramsSerializer),l&&c.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let v;if(D.isFormData(a)){if(Ot.hasStandardBrowserEnv||Ot.hasStandardBrowserWebWorkerEnv)c.setContentType(void 0);else if((v=c.getContentType())!==!1){const[y,...g]=v?v.split(";").map(C=>C.trim()).filter(Boolean):[];c.setContentType([y||"multipart/form-data",...g].join("; "))}}if(Ot.hasStandardBrowserEnv&&(n&&D.isFunction(n)&&(n=n(e)),n||n!==!1&&f4(e.url))){const y=i&&h&&v4.read(h);y&&c.set(i,y)}return e},g4=typeof XMLHttpRequest<"u",m4=g4&&function(t){return new Promise(function(a,n){const i=hd(t);let h=i.data;const c=Qt.from(i.headers).normalize();let{responseType:l,onUploadProgress:v,onDownloadProgress:y}=i,g,C,I,R,k;function V(){R&&R(),k&&k(),i.cancelToken&&i.cancelToken.unsubscribe(g),i.signal&&i.signal.removeEventListener("abort",g)}let H=new XMLHttpRequest;H.open(i.method.toUpperCase(),i.url,!0),H.timeout=i.timeout;function T(){if(!H)return;const Z=Qt.from("getAllResponseHeaders"in H&&H.getAllResponseHeaders()),U={data:!l||l==="text"||l==="json"?H.responseText:H.response,status:H.status,statusText:H.statusText,headers:Z,config:t,request:H};id(function(d){a(d),V()},function(d){n(d),V()},U),H=null}"onloadend"in H?H.onloadend=T:H.onreadystatechange=function(){!H||H.readyState!==4||H.status===0&&!(H.responseURL&&H.responseURL.indexOf("file:")===0)||setTimeout(T)},H.onabort=function(){H&&(n(new et("Request aborted",et.ECONNABORTED,t,H)),H=null)},H.onerror=function(){n(new et("Network Error",et.ERR_NETWORK,t,H)),H=null},H.ontimeout=function(){let z=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const U=i.transitional||ad;i.timeoutErrorMessage&&(z=i.timeoutErrorMessage),n(new et(z,U.clarifyTimeoutError?et.ETIMEDOUT:et.ECONNABORTED,t,H)),H=null},h===void 0&&c.setContentType(null),"setRequestHeader"in H&&D.forEach(c.toJSON(),function(z,U){H.setRequestHeader(U,z)}),D.isUndefined(i.withCredentials)||(H.withCredentials=!!i.withCredentials),l&&l!=="json"&&(H.responseType=i.responseType),y&&([I,k]=p2(y,!0),H.addEventListener("progress",I)),v&&H.upload&&([C,R]=p2(v),H.upload.addEventListener("progress",C),H.upload.addEventListener("loadend",R)),(i.cancelToken||i.signal)&&(g=Z=>{H&&(n(!Z||Z.type?new N1(null,t,H):Z),H.abort(),H=null)},i.cancelToken&&i.cancelToken.subscribe(g),i.signal&&(i.signal.aborted?g():i.signal.addEventListener("abort",g)));const j=p4(i.url);if(j&&Ot.protocols.indexOf(j)===-1){n(new et("Unsupported protocol "+j+":",et.ERR_BAD_REQUEST,t));return}H.send(h||null)})},x4=(t,e)=>{const{length:a}=t=t?t.filter(Boolean):[];if(e||a){let n=new AbortController,i;const h=function(y){if(!i){i=!0,l();const g=y instanceof Error?y:this.reason;n.abort(g instanceof et?g:new N1(g instanceof Error?g.message:g))}};let c=e&&setTimeout(()=>{c=null,h(new et(`timeout ${e} of ms exceeded`,et.ETIMEDOUT))},e);const l=()=>{t&&(c&&clearTimeout(c),c=null,t.forEach(y=>{y.unsubscribe?y.unsubscribe(h):y.removeEventListener("abort",h)}),t=null)};t.forEach(y=>y.addEventListener("abort",h));const{signal:v}=n;return v.unsubscribe=()=>D.asap(l),v}},w4=x4,b4=function*(t,e){let a=t.byteLength;if(!e||a<e){yield t;return}let n=0,i;for(;n<a;)i=n+e,yield t.slice(n,i),n=i},_4=async function*(t,e){for await(const a of C4(t))yield*b4(a,e)},C4=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:a,value:n}=await e.read();if(a)break;yield n}}finally{await e.cancel()}},u0=(t,e,a,n)=>{const i=_4(t,e);let h=0,c,l=v=>{c||(c=!0,n&&n(v))};return new ReadableStream({async pull(v){try{const{done:y,value:g}=await i.next();if(y){l(),v.close();return}let C=g.byteLength;if(a){let I=h+=C;a(I)}v.enqueue(new Uint8Array(g))}catch(y){throw l(y),y}},cancel(v){return l(v),i.return()}},{highWaterMark:2})},W2=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",sd=W2&&typeof ReadableStream=="function",A4=W2&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),cd=(t,...e)=>{try{return!!t(...e)}catch{return!1}},H4=sd&&cd(()=>{let t=!1;const e=new Request(Ot.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),f0=64*1024,Wn=sd&&cd(()=>D.isReadableStream(new Response("").body)),l2={stream:Wn&&(t=>t.body)};W2&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!l2[e]&&(l2[e]=D.isFunction(t[e])?a=>a[e]():(a,n)=>{throw new et(`Response type '${e}' is not supported`,et.ERR_NOT_SUPPORT,n)})})})(new Response);const S4=async t=>{if(t==null)return 0;if(D.isBlob(t))return t.size;if(D.isSpecCompliantForm(t))return(await new Request(Ot.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(D.isArrayBufferView(t)||D.isArrayBuffer(t))return t.byteLength;if(D.isURLSearchParams(t)&&(t=t+""),D.isString(t))return(await A4(t)).byteLength},k4=async(t,e)=>{const a=D.toFiniteNumber(t.getContentLength());return a??S4(e)},E4=W2&&(async t=>{let{url:e,method:a,data:n,signal:i,cancelToken:h,timeout:c,onDownloadProgress:l,onUploadProgress:v,responseType:y,headers:g,withCredentials:C="same-origin",fetchOptions:I}=hd(t);y=y?(y+"").toLowerCase():"text";let R=w4([i,h&&h.toAbortSignal()],c),k;const V=R&&R.unsubscribe&&(()=>{R.unsubscribe()});let H;try{if(v&&H4&&a!=="get"&&a!=="head"&&(H=await k4(g,n))!==0){let U=new Request(e,{method:"POST",body:n,duplex:"half"}),G;if(D.isFormData(n)&&(G=U.headers.get("content-type"))&&g.setContentType(G),U.body){const[d,it]=d0(H,p2(p0(v)));n=u0(U.body,f0,d,it)}}D.isString(C)||(C=C?"include":"omit");const T="credentials"in Request.prototype;k=new Request(e,{...I,signal:R,method:a.toUpperCase(),headers:g.normalize().toJSON(),body:n,duplex:"half",credentials:T?C:void 0});let j=await fetch(k);const Z=Wn&&(y==="stream"||y==="response");if(Wn&&(l||Z&&V)){const U={};["status","statusText","headers"].forEach(W=>{U[W]=j[W]});const G=D.toFiniteNumber(j.headers.get("content-length")),[d,it]=l&&d0(G,p2(p0(l),!0))||[];j=new Response(u0(j.body,f0,d,()=>{it&&it(),V&&V()}),U)}y=y||"text";let z=await l2[D.findKey(l2,y)||"text"](j,t);return!Z&&V&&V(),await new Promise((U,G)=>{id(U,G,{data:z,headers:Qt.from(j.headers),status:j.status,statusText:j.statusText,config:t,request:k})})}catch(T){throw V&&V(),T&&T.name==="TypeError"&&/fetch/i.test(T.message)?Object.assign(new et("Network Error",et.ERR_NETWORK,t,k),{cause:T.cause||T}):et.from(T,T&&T.code,t,k)}}),$n={http:qu,xhr:m4,fetch:E4};D.forEach($n,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const v0=t=>`- ${t}`,L4=t=>D.isFunction(t)||t===null||t===!1,dd={getAdapter:t=>{t=D.isArray(t)?t:[t];const{length:e}=t;let a,n;const i={};for(let h=0;h<e;h++){a=t[h];let c;if(n=a,!L4(a)&&(n=$n[(c=String(a)).toLowerCase()],n===void 0))throw new et(`Unknown adapter '${c}'`);if(n)break;i[c||"#"+h]=n}if(!n){const h=Object.entries(i).map(([l,v])=>`adapter ${l} `+(v===!1?"is not supported by the environment":"is not available in the build"));let c=e?h.length>1?`since :
`+h.map(v0).join(`
`):" "+v0(h[0]):"as no adapter specified";throw new et("There is no suitable adapter to dispatch the request "+c,"ERR_NOT_SUPPORT")}return n},adapters:$n};function kn(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new N1(null,t)}function M0(t){return kn(t),t.headers=Qt.from(t.headers),t.data=Sn.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),dd.getAdapter(t.adapter||Ar.adapter)(t).then(function(n){return kn(t),n.data=Sn.call(t,t.transformResponse,n),n.headers=Qt.from(n.headers),n},function(n){return rd(n)||(kn(t),n&&n.response&&(n.response.data=Sn.call(t,t.transformResponse,n.response),n.response.headers=Qt.from(n.response.headers))),Promise.reject(n)})}const pd="1.7.7",Hr={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Hr[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}});const y0={};Hr.transitional=function(e,a,n){function i(h,c){return"[Axios v"+pd+"] Transitional option '"+h+"'"+c+(n?". "+n:"")}return(h,c,l)=>{if(e===!1)throw new et(i(c," has been removed"+(a?" in "+a:"")),et.ERR_DEPRECATED);return a&&!y0[c]&&(y0[c]=!0,console.warn(i(c," has been deprecated since v"+a+" and will be removed in the near future"))),e?e(h,c,l):!0}};function V4(t,e,a){if(typeof t!="object")throw new et("options must be an object",et.ERR_BAD_OPTION_VALUE);const n=Object.keys(t);let i=n.length;for(;i-- >0;){const h=n[i],c=e[h];if(c){const l=t[h],v=l===void 0||c(l,h,t);if(v!==!0)throw new et("option "+h+" must be "+v,et.ERR_BAD_OPTION_VALUE);continue}if(a!==!0)throw new et("Unknown option "+h,et.ERR_BAD_OPTION)}}const Kn={assertOptions:V4,validators:Hr},Ve=Kn.validators;class u2{constructor(e){this.defaults=e,this.interceptors={request:new s0,response:new s0}}async request(e,a){try{return await this._request(e,a)}catch(n){if(n instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const h=i.stack?i.stack.replace(/^.+\n/,""):"";try{n.stack?h&&!String(n.stack).endsWith(h.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+h):n.stack=h}catch{}}throw n}}_request(e,a){typeof e=="string"?(a=a||{},a.url=e):a=e||{},a=c1(this.defaults,a);const{transitional:n,paramsSerializer:i,headers:h}=a;n!==void 0&&Kn.assertOptions(n,{silentJSONParsing:Ve.transitional(Ve.boolean),forcedJSONParsing:Ve.transitional(Ve.boolean),clarifyTimeoutError:Ve.transitional(Ve.boolean)},!1),i!=null&&(D.isFunction(i)?a.paramsSerializer={serialize:i}:Kn.assertOptions(i,{encode:Ve.function,serialize:Ve.function},!0)),a.method=(a.method||this.defaults.method||"get").toLowerCase();let c=h&&D.merge(h.common,h[a.method]);h&&D.forEach(["delete","get","head","post","put","patch","common"],k=>{delete h[k]}),a.headers=Qt.concat(c,h);const l=[];let v=!0;this.interceptors.request.forEach(function(V){typeof V.runWhen=="function"&&V.runWhen(a)===!1||(v=v&&V.synchronous,l.unshift(V.fulfilled,V.rejected))});const y=[];this.interceptors.response.forEach(function(V){y.push(V.fulfilled,V.rejected)});let g,C=0,I;if(!v){const k=[M0.bind(this),void 0];for(k.unshift.apply(k,l),k.push.apply(k,y),I=k.length,g=Promise.resolve(a);C<I;)g=g.then(k[C++],k[C++]);return g}I=l.length;let R=a;for(C=0;C<I;){const k=l[C++],V=l[C++];try{R=k(R)}catch(H){V.call(this,H);break}}try{g=M0.call(this,R)}catch(k){return Promise.reject(k)}for(C=0,I=y.length;C<I;)g=g.then(y[C++],y[C++]);return g}getUri(e){e=c1(this.defaults,e);const a=od(e.baseURL,e.url);return ed(a,e.params,e.paramsSerializer)}}D.forEach(["delete","get","head","options"],function(e){u2.prototype[e]=function(a,n){return this.request(c1(n||{},{method:e,url:a,data:(n||{}).data}))}});D.forEach(["post","put","patch"],function(e){function a(n){return function(h,c,l){return this.request(c1(l||{},{method:e,headers:n?{"Content-Type":"multipart/form-data"}:{},url:h,data:c}))}}u2.prototype[e]=a(),u2.prototype[e+"Form"]=a(!0)});const i2=u2;class Sr{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let a;this.promise=new Promise(function(h){a=h});const n=this;this.promise.then(i=>{if(!n._listeners)return;let h=n._listeners.length;for(;h-- >0;)n._listeners[h](i);n._listeners=null}),this.promise.then=i=>{let h;const c=new Promise(l=>{n.subscribe(l),h=l}).then(i);return c.cancel=function(){n.unsubscribe(h)},c},e(function(h,c,l){n.reason||(n.reason=new N1(h,c,l),a(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const a=this._listeners.indexOf(e);a!==-1&&this._listeners.splice(a,1)}toAbortSignal(){const e=new AbortController,a=n=>{e.abort(n)};return this.subscribe(a),e.signal.unsubscribe=()=>this.unsubscribe(a),e.signal}static source(){let e;return{token:new Sr(function(i){e=i}),cancel:e}}}const D4=Sr;function T4(t){return function(a){return t.apply(null,a)}}function O4(t){return D.isObject(t)&&t.isAxiosError===!0}const Gn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Gn).forEach(([t,e])=>{Gn[e]=t});const P4=Gn;function ld(t){const e=new i2(t),a=jc(i2.prototype.request,e);return D.extend(a,i2.prototype,e,{allOwnKeys:!0}),D.extend(a,e,null,{allOwnKeys:!0}),a.create=function(i){return ld(c1(t,i))},a}const mt=ld(Ar);mt.Axios=i2;mt.CanceledError=N1;mt.CancelToken=D4;mt.isCancel=rd;mt.VERSION=pd;mt.toFormData=Z2;mt.AxiosError=et;mt.Cancel=mt.CanceledError;mt.all=function(e){return Promise.all(e)};mt.spread=T4;mt.isAxiosError=O4;mt.mergeConfig=c1;mt.AxiosHeaders=Qt;mt.formToJSON=t=>nd(D.isHTMLForm(t)?new FormData(t):t);mt.getAdapter=dd.getAdapter;mt.HttpStatusCode=P4;mt.default=mt;const I4=mt;window.axios=I4;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var R4=function(){function t(e,a){a===void 0&&(a=[]),this._eventType=e,this._eventFunctions=a}return t.prototype.init=function(){var e=this;this._eventFunctions.forEach(function(a){typeof window<"u"&&window.addEventListener(e._eventType,a)})},t}(),B4=function(){function t(){this._instances={Accordion:{},Carousel:{},Collapse:{},Dial:{},Dismiss:{},Drawer:{},Dropdown:{},Modal:{},Popover:{},Tabs:{},Tooltip:{},InputCounter:{},CopyClipboard:{},Datepicker:{}}}return t.prototype.addInstance=function(e,a,n,i){if(i===void 0&&(i=!1),!this._instances[e])return console.warn("Flowbite: Component ".concat(e," does not exist.")),!1;if(this._instances[e][n]&&!i){console.warn("Flowbite: Instance with ID ".concat(n," already exists."));return}i&&this._instances[e][n]&&this._instances[e][n].destroyAndRemoveInstance(),this._instances[e][n||this._generateRandomId()]=a},t.prototype.getAllInstances=function(){return this._instances},t.prototype.getInstances=function(e){return this._instances[e]?this._instances[e]:(console.warn("Flowbite: Component ".concat(e," does not exist.")),!1)},t.prototype.getInstance=function(e,a){if(this._componentAndInstanceCheck(e,a)){if(!this._instances[e][a]){console.warn("Flowbite: Instance with ID ".concat(a," does not exist."));return}return this._instances[e][a]}},t.prototype.destroyAndRemoveInstance=function(e,a){this._componentAndInstanceCheck(e,a)&&(this.destroyInstanceObject(e,a),this.removeInstance(e,a))},t.prototype.removeInstance=function(e,a){this._componentAndInstanceCheck(e,a)&&delete this._instances[e][a]},t.prototype.destroyInstanceObject=function(e,a){this._componentAndInstanceCheck(e,a)&&this._instances[e][a].destroy()},t.prototype.instanceExists=function(e,a){return!(!this._instances[e]||!this._instances[e][a])},t.prototype._generateRandomId=function(){return Math.random().toString(36).substr(2,9)},t.prototype._componentAndInstanceCheck=function(e,a){return this._instances[e]?this._instances[e][a]?!0:(console.warn("Flowbite: Instance with ID ".concat(a," does not exist.")),!1):(console.warn("Flowbite: Component ".concat(e," does not exist.")),!1)},t}(),rt=new B4;typeof window<"u"&&(window.FlowbiteInstances=rt);var f2=globalThis&&globalThis.__assign||function(){return f2=Object.assign||function(t){for(var e,a=1,n=arguments.length;a<n;a++){e=arguments[a];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},f2.apply(this,arguments)},v2={alwaysOpen:!1,activeClasses:"bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",inactiveClasses:"text-gray-500 dark:text-gray-400",onOpen:function(){},onClose:function(){},onToggle:function(){}},F4={id:null,override:!0},ud=function(){function t(e,a,n,i){e===void 0&&(e=null),a===void 0&&(a=[]),n===void 0&&(n=v2),i===void 0&&(i=F4),this._instanceId=i.id?i.id:e.id,this._accordionEl=e,this._items=a,this._options=f2(f2({},v2),n),this._initialized=!1,this.init(),rt.addInstance("Accordion",this,this._instanceId,i.override)}return t.prototype.init=function(){var e=this;this._items.length&&!this._initialized&&(this._items.forEach(function(a){a.active&&e.open(a.id);var n=function(){e.toggle(a.id)};a.triggerEl.addEventListener("click",n),a.clickHandler=n}),this._initialized=!0)},t.prototype.destroy=function(){this._items.length&&this._initialized&&(this._items.forEach(function(e){e.triggerEl.removeEventListener("click",e.clickHandler),delete e.clickHandler}),this._initialized=!1)},t.prototype.removeInstance=function(){rt.removeInstance("Accordion",this._instanceId)},t.prototype.destroyAndRemoveInstance=function(){this.destroy(),this.removeInstance()},t.prototype.getItem=function(e){return this._items.filter(function(a){return a.id===e})[0]},t.prototype.open=function(e){var a,n,i=this,h=this.getItem(e);this._options.alwaysOpen||this._items.map(function(c){var l,v;c!==h&&((l=c.triggerEl.classList).remove.apply(l,i._options.activeClasses.split(" ")),(v=c.triggerEl.classList).add.apply(v,i._options.inactiveClasses.split(" ")),c.targetEl.classList.add("hidden"),c.triggerEl.setAttribute("aria-expanded","false"),c.active=!1,c.iconEl&&c.iconEl.classList.add("rotate-180"))}),(a=h.triggerEl.classList).add.apply(a,this._options.activeClasses.split(" ")),(n=h.triggerEl.classList).remove.apply(n,this._options.inactiveClasses.split(" ")),h.triggerEl.setAttribute("aria-expanded","true"),h.targetEl.classList.remove("hidden"),h.active=!0,h.iconEl&&h.iconEl.classList.remove("rotate-180"),this._options.onOpen(this,h)},t.prototype.toggle=function(e){var a=this.getItem(e);a.active?this.close(e):this.open(e),this._options.onToggle(this,a)},t.prototype.close=function(e){var a,n,i=this.getItem(e);(a=i.triggerEl.classList).remove.apply(a,this._options.activeClasses.split(" ")),(n=i.triggerEl.classList).add.apply(n,this._options.inactiveClasses.split(" ")),i.targetEl.classList.add("hidden"),i.triggerEl.setAttribute("aria-expanded","false"),i.active=!1,i.iconEl&&i.iconEl.classList.add("rotate-180"),this._options.onClose(this,i)},t.prototype.updateOnOpen=function(e){this._options.onOpen=e},t.prototype.updateOnClose=function(e){this._options.onClose=e},t.prototype.updateOnToggle=function(e){this._options.onToggle=e},t}();function kr(){document.querySelectorAll("[data-accordion]").forEach(function(t){var e=t.getAttribute("data-accordion"),a=t.getAttribute("data-active-classes"),n=t.getAttribute("data-inactive-classes"),i=[];t.querySelectorAll("[data-accordion-target]").forEach(function(h){if(h.closest("[data-accordion]")===t){var c={id:h.getAttribute("data-accordion-target"),triggerEl:h,targetEl:document.querySelector(h.getAttribute("data-accordion-target")),iconEl:h.querySelector("[data-accordion-icon]"),active:h.getAttribute("aria-expanded")==="true"};i.push(c)}}),new ud(t,i,{alwaysOpen:e==="open",activeClasses:a||v2.activeClasses,inactiveClasses:n||v2.inactiveClasses})})}typeof window<"u"&&(window.Accordion=ud,window.initAccordions=kr);var M2=globalThis&&globalThis.__assign||function(){return M2=Object.assign||function(t){for(var e,a=1,n=arguments.length;a<n;a++){e=arguments[a];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},M2.apply(this,arguments)},g0={onCollapse:function(){},onExpand:function(){},onToggle:function(){}},z4={id:null,override:!0},Xn=function(){function t(e,a,n,i){e===void 0&&(e=null),a===void 0&&(a=null),n===void 0&&(n=g0),i===void 0&&(i=z4),this._instanceId=i.id?i.id:e.id,this._targetEl=e,this._triggerEl=a,this._options=M2(M2({},g0),n),this._visible=!1,this._initialized=!1,this.init(),rt.addInstance("Collapse",this,this._instanceId,i.override)}return t.prototype.init=function(){var e=this;this._triggerEl&&this._targetEl&&!this._initialized&&(this._triggerEl.hasAttribute("aria-expanded")?this._visible=this._triggerEl.getAttribute("aria-expanded")==="true":this._visible=!this._targetEl.classList.contains("hidden"),this._clickHandler=function(){e.toggle()},this._triggerEl.addEventListener("click",this._clickHandler),this._initialized=!0)},t.prototype.destroy=function(){this._triggerEl&&this._initialized&&(this._triggerEl.removeEventListener("click",this._clickHandler),this._initialized=!1)},t.prototype.removeInstance=function(){rt.removeInstance("Collapse",this._instanceId)},t.prototype.destroyAndRemoveInstance=function(){this.destroy(),this.removeInstance()},t.prototype.collapse=function(){this._targetEl.classList.add("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","false"),this._visible=!1,this._options.onCollapse(this)},t.prototype.expand=function(){this._targetEl.classList.remove("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","true"),this._visible=!0,this._options.onExpand(this)},t.prototype.toggle=function(){this._visible?this.collapse():this.expand(),this._options.onToggle(this)},t.prototype.updateOnCollapse=function(e){this._options.onCollapse=e},t.prototype.updateOnExpand=function(e){this._options.onExpand=e},t.prototype.updateOnToggle=function(e){this._options.onToggle=e},t}();function Er(){document.querySelectorAll("[data-collapse-toggle]").forEach(function(t){var e=t.getAttribute("data-collapse-toggle"),a=document.getElementById(e);a?rt.instanceExists("Collapse",a.getAttribute("id"))?new Xn(a,t,{},{id:a.getAttribute("id")+"_"+rt._generateRandomId()}):new Xn(a,t):console.error('The target element with id "'.concat(e,'" does not exist. Please check the data-collapse-toggle attribute.'))})}typeof window<"u"&&(window.Collapse=Xn,window.initCollapses=Er);var t1=globalThis&&globalThis.__assign||function(){return t1=Object.assign||function(t){for(var e,a=1,n=arguments.length;a<n;a++){e=arguments[a];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},t1.apply(this,arguments)},o2={defaultPosition:0,indicators:{items:[],activeClasses:"bg-white dark:bg-gray-800",inactiveClasses:"bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"},interval:3e3,onNext:function(){},onPrev:function(){},onChange:function(){}},N4={id:null,override:!0},fd=function(){function t(e,a,n,i){e===void 0&&(e=null),a===void 0&&(a=[]),n===void 0&&(n=o2),i===void 0&&(i=N4),this._instanceId=i.id?i.id:e.id,this._carouselEl=e,this._items=a,this._options=t1(t1(t1({},o2),n),{indicators:t1(t1({},o2.indicators),n.indicators)}),this._activeItem=this.getItem(this._options.defaultPosition),this._indicators=this._options.indicators.items,this._intervalDuration=this._options.interval,this._intervalInstance=null,this._initialized=!1,this.init(),rt.addInstance("Carousel",this,this._instanceId,i.override)}return t.prototype.init=function(){var e=this;this._items.length&&!this._initialized&&(this._items.map(function(a){a.el.classList.add("absolute","inset-0","transition-transform","transform")}),this.getActiveItem()?this.slideTo(this.getActiveItem().position):this.slideTo(0),this._indicators.map(function(a,n){a.el.addEventListener("click",function(){e.slideTo(n)})}),this._initialized=!0)},t.prototype.destroy=function(){this._initialized&&(this._initialized=!1)},t.prototype.removeInstance=function(){rt.removeInstance("Carousel",this._instanceId)},t.prototype.destroyAndRemoveInstance=function(){this.destroy(),this.removeInstance()},t.prototype.getItem=function(e){return this._items[e]},t.prototype.slideTo=function(e){var a=this._items[e],n={left:a.position===0?this._items[this._items.length-1]:this._items[a.position-1],middle:a,right:a.position===this._items.length-1?this._items[0]:this._items[a.position+1]};this._rotate(n),this._setActiveItem(a),this._intervalInstance&&(this.pause(),this.cycle()),this._options.onChange(this)},t.prototype.next=function(){var e=this.getActiveItem(),a=null;e.position===this._items.length-1?a=this._items[0]:a=this._items[e.position+1],this.slideTo(a.position),this._options.onNext(this)},t.prototype.prev=function(){var e=this.getActiveItem(),a=null;e.position===0?a=this._items[this._items.length-1]:a=this._items[e.position-1],this.slideTo(a.position),this._options.onPrev(this)},t.prototype._rotate=function(e){if(this._items.map(function(a){a.el.classList.add("hidden")}),this._items.length===1){e.middle.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-10"),e.middle.el.classList.add("translate-x-0","z-20");return}e.left.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-20"),e.left.el.classList.add("-translate-x-full","z-10"),e.middle.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-10"),e.middle.el.classList.add("translate-x-0","z-30"),e.right.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-30"),e.right.el.classList.add("translate-x-full","z-20")},t.prototype.cycle=function(){var e=this;typeof window<"u"&&(this._intervalInstance=window.setInterval(function(){e.next()},this._intervalDuration))},t.prototype.pause=function(){clearInterval(this._intervalInstance)},t.prototype.getActiveItem=function(){return this._activeItem},t.prototype._setActiveItem=function(e){var a,n,i=this;this._activeItem=e;var h=e.position;this._indicators.length&&(this._indicators.map(function(c){var l,v;c.el.setAttribute("aria-current","false"),(l=c.el.classList).remove.apply(l,i._options.indicators.activeClasses.split(" ")),(v=c.el.classList).add.apply(v,i._options.indicators.inactiveClasses.split(" "))}),(a=this._indicators[h].el.classList).add.apply(a,this._options.indicators.activeClasses.split(" ")),(n=this._indicators[h].el.classList).remove.apply(n,this._options.indicators.inactiveClasses.split(" ")),this._indicators[h].el.setAttribute("aria-current","true"))},t.prototype.updateOnNext=function(e){this._options.onNext=e},t.prototype.updateOnPrev=function(e){this._options.onPrev=e},t.prototype.updateOnChange=function(e){this._options.onChange=e},t}();function Lr(){document.querySelectorAll("[data-carousel]").forEach(function(t){var e=t.getAttribute("data-carousel-interval"),a=t.getAttribute("data-carousel")==="slide",n=[],i=0;t.querySelectorAll("[data-carousel-item]").length&&Array.from(t.querySelectorAll("[data-carousel-item]")).map(function(y,g){n.push({position:g,el:y}),y.getAttribute("data-carousel-item")==="active"&&(i=g)});var h=[];t.querySelectorAll("[data-carousel-slide-to]").length&&Array.from(t.querySelectorAll("[data-carousel-slide-to]")).map(function(y){h.push({position:parseInt(y.getAttribute("data-carousel-slide-to")),el:y})});var c=new fd(t,n,{defaultPosition:i,indicators:{items:h},interval:e||o2.interval});a&&c.cycle();var l=t.querySelector("[data-carousel-next]"),v=t.querySelector("[data-carousel-prev]");l&&l.addEventListener("click",function(){c.next()}),v&&v.addEventListener("click",function(){c.prev()})})}typeof window<"u"&&(window.Carousel=fd,window.initCarousels=Lr);var y2=globalThis&&globalThis.__assign||function(){return y2=Object.assign||function(t){for(var e,a=1,n=arguments.length;a<n;a++){e=arguments[a];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},y2.apply(this,arguments)},m0={transition:"transition-opacity",duration:300,timing:"ease-out",onHide:function(){}},q4={id:null,override:!0},vd=function(){function t(e,a,n,i){e===void 0&&(e=null),a===void 0&&(a=null),n===void 0&&(n=m0),i===void 0&&(i=q4),this._instanceId=i.id?i.id:e.id,this._targetEl=e,this._triggerEl=a,this._options=y2(y2({},m0),n),this._initialized=!1,this.init(),rt.addInstance("Dismiss",this,this._instanceId,i.override)}return t.prototype.init=function(){var e=this;this._triggerEl&&this._targetEl&&!this._initialized&&(this._clickHandler=function(){e.hide()},this._triggerEl.addEventListener("click",this._clickHandler),this._initialized=!0)},t.prototype.destroy=function(){this._triggerEl&&this._initialized&&(this._triggerEl.removeEventListener("click",this._clickHandler),this._initialized=!1)},t.prototype.removeInstance=function(){rt.removeInstance("Dismiss",this._instanceId)},t.prototype.destroyAndRemoveInstance=function(){this.destroy(),this.removeInstance()},t.prototype.hide=function(){var e=this;this._targetEl.classList.add(this._options.transition,"duration-".concat(this._options.duration),this._options.timing,"opacity-0"),setTimeout(function(){e._targetEl.classList.add("hidden")},this._options.duration),this._options.onHide(this,this._targetEl)},t.prototype.updateOnHide=function(e){this._options.onHide=e},t}();function Vr(){document.querySelectorAll("[data-dismiss-target]").forEach(function(t){var e=t.getAttribute("data-dismiss-target"),a=document.querySelector(e);a?new vd(a,t):console.error('The dismiss element with id "'.concat(e,'" does not exist. Please check the data-dismiss-target attribute.'))})}typeof window<"u"&&(window.Dismiss=vd,window.initDismisses=Vr);var Pt="top",Kt="bottom",Gt="right",It="left",Dr="auto",Aa=[Pt,Kt,Gt,It],T1="start",ga="end",j4="clippingParents",Md="viewport",na="popper",Z4="reference",x0=Aa.reduce(function(t,e){return t.concat([e+"-"+T1,e+"-"+ga])},[]),yd=[].concat(Aa,[Dr]).reduce(function(t,e){return t.concat([e,e+"-"+T1,e+"-"+ga])},[]),U4="beforeRead",W4="read",$4="afterRead",K4="beforeMain",G4="main",X4="afterMain",Y4="beforeWrite",J4="write",Q4="afterWrite",tf=[U4,W4,$4,K4,G4,X4,Y4,J4,Q4];function pe(t){return t?(t.nodeName||"").toLowerCase():null}function zt(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function d1(t){var e=zt(t).Element;return t instanceof e||t instanceof Element}function $t(t){var e=zt(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Tr(t){if(typeof ShadowRoot>"u")return!1;var e=zt(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function ef(t){var e=t.state;Object.keys(e.elements).forEach(function(a){var n=e.styles[a]||{},i=e.attributes[a]||{},h=e.elements[a];!$t(h)||!pe(h)||(Object.assign(h.style,n),Object.keys(i).forEach(function(c){var l=i[c];l===!1?h.removeAttribute(c):h.setAttribute(c,l===!0?"":l)}))})}function af(t){var e=t.state,a={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,a.popper),e.styles=a,e.elements.arrow&&Object.assign(e.elements.arrow.style,a.arrow),function(){Object.keys(e.elements).forEach(function(n){var i=e.elements[n],h=e.attributes[n]||{},c=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:a[n]),l=c.reduce(function(v,y){return v[y]="",v},{});!$t(i)||!pe(i)||(Object.assign(i.style,l),Object.keys(h).forEach(function(v){i.removeAttribute(v)}))})}}const nf={name:"applyStyles",enabled:!0,phase:"write",fn:ef,effect:af,requires:["computeStyles"]};function de(t){return t.split("-")[0]}var r1=Math.max,g2=Math.min,O1=Math.round;function Yn(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function gd(){return!/^((?!chrome|android).)*safari/i.test(Yn())}function P1(t,e,a){e===void 0&&(e=!1),a===void 0&&(a=!1);var n=t.getBoundingClientRect(),i=1,h=1;e&&$t(t)&&(i=t.offsetWidth>0&&O1(n.width)/t.offsetWidth||1,h=t.offsetHeight>0&&O1(n.height)/t.offsetHeight||1);var c=d1(t)?zt(t):window,l=c.visualViewport,v=!gd()&&a,y=(n.left+(v&&l?l.offsetLeft:0))/i,g=(n.top+(v&&l?l.offsetTop:0))/h,C=n.width/i,I=n.height/h;return{width:C,height:I,top:g,right:y+C,bottom:g+I,left:y,x:y,y:g}}function Or(t){var e=P1(t),a=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-a)<=1&&(a=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:a,height:n}}function md(t,e){var a=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(a&&Tr(a)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function me(t){return zt(t).getComputedStyle(t)}function rf(t){return["table","td","th"].indexOf(pe(t))>=0}function Ne(t){return((d1(t)?t.ownerDocument:t.document)||window.document).documentElement}function $2(t){return pe(t)==="html"?t:t.assignedSlot||t.parentNode||(Tr(t)?t.host:null)||Ne(t)}function w0(t){return!$t(t)||me(t).position==="fixed"?null:t.offsetParent}function of(t){var e=/firefox/i.test(Yn()),a=/Trident/i.test(Yn());if(a&&$t(t)){var n=me(t);if(n.position==="fixed")return null}var i=$2(t);for(Tr(i)&&(i=i.host);$t(i)&&["html","body"].indexOf(pe(i))<0;){var h=me(i);if(h.transform!=="none"||h.perspective!=="none"||h.contain==="paint"||["transform","perspective"].indexOf(h.willChange)!==-1||e&&h.willChange==="filter"||e&&h.filter&&h.filter!=="none")return i;i=i.parentNode}return null}function Ha(t){for(var e=zt(t),a=w0(t);a&&rf(a)&&me(a).position==="static";)a=w0(a);return a&&(pe(a)==="html"||pe(a)==="body"&&me(a).position==="static")?e:a||of(t)||e}function Pr(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function da(t,e,a){return r1(t,g2(e,a))}function hf(t,e,a){var n=da(t,e,a);return n>a?a:n}function xd(){return{top:0,right:0,bottom:0,left:0}}function wd(t){return Object.assign({},xd(),t)}function bd(t,e){return e.reduce(function(a,n){return a[n]=t,a},{})}var sf=function(e,a){return e=typeof e=="function"?e(Object.assign({},a.rects,{placement:a.placement})):e,wd(typeof e!="number"?e:bd(e,Aa))};function cf(t){var e,a=t.state,n=t.name,i=t.options,h=a.elements.arrow,c=a.modifiersData.popperOffsets,l=de(a.placement),v=Pr(l),y=[It,Gt].indexOf(l)>=0,g=y?"height":"width";if(!(!h||!c)){var C=sf(i.padding,a),I=Or(h),R=v==="y"?Pt:It,k=v==="y"?Kt:Gt,V=a.rects.reference[g]+a.rects.reference[v]-c[v]-a.rects.popper[g],H=c[v]-a.rects.reference[v],T=Ha(h),j=T?v==="y"?T.clientHeight||0:T.clientWidth||0:0,Z=V/2-H/2,z=C[R],U=j-I[g]-C[k],G=j/2-I[g]/2+Z,d=da(z,G,U),it=v;a.modifiersData[n]=(e={},e[it]=d,e.centerOffset=d-G,e)}}function df(t){var e=t.state,a=t.options,n=a.element,i=n===void 0?"[data-popper-arrow]":n;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||md(e.elements.popper,i)&&(e.elements.arrow=i))}const pf={name:"arrow",enabled:!0,phase:"main",fn:cf,effect:df,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function I1(t){return t.split("-")[1]}var lf={top:"auto",right:"auto",bottom:"auto",left:"auto"};function uf(t,e){var a=t.x,n=t.y,i=e.devicePixelRatio||1;return{x:O1(a*i)/i||0,y:O1(n*i)/i||0}}function b0(t){var e,a=t.popper,n=t.popperRect,i=t.placement,h=t.variation,c=t.offsets,l=t.position,v=t.gpuAcceleration,y=t.adaptive,g=t.roundOffsets,C=t.isFixed,I=c.x,R=I===void 0?0:I,k=c.y,V=k===void 0?0:k,H=typeof g=="function"?g({x:R,y:V}):{x:R,y:V};R=H.x,V=H.y;var T=c.hasOwnProperty("x"),j=c.hasOwnProperty("y"),Z=It,z=Pt,U=window;if(y){var G=Ha(a),d="clientHeight",it="clientWidth";if(G===zt(a)&&(G=Ne(a),me(G).position!=="static"&&l==="absolute"&&(d="scrollHeight",it="scrollWidth")),G=G,i===Pt||(i===It||i===Gt)&&h===ga){z=Kt;var W=C&&G===U&&U.visualViewport?U.visualViewport.height:G[d];V-=W-n.height,V*=v?1:-1}if(i===It||(i===Pt||i===Kt)&&h===ga){Z=Gt;var nt=C&&G===U&&U.visualViewport?U.visualViewport.width:G[it];R-=nt-n.width,R*=v?1:-1}}var lt=Object.assign({position:l},y&&lf),At=g===!0?uf({x:R,y:V},zt(a)):{x:R,y:V};if(R=At.x,V=At.y,v){var J;return Object.assign({},lt,(J={},J[z]=j?"0":"",J[Z]=T?"0":"",J.transform=(U.devicePixelRatio||1)<=1?"translate("+R+"px, "+V+"px)":"translate3d("+R+"px, "+V+"px, 0)",J))}return Object.assign({},lt,(e={},e[z]=j?V+"px":"",e[Z]=T?R+"px":"",e.transform="",e))}function ff(t){var e=t.state,a=t.options,n=a.gpuAcceleration,i=n===void 0?!0:n,h=a.adaptive,c=h===void 0?!0:h,l=a.roundOffsets,v=l===void 0?!0:l,y={placement:de(e.placement),variation:I1(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,b0(Object.assign({},y,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:c,roundOffsets:v})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,b0(Object.assign({},y,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:v})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const vf={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ff,data:{}};var Ua={passive:!0};function Mf(t){var e=t.state,a=t.instance,n=t.options,i=n.scroll,h=i===void 0?!0:i,c=n.resize,l=c===void 0?!0:c,v=zt(e.elements.popper),y=[].concat(e.scrollParents.reference,e.scrollParents.popper);return h&&y.forEach(function(g){g.addEventListener("scroll",a.update,Ua)}),l&&v.addEventListener("resize",a.update,Ua),function(){h&&y.forEach(function(g){g.removeEventListener("scroll",a.update,Ua)}),l&&v.removeEventListener("resize",a.update,Ua)}}const yf={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Mf,data:{}};var gf={left:"right",right:"left",bottom:"top",top:"bottom"};function h2(t){return t.replace(/left|right|bottom|top/g,function(e){return gf[e]})}var mf={start:"end",end:"start"};function _0(t){return t.replace(/start|end/g,function(e){return mf[e]})}function Ir(t){var e=zt(t),a=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:a,scrollTop:n}}function Rr(t){return P1(Ne(t)).left+Ir(t).scrollLeft}function xf(t,e){var a=zt(t),n=Ne(t),i=a.visualViewport,h=n.clientWidth,c=n.clientHeight,l=0,v=0;if(i){h=i.width,c=i.height;var y=gd();(y||!y&&e==="fixed")&&(l=i.offsetLeft,v=i.offsetTop)}return{width:h,height:c,x:l+Rr(t),y:v}}function wf(t){var e,a=Ne(t),n=Ir(t),i=(e=t.ownerDocument)==null?void 0:e.body,h=r1(a.scrollWidth,a.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),c=r1(a.scrollHeight,a.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),l=-n.scrollLeft+Rr(t),v=-n.scrollTop;return me(i||a).direction==="rtl"&&(l+=r1(a.clientWidth,i?i.clientWidth:0)-h),{width:h,height:c,x:l,y:v}}function Br(t){var e=me(t),a=e.overflow,n=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(a+i+n)}function _d(t){return["html","body","#document"].indexOf(pe(t))>=0?t.ownerDocument.body:$t(t)&&Br(t)?t:_d($2(t))}function pa(t,e){var a;e===void 0&&(e=[]);var n=_d(t),i=n===((a=t.ownerDocument)==null?void 0:a.body),h=zt(n),c=i?[h].concat(h.visualViewport||[],Br(n)?n:[]):n,l=e.concat(c);return i?l:l.concat(pa($2(c)))}function Jn(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function bf(t,e){var a=P1(t,!1,e==="fixed");return a.top=a.top+t.clientTop,a.left=a.left+t.clientLeft,a.bottom=a.top+t.clientHeight,a.right=a.left+t.clientWidth,a.width=t.clientWidth,a.height=t.clientHeight,a.x=a.left,a.y=a.top,a}function C0(t,e,a){return e===Md?Jn(xf(t,a)):d1(e)?bf(e,a):Jn(wf(Ne(t)))}function _f(t){var e=pa($2(t)),a=["absolute","fixed"].indexOf(me(t).position)>=0,n=a&&$t(t)?Ha(t):t;return d1(n)?e.filter(function(i){return d1(i)&&md(i,n)&&pe(i)!=="body"}):[]}function Cf(t,e,a,n){var i=e==="clippingParents"?_f(t):[].concat(e),h=[].concat(i,[a]),c=h[0],l=h.reduce(function(v,y){var g=C0(t,y,n);return v.top=r1(g.top,v.top),v.right=g2(g.right,v.right),v.bottom=g2(g.bottom,v.bottom),v.left=r1(g.left,v.left),v},C0(t,c,n));return l.width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l}function Cd(t){var e=t.reference,a=t.element,n=t.placement,i=n?de(n):null,h=n?I1(n):null,c=e.x+e.width/2-a.width/2,l=e.y+e.height/2-a.height/2,v;switch(i){case Pt:v={x:c,y:e.y-a.height};break;case Kt:v={x:c,y:e.y+e.height};break;case Gt:v={x:e.x+e.width,y:l};break;case It:v={x:e.x-a.width,y:l};break;default:v={x:e.x,y:e.y}}var y=i?Pr(i):null;if(y!=null){var g=y==="y"?"height":"width";switch(h){case T1:v[y]=v[y]-(e[g]/2-a[g]/2);break;case ga:v[y]=v[y]+(e[g]/2-a[g]/2);break}}return v}function ma(t,e){e===void 0&&(e={});var a=e,n=a.placement,i=n===void 0?t.placement:n,h=a.strategy,c=h===void 0?t.strategy:h,l=a.boundary,v=l===void 0?j4:l,y=a.rootBoundary,g=y===void 0?Md:y,C=a.elementContext,I=C===void 0?na:C,R=a.altBoundary,k=R===void 0?!1:R,V=a.padding,H=V===void 0?0:V,T=wd(typeof H!="number"?H:bd(H,Aa)),j=I===na?Z4:na,Z=t.rects.popper,z=t.elements[k?j:I],U=Cf(d1(z)?z:z.contextElement||Ne(t.elements.popper),v,g,c),G=P1(t.elements.reference),d=Cd({reference:G,element:Z,strategy:"absolute",placement:i}),it=Jn(Object.assign({},Z,d)),W=I===na?it:G,nt={top:U.top-W.top+T.top,bottom:W.bottom-U.bottom+T.bottom,left:U.left-W.left+T.left,right:W.right-U.right+T.right},lt=t.modifiersData.offset;if(I===na&&lt){var At=lt[i];Object.keys(nt).forEach(function(J){var Ht=[Gt,Kt].indexOf(J)>=0?1:-1,Mt=[Pt,Kt].indexOf(J)>=0?"y":"x";nt[J]+=At[Mt]*Ht})}return nt}function Af(t,e){e===void 0&&(e={});var a=e,n=a.placement,i=a.boundary,h=a.rootBoundary,c=a.padding,l=a.flipVariations,v=a.allowedAutoPlacements,y=v===void 0?yd:v,g=I1(n),C=g?l?x0:x0.filter(function(k){return I1(k)===g}):Aa,I=C.filter(function(k){return y.indexOf(k)>=0});I.length===0&&(I=C);var R=I.reduce(function(k,V){return k[V]=ma(t,{placement:V,boundary:i,rootBoundary:h,padding:c})[de(V)],k},{});return Object.keys(R).sort(function(k,V){return R[k]-R[V]})}function Hf(t){if(de(t)===Dr)return[];var e=h2(t);return[_0(t),e,_0(e)]}function Sf(t){var e=t.state,a=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var i=a.mainAxis,h=i===void 0?!0:i,c=a.altAxis,l=c===void 0?!0:c,v=a.fallbackPlacements,y=a.padding,g=a.boundary,C=a.rootBoundary,I=a.altBoundary,R=a.flipVariations,k=R===void 0?!0:R,V=a.allowedAutoPlacements,H=e.options.placement,T=de(H),j=T===H,Z=v||(j||!k?[h2(H)]:Hf(H)),z=[H].concat(Z).reduce(function(le,ne){return le.concat(de(ne)===Dr?Af(e,{placement:ne,boundary:g,rootBoundary:C,padding:y,flipVariations:k,allowedAutoPlacements:V}):ne)},[]),U=e.rects.reference,G=e.rects.popper,d=new Map,it=!0,W=z[0],nt=0;nt<z.length;nt++){var lt=z[nt],At=de(lt),J=I1(lt)===T1,Ht=[Pt,Kt].indexOf(At)>=0,Mt=Ht?"width":"height",bt=ma(e,{placement:lt,boundary:g,rootBoundary:C,altBoundary:I,padding:y}),vt=Ht?J?Gt:It:J?Kt:Pt;U[Mt]>G[Mt]&&(vt=h2(vt));var _e=h2(vt),Lt=[];if(h&&Lt.push(bt[At]<=0),l&&Lt.push(bt[vt]<=0,bt[_e]<=0),Lt.every(function(le){return le})){W=lt,it=!1;break}d.set(lt,Lt)}if(it)for(var je=k?3:1,y1=function(ne){var Ze=z.find(function(g1){var ue=d.get(g1);if(ue)return ue.slice(0,ne).every(function(m1){return m1})});if(Ze)return W=Ze,"break"},Ce=je;Ce>0;Ce--){var Ae=y1(Ce);if(Ae==="break")break}e.placement!==W&&(e.modifiersData[n]._skip=!0,e.placement=W,e.reset=!0)}}const kf={name:"flip",enabled:!0,phase:"main",fn:Sf,requiresIfExists:["offset"],data:{_skip:!1}};function A0(t,e,a){return a===void 0&&(a={x:0,y:0}),{top:t.top-e.height-a.y,right:t.right-e.width+a.x,bottom:t.bottom-e.height+a.y,left:t.left-e.width-a.x}}function H0(t){return[Pt,Gt,Kt,It].some(function(e){return t[e]>=0})}function Ef(t){var e=t.state,a=t.name,n=e.rects.reference,i=e.rects.popper,h=e.modifiersData.preventOverflow,c=ma(e,{elementContext:"reference"}),l=ma(e,{altBoundary:!0}),v=A0(c,n),y=A0(l,i,h),g=H0(v),C=H0(y);e.modifiersData[a]={referenceClippingOffsets:v,popperEscapeOffsets:y,isReferenceHidden:g,hasPopperEscaped:C},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":g,"data-popper-escaped":C})}const Lf={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ef};function Vf(t,e,a){var n=de(t),i=[It,Pt].indexOf(n)>=0?-1:1,h=typeof a=="function"?a(Object.assign({},e,{placement:t})):a,c=h[0],l=h[1];return c=c||0,l=(l||0)*i,[It,Gt].indexOf(n)>=0?{x:l,y:c}:{x:c,y:l}}function Df(t){var e=t.state,a=t.options,n=t.name,i=a.offset,h=i===void 0?[0,0]:i,c=yd.reduce(function(g,C){return g[C]=Vf(C,e.rects,h),g},{}),l=c[e.placement],v=l.x,y=l.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=v,e.modifiersData.popperOffsets.y+=y),e.modifiersData[n]=c}const Tf={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Df};function Of(t){var e=t.state,a=t.name;e.modifiersData[a]=Cd({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const Pf={name:"popperOffsets",enabled:!0,phase:"read",fn:Of,data:{}};function If(t){return t==="x"?"y":"x"}function Rf(t){var e=t.state,a=t.options,n=t.name,i=a.mainAxis,h=i===void 0?!0:i,c=a.altAxis,l=c===void 0?!1:c,v=a.boundary,y=a.rootBoundary,g=a.altBoundary,C=a.padding,I=a.tether,R=I===void 0?!0:I,k=a.tetherOffset,V=k===void 0?0:k,H=ma(e,{boundary:v,rootBoundary:y,padding:C,altBoundary:g}),T=de(e.placement),j=I1(e.placement),Z=!j,z=Pr(T),U=If(z),G=e.modifiersData.popperOffsets,d=e.rects.reference,it=e.rects.popper,W=typeof V=="function"?V(Object.assign({},e.rects,{placement:e.placement})):V,nt=typeof W=="number"?{mainAxis:W,altAxis:W}:Object.assign({mainAxis:0,altAxis:0},W),lt=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,At={x:0,y:0};if(G){if(h){var J,Ht=z==="y"?Pt:It,Mt=z==="y"?Kt:Gt,bt=z==="y"?"height":"width",vt=G[z],_e=vt+H[Ht],Lt=vt-H[Mt],je=R?-it[bt]/2:0,y1=j===T1?d[bt]:it[bt],Ce=j===T1?-it[bt]:-d[bt],Ae=e.elements.arrow,le=R&&Ae?Or(Ae):{width:0,height:0},ne=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:xd(),Ze=ne[Ht],g1=ne[Mt],ue=da(0,d[bt],le[bt]),m1=Z?d[bt]/2-je-ue-Ze-nt.mainAxis:y1-ue-Ze-nt.mainAxis,Nt=Z?-d[bt]/2+je+ue+g1+nt.mainAxis:Ce+ue+g1+nt.mainAxis,W1=e.elements.arrow&&Ha(e.elements.arrow),He=W1?z==="y"?W1.clientTop||0:W1.clientLeft||0:0,Ue=(J=lt==null?void 0:lt[z])!=null?J:0,Ta=vt+m1-Ue-He,en=vt+Nt-Ue,x1=da(R?g2(_e,Ta):_e,vt,R?r1(Lt,en):Lt);G[z]=x1,At[z]=x1-vt}if(l){var We,Xt=z==="x"?Pt:It,an=z==="x"?Kt:Gt,fe=G[U],w1=U==="y"?"height":"width",Rt=fe+H[Xt],Se=fe-H[an],ve=[Pt,It].indexOf(T)!==-1,$=(We=lt==null?void 0:lt[U])!=null?We:0,_t=ve?Rt:fe-d[w1]-it[w1]-$+nt.altAxis,Oa=ve?fe+d[w1]+it[w1]-$-nt.altAxis:Se,Pa=R&&ve?hf(_t,fe,Oa):da(R?_t:Rt,fe,R?Oa:Se);G[U]=Pa,At[U]=Pa-fe}e.modifiersData[n]=At}}const Bf={name:"preventOverflow",enabled:!0,phase:"main",fn:Rf,requiresIfExists:["offset"]};function Ff(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function zf(t){return t===zt(t)||!$t(t)?Ir(t):Ff(t)}function Nf(t){var e=t.getBoundingClientRect(),a=O1(e.width)/t.offsetWidth||1,n=O1(e.height)/t.offsetHeight||1;return a!==1||n!==1}function qf(t,e,a){a===void 0&&(a=!1);var n=$t(e),i=$t(e)&&Nf(e),h=Ne(e),c=P1(t,i,a),l={scrollLeft:0,scrollTop:0},v={x:0,y:0};return(n||!n&&!a)&&((pe(e)!=="body"||Br(h))&&(l=zf(e)),$t(e)?(v=P1(e,!0),v.x+=e.clientLeft,v.y+=e.clientTop):h&&(v.x=Rr(h))),{x:c.left+l.scrollLeft-v.x,y:c.top+l.scrollTop-v.y,width:c.width,height:c.height}}function jf(t){var e=new Map,a=new Set,n=[];t.forEach(function(h){e.set(h.name,h)});function i(h){a.add(h.name);var c=[].concat(h.requires||[],h.requiresIfExists||[]);c.forEach(function(l){if(!a.has(l)){var v=e.get(l);v&&i(v)}}),n.push(h)}return t.forEach(function(h){a.has(h.name)||i(h)}),n}function Zf(t){var e=jf(t);return tf.reduce(function(a,n){return a.concat(e.filter(function(i){return i.phase===n}))},[])}function Uf(t){var e;return function(){return e||(e=new Promise(function(a){Promise.resolve().then(function(){e=void 0,a(t())})})),e}}function Wf(t){var e=t.reduce(function(a,n){var i=a[n.name];return a[n.name]=i?Object.assign({},i,n,{options:Object.assign({},i.options,n.options),data:Object.assign({},i.data,n.data)}):n,a},{});return Object.keys(e).map(function(a){return e[a]})}var S0={placement:"bottom",modifiers:[],strategy:"absolute"};function k0(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function $f(t){t===void 0&&(t={});var e=t,a=e.defaultModifiers,n=a===void 0?[]:a,i=e.defaultOptions,h=i===void 0?S0:i;return function(l,v,y){y===void 0&&(y=h);var g={placement:"bottom",orderedModifiers:[],options:Object.assign({},S0,h),modifiersData:{},elements:{reference:l,popper:v},attributes:{},styles:{}},C=[],I=!1,R={state:g,setOptions:function(T){var j=typeof T=="function"?T(g.options):T;V(),g.options=Object.assign({},h,g.options,j),g.scrollParents={reference:d1(l)?pa(l):l.contextElement?pa(l.contextElement):[],popper:pa(v)};var Z=Zf(Wf([].concat(n,g.options.modifiers)));return g.orderedModifiers=Z.filter(function(z){return z.enabled}),k(),R.update()},forceUpdate:function(){if(!I){var T=g.elements,j=T.reference,Z=T.popper;if(k0(j,Z)){g.rects={reference:qf(j,Ha(Z),g.options.strategy==="fixed"),popper:Or(Z)},g.reset=!1,g.placement=g.options.placement,g.orderedModifiers.forEach(function(nt){return g.modifiersData[nt.name]=Object.assign({},nt.data)});for(var z=0;z<g.orderedModifiers.length;z++){if(g.reset===!0){g.reset=!1,z=-1;continue}var U=g.orderedModifiers[z],G=U.fn,d=U.options,it=d===void 0?{}:d,W=U.name;typeof G=="function"&&(g=G({state:g,options:it,name:W,instance:R})||g)}}}},update:Uf(function(){return new Promise(function(H){R.forceUpdate(),H(g)})}),destroy:function(){V(),I=!0}};if(!k0(l,v))return R;R.setOptions(y).then(function(H){!I&&y.onFirstUpdate&&y.onFirstUpdate(H)});function k(){g.orderedModifiers.forEach(function(H){var T=H.name,j=H.options,Z=j===void 0?{}:j,z=H.effect;if(typeof z=="function"){var U=z({state:g,name:T,instance:R,options:Z}),G=function(){};C.push(U||G)}})}function V(){C.forEach(function(H){return H()}),C=[]}return R}}var Kf=[yf,Pf,vf,nf,Tf,kf,Bf,pf,Lf],Fr=$f({defaultModifiers:Kf}),Te=globalThis&&globalThis.__assign||function(){return Te=Object.assign||function(t){for(var e,a=1,n=arguments.length;a<n;a++){e=arguments[a];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Te.apply(this,arguments)},Wa=globalThis&&globalThis.__spreadArray||function(t,e,a){if(a||arguments.length===2)for(var n=0,i=e.length,h;n<i;n++)(h||!(n in e))&&(h||(h=Array.prototype.slice.call(e,0,n)),h[n]=e[n]);return t.concat(h||Array.prototype.slice.call(e))},Oe={placement:"bottom",triggerType:"click",offsetSkidding:0,offsetDistance:10,delay:300,ignoreClickOutsideClass:!1,onShow:function(){},onHide:function(){},onToggle:function(){}},Gf={id:null,override:!0},Ad=function(){function t(e,a,n,i){e===void 0&&(e=null),a===void 0&&(a=null),n===void 0&&(n=Oe),i===void 0&&(i=Gf),this._instanceId=i.id?i.id:e.id,this._targetEl=e,this._triggerEl=a,this._options=Te(Te({},Oe),n),this._popperInstance=null,this._visible=!1,this._initialized=!1,this.init(),rt.addInstance("Dropdown",this,this._instanceId,i.override)}return t.prototype.init=function(){this._triggerEl&&this._targetEl&&!this._initialized&&(this._popperInstance=this._createPopperInstance(),this._setupEventListeners(),this._initialized=!0)},t.prototype.destroy=function(){var e=this,a=this._getTriggerEvents();this._options.triggerType==="click"&&a.showEvents.forEach(function(n){e._triggerEl.removeEventListener(n,e._clickHandler)}),this._options.triggerType==="hover"&&(a.showEvents.forEach(function(n){e._triggerEl.removeEventListener(n,e._hoverShowTriggerElHandler),e._targetEl.removeEventListener(n,e._hoverShowTargetElHandler)}),a.hideEvents.forEach(function(n){e._triggerEl.removeEventListener(n,e._hoverHideHandler),e._targetEl.removeEventListener(n,e._hoverHideHandler)})),this._popperInstance.destroy(),this._initialized=!1},t.prototype.removeInstance=function(){rt.removeInstance("Dropdown",this._instanceId)},t.prototype.destroyAndRemoveInstance=function(){this.destroy(),this.removeInstance()},t.prototype._setupEventListeners=function(){var e=this,a=this._getTriggerEvents();this._clickHandler=function(){e.toggle()},this._options.triggerType==="click"&&a.showEvents.forEach(function(n){e._triggerEl.addEventListener(n,e._clickHandler)}),this._hoverShowTriggerElHandler=function(n){n.type==="click"?e.toggle():setTimeout(function(){e.show()},e._options.delay)},this._hoverShowTargetElHandler=function(){e.show()},this._hoverHideHandler=function(){setTimeout(function(){e._targetEl.matches(":hover")||e.hide()},e._options.delay)},this._options.triggerType==="hover"&&(a.showEvents.forEach(function(n){e._triggerEl.addEventListener(n,e._hoverShowTriggerElHandler),e._targetEl.addEventListener(n,e._hoverShowTargetElHandler)}),a.hideEvents.forEach(function(n){e._triggerEl.addEventListener(n,e._hoverHideHandler),e._targetEl.addEventListener(n,e._hoverHideHandler)}))},t.prototype._createPopperInstance=function(){return Fr(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[this._options.offsetSkidding,this._options.offsetDistance]}}]})},t.prototype._setupClickOutsideListener=function(){var e=this;this._clickOutsideEventListener=function(a){e._handleClickOutside(a,e._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._handleClickOutside=function(e,a){var n=e.target,i=this._options.ignoreClickOutsideClass,h=!1;if(i){var c=document.querySelectorAll(".".concat(i));c.forEach(function(l){if(l.contains(n)){h=!0;return}})}n!==a&&!a.contains(n)&&!this._triggerEl.contains(n)&&!h&&this.isVisible()&&this.hide()},t.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":return{showEvents:["mouseenter","click"],hideEvents:["mouseleave"]};case"click":return{showEvents:["click"],hideEvents:[]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["click"],hideEvents:[]}}},t.prototype.toggle=function(){this.isVisible()?this.hide():this.show(),this._options.onToggle(this)},t.prototype.isVisible=function(){return this._visible},t.prototype.show=function(){this._targetEl.classList.remove("hidden"),this._targetEl.classList.add("block"),this._targetEl.removeAttribute("aria-hidden"),this._popperInstance.setOptions(function(e){return Te(Te({},e),{modifiers:Wa(Wa([],e.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this._setupClickOutsideListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},t.prototype.hide=function(){this._targetEl.classList.remove("block"),this._targetEl.classList.add("hidden"),this._targetEl.setAttribute("aria-hidden","true"),this._popperInstance.setOptions(function(e){return Te(Te({},e),{modifiers:Wa(Wa([],e.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this._visible=!1,this._removeClickOutsideListener(),this._options.onHide(this)},t.prototype.updateOnShow=function(e){this._options.onShow=e},t.prototype.updateOnHide=function(e){this._options.onHide=e},t.prototype.updateOnToggle=function(e){this._options.onToggle=e},t}();function zr(){document.querySelectorAll("[data-dropdown-toggle]").forEach(function(t){var e=t.getAttribute("data-dropdown-toggle"),a=document.getElementById(e);if(a){var n=t.getAttribute("data-dropdown-placement"),i=t.getAttribute("data-dropdown-offset-skidding"),h=t.getAttribute("data-dropdown-offset-distance"),c=t.getAttribute("data-dropdown-trigger"),l=t.getAttribute("data-dropdown-delay"),v=t.getAttribute("data-dropdown-ignore-click-outside-class");new Ad(a,t,{placement:n||Oe.placement,triggerType:c||Oe.triggerType,offsetSkidding:i?parseInt(i):Oe.offsetSkidding,offsetDistance:h?parseInt(h):Oe.offsetDistance,delay:l?parseInt(l):Oe.delay,ignoreClickOutsideClass:v||Oe.ignoreClickOutsideClass})}else console.error('The dropdown element with id "'.concat(e,'" does not exist. Please check the data-dropdown-toggle attribute.'))})}typeof window<"u"&&(window.Dropdown=Ad,window.initDropdowns=zr);var m2=globalThis&&globalThis.__assign||function(){return m2=Object.assign||function(t){for(var e,a=1,n=arguments.length;a<n;a++){e=arguments[a];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},m2.apply(this,arguments)},x2={placement:"center",backdropClasses:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40",backdrop:"dynamic",closable:!0,onHide:function(){},onShow:function(){},onToggle:function(){}},Xf={id:null,override:!0},Hd=function(){function t(e,a,n){e===void 0&&(e=null),a===void 0&&(a=x2),n===void 0&&(n=Xf),this._eventListenerInstances=[],this._instanceId=n.id?n.id:e.id,this._targetEl=e,this._options=m2(m2({},x2),a),this._isHidden=!0,this._backdropEl=null,this._initialized=!1,this.init(),rt.addInstance("Modal",this,this._instanceId,n.override)}return t.prototype.init=function(){var e=this;this._targetEl&&!this._initialized&&(this._getPlacementClasses().map(function(a){e._targetEl.classList.add(a)}),this._initialized=!0)},t.prototype.destroy=function(){this._initialized&&(this.removeAllEventListenerInstances(),this._destroyBackdropEl(),this._initialized=!1)},t.prototype.removeInstance=function(){rt.removeInstance("Modal",this._instanceId)},t.prototype.destroyAndRemoveInstance=function(){this.destroy(),this.removeInstance()},t.prototype._createBackdrop=function(){var e;if(this._isHidden){var a=document.createElement("div");(e=a.classList).add.apply(e,this._options.backdropClasses.split(" ")),document.querySelector("body").append(a),this._backdropEl=a}},t.prototype._destroyBackdropEl=function(){!this._isHidden&&this._backdropEl&&(this._backdropEl.remove(),this._backdropEl=null)},t.prototype._setupModalCloseEventListeners=function(){var e=this;this._options.backdrop==="dynamic"&&(this._clickOutsideEventListener=function(a){e._handleOutsideClick(a.target)},this._targetEl.addEventListener("click",this._clickOutsideEventListener,!0)),this._keydownEventListener=function(a){a.key==="Escape"&&e.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},t.prototype._removeModalCloseEventListeners=function(){this._options.backdrop==="dynamic"&&this._targetEl.removeEventListener("click",this._clickOutsideEventListener,!0),document.body.removeEventListener("keydown",this._keydownEventListener,!0)},t.prototype._handleOutsideClick=function(e){(e===this._targetEl||e===this._backdropEl&&this.isVisible())&&this.hide()},t.prototype._getPlacementClasses=function(){switch(this._options.placement){case"top-left":return["justify-start","items-start"];case"top-center":return["justify-center","items-start"];case"top-right":return["justify-end","items-start"];case"center-left":return["justify-start","items-center"];case"center":return["justify-center","items-center"];case"center-right":return["justify-end","items-center"];case"bottom-left":return["justify-start","items-end"];case"bottom-center":return["justify-center","items-end"];case"bottom-right":return["justify-end","items-end"];default:return["justify-center","items-center"]}},t.prototype.toggle=function(){this._isHidden?this.show():this.hide(),this._options.onToggle(this)},t.prototype.show=function(){this.isHidden&&(this._targetEl.classList.add("flex"),this._targetEl.classList.remove("hidden"),this._targetEl.setAttribute("aria-modal","true"),this._targetEl.setAttribute("role","dialog"),this._targetEl.removeAttribute("aria-hidden"),this._createBackdrop(),this._isHidden=!1,this._options.closable&&this._setupModalCloseEventListeners(),document.body.classList.add("overflow-hidden"),this._options.onShow(this))},t.prototype.hide=function(){this.isVisible&&(this._targetEl.classList.add("hidden"),this._targetEl.classList.remove("flex"),this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.removeAttribute("aria-modal"),this._targetEl.removeAttribute("role"),this._destroyBackdropEl(),this._isHidden=!0,document.body.classList.remove("overflow-hidden"),this._options.closable&&this._removeModalCloseEventListeners(),this._options.onHide(this))},t.prototype.isVisible=function(){return!this._isHidden},t.prototype.isHidden=function(){return this._isHidden},t.prototype.addEventListenerInstance=function(e,a,n){this._eventListenerInstances.push({element:e,type:a,handler:n})},t.prototype.removeAllEventListenerInstances=function(){this._eventListenerInstances.map(function(e){e.element.removeEventListener(e.type,e.handler)}),this._eventListenerInstances=[]},t.prototype.getAllEventListenerInstances=function(){return this._eventListenerInstances},t.prototype.updateOnShow=function(e){this._options.onShow=e},t.prototype.updateOnHide=function(e){this._options.onHide=e},t.prototype.updateOnToggle=function(e){this._options.onToggle=e},t}();function Nr(){document.querySelectorAll("[data-modal-target]").forEach(function(t){var e=t.getAttribute("data-modal-target"),a=document.getElementById(e);if(a){var n=a.getAttribute("data-modal-placement"),i=a.getAttribute("data-modal-backdrop");new Hd(a,{placement:n||x2.placement,backdrop:i||x2.backdrop})}else console.error("Modal with id ".concat(e," does not exist. Are you sure that the data-modal-target attribute points to the correct modal id?."))}),document.querySelectorAll("[data-modal-toggle]").forEach(function(t){var e=t.getAttribute("data-modal-toggle"),a=document.getElementById(e);if(a){var n=rt.getInstance("Modal",e);if(n){var i=function(){n.toggle()};t.addEventListener("click",i),n.addEventListenerInstance(t,"click",i)}else console.error("Modal with id ".concat(e," has not been initialized. Please initialize it using the data-modal-target attribute."))}else console.error("Modal with id ".concat(e," does not exist. Are you sure that the data-modal-toggle attribute points to the correct modal id?"))}),document.querySelectorAll("[data-modal-show]").forEach(function(t){var e=t.getAttribute("data-modal-show"),a=document.getElementById(e);if(a){var n=rt.getInstance("Modal",e);if(n){var i=function(){n.show()};t.addEventListener("click",i),n.addEventListenerInstance(t,"click",i)}else console.error("Modal with id ".concat(e," has not been initialized. Please initialize it using the data-modal-target attribute."))}else console.error("Modal with id ".concat(e," does not exist. Are you sure that the data-modal-show attribute points to the correct modal id?"))}),document.querySelectorAll("[data-modal-hide]").forEach(function(t){var e=t.getAttribute("data-modal-hide"),a=document.getElementById(e);if(a){var n=rt.getInstance("Modal",e);if(n){var i=function(){n.hide()};t.addEventListener("click",i),n.addEventListenerInstance(t,"click",i)}else console.error("Modal with id ".concat(e," has not been initialized. Please initialize it using the data-modal-target attribute."))}else console.error("Modal with id ".concat(e," does not exist. Are you sure that the data-modal-hide attribute points to the correct modal id?"))})}typeof window<"u"&&(window.Modal=Hd,window.initModals=Nr);var w2=globalThis&&globalThis.__assign||function(){return w2=Object.assign||function(t){for(var e,a=1,n=arguments.length;a<n;a++){e=arguments[a];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},w2.apply(this,arguments)},e1={placement:"left",bodyScrolling:!1,backdrop:!0,edge:!1,edgeOffset:"bottom-[60px]",backdropClasses:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30",onShow:function(){},onHide:function(){},onToggle:function(){}},Yf={id:null,override:!0},Sd=function(){function t(e,a,n){e===void 0&&(e=null),a===void 0&&(a=e1),n===void 0&&(n=Yf),this._eventListenerInstances=[],this._instanceId=n.id?n.id:e.id,this._targetEl=e,this._options=w2(w2({},e1),a),this._visible=!1,this._initialized=!1,this.init(),rt.addInstance("Drawer",this,this._instanceId,n.override)}return t.prototype.init=function(){var e=this;this._targetEl&&!this._initialized&&(this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.classList.add("transition-transform"),this._getPlacementClasses(this._options.placement).base.map(function(a){e._targetEl.classList.add(a)}),this._handleEscapeKey=function(a){a.key==="Escape"&&e.isVisible()&&e.hide()},document.addEventListener("keydown",this._handleEscapeKey),this._initialized=!0)},t.prototype.destroy=function(){this._initialized&&(this.removeAllEventListenerInstances(),this._destroyBackdropEl(),document.removeEventListener("keydown",this._handleEscapeKey),this._initialized=!1)},t.prototype.removeInstance=function(){rt.removeInstance("Drawer",this._instanceId)},t.prototype.destroyAndRemoveInstance=function(){this.destroy(),this.removeInstance()},t.prototype.hide=function(){var e=this;this._options.edge?(this._getPlacementClasses(this._options.placement+"-edge").active.map(function(a){e._targetEl.classList.remove(a)}),this._getPlacementClasses(this._options.placement+"-edge").inactive.map(function(a){e._targetEl.classList.add(a)})):(this._getPlacementClasses(this._options.placement).active.map(function(a){e._targetEl.classList.remove(a)}),this._getPlacementClasses(this._options.placement).inactive.map(function(a){e._targetEl.classList.add(a)})),this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.removeAttribute("aria-modal"),this._targetEl.removeAttribute("role"),this._options.bodyScrolling||document.body.classList.remove("overflow-hidden"),this._options.backdrop&&this._destroyBackdropEl(),this._visible=!1,this._options.onHide(this)},t.prototype.show=function(){var e=this;this._options.edge?(this._getPlacementClasses(this._options.placement+"-edge").active.map(function(a){e._targetEl.classList.add(a)}),this._getPlacementClasses(this._options.placement+"-edge").inactive.map(function(a){e._targetEl.classList.remove(a)})):(this._getPlacementClasses(this._options.placement).active.map(function(a){e._targetEl.classList.add(a)}),this._getPlacementClasses(this._options.placement).inactive.map(function(a){e._targetEl.classList.remove(a)})),this._targetEl.setAttribute("aria-modal","true"),this._targetEl.setAttribute("role","dialog"),this._targetEl.removeAttribute("aria-hidden"),this._options.bodyScrolling||document.body.classList.add("overflow-hidden"),this._options.backdrop&&this._createBackdrop(),this._visible=!0,this._options.onShow(this)},t.prototype.toggle=function(){this.isVisible()?this.hide():this.show()},t.prototype._createBackdrop=function(){var e,a=this;if(!this._visible){var n=document.createElement("div");n.setAttribute("drawer-backdrop",""),(e=n.classList).add.apply(e,this._options.backdropClasses.split(" ")),document.querySelector("body").append(n),n.addEventListener("click",function(){a.hide()})}},t.prototype._destroyBackdropEl=function(){this._visible&&document.querySelector("[drawer-backdrop]")!==null&&document.querySelector("[drawer-backdrop]").remove()},t.prototype._getPlacementClasses=function(e){switch(e){case"top":return{base:["top-0","left-0","right-0"],active:["transform-none"],inactive:["-translate-y-full"]};case"right":return{base:["right-0","top-0"],active:["transform-none"],inactive:["translate-x-full"]};case"bottom":return{base:["bottom-0","left-0","right-0"],active:["transform-none"],inactive:["translate-y-full"]};case"left":return{base:["left-0","top-0"],active:["transform-none"],inactive:["-translate-x-full"]};case"bottom-edge":return{base:["left-0","top-0"],active:["transform-none"],inactive:["translate-y-full",this._options.edgeOffset]};default:return{base:["left-0","top-0"],active:["transform-none"],inactive:["-translate-x-full"]}}},t.prototype.isHidden=function(){return!this._visible},t.prototype.isVisible=function(){return this._visible},t.prototype.addEventListenerInstance=function(e,a,n){this._eventListenerInstances.push({element:e,type:a,handler:n})},t.prototype.removeAllEventListenerInstances=function(){this._eventListenerInstances.map(function(e){e.element.removeEventListener(e.type,e.handler)}),this._eventListenerInstances=[]},t.prototype.getAllEventListenerInstances=function(){return this._eventListenerInstances},t.prototype.updateOnShow=function(e){this._options.onShow=e},t.prototype.updateOnHide=function(e){this._options.onHide=e},t.prototype.updateOnToggle=function(e){this._options.onToggle=e},t}();function qr(){document.querySelectorAll("[data-drawer-target]").forEach(function(t){var e=t.getAttribute("data-drawer-target"),a=document.getElementById(e);if(a){var n=t.getAttribute("data-drawer-placement"),i=t.getAttribute("data-drawer-body-scrolling"),h=t.getAttribute("data-drawer-backdrop"),c=t.getAttribute("data-drawer-edge"),l=t.getAttribute("data-drawer-edge-offset");new Sd(a,{placement:n||e1.placement,bodyScrolling:i?i==="true":e1.bodyScrolling,backdrop:h?h==="true":e1.backdrop,edge:c?c==="true":e1.edge,edgeOffset:l||e1.edgeOffset})}else console.error("Drawer with id ".concat(e," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))}),document.querySelectorAll("[data-drawer-toggle]").forEach(function(t){var e=t.getAttribute("data-drawer-toggle"),a=document.getElementById(e);if(a){var n=rt.getInstance("Drawer",e);if(n){var i=function(){n.toggle()};t.addEventListener("click",i),n.addEventListenerInstance(t,"click",i)}else console.error("Drawer with id ".concat(e," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(e," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))}),document.querySelectorAll("[data-drawer-dismiss], [data-drawer-hide]").forEach(function(t){var e=t.getAttribute("data-drawer-dismiss")?t.getAttribute("data-drawer-dismiss"):t.getAttribute("data-drawer-hide"),a=document.getElementById(e);if(a){var n=rt.getInstance("Drawer",e);if(n){var i=function(){n.hide()};t.addEventListener("click",i),n.addEventListenerInstance(t,"click",i)}else console.error("Drawer with id ".concat(e," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(e," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id"))}),document.querySelectorAll("[data-drawer-show]").forEach(function(t){var e=t.getAttribute("data-drawer-show"),a=document.getElementById(e);if(a){var n=rt.getInstance("Drawer",e);if(n){var i=function(){n.show()};t.addEventListener("click",i),n.addEventListenerInstance(t,"click",i)}else console.error("Drawer with id ".concat(e," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(e," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))})}typeof window<"u"&&(window.Drawer=Sd,window.initDrawers=qr);var b2=globalThis&&globalThis.__assign||function(){return b2=Object.assign||function(t){for(var e,a=1,n=arguments.length;a<n;a++){e=arguments[a];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},b2.apply(this,arguments)},_2={defaultTabId:null,activeClasses:"text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500",inactiveClasses:"dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",onShow:function(){}},Jf={id:null,override:!0},kd=function(){function t(e,a,n,i){e===void 0&&(e=null),a===void 0&&(a=[]),n===void 0&&(n=_2),i===void 0&&(i=Jf),this._instanceId=i.id?i.id:e.id,this._tabsEl=e,this._items=a,this._activeTab=n?this.getTab(n.defaultTabId):null,this._options=b2(b2({},_2),n),this._initialized=!1,this.init(),rt.addInstance("Tabs",this,this._instanceId,i.override)}return t.prototype.init=function(){var e=this;this._items.length&&!this._initialized&&(this._activeTab||this.setActiveTab(this._items[0]),this.show(this._activeTab.id,!0),this._items.map(function(a){a.triggerEl.addEventListener("click",function(n){n.preventDefault(),e.show(a.id)})}))},t.prototype.destroy=function(){this._initialized&&(this._initialized=!1)},t.prototype.removeInstance=function(){this.destroy(),rt.removeInstance("Tabs",this._instanceId)},t.prototype.destroyAndRemoveInstance=function(){this.destroy(),this.removeInstance()},t.prototype.getActiveTab=function(){return this._activeTab},t.prototype.setActiveTab=function(e){this._activeTab=e},t.prototype.getTab=function(e){return this._items.filter(function(a){return a.id===e})[0]},t.prototype.show=function(e,a){var n,i,h=this;a===void 0&&(a=!1);var c=this.getTab(e);c===this._activeTab&&!a||(this._items.map(function(l){var v,y;l!==c&&((v=l.triggerEl.classList).remove.apply(v,h._options.activeClasses.split(" ")),(y=l.triggerEl.classList).add.apply(y,h._options.inactiveClasses.split(" ")),l.targetEl.classList.add("hidden"),l.triggerEl.setAttribute("aria-selected","false"))}),(n=c.triggerEl.classList).add.apply(n,this._options.activeClasses.split(" ")),(i=c.triggerEl.classList).remove.apply(i,this._options.inactiveClasses.split(" ")),c.triggerEl.setAttribute("aria-selected","true"),c.targetEl.classList.remove("hidden"),this.setActiveTab(c),this._options.onShow(this,c))},t.prototype.updateOnShow=function(e){this._options.onShow=e},t}();function jr(){document.querySelectorAll("[data-tabs-toggle]").forEach(function(t){var e=[],a=t.getAttribute("data-tabs-active-classes"),n=t.getAttribute("data-tabs-inactive-classes"),i=null;t.querySelectorAll('[role="tab"]').forEach(function(h){var c=h.getAttribute("aria-selected")==="true",l={id:h.getAttribute("data-tabs-target"),triggerEl:h,targetEl:document.querySelector(h.getAttribute("data-tabs-target"))};e.push(l),c&&(i=l.id)}),new kd(t,e,{defaultTabId:i,activeClasses:a||_2.activeClasses,inactiveClasses:n||_2.inactiveClasses})})}typeof window<"u"&&(window.Tabs=kd,window.initTabs=jr);var Pe=globalThis&&globalThis.__assign||function(){return Pe=Object.assign||function(t){for(var e,a=1,n=arguments.length;a<n;a++){e=arguments[a];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Pe.apply(this,arguments)},$a=globalThis&&globalThis.__spreadArray||function(t,e,a){if(a||arguments.length===2)for(var n=0,i=e.length,h;n<i;n++)(h||!(n in e))&&(h||(h=Array.prototype.slice.call(e,0,n)),h[n]=e[n]);return t.concat(h||Array.prototype.slice.call(e))},C2={placement:"top",triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},Qf={id:null,override:!0},Ed=function(){function t(e,a,n,i){e===void 0&&(e=null),a===void 0&&(a=null),n===void 0&&(n=C2),i===void 0&&(i=Qf),this._instanceId=i.id?i.id:e.id,this._targetEl=e,this._triggerEl=a,this._options=Pe(Pe({},C2),n),this._popperInstance=null,this._visible=!1,this._initialized=!1,this.init(),rt.addInstance("Tooltip",this,this._instanceId,i.override)}return t.prototype.init=function(){this._triggerEl&&this._targetEl&&!this._initialized&&(this._setupEventListeners(),this._popperInstance=this._createPopperInstance(),this._initialized=!0)},t.prototype.destroy=function(){var e=this;if(this._initialized){var a=this._getTriggerEvents();a.showEvents.forEach(function(n){e._triggerEl.removeEventListener(n,e._showHandler)}),a.hideEvents.forEach(function(n){e._triggerEl.removeEventListener(n,e._hideHandler)}),this._removeKeydownListener(),this._removeClickOutsideListener(),this._popperInstance&&this._popperInstance.destroy(),this._initialized=!1}},t.prototype.removeInstance=function(){rt.removeInstance("Tooltip",this._instanceId)},t.prototype.destroyAndRemoveInstance=function(){this.destroy(),this.removeInstance()},t.prototype._setupEventListeners=function(){var e=this,a=this._getTriggerEvents();this._showHandler=function(){e.show()},this._hideHandler=function(){e.hide()},a.showEvents.forEach(function(n){e._triggerEl.addEventListener(n,e._showHandler)}),a.hideEvents.forEach(function(n){e._triggerEl.addEventListener(n,e._hideHandler)})},t.prototype._createPopperInstance=function(){return Fr(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[0,8]}}]})},t.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]}}},t.prototype._setupKeydownListener=function(){var e=this;this._keydownEventListener=function(a){a.key==="Escape"&&e.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},t.prototype._removeKeydownListener=function(){document.body.removeEventListener("keydown",this._keydownEventListener,!0)},t.prototype._setupClickOutsideListener=function(){var e=this;this._clickOutsideEventListener=function(a){e._handleClickOutside(a,e._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._handleClickOutside=function(e,a){var n=e.target;n!==a&&!a.contains(n)&&!this._triggerEl.contains(n)&&this.isVisible()&&this.hide()},t.prototype.isVisible=function(){return this._visible},t.prototype.toggle=function(){this.isVisible()?this.hide():this.show()},t.prototype.show=function(){this._targetEl.classList.remove("opacity-0","invisible"),this._targetEl.classList.add("opacity-100","visible"),this._popperInstance.setOptions(function(e){return Pe(Pe({},e),{modifiers:$a($a([],e.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this._setupClickOutsideListener(),this._setupKeydownListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},t.prototype.hide=function(){this._targetEl.classList.remove("opacity-100","visible"),this._targetEl.classList.add("opacity-0","invisible"),this._popperInstance.setOptions(function(e){return Pe(Pe({},e),{modifiers:$a($a([],e.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this._removeClickOutsideListener(),this._removeKeydownListener(),this._visible=!1,this._options.onHide(this)},t.prototype.updateOnShow=function(e){this._options.onShow=e},t.prototype.updateOnHide=function(e){this._options.onHide=e},t.prototype.updateOnToggle=function(e){this._options.onToggle=e},t}();function Zr(){document.querySelectorAll("[data-tooltip-target]").forEach(function(t){var e=t.getAttribute("data-tooltip-target"),a=document.getElementById(e);if(a){var n=t.getAttribute("data-tooltip-trigger"),i=t.getAttribute("data-tooltip-placement");new Ed(a,t,{placement:i||C2.placement,triggerType:n||C2.triggerType})}else console.error('The tooltip element with id "'.concat(e,'" does not exist. Please check the data-tooltip-target attribute.'))})}typeof window<"u"&&(window.Tooltip=Ed,window.initTooltips=Zr);var Ie=globalThis&&globalThis.__assign||function(){return Ie=Object.assign||function(t){for(var e,a=1,n=arguments.length;a<n;a++){e=arguments[a];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Ie.apply(this,arguments)},Ka=globalThis&&globalThis.__spreadArray||function(t,e,a){if(a||arguments.length===2)for(var n=0,i=e.length,h;n<i;n++)(h||!(n in e))&&(h||(h=Array.prototype.slice.call(e,0,n)),h[n]=e[n]);return t.concat(h||Array.prototype.slice.call(e))},la={placement:"top",offset:10,triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},t5={id:null,override:!0},Ld=function(){function t(e,a,n,i){e===void 0&&(e=null),a===void 0&&(a=null),n===void 0&&(n=la),i===void 0&&(i=t5),this._instanceId=i.id?i.id:e.id,this._targetEl=e,this._triggerEl=a,this._options=Ie(Ie({},la),n),this._popperInstance=null,this._visible=!1,this._initialized=!1,this.init(),rt.addInstance("Popover",this,i.id?i.id:this._targetEl.id,i.override)}return t.prototype.init=function(){this._triggerEl&&this._targetEl&&!this._initialized&&(this._setupEventListeners(),this._popperInstance=this._createPopperInstance(),this._initialized=!0)},t.prototype.destroy=function(){var e=this;if(this._initialized){var a=this._getTriggerEvents();a.showEvents.forEach(function(n){e._triggerEl.removeEventListener(n,e._showHandler),e._targetEl.removeEventListener(n,e._showHandler)}),a.hideEvents.forEach(function(n){e._triggerEl.removeEventListener(n,e._hideHandler),e._targetEl.removeEventListener(n,e._hideHandler)}),this._removeKeydownListener(),this._removeClickOutsideListener(),this._popperInstance&&this._popperInstance.destroy(),this._initialized=!1}},t.prototype.removeInstance=function(){rt.removeInstance("Popover",this._instanceId)},t.prototype.destroyAndRemoveInstance=function(){this.destroy(),this.removeInstance()},t.prototype._setupEventListeners=function(){var e=this,a=this._getTriggerEvents();this._showHandler=function(){e.show()},this._hideHandler=function(){setTimeout(function(){e._targetEl.matches(":hover")||e.hide()},100)},a.showEvents.forEach(function(n){e._triggerEl.addEventListener(n,e._showHandler),e._targetEl.addEventListener(n,e._showHandler)}),a.hideEvents.forEach(function(n){e._triggerEl.addEventListener(n,e._hideHandler),e._targetEl.addEventListener(n,e._hideHandler)})},t.prototype._createPopperInstance=function(){return Fr(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[0,this._options.offset]}}]})},t.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]}}},t.prototype._setupKeydownListener=function(){var e=this;this._keydownEventListener=function(a){a.key==="Escape"&&e.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},t.prototype._removeKeydownListener=function(){document.body.removeEventListener("keydown",this._keydownEventListener,!0)},t.prototype._setupClickOutsideListener=function(){var e=this;this._clickOutsideEventListener=function(a){e._handleClickOutside(a,e._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._handleClickOutside=function(e,a){var n=e.target;n!==a&&!a.contains(n)&&!this._triggerEl.contains(n)&&this.isVisible()&&this.hide()},t.prototype.isVisible=function(){return this._visible},t.prototype.toggle=function(){this.isVisible()?this.hide():this.show(),this._options.onToggle(this)},t.prototype.show=function(){this._targetEl.classList.remove("opacity-0","invisible"),this._targetEl.classList.add("opacity-100","visible"),this._popperInstance.setOptions(function(e){return Ie(Ie({},e),{modifiers:Ka(Ka([],e.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this._setupClickOutsideListener(),this._setupKeydownListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},t.prototype.hide=function(){this._targetEl.classList.remove("opacity-100","visible"),this._targetEl.classList.add("opacity-0","invisible"),this._popperInstance.setOptions(function(e){return Ie(Ie({},e),{modifiers:Ka(Ka([],e.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this._removeClickOutsideListener(),this._removeKeydownListener(),this._visible=!1,this._options.onHide(this)},t.prototype.updateOnShow=function(e){this._options.onShow=e},t.prototype.updateOnHide=function(e){this._options.onHide=e},t.prototype.updateOnToggle=function(e){this._options.onToggle=e},t}();function Ur(){document.querySelectorAll("[data-popover-target]").forEach(function(t){var e=t.getAttribute("data-popover-target"),a=document.getElementById(e);if(a){var n=t.getAttribute("data-popover-trigger"),i=t.getAttribute("data-popover-placement"),h=t.getAttribute("data-popover-offset");new Ld(a,t,{placement:i||la.placement,offset:h?parseInt(h):la.offset,triggerType:n||la.triggerType})}else console.error('The popover element with id "'.concat(e,'" does not exist. Please check the data-popover-target attribute.'))})}typeof window<"u"&&(window.Popover=Ld,window.initPopovers=Ur);var A2=globalThis&&globalThis.__assign||function(){return A2=Object.assign||function(t){for(var e,a=1,n=arguments.length;a<n;a++){e=arguments[a];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},A2.apply(this,arguments)},Qn={triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},e5={id:null,override:!0},Vd=function(){function t(e,a,n,i,h){e===void 0&&(e=null),a===void 0&&(a=null),n===void 0&&(n=null),i===void 0&&(i=Qn),h===void 0&&(h=e5),this._instanceId=h.id?h.id:n.id,this._parentEl=e,this._triggerEl=a,this._targetEl=n,this._options=A2(A2({},Qn),i),this._visible=!1,this._initialized=!1,this.init(),rt.addInstance("Dial",this,this._instanceId,h.override)}return t.prototype.init=function(){var e=this;if(this._triggerEl&&this._targetEl&&!this._initialized){var a=this._getTriggerEventTypes(this._options.triggerType);this._showEventHandler=function(){e.show()},a.showEvents.forEach(function(n){e._triggerEl.addEventListener(n,e._showEventHandler),e._targetEl.addEventListener(n,e._showEventHandler)}),this._hideEventHandler=function(){e._parentEl.matches(":hover")||e.hide()},a.hideEvents.forEach(function(n){e._parentEl.addEventListener(n,e._hideEventHandler)}),this._initialized=!0}},t.prototype.destroy=function(){var e=this;if(this._initialized){var a=this._getTriggerEventTypes(this._options.triggerType);a.showEvents.forEach(function(n){e._triggerEl.removeEventListener(n,e._showEventHandler),e._targetEl.removeEventListener(n,e._showEventHandler)}),a.hideEvents.forEach(function(n){e._parentEl.removeEventListener(n,e._hideEventHandler)}),this._initialized=!1}},t.prototype.removeInstance=function(){rt.removeInstance("Dial",this._instanceId)},t.prototype.destroyAndRemoveInstance=function(){this.destroy(),this.removeInstance()},t.prototype.hide=function(){this._targetEl.classList.add("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","false"),this._visible=!1,this._options.onHide(this)},t.prototype.show=function(){this._targetEl.classList.remove("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","true"),this._visible=!0,this._options.onShow(this)},t.prototype.toggle=function(){this._visible?this.hide():this.show()},t.prototype.isHidden=function(){return!this._visible},t.prototype.isVisible=function(){return this._visible},t.prototype._getTriggerEventTypes=function(e){switch(e){case"hover":return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]}}},t.prototype.updateOnShow=function(e){this._options.onShow=e},t.prototype.updateOnHide=function(e){this._options.onHide=e},t.prototype.updateOnToggle=function(e){this._options.onToggle=e},t}();function Wr(){document.querySelectorAll("[data-dial-init]").forEach(function(t){var e=t.querySelector("[data-dial-toggle]");if(e){var a=e.getAttribute("data-dial-toggle"),n=document.getElementById(a);if(n){var i=e.getAttribute("data-dial-trigger");new Vd(t,e,n,{triggerType:i||Qn.triggerType})}else console.error("Dial with id ".concat(a," does not exist. Are you sure that the data-dial-toggle attribute points to the correct modal id?"))}else console.error("Dial with id ".concat(t.id," does not have a trigger element. Are you sure that the data-dial-toggle attribute exists?"))})}typeof window<"u"&&(window.Dial=Vd,window.initDials=Wr);var H2=globalThis&&globalThis.__assign||function(){return H2=Object.assign||function(t){for(var e,a=1,n=arguments.length;a<n;a++){e=arguments[a];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},H2.apply(this,arguments)},E0={minValue:null,maxValue:null,onIncrement:function(){},onDecrement:function(){}},a5={id:null,override:!0},Dd=function(){function t(e,a,n,i,h){e===void 0&&(e=null),a===void 0&&(a=null),n===void 0&&(n=null),i===void 0&&(i=E0),h===void 0&&(h=a5),this._instanceId=h.id?h.id:e.id,this._targetEl=e,this._incrementEl=a,this._decrementEl=n,this._options=H2(H2({},E0),i),this._initialized=!1,this.init(),rt.addInstance("InputCounter",this,this._instanceId,h.override)}return t.prototype.init=function(){var e=this;this._targetEl&&!this._initialized&&(this._inputHandler=function(a){{var n=a.target;/^\d*$/.test(n.value)||(n.value=n.value.replace(/[^\d]/g,"")),e._options.maxValue!==null&&parseInt(n.value)>e._options.maxValue&&(n.value=e._options.maxValue.toString()),e._options.minValue!==null&&parseInt(n.value)<e._options.minValue&&(n.value=e._options.minValue.toString())}},this._incrementClickHandler=function(){e.increment()},this._decrementClickHandler=function(){e.decrement()},this._targetEl.addEventListener("input",this._inputHandler),this._incrementEl&&this._incrementEl.addEventListener("click",this._incrementClickHandler),this._decrementEl&&this._decrementEl.addEventListener("click",this._decrementClickHandler),this._initialized=!0)},t.prototype.destroy=function(){this._targetEl&&this._initialized&&(this._targetEl.removeEventListener("input",this._inputHandler),this._incrementEl&&this._incrementEl.removeEventListener("click",this._incrementClickHandler),this._decrementEl&&this._decrementEl.removeEventListener("click",this._decrementClickHandler),this._initialized=!1)},t.prototype.removeInstance=function(){rt.removeInstance("InputCounter",this._instanceId)},t.prototype.destroyAndRemoveInstance=function(){this.destroy(),this.removeInstance()},t.prototype.getCurrentValue=function(){return parseInt(this._targetEl.value)||0},t.prototype.increment=function(){this._options.maxValue!==null&&this.getCurrentValue()>=this._options.maxValue||(this._targetEl.value=(this.getCurrentValue()+1).toString(),this._options.onIncrement(this))},t.prototype.decrement=function(){this._options.minValue!==null&&this.getCurrentValue()<=this._options.minValue||(this._targetEl.value=(this.getCurrentValue()-1).toString(),this._options.onDecrement(this))},t.prototype.updateOnIncrement=function(e){this._options.onIncrement=e},t.prototype.updateOnDecrement=function(e){this._options.onDecrement=e},t}();function $r(){document.querySelectorAll("[data-input-counter]").forEach(function(t){var e=t.id,a=document.querySelector('[data-input-counter-increment="'+e+'"]'),n=document.querySelector('[data-input-counter-decrement="'+e+'"]'),i=t.getAttribute("data-input-counter-min"),h=t.getAttribute("data-input-counter-max");t?rt.instanceExists("InputCounter",t.getAttribute("id"))||new Dd(t,a||null,n||null,{minValue:i?parseInt(i):null,maxValue:h?parseInt(h):null}):console.error('The target element with id "'.concat(e,'" does not exist. Please check the data-input-counter attribute.'))})}typeof window<"u"&&(window.InputCounter=Dd,window.initInputCounters=$r);var S2=globalThis&&globalThis.__assign||function(){return S2=Object.assign||function(t){for(var e,a=1,n=arguments.length;a<n;a++){e=arguments[a];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},S2.apply(this,arguments)},k2={htmlEntities:!1,contentType:"input",onCopy:function(){}},n5={id:null,override:!0},Td=function(){function t(e,a,n,i){e===void 0&&(e=null),a===void 0&&(a=null),n===void 0&&(n=k2),i===void 0&&(i=n5),this._instanceId=i.id?i.id:a.id,this._triggerEl=e,this._targetEl=a,this._options=S2(S2({},k2),n),this._initialized=!1,this.init(),rt.addInstance("CopyClipboard",this,this._instanceId,i.override)}return t.prototype.init=function(){var e=this;this._targetEl&&this._triggerEl&&!this._initialized&&(this._triggerElClickHandler=function(){e.copy()},this._triggerEl&&this._triggerEl.addEventListener("click",this._triggerElClickHandler),this._initialized=!0)},t.prototype.destroy=function(){this._triggerEl&&this._targetEl&&this._initialized&&(this._triggerEl&&this._triggerEl.removeEventListener("click",this._triggerElClickHandler),this._initialized=!1)},t.prototype.removeInstance=function(){rt.removeInstance("CopyClipboard",this._instanceId)},t.prototype.destroyAndRemoveInstance=function(){this.destroy(),this.removeInstance()},t.prototype.getTargetValue=function(){if(this._options.contentType==="input")return this._targetEl.value;if(this._options.contentType==="innerHTML")return this._targetEl.innerHTML;if(this._options.contentType==="textContent")return this._targetEl.textContent.replace(/\s+/g," ").trim()},t.prototype.copy=function(){var e=this.getTargetValue();this._options.htmlEntities&&(e=this.decodeHTML(e));var a=document.createElement("textarea");return a.value=e,document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a),this._options.onCopy(this),e},t.prototype.decodeHTML=function(e){var a=document.createElement("textarea");return a.innerHTML=e,a.textContent},t.prototype.updateOnCopyCallback=function(e){this._options.onCopy=e},t}();function Kr(){document.querySelectorAll("[data-copy-to-clipboard-target]").forEach(function(t){var e=t.getAttribute("data-copy-to-clipboard-target"),a=document.getElementById(e),n=t.getAttribute("data-copy-to-clipboard-content-type"),i=t.getAttribute("data-copy-to-clipboard-html-entities");a?rt.instanceExists("CopyClipboard",a.getAttribute("id"))||new Td(t,a,{htmlEntities:i&&i==="true"?!0:k2.htmlEntities,contentType:n||k2.contentType}):console.error('The target element with id "'.concat(e,'" does not exist. Please check the data-copy-to-clipboard-target attribute.'))})}typeof window<"u"&&(window.CopyClipboard=Td,window.initClipboards=Kr);function tr(t,e){(e==null||e>t.length)&&(e=t.length);for(var a=0,n=Array(e);a<e;a++)n[a]=t[a];return n}function r5(t){if(Array.isArray(t))return t}function i5(t){if(Array.isArray(t))return tr(t)}function o5(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Gr(t,e,a){return e=Be(e),p5(t,Od()?Reflect.construct(e,a||[],Be(t).constructor):e.apply(t,a))}function u1(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function L0(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,f5(n.key),n)}}function f1(t,e,a){return e&&L0(t.prototype,e),a&&L0(t,a),Object.defineProperty(t,"prototype",{writable:!1}),t}function xa(){return xa=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(t,e,a){var n=l5(t,e);if(n){var i=Object.getOwnPropertyDescriptor(n,e);return i.get?i.get.call(arguments.length<3?t:a):i.value}},xa.apply(null,arguments)}function Be(t){return Be=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Be(t)}function Xr(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&er(t,e)}function Od(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Od=function(){return!!t})()}function h5(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function s5(t,e){var a=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var n,i,h,c,l=[],v=!0,y=!1;try{if(h=(a=a.call(t)).next,e===0){if(Object(a)!==a)return;v=!1}else for(;!(v=(n=h.call(a)).done)&&(l.push(n.value),l.length!==e);v=!0);}catch(g){y=!0,i=g}finally{try{if(!v&&a.return!=null&&(c=a.return(),Object(c)!==c))return}finally{if(y)throw i}}return l}}function c5(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function d5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p5(t,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return o5(t)}function er(t,e){return er=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,n){return a.__proto__=n,a},er(t,e)}function Ft(t,e){return r5(t)||s5(t,e)||Pd(t,e)||c5()}function l5(t,e){for(;!{}.hasOwnProperty.call(t,e)&&(t=Be(t))!==null;);return t}function Sa(t){return i5(t)||h5(t)||Pd(t)||d5()}function u5(t,e){if(typeof t!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var n=a.call(t,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function f5(t){var e=u5(t,"string");return typeof e=="symbol"?e:e+""}function E2(t){"@babel/helpers - typeof";return E2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E2(t)}function Pd(t,e){if(t){if(typeof t=="string")return tr(t,e);var a={}.toString.call(t).slice(8,-1);return a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set"?Array.from(t):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?tr(t,e):void 0}}function xe(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Yr(t){return t[t.length-1]}function p1(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];return a.forEach(function(i){t.includes(i)||t.push(i)}),t}function En(t,e){return t?t.split(e):[]}function Jr(t,e,a){var n=e===void 0||t>=e,i=a===void 0||t<=a;return n&&i}function Id(t,e,a){return t<e?e:t>a?a:t}function R1(t,e){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"",h=Object.keys(a).reduce(function(l,v){var y=a[v];return typeof y=="function"&&(y=y(n)),"".concat(l," ").concat(v,'="').concat(y,'"')},t);i+="<".concat(h,"></").concat(t,">");var c=n+1;return c<e?R1(t,e,a,c,i):i}function Qr(t){return t.replace(/>\s+/g,">").replace(/\s+</,"<")}function ar(t){return new Date(t).setHours(0,0,0,0)}function v1(){return new Date().setHours(0,0,0,0)}function Re(){switch(arguments.length){case 0:return v1();case 1:return ar(arguments.length<=0?void 0:arguments[0])}var t=new Date(0);return t.setFullYear.apply(t,arguments),t.setHours(0,0,0,0)}function L1(t,e){var a=new Date(t);return a.setDate(a.getDate()+e)}function v5(t,e){return L1(t,e*7)}function L2(t,e){var a=new Date(t),n=a.getMonth()+e,i=n%12;i<0&&(i+=12);var h=a.setMonth(n);return a.getMonth()!==i?a.setDate(0):h}function V1(t,e){var a=new Date(t),n=a.getMonth(),i=a.setFullYear(a.getFullYear()+e);return n===1&&a.getMonth()===2?a.setDate(0):i}function V0(t,e){return(t-e+7)%7}function V2(t,e){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,n=new Date(t).getDay();return L1(t,V0(e,a)-V0(n,a))}function M5(t){var e=V2(t,4,1),a=V2(new Date(e).setMonth(0,4),4,1);return Math.round((e-a)/6048e5)+1}function Je(t,e){var a=new Date(t).getFullYear();return Math.floor(a/e)*e}var nr=/dd?|DD?|mm?|MM?|yy?(?:yy)?/,y5=/[\s!-/:-@[-`{-~年月日]+/,Ln={},D0={y:function(e,a){return new Date(e).setFullYear(parseInt(a,10))},m:function(e,a,n){var i=new Date(e),h=parseInt(a,10)-1;if(isNaN(h)){if(!a)return NaN;var c=a.toLowerCase(),l=function(y){return y.toLowerCase().startsWith(c)};if(h=n.monthsShort.findIndex(l),h<0&&(h=n.months.findIndex(l)),h<0)return NaN}return i.setMonth(h),i.getMonth()!==Rd(h)?i.setDate(0):i.getTime()},d:function(e,a){return new Date(e).setDate(parseInt(a,10))}},g5={d:function(e){return e.getDate()},dd:function(e){return Ga(e.getDate(),2)},D:function(e,a){return a.daysShort[e.getDay()]},DD:function(e,a){return a.days[e.getDay()]},m:function(e){return e.getMonth()+1},mm:function(e){return Ga(e.getMonth()+1,2)},M:function(e,a){return a.monthsShort[e.getMonth()]},MM:function(e,a){return a.months[e.getMonth()]},y:function(e){return e.getFullYear()},yy:function(e){return Ga(e.getFullYear(),2).slice(-2)},yyyy:function(e){return Ga(e.getFullYear(),4)}};function Rd(t){return t>-1?t%12:Rd(t+12)}function Ga(t,e){return t.toString().padStart(e,"0")}function Bd(t){if(typeof t!="string")throw new Error("Invalid date format.");if(t in Ln)return Ln[t];var e=t.split(nr),a=t.match(new RegExp(nr,"g"));if(e.length===0||!a)throw new Error("Invalid date format.");var n=a.map(function(h){return g5[h]}),i=Object.keys(D0).reduce(function(h,c){var l=a.find(function(v){return v[0]!=="D"&&v[0].toLowerCase()===c});return l&&h.push(c),h},[]);return Ln[t]={parser:function(c,l){var v=c.split(y5).reduce(function(y,g,C){if(g.length>0&&a[C]){var I=a[C][0];I==="M"?y.m=g:I!=="D"&&(y[I]=g)}return y},{});return i.reduce(function(y,g){var C=D0[g](y,v[g],l);return isNaN(C)?y:C},v1())},formatter:function(c,l){var v=n.reduce(function(y,g,C){return y+="".concat(e[C]).concat(g(c,l))},"");return v+=Yr(e)}}}function wa(t,e,a){if(t instanceof Date||typeof t=="number"){var n=ar(t);return isNaN(n)?void 0:n}if(t){if(t==="today")return v1();if(e&&e.toValue){var i=e.toValue(t,e,a);return isNaN(i)?void 0:ar(i)}return Bd(e).parser(t,a)}}function ba(t,e,a){if(isNaN(t)||!t&&t!==0)return"";var n=typeof t=="number"?new Date(t):t;return e.toDisplay?e.toDisplay(n,e,a):Bd(e).formatter(n,a)}var D2=new WeakMap,Fd=EventTarget.prototype,T0=Fd.addEventListener,O0=Fd.removeEventListener;function ti(t,e){var a=D2.get(t);a||(a=[],D2.set(t,a)),e.forEach(function(n){T0.call.apply(T0,Sa(n)),a.push(n)})}function zd(t){var e=D2.get(t);e&&(e.forEach(function(a){O0.call.apply(O0,Sa(a))}),D2.delete(t))}if(!Event.prototype.composedPath){var m5=function t(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];a.push(e);var n;return e.parentNode?n=e.parentNode:e.host?n=e.host:e.defaultView&&(n=e.defaultView),n?t(n,a):a};Event.prototype.composedPath=function(){return m5(this.target)}}function Nd(t,e,a){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,i=t[n];return e(i)?i:i===a||!i.parentElement?void 0:Nd(t,e,a,n+1)}function qd(t,e){var a=typeof e=="function"?e:function(n){return n.matches(e)};return Nd(t.composedPath(),a,t.currentTarget)}var ra={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM y"}},ka={autohide:!1,beforeShowDay:null,beforeShowDecade:null,beforeShowMonth:null,beforeShowYear:null,calendarWeeks:!1,clearBtn:!1,dateDelimiter:",",datesDisabled:[],daysOfWeekDisabled:[],daysOfWeekHighlighted:[],defaultViewDate:void 0,disableTouchKeyboard:!1,format:"mm/dd/yyyy",language:"en",maxDate:null,maxNumberOfDates:1,maxView:3,minDate:null,nextArrow:'<svg class="w-4 h-4 rtl:rotate-180 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>',orientation:"auto",pickLevel:0,prevArrow:'<svg class="w-4 h-4 rtl:rotate-180 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/></svg>',showDaysOfWeek:!0,showOnClick:!0,showOnFocus:!0,startView:0,title:"",todayBtn:!1,todayBtnMode:0,todayHighlight:!1,updateOnBlur:!0,weekStart:0},x5=document.createRange();function we(t){return x5.createContextualFragment(t)}function ua(t){t.style.display!=="none"&&(t.style.display&&(t.dataset.styleDisplay=t.style.display),t.style.display="none")}function fa(t){t.style.display==="none"&&(t.dataset.styleDisplay?(t.style.display=t.dataset.styleDisplay,delete t.dataset.styleDisplay):t.style.display="")}function T2(t){t.firstChild&&(t.removeChild(t.firstChild),T2(t))}function w5(t,e){T2(t),e instanceof DocumentFragment?t.appendChild(e):typeof e=="string"?t.appendChild(we(e)):typeof e.forEach=="function"&&e.forEach(function(a){t.appendChild(a)})}var Vn=ka.language,b5=ka.format,_5=ka.weekStart;function P0(t,e){return t.length<6&&e>=0&&e<7?p1(t,e):t}function I0(t){return(t+6)%7}function R0(t,e,a,n){var i=wa(t,e,a);return i!==void 0?i:n}function Dn(t,e){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:3,n=parseInt(t,10);return n>=0&&n<=a?n:e}function Tn(t,e){var a=Object.assign({},t),n={},i=e.constructor.locales,h=e.config||{},c=h.format,l=h.language,v=h.locale,y=h.maxDate,g=h.maxView,C=h.minDate,I=h.pickLevel,R=h.startView,k=h.weekStart;if(a.language){var V;if(a.language!==l&&(i[a.language]?V=a.language:(V=a.language.split("-")[0],i[V]===void 0&&(V=!1))),delete a.language,V){l=n.language=V;var H=v||i[Vn];v=Object.assign({format:b5,weekStart:_5},i[Vn]),l!==Vn&&Object.assign(v,i[l]),n.locale=v,c===H.format&&(c=n.format=v.format),k===H.weekStart&&(k=n.weekStart=v.weekStart,n.weekEnd=I0(v.weekStart))}}if(a.format){var T=typeof a.format.toDisplay=="function",j=typeof a.format.toValue=="function",Z=nr.test(a.format);(T&&j||Z)&&(c=n.format=a.format),delete a.format}var z=C,U=y;if(a.minDate!==void 0&&(z=a.minDate===null?Re(0,0,1):R0(a.minDate,c,v,z),delete a.minDate),a.maxDate!==void 0&&(U=a.maxDate===null?void 0:R0(a.maxDate,c,v,U),delete a.maxDate),U<z?(C=n.minDate=U,y=n.maxDate=z):(C!==z&&(C=n.minDate=z),y!==U&&(y=n.maxDate=U)),a.datesDisabled&&(n.datesDisabled=a.datesDisabled.reduce(function(Mt,bt){var vt=wa(bt,c,v);return vt!==void 0?p1(Mt,vt):Mt},[]),delete a.datesDisabled),a.defaultViewDate!==void 0){var G=wa(a.defaultViewDate,c,v);G!==void 0&&(n.defaultViewDate=G),delete a.defaultViewDate}if(a.weekStart!==void 0){var d=Number(a.weekStart)%7;isNaN(d)||(k=n.weekStart=d,n.weekEnd=I0(d)),delete a.weekStart}if(a.daysOfWeekDisabled&&(n.daysOfWeekDisabled=a.daysOfWeekDisabled.reduce(P0,[]),delete a.daysOfWeekDisabled),a.daysOfWeekHighlighted&&(n.daysOfWeekHighlighted=a.daysOfWeekHighlighted.reduce(P0,[]),delete a.daysOfWeekHighlighted),a.maxNumberOfDates!==void 0){var it=parseInt(a.maxNumberOfDates,10);it>=0&&(n.maxNumberOfDates=it,n.multidate=it!==1),delete a.maxNumberOfDates}a.dateDelimiter&&(n.dateDelimiter=String(a.dateDelimiter),delete a.dateDelimiter);var W=I;a.pickLevel!==void 0&&(W=Dn(a.pickLevel,2),delete a.pickLevel),W!==I&&(I=n.pickLevel=W);var nt=g;a.maxView!==void 0&&(nt=Dn(a.maxView,g),delete a.maxView),nt=I>nt?I:nt,nt!==g&&(g=n.maxView=nt);var lt=R;if(a.startView!==void 0&&(lt=Dn(a.startView,lt),delete a.startView),lt<I?lt=I:lt>g&&(lt=g),lt!==R&&(n.startView=lt),a.prevArrow){var At=we(a.prevArrow);At.childNodes.length>0&&(n.prevArrow=At.childNodes),delete a.prevArrow}if(a.nextArrow){var J=we(a.nextArrow);J.childNodes.length>0&&(n.nextArrow=J.childNodes),delete a.nextArrow}if(a.disableTouchKeyboard!==void 0&&(n.disableTouchKeyboard="ontouchstart"in document&&!!a.disableTouchKeyboard,delete a.disableTouchKeyboard),a.orientation){var Ht=a.orientation.toLowerCase().split(/\s+/g);n.orientation={x:Ht.find(function(Mt){return Mt==="left"||Mt==="right"})||"auto",y:Ht.find(function(Mt){return Mt==="top"||Mt==="bottom"})||"auto"},delete a.orientation}if(a.todayBtnMode!==void 0){switch(a.todayBtnMode){case 0:case 1:n.todayBtnMode=a.todayBtnMode}delete a.todayBtnMode}return Object.keys(a).forEach(function(Mt){a[Mt]!==void 0&&xe(ka,Mt)&&(n[Mt]=a[Mt])}),n}var C5=Qr(`<div class="datepicker hidden">
  <div class="datepicker-picker inline-block rounded-lg bg-white dark:bg-gray-700 shadow-lg p-4">
    <div class="datepicker-header">
      <div class="datepicker-title bg-white dark:bg-gray-700 dark:text-white px-2 py-3 text-center font-semibold"></div>
      <div class="datepicker-controls flex justify-between mb-2">
        <button type="button" class="bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200 prev-btn"></button>
        <button type="button" class="text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 view-switch"></button>
        <button type="button" class="bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200 next-btn"></button>
      </div>
    </div>
    <div class="datepicker-main p-1"></div>
    <div class="datepicker-footer">
      <div class="datepicker-controls flex space-x-2 rtl:space-x-reverse mt-2">
        <button type="button" class="%buttonClass% today-btn text-white bg-blue-700 !bg-primary-700 dark:bg-blue-600 dark:!bg-primary-600 hover:bg-blue-800 hover:!bg-primary-800 dark:hover:bg-blue-700 dark:hover:!bg-primary-700 focus:ring-4 focus:ring-blue-300 focus:!ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center w-1/2"></button>
        <button type="button" class="%buttonClass% clear-btn text-gray-900 dark:text-white bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 focus:!ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center w-1/2"></button>
      </div>
    </div>
  </div>
</div>`),A5=Qr(`<div class="days">
  <div class="days-of-week grid grid-cols-7 mb-1">`.concat(R1("span",7,{class:"dow block flex-1 leading-9 border-0 rounded-lg cursor-default text-center text-gray-900 font-semibold text-sm"}),`</div>
  <div class="datepicker-grid w-64 grid grid-cols-7">`).concat(R1("span",42,{class:"block flex-1 leading-9 border-0 rounded-lg cursor-default text-center text-gray-900 font-semibold text-sm h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400"}),`</div>
</div>`)),H5=Qr(`<div class="calendar-weeks">
  <div class="days-of-week flex"><span class="dow h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400"></span></div>
  <div class="weeks">`.concat(R1("span",6,{class:"week block flex-1 leading-9 border-0 rounded-lg cursor-default text-center text-gray-900 font-semibold text-sm"}),`</div>
</div>`)),ei=function(){function t(e,a){u1(this,t),Object.assign(this,a,{picker:e,element:we('<div class="datepicker-view flex"></div>').firstChild,selected:[]}),this.init(this.picker.datepicker.config)}return f1(t,[{key:"init",value:function(a){a.pickLevel!==void 0&&(this.isMinView=this.id===a.pickLevel),this.setOptions(a),this.updateFocus(),this.updateSelection()}},{key:"performBeforeHook",value:function(a,n,i){var h=this.beforeShow(new Date(i));switch(E2(h)){case"boolean":h={enabled:h};break;case"string":h={classes:h}}if(h){if(h.enabled===!1&&(a.classList.add("disabled"),p1(this.disabled,n)),h.classes){var c,l=h.classes.split(/\s+/);(c=a.classList).add.apply(c,Sa(l)),l.includes("disabled")&&p1(this.disabled,n)}h.content&&w5(a,h.content)}}}])}(),S5=function(t){function e(a){return u1(this,e),Gr(this,e,[a,{id:0,name:"days",cellClass:"day"}])}return Xr(e,t),f1(e,[{key:"init",value:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(i){var h=we(A5).firstChild;this.dow=h.firstChild,this.grid=h.lastChild,this.element.appendChild(h)}xa(Be(e.prototype),"init",this).call(this,n)}},{key:"setOptions",value:function(n){var i=this,h;if(xe(n,"minDate")&&(this.minDate=n.minDate),xe(n,"maxDate")&&(this.maxDate=n.maxDate),n.datesDisabled&&(this.datesDisabled=n.datesDisabled),n.daysOfWeekDisabled&&(this.daysOfWeekDisabled=n.daysOfWeekDisabled,h=!0),n.daysOfWeekHighlighted&&(this.daysOfWeekHighlighted=n.daysOfWeekHighlighted),n.todayHighlight!==void 0&&(this.todayHighlight=n.todayHighlight),n.weekStart!==void 0&&(this.weekStart=n.weekStart,this.weekEnd=n.weekEnd,h=!0),n.locale){var c=this.locale=n.locale;this.dayNames=c.daysMin,this.switchLabelFormat=c.titleFormat,h=!0}if(n.beforeShowDay!==void 0&&(this.beforeShow=typeof n.beforeShowDay=="function"?n.beforeShowDay:void 0),n.calendarWeeks!==void 0)if(n.calendarWeeks&&!this.calendarWeeks){var l=we(H5).firstChild;this.calendarWeeks={element:l,dow:l.firstChild,weeks:l.lastChild},this.element.insertBefore(l,this.element.firstChild)}else this.calendarWeeks&&!n.calendarWeeks&&(this.element.removeChild(this.calendarWeeks.element),this.calendarWeeks=null);n.showDaysOfWeek!==void 0&&(n.showDaysOfWeek?(fa(this.dow),this.calendarWeeks&&fa(this.calendarWeeks.dow)):(ua(this.dow),this.calendarWeeks&&ua(this.calendarWeeks.dow))),h&&Array.from(this.dow.children).forEach(function(v,y){var g=(i.weekStart+y)%7;v.textContent=i.dayNames[g],v.className=i.daysOfWeekDisabled.includes(g)?"dow disabled text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400 cursor-not-allowed":"dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400"})}},{key:"updateFocus",value:function(){var n=new Date(this.picker.viewDate),i=n.getFullYear(),h=n.getMonth(),c=Re(i,h,1),l=V2(c,this.weekStart,this.weekStart);this.first=c,this.last=Re(i,h+1,0),this.start=l,this.focused=this.picker.viewDate}},{key:"updateSelection",value:function(){var n=this.picker.datepicker,i=n.dates,h=n.rangepicker;this.selected=i,h&&(this.range=h.dates)}},{key:"render",value:function(){var n=this;this.today=this.todayHighlight?v1():void 0,this.disabled=Sa(this.datesDisabled);var i=ba(this.focused,this.switchLabelFormat,this.locale);if(this.picker.setViewSwitchLabel(i),this.picker.setPrevBtnDisabled(this.first<=this.minDate),this.picker.setNextBtnDisabled(this.last>=this.maxDate),this.calendarWeeks){var h=V2(this.first,1,1);Array.from(this.calendarWeeks.weeks.children).forEach(function(c,l){c.textContent=M5(v5(h,l))})}Array.from(this.grid.children).forEach(function(c,l){var v=c.classList,y=L1(n.start,l),g=new Date(y),C=g.getDay();if(c.className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm ".concat(n.cellClass),c.dataset.date=y,c.textContent=g.getDate(),y<n.first?v.add("prev","text-gray-500","dark:text-white"):y>n.last&&v.add("next","text-gray-500","dark:text-white"),n.today===y&&v.add("today","bg-gray-100","dark:bg-gray-600"),(y<n.minDate||y>n.maxDate||n.disabled.includes(y))&&(v.add("disabled","cursor-not-allowed","text-gray-400","dark:text-gray-500"),v.remove("hover:bg-gray-100","dark:hover:bg-gray-600","text-gray-900","dark:text-white","cursor-pointer")),n.daysOfWeekDisabled.includes(C)&&(v.add("disabled","cursor-not-allowed","text-gray-400","dark:text-gray-500"),v.remove("hover:bg-gray-100","dark:hover:bg-gray-600","text-gray-900","dark:text-white","cursor-pointer"),p1(n.disabled,y)),n.daysOfWeekHighlighted.includes(C)&&v.add("highlighted"),n.range){var I=Ft(n.range,2),R=I[0],k=I[1];y>R&&y<k&&(v.add("range","bg-gray-200","dark:bg-gray-600"),v.remove("rounded-lg","rounded-l-lg","rounded-r-lg")),y===R&&(v.add("range-start","bg-gray-100","dark:bg-gray-600","rounded-l-lg"),v.remove("rounded-lg","rounded-r-lg")),y===k&&(v.add("range-end","bg-gray-100","dark:bg-gray-600","rounded-r-lg"),v.remove("rounded-lg","rounded-l-lg"))}n.selected.includes(y)&&(v.add("selected","bg-blue-700","!bg-primary-700","text-white","dark:bg-blue-600","dark:!bg-primary-600","dark:text-white"),v.remove("text-gray-900","text-gray-500","hover:bg-gray-100","dark:text-white","dark:hover:bg-gray-600","dark:bg-gray-600","bg-gray-100","bg-gray-200")),y===n.focused&&v.add("focused"),n.beforeShow&&n.performBeforeHook(c,y,y)})}},{key:"refresh",value:function(){var n=this,i=this.range||[],h=Ft(i,2),c=h[0],l=h[1];this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach(function(v){v.classList.remove("range","range-start","range-end","selected","bg-blue-700","!bg-primary-700","text-white","dark:bg-blue-600","dark:!bg-primary-600","dark:text-white","focused"),v.classList.add("text-gray-900","rounded-lg","dark:text-white")}),Array.from(this.grid.children).forEach(function(v){var y=Number(v.dataset.date),g=v.classList;g.remove("bg-gray-200","dark:bg-gray-600","rounded-l-lg","rounded-r-lg"),y>c&&y<l&&(g.add("range","bg-gray-200","dark:bg-gray-600"),g.remove("rounded-lg")),y===c&&(g.add("range-start","bg-gray-200","dark:bg-gray-600","rounded-l-lg"),g.remove("rounded-lg")),y===l&&(g.add("range-end","bg-gray-200","dark:bg-gray-600","rounded-r-lg"),g.remove("rounded-lg")),n.selected.includes(y)&&(g.add("selected","bg-blue-700","!bg-primary-700","text-white","dark:bg-blue-600","dark:!bg-primary-600","dark:text-white"),g.remove("text-gray-900","hover:bg-gray-100","dark:text-white","dark:hover:bg-gray-600","bg-gray-100","bg-gray-200","dark:bg-gray-600")),y===n.focused&&g.add("focused")})}},{key:"refreshFocus",value:function(){var n=Math.round((this.focused-this.start)/864e5);this.grid.querySelectorAll(".focused").forEach(function(i){i.classList.remove("focused")}),this.grid.children[n].classList.add("focused")}}])}(ei);function B0(t,e){if(!(!t||!t[0]||!t[1])){var a=Ft(t,2),n=Ft(a[0],2),i=n[0],h=n[1],c=Ft(a[1],2),l=c[0],v=c[1];if(!(i>e||l<e))return[i===e?h:-1,l===e?v:12]}}var k5=function(t){function e(a){return u1(this,e),Gr(this,e,[a,{id:1,name:"months",cellClass:"month"}])}return Xr(e,t),f1(e,[{key:"init",value:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;i&&(this.grid=this.element,this.element.classList.add("months","datepicker-grid","w-64","grid","grid-cols-4"),this.grid.appendChild(we(R1("span",12,{"data-month":function(c){return c}})))),xa(Be(e.prototype),"init",this).call(this,n)}},{key:"setOptions",value:function(n){if(n.locale&&(this.monthNames=n.locale.monthsShort),xe(n,"minDate"))if(n.minDate===void 0)this.minYear=this.minMonth=this.minDate=void 0;else{var i=new Date(n.minDate);this.minYear=i.getFullYear(),this.minMonth=i.getMonth(),this.minDate=i.setDate(1)}if(xe(n,"maxDate"))if(n.maxDate===void 0)this.maxYear=this.maxMonth=this.maxDate=void 0;else{var h=new Date(n.maxDate);this.maxYear=h.getFullYear(),this.maxMonth=h.getMonth(),this.maxDate=Re(this.maxYear,this.maxMonth+1,0)}n.beforeShowMonth!==void 0&&(this.beforeShow=typeof n.beforeShowMonth=="function"?n.beforeShowMonth:void 0)}},{key:"updateFocus",value:function(){var n=new Date(this.picker.viewDate);this.year=n.getFullYear(),this.focused=n.getMonth()}},{key:"updateSelection",value:function(){var n=this.picker.datepicker,i=n.dates,h=n.rangepicker;this.selected=i.reduce(function(c,l){var v=new Date(l),y=v.getFullYear(),g=v.getMonth();return c[y]===void 0?c[y]=[g]:p1(c[y],g),c},{}),h&&h.dates&&(this.range=h.dates.map(function(c){var l=new Date(c);return isNaN(l)?void 0:[l.getFullYear(),l.getMonth()]}))}},{key:"render",value:function(){var n=this;this.disabled=[],this.picker.setViewSwitchLabel(this.year),this.picker.setPrevBtnDisabled(this.year<=this.minYear),this.picker.setNextBtnDisabled(this.year>=this.maxYear);var i=this.selected[this.year]||[],h=this.year<this.minYear||this.year>this.maxYear,c=this.year===this.minYear,l=this.year===this.maxYear,v=B0(this.range,this.year);Array.from(this.grid.children).forEach(function(y,g){var C=y.classList,I=Re(n.year,g,1);if(y.className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm ".concat(n.cellClass),n.isMinView&&(y.dataset.date=I),y.textContent=n.monthNames[g],(h||c&&g<n.minMonth||l&&g>n.maxMonth)&&C.add("disabled"),v){var R=Ft(v,2),k=R[0],V=R[1];g>k&&g<V&&C.add("range"),g===k&&C.add("range-start"),g===V&&C.add("range-end")}i.includes(g)&&(C.add("selected","bg-blue-700","!bg-primary-700","text-white","dark:bg-blue-600","dark:!bg-primary-600","dark:text-white"),C.remove("text-gray-900","hover:bg-gray-100","dark:text-white","dark:hover:bg-gray-600")),g===n.focused&&C.add("focused"),n.beforeShow&&n.performBeforeHook(y,g,I)})}},{key:"refresh",value:function(){var n=this,i=this.selected[this.year]||[],h=B0(this.range,this.year)||[],c=Ft(h,2),l=c[0],v=c[1];this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach(function(y){y.classList.remove("range","range-start","range-end","selected","bg-blue-700","!bg-primary-700","dark:bg-blue-600","dark:!bg-primary-700","dark:text-white","text-white","focused"),y.classList.add("text-gray-900","hover:bg-gray-100","dark:text-white","dark:hover:bg-gray-600")}),Array.from(this.grid.children).forEach(function(y,g){var C=y.classList;g>l&&g<v&&C.add("range"),g===l&&C.add("range-start"),g===v&&C.add("range-end"),i.includes(g)&&(C.add("selected","bg-blue-700","!bg-primary-700","text-white","dark:bg-blue-600","dark:!bg-primary-600","dark:text-white"),C.remove("text-gray-900","hover:bg-gray-100","dark:text-white","dark:hover:bg-gray-600")),g===n.focused&&C.add("focused")})}},{key:"refreshFocus",value:function(){this.grid.querySelectorAll(".focused").forEach(function(n){n.classList.remove("focused")}),this.grid.children[this.focused].classList.add("focused")}}])}(ei);function E5(t){return Sa(t).reduce(function(e,a,n){return e+=n?a:a.toUpperCase()},"")}var F0=function(t){function e(a,n){return u1(this,e),Gr(this,e,[a,n])}return Xr(e,t),f1(e,[{key:"init",value:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;i&&(this.navStep=this.step*10,this.beforeShowOption="beforeShow".concat(E5(this.cellClass)),this.grid=this.element,this.element.classList.add(this.name,"datepicker-grid","w-64","grid","grid-cols-4"),this.grid.appendChild(we(R1("span",12)))),xa(Be(e.prototype),"init",this).call(this,n)}},{key:"setOptions",value:function(n){if(xe(n,"minDate")&&(n.minDate===void 0?this.minYear=this.minDate=void 0:(this.minYear=Je(n.minDate,this.step),this.minDate=Re(this.minYear,0,1))),xe(n,"maxDate")&&(n.maxDate===void 0?this.maxYear=this.maxDate=void 0:(this.maxYear=Je(n.maxDate,this.step),this.maxDate=Re(this.maxYear,11,31))),n[this.beforeShowOption]!==void 0){var i=n[this.beforeShowOption];this.beforeShow=typeof i=="function"?i:void 0}}},{key:"updateFocus",value:function(){var n=new Date(this.picker.viewDate),i=Je(n,this.navStep),h=i+9*this.step;this.first=i,this.last=h,this.start=i-this.step,this.focused=Je(n,this.step)}},{key:"updateSelection",value:function(){var n=this,i=this.picker.datepicker,h=i.dates,c=i.rangepicker;this.selected=h.reduce(function(l,v){return p1(l,Je(v,n.step))},[]),c&&c.dates&&(this.range=c.dates.map(function(l){if(l!==void 0)return Je(l,n.step)}))}},{key:"render",value:function(){var n=this;this.disabled=[],this.picker.setViewSwitchLabel("".concat(this.first,"-").concat(this.last)),this.picker.setPrevBtnDisabled(this.first<=this.minYear),this.picker.setNextBtnDisabled(this.last>=this.maxYear),Array.from(this.grid.children).forEach(function(i,h){var c=i.classList,l=n.start+h*n.step,v=Re(l,0,1);if(i.className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm ".concat(n.cellClass),n.isMinView&&(i.dataset.date=v),i.textContent=i.dataset.year=l,h===0?c.add("prev"):h===11&&c.add("next"),(l<n.minYear||l>n.maxYear)&&c.add("disabled"),n.range){var y=Ft(n.range,2),g=y[0],C=y[1];l>g&&l<C&&c.add("range"),l===g&&c.add("range-start"),l===C&&c.add("range-end")}n.selected.includes(l)&&(c.add("selected","bg-blue-700","!bg-primary-700","text-white","dark:bg-blue-600","dark:!bg-primary-600","dark:text-white"),c.remove("text-gray-900","hover:bg-gray-100","dark:text-white","dark:hover:bg-gray-600")),l===n.focused&&c.add("focused"),n.beforeShow&&n.performBeforeHook(i,l,v)})}},{key:"refresh",value:function(){var n=this,i=this.range||[],h=Ft(i,2),c=h[0],l=h[1];this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach(function(v){v.classList.remove("range","range-start","range-end","selected","bg-blue-700","!bg-primary-700","text-white","dark:bg-blue-600","dark!bg-primary-600","dark:text-white","focused")}),Array.from(this.grid.children).forEach(function(v){var y=Number(v.textContent),g=v.classList;y>c&&y<l&&g.add("range"),y===c&&g.add("range-start"),y===l&&g.add("range-end"),n.selected.includes(y)&&(g.add("selected","bg-blue-700","!bg-primary-700","text-white","dark:bg-blue-600","dark:!bg-primary-600","dark:text-white"),g.remove("text-gray-900","hover:bg-gray-100","dark:text-white","dark:hover:bg-gray-600")),y===n.focused&&g.add("focused")})}},{key:"refreshFocus",value:function(){var n=Math.round((this.focused-this.start)/this.step);this.grid.querySelectorAll(".focused").forEach(function(i){i.classList.remove("focused")}),this.grid.children[n].classList.add("focused")}}])}(ei);function D1(t,e){var a={date:t.getDate(),viewDate:new Date(t.picker.viewDate),viewId:t.picker.currentView.id,datepicker:t};t.element.dispatchEvent(new CustomEvent(e,{detail:a}))}function O2(t,e){var a=t.config,n=a.minDate,i=a.maxDate,h=t.picker,c=h.currentView,l=h.viewDate,v;switch(c.id){case 0:v=L2(l,e);break;case 1:v=V1(l,e);break;default:v=V1(l,e*c.navStep)}v=Id(v,n,i),t.picker.changeFocus(v).render()}function jd(t){var e=t.picker.currentView.id;e!==t.config.maxView&&t.picker.changeView(e+1).render()}function Zd(t){t.config.updateOnBlur?t.update({autohide:!0}):(t.refresh("input"),t.hide())}function z0(t,e){var a=t.picker,n=new Date(a.viewDate),i=a.currentView.id,h=i===1?L2(n,e-n.getMonth()):V1(n,e-n.getFullYear());a.changeFocus(h).changeView(i-1).render()}function L5(t){var e=t.picker,a=v1();if(t.config.todayBtnMode===1){if(t.config.autohide){t.setDate(a);return}t.setDate(a,{render:!1}),e.update()}e.viewDate!==a&&e.changeFocus(a),e.changeView(0).render()}function V5(t){t.setDate({clear:!0})}function D5(t){jd(t)}function T5(t){O2(t,-1)}function O5(t){O2(t,1)}function P5(t,e){var a=qd(e,".datepicker-cell");if(!(!a||a.classList.contains("disabled"))){var n=t.picker.currentView,i=n.id,h=n.isMinView;h?t.setDate(Number(a.dataset.date)):i===1?z0(t,Number(a.dataset.month)):z0(t,Number(a.dataset.year))}}function I5(t){!t.inline&&!t.config.disableTouchKeyboard&&t.inputField.focus()}function N0(t,e){if(e.title!==void 0&&(e.title?(t.controls.title.textContent=e.title,fa(t.controls.title)):(t.controls.title.textContent="",ua(t.controls.title))),e.prevArrow){var a=t.controls.prevBtn;T2(a),e.prevArrow.forEach(function(l){a.appendChild(l.cloneNode(!0))})}if(e.nextArrow){var n=t.controls.nextBtn;T2(n),e.nextArrow.forEach(function(l){n.appendChild(l.cloneNode(!0))})}if(e.locale&&(t.controls.todayBtn.textContent=e.locale.today,t.controls.clearBtn.textContent=e.locale.clear),e.todayBtn!==void 0&&(e.todayBtn?fa(t.controls.todayBtn):ua(t.controls.todayBtn)),xe(e,"minDate")||xe(e,"maxDate")){var i=t.datepicker.config,h=i.minDate,c=i.maxDate;t.controls.todayBtn.disabled=!Jr(v1(),h,c)}e.clearBtn!==void 0&&(e.clearBtn?fa(t.controls.clearBtn):ua(t.controls.clearBtn))}function q0(t){var e=t.dates,a=t.config,n=e.length>0?Yr(e):a.defaultViewDate;return Id(n,a.minDate,a.maxDate)}function j0(t,e){var a=new Date(t.viewDate),n=new Date(e),i=t.currentView,h=i.id,c=i.year,l=i.first,v=i.last,y=n.getFullYear();switch(t.viewDate=e,y!==a.getFullYear()&&D1(t.datepicker,"changeYear"),n.getMonth()!==a.getMonth()&&D1(t.datepicker,"changeMonth"),h){case 0:return e<l||e>v;case 1:return y!==c;default:return y<l||y>v}}function On(t){return window.getComputedStyle(t).direction}var R5=function(){function t(e){u1(this,t),this.datepicker=e;var a=C5.replace(/%buttonClass%/g,e.config.buttonClass),n=this.element=we(a).firstChild,i=Ft(n.firstChild.children,3),h=i[0],c=i[1],l=i[2],v=h.firstElementChild,y=Ft(h.lastElementChild.children,3),g=y[0],C=y[1],I=y[2],R=Ft(l.firstChild.children,2),k=R[0],V=R[1],H={title:v,prevBtn:g,viewSwitch:C,nextBtn:I,todayBtn:k,clearBtn:V};this.main=c,this.controls=H;var T=e.inline?"inline":"dropdown";n.classList.add("datepicker-".concat(T)),T==="dropdown"&&n.classList.add("dropdown","absolute","top-0","left-0","z-50","pt-2"),N0(this,e.config),this.viewDate=q0(e),ti(e,[[n,"click",I5.bind(null,e),{capture:!0}],[c,"click",P5.bind(null,e)],[H.viewSwitch,"click",D5.bind(null,e)],[H.prevBtn,"click",T5.bind(null,e)],[H.nextBtn,"click",O5.bind(null,e)],[H.todayBtn,"click",L5.bind(null,e)],[H.clearBtn,"click",V5.bind(null,e)]]),this.views=[new S5(this),new k5(this),new F0(this,{id:2,name:"years",cellClass:"year",step:1}),new F0(this,{id:3,name:"decades",cellClass:"decade",step:10})],this.currentView=this.views[e.config.startView],this.currentView.render(),this.main.appendChild(this.currentView.element),e.config.container.appendChild(this.element)}return f1(t,[{key:"setOptions",value:function(a){N0(this,a),this.views.forEach(function(n){n.init(a,!1)}),this.currentView.render()}},{key:"detach",value:function(){this.datepicker.config.container.removeChild(this.element)}},{key:"show",value:function(){if(!this.active){this.element.classList.add("active","block"),this.element.classList.remove("hidden"),this.active=!0;var a=this.datepicker;if(!a.inline){var n=On(a.inputField);n!==On(a.config.container)?this.element.dir=n:this.element.dir&&this.element.removeAttribute("dir"),this.place(),a.config.disableTouchKeyboard&&a.inputField.blur()}D1(a,"show")}}},{key:"hide",value:function(){this.active&&(this.datepicker.exitEditMode(),this.element.classList.remove("active","block"),this.element.classList.add("active","block","hidden"),this.active=!1,D1(this.datepicker,"hide"))}},{key:"place",value:function(){var a=this.element,n=a.classList,i=a.style,h=this.datepicker,c=h.config,l=h.inputField,v=c.container,y=this.element.getBoundingClientRect(),g=y.width,C=y.height,I=v.getBoundingClientRect(),R=I.left,k=I.top,V=I.width,H=l.getBoundingClientRect(),T=H.left,j=H.top,Z=H.width,z=H.height,U=c.orientation,G=U.x,d=U.y,it,W,nt;v===document.body?(it=window.scrollY,W=T+window.scrollX,nt=j+it):(it=v.scrollTop,W=T-R,nt=j-k+it),G==="auto"&&(W<0?(G="left",W=10):W+g>V?G="right":G=On(l)==="rtl"?"right":"left"),G==="right"&&(W-=g-Z),d==="auto"&&(d=nt-C<it?"bottom":"top"),d==="top"?nt-=C:nt+=z,n.remove("datepicker-orient-top","datepicker-orient-bottom","datepicker-orient-right","datepicker-orient-left"),n.add("datepicker-orient-".concat(d),"datepicker-orient-".concat(G)),i.top=nt&&"".concat(nt,"px"),i.left=W&&"".concat(W,"px")}},{key:"setViewSwitchLabel",value:function(a){this.controls.viewSwitch.textContent=a}},{key:"setPrevBtnDisabled",value:function(a){this.controls.prevBtn.disabled=a}},{key:"setNextBtnDisabled",value:function(a){this.controls.nextBtn.disabled=a}},{key:"changeView",value:function(a){var n=this.currentView,i=this.views[a];return i.id!==n.id&&(this.currentView=i,this._renderMethod="render",D1(this.datepicker,"changeView"),this.main.replaceChild(i.element,n.element)),this}},{key:"changeFocus",value:function(a){return this._renderMethod=j0(this,a)?"render":"refreshFocus",this.views.forEach(function(n){n.updateFocus()}),this}},{key:"update",value:function(){var a=q0(this.datepicker);return this._renderMethod=j0(this,a)?"render":"refresh",this.views.forEach(function(n){n.updateFocus(),n.updateSelection()}),this}},{key:"render",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,n=a&&this._renderMethod||"render";delete this._renderMethod,this.currentView[n]()}}])}();function Ud(t,e,a,n,i,h){if(Jr(t,i,h)){if(n(t)){var c=e(t,a);return Ud(c,e,a,n,i,h)}return t}}function Xa(t,e,a,n){var i=t.picker,h=i.currentView,c=h.step||1,l=i.viewDate,v,y;switch(h.id){case 0:n?l=L1(l,a*7):e.ctrlKey||e.metaKey?l=V1(l,a):l=L1(l,a),v=L1,y=function(C){return h.disabled.includes(C)};break;case 1:l=L2(l,n?a*4:a),v=L2,y=function(C){var I=new Date(C),R=h.year,k=h.disabled;return I.getFullYear()===R&&k.includes(I.getMonth())};break;default:l=V1(l,a*(n?4:1)*c),v=V1,y=function(C){return h.disabled.includes(Je(C,c))}}l=Ud(l,v,a<0?-c:c,y,h.minDate,h.maxDate),l!==void 0&&i.changeFocus(l).render()}function B5(t,e){if(e.key==="Tab"){Zd(t);return}var a=t.picker,n=a.currentView,i=n.id,h=n.isMinView;if(a.active)if(t.editMode)switch(e.key){case"Escape":a.hide();break;case"Enter":t.exitEditMode({update:!0,autohide:t.config.autohide});break;default:return}else switch(e.key){case"Escape":a.hide();break;case"ArrowLeft":if(e.ctrlKey||e.metaKey)O2(t,-1);else if(e.shiftKey){t.enterEditMode();return}else Xa(t,e,-1,!1);break;case"ArrowRight":if(e.ctrlKey||e.metaKey)O2(t,1);else if(e.shiftKey){t.enterEditMode();return}else Xa(t,e,1,!1);break;case"ArrowUp":if(e.ctrlKey||e.metaKey)jd(t);else if(e.shiftKey){t.enterEditMode();return}else Xa(t,e,-1,!0);break;case"ArrowDown":if(e.shiftKey&&!e.ctrlKey&&!e.metaKey){t.enterEditMode();return}Xa(t,e,1,!0);break;case"Enter":h?t.setDate(a.viewDate):a.changeView(i-1).render();break;case"Backspace":case"Delete":t.enterEditMode();return;default:e.key.length===1&&!e.ctrlKey&&!e.metaKey&&t.enterEditMode();return}else switch(e.key){case"ArrowDown":case"Escape":a.show();break;case"Enter":t.update();break;default:return}e.preventDefault(),e.stopPropagation()}function F5(t){t.config.showOnFocus&&!t._showing&&t.show()}function z5(t,e){var a=e.target;(t.picker.active||t.config.showOnClick)&&(a._active=a===document.activeElement,a._clicking=setTimeout(function(){delete a._active,delete a._clicking},2e3))}function N5(t,e){var a=e.target;a._clicking&&(clearTimeout(a._clicking),delete a._clicking,a._active&&t.enterEditMode(),delete a._active,t.config.showOnClick&&t.show())}function q5(t,e){e.clipboardData.types.includes("text/plain")&&t.enterEditMode()}function j5(t,e){var a=t.element;if(a===document.activeElement){var n=t.picker.element;qd(e,function(i){return i===a||i===n})||Zd(t)}}function Wd(t,e){return t.map(function(a){return ba(a,e.format,e.locale)}).join(e.dateDelimiter)}function $d(t,e){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n=t.config,i=t.dates,h=t.rangepicker;if(e.length===0)return a?[]:void 0;var c=h&&t===h.datepickers[1],l=e.reduce(function(v,y){var g=wa(y,n.format,n.locale);if(g===void 0)return v;if(n.pickLevel>0){var C=new Date(g);n.pickLevel===1?g=c?C.setMonth(C.getMonth()+1,0):C.setDate(1):g=c?C.setFullYear(C.getFullYear()+1,0,0):C.setMonth(0,1)}return Jr(g,n.minDate,n.maxDate)&&!v.includes(g)&&!n.datesDisabled.includes(g)&&!n.daysOfWeekDisabled.includes(new Date(g).getDay())&&v.push(g),v},[]);if(l.length!==0)return n.multidate&&!a&&(l=l.reduce(function(v,y){return i.includes(y)||v.push(y),v},i.filter(function(v){return!l.includes(v)}))),n.maxNumberOfDates&&l.length>n.maxNumberOfDates?l.slice(n.maxNumberOfDates*-1):l}function P2(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:3,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,n=t.config,i=t.picker,h=t.inputField;if(e&2){var c=i.active?n.pickLevel:n.startView;i.update().changeView(c).render(a)}e&1&&h&&(h.value=Wd(t.dates,n))}function Z0(t,e,a){var n=a.clear,i=a.render,h=a.autohide;i===void 0&&(i=!0),i?h===void 0&&(h=t.config.autohide):h=!1;var c=$d(t,e,n);c&&(c.toString()!==t.dates.toString()?(t.dates=c,P2(t,i?3:1),D1(t,"changeDate")):P2(t,1),h&&t.hide())}var s2=function(){function t(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0;u1(this,t),e.datepicker=this,this.element=e;var i=this.config=Object.assign({buttonClass:a.buttonClass&&String(a.buttonClass)||"button",container:document.body,defaultViewDate:v1(),maxDate:void 0,minDate:void 0},Tn(ka,this));this._options=a,Object.assign(i,Tn(a,this));var h=this.inline=e.tagName!=="INPUT",c,l;if(h)i.container=e,l=En(e.dataset.date,i.dateDelimiter),delete e.dataset.date;else{var v=a.container?document.querySelector(a.container):null;v&&(i.container=v),c=this.inputField=e,c.classList.add("datepicker-input"),l=En(c.value,i.dateDelimiter)}if(n){var y=n.inputs.indexOf(c),g=n.datepickers;if(y<0||y>1||!Array.isArray(g))throw Error("Invalid rangepicker object.");g[y]=this,Object.defineProperty(this,"rangepicker",{get:function(){return n}})}this.dates=[];var C=$d(this,l);C&&C.length>0&&(this.dates=C),c&&(c.value=Wd(this.dates,i));var I=this.picker=new R5(this);if(h)this.show();else{var R=j5.bind(null,this),k=[[c,"keydown",B5.bind(null,this)],[c,"focus",F5.bind(null,this)],[c,"mousedown",z5.bind(null,this)],[c,"click",N5.bind(null,this)],[c,"paste",q5.bind(null,this)],[document,"mousedown",R],[document,"touchstart",R],[window,"resize",I.place.bind(I)]];ti(this,k)}}return f1(t,[{key:"active",get:function(){return!!(this.picker&&this.picker.active)}},{key:"pickerElement",get:function(){return this.picker?this.picker.element:void 0}},{key:"setOptions",value:function(a){var n=this.picker,i=Tn(a,this);Object.assign(this._options,a),Object.assign(this.config,i),n.setOptions(i),P2(this,3)}},{key:"show",value:function(){if(this.inputField){if(this.inputField.disabled)return;this.inputField!==document.activeElement&&(this._showing=!0,this.inputField.focus(),delete this._showing)}this.picker.show()}},{key:"hide",value:function(){this.inline||(this.picker.hide(),this.picker.update().changeView(this.config.startView).render())}},{key:"destroy",value:function(){return this.hide(),zd(this),this.picker.detach(),this.inline||this.inputField.classList.remove("datepicker-input"),delete this.element.datepicker,this}},{key:"getDate",value:function(){var a=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0,i=n?function(h){return ba(h,n,a.config.locale)}:function(h){return new Date(h)};if(this.config.multidate)return this.dates.map(i);if(this.dates.length>0)return i(this.dates[0])}},{key:"setDate",value:function(){for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];var h=[].concat(n),c={},l=Yr(n);E2(l)==="object"&&!Array.isArray(l)&&!(l instanceof Date)&&l&&Object.assign(c,h.pop());var v=Array.isArray(h[0])?h[0]:h;Z0(this,v,c)}},{key:"update",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;if(!this.inline){var n={clear:!0,autohide:!!(a&&a.autohide)},i=En(this.inputField.value,this.config.dateDelimiter);Z0(this,i,n)}}},{key:"refresh",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;a&&typeof a!="string"&&(n=a,a=void 0);var i;a==="picker"?i=2:a==="input"?i=1:i=3,P2(this,i,!n)}},{key:"enterEditMode",value:function(){this.inline||!this.picker.active||this.editMode||(this.editMode=!0,this.inputField.classList.add("in-edit","border-blue-700","!border-primary-700"))}},{key:"exitEditMode",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;if(!(this.inline||!this.editMode)){var n=Object.assign({update:!1},a);delete this.editMode,this.inputField.classList.remove("in-edit","border-blue-700","!border-primary-700"),n.update&&this.update(n)}}}],[{key:"formatDate",value:function(a,n,i){return ba(a,n,i&&ra[i]||ra.en)}},{key:"parseDate",value:function(a,n,i){return wa(a,n,i&&ra[i]||ra.en)}},{key:"locales",get:function(){return ra}}])}();function U0(t){var e=Object.assign({},t);return delete e.inputs,delete e.allowOneSidedRange,delete e.maxNumberOfDates,e}function W0(t,e,a,n){ti(t,[[a,"changeDate",e]]),new s2(a,n,t)}function ia(t,e){if(!t._updating){t._updating=!0;var a=e.target;if(a.datepicker!==void 0){var n=t.datepickers,i={render:!1},h=t.inputs.indexOf(a),c=h===0?1:0,l=n[h].dates[0],v=n[c].dates[0];l!==void 0&&v!==void 0?h===0&&l>v?(n[0].setDate(v,i),n[1].setDate(l,i)):h===1&&l<v&&(n[0].setDate(l,i),n[1].setDate(v,i)):t.allowOneSidedRange||(l!==void 0||v!==void 0)&&(i.clear=!0,n[c].setDate(n[h].dates,i)),n[0].picker.update().render(),n[1].picker.update().render(),delete t._updating}}}var Pn=function(){function t(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};u1(this,t);var n=Array.isArray(a.inputs)?a.inputs:Array.from(e.querySelectorAll("input"));if(!(n.length<2)){e.rangepicker=this,this.element=e,this.inputs=n.slice(0,2),this.allowOneSidedRange=!!a.allowOneSidedRange;var i=ia.bind(null,this),h=U0(a),c=[];Object.defineProperty(this,"datepickers",{get:function(){return c}}),W0(this,i,this.inputs[0],h),W0(this,i,this.inputs[1],h),Object.freeze(c),c[0].dates.length>0?ia(this,{target:this.inputs[0]}):c[1].dates.length>0&&ia(this,{target:this.inputs[1]})}}return f1(t,[{key:"dates",get:function(){return this.datepickers.length===2?[this.datepickers[0].dates[0],this.datepickers[1].dates[0]]:void 0}},{key:"setOptions",value:function(a){this.allowOneSidedRange=!!a.allowOneSidedRange;var n=U0(a);this.datepickers[0].setOptions(n),this.datepickers[1].setOptions(n)}},{key:"destroy",value:function(){this.datepickers[0].destroy(),this.datepickers[1].destroy(),zd(this),delete this.element.rangepicker}},{key:"getDates",value:function(){var a=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0,i=n?function(h){return ba(h,n,a.datepickers[0].config.locale)}:function(h){return new Date(h)};return this.dates.map(function(h){return h===void 0?h:i(h)})}},{key:"setDates",value:function(a,n){var i=Ft(this.datepickers,2),h=i[0],c=i[1],l=this.dates;this._updating=!0,h.setDate(a),c.setDate(n),delete this._updating,c.dates[0]!==l[1]?ia(this,{target:this.inputs[1]}):h.dates[0]!==l[0]&&ia(this,{target:this.inputs[0]})}}])}(),I2=globalThis&&globalThis.__assign||function(){return I2=Object.assign||function(t){for(var e,a=1,n=arguments.length;a<n;a++){e=arguments[a];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},I2.apply(this,arguments)},Ut={defaultDatepickerId:null,autohide:!1,format:"mm/dd/yyyy",maxDate:null,minDate:null,orientation:"bottom",buttons:!1,autoSelectToday:0,title:null,language:"en",rangePicker:!1,onShow:function(){},onHide:function(){}},Z5={id:null,override:!0},Kd=function(){function t(e,a,n){e===void 0&&(e=null),a===void 0&&(a=Ut),n===void 0&&(n=Z5),this._instanceId=n.id?n.id:e.id,this._datepickerEl=e,this._datepickerInstance=null,this._options=I2(I2({},Ut),a),this._initialized=!1,this.init(),rt.addInstance("Datepicker",this,this._instanceId,n.override)}return t.prototype.init=function(){this._datepickerEl&&!this._initialized&&(this._options.rangePicker?this._datepickerInstance=new Pn(this._datepickerEl,this._getDatepickerOptions(this._options)):this._datepickerInstance=new s2(this._datepickerEl,this._getDatepickerOptions(this._options)),this._initialized=!0)},t.prototype.destroy=function(){this._initialized&&(this._initialized=!1,this._datepickerInstance.destroy())},t.prototype.removeInstance=function(){this.destroy(),rt.removeInstance("Datepicker",this._instanceId)},t.prototype.destroyAndRemoveInstance=function(){this.destroy(),this.removeInstance()},t.prototype.getDatepickerInstance=function(){return this._datepickerInstance},t.prototype.getDate=function(){if(this._options.rangePicker&&this._datepickerInstance instanceof Pn)return this._datepickerInstance.getDates();if(!this._options.rangePicker&&this._datepickerInstance instanceof s2)return this._datepickerInstance.getDate()},t.prototype.setDate=function(e){if(this._options.rangePicker&&this._datepickerInstance instanceof Pn)return this._datepickerInstance.setDates(e);if(!this._options.rangePicker&&this._datepickerInstance instanceof s2)return this._datepickerInstance.setDate(e)},t.prototype.show=function(){this._datepickerInstance.show(),this._options.onShow(this)},t.prototype.hide=function(){this._datepickerInstance.hide(),this._options.onHide(this)},t.prototype._getDatepickerOptions=function(e){var a={};return e.buttons&&(a.todayBtn=!0,a.clearBtn=!0,e.autoSelectToday&&(a.todayBtnMode=1)),e.autohide&&(a.autohide=!0),e.format&&(a.format=e.format),e.maxDate&&(a.maxDate=e.maxDate),e.minDate&&(a.minDate=e.minDate),e.orientation&&(a.orientation=e.orientation),e.title&&(a.title=e.title),e.language&&(a.language=e.language),a},t.prototype.updateOnShow=function(e){this._options.onShow=e},t.prototype.updateOnHide=function(e){this._options.onHide=e},t}();function ai(){document.querySelectorAll("[datepicker], [inline-datepicker], [date-rangepicker]").forEach(function(t){if(t){var e=t.hasAttribute("datepicker-buttons"),a=t.hasAttribute("datepicker-autoselect-today"),n=t.hasAttribute("datepicker-autohide"),i=t.getAttribute("datepicker-format"),h=t.getAttribute("datepicker-max-date"),c=t.getAttribute("datepicker-min-date"),l=t.getAttribute("datepicker-orientation"),v=t.getAttribute("datepicker-title"),y=t.getAttribute("datepicker-language"),g=t.hasAttribute("date-rangepicker");new Kd(t,{buttons:e||Ut.buttons,autoSelectToday:a||Ut.autoSelectToday,autohide:n||Ut.autohide,format:i||Ut.format,maxDate:h||Ut.maxDate,minDate:c||Ut.minDate,orientation:l||Ut.orientation,title:v||Ut.title,language:y||Ut.language,rangePicker:g||Ut.rangePicker})}else console.error("The datepicker element does not exist. Please check the datepicker attribute.")})}typeof window<"u"&&(window.Datepicker=Kd,window.initDatepickers=ai);function U5(){kr(),Er(),Lr(),Vr(),zr(),Nr(),qr(),jr(),Zr(),Ur(),Wr(),$r(),Kr(),ai()}typeof window<"u"&&(window.initFlowbite=U5);var W5=new R4("load",[kr,Er,Lr,Vr,zr,Nr,qr,jr,Zr,Ur,Wr,$r,Kr,ai]);W5.init();var $5=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function K5(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Gd={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */(function(t){(function(e,a){t.exports=e.document?a(e,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return a(n)}})(typeof window<"u"?window:$5,function(e,a){var n=[],i=Object.getPrototypeOf,h=n.slice,c=n.flat?function(r){return n.flat.call(r)}:function(r){return n.concat.apply([],r)},l=n.push,v=n.indexOf,y={},g=y.toString,C=y.hasOwnProperty,I=C.toString,R=I.call(Object),k={},V=function(o){return typeof o=="function"&&typeof o.nodeType!="number"&&typeof o.item!="function"},H=function(o){return o!=null&&o===o.window},T=e.document,j={type:!0,src:!0,nonce:!0,noModule:!0};function Z(r,o,s){s=s||T;var p,u,f=s.createElement("script");if(f.text=r,o)for(p in j)u=o[p]||o.getAttribute&&o.getAttribute(p),u&&f.setAttribute(p,u);s.head.appendChild(f).parentNode.removeChild(f)}function z(r){return r==null?r+"":typeof r=="object"||typeof r=="function"?y[g.call(r)]||"object":typeof r}var U="3.7.1",G=/HTML$/i,d=function(r,o){return new d.fn.init(r,o)};d.fn=d.prototype={jquery:U,constructor:d,length:0,toArray:function(){return h.call(this)},get:function(r){return r==null?h.call(this):r<0?this[r+this.length]:this[r]},pushStack:function(r){var o=d.merge(this.constructor(),r);return o.prevObject=this,o},each:function(r){return d.each(this,r)},map:function(r){return this.pushStack(d.map(this,function(o,s){return r.call(o,s,o)}))},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(d.grep(this,function(r,o){return(o+1)%2}))},odd:function(){return this.pushStack(d.grep(this,function(r,o){return o%2}))},eq:function(r){var o=this.length,s=+r+(r<0?o:0);return this.pushStack(s>=0&&s<o?[this[s]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:n.sort,splice:n.splice},d.extend=d.fn.extend=function(){var r,o,s,p,u,f,M=arguments[0]||{},w=1,x=arguments.length,_=!1;for(typeof M=="boolean"&&(_=M,M=arguments[w]||{},w++),typeof M!="object"&&!V(M)&&(M={}),w===x&&(M=this,w--);w<x;w++)if((r=arguments[w])!=null)for(o in r)p=r[o],!(o==="__proto__"||M===p)&&(_&&p&&(d.isPlainObject(p)||(u=Array.isArray(p)))?(s=M[o],u&&!Array.isArray(s)?f=[]:!u&&!d.isPlainObject(s)?f={}:f=s,u=!1,M[o]=d.extend(_,f,p)):p!==void 0&&(M[o]=p));return M},d.extend({expando:"jQuery"+(U+Math.random()).replace(/\D/g,""),isReady:!0,error:function(r){throw new Error(r)},noop:function(){},isPlainObject:function(r){var o,s;return!r||g.call(r)!=="[object Object]"?!1:(o=i(r),o?(s=C.call(o,"constructor")&&o.constructor,typeof s=="function"&&I.call(s)===R):!0)},isEmptyObject:function(r){var o;for(o in r)return!1;return!0},globalEval:function(r,o,s){Z(r,{nonce:o&&o.nonce},s)},each:function(r,o){var s,p=0;if(it(r))for(s=r.length;p<s&&o.call(r[p],p,r[p])!==!1;p++);else for(p in r)if(o.call(r[p],p,r[p])===!1)break;return r},text:function(r){var o,s="",p=0,u=r.nodeType;if(!u)for(;o=r[p++];)s+=d.text(o);return u===1||u===11?r.textContent:u===9?r.documentElement.textContent:u===3||u===4?r.nodeValue:s},makeArray:function(r,o){var s=o||[];return r!=null&&(it(Object(r))?d.merge(s,typeof r=="string"?[r]:r):l.call(s,r)),s},inArray:function(r,o,s){return o==null?-1:v.call(o,r,s)},isXMLDoc:function(r){var o=r&&r.namespaceURI,s=r&&(r.ownerDocument||r).documentElement;return!G.test(o||s&&s.nodeName||"HTML")},merge:function(r,o){for(var s=+o.length,p=0,u=r.length;p<s;p++)r[u++]=o[p];return r.length=u,r},grep:function(r,o,s){for(var p,u=[],f=0,M=r.length,w=!s;f<M;f++)p=!o(r[f],f),p!==w&&u.push(r[f]);return u},map:function(r,o,s){var p,u,f=0,M=[];if(it(r))for(p=r.length;f<p;f++)u=o(r[f],f,s),u!=null&&M.push(u);else for(f in r)u=o(r[f],f,s),u!=null&&M.push(u);return c(M)},guid:1,support:k}),typeof Symbol=="function"&&(d.fn[Symbol.iterator]=n[Symbol.iterator]),d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(r,o){y["[object "+o+"]"]=o.toLowerCase()});function it(r){var o=!!r&&"length"in r&&r.length,s=z(r);return V(r)||H(r)?!1:s==="array"||o===0||typeof o=="number"&&o>0&&o-1 in r}function W(r,o){return r.nodeName&&r.nodeName.toLowerCase()===o.toLowerCase()}var nt=n.pop,lt=n.sort,At=n.splice,J="[\\x20\\t\\r\\n\\f]",Ht=new RegExp("^"+J+"+|((?:^|[^\\\\])(?:\\\\.)*)"+J+"+$","g");d.contains=function(r,o){var s=o&&o.parentNode;return r===s||!!(s&&s.nodeType===1&&(r.contains?r.contains(s):r.compareDocumentPosition&&r.compareDocumentPosition(s)&16))};var Mt=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function bt(r,o){return o?r==="\0"?"�":r.slice(0,-1)+"\\"+r.charCodeAt(r.length-1).toString(16)+" ":"\\"+r}d.escapeSelector=function(r){return(r+"").replace(Mt,bt)};var vt=T,_e=l;(function(){var r,o,s,p,u,f=_e,M,w,x,_,L,P=d.expando,S=0,B=0,Q=Na(),ct=Na(),at=Na(),Ct=Na(),wt=function(m,b){return m===b&&(u=!0),0},re="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ie="(?:\\\\[\\da-fA-F]{1,6}"+J+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",st="\\["+J+"*("+ie+")(?:"+J+"*([*^$|!~]?=)"+J+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+ie+"))|)"+J+"*\\]",Xe=":("+ie+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+st+")*)|.*)\\)|)",dt=new RegExp(J+"+","g"),gt=new RegExp("^"+J+"*,"+J+"*"),Q1=new RegExp("^"+J+"*([>+~]|"+J+")"+J+"*"),gn=new RegExp(J+"|>"),oe=new RegExp(Xe),ta=new RegExp("^"+ie+"$"),he={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie+"|[*])"),ATTR:new RegExp("^"+st),PSEUDO:new RegExp("^"+Xe),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+J+"*(even|odd|(([+-]|)(\\d*)n|)"+J+"*(?:([+-]|)"+J+"*(\\d+)|))"+J+"*\\)|)","i"),bool:new RegExp("^(?:"+re+")$","i"),needsContext:new RegExp("^"+J+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+J+"*((?:-\\d)?\\d*)"+J+"*\\)|)(?=[^-]|$)","i")},ke=/^(?:input|select|textarea|button)$/i,Ee=/^h\d$/i,jt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,mn=/[+~]/,ye=new RegExp("\\\\[\\da-fA-F]{1,6}"+J+"?|\\\\([^\\r\\n\\f])","g"),ge=function(m,b){var A="0x"+m.slice(1)-65536;return b||(A<0?String.fromCharCode(A+65536):String.fromCharCode(A>>10|55296,A&1023|56320))},Xl=function(){Le()},Yl=ja(function(m){return m.disabled===!0&&W(m,"fieldset")},{dir:"parentNode",next:"legend"});function Jl(){try{return M.activeElement}catch{}}try{f.apply(n=h.call(vt.childNodes),vt.childNodes),n[vt.childNodes.length].nodeType}catch{f={apply:function(b,A){_e.apply(b,h.call(A))},call:function(b){_e.apply(b,h.call(arguments,1))}}}function pt(m,b,A,E){var O,F,N,K,q,ot,Y,tt=b&&b.ownerDocument,ht=b?b.nodeType:9;if(A=A||[],typeof m!="string"||!m||ht!==1&&ht!==9&&ht!==11)return A;if(!E&&(Le(b),b=b||M,x)){if(ht!==11&&(q=jt.exec(m)))if(O=q[1]){if(ht===9)if(N=b.getElementById(O)){if(N.id===O)return f.call(A,N),A}else return A;else if(tt&&(N=tt.getElementById(O))&&pt.contains(b,N)&&N.id===O)return f.call(A,N),A}else{if(q[2])return f.apply(A,b.getElementsByTagName(m)),A;if((O=q[3])&&b.getElementsByClassName)return f.apply(A,b.getElementsByClassName(O)),A}if(!Ct[m+" "]&&(!_||!_.test(m))){if(Y=m,tt=b,ht===1&&(gn.test(m)||Q1.test(m))){for(tt=mn.test(m)&&xn(b.parentNode)||b,(tt!=b||!k.scope)&&((K=b.getAttribute("id"))?K=d.escapeSelector(K):b.setAttribute("id",K=P)),ot=ea(m),F=ot.length;F--;)ot[F]=(K?"#"+K:":scope")+" "+qa(ot[F]);Y=ot.join(",")}try{return f.apply(A,tt.querySelectorAll(Y)),A}catch{Ct(m,!0)}finally{K===P&&b.removeAttribute("id")}}}return n0(m.replace(Ht,"$1"),b,A,E)}function Na(){var m=[];function b(A,E){return m.push(A+" ")>o.cacheLength&&delete b[m.shift()],b[A+" "]=E}return b}function Jt(m){return m[P]=!0,m}function k1(m){var b=M.createElement("fieldset");try{return!!m(b)}catch{return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function Ql(m){return function(b){return W(b,"input")&&b.type===m}}function tu(m){return function(b){return(W(b,"input")||W(b,"button"))&&b.type===m}}function e0(m){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===m:b.disabled===m:b.isDisabled===m||b.isDisabled!==!m&&Yl(b)===m:b.disabled===m:"label"in b?b.disabled===m:!1}}function Ye(m){return Jt(function(b){return b=+b,Jt(function(A,E){for(var O,F=m([],A.length,b),N=F.length;N--;)A[O=F[N]]&&(A[O]=!(E[O]=A[O]))})})}function xn(m){return m&&typeof m.getElementsByTagName<"u"&&m}function Le(m){var b,A=m?m.ownerDocument||m:vt;return A==M||A.nodeType!==9||!A.documentElement||(M=A,w=M.documentElement,x=!d.isXMLDoc(M),L=w.matches||w.webkitMatchesSelector||w.msMatchesSelector,w.msMatchesSelector&&vt!=M&&(b=M.defaultView)&&b.top!==b&&b.addEventListener("unload",Xl),k.getById=k1(function(E){return w.appendChild(E).id=d.expando,!M.getElementsByName||!M.getElementsByName(d.expando).length}),k.disconnectedMatch=k1(function(E){return L.call(E,"*")}),k.scope=k1(function(){return M.querySelectorAll(":scope")}),k.cssHas=k1(function(){try{return M.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),k.getById?(o.filter.ID=function(E){var O=E.replace(ye,ge);return function(F){return F.getAttribute("id")===O}},o.find.ID=function(E,O){if(typeof O.getElementById<"u"&&x){var F=O.getElementById(E);return F?[F]:[]}}):(o.filter.ID=function(E){var O=E.replace(ye,ge);return function(F){var N=typeof F.getAttributeNode<"u"&&F.getAttributeNode("id");return N&&N.value===O}},o.find.ID=function(E,O){if(typeof O.getElementById<"u"&&x){var F,N,K,q=O.getElementById(E);if(q){if(F=q.getAttributeNode("id"),F&&F.value===E)return[q];for(K=O.getElementsByName(E),N=0;q=K[N++];)if(F=q.getAttributeNode("id"),F&&F.value===E)return[q]}return[]}}),o.find.TAG=function(E,O){return typeof O.getElementsByTagName<"u"?O.getElementsByTagName(E):O.querySelectorAll(E)},o.find.CLASS=function(E,O){if(typeof O.getElementsByClassName<"u"&&x)return O.getElementsByClassName(E)},_=[],k1(function(E){var O;w.appendChild(E).innerHTML="<a id='"+P+"' href='' disabled='disabled'></a><select id='"+P+"-\r\\' disabled='disabled'><option selected=''></option></select>",E.querySelectorAll("[selected]").length||_.push("\\["+J+"*(?:value|"+re+")"),E.querySelectorAll("[id~="+P+"-]").length||_.push("~="),E.querySelectorAll("a#"+P+"+*").length||_.push(".#.+[+~]"),E.querySelectorAll(":checked").length||_.push(":checked"),O=M.createElement("input"),O.setAttribute("type","hidden"),E.appendChild(O).setAttribute("name","D"),w.appendChild(E).disabled=!0,E.querySelectorAll(":disabled").length!==2&&_.push(":enabled",":disabled"),O=M.createElement("input"),O.setAttribute("name",""),E.appendChild(O),E.querySelectorAll("[name='']").length||_.push("\\["+J+"*name"+J+"*="+J+`*(?:''|"")`)}),k.cssHas||_.push(":has"),_=_.length&&new RegExp(_.join("|")),wt=function(E,O){if(E===O)return u=!0,0;var F=!E.compareDocumentPosition-!O.compareDocumentPosition;return F||(F=(E.ownerDocument||E)==(O.ownerDocument||O)?E.compareDocumentPosition(O):1,F&1||!k.sortDetached&&O.compareDocumentPosition(E)===F?E===M||E.ownerDocument==vt&&pt.contains(vt,E)?-1:O===M||O.ownerDocument==vt&&pt.contains(vt,O)?1:p?v.call(p,E)-v.call(p,O):0:F&4?-1:1)}),M}pt.matches=function(m,b){return pt(m,null,null,b)},pt.matchesSelector=function(m,b){if(Le(m),x&&!Ct[b+" "]&&(!_||!_.test(b)))try{var A=L.call(m,b);if(A||k.disconnectedMatch||m.document&&m.document.nodeType!==11)return A}catch{Ct(b,!0)}return pt(b,M,null,[m]).length>0},pt.contains=function(m,b){return(m.ownerDocument||m)!=M&&Le(m),d.contains(m,b)},pt.attr=function(m,b){(m.ownerDocument||m)!=M&&Le(m);var A=o.attrHandle[b.toLowerCase()],E=A&&C.call(o.attrHandle,b.toLowerCase())?A(m,b,!x):void 0;return E!==void 0?E:m.getAttribute(b)},pt.error=function(m){throw new Error("Syntax error, unrecognized expression: "+m)},d.uniqueSort=function(m){var b,A=[],E=0,O=0;if(u=!k.sortStable,p=!k.sortStable&&h.call(m,0),lt.call(m,wt),u){for(;b=m[O++];)b===m[O]&&(E=A.push(O));for(;E--;)At.call(m,A[E],1)}return p=null,m},d.fn.uniqueSort=function(){return this.pushStack(d.uniqueSort(h.apply(this)))},o=d.expr={cacheLength:50,createPseudo:Jt,match:he,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(m){return m[1]=m[1].replace(ye,ge),m[3]=(m[3]||m[4]||m[5]||"").replace(ye,ge),m[2]==="~="&&(m[3]=" "+m[3]+" "),m.slice(0,4)},CHILD:function(m){return m[1]=m[1].toLowerCase(),m[1].slice(0,3)==="nth"?(m[3]||pt.error(m[0]),m[4]=+(m[4]?m[5]+(m[6]||1):2*(m[3]==="even"||m[3]==="odd")),m[5]=+(m[7]+m[8]||m[3]==="odd")):m[3]&&pt.error(m[0]),m},PSEUDO:function(m){var b,A=!m[6]&&m[2];return he.CHILD.test(m[0])?null:(m[3]?m[2]=m[4]||m[5]||"":A&&oe.test(A)&&(b=ea(A,!0))&&(b=A.indexOf(")",A.length-b)-A.length)&&(m[0]=m[0].slice(0,b),m[2]=A.slice(0,b)),m.slice(0,3))}},filter:{TAG:function(m){var b=m.replace(ye,ge).toLowerCase();return m==="*"?function(){return!0}:function(A){return W(A,b)}},CLASS:function(m){var b=Q[m+" "];return b||(b=new RegExp("(^|"+J+")"+m+"("+J+"|$)"))&&Q(m,function(A){return b.test(typeof A.className=="string"&&A.className||typeof A.getAttribute<"u"&&A.getAttribute("class")||"")})},ATTR:function(m,b,A){return function(E){var O=pt.attr(E,m);return O==null?b==="!=":b?(O+="",b==="="?O===A:b==="!="?O!==A:b==="^="?A&&O.indexOf(A)===0:b==="*="?A&&O.indexOf(A)>-1:b==="$="?A&&O.slice(-A.length)===A:b==="~="?(" "+O.replace(dt," ")+" ").indexOf(A)>-1:b==="|="?O===A||O.slice(0,A.length+1)===A+"-":!1):!0}},CHILD:function(m,b,A,E,O){var F=m.slice(0,3)!=="nth",N=m.slice(-4)!=="last",K=b==="of-type";return E===1&&O===0?function(q){return!!q.parentNode}:function(q,ot,Y){var tt,ht,X,ut,Tt,St=F!==N?"nextSibling":"previousSibling",Zt=q.parentNode,se=K&&q.nodeName.toLowerCase(),E1=!Y&&!K,kt=!1;if(Zt){if(F){for(;St;){for(X=q;X=X[St];)if(K?W(X,se):X.nodeType===1)return!1;Tt=St=m==="only"&&!Tt&&"nextSibling"}return!0}if(Tt=[N?Zt.firstChild:Zt.lastChild],N&&E1){for(ht=Zt[P]||(Zt[P]={}),tt=ht[m]||[],ut=tt[0]===S&&tt[1],kt=ut&&tt[2],X=ut&&Zt.childNodes[ut];X=++ut&&X&&X[St]||(kt=ut=0)||Tt.pop();)if(X.nodeType===1&&++kt&&X===q){ht[m]=[S,ut,kt];break}}else if(E1&&(ht=q[P]||(q[P]={}),tt=ht[m]||[],ut=tt[0]===S&&tt[1],kt=ut),kt===!1)for(;(X=++ut&&X&&X[St]||(kt=ut=0)||Tt.pop())&&!((K?W(X,se):X.nodeType===1)&&++kt&&(E1&&(ht=X[P]||(X[P]={}),ht[m]=[S,kt]),X===q)););return kt-=O,kt===E||kt%E===0&&kt/E>=0}}},PSEUDO:function(m,b){var A,E=o.pseudos[m]||o.setFilters[m.toLowerCase()]||pt.error("unsupported pseudo: "+m);return E[P]?E(b):E.length>1?(A=[m,m,"",b],o.setFilters.hasOwnProperty(m.toLowerCase())?Jt(function(O,F){for(var N,K=E(O,b),q=K.length;q--;)N=v.call(O,K[q]),O[N]=!(F[N]=K[q])}):function(O){return E(O,0,A)}):E}},pseudos:{not:Jt(function(m){var b=[],A=[],E=Cn(m.replace(Ht,"$1"));return E[P]?Jt(function(O,F,N,K){for(var q,ot=E(O,null,K,[]),Y=O.length;Y--;)(q=ot[Y])&&(O[Y]=!(F[Y]=q))}):function(O,F,N){return b[0]=O,E(b,null,N,A),b[0]=null,!A.pop()}}),has:Jt(function(m){return function(b){return pt(m,b).length>0}}),contains:Jt(function(m){return m=m.replace(ye,ge),function(b){return(b.textContent||d.text(b)).indexOf(m)>-1}}),lang:Jt(function(m){return ta.test(m||"")||pt.error("unsupported lang: "+m),m=m.replace(ye,ge).toLowerCase(),function(b){var A;do if(A=x?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return A=A.toLowerCase(),A===m||A.indexOf(m+"-")===0;while((b=b.parentNode)&&b.nodeType===1);return!1}}),target:function(m){var b=e.location&&e.location.hash;return b&&b.slice(1)===m.id},root:function(m){return m===w},focus:function(m){return m===Jl()&&M.hasFocus()&&!!(m.type||m.href||~m.tabIndex)},enabled:e0(!1),disabled:e0(!0),checked:function(m){return W(m,"input")&&!!m.checked||W(m,"option")&&!!m.selected},selected:function(m){return m.parentNode&&m.parentNode.selectedIndex,m.selected===!0},empty:function(m){for(m=m.firstChild;m;m=m.nextSibling)if(m.nodeType<6)return!1;return!0},parent:function(m){return!o.pseudos.empty(m)},header:function(m){return Ee.test(m.nodeName)},input:function(m){return ke.test(m.nodeName)},button:function(m){return W(m,"input")&&m.type==="button"||W(m,"button")},text:function(m){var b;return W(m,"input")&&m.type==="text"&&((b=m.getAttribute("type"))==null||b.toLowerCase()==="text")},first:Ye(function(){return[0]}),last:Ye(function(m,b){return[b-1]}),eq:Ye(function(m,b,A){return[A<0?A+b:A]}),even:Ye(function(m,b){for(var A=0;A<b;A+=2)m.push(A);return m}),odd:Ye(function(m,b){for(var A=1;A<b;A+=2)m.push(A);return m}),lt:Ye(function(m,b,A){var E;for(A<0?E=A+b:A>b?E=b:E=A;--E>=0;)m.push(E);return m}),gt:Ye(function(m,b,A){for(var E=A<0?A+b:A;++E<b;)m.push(E);return m})}},o.pseudos.nth=o.pseudos.eq;for(r in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[r]=Ql(r);for(r in{submit:!0,reset:!0})o.pseudos[r]=tu(r);function a0(){}a0.prototype=o.filters=o.pseudos,o.setFilters=new a0;function ea(m,b){var A,E,O,F,N,K,q,ot=ct[m+" "];if(ot)return b?0:ot.slice(0);for(N=m,K=[],q=o.preFilter;N;){(!A||(E=gt.exec(N)))&&(E&&(N=N.slice(E[0].length)||N),K.push(O=[])),A=!1,(E=Q1.exec(N))&&(A=E.shift(),O.push({value:A,type:E[0].replace(Ht," ")}),N=N.slice(A.length));for(F in o.filter)(E=he[F].exec(N))&&(!q[F]||(E=q[F](E)))&&(A=E.shift(),O.push({value:A,type:F,matches:E}),N=N.slice(A.length));if(!A)break}return b?N.length:N?pt.error(m):ct(m,K).slice(0)}function qa(m){for(var b=0,A=m.length,E="";b<A;b++)E+=m[b].value;return E}function ja(m,b,A){var E=b.dir,O=b.next,F=O||E,N=A&&F==="parentNode",K=B++;return b.first?function(q,ot,Y){for(;q=q[E];)if(q.nodeType===1||N)return m(q,ot,Y);return!1}:function(q,ot,Y){var tt,ht,X=[S,K];if(Y){for(;q=q[E];)if((q.nodeType===1||N)&&m(q,ot,Y))return!0}else for(;q=q[E];)if(q.nodeType===1||N)if(ht=q[P]||(q[P]={}),O&&W(q,O))q=q[E]||q;else{if((tt=ht[F])&&tt[0]===S&&tt[1]===K)return X[2]=tt[2];if(ht[F]=X,X[2]=m(q,ot,Y))return!0}return!1}}function wn(m){return m.length>1?function(b,A,E){for(var O=m.length;O--;)if(!m[O](b,A,E))return!1;return!0}:m[0]}function eu(m,b,A){for(var E=0,O=b.length;E<O;E++)pt(m,b[E],A);return A}function Za(m,b,A,E,O){for(var F,N=[],K=0,q=m.length,ot=b!=null;K<q;K++)(F=m[K])&&(!A||A(F,E,O))&&(N.push(F),ot&&b.push(K));return N}function bn(m,b,A,E,O,F){return E&&!E[P]&&(E=bn(E)),O&&!O[P]&&(O=bn(O,F)),Jt(function(N,K,q,ot){var Y,tt,ht,X,ut=[],Tt=[],St=K.length,Zt=N||eu(b||"*",q.nodeType?[q]:q,[]),se=m&&(N||!b)?Za(Zt,ut,m,q,ot):Zt;if(A?(X=O||(N?m:St||E)?[]:K,A(se,X,q,ot)):X=se,E)for(Y=Za(X,Tt),E(Y,[],q,ot),tt=Y.length;tt--;)(ht=Y[tt])&&(X[Tt[tt]]=!(se[Tt[tt]]=ht));if(N){if(O||m){if(O){for(Y=[],tt=X.length;tt--;)(ht=X[tt])&&Y.push(se[tt]=ht);O(null,X=[],Y,ot)}for(tt=X.length;tt--;)(ht=X[tt])&&(Y=O?v.call(N,ht):ut[tt])>-1&&(N[Y]=!(K[Y]=ht))}}else X=Za(X===K?X.splice(St,X.length):X),O?O(null,K,X,ot):f.apply(K,X)})}function _n(m){for(var b,A,E,O=m.length,F=o.relative[m[0].type],N=F||o.relative[" "],K=F?1:0,q=ja(function(tt){return tt===b},N,!0),ot=ja(function(tt){return v.call(b,tt)>-1},N,!0),Y=[function(tt,ht,X){var ut=!F&&(X||ht!=s)||((b=ht).nodeType?q(tt,ht,X):ot(tt,ht,X));return b=null,ut}];K<O;K++)if(A=o.relative[m[K].type])Y=[ja(wn(Y),A)];else{if(A=o.filter[m[K].type].apply(null,m[K].matches),A[P]){for(E=++K;E<O&&!o.relative[m[E].type];E++);return bn(K>1&&wn(Y),K>1&&qa(m.slice(0,K-1).concat({value:m[K-2].type===" "?"*":""})).replace(Ht,"$1"),A,K<E&&_n(m.slice(K,E)),E<O&&_n(m=m.slice(E)),E<O&&qa(m))}Y.push(A)}return wn(Y)}function au(m,b){var A=b.length>0,E=m.length>0,O=function(F,N,K,q,ot){var Y,tt,ht,X=0,ut="0",Tt=F&&[],St=[],Zt=s,se=F||E&&o.find.TAG("*",ot),E1=S+=Zt==null?1:Math.random()||.1,kt=se.length;for(ot&&(s=N==M||N||ot);ut!==kt&&(Y=se[ut])!=null;ut++){if(E&&Y){for(tt=0,!N&&Y.ownerDocument!=M&&(Le(Y),K=!x);ht=m[tt++];)if(ht(Y,N||M,K)){f.call(q,Y);break}ot&&(S=E1)}A&&((Y=!ht&&Y)&&X--,F&&Tt.push(Y))}if(X+=ut,A&&ut!==X){for(tt=0;ht=b[tt++];)ht(Tt,St,N,K);if(F){if(X>0)for(;ut--;)Tt[ut]||St[ut]||(St[ut]=nt.call(q));St=Za(St)}f.apply(q,St),ot&&!F&&St.length>0&&X+b.length>1&&d.uniqueSort(q)}return ot&&(S=E1,s=Zt),Tt};return A?Jt(O):O}function Cn(m,b){var A,E=[],O=[],F=at[m+" "];if(!F){for(b||(b=ea(m)),A=b.length;A--;)F=_n(b[A]),F[P]?E.push(F):O.push(F);F=at(m,au(O,E)),F.selector=m}return F}function n0(m,b,A,E){var O,F,N,K,q,ot=typeof m=="function"&&m,Y=!E&&ea(m=ot.selector||m);if(A=A||[],Y.length===1){if(F=Y[0]=Y[0].slice(0),F.length>2&&(N=F[0]).type==="ID"&&b.nodeType===9&&x&&o.relative[F[1].type]){if(b=(o.find.ID(N.matches[0].replace(ye,ge),b)||[])[0],b)ot&&(b=b.parentNode);else return A;m=m.slice(F.shift().value.length)}for(O=he.needsContext.test(m)?0:F.length;O--&&(N=F[O],!o.relative[K=N.type]);)if((q=o.find[K])&&(E=q(N.matches[0].replace(ye,ge),mn.test(F[0].type)&&xn(b.parentNode)||b))){if(F.splice(O,1),m=E.length&&qa(F),!m)return f.apply(A,E),A;break}}return(ot||Cn(m,Y))(E,b,!x,A,!b||mn.test(m)&&xn(b.parentNode)||b),A}k.sortStable=P.split("").sort(wt).join("")===P,Le(),k.sortDetached=k1(function(m){return m.compareDocumentPosition(M.createElement("fieldset"))&1}),d.find=pt,d.expr[":"]=d.expr.pseudos,d.unique=d.uniqueSort,pt.compile=Cn,pt.select=n0,pt.setDocument=Le,pt.tokenize=ea,pt.escape=d.escapeSelector,pt.getText=d.text,pt.isXML=d.isXMLDoc,pt.selectors=d.expr,pt.support=d.support,pt.uniqueSort=d.uniqueSort})();var Lt=function(r,o,s){for(var p=[],u=s!==void 0;(r=r[o])&&r.nodeType!==9;)if(r.nodeType===1){if(u&&d(r).is(s))break;p.push(r)}return p},je=function(r,o){for(var s=[];r;r=r.nextSibling)r.nodeType===1&&r!==o&&s.push(r);return s},y1=d.expr.match.needsContext,Ce=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Ae(r,o,s){return V(o)?d.grep(r,function(p,u){return!!o.call(p,u,p)!==s}):o.nodeType?d.grep(r,function(p){return p===o!==s}):typeof o!="string"?d.grep(r,function(p){return v.call(o,p)>-1!==s}):d.filter(o,r,s)}d.filter=function(r,o,s){var p=o[0];return s&&(r=":not("+r+")"),o.length===1&&p.nodeType===1?d.find.matchesSelector(p,r)?[p]:[]:d.find.matches(r,d.grep(o,function(u){return u.nodeType===1}))},d.fn.extend({find:function(r){var o,s,p=this.length,u=this;if(typeof r!="string")return this.pushStack(d(r).filter(function(){for(o=0;o<p;o++)if(d.contains(u[o],this))return!0}));for(s=this.pushStack([]),o=0;o<p;o++)d.find(r,u[o],s);return p>1?d.uniqueSort(s):s},filter:function(r){return this.pushStack(Ae(this,r||[],!1))},not:function(r){return this.pushStack(Ae(this,r||[],!0))},is:function(r){return!!Ae(this,typeof r=="string"&&y1.test(r)?d(r):r||[],!1).length}});var le,ne=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Ze=d.fn.init=function(r,o,s){var p,u;if(!r)return this;if(s=s||le,typeof r=="string")if(r[0]==="<"&&r[r.length-1]===">"&&r.length>=3?p=[null,r,null]:p=ne.exec(r),p&&(p[1]||!o))if(p[1]){if(o=o instanceof d?o[0]:o,d.merge(this,d.parseHTML(p[1],o&&o.nodeType?o.ownerDocument||o:T,!0)),Ce.test(p[1])&&d.isPlainObject(o))for(p in o)V(this[p])?this[p](o[p]):this.attr(p,o[p]);return this}else return u=T.getElementById(p[2]),u&&(this[0]=u,this.length=1),this;else return!o||o.jquery?(o||s).find(r):this.constructor(o).find(r);else{if(r.nodeType)return this[0]=r,this.length=1,this;if(V(r))return s.ready!==void 0?s.ready(r):r(d)}return d.makeArray(r,this)};Ze.prototype=d.fn,le=d(T);var g1=/^(?:parents|prev(?:Until|All))/,ue={children:!0,contents:!0,next:!0,prev:!0};d.fn.extend({has:function(r){var o=d(r,this),s=o.length;return this.filter(function(){for(var p=0;p<s;p++)if(d.contains(this,o[p]))return!0})},closest:function(r,o){var s,p=0,u=this.length,f=[],M=typeof r!="string"&&d(r);if(!y1.test(r)){for(;p<u;p++)for(s=this[p];s&&s!==o;s=s.parentNode)if(s.nodeType<11&&(M?M.index(s)>-1:s.nodeType===1&&d.find.matchesSelector(s,r))){f.push(s);break}}return this.pushStack(f.length>1?d.uniqueSort(f):f)},index:function(r){return r?typeof r=="string"?v.call(d(r),this[0]):v.call(this,r.jquery?r[0]:r):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(r,o){return this.pushStack(d.uniqueSort(d.merge(this.get(),d(r,o))))},addBack:function(r){return this.add(r==null?this.prevObject:this.prevObject.filter(r))}});function m1(r,o){for(;(r=r[o])&&r.nodeType!==1;);return r}d.each({parent:function(r){var o=r.parentNode;return o&&o.nodeType!==11?o:null},parents:function(r){return Lt(r,"parentNode")},parentsUntil:function(r,o,s){return Lt(r,"parentNode",s)},next:function(r){return m1(r,"nextSibling")},prev:function(r){return m1(r,"previousSibling")},nextAll:function(r){return Lt(r,"nextSibling")},prevAll:function(r){return Lt(r,"previousSibling")},nextUntil:function(r,o,s){return Lt(r,"nextSibling",s)},prevUntil:function(r,o,s){return Lt(r,"previousSibling",s)},siblings:function(r){return je((r.parentNode||{}).firstChild,r)},children:function(r){return je(r.firstChild)},contents:function(r){return r.contentDocument!=null&&i(r.contentDocument)?r.contentDocument:(W(r,"template")&&(r=r.content||r),d.merge([],r.childNodes))}},function(r,o){d.fn[r]=function(s,p){var u=d.map(this,o,s);return r.slice(-5)!=="Until"&&(p=s),p&&typeof p=="string"&&(u=d.filter(p,u)),this.length>1&&(ue[r]||d.uniqueSort(u),g1.test(r)&&u.reverse()),this.pushStack(u)}});var Nt=/[^\x20\t\r\n\f]+/g;function W1(r){var o={};return d.each(r.match(Nt)||[],function(s,p){o[p]=!0}),o}d.Callbacks=function(r){r=typeof r=="string"?W1(r):d.extend({},r);var o,s,p,u,f=[],M=[],w=-1,x=function(){for(u=u||r.once,p=o=!0;M.length;w=-1)for(s=M.shift();++w<f.length;)f[w].apply(s[0],s[1])===!1&&r.stopOnFalse&&(w=f.length,s=!1);r.memory||(s=!1),o=!1,u&&(s?f=[]:f="")},_={add:function(){return f&&(s&&!o&&(w=f.length-1,M.push(s)),function L(P){d.each(P,function(S,B){V(B)?(!r.unique||!_.has(B))&&f.push(B):B&&B.length&&z(B)!=="string"&&L(B)})}(arguments),s&&!o&&x()),this},remove:function(){return d.each(arguments,function(L,P){for(var S;(S=d.inArray(P,f,S))>-1;)f.splice(S,1),S<=w&&w--}),this},has:function(L){return L?d.inArray(L,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return u=M=[],f=s="",this},disabled:function(){return!f},lock:function(){return u=M=[],!s&&!o&&(f=s=""),this},locked:function(){return!!u},fireWith:function(L,P){return u||(P=P||[],P=[L,P.slice?P.slice():P],M.push(P),o||x()),this},fire:function(){return _.fireWith(this,arguments),this},fired:function(){return!!p}};return _};function He(r){return r}function Ue(r){throw r}function Ta(r,o,s,p){var u;try{r&&V(u=r.promise)?u.call(r).done(o).fail(s):r&&V(u=r.then)?u.call(r,o,s):o.apply(void 0,[r].slice(p))}catch(f){s.apply(void 0,[f])}}d.extend({Deferred:function(r){var o=[["notify","progress",d.Callbacks("memory"),d.Callbacks("memory"),2],["resolve","done",d.Callbacks("once memory"),d.Callbacks("once memory"),0,"resolved"],["reject","fail",d.Callbacks("once memory"),d.Callbacks("once memory"),1,"rejected"]],s="pending",p={state:function(){return s},always:function(){return u.done(arguments).fail(arguments),this},catch:function(f){return p.then(null,f)},pipe:function(){var f=arguments;return d.Deferred(function(M){d.each(o,function(w,x){var _=V(f[x[4]])&&f[x[4]];u[x[1]](function(){var L=_&&_.apply(this,arguments);L&&V(L.promise)?L.promise().progress(M.notify).done(M.resolve).fail(M.reject):M[x[0]+"With"](this,_?[L]:arguments)})}),f=null}).promise()},then:function(f,M,w){var x=0;function _(L,P,S,B){return function(){var Q=this,ct=arguments,at=function(){var wt,re;if(!(L<x)){if(wt=S.apply(Q,ct),wt===P.promise())throw new TypeError("Thenable self-resolution");re=wt&&(typeof wt=="object"||typeof wt=="function")&&wt.then,V(re)?B?re.call(wt,_(x,P,He,B),_(x,P,Ue,B)):(x++,re.call(wt,_(x,P,He,B),_(x,P,Ue,B),_(x,P,He,P.notifyWith))):(S!==He&&(Q=void 0,ct=[wt]),(B||P.resolveWith)(Q,ct))}},Ct=B?at:function(){try{at()}catch(wt){d.Deferred.exceptionHook&&d.Deferred.exceptionHook(wt,Ct.error),L+1>=x&&(S!==Ue&&(Q=void 0,ct=[wt]),P.rejectWith(Q,ct))}};L?Ct():(d.Deferred.getErrorHook?Ct.error=d.Deferred.getErrorHook():d.Deferred.getStackHook&&(Ct.error=d.Deferred.getStackHook()),e.setTimeout(Ct))}}return d.Deferred(function(L){o[0][3].add(_(0,L,V(w)?w:He,L.notifyWith)),o[1][3].add(_(0,L,V(f)?f:He)),o[2][3].add(_(0,L,V(M)?M:Ue))}).promise()},promise:function(f){return f!=null?d.extend(f,p):p}},u={};return d.each(o,function(f,M){var w=M[2],x=M[5];p[M[1]]=w.add,x&&w.add(function(){s=x},o[3-f][2].disable,o[3-f][3].disable,o[0][2].lock,o[0][3].lock),w.add(M[3].fire),u[M[0]]=function(){return u[M[0]+"With"](this===u?void 0:this,arguments),this},u[M[0]+"With"]=w.fireWith}),p.promise(u),r&&r.call(u,u),u},when:function(r){var o=arguments.length,s=o,p=Array(s),u=h.call(arguments),f=d.Deferred(),M=function(w){return function(x){p[w]=this,u[w]=arguments.length>1?h.call(arguments):x,--o||f.resolveWith(p,u)}};if(o<=1&&(Ta(r,f.done(M(s)).resolve,f.reject,!o),f.state()==="pending"||V(u[s]&&u[s].then)))return f.then();for(;s--;)Ta(u[s],M(s),f.reject);return f.promise()}});var en=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;d.Deferred.exceptionHook=function(r,o){e.console&&e.console.warn&&r&&en.test(r.name)&&e.console.warn("jQuery.Deferred exception: "+r.message,r.stack,o)},d.readyException=function(r){e.setTimeout(function(){throw r})};var x1=d.Deferred();d.fn.ready=function(r){return x1.then(r).catch(function(o){d.readyException(o)}),this},d.extend({isReady:!1,readyWait:1,ready:function(r){(r===!0?--d.readyWait:d.isReady)||(d.isReady=!0,!(r!==!0&&--d.readyWait>0)&&x1.resolveWith(T,[d]))}}),d.ready.then=x1.then;function We(){T.removeEventListener("DOMContentLoaded",We),e.removeEventListener("load",We),d.ready()}T.readyState==="complete"||T.readyState!=="loading"&&!T.documentElement.doScroll?e.setTimeout(d.ready):(T.addEventListener("DOMContentLoaded",We),e.addEventListener("load",We));var Xt=function(r,o,s,p,u,f,M){var w=0,x=r.length,_=s==null;if(z(s)==="object"){u=!0;for(w in s)Xt(r,o,w,s[w],!0,f,M)}else if(p!==void 0&&(u=!0,V(p)||(M=!0),_&&(M?(o.call(r,p),o=null):(_=o,o=function(L,P,S){return _.call(d(L),S)})),o))for(;w<x;w++)o(r[w],s,M?p:p.call(r[w],w,o(r[w],s)));return u?r:_?o.call(r):x?o(r[0],s):f},an=/^-ms-/,fe=/-([a-z])/g;function w1(r,o){return o.toUpperCase()}function Rt(r){return r.replace(an,"ms-").replace(fe,w1)}var Se=function(r){return r.nodeType===1||r.nodeType===9||!+r.nodeType};function ve(){this.expando=d.expando+ve.uid++}ve.uid=1,ve.prototype={cache:function(r){var o=r[this.expando];return o||(o={},Se(r)&&(r.nodeType?r[this.expando]=o:Object.defineProperty(r,this.expando,{value:o,configurable:!0}))),o},set:function(r,o,s){var p,u=this.cache(r);if(typeof o=="string")u[Rt(o)]=s;else for(p in o)u[Rt(p)]=o[p];return u},get:function(r,o){return o===void 0?this.cache(r):r[this.expando]&&r[this.expando][Rt(o)]},access:function(r,o,s){return o===void 0||o&&typeof o=="string"&&s===void 0?this.get(r,o):(this.set(r,o,s),s!==void 0?s:o)},remove:function(r,o){var s,p=r[this.expando];if(p!==void 0){if(o!==void 0)for(Array.isArray(o)?o=o.map(Rt):(o=Rt(o),o=o in p?[o]:o.match(Nt)||[]),s=o.length;s--;)delete p[o[s]];(o===void 0||d.isEmptyObject(p))&&(r.nodeType?r[this.expando]=void 0:delete r[this.expando])}},hasData:function(r){var o=r[this.expando];return o!==void 0&&!d.isEmptyObject(o)}};var $=new ve,_t=new ve,Oa=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Pa=/[A-Z]/g;function ul(r){return r==="true"?!0:r==="false"?!1:r==="null"?null:r===+r+""?+r:Oa.test(r)?JSON.parse(r):r}function Ci(r,o,s){var p;if(s===void 0&&r.nodeType===1)if(p="data-"+o.replace(Pa,"-$&").toLowerCase(),s=r.getAttribute(p),typeof s=="string"){try{s=ul(s)}catch{}_t.set(r,o,s)}else s=void 0;return s}d.extend({hasData:function(r){return _t.hasData(r)||$.hasData(r)},data:function(r,o,s){return _t.access(r,o,s)},removeData:function(r,o){_t.remove(r,o)},_data:function(r,o,s){return $.access(r,o,s)},_removeData:function(r,o){$.remove(r,o)}}),d.fn.extend({data:function(r,o){var s,p,u,f=this[0],M=f&&f.attributes;if(r===void 0){if(this.length&&(u=_t.get(f),f.nodeType===1&&!$.get(f,"hasDataAttrs"))){for(s=M.length;s--;)M[s]&&(p=M[s].name,p.indexOf("data-")===0&&(p=Rt(p.slice(5)),Ci(f,p,u[p])));$.set(f,"hasDataAttrs",!0)}return u}return typeof r=="object"?this.each(function(){_t.set(this,r)}):Xt(this,function(w){var x;if(f&&w===void 0)return x=_t.get(f,r),x!==void 0||(x=Ci(f,r),x!==void 0)?x:void 0;this.each(function(){_t.set(this,r,w)})},null,o,arguments.length>1,null,!0)},removeData:function(r){return this.each(function(){_t.remove(this,r)})}}),d.extend({queue:function(r,o,s){var p;if(r)return o=(o||"fx")+"queue",p=$.get(r,o),s&&(!p||Array.isArray(s)?p=$.access(r,o,d.makeArray(s)):p.push(s)),p||[]},dequeue:function(r,o){o=o||"fx";var s=d.queue(r,o),p=s.length,u=s.shift(),f=d._queueHooks(r,o),M=function(){d.dequeue(r,o)};u==="inprogress"&&(u=s.shift(),p--),u&&(o==="fx"&&s.unshift("inprogress"),delete f.stop,u.call(r,M,f)),!p&&f&&f.empty.fire()},_queueHooks:function(r,o){var s=o+"queueHooks";return $.get(r,s)||$.access(r,s,{empty:d.Callbacks("once memory").add(function(){$.remove(r,[o+"queue",s])})})}}),d.fn.extend({queue:function(r,o){var s=2;return typeof r!="string"&&(o=r,r="fx",s--),arguments.length<s?d.queue(this[0],r):o===void 0?this:this.each(function(){var p=d.queue(this,r,o);d._queueHooks(this,r),r==="fx"&&p[0]!=="inprogress"&&d.dequeue(this,r)})},dequeue:function(r){return this.each(function(){d.dequeue(this,r)})},clearQueue:function(r){return this.queue(r||"fx",[])},promise:function(r,o){var s,p=1,u=d.Deferred(),f=this,M=this.length,w=function(){--p||u.resolveWith(f,[f])};for(typeof r!="string"&&(o=r,r=void 0),r=r||"fx";M--;)s=$.get(f[M],r+"queueHooks"),s&&s.empty&&(p++,s.empty.add(w));return w(),u.promise(o)}});var Ai=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,$1=new RegExp("^(?:([+-])=|)("+Ai+")([a-z%]*)$","i"),Me=["Top","Right","Bottom","Left"],$e=T.documentElement,b1=function(r){return d.contains(r.ownerDocument,r)},fl={composed:!0};$e.getRootNode&&(b1=function(r){return d.contains(r.ownerDocument,r)||r.getRootNode(fl)===r.ownerDocument});var Ia=function(r,o){return r=o||r,r.style.display==="none"||r.style.display===""&&b1(r)&&d.css(r,"display")==="none"};function Hi(r,o,s,p){var u,f,M=20,w=p?function(){return p.cur()}:function(){return d.css(r,o,"")},x=w(),_=s&&s[3]||(d.cssNumber[o]?"":"px"),L=r.nodeType&&(d.cssNumber[o]||_!=="px"&&+x)&&$1.exec(d.css(r,o));if(L&&L[3]!==_){for(x=x/2,_=_||L[3],L=+x||1;M--;)d.style(r,o,L+_),(1-f)*(1-(f=w()/x||.5))<=0&&(M=0),L=L/f;L=L*2,d.style(r,o,L+_),s=s||[]}return s&&(L=+L||+x||0,u=s[1]?L+(s[1]+1)*s[2]:+s[2],p&&(p.unit=_,p.start=L,p.end=u)),u}var Si={};function vl(r){var o,s=r.ownerDocument,p=r.nodeName,u=Si[p];return u||(o=s.body.appendChild(s.createElement(p)),u=d.css(o,"display"),o.parentNode.removeChild(o),u==="none"&&(u="block"),Si[p]=u,u)}function _1(r,o){for(var s,p,u=[],f=0,M=r.length;f<M;f++)p=r[f],p.style&&(s=p.style.display,o?(s==="none"&&(u[f]=$.get(p,"display")||null,u[f]||(p.style.display="")),p.style.display===""&&Ia(p)&&(u[f]=vl(p))):s!=="none"&&(u[f]="none",$.set(p,"display",s)));for(f=0;f<M;f++)u[f]!=null&&(r[f].style.display=u[f]);return r}d.fn.extend({show:function(){return _1(this,!0)},hide:function(){return _1(this)},toggle:function(r){return typeof r=="boolean"?r?this.show():this.hide():this.each(function(){Ia(this)?d(this).show():d(this).hide()})}});var K1=/^(?:checkbox|radio)$/i,ki=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ei=/^$|^module$|\/(?:java|ecma)script/i;(function(){var r=T.createDocumentFragment(),o=r.appendChild(T.createElement("div")),s=T.createElement("input");s.setAttribute("type","radio"),s.setAttribute("checked","checked"),s.setAttribute("name","t"),o.appendChild(s),k.checkClone=o.cloneNode(!0).cloneNode(!0).lastChild.checked,o.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!o.cloneNode(!0).lastChild.defaultValue,o.innerHTML="<option></option>",k.option=!!o.lastChild})();var qt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};qt.tbody=qt.tfoot=qt.colgroup=qt.caption=qt.thead,qt.th=qt.td,k.option||(qt.optgroup=qt.option=[1,"<select multiple='multiple'>","</select>"]);function Vt(r,o){var s;return typeof r.getElementsByTagName<"u"?s=r.getElementsByTagName(o||"*"):typeof r.querySelectorAll<"u"?s=r.querySelectorAll(o||"*"):s=[],o===void 0||o&&W(r,o)?d.merge([r],s):s}function nn(r,o){for(var s=0,p=r.length;s<p;s++)$.set(r[s],"globalEval",!o||$.get(o[s],"globalEval"))}var Ml=/<|&#?\w+;/;function Li(r,o,s,p,u){for(var f,M,w,x,_,L,P=o.createDocumentFragment(),S=[],B=0,Q=r.length;B<Q;B++)if(f=r[B],f||f===0)if(z(f)==="object")d.merge(S,f.nodeType?[f]:f);else if(!Ml.test(f))S.push(o.createTextNode(f));else{for(M=M||P.appendChild(o.createElement("div")),w=(ki.exec(f)||["",""])[1].toLowerCase(),x=qt[w]||qt._default,M.innerHTML=x[1]+d.htmlPrefilter(f)+x[2],L=x[0];L--;)M=M.lastChild;d.merge(S,M.childNodes),M=P.firstChild,M.textContent=""}for(P.textContent="",B=0;f=S[B++];){if(p&&d.inArray(f,p)>-1){u&&u.push(f);continue}if(_=b1(f),M=Vt(P.appendChild(f),"script"),_&&nn(M),s)for(L=0;f=M[L++];)Ei.test(f.type||"")&&s.push(f)}return P}var Vi=/^([^.]*)(?:\.(.+)|)/;function C1(){return!0}function A1(){return!1}function rn(r,o,s,p,u,f){var M,w;if(typeof o=="object"){typeof s!="string"&&(p=p||s,s=void 0);for(w in o)rn(r,w,s,p,o[w],f);return r}if(p==null&&u==null?(u=s,p=s=void 0):u==null&&(typeof s=="string"?(u=p,p=void 0):(u=p,p=s,s=void 0)),u===!1)u=A1;else if(!u)return r;return f===1&&(M=u,u=function(x){return d().off(x),M.apply(this,arguments)},u.guid=M.guid||(M.guid=d.guid++)),r.each(function(){d.event.add(this,o,u,p,s)})}d.event={global:{},add:function(r,o,s,p,u){var f,M,w,x,_,L,P,S,B,Q,ct,at=$.get(r);if(Se(r))for(s.handler&&(f=s,s=f.handler,u=f.selector),u&&d.find.matchesSelector($e,u),s.guid||(s.guid=d.guid++),(x=at.events)||(x=at.events=Object.create(null)),(M=at.handle)||(M=at.handle=function(Ct){return typeof d<"u"&&d.event.triggered!==Ct.type?d.event.dispatch.apply(r,arguments):void 0}),o=(o||"").match(Nt)||[""],_=o.length;_--;)w=Vi.exec(o[_])||[],B=ct=w[1],Q=(w[2]||"").split(".").sort(),B&&(P=d.event.special[B]||{},B=(u?P.delegateType:P.bindType)||B,P=d.event.special[B]||{},L=d.extend({type:B,origType:ct,data:p,handler:s,guid:s.guid,selector:u,needsContext:u&&d.expr.match.needsContext.test(u),namespace:Q.join(".")},f),(S=x[B])||(S=x[B]=[],S.delegateCount=0,(!P.setup||P.setup.call(r,p,Q,M)===!1)&&r.addEventListener&&r.addEventListener(B,M)),P.add&&(P.add.call(r,L),L.handler.guid||(L.handler.guid=s.guid)),u?S.splice(S.delegateCount++,0,L):S.push(L),d.event.global[B]=!0)},remove:function(r,o,s,p,u){var f,M,w,x,_,L,P,S,B,Q,ct,at=$.hasData(r)&&$.get(r);if(!(!at||!(x=at.events))){for(o=(o||"").match(Nt)||[""],_=o.length;_--;){if(w=Vi.exec(o[_])||[],B=ct=w[1],Q=(w[2]||"").split(".").sort(),!B){for(B in x)d.event.remove(r,B+o[_],s,p,!0);continue}for(P=d.event.special[B]||{},B=(p?P.delegateType:P.bindType)||B,S=x[B]||[],w=w[2]&&new RegExp("(^|\\.)"+Q.join("\\.(?:.*\\.|)")+"(\\.|$)"),M=f=S.length;f--;)L=S[f],(u||ct===L.origType)&&(!s||s.guid===L.guid)&&(!w||w.test(L.namespace))&&(!p||p===L.selector||p==="**"&&L.selector)&&(S.splice(f,1),L.selector&&S.delegateCount--,P.remove&&P.remove.call(r,L));M&&!S.length&&((!P.teardown||P.teardown.call(r,Q,at.handle)===!1)&&d.removeEvent(r,B,at.handle),delete x[B])}d.isEmptyObject(x)&&$.remove(r,"handle events")}},dispatch:function(r){var o,s,p,u,f,M,w=new Array(arguments.length),x=d.event.fix(r),_=($.get(this,"events")||Object.create(null))[x.type]||[],L=d.event.special[x.type]||{};for(w[0]=x,o=1;o<arguments.length;o++)w[o]=arguments[o];if(x.delegateTarget=this,!(L.preDispatch&&L.preDispatch.call(this,x)===!1)){for(M=d.event.handlers.call(this,x,_),o=0;(u=M[o++])&&!x.isPropagationStopped();)for(x.currentTarget=u.elem,s=0;(f=u.handlers[s++])&&!x.isImmediatePropagationStopped();)(!x.rnamespace||f.namespace===!1||x.rnamespace.test(f.namespace))&&(x.handleObj=f,x.data=f.data,p=((d.event.special[f.origType]||{}).handle||f.handler).apply(u.elem,w),p!==void 0&&(x.result=p)===!1&&(x.preventDefault(),x.stopPropagation()));return L.postDispatch&&L.postDispatch.call(this,x),x.result}},handlers:function(r,o){var s,p,u,f,M,w=[],x=o.delegateCount,_=r.target;if(x&&_.nodeType&&!(r.type==="click"&&r.button>=1)){for(;_!==this;_=_.parentNode||this)if(_.nodeType===1&&!(r.type==="click"&&_.disabled===!0)){for(f=[],M={},s=0;s<x;s++)p=o[s],u=p.selector+" ",M[u]===void 0&&(M[u]=p.needsContext?d(u,this).index(_)>-1:d.find(u,this,null,[_]).length),M[u]&&f.push(p);f.length&&w.push({elem:_,handlers:f})}}return _=this,x<o.length&&w.push({elem:_,handlers:o.slice(x)}),w},addProp:function(r,o){Object.defineProperty(d.Event.prototype,r,{enumerable:!0,configurable:!0,get:V(o)?function(){if(this.originalEvent)return o(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[r]},set:function(s){Object.defineProperty(this,r,{enumerable:!0,configurable:!0,writable:!0,value:s})}})},fix:function(r){return r[d.expando]?r:new d.Event(r)},special:{load:{noBubble:!0},click:{setup:function(r){var o=this||r;return K1.test(o.type)&&o.click&&W(o,"input")&&Ra(o,"click",!0),!1},trigger:function(r){var o=this||r;return K1.test(o.type)&&o.click&&W(o,"input")&&Ra(o,"click"),!0},_default:function(r){var o=r.target;return K1.test(o.type)&&o.click&&W(o,"input")&&$.get(o,"click")||W(o,"a")}},beforeunload:{postDispatch:function(r){r.result!==void 0&&r.originalEvent&&(r.originalEvent.returnValue=r.result)}}}};function Ra(r,o,s){if(!s){$.get(r,o)===void 0&&d.event.add(r,o,C1);return}$.set(r,o,!1),d.event.add(r,o,{namespace:!1,handler:function(p){var u,f=$.get(this,o);if(p.isTrigger&1&&this[o]){if(f)(d.event.special[o]||{}).delegateType&&p.stopPropagation();else if(f=h.call(arguments),$.set(this,o,f),this[o](),u=$.get(this,o),$.set(this,o,!1),f!==u)return p.stopImmediatePropagation(),p.preventDefault(),u}else f&&($.set(this,o,d.event.trigger(f[0],f.slice(1),this)),p.stopPropagation(),p.isImmediatePropagationStopped=C1)}})}d.removeEvent=function(r,o,s){r.removeEventListener&&r.removeEventListener(o,s)},d.Event=function(r,o){if(!(this instanceof d.Event))return new d.Event(r,o);r&&r.type?(this.originalEvent=r,this.type=r.type,this.isDefaultPrevented=r.defaultPrevented||r.defaultPrevented===void 0&&r.returnValue===!1?C1:A1,this.target=r.target&&r.target.nodeType===3?r.target.parentNode:r.target,this.currentTarget=r.currentTarget,this.relatedTarget=r.relatedTarget):this.type=r,o&&d.extend(this,o),this.timeStamp=r&&r.timeStamp||Date.now(),this[d.expando]=!0},d.Event.prototype={constructor:d.Event,isDefaultPrevented:A1,isPropagationStopped:A1,isImmediatePropagationStopped:A1,isSimulated:!1,preventDefault:function(){var r=this.originalEvent;this.isDefaultPrevented=C1,r&&!this.isSimulated&&r.preventDefault()},stopPropagation:function(){var r=this.originalEvent;this.isPropagationStopped=C1,r&&!this.isSimulated&&r.stopPropagation()},stopImmediatePropagation:function(){var r=this.originalEvent;this.isImmediatePropagationStopped=C1,r&&!this.isSimulated&&r.stopImmediatePropagation(),this.stopPropagation()}},d.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},d.event.addProp),d.each({focus:"focusin",blur:"focusout"},function(r,o){function s(p){if(T.documentMode){var u=$.get(this,"handle"),f=d.event.fix(p);f.type=p.type==="focusin"?"focus":"blur",f.isSimulated=!0,u(p),f.target===f.currentTarget&&u(f)}else d.event.simulate(o,p.target,d.event.fix(p))}d.event.special[r]={setup:function(){var p;if(Ra(this,r,!0),T.documentMode)p=$.get(this,o),p||this.addEventListener(o,s),$.set(this,o,(p||0)+1);else return!1},trigger:function(){return Ra(this,r),!0},teardown:function(){var p;if(T.documentMode)p=$.get(this,o)-1,p?$.set(this,o,p):(this.removeEventListener(o,s),$.remove(this,o));else return!1},_default:function(p){return $.get(p.target,r)},delegateType:o},d.event.special[o]={setup:function(){var p=this.ownerDocument||this.document||this,u=T.documentMode?this:p,f=$.get(u,o);f||(T.documentMode?this.addEventListener(o,s):p.addEventListener(r,s,!0)),$.set(u,o,(f||0)+1)},teardown:function(){var p=this.ownerDocument||this.document||this,u=T.documentMode?this:p,f=$.get(u,o)-1;f?$.set(u,o,f):(T.documentMode?this.removeEventListener(o,s):p.removeEventListener(r,s,!0),$.remove(u,o))}}}),d.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(r,o){d.event.special[r]={delegateType:o,bindType:o,handle:function(s){var p,u=this,f=s.relatedTarget,M=s.handleObj;return(!f||f!==u&&!d.contains(u,f))&&(s.type=M.origType,p=M.handler.apply(this,arguments),s.type=o),p}}}),d.fn.extend({on:function(r,o,s,p){return rn(this,r,o,s,p)},one:function(r,o,s,p){return rn(this,r,o,s,p,1)},off:function(r,o,s){var p,u;if(r&&r.preventDefault&&r.handleObj)return p=r.handleObj,d(r.delegateTarget).off(p.namespace?p.origType+"."+p.namespace:p.origType,p.selector,p.handler),this;if(typeof r=="object"){for(u in r)this.off(u,o,r[u]);return this}return(o===!1||typeof o=="function")&&(s=o,o=void 0),s===!1&&(s=A1),this.each(function(){d.event.remove(this,r,s,o)})}});var yl=/<script|<style|<link/i,gl=/checked\s*(?:[^=]|=\s*.checked.)/i,ml=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Di(r,o){return W(r,"table")&&W(o.nodeType!==11?o:o.firstChild,"tr")&&d(r).children("tbody")[0]||r}function xl(r){return r.type=(r.getAttribute("type")!==null)+"/"+r.type,r}function wl(r){return(r.type||"").slice(0,5)==="true/"?r.type=r.type.slice(5):r.removeAttribute("type"),r}function Ti(r,o){var s,p,u,f,M,w,x;if(o.nodeType===1){if($.hasData(r)&&(f=$.get(r),x=f.events,x)){$.remove(o,"handle events");for(u in x)for(s=0,p=x[u].length;s<p;s++)d.event.add(o,u,x[u][s])}_t.hasData(r)&&(M=_t.access(r),w=d.extend({},M),_t.set(o,w))}}function bl(r,o){var s=o.nodeName.toLowerCase();s==="input"&&K1.test(r.type)?o.checked=r.checked:(s==="input"||s==="textarea")&&(o.defaultValue=r.defaultValue)}function H1(r,o,s,p){o=c(o);var u,f,M,w,x,_,L=0,P=r.length,S=P-1,B=o[0],Q=V(B);if(Q||P>1&&typeof B=="string"&&!k.checkClone&&gl.test(B))return r.each(function(ct){var at=r.eq(ct);Q&&(o[0]=B.call(this,ct,at.html())),H1(at,o,s,p)});if(P&&(u=Li(o,r[0].ownerDocument,!1,r,p),f=u.firstChild,u.childNodes.length===1&&(u=f),f||p)){for(M=d.map(Vt(u,"script"),xl),w=M.length;L<P;L++)x=u,L!==S&&(x=d.clone(x,!0,!0),w&&d.merge(M,Vt(x,"script"))),s.call(r[L],x,L);if(w)for(_=M[M.length-1].ownerDocument,d.map(M,wl),L=0;L<w;L++)x=M[L],Ei.test(x.type||"")&&!$.access(x,"globalEval")&&d.contains(_,x)&&(x.src&&(x.type||"").toLowerCase()!=="module"?d._evalUrl&&!x.noModule&&d._evalUrl(x.src,{nonce:x.nonce||x.getAttribute("nonce")},_):Z(x.textContent.replace(ml,""),x,_))}return r}function Oi(r,o,s){for(var p,u=o?d.filter(o,r):r,f=0;(p=u[f])!=null;f++)!s&&p.nodeType===1&&d.cleanData(Vt(p)),p.parentNode&&(s&&b1(p)&&nn(Vt(p,"script")),p.parentNode.removeChild(p));return r}d.extend({htmlPrefilter:function(r){return r},clone:function(r,o,s){var p,u,f,M,w=r.cloneNode(!0),x=b1(r);if(!k.noCloneChecked&&(r.nodeType===1||r.nodeType===11)&&!d.isXMLDoc(r))for(M=Vt(w),f=Vt(r),p=0,u=f.length;p<u;p++)bl(f[p],M[p]);if(o)if(s)for(f=f||Vt(r),M=M||Vt(w),p=0,u=f.length;p<u;p++)Ti(f[p],M[p]);else Ti(r,w);return M=Vt(w,"script"),M.length>0&&nn(M,!x&&Vt(r,"script")),w},cleanData:function(r){for(var o,s,p,u=d.event.special,f=0;(s=r[f])!==void 0;f++)if(Se(s)){if(o=s[$.expando]){if(o.events)for(p in o.events)u[p]?d.event.remove(s,p):d.removeEvent(s,p,o.handle);s[$.expando]=void 0}s[_t.expando]&&(s[_t.expando]=void 0)}}}),d.fn.extend({detach:function(r){return Oi(this,r,!0)},remove:function(r){return Oi(this,r)},text:function(r){return Xt(this,function(o){return o===void 0?d.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=o)})},null,r,arguments.length)},append:function(){return H1(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=Di(this,r);o.appendChild(r)}})},prepend:function(){return H1(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=Di(this,r);o.insertBefore(r,o.firstChild)}})},before:function(){return H1(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this)})},after:function(){return H1(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this.nextSibling)})},empty:function(){for(var r,o=0;(r=this[o])!=null;o++)r.nodeType===1&&(d.cleanData(Vt(r,!1)),r.textContent="");return this},clone:function(r,o){return r=r??!1,o=o??r,this.map(function(){return d.clone(this,r,o)})},html:function(r){return Xt(this,function(o){var s=this[0]||{},p=0,u=this.length;if(o===void 0&&s.nodeType===1)return s.innerHTML;if(typeof o=="string"&&!yl.test(o)&&!qt[(ki.exec(o)||["",""])[1].toLowerCase()]){o=d.htmlPrefilter(o);try{for(;p<u;p++)s=this[p]||{},s.nodeType===1&&(d.cleanData(Vt(s,!1)),s.innerHTML=o);s=0}catch{}}s&&this.empty().append(o)},null,r,arguments.length)},replaceWith:function(){var r=[];return H1(this,arguments,function(o){var s=this.parentNode;d.inArray(this,r)<0&&(d.cleanData(Vt(this)),s&&s.replaceChild(o,this))},r)}}),d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(r,o){d.fn[r]=function(s){for(var p,u=[],f=d(s),M=f.length-1,w=0;w<=M;w++)p=w===M?this:this.clone(!0),d(f[w])[o](p),l.apply(u,p.get());return this.pushStack(u)}});var on=new RegExp("^("+Ai+")(?!px)[a-z%]+$","i"),hn=/^--/,Ba=function(r){var o=r.ownerDocument.defaultView;return(!o||!o.opener)&&(o=e),o.getComputedStyle(r)},Pi=function(r,o,s){var p,u,f={};for(u in o)f[u]=r.style[u],r.style[u]=o[u];p=s.call(r);for(u in o)r.style[u]=f[u];return p},_l=new RegExp(Me.join("|"),"i");(function(){function r(){if(_){x.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",_.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",$e.appendChild(x).appendChild(_);var L=e.getComputedStyle(_);s=L.top!=="1%",w=o(L.marginLeft)===12,_.style.right="60%",f=o(L.right)===36,p=o(L.width)===36,_.style.position="absolute",u=o(_.offsetWidth/3)===12,$e.removeChild(x),_=null}}function o(L){return Math.round(parseFloat(L))}var s,p,u,f,M,w,x=T.createElement("div"),_=T.createElement("div");_.style&&(_.style.backgroundClip="content-box",_.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle=_.style.backgroundClip==="content-box",d.extend(k,{boxSizingReliable:function(){return r(),p},pixelBoxStyles:function(){return r(),f},pixelPosition:function(){return r(),s},reliableMarginLeft:function(){return r(),w},scrollboxSize:function(){return r(),u},reliableTrDimensions:function(){var L,P,S,B;return M==null&&(L=T.createElement("table"),P=T.createElement("tr"),S=T.createElement("div"),L.style.cssText="position:absolute;left:-11111px;border-collapse:separate",P.style.cssText="box-sizing:content-box;border:1px solid",P.style.height="1px",S.style.height="9px",S.style.display="block",$e.appendChild(L).appendChild(P).appendChild(S),B=e.getComputedStyle(P),M=parseInt(B.height,10)+parseInt(B.borderTopWidth,10)+parseInt(B.borderBottomWidth,10)===P.offsetHeight,$e.removeChild(L)),M}}))})();function G1(r,o,s){var p,u,f,M,w=hn.test(o),x=r.style;return s=s||Ba(r),s&&(M=s.getPropertyValue(o)||s[o],w&&M&&(M=M.replace(Ht,"$1")||void 0),M===""&&!b1(r)&&(M=d.style(r,o)),!k.pixelBoxStyles()&&on.test(M)&&_l.test(o)&&(p=x.width,u=x.minWidth,f=x.maxWidth,x.minWidth=x.maxWidth=x.width=M,M=s.width,x.width=p,x.minWidth=u,x.maxWidth=f)),M!==void 0?M+"":M}function Ii(r,o){return{get:function(){if(r()){delete this.get;return}return(this.get=o).apply(this,arguments)}}}var Ri=["Webkit","Moz","ms"],Bi=T.createElement("div").style,Fi={};function Cl(r){for(var o=r[0].toUpperCase()+r.slice(1),s=Ri.length;s--;)if(r=Ri[s]+o,r in Bi)return r}function sn(r){var o=d.cssProps[r]||Fi[r];return o||(r in Bi?r:Fi[r]=Cl(r)||r)}var Al=/^(none|table(?!-c[ea]).+)/,Hl={position:"absolute",visibility:"hidden",display:"block"},zi={letterSpacing:"0",fontWeight:"400"};function Ni(r,o,s){var p=$1.exec(o);return p?Math.max(0,p[2]-(s||0))+(p[3]||"px"):o}function cn(r,o,s,p,u,f){var M=o==="width"?1:0,w=0,x=0,_=0;if(s===(p?"border":"content"))return 0;for(;M<4;M+=2)s==="margin"&&(_+=d.css(r,s+Me[M],!0,u)),p?(s==="content"&&(x-=d.css(r,"padding"+Me[M],!0,u)),s!=="margin"&&(x-=d.css(r,"border"+Me[M]+"Width",!0,u))):(x+=d.css(r,"padding"+Me[M],!0,u),s!=="padding"?x+=d.css(r,"border"+Me[M]+"Width",!0,u):w+=d.css(r,"border"+Me[M]+"Width",!0,u));return!p&&f>=0&&(x+=Math.max(0,Math.ceil(r["offset"+o[0].toUpperCase()+o.slice(1)]-f-x-w-.5))||0),x+_}function qi(r,o,s){var p=Ba(r),u=!k.boxSizingReliable()||s,f=u&&d.css(r,"boxSizing",!1,p)==="border-box",M=f,w=G1(r,o,p),x="offset"+o[0].toUpperCase()+o.slice(1);if(on.test(w)){if(!s)return w;w="auto"}return(!k.boxSizingReliable()&&f||!k.reliableTrDimensions()&&W(r,"tr")||w==="auto"||!parseFloat(w)&&d.css(r,"display",!1,p)==="inline")&&r.getClientRects().length&&(f=d.css(r,"boxSizing",!1,p)==="border-box",M=x in r,M&&(w=r[x])),w=parseFloat(w)||0,w+cn(r,o,s||(f?"border":"content"),M,p,w)+"px"}d.extend({cssHooks:{opacity:{get:function(r,o){if(o){var s=G1(r,"opacity");return s===""?"1":s}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(r,o,s,p){if(!(!r||r.nodeType===3||r.nodeType===8||!r.style)){var u,f,M,w=Rt(o),x=hn.test(o),_=r.style;if(x||(o=sn(w)),M=d.cssHooks[o]||d.cssHooks[w],s!==void 0){if(f=typeof s,f==="string"&&(u=$1.exec(s))&&u[1]&&(s=Hi(r,o,u),f="number"),s==null||s!==s)return;f==="number"&&!x&&(s+=u&&u[3]||(d.cssNumber[w]?"":"px")),!k.clearCloneStyle&&s===""&&o.indexOf("background")===0&&(_[o]="inherit"),(!M||!("set"in M)||(s=M.set(r,s,p))!==void 0)&&(x?_.setProperty(o,s):_[o]=s)}else return M&&"get"in M&&(u=M.get(r,!1,p))!==void 0?u:_[o]}},css:function(r,o,s,p){var u,f,M,w=Rt(o),x=hn.test(o);return x||(o=sn(w)),M=d.cssHooks[o]||d.cssHooks[w],M&&"get"in M&&(u=M.get(r,!0,s)),u===void 0&&(u=G1(r,o,p)),u==="normal"&&o in zi&&(u=zi[o]),s===""||s?(f=parseFloat(u),s===!0||isFinite(f)?f||0:u):u}}),d.each(["height","width"],function(r,o){d.cssHooks[o]={get:function(s,p,u){if(p)return Al.test(d.css(s,"display"))&&(!s.getClientRects().length||!s.getBoundingClientRect().width)?Pi(s,Hl,function(){return qi(s,o,u)}):qi(s,o,u)},set:function(s,p,u){var f,M=Ba(s),w=!k.scrollboxSize()&&M.position==="absolute",x=w||u,_=x&&d.css(s,"boxSizing",!1,M)==="border-box",L=u?cn(s,o,u,_,M):0;return _&&w&&(L-=Math.ceil(s["offset"+o[0].toUpperCase()+o.slice(1)]-parseFloat(M[o])-cn(s,o,"border",!1,M)-.5)),L&&(f=$1.exec(p))&&(f[3]||"px")!=="px"&&(s.style[o]=p,p=d.css(s,o)),Ni(s,p,L)}}}),d.cssHooks.marginLeft=Ii(k.reliableMarginLeft,function(r,o){if(o)return(parseFloat(G1(r,"marginLeft"))||r.getBoundingClientRect().left-Pi(r,{marginLeft:0},function(){return r.getBoundingClientRect().left}))+"px"}),d.each({margin:"",padding:"",border:"Width"},function(r,o){d.cssHooks[r+o]={expand:function(s){for(var p=0,u={},f=typeof s=="string"?s.split(" "):[s];p<4;p++)u[r+Me[p]+o]=f[p]||f[p-2]||f[0];return u}},r!=="margin"&&(d.cssHooks[r+o].set=Ni)}),d.fn.extend({css:function(r,o){return Xt(this,function(s,p,u){var f,M,w={},x=0;if(Array.isArray(p)){for(f=Ba(s),M=p.length;x<M;x++)w[p[x]]=d.css(s,p[x],!1,f);return w}return u!==void 0?d.style(s,p,u):d.css(s,p)},r,o,arguments.length>1)}});function Dt(r,o,s,p,u){return new Dt.prototype.init(r,o,s,p,u)}d.Tween=Dt,Dt.prototype={constructor:Dt,init:function(r,o,s,p,u,f){this.elem=r,this.prop=s,this.easing=u||d.easing._default,this.options=o,this.start=this.now=this.cur(),this.end=p,this.unit=f||(d.cssNumber[s]?"":"px")},cur:function(){var r=Dt.propHooks[this.prop];return r&&r.get?r.get(this):Dt.propHooks._default.get(this)},run:function(r){var o,s=Dt.propHooks[this.prop];return this.options.duration?this.pos=o=d.easing[this.easing](r,this.options.duration*r,0,1,this.options.duration):this.pos=o=r,this.now=(this.end-this.start)*o+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),s&&s.set?s.set(this):Dt.propHooks._default.set(this),this}},Dt.prototype.init.prototype=Dt.prototype,Dt.propHooks={_default:{get:function(r){var o;return r.elem.nodeType!==1||r.elem[r.prop]!=null&&r.elem.style[r.prop]==null?r.elem[r.prop]:(o=d.css(r.elem,r.prop,""),!o||o==="auto"?0:o)},set:function(r){d.fx.step[r.prop]?d.fx.step[r.prop](r):r.elem.nodeType===1&&(d.cssHooks[r.prop]||r.elem.style[sn(r.prop)]!=null)?d.style(r.elem,r.prop,r.now+r.unit):r.elem[r.prop]=r.now}}},Dt.propHooks.scrollTop=Dt.propHooks.scrollLeft={set:function(r){r.elem.nodeType&&r.elem.parentNode&&(r.elem[r.prop]=r.now)}},d.easing={linear:function(r){return r},swing:function(r){return .5-Math.cos(r*Math.PI)/2},_default:"swing"},d.fx=Dt.prototype.init,d.fx.step={};var S1,Fa,Sl=/^(?:toggle|show|hide)$/,kl=/queueHooks$/;function dn(){Fa&&(T.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(dn):e.setTimeout(dn,d.fx.interval),d.fx.tick())}function ji(){return e.setTimeout(function(){S1=void 0}),S1=Date.now()}function za(r,o){var s,p=0,u={height:r};for(o=o?1:0;p<4;p+=2-o)s=Me[p],u["margin"+s]=u["padding"+s]=r;return o&&(u.opacity=u.width=r),u}function Zi(r,o,s){for(var p,u=(Yt.tweeners[o]||[]).concat(Yt.tweeners["*"]),f=0,M=u.length;f<M;f++)if(p=u[f].call(s,o,r))return p}function El(r,o,s){var p,u,f,M,w,x,_,L,P="width"in o||"height"in o,S=this,B={},Q=r.style,ct=r.nodeType&&Ia(r),at=$.get(r,"fxshow");s.queue||(M=d._queueHooks(r,"fx"),M.unqueued==null&&(M.unqueued=0,w=M.empty.fire,M.empty.fire=function(){M.unqueued||w()}),M.unqueued++,S.always(function(){S.always(function(){M.unqueued--,d.queue(r,"fx").length||M.empty.fire()})}));for(p in o)if(u=o[p],Sl.test(u)){if(delete o[p],f=f||u==="toggle",u===(ct?"hide":"show"))if(u==="show"&&at&&at[p]!==void 0)ct=!0;else continue;B[p]=at&&at[p]||d.style(r,p)}if(x=!d.isEmptyObject(o),!(!x&&d.isEmptyObject(B))){P&&r.nodeType===1&&(s.overflow=[Q.overflow,Q.overflowX,Q.overflowY],_=at&&at.display,_==null&&(_=$.get(r,"display")),L=d.css(r,"display"),L==="none"&&(_?L=_:(_1([r],!0),_=r.style.display||_,L=d.css(r,"display"),_1([r]))),(L==="inline"||L==="inline-block"&&_!=null)&&d.css(r,"float")==="none"&&(x||(S.done(function(){Q.display=_}),_==null&&(L=Q.display,_=L==="none"?"":L)),Q.display="inline-block")),s.overflow&&(Q.overflow="hidden",S.always(function(){Q.overflow=s.overflow[0],Q.overflowX=s.overflow[1],Q.overflowY=s.overflow[2]})),x=!1;for(p in B)x||(at?"hidden"in at&&(ct=at.hidden):at=$.access(r,"fxshow",{display:_}),f&&(at.hidden=!ct),ct&&_1([r],!0),S.done(function(){ct||_1([r]),$.remove(r,"fxshow");for(p in B)d.style(r,p,B[p])})),x=Zi(ct?at[p]:0,p,S),p in at||(at[p]=x.start,ct&&(x.end=x.start,x.start=0))}}function Ll(r,o){var s,p,u,f,M;for(s in r)if(p=Rt(s),u=o[p],f=r[s],Array.isArray(f)&&(u=f[1],f=r[s]=f[0]),s!==p&&(r[p]=f,delete r[s]),M=d.cssHooks[p],M&&"expand"in M){f=M.expand(f),delete r[p];for(s in f)s in r||(r[s]=f[s],o[s]=u)}else o[p]=u}function Yt(r,o,s){var p,u,f=0,M=Yt.prefilters.length,w=d.Deferred().always(function(){delete x.elem}),x=function(){if(u)return!1;for(var P=S1||ji(),S=Math.max(0,_.startTime+_.duration-P),B=S/_.duration||0,Q=1-B,ct=0,at=_.tweens.length;ct<at;ct++)_.tweens[ct].run(Q);return w.notifyWith(r,[_,Q,S]),Q<1&&at?S:(at||w.notifyWith(r,[_,1,0]),w.resolveWith(r,[_]),!1)},_=w.promise({elem:r,props:d.extend({},o),opts:d.extend(!0,{specialEasing:{},easing:d.easing._default},s),originalProperties:o,originalOptions:s,startTime:S1||ji(),duration:s.duration,tweens:[],createTween:function(P,S){var B=d.Tween(r,_.opts,P,S,_.opts.specialEasing[P]||_.opts.easing);return _.tweens.push(B),B},stop:function(P){var S=0,B=P?_.tweens.length:0;if(u)return this;for(u=!0;S<B;S++)_.tweens[S].run(1);return P?(w.notifyWith(r,[_,1,0]),w.resolveWith(r,[_,P])):w.rejectWith(r,[_,P]),this}}),L=_.props;for(Ll(L,_.opts.specialEasing);f<M;f++)if(p=Yt.prefilters[f].call(_,r,L,_.opts),p)return V(p.stop)&&(d._queueHooks(_.elem,_.opts.queue).stop=p.stop.bind(p)),p;return d.map(L,Zi,_),V(_.opts.start)&&_.opts.start.call(r,_),_.progress(_.opts.progress).done(_.opts.done,_.opts.complete).fail(_.opts.fail).always(_.opts.always),d.fx.timer(d.extend(x,{elem:r,anim:_,queue:_.opts.queue})),_}d.Animation=d.extend(Yt,{tweeners:{"*":[function(r,o){var s=this.createTween(r,o);return Hi(s.elem,r,$1.exec(o),s),s}]},tweener:function(r,o){V(r)?(o=r,r=["*"]):r=r.match(Nt);for(var s,p=0,u=r.length;p<u;p++)s=r[p],Yt.tweeners[s]=Yt.tweeners[s]||[],Yt.tweeners[s].unshift(o)},prefilters:[El],prefilter:function(r,o){o?Yt.prefilters.unshift(r):Yt.prefilters.push(r)}}),d.speed=function(r,o,s){var p=r&&typeof r=="object"?d.extend({},r):{complete:s||!s&&o||V(r)&&r,duration:r,easing:s&&o||o&&!V(o)&&o};return d.fx.off?p.duration=0:typeof p.duration!="number"&&(p.duration in d.fx.speeds?p.duration=d.fx.speeds[p.duration]:p.duration=d.fx.speeds._default),(p.queue==null||p.queue===!0)&&(p.queue="fx"),p.old=p.complete,p.complete=function(){V(p.old)&&p.old.call(this),p.queue&&d.dequeue(this,p.queue)},p},d.fn.extend({fadeTo:function(r,o,s,p){return this.filter(Ia).css("opacity",0).show().end().animate({opacity:o},r,s,p)},animate:function(r,o,s,p){var u=d.isEmptyObject(r),f=d.speed(o,s,p),M=function(){var w=Yt(this,d.extend({},r),f);(u||$.get(this,"finish"))&&w.stop(!0)};return M.finish=M,u||f.queue===!1?this.each(M):this.queue(f.queue,M)},stop:function(r,o,s){var p=function(u){var f=u.stop;delete u.stop,f(s)};return typeof r!="string"&&(s=o,o=r,r=void 0),o&&this.queue(r||"fx",[]),this.each(function(){var u=!0,f=r!=null&&r+"queueHooks",M=d.timers,w=$.get(this);if(f)w[f]&&w[f].stop&&p(w[f]);else for(f in w)w[f]&&w[f].stop&&kl.test(f)&&p(w[f]);for(f=M.length;f--;)M[f].elem===this&&(r==null||M[f].queue===r)&&(M[f].anim.stop(s),u=!1,M.splice(f,1));(u||!s)&&d.dequeue(this,r)})},finish:function(r){return r!==!1&&(r=r||"fx"),this.each(function(){var o,s=$.get(this),p=s[r+"queue"],u=s[r+"queueHooks"],f=d.timers,M=p?p.length:0;for(s.finish=!0,d.queue(this,r,[]),u&&u.stop&&u.stop.call(this,!0),o=f.length;o--;)f[o].elem===this&&f[o].queue===r&&(f[o].anim.stop(!0),f.splice(o,1));for(o=0;o<M;o++)p[o]&&p[o].finish&&p[o].finish.call(this);delete s.finish})}}),d.each(["toggle","show","hide"],function(r,o){var s=d.fn[o];d.fn[o]=function(p,u,f){return p==null||typeof p=="boolean"?s.apply(this,arguments):this.animate(za(o,!0),p,u,f)}}),d.each({slideDown:za("show"),slideUp:za("hide"),slideToggle:za("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(r,o){d.fn[r]=function(s,p,u){return this.animate(o,s,p,u)}}),d.timers=[],d.fx.tick=function(){var r,o=0,s=d.timers;for(S1=Date.now();o<s.length;o++)r=s[o],!r()&&s[o]===r&&s.splice(o--,1);s.length||d.fx.stop(),S1=void 0},d.fx.timer=function(r){d.timers.push(r),d.fx.start()},d.fx.interval=13,d.fx.start=function(){Fa||(Fa=!0,dn())},d.fx.stop=function(){Fa=null},d.fx.speeds={slow:600,fast:200,_default:400},d.fn.delay=function(r,o){return r=d.fx&&d.fx.speeds[r]||r,o=o||"fx",this.queue(o,function(s,p){var u=e.setTimeout(s,r);p.stop=function(){e.clearTimeout(u)}})},function(){var r=T.createElement("input"),o=T.createElement("select"),s=o.appendChild(T.createElement("option"));r.type="checkbox",k.checkOn=r.value!=="",k.optSelected=s.selected,r=T.createElement("input"),r.value="t",r.type="radio",k.radioValue=r.value==="t"}();var Ui,X1=d.expr.attrHandle;d.fn.extend({attr:function(r,o){return Xt(this,d.attr,r,o,arguments.length>1)},removeAttr:function(r){return this.each(function(){d.removeAttr(this,r)})}}),d.extend({attr:function(r,o,s){var p,u,f=r.nodeType;if(!(f===3||f===8||f===2)){if(typeof r.getAttribute>"u")return d.prop(r,o,s);if((f!==1||!d.isXMLDoc(r))&&(u=d.attrHooks[o.toLowerCase()]||(d.expr.match.bool.test(o)?Ui:void 0)),s!==void 0){if(s===null){d.removeAttr(r,o);return}return u&&"set"in u&&(p=u.set(r,s,o))!==void 0?p:(r.setAttribute(o,s+""),s)}return u&&"get"in u&&(p=u.get(r,o))!==null?p:(p=d.find.attr(r,o),p??void 0)}},attrHooks:{type:{set:function(r,o){if(!k.radioValue&&o==="radio"&&W(r,"input")){var s=r.value;return r.setAttribute("type",o),s&&(r.value=s),o}}}},removeAttr:function(r,o){var s,p=0,u=o&&o.match(Nt);if(u&&r.nodeType===1)for(;s=u[p++];)r.removeAttribute(s)}}),Ui={set:function(r,o,s){return o===!1?d.removeAttr(r,s):r.setAttribute(s,s),s}},d.each(d.expr.match.bool.source.match(/\w+/g),function(r,o){var s=X1[o]||d.find.attr;X1[o]=function(p,u,f){var M,w,x=u.toLowerCase();return f||(w=X1[x],X1[x]=M,M=s(p,u,f)!=null?x:null,X1[x]=w),M}});var Vl=/^(?:input|select|textarea|button)$/i,Dl=/^(?:a|area)$/i;d.fn.extend({prop:function(r,o){return Xt(this,d.prop,r,o,arguments.length>1)},removeProp:function(r){return this.each(function(){delete this[d.propFix[r]||r]})}}),d.extend({prop:function(r,o,s){var p,u,f=r.nodeType;if(!(f===3||f===8||f===2))return(f!==1||!d.isXMLDoc(r))&&(o=d.propFix[o]||o,u=d.propHooks[o]),s!==void 0?u&&"set"in u&&(p=u.set(r,s,o))!==void 0?p:r[o]=s:u&&"get"in u&&(p=u.get(r,o))!==null?p:r[o]},propHooks:{tabIndex:{get:function(r){var o=d.find.attr(r,"tabindex");return o?parseInt(o,10):Vl.test(r.nodeName)||Dl.test(r.nodeName)&&r.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),k.optSelected||(d.propHooks.selected={get:function(r){var o=r.parentNode;return o&&o.parentNode&&o.parentNode.selectedIndex,null},set:function(r){var o=r.parentNode;o&&(o.selectedIndex,o.parentNode&&o.parentNode.selectedIndex)}}),d.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){d.propFix[this.toLowerCase()]=this});function Ke(r){var o=r.match(Nt)||[];return o.join(" ")}function Ge(r){return r.getAttribute&&r.getAttribute("class")||""}function pn(r){return Array.isArray(r)?r:typeof r=="string"?r.match(Nt)||[]:[]}d.fn.extend({addClass:function(r){var o,s,p,u,f,M;return V(r)?this.each(function(w){d(this).addClass(r.call(this,w,Ge(this)))}):(o=pn(r),o.length?this.each(function(){if(p=Ge(this),s=this.nodeType===1&&" "+Ke(p)+" ",s){for(f=0;f<o.length;f++)u=o[f],s.indexOf(" "+u+" ")<0&&(s+=u+" ");M=Ke(s),p!==M&&this.setAttribute("class",M)}}):this)},removeClass:function(r){var o,s,p,u,f,M;return V(r)?this.each(function(w){d(this).removeClass(r.call(this,w,Ge(this)))}):arguments.length?(o=pn(r),o.length?this.each(function(){if(p=Ge(this),s=this.nodeType===1&&" "+Ke(p)+" ",s){for(f=0;f<o.length;f++)for(u=o[f];s.indexOf(" "+u+" ")>-1;)s=s.replace(" "+u+" "," ");M=Ke(s),p!==M&&this.setAttribute("class",M)}}):this):this.attr("class","")},toggleClass:function(r,o){var s,p,u,f,M=typeof r,w=M==="string"||Array.isArray(r);return V(r)?this.each(function(x){d(this).toggleClass(r.call(this,x,Ge(this),o),o)}):typeof o=="boolean"&&w?o?this.addClass(r):this.removeClass(r):(s=pn(r),this.each(function(){if(w)for(f=d(this),u=0;u<s.length;u++)p=s[u],f.hasClass(p)?f.removeClass(p):f.addClass(p);else(r===void 0||M==="boolean")&&(p=Ge(this),p&&$.set(this,"__className__",p),this.setAttribute&&this.setAttribute("class",p||r===!1?"":$.get(this,"__className__")||""))}))},hasClass:function(r){var o,s,p=0;for(o=" "+r+" ";s=this[p++];)if(s.nodeType===1&&(" "+Ke(Ge(s))+" ").indexOf(o)>-1)return!0;return!1}});var Tl=/\r/g;d.fn.extend({val:function(r){var o,s,p,u=this[0];return arguments.length?(p=V(r),this.each(function(f){var M;this.nodeType===1&&(p?M=r.call(this,f,d(this).val()):M=r,M==null?M="":typeof M=="number"?M+="":Array.isArray(M)&&(M=d.map(M,function(w){return w==null?"":w+""})),o=d.valHooks[this.type]||d.valHooks[this.nodeName.toLowerCase()],(!o||!("set"in o)||o.set(this,M,"value")===void 0)&&(this.value=M))})):u?(o=d.valHooks[u.type]||d.valHooks[u.nodeName.toLowerCase()],o&&"get"in o&&(s=o.get(u,"value"))!==void 0?s:(s=u.value,typeof s=="string"?s.replace(Tl,""):s??"")):void 0}}),d.extend({valHooks:{option:{get:function(r){var o=d.find.attr(r,"value");return o??Ke(d.text(r))}},select:{get:function(r){var o,s,p,u=r.options,f=r.selectedIndex,M=r.type==="select-one",w=M?null:[],x=M?f+1:u.length;for(f<0?p=x:p=M?f:0;p<x;p++)if(s=u[p],(s.selected||p===f)&&!s.disabled&&(!s.parentNode.disabled||!W(s.parentNode,"optgroup"))){if(o=d(s).val(),M)return o;w.push(o)}return w},set:function(r,o){for(var s,p,u=r.options,f=d.makeArray(o),M=u.length;M--;)p=u[M],(p.selected=d.inArray(d.valHooks.option.get(p),f)>-1)&&(s=!0);return s||(r.selectedIndex=-1),f}}}}),d.each(["radio","checkbox"],function(){d.valHooks[this]={set:function(r,o){if(Array.isArray(o))return r.checked=d.inArray(d(r).val(),o)>-1}},k.checkOn||(d.valHooks[this].get=function(r){return r.getAttribute("value")===null?"on":r.value})});var Y1=e.location,Wi={guid:Date.now()},ln=/\?/;d.parseXML=function(r){var o,s;if(!r||typeof r!="string")return null;try{o=new e.DOMParser().parseFromString(r,"text/xml")}catch{}return s=o&&o.getElementsByTagName("parsererror")[0],(!o||s)&&d.error("Invalid XML: "+(s?d.map(s.childNodes,function(p){return p.textContent}).join(`
`):r)),o};var $i=/^(?:focusinfocus|focusoutblur)$/,Ki=function(r){r.stopPropagation()};d.extend(d.event,{trigger:function(r,o,s,p){var u,f,M,w,x,_,L,P,S=[s||T],B=C.call(r,"type")?r.type:r,Q=C.call(r,"namespace")?r.namespace.split("."):[];if(f=P=M=s=s||T,!(s.nodeType===3||s.nodeType===8)&&!$i.test(B+d.event.triggered)&&(B.indexOf(".")>-1&&(Q=B.split("."),B=Q.shift(),Q.sort()),x=B.indexOf(":")<0&&"on"+B,r=r[d.expando]?r:new d.Event(B,typeof r=="object"&&r),r.isTrigger=p?2:3,r.namespace=Q.join("."),r.rnamespace=r.namespace?new RegExp("(^|\\.)"+Q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,r.result=void 0,r.target||(r.target=s),o=o==null?[r]:d.makeArray(o,[r]),L=d.event.special[B]||{},!(!p&&L.trigger&&L.trigger.apply(s,o)===!1))){if(!p&&!L.noBubble&&!H(s)){for(w=L.delegateType||B,$i.test(w+B)||(f=f.parentNode);f;f=f.parentNode)S.push(f),M=f;M===(s.ownerDocument||T)&&S.push(M.defaultView||M.parentWindow||e)}for(u=0;(f=S[u++])&&!r.isPropagationStopped();)P=f,r.type=u>1?w:L.bindType||B,_=($.get(f,"events")||Object.create(null))[r.type]&&$.get(f,"handle"),_&&_.apply(f,o),_=x&&f[x],_&&_.apply&&Se(f)&&(r.result=_.apply(f,o),r.result===!1&&r.preventDefault());return r.type=B,!p&&!r.isDefaultPrevented()&&(!L._default||L._default.apply(S.pop(),o)===!1)&&Se(s)&&x&&V(s[B])&&!H(s)&&(M=s[x],M&&(s[x]=null),d.event.triggered=B,r.isPropagationStopped()&&P.addEventListener(B,Ki),s[B](),r.isPropagationStopped()&&P.removeEventListener(B,Ki),d.event.triggered=void 0,M&&(s[x]=M)),r.result}},simulate:function(r,o,s){var p=d.extend(new d.Event,s,{type:r,isSimulated:!0});d.event.trigger(p,null,o)}}),d.fn.extend({trigger:function(r,o){return this.each(function(){d.event.trigger(r,o,this)})},triggerHandler:function(r,o){var s=this[0];if(s)return d.event.trigger(r,o,s,!0)}});var Ol=/\[\]$/,Gi=/\r?\n/g,Pl=/^(?:submit|button|image|reset|file)$/i,Il=/^(?:input|select|textarea|keygen)/i;function un(r,o,s,p){var u;if(Array.isArray(o))d.each(o,function(f,M){s||Ol.test(r)?p(r,M):un(r+"["+(typeof M=="object"&&M!=null?f:"")+"]",M,s,p)});else if(!s&&z(o)==="object")for(u in o)un(r+"["+u+"]",o[u],s,p);else p(r,o)}d.param=function(r,o){var s,p=[],u=function(f,M){var w=V(M)?M():M;p[p.length]=encodeURIComponent(f)+"="+encodeURIComponent(w??"")};if(r==null)return"";if(Array.isArray(r)||r.jquery&&!d.isPlainObject(r))d.each(r,function(){u(this.name,this.value)});else for(s in r)un(s,r[s],o,u);return p.join("&")},d.fn.extend({serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var r=d.prop(this,"elements");return r?d.makeArray(r):this}).filter(function(){var r=this.type;return this.name&&!d(this).is(":disabled")&&Il.test(this.nodeName)&&!Pl.test(r)&&(this.checked||!K1.test(r))}).map(function(r,o){var s=d(this).val();return s==null?null:Array.isArray(s)?d.map(s,function(p){return{name:o.name,value:p.replace(Gi,`\r
`)}}):{name:o.name,value:s.replace(Gi,`\r
`)}}).get()}});var Rl=/%20/g,Bl=/#.*$/,Fl=/([?&])_=[^&]*/,zl=/^(.*?):[ \t]*([^\r\n]*)$/mg,Nl=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ql=/^(?:GET|HEAD)$/,jl=/^\/\//,Xi={},fn={},Yi="*/".concat("*"),vn=T.createElement("a");vn.href=Y1.href;function Ji(r){return function(o,s){typeof o!="string"&&(s=o,o="*");var p,u=0,f=o.toLowerCase().match(Nt)||[];if(V(s))for(;p=f[u++];)p[0]==="+"?(p=p.slice(1)||"*",(r[p]=r[p]||[]).unshift(s)):(r[p]=r[p]||[]).push(s)}}function Qi(r,o,s,p){var u={},f=r===fn;function M(w){var x;return u[w]=!0,d.each(r[w]||[],function(_,L){var P=L(o,s,p);if(typeof P=="string"&&!f&&!u[P])return o.dataTypes.unshift(P),M(P),!1;if(f)return!(x=P)}),x}return M(o.dataTypes[0])||!u["*"]&&M("*")}function Mn(r,o){var s,p,u=d.ajaxSettings.flatOptions||{};for(s in o)o[s]!==void 0&&((u[s]?r:p||(p={}))[s]=o[s]);return p&&d.extend(!0,r,p),r}function Zl(r,o,s){for(var p,u,f,M,w=r.contents,x=r.dataTypes;x[0]==="*";)x.shift(),p===void 0&&(p=r.mimeType||o.getResponseHeader("Content-Type"));if(p){for(u in w)if(w[u]&&w[u].test(p)){x.unshift(u);break}}if(x[0]in s)f=x[0];else{for(u in s){if(!x[0]||r.converters[u+" "+x[0]]){f=u;break}M||(M=u)}f=f||M}if(f)return f!==x[0]&&x.unshift(f),s[f]}function Ul(r,o,s,p){var u,f,M,w,x,_={},L=r.dataTypes.slice();if(L[1])for(M in r.converters)_[M.toLowerCase()]=r.converters[M];for(f=L.shift();f;)if(r.responseFields[f]&&(s[r.responseFields[f]]=o),!x&&p&&r.dataFilter&&(o=r.dataFilter(o,r.dataType)),x=f,f=L.shift(),f){if(f==="*")f=x;else if(x!=="*"&&x!==f){if(M=_[x+" "+f]||_["* "+f],!M){for(u in _)if(w=u.split(" "),w[1]===f&&(M=_[x+" "+w[0]]||_["* "+w[0]],M)){M===!0?M=_[u]:_[u]!==!0&&(f=w[0],L.unshift(w[1]));break}}if(M!==!0)if(M&&r.throws)o=M(o);else try{o=M(o)}catch(P){return{state:"parsererror",error:M?P:"No conversion from "+x+" to "+f}}}}return{state:"success",data:o}}d.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Y1.href,type:"GET",isLocal:Nl.test(Y1.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Yi,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":d.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(r,o){return o?Mn(Mn(r,d.ajaxSettings),o):Mn(d.ajaxSettings,r)},ajaxPrefilter:Ji(Xi),ajaxTransport:Ji(fn),ajax:function(r,o){typeof r=="object"&&(o=r,r=void 0),o=o||{};var s,p,u,f,M,w,x,_,L,P,S=d.ajaxSetup({},o),B=S.context||S,Q=S.context&&(B.nodeType||B.jquery)?d(B):d.event,ct=d.Deferred(),at=d.Callbacks("once memory"),Ct=S.statusCode||{},wt={},re={},ie="canceled",st={readyState:0,getResponseHeader:function(dt){var gt;if(x){if(!f)for(f={};gt=zl.exec(u);)f[gt[1].toLowerCase()+" "]=(f[gt[1].toLowerCase()+" "]||[]).concat(gt[2]);gt=f[dt.toLowerCase()+" "]}return gt==null?null:gt.join(", ")},getAllResponseHeaders:function(){return x?u:null},setRequestHeader:function(dt,gt){return x==null&&(dt=re[dt.toLowerCase()]=re[dt.toLowerCase()]||dt,wt[dt]=gt),this},overrideMimeType:function(dt){return x==null&&(S.mimeType=dt),this},statusCode:function(dt){var gt;if(dt)if(x)st.always(dt[st.status]);else for(gt in dt)Ct[gt]=[Ct[gt],dt[gt]];return this},abort:function(dt){var gt=dt||ie;return s&&s.abort(gt),Xe(0,gt),this}};if(ct.promise(st),S.url=((r||S.url||Y1.href)+"").replace(jl,Y1.protocol+"//"),S.type=o.method||o.type||S.method||S.type,S.dataTypes=(S.dataType||"*").toLowerCase().match(Nt)||[""],S.crossDomain==null){w=T.createElement("a");try{w.href=S.url,w.href=w.href,S.crossDomain=vn.protocol+"//"+vn.host!=w.protocol+"//"+w.host}catch{S.crossDomain=!0}}if(S.data&&S.processData&&typeof S.data!="string"&&(S.data=d.param(S.data,S.traditional)),Qi(Xi,S,o,st),x)return st;_=d.event&&S.global,_&&d.active++===0&&d.event.trigger("ajaxStart"),S.type=S.type.toUpperCase(),S.hasContent=!ql.test(S.type),p=S.url.replace(Bl,""),S.hasContent?S.data&&S.processData&&(S.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(S.data=S.data.replace(Rl,"+")):(P=S.url.slice(p.length),S.data&&(S.processData||typeof S.data=="string")&&(p+=(ln.test(p)?"&":"?")+S.data,delete S.data),S.cache===!1&&(p=p.replace(Fl,"$1"),P=(ln.test(p)?"&":"?")+"_="+Wi.guid+++P),S.url=p+P),S.ifModified&&(d.lastModified[p]&&st.setRequestHeader("If-Modified-Since",d.lastModified[p]),d.etag[p]&&st.setRequestHeader("If-None-Match",d.etag[p])),(S.data&&S.hasContent&&S.contentType!==!1||o.contentType)&&st.setRequestHeader("Content-Type",S.contentType),st.setRequestHeader("Accept",S.dataTypes[0]&&S.accepts[S.dataTypes[0]]?S.accepts[S.dataTypes[0]]+(S.dataTypes[0]!=="*"?", "+Yi+"; q=0.01":""):S.accepts["*"]);for(L in S.headers)st.setRequestHeader(L,S.headers[L]);if(S.beforeSend&&(S.beforeSend.call(B,st,S)===!1||x))return st.abort();if(ie="abort",at.add(S.complete),st.done(S.success),st.fail(S.error),s=Qi(fn,S,o,st),!s)Xe(-1,"No Transport");else{if(st.readyState=1,_&&Q.trigger("ajaxSend",[st,S]),x)return st;S.async&&S.timeout>0&&(M=e.setTimeout(function(){st.abort("timeout")},S.timeout));try{x=!1,s.send(wt,Xe)}catch(dt){if(x)throw dt;Xe(-1,dt)}}function Xe(dt,gt,Q1,gn){var oe,ta,he,ke,Ee,jt=gt;x||(x=!0,M&&e.clearTimeout(M),s=void 0,u=gn||"",st.readyState=dt>0?4:0,oe=dt>=200&&dt<300||dt===304,Q1&&(ke=Zl(S,st,Q1)),!oe&&d.inArray("script",S.dataTypes)>-1&&d.inArray("json",S.dataTypes)<0&&(S.converters["text script"]=function(){}),ke=Ul(S,ke,st,oe),oe?(S.ifModified&&(Ee=st.getResponseHeader("Last-Modified"),Ee&&(d.lastModified[p]=Ee),Ee=st.getResponseHeader("etag"),Ee&&(d.etag[p]=Ee)),dt===204||S.type==="HEAD"?jt="nocontent":dt===304?jt="notmodified":(jt=ke.state,ta=ke.data,he=ke.error,oe=!he)):(he=jt,(dt||!jt)&&(jt="error",dt<0&&(dt=0))),st.status=dt,st.statusText=(gt||jt)+"",oe?ct.resolveWith(B,[ta,jt,st]):ct.rejectWith(B,[st,jt,he]),st.statusCode(Ct),Ct=void 0,_&&Q.trigger(oe?"ajaxSuccess":"ajaxError",[st,S,oe?ta:he]),at.fireWith(B,[st,jt]),_&&(Q.trigger("ajaxComplete",[st,S]),--d.active||d.event.trigger("ajaxStop")))}return st},getJSON:function(r,o,s){return d.get(r,o,s,"json")},getScript:function(r,o){return d.get(r,void 0,o,"script")}}),d.each(["get","post"],function(r,o){d[o]=function(s,p,u,f){return V(p)&&(f=f||u,u=p,p=void 0),d.ajax(d.extend({url:s,type:o,dataType:f,data:p,success:u},d.isPlainObject(s)&&s))}}),d.ajaxPrefilter(function(r){var o;for(o in r.headers)o.toLowerCase()==="content-type"&&(r.contentType=r.headers[o]||"")}),d._evalUrl=function(r,o,s){return d.ajax({url:r,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(p){d.globalEval(p,o,s)}})},d.fn.extend({wrapAll:function(r){var o;return this[0]&&(V(r)&&(r=r.call(this[0])),o=d(r,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&o.insertBefore(this[0]),o.map(function(){for(var s=this;s.firstElementChild;)s=s.firstElementChild;return s}).append(this)),this},wrapInner:function(r){return V(r)?this.each(function(o){d(this).wrapInner(r.call(this,o))}):this.each(function(){var o=d(this),s=o.contents();s.length?s.wrapAll(r):o.append(r)})},wrap:function(r){var o=V(r);return this.each(function(s){d(this).wrapAll(o?r.call(this,s):r)})},unwrap:function(r){return this.parent(r).not("body").each(function(){d(this).replaceWith(this.childNodes)}),this}}),d.expr.pseudos.hidden=function(r){return!d.expr.pseudos.visible(r)},d.expr.pseudos.visible=function(r){return!!(r.offsetWidth||r.offsetHeight||r.getClientRects().length)},d.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var Wl={0:200,1223:204},J1=d.ajaxSettings.xhr();k.cors=!!J1&&"withCredentials"in J1,k.ajax=J1=!!J1,d.ajaxTransport(function(r){var o,s;if(k.cors||J1&&!r.crossDomain)return{send:function(p,u){var f,M=r.xhr();if(M.open(r.type,r.url,r.async,r.username,r.password),r.xhrFields)for(f in r.xhrFields)M[f]=r.xhrFields[f];r.mimeType&&M.overrideMimeType&&M.overrideMimeType(r.mimeType),!r.crossDomain&&!p["X-Requested-With"]&&(p["X-Requested-With"]="XMLHttpRequest");for(f in p)M.setRequestHeader(f,p[f]);o=function(w){return function(){o&&(o=s=M.onload=M.onerror=M.onabort=M.ontimeout=M.onreadystatechange=null,w==="abort"?M.abort():w==="error"?typeof M.status!="number"?u(0,"error"):u(M.status,M.statusText):u(Wl[M.status]||M.status,M.statusText,(M.responseType||"text")!=="text"||typeof M.responseText!="string"?{binary:M.response}:{text:M.responseText},M.getAllResponseHeaders()))}},M.onload=o(),s=M.onerror=M.ontimeout=o("error"),M.onabort!==void 0?M.onabort=s:M.onreadystatechange=function(){M.readyState===4&&e.setTimeout(function(){o&&s()})},o=o("abort");try{M.send(r.hasContent&&r.data||null)}catch(w){if(o)throw w}},abort:function(){o&&o()}}}),d.ajaxPrefilter(function(r){r.crossDomain&&(r.contents.script=!1)}),d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(r){return d.globalEval(r),r}}}),d.ajaxPrefilter("script",function(r){r.cache===void 0&&(r.cache=!1),r.crossDomain&&(r.type="GET")}),d.ajaxTransport("script",function(r){if(r.crossDomain||r.scriptAttrs){var o,s;return{send:function(p,u){o=d("<script>").attr(r.scriptAttrs||{}).prop({charset:r.scriptCharset,src:r.url}).on("load error",s=function(f){o.remove(),s=null,f&&u(f.type==="error"?404:200,f.type)}),T.head.appendChild(o[0])},abort:function(){s&&s()}}}});var t0=[],yn=/(=)\?(?=&|$)|\?\?/;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var r=t0.pop()||d.expando+"_"+Wi.guid++;return this[r]=!0,r}}),d.ajaxPrefilter("json jsonp",function(r,o,s){var p,u,f,M=r.jsonp!==!1&&(yn.test(r.url)?"url":typeof r.data=="string"&&(r.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&yn.test(r.data)&&"data");if(M||r.dataTypes[0]==="jsonp")return p=r.jsonpCallback=V(r.jsonpCallback)?r.jsonpCallback():r.jsonpCallback,M?r[M]=r[M].replace(yn,"$1"+p):r.jsonp!==!1&&(r.url+=(ln.test(r.url)?"&":"?")+r.jsonp+"="+p),r.converters["script json"]=function(){return f||d.error(p+" was not called"),f[0]},r.dataTypes[0]="json",u=e[p],e[p]=function(){f=arguments},s.always(function(){u===void 0?d(e).removeProp(p):e[p]=u,r[p]&&(r.jsonpCallback=o.jsonpCallback,t0.push(p)),f&&V(u)&&u(f[0]),f=u=void 0}),"script"}),k.createHTMLDocument=function(){var r=T.implementation.createHTMLDocument("").body;return r.innerHTML="<form></form><form></form>",r.childNodes.length===2}(),d.parseHTML=function(r,o,s){if(typeof r!="string")return[];typeof o=="boolean"&&(s=o,o=!1);var p,u,f;return o||(k.createHTMLDocument?(o=T.implementation.createHTMLDocument(""),p=o.createElement("base"),p.href=T.location.href,o.head.appendChild(p)):o=T),u=Ce.exec(r),f=!s&&[],u?[o.createElement(u[1])]:(u=Li([r],o,f),f&&f.length&&d(f).remove(),d.merge([],u.childNodes))},d.fn.load=function(r,o,s){var p,u,f,M=this,w=r.indexOf(" ");return w>-1&&(p=Ke(r.slice(w)),r=r.slice(0,w)),V(o)?(s=o,o=void 0):o&&typeof o=="object"&&(u="POST"),M.length>0&&d.ajax({url:r,type:u||"GET",dataType:"html",data:o}).done(function(x){f=arguments,M.html(p?d("<div>").append(d.parseHTML(x)).find(p):x)}).always(s&&function(x,_){M.each(function(){s.apply(this,f||[x.responseText,_,x])})}),this},d.expr.pseudos.animated=function(r){return d.grep(d.timers,function(o){return r===o.elem}).length},d.offset={setOffset:function(r,o,s){var p,u,f,M,w,x,_,L=d.css(r,"position"),P=d(r),S={};L==="static"&&(r.style.position="relative"),w=P.offset(),f=d.css(r,"top"),x=d.css(r,"left"),_=(L==="absolute"||L==="fixed")&&(f+x).indexOf("auto")>-1,_?(p=P.position(),M=p.top,u=p.left):(M=parseFloat(f)||0,u=parseFloat(x)||0),V(o)&&(o=o.call(r,s,d.extend({},w))),o.top!=null&&(S.top=o.top-w.top+M),o.left!=null&&(S.left=o.left-w.left+u),"using"in o?o.using.call(r,S):P.css(S)}},d.fn.extend({offset:function(r){if(arguments.length)return r===void 0?this:this.each(function(u){d.offset.setOffset(this,r,u)});var o,s,p=this[0];if(p)return p.getClientRects().length?(o=p.getBoundingClientRect(),s=p.ownerDocument.defaultView,{top:o.top+s.pageYOffset,left:o.left+s.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var r,o,s,p=this[0],u={top:0,left:0};if(d.css(p,"position")==="fixed")o=p.getBoundingClientRect();else{for(o=this.offset(),s=p.ownerDocument,r=p.offsetParent||s.documentElement;r&&(r===s.body||r===s.documentElement)&&d.css(r,"position")==="static";)r=r.parentNode;r&&r!==p&&r.nodeType===1&&(u=d(r).offset(),u.top+=d.css(r,"borderTopWidth",!0),u.left+=d.css(r,"borderLeftWidth",!0))}return{top:o.top-u.top-d.css(p,"marginTop",!0),left:o.left-u.left-d.css(p,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var r=this.offsetParent;r&&d.css(r,"position")==="static";)r=r.offsetParent;return r||$e})}}),d.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(r,o){var s=o==="pageYOffset";d.fn[r]=function(p){return Xt(this,function(u,f,M){var w;if(H(u)?w=u:u.nodeType===9&&(w=u.defaultView),M===void 0)return w?w[o]:u[f];w?w.scrollTo(s?w.pageXOffset:M,s?M:w.pageYOffset):u[f]=M},r,p,arguments.length)}}),d.each(["top","left"],function(r,o){d.cssHooks[o]=Ii(k.pixelPosition,function(s,p){if(p)return p=G1(s,o),on.test(p)?d(s).position()[o]+"px":p})}),d.each({Height:"height",Width:"width"},function(r,o){d.each({padding:"inner"+r,content:o,"":"outer"+r},function(s,p){d.fn[p]=function(u,f){var M=arguments.length&&(s||typeof u!="boolean"),w=s||(u===!0||f===!0?"margin":"border");return Xt(this,function(x,_,L){var P;return H(x)?p.indexOf("outer")===0?x["inner"+r]:x.document.documentElement["client"+r]:x.nodeType===9?(P=x.documentElement,Math.max(x.body["scroll"+r],P["scroll"+r],x.body["offset"+r],P["offset"+r],P["client"+r])):L===void 0?d.css(x,_,w):d.style(x,_,L,w)},o,M?u:void 0,M)}})}),d.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(r,o){d.fn[o]=function(s){return this.on(o,s)}}),d.fn.extend({bind:function(r,o,s){return this.on(r,null,o,s)},unbind:function(r,o){return this.off(r,null,o)},delegate:function(r,o,s,p){return this.on(o,r,s,p)},undelegate:function(r,o,s){return arguments.length===1?this.off(r,"**"):this.off(o,r||"**",s)},hover:function(r,o){return this.on("mouseenter",r).on("mouseleave",o||r)}}),d.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(r,o){d.fn[o]=function(s,p){return arguments.length>0?this.on(o,null,s,p):this.trigger(o)}});var $l=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;d.proxy=function(r,o){var s,p,u;if(typeof o=="string"&&(s=r[o],o=r,r=s),!!V(r))return p=h.call(arguments,2),u=function(){return r.apply(o||this,p.concat(h.call(arguments)))},u.guid=r.guid=r.guid||d.guid++,u},d.holdReady=function(r){r?d.readyWait++:d.ready(!0)},d.isArray=Array.isArray,d.parseJSON=JSON.parse,d.nodeName=W,d.isFunction=V,d.isWindow=H,d.camelCase=Rt,d.type=z,d.now=Date.now,d.isNumeric=function(r){var o=d.type(r);return(o==="number"||o==="string")&&!isNaN(r-parseFloat(r))},d.trim=function(r){return r==null?"":(r+"").replace($l,"$1")};var Kl=e.jQuery,Gl=e.$;return d.noConflict=function(r){return e.$===d&&(e.$=Gl),r&&e.jQuery===d&&(e.jQuery=Kl),d},typeof a>"u"&&(e.jQuery=e.$=d),d})})(Gd);var G5=Gd.exports;const Xd=K5(G5);var rr=!1,ir=!1,i1=[],or=-1;function X5(t){Y5(t)}function Y5(t){i1.includes(t)||i1.push(t),Q5()}function J5(t){let e=i1.indexOf(t);e!==-1&&e>or&&i1.splice(e,1)}function Q5(){!ir&&!rr&&(rr=!0,queueMicrotask(t3))}function t3(){rr=!1,ir=!0;for(let t=0;t<i1.length;t++)i1[t](),or=t;i1.length=0,or=-1,ir=!1}var q1,M1,j1,Yd,hr=!0;function e3(t){hr=!1,t(),hr=!0}function a3(t){q1=t.reactive,j1=t.release,M1=e=>t.effect(e,{scheduler:a=>{hr?X5(a):a()}}),Yd=t.raw}function $0(t){M1=t}function n3(t){let e=()=>{};return[n=>{let i=M1(n);return t._x_effects||(t._x_effects=new Set,t._x_runEffects=()=>{t._x_effects.forEach(h=>h())}),t._x_effects.add(i),e=()=>{i!==void 0&&(t._x_effects.delete(i),j1(i))},i},()=>{e()}]}function Jd(t,e){let a=!0,n,i=M1(()=>{let h=t();JSON.stringify(h),a?n=h:queueMicrotask(()=>{e(h,n),n=h}),a=!1});return()=>j1(i)}var Qd=[],tp=[],ep=[];function r3(t){ep.push(t)}function ni(t,e){typeof e=="function"?(t._x_cleanups||(t._x_cleanups=[]),t._x_cleanups.push(e)):(e=t,tp.push(e))}function ap(t){Qd.push(t)}function np(t,e,a){t._x_attributeCleanups||(t._x_attributeCleanups={}),t._x_attributeCleanups[e]||(t._x_attributeCleanups[e]=[]),t._x_attributeCleanups[e].push(a)}function rp(t,e){t._x_attributeCleanups&&Object.entries(t._x_attributeCleanups).forEach(([a,n])=>{(e===void 0||e.includes(a))&&(n.forEach(i=>i()),delete t._x_attributeCleanups[a])})}function i3(t){var e,a;for((e=t._x_effects)==null||e.forEach(J5);(a=t._x_cleanups)!=null&&a.length;)t._x_cleanups.pop()()}var ri=new MutationObserver(si),ii=!1;function oi(){ri.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),ii=!0}function ip(){o3(),ri.disconnect(),ii=!1}var oa=[];function o3(){let t=ri.takeRecords();oa.push(()=>t.length>0&&si(t));let e=oa.length;queueMicrotask(()=>{if(oa.length===e)for(;oa.length>0;)oa.shift()()})}function yt(t){if(!ii)return t();ip();let e=t();return oi(),e}var hi=!1,R2=[];function h3(){hi=!0}function s3(){hi=!1,si(R2),R2=[]}function si(t){if(hi){R2=R2.concat(t);return}let e=new Set,a=new Set,n=new Map,i=new Map;for(let h=0;h<t.length;h++)if(!t[h].target._x_ignoreMutationObserver&&(t[h].type==="childList"&&(t[h].addedNodes.forEach(c=>c.nodeType===1&&e.add(c)),t[h].removedNodes.forEach(c=>c.nodeType===1&&a.add(c))),t[h].type==="attributes")){let c=t[h].target,l=t[h].attributeName,v=t[h].oldValue,y=()=>{n.has(c)||n.set(c,[]),n.get(c).push({name:l,value:c.getAttribute(l)})},g=()=>{i.has(c)||i.set(c,[]),i.get(c).push(l)};c.hasAttribute(l)&&v===null?y():c.hasAttribute(l)?(g(),y()):g()}i.forEach((h,c)=>{rp(c,h)}),n.forEach((h,c)=>{Qd.forEach(l=>l(c,h))});for(let h of a)e.has(h)||tp.forEach(c=>c(h));e.forEach(h=>{h._x_ignoreSelf=!0,h._x_ignore=!0});for(let h of e)a.has(h)||h.isConnected&&(delete h._x_ignoreSelf,delete h._x_ignore,ep.forEach(c=>c(h)),h._x_ignore=!0,h._x_ignoreSelf=!0);e.forEach(h=>{delete h._x_ignoreSelf,delete h._x_ignore}),e=null,a=null,n=null,i=null}function op(t){return La(B1(t))}function Ea(t,e,a){return t._x_dataStack=[e,...B1(a||t)],()=>{t._x_dataStack=t._x_dataStack.filter(n=>n!==e)}}function B1(t){return t._x_dataStack?t._x_dataStack:typeof ShadowRoot=="function"&&t instanceof ShadowRoot?B1(t.host):t.parentNode?B1(t.parentNode):[]}function La(t){return new Proxy({objects:t},c3)}var c3={ownKeys({objects:t}){return Array.from(new Set(t.flatMap(e=>Object.keys(e))))},has({objects:t},e){return e==Symbol.unscopables?!1:t.some(a=>Object.prototype.hasOwnProperty.call(a,e)||Reflect.has(a,e))},get({objects:t},e,a){return e=="toJSON"?d3:Reflect.get(t.find(n=>Reflect.has(n,e))||{},e,a)},set({objects:t},e,a,n){const i=t.find(c=>Object.prototype.hasOwnProperty.call(c,e))||t[t.length-1],h=Object.getOwnPropertyDescriptor(i,e);return h!=null&&h.set&&(h!=null&&h.get)?h.set.call(n,a)||!0:Reflect.set(i,e,a)}};function d3(){return Reflect.ownKeys(this).reduce((e,a)=>(e[a]=Reflect.get(this,a),e),{})}function hp(t){let e=n=>typeof n=="object"&&!Array.isArray(n)&&n!==null,a=(n,i="")=>{Object.entries(Object.getOwnPropertyDescriptors(n)).forEach(([h,{value:c,enumerable:l}])=>{if(l===!1||c===void 0||typeof c=="object"&&c!==null&&c.__v_skip)return;let v=i===""?h:`${i}.${h}`;typeof c=="object"&&c!==null&&c._x_interceptor?n[h]=c.initialize(t,v,h):e(c)&&c!==n&&!(c instanceof Element)&&a(c,v)})};return a(t)}function sp(t,e=()=>{}){let a={initialValue:void 0,_x_interceptor:!0,initialize(n,i,h){return t(this.initialValue,()=>p3(n,i),c=>sr(n,i,c),i,h)}};return e(a),n=>{if(typeof n=="object"&&n!==null&&n._x_interceptor){let i=a.initialize.bind(a);a.initialize=(h,c,l)=>{let v=n.initialize(h,c,l);return a.initialValue=v,i(h,c,l)}}else a.initialValue=n;return a}}function p3(t,e){return e.split(".").reduce((a,n)=>a[n],t)}function sr(t,e,a){if(typeof e=="string"&&(e=e.split(".")),e.length===1)t[e[0]]=a;else{if(e.length===0)throw error;return t[e[0]]||(t[e[0]]={}),sr(t[e[0]],e.slice(1),a)}}var cp={};function ae(t,e){cp[t]=e}function cr(t,e){let a=l3(e);return Object.entries(cp).forEach(([n,i])=>{Object.defineProperty(t,`$${n}`,{get(){return i(e,a)},enumerable:!1})}),t}function l3(t){let[e,a]=vp(t),n={interceptor:sp,...e};return ni(t,a),n}function u3(t,e,a,...n){try{return a(...n)}catch(i){_a(i,t,e)}}function _a(t,e,a=void 0){t=Object.assign(t??{message:"No error message given."},{el:e,expression:a}),console.warn(`Alpine Expression Error: ${t.message}

${a?'Expression: "'+a+`"

`:""}`,e),setTimeout(()=>{throw t},0)}var c2=!0;function dp(t){let e=c2;c2=!1;let a=t();return c2=e,a}function o1(t,e,a={}){let n;return Et(t,e)(i=>n=i,a),n}function Et(...t){return pp(...t)}var pp=lp;function f3(t){pp=t}function lp(t,e){let a={};cr(a,t);let n=[a,...B1(t)],i=typeof e=="function"?v3(n,e):y3(n,e,t);return u3.bind(null,t,e,i)}function v3(t,e){return(a=()=>{},{scope:n={},params:i=[]}={})=>{let h=e.apply(La([n,...t]),i);B2(a,h)}}var In={};function M3(t,e){if(In[t])return In[t];let a=Object.getPrototypeOf(async function(){}).constructor,n=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(async()=>{ ${t} })()`:t,h=(()=>{try{let c=new a(["__self","scope"],`with (scope) { __self.result = ${n} }; __self.finished = true; return __self.result;`);return Object.defineProperty(c,"name",{value:`[Alpine] ${t}`}),c}catch(c){return _a(c,e,t),Promise.resolve()}})();return In[t]=h,h}function y3(t,e,a){let n=M3(e,a);return(i=()=>{},{scope:h={},params:c=[]}={})=>{n.result=void 0,n.finished=!1;let l=La([h,...t]);if(typeof n=="function"){let v=n(n,l).catch(y=>_a(y,a,e));n.finished?(B2(i,n.result,l,c,a),n.result=void 0):v.then(y=>{B2(i,y,l,c,a)}).catch(y=>_a(y,a,e)).finally(()=>n.result=void 0)}}}function B2(t,e,a,n,i){if(c2&&typeof e=="function"){let h=e.apply(a,n);h instanceof Promise?h.then(c=>B2(t,c,a,n)).catch(c=>_a(c,i,e)):t(h)}else typeof e=="object"&&e instanceof Promise?e.then(h=>t(h)):t(e)}var ci="x-";function Z1(t=""){return ci+t}function g3(t){ci=t}var F2={};function xt(t,e){return F2[t]=e,{before(a){if(!F2[a]){console.warn(String.raw`Cannot find directive \`${a}\`. \`${t}\` will use the default order of execution`);return}const n=n1.indexOf(a);n1.splice(n>=0?n:n1.indexOf("DEFAULT"),0,t)}}}function m3(t){return Object.keys(F2).includes(t)}function di(t,e,a){if(e=Array.from(e),t._x_virtualDirectives){let h=Object.entries(t._x_virtualDirectives).map(([l,v])=>({name:l,value:v})),c=up(h);h=h.map(l=>c.find(v=>v.name===l.name)?{name:`x-bind:${l.name}`,value:`"${l.value}"`}:l),e=e.concat(h)}let n={};return e.map(gp((h,c)=>n[h]=c)).filter(xp).map(b3(n,a)).sort(_3).map(h=>w3(t,h))}function up(t){return Array.from(t).map(gp()).filter(e=>!xp(e))}var dr=!1,ca=new Map,fp=Symbol();function x3(t){dr=!0;let e=Symbol();fp=e,ca.set(e,[]);let a=()=>{for(;ca.get(e).length;)ca.get(e).shift()();ca.delete(e)},n=()=>{dr=!1,a()};t(a),n()}function vp(t){let e=[],a=l=>e.push(l),[n,i]=n3(t);return e.push(i),[{Alpine:Da,effect:n,cleanup:a,evaluateLater:Et.bind(Et,t),evaluate:o1.bind(o1,t)},()=>e.forEach(l=>l())]}function w3(t,e){let a=()=>{},n=F2[e.type]||a,[i,h]=vp(t);np(t,e.original,h);let c=()=>{t._x_ignore||t._x_ignoreSelf||(n.inline&&n.inline(t,e,i),n=n.bind(n,t,e,i),dr?ca.get(fp).push(n):n())};return c.runCleanups=h,c}var Mp=(t,e)=>({name:a,value:n})=>(a.startsWith(t)&&(a=a.replace(t,e)),{name:a,value:n}),yp=t=>t;function gp(t=()=>{}){return({name:e,value:a})=>{let{name:n,value:i}=mp.reduce((h,c)=>c(h),{name:e,value:a});return n!==e&&t(n,e),{name:n,value:i}}}var mp=[];function pi(t){mp.push(t)}function xp({name:t}){return wp().test(t)}var wp=()=>new RegExp(`^${ci}([^:^.]+)\\b`);function b3(t,e){return({name:a,value:n})=>{let i=a.match(wp()),h=a.match(/:([a-zA-Z0-9\-_:]+)/),c=a.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],l=e||t[a]||a;return{type:i?i[1]:null,value:h?h[1]:null,modifiers:c.map(v=>v.replace(".","")),expression:n,original:l}}}var pr="DEFAULT",n1=["ignore","ref","data","id","anchor","bind","init","for","model","modelable","transition","show","if",pr,"teleport"];function _3(t,e){let a=n1.indexOf(t.type)===-1?pr:t.type,n=n1.indexOf(e.type)===-1?pr:e.type;return n1.indexOf(a)-n1.indexOf(n)}function va(t,e,a={}){t.dispatchEvent(new CustomEvent(e,{detail:a,bubbles:!0,composed:!0,cancelable:!0}))}function l1(t,e){if(typeof ShadowRoot=="function"&&t instanceof ShadowRoot){Array.from(t.children).forEach(i=>l1(i,e));return}let a=!1;if(e(t,()=>a=!0),a)return;let n=t.firstElementChild;for(;n;)l1(n,e),n=n.nextElementSibling}function Wt(t,...e){console.warn(`Alpine Warning: ${t}`,...e)}var K0=!1;function C3(){K0&&Wt("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),K0=!0,document.body||Wt("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),va(document,"alpine:init"),va(document,"alpine:initializing"),oi(),r3(e=>be(e,l1)),ni(e=>U1(e)),ap((e,a)=>{di(e,a).forEach(n=>n())});let t=e=>!K2(e.parentElement,!0);Array.from(document.querySelectorAll(Cp().join(","))).filter(t).forEach(e=>{be(e)}),va(document,"alpine:initialized"),setTimeout(()=>{S3()})}var li=[],bp=[];function _p(){return li.map(t=>t())}function Cp(){return li.concat(bp).map(t=>t())}function Ap(t){li.push(t)}function Hp(t){bp.push(t)}function K2(t,e=!1){return Va(t,a=>{if((e?Cp():_p()).some(i=>a.matches(i)))return!0})}function Va(t,e){if(t){if(e(t))return t;if(t._x_teleportBack&&(t=t._x_teleportBack),!!t.parentElement)return Va(t.parentElement,e)}}function A3(t){return _p().some(e=>t.matches(e))}var Sp=[];function H3(t){Sp.push(t)}function be(t,e=l1,a=()=>{}){x3(()=>{e(t,(n,i)=>{a(n,i),Sp.forEach(h=>h(n,i)),di(n,n.attributes).forEach(h=>h()),n._x_ignore&&i()})})}function U1(t,e=l1){e(t,a=>{i3(a),rp(a)})}function S3(){[["ui","dialog",["[x-dialog], [x-popover]"]],["anchor","anchor",["[x-anchor]"]],["sort","sort",["[x-sort]"]]].forEach(([e,a,n])=>{m3(a)||n.some(i=>{if(document.querySelector(i))return Wt(`found "${i}", but missing ${e} plugin`),!0})})}var lr=[],ui=!1;function fi(t=()=>{}){return queueMicrotask(()=>{ui||setTimeout(()=>{ur()})}),new Promise(e=>{lr.push(()=>{t(),e()})})}function ur(){for(ui=!1;lr.length;)lr.shift()()}function k3(){ui=!0}function vi(t,e){return Array.isArray(e)?G0(t,e.join(" ")):typeof e=="object"&&e!==null?E3(t,e):typeof e=="function"?vi(t,e()):G0(t,e)}function G0(t,e){let a=i=>i.split(" ").filter(h=>!t.classList.contains(h)).filter(Boolean),n=i=>(t.classList.add(...i),()=>{t.classList.remove(...i)});return e=e===!0?e="":e||"",n(a(e))}function E3(t,e){let a=l=>l.split(" ").filter(Boolean),n=Object.entries(e).flatMap(([l,v])=>v?a(l):!1).filter(Boolean),i=Object.entries(e).flatMap(([l,v])=>v?!1:a(l)).filter(Boolean),h=[],c=[];return i.forEach(l=>{t.classList.contains(l)&&(t.classList.remove(l),c.push(l))}),n.forEach(l=>{t.classList.contains(l)||(t.classList.add(l),h.push(l))}),()=>{c.forEach(l=>t.classList.add(l)),h.forEach(l=>t.classList.remove(l))}}function G2(t,e){return typeof e=="object"&&e!==null?L3(t,e):V3(t,e)}function L3(t,e){let a={};return Object.entries(e).forEach(([n,i])=>{a[n]=t.style[n],n.startsWith("--")||(n=D3(n)),t.style.setProperty(n,i)}),setTimeout(()=>{t.style.length===0&&t.removeAttribute("style")}),()=>{G2(t,a)}}function V3(t,e){let a=t.getAttribute("style",e);return t.setAttribute("style",e),()=>{t.setAttribute("style",a||"")}}function D3(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function fr(t,e=()=>{}){let a=!1;return function(){a?e.apply(this,arguments):(a=!0,t.apply(this,arguments))}}xt("transition",(t,{value:e,modifiers:a,expression:n},{evaluate:i})=>{typeof n=="function"&&(n=i(n)),n!==!1&&(!n||typeof n=="boolean"?O3(t,a,e):T3(t,n,e))});function T3(t,e,a){kp(t,vi,""),{enter:i=>{t._x_transition.enter.during=i},"enter-start":i=>{t._x_transition.enter.start=i},"enter-end":i=>{t._x_transition.enter.end=i},leave:i=>{t._x_transition.leave.during=i},"leave-start":i=>{t._x_transition.leave.start=i},"leave-end":i=>{t._x_transition.leave.end=i}}[a](e)}function O3(t,e,a){kp(t,G2);let n=!e.includes("in")&&!e.includes("out")&&!a,i=n||e.includes("in")||["enter"].includes(a),h=n||e.includes("out")||["leave"].includes(a);e.includes("in")&&!n&&(e=e.filter((T,j)=>j<e.indexOf("out"))),e.includes("out")&&!n&&(e=e.filter((T,j)=>j>e.indexOf("out")));let c=!e.includes("opacity")&&!e.includes("scale"),l=c||e.includes("opacity"),v=c||e.includes("scale"),y=l?0:1,g=v?ha(e,"scale",95)/100:1,C=ha(e,"delay",0)/1e3,I=ha(e,"origin","center"),R="opacity, transform",k=ha(e,"duration",150)/1e3,V=ha(e,"duration",75)/1e3,H="cubic-bezier(0.4, 0.0, 0.2, 1)";i&&(t._x_transition.enter.during={transformOrigin:I,transitionDelay:`${C}s`,transitionProperty:R,transitionDuration:`${k}s`,transitionTimingFunction:H},t._x_transition.enter.start={opacity:y,transform:`scale(${g})`},t._x_transition.enter.end={opacity:1,transform:"scale(1)"}),h&&(t._x_transition.leave.during={transformOrigin:I,transitionDelay:`${C}s`,transitionProperty:R,transitionDuration:`${V}s`,transitionTimingFunction:H},t._x_transition.leave.start={opacity:1,transform:"scale(1)"},t._x_transition.leave.end={opacity:y,transform:`scale(${g})`})}function kp(t,e,a={}){t._x_transition||(t._x_transition={enter:{during:a,start:a,end:a},leave:{during:a,start:a,end:a},in(n=()=>{},i=()=>{}){vr(t,e,{during:this.enter.during,start:this.enter.start,end:this.enter.end},n,i)},out(n=()=>{},i=()=>{}){vr(t,e,{during:this.leave.during,start:this.leave.start,end:this.leave.end},n,i)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(t,e,a,n){const i=document.visibilityState==="visible"?requestAnimationFrame:setTimeout;let h=()=>i(a);if(e){t._x_transition&&(t._x_transition.enter||t._x_transition.leave)?t._x_transition.enter&&(Object.entries(t._x_transition.enter.during).length||Object.entries(t._x_transition.enter.start).length||Object.entries(t._x_transition.enter.end).length)?t._x_transition.in(a):h():t._x_transition?t._x_transition.in(a):h();return}t._x_hidePromise=t._x_transition?new Promise((c,l)=>{t._x_transition.out(()=>{},()=>c(n)),t._x_transitioning&&t._x_transitioning.beforeCancel(()=>l({isFromCancelledTransition:!0}))}):Promise.resolve(n),queueMicrotask(()=>{let c=Ep(t);c?(c._x_hideChildren||(c._x_hideChildren=[]),c._x_hideChildren.push(t)):i(()=>{let l=v=>{let y=Promise.all([v._x_hidePromise,...(v._x_hideChildren||[]).map(l)]).then(([g])=>g==null?void 0:g());return delete v._x_hidePromise,delete v._x_hideChildren,y};l(t).catch(v=>{if(!v.isFromCancelledTransition)throw v})})})};function Ep(t){let e=t.parentNode;if(e)return e._x_hidePromise?e:Ep(e)}function vr(t,e,{during:a,start:n,end:i}={},h=()=>{},c=()=>{}){if(t._x_transitioning&&t._x_transitioning.cancel(),Object.keys(a).length===0&&Object.keys(n).length===0&&Object.keys(i).length===0){h(),c();return}let l,v,y;P3(t,{start(){l=e(t,n)},during(){v=e(t,a)},before:h,end(){l(),y=e(t,i)},after:c,cleanup(){v(),y()}})}function P3(t,e){let a,n,i,h=fr(()=>{yt(()=>{a=!0,n||e.before(),i||(e.end(),ur()),e.after(),t.isConnected&&e.cleanup(),delete t._x_transitioning})});t._x_transitioning={beforeCancels:[],beforeCancel(c){this.beforeCancels.push(c)},cancel:fr(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();h()}),finish:h},yt(()=>{e.start(),e.during()}),k3(),requestAnimationFrame(()=>{if(a)return;let c=Number(getComputedStyle(t).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,l=Number(getComputedStyle(t).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;c===0&&(c=Number(getComputedStyle(t).animationDuration.replace("s",""))*1e3),yt(()=>{e.before()}),n=!0,requestAnimationFrame(()=>{a||(yt(()=>{e.end()}),ur(),setTimeout(t._x_transitioning.finish,c+l),i=!0)})})}function ha(t,e,a){if(t.indexOf(e)===-1)return a;const n=t[t.indexOf(e)+1];if(!n||e==="scale"&&isNaN(n))return a;if(e==="duration"||e==="delay"){let i=n.match(/([0-9]+)ms/);if(i)return i[1]}return e==="origin"&&["top","right","left","center","bottom"].includes(t[t.indexOf(e)+2])?[n,t[t.indexOf(e)+2]].join(" "):n}var Fe=!1;function qe(t,e=()=>{}){return(...a)=>Fe?e(...a):t(...a)}function I3(t){return(...e)=>Fe&&t(...e)}var Lp=[];function X2(t){Lp.push(t)}function R3(t,e){Lp.forEach(a=>a(t,e)),Fe=!0,Vp(()=>{be(e,(a,n)=>{n(a,()=>{})})}),Fe=!1}var Mr=!1;function B3(t,e){e._x_dataStack||(e._x_dataStack=t._x_dataStack),Fe=!0,Mr=!0,Vp(()=>{F3(e)}),Fe=!1,Mr=!1}function F3(t){let e=!1;be(t,(n,i)=>{l1(n,(h,c)=>{if(e&&A3(h))return c();e=!0,i(h,c)})})}function Vp(t){let e=M1;$0((a,n)=>{let i=e(a);return j1(i),()=>{}}),t(),$0(e)}function Dp(t,e,a,n=[]){switch(t._x_bindings||(t._x_bindings=q1({})),t._x_bindings[e]=a,e=n.includes("camel")?$3(e):e,e){case"value":z3(t,a);break;case"style":q3(t,a);break;case"class":N3(t,a);break;case"selected":case"checked":j3(t,e,a);break;default:Tp(t,e,a);break}}function z3(t,e){if(Ip(t))t.attributes.value===void 0&&(t.value=e),window.fromModel&&(typeof e=="boolean"?t.checked=d2(t.value)===e:t.checked=X0(t.value,e));else if(Mi(t))Number.isInteger(e)?t.value=e:!Array.isArray(e)&&typeof e!="boolean"&&![null,void 0].includes(e)?t.value=String(e):Array.isArray(e)?t.checked=e.some(a=>X0(a,t.value)):t.checked=!!e;else if(t.tagName==="SELECT")W3(t,e);else{if(t.value===e)return;t.value=e===void 0?"":e}}function N3(t,e){t._x_undoAddedClasses&&t._x_undoAddedClasses(),t._x_undoAddedClasses=vi(t,e)}function q3(t,e){t._x_undoAddedStyles&&t._x_undoAddedStyles(),t._x_undoAddedStyles=G2(t,e)}function j3(t,e,a){Tp(t,e,a),U3(t,e,a)}function Tp(t,e,a){[null,void 0,!1].includes(a)&&G3(e)?t.removeAttribute(e):(Op(e)&&(a=e),Z3(t,e,a))}function Z3(t,e,a){t.getAttribute(e)!=a&&t.setAttribute(e,a)}function U3(t,e,a){t[e]!==a&&(t[e]=a)}function W3(t,e){const a=[].concat(e).map(n=>n+"");Array.from(t.options).forEach(n=>{n.selected=a.includes(n.value)})}function $3(t){return t.toLowerCase().replace(/-(\w)/g,(e,a)=>a.toUpperCase())}function X0(t,e){return t==e}function d2(t){return[1,"1","true","on","yes",!0].includes(t)?!0:[0,"0","false","off","no",!1].includes(t)?!1:t?!!t:null}var K3=new Set(["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","shadowrootclonable","shadowrootdelegatesfocus","shadowrootserializable"]);function Op(t){return K3.has(t)}function G3(t){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(t)}function X3(t,e,a){return t._x_bindings&&t._x_bindings[e]!==void 0?t._x_bindings[e]:Pp(t,e,a)}function Y3(t,e,a,n=!0){if(t._x_bindings&&t._x_bindings[e]!==void 0)return t._x_bindings[e];if(t._x_inlineBindings&&t._x_inlineBindings[e]!==void 0){let i=t._x_inlineBindings[e];return i.extract=n,dp(()=>o1(t,i.expression))}return Pp(t,e,a)}function Pp(t,e,a){let n=t.getAttribute(e);return n===null?typeof a=="function"?a():a:n===""?!0:Op(e)?!![e,"true"].includes(n):n}function Mi(t){return t.type==="checkbox"||t.localName==="ui-checkbox"||t.localName==="ui-switch"}function Ip(t){return t.type==="radio"||t.localName==="ui-radio"}function Rp(t,e){var a;return function(){var n=this,i=arguments,h=function(){a=null,t.apply(n,i)};clearTimeout(a),a=setTimeout(h,e)}}function Bp(t,e){let a;return function(){let n=this,i=arguments;a||(t.apply(n,i),a=!0,setTimeout(()=>a=!1,e))}}function Fp({get:t,set:e},{get:a,set:n}){let i=!0,h,c=M1(()=>{let l=t(),v=a();if(i)n(Rn(l)),i=!1;else{let y=JSON.stringify(l),g=JSON.stringify(v);y!==h?n(Rn(l)):y!==g&&e(Rn(v))}h=JSON.stringify(t()),JSON.stringify(a())});return()=>{j1(c)}}function Rn(t){return typeof t=="object"?JSON.parse(JSON.stringify(t)):t}function J3(t){(Array.isArray(t)?t:[t]).forEach(a=>a(Da))}var Qe={},Y0=!1;function Q3(t,e){if(Y0||(Qe=q1(Qe),Y0=!0),e===void 0)return Qe[t];Qe[t]=e,hp(Qe[t]),typeof e=="object"&&e!==null&&e.hasOwnProperty("init")&&typeof e.init=="function"&&Qe[t].init()}function t6(){return Qe}var zp={};function e6(t,e){let a=typeof e!="function"?()=>e:e;return t instanceof Element?Np(t,a()):(zp[t]=a,()=>{})}function a6(t){return Object.entries(zp).forEach(([e,a])=>{Object.defineProperty(t,e,{get(){return(...n)=>a(...n)}})}),t}function Np(t,e,a){let n=[];for(;n.length;)n.pop()();let i=Object.entries(e).map(([c,l])=>({name:c,value:l})),h=up(i);return i=i.map(c=>h.find(l=>l.name===c.name)?{name:`x-bind:${c.name}`,value:`"${c.value}"`}:c),di(t,i,a).map(c=>{n.push(c.runCleanups),c()}),()=>{for(;n.length;)n.pop()()}}var qp={};function n6(t,e){qp[t]=e}function r6(t,e){return Object.entries(qp).forEach(([a,n])=>{Object.defineProperty(t,a,{get(){return(...i)=>n.bind(e)(...i)},enumerable:!1})}),t}var i6={get reactive(){return q1},get release(){return j1},get effect(){return M1},get raw(){return Yd},version:"3.14.3",flushAndStopDeferringMutations:s3,dontAutoEvaluateFunctions:dp,disableEffectScheduling:e3,startObservingMutations:oi,stopObservingMutations:ip,setReactivityEngine:a3,onAttributeRemoved:np,onAttributesAdded:ap,closestDataStack:B1,skipDuringClone:qe,onlyDuringClone:I3,addRootSelector:Ap,addInitSelector:Hp,interceptClone:X2,addScopeToNode:Ea,deferMutations:h3,mapAttributes:pi,evaluateLater:Et,interceptInit:H3,setEvaluator:f3,mergeProxies:La,extractProp:Y3,findClosest:Va,onElRemoved:ni,closestRoot:K2,destroyTree:U1,interceptor:sp,transition:vr,setStyles:G2,mutateDom:yt,directive:xt,entangle:Fp,throttle:Bp,debounce:Rp,evaluate:o1,initTree:be,nextTick:fi,prefixed:Z1,prefix:g3,plugin:J3,magic:ae,store:Q3,start:C3,clone:B3,cloneNode:R3,bound:X3,$data:op,watch:Jd,walk:l1,data:n6,bind:e6},Da=i6;function o6(t,e){const a=Object.create(null),n=t.split(",");for(let i=0;i<n.length;i++)a[n[i]]=!0;return e?i=>!!a[i.toLowerCase()]:i=>!!a[i]}var h6=Object.freeze({}),s6=Object.prototype.hasOwnProperty,Y2=(t,e)=>s6.call(t,e),h1=Array.isArray,Ma=t=>jp(t)==="[object Map]",c6=t=>typeof t=="string",yi=t=>typeof t=="symbol",J2=t=>t!==null&&typeof t=="object",d6=Object.prototype.toString,jp=t=>d6.call(t),Zp=t=>jp(t).slice(8,-1),gi=t=>c6(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,p6=t=>{const e=Object.create(null);return a=>e[a]||(e[a]=t(a))},l6=p6(t=>t.charAt(0).toUpperCase()+t.slice(1)),Up=(t,e)=>t!==e&&(t===t||e===e),yr=new WeakMap,sa=[],ce,s1=Symbol("iterate"),gr=Symbol("Map key iterate");function u6(t){return t&&t._isEffect===!0}function f6(t,e=h6){u6(t)&&(t=t.raw);const a=y6(t,e);return e.lazy||a(),a}function v6(t){t.active&&(Wp(t),t.options.onStop&&t.options.onStop(),t.active=!1)}var M6=0;function y6(t,e){const a=function(){if(!a.active)return t();if(!sa.includes(a)){Wp(a);try{return m6(),sa.push(a),ce=a,t()}finally{sa.pop(),$p(),ce=sa[sa.length-1]}}};return a.id=M6++,a.allowRecurse=!!e.allowRecurse,a._isEffect=!0,a.active=!0,a.raw=t,a.deps=[],a.options=e,a}function Wp(t){const{deps:e}=t;if(e.length){for(let a=0;a<e.length;a++)e[a].delete(t);e.length=0}}var F1=!0,mi=[];function g6(){mi.push(F1),F1=!1}function m6(){mi.push(F1),F1=!0}function $p(){const t=mi.pop();F1=t===void 0?!0:t}function te(t,e,a){if(!F1||ce===void 0)return;let n=yr.get(t);n||yr.set(t,n=new Map);let i=n.get(a);i||n.set(a,i=new Set),i.has(ce)||(i.add(ce),ce.deps.push(i),ce.options.onTrack&&ce.options.onTrack({effect:ce,target:t,type:e,key:a}))}function ze(t,e,a,n,i,h){const c=yr.get(t);if(!c)return;const l=new Set,v=g=>{g&&g.forEach(C=>{(C!==ce||C.allowRecurse)&&l.add(C)})};if(e==="clear")c.forEach(v);else if(a==="length"&&h1(t))c.forEach((g,C)=>{(C==="length"||C>=n)&&v(g)});else switch(a!==void 0&&v(c.get(a)),e){case"add":h1(t)?gi(a)&&v(c.get("length")):(v(c.get(s1)),Ma(t)&&v(c.get(gr)));break;case"delete":h1(t)||(v(c.get(s1)),Ma(t)&&v(c.get(gr)));break;case"set":Ma(t)&&v(c.get(s1));break}const y=g=>{g.options.onTrigger&&g.options.onTrigger({effect:g,target:t,key:a,type:e,newValue:n,oldValue:i,oldTarget:h}),g.options.scheduler?g.options.scheduler(g):g()};l.forEach(y)}var x6=o6("__proto__,__v_isRef,__isVue"),Kp=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(yi)),w6=Gp(),b6=Gp(!0),J0=_6();function _6(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...a){const n=ft(this);for(let h=0,c=this.length;h<c;h++)te(n,"get",h+"");const i=n[e](...a);return i===-1||i===!1?n[e](...a.map(ft)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...a){g6();const n=ft(this)[e].apply(this,a);return $p(),n}}),t}function Gp(t=!1,e=!1){return function(n,i,h){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_raw"&&h===(t?e?F6:Qp:e?B6:Jp).get(n))return n;const c=h1(n);if(!t&&c&&Y2(J0,i))return Reflect.get(J0,i,h);const l=Reflect.get(n,i,h);return(yi(i)?Kp.has(i):x6(i))||(t||te(n,"get",i),e)?l:mr(l)?!c||!gi(i)?l.value:l:J2(l)?t?tl(l):_i(l):l}}var C6=A6();function A6(t=!1){return function(a,n,i,h){let c=a[n];if(!t&&(i=ft(i),c=ft(c),!h1(a)&&mr(c)&&!mr(i)))return c.value=i,!0;const l=h1(a)&&gi(n)?Number(n)<a.length:Y2(a,n),v=Reflect.set(a,n,i,h);return a===ft(h)&&(l?Up(i,c)&&ze(a,"set",n,i,c):ze(a,"add",n,i)),v}}function H6(t,e){const a=Y2(t,e),n=t[e],i=Reflect.deleteProperty(t,e);return i&&a&&ze(t,"delete",e,void 0,n),i}function S6(t,e){const a=Reflect.has(t,e);return(!yi(e)||!Kp.has(e))&&te(t,"has",e),a}function k6(t){return te(t,"iterate",h1(t)?"length":s1),Reflect.ownKeys(t)}var E6={get:w6,set:C6,deleteProperty:H6,has:S6,ownKeys:k6},L6={get:b6,set(t,e){return console.warn(`Set operation on key "${String(e)}" failed: target is readonly.`,t),!0},deleteProperty(t,e){return console.warn(`Delete operation on key "${String(e)}" failed: target is readonly.`,t),!0}},xi=t=>J2(t)?_i(t):t,wi=t=>J2(t)?tl(t):t,bi=t=>t,Q2=t=>Reflect.getPrototypeOf(t);function Ya(t,e,a=!1,n=!1){t=t.__v_raw;const i=ft(t),h=ft(e);e!==h&&!a&&te(i,"get",e),!a&&te(i,"get",h);const{has:c}=Q2(i),l=n?bi:a?wi:xi;if(c.call(i,e))return l(t.get(e));if(c.call(i,h))return l(t.get(h));t!==i&&t.get(e)}function Ja(t,e=!1){const a=this.__v_raw,n=ft(a),i=ft(t);return t!==i&&!e&&te(n,"has",t),!e&&te(n,"has",i),t===i?a.has(t):a.has(t)||a.has(i)}function Qa(t,e=!1){return t=t.__v_raw,!e&&te(ft(t),"iterate",s1),Reflect.get(t,"size",t)}function Q0(t){t=ft(t);const e=ft(this);return Q2(e).has.call(e,t)||(e.add(t),ze(e,"add",t,t)),this}function to(t,e){e=ft(e);const a=ft(this),{has:n,get:i}=Q2(a);let h=n.call(a,t);h?Yp(a,n,t):(t=ft(t),h=n.call(a,t));const c=i.call(a,t);return a.set(t,e),h?Up(e,c)&&ze(a,"set",t,e,c):ze(a,"add",t,e),this}function eo(t){const e=ft(this),{has:a,get:n}=Q2(e);let i=a.call(e,t);i?Yp(e,a,t):(t=ft(t),i=a.call(e,t));const h=n?n.call(e,t):void 0,c=e.delete(t);return i&&ze(e,"delete",t,void 0,h),c}function ao(){const t=ft(this),e=t.size!==0,a=Ma(t)?new Map(t):new Set(t),n=t.clear();return e&&ze(t,"clear",void 0,void 0,a),n}function t2(t,e){return function(n,i){const h=this,c=h.__v_raw,l=ft(c),v=e?bi:t?wi:xi;return!t&&te(l,"iterate",s1),c.forEach((y,g)=>n.call(i,v(y),v(g),h))}}function e2(t,e,a){return function(...n){const i=this.__v_raw,h=ft(i),c=Ma(h),l=t==="entries"||t===Symbol.iterator&&c,v=t==="keys"&&c,y=i[t](...n),g=a?bi:e?wi:xi;return!e&&te(h,"iterate",v?gr:s1),{next(){const{value:C,done:I}=y.next();return I?{value:C,done:I}:{value:l?[g(C[0]),g(C[1])]:g(C),done:I}},[Symbol.iterator](){return this}}}}function De(t){return function(...e){{const a=e[0]?`on key "${e[0]}" `:"";console.warn(`${l6(t)} operation ${a}failed: target is readonly.`,ft(this))}return t==="delete"?!1:this}}function V6(){const t={get(h){return Ya(this,h)},get size(){return Qa(this)},has:Ja,add:Q0,set:to,delete:eo,clear:ao,forEach:t2(!1,!1)},e={get(h){return Ya(this,h,!1,!0)},get size(){return Qa(this)},has:Ja,add:Q0,set:to,delete:eo,clear:ao,forEach:t2(!1,!0)},a={get(h){return Ya(this,h,!0)},get size(){return Qa(this,!0)},has(h){return Ja.call(this,h,!0)},add:De("add"),set:De("set"),delete:De("delete"),clear:De("clear"),forEach:t2(!0,!1)},n={get(h){return Ya(this,h,!0,!0)},get size(){return Qa(this,!0)},has(h){return Ja.call(this,h,!0)},add:De("add"),set:De("set"),delete:De("delete"),clear:De("clear"),forEach:t2(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(h=>{t[h]=e2(h,!1,!1),a[h]=e2(h,!0,!1),e[h]=e2(h,!1,!0),n[h]=e2(h,!0,!0)}),[t,a,e,n]}var[D6,T6,O6,P6]=V6();function Xp(t,e){const a=e?t?P6:O6:t?T6:D6;return(n,i,h)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?n:Reflect.get(Y2(a,i)&&i in n?a:n,i,h)}var I6={get:Xp(!1,!1)},R6={get:Xp(!0,!1)};function Yp(t,e,a){const n=ft(a);if(n!==a&&e.call(t,n)){const i=Zp(t);console.warn(`Reactive ${i} contains both the raw and reactive versions of the same object${i==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var Jp=new WeakMap,B6=new WeakMap,Qp=new WeakMap,F6=new WeakMap;function z6(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function N6(t){return t.__v_skip||!Object.isExtensible(t)?0:z6(Zp(t))}function _i(t){return t&&t.__v_isReadonly?t:el(t,!1,E6,I6,Jp)}function tl(t){return el(t,!0,L6,R6,Qp)}function el(t,e,a,n,i){if(!J2(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(e&&t.__v_isReactive))return t;const h=i.get(t);if(h)return h;const c=N6(t);if(c===0)return t;const l=new Proxy(t,c===2?n:a);return i.set(t,l),l}function ft(t){return t&&ft(t.__v_raw)||t}function mr(t){return!!(t&&t.__v_isRef===!0)}ae("nextTick",()=>fi);ae("dispatch",t=>va.bind(va,t));ae("watch",(t,{evaluateLater:e,cleanup:a})=>(n,i)=>{let h=e(n),l=Jd(()=>{let v;return h(y=>v=y),v},i);a(l)});ae("store",t6);ae("data",t=>op(t));ae("root",t=>K2(t));ae("refs",t=>(t._x_refs_proxy||(t._x_refs_proxy=La(q6(t))),t._x_refs_proxy));function q6(t){let e=[];return Va(t,a=>{a._x_refs&&e.push(a._x_refs)}),e}var Bn={};function al(t){return Bn[t]||(Bn[t]=0),++Bn[t]}function j6(t,e){return Va(t,a=>{if(a._x_ids&&a._x_ids[e])return!0})}function Z6(t,e){t._x_ids||(t._x_ids={}),t._x_ids[e]||(t._x_ids[e]=al(e))}ae("id",(t,{cleanup:e})=>(a,n=null)=>{let i=`${a}${n?`-${n}`:""}`;return U6(t,i,e,()=>{let h=j6(t,a),c=h?h._x_ids[a]:al(a);return n?`${a}-${c}-${n}`:`${a}-${c}`})});X2((t,e)=>{t._x_id&&(e._x_id=t._x_id)});function U6(t,e,a,n){if(t._x_id||(t._x_id={}),t._x_id[e])return t._x_id[e];let i=n();return t._x_id[e]=i,a(()=>{delete t._x_id[e]}),i}ae("el",t=>t);nl("Focus","focus","focus");nl("Persist","persist","persist");function nl(t,e,a){ae(e,n=>Wt(`You can't use [$${e}] without first installing the "${t}" plugin here: https://alpinejs.dev/plugins/${a}`,n))}xt("modelable",(t,{expression:e},{effect:a,evaluateLater:n,cleanup:i})=>{let h=n(e),c=()=>{let g;return h(C=>g=C),g},l=n(`${e} = __placeholder`),v=g=>l(()=>{},{scope:{__placeholder:g}}),y=c();v(y),queueMicrotask(()=>{if(!t._x_model)return;t._x_removeModelListeners.default();let g=t._x_model.get,C=t._x_model.set,I=Fp({get(){return g()},set(R){C(R)}},{get(){return c()},set(R){v(R)}});i(I)})});xt("teleport",(t,{modifiers:e,expression:a},{cleanup:n})=>{t.tagName.toLowerCase()!=="template"&&Wt("x-teleport can only be used on a <template> tag",t);let i=no(a),h=t.content.cloneNode(!0).firstElementChild;t._x_teleport=h,h._x_teleportBack=t,t.setAttribute("data-teleport-template",!0),h.setAttribute("data-teleport-target",!0),t._x_forwardEvents&&t._x_forwardEvents.forEach(l=>{h.addEventListener(l,v=>{v.stopPropagation(),t.dispatchEvent(new v.constructor(v.type,v))})}),Ea(h,{},t);let c=(l,v,y)=>{y.includes("prepend")?v.parentNode.insertBefore(l,v):y.includes("append")?v.parentNode.insertBefore(l,v.nextSibling):v.appendChild(l)};yt(()=>{c(h,i,e),qe(()=>{be(h),h._x_ignore=!0})()}),t._x_teleportPutBack=()=>{let l=no(a);yt(()=>{c(t._x_teleport,l,e)})},n(()=>yt(()=>{h.remove(),U1(h)}))});var W6=document.createElement("div");function no(t){let e=qe(()=>document.querySelector(t),()=>W6)();return e||Wt(`Cannot find x-teleport element for selector: "${t}"`),e}var rl=()=>{};rl.inline=(t,{modifiers:e},{cleanup:a})=>{e.includes("self")?t._x_ignoreSelf=!0:t._x_ignore=!0,a(()=>{e.includes("self")?delete t._x_ignoreSelf:delete t._x_ignore})};xt("ignore",rl);xt("effect",qe((t,{expression:e},{effect:a})=>{a(Et(t,e))}));function xr(t,e,a,n){let i=t,h=v=>n(v),c={},l=(v,y)=>g=>y(v,g);if(a.includes("dot")&&(e=$6(e)),a.includes("camel")&&(e=K6(e)),a.includes("passive")&&(c.passive=!0),a.includes("capture")&&(c.capture=!0),a.includes("window")&&(i=window),a.includes("document")&&(i=document),a.includes("debounce")){let v=a[a.indexOf("debounce")+1]||"invalid-wait",y=z2(v.split("ms")[0])?Number(v.split("ms")[0]):250;h=Rp(h,y)}if(a.includes("throttle")){let v=a[a.indexOf("throttle")+1]||"invalid-wait",y=z2(v.split("ms")[0])?Number(v.split("ms")[0]):250;h=Bp(h,y)}return a.includes("prevent")&&(h=l(h,(v,y)=>{y.preventDefault(),v(y)})),a.includes("stop")&&(h=l(h,(v,y)=>{y.stopPropagation(),v(y)})),a.includes("once")&&(h=l(h,(v,y)=>{v(y),i.removeEventListener(e,h,c)})),(a.includes("away")||a.includes("outside"))&&(i=document,h=l(h,(v,y)=>{t.contains(y.target)||y.target.isConnected!==!1&&(t.offsetWidth<1&&t.offsetHeight<1||t._x_isShown!==!1&&v(y))})),a.includes("self")&&(h=l(h,(v,y)=>{y.target===t&&v(y)})),(X6(e)||il(e))&&(h=l(h,(v,y)=>{Y6(y,a)||v(y)})),i.addEventListener(e,h,c),()=>{i.removeEventListener(e,h,c)}}function $6(t){return t.replace(/-/g,".")}function K6(t){return t.toLowerCase().replace(/-(\w)/g,(e,a)=>a.toUpperCase())}function z2(t){return!Array.isArray(t)&&!isNaN(t)}function G6(t){return[" ","_"].includes(t)?t:t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function X6(t){return["keydown","keyup"].includes(t)}function il(t){return["contextmenu","click","mouse"].some(e=>t.includes(e))}function Y6(t,e){let a=e.filter(h=>!["window","document","prevent","stop","once","capture","self","away","outside","passive"].includes(h));if(a.includes("debounce")){let h=a.indexOf("debounce");a.splice(h,z2((a[h+1]||"invalid-wait").split("ms")[0])?2:1)}if(a.includes("throttle")){let h=a.indexOf("throttle");a.splice(h,z2((a[h+1]||"invalid-wait").split("ms")[0])?2:1)}if(a.length===0||a.length===1&&ro(t.key).includes(a[0]))return!1;const i=["ctrl","shift","alt","meta","cmd","super"].filter(h=>a.includes(h));return a=a.filter(h=>!i.includes(h)),!(i.length>0&&i.filter(c=>((c==="cmd"||c==="super")&&(c="meta"),t[`${c}Key`])).length===i.length&&(il(t.type)||ro(t.key).includes(a[0])))}function ro(t){if(!t)return[];t=G6(t);let e={ctrl:"control",slash:"/",space:" ",spacebar:" ",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",comma:",",equal:"=",minus:"-",underscore:"_"};return e[t]=t,Object.keys(e).map(a=>{if(e[a]===t)return a}).filter(a=>a)}xt("model",(t,{modifiers:e,expression:a},{effect:n,cleanup:i})=>{let h=t;e.includes("parent")&&(h=t.parentNode);let c=Et(h,a),l;typeof a=="string"?l=Et(h,`${a} = __placeholder`):typeof a=="function"&&typeof a()=="string"?l=Et(h,`${a()} = __placeholder`):l=()=>{};let v=()=>{let I;return c(R=>I=R),io(I)?I.get():I},y=I=>{let R;c(k=>R=k),io(R)?R.set(I):l(()=>{},{scope:{__placeholder:I}})};typeof a=="string"&&t.type==="radio"&&yt(()=>{t.hasAttribute("name")||t.setAttribute("name",a)});var g=t.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(t.type)||e.includes("lazy")?"change":"input";let C=Fe?()=>{}:xr(t,g,e,I=>{y(Fn(t,e,I,v()))});if(e.includes("fill")&&([void 0,null,""].includes(v())||Mi(t)&&Array.isArray(v())||t.tagName.toLowerCase()==="select"&&t.multiple)&&y(Fn(t,e,{target:t},v())),t._x_removeModelListeners||(t._x_removeModelListeners={}),t._x_removeModelListeners.default=C,i(()=>t._x_removeModelListeners.default()),t.form){let I=xr(t.form,"reset",[],R=>{fi(()=>t._x_model&&t._x_model.set(Fn(t,e,{target:t},v())))});i(()=>I())}t._x_model={get(){return v()},set(I){y(I)}},t._x_forceModelUpdate=I=>{I===void 0&&typeof a=="string"&&a.match(/\./)&&(I=""),window.fromModel=!0,yt(()=>Dp(t,"value",I)),delete window.fromModel},n(()=>{let I=v();e.includes("unintrusive")&&document.activeElement.isSameNode(t)||t._x_forceModelUpdate(I)})});function Fn(t,e,a,n){return yt(()=>{if(a instanceof CustomEvent&&a.detail!==void 0)return a.detail!==null&&a.detail!==void 0?a.detail:a.target.value;if(Mi(t))if(Array.isArray(n)){let i=null;return e.includes("number")?i=zn(a.target.value):e.includes("boolean")?i=d2(a.target.value):i=a.target.value,a.target.checked?n.includes(i)?n:n.concat([i]):n.filter(h=>!J6(h,i))}else return a.target.checked;else{if(t.tagName.toLowerCase()==="select"&&t.multiple)return e.includes("number")?Array.from(a.target.selectedOptions).map(i=>{let h=i.value||i.text;return zn(h)}):e.includes("boolean")?Array.from(a.target.selectedOptions).map(i=>{let h=i.value||i.text;return d2(h)}):Array.from(a.target.selectedOptions).map(i=>i.value||i.text);{let i;return Ip(t)?a.target.checked?i=a.target.value:i=n:i=a.target.value,e.includes("number")?zn(i):e.includes("boolean")?d2(i):e.includes("trim")?i.trim():i}}})}function zn(t){let e=t?parseFloat(t):null;return Q6(e)?e:t}function J6(t,e){return t==e}function Q6(t){return!Array.isArray(t)&&!isNaN(t)}function io(t){return t!==null&&typeof t=="object"&&typeof t.get=="function"&&typeof t.set=="function"}xt("cloak",t=>queueMicrotask(()=>yt(()=>t.removeAttribute(Z1("cloak")))));Hp(()=>`[${Z1("init")}]`);xt("init",qe((t,{expression:e},{evaluate:a})=>typeof e=="string"?!!e.trim()&&a(e,{},!1):a(e,{},!1)));xt("text",(t,{expression:e},{effect:a,evaluateLater:n})=>{let i=n(e);a(()=>{i(h=>{yt(()=>{t.textContent=h})})})});xt("html",(t,{expression:e},{effect:a,evaluateLater:n})=>{let i=n(e);a(()=>{i(h=>{yt(()=>{t.innerHTML=h,t._x_ignoreSelf=!0,be(t),delete t._x_ignoreSelf})})})});pi(Mp(":",yp(Z1("bind:"))));var ol=(t,{value:e,modifiers:a,expression:n,original:i},{effect:h,cleanup:c})=>{if(!e){let v={};a6(v),Et(t,n)(g=>{Np(t,g,i)},{scope:v});return}if(e==="key")return t8(t,n);if(t._x_inlineBindings&&t._x_inlineBindings[e]&&t._x_inlineBindings[e].extract)return;let l=Et(t,n);h(()=>l(v=>{v===void 0&&typeof n=="string"&&n.match(/\./)&&(v=""),yt(()=>Dp(t,e,v,a))})),c(()=>{t._x_undoAddedClasses&&t._x_undoAddedClasses(),t._x_undoAddedStyles&&t._x_undoAddedStyles()})};ol.inline=(t,{value:e,modifiers:a,expression:n})=>{e&&(t._x_inlineBindings||(t._x_inlineBindings={}),t._x_inlineBindings[e]={expression:n,extract:!1})};xt("bind",ol);function t8(t,e){t._x_keyExpression=e}Ap(()=>`[${Z1("data")}]`);xt("data",(t,{expression:e},{cleanup:a})=>{if(e8(t))return;e=e===""?"{}":e;let n={};cr(n,t);let i={};r6(i,n);let h=o1(t,e,{scope:i});(h===void 0||h===!0)&&(h={}),cr(h,t);let c=q1(h);hp(c);let l=Ea(t,c);c.init&&o1(t,c.init),a(()=>{c.destroy&&o1(t,c.destroy),l()})});X2((t,e)=>{t._x_dataStack&&(e._x_dataStack=t._x_dataStack,e.setAttribute("data-has-alpine-state",!0))});function e8(t){return Fe?Mr?!0:t.hasAttribute("data-has-alpine-state"):!1}xt("show",(t,{modifiers:e,expression:a},{effect:n})=>{let i=Et(t,a);t._x_doHide||(t._x_doHide=()=>{yt(()=>{t.style.setProperty("display","none",e.includes("important")?"important":void 0)})}),t._x_doShow||(t._x_doShow=()=>{yt(()=>{t.style.length===1&&t.style.display==="none"?t.removeAttribute("style"):t.style.removeProperty("display")})});let h=()=>{t._x_doHide(),t._x_isShown=!1},c=()=>{t._x_doShow(),t._x_isShown=!0},l=()=>setTimeout(c),v=fr(C=>C?c():h(),C=>{typeof t._x_toggleAndCascadeWithTransitions=="function"?t._x_toggleAndCascadeWithTransitions(t,C,c,h):C?l():h()}),y,g=!0;n(()=>i(C=>{!g&&C===y||(e.includes("immediate")&&(C?l():h()),v(C),y=C,g=!1)}))});xt("for",(t,{expression:e},{effect:a,cleanup:n})=>{let i=n8(e),h=Et(t,i.items),c=Et(t,t._x_keyExpression||"index");t._x_prevKeys=[],t._x_lookup={},a(()=>a8(t,i,h,c)),n(()=>{Object.values(t._x_lookup).forEach(l=>yt(()=>{U1(l),l.remove()})),delete t._x_prevKeys,delete t._x_lookup})});function a8(t,e,a,n){let i=c=>typeof c=="object"&&!Array.isArray(c),h=t;a(c=>{r8(c)&&c>=0&&(c=Array.from(Array(c).keys(),H=>H+1)),c===void 0&&(c=[]);let l=t._x_lookup,v=t._x_prevKeys,y=[],g=[];if(i(c))c=Object.entries(c).map(([H,T])=>{let j=oo(e,T,H,c);n(Z=>{g.includes(Z)&&Wt("Duplicate key on x-for",t),g.push(Z)},{scope:{index:H,...j}}),y.push(j)});else for(let H=0;H<c.length;H++){let T=oo(e,c[H],H,c);n(j=>{g.includes(j)&&Wt("Duplicate key on x-for",t),g.push(j)},{scope:{index:H,...T}}),y.push(T)}let C=[],I=[],R=[],k=[];for(let H=0;H<v.length;H++){let T=v[H];g.indexOf(T)===-1&&R.push(T)}v=v.filter(H=>!R.includes(H));let V="template";for(let H=0;H<g.length;H++){let T=g[H],j=v.indexOf(T);if(j===-1)v.splice(H,0,T),C.push([V,H]);else if(j!==H){let Z=v.splice(H,1)[0],z=v.splice(j-1,1)[0];v.splice(H,0,z),v.splice(j,0,Z),I.push([Z,z])}else k.push(T);V=T}for(let H=0;H<R.length;H++){let T=R[H];T in l&&(yt(()=>{U1(l[T]),l[T].remove()}),delete l[T])}for(let H=0;H<I.length;H++){let[T,j]=I[H],Z=l[T],z=l[j],U=document.createElement("div");yt(()=>{z||Wt('x-for ":key" is undefined or invalid',h,j,l),z.after(U),Z.after(z),z._x_currentIfEl&&z.after(z._x_currentIfEl),U.before(Z),Z._x_currentIfEl&&Z.after(Z._x_currentIfEl),U.remove()}),z._x_refreshXForScope(y[g.indexOf(j)])}for(let H=0;H<C.length;H++){let[T,j]=C[H],Z=T==="template"?h:l[T];Z._x_currentIfEl&&(Z=Z._x_currentIfEl);let z=y[j],U=g[j],G=document.importNode(h.content,!0).firstElementChild,d=q1(z);Ea(G,d,h),G._x_refreshXForScope=it=>{Object.entries(it).forEach(([W,nt])=>{d[W]=nt})},yt(()=>{Z.after(G),qe(()=>be(G))()}),typeof U=="object"&&Wt("x-for key cannot be an object, it must be a string or an integer",h),l[U]=G}for(let H=0;H<k.length;H++)l[k[H]]._x_refreshXForScope(y[g.indexOf(k[H])]);h._x_prevKeys=g})}function n8(t){let e=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,a=/^\s*\(|\)\s*$/g,n=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,i=t.match(n);if(!i)return;let h={};h.items=i[2].trim();let c=i[1].replace(a,"").trim(),l=c.match(e);return l?(h.item=c.replace(e,"").trim(),h.index=l[1].trim(),l[2]&&(h.collection=l[2].trim())):h.item=c,h}function oo(t,e,a,n){let i={};return/^\[.*\]$/.test(t.item)&&Array.isArray(e)?t.item.replace("[","").replace("]","").split(",").map(c=>c.trim()).forEach((c,l)=>{i[c]=e[l]}):/^\{.*\}$/.test(t.item)&&!Array.isArray(e)&&typeof e=="object"?t.item.replace("{","").replace("}","").split(",").map(c=>c.trim()).forEach(c=>{i[c]=e[c]}):i[t.item]=e,t.index&&(i[t.index]=a),t.collection&&(i[t.collection]=n),i}function r8(t){return!Array.isArray(t)&&!isNaN(t)}function hl(){}hl.inline=(t,{expression:e},{cleanup:a})=>{let n=K2(t);n._x_refs||(n._x_refs={}),n._x_refs[e]=t,a(()=>delete n._x_refs[e])};xt("ref",hl);xt("if",(t,{expression:e},{effect:a,cleanup:n})=>{t.tagName.toLowerCase()!=="template"&&Wt("x-if can only be used on a <template> tag",t);let i=Et(t,e),h=()=>{if(t._x_currentIfEl)return t._x_currentIfEl;let l=t.content.cloneNode(!0).firstElementChild;return Ea(l,{},t),yt(()=>{t.after(l),qe(()=>be(l))()}),t._x_currentIfEl=l,t._x_undoIf=()=>{yt(()=>{U1(l),l.remove()}),delete t._x_currentIfEl},l},c=()=>{t._x_undoIf&&(t._x_undoIf(),delete t._x_undoIf)};a(()=>i(l=>{l?h():c()})),n(()=>t._x_undoIf&&t._x_undoIf())});xt("id",(t,{expression:e},{evaluate:a})=>{a(e).forEach(i=>Z6(t,i))});X2((t,e)=>{t._x_ids&&(e._x_ids=t._x_ids)});pi(Mp("@",yp(Z1("on:"))));xt("on",qe((t,{value:e,modifiers:a,expression:n},{cleanup:i})=>{let h=n?Et(t,n):()=>{};t.tagName.toLowerCase()==="template"&&(t._x_forwardEvents||(t._x_forwardEvents=[]),t._x_forwardEvents.includes(e)||t._x_forwardEvents.push(e));let c=xr(t,e,a,l=>{h(()=>{},{scope:{$event:l},params:[l]})});i(()=>c())}));tn("Collapse","collapse","collapse");tn("Intersect","intersect","intersect");tn("Focus","trap","focus");tn("Mask","mask","mask");function tn(t,e,a){xt(e,n=>Wt(`You can't use [x-${e}] without first installing the "${t}" plugin here: https://alpinejs.dev/plugins/${a}`,n))}Da.setEvaluator(lp);Da.setReactivityEngine({reactive:_i,effect:f6,release:v6,raw:ft});var i8=Da,sl=i8;/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cl={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=([t,e,a])=>{const n=document.createElementNS("http://www.w3.org/2000/svg",t);return Object.keys(e).forEach(i=>{n.setAttribute(i,String(e[i]))}),a!=null&&a.length&&a.forEach(i=>{const h=dl(i);n.appendChild(h)}),n},o8=(t,e={})=>{const a="svg",n={...cl,...e};return dl([a,n,t])};/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h8=t=>Array.from(t.attributes).reduce((e,a)=>(e[a.name]=a.value,e),{}),s8=t=>typeof t=="string"?t:!t||!t.class?"":t.class&&typeof t.class=="string"?t.class.split(" "):t.class&&Array.isArray(t.class)?t.class:"",c8=t=>t.flatMap(s8).map(a=>a.trim()).filter(Boolean).filter((a,n,i)=>i.indexOf(a)===n).join(" "),d8=t=>t.replace(/(\w)(\w*)(_|-|\s*)/g,(e,a,n)=>a.toUpperCase()+n.toLowerCase()),ho=(t,{nameAttr:e,icons:a,attrs:n})=>{var C;const i=t.getAttribute(e);if(i==null)return;const h=d8(i),c=a[h];if(!c)return console.warn(`${t.outerHTML} icon name was not found in the provided icons object.`);const l=h8(t),v={...cl,"data-lucide":i,...n,...l},y=c8(["lucide",`lucide-${i}`,l,n]);y&&Object.assign(v,{class:y});const g=o8(c,v);return(C=t.parentNode)==null?void 0:C.replaceChild(g,t)};/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p8=[["path",{d:"M3.5 13h6"}],["path",{d:"m2 16 4.5-9 4.5 9"}],["path",{d:"M18 7v9"}],["path",{d:"m14 12 4 4 4-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l8=[["path",{d:"M3.5 13h6"}],["path",{d:"m2 16 4.5-9 4.5 9"}],["path",{d:"M18 16V7"}],["path",{d:"m14 11 4-4 4 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u8=[["path",{d:"M21 14h-5"}],["path",{d:"M16 16v-3.5a2.5 2.5 0 0 1 5 0V16"}],["path",{d:"M4.5 13h6"}],["path",{d:"m3 16 4.5-9 4.5 9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f8=[["circle",{cx:"16",cy:"4",r:"1"}],["path",{d:"m18 19 1-7-6 1"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v8=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M8=[["path",{d:"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 8h12"}],["path",{d:"M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12"}],["path",{d:"M6.6 15.6A2 2 0 1 0 10 17v-5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y8=[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"}],["path",{d:"m12 15 5 6H7Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"m9 13 2 2 4-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"M9 13h6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g8=[["path",{d:"M6.87 6.87a8 8 0 1 0 11.26 11.26"}],["path",{d:"M19.9 14.25a8 8 0 0 0-9.15-9.15"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.26 18.67 4 21"}],["path",{d:"m2 2 20 20"}],["path",{d:"M4 4 2 6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m8=[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M12 9v4l2 2"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x8=[["path",{d:"M11 21c0-2.5 2-2.5 2-5"}],["path",{d:"M16 21c0-2.5 2-2.5 2-5"}],["path",{d:"m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8"}],["path",{d:"M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z"}],["path",{d:"M6 21c0-2.5 2-2.5 2-5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w8=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["polyline",{points:"11 3 11 11 14 8 17 11 17 3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b8=[["path",{d:"M2 12h20"}],["path",{d:"M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"}],["path",{d:"M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"}],["path",{d:"M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1"}],["path",{d:"M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _8=[["path",{d:"M12 2v20"}],["path",{d:"M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4"}],["path",{d:"M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"}],["path",{d:"M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1"}],["path",{d:"M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C8=[["path",{d:"M17 12H7"}],["path",{d:"M19 18H5"}],["path",{d:"M21 6H3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A8=[["rect",{width:"6",height:"16",x:"4",y:"2",rx:"2"}],["rect",{width:"6",height:"9",x:"14",y:"9",rx:"2"}],["path",{d:"M22 22H2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H8=[["rect",{width:"16",height:"6",x:"2",y:"4",rx:"2"}],["rect",{width:"9",height:"6",x:"9",y:"14",rx:"2"}],["path",{d:"M22 22V2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S8=[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M17 22v-5"}],["path",{d:"M17 7V2"}],["path",{d:"M7 22v-3"}],["path",{d:"M7 5V2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k8=[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M10 2v20"}],["path",{d:"M20 2v20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E8=[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M4 2v20"}],["path",{d:"M14 2v20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L8=[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2"}],["path",{d:"M12 2v20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V8=[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"12",y:"7",rx:"2"}],["path",{d:"M22 2v20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D8=[["rect",{width:"6",height:"14",x:"6",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2"}],["path",{d:"M2 2v20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T8=[["rect",{width:"6",height:"10",x:"9",y:"7",rx:"2"}],["path",{d:"M4 22V2"}],["path",{d:"M20 22V2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O8=[["rect",{width:"6",height:"14",x:"3",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"15",y:"7",rx:"2"}],["path",{d:"M3 2v20"}],["path",{d:"M21 2v20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P8=[["path",{d:"M3 12h18"}],["path",{d:"M3 18h18"}],["path",{d:"M3 6h18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I8=[["path",{d:"M15 12H3"}],["path",{d:"M17 18H3"}],["path",{d:"M21 6H3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R8=[["path",{d:"M21 12H9"}],["path",{d:"M21 18H7"}],["path",{d:"M21 6H3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B8=[["rect",{width:"6",height:"16",x:"4",y:"6",rx:"2"}],["rect",{width:"6",height:"9",x:"14",y:"6",rx:"2"}],["path",{d:"M22 2H2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F8=[["rect",{width:"9",height:"6",x:"6",y:"14",rx:"2"}],["rect",{width:"16",height:"6",x:"6",y:"4",rx:"2"}],["path",{d:"M2 2v20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z8=[["path",{d:"M22 17h-3"}],["path",{d:"M22 7h-5"}],["path",{d:"M5 17H2"}],["path",{d:"M7 7H2"}],["rect",{x:"5",y:"14",width:"14",height:"6",rx:"2"}],["rect",{x:"7",y:"4",width:"10",height:"6",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N8=[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2"}],["path",{d:"M2 20h20"}],["path",{d:"M2 10h20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q8=[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2"}],["path",{d:"M2 14h20"}],["path",{d:"M2 4h20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j8=[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2"}],["path",{d:"M2 12h20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z8=[["rect",{width:"14",height:"6",x:"5",y:"12",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2"}],["path",{d:"M2 22h20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U8=[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"6",rx:"2"}],["path",{d:"M2 2h20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W8=[["rect",{width:"10",height:"6",x:"7",y:"9",rx:"2"}],["path",{d:"M22 20H2"}],["path",{d:"M22 4H2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $8=[["path",{d:"M10 10H6"}],["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"}],["path",{d:"M8 8v4"}],["path",{d:"M9 18h6"}],["circle",{cx:"17",cy:"18",r:"2"}],["circle",{cx:"7",cy:"18",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K8=[["rect",{width:"14",height:"6",x:"5",y:"15",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"3",rx:"2"}],["path",{d:"M2 21h20"}],["path",{d:"M2 3h20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G8=[["path",{d:"M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13"}],["path",{d:"M16 12h3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X8=[["path",{d:"M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"}],["path",{d:"M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y8=[["path",{d:"M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8"}],["path",{d:"M10 5H8a2 2 0 0 0 0 4h.68"}],["path",{d:"M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8"}],["path",{d:"M14 5h2a2 2 0 0 1 0 4h-.68"}],["path",{d:"M18 22H6"}],["path",{d:"M9 2h6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J8=[["path",{d:"M12 22V8"}],["path",{d:"M5 12H2a10 10 0 0 0 20 0h-3"}],["circle",{cx:"12",cy:"5",r:"3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q8=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2"}],["path",{d:"M7.5 8 10 9"}],["path",{d:"m14 9 2.5-1"}],["path",{d:"M9 10h.01"}],["path",{d:"M15 10h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t7=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 15h8"}],["path",{d:"M8 9h2"}],["path",{d:"M14 9h2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e7=[["path",{d:"M2 12 7 2"}],["path",{d:"m7 12 5-10"}],["path",{d:"m12 12 5-10"}],["path",{d:"m17 12 5-10"}],["path",{d:"M4.5 7h15"}],["path",{d:"M12 16v6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a7=[["path",{d:"M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4"}],["path",{d:"M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z"}],["path",{d:"M9 12v5"}],["path",{d:"M15 12v5"}],["path",{d:"M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n7=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m14.31 8 5.74 9.94"}],["path",{d:"M9.69 8h11.48"}],["path",{d:"m7.38 12 5.74-9.94"}],["path",{d:"M9.69 16 3.95 6.06"}],["path",{d:"M14.31 16H2.83"}],["path",{d:"m16.62 12-5.74 9.94"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r7=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M6 8h.01"}],["path",{d:"M10 8h.01"}],["path",{d:"M14 8h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i7=[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}],["path",{d:"M10 4v4"}],["path",{d:"M2 8h20"}],["path",{d:"M6 4v4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o7=[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"}],["path",{d:"M10 2c1 .5 2 2 2 5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h7=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2"}],["path",{d:"m9 15 3-3 3 3"}],["path",{d:"M12 12v9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s7=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"m9.5 17 5-5"}],["path",{d:"m9.5 12 5 5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c7=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d7=[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p7=[["path",{d:"M15 5H9"}],["path",{d:"M15 9v3h4l-7 7-7-7h4V9z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l7=[["path",{d:"M15 6v6h4l-7 7-7-7h4V6h6z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u7=[["path",{d:"M19 15V9"}],["path",{d:"M15 15h-3v4l-7-7 7-7v4h3v6z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f7=[["path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v7=[["path",{d:"M5 9v6"}],["path",{d:"M9 9h3V5l7 7-7 7v-4H9V9z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M7=[["path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y7=[["path",{d:"M9 19h6"}],["path",{d:"M9 15v-3H5l7-7 7 7h-4v3H9z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g7=[["path",{d:"M9 18v-6H5l7-7 7 7h-4v6H9z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m7=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2"}],["path",{d:"M17 20v-6h-2"}],["path",{d:"M15 20h4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x7=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M17 10V4h-2"}],["path",{d:"M15 10h4"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M20 8h-5"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10"}],["path",{d:"M15 14h5l-5 6h5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w7=[["path",{d:"M19 3H5"}],["path",{d:"M12 21V7"}],["path",{d:"m6 15 6 6 6-6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b7=[["path",{d:"M17 7 7 17"}],["path",{d:"M17 17H7V7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _7=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M11 4h4"}],["path",{d:"M11 8h7"}],["path",{d:"M11 12h10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C7=[["path",{d:"m7 7 10 10"}],["path",{d:"M17 7v10H7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A7=[["path",{d:"M12 2v14"}],["path",{d:"m19 9-7 7-7-7"}],["circle",{cx:"12",cy:"21",r:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H7=[["path",{d:"M12 17V3"}],["path",{d:"m6 11 6 6 6-6"}],["path",{d:"M19 21H5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S7=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"m21 8-4-4-4 4"}],["path",{d:"M17 4v16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M11 4h10"}],["path",{d:"M11 8h7"}],["path",{d:"M11 12h4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 4v16"}],["path",{d:"M15 4h5l-5 6h5"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"}],["path",{d:"M20 18h-5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k7=[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E7=[["path",{d:"m9 6-6 6 6 6"}],["path",{d:"M3 12h14"}],["path",{d:"M21 19V5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L7=[["path",{d:"M8 3 4 7l4 4"}],["path",{d:"M4 7h16"}],["path",{d:"m16 21 4-4-4-4"}],["path",{d:"M20 17H4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V7=[["path",{d:"M3 19V5"}],["path",{d:"m13 6-6 6 6 6"}],["path",{d:"M7 12h14"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D7=[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T7=[["path",{d:"M3 5v14"}],["path",{d:"M21 12H7"}],["path",{d:"m15 18 6-6-6-6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O7=[["path",{d:"m16 3 4 4-4 4"}],["path",{d:"M20 7H4"}],["path",{d:"m8 21-4-4 4-4"}],["path",{d:"M4 17h16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P7=[["path",{d:"M17 12H3"}],["path",{d:"m11 18 6-6-6-6"}],["path",{d:"M21 5v14"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I7=[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R7=[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2"}],["path",{d:"M17 20v-6h-2"}],["path",{d:"M15 20h4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B7=[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M17 10V4h-2"}],["path",{d:"M15 10h4"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M20 8h-5"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10"}],["path",{d:"M15 14h5l-5 6h5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F7=[["path",{d:"m21 16-4 4-4-4"}],["path",{d:"M17 20V4"}],["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z7=[["path",{d:"m5 9 7-7 7 7"}],["path",{d:"M12 16V2"}],["circle",{cx:"12",cy:"21",r:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N7=[["path",{d:"m18 9-6-6-6 6"}],["path",{d:"M12 3v14"}],["path",{d:"M5 21h14"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q7=[["path",{d:"M7 17V7h10"}],["path",{d:"M17 17 7 7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M11 12h4"}],["path",{d:"M11 16h7"}],["path",{d:"M11 20h10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j7=[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z7=[["path",{d:"M5 3h14"}],["path",{d:"m18 13-6-6-6 6"}],["path",{d:"M12 7v14"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U7=[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M11 12h10"}],["path",{d:"M11 16h7"}],["path",{d:"M11 20h4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M15 4h5l-5 6h5"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"}],["path",{d:"M20 18h-5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W7=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $7=[["path",{d:"m4 6 3-3 3 3"}],["path",{d:"M7 17V3"}],["path",{d:"m14 6 3-3 3 3"}],["path",{d:"M17 17V3"}],["path",{d:"M4 21h16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K7=[["path",{d:"M12 6v12"}],["path",{d:"M17.196 9 6.804 15"}],["path",{d:"m6.804 9 10.392 6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G7=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X7=[["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y7=[["path",{d:"M2 10v3"}],["path",{d:"M6 6v11"}],["path",{d:"M10 3v18"}],["path",{d:"M14 8v7"}],["path",{d:"M18 5v13"}],["path",{d:"M22 10v3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J7=[["path",{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q7=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"}],["circle",{cx:"12",cy:"8",r:"6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=[["path",{d:"m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9"}],["path",{d:"M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=[["path",{d:"M4 4v16h16"}],["path",{d:"m4 20 7-7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=[["path",{d:"M9 12h.01"}],["path",{d:"M15 12h.01"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"}],["path",{d:"M8 10h8"}],["path",{d:"M8 18h8"}],["path",{d:"M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M12 7v10"}],["path",{d:"M15.4 10a4 4 0 1 0 0 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m9 12 2 2 4-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M7 12h5"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 18V6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["line",{x1:"12",x2:"12.01",y1:"17",y2:"17"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M8 8h8"}],["path",{d:"M8 12h8"}],["path",{d:"m13 17-5-1h1a4 4 0 0 0 0-8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"16",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"8",y2:"8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m9 8 3 3v7"}],["path",{d:"m12 11 3-3"}],["path",{d:"M9 12h6"}],["path",{d:"M9 16h6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"8",y2:"16"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M8 12h4"}],["path",{d:"M10 16V9.5a2.5 2.5 0 0 1 5 0"}],["path",{d:"M8 16h7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M9 16h5"}],["path",{d:"M9 12h5a2 2 0 1 0 0-4h-3v9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M11 17V8h4"}],["path",{d:"M11 12h3"}],["path",{d:"M9 16h4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=[["path",{d:"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2"}],["path",{d:"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10"}],["rect",{width:"13",height:"8",x:"8",y:"6",rx:"1"}],["circle",{cx:"18",cy:"20",r:"2"}],["circle",{cx:"9",cy:"20",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m4.9 4.9 14.2 14.2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=[["path",{d:"M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5"}],["path",{d:"M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=[["path",{d:"M10 10.01h.01"}],["path",{d:"M10 14.01h.01"}],["path",{d:"M14 10.01h.01"}],["path",{d:"M14 14.01h.01"}],["path",{d:"M18 6v11.5"}],["path",{d:"M6 6v12"}],["rect",{x:"2",y:"6",width:"20",height:"12",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=[["path",{d:"M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"}],["path",{d:"m16 19 3 3 3-3"}],["path",{d:"M18 12h.01"}],["path",{d:"M19 16v6"}],["path",{d:"M6 12h.01"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=[["path",{d:"M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"}],["path",{d:"M18 12h.01"}],["path",{d:"M19 22v-6"}],["path",{d:"m22 19-3-3-3 3"}],["path",{d:"M6 12h.01"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["path",{d:"M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"}],["path",{d:"m17 17 5 5"}],["path",{d:"M18 12h.01"}],["path",{d:"m22 17-5 5"}],["path",{d:"M6 12h.01"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M6 12h.01M18 12h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["path",{d:"M3 5v14"}],["path",{d:"M8 5v14"}],["path",{d:"M12 5v14"}],["path",{d:"M17 5v14"}],["path",{d:"M21 5v14"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=[["path",{d:"M4 20h16"}],["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=[["path",{d:"M10 4 8 6"}],["path",{d:"M17 19v2"}],["path",{d:"M2 12h20"}],["path",{d:"M7 19v2"}],["path",{d:"M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"}],["path",{d:"m11 7-3 5h4l-3 5"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13"}],["line",{x1:"14",x2:"14",y1:"11",y2:"13"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=[["path",{d:"M10 17h.01"}],["path",{d:"M10 7v6"}],["path",{d:"M14 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"}],["path",{d:"M22 11v2"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"M10 9v6"}],["path",{d:"M13.5 7H16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2.5"}],["path",{d:"M22 11v2"}],["path",{d:"M6.5 17H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2.5"}],["path",{d:"M7 12h6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["path",{d:"M4.5 3h15"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"}],["path",{d:"M6 14h12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=[["path",{d:"M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1"}],["path",{d:"M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66"}],["path",{d:"M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"}],["path",{d:"M12 4v6"}],["path",{d:"M2 18h20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=[["path",{d:"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"}],["path",{d:"M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}],["path",{d:"M3 18h18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=[["path",{d:"M2 4v16"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10"}],["path",{d:"M2 17h20"}],["path",{d:"M6 8v9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=[["path",{d:"M13 13v5"}],["path",{d:"M17 11.47V8"}],["path",{d:"M17 11h1a3 3 0 0 1 2.745 4.211"}],["path",{d:"m2 2 20 20"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3"}],["path",{d:"M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268"}],["path",{d:"M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12"}],["path",{d:"M9 14.6V18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=[["path",{d:"M17 11h1a3 3 0 0 1 0 6h-1"}],["path",{d:"M9 12v6"}],["path",{d:"M13 12v6"}],["path",{d:"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665"}],["circle",{cx:"18",cy:"8",r:"3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=[["path",{d:"M18.8 4A6.3 8.7 0 0 1 20 9"}],["path",{d:"M9 9h.01"}],["circle",{cx:"9",cy:"9",r:"7"}],["rect",{width:"10",height:"6",x:"4",y:"16",rx:"2"}],["path",{d:"M14 19c3 0 4.6-1.6 4.6-1.6"}],["circle",{cx:"20",cy:"16",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M15 8h6"}],["path",{d:"M16.243 3.757A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742"}],["path",{d:"m2 2 20 20"}],["path",{d:"M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M15 8h6"}],["path",{d:"M18 5v6"}],["path",{d:"M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=[["rect",{width:"13",height:"7",x:"3",y:"3",rx:"1"}],["path",{d:"m22 15-3-3 3-3"}],["rect",{width:"13",height:"7",x:"3",y:"14",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=[["rect",{width:"7",height:"13",x:"3",y:"3",rx:"1"}],["path",{d:"m9 22 3-3 3 3"}],["rect",{width:"7",height:"13",x:"14",y:"3",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=[["rect",{width:"13",height:"7",x:"8",y:"3",rx:"1"}],["path",{d:"m2 9 3 3-3 3"}],["rect",{width:"13",height:"7",x:"8",y:"14",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=[["rect",{width:"7",height:"13",x:"3",y:"8",rx:"1"}],["path",{d:"m15 2-3 3-3-3"}],["rect",{width:"7",height:"13",x:"14",y:"8",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=[["path",{d:"M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"}],["path",{d:"M15 14a5 5 0 0 0-7.584 2"}],["path",{d:"M9.964 6.825C8.019 7.977 9.5 13 8 15"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=[["circle",{cx:"18.5",cy:"17.5",r:"3.5"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5"}],["circle",{cx:"15",cy:"5",r:"1"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2"}],["path",{d:"M6 20h4"}],["path",{d:"M14 10h4"}],["path",{d:"M6 14h2v6"}],["path",{d:"M14 4h2v6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=[["path",{d:"M10 10h4"}],["path",{d:"M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"}],["path",{d:"M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z"}],["path",{d:"M 22 16 L 2 16"}],["path",{d:"M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z"}],["path",{d:"M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=[["circle",{cx:"12",cy:"11.9",r:"2"}],["path",{d:"M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6"}],["path",{d:"m8.9 10.1 1.4.8"}],["path",{d:"M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5"}],["path",{d:"m15.1 10.1-1.4.8"}],["path",{d:"M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2"}],["path",{d:"M12 13.9v1.6"}],["path",{d:"M13.5 5.4c-1-.2-2-.2-3 0"}],["path",{d:"M17 16.4c.7-.7 1.2-1.6 1.5-2.5"}],["path",{d:"M5.5 13.9c.3.9.8 1.8 1.5 2.5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=[["path",{d:"M16 7h.01"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"}],["path",{d:"m20 7 2 .5-2 .5"}],["path",{d:"M10 18v3"}],["path",{d:"M14 17.75V21"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=[["circle",{cx:"9",cy:"9",r:"7"}],["circle",{cx:"15",cy:"15",r:"7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=[["path",{d:"M3 3h18"}],["path",{d:"M20 7H8"}],["path",{d:"M20 11H8"}],["path",{d:"M10 19h10"}],["path",{d:"M8 15h12"}],["path",{d:"M4 3v14"}],["circle",{cx:"4",cy:"19",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}],["line",{x1:"18",x2:"21",y1:"12",y2:"12"}],["line",{x1:"3",x2:"6",y1:"12",y2:"12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=[["path",{d:"m17 17-5 5V12l-5 5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M14.5 9.5 17 7l-5-5v4.5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}],["path",{d:"M20.83 14.83a4 4 0 0 0 0-5.66"}],["path",{d:"M18 12h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}],["circle",{cx:"12",cy:"12",r:"4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=[["circle",{cx:"11",cy:"13",r:"9"}],["path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95"}],["path",{d:"m22 2-1.5 1.5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=[["path",{d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m8 13 4-7 4 7"}],["path",{d:"M9.1 11h5.7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=[["path",{d:"M12 6v7"}],["path",{d:"M16 8v3"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M8 8v3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9 9.5 2 2 4-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=[["path",{d:"M2 16V4a2 2 0 0 1 2-2h11"}],["path",{d:"M22 18H11a2 2 0 1 0 0 4h10.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H11a2 2 0 0 0-2 2v12"}],["path",{d:"M5 14H4a2 2 0 1 0 0 4h1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=[["path",{d:"M12 17h1.5"}],["path",{d:"M12 22h1.5"}],["path",{d:"M12 2h1.5"}],["path",{d:"M17.5 22H19a1 1 0 0 0 1-1"}],["path",{d:"M17.5 2H19a1 1 0 0 1 1 1v1.5"}],["path",{d:"M20 14v3h-2.5"}],["path",{d:"M20 8.5V10"}],["path",{d:"M4 10V8.5"}],["path",{d:"M4 19.5V14"}],["path",{d:"M4 4.5A2.5 2.5 0 0 1 6.5 2H8"}],["path",{d:"M8 22H6.5a1 1 0 0 1 0-5H8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=[["path",{d:"M12 13V7"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9 10 3 3 3-3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M8 12v-2a4 4 0 0 1 8 0v2"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"9",cy:"12",r:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=[["path",{d:"M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=[["path",{d:"m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["circle",{cx:"10",cy:"8",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=[["path",{d:"m19 3 1 1"}],["path",{d:"m20 2-4.5 4.5"}],["path",{d:"M20 8v13a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14"}],["circle",{cx:"14",cy:"8",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=[["path",{d:"M18 6V4a2 2 0 1 0-4 0v2"}],["path",{d:"M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10"}],["rect",{x:"12",y:"6",width:"8",height:"5",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=[["path",{d:"M10 2v8l3-3 3 3V2"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M9 10h6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=[["path",{d:"M12 21V7"}],["path",{d:"m16 12 2 2 4-4"}],["path",{d:"M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=[["path",{d:"M12 7v14"}],["path",{d:"M16 12h2"}],["path",{d:"M16 8h2"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}],["path",{d:"M6 12h2"}],["path",{d:"M6 8h2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=[["path",{d:"M12 7v6"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M9 10h6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M8 11h8"}],["path",{d:"M8 7h6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=[["path",{d:"M10 13h4"}],["path",{d:"M12 6v7"}],["path",{d:"M16 8V6H8v2"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=[["path",{d:"M12 13V7"}],["path",{d:"M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2"}],["path",{d:"m9 10 3-3 3 3"}],["path",{d:"m9 5 3-3 3 3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=[["path",{d:"M12 13V7"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9 10 3-3 3 3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=[["path",{d:"M15 13a3 3 0 1 0-6 0"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["circle",{cx:"12",cy:"8",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=[["path",{d:"m14.5 7-5 5"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9.5 7 5 5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"}],["path",{d:"m9 10 2 2 4-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"}],["path",{d:"m14.5 7.5-5 5"}],["path",{d:"m9.5 7.5 5 5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M=[["path",{d:"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"}],["path",{d:"M8 8v1"}],["path",{d:"M12 8v1"}],["path",{d:"M16 8v1"}],["rect",{width:"20",height:"12",x:"2",y:"9",rx:"2"}],["circle",{cx:"8",cy:"15",r:"2"}],["circle",{cx:"16",cy:"15",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=[["path",{d:"M12 6V2H8"}],["path",{d:"m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"}],["path",{d:"M2 12h2"}],["path",{d:"M9 11v2"}],["path",{d:"M15 11v2"}],["path",{d:"M20 12h2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=[["path",{d:"M13.67 8H18a2 2 0 0 1 2 2v4.33"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M22 22 2 2"}],["path",{d:"M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586"}],["path",{d:"M9 13v2"}],["path",{d:"M9.67 4H12v2.33"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=[["path",{d:"M12 8V4H8"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M15 13v2"}],["path",{d:"M9 13v2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{d:"m3.3 7 8.7 5 8.7-5"}],["path",{d:"M12 22V12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"}],["path",{d:"m7 16.5-4.74-2.85"}],["path",{d:"m7 16.5 5-3"}],["path",{d:"M7 16.5v5.17"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"}],["path",{d:"m17 16.5-5-3"}],["path",{d:"m17 16.5 4.74-2.85"}],["path",{d:"M17 16.5v5.17"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"}],["path",{d:"M12 8 7.26 5.15"}],["path",{d:"m12 8 4.74-2.85"}],["path",{d:"M12 13.5V8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=[["path",{d:"M16 3h2a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-2"}],["path",{d:"M8 21H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516"}],["path",{d:"M12 13h4"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1"}],["path",{d:"M12 8h8"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2"}],["circle",{cx:"16",cy:"13",r:".5"}],["circle",{cx:"18",cy:"3",r:".5"}],["circle",{cx:"20",cy:"21",r:".5"}],["circle",{cx:"20",cy:"8",r:".5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=[["path",{d:"M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.636 2.106 3.2 3.2 0 0 0 .164-.546c.028-.13.306-.13.335 0a3.2 3.2 0 0 0 .163.546 4 4 0 0 0 7.636-2.106 4 4 0 0 0 .556-6.588 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m15.7 10.4-.9.4"}],["path",{d:"m9.2 13.2-.9.4"}],["path",{d:"m13.6 15.7-.4-.9"}],["path",{d:"m10.8 9.2-.4-.9"}],["path",{d:"m15.7 13.5-.9-.4"}],["path",{d:"m9.2 10.9-.9-.4"}],["path",{d:"m10.5 15.7.4-.9"}],["path",{d:"m13.1 9.2.4-.9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 9v6"}],["path",{d:"M16 15v6"}],["path",{d:"M16 3v6"}],["path",{d:"M3 15h18"}],["path",{d:"M3 9h18"}],["path",{d:"M8 15v6"}],["path",{d:"M8 3v6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=[["path",{d:"M12 12h.01"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["path",{d:"M10 20v2"}],["path",{d:"M14 20v2"}],["path",{d:"M18 20v2"}],["path",{d:"M21 20H3"}],["path",{d:"M6 20v2"}],["path",{d:"M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12"}],["rect",{x:"4",y:"6",width:"16",height:"10",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["path",{d:"M12 11v4"}],["path",{d:"M14 13h-4"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"}],["path",{d:"M18 6v14"}],["path",{d:"M6 6v14"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["rect",{x:"8",y:"8",width:"8",height:"8",rx:"2"}],["path",{d:"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2"}],["path",{d:"M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["path",{d:"M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M22 13h-4v-2a4 4 0 0 0-4-4h-1.3"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"m2 2 20 20"}],["path",{d:"M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13"}],["path",{d:"M12 20v-8"}],["path",{d:"M6 13H2"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=[["path",{d:"M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}],["path",{d:"M6 13H2"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5"}],["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=[["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"}],["path",{d:"M12 20v-9"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5"}],["path",{d:"M6 13H2"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"M22 13h-4"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}],["path",{d:"M9 22v-4h6v4"}],["path",{d:"M8 6h.01"}],["path",{d:"M16 6h.01"}],["path",{d:"M12 6h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 10h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M8 14h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"}],["path",{d:"M10 6h4"}],["path",{d:"M10 10h4"}],["path",{d:"M10 14h4"}],["path",{d:"M10 18h4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["path",{d:"M4 6 2 7"}],["path",{d:"M10 6h4"}],["path",{d:"m22 7-2-1"}],["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2"}],["path",{d:"M4 11h16"}],["path",{d:"M8 15h.01"}],["path",{d:"M16 15h.01"}],["path",{d:"M6 19v2"}],["path",{d:"M18 21v-2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=[["path",{d:"M8 6v6"}],["path",{d:"M15 6v6"}],["path",{d:"M2 12h19.6"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"}],["circle",{cx:"7",cy:"18",r:"2"}],["path",{d:"M9 18h5"}],["circle",{cx:"16",cy:"18",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"M10 3h.01"}],["path",{d:"M14 2h.01"}],["path",{d:"m2 9 20-5"}],["path",{d:"M12 12V6.5"}],["rect",{width:"16",height:"10",x:"4",y:"12",rx:"3"}],["path",{d:"M9 12v5"}],["path",{d:"M15 12v5"}],["path",{d:"M4 17h16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["path",{d:"M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1"}],["path",{d:"M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9"}],["path",{d:"M21 21v-2h-4"}],["path",{d:"M3 5h4V3"}],["path",{d:"M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=[["circle",{cx:"9",cy:"7",r:"2"}],["path",{d:"M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6"}],["path",{d:"M16 13H3"}],["path",{d:"M16 17H3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"}],["path",{d:"M2 21h20"}],["path",{d:"M7 8v3"}],["path",{d:"M12 8v3"}],["path",{d:"M17 8v3"}],["path",{d:"M7 4h.01"}],["path",{d:"M12 4h.01"}],["path",{d:"M17 4h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18"}],["path",{d:"M16 10h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M8 18h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["path",{d:"M11 14h1v4"}],["path",{d:"M16 2v4"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["path",{d:"m14 18 4 4 4-4"}],["path",{d:"M16 2v4"}],["path",{d:"M18 14v8"}],["path",{d:"M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=[["path",{d:"m14 18 4-4 4 4"}],["path",{d:"M16 2v4"}],["path",{d:"M18 22v-8"}],["path",{d:"M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["path",{d:"M3 10h18"}],["path",{d:"m16 20 2 2 4-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"m9 16 2 2 4-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"}],["path",{d:"M16 2v4"}],["path",{d:"M8 2v4"}],["path",{d:"M3 10h5"}],["path",{d:"M17.5 17.5 16 16.3V14"}],["circle",{cx:"16",cy:"16",r:"6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=[["path",{d:"m15.2 16.9-.9-.4"}],["path",{d:"m15.2 19.1-.9.4"}],["path",{d:"M16 2v4"}],["path",{d:"m16.9 15.2-.4-.9"}],["path",{d:"m16.9 20.8-.4.9"}],["path",{d:"m19.5 14.3-.4.9"}],["path",{d:"m19.5 21.7-.4-.9"}],["path",{d:"M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}],["path",{d:"m21.7 16.5-.9.4"}],["path",{d:"m21.7 19.5-.9-.4"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}],["circle",{cx:"18",cy:"18",r:"3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 18h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M16 18h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z"}],["path",{d:"M3 10h18"}],["path",{d:"M15 22v-4a2 2 0 0 1 2-2h4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=[["path",{d:"M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7"}],["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M10 16h4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["path",{d:"M16 19h6"}],["path",{d:"M16 2v4"}],["path",{d:"M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["path",{d:"M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18"}],["path",{d:"M21 15.5V6a2 2 0 0 0-2-2H9.5"}],["path",{d:"M16 2v4"}],["path",{d:"M3 10h7"}],["path",{d:"M21 10h-5.5"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M10 16h4"}],["path",{d:"M12 14v4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["path",{d:"M3 10h18"}],["path",{d:"M16 19h6"}],["path",{d:"M19 16v6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M16 2v4"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}],["path",{d:"M17 14h-6"}],["path",{d:"M13 18H7"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 18h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["path",{d:"M16 2v4"}],["path",{d:"M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25"}],["path",{d:"m22 22-1.875-1.875"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}],["circle",{cx:"18",cy:"18",r:"3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["path",{d:"M11 10v4h4"}],["path",{d:"m11 14 1.535-1.605a5 5 0 0 1 8 1.5"}],["path",{d:"M16 2v4"}],["path",{d:"m21 18-1.535 1.605a5 5 0 0 1-8-1.5"}],["path",{d:"M21 22v-4h-4"}],["path",{d:"M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3"}],["path",{d:"M3 10h4"}],["path",{d:"M8 2v4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["path",{d:"M3 10h18"}],["path",{d:"m17 22 5-5"}],["path",{d:"m17 17 5 5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"m14 14-4 4"}],["path",{d:"m10 14 4 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16"}],["path",{d:"M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5"}],["path",{d:"M14.121 15.121A3 3 0 1 1 9.88 10.88"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"}],["circle",{cx:"12",cy:"13",r:"3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=[["path",{d:"M10 10v7.9"}],["path",{d:"M11.802 6.145a5 5 0 0 1 6.053 6.053"}],["path",{d:"M14 6.1v2.243"}],["path",{d:"m15.5 15.571-.964.964a5 5 0 0 1-7.071 0 5 5 0 0 1 0-7.07l.964-.965"}],["path",{d:"M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4"}],["path",{d:"m2 2 20 20"}],["path",{d:"M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["path",{d:"M10 7v10.9"}],["path",{d:"M14 6.1V17"}],["path",{d:"M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4"}],["path",{d:"M16.536 7.465a5 5 0 0 0-7.072 0l-2 2a5 5 0 0 0 0 7.07 5 5 0 0 0 7.072 0l2-2a5 5 0 0 0 0-7.07"}],["path",{d:"M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=[["path",{d:"M12 22v-4"}],["path",{d:"M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=[["path",{d:"M10.5 5H19a2 2 0 0 1 2 2v8.5"}],["path",{d:"M17 11h-.5"}],["path",{d:"M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2"}],["path",{d:"m2 2 20 20"}],["path",{d:"M7 11h4"}],["path",{d:"M7 15h2.5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=[["rect",{width:"18",height:"14",x:"3",y:"5",rx:"2",ry:"2"}],["path",{d:"M7 15h4M15 15h2M7 11h2M13 11h4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 14h.01"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["path",{d:"M10 2h4"}],["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 14h.01"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"}],["circle",{cx:"7",cy:"17",r:"2"}],["path",{d:"M9 17h6"}],["circle",{cx:"17",cy:"17",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=[["path",{d:"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2"}],["path",{d:"M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2"}],["path",{d:"M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9"}],["circle",{cx:"8",cy:"19",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t9=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e9=[["circle",{cx:"7",cy:"12",r:"3"}],["path",{d:"M10 9v6"}],["circle",{cx:"17",cy:"12",r:"3"}],["path",{d:"M14 7v8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a9=[["path",{d:"m3 15 4-8 4 8"}],["path",{d:"M4 13h6"}],["circle",{cx:"18",cy:"12",r:"3"}],["path",{d:"M21 9v6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n9=[["path",{d:"m3 15 4-8 4 8"}],["path",{d:"M4 13h6"}],["path",{d:"M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r9=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["circle",{cx:"8",cy:"10",r:"2"}],["path",{d:"M8 12h8"}],["circle",{cx:"16",cy:"10",r:"2"}],["path",{d:"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i9=[["path",{d:"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"}],["path",{d:"M2 12a9 9 0 0 1 8 8"}],["path",{d:"M2 16a5 5 0 0 1 4 4"}],["line",{x1:"2",x2:"2.01",y1:"20",y2:"20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o9=[["path",{d:"M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"}],["path",{d:"M18 11V4H6v7"}],["path",{d:"M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4"}],["path",{d:"M22 11V9"}],["path",{d:"M2 11V9"}],["path",{d:"M6 4V2"}],["path",{d:"M18 4V2"}],["path",{d:"M10 4V2"}],["path",{d:"M14 4V2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h9=[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"}],["path",{d:"M8 14v.5"}],["path",{d:"M16 14v.5"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s9=[["path",{d:"M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97"}],["path",{d:"M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z"}],["path",{d:"M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15"}],["path",{d:"M2 21v-4"}],["path",{d:"M7 9h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"7",y:"13",width:"9",height:"4",rx:"1"}],["rect",{x:"7",y:"5",width:"12",height:"4",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c9=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 11h8"}],["path",{d:"M7 16h3"}],["path",{d:"M7 6h12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d9=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 11h8"}],["path",{d:"M7 16h12"}],["path",{d:"M7 6h3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p9=[["path",{d:"M11 13v4"}],["path",{d:"M15 5v4"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"7",y:"13",width:"9",height:"4",rx:"1"}],["rect",{x:"7",y:"5",width:"12",height:"4",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 16h8"}],["path",{d:"M7 11h12"}],["path",{d:"M7 6h3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=[["path",{d:"M9 5v4"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1"}],["path",{d:"M9 15v2"}],["path",{d:"M17 3v2"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1"}],["path",{d:"M17 13v3"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"15",y:"5",width:"4",height:"12",rx:"1"}],["rect",{x:"7",y:"8",width:"4",height:"9",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l9=[["path",{d:"M13 17V9"}],["path",{d:"M18 17v-3"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M8 17V5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=[["path",{d:"M13 17V9"}],["path",{d:"M18 17V5"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M8 17v-3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u9=[["path",{d:"M11 13H7"}],["path",{d:"M19 9h-4"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"15",y:"5",width:"4",height:"12",rx:"1"}],["rect",{x:"7",y:"8",width:"4",height:"9",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M18 17V9"}],["path",{d:"M13 17V5"}],["path",{d:"M8 17v-3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f9=[["path",{d:"M10 6h8"}],["path",{d:"M12 16h6"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M8 11h7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"m19 9-5 5-4-4-3 3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v9=[["path",{d:"m13.11 7.664 1.78 2.672"}],["path",{d:"m14.162 12.788-3.324 1.424"}],["path",{d:"m20 4-6.06 1.515"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["circle",{cx:"12",cy:"6",r:"2"}],["circle",{cx:"16",cy:"12",r:"2"}],["circle",{cx:"9",cy:"15",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M9=[["path",{d:"M12 20V10"}],["path",{d:"M18 20v-4"}],["path",{d:"M6 20V4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=[["line",{x1:"12",x2:"12",y1:"20",y2:"10"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=[["line",{x1:"18",x2:"18",y1:"20",y2:"10"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y9=[["path",{d:"M12 16v5"}],["path",{d:"M16 14v7"}],["path",{d:"M20 10v11"}],["path",{d:"m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"}],["path",{d:"M4 18v3"}],["path",{d:"M8 14v7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=[["path",{d:"M8 6h10"}],["path",{d:"M6 12h9"}],["path",{d:"M11 18h7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=[["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}],["circle",{cx:"18.5",cy:"5.5",r:".5",fill:"currentColor"}],["circle",{cx:"11.5",cy:"11.5",r:".5",fill:"currentColor"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"14.5",r:".5",fill:"currentColor"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g9=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m9=[["path",{d:"M18 6 7 17l-5-5"}],["path",{d:"m22 10-7.5 7.5L13 16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x9=[["path",{d:"M20 6 9 17l-5-5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w9=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b9=[["path",{d:"M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"}],["path",{d:"M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"}],["path",{d:"M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12"}],["path",{d:"M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _9=[["path",{d:"m6 9 6 6 6-6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C9=[["path",{d:"m17 18-6-6 6-6"}],["path",{d:"M7 6v12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A9=[["path",{d:"m7 18 6-6-6-6"}],["path",{d:"M17 6v12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H9=[["path",{d:"m15 18-6-6 6-6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S9=[["path",{d:"m9 18 6-6-6-6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k9=[["path",{d:"m18 15-6-6-6 6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E9=[["path",{d:"m7 20 5-5 5 5"}],["path",{d:"m7 4 5 5 5-5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L9=[["path",{d:"m7 6 5 5 5-5"}],["path",{d:"m7 13 5 5 5-5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V9=[["path",{d:"m18 8 4 4-4 4"}],["path",{d:"m6 8-4 4 4 4"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D9=[["path",{d:"m9 7-5 5 5 5"}],["path",{d:"m15 7 5 5-5 5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T9=[["path",{d:"m11 17-5-5 5-5"}],["path",{d:"m18 17-5-5 5-5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O9=[["path",{d:"m20 17-5-5 5-5"}],["path",{d:"m4 17 5-5-5-5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P9=[["path",{d:"m6 17 5-5-5-5"}],["path",{d:"m13 17 5-5-5-5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I9=[["path",{d:"m7 15 5 5 5-5"}],["path",{d:"m7 9 5-5 5 5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R9=[["path",{d:"m17 11-5-5-5 5"}],["path",{d:"m17 18-5-5-5 5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B9=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"4"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F9=[["path",{d:"M10 9h4"}],["path",{d:"M12 7v5"}],["path",{d:"M14 22v-4a2 2 0 0 0-4 0v4"}],["path",{d:"M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22"}],["path",{d:"m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z9=[["path",{d:"M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5"}],["path",{d:"M7 12v4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N9=[["path",{d:"M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5"}],["path",{d:"M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5"}],["path",{d:"M7 12v4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 12H8"}],["path",{d:"m12 8-4 4 4 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=[["path",{d:"M2 12a10 10 0 1 1 10 10"}],["path",{d:"m2 22 10-10"}],["path",{d:"M8 22H2v-6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=[["path",{d:"M12 22a10 10 0 1 1 10-10"}],["path",{d:"M22 22 12 12"}],["path",{d:"M22 16v6h-6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=[["path",{d:"M2 8V2h6"}],["path",{d:"m2 2 10 10"}],["path",{d:"M12 2A10 10 0 1 1 2 12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=[["path",{d:"M22 12A10 10 0 1 1 12 2"}],["path",{d:"M22 2 12 12"}],["path",{d:"M16 2h6v6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}],["path",{d:"m12 16 4-4-4-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 10-4 4-4-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m14 16-4-4 4-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m10 8 4 4-4 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m8 14 4-4 4 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q9=[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=[["line",{x1:"8",x2:"16",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j9=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 18V6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z9=[["path",{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0"}],["path",{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"}],["path",{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8"}],["path",{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"}],["path",{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0"}],["path",{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"}],["path",{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8"}],["path",{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"}],["circle",{cx:"12",cy:"12",r:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U9=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W9=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M17 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M7 12h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $9=[["path",{d:"M7 10h10"}],["path",{d:"M7 14h10"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K9=[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G9=[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75"}],["path",{d:"M12 8v8"}],["path",{d:"M16 12H8"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=[["path",{d:"M15.6 2.7a10 10 0 1 0 5.7 5.7"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M13.4 10.6 19 5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X9=[["path",{d:"m2 2 20 20"}],["path",{d:"M8.35 2.69A10 10 0 0 1 21.3 15.65"}],["path",{d:"M19.08 19.08A10 10 0 1 1 4.92 4.92"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m5 5 14 14"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2"}],["path",{d:"M9 17v-2.34"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=[["circle",{cx:"12",cy:"12",r:"10"}],["polygon",{points:"10 8 16 12 10 16 10 8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=[["path",{d:"M12 7v4"}],["path",{d:"M7.998 9.003a5 5 0 1 0 8-.005"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=[["path",{d:"M22 2 2 22"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y9=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J9=[["circle",{cx:"12",cy:"12",r:"6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=[["circle",{cx:"12",cy:"12",r:"10"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=[["path",{d:"M18 20a6 6 0 0 0-12 0"}],["circle",{cx:"12",cy:"10",r:"4"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q9=[["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4"}],["circle",{cx:"15",cy:"15",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=[["path",{d:"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"}],["path",{d:"M19.65 15.66A8 8 0 0 1 8.35 4.34"}],["path",{d:"m14 10-5.5 5.5"}],["path",{d:"M14 17.85V10H6.15"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"}],["path",{d:"m6.2 5.3 3.1 3.9"}],["path",{d:"m12.4 3.4 3.1 4"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4"}],["path",{d:"M21 14H11"}],["path",{d:"m15 10-4 4 4 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M12 11h4"}],["path",{d:"M12 16h4"}],["path",{d:"M8 11h.01"}],["path",{d:"M8 16h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 14h6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=[["path",{d:"M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10"}],["path",{d:"m17 10 4 4-4 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1"}],["path",{d:"M8 18h1"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5"}],["path",{d:"M4 13.5V6a2 2 0 0 1 2-2h2"}],["path",{d:"M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 14h6"}],["path",{d:"M12 17v-6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 12v-1h6v1"}],["path",{d:"M11 17h2"}],["path",{d:"M12 11v6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m15 11-6 6"}],["path",{d:"m9 11 6 6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 14.5 8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 8 10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 9.5 8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16.5 12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 14.5 16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 12 16.5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 9.5 16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 7.5 12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 8 14"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=[["path",{d:"M12 6v6l4 2"}],["path",{d:"M16 21.16a10 10 0 1 1 5-13.516"}],["path",{d:"M20 11.5v6"}],["path",{d:"M20 21.5h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=[["path",{d:"M12.338 21.994A10 10 0 1 1 21.925 13.227"}],["path",{d:"M12 6v6l2 1"}],["path",{d:"m14 18 4 4 4-4"}],["path",{d:"M18 14v8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=[["path",{d:"M13.228 21.925A10 10 0 1 1 21.994 12.338"}],["path",{d:"M12 6v6l1.562.781"}],["path",{d:"m14 18 4-4 4 4"}],["path",{d:"M18 22v-8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75"}],["path",{d:"M12 6v6l4 2"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["path",{d:"M12 12v4"}],["path",{d:"M12 20h.01"}],["path",{d:"M17 18h.5a1 1 0 0 0 0-9h-1.79A7 7 0 1 0 7 17.708"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=[["circle",{cx:"12",cy:"17",r:"3"}],["path",{d:"M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"}],["path",{d:"m15.7 18.4-.9-.3"}],["path",{d:"m9.2 15.9-.9-.3"}],["path",{d:"m10.6 20.7.3-.9"}],["path",{d:"m13.1 14.2.3-.9"}],["path",{d:"m13.6 20.7-.4-1"}],["path",{d:"m10.8 14.3-.4-1"}],["path",{d:"m8.3 18.6 1-.4"}],["path",{d:"m14.7 15.8 1-.4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=[["path",{d:"M12 13v8l-4-4"}],["path",{d:"m12 21 4-4"}],["path",{d:"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M8 19v1"}],["path",{d:"M8 14v1"}],["path",{d:"M16 19v1"}],["path",{d:"M16 14v1"}],["path",{d:"M12 21v1"}],["path",{d:"M12 16v1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 17H7"}],["path",{d:"M17 21H9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 14v2"}],["path",{d:"M8 14v2"}],["path",{d:"M16 20h.01"}],["path",{d:"M8 20h.01"}],["path",{d:"M12 16v2"}],["path",{d:"M12 22h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"}],["path",{d:"m13 12-3 5h4l-3 5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=[["path",{d:"M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197"}],["path",{d:"M11 20v2"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"}],["path",{d:"M7 19v2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=[["path",{d:"M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197"}],["path",{d:"M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=[["path",{d:"m2 2 20 20"}],["path",{d:"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193"}],["path",{d:"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"m9.2 22 3-7"}],["path",{d:"m9 13-3 7"}],["path",{d:"m17 13-3 7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 14v6"}],["path",{d:"M8 14v6"}],["path",{d:"M12 16v6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M8 15h.01"}],["path",{d:"M8 19h.01"}],["path",{d:"M12 17h.01"}],["path",{d:"M12 21h.01"}],["path",{d:"M16 15h.01"}],["path",{d:"M16 19h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=[["path",{d:"M12 2v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"M20 12h2"}],["path",{d:"m19.07 4.93-1.41 1.41"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"}],["path",{d:"M11 20v2"}],["path",{d:"M7 19v2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=[["path",{d:"M12 2v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"M20 12h2"}],["path",{d:"m19.07 4.93-1.41 1.41"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=[["path",{d:"M12 13v8"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"m8 17 4-4 4 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=[["path",{d:"M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}],["path",{d:"M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=[["path",{d:"M16.17 7.83 2 22"}],["path",{d:"M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12"}],["path",{d:"m7.83 7.83 8.34 8.34"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=[["path",{d:"M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z"}],["path",{d:"M12 17.66L12 22"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=[["path",{d:"m18 16 4-4-4-4"}],["path",{d:"m6 8-4 4 4 4"}],["path",{d:"m14.5 4-5 16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=[["polyline",{points:"16 18 22 12 16 6"}],["polyline",{points:"8 6 2 12 8 18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=[["polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"}],["line",{x1:"12",x2:"12",y1:"22",y2:"15.5"}],["polyline",{points:"22 8.5 12 15.5 2 8.5"}],["polyline",{points:"2 15.5 12 8.5 22 15.5"}],["line",{x1:"12",x2:"12",y1:"2",y2:"8.5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}],["polyline",{points:"7.5 4.21 12 6.81 16.5 4.21"}],["polyline",{points:"7.5 19.79 7.5 14.6 3 12"}],["polyline",{points:"21 12 16.5 14.6 16.5 19.79"}],["polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}],["line",{x1:"12",x2:"12",y1:"22.08",y2:"12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=[["path",{d:"M10 2v2"}],["path",{d:"M14 2v2"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"}],["path",{d:"M6 2v2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"}],["path",{d:"M12 2v2"}],["path",{d:"M12 22v-2"}],["path",{d:"m17 20.66-1-1.73"}],["path",{d:"M11 10.27 7 3.34"}],["path",{d:"m20.66 17-1.73-1"}],["path",{d:"m3.34 7 1.73 1"}],["path",{d:"M14 12h8"}],["path",{d:"M2 12h2"}],["path",{d:"m20.66 7-1.73 1"}],["path",{d:"m3.34 17 1.73-1"}],["path",{d:"m17 3.34-1 1.73"}],["path",{d:"m11 13.73-4 6.93"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=[["circle",{cx:"8",cy:"8",r:"6"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18"}],["path",{d:"M7 6h1v4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 3v18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"M15 3v18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7.5 3v18"}],["path",{d:"M12 3v18"}],["path",{d:"M16.5 3v18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=[["path",{d:"M10 18H5a3 3 0 0 1-3-3v-1"}],["path",{d:"M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}],["path",{d:"M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}],["path",{d:"m7 21 3-3-3-3"}],["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=[["path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}],["path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}],["path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}],["path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h2"}],["path",{d:"M12 18h6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=[["path",{d:"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98"}],["ellipse",{cx:"12",cy:"19",rx:"9",ry:"3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=[["path",{d:"M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z"}],["path",{d:"M20 16a8 8 0 1 0-16 0"}],["path",{d:"M12 4v4"}],["path",{d:"M10 4h4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1"}],["path",{d:"M17 14v7"}],["path",{d:"M7 14v7"}],["path",{d:"M17 3v3"}],["path",{d:"M7 3v3"}],["path",{d:"M10 14 2.3 6.3"}],["path",{d:"m14 6 7.7 7.7"}],["path",{d:"m8 6 8 8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=[["path",{d:"M16 2v2"}],["path",{d:"M17.915 22a6 6 0 0 0-12 0"}],["path",{d:"M8 2v2"}],["circle",{cx:"12",cy:"12",r:"4"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=[["path",{d:"M16 2v2"}],["path",{d:"M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"}],["path",{d:"M8 2v2"}],["circle",{cx:"12",cy:"11",r:"3"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"}],["path",{d:"M10 21.9V14L2.1 9.1"}],["path",{d:"m10 14 11.9-6.9"}],["path",{d:"M14 19.8v-8.1"}],["path",{d:"M18 17.5V9.4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"}],["path",{d:"M8.5 8.5v.01"}],["path",{d:"M16 15.5v.01"}],["path",{d:"M12 12v.01"}],["path",{d:"M11 17v.01"}],["path",{d:"M7 14v.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=[["path",{d:"m12 15 2 2 4-4"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=[["line",{x1:"12",x2:"18",y1:"15",y2:"15"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=[["line",{x1:"15",x2:"15",y1:"12",y2:"18"}],["line",{x1:"12",x2:"18",y1:"15",y2:"15"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=[["line",{x1:"12",x2:"18",y1:"18",y2:"12"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=[["line",{x1:"12",x2:"18",y1:"12",y2:"18"}],["line",{x1:"12",x2:"18",y1:"18",y2:"12"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.17 14.83a4 4 0 1 0 0-5.66"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M14.83 14.83a4 4 0 1 1 0-5.66"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=[["polyline",{points:"15 10 20 15 15 20"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=[["polyline",{points:"9 10 4 15 9 20"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=[["polyline",{points:"14 15 9 20 4 15"}],["path",{d:"M20 4h-7a4 4 0 0 0-4 4v12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=[["polyline",{points:"14 9 9 4 4 9"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=[["polyline",{points:"10 15 15 20 20 15"}],["path",{d:"M4 4h7a4 4 0 0 1 4 4v12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=[["polyline",{points:"10 9 15 4 20 9"}],["path",{d:"M4 20h7a4 4 0 0 0 4-4V4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=[["polyline",{points:"9 14 4 9 9 4"}],["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=[["polyline",{points:"15 14 20 9 15 4"}],["path",{d:"M4 20v-7a4 4 0 0 1 4-4h12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1"}],["path",{d:"M15 2v2"}],["path",{d:"M15 20v2"}],["path",{d:"M2 15h2"}],["path",{d:"M2 9h2"}],["path",{d:"M20 15h2"}],["path",{d:"M20 9h2"}],["path",{d:"M9 2v2"}],["path",{d:"M9 20v2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"}],["path",{d:"M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=[["path",{d:"M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"}],["path",{d:"M5 21h14"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=[["path",{d:"m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z"}],["path",{d:"M10 22v-8L2.25 9.15"}],["path",{d:"m10 14 11.77-6.87"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8"}],["path",{d:"M5 8h14"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"}],["path",{d:"m12 8 1-6h2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=[["circle",{cx:"12",cy:"12",r:"8"}],["line",{x1:"3",x2:"6",y1:"3",y2:"6"}],["line",{x1:"21",x2:"18",y1:"3",y2:"6"}],["line",{x1:"3",x2:"6",y1:"21",y2:"18"}],["line",{x1:"21",x2:"18",y1:"21",y2:"18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=[["path",{d:"M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["path",{d:"M2 6h4"}],["path",{d:"M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 12a9 3 0 0 0 5 2.69"}],["path",{d:"M21 9.3V5"}],["path",{d:"M3 5v14a9 3 0 0 0 6.47 2.88"}],["path",{d:"M12 12v4h4"}],["path",{d:"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 15 21.84"}],["path",{d:"M21 5V8"}],["path",{d:"M21 12L18 17H22L19 22"}],["path",{d:"M3 12A9 3 0 0 0 14.59 14.87"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=[["path",{d:"M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"}],["path",{d:"m12 9 6 6"}],["path",{d:"m18 9-6 6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=[["circle",{cx:"12",cy:"4",r:"2"}],["path",{d:"M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8"}],["path",{d:"M3.2 14.8a9 9 0 0 0 17.6 0"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=[["circle",{cx:"19",cy:"19",r:"2"}],["circle",{cx:"5",cy:"5",r:"2"}],["path",{d:"M6.48 3.66a10 10 0 0 1 13.86 13.86"}],["path",{d:"m6.41 6.41 11.18 11.18"}],["path",{d:"M3.66 6.48a10 10 0 0 0 13.86 13.86"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z"}],["path",{d:"M9.2 9.2h.01"}],["path",{d:"m14.5 9.5-5 5"}],["path",{d:"M14.7 14.8h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=[["path",{d:"M12 8v8"}],["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M12 12h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M15 9h.01"}],["path",{d:"M9 15h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M8 16h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 16h.01"}],["path",{d:"M16 16h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 16h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"M12 12h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M16 12h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 12h.01"}],["path",{d:"M8 16h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 14h.01"}],["path",{d:"M15 6h.01"}],["path",{d:"M18 9h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=[["path",{d:"M12 3v14"}],["path",{d:"M5 10h14"}],["path",{d:"M5 21h14"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 12h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"12",r:"5"}],["path",{d:"M12 12h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=[["circle",{cx:"12",cy:"6",r:"1"}],["line",{x1:"5",x2:"19",y1:"12",y2:"12"}],["circle",{cx:"12",cy:"18",r:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=[["path",{d:"M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8"}],["path",{d:"m17 6-2.891-2.891"}],["path",{d:"M2 15c3.333-3 6.667-3 10-3"}],["path",{d:"m2 2 20 20"}],["path",{d:"m20 9 .891.891"}],["path",{d:"M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1"}],["path",{d:"M3.109 14.109 4 15"}],["path",{d:"m6.5 12.5 1 1"}],["path",{d:"m7 18 2.891 2.891"}],["path",{d:"M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=[["path",{d:"m10 16 1.5 1.5"}],["path",{d:"m14 8-1.5-1.5"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"}],["path",{d:"m16.5 10.5 1 1"}],["path",{d:"m17 6-2.891-2.891"}],["path",{d:"M2 15c6.667-6 13.333 0 20-6"}],["path",{d:"m20 9 .891.891"}],["path",{d:"M3.109 14.109 4 15"}],["path",{d:"m6.5 12.5 1 1"}],["path",{d:"m7 18 2.891 2.891"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=[["path",{d:"M2 8h20"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M6 16h12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=[["path",{d:"M11.25 16.25h1.5L12 17z"}],["path",{d:"M16 14v.5"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"}],["path",{d:"M8 14v.5"}],["path",{d:"M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=[["line",{x1:"12",x2:"12",y1:"2",y2:"22"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=[["path",{d:"M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=[["path",{d:"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"}],["path",{d:"M2 20h20"}],["path",{d:"M14 12v.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=[["path",{d:"M13 4h3a2 2 0 0 1 2 2v14"}],["path",{d:"M2 20h3"}],["path",{d:"M13 20h9"}],["path",{d:"M10 12v.01"}],["path",{d:"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=[["circle",{cx:"12.1",cy:"12.1",r:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=[["path",{d:"m12.99 6.74 1.93 3.44"}],["path",{d:"M19.136 12a10 10 0 0 1-14.271 0"}],["path",{d:"m21 21-2.16-3.84"}],["path",{d:"m3 21 8.02-14.26"}],["circle",{cx:"12",cy:"5",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=[["path",{d:"M10 11h.01"}],["path",{d:"M14 6h.01"}],["path",{d:"M18 6h.01"}],["path",{d:"M6.5 13.1h.01"}],["path",{d:"M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3"}],["path",{d:"M17.4 9.9c-.8.8-2 .8-2.8 0"}],["path",{d:"M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"}],["path",{d:"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=[["path",{d:"M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z"}],["path",{d:"M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8"}],["path",{d:"M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3"}],["path",{d:"M18 6h4"}],["path",{d:"m5 10-2 8"}],["path",{d:"m7 18 2-8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=[["path",{d:"M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586"}],["path",{d:"m2 2 20 20"}],["path",{d:"M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=[["path",{d:"m2 2 8 8"}],["path",{d:"m22 2-8 8"}],["ellipse",{cx:"12",cy:"9",rx:"10",ry:"5"}],["path",{d:"M7 13.4v7.9"}],["path",{d:"M12 14v8"}],["path",{d:"M17 13.4v7.9"}],["path",{d:"M2 9v8a10 5 0 0 0 20 0V9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=[["path",{d:"M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23"}],["path",{d:"m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=[["path",{d:"M14.4 14.4 9.6 9.6"}],["path",{d:"M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"}],["path",{d:"m21.5 21.5-1.4-1.4"}],["path",{d:"M3.9 3.9 2.5 2.5"}],["path",{d:"M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=[["path",{d:"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46"}],["path",{d:"M6 8.5c0-.75.13-1.47.36-2.14"}],["path",{d:"M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76"}],["path",{d:"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=[["path",{d:"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"}],["path",{d:"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=[["path",{d:"M7 3.34V5a3 3 0 0 0 3 3"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"}],["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54"}],["path",{d:"M12 2a10 10 0 1 0 9.54 13"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a7 7 0 1 0 10 10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=[["circle",{cx:"11.5",cy:"12.5",r:"3.5"}],["path",{d:"M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=[["path",{d:"M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625"}],["path",{d:"M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=[["path",{d:"M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"12",cy:"5",r:"1"}],["circle",{cx:"12",cy:"19",r:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=[["path",{d:"M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0"}],["path",{d:"M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=[["line",{x1:"5",x2:"19",y1:"9",y2:"9"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=[["line",{x1:"5",x2:"19",y1:"9",y2:"9"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"}],["path",{d:"M22 21H7"}],["path",{d:"m5 11 9 9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=[["path",{d:"m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z"}],["path",{d:"M6 8v1"}],["path",{d:"M10 8v1"}],["path",{d:"M14 8v1"}],["path",{d:"M18 8v1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=[["path",{d:"m15 15 6 6"}],["path",{d:"m15 9 6-6"}],["path",{d:"M21 16.2V21h-4.8"}],["path",{d:"M21 7.8V3h-4.8"}],["path",{d:"M3 16.2V21h4.8"}],["path",{d:"m3 21 6-6"}],["path",{d:"M3 7.8V3h4.8"}],["path",{d:"M9 9 3 3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=[["path",{d:"m15 18-.722-3.25"}],["path",{d:"M2 8a10.645 10.645 0 0 0 20 0"}],["path",{d:"m20 15-1.726-2.05"}],["path",{d:"m4 15 1.726-2.05"}],["path",{d:"m9 18 .722-3.25"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M17 18h1"}],["path",{d:"M12 18h1"}],["path",{d:"M7 18h1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"}],["path",{d:"M12 12v.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=[["polygon",{points:"13 19 22 12 13 5 13 19"}],["polygon",{points:"2 19 11 12 2 5 2 19"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=[["path",{d:"M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"}],["path",{d:"M16 8 2 22"}],["path",{d:"M17.5 15H9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=[["path",{d:"M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}],["path",{d:"M6 8h4"}],["path",{d:"M6 18h4"}],["path",{d:"m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}],["path",{d:"M14 8h4"}],["path",{d:"M14 18h4"}],["path",{d:"m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=[["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M12 2v4"}],["path",{d:"m6.8 15-3.5 2"}],["path",{d:"m20.7 7-3.5 2"}],["path",{d:"M6.8 9 3.3 7"}],["path",{d:"m20.7 17-3.5-2"}],["path",{d:"m9 22 3-8 3 8"}],["path",{d:"M8 22h8"}],["path",{d:"M18 18.7a9 9 0 1 0-12 0"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=[["path",{d:"M10 12v-1"}],["path",{d:"M10 18v-2"}],["path",{d:"M10 7V6"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01"}],["circle",{cx:"10",cy:"20",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"3",cy:"17",r:"1"}],["path",{d:"M2 17v-3a4 4 0 0 1 8 0v3"}],["circle",{cx:"9",cy:"17",r:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=[["path",{d:"M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m8 18 4-4"}],["path",{d:"M8 10v8h8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m14 12.5 1 5.5-3-1-3 1 1-5.5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}],["path",{d:"M7 16.5 8 22l-3-1-3 1 1-5.5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=[["path",{d:"M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z"}],["path",{d:"M7 17v5"}],["path",{d:"M11.7 14.2 7 17l-4.7-2.8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 18v-2"}],["path",{d:"M12 18v-4"}],["path",{d:"M16 18v-6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 18v-1"}],["path",{d:"M12 18v-6"}],["path",{d:"M16 18v-3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m16 13-3.5 3.5-2-2L8 17"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5"}],["path",{d:"M4.017 11.512a6 6 0 1 0 8.466 8.475"}],["path",{d:"M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m3 15 2 2 4-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m9 15 2 2 4-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"8",cy:"16",r:"6"}],["path",{d:"M9.5 17.5 8 16.25V14"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m5 12-3 3 3 3"}],["path",{d:"m9 18 3-3-3-3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=[["path",{d:"M10 12.5 8 15l2 2.5"}],["path",{d:"m14 12.5 2 2.5-2 2.5"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M9 10h6"}],["path",{d:"M12 13V7"}],["path",{d:"M9 17h6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m3.2 12.9-.9-.4"}],["path",{d:"m3.2 15.1-.9.4"}],["path",{d:"M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5"}],["path",{d:"m4.9 11.2-.4-.9"}],["path",{d:"m4.9 16.8-.4.9"}],["path",{d:"m7.5 10.3-.4.9"}],["path",{d:"m7.5 17.7-.4-.9"}],["path",{d:"m9.7 12.5-.9.4"}],["path",{d:"m9.7 15.5-.9-.4"}],["circle",{cx:"6",cy:"14",r:"3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["rect",{width:"4",height:"6",x:"2",y:"12",rx:"2"}],["path",{d:"M10 12h2v6"}],["path",{d:"M10 18h4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M12 18v-6"}],["path",{d:"m9 15 3 3 3-3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"10",cy:"12",r:"2"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M2 15h10"}],["path",{d:"m9 18 3-3-3-3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"}],["path",{d:"M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"4",cy:"16",r:"2"}],["path",{d:"m10 10-4.5 4.5"}],["path",{d:"m9 11 1 1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["circle",{cx:"10",cy:"16",r:"2"}],["path",{d:"m16 10-4.5 4.5"}],["path",{d:"m15 11 1 1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"5",x:"2",y:"13",rx:"1"}],["path",{d:"M8 13v-2a2 2 0 1 0-4 0v2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["rect",{width:"8",height:"6",x:"8",y:"12",rx:"1"}],["path",{d:"M10 12v-2a2 2 0 1 1 4 0v2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M3 15h6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M9 15h6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=[["path",{d:"M10.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v8.4"}],["path",{d:"M8 18v-7.7L16 9v7"}],["circle",{cx:"14",cy:"16",r:"2"}],["circle",{cx:"6",cy:"18",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6"}],["path",{d:"m5 11-3 3"}],["path",{d:"m5 17-3-3h10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=[["path",{d:"m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}],["path",{d:"M8 18h1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=[["path",{d:"M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M3 15h6"}],["path",{d:"M6 12v6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M9 15h6"}],["path",{d:"M12 18v-6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=[["path",{d:"M12 17h.01"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=[["path",{d:"M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M16 14a2 2 0 0 0-2 2"}],["path",{d:"M20 14a2 2 0 0 1 2 2"}],["path",{d:"M20 22a2 2 0 0 0 2-2"}],["path",{d:"M16 22a2 2 0 0 1-2-2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5"}],["path",{d:"M13.3 16.3 15 18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ow=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"m9 18-1.5-1.5"}],["circle",{cx:"5",cy:"14",r:"3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 12h8"}],["path",{d:"M10 11v2"}],["path",{d:"M8 17h8"}],["path",{d:"M14 16v2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 13h2"}],["path",{d:"M14 13h2"}],["path",{d:"M8 17h2"}],["path",{d:"M14 17h2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=[["path",{d:"m10 18 3-3-3-3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=[["path",{d:"M21 7h-3a2 2 0 0 1-2-2V2"}],["path",{d:"M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z"}],["path",{d:"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15"}],["path",{d:"M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m8 16 2-2-2-2"}],["path",{d:"M12 18h4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M2 13v-1h6v1"}],["path",{d:"M5 12v6"}],["path",{d:"M4 18h2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M9 13v-1h6v1"}],["path",{d:"M12 12v6"}],["path",{d:"M11 18h2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M12 12v6"}],["path",{d:"m15 15-3-3-3 3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M15 18a3 3 0 1 0-6 0"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"}],["circle",{cx:"12",cy:"13",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uw=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"6",x:"2",y:"12",rx:"1"}],["path",{d:"m10 15.5 4 2.5v-6l-4 2.5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m10 11 5 3-5 3v-6Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 15h.01"}],["path",{d:"M11.5 13.5a2.5 2.5 0 0 1 0 3"}],["path",{d:"M15 12a5 5 0 0 1 0 6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=[["path",{d:"M11 11a5 5 0 0 1 0 6"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 6.765V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-.93-.23"}],["path",{d:"M7 10.51a.5.5 0 0 0-.826-.38l-1.893 1.628A1 1 0 0 1 3.63 12H2.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.129a1 1 0 0 1 .652.242l1.893 1.63a.5.5 0 0 0 .826-.38z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m8 12.5-5 5"}],["path",{d:"m3 12.5 5 5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m14.5 12.5-5 5"}],["path",{d:"m9.5 12.5 5 5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=[["path",{d:"M20 7h-3a2 2 0 0 1-2-2V2"}],["path",{d:"M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"}],["path",{d:"M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 3v18"}],["path",{d:"M3 7.5h4"}],["path",{d:"M3 12h18"}],["path",{d:"M3 16.5h4"}],["path",{d:"M17 3v18"}],["path",{d:"M17 7.5h4"}],["path",{d:"M17 16.5h4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02"}],["path",{d:"M2 12a10 10 0 0 1 18-6"}],["path",{d:"M2 16h.01"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=[["path",{d:"M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5"}],["path",{d:"M9 18h8"}],["path",{d:"M18 3h-3"}],["path",{d:"M11 3a6 6 0 0 0-6 6v11"}],["path",{d:"M5 13h4"}],["path",{d:"M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=[["path",{d:"M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=[["path",{d:"M2 16s9-15 20-4C11 23 2 8 2 8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"}],["path",{d:"M18 12v.5"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=[["path",{d:"M8 2c3 0 5 2 8 2s4-1 4-1v11"}],["path",{d:"M4 22V4"}],["path",{d:"M4 15s1-1 4-1 5 2 8 2"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=[["path",{d:"M17 22V2L7 7l10 5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=[["path",{d:"M7 22V2l10 5-10 5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=[["path",{d:"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"}],["path",{d:"m5 22 14-4"}],["path",{d:"m5 18 14 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=[["path",{d:"M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4"}],["path",{d:"M7 2h11v4c0 2-2 2-2 4v1"}],["line",{x1:"11",x2:"18",y1:"6",y2:"6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=[["path",{d:"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"}],["line",{x1:"6",x2:"18",y1:"6",y2:"6"}],["line",{x1:"12",x2:"12",y1:"12",y2:"12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=[["path",{d:"M10 2v2.343"}],["path",{d:"M14 2v6.343"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563"}],["path",{d:"M6.453 15H15"}],["path",{d:"M8.5 2h7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"}],["path",{d:"M6.453 15h11.094"}],["path",{d:"M8.5 2h7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=[["path",{d:"M10 2v6.292a7 7 0 1 0 4 0V2"}],["path",{d:"M5 15h14"}],["path",{d:"M8.5 2h7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=[["path",{d:"m3 7 5 5-5 5V7"}],["path",{d:"m21 7-5 5 5 5V7"}],["path",{d:"M12 20v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 2v2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"}],["path",{d:"M12 20v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 2v2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=[["path",{d:"m17 3-5 5-5-5h10"}],["path",{d:"m17 21-5-5-5 5h10"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=[["path",{d:"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"}],["circle",{cx:"12",cy:"8",r:"2"}],["path",{d:"M12 10v12"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"}],["path",{d:"M12 7.5V9"}],["path",{d:"M7.5 12H9"}],["path",{d:"M16.5 12H15"}],["path",{d:"M12 16.5V15"}],["path",{d:"m8 8 1.88 1.88"}],["path",{d:"M14.12 9.88 16 8"}],["path",{d:"m8 16 1.88-1.88"}],["path",{d:"M14.12 14.12 16 16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=[["path",{d:"M2 12h6"}],["path",{d:"M22 12h-6"}],["path",{d:"M12 2v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 20v2"}],["path",{d:"m19 9-3 3 3 3"}],["path",{d:"m5 15 3-3-3-3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["path",{d:"M12 22v-6"}],["path",{d:"M12 8V2"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}],["path",{d:"m15 19-3-3-3 3"}],["path",{d:"m15 5-3 3-3-3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=[["circle",{cx:"15",cy:"19",r:"2"}],["path",{d:"M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"}],["path",{d:"M15 11v-1"}],["path",{d:"M15 17v-2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"m9 13 2 2 4-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=[["circle",{cx:"16",cy:"16",r:"6"}],["path",{d:"M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2"}],["path",{d:"M16 14v2l1 1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M2 10h20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=[["path",{d:"M10 10.5 8 13l2 2.5"}],["path",{d:"m14 10.5 2 2.5-2 2.5"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=[["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3"}],["path",{d:"m21.7 19.4-.9-.3"}],["path",{d:"m15.2 16.9-.9-.3"}],["path",{d:"m16.6 21.7.3-.9"}],["path",{d:"m19.1 15.2.3-.9"}],["path",{d:"m19.6 21.7-.4-1"}],["path",{d:"m16.8 15.3-.4-1"}],["path",{d:"m14.3 19.6 1-.4"}],["path",{d:"m20.7 16.8 1-.4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["circle",{cx:"12",cy:"13",r:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M12 10v6"}],["path",{d:"m15 13-3 3-3-3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"}],["circle",{cx:"13",cy:"12",r:"2"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8"}],["circle",{cx:"20",cy:"19",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=[["circle",{cx:"12",cy:"13",r:"2"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M14 13h3"}],["path",{d:"M7 13h3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=[["path",{d:"M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5"}],["path",{d:"M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01c.95.95 1 2.53-.2 3.74L17.5 21Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"}],["path",{d:"M2 13h10"}],["path",{d:"m9 16 3-3-3-3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["path",{d:"M8 10v4"}],["path",{d:"M12 10v2"}],["path",{d:"M16 10v6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=[["circle",{cx:"16",cy:"20",r:"2"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2"}],["path",{d:"m22 14-4.5 4.5"}],["path",{d:"m21 15 1 1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=[["rect",{width:"8",height:"5",x:"14",y:"17",rx:"1"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=[["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=[["path",{d:"m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"}],["circle",{cx:"14",cy:"15",r:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=[["path",{d:"M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5"}],["path",{d:"M2 13h10"}],["path",{d:"m5 10-3 3 3 3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=[["path",{d:"M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5"}],["path",{d:"M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["circle",{cx:"12",cy:"13",r:"2"}],["path",{d:"M12 15v5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=[["circle",{cx:"11.5",cy:"12.5",r:"2.5"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M13.3 14.3 15 16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=[["path",{d:"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"}],["path",{d:"m21 21-1.9-1.9"}],["circle",{cx:"17",cy:"17",r:"3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"}],["path",{d:"m8 16 3-3-3-3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5"}],["path",{d:"M12 10v4h4"}],["path",{d:"m12 14 1.535-1.605a5 5 0 0 1 8 1.5"}],["path",{d:"M22 22v-4h-4"}],["path",{d:"m22 18-1.535 1.605a5 5 0 0 1-8-1.5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M12 10v6"}],["path",{d:"m9 13 3-3 3 3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"m9.5 10.5 5 5"}],["path",{d:"m14.5 10.5-5 5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=[["path",{d:"M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"}],["path",{d:"M2 8v11a2 2 0 0 0 2 2h14"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"}],["path",{d:"M16 17h4"}],["path",{d:"M4 13h4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=[["path",{d:"M12 12H5a2 2 0 0 0-2 2v5"}],["circle",{cx:"13",cy:"19",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=[["polyline",{points:"15 17 20 12 15 7"}],["path",{d:"M4 18v-2a4 4 0 0 1 4-4h12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=[["line",{x1:"22",x2:"2",y1:"6",y2:"6"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=[["path",{d:"M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=[["line",{x1:"3",x2:"15",y1:"22",y2:"22"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["rect",{width:"10",height:"8",x:"7",y:"8",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=[["path",{d:"M13.354 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l1.218-1.348"}],["path",{d:"M16 6h6"}],["path",{d:"M19 3v6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=[["path",{d:"M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"}],["path",{d:"m16.5 3.5 5 5"}],["path",{d:"m21.5 3.5-5 5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=[["path",{d:"M2 7v10"}],["path",{d:"M6 5v14"}],["rect",{width:"12",height:"18",x:"10",y:"3",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=[["path",{d:"M2 3v18"}],["rect",{width:"12",height:"18",x:"6",y:"3",rx:"2"}],["path",{d:"M22 3v18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=[["rect",{width:"18",height:"14",x:"3",y:"3",rx:"2"}],["path",{d:"M4 21h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 21h1"}],["path",{d:"M19 21h1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=[["path",{d:"M7 2h10"}],["path",{d:"M5 6h14"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=[["path",{d:"M3 2h18"}],["rect",{width:"18",height:"12",x:"3",y:"6",rx:"2"}],["path",{d:"M3 22h18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=[["line",{x1:"6",x2:"10",y1:"11",y2:"11"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=[["line",{x1:"6",x2:"10",y1:"12",y2:"12"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=[["path",{d:"m12 14 4-4"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"}],["path",{d:"m16 16 6-6"}],["path",{d:"m8 8 6-6"}],["path",{d:"m9 7 8 8"}],["path",{d:"m21 11-8-8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=[["path",{d:"M6 3h12l4 6-10 13L2 9Z"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6"}],["path",{d:"M2 9h20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=[["path",{d:"M9 10h.01"}],["path",{d:"M15 10h.01"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}],["path",{d:"M12 8v13"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=[["path",{d:"M6 3v12"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M15 6a9 9 0 0 0-9 9"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=[["line",{x1:"6",x2:"6",y1:"3",y2:"15"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M18 9a9 9 0 0 1-9 9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=[["circle",{cx:"12",cy:"12",r:"3"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=[["path",{d:"M12 3v6"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 15v6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_=[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7"}],["path",{d:"m15 9-3-3 3-3"}],["circle",{cx:"19",cy:"18",r:"3"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9"}],["path",{d:"m9 15 3 3-3 3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=[["circle",{cx:"12",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["circle",{cx:"18",cy:"6",r:"3"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"}],["path",{d:"M12 12v3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v6"}],["circle",{cx:"5",cy:"18",r:"3"}],["path",{d:"M12 3v18"}],["circle",{cx:"19",cy:"6",r:"3"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v12"}],["circle",{cx:"19",cy:"18",r:"3"}],["path",{d:"m15 9-3-3 3-3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 9v12"}],["path",{d:"m21 3-6 6"}],["path",{d:"m21 9-6-6"}],["path",{d:"M18 11.5V15"}],["circle",{cx:"18",cy:"18",r:"3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_=[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v12"}],["path",{d:"m15 9-3-3 3-3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v3"}],["path",{d:"M19 15v6"}],["path",{d:"M22 18h-6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_=[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 9v12"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v3"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M18 6V5"}],["path",{d:"M18 11v-1"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_=[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=[["path",{d:"m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=[["path",{d:"M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=[["circle",{cx:"6",cy:"15",r:"4"}],["circle",{cx:"18",cy:"15",r:"4"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=[["path",{d:"M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13"}],["path",{d:"M2 12h8.5"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=[["path",{d:"M12 13V2l8 4-8 4"}],["path",{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29"}],["path",{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=[["path",{d:"M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"}],["path",{d:"M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"}],["path",{d:"M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"}],["path",{d:"M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"}],["path",{d:"M22 10v6"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=[["path",{d:"M22 5V2l-5.89 5.89"}],["circle",{cx:"16.6",cy:"15.89",r:"3"}],["circle",{cx:"8.11",cy:"7.4",r:"3"}],["circle",{cx:"12.35",cy:"11.65",r:"3"}],["circle",{cx:"13.91",cy:"5.85",r:"3"}],["circle",{cx:"18.15",cy:"10.09",r:"3"}],["circle",{cx:"6.56",cy:"13.2",r:"3"}],["circle",{cx:"10.8",cy:"17.44",r:"3"}],["circle",{cx:"5",cy:"19",r:"3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"}],["path",{d:"m16 19 2 2 4-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"}],["path",{d:"M16 19h6"}],["path",{d:"M19 22v-6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"}],["path",{d:"m16 16 5 5"}],["path",{d:"m16 21 5-5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=[["path",{d:"M12 3v18"}],["path",{d:"M3 12h18"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}],["path",{d:"M9 3v18"}],["path",{d:"M15 3v18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=[["circle",{cx:"12",cy:"9",r:"1"}],["circle",{cx:"19",cy:"9",r:"1"}],["circle",{cx:"5",cy:"9",r:"1"}],["circle",{cx:"12",cy:"15",r:"1"}],["circle",{cx:"19",cy:"15",r:"1"}],["circle",{cx:"5",cy:"15",r:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=[["circle",{cx:"9",cy:"12",r:"1"}],["circle",{cx:"9",cy:"5",r:"1"}],["circle",{cx:"9",cy:"19",r:"1"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"15",cy:"5",r:"1"}],["circle",{cx:"15",cy:"19",r:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=[["circle",{cx:"12",cy:"5",r:"1"}],["circle",{cx:"19",cy:"5",r:"1"}],["circle",{cx:"5",cy:"5",r:"1"}],["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}],["circle",{cx:"12",cy:"19",r:"1"}],["circle",{cx:"19",cy:"19",r:"1"}],["circle",{cx:"5",cy:"19",r:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=[["path",{d:"M3 7V5c0-1.1.9-2 2-2h2"}],["path",{d:"M17 3h2c1.1 0 2 .9 2 2v2"}],["path",{d:"M21 17v2c0 1.1-.9 2-2 2h-2"}],["path",{d:"M7 21H5c-1.1 0-2-.9-2-2v-2"}],["rect",{width:"7",height:"5",x:"7",y:"7",rx:"1"}],["rect",{width:"7",height:"5",x:"10",y:"12",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=[["path",{d:"m11.9 12.1 4.514-4.514"}],["path",{d:"M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z"}],["path",{d:"m6 16 2 2"}],["path",{d:"M8.2 9.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4 2 2 0 0 0 1.8-1.2z"}],["circle",{cx:"11.5",cy:"12.5",r:".5",fill:"currentColor"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=[["path",{d:"M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856"}],["path",{d:"M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288"}],["path",{d:"M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025"}],["path",{d:"m8.5 16.5-1-1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=[["path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"}],["path",{d:"m18 15 4-4"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=[["path",{d:"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"}],["path",{d:"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"}],["path",{d:"m2 16 6 6"}],["circle",{cx:"16",cy:"9",r:"2.9"}],["circle",{cx:"6",cy:"5",r:"3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tC=[["path",{d:"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"}],["path",{d:"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"}],["path",{d:"m2 15 6 6"}],["path",{d:"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=[["path",{d:"M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14"}],["path",{d:"m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"}],["path",{d:"m2 13 6 6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eC=[["path",{d:"M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"}],["path",{d:"M14 11V9a2 2 0 1 0-4 0v2"}],["path",{d:"M10 10.5V5a2 2 0 1 0-4 0v9"}],["path",{d:"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aC=[["path",{d:"M12 3V2"}],["path",{d:"m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5"}],["path",{d:"M2 14h12a2 2 0 0 1 0 4h-2"}],["path",{d:"M4 10h16"}],["path",{d:"M5 10a7 7 0 0 1 14 0"}],["path",{d:"M5 14v6a1 1 0 0 1-1 1H2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nC=[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"}],["path",{d:"m21 3 1 11h-2"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"}],["path",{d:"M3 4h8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rC=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iC=[["path",{d:"M12 2v8"}],["path",{d:"m16 6-4 4-4-4"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 18h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oC=[["line",{x1:"22",x2:"2",y1:"12",y2:"12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hC=[["path",{d:"m16 6-4-4-4 4"}],["path",{d:"M12 2v8"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 18h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sC=[["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"}],["path",{d:"M14 6a6 6 0 0 1 6 6v3"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6"}],["rect",{x:"2",y:"15",width:"20",height:"4",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cC=[["line",{x1:"4",x2:"20",y1:"9",y2:"9"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dC=[["path",{d:"m5.2 6.2 1.4 1.4"}],["path",{d:"M2 13h2"}],["path",{d:"M20 13h2"}],["path",{d:"m17.4 7.6 1.4-1.4"}],["path",{d:"M22 17H2"}],["path",{d:"M22 21H2"}],["path",{d:"M16 13a4 4 0 0 0-8 0"}],["path",{d:"M12 5V2.5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pC=[["path",{d:"M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z"}],["path",{d:"M7.5 12h9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lC=[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"m17 12 3-2v8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uC=[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fC=[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2"}],["path",{d:"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vC=[["path",{d:"M12 18V6"}],["path",{d:"M17 10v3a1 1 0 0 0 1 1h3"}],["path",{d:"M21 10v8"}],["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MC=[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M17 13v-3h4"}],["path",{d:"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yC=[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["circle",{cx:"19",cy:"16",r:"2"}],["path",{d:"M20 10c-2 2-3 3.5-3 6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gC=[["path",{d:"M6 12h12"}],["path",{d:"M6 20V4"}],["path",{d:"M18 20V4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mC=[["path",{d:"M21 14h-1.343"}],["path",{d:"M9.128 3.47A9 9 0 0 1 21 12v3.343"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3"}],["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xC=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wC=[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bC=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"m12 13-1-1 2-2-3-3 2-2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _C=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"}],["path",{d:"m18 15-2-2"}],["path",{d:"m15 18-2-2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CC=[["line",{x1:"2",y1:"2",x2:"22",y2:"22"}],["path",{d:"M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35"}],["path",{d:"M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AC=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HC=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SC=[["path",{d:"M11 8c2-3-2-3 0-6"}],["path",{d:"M15.5 8c2-3-2-3 0-6"}],["path",{d:"M6 10h.01"}],["path",{d:"M6 14h.01"}],["path",{d:"M10 16v-4"}],["path",{d:"M14 16v-4"}],["path",{d:"M18 16v-4"}],["path",{d:"M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3"}],["path",{d:"M5 20v2"}],["path",{d:"M19 20v2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kC=[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EC=[["path",{d:"m9 11-6 6v3h9l3-3"}],["path",{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LC=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VC=[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27"}],["path",{d:"M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26"}],["path",{d:"M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25"}],["path",{d:"M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75"}],["path",{d:"M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24"}],["path",{d:"M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28"}],["path",{d:"M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DC=[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18"}],["path",{d:"M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88"}],["path",{d:"M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87"}],["path",{d:"M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08"}],["path",{d:"M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57"}],["path",{d:"M4.93 4.93 3 3a.7.7 0 0 1 0-1"}],["path",{d:"M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TC=[["path",{d:"M12 6v4"}],["path",{d:"M14 14h-4"}],["path",{d:"M14 18h-4"}],["path",{d:"M14 8h-4"}],["path",{d:"M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"}],["path",{d:"M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OC=[["path",{d:"M10 22v-6.57"}],["path",{d:"M12 11h.01"}],["path",{d:"M12 7h.01"}],["path",{d:"M14 15.43V22"}],["path",{d:"M15 16a5 5 0 0 0-6 0"}],["path",{d:"M16 11h.01"}],["path",{d:"M16 7h.01"}],["path",{d:"M8 11h.01"}],["path",{d:"M8 7h.01"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PC=[["path",{d:"M5 22h14"}],["path",{d:"M5 2h14"}],["path",{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IC=[["path",{d:"M10 12V8.964"}],["path",{d:"M14 12V8.964"}],["path",{d:"M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z"}],["path",{d:"M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RC=[["path",{d:"M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354"}],["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M15 6h6"}],["path",{d:"M18 3v6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BC=[["path",{d:"M9.5 13.866a4 4 0 0 1 5 .01"}],["path",{d:"M12 17h.01"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}],["path",{d:"M7 10.754a8 8 0 0 1 10 0"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=[["path",{d:"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"}],["path",{d:"M12.14 11a3.5 3.5 0 1 1 6.71 0"}],["path",{d:"M15.5 6.5a3.5 3.5 0 1 0-7 0"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=[["path",{d:"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11"}],["path",{d:"M17 7A5 5 0 0 0 7 7"}],["path",{d:"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FC=[["path",{d:"M16 10h2"}],["path",{d:"M16 14h2"}],["path",{d:"M6.17 15a3 3 0 0 1 5.66 0"}],["circle",{cx:"9",cy:"11",r:"2"}],["rect",{x:"2",y:"5",width:"20",height:"14",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zC=[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"}],["path",{d:"m14 19 3 3v-5.5"}],["path",{d:"m17 22 3-3"}],["circle",{cx:"9",cy:"9",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NC=[["path",{d:"M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qC=[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jC=[["path",{d:"m11 16-5 5"}],["path",{d:"M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.5"}],["path",{d:"M15.765 22a.5.5 0 0 1-.765-.424V13.38a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"}],["circle",{cx:"9",cy:"9",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZC=[["path",{d:"M16 5h6"}],["path",{d:"M19 2v6"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}],["circle",{cx:"9",cy:"9",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UC=[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"}],["path",{d:"m14 19.5 3-3 3 3"}],["path",{d:"M17 22v-5.5"}],["circle",{cx:"9",cy:"9",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WC=[["path",{d:"M16 3h5v5"}],["path",{d:"M17 21h2a2 2 0 0 0 2-2"}],["path",{d:"M21 12v3"}],["path",{d:"m21 3-5 5"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2"}],["path",{d:"m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19"}],["path",{d:"M9 3h3"}],["rect",{x:"3",y:"11",width:"10",height:"10",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $C=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KC=[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18"}],["circle",{cx:"12",cy:"8",r:"2"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GC=[["path",{d:"M12 3v12"}],["path",{d:"m8 11 4 4 4-4"}],["path",{d:"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XC=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=[["path",{d:"M21 12H11"}],["path",{d:"M21 18H11"}],["path",{d:"M21 6H11"}],["path",{d:"m7 8-4 4 4 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=[["path",{d:"M21 12H11"}],["path",{d:"M21 18H11"}],["path",{d:"M21 6H11"}],["path",{d:"m3 8 4 4-4 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YC=[["path",{d:"M6 3h12"}],["path",{d:"M6 8h12"}],["path",{d:"m6 13 8.5 8"}],["path",{d:"M6 13h3"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JC=[["path",{d:"M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QC=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tA=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7h.01"}],["path",{d:"M17 7h.01"}],["path",{d:"M7 17h.01"}],["path",{d:"M17 17h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=[["line",{x1:"19",x2:"10",y1:"4",y2:"4"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=[["path",{d:"M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8"}],["polyline",{points:"16 14 20 18 16 22"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rA=[["path",{d:"M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4"}],["polyline",{points:"8 22 4 18 8 14"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iA=[["path",{d:"M12 9.5V21m0-11.5L6 3m6 6.5L18 3"}],["path",{d:"M6 15h12"}],["path",{d:"M6 11h12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z"}],["path",{d:"M6 15v-2"}],["path",{d:"M12 15V9"}],["circle",{cx:"12",cy:"6",r:"3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=[["path",{d:"M6 5v11"}],["path",{d:"M12 5v6"}],["path",{d:"M18 5v14"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sA=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cA=[["path",{d:"M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z"}],["path",{d:"m14 7 3 3"}],["path",{d:"m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"}],["path",{d:"m21 2-9.6 9.6"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M6 8h4"}],["path",{d:"M14 8h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"M2 12h20"}],["path",{d:"M6 12v4"}],["path",{d:"M10 12v4"}],["path",{d:"M14 12v4"}],["path",{d:"M18 12v4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lA=[["path",{d:"M 20 4 A2 2 0 0 1 22 6"}],["path",{d:"M 22 6 L 22 16.41"}],["path",{d:"M 7 16 L 16 16"}],["path",{d:"M 9.69 4 L 20 4"}],["path",{d:"M14 8h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"}],["path",{d:"M6 8h.01"}],["path",{d:"M8 12h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uA=[["path",{d:"M10 8h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M14 8h.01"}],["path",{d:"M16 12h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"M6 8h.01"}],["path",{d:"M7 16h10"}],["path",{d:"M8 12h.01"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=[["path",{d:"M12 2v5"}],["path",{d:"M6 7h12l4 9H2l4-9Z"}],["path",{d:"M9.17 16a3 3 0 1 0 5.66 0"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=[["path",{d:"m14 5-3 3 2 7 8-8-7-2Z"}],["path",{d:"m14 5-3 3-3-3 3-3 3 3Z"}],["path",{d:"M9.5 6.5 4 12l3 6"}],["path",{d:"M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=[["path",{d:"M9 2h6l3 7H6l3-7Z"}],["path",{d:"M12 9v13"}],["path",{d:"M9 22h6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=[["path",{d:"M11 13h6l3 7H8l3-7Z"}],["path",{d:"M14 13V8a2 2 0 0 0-2-2H8"}],["path",{d:"M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=[["path",{d:"M11 4h6l3 7H8l3-7Z"}],["path",{d:"M14 11v5a2 2 0 0 1-2 2H8"}],["path",{d:"M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=[["path",{d:"M8 2h8l4 10H4L8 2Z"}],["path",{d:"M12 12v6"}],["path",{d:"M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=[["path",{d:"m12 8 6-3-6-3v10"}],["path",{d:"m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"}],["path",{d:"m6.49 12.85 11.02 6.3"}],["path",{d:"M17.51 12.85 6.5 19.15"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=[["line",{x1:"3",x2:"21",y1:"22",y2:"22"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11"}],["polygon",{points:"12 2 20 7 4 7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=[["path",{d:"m5 8 6 6"}],["path",{d:"m4 14 6-6 2-3"}],["path",{d:"M2 5h12"}],["path",{d:"M7 2h1"}],["path",{d:"m22 22-5-10-5 10"}],["path",{d:"M14 18h6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=[["path",{d:"M2 20h20"}],["path",{d:"m9 10 2 2 4-4"}],["rect",{x:"3",y:"4",width:"18",height:"12",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=[["rect",{width:"18",height:"12",x:"3",y:"4",rx:"2",ry:"2"}],["line",{x1:"2",x2:"22",y1:"20",y2:"20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=[["path",{d:"M7 22a5 5 0 0 1-2-4"}],["path",{d:"M7 16.93c.96.43 1.96.74 2.99.91"}],["path",{d:"M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}],["path",{d:"M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=[["path",{d:"M7 22a5 5 0 0 1-2-4"}],["path",{d:"M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=[["path",{d:"m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12"}],["path",{d:"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VA=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=[["rect",{width:"7",height:"18",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=[["path",{d:"M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22"}],["path",{d:"M2 22 17 7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=[["path",{d:"M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3"}],["path",{d:"M18 6V3a1 1 0 0 0-1-1h-3"}],["rect",{width:"8",height:"12",x:"8",y:"10",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=[["path",{d:"M15 12h6"}],["path",{d:"M15 6h6"}],["path",{d:"m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13"}],["path",{d:"M3 18h18"}],["path",{d:"M4 11h6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1"}],["path",{d:"M7 3v18"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA=[["path",{d:"m16 6 4 14"}],["path",{d:"M12 6v14"}],["path",{d:"M8 8v12"}],["path",{d:"M4 4v16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m4.93 4.93 4.24 4.24"}],["path",{d:"m14.83 9.17 4.24-4.24"}],["path",{d:"m14.83 14.83 4.24 4.24"}],["path",{d:"m9.17 14.83-4.24 4.24"}],["circle",{cx:"12",cy:"12",r:"4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=[["path",{d:"M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2"}],["path",{d:"M6 12h4"}],["path",{d:"M14 12h2v8"}],["path",{d:"M6 20h4"}],["path",{d:"M14 20h4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5"}],["path",{d:"M9 18h6"}],["path",{d:"M10 22h4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"}],["path",{d:"M9 18h6"}],["path",{d:"M10 22h4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=[["path",{d:"M9 17H7A5 5 0 0 1 7 7"}],["path",{d:"M15 7h2a5 5 0 0 1 4 8"}],["line",{x1:"8",x2:"12",y1:"12",y2:"12"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GA=[["path",{d:"M11 18H3"}],["path",{d:"m15 18 2 2 4-4"}],["path",{d:"M16 12H3"}],["path",{d:"M16 6H3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=[["path",{d:"m3 17 2 2 4-4"}],["path",{d:"m3 7 2 2 4-4"}],["path",{d:"M13 6h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=[["path",{d:"m3 10 2.5-2.5L3 5"}],["path",{d:"m3 19 2.5-2.5L3 14"}],["path",{d:"M10 6h11"}],["path",{d:"M10 12h11"}],["path",{d:"M10 18h11"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=[["path",{d:"M16 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M10 18H3"}],["path",{d:"M21 6v10a2 2 0 0 1-2 2h-5"}],["path",{d:"m16 16-2 2 2 2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=[["path",{d:"M10 18h4"}],["path",{d:"M11 6H3"}],["path",{d:"M15 6h6"}],["path",{d:"M18 9V3"}],["path",{d:"M7 12h8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tH=[["path",{d:"M3 6h18"}],["path",{d:"M7 12h10"}],["path",{d:"M10 18h4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eH=[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"M21 12h-6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aH=[["path",{d:"M21 15V6"}],["path",{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"}],["path",{d:"M12 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M12 18H3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nH=[["path",{d:"M10 12h11"}],["path",{d:"M10 18h11"}],["path",{d:"M10 6h11"}],["path",{d:"M4 10h2"}],["path",{d:"M4 6h1v4"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rH=[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"M18 9v6"}],["path",{d:"M21 12h-6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iH=[["path",{d:"M21 6H3"}],["path",{d:"M7 12H3"}],["path",{d:"M7 18H3"}],["path",{d:"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"}],["path",{d:"M11 10v4h4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oH=[["path",{d:"M16 12H3"}],["path",{d:"M16 18H3"}],["path",{d:"M10 6H3"}],["path",{d:"M21 18V8a2 2 0 0 0-2-2h-5"}],["path",{d:"m16 8-2-2 2-2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hH=[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1"}],["path",{d:"m3 17 2 2 4-4"}],["path",{d:"M13 6h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sH=[["path",{d:"M21 12h-8"}],["path",{d:"M21 6H8"}],["path",{d:"M21 18h-8"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cH=[["path",{d:"M12 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M12 18H3"}],["path",{d:"m16 12 5 3-5 3v-6Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dH=[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"m19 10-4 4"}],["path",{d:"m15 10 4 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pH=[["path",{d:"M3 12h.01"}],["path",{d:"M3 18h.01"}],["path",{d:"M3 6h.01"}],["path",{d:"M8 12h13"}],["path",{d:"M8 18h13"}],["path",{d:"M8 6h13"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lH=[["path",{d:"M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0"}],["path",{d:"M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6"}],["path",{d:"M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uH=[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fH=[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["circle",{cx:"12",cy:"12",r:"7"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vH=[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["path",{d:"M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11"}],["path",{d:"M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MH=[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["circle",{cx:"12",cy:"12",r:"7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 9.33-2.5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yH=[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gH=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mH=[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}],["polyline",{points:"10 17 15 12 10 7"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xH=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}],["polyline",{points:"16 17 21 12 16 7"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wH=[["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}],["path",{d:"M13 6h8"}],["path",{d:"M3 12h1"}],["path",{d:"M3 18h1"}],["path",{d:"M3 6h1"}],["path",{d:"M8 12h1"}],["path",{d:"M8 18h1"}],["path",{d:"M8 6h1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bH=[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}],["path",{d:"M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _H=[["path",{d:"M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"}],["path",{d:"M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"}],["path",{d:"M10 20h4"}],["circle",{cx:"16",cy:"20",r:"2"}],["circle",{cx:"8",cy:"20",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CH=[["path",{d:"m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15"}],["path",{d:"m5 8 4 4"}],["path",{d:"m12 15 4 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AH=[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"m16 19 2 2 4-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HH=[["path",{d:"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M16 19h6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SH=[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kH=[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M19 16v6"}],["path",{d:"M16 19h6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EH=[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"}],["path",{d:"M20 22v.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LH=[["path",{d:"M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m22 22-1.5-1.5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VH=[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M20 14v4"}],["path",{d:"M20 22v.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DH=[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"m17 17 4 4"}],["path",{d:"m21 17-4 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TH=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OH=[["path",{d:"M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"}],["polyline",{points:"15,9 18,9 18,11"}],["path",{d:"M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2"}],["line",{x1:"6",x2:"7",y1:"10",y2:"10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PH=[["rect",{width:"16",height:"13",x:"6",y:"4",rx:"2"}],["path",{d:"m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"}],["path",{d:"M2 8v11c0 1.1.9 2 2 2h14"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IH=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"m9 10 2 2 4-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RH=[["path",{d:"M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"m16 18 2 2 4-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BH=[["path",{d:"M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z"}],["path",{d:"M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2"}],["path",{d:"M18 22v-3"}],["circle",{cx:"10",cy:"10",r:"3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FH=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"M9 10h6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zH=[["path",{d:"M12.75 7.09a3 3 0 0 1 2.16 2.16"}],["path",{d:"M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568"}],["path",{d:"m2 2 20 20"}],["path",{d:"M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533"}],["path",{d:"M9.13 9.13a3 3 0 0 0 3.74 3.74"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NH=[["path",{d:"M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M16 18h6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qH=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"M12 7v6"}],["path",{d:"M9 10h6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jH=[["path",{d:"M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M16 18h6"}],["path",{d:"M19 15v6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZH=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"m14.5 7.5-5 5"}],["path",{d:"m9.5 7.5 5 5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UH=[["path",{d:"M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"m21.5 15.5-5 5"}],["path",{d:"m21.5 20.5-5-5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WH=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["circle",{cx:"12",cy:"10",r:"3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $H=[["path",{d:"M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"}],["circle",{cx:"12",cy:"8",r:"2"}],["path",{d:"M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KH=[["path",{d:"m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12"}],["path",{d:"M15 5.764V12"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}],["path",{d:"M9 3.236v15"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GH=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"}],["path",{d:"M15 5.764v15"}],["path",{d:"M9 3.236v15"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XH=[["path",{d:"m14 6 4 4"}],["path",{d:"M17 3h4v4"}],["path",{d:"m21 3-7.75 7.75"}],["circle",{cx:"9",cy:"15",r:"6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YH=[["path",{d:"M16 3h5v5"}],["path",{d:"m21 3-6.75 6.75"}],["circle",{cx:"10",cy:"14",r:"6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JH=[["path",{d:"M8 22h8"}],["path",{d:"M12 11v11"}],["path",{d:"m19 3-7 8-7-8Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QH=[["polyline",{points:"15 3 21 3 21 9"}],["polyline",{points:"9 21 3 21 3 15"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"}],["path",{d:"M11 12 5.12 2.2"}],["path",{d:"m13 12 5.88-9.8"}],["path",{d:"M8 7h8"}],["circle",{cx:"12",cy:"17",r:"5"}],["path",{d:"M12 18v-2h-.5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=[["path",{d:"M9.26 9.26 3 11v3l14.14 3.14"}],["path",{d:"M21 15.34V6l-7.31 2.03"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=[["path",{d:"m3 11 18-5v12L3 14v-3z"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"8",x2:"16",y1:"15",y2:"15"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=[["path",{d:"M6 19v-3"}],["path",{d:"M10 19v-3"}],["path",{d:"M14 19v-3"}],["path",{d:"M18 19v-3"}],["path",{d:"M8 11V9"}],["path",{d:"M16 11V9"}],["path",{d:"M12 11V9"}],["path",{d:"M2 15h20"}],["path",{d:"M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["line",{x1:"4",x2:"20",y1:"12",y2:"12"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=[["path",{d:"m8 6 4-4 4 4"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"}],["path",{d:"m20 22-5-5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["path",{d:"M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1"}],["path",{d:"M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1"}],["path",{d:"M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5"}],["path",{d:"M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1"}],["path",{d:"M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1"}],["path",{d:"M3.5 17.5 2 22l4.5-1.5"}],["path",{d:"M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5"}],["path",{d:"M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=[["path",{d:"M10 9.5 8 12l2 2.5"}],["path",{d:"m14 9.5 2 2.5-2 2.5"}],["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=[["path",{d:"M20.5 14.9A9 9 0 0 0 9.1 3.5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"m10 15-3-3 3-3"}],["path",{d:"M7 12h7a2 2 0 0 1 2 2v1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=[["path",{d:"M10 7.5 8 10l2 2.5"}],["path",{d:"m14 7.5 2 2.5-2 2.5"}],["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=[["path",{d:"M10 17H7l-4 4v-7"}],["path",{d:"M14 17h1"}],["path",{d:"M14 3h1"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 14v1a2 2 0 0 1-2 2"}],["path",{d:"M21 9v1"}],["path",{d:"M3 9v1"}],["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M9 3h1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=[["path",{d:"m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"}],["path",{d:"M9 10h6"}],["path",{d:"M12 7v6"}],["path",{d:"M9 17h6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=[["path",{d:"M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7"}],["circle",{cx:"18",cy:"6",r:"3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=[["path",{d:"M19 15v-2a2 2 0 1 0-4 0v2"}],["path",{d:"M9 17H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3.5"}],["rect",{x:"13",y:"15",width:"8",height:"5",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M8 10h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M16 10h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=[["path",{d:"M21 15V5a2 2 0 0 0-2-2H9"}],["path",{d:"m2 2 20 20"}],["path",{d:"M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M12 7v6"}],["path",{d:"M9 10h6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M8 12a2 2 0 0 0 2-2V8H8"}],["path",{d:"M14 12a2 2 0 0 0 2-2V8h-2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"m10 7-3 3 3 3"}],["path",{d:"M17 13v-1a2 2 0 0 0-2-2H7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=[["path",{d:"M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7"}],["path",{d:"M16 3h5v5"}],["path",{d:"m16 8 5-5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M13 8H7"}],["path",{d:"M17 12H7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M12 7v2"}],["path",{d:"M12 13h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"m14.5 7.5-5 5"}],["path",{d:"m9.5 7.5 5 5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=[["path",{d:"m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"}],["path",{d:"M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"}],["circle",{cx:"16",cy:"7",r:"5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=[["path",{d:"M18 12h2"}],["path",{d:"M18 16h2"}],["path",{d:"M18 20h2"}],["path",{d:"M18 4h2"}],["path",{d:"M18 8h2"}],["path",{d:"M4 12h2"}],["path",{d:"M4 16h2"}],["path",{d:"M4 20h2"}],["path",{d:"M4 4h2"}],["path",{d:"M4 8h2"}],["path",{d:"M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=[["path",{d:"M6 18h8"}],["path",{d:"M3 22h18"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1"}],["path",{d:"M9 14h2"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=[["rect",{width:"20",height:"15",x:"2",y:"4",rx:"2"}],["rect",{width:"8",height:"7",x:"6",y:"8",rx:"1"}],["path",{d:"M18 8v7"}],["path",{d:"M6 19v2"}],["path",{d:"M18 19v2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=[["path",{d:"M8 2h8"}],["path",{d:"M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=[["path",{d:"M12 13v8"}],["path",{d:"M12 3v3"}],["path",{d:"M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=[["path",{d:"M8 2h8"}],["path",{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"}],["path",{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=[["polyline",{points:"4 14 10 14 10 20"}],["polyline",{points:"20 10 14 10 14 4"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=[["path",{d:"M5 12h14"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=[["path",{d:"m9 10 2 2 4-4"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=[["path",{d:"M12 17v4"}],["path",{d:"m15.2 4.9-.9-.4"}],["path",{d:"m15.2 7.1-.9.4"}],["path",{d:"m16.9 3.2-.4-.9"}],["path",{d:"m16.9 8.8-.4.9"}],["path",{d:"m19.5 2.3-.4.9"}],["path",{d:"m19.5 9.7-.4-.9"}],["path",{d:"m21.7 4.5-.9.4"}],["path",{d:"m21.7 7.5-.9-.4"}],["path",{d:"M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"}],["path",{d:"M8 21h8"}],["circle",{cx:"18",cy:"6",r:"3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=[["circle",{cx:"19",cy:"6",r:"3"}],["path",{d:"M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=[["path",{d:"M12 13V7"}],["path",{d:"m15 10-3 3-3-3"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=[["path",{d:"M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2"}],["path",{d:"M22 15V5a2 2 0 0 0-2-2H9"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=[["path",{d:"M10 13V7"}],["path",{d:"M14 13V7"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tk=[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}],["path",{d:"M10 19v-3.96 3.15"}],["path",{d:"M7 19h5"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ek=[["path",{d:"M5.5 20H8"}],["path",{d:"M17 9h.01"}],["rect",{width:"10",height:"16",x:"12",y:"4",rx:"2"}],["path",{d:"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4"}],["circle",{cx:"17",cy:"15",r:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ak=[["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}],["rect",{x:"9",y:"7",width:"6",height:"6",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nk=[["path",{d:"m9 10 3-3 3 3"}],["path",{d:"M12 13V7"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rk=[["path",{d:"m14.5 12.5-5-5"}],["path",{d:"m9.5 12.5 5-5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ik=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ok=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hk=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sk=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z"}],["path",{d:"M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ck=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dk=[["path",{d:"M12 6v.343"}],["path",{d:"M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218"}],["path",{d:"M19 13.343V9A7 7 0 0 0 8.56 2.902"}],["path",{d:"M22 22 2 2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lk=[["path",{d:"M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z"}],["circle",{cx:"16",cy:"16",r:"6"}],["path",{d:"m11.8 11.8 8.4 8.4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=[["path",{d:"M14 4.1 12 6"}],["path",{d:"m5.1 8-2.9-.8"}],["path",{d:"m6 12-1.9 2"}],["path",{d:"M7.2 2.2 8 5.1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=[["path",{d:"M12.586 12.586 19 19"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7"}],["path",{d:"M12 6v4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=[["path",{d:"M5 3v16h16"}],["path",{d:"m5 19 6-6"}],["path",{d:"m2 6 3-3 3 3"}],["path",{d:"m18 16 3 3-3 3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk=[["path",{d:"M11 19H5v-6"}],["path",{d:"M13 5h6v6"}],["path",{d:"M19 5 5 19"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk=[["path",{d:"M19 13v6h-6"}],["path",{d:"M5 11V5h6"}],["path",{d:"m5 5 14 14"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=[["path",{d:"M11 19H5V13"}],["path",{d:"M19 5L5 19"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mk=[["path",{d:"M19 13V19H13"}],["path",{d:"M5 5L19 19"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xk=[["path",{d:"M8 18L12 22L16 18"}],["path",{d:"M12 2V22"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wk=[["path",{d:"m18 8 4 4-4 4"}],["path",{d:"M2 12h20"}],["path",{d:"m6 8-4 4 4 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk=[["path",{d:"M6 8L2 12L6 16"}],["path",{d:"M2 12H22"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=[["path",{d:"M18 8L22 12L18 16"}],["path",{d:"M2 12H22"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=[["path",{d:"M5 11V5H11"}],["path",{d:"M5 5L19 19"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=[["path",{d:"M13 5H19V11"}],["path",{d:"M19 5L5 19"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk=[["path",{d:"M8 6L12 2L16 6"}],["path",{d:"M12 2V22"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=[["path",{d:"M12 2v20"}],["path",{d:"m8 18 4 4 4-4"}],["path",{d:"m8 6 4-4 4 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk=[["path",{d:"M12 2v20"}],["path",{d:"m15 19-3 3-3-3"}],["path",{d:"m19 9 3 3-3 3"}],["path",{d:"M2 12h20"}],["path",{d:"m5 9-3 3 3 3"}],["path",{d:"m9 5 3-3 3 3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=[["circle",{cx:"8",cy:"18",r:"4"}],["path",{d:"M12 18V2l7 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk=[["circle",{cx:"12",cy:"18",r:"4"}],["path",{d:"M16 18V2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vk=[["path",{d:"M9 18V5l12-2v13"}],["path",{d:"m9 9 12-2"}],["circle",{cx:"6",cy:"18",r:"3"}],["circle",{cx:"18",cy:"16",r:"3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=[["path",{d:"M9 18V5l12-2v13"}],["circle",{cx:"6",cy:"18",r:"3"}],["circle",{cx:"18",cy:"16",r:"3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tk=[["path",{d:"M9.31 9.31 5 21l7-4 7 4-1.17-3.17"}],["path",{d:"M14.53 8.88 12 2l-1.17 3.17"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok=[["polygon",{points:"12 2 19 21 12 17 5 21 12 2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk=[["path",{d:"M8.43 8.43 3 11l8 2 2 8 2.57-5.43"}],["path",{d:"M17.39 11.73 22 2l-9.73 4.61"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{d:"M12 12V8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk=[["path",{d:"M15 18h-5"}],["path",{d:"M18 14h-8"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=[["path",{d:"M6 8.32a7.43 7.43 0 0 1 0 7.36"}],["path",{d:"M9.46 6.21a11.76 11.76 0 0 1 0 11.58"}],["path",{d:"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8"}],["path",{d:"M16.37 2a20.16 20.16 0 0 1 0 20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=[["path",{d:"M12 2v10"}],["path",{d:"m9 4 6 4"}],["path",{d:"m9 8 6-4"}],["circle",{cx:"12",cy:"17",r:"5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk=[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"}],["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["path",{d:"M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk=[["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M15 2v20"}],["path",{d:"M15 7h5"}],["path",{d:"M15 12h5"}],["path",{d:"M15 17h5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk=[["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M9.5 8h5"}],["path",{d:"M9.5 12H16"}],["path",{d:"M9.5 16H14"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk=[["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M16 2v20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk=[["path",{d:"M8 2v4"}],["path",{d:"M12 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v2"}],["path",{d:"M20 12v2"}],["path",{d:"M20 18v2a2 2 0 0 1-2 2h-1"}],["path",{d:"M13 22h-2"}],["path",{d:"M7 22H6a2 2 0 0 1-2-2v-2"}],["path",{d:"M4 14v-2"}],["path",{d:"M4 8V6a2 2 0 0 1 2-2h2"}],["path",{d:"M8 10h6"}],["path",{d:"M8 14h8"}],["path",{d:"M8 18h5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk=[["path",{d:"M8 2v4"}],["path",{d:"M12 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"16",height:"18",x:"4",y:"4",rx:"2"}],["path",{d:"M8 10h6"}],["path",{d:"M8 14h8"}],["path",{d:"M8 18h5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k=[["path",{d:"M12 4V2"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939"}],["path",{d:"M19 10v3.343"}],["path",{d:"M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=[["path",{d:"M12 4V2"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4"}],["path",{d:"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=[["path",{d:"M12 16h.01"}],["path",{d:"M12 8v4"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=[["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=[["path",{d:"M10 15V9"}],["path",{d:"M14 15V9"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=[["path",{d:"m15 9-6 6"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}],["path",{d:"m9 9 6 6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk=[["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk=[["path",{d:"M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk=[["path",{d:"M3 3h6l6 18h6"}],["path",{d:"M14 3h7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk=[["circle",{cx:"12",cy:"12",r:"3"}],["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=[["path",{d:"M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025"}],["path",{d:"m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009"}],["path",{d:"m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=[["path",{d:"M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"}],["path",{d:"m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"}],["path",{d:"M12 3v6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=[["path",{d:"M16 16h6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rE=[["path",{d:"M12 22v-9"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=[["path",{d:"M16 16h6"}],["path",{d:"M19 13v6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oE=[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5"}],["path",{d:"M20.27 17.27 22 19"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hE=[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}],["path",{d:"m17 13 5 5m-5 0 5-5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sE=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"}],["path",{d:"m5 2 5 5"}],["path",{d:"M2 13h15"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=[["rect",{width:"16",height:"6",x:"2",y:"2",rx:"2"}],["path",{d:"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"}],["rect",{width:"4",height:"6",x:"8",y:"16",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=[["path",{d:"M10 2v2"}],["path",{d:"M14 2v4"}],["path",{d:"M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z"}],["path",{d:"M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=[["path",{d:"m14.622 17.897-10.68-2.913"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}],["path",{d:"m15 8-3 3-3-3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M14 15h1"}],["path",{d:"M19 15h2"}],["path",{d:"M3 15h2"}],["path",{d:"M9 15h1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}],["path",{d:"m9 10 3-3 3 3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m16 15-3-3 3-3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 14v1"}],["path",{d:"M9 19v2"}],["path",{d:"M9 3v2"}],["path",{d:"M9 9v1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m14 9 3 3-3 3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}],["path",{d:"m8 9 3 3-3 3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 14v1"}],["path",{d:"M15 19v2"}],["path",{d:"M15 3v2"}],["path",{d:"M15 9v1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}],["path",{d:"m10 15-3-3 3-3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"m9 16 3-3 3 3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M14 9h1"}],["path",{d:"M19 9h2"}],["path",{d:"M3 9h2"}],["path",{d:"M9 9h1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"m15 14-3 3-3-3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"M9 15h12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h12"}],["path",{d:"M15 3v18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M9 21V9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=[["path",{d:"M13.234 20.252 21 12.3"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=[["path",{d:"M8 21s-4-3-4-9 4-9 4-9"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=[["path",{d:"M11 15h2"}],["path",{d:"M12 12v3"}],["path",{d:"M12 19v3"}],["path",{d:"M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z"}],["path",{d:"M9 9a3 3 0 1 1 6 0"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=[["path",{d:"M5.8 11.3 2 22l10.7-3.79"}],["path",{d:"M4 3h.01"}],["path",{d:"M22 8h.01"}],["path",{d:"M15 2h.01"}],["path",{d:"M22 20h.01"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=[["circle",{cx:"11",cy:"4",r:"2"}],["circle",{cx:"18",cy:"8",r:"2"}],["circle",{cx:"20",cy:"16",r:"2"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2"}],["path",{d:"M15 14h.01"}],["path",{d:"M9 6h6"}],["path",{d:"M9 10h6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=[["path",{d:"M12 20h9"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=[["path",{d:"m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"}],["path",{d:"m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"}],["path",{d:"m2.3 2.3 7.286 7.286"}],["circle",{cx:"11",cy:"11",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=[["path",{d:"M12 20h9"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"}],["path",{d:"m15 5 3 3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=[["path",{d:"m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"}],["path",{d:"m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353"}],["path",{d:"m15 5 4 4"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=[["path",{d:"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"}],["path",{d:"m8 6 2-2"}],["path",{d:"m18 16 2-2"}],["path",{d:"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=[["path",{d:"M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=[["line",{x1:"19",x2:"5",y1:"5",y2:"19"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=[["circle",{cx:"12",cy:"5",r:"1"}],["path",{d:"m9 20 3-6 3 6"}],["path",{d:"m6 8 6 2 6-2"}],["path",{d:"M12 10v4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=[["path",{d:"M20 11H4"}],["path",{d:"M20 7H4"}],["path",{d:"M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=[["polyline",{points:"18 2 22 6 18 10"}],["line",{x1:"14",x2:"22",y1:"6",y2:"6"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=[["polyline",{points:"16 2 16 8 22 8"}],["line",{x1:"22",x2:"16",y1:"2",y2:"8"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=[["line",{x1:"22",x2:"16",y1:"2",y2:"8"}],["line",{x1:"16",x2:"22",y1:"2",y2:"8"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=[["polyline",{points:"22 8 22 2 16 2"}],["line",{x1:"16",x2:"22",y1:"8",y2:"2"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=[["line",{x1:"9",x2:"9",y1:"4",y2:"20"}],["path",{d:"M4 7c0-1.7 1.3-3 3-3h13"}],["path",{d:"M18 20c-1.7 0-3-1.3-3-3V4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=[["path",{d:"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8"}],["path",{d:"M2 14h20"}],["path",{d:"M6 14v4"}],["path",{d:"M10 14v4"}],["path",{d:"M14 14v4"}],["path",{d:"M18 14v4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=[["path",{d:"M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912"}],["path",{d:"M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393"}],["path",{d:"M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z"}],["path",{d:"M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=[["path",{d:"M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"}],["rect",{width:"10",height:"7",x:"12",y:"13",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=[["path",{d:"M2 10h6V4"}],["path",{d:"m2 4 6 6"}],["path",{d:"M21 10V7a2 2 0 0 0-2-2h-7"}],["path",{d:"M3 14v2a2 2 0 0 0 2 2h3"}],["rect",{x:"12",y:"14",width:"10",height:"7",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1"}],["path",{d:"M16 11h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tL=[["path",{d:"M14 3v11"}],["path",{d:"M14 9h-3a3 3 0 0 1 0-6h9"}],["path",{d:"M18 3v11"}],["path",{d:"M22 18H2l4-4"}],["path",{d:"m6 22-4-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eL=[["path",{d:"M10 3v11"}],["path",{d:"M10 9H7a1 1 0 0 1 0-6h8"}],["path",{d:"M14 3v11"}],["path",{d:"m18 14 4 4H2"}],["path",{d:"m22 18-4 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aL=[["path",{d:"M13 4v16"}],["path",{d:"M17 4v16"}],["path",{d:"M19 4H9.5a4.5 4.5 0 0 0 0 9H13"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nL=[["path",{d:"M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4"}],["path",{d:"M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7"}],["rect",{width:"16",height:"5",x:"4",y:"2",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rL=[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"}],["path",{d:"m8.5 8.5 7 7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iL=[["path",{d:"M12 17v5"}],["path",{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89"}],["path",{d:"m2 2 20 20"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oL=[["path",{d:"M12 17v5"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hL=[["path",{d:"m12 14-1 1"}],["path",{d:"m13.75 18.25-1.25 1.42"}],["path",{d:"M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12"}],["path",{d:"M18.8 9.3a1 1 0 0 0 2.1 7.7"}],["path",{d:"M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sL=[["path",{d:"m2 22 1-1h3l9-9"}],["path",{d:"M3 21v-3l9-9"}],["path",{d:"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cL=[["path",{d:"M2 22h20"}],["path",{d:"M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dL=[["path",{d:"M2 22h20"}],["path",{d:"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pL=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lL=[["polygon",{points:"6 3 20 12 6 21 6 3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uL=[["path",{d:"M9 2v6"}],["path",{d:"M15 2v6"}],["path",{d:"M12 17v5"}],["path",{d:"M5 8h14"}],["path",{d:"M6 11V8h12v3a6 6 0 1 1-12 0Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"}],["path",{d:"m2 22 3-3"}],["path",{d:"M7.5 13.5 10 11"}],["path",{d:"M10.5 16.5 13 14"}],["path",{d:"m18 3-4 4h6l-4 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fL=[["path",{d:"M12 22v-5"}],["path",{d:"M9 8V2"}],["path",{d:"M15 8V2"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vL=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ML=[["path",{d:"M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2"}],["path",{d:"M18 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z"}],["path",{d:"M18 11.66V22a4 4 0 0 0 4-4V6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yL=[["path",{d:"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"}],["polyline",{points:"8 10 12 14 16 10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gL=[["path",{d:"M16.85 18.58a9 9 0 1 0-9.7 0"}],["path",{d:"M8 14a5 5 0 1 1 8 0"}],["circle",{cx:"12",cy:"11",r:"1"}],["path",{d:"M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mL=[["path",{d:"M10 4.5V4a2 2 0 0 0-2.41-1.957"}],["path",{d:"M13.9 8.4a2 2 0 0 0-1.26-1.295"}],["path",{d:"M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158"}],["path",{d:"m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343"}],["path",{d:"M6 6v8"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xL=[["path",{d:"M22 14a8 8 0 0 1-8 8"}],["path",{d:"M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1"}],["path",{d:"M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wL=[["path",{d:"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4"}],["path",{d:"M10 22 9 8"}],["path",{d:"m14 22 1-14"}],["path",{d:"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bL=[["path",{d:"M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z"}],["path",{d:"m22 22-5.5-5.5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _L=[["path",{d:"M18 7c0-5.333-8-5.333-8 0"}],["path",{d:"M10 7v14"}],["path",{d:"M6 21h12"}],["path",{d:"M6 13h10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CL=[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68"}],["path",{d:"M12 2v4"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AL=[["path",{d:"M12 2v10"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HL=[["path",{d:"M2 3h20"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"}],["path",{d:"m7 21 5-5 5 5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SL=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kL=[["path",{d:"M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5"}],["path",{d:"m16 19 2 2 4-4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EL=[["path",{d:"M5 7 3 5"}],["path",{d:"M9 6V3"}],["path",{d:"m13 7 2-2"}],["circle",{cx:"9",cy:"13",r:"3"}],["path",{d:"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"}],["path",{d:"M16 16h2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LL=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M12 9v11"}],["path",{d:"M2 9h13a2 2 0 0 1 2 2v9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VL=[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DL=[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z"}],["path",{d:"M12 2v20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TL=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3"}],["path",{d:"M21 21v.01"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7"}],["path",{d:"M3 12h.01"}],["path",{d:"M12 3h.01"}],["path",{d:"M12 16v.01"}],["path",{d:"M16 12h1"}],["path",{d:"M21 12v.01"}],["path",{d:"M12 21v-1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OL=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PL=[["path",{d:"M13 16a3 3 0 0 1 2.24 5"}],["path",{d:"M18 12h.01"}],["path",{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"}],["path",{d:"M20 8.54V4a2 2 0 1 0-4 0v3"}],["path",{d:"M7.612 12.524a3 3 0 1 0-1.6 4.3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IL=[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34"}],["path",{d:"M4 6h.01"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67"}],["path",{d:"M12 18h.01"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"m13.41 10.59 5.66-5.66"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RL=[["path",{d:"M12 12h.01"}],["path",{d:"M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z"}],["path",{d:"M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z"}],["path",{d:"M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BL=[["path",{d:"M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FL=[["path",{d:"M5 16v2"}],["path",{d:"M19 16v2"}],["rect",{width:"20",height:"8",x:"2",y:"8",rx:"2"}],["path",{d:"M18 12h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zL=[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"}],["circle",{cx:"12",cy:"9",r:"2"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1"}],["path",{d:"M9.5 18h5"}],["path",{d:"m8 22 4-11 4 11"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NL=[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qL=[["path",{d:"M20.34 17.52a10 10 0 1 0-2.82 2.82"}],["circle",{cx:"19",cy:"19",r:"2"}],["path",{d:"m13.41 13.41 4.18 4.18"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jL=[["path",{d:"M5 15h14"}],["path",{d:"M5 9h14"}],["path",{d:"m14 20-5-5 6-6-5-5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZL=[["path",{d:"M22 17a10 10 0 0 0-20 0"}],["path",{d:"M6 17a6 6 0 0 1 12 0"}],["path",{d:"M10 17a2 2 0 0 1 4 0"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UL=[["path",{d:"M13 22H4a2 2 0 0 1 0-4h12"}],["path",{d:"M13.236 18a3 3 0 0 0-2.2-5"}],["path",{d:"M16 9h.01"}],["path",{d:"M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3"}],["path",{d:"M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015 4 4 0 0 0 8 18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WL=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $L=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M12 6.5v11"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KL=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 12h5"}],["path",{d:"M16 9.5a4 4 0 1 0 0 5.2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GL=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 7h8"}],["path",{d:"M12 17.5 8 15h1a4 4 0 0 0 0-8"}],["path",{d:"M8 11h8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XL=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"m12 10 3-3"}],["path",{d:"m9 7 3 3v7.5"}],["path",{d:"M9 11h6"}],["path",{d:"M9 15h6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YL=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 13h5"}],["path",{d:"M10 17V9.5a2.5 2.5 0 0 1 5 0"}],["path",{d:"M8 17h7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JL=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 15h5"}],["path",{d:"M8 11h5a2 2 0 1 0 0-4h-3v10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QL=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M10 17V7h5"}],["path",{d:"M10 11h4"}],["path",{d:"M8 15h5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tV=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M14 8H8"}],["path",{d:"M16 12H8"}],["path",{d:"M13 16H8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eV=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}],["path",{d:"M12 12h.01"}],["path",{d:"M17 12h.01"}],["path",{d:"M7 12h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aV=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nV=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rV=[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"}],["path",{d:"m14 16-3 3 3 3"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iV=[["path",{d:"m15 14 5-5-5-5"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oV=[["circle",{cx:"12",cy:"17",r:"1"}],["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hV=[["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sV=[["path",{d:"M3 2v6h6"}],["path",{d:"M21 12A9 9 0 0 0 6 5.3L3 8"}],["path",{d:"M21 22v-6h-6"}],["path",{d:"M3 12a9 9 0 0 0 15 6.7l3-2.7"}],["circle",{cx:"12",cy:"12",r:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cV=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"}],["path",{d:"M16 16h5v5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dV=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pV=[["path",{d:"M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47"}],["path",{d:"M8 16H3v5"}],["path",{d:"M3 12C3 9.51 4 7.26 5.64 5.64"}],["path",{d:"m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64"}],["path",{d:"M21 12c0 1-.16 1.97-.47 2.87"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M22 22 2 2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lV=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uV=[["path",{d:"M17 3v10"}],["path",{d:"m12.67 5.5 8.66 5"}],["path",{d:"m12.67 10.5 8.66-5"}],["path",{d:"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fV=[["path",{d:"M4 7V4h16v3"}],["path",{d:"M5 20h6"}],["path",{d:"M13 4 8 20"}],["path",{d:"m15 15 5 5"}],["path",{d:"m20 15-5 5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vV=[["path",{d:"m17 2 4 4-4 4"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}],["path",{d:"m7 22-4-4 4-4"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3"}],["path",{d:"M11 10h1v4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MV=[["path",{d:"m2 9 3-3 3 3"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6"}],["path",{d:"m22 15-3 3-3-3"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yV=[["path",{d:"m17 2 4 4-4 4"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}],["path",{d:"m7 22-4-4 4-4"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gV=[["path",{d:"M14 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}],["path",{d:"M14 4a2 2 0 0 1 2-2"}],["path",{d:"M16 10a2 2 0 0 1-2-2"}],["path",{d:"M20 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}],["path",{d:"M20 2a2 2 0 0 1 2 2"}],["path",{d:"M22 8a2 2 0 0 1-2 2"}],["path",{d:"m3 7 3 3 3-3"}],["path",{d:"M6 10V5a 3 3 0 0 1 3-3h1"}],["rect",{x:"2",y:"14",width:"8",height:"8",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mV=[["path",{d:"M14 4a2 2 0 0 1 2-2"}],["path",{d:"M16 10a2 2 0 0 1-2-2"}],["path",{d:"M20 2a2 2 0 0 1 2 2"}],["path",{d:"M22 8a2 2 0 0 1-2 2"}],["path",{d:"m3 7 3 3 3-3"}],["path",{d:"M6 10V5a3 3 0 0 1 3-3h1"}],["rect",{x:"2",y:"14",width:"8",height:"8",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xV=[["polyline",{points:"7 17 2 12 7 7"}],["polyline",{points:"12 17 7 12 12 7"}],["path",{d:"M22 18v-2a4 4 0 0 0-4-4H7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wV=[["polyline",{points:"9 17 4 12 9 7"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bV=[["polygon",{points:"11 19 2 12 11 5 11 19"}],["polygon",{points:"22 19 13 12 22 5 22 19"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _V=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CV=[["path",{d:"M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22"}],["path",{d:"m12 18 2.57-3.5"}],["path",{d:"M6.243 9.016a7 7 0 0 1 11.507-.009"}],["path",{d:"M9.35 14.53 12 11.22"}],["path",{d:"M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AV=[["polyline",{points:"3.5 2 6.5 12.5 18 12.5"}],["line",{x1:"9.5",x2:"5.5",y1:"12.5",y2:"20"}],["line",{x1:"15",x2:"18.5",y1:"12.5",y2:"20"}],["path",{d:"M2.75 18a13 13 0 0 0 18.5 0"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HV=[["path",{d:"M6 19V5"}],["path",{d:"M10 19V6.8"}],["path",{d:"M14 19v-7.8"}],["path",{d:"M18 5v4"}],["path",{d:"M18 19v-6"}],["path",{d:"M22 19V9"}],["path",{d:"M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SV=[["path",{d:"M20 9V7a2 2 0 0 0-2-2h-6"}],["path",{d:"m15 2-3 3 3 3"}],["path",{d:"M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kV=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EV=[["path",{d:"M12 5H6a2 2 0 0 0-2 2v3"}],["path",{d:"m9 8 3-3-3-3"}],["path",{d:"M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LV=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VV=[["circle",{cx:"6",cy:"19",r:"3"}],["path",{d:"M9 19h8.5c.4 0 .9-.1 1.3-.2"}],["path",{d:"M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12"}],["path",{d:"m2 2 20 20"}],["path",{d:"M21 15.3a3.5 3.5 0 0 0-3.3-3.3"}],["path",{d:"M15 5h-4.3"}],["circle",{cx:"18",cy:"5",r:"3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DV=[["circle",{cx:"6",cy:"19",r:"3"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"}],["circle",{cx:"18",cy:"5",r:"3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TV=[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6.01 18H6"}],["path",{d:"M10.01 18H10"}],["path",{d:"M15 10v4"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 12h18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 9H3"}],["path",{d:"M21 15H3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OV=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 7.5H3"}],["path",{d:"M21 12H3"}],["path",{d:"M21 16.5H3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PV=[["path",{d:"M4 11a9 9 0 0 1 9 9"}],["path",{d:"M4 4a16 16 0 0 1 16 16"}],["circle",{cx:"5",cy:"19",r:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IV=[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"}],["path",{d:"m14.5 12.5 2-2"}],["path",{d:"m11.5 9.5 2-2"}],["path",{d:"m8.5 6.5 2-2"}],["path",{d:"m17.5 15.5 2-2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RV=[["path",{d:"M6 11h8a4 4 0 0 0 0-8H9v18"}],["path",{d:"M6 15h8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BV=[["path",{d:"M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z"}],["path",{d:"M21 14 10 2 3 14h18Z"}],["path",{d:"M10 2v16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FV=[["path",{d:"M7 21h10"}],["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"}],["path",{d:"M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"}],["path",{d:"m13 12 4-4"}],["path",{d:"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zV=[["path",{d:"m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777"}],["path",{d:"M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25"}],["path",{d:"M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9"}],["path",{d:"m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2"}],["rect",{width:"20",height:"4",x:"2",y:"11",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NV=[["path",{d:"M4 10a7.31 7.31 0 0 0 10 10Z"}],["path",{d:"m9 15 3-3"}],["path",{d:"M17 13a6 6 0 0 0-6-6"}],["path",{d:"M21 13A10 10 0 0 0 11 3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qV=[["path",{d:"M13 7 9 3 5 7l4 4"}],["path",{d:"m17 11 4 4-4 4-4-4"}],["path",{d:"m8 12 4 4 6-6-4-4Z"}],["path",{d:"m16 8 3-3"}],["path",{d:"M9 21a6 6 0 0 0-6-6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jV=[["path",{d:"m20 19.5-5.5 1.2"}],["path",{d:"M14.5 4v11.22a1 1 0 0 0 1.242.97L20 15.2"}],["path",{d:"m2.978 19.351 5.549-1.363A2 2 0 0 0 10 16V2"}],["path",{d:"M20 10 4 13.5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZV=[["path",{d:"M10 2v3a1 1 0 0 0 1 1h5"}],["path",{d:"M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6"}],["path",{d:"M18 22H4a2 2 0 0 1-2-2V6"}],["path",{d:"M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UV=[["path",{d:"M13 13H8a1 1 0 0 0-1 1v7"}],["path",{d:"M14 8h1"}],["path",{d:"M17 21v-4"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41"}],["path",{d:"M29.5 11.5s5 5 4 5"}],["path",{d:"M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WV=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=[["path",{d:"M5 7v11a1 1 0 0 0 1 1h11"}],["path",{d:"M5.293 18.707 11 13"}],["circle",{cx:"19",cy:"19",r:"2"}],["circle",{cx:"5",cy:"5",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $V=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}],["path",{d:"M7 21h10"}],["path",{d:"M12 3v18"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KV=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M14 15H9v-5"}],["path",{d:"M16 3h5v5"}],["path",{d:"M21 3 9 15"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GV=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M8 7v10"}],["path",{d:"M12 7v10"}],["path",{d:"M17 7v10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XV=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YV=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 9h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JV=[["path",{d:"M11.246 16.657a1 1 0 0 0 1.508 0l3.57-4.101A2.75 2.75 0 1 0 12 9.168a2.75 2.75 0 1 0-4.324 3.388z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QV=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M7 12h10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tD=[["path",{d:"M17 12v4a1 1 0 0 1-1 1h-4"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M17 8V7"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M7 17h.01"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["rect",{x:"7",y:"7",width:"5",height:"5",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eD=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m16 16-1.9-1.9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aD=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M7 8h8"}],["path",{d:"M7 12h10"}],["path",{d:"M7 16h6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nD=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rD=[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4"}],["path",{d:"m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10"}],["path",{d:"M18 5v17"}],["path",{d:"m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6"}],["path",{d:"M6 5v17"}],["circle",{cx:"12",cy:"9",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iD=[["path",{d:"M5.42 9.42 8 12"}],["circle",{cx:"4",cy:"8",r:"2"}],["path",{d:"m14 6-8.58 8.58"}],["circle",{cx:"4",cy:"16",r:"2"}],["path",{d:"M10.8 14.8 14 18"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oD=[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M8.12 8.12 12 12"}],["path",{d:"M20 4 8.12 15.88"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M14.8 14.8 20 20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hD=[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m22 3-5 5"}],["path",{d:"m17 3 5 5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sD=[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m17 8 5-5"}],["path",{d:"M17 3h5v5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cD=[["path",{d:"M15 12h-5"}],["path",{d:"M15 8h-5"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dD=[["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pD=[["path",{d:"m8 11 2 2 4-4"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lD=[["path",{d:"m13 13.5 2-2.5-2-2.5"}],["path",{d:"m21 21-4.3-4.3"}],["path",{d:"M9 8.5 7 11l2 2.5"}],["circle",{cx:"11",cy:"11",r:"8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uD=[["path",{d:"m13.5 8.5-5 5"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fD=[["path",{d:"m13.5 8.5-5 5"}],["path",{d:"m8.5 8.5 5 5"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vD=[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MD=[["path",{d:"M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0"}],["path",{d:"M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=[["path",{d:"M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"}],["path",{d:"M6 12h16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yD=[["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2"}],["path",{d:"M7 14v1a2 2 0 0 0 2 2h1"}],["path",{d:"M14 7h1a2 2 0 0 1 2 2v1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gD=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mD=[["line",{x1:"3",x2:"21",y1:"12",y2:"12"}],["polyline",{points:"8 8 12 4 16 8"}],["polyline",{points:"16 16 12 20 8 16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xD=[["line",{x1:"12",x2:"12",y1:"3",y2:"21"}],["polyline",{points:"8 8 4 12 8 16"}],["polyline",{points:"16 16 20 12 16 8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wD=[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"}],["path",{d:"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"}],["path",{d:"M6 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"m15.7 13.4-.9-.3"}],["path",{d:"m9.2 10.9-.9-.3"}],["path",{d:"m10.6 15.7.3-.9"}],["path",{d:"m13.6 15.7-.4-1"}],["path",{d:"m10.8 9.3-.4-1"}],["path",{d:"m8.3 13.6 1-.4"}],["path",{d:"m14.7 10.8 1-.4"}],["path",{d:"m13.4 8.3-.3.9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bD=[["path",{d:"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"}],["path",{d:"M6 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"m13 6-4 6h6l-4 6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _D=[["path",{d:"M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5"}],["path",{d:"M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z"}],["path",{d:"M22 17v-1a2 2 0 0 0-2-2h-1"}],["path",{d:"M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z"}],["path",{d:"M6 18h.01"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CD=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AD=[["path",{d:"M20 7h-9"}],["path",{d:"M14 17H5"}],["circle",{cx:"17",cy:"17",r:"3"}],["circle",{cx:"7",cy:"7",r:"3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HD=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SD=[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kD=[["circle",{cx:"18",cy:"5",r:"3"}],["circle",{cx:"6",cy:"12",r:"3"}],["circle",{cx:"18",cy:"19",r:"3"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ED=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15"}],["line",{x1:"9",x2:"9",y1:"9",y2:"21"}],["line",{x1:"15",x2:"15",y1:"9",y2:"21"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LD=[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}],["polyline",{points:"16 6 12 2 8 6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VD=[["path",{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DD=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TD=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OD=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m4.243 5.21 14.39 12.472"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PD=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ID=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 22V2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RD=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M9 12h6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BD=[["path",{d:"m2 2 20 20"}],["path",{d:"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71"}],["path",{d:"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FD=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M9 12h6"}],["path",{d:"M12 9v6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zD=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ND=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M6.376 18.91a6 6 0 0 1 11.249.003"}],["circle",{cx:"12",cy:"11",r:"4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m14.5 9.5-5 5"}],["path",{d:"m9.5 9.5 5 5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qD=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jD=[["circle",{cx:"12",cy:"12",r:"8"}],["path",{d:"M12 2v7.5"}],["path",{d:"m19 5-5.23 5.23"}],["path",{d:"M22 12h-7.5"}],["path",{d:"m19 19-5.23-5.23"}],["path",{d:"M12 14.5V22"}],["path",{d:"M10.23 13.77 5 19"}],["path",{d:"M9.5 12H2"}],["path",{d:"M10.23 10.23 5 5"}],["circle",{cx:"12",cy:"12",r:"2.5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZD=[["path",{d:"M12 10.189V14"}],["path",{d:"M12 2v3"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"}],["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UD=[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WD=[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"}],["path",{d:"M3 6h18"}],["path",{d:"M16 10a4 4 0 0 1-8 0"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $D=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KD=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GD=[["path",{d:"M2 22v-5l5-5 5 5-5 5z"}],["path",{d:"M9.5 14.5 16 8"}],["path",{d:"m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XD=[["path",{d:"m4 4 2.5 2.5"}],["path",{d:"M13.5 6.5a4.95 4.95 0 0 0-7 7"}],["path",{d:"M15 5 5 15"}],["path",{d:"M14 17v.01"}],["path",{d:"M10 16v.01"}],["path",{d:"M13 13v.01"}],["path",{d:"M16 10v.01"}],["path",{d:"M11 20v.01"}],["path",{d:"M17 14v.01"}],["path",{d:"M20 11v.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YD=[["path",{d:"M11 12h.01"}],["path",{d:"M13 22c.5-.5 1.12-1 2.5-1-1.38 0-2-.5-2.5-1"}],["path",{d:"M14 2a3.28 3.28 0 0 1-3.227 1.798l-6.17-.561A2.387 2.387 0 1 0 4.387 8H15.5a1 1 0 0 1 0 13 1 1 0 0 0 0-5H12a7 7 0 0 1-7-7V8"}],["path",{d:"M14 8a8.5 8.5 0 0 1 0 8"}],["path",{d:"M16 16c2 0 4.5-4 4-6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JD=[["path",{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8"}],["path",{d:"M9 19.8V15m0 0H4.2M9 15l-6 6"}],["path",{d:"M15 4.2V9m0 0h4.8M15 9l6-6"}],["path",{d:"M9 4.2V9m0 0H4.2M9 9 3 3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QD=[["path",{d:"M12 22v-7l-2-2"}],["path",{d:"M17 8v.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0Z"}],["path",{d:"m14 14-2 2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tT=[["path",{d:"m18 14 4 4-4 4"}],["path",{d:"m18 2 4 4-4 4"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=[["path",{d:"M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}],["path",{d:"M17 20V8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iT=[["path",{d:"M2 20h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}],["path",{d:"M17 20V8"}],["path",{d:"M22 4v16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hT=[["path",{d:"m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284"}],["path",{d:"M3 21h18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sT=[["path",{d:"M10 9H4L2 7l2-2h6"}],["path",{d:"M14 5h6l2 2-2 2h-6"}],["path",{d:"M10 22V4a2 2 0 1 1 4 0v18"}],["path",{d:"M8 22h8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=[["path",{d:"M12 13v8"}],["path",{d:"M12 3v3"}],["path",{d:"M18 6a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dT=[["path",{d:"M7 18v-6a5 5 0 1 1 10 0v6"}],["path",{d:"M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"}],["path",{d:"M21 12h1"}],["path",{d:"M18.5 4.5 18 5"}],["path",{d:"M2 12h1"}],["path",{d:"M12 2v1"}],["path",{d:"m4.929 4.929.707.707"}],["path",{d:"M12 12v6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pT=[["polygon",{points:"19 20 9 12 19 4 19 20"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lT=[["polygon",{points:"5 4 15 12 5 20 5 4"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uT=[["path",{d:"m12.5 17-.5-1-.5 1h1z"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"9",cy:"12",r:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fT=[["rect",{width:"3",height:"8",x:"13",y:"2",rx:"1.5"}],["path",{d:"M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"}],["rect",{width:"3",height:"8",x:"8",y:"14",rx:"1.5"}],["path",{d:"M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"}],["rect",{width:"8",height:"3",x:"14",y:"13",rx:"1.5"}],["path",{d:"M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"}],["rect",{width:"8",height:"3",x:"2",y:"8",rx:"1.5"}],["path",{d:"M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vT=[["path",{d:"M22 2 2 22"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MT=[["path",{d:"M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yT=[["line",{x1:"21",x2:"14",y1:"4",y2:"4"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=[["line",{x1:"4",x2:"4",y1:"21",y2:"14"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gT=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12.667 8 10 12h4l-2.667 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mT=[["rect",{width:"7",height:"12",x:"2",y:"6",rx:"1"}],["path",{d:"M13 8.32a7.43 7.43 0 0 1 0 7.36"}],["path",{d:"M16.46 6.21a11.76 11.76 0 0 1 0 11.58"}],["path",{d:"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xT=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12 18h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wT=[["path",{d:"M22 11v1a10 10 0 1 1-9-10"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}],["path",{d:"M16 5h6"}],["path",{d:"M19 2v6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bT=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _T=[["path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}],["circle",{cx:"10",cy:"13",r:"8"}],["path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}],["path",{d:"M18 3 19.1 5.2"}],["path",{d:"M22 3 20.9 5.2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CT=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AT=[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"}],["path",{d:"M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"}],["path",{d:"M4 18v2"}],["path",{d:"M20 18v2"}],["path",{d:"M12 4v9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"}],["path",{d:"M7 21h10"}],["path",{d:"M19.5 12 22 6"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ST=[["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kT=[["path",{d:"M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z"}],["path",{d:"M12 18v4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ET=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LT=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M12 6h.01"}],["circle",{cx:"12",cy:"14",r:"4"}],["path",{d:"M12 14h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VT=[["path",{d:"M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"}],["path",{d:"M19.8 17.8a7.5 7.5 0 0 0 .003-10.603"}],["path",{d:"M17 15a3.5 3.5 0 0 0-.025-4.975"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DT=[["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}],["path",{d:"M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TT=[["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}],["path",{d:"m16 20 2 2 4-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}],["path",{d:"M5 17A12 12 0 0 1 17 5"}],["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PT=[["path",{d:"M16 3h5v5"}],["path",{d:"M8 3H3v5"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"}],["path",{d:"m15 9 6-6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IT=[["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M5 17A12 12 0 0 1 17 5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RT=[["path",{d:"M3 3h.01"}],["path",{d:"M7 5h.01"}],["path",{d:"M11 7h.01"}],["path",{d:"M3 7h.01"}],["path",{d:"M7 9h.01"}],["path",{d:"M3 11h.01"}],["rect",{width:"4",height:"4",x:"15",y:"5"}],["path",{d:"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"}],["path",{d:"m13 14 8-2"}],["path",{d:"m13 19 8-2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=[["path",{d:"M7 20h10"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M17 12h-2l-2 5-2-10-2 5H7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 8-8 8"}],["path",{d:"M16 16H8V8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m8 8 8 8"}],["path",{d:"M16 8v8H8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vs=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m12 8-4 4 4 4"}],["path",{d:"M16 12H8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=[["path",{d:"M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6"}],["path",{d:"m3 21 9-9"}],["path",{d:"M9 21H3v-6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}],["path",{d:"m21 21-9-9"}],["path",{d:"M21 15v6h-6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os=[["path",{d:"M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6"}],["path",{d:"m3 3 9 9"}],["path",{d:"M3 9V3h6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=[["path",{d:"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"}],["path",{d:"m21 3-9 9"}],["path",{d:"M15 3h6v6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}],["path",{d:"m12 16 4-4-4-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 16V8h8"}],["path",{d:"M16 16 8 8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 8h8v8"}],["path",{d:"m8 16 8-8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zs=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 8v8"}],["path",{d:"m8.5 14 7-4"}],["path",{d:"m8.5 10 7 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=[["path",{d:"M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2"}],["path",{d:"M10 22H8"}],["path",{d:"M16 22h-2"}],["circle",{cx:"8",cy:"8",r:"2"}],["path",{d:"M9.414 9.414 12 12"}],["path",{d:"M14.8 14.8 18 18"}],["circle",{cx:"8",cy:"16",r:"2"}],["path",{d:"m18 6-8.586 8.586"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 8h7"}],["path",{d:"M8 12h6"}],["path",{d:"M11 16h5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5"}],["path",{d:"m9 11 3 3L22 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m9 12 2 2 4-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 10-4 4-4-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m10 8 4 4-4 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m14 16-4-4 4-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m8 14 4-4 4 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ks=[["path",{d:"M10 9.5 8 12l2 2.5"}],["path",{d:"m14 9.5 2 2.5-2 2.5"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=[["path",{d:"M10 9.5 8 12l2 2.5"}],["path",{d:"M14 21h1"}],["path",{d:"m14 9.5 2 2.5-2 2.5"}],["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"}],["path",{d:"M9 21h1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=[["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"}],["path",{d:"M9 21h1"}],["path",{d:"M14 21h1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=[["path",{d:"M8 7v7"}],["path",{d:"M12 7v4"}],["path",{d:"M16 7v9"}],["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M9 3h1"}],["path",{d:"M14 3h1"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 9v1"}],["path",{d:"M21 14v1"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M14 21h1"}],["path",{d:"M9 21h1"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M3 14v1"}],["path",{d:"M3 9v1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}],["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h2"}],["path",{d:"M14 3h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v2"}],["path",{d:"M3 14v1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ys=[["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 3h1"}],["path",{d:"M14 21h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v1"}],["path",{d:"M3 14v1"}],["path",{d:"M21 14v1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"12",r:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 10h10"}],["path",{d:"M7 14h10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"}],["path",{d:"M9 11.2h5.7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 7v7"}],["path",{d:"M12 7v4"}],["path",{d:"M16 7v9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7v10"}],["path",{d:"M11 7v10"}],["path",{d:"m15 7 2 10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 16V8l4 4 4-4v8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 8h10"}],["path",{d:"M7 12h10"}],["path",{d:"M7 16h10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}],["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=[["path",{d:"M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41"}],["path",{d:"M3 8.7V19a2 2 0 0 0 2 2h10.3"}],["path",{d:"m2 2 20 20"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2"}],["path",{d:"M9 17v-2.3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7h10"}],["path",{d:"M10 7v10"}],["path",{d:"M16 17a2 2 0 0 1-2-2V7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 12H9.5a2.5 2.5 0 0 1 0-5H17"}],["path",{d:"M12 7v10"}],["path",{d:"M16 7v10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m9 8 6 4-6 4Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=[["path",{d:"M12 7v4"}],["path",{d:"M7.998 9.003a5 5 0 1 0 8-.005"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NT=[["path",{d:"M7 12h2l2 5 2-10h4"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=[["path",{d:"M21 11a8 8 0 0 0-8-8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"2"}],["circle",{cx:"8",cy:"8",r:"2"}],["path",{d:"M9.414 9.414 12 12"}],["path",{d:"M14.8 14.8 18 18"}],["circle",{cx:"8",cy:"16",r:"2"}],["path",{d:"m18 6-8.586 8.586"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M16 8.9V7H8l4 5-4 5h8v-1.9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=[["path",{d:"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3"}],["path",{d:"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=[["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=[["path",{d:"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"}],["path",{d:"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=[["path",{d:"M18 21a6 6 0 0 0-12 0"}],["circle",{cx:"12",cy:"11",r:"4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UT=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=[["path",{d:"M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=[["path",{d:"M15.236 22a3 3 0 0 0-2.2-5"}],["path",{d:"M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4"}],["path",{d:"M18 13h.01"}],["path",{d:"M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=[["path",{d:"M5 22h14"}],["path",{d:"M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z"}],["path",{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=[["path",{d:"M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=[["path",{d:"M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43"}],["path",{d:"M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=[["line",{x1:"18",x2:"18",y1:"20",y2:"4"}],["polygon",{points:"14,20 4,12 14,4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=[["line",{x1:"6",x2:"6",y1:"4",y2:"20"}],["polygon",{points:"10,4 20,12 10,20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tO=[["path",{d:"M11 2v2"}],["path",{d:"M5 2v2"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3"}],["circle",{cx:"20",cy:"10",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eO=[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"}],["path",{d:"M14 3v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 13h.01"}],["path",{d:"M16 13h.01"}],["path",{d:"M10 16s.8 1 2 1c1.3 0 2-1 2-1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aO=[["path",{d:"M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"}],["path",{d:"M15 3v4a2 2 0 0 0 2 2h4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nO=[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"}],["path",{d:"M2 7h20"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rO=[["rect",{width:"20",height:"6",x:"2",y:"4",rx:"2"}],["rect",{width:"20",height:"6",x:"2",y:"14",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iO=[["rect",{width:"6",height:"20",x:"4",y:"2",rx:"2"}],["rect",{width:"6",height:"20",x:"14",y:"2",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oO=[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hO=[["path",{d:"m4 5 8 8"}],["path",{d:"m12 5-8 8"}],["path",{d:"M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sO=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 4h.01"}],["path",{d:"M20 12h.01"}],["path",{d:"M12 20h.01"}],["path",{d:"M4 12h.01"}],["path",{d:"M17.657 6.343h.01"}],["path",{d:"M17.657 17.657h.01"}],["path",{d:"M6.343 17.657h.01"}],["path",{d:"M6.343 6.343h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cO=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 3v1"}],["path",{d:"M12 20v1"}],["path",{d:"M3 12h1"}],["path",{d:"M20 12h1"}],["path",{d:"m18.364 5.636-.707.707"}],["path",{d:"m6.343 17.657-.707.707"}],["path",{d:"m5.636 5.636.707.707"}],["path",{d:"m17.657 17.657.707.707"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dO=[["path",{d:"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.9 4.9 1.4 1.4"}],["path",{d:"m17.7 17.7 1.4 1.4"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.3 17.7-1.4 1.4"}],["path",{d:"m19.1 4.9-1.4 1.4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pO=[["path",{d:"M10 21v-1"}],["path",{d:"M10 4V3"}],["path",{d:"M10 9a3 3 0 0 0 0 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6 1.5-3H22"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h1"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"m3.64 18.36.7-.7"}],["path",{d:"m4.34 6.34-.7-.7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lO=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uO=[["path",{d:"M12 2v8"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m8 6 4-4 4 4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fO=[["path",{d:"M12 10V2"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m16 6-4 4-4-4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vO=[["path",{d:"m4 19 8-8"}],["path",{d:"m12 19-8-8"}],["path",{d:"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MO=[["path",{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"}],["path",{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"}],["path",{d:"M 7 17h.01"}],["path",{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yO=[["path",{d:"M10 21V3h8"}],["path",{d:"M6 16h9"}],["path",{d:"M10 9.5h7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gO=[["path",{d:"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"}],["path",{d:"M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m18 22-3-3 3-3"}],["path",{d:"m6 2 3 3-3 3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mO=[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xO=[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wO=[["path",{d:"m18 2 4 4"}],["path",{d:"m17 7 3-3"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"}],["path",{d:"m9 11 4 4"}],["path",{d:"m5 19-3 3"}],["path",{d:"m14 4 6 6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bO=[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _O=[["path",{d:"M12 21v-6"}],["path",{d:"M12 9V3"}],["path",{d:"M3 15h18"}],["path",{d:"M3 9h18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CO=[["path",{d:"M12 15V9"}],["path",{d:"M3 15h18"}],["path",{d:"M3 9h18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AO=[["path",{d:"M14 14v2"}],["path",{d:"M14 20v2"}],["path",{d:"M14 2v2"}],["path",{d:"M14 8v2"}],["path",{d:"M2 15h8"}],["path",{d:"M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2"}],["path",{d:"M2 9h8"}],["path",{d:"M22 15h-4"}],["path",{d:"M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"}],["path",{d:"M22 9h-4"}],["path",{d:"M5 3v18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HO=[["path",{d:"M16 12H3"}],["path",{d:"M16 18H3"}],["path",{d:"M16 6H3"}],["path",{d:"M21 12h.01"}],["path",{d:"M21 18h.01"}],["path",{d:"M21 6h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SO=[["path",{d:"M15 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 9H3"}],["path",{d:"M21 15H3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kO=[["path",{d:"M14 10h2"}],["path",{d:"M15 22v-8"}],["path",{d:"M15 2v4"}],["path",{d:"M2 10h2"}],["path",{d:"M20 10h2"}],["path",{d:"M3 19h18"}],["path",{d:"M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6"}],["path",{d:"M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2"}],["path",{d:"M8 10h2"}],["path",{d:"M9 22v-8"}],["path",{d:"M9 2v4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EO=[["path",{d:"M12 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LO=[["rect",{width:"10",height:"14",x:"3",y:"8",rx:"2"}],["path",{d:"M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"}],["path",{d:"M8 18h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VO=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DO=[["circle",{cx:"7",cy:"7",r:"5"}],["circle",{cx:"17",cy:"17",r:"5"}],["path",{d:"M12 17h10"}],["path",{d:"m3.46 10.54 7.08-7.08"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TO=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OO=[["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"}],["path",{d:"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"6.5",cy:"9.5",r:".5",fill:"currentColor"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PO=[["path",{d:"M4 4v16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IO=[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RO=[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BO=[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}],["path",{d:"M19 4v16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FO=[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}],["path",{d:"M19 4v16"}],["path",{d:"M22 6 2 18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zO=[["circle",{cx:"17",cy:"4",r:"2"}],["path",{d:"M15.59 5.41 5.41 15.59"}],["circle",{cx:"4",cy:"17",r:"2"}],["path",{d:"M12 22s-4-9-1.5-11.5S22 12 22 12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NO=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"6"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qO=[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"}],["path",{d:"m13.56 11.747 4.332-.924"}],["path",{d:"m16 21-3.105-6.21"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"}],["path",{d:"m6.158 8.633 1.114 4.456"}],["path",{d:"m8 21 3.105-6.21"}],["circle",{cx:"12",cy:"13",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jO=[["circle",{cx:"4",cy:"4",r:"2"}],["path",{d:"m14 5 3-3 3 3"}],["path",{d:"m14 10 3-3 3 3"}],["path",{d:"M17 14V2"}],["path",{d:"M17 14H7l-5 8h20Z"}],["path",{d:"M8 14v8"}],["path",{d:"m9 14 5 8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZO=[["path",{d:"M3.5 21 14 3"}],["path",{d:"M20.5 21 10 3"}],["path",{d:"M15.5 21 12 15l-3.5 6"}],["path",{d:"M2 21h20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UO=[["polyline",{points:"4 17 10 11 4 5"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=[["path",{d:"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3"}],["path",{d:"m16 2 6 6"}],["path",{d:"M12 16H4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WO=[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2"}],["path",{d:"M8.5 2h7"}],["path",{d:"M14.5 16h-5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $O=[["path",{d:"M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2"}],["path",{d:"M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2"}],["path",{d:"M3 2h7"}],["path",{d:"M14 2h7"}],["path",{d:"M9 16H4"}],["path",{d:"M20 16h-5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KO=[["path",{d:"M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1"}],["path",{d:"M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5"}],["path",{d:"M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"}],["path",{d:"M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"}],["path",{d:"M9 7v10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GO=[["path",{d:"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1"}],["path",{d:"M7 22h1a4 4 0 0 0 4-4v-1"}],["path",{d:"M7 2h1a4 4 0 0 1 4 4v1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XO=[["path",{d:"M17 6H3"}],["path",{d:"M21 12H8"}],["path",{d:"M21 18H8"}],["path",{d:"M3 12v6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YO=[["path",{d:"M21 6H3"}],["path",{d:"M10 12H3"}],["path",{d:"M10 18H3"}],["circle",{cx:"17",cy:"15",r:"3"}],["path",{d:"m21 19-1.9-1.9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=[["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 3h1"}],["path",{d:"M14 21h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v1"}],["path",{d:"M3 14v1"}],["path",{d:"M21 14v1"}],["line",{x1:"7",x2:"15",y1:"8",y2:"8"}],["line",{x1:"7",x2:"17",y1:"12",y2:"12"}],["line",{x1:"7",x2:"13",y1:"16",y2:"16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JO=[["path",{d:"M17 6.1H3"}],["path",{d:"M21 12.1H3"}],["path",{d:"M15.1 18H3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QO=[["path",{d:"M2 10s3-3 3-8"}],["path",{d:"M22 10s-3-3-3-8"}],["path",{d:"M10 2c0 4.4-3.6 8-8 8"}],["path",{d:"M14 2c0 4.4 3.6 8 8 8"}],["path",{d:"M2 10s2 2 2 5"}],["path",{d:"M22 10s-2 2-2 5"}],["path",{d:"M8 15h8"}],["path",{d:"M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"}],["path",{d:"M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tP=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"M10.585 15H10"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eP=[["path",{d:"M12 9a4 4 0 0 0-2 7.5"}],["path",{d:"M12 3v2"}],["path",{d:"m6.6 18.4-1.4 1.4"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}],["path",{d:"M4 13H2"}],["path",{d:"M6.34 7.34 4.93 5.93"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aP=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nP=[["path",{d:"M17 14V2"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rP=[["path",{d:"M7 10v12"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iP=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"m9 12 2 2 4-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oP=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M9 12h6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hP=[["path",{d:"M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M9 9h.01"}],["path",{d:"m15 9-6 6"}],["path",{d:"M15 15h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sP=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M9 12h6"}],["path",{d:"M12 9v6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cP=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"m9.5 14.5 5-5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dP=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M13 5v2"}],["path",{d:"M13 17v2"}],["path",{d:"M13 11v2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pP=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"m9.5 14.5 5-5"}],["path",{d:"m9.5 9.5 5 5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lP=[["path",{d:"M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12"}],["path",{d:"m12 13.5 3.75.5"}],["path",{d:"m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8"}],["path",{d:"M6 10V8"}],["path",{d:"M6 14v1"}],["path",{d:"M6 19v2"}],["rect",{x:"2",y:"8",width:"20",height:"13",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uP=[["path",{d:"m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8"}],["path",{d:"M6 10V8"}],["path",{d:"M6 14v1"}],["path",{d:"M6 19v2"}],["rect",{x:"2",y:"8",width:"20",height:"13",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fP=[["path",{d:"M10 2h4"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2"}],["path",{d:"m2 2 20 20"}],["path",{d:"M12 12v-2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vP=[["path",{d:"M10 2h4"}],["path",{d:"M12 14v-4"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"}],["path",{d:"M9 17H4v5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MP=[["line",{x1:"10",x2:"14",y1:"2",y2:"2"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11"}],["circle",{cx:"12",cy:"14",r:"8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yP=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6"}],["circle",{cx:"8",cy:"12",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gP=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6"}],["circle",{cx:"16",cy:"12",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mP=[["path",{d:"M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18"}],["path",{d:"M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xP=[["path",{d:"M21 4H3"}],["path",{d:"M18 8H6"}],["path",{d:"M19 12H9"}],["path",{d:"M16 16h-6"}],["path",{d:"M11 20H9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wP=[["ellipse",{cx:"12",cy:"11",rx:"3",ry:"2"}],["ellipse",{cx:"12",cy:"12.5",rx:"10",ry:"8.5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bP=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M2 14h20"}],["path",{d:"M12 20v-6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _P=[["path",{d:"M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16"}],["path",{d:"M2 14h12"}],["path",{d:"M22 14h-2"}],["path",{d:"M12 20v-6"}],["path",{d:"m2 2 20 20"}],["path",{d:"M22 16V6a2 2 0 0 0-2-2H10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CP=[["path",{d:"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z"}],["path",{d:"M8 13v9"}],["path",{d:"M16 22v-9"}],["path",{d:"m9 6 1 7"}],["path",{d:"m15 6-1 7"}],["path",{d:"M12 6V2"}],["path",{d:"M13 2h-2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AP=[["rect",{width:"18",height:"12",x:"3",y:"8",rx:"1"}],["path",{d:"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3"}],["path",{d:"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HP=[["path",{d:"m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20"}],["path",{d:"M16 18h-5"}],["path",{d:"M18 5a1 1 0 0 0-1 1v5.573"}],["path",{d:"M3 4h8.129a1 1 0 0 1 .99.863L13 11.246"}],["path",{d:"M4 11V4"}],["path",{d:"M7 15h.01"}],["path",{d:"M8 10.1V4"}],["circle",{cx:"18",cy:"18",r:"2"}],["circle",{cx:"7",cy:"15",r:"5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SP=[["path",{d:"M9.3 6.2a4.55 4.55 0 0 0 5.4 0"}],["path",{d:"M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3"}],["path",{d:"M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z"}],["path",{d:"m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kP=[["path",{d:"M2 22V12a10 10 0 1 1 20 0v10"}],["path",{d:"M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8"}],["path",{d:"M10 15h.01"}],["path",{d:"M14 15h.01"}],["path",{d:"M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z"}],["path",{d:"m9 19-2 3"}],["path",{d:"m15 19 2 3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EP=[["path",{d:"M8 3.1V7a4 4 0 0 0 8 0V3.1"}],["path",{d:"m9 15-1-1"}],["path",{d:"m15 15 1-1"}],["path",{d:"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z"}],["path",{d:"m8 19-2 3"}],["path",{d:"m16 19 2 3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LP=[["path",{d:"M2 17 17 2"}],["path",{d:"m2 14 8 8"}],["path",{d:"m5 11 8 8"}],["path",{d:"m8 8 8 8"}],["path",{d:"m11 5 8 8"}],["path",{d:"m14 2 8 8"}],["path",{d:"M7 22 22 7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2"}],["path",{d:"M4 11h16"}],["path",{d:"M12 3v8"}],["path",{d:"m8 19-2 3"}],["path",{d:"m18 22-2-3"}],["path",{d:"M8 15h.01"}],["path",{d:"M16 15h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VP=[["path",{d:"M12 16v6"}],["path",{d:"M14 20h-4"}],["path",{d:"M18 2h4v4"}],["path",{d:"m2 2 7.17 7.17"}],["path",{d:"M2 5.355V2h3.357"}],["path",{d:"m22 2-7.17 7.17"}],["path",{d:"M8 5 5 8"}],["circle",{cx:"12",cy:"12",r:"4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DP=[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TP=[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OP=[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z"}],["path",{d:"M12 19v3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=[["path",{d:"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"}],["path",{d:"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"}],["path",{d:"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"}],["path",{d:"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PP=[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"}],["path",{d:"M7 16v6"}],["path",{d:"M13 19v3"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IP=[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"}],["path",{d:"M12 22v-3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RP=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["rect",{width:"3",height:"9",x:"7",y:"7"}],["rect",{width:"3",height:"5",x:"14",y:"7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BP=[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7"}],["polyline",{points:"16 17 22 17 22 11"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FP=[["path",{d:"M14.828 14.828 21 21"}],["path",{d:"M21 16v5h-5"}],["path",{d:"m21 3-9 9-4-4-6 6"}],["path",{d:"M21 8V3h-5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zP=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NP=[["path",{d:"M10.17 4.193a2 2 0 0 1 3.666.013"}],["path",{d:"M14 21h2"}],["path",{d:"m15.874 7.743 1 1.732"}],["path",{d:"m18.849 12.952 1 1.732"}],["path",{d:"M21.824 18.18a2 2 0 0 1-1.835 2.824"}],["path",{d:"M4.024 21a2 2 0 0 1-1.839-2.839"}],["path",{d:"m5.136 12.952-1 1.732"}],["path",{d:"M8 21h2"}],["path",{d:"m8.102 7.743-1 1.732"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qP=[["path",{d:"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jP=[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZP=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18"}],["path",{d:"M4 22h16"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UP=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"}],["path",{d:"M15 18H9"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"}],["circle",{cx:"17",cy:"18",r:"2"}],["circle",{cx:"7",cy:"18",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WP=[["path",{d:"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"}],["path",{d:"M4.82 7.9 8 10"}],["path",{d:"M15.18 7.9 12 10"}],["path",{d:"M16.93 10H20a2 2 0 0 1 0 4H2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $P=[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"}],["path",{d:"M7 21h10"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc=[["path",{d:"M7 21h10"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KP=[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2"}],["polyline",{points:"17 2 12 7 7 2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GP=[["path",{d:"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XP=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YP=[["path",{d:"M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JP=[["polyline",{points:"4 7 4 4 20 4 20 7"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QP=[["path",{d:"M12 2v1"}],["path",{d:"M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575"}],["path",{d:"M17.5 12H22A10 10 0 0 0 9.004 3.455"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tI=[["path",{d:"M22 12a10.06 10.06 1 0 0-20 0Z"}],["path",{d:"M12 12v8a2 2 0 0 0 4 0"}],["path",{d:"M12 2v1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eI=[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aI=[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nI=[["path",{d:"M21 17a9 9 0 0 0-15-6.7L3 13"}],["path",{d:"M3 7v6h6"}],["circle",{cx:"12",cy:"17",r:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rI=[["path",{d:"M3 7v6h6"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iI=[["path",{d:"M16 12h6"}],["path",{d:"M8 12H2"}],["path",{d:"M12 2v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 20v2"}],["path",{d:"m19 15 3-3-3-3"}],["path",{d:"m5 9-3 3 3 3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oI=[["path",{d:"M12 22v-6"}],["path",{d:"M12 8V2"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}],["path",{d:"m15 19-3 3-3-3"}],["path",{d:"m15 5-3-3-3 3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hI=[["rect",{width:"8",height:"6",x:"5",y:"4",rx:"1"}],["rect",{width:"8",height:"6",x:"11",y:"14",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=[["circle",{cx:"12",cy:"10",r:"1"}],["path",{d:"M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"}],["path",{d:"M6 17v.01"}],["path",{d:"M6 13v.01"}],["path",{d:"M18 17v.01"}],["path",{d:"M18 13v.01"}],["path",{d:"M14 22v-5a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sI=[["path",{d:"M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cI=[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dI=[["path",{d:"m19 5 3-3"}],["path",{d:"m2 22 3-3"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"}],["path",{d:"M7.5 13.5 10 11"}],["path",{d:"M10.5 16.5 13 14"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pI=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"17 8 12 3 7 8"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lI=[["circle",{cx:"10",cy:"7",r:"1"}],["circle",{cx:"4",cy:"20",r:"1"}],["path",{d:"M4.7 19.3 19 5"}],["path",{d:"m21 3-3 1 2 2Z"}],["path",{d:"M9.26 7.68 5 12l2 5"}],["path",{d:"m10 14 5 2 3.5-3.5"}],["path",{d:"m18 12 1-1 1 1-1 1Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uI=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["polyline",{points:"16 11 18 13 22 9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fI=[["circle",{cx:"18",cy:"15",r:"3"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M10 15H6a4 4 0 0 0-4 4v2"}],["path",{d:"m21.7 16.4-.9-.3"}],["path",{d:"m15.2 13.9-.9-.3"}],["path",{d:"m16.6 18.7.3-.9"}],["path",{d:"m19.1 12.2.3-.9"}],["path",{d:"m19.6 18.7-.4-1"}],["path",{d:"m16.8 12.3-.4-1"}],["path",{d:"m14.3 16.6 1-.4"}],["path",{d:"m20.7 13.8 1-.4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vI=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MI=[["path",{d:"M11.5 15H7a4 4 0 0 0-4 4v2"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}],["circle",{cx:"10",cy:"7",r:"4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yI=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"m16 19 2 2 4-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=[["path",{d:"M2 21a8 8 0 0 1 10.434-7.62"}],["circle",{cx:"10",cy:"8",r:"5"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m19.5 14.3-.4.9"}],["path",{d:"m16.9 20.8-.4.9"}],["path",{d:"m21.7 19.5-.9-.4"}],["path",{d:"m15.2 16.9-.9-.4"}],["path",{d:"m21.7 16.5-.9.4"}],["path",{d:"m15.2 19.1-.9.4"}],["path",{d:"m19.5 21.7-.4-.9"}],["path",{d:"m16.9 15.2-.4-.9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gI=[["path",{d:"M2 21a8 8 0 0 1 10.821-7.487"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}],["circle",{cx:"10",cy:"8",r:"5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M22 19h-6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M19 16v6"}],["path",{d:"M22 19h-6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mI=[["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M2 21a8 8 0 0 1 10.434-7.62"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m22 22-1.9-1.9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=[["path",{d:"M2 21a8 8 0 0 1 11.873-7"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"m17 17 5 5"}],["path",{d:"m22 17-5 5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=[["circle",{cx:"12",cy:"8",r:"5"}],["path",{d:"M20 21a8 8 0 0 0-16 0"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xI=[["circle",{cx:"10",cy:"7",r:"4"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2"}],["circle",{cx:"17",cy:"17",r:"3"}],["path",{d:"m21 21-1.9-1.9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wI=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bI=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc=[["path",{d:"M18 21a8 8 0 0 0-16 0"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"}],["path",{d:"m2.1 21.8 6.4-6.3"}],["path",{d:"m19 5-7 7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _I=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CI=[["path",{d:"M12 2v20"}],["path",{d:"M2 5h20"}],["path",{d:"M3 3v2"}],["path",{d:"M7 3v2"}],["path",{d:"M17 3v2"}],["path",{d:"M21 3v2"}],["path",{d:"m19 5-7 7-7-7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AI=[["path",{d:"M8 21s-4-3-4-9 4-9 4-9"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HI=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}],["path",{d:"m7.9 7.9 2.7 2.7"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor"}],["path",{d:"m13.4 10.6 2.7-2.7"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor"}],["path",{d:"m7.9 16.1 2.7-2.7"}],["circle",{cx:"16.5",cy:"16.5",r:".5",fill:"currentColor"}],["path",{d:"m13.4 13.4 2.7 2.7"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SI=[["path",{d:"M16 8q6 0 6-6-6 0-6 6"}],["path",{d:"M17.41 3.59a10 10 0 1 0 3 3"}],["path",{d:"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kI=[["path",{d:"M18 11c-1.5 0-2.5.5-3 2"}],["path",{d:"M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z"}],["path",{d:"M6 11c1.5 0 2.5.5 3 2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EI=[["path",{d:"M10 20h4"}],["path",{d:"M12 16v6"}],["path",{d:"M17 2h4v4"}],["path",{d:"m21 2-5.46 5.46"}],["circle",{cx:"12",cy:"11",r:"5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LI=[["path",{d:"m2 8 2 2-2 2 2 2-2 2"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2"}],["path",{d:"M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2"}],["path",{d:"M16 10.34V6c0-.55-.45-1-1-1h-4.34"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VI=[["path",{d:"M12 15v7"}],["path",{d:"M9 19h6"}],["circle",{cx:"12",cy:"9",r:"6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DI=[["path",{d:"m2 8 2 2-2 2 2 2-2 2"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2"}],["rect",{width:"8",height:"14",x:"8",y:"5",rx:"1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TI=[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OI=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PI=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M2 8h20"}],["circle",{cx:"8",cy:"14",r:"2"}],["path",{d:"M8 12h8"}],["circle",{cx:"16",cy:"14",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const II=[["path",{d:"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"}],["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RI=[["circle",{cx:"6",cy:"12",r:"4"}],["circle",{cx:"18",cy:"12",r:"4"}],["line",{x1:"6",x2:"18",y1:"16",y2:"16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BI=[["path",{d:"M11.1 7.1a16.55 16.55 0 0 1 10.9 4"}],["path",{d:"M12 12a12.6 12.6 0 0 1-8.7 5"}],["path",{d:"M16.8 13.6a16.55 16.55 0 0 1-9 7.5"}],["path",{d:"M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10"}],["path",{d:"M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FI=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zI=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NI=[["path",{d:"M16 9a5 5 0 0 1 .95 2.293"}],["path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96"}],["path",{d:"m2 2 20 20"}],["path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"}],["path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qI=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jI=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZI=[["path",{d:"m9 12 2 2 4-4"}],["path",{d:"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"}],["path",{d:"M22 19H2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UI=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=[["path",{d:"M17 14h.01"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WI=[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $I=[["circle",{cx:"8",cy:"9",r:"2"}],["path",{d:"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"}],["path",{d:"m14 7 3 3"}],["path",{d:"M5 6v4"}],["path",{d:"M19 14v4"}],["path",{d:"M10 2v2"}],["path",{d:"M7 8H3"}],["path",{d:"M21 16h-4"}],["path",{d:"M11 3H9"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KI=[["path",{d:"M15 4V2"}],["path",{d:"M15 16v-2"}],["path",{d:"M8 9h2"}],["path",{d:"M20 9h2"}],["path",{d:"M17.8 11.8 19 13"}],["path",{d:"M15 9h.01"}],["path",{d:"M17.8 6.2 19 5"}],["path",{d:"m3 21 9-9"}],["path",{d:"M12.2 6.2 11 5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GI=[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"}],["path",{d:"M6 18h12"}],["path",{d:"M6 14h12"}],["rect",{width:"12",height:"12",x:"6",y:"10"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XI=[["path",{d:"M3 6h3"}],["path",{d:"M17 6h.01"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2"}],["circle",{cx:"12",cy:"13",r:"5"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YI=[["circle",{cx:"12",cy:"12",r:"6"}],["polyline",{points:"12 10 12 12 13 13"}],["path",{d:"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"}],["path",{d:"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JI=[["path",{d:"M19 5a2 2 0 0 0-2 2v11"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M7 13h10"}],["path",{d:"M7 9h10"}],["path",{d:"M9 5a2 2 0 0 0-2 2v11"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QI=[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tR=[["circle",{cx:"12",cy:"4.5",r:"2.5"}],["path",{d:"m10.2 6.3-3.9 3.9"}],["circle",{cx:"4.5",cy:"12",r:"2.5"}],["path",{d:"M7 12h10"}],["circle",{cx:"19.5",cy:"12",r:"2.5"}],["path",{d:"m13.8 17.7 3.9-3.9"}],["circle",{cx:"12",cy:"19.5",r:"2.5"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eR=[["circle",{cx:"12",cy:"10",r:"8"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 22h10"}],["path",{d:"M12 22v-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aR=[["path",{d:"M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15"}],["path",{d:"M9 3.4a4 4 0 0 1 6.52.66"}],["path",{d:"m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05"}],["path",{d:"M20.3 20.3a4 4 0 0 1-2.3.7"}],["path",{d:"M18.6 13a4 4 0 0 1 3.357 3.414"}],["path",{d:"m12 6 .6 1"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nR=[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rR=[["circle",{cx:"12",cy:"5",r:"3"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iR=[["path",{d:"M2 22 16 8"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oR=[["path",{d:"m2 22 10-10"}],["path",{d:"m16 8-1.17 1.17"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97"}],["path",{d:"M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98"}],["path",{d:"M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hR=[["circle",{cx:"7",cy:"12",r:"3"}],["path",{d:"M10 9v6"}],["circle",{cx:"17",cy:"12",r:"3"}],["path",{d:"M14 7v8"}],["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sR=[["path",{d:"M12 20h.01"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cR=[["path",{d:"M12 20h.01"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dR=[["path",{d:"M12 20h.01"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pR=[["path",{d:"M12 20h.01"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lR=[["path",{d:"M12 20h.01"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uR=[["path",{d:"M10 2v8"}],["path",{d:"M12.8 21.6A2 2 0 1 0 14 18H2"}],["path",{d:"M17.5 10a2.5 2.5 0 1 1 2 4H2"}],["path",{d:"m6 6 4 4 4-4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fR=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vR=[["path",{d:"M8 22h8"}],["path",{d:"M7 10h3m7 0h-1.343"}],["path",{d:"M12 15v7"}],["path",{d:"M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MR=[["path",{d:"M8 22h8"}],["path",{d:"M7 10h10"}],["path",{d:"M12 15v7"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yR=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gR=[["path",{d:"m19 12-1.5 3"}],["path",{d:"M19.63 18.81 22 20"}],["path",{d:"M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mR=[["line",{x1:"3",x2:"21",y1:"6",y2:"6"}],["path",{d:"M3 12h15a3 3 0 1 1 0 6h-4"}],["polyline",{points:"16 16 14 18 16 20"}],["line",{x1:"3",x2:"10",y1:"18",y2:"18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xR=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wR=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bR=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"}],["path",{d:"m10 15 5-3-5-3z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _R=[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CR=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AR=[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HR=[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:p8,AArrowUp:l8,ALargeSmall:u8,Accessibility:f8,Activity:v8,ActivitySquare:Ss,AirVent:M8,Airplay:y8,AlarmCheck:so,AlarmClock:m8,AlarmClockCheck:so,AlarmClockMinus:co,AlarmClockOff:g8,AlarmClockPlus:po,AlarmMinus:co,AlarmPlus:po,AlarmSmoke:x8,Album:w8,AlertCircle:Bo,AlertOctagon:ns,AlertTriangle:Ec,AlignCenter:C8,AlignCenterHorizontal:b8,AlignCenterVertical:_8,AlignEndHorizontal:A8,AlignEndVertical:H8,AlignHorizontalDistributeCenter:S8,AlignHorizontalDistributeEnd:k8,AlignHorizontalDistributeStart:E8,AlignHorizontalJustifyCenter:L8,AlignHorizontalJustifyEnd:V8,AlignHorizontalJustifyStart:D8,AlignHorizontalSpaceAround:T8,AlignHorizontalSpaceBetween:O8,AlignJustify:P8,AlignLeft:I8,AlignRight:R8,AlignStartHorizontal:B8,AlignStartVertical:F8,AlignVerticalDistributeCenter:z8,AlignVerticalDistributeEnd:N8,AlignVerticalDistributeStart:q8,AlignVerticalJustifyCenter:j8,AlignVerticalJustifyEnd:Z8,AlignVerticalJustifyStart:U8,AlignVerticalSpaceAround:W8,AlignVerticalSpaceBetween:K8,Ambulance:$8,Ampersand:G8,Ampersands:X8,Amphora:Y8,Anchor:J8,Angry:Q8,Annoyed:t7,Antenna:e7,Anvil:a7,Aperture:n7,AppWindow:i7,AppWindowMac:r7,Apple:o7,Archive:c7,ArchiveRestore:h7,ArchiveX:s7,AreaChart:Ao,Armchair:d7,ArrowBigDown:l7,ArrowBigDownDash:p7,ArrowBigLeft:f7,ArrowBigLeftDash:u7,ArrowBigRight:M7,ArrowBigRightDash:v7,ArrowBigUp:g7,ArrowBigUpDash:y7,ArrowDown:k7,ArrowDown01:m7,ArrowDown10:x7,ArrowDownAZ:lo,ArrowDownAz:lo,ArrowDownCircle:zo,ArrowDownFromLine:w7,ArrowDownLeft:b7,ArrowDownLeftFromCircle:No,ArrowDownLeftFromSquare:Ds,ArrowDownLeftSquare:ks,ArrowDownNarrowWide:_7,ArrowDownRight:C7,ArrowDownRightFromCircle:qo,ArrowDownRightFromSquare:Ts,ArrowDownRightSquare:Es,ArrowDownSquare:Ls,ArrowDownToDot:A7,ArrowDownToLine:H7,ArrowDownUp:S7,ArrowDownWideNarrow:uo,ArrowDownZA:fo,ArrowDownZa:fo,ArrowLeft:D7,ArrowLeftCircle:Fo,ArrowLeftFromLine:E7,ArrowLeftRight:L7,ArrowLeftSquare:Vs,ArrowLeftToLine:V7,ArrowRight:I7,ArrowRightCircle:Uo,ArrowRightFromLine:T7,ArrowRightLeft:O7,ArrowRightSquare:Is,ArrowRightToLine:P7,ArrowUp:W7,ArrowUp01:R7,ArrowUp10:B7,ArrowUpAZ:vo,ArrowUpAz:vo,ArrowUpCircle:Wo,ArrowUpDown:F7,ArrowUpFromDot:z7,ArrowUpFromLine:N7,ArrowUpLeft:q7,ArrowUpLeftFromCircle:jo,ArrowUpLeftFromSquare:Os,ArrowUpLeftSquare:Rs,ArrowUpNarrowWide:Mo,ArrowUpRight:j7,ArrowUpRightFromCircle:Zo,ArrowUpRightFromSquare:Ps,ArrowUpRightSquare:Bs,ArrowUpSquare:Fs,ArrowUpToLine:Z7,ArrowUpWideNarrow:U7,ArrowUpZA:yo,ArrowUpZa:yo,ArrowsUpFromLine:$7,Asterisk:K7,AsteriskSquare:zs,AtSign:G7,Atom:X7,AudioLines:Y7,AudioWaveform:J7,Award:Q7,Axe:tv,Axis3D:go,Axis3d:go,Baby:ev,Backpack:av,Badge:gv,BadgeAlert:nv,BadgeCent:rv,BadgeCheck:mo,BadgeDollarSign:ov,BadgeEuro:iv,BadgeHelp:hv,BadgeIndianRupee:sv,BadgeInfo:cv,BadgeJapaneseYen:dv,BadgeMinus:pv,BadgePercent:lv,BadgePlus:uv,BadgePoundSterling:fv,BadgeRussianRuble:vv,BadgeSwissFranc:Mv,BadgeX:yv,BaggageClaim:mv,Ban:xv,Banana:wv,Bandage:bv,Banknote:Hv,BanknoteArrowDown:_v,BanknoteArrowUp:Cv,BanknoteX:Av,BarChart:To,BarChart2:Oo,BarChart3:Vo,BarChart4:Lo,BarChartBig:Eo,BarChartHorizontal:So,BarChartHorizontalBig:Ho,Barcode:Sv,Baseline:kv,Bath:Ev,Battery:Iv,BatteryCharging:Lv,BatteryFull:Vv,BatteryLow:Dv,BatteryMedium:Tv,BatteryPlus:Pv,BatteryWarning:Ov,Beaker:Rv,Bean:Fv,BeanOff:Bv,Bed:qv,BedDouble:zv,BedSingle:Nv,Beef:jv,Beer:Uv,BeerOff:Zv,Bell:Jv,BellDot:Wv,BellElectric:$v,BellMinus:Kv,BellOff:Gv,BellPlus:Xv,BellRing:Yv,BetweenHorizonalEnd:xo,BetweenHorizonalStart:wo,BetweenHorizontalEnd:xo,BetweenHorizontalStart:wo,BetweenVerticalEnd:Qv,BetweenVerticalStart:tM,BicepsFlexed:eM,Bike:aM,Binary:nM,Binoculars:rM,Biohazard:iM,Bird:oM,Bitcoin:hM,Blend:sM,Blinds:cM,Blocks:dM,Bluetooth:fM,BluetoothConnected:pM,BluetoothOff:lM,BluetoothSearching:uM,Bold:vM,Bolt:MM,Bomb:yM,Bone:gM,Book:NM,BookA:mM,BookAudio:xM,BookCheck:wM,BookCopy:bM,BookDashed:bo,BookDown:_M,BookHeadphones:CM,BookHeart:AM,BookImage:HM,BookKey:SM,BookLock:kM,BookMarked:EM,BookMinus:LM,BookOpen:TM,BookOpenCheck:VM,BookOpenText:DM,BookPlus:OM,BookTemplate:bo,BookText:PM,BookType:IM,BookUp:BM,BookUp2:RM,BookUser:FM,BookX:zM,Bookmark:WM,BookmarkCheck:qM,BookmarkMinus:jM,BookmarkPlus:ZM,BookmarkX:UM,BoomBox:$M,Bot:XM,BotMessageSquare:KM,BotOff:GM,Box:YM,BoxSelect:Ys,Boxes:JM,Braces:_o,Brackets:QM,Brain:ay,BrainCircuit:ty,BrainCog:ey,BrickWall:ny,Briefcase:hy,BriefcaseBusiness:ry,BriefcaseConveyorBelt:iy,BriefcaseMedical:oy,BringToFront:sy,Brush:cy,Bug:ly,BugOff:dy,BugPlay:py,Building:uy,Building2:fy,Bus:My,BusFront:vy,Cable:gy,CableCar:yy,Cake:xy,CakeSlice:my,Calculator:wy,Calendar:qy,Calendar1:by,CalendarArrowDown:_y,CalendarArrowUp:Cy,CalendarCheck:Hy,CalendarCheck2:Ay,CalendarClock:Sy,CalendarCog:ky,CalendarDays:Ey,CalendarFold:Ly,CalendarHeart:Vy,CalendarMinus:Ty,CalendarMinus2:Dy,CalendarOff:Oy,CalendarPlus:Iy,CalendarPlus2:Py,CalendarRange:Ry,CalendarSearch:By,CalendarSync:Fy,CalendarX:Ny,CalendarX2:zy,Camera:Zy,CameraOff:jy,CandlestickChart:ko,Candy:$y,CandyCane:Uy,CandyOff:Wy,Cannabis:Ky,Captions:Co,CaptionsOff:Gy,Car:Jy,CarFront:Xy,CarTaxiFront:Yy,Caravan:Qy,Carrot:t9,CaseLower:e9,CaseSensitive:a9,CaseUpper:n9,CassetteTape:r9,Cast:i9,Castle:o9,Cat:h9,Cctv:s9,ChartArea:Ao,ChartBar:So,ChartBarBig:Ho,ChartBarDecreasing:c9,ChartBarIncreasing:d9,ChartBarStacked:p9,ChartCandlestick:ko,ChartColumn:Vo,ChartColumnBig:Eo,ChartColumnDecreasing:l9,ChartColumnIncreasing:Lo,ChartColumnStacked:u9,ChartGantt:f9,ChartLine:Do,ChartNetwork:v9,ChartNoAxesColumn:Oo,ChartNoAxesColumnDecreasing:M9,ChartNoAxesColumnIncreasing:To,ChartNoAxesCombined:y9,ChartNoAxesGantt:Po,ChartPie:Io,ChartScatter:Ro,ChartSpline:g9,Check:x9,CheckCheck:m9,CheckCircle:$o,CheckCircle2:Ko,CheckSquare:qs,CheckSquare2:js,ChefHat:w9,Cherry:b9,ChevronDown:_9,ChevronDownCircle:Go,ChevronDownSquare:Zs,ChevronFirst:C9,ChevronLast:A9,ChevronLeft:H9,ChevronLeftCircle:Xo,ChevronLeftSquare:Ws,ChevronRight:S9,ChevronRightCircle:Yo,ChevronRightSquare:Us,ChevronUp:k9,ChevronUpCircle:Jo,ChevronUpSquare:$s,ChevronsDown:L9,ChevronsDownUp:E9,ChevronsLeft:T9,ChevronsLeftRight:D9,ChevronsLeftRightEllipsis:V9,ChevronsRight:P9,ChevronsRightLeft:O9,ChevronsUp:R9,ChevronsUpDown:I9,Chrome:B9,Church:F9,Cigarette:N9,CigaretteOff:z9,Circle:Q9,CircleAlert:Bo,CircleArrowDown:zo,CircleArrowLeft:Fo,CircleArrowOutDownLeft:No,CircleArrowOutDownRight:qo,CircleArrowOutUpLeft:jo,CircleArrowOutUpRight:Zo,CircleArrowRight:Uo,CircleArrowUp:Wo,CircleCheck:Ko,CircleCheckBig:$o,CircleChevronDown:Go,CircleChevronLeft:Xo,CircleChevronRight:Yo,CircleChevronUp:Jo,CircleDashed:q9,CircleDivide:Qo,CircleDollarSign:j9,CircleDot:U9,CircleDotDashed:Z9,CircleEllipsis:W9,CircleEqual:$9,CircleFadingArrowUp:K9,CircleFadingPlus:G9,CircleGauge:th,CircleHelp:eh,CircleMinus:ah,CircleOff:X9,CircleParking:rh,CircleParkingOff:nh,CirclePause:ih,CirclePercent:oh,CirclePlay:hh,CirclePlus:sh,CirclePower:ch,CircleSlash:Y9,CircleSlash2:dh,CircleSlashed:dh,CircleSmall:J9,CircleStop:ph,CircleUser:uh,CircleUserRound:lh,CircleX:fh,CircuitBoard:tg,Citrus:eg,Clapperboard:ag,Clipboard:pg,ClipboardCheck:ng,ClipboardCopy:rg,ClipboardEdit:Mh,ClipboardList:ig,ClipboardMinus:og,ClipboardPaste:hg,ClipboardPen:Mh,ClipboardPenLine:vh,ClipboardPlus:sg,ClipboardSignature:vh,ClipboardType:cg,ClipboardX:dg,Clock:kg,Clock1:lg,Clock10:ug,Clock11:fg,Clock12:vg,Clock2:Mg,Clock3:yg,Clock4:gg,Clock5:mg,Clock6:xg,Clock7:wg,Clock8:_g,Clock9:bg,ClockAlert:Cg,ClockArrowDown:Ag,ClockArrowUp:Hg,ClockFading:Sg,Cloud:jg,CloudAlert:Eg,CloudCog:Lg,CloudDownload:yh,CloudDrizzle:Vg,CloudFog:Dg,CloudHail:Tg,CloudLightning:Og,CloudMoon:Ig,CloudMoonRain:Pg,CloudOff:Rg,CloudRain:Fg,CloudRainWind:Bg,CloudSnow:zg,CloudSun:qg,CloudSunRain:Ng,CloudUpload:gh,Cloudy:Zg,Clover:Ug,Club:Wg,Code:$g,Code2:mh,CodeSquare:Ks,CodeXml:mh,Codepen:Kg,Codesandbox:Gg,Coffee:Xg,Cog:Yg,Coins:Jg,Columns:xh,Columns2:xh,Columns3:wh,Columns4:Qg,Combine:tm,Command:em,Compass:am,Component:nm,Computer:rm,ConciergeBell:om,Cone:im,Construction:hm,Contact:sm,Contact2:bh,ContactRound:bh,Container:cm,Contrast:dm,Cookie:pm,CookingPot:lm,Copy:ym,CopyCheck:um,CopyMinus:fm,CopyPlus:vm,CopySlash:Mm,CopyX:gm,Copyleft:mm,Copyright:xm,CornerDownLeft:bm,CornerDownRight:wm,CornerLeftDown:_m,CornerLeftUp:Cm,CornerRightDown:Am,CornerRightUp:Hm,CornerUpLeft:Sm,CornerUpRight:km,Cpu:Em,CreativeCommons:Lm,CreditCard:Vm,Croissant:Dm,Crop:Tm,Cross:Om,Crosshair:Pm,Crown:Im,Cuboid:Rm,CupSoda:Bm,CurlyBraces:_o,Currency:Fm,Cylinder:zm,Dam:Nm,Database:Zm,DatabaseBackup:qm,DatabaseZap:jm,Delete:Um,Dessert:Wm,Diameter:$m,Diamond:Xm,DiamondMinus:Km,DiamondPercent:_h,DiamondPlus:Gm,Dice1:Ym,Dice2:Jm,Dice3:Qm,Dice4:tx,Dice5:ex,Dice6:ax,Dices:nx,Diff:rx,Disc:sx,Disc2:ix,Disc3:ox,DiscAlbum:hx,Divide:cx,DivideCircle:Qo,DivideSquare:Js,Dna:px,DnaOff:dx,Dock:lx,Dog:ux,DollarSign:fx,Donut:vx,DoorClosed:Mx,DoorOpen:yx,Dot:gx,DotSquare:Qs,Download:mx,DownloadCloud:yh,DraftingCompass:xx,Drama:wx,Dribbble:bx,Drill:_x,Droplet:Ax,DropletOff:Cx,Droplets:Hx,Drum:Sx,Drumstick:kx,Dumbbell:Ex,Ear:Vx,EarOff:Lx,Earth:Ch,EarthLock:Dx,Eclipse:Tx,Edit:a2,Edit2:Ms,Edit3:vs,Egg:Ix,EggFried:Ox,EggOff:Px,Ellipsis:Hh,EllipsisVertical:Ah,Equal:Fx,EqualApproximately:Rx,EqualNot:Bx,EqualSquare:tc,Eraser:zx,EthernetPort:Nx,Euro:qx,Expand:jx,ExternalLink:Zx,Eye:$x,EyeClosed:Ux,EyeOff:Wx,Facebook:Kx,Factory:Gx,Fan:Xx,FastForward:Yx,Feather:Jx,Fence:Qx,FerrisWheel:tw,Figma:ew,File:Jw,FileArchive:aw,FileAudio:rw,FileAudio2:nw,FileAxis3D:Sh,FileAxis3d:Sh,FileBadge:ow,FileBadge2:iw,FileBarChart:kh,FileBarChart2:Eh,FileBox:hw,FileChartColumn:Eh,FileChartColumnIncreasing:kh,FileChartLine:Lh,FileChartPie:Vh,FileCheck:cw,FileCheck2:sw,FileClock:dw,FileCode:lw,FileCode2:pw,FileCog:Dh,FileCog2:Dh,FileDiff:uw,FileDigit:fw,FileDown:vw,FileEdit:Oh,FileHeart:Mw,FileImage:yw,FileInput:gw,FileJson:xw,FileJson2:mw,FileKey:bw,FileKey2:ww,FileLineChart:Lh,FileLock:Cw,FileLock2:_w,FileMinus:Hw,FileMinus2:Aw,FileMusic:Sw,FileOutput:kw,FilePen:Oh,FilePenLine:Th,FilePieChart:Vh,FilePlus:Lw,FilePlus2:Ew,FileQuestion:Vw,FileScan:Dw,FileSearch:Ow,FileSearch2:Tw,FileSignature:Th,FileSliders:Pw,FileSpreadsheet:Iw,FileStack:Bw,FileSymlink:Rw,FileTerminal:Fw,FileText:zw,FileType:qw,FileType2:Nw,FileUp:jw,FileUser:Zw,FileVideo:Ww,FileVideo2:Uw,FileVolume:Kw,FileVolume2:$w,FileWarning:Gw,FileX:Yw,FileX2:Xw,Files:Qw,Film:tb,Filter:Bh,FilterX:Rh,Fingerprint:eb,FireExtinguisher:ab,Fish:ib,FishOff:nb,FishSymbol:rb,Flag:cb,FlagOff:ob,FlagTriangleLeft:hb,FlagTriangleRight:sb,Flame:pb,FlameKindling:db,Flashlight:ub,FlashlightOff:lb,FlaskConical:vb,FlaskConicalOff:fb,FlaskRound:Mb,FlipHorizontal:gb,FlipHorizontal2:yb,FlipVertical:xb,FlipVertical2:mb,Flower:bb,Flower2:wb,Focus:_b,FoldHorizontal:Cb,FoldVertical:Ab,Folder:Qb,FolderArchive:Hb,FolderCheck:Sb,FolderClock:kb,FolderClosed:Eb,FolderCode:Lb,FolderCog:Ph,FolderCog2:Ph,FolderDot:Vb,FolderDown:Db,FolderEdit:Ih,FolderGit:Ob,FolderGit2:Tb,FolderHeart:Pb,FolderInput:Ib,FolderKanban:Rb,FolderKey:Bb,FolderLock:Fb,FolderMinus:zb,FolderOpen:qb,FolderOpenDot:Nb,FolderOutput:jb,FolderPen:Ih,FolderPlus:Zb,FolderRoot:Ub,FolderSearch:$b,FolderSearch2:Wb,FolderSymlink:Kb,FolderSync:Gb,FolderTree:Xb,FolderUp:Yb,FolderX:Jb,Folders:t_,Footprints:e_,ForkKnife:zc,ForkKnifeCrossed:Fc,Forklift:a_,FormInput:gs,Forward:n_,Frame:r_,Framer:i_,Frown:o_,Fuel:h_,Fullscreen:s_,FunctionSquare:ec,Funnel:Bh,FunnelPlus:c_,FunnelX:Rh,GalleryHorizontal:p_,GalleryHorizontalEnd:d_,GalleryThumbnails:l_,GalleryVertical:f_,GalleryVerticalEnd:u_,Gamepad:M_,Gamepad2:v_,GanttChart:Po,GanttChartSquare:qn,Gauge:y_,GaugeCircle:th,Gavel:g_,Gem:m_,Ghost:x_,Gift:w_,GitBranch:__,GitBranchPlus:b_,GitCommit:Fh,GitCommitHorizontal:Fh,GitCommitVertical:C_,GitCompare:H_,GitCompareArrows:A_,GitFork:S_,GitGraph:k_,GitMerge:E_,GitPullRequest:P_,GitPullRequestArrow:L_,GitPullRequestClosed:V_,GitPullRequestCreate:T_,GitPullRequestCreateArrow:D_,GitPullRequestDraft:O_,Github:I_,Gitlab:R_,GlassWater:B_,Glasses:F_,Globe:N_,Globe2:Ch,GlobeLock:z_,Goal:q_,Grab:j_,GraduationCap:Z_,Grape:U_,Grid:Nn,Grid2X2:jh,Grid2X2Check:zh,Grid2X2Plus:Nh,Grid2X2X:qh,Grid2x2:jh,Grid2x2Check:zh,Grid2x2Plus:Nh,Grid2x2X:qh,Grid3X3:Nn,Grid3x3:Nn,Grip:K_,GripHorizontal:W_,GripVertical:$_,Group:G_,Guitar:X_,Ham:Y_,Hammer:J_,Hand:rC,HandCoins:Q_,HandHeart:tC,HandHelping:Zh,HandMetal:eC,HandPlatter:aC,Handshake:nC,HardDrive:oC,HardDriveDownload:iC,HardDriveUpload:hC,HardHat:sC,Hash:cC,Haze:dC,HdmiPort:pC,Heading:gC,Heading1:lC,Heading2:uC,Heading3:fC,Heading4:vC,Heading5:MC,Heading6:yC,HeadphoneOff:mC,Headphones:xC,Headset:wC,Heart:HC,HeartCrack:bC,HeartHandshake:_C,HeartOff:CC,HeartPulse:AC,Heater:SC,HelpCircle:eh,HelpingHand:Zh,Hexagon:kC,Highlighter:EC,History:LC,Home:Uh,Hop:DC,HopOff:VC,Hospital:TC,Hotel:OC,Hourglass:PC,House:Uh,HousePlug:IC,HousePlus:RC,HouseWifi:BC,IceCream:$h,IceCream2:Wh,IceCreamBowl:Wh,IceCreamCone:$h,IdCard:FC,Image:$C,ImageDown:zC,ImageMinus:NC,ImageOff:qC,ImagePlay:jC,ImagePlus:ZC,ImageUp:UC,ImageUpscale:WC,Images:KC,Import:GC,Inbox:XC,Indent:Gh,IndentDecrease:Kh,IndentIncrease:Gh,IndianRupee:YC,Infinity:JC,Info:QC,Inspect:hc,InspectionPanel:tA,Instagram:eA,Italic:aA,IterationCcw:nA,IterationCw:rA,JapaneseYen:iA,Joystick:oA,Kanban:hA,KanbanSquare:ac,KanbanSquareDashed:Gs,Key:dA,KeyRound:sA,KeySquare:cA,Keyboard:uA,KeyboardMusic:pA,KeyboardOff:lA,Lamp:mA,LampCeiling:fA,LampDesk:vA,LampFloor:MA,LampWallDown:yA,LampWallUp:gA,LandPlot:xA,Landmark:wA,Languages:bA,Laptop:CA,Laptop2:Xh,LaptopMinimal:Xh,LaptopMinimalCheck:_A,Lasso:SA,LassoSelect:AA,Laugh:HA,Layers:Yh,Layers2:kA,Layers3:Yh,Layout:fs,LayoutDashboard:EA,LayoutGrid:LA,LayoutList:VA,LayoutPanelLeft:DA,LayoutPanelTop:TA,LayoutTemplate:PA,Leaf:OA,LeafyGreen:IA,Lectern:RA,LetterText:BA,Library:zA,LibraryBig:FA,LibrarySquare:nc,LifeBuoy:NA,Ligature:qA,Lightbulb:ZA,LightbulbOff:jA,LineChart:Do,Link:$A,Link2:WA,Link2Off:UA,Linkedin:KA,List:pH,ListCheck:GA,ListChecks:XA,ListCollapse:YA,ListEnd:JA,ListFilter:tH,ListFilterPlus:QA,ListMinus:eH,ListMusic:aH,ListOrdered:nH,ListPlus:rH,ListRestart:iH,ListStart:oH,ListTodo:hH,ListTree:sH,ListVideo:cH,ListX:dH,Loader:uH,Loader2:Jh,LoaderCircle:Jh,LoaderPinwheel:lH,Locate:MH,LocateFixed:fH,LocateOff:vH,Lock:gH,LockKeyhole:yH,LockKeyholeOpen:Qh,LockOpen:ts,LogIn:mH,LogOut:xH,Logs:wH,Lollipop:bH,Luggage:_H,MSquare:rc,Magnet:CH,Mail:TH,MailCheck:AH,MailMinus:HH,MailOpen:SH,MailPlus:kH,MailQuestion:EH,MailSearch:LH,MailWarning:VH,MailX:DH,Mailbox:OH,Mails:PH,Map:GH,MapPin:WH,MapPinCheck:RH,MapPinCheckInside:IH,MapPinHouse:BH,MapPinMinus:NH,MapPinMinusInside:FH,MapPinOff:zH,MapPinPlus:jH,MapPinPlusInside:qH,MapPinX:UH,MapPinXInside:ZH,MapPinned:$H,MapPlus:KH,Mars:YH,MarsStroke:XH,Martini:JH,Maximize:tS,Maximize2:QH,Medal:eS,Megaphone:nS,MegaphoneOff:aS,Meh:rS,MemoryStick:iS,Menu:oS,MenuSquare:ic,Merge:hS,MessageCircle:gS,MessageCircleCode:cS,MessageCircleDashed:sS,MessageCircleHeart:dS,MessageCircleMore:pS,MessageCircleOff:lS,MessageCirclePlus:uS,MessageCircleQuestion:fS,MessageCircleReply:vS,MessageCircleWarning:MS,MessageCircleX:yS,MessageSquare:OS,MessageSquareCode:mS,MessageSquareDashed:xS,MessageSquareDiff:wS,MessageSquareDot:bS,MessageSquareHeart:_S,MessageSquareLock:CS,MessageSquareMore:AS,MessageSquareOff:HS,MessageSquarePlus:SS,MessageSquareQuote:kS,MessageSquareReply:ES,MessageSquareShare:LS,MessageSquareText:VS,MessageSquareWarning:DS,MessageSquareX:TS,MessagesSquare:PS,Mic:RS,Mic2:es,MicOff:IS,MicVocal:es,Microchip:BS,Microscope:FS,Microwave:zS,Milestone:qS,Milk:jS,MilkOff:NS,Minimize:US,Minimize2:ZS,Minus:WS,MinusCircle:ah,MinusSquare:oc,Monitor:ik,MonitorCheck:$S,MonitorCog:KS,MonitorDot:GS,MonitorDown:XS,MonitorOff:YS,MonitorPause:JS,MonitorPlay:QS,MonitorSmartphone:tk,MonitorSpeaker:ek,MonitorStop:ak,MonitorUp:nk,MonitorX:rk,Moon:hk,MoonStar:ok,MoreHorizontal:Hh,MoreVertical:Ah,Mountain:ck,MountainSnow:sk,Mouse:vk,MouseOff:dk,MousePointer:fk,MousePointer2:pk,MousePointerBan:lk,MousePointerClick:uk,MousePointerSquareDashed:Xs,Move:kk,Move3D:as,Move3d:as,MoveDiagonal:Mk,MoveDiagonal2:yk,MoveDown:xk,MoveDownLeft:gk,MoveDownRight:mk,MoveHorizontal:wk,MoveLeft:bk,MoveRight:_k,MoveUp:Hk,MoveUpLeft:Ck,MoveUpRight:Ak,MoveVertical:Sk,Music:Dk,Music2:Ek,Music3:Lk,Music4:Vk,Navigation:Ik,Navigation2:Ok,Navigation2Off:Tk,NavigationOff:Pk,Network:Rk,Newspaper:Bk,Nfc:Fk,NonBinary:zk,Notebook:Zk,NotebookPen:Nk,NotebookTabs:qk,NotebookText:jk,NotepadText:Wk,NotepadTextDashed:Uk,Nut:Kk,NutOff:$k,Octagon:Xk,OctagonAlert:ns,OctagonMinus:Gk,OctagonPause:rs,OctagonX:is,Omega:Yk,Option:Jk,Orbit:Qk,Origami:tE,Outdent:Kh,Package:sE,Package2:eE,PackageCheck:aE,PackageMinus:nE,PackageOpen:rE,PackagePlus:iE,PackageSearch:oE,PackageX:hE,PaintBucket:cE,PaintRoller:dE,Paintbrush:lE,Paintbrush2:os,PaintbrushVertical:os,Palette:pE,Palmtree:kc,PanelBottom:vE,PanelBottomClose:uE,PanelBottomDashed:hs,PanelBottomInactive:hs,PanelBottomOpen:fE,PanelLeft:ps,PanelLeftClose:ss,PanelLeftDashed:cs,PanelLeftInactive:cs,PanelLeftOpen:ds,PanelRight:gE,PanelRightClose:ME,PanelRightDashed:ls,PanelRightInactive:ls,PanelRightOpen:yE,PanelTop:wE,PanelTopClose:mE,PanelTopDashed:us,PanelTopInactive:us,PanelTopOpen:xE,PanelsLeftBottom:bE,PanelsLeftRight:wh,PanelsRightBottom:_E,PanelsTopBottom:ws,PanelsTopLeft:fs,Paperclip:CE,Parentheses:AE,ParkingCircle:rh,ParkingCircleOff:nh,ParkingMeter:HE,ParkingSquare:cc,ParkingSquareOff:sc,PartyPopper:SE,Pause:kE,PauseCircle:ih,PauseOctagon:rs,PawPrint:EE,PcCase:LE,Pen:Ms,PenBox:a2,PenLine:vs,PenOff:VE,PenSquare:a2,PenTool:DE,Pencil:IE,PencilLine:TE,PencilOff:OE,PencilRuler:PE,Pentagon:RE,Percent:BE,PercentCircle:oh,PercentDiamond:_h,PercentSquare:dc,PersonStanding:FE,PhilippinePeso:zE,Phone:$E,PhoneCall:NE,PhoneForwarded:qE,PhoneIncoming:jE,PhoneMissed:ZE,PhoneOff:UE,PhoneOutgoing:WE,Pi:KE,PiSquare:pc,Piano:GE,Pickaxe:XE,PictureInPicture:JE,PictureInPicture2:YE,PieChart:Io,PiggyBank:QE,Pilcrow:aL,PilcrowLeft:tL,PilcrowRight:eL,PilcrowSquare:lc,Pill:rL,PillBottle:nL,Pin:oL,PinOff:iL,Pipette:sL,Pizza:hL,Plane:pL,PlaneLanding:cL,PlaneTakeoff:dL,Play:lL,PlayCircle:hh,PlaySquare:uc,Plug:fL,Plug2:uL,PlugZap:ys,PlugZap2:ys,Plus:vL,PlusCircle:sh,PlusSquare:fc,Pocket:yL,PocketKnife:ML,Podcast:gL,Pointer:xL,PointerOff:mL,Popcorn:wL,Popsicle:bL,PoundSterling:_L,Power:AL,PowerCircle:ch,PowerOff:CL,PowerSquare:vc,Presentation:HL,Printer:SL,PrinterCheck:kL,Projector:EL,Proportions:LL,Puzzle:VL,Pyramid:DL,QrCode:TL,Quote:OL,Rabbit:PL,Radar:IL,Radiation:RL,Radical:BL,Radio:NL,RadioReceiver:FL,RadioTower:zL,Radius:qL,RailSymbol:jL,Rainbow:ZL,Rat:UL,Ratio:WL,Receipt:eV,ReceiptCent:$L,ReceiptEuro:KL,ReceiptIndianRupee:GL,ReceiptJapaneseYen:XL,ReceiptPoundSterling:YL,ReceiptRussianRuble:JL,ReceiptSwissFranc:QL,ReceiptText:tV,RectangleEllipsis:gs,RectangleHorizontal:aV,RectangleVertical:nV,Recycle:rV,Redo:hV,Redo2:iV,RedoDot:oV,RefreshCcw:cV,RefreshCcwDot:sV,RefreshCw:dV,RefreshCwOff:pV,Refrigerator:lV,Regex:uV,RemoveFormatting:fV,Repeat:yV,Repeat1:vV,Repeat2:MV,Replace:mV,ReplaceAll:gV,Reply:wV,ReplyAll:xV,Rewind:bV,Ribbon:CV,Rocket:_V,RockingChair:AV,RollerCoaster:HV,Rotate3D:ms,Rotate3d:ms,RotateCcw:kV,RotateCcwSquare:SV,RotateCw:LV,RotateCwSquare:EV,Route:DV,RouteOff:VV,Router:TV,Rows:xs,Rows2:xs,Rows3:ws,Rows4:OV,Rss:PV,Ruler:IV,RussianRuble:RV,Sailboat:BV,Salad:FV,Sandwich:zV,Satellite:qV,SatelliteDish:NV,SaudiRiyal:jV,Save:WV,SaveAll:ZV,SaveOff:UV,Scale:$V,Scale3D:bs,Scale3d:bs,Scaling:KV,Scan:nD,ScanBarcode:GV,ScanEye:XV,ScanFace:YV,ScanHeart:JV,ScanLine:QV,ScanQrCode:tD,ScanSearch:eD,ScanText:aD,ScatterChart:Ro,School:rD,School2:Vc,Scissors:oD,ScissorsLineDashed:iD,ScissorsSquare:Mc,ScissorsSquareDashedBottom:Ns,ScreenShare:sD,ScreenShareOff:hD,Scroll:dD,ScrollText:cD,Search:vD,SearchCheck:pD,SearchCode:lD,SearchSlash:uD,SearchX:fD,Section:MD,Send:gD,SendHorizonal:_s,SendHorizontal:_s,SendToBack:yD,SeparatorHorizontal:mD,SeparatorVertical:xD,Server:CD,ServerCog:wD,ServerCrash:bD,ServerOff:_D,Settings:HD,Settings2:AD,Shapes:SD,Share:LD,Share2:kD,Sheet:ED,Shell:VD,Shield:qD,ShieldAlert:DD,ShieldBan:OD,ShieldCheck:TD,ShieldClose:Cs,ShieldEllipsis:PD,ShieldHalf:ID,ShieldMinus:RD,ShieldOff:BD,ShieldPlus:FD,ShieldQuestion:zD,ShieldUser:ND,ShieldX:Cs,Ship:ZD,ShipWheel:jD,Shirt:UD,ShoppingBag:WD,ShoppingBasket:$D,ShoppingCart:KD,Shovel:GD,ShowerHead:XD,Shrimp:YD,Shrink:JD,Shrub:QD,Shuffle:tT,Sidebar:ps,SidebarClose:ss,SidebarOpen:ds,Sigma:eT,SigmaSquare:yc,Signal:oT,SignalHigh:aT,SignalLow:nT,SignalMedium:rT,SignalZero:iT,Signature:hT,Signpost:cT,SignpostBig:sT,Siren:dT,SkipBack:pT,SkipForward:lT,Skull:uT,Slack:fT,Slash:vT,SlashSquare:gc,Slice:MT,Sliders:As,SlidersHorizontal:yT,SlidersVertical:As,Smartphone:xT,SmartphoneCharging:gT,SmartphoneNfc:mT,Smile:bT,SmilePlus:wT,Snail:_T,Snowflake:CT,Sofa:AT,SortAsc:Mo,SortDesc:uo,Soup:HT,Space:ST,Spade:kT,Sparkle:ET,Sparkles:Hs,Speaker:LT,Speech:VT,SpellCheck:TT,SpellCheck2:DT,Spline:IT,SplinePointer:OT,Split:PT,SplitSquareHorizontal:mc,SplitSquareVertical:xc,SprayCan:RT,Sprout:BT,Square:UT,SquareActivity:Ss,SquareArrowDown:Ls,SquareArrowDownLeft:ks,SquareArrowDownRight:Es,SquareArrowLeft:Vs,SquareArrowOutDownLeft:Ds,SquareArrowOutDownRight:Ts,SquareArrowOutUpLeft:Os,SquareArrowOutUpRight:Ps,SquareArrowRight:Is,SquareArrowUp:Fs,SquareArrowUpLeft:Rs,SquareArrowUpRight:Bs,SquareAsterisk:zs,SquareBottomDashedScissors:Ns,SquareChartGantt:qn,SquareCheck:js,SquareCheckBig:qs,SquareChevronDown:Zs,SquareChevronLeft:Ws,SquareChevronRight:Us,SquareChevronUp:$s,SquareCode:Ks,SquareDashed:Ys,SquareDashedBottom:zT,SquareDashedBottomCode:FT,SquareDashedKanban:Gs,SquareDashedMousePointer:Xs,SquareDivide:Js,SquareDot:Qs,SquareEqual:tc,SquareFunction:ec,SquareGanttChart:qn,SquareKanban:ac,SquareLibrary:nc,SquareM:rc,SquareMenu:ic,SquareMinus:oc,SquareMousePointer:hc,SquareParking:cc,SquareParkingOff:sc,SquarePen:a2,SquarePercent:dc,SquarePi:pc,SquarePilcrow:lc,SquarePlay:uc,SquarePlus:fc,SquarePower:vc,SquareRadical:NT,SquareRoundCorner:qT,SquareScissors:Mc,SquareSigma:yc,SquareSlash:gc,SquareSplitHorizontal:mc,SquareSplitVertical:xc,SquareSquare:jT,SquareStack:ZT,SquareTerminal:wc,SquareUser:_c,SquareUserRound:bc,SquareX:Cc,Squircle:WT,Squirrel:$T,Stamp:KT,Star:YT,StarHalf:GT,StarOff:XT,Stars:Hs,StepBack:JT,StepForward:QT,Stethoscope:tO,Sticker:eO,StickyNote:aO,StopCircle:ph,Store:nO,StretchHorizontal:rO,StretchVertical:iO,Strikethrough:oO,Subscript:hO,Subtitles:Co,Sun:lO,SunDim:sO,SunMedium:cO,SunMoon:dO,SunSnow:pO,Sunrise:uO,Sunset:fO,Superscript:vO,SwatchBook:MO,SwissFranc:yO,SwitchCamera:gO,Sword:mO,Swords:xO,Syringe:wO,Table:EO,Table2:bO,TableCellsMerge:_O,TableCellsSplit:CO,TableColumnsSplit:AO,TableOfContents:HO,TableProperties:SO,TableRowsSplit:kO,Tablet:VO,TabletSmartphone:LO,Tablets:DO,Tag:TO,Tags:OO,Tally1:PO,Tally2:IO,Tally3:RO,Tally4:BO,Tally5:FO,Tangent:zO,Target:NO,Telescope:qO,Tent:ZO,TentTree:jO,Terminal:UO,TerminalSquare:wc,TestTube:WO,TestTube2:Ac,TestTubeDiagonal:Ac,TestTubes:$O,Text:JO,TextCursor:GO,TextCursorInput:KO,TextQuote:XO,TextSearch:YO,TextSelect:Hc,TextSelection:Hc,Theater:QO,Thermometer:aP,ThermometerSnowflake:tP,ThermometerSun:eP,ThumbsDown:nP,ThumbsUp:rP,Ticket:dP,TicketCheck:iP,TicketMinus:oP,TicketPercent:hP,TicketPlus:sP,TicketSlash:cP,TicketX:pP,Tickets:uP,TicketsPlane:lP,Timer:MP,TimerOff:fP,TimerReset:vP,ToggleLeft:yP,ToggleRight:gP,Toilet:mP,Tornado:xP,Torus:wP,Touchpad:bP,TouchpadOff:_P,TowerControl:CP,ToyBrick:AP,Tractor:HP,TrafficCone:SP,Train:Sc,TrainFront:EP,TrainFrontTunnel:kP,TrainTrack:LP,TramFront:Sc,Transgender:VP,Trash:TP,Trash2:DP,TreeDeciduous:OP,TreePalm:kc,TreePine:IP,Trees:PP,Trello:RP,TrendingDown:BP,TrendingUp:zP,TrendingUpDown:FP,Triangle:jP,TriangleAlert:Ec,TriangleDashed:NP,TriangleRight:qP,Trophy:ZP,Truck:UP,Turtle:WP,Tv:KP,Tv2:Lc,TvMinimal:Lc,TvMinimalPlay:$P,Twitch:GP,Twitter:XP,Type:JP,TypeOutline:YP,Umbrella:tI,UmbrellaOff:QP,Underline:eI,Undo:rI,Undo2:aI,UndoDot:nI,UnfoldHorizontal:iI,UnfoldVertical:oI,Ungroup:hI,University:Vc,Unlink:cI,Unlink2:sI,Unlock:ts,UnlockKeyhole:Qh,Unplug:dI,Upload:pI,UploadCloud:gh,Usb:lI,User:bI,User2:Rc,UserCheck:uI,UserCheck2:Dc,UserCircle:uh,UserCircle2:lh,UserCog:fI,UserCog2:Tc,UserMinus:vI,UserMinus2:Oc,UserPen:MI,UserPlus:yI,UserPlus2:Pc,UserRound:Rc,UserRoundCheck:Dc,UserRoundCog:Tc,UserRoundMinus:Oc,UserRoundPen:gI,UserRoundPlus:Pc,UserRoundSearch:mI,UserRoundX:Ic,UserSearch:xI,UserSquare:_c,UserSquare2:bc,UserX:wI,UserX2:Ic,Users:_I,Users2:Bc,UsersRound:Bc,Utensils:zc,UtensilsCrossed:Fc,UtilityPole:CI,Variable:AI,Vault:HI,Vegan:SI,VenetianMask:kI,Venus:VI,VenusAndMars:EI,Verified:mo,Vibrate:DI,VibrateOff:LI,Video:OI,VideoOff:TI,Videotape:PI,View:II,Voicemail:RI,Volleyball:BI,Volume:jI,Volume1:FI,Volume2:zI,VolumeOff:NI,VolumeX:qI,Vote:ZI,Wallet:WI,Wallet2:Nc,WalletCards:UI,WalletMinimal:Nc,Wallpaper:$I,Wand:KI,Wand2:qc,WandSparkles:qc,Warehouse:GI,WashingMachine:XI,Watch:YI,Waves:QI,WavesLadder:JI,Waypoints:tR,Webcam:eR,Webhook:nR,WebhookOff:aR,Weight:rR,Wheat:iR,WheatOff:oR,WholeWord:hR,Wifi:lR,WifiHigh:sR,WifiLow:cR,WifiOff:dR,WifiZero:pR,Wind:fR,WindArrowDown:uR,Wine:MR,WineOff:vR,Workflow:yR,Worm:gR,WrapText:mR,Wrench:xR,X:wR,XCircle:fh,XOctagon:is,XSquare:Cc,Youtube:bR,Zap:CR,ZapOff:_R,ZoomIn:AR,ZoomOut:HR},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ll=({icons:t={},nameAttr:e="data-lucide",attrs:a={}}={})=>{if(!Object.values(t).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const n=document.querySelectorAll(`[${e}]`);if(Array.from(n).forEach(i=>ho(i,{nameAttr:e,icons:t,attrs:a})),e==="data-lucide"){const i=document.querySelectorAll("[icon-name]");i.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(i).forEach(h=>ho(h,{nameAttr:"icon-name",icons:t,attrs:a})))}};window.Alpine=sl;sl.start();window.$=Xd;window.jQuery=Xd;window.createIcons=ll;window.icons=pl;document.addEventListener("DOMContentLoaded",()=>{ll({icons:pl})});
