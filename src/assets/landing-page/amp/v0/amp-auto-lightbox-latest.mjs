;
(self.AMP=self.AMP||[]).push({m:1,v:"2203281422000",n:"amp-auto-lightbox",ev:"0.1",l:!0,f:function(t,n){(()=>{var n="load-end";function r(t){return t?Array.prototype.slice.call(t):[]}var{hasOwnProperty:e,toString:o}=Object.prototype;function u(t,n,r,e,o,u,i,l,c,a,s){return t}function i(t){return(t.ownerDocument||t).defaultView}function l(t,n){return t.closest?t.closest(n):function(t,n,r){let e;for(e=t;e&&void 0!==e;e=e.parentElement)if(n(e))return e;return null}(t,(t=>function(t,n){const r=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector;return!!r&&r.call(t,n)}(t,n)))}var c,a,s,f={bubbles:!0,cancelable:!0},p=class{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}};new WeakMap,new WeakMap;var g=self.AMP_CONFIG||{},d=("string"==typeof g.thirdPartyFrameRegex?new RegExp(g.thirdPartyFrameRegex):g.thirdPartyFrameRegex,("string"==typeof g.cdnProxyRegex?new RegExp(g.cdnProxyRegex):g.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function h(t){if(!self.document||!self.document.head)return null;if(self.location&&d.test(self.location.origin))return null;const n=self.document.head.querySelector(`meta[name="${t}"]`);return n&&n.getAttribute("content")||null}g.thirdPartyUrl,g.thirdPartyFrameHost,g.cdnUrl||h("runtime-host"),g.errorReportingUrl,g.betaErrorReportingUrl,g.localDev,g.geoApiUrl||h("amp-geo-api"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var m=self.__AMP_LOG;function v(t){return function(t,n){throw new Error("failed to call initLogConstructor")}()}function b(t,n,r,e,o,u,i,l,c,a,s){return t}function w(t,n){return M(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n)}function y(t,n){return M(P(x(t)),n)}function x(t){return t.nodeType?(n=i(t),w(n,"ampdoc")).getAmpDoc(t):t;var n}function P(t){const n=x(t);return n.isSingleDoc()?n.win:n}function M(t,n){b(A(t,n));const r=function(t){let n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}(t)[n];return r.obj||(b(r.ctor),b(r.context),r.obj=new r.ctor(r.context),b(r.obj),r.context=null,r.resolve&&r.resolve(r.obj)),r.obj}function A(t,n){const r=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!r||!r.ctor)}var O,C=t=>function(t,n){const r=P(x(t));return A(r,n)?M(r,n):null}(t,"action"),E=t=>w(t,"extensions"),I=t=>y(t,"mutator");function S(t,n,r,e){let o=r;const u=function(t,n,r,e){let o=t,u=r,i=t=>{try{return u(t)}catch(t){var n,r;throw null===(n=(r=self).__AMP_REPORT_ERROR)||void 0===n||n.call(r,t),t}};const l=function(){if(void 0!==O)return O;O=!1;try{const t={get capture(){return O=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return O}(),c=!(null==e||!e.capture);return o.addEventListener(n,i,l?e:c),()=>{null==o||o.removeEventListener(n,i,l?e:c),u=null,o=null,i=null}}(t,n,(t=>{try{o(t)}finally{o=null,u()}}),e);return u}function W(t){return"AUDIO"===t.tagName||"VIDEO"===t.tagName}/nochunking=1/.test(self.location.hash),c||(c=Promise.resolve(void 0));var $="i-amphtml-auto-lightbox-visited",D={"Article":!0,"NewsArticle":!0,"BlogPosting":!0,"LiveBlogPosting":!0,"DiscussionForumPosting":!0},T=["[placeholder]","[data-amp-auto-lightbox-disable]","amp-selector [option]","[subscriptions-action]"].join(","),B=["a[href]","amp-script","amp-story","button","amp-lightbox","amp-carousel"].join(","),R=()=>{},k=class{static meetsAll(t,n,r,e){return k.meetsSizingCriteria(t,n,r,e)&&k.meetsTreeShapeCriteria(t,n)}static meetsTreeShapeCriteria(t,n){return!("IMG"===t.tagName&&l(t,"amp-img")||l(t,`${B},${T}`)||C(n||t).hasResolvableAction(t,"tap"))}static meetsSizingCriteria(t,n,r,e){const{naturalHeight:o,naturalWidth:u}=function(t){const{naturalHeight:n,naturalWidth:r}=t,e=r/n,o=function(t){let n=-1;const r=t.getAttribute("srcset");if(r){let t;for(;t=G.exec(r);){const r=parseInt(t[1],10);r>n&&(n=r)}}return n}(t);return o>r?{naturalWidth:o,naturalHeight:o/e}:{naturalWidth:r,naturalHeight:n}}(t.querySelector("img")||t),i=y(n,"viewport"),{height:l,width:c}=i.getSize();return function(t,n,r,e,o,u){const i=t*n;return r*e/i>=1.2||r>o||e>u||i/(o*u)>=.25}(r,e,u,o,c,l)}},G=/\s+([0-9]+)w(,|[\S\s]*$)/g;function H(t){return I(t).mutateElement(t,(()=>{t.setAttribute($,"")}))}function L(t){return"IMG"===t.tagName?function(t){let n,r;if(function(t){return!!(t.complete||"complete"==t.readyState||W(t)&&t.readyState>0||t.document&&"complete"==t.document.readyState)}(t))return Promise.resolve(t);const e=W(t);return e&&t.__AMP_MEDIA_LOAD_FAILURE_SRC===t.currentSrc?Promise.reject(t):new Promise(((o,u)=>{if(n=e?S(t,"loadedmetadata",o,{capture:!0}):S(t,"load",o),!t.tagName)return;let i=t;if(e&&!t.hasAttribute("src")&&(i=function(t,n){for(let r=t.lastElementChild;r;r=r.previousElementSibling)if(n(r))return r;return null}(t,(t=>"SOURCE"===t.tagName)),!i))return u(new Error("Media has no source."));r=S(i,"error",u)})).then((()=>(r&&r(),t)),(()=>{n&&n(),function(t){W(t)&&(t.__AMP_MEDIA_LOAD_FAILURE_SRC=t.currentSrc||!0);let n=t;throw n&&n.src&&(n=n.src),(m.user||(m.user=v()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(m.user.win,r)?m.userForEmbed||(m.userForEmbed=v()):m.user).createError("Failed to load:",n);var r}(t)}))}(t):function(t){if(u(function(t){const n=t.tagName;return n.startsWith("AMP-")&&!("AMP-STICKY-AD-TOP-PADDING"==n||"AMP-BODY"==n)}(t)),t.createdCallback)return Promise.resolve(t);if(!t.__AMP_UPG_PRM){const n=new p;t.__AMP_UPG_PRM=n.promise,t.__AMP_UPG_RES=n.resolve}const n=t.__AMP_UPG_PRM;return u(n),n}(t).then((t=>t.signals().whenSignal(n)))}var j=class{static getOgType(t){const n=t.getRootNode().querySelector('meta[property="og:type"]');if(n)return n.getAttribute("content")}static hasValidOgType(t){return"article"==j.getOgType(t)}static getAllLdJsonTypes(t){return r(t.getRootNode().querySelectorAll('script[type="application/ld+json"]')).map((t=>{const{textContent:n}=t;return(function(t,n){try{return function(t){return JSON.parse(t)}(t)}catch(t){return null}}(n)||{})["@type"]})).filter(Boolean)}static hasValidLdJsonType(t){return j.getAllLdJsonTypes(t).some((t=>D[t]))}},F=0;function J(t,e){if(!function(t){return!function(t){const n=`[lightbox]:not([${$}])`,r=n=>!!t.getRootNode().querySelector(n);return r('script[custom-element="amp-lightbox-gallery"]')&&r(n)}(t)&&(j.hasValidOgType(t)||j.hasValidLdJsonType(t))}(t))return;const o=e||t.win.document;return function(t,r){return r.map((r=>L(r).then((()=>function(t){var n;let r=null===(n=a)||void 0===n?void 0:n.get(t);if(!r){const n=function(t){a||(a=new WeakMap,s=new WeakMap),u(s);let n=s.get(t);return n||(n=function(t,n,r={}){const{needsRootBounds:e,rootMargin:o,threshold:u}=r,i=function(t){return t.parent&&t.parent!=t}(n)&&(e||o)?n.document:void 0;return new n.IntersectionObserver(t,{threshold:u,root:i,rootMargin:o})}((t=>{const r=new Set;for(let o=t.length-1;o>=0;o--){var e;const{target:i}=t[o];r.has(i)||(r.add(i),u(n),n.unobserve(i),u(a),null===(e=a.get(i))||void 0===e||e.resolve(t[o]),a.delete(i))}}),t,{needsRootBounds:!1}),s.set(t,n)),n}(i(t));u(a),n.observe(t),r=new p,a.set(t,r)}return r.promise}(r).then((({boundingClientRect:e})=>{if("IMG"!==r.tagName&&!r.signals().get(n))return;const{height:o,width:i}=e;return k.meetsAll(r,t,i,o)?function(t,n){return I(t).mutateElement(n,(()=>{n.setAttribute("lightbox","i-amphtml-auto-lightbox-"+F++)})).then((()=>(E(t.win).installExtensionForDoc(t,"amp-lightbox-gallery"),function(t,n,r,e){u(t.ownerDocument);const o=t.ownerDocument.createEvent("Event");o.data={};const{bubbles:i,cancelable:l}=f;o.initEvent("amp-auto-lightbox:newly-set",i,l),t.dispatchEvent(o)}(n),n)))}(t,r):void 0}))),R)))}(t,class{static getCandidates(t){const n=["amp-img","img"].map((t=>`${t}:not([lightbox]):not([${$}])`)).join(","),e=r(t.querySelectorAll(n));return e.forEach(H),e}}.getCandidates(o))}var{ampdoc:N}=t;N.whenReady().then((()=>{N.getRootNode().addEventListener("amp:dom-update",(t=>{const{target:n}=t;J(N,n)})),J(N)}))})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-auto-lightbox-0.1.mjs.map