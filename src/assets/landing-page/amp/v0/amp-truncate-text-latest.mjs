;
(self.AMP=self.AMP||[]).push({m:1,v:"2203281422000",n:"amp-truncate-text",ev:"0.1",l:!0,f:function(t,n){(()=>{function n(t){return t?Array.prototype.slice.call(t):[]}var{isArray:e}=Array;function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function r(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(e)return(e=e.call(t)).next.bind(e);if(Array.isArray(t)||(e=function(t,n){if(t){if("string"==typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,{hasOwnProperty:a,toString:s}=Object.prototype;function l(t){const n=Object.create(null);return t&&Object.assign(n,t),n}function c(t,n,e,o,r,i,a,s,l,c,u){return t}function u(t,n){const{length:e}=t;for(let o=0;o<e;o++)n(t[o],o)}function p(t){const n=t.ownerDocument||t;return i&&i.ownerDocument===n||(i=n.createElement("div")),m}function m(t){return function(t,n){c(1===n.length),t.innerHTML=n[0];const e=t.firstElementChild;return c(e),c(!e.nextElementSibling),t.removeChild(e),e}(i,t)}function h(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function d(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function f(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?d(Object(e),!0).forEach((function(n){h(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var v=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function b(t,n=""){try{return decodeURIComponent(t)}catch(t){return n}}var _=self.AMP_CONFIG||{},x=("string"==typeof _.thirdPartyFrameRegex?new RegExp(_.thirdPartyFrameRegex):_.thirdPartyFrameRegex,("string"==typeof _.cdnProxyRegex?new RegExp(_.cdnProxyRegex):_.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function A(t){if(!self.document||!self.document.head)return null;if(self.location&&x.test(self.location.origin))return null;const n=self.document.head.querySelector(`meta[name="${t}"]`);return n&&n.getAttribute("content")||null}function y(t,n,e,o,r,i,a,s,l,c,u){return t}function g(t,n){const e=function(t){const n=w(t);return n.isSingleDoc()?n.win:n}(w(t));return T(e,n)?P(e,n):null}function w(t){return t.nodeType?(n=t,e=(n.ownerDocument||n).defaultView,function(t,n){return P(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n)}(e,"ampdoc")).getAmpDoc(t):t;var n,e}function P(t,n){y(T(t,n));const e=function(t){let n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}(t)[n];return e.obj||(y(e.ctor),y(e.context),e.obj=new e.ctor(e.context),y(e.obj),e.context=null,e.resolve&&e.resolve(e.obj)),e.obj}function T(t,n){const e=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!e||!e.ctor)}_.thirdPartyUrl,_.thirdPartyFrameHost,_.cdnUrl||A("runtime-host"),_.errorReportingUrl,_.betaErrorReportingUrl,_.localDev,_.geoApiUrl||A("amp-geo-api"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null},self.__AMP_LOG;var E="__AMP__EXPERIMENT_TOGGLES",O="i-amphtml-truncate-overflow",N="i-amphtml-truncate-child-overflow",j="__AMP_TRUNCATE_TEXT_DATA",R="__AMP_TRUNCATE_TRUNCATED";function M(t){t[R]&&(t[R]=!1,t.removeAttribute(O),S(t))}function I(t,n){const e="slot"==t.localName?t.assignedNodes({flatten:!0}):t.childNodes;for(let t=0;t<e.length;t++)n(e[t])}function S(t){const n=t[j];n&&n.modifiedText==t.data&&(t.data=n.originalText),t.nodeType==Node.ELEMENT_NODE&&t.removeAttribute(N),I(t,(t=>S(t)))}function V(t,n,e){t[j]={originalText:n,modifiedText:e},t.data=e}function C(t){return t.scrollHeight-t.offsetHeight}function k({container:t,overflowNodes:n}){if(M(t),C(t)<=0)return;const e=t.getBoundingClientRect();var o;(o=t)[R]=!0,o.setAttribute(O,""),function(t,n,e){const o=U(t,(t=>!e.includes(t)));for(let e=o.length-1;e>=0;e--){const r=o[e];if(r.nodeType==Node.ELEMENT_NODE&&r.setAttribute(N,""),r.nodeType==Node.TEXT_NODE&&z(r,t,n))break}}(t,e,n)}function U(t,n,e=[]){return n(t)?(e.push(t),I(t,(t=>U(t,n,e))),e):e}function z(t,n,e){const o=document.createRange();o.selectNode(t);const r=o.getBoundingClientRect(),i=t.data;if(!r.height)return;if(r.top>e.bottom)return void V(t,i,"");const a=function(t,n,e,o=0,r=1){y(t<=n);let i=t,a=n-1,s=NaN,l=NaN;for(;a>=i;){const t=i+Math.floor((a-i)/2),n=e(t);if(n>0||0==n&&1==o)s=2==r?t:s,l=0==n?t:l,i=t+1;else{if(!(n<0||0==n&&2==o)){l=t;break}s=1==r?t:s,l=0==n?t:l,a=t-1}}return isNaN(l)?-((isNaN(s)?1==r?i:a:s)+1):l}(0,i.length,(e=>{for(;!i[e].trim()&&e>0;)e--;return function(t,n,e,o){return n.data=e.slice(0,o+1)+"… ",0-C(t)}(n,t,i,e)}),1,1),s=a>=0?a+1:-(a+1),l=(c=i.slice(0,s)).trimEnd?c.trimEnd():("_"+c).trim().slice(1);var c;return V(t,i,l?l+"… ":""),!!l}var L=["<div class=i-amphtml-truncate-content><span class=i-amphtml-default-slot></span> <span class=i-amphtml-truncate-collapsed-slot name=collapsed></span> <span class=i-amphtml-truncate-expanded-slot name=expanded></span> <span class=i-amphtml-truncate-persistent-slot name=persistent></span></div>"],$=["<div class=content><slot></slot><slot class=collapsed-slot name=collapsed></slot><slot class=expanded-slot name=expanded></slot><slot class=persistent-slot name=persistent></slot></div>"],D=class extends t.BaseElement{xX(){this.registerAction("expand",(()=>this.qC())),this.registerAction("collapse",(()=>this.zC()))}constructor(t){super(t),this.mz=null,this.OX=null,this.NX=null,this.jX=null,this.SX=!1,this.xu=new this.win.MutationObserver((()=>{this.VX()}))}buildCallback(){this.xu.observe(this.element,{attributes:!0,characterData:!0,childList:!0,subtree:!0}),this.SX=!!this.element.attachShadow&&function(t,n){const o=function(t){var n,o,i,a,s;if(t[E])return t[E];t[E]=l();const u=t[E];c(u);const p=f(f({},null!==(n=t.AMP_CONFIG)&&void 0!==n?n:{}),null!==(o=t.AMP_EXP)&&void 0!==o?o:(m=(null===(i=t.__AMP_EXP)||void 0===i?void 0:i.textContent)||"{}",JSON.parse(m)));var m;for(const t in p){const n=p[t];"number"==typeof n&&n>=0&&n<=1&&(u[t]=Math.random()<n)}const h=null===(a=t.AMP_CONFIG)||void 0===a?void 0:a["allow-doc-opt-in"];if(e(h)&&h.length){const n=t.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(n)for(var d,_,x=r((null===(d=n.getAttribute("content"))||void 0===d?void 0:d.split(","))||[],!0);!(_=x()).done;){const t=_.value;h.includes(t)&&(u[t]=!0)}}Object.assign(u,function(t){var n;let e="";try{var o;"localStorage"in t&&(e=null!==(o=t.localStorage.getItem("amp-experiment-toggles"))&&void 0!==o?o:"")}catch(t){}const i=(null===(n=e)||void 0===n?void 0:n.split(/\s*,\s*/g))||[],a=l();for(var s,c=r(i,!0);!(s=c()).done;){const t=s.value;t&&("-"==t[0]?a[t.substr(1)]=!1:a[t]=!0)}return a}(t));const A=null===(s=t.AMP_CONFIG)||void 0===s?void 0:s["allow-url-opt-in"];if(e(A)&&A.length){const n=function(t){const n=l();if(!t)return n;let e;for(;e=v.exec(t);){const t=b(e[1],e[1]),o=e[2]?b(e[2].replace(/\+/g," "),e[2]):"";n[t]=o}return n}(t.location.originalHash||t.location.hash);for(var y,g=r(A,!0);!(y=g()).done;){const t=y.value,e=n[`e-${t}`];"1"==e&&(u[t]=!0),"0"==e&&(u[t]=!1)}}return u}(t);return!!o["amp-truncate-text-shadow"]}(this.win),this.SX?this.CX():this.kX(),this.xX(),this.OX.addEventListener("click",(t=>{this.UX(t)})),this.NX.addEventListener("click",(t=>{this.zX(t)}))}kX(){const t=p(this.element);this.mz=t(L);const n=this.mz.querySelector(".i-amphtml-default-slot");var e;this.OX=this.mz.querySelector(".i-amphtml-truncate-collapsed-slot"),this.NX=this.mz.querySelector(".i-amphtml-truncate-expanded-slot"),this.jX=this.mz.querySelector(".i-amphtml-truncate-persistent-slot"),u(this.element.querySelectorAll('[slot="collapsed"]'),(t=>{this.OX.appendChild(t)})),u(this.element.querySelectorAll('[slot="expanded"]'),(t=>{this.NX.appendChild(t)})),u(this.element.querySelectorAll('[slot="persistent"]'),(t=>{this.jX.appendChild(t)})),(e=this.element,function(t,n){const e=[];for(let n=t.firstChild;n;n=n.nextSibling)!(function(t){let n;var e;return"string"==typeof t?n=t:1==(null==(e=t)?void 0:e.nodeType)&&(n=t.tagName),!!n&&n.toLowerCase().startsWith("i-")}(o=n)||o.nodeType===Node.ELEMENT_NODE&&(o.hasAttribute("placeholder")||o.hasAttribute("fallback")||o.hasAttribute("overflow")))&&e.push(n);var o;return e}(e)).forEach((t=>{n.appendChild(t)})),this.element.appendChild(this.mz)}CX(){const t=p(this.element),n=function(t,n,e){const o=t.querySelector("i-amphtml-sizer");o&&o.setAttribute("slot","i-amphtml-sizer");const r=t.attachShadow({mode:"open"}),i=document.createElement("style");i.textContent=":host{padding:0!important;border:none!important}:host([i-amphtml-truncate-expanded]){height:auto!important}:host([i-amphtml-truncate-expanded]) ::slotted(i-amphtml-sizer){display:none!important}:host([i-amphtml-truncate-expanded]) .content{position:static}:host(:not([i-amphtml-truncate-expanded])) .expanded-slot{display:none}.content{position:absolute;top:0;left:0;bottom:0;right:0}.expand-slot::slotted(*){margin:0!important;white-space:nowrap!important}:host(:not([i-amphtml-truncate-overflow])) .collapsed-slot{display:none}::slotted([i-amphtml-truncate-child-overflow]){display:none!important}\n/*# sourceURL=/extensions/amp-truncate-text/0.1/amp-truncate-text-shadow.css*/";const a=document.createElement("slot");return a.setAttribute("name","i-amphtml-sizer"),r.appendChild(i),r.appendChild(a),r.appendChild(e),r}(this.element,0,t($));this.mz=null,this.OX=n.querySelector(".collapsed-slot"),this.NX=n.querySelector(".expanded-slot"),this.jX=n.querySelector(".persistent-slot")}layoutCallback(){return this.mutateElement((()=>{this.VX()}))}isRelayoutNeeded(){return!0}isLayoutSupported(){return!0}LX(){return this.SX?n(this.element.querySelectorAll('[slot="persistent"], [slot="collapsed"]')):n(this.element.querySelectorAll(".i-amphtml-truncate-persistent-slot, .i-amphtml-truncate-collapsed-slot"))}VX(){k({container:this.SX?this.element:this.mz,overflowNodes:this.LX()}),this.xu.takeRecords()}UX(t){this.$X(t,!0)}zX(t){this.$X(t,!1)}$X(t,n){const e=t.target;var o;(t=>g(t,"action"))(this.element).hasAction(e,"tap")||("a[href]",((o=e).closest?o.closest("a[href]"):function(t,n,e){let o;for(o=t;o&&void 0!==o;o=o.parentElement)if(n(o))return o;return null}(o,(t=>function(t,n){const e=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector;return!!e&&e.call(t,"a[href]")}(t))))||(n?this.qC():this.zC()))}qC(){this.element.setAttribute("i-amphtml-truncate-expanded","")}zC(){this.element.removeAttribute("i-amphtml-truncate-expanded")}};t.registerElement("amp-truncate-text",D,"amp-truncate-text{padding:0!important;border:none!important}amp-truncate-text[i-amphtml-truncate-expanded]{height:auto!important}amp-truncate-text[i-amphtml-truncate-expanded]>i-amphtml-sizer{display:none!important}amp-truncate-text[i-amphtml-truncate-expanded] .i-amphtml-truncate-content{position:static!important}amp-truncate-text:not([i-amphtml-truncate-expanded]) .i-amphtml-truncate-expanded-slot{display:none!important}.i-amphtml-truncate-content{position:absolute!important;top:0!important;left:0!important;bottom:0!important;right:0!important}.i-amphtml-truncate-content [slot=expanded]{margin:0!important;white-space:nowrap!important}.i-amphtml-truncate-content:not([i-amphtml-truncate-overflow]) .i-amphtml-truncate-collapsed-slot,[i-amphtml-truncate-child-overflow]{display:none!important}\n/*# sourceURL=/extensions/amp-truncate-text/0.1/amp-truncate-text.css*/")})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-truncate-text-0.1.mjs.map