;
(self.AMP=self.AMP||[]).push({m:0,v:"2203281422000",n:"amp-tiktok",ev:"0.1",l:!0,f:function(t,n){!function(){function n(t,i){return(n=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,i)}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}var o=function(){var t=this;this.promise=new Promise((function(n,i){t.resolve=n,t.reject=i}))};Array.isArray;var u,l,c,f=Object.prototype;function a(t,n,i,e,r,o,u,l,c,f,a){return t}function s(t,n){return t.replace(/^|,/g,"$&".concat(n," "))}function h(t){a(/^[\w-]+$/.test(t))}function v(t,n){if(void 0!==u?u:u=function(t){try{var n=t.ownerDocument,i=n.createElement("div"),e=n.createElement("div");return i.appendChild(e),i.querySelector(":scope div")===e}catch(t){return!1}}(t))return t.querySelector(s(n,":scope"));var i=function(t,n){var i=t.classList,e="i-amphtml-scoped";i.add(e);var r=s(n,".".concat(e)),o=t.querySelectorAll(r);return i.remove(e),o}(t,n)[0];return void 0===i?null:i}function p(t,n,i){return function(t,n){for(var i in n)t.setAttribute(i,n[i]);return t}(t.createElement(n),i)}function d(t){return function(t,n){a(1===n.length),t.innerHTML=n[0];var i=t.firstElementChild;return a(i),a(!i.nextElementSibling),t.removeChild(i),i}(l,t)}f.hasOwnProperty,f.toString;var m=["Webkit","webkit","Moz","moz","ms","O","o"];function k(t,n,i,e,r){var o=function(t,n,i){if(n.startsWith("--"))return n;var e;c||(e=Object.create(null),c=e);var r=c[n];if(!r||i){if(r=n,void 0===t[n]){var o=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(n),u=function(t,n){for(var i=0;i<m.length;i++){var e=m[i]+n;if(void 0!==t[e])return e}return""}(t,o);void 0!==t[u]&&(r=u)}i||(c[n]=r)}return r}(t.style,n,r);if(o){var u,l=e?i+e:i;t.style.setProperty((u=o.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()})),m.some((function(t){return u.startsWith(t+"-")}))?"-".concat(u):u),l)}}function w(t,n){for(var i in n)k(t,i,n[i])}function g(t){return"".concat(t,"px")}var y,b=self.AMP_CONFIG||{},x=("string"==typeof b.thirdPartyFrameRegex?new RegExp(b.thirdPartyFrameRegex):b.thirdPartyFrameRegex,("string"==typeof b.cdnProxyRegex?new RegExp(b.cdnProxyRegex):b.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function F(t){if(!self.document||!self.document.head)return null;if(self.location&&x.test(self.location.origin))return null;var n=self.document.head.querySelector('meta[name="'.concat(t,'"]'));return n&&n.getAttribute("content")||null}function z(t,n,i,e,r,o,u,l,c,f,a){return t}function R(t,n){return j(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n)}function j(t,n){z(function(t,n){var i=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!i||!i.ctor)}(t,n));var i=function(t){var n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}(t)[n];return i.obj||(z(i.ctor),z(i.context),i.obj=new i.ctor(i.context),z(i.obj),i.context=null,i.resolve&&i.resolve(i.obj)),i.obj}b.thirdPartyUrl,b.thirdPartyFrameHost,b.cdnUrl||F("runtime-host"),b.errorReportingUrl,b.betaErrorReportingUrl,b.localDev,b.geoApiUrl||F("amp-geo-api"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null},self.__AMP_LOG;var M=['<svg width=38 height=38 viewBox="0 0 72 72" fill=none style="margin: 17px;" xmlns=http://www.w3.org/2000/svg><path d="M22.96.04C25.35 0 27.72.02 30.09 0c.14 2.8 1.14 5.67 3.18 7.65 2.04 2.03 4.93 2.96 7.73 3.28v7.38a19.26 19.26 0 01-10.6-3.48c-.02 5.36.01 10.7-.04 16.04a14.01 14.01 0 01-2.47 7.23 13.55 13.55 0 01-10.77 5.88A13.2 13.2 0 019.7 42.1a13.82 13.82 0 01-6.65-10.47c-.04-.92-.06-1.84-.02-2.73a13.77 13.77 0 014.7-9.1 13.5 13.5 0 0111.21-3.16c.04 2.72-.07 5.43-.07 8.15a6.32 6.32 0 00-5.5.68 6.35 6.35 0 00-2.49 3.2c-.38.94-.27 1.97-.25 2.96.44 3 3.31 5.53 6.38 5.26a6.14 6.14 0 005.05-2.95c.34-.6.73-1.23.75-1.95.18-3.28.1-6.54.13-9.82.01-7.4-.02-14.76.03-22.13z" fill=#fff></path></svg>'],O=['<svg width=38 height=38 viewBox="0 0 72 72" fill=none style="margin: 17px;"><g clip-path=url(#clip0)><path d="M30.976 15.93a17.366 17.366 0 0010.122 3.233v-7.25a10.26 10.26 0 01-2.126-.223v5.708a17.37 17.37 0 01-10.121-3.234v14.797c0 7.402-6.011 13.402-13.425 13.402-2.767 0-5.338-.834-7.474-2.267a13.395 13.395 0 009.599 4.033c7.415 0 13.426-6 13.426-13.403V15.93zM33.6 8.614a10.098 10.098 0 01-2.623-5.916v-.933h-2.014a10.151 10.151 0 004.637 6.85zM12.64 34.416a6.099 6.099 0 01-1.252-3.711c0-3.386 2.749-6.13 6.14-6.13.633 0 1.261.096 1.864.287v-7.413a13.565 13.565 0 00-2.125-.122v5.77a6.154 6.154 0 00-1.864-.288 6.129 6.129 0 00-2.763 11.607z" fill=#FF004F></path><path d="M28.85 14.164a17.37 17.37 0 0010.122 3.234V11.69a10.165 10.165 0 01-5.374-3.076 10.151 10.151 0 01-4.636-6.849H23.67v28.96a6.137 6.137 0 01-6.142 6.11 6.136 6.136 0 01-4.888-2.419 6.13 6.13 0 012.763-11.606c.65 0 1.276.1 1.863.287v-5.77c-7.284.15-13.142 6.092-13.142 13.399 0 3.648 1.46 6.955 3.827 9.37a13.378 13.378 0 007.474 2.268c7.414 0 13.425-6 13.425-13.403V14.164z" fill=#000></path><path d="M38.973 11.69v-1.543c-1.9.003-3.763-.528-5.374-1.533a10.154 10.154 0 005.374 3.076zM28.962 1.765a10.326 10.326 0 01-.111-.832V0h-7.306v28.96a6.136 6.136 0 01-6.141 6.11 6.125 6.125 0 01-2.763-.654 6.136 6.136 0 004.889 2.42 6.137 6.137 0 006.14-6.11V1.766h5.292zM17.268 17.327v-1.643a13.576 13.576 0 00-1.842-.125C8.01 15.56 2 21.56 2 28.961c0 4.64 2.362 8.73 5.952 11.135a13.345 13.345 0 01-3.826-9.37c0-7.307 5.858-13.249 13.142-13.4z" fill=#00F2EA></path></g><defs><clipPath id=clip0><path fill=#fff d="M0 0h44v44H0z"></path></clipPath></defs></svg>'],S=0,E=function(t){!function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&n(t,i)}(f,t);var e,u,c=(e=f,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=i(e);if(u){var o=i(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return r(this,t)});function f(t){var n;return(n=c.call(this,t)).tb=null,n.sj=null,n.eb=null,n.tF=null,n.nF=null,n.iF=null,n.eF=n.rF(),n.oF=775.25,n.uF=function(t){!function(t,n){for(var i=0;i<n.length;i++)k(t,n[i],null)}(n.tb,["width","height","position","opacity","pointer-events"]),n.tb.removeAttribute("aria-hidden"),n.tb.title=n.element.title||"TikTok",n.tb.classList.remove("i-amphtml-tiktok-unresolved"),n.tb.classList.add("i-amphtml-tiktok-centered"),n.forceChangeHeight(t)},n.lF=function(t,n,i){var e=0,r=0,o=null;function u(){e=0;var l,c=i-(t.Date.now()-r);c>0?e=t.setTimeout(u,c):(l=o,o=null,n.apply(null,l))}return function(){r=t.Date.now();for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];o=l,e||(e=t.setTimeout(u,i))}}(n.win,(function(t){n.uF(t)}),1e3),n}f.createLoaderLogoCallback=function(t){var n,i,e,r=(i=(n=t).ownerDocument||n,l&&l.ownerDocument===i||(l=i.createElement("div")),d);return e=t,h("placeholder"),v(e,"> [".concat("placeholder","]"))?{color:"#FFFFFF",content:r(M)}:{color:"#FFFFFF",content:r(O)}};var a=f.prototype;return a.preconnectCallback=function(t){var n;(n=this.win,R(n,"preconnect")).url(this.getAmpDoc(),"https://www.tiktok.com",t)},a.buildCallback=function(){var t,n=this.element.dataset.src;if(n)this.sj=n.replace(/^((.+\/)?)(\d+)\/?$/,"$3"),this.tF=this.sj===n?null:n;else{var i,e,r=(t=this.element,h("blockquote"),v(t,"> ".concat("blockquote")));if(!r||!r.hasAttribute("placeholder")||!r.dataset.videoId)return;this.sj=null==r||null===(i=r.dataset)||void 0===i?void 0:i.videoId,this.tF=null==r||null===(e=r.dataset)||void 0===e?void 0:e.cite}},a.layoutCallback=function(){var t,n,i,e,r,u,l,c,f=this,a=this.element.dataset.locale,s=void 0===a?"en-US":a,h="https://www.tiktok.com/embed/v2/".concat(encodeURIComponent(this.sj),"?lang=").concat(encodeURIComponent(s)),v=p(this.element.ownerDocument,"iframe",{"src":h,"name":this.eF,"aria-hidden":"true","frameborder":"0","class":"i-amphtml-tiktok-unresolved"});this.tb=v,this.eb=(t=this.win,n="message",i=this.cF.bind(this),e=void 0,r=t,u=i,l=function(t){try{return u(t)}catch(t){var n,i;throw null===(n=(i=self).__AMP_REPORT_ERROR)||void 0===n||n.call(i,t),t}},c=function(){if(void 0!==y)return y;y=!1;try{var t={get capture(){return y=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return y}(),r.addEventListener(n,l,!!c&&e),function(){null==r||r.removeEventListener(n,l,!!c&&e),u=null,r=null,l=null});var d=new o,m=d.promise,k=d.resolve;return this.iF=k,Promise.resolve(this.nF).then((function(t){null!=t&&t.title&&(v.title="TikTok: ".concat(t.title))})),this.element.appendChild(v),this.loadPromise(v).then((function(){var t;(t=f.win,j(t,"timer")).timeoutPromise(1e3,m).catch((function(){f.uF(f.oF),w(f.tb,{"width":g(325),"height":g(f.oF)})}))}))},a.cF=function(t){if("https://www.tiktok.com"==t.origin&&t.source==this.tb.contentWindow){var n=function(t,n){try{return function(t){return JSON.parse(t)}(t)}catch(t){return null}}(function(t){return t.data}(t));n&&n.height&&(this.iF&&this.iF(),this.lF(n.height),w(this.tb,{"width":g(n.width),"height":g(n.height)}))}},a.createPlaceholderCallback=function(){var t,n=this;if(this.tF){var i=p(this.element.ownerDocument,"div",{"placeholder":""}),e=p(this.element.ownerDocument,"div",{"class":"i-amphtml-tiktok-placeholder-image-container"}),r=encodeURIComponent(this.tF);return this.nF=(t=this.win,R(t,"xhr")).fetchJson("https://www.tiktok.com/oembed?url=".concat(r)).then((function(t){return t.json()})).then((function(t){var r=t.thumbnail_url;if(r){var o=p(n.element.ownerDocument,"img",{"src":r,"placeholder":r,"class":"i-amphtml-tiktok-centered i-amphtml-tiktok-placeholder-image"});i.parentElement&&(e.appendChild(o),i.appendChild(e))}return t})),i}},a.unlayoutCallback=function(){var t,n;return this.tb&&(null===(n=(t=this.tb).parentElement)||void 0===n||n.removeChild(t),this.tb=null),this.eb&&this.eb(),!0},a.isLayoutSupported=function(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)},a.rF=function(){for(var t=(S++).toString();t.length<17;)t="0"+t;return"__tt_embed__v"+t},f}(t.BaseElement);t.registerElement("amp-tiktok",E,".i-amphtml-tiktok-centered{height:100%;left:50%;width:325px;transform:translateX(-50%);position:absolute}.i-amphtml-tiktok-unresolved{position:fixed;opacity:0;pointer-events:none;width:325px;height:1000px}.i-amphtml-tiktok-placeholder-image{height:578px;top:1px;border-radius:8px 8px 0px 0px}.i-amphtml-tiktok-placeholder-image-container{height:100%;background:hsla(0,0%,86%,0.6)}\n/*# sourceURL=/extensions/amp-tiktok/0.1/amp-tiktok.css*/")}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-tiktok-0.1.js.map