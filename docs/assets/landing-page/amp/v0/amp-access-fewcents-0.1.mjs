;
(self.AMP=self.AMP||[]).push({m:1,v:"2203281422000",n:"amp-access-fewcents",ev:"0.1",l:!1,f:function(t,e){(()=>{var{hasOwnProperty:e,toString:n}=Object.prototype;function i(t,e,n){return function(t,e){for(const n in e)t.setAttribute(n,e[n]);return t}(t.createElement(e),n)}var r=self.AMP_CONFIG||{},s=("string"==typeof r.thirdPartyFrameRegex?new RegExp(r.thirdPartyFrameRegex):r.thirdPartyFrameRegex,("string"==typeof r.cdnProxyRegex?new RegExp(r.cdnProxyRegex):r.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function a(t){if(!self.document||!self.document.head)return null;if(self.location&&s.test(self.location.origin))return null;const e=self.document.head.querySelector(`meta[name="${t}"]`);return e&&e.getAttribute("content")||null}r.thirdPartyUrl,r.thirdPartyFrameHost,r.cdnUrl||a("runtime-host"),r.errorReportingUrl,r.betaErrorReportingUrl,r.localDev,r.geoApiUrl||a("amp-geo-api"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var o,c=self.__AMP_LOG;function l(t){return c.user||(c.user=u()),function(t,e){return e&&e.ownerDocument.defaultView!=t}(c.user.win,t)?c.userForEmbed||(c.userForEmbed=u()):c.user}function u(t){return function(t,e){throw new Error("failed to call initLogConstructor")}()}function f(t,e,n,i,r,s,a,o,c,l,u){return t}function h(t,e){return x(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),e)}function p(t,e){return function(t,e){const n=w(t,e);if(n)return n;const i=v(t);return i[e]=function(){const t=new class{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}},{promise:e,reject:n,resolve:i}=t;return e.catch((()=>{})),{obj:null,promise:e,resolve:i,reject:n,context:null,ctor:null}}(),i[e].promise}(g(t),e)}function d(t,e){return w(g(t),e)}function m(t){return t.nodeType?(e=t,n=(e.ownerDocument||e).defaultView,h(n,"ampdoc")).getAmpDoc(t):t;var e,n}function g(t){const e=m(t);return e.isSingleDoc()?e.win:e}function x(t,e){f(function(t,e){const n=t.__AMP_SERVICES&&t.__AMP_SERVICES[e];return!(!n||!n.ctor)}(t,e));const n=v(t)[e];return n.obj||(f(n.ctor),f(n.context),n.obj=new n.ctor(n.context),f(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}function w(t,e){const n=v(t)[e];return n?n.promise?n.promise:(x(t,e),n.promise=Promise.resolve(n.obj)):null}function v(t){let e=t.__AMP_SERVICES;return e||(e=t.__AMP_SERVICES={}),e}function b(t,e,n,i){return function(t,e,n,i){const r=d(t,e);if(r)return r;const s=m(t);return s.whenExtensionsKnown().then((()=>{const t=s.getExtensionVersion(n);return t?h(s.win,"extensions").waitForExtension(n,t):null})).then((n=>n?i?d(t,e):p(t,e):null))}(t,e,n,i).then((t=>function(t,e,n){return i=t,r=e,s=n,a=n,o=n,l().assert(i,"Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.",r,s,a,o,void 0,void 0,void 0,void 0,void 0);var i,r,s,a,o}(t,e,n)))}var _,P,R={fcTitleText:"Instant Access With Fewcents.",fcPromptText:"I already bought this",fcButtonText:"Unlock",fcPoweredImageRef:"https://images.fewcents.co/paywall/powered-fewcents.png",fcTermsRef:"https://www.fewcents.co/terms",fcPrivacyRef:"https://www.fewcents.co/privacy",fcContactUsRef:"mailto:support@fewcents.co"};function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function E(t,e,n,i){return function(t,e,n,i){let r=t,s=n,a=t=>{try{return s(t)}catch(t){var e,n;throw null===(e=(n=self).__AMP_REPORT_ERROR)||void 0===e||e.call(n,t),t}};const o=function(){if(void 0!==_)return _;_=!1;try{const t={get capture(){return _=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return _}(),c=!(null==i||!i.capture);return r.addEventListener(e,a,o?i:c),()=>{null==r||r.removeEventListener(e,a,o?i:c),s=null,r=null,a=null}}(t,e,n,i)}function I(t,e,n){if(e[n])return e[n];const i=t.querySelector(`style[${n}], link[${n}]`);return i?(e[n]=i,i):null}function T(t,e){const n=t.styleSheets;for(let t=0;t<n.length;t++)if(n[t].ownerNode==e)return!0;return!1}new Set(["c","v","a","ad"]),t.registerServiceForDoc("fewcents",(function(t){return(t=>b(t,"access","amp-access"))(t.getHeadNode()).then((t=>{const e=t.getVendorSource("fewcents"),n=new class{constructor(t,e){this.ampdoc=t.ampdoc,this.tR=e,this.mct=null,this.Uft=null,this.Cft=this.tR.getAdapterConfig(),this.Sft=this.Lft(),this.gct=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},R),this.Bft=null,this.eR=h(this.ampdoc.win,"xhr"),this.Ee=(t=>x(t,"timer"))(this.ampdoc.win),this.br=(t=>h(t,"vsync"))(this.ampdoc.win),this.uct=null,this.$ft=null,function(t,e,n,i,r){const s=t.getHeadNode(),a=function(t,e,n,i){let r=t.__AMP_CSS_SM;r||(r=t.__AMP_CSS_SM=Object.create(null));const s=!n&&i&&"amp-custom"!=i&&"amp-keyframes"!=i,a=n?"amp-runtime":s?`amp-extension=${i}`:null;if(a){const n=I(t,r,a);if(n)return"STYLE"==n.tagName&&n.textContent!==e&&(n.textContent=e),n}const o=(t.ownerDocument||t).createElement("style");o.textContent=e;let c=null;return n?o.setAttribute("amp-runtime",""):s?(o.setAttribute("amp-extension",i||""),c=I(t,r,"amp-runtime")):(i&&o.setAttribute(i,""),c=t.lastChild),function(t,e,n=null){if(!n)return void function(t,e){t.insertBefore(e,t.firstChild)}(t,e);const i=n.nextSibling;t.insertBefore(e,i)}(t,o,c),a&&(r[a]=o),o}(s,function(t,e){const n=t.__AMP_CSS_TR;return n?n(e):e}(s,e),i||!1,r||null);if(n){const e=t.getRootNode();if(T(e,a))return n(a),a;const i=setInterval((()=>{T(e,a)&&(clearInterval(i),n(a))}),4)}}(this.ampdoc,"#amp-access-fewcents-dialog{padding:20px}.aaf-container{height:auto;width:70%;max-width:540px;-ms-flex-align:center;align-items:center;margin:20px auto auto;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:5px 15px;background-color:#f5f5f5;border:0px;border-radius:5px;opacity:1;transition:opacity 0.5s ease 0s;font-family:Arial;font-weight:400;box-shadow:1px 2px 2px 2px grey;overflow:hidden}.aaf-headerText{font-size:17px;text-align:center;word-wrap:normal;overflow:hidden;margin-top:10px}.aaf-purchase-button{line-height:1.2;cursor:pointer;color:#fff;border:0;background:#08289a;width:100%;border-radius:5px;height:40px;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-size:16px;outline:none;margin:auto;padding:0px 25px;max-width:160px}.aaf-imageTag{max-height:30px}.aaf-already-bought{font-size:13px;font-weight:500;text-align:center;margin-top:4px;color:#08289a}.aaf-price-btn-div{display:-ms-flexbox;display:flex;place-content:center space-evenly;-ms-flex-align:center;align-items:center;margin:12px auto 0px;max-width:250px}.aaf-article-price{font-size:24px;font-weight:400;text-align:center;margin-right:10px;color:#000}.aaf-btn-div{line-height:1.2;margin-top:0.5 rem;text-align:center}.aaf-bottom-div{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.aaf-fewcents-image-tag{max-height:45px}.aaf-refRow{word-break:break-word}.aaf-refElements,.aaf-refRow{text-align:center;color:#a8a3a3}.aaf-refElements{padding:4px;font-size:11px;white-space:nowrap}.aaf-partition-bar{font-size:11px;margin:0px 4px}@media (max-width:786px){#amp-access-fewcents-dialog{width:350px}}\n/*# sourceURL=/extensions/amp-access-fewcents/0.1/amp-access-fewcents.css*/",(()=>{}),!1,"amp-access-fewcents")}authorize(){return this.Nft().then((t=>(this.vct(),{access:t.data.access,data:JSON.stringify(t)})),(t=>{if(!t||!t.response)throw t;const{response:e}=t;if(402!==e.status)throw t;return e.json().catch((()=>{throw t})).then((t=>(this.Dft(t),this.vct().then(this.Rct.bind(this)),{access:!1,data:JSON.stringify(t)})))})).catch((()=>(this.vct(),{access:!0})))}Lft(){const t=this.Cft.accessKey,e=this.Cft.articleIdentifier,n=this.Cft.category,{hostname:i}=(P||(P=self.document.createElement("a")),(r=P).href="",new URL(void 0,r.href));var r;return this.Jft()+"v1/amp/authorizeBid?articleUrl=SOURCE_URL&ampReaderId=READER_ID&returnUrl=RETURN_URL&accessKey="+encodeURIComponent(t)+"&category="+encodeURIComponent(n)+"&articleIdentifier="+encodeURIComponent(e)+"&domain="+encodeURIComponent(i)}Jft(){const t=this.Cft.environment;return"development"===t?"https://api.hounds.fewcents.co/":"demo"===t?"https://api.demo.fewcents.co/":"https://api.fewcents.co/"}Dft(t){var e,n,i;const r=null==t||null===(e=t.data)||void 0===e?void 0:e.purchaseOptions;this.uct=null==r?void 0:r[0],this.$ft=null==t||null===(n=t.data)||void 0===n?void 0:n.loginUrl;const s=null==t||null===(i=t.data)||void 0===i?void 0:i.bidId;s&&(this.Bft=s)}Nft(){let t=this.Sft;return this.Bft&&(t=t+"&bidId="+this.Bft),this.tR.buildUrl(t,!1).then((t=>this.tR.getLoginUrl(t))).then((t=>this.Ee.timeoutPromise(1e4,this.eR.fetchJson(t,{})).then((t=>t.json()))))}vct(){return this.dct?o||(o=Promise.resolve(void 0)):(this.qft&&(this.qft=null),this.pct&&(this.pct=null),this.br.mutatePromise((()=>{this.dct=!0,this.mct=null,function(t){for(;t.firstChild;)t.removeChild(t.firstChild)}(this.Hft())})))}Hft(){const t=this.Cft.contentSelector,e=this.ampdoc.getElementById(t);return l().assertElement(e,"No element found with given id",t)}Rct(){this.Uft=this.Hft(),this.mct=i(this.ampdoc.win.document,"div",{class:"aaf-container"}),this.Kft(),this.Wft(),this.Yft();const t=i(this.ampdoc.win.document,"div",{class:"aaf-bottom-div"}),e=this.Zft();t.appendChild(e);const n=i(this.ampdoc.win.document,"img",{class:"aaf-fewcents-image-tag",src:this.gct.fcPoweredImageRef});t.appendChild(n),this.mct.appendChild(t),this.Uft.appendChild(this.mct),this.dct=!1}Kft(){const t=i(this.ampdoc.win.document,"img",{class:"aaf-imageTag",src:this.Cft.publisherLogoUrl});this.mct.appendChild(t);const e=i(this.ampdoc.win.document,"div",{class:"aaf-headerText"});e.textContent=this.gct.fcTitleText,this.mct.appendChild(e)}Wft(){const t=i(this.ampdoc.win.document,"a",{class:"aaf-already-bought",href:this.$ft,target:"_blank",rel:"noopener noreferrer"});t.textContent=this.gct.fcPromptText,this.pct=E(t,"click",(t=>{this.jct(t)})),this.mct.appendChild(t)}Yft(){var t,e;const n=i(this.ampdoc.win.document,"div",{class:"aaf-price-btn-div"});this.mct.appendChild(n);const r=i(this.ampdoc.win.document,"div",{class:"aaf-article-price"});r.textContent=null===(t=this.uct)||void 0===t||null===(e=t.price)||void 0===e?void 0:e.price,n.appendChild(r);const s=i(this.ampdoc.win.document,"div",{class:"aaf-btn-div"}),a=i(this.ampdoc.win.document,"button",{class:"aaf-purchase-button",style:"background:".concat(this.Cft.primaryColor)});a.textContent=this.gct.fcButtonText,this.qft=E(a,"click",(t=>{this.jct(t)})),s.appendChild(a),n.appendChild(s)}Zft(){const t=i(this.ampdoc.win.document,"div",{class:"aaf-refRow"}),e=i(this.ampdoc.win.document,"a",{class:"aaf-refElements",href:this.gct.fcTermsRef,target:"_blank",rel:"noopener noreferrer"});e.textContent="Terms",t.appendChild(e),this.Gft(t);const n=i(this.ampdoc.win.document,"a",{class:"aaf-refElements",href:this.gct.fcPrivacyRef,target:"_blank",rel:"noopener noreferrer"});n.textContent="Privacy",t.appendChild(n),this.Gft(t);const r=i(this.ampdoc.win.document,"a",{class:"aaf-refElements",href:this.gct.fcContactUsRef,target:"_blank",rel:"noopener noreferrer"});return r.textContent="Contact Us",t.appendChild(r),this.Gft(t),t}Gft(t){const e=i(this.ampdoc.win.document,"span",{class:"aaf-partition-bar"});e.textContent="|",t.appendChild(e)}jct(t){return t.preventDefault(),this.tR.buildUrl(this.$ft,!1).then((t=>{this.tR.loginWithUrl(t)}))}}(t,e);return e.getAdapter().registerVendor(n),n}))}))})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-access-fewcents-0.1.mjs.map