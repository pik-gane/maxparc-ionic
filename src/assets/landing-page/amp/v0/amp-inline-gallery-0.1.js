;
(self.AMP=self.AMP||[]).push({m:0,v:"2203281422000",n:"amp-inline-gallery",ev:"0.1",l:!0,f:function(n,i){!function(){function i(n,t){return(i=Object.setPrototypeOf||function(n,i){return n.__proto__=i,n})(n,t)}function t(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&i(n,t)}function e(n){return(e=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function a(n){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function l(n,i){if(i&&("object"===a(i)||"function"==typeof i))return i;if(void 0!==i)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}function r(n){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,a=e(n);if(i){var r=e(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return l(this,t)}}function o(n){return n?Array.prototype.slice.call(n):[]}var s=Array.isArray;function u(n,i){(null==i||i>n.length)&&(i=n.length);for(var t=0,e=new Array(i);t<i;t++)e[t]=n[t];return e}function c(n,i){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(t)return(t=t.call(n)).next.bind(t);if(Array.isArray(n)||(t=function(n,i){if(n){if("string"==typeof n)return u(n,i);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(n,i):void 0}}(n))||i&&n&&"number"==typeof n.length){t&&(n=t);var e=0;return function(){return e>=n.length?{done:!0}:{done:!1,value:n[e++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var p,m=Object.prototype;function f(n){var i=Object.create(null);return n&&Object.assign(i,n),i}function g(n,i,t,e,a,l,r,o,s,u,c){return n}function h(n){return void 0!==p?p:p=function(n){try{var i=n.ownerDocument,t=i.createElement("div"),e=i.createElement("div");return t.appendChild(e),t.querySelector(":scope div")===e}catch(n){return!1}}(n)}function d(n,i){return n.replace(/^|,/g,"$&".concat(i," "))}function v(n,i){var t=n.classList,e="i-amphtml-scoped";t.add(e);var a=d(i,".".concat(e)),l=n.querySelectorAll(a);return t.remove(e),l}function y(n,i){if(h(n))return n.querySelector(d(i,":scope"));var t=v(n,i)[0];return void 0===t?null:t}function b(n,i){return h(n)?n.querySelectorAll(d(i,":scope")):v(n,i)}function x(n,i){var t=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector;return!!t&&t.call(n,i)}function w(n,i){for(var t=n.length,e=0;e<t;e++)i(n[e],e)}m.hasOwnProperty,m.toString;var j="fixed-height",O="flex-item";function k(n){return"fixed"==n||n==j||"responsive"==n||"fill"==n||n==O||"fluid"==n||"intrinsic"==n}function S(n,i,t){return i in n?Object.defineProperty(n,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[i]=t,n}var z=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function E(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";try{return decodeURIComponent(n)}catch(n){return i}}var R=self.AMP_CONFIG||{},M=("string"==typeof R.thirdPartyFrameRegex?new RegExp(R.thirdPartyFrameRegex):R.thirdPartyFrameRegex,("string"==typeof R.cdnProxyRegex?new RegExp(R.cdnProxyRegex):R.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function A(n){if(!self.document||!self.document.head)return null;if(self.location&&M.test(self.location.origin))return null;var i=self.document.head.querySelector('meta[name="'.concat(n,'"]'));return i&&i.getAttribute("content")||null}R.thirdPartyUrl,R.thirdPartyFrameHost,R.cdnUrl||A("runtime-host"),R.errorReportingUrl,R.betaErrorReportingUrl,R.localDev,R.geoApiUrl||A("amp-geo-api"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var L,U=self.__AMP_LOG;function I(n,i){throw new Error("failed to call initLogConstructor")}function P(n){return I()}function T(n,i,t,e,a,l,r,o,s,u,c){return n}function _(n,i,t,e,a,l,r,o,s,u,c){return(U.user||(U.user=P()),void U.user.win?U.userForEmbed||(U.userForEmbed=P()):U.user).assert(n,i,t,e,a,l,r,o,s,u,c)}function N(n,i,t,e){var a={detail:t};if(Object.assign(a,e),"function"==typeof n.CustomEvent)return new n.CustomEvent(i,a);var l=n.document.createEvent("CustomEvent");return l.initCustomEvent(i,!!a.bubbles,!!a.cancelable,t),l}function C(n){return n.detail}var Z=["Webkit","webkit","Moz","moz","ms","O","o"];function $(n){var i=n.replace(/[A-Z]/g,(function(n){return"-"+n.toLowerCase()}));return Z.some((function(n){return i.startsWith(n+"-")}))?"-".concat(i):i}function B(n,i,t){if(i.startsWith("--"))return i;L||(L=f());var e=L[i];if(!e||t){if(e=i,void 0===n[i]){var a=function(n){return n.charAt(0).toUpperCase()+n.slice(1)}(i),l=function(n,i){for(var t=0;t<Z.length;t++){var e=Z[t]+i;if(void 0!==n[e])return e}return""}(n,a);void 0!==n[l]&&(e=l)}t||(L[i]=e)}return e}function F(n,i){var t=n.style;for(var e in i)t.setProperty($(B(t,e)),String(i[e]),"important")}function G(n,i){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);i&&(e=e.filter((function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable}))),t.push.apply(t,e)}return t}function X(n){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?G(Object(t),!0).forEach((function(i){S(n,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):G(Object(t)).forEach((function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))}))}return n}var q,D="__AMP__EXPERIMENT_TOGGLES";function J(n,i){var t=function(n){var i,t,e,a,l;if(n[D])return n[D];n[D]=f();var r=n[D];g(r);var o,u=X(X({},null!==(i=n.AMP_CONFIG)&&void 0!==i?i:{}),null!==(t=n.AMP_EXP)&&void 0!==t?t:(o=(null===(e=n.__AMP_EXP)||void 0===e?void 0:e.textContent)||"{}",JSON.parse(o)));for(var p in u){var m=u[p];"number"==typeof m&&m>=0&&m<=1&&(r[p]=Math.random()<m)}var h=null===(a=n.AMP_CONFIG)||void 0===a?void 0:a["allow-doc-opt-in"];if(s(h)&&h.length){var d=n.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(d)for(var v,y,b=c((null===(v=d.getAttribute("content"))||void 0===v?void 0:v.split(","))||[],!0);!(y=b()).done;){var x=y.value;h.includes(x)&&(r[x]=!0)}}Object.assign(r,function(n){var i,t="";try{var e;"localStorage"in n&&(t=null!==(e=n.localStorage.getItem("amp-experiment-toggles"))&&void 0!==e?e:"")}catch(n){(U.dev||(U.dev=I())).warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}for(var a,l=(null===(i=t)||void 0===i?void 0:i.split(/\s*,\s*/g))||[],r=f(),o=c(l,!0);!(a=o()).done;){var s=a.value;s&&("-"==s[0]?r[s.substr(1)]=!1:r[s]=!0)}return r}(n));var w=null===(l=n.AMP_CONFIG)||void 0===l?void 0:l["allow-url-opt-in"];if(s(w)&&w.length)for(var j,O=function(n){var i,t=f();if(!n)return t;for(;i=z.exec(n);){var e=E(i[1],i[1]),a=i[2]?E(i[2].replace(/\+/g," "),i[2]):"";t[e]=a}return t}(n.location.originalHash||n.location.hash),k=c(w,!0);!(j=k()).done;){var S=j.value,R=O["e-".concat(S)];"1"==R&&(r[S]=!0),"0"==R&&(r[S]=!1)}return r}(n);return!!t[i]}function W(n){var i=n.ownerDocument||n;return q&&q.ownerDocument===i||(q=i.createElement("div")),H}function H(n){return function(n,i){g(1===i.length),n.innerHTML=i[0];var t=n.firstElementChild;return g(t),g(!t.nextElementSibling),n.removeChild(t),t}(q,n)}var K="amp-inline-gallery:go-to-slide",Q=["<div class=i-amphtml-inline-gallery-pagination-container aria-hidden=true><div class=i-amphtml-inline-gallery-pagination-dots hidden><div class=i-amphtml-inline-gallery-pagination-frosting></div><div class=i-amphtml-inline-gallery-pagination-backdrop></div><div class=i-amphtml-inline-gallery-pagination-background></div></div><div class=i-amphtml-inline-gallery-pagination-numbers hidden><div class=i-amphtml-inline-gallery-pagination-frosting></div><div class=i-amphtml-inline-gallery-pagination-backdrop></div><div class=i-amphtml-inline-gallery-pagination-background></div><div class=i-amphtml-inline-gallery-pagination-count><span class=i-amphtml-inline-gallery-pagination-index></span> <span>/ </span><span class=i-amphtml-inline-gallery-pagination-total></span></div></div></div>"],V=["<div class=i-amphtml-inline-gallery-pagination-dot-container><div class=i-amphtml-inline-gallery-pagination-dot><div class=i-amphtml-inline-gallery-pagination-dot-progress></div></div></div>"];function Y(n,i){return T(n>=0),T(n<=1),T(i>=1),Math.max(0,1-1/Math.pow(n,-1/i))}var nn=function(n){t(e,n);var i=r(e);function e(n){var t;return(t=i.call(this,n)).nZ=0,t.iZ=null,t.tZ=null,t.eZ=null,t.aZ=null,t.lZ=null,t}e.prerenderAllowed=function(){return!0};var a=e.prototype;return a.isLayoutSupported=function(n){return n==j},a.buildCallback=function(){this.element.appendChild(this.rZ()),this.tZ=this.element.querySelector(".i-amphtml-inline-gallery-pagination-dots"),this.eZ=this.element.querySelector(".i-amphtml-inline-gallery-pagination-numbers"),this.aZ=this.element.querySelector(".i-amphtml-inline-gallery-pagination-index"),this.lZ=this.element.querySelector(".i-amphtml-inline-gallery-pagination-total")},a.rZ=function(){return W(this.element)(Q)},a.oZ=function(n){var i=this,t=W(this.element)(V);return t.onclick=function(){var t=N(i.win,K,{"index":n},{bubbles:!0});i.element.dispatchEvent(t)},t},a.sZ=function(n){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(n!=this.nZ||i){var t=n<=8,e=t?n:0;n===this.nZ&&t===this.iZ||(this.nZ=n,this.iZ=t,this.tZ.hidden=!t,this.eZ.hidden=t,this.lZ.textContent=n,this.uZ(e))}},a.cZ=function(){return o(b(T(this.tZ),"> .i-amphtml-inline-gallery-pagination-dot-container"))},a.uZ=function(n){for(var i=this.cZ(),t=n;t<i.length;t++)this.tZ.removeChild(i[t]);for(var e=i.length;e<n;e++)this.tZ.appendChild(this.oZ(e))},a.pZ=function(n,i){this.cZ().forEach((function(t,e){var a=e-(n+i);F(t,{"--percentage-falloff":Y(Math.max(1-Math.abs(a),0),2)}),0==i&&t.setAttribute("i-amphtml-inline-gallery-pagination-dot-active",e===n)}))},a.mZ=function(n){this.aZ.textContent=n+1},a.updateProgress=function(n,i,t,e){var a=this;this.mutateElement((function(){a.sZ(n),a.pZ(i,t),a.mZ(i)}))},e}(n.BaseElement),tn=function(n){t(e,n);var i=r(e);function e(n){return i.call(this,n)}var a=e.prototype;return a.isRelayoutNeeded=function(){return!0},a.isLayoutSupported=function(n){return _(J(this.win,"amp-inline-gallery-captions")||'expected "amp-inline-gallery-captions" experiment to be enabled'),k(n)},a.layoutCallback=function(){var n,i,t=this.getLayoutBox().height;F((n=this.element,i="amp-inline-gallery",n.closest?n.closest(i):function(n,i,t){var e;for(e=n;e&&void 0!==e;e=e.parentElement)if(i(e))return e;return null}(n,(function(n){return x(n,i)}))),{"--i-amphtml-caption-height":"".concat(t,"px")})},a.updateProgress=function(n,i,t,e){var a=this;this.mutateElement((function(){a.fZ(e,i,t)}))},a.fZ=function(n,i,t){n.forEach((function(n,e){var a=Math.abs(i+t-e),l=Y(Math.min(2*a,1),3);F(n,{"--caption-opacity":l,"pointer-events":0==l?"none":"all"})}))},e}(n.BaseElement),en=function(n){return function(n,i){return function(n,i){T(function(n,i){var t=n.__AMP_SERVICES&&n.__AMP_SERVICES[i];return!(!t||!t.ctor)}(n,i));var t=function(n){var i=n.__AMP_SERVICES;return i||(i=n.__AMP_SERVICES={}),i}(n)[i];return t.obj||(T(t.ctor),T(t.context),t.obj=new t.ctor(t.context),T(t.obj),t.context=null,t.resolve&&t.resolve(t.obj)),t.obj}(n=function(n){return n.__AMP_TOP||(n.__AMP_TOP=n)}(n),i)}(n,"extensions")},an=["<figure class=i-amphtml-inline-gallery-slide-container><div class=i-amphtml-inline-gallery-slide-content-slot></div><figcaption class=i-amphtml-inline-gallery-slide-caption><amp-truncate-text layout=fill><span class=i-amphtml-inline-gallery-slide-caption-slot></span> <button class=i-amphtml-inline-gallery-slide-see-more slot=collapsed>See more</button><div class=i-amphtml-inline-gallery-slide-persistent-slot slot=persistent></div></amp-truncate-text></figcaption></figure>"],ln=function(n){t(a,n);var i=r(a),e=a.prototype;function a(n){return i.call(this,n)}return e.rZ=function(){var n=this;_(J(this.win,"amp-inline-gallery-captions")||'expected "amp-inline-gallery-captions" experiment to be enabled');var i=W(this.element)(an);return i.querySelector('[slot="collapsed"]').addEventListener("click",(function(i){n.openLightbox(),i.stopPropagation()})),i},e.openLightbox=function(){var n=this;en(this.win).installExtensionForDoc(this.getAmpDoc(),"amp-lightbox-gallery").then((function(){return document.querySelector("amp-lightbox-gallery").getImpl()})).then((function(i){i.open(n.element,!0)}))},e.isLayoutSupported=function(){return O},e.buildCallback=function(){var n=this.rZ(),i=n.querySelector(".i-amphtml-inline-gallery-slide-caption-slot"),t=n.querySelector(".i-amphtml-inline-gallery-slide-content-slot"),e=n.querySelector(".i-amphtml-inline-gallery-slide-persistent-slot"),a=o(this.element.childNodes);a.filter((function(n){return n.hasAttribute&&"caption"===n.getAttribute("slot")})).forEach((function(n){return i.appendChild(n)})),a.filter((function(n){return!n.hasAttribute||!n.hasAttribute("slot")})).forEach((function(n){return t.appendChild(n)})),a.filter((function(n){return n.hasAttribute&&"attribution"===n.getAttribute("slot")})).forEach((function(n){return e.appendChild(n)})),this.element.appendChild(n)},a}(n.BaseElement),rn="amp-carousel:offsetchange",on="amp-carousel:indexchange",sn=["<div class=i-amphtml-inline-gallery-thumbnails-container><div class=i-amphtml-inline-gallery-thumbnails-thumbnail><div class=i-amphtml-inline-gallery-thumbnails-resizer></div></div></div>"],un=['<amp-base-carousel layout=fill loop=true mixed-length=true snap=false snap-align=center controls="(pointer: fine) always, never" aria-hidden=true></amp-base-carousel>'],cn=function(n){t(e,n);var i=r(e);function e(n){var t;return(t=i.call(this,n)).gZ=null,t.hZ=null,t}e.prerenderAllowed=function(){return!0};var a=e.prototype;return a.isLayoutSupported=function(n){return k(n)},a.buildCallback=function(){var n=Number(this.element.getAttribute("aspect-ratio-width"))||0,i=Number(this.element.getAttribute("aspect-ratio-height"))||0;n&&i&&(this.hZ=n/i),this.element.addEventListener(rn,(function(n){n.stopPropagation()})),this.element.addEventListener(on,(function(n){n.stopPropagation()}))},a.setSlides=function(n){var i=this,t=n.map((function(n,t){return i.dZ(n,t)}));this.mutateElement((function(){i.vZ(t)}))},a.dZ=function(n,i){var t=this,e=W(this.element)(sn),a=n.offsetWidth/n.offsetHeight,l=this.hZ||a||1;return function(n,i,t,e,a){var l=B(n.style,"padding-right",void 0);if(l){var r=t+"%";n.style.setProperty($(l),r)}}(e.querySelector(".i-amphtml-inline-gallery-thumbnails-resizer"),0,100*l),e.querySelector(".i-amphtml-inline-gallery-thumbnails-thumbnail").appendChild(this.yZ(n)),e.onclick=function(){t.element.dispatchEvent(N(t.win,K,{"index":i},{bubbles:!0})),t.gZ.getImpl().then((function(n){n.goToSlide(i,{smoothScroll:!0})}))},e},a.bZ=function(){var n=document.createElement("div");return n.className="i-amphtml-inline-gallery-thumbnails-default",n},a.yZ=function(n){var i=x(n,"amp-img, img")?n:y(n,"> amp-img, > img");if(!i)return this.bZ();var t=document.createElement("amp-img");t.className="i-amphtml-inline-gallery-thumbnails-image",t.setAttribute("layout","fill");var e=i.getAttribute("src");e&&t.setAttribute("src",e);var a=i.getAttribute("srcset");a&&t.setAttribute("srcset",a);var l=i.getAttribute("sizes");return l&&t.setAttribute("sizes",l),t},a.vZ=function(n){this.gZ&&this.element.removeChild(this.gZ);var i=W(this.element);this.gZ=i(un);for(var t,e=c(n,!0);!(t=e()).done;){var a=t.value;this.gZ.appendChild(a)}(function(n,i,t,e){for(var a,l,r=c(s(a=["loop"])?a:[a],!0);!(l=r()).done;){var o=l.value,u=i.getAttribute(o);null!==u&&t.setAttribute(o,u)}})(0,this.element,this.gZ),this.element.appendChild(this.gZ)},e}(n.BaseElement),pn="> amp-base-carousel, :not(amp-inline-gallery-thumbnails) > amp-base-carousel",mn=function(n){t(e,n);var i=r(e);function e(n){return i.call(this,n)}e.prerenderAllowed=function(){return!0};var a=e.prototype;return a.buildCallback=function(){var n=this;this.element.addEventListener(rn,(function(i){n.xZ(i)})),this.element.addEventListener(on,(function(i){n.wZ(i)})),this.element.addEventListener(K,(function(i){n.jZ(i)})),Promise.all([y(this.element,pn).getImpl(),Promise.all(o(b(this.element,"amp-inline-gallery-thumbnails")).map((function(n){return n.getImpl()})))]).then((function(n){var i=n[0],t=n[1],e=i.getSlides();o(t).forEach((function(n){return n.setSlides(e)}))}))},a.isLayoutSupported=function(n){return"container"===n},a.OZ=function(n,i,t,e){w(b(this.element,"amp-inline-gallery-pagination, amp-inline-gallery-captions"),(function(a){a.getImpl().then((function(a){a.updateProgress(n,i,t,e)}))}))},a.wZ=function(n){var i=C(n),t=i.total,e=i.index,a=i.slides;this.OZ(t,e,0,a)},a.xZ=function(n){var i=C(n),t=i.total,e=i.index,a=i.offset,l=i.slides;this.OZ(t,e,a,l)},a.jZ=function(n){var i=C(n).index;w(b(this.element,pn),(function(n){n.getImpl().then((function(n){n.goToSlide(i,{smoothScroll:!0})}))}))},e}(n.BaseElement);n.registerElement("amp-inline-gallery-captions",tn,"amp-inline-gallery-captions{pointer-events:none;padding-top:var(--caption-margin-top);margin-top:calc(var(--i-amphtml-caption-height, 0)*-1)}\n/*# sourceURL=/extensions/amp-inline-gallery/0.1/amp-inline-gallery-captions.css*/"),n.registerElement("amp-inline-gallery-pagination",nn,"amp-inline-gallery-pagination{font-size:12px;font-family:sans-serif;line-height:1}.i-amphtml-inline-gallery-pagination-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%}.i-amphtml-inline-gallery-pagination-dots{-ms-flex-item-align:center;align-self:center;z-index:0;-ms-flex-align:center;align-items:center;height:100%;max-width:60%}.i-amphtml-inline-gallery-pagination-dot-container,.i-amphtml-inline-gallery-pagination-dots{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.i-amphtml-inline-gallery-pagination-dot-container{z-index:1;width:16px;min-width:14px}.i-amphtml-inline-gallery-pagination-dot{position:relative;background-color:rgba(0,0,0,0.2)}.i-amphtml-inline-gallery-pagination-dot-progress{position:absolute;top:0;background-color:rgba(0,0,0,0.6);opacity:0;opacity:calc(1 - var(--percentage-falloff))}[i-amphtml-inline-gallery-pagination-dot-active=true] .i-amphtml-inline-gallery-pagination-dot-progress{opacity:1;opacity:calc(1 - var(--percentage-falloff))}.i-amphtml-inline-gallery-pagination-dot,.i-amphtml-inline-gallery-pagination-dot-progress{width:8px;height:8px;border-radius:50%}.i-amphtml-inline-gallery-pagination-numbers{position:relative;-ms-flex-item-align:end;align-self:flex-end;z-index:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:100%;padding:0 8px}.i-amphtml-inline-gallery-pagination-count{z-index:1}.i-amphtml-inline-gallery-pagination-dots[hidden],.i-amphtml-inline-gallery-pagination-numbers[hidden]{display:none}amp-inline-gallery-pagination[inset]:not(.i-amphtml-hidden-by-media-query){position:absolute!important;left:0;right:0;bottom:0;bottom:var(--i-amphtml-caption-height,0);display:-ms-flexbox!important;display:flex!important}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-container{margin:18px;height:20px}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-backdrop,amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-background,amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-frosting{position:absolute;top:0;bottom:0;left:0;right:0;border-radius:12px}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-frosting{-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-backdrop{-webkit-backdrop-filter:blur(12px) invert(1) grayscale(0.6) brightness(0.8);backdrop-filter:blur(12px) invert(1) grayscale(0.6) brightness(0.8);opacity:0.5}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-background{background-color:rgba(0,0,0,0.3)}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-dots{padding:0 4px}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-numbers{color:#fff}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-dot{background-color:hsla(0,0%,100%,0.35)}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-dot-progress{background-color:#fff}\n/*# sourceURL=/extensions/amp-inline-gallery/0.1/amp-inline-gallery-pagination.css*/"),n.registerElement("amp-inline-gallery-slide",ln,"amp-inline-gallery-slide{position:static!important;transform:none!important;will-change:auto!important}amp-inline-gallery-slide.i-amphtml-layout-size-defined{overflow:visible!important}.i-amphtml-inline-gallery-slide-container{width:100%;height:100%;margin:0}.i-amphtml-inline-gallery-slide-content-slot{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:calc(100% - var(--i-amphtml-caption-height, 0px));transform:var(--content-transform,translateZ(1px));will-change:transform;overflow:hidden}.i-amphtml-inline-gallery-slide-caption{position:absolute;left:6px;right:6px;margin-top:var(--caption-margin-top);height:var(--i-amphtml-caption-height,0);overflow:hidden;opacity:var(--caption-opacity)}.i-amphtml-inline-gallery-slide-see-more{float:right;padding:0 0 0 6px;border:0;color:#48f;background-color:transparent;outline:none;font-family:inherit;font-size:inherit;line-height:1.25em}.i-amphtml-inline-gallery-slide-persistent-slot{clear:both}.i-amphtml-inline-gallery-slide-content-slot>*{height:100%;width:100%}\n/*# sourceURL=/extensions/amp-inline-gallery/0.1/amp-inline-gallery-slide.css*/"),n.registerElement("amp-inline-gallery-thumbnails",cn,"amp-inline-gallery-thumbnails .i-amphtml-carousel-content{padding:0;padding:0 calc(var(--thumbnail-margin, 0)/2)}.i-amphtml-inline-gallery-thumbnails-container{box-sizing:border-box;width:auto!important;height:100%;-ms-flex-preferred-size:content;flex-basis:content;padding:0;padding:var(--thumbnail-margin,0) calc(var(--thumbnail-margin, 0)/2);-ms-writing-mode:tb-lr;writing-mode:vertical-lr}.i-amphtml-inline-gallery-thumbnails-thumbnail{position:relative;width:auto;height:100%}.i-amphtml-inline-gallery-thumbnails-resizer{position:static;height:100%}.i-amphtml-inline-gallery-thumbnails-default,.i-amphtml-inline-gallery-thumbnails-image{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-inline-gallery-thumbnails-default{background-color:#999}\n/*# sourceURL=/extensions/amp-inline-gallery/0.1/amp-inline-gallery-thumbnails.css*/"),n.registerElement("amp-inline-gallery",mn,"amp-inline-gallery{--i-amphtml-caption-height:0px}amp-inline-gallery>amp-base-carousel{padding-bottom:var(--i-amphtml-caption-height)}amp-inline-gallery .i-amphtml-base-carousel-arrow-next-slot,amp-inline-gallery .i-amphtml-base-carousel-arrow-prev-slot{margin-bottom:var(--i-amphtml-caption-height)}\n/*# sourceURL=/extensions/amp-inline-gallery/0.1/amp-inline-gallery.css*/")}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-inline-gallery-0.1.js.map