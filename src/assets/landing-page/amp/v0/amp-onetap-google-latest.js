;
(self.AMP=self.AMP||[]).push({m:0,v:"2203281422000",n:"amp-onetap-google",ev:"0.1",l:!0,f:function(t,n){!function(){function n(t,e){return(n=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,e)}function e(t){return(e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,n){if(n&&("object"===r(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}Array.isArray;var o=Object.prototype,u=(o.hasOwnProperty,o.toString);function f(t){var n=Object.create(null);return t&&Object.assign(n,t),n}var s,a=["Webkit","webkit","Moz","moz","ms","O","o"];function c(t,n){void 0===n&&(n=t.hasAttribute("hidden")),n?t.removeAttribute("hidden"):t.setAttribute("hidden","")}var l=self.AMP_CONFIG||{},h=("string"==typeof l.thirdPartyFrameRegex?new RegExp(l.thirdPartyFrameRegex):l.thirdPartyFrameRegex,("string"==typeof l.cdnProxyRegex?new RegExp(l.cdnProxyRegex):l.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function v(t){if(!self.document||!self.document.head)return null;if(self.location&&h.test(self.location.origin))return null;var n=self.document.head.querySelector('meta[name="'.concat(t,'"]'));return n&&n.getAttribute("content")||null}l.thirdPartyUrl,l.thirdPartyFrameHost,l.cdnUrl||v("runtime-host"),l.errorReportingUrl,l.betaErrorReportingUrl,l.localDev,l.geoApiUrl||v("amp-geo-api"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var p=self.__AMP_LOG;function m(t,n){throw new Error("failed to call initLogConstructor")}function d(t){return p.user||(p.user=b()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(p.user.win,t)?p.userForEmbed||(p.userForEmbed=b()):p.user}function b(t){return m()}function g(t,n,e,r,i,o,u,f,s,a,c){return t}function y(t,n,e,r,i,o,u,f,s,a,c){return d().assert(t,n,e,r,i,o,u,f,s,a,c)}var w=function(){var t=this;this.promise=new Promise((function(n,e){t.resolve=n,t.reject=e}))};function _(t,n){return R(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n)}function j(t,n){var e=O(k(t));return z(e,n)?R(e,n):null}function x(t,n){return S(O(t),n)}function k(t){return t.nodeType?(e=t,n=(e.ownerDocument||e).defaultView,_(n,"ampdoc")).getAmpDoc(t):t;var n,e}function O(t){var n=k(t);return n.isSingleDoc()?n.win:n}function R(t,n){g(z(t,n));var e=E(t)[n];return e.obj||(g(e.ctor),g(e.context),e.obj=new e.ctor(e.context),g(e.obj),e.context=null,e.resolve&&e.resolve(e.obj)),e.obj}function S(t,n){var e=E(t)[n];return e?e.promise?e.promise:(R(t,n),e.promise=Promise.resolve(e.obj)):null}function E(t){var n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}function z(t,n){var e=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!e||!e.ctor)}var P,A=function(t){return function(t,n,e,r){var i=x(t,n);if(i)return i;var o=k(t);return o.whenExtensionsKnown().then((function(){var t=o.getExtensionVersion(e);return t?_(o.win,"extensions").waitForExtension(e,t):null})).then((function(e){return e?function(t,n){return function(t,n){var e=S(t,n);if(e)return e;var r,i,o,u,f=E(t);return f[n]=(i=(r=new w).promise,o=r.reject,u=r.resolve,i.catch((function(){})),{obj:null,promise:i,resolve:u,reject:o,context:null,ctor:null}),f[n].promise}(O(t),n)}(t,n):null}))}(t,"subscriptions","amp-subscriptions")};function B(t,n,e,r){return function(t,n,e,r){var i=t,o=e,u=function(t){try{return o(t)}catch(t){var n,e;throw null===(n=(e=self).__AMP_REPORT_ERROR)||void 0===n||n.call(e,t),t}},f=function(){if(void 0!==P)return P;P=!1;try{var t={get capture(){return P=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return P}(),s=!(null==r||!r.capture);return i.addEventListener(n,u,f?r:s),function(){null==i||i.removeEventListener(n,u,f?r:s),o=null,i=null,u=null}}(t,n,e,r)}var L,N,T=function(){function t(t){this.St=t,this.It=0,this.Ct=0,this.Ot=f()}var n=t.prototype;return n.has=function(t){return!!this.Ot[t]},n.get=function(t){var n=this.Ot[t];if(n)return n.access=++this.Ct,n.payload},n.put=function(t,n){this.has(t)||this.It++,this.Ot[t]={payload:n,access:this.Ct},this.Rt()},n.Rt=function(){if(!(this.It<=this.St)){var t,n=this.Ot,e=this.Ct+1;for(var r in n){var i=n[r].access;i<e&&(e=i,t=r)}void 0!==t&&(delete n[t],this.It--)}},t}(),U=(new Set(["c","v","a","ad"]),function(t){return"string"==typeof t?function(t,n){return L||(L=self.document.createElement("a"),N=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new T(100))),function(t,n,e){if(e&&e.has(n))return e.get(n);t.href=n,t.protocol||(t.href=t.href);var r,i={href:t.href,protocol:t.protocol,host:t.host,hostname:t.hostname,port:"0"==t.port?"":t.port,pathname:t.pathname,search:t.search,hash:t.hash,origin:null};"/"!==i.pathname[0]&&(i.pathname="/"+i.pathname),("http:"==i.protocol&&80==i.port||"https:"==i.protocol&&443==i.port)&&(i.port="",i.host=i.hostname),r=t.origin&&"null"!=t.origin?t.origin:"data:"!=i.protocol&&i.host?i.protocol+"//"+i.host:i.href,i.origin=r;var o=i;return e&&e.put(n,o),o}(L,t,N)}(t):t});function Z(t){return"https:"==(t=U(t)).protocol||"localhost"==t.hostname||"127.0.0.1"==t.hostname||(e=".localhost",(r=(n=t.hostname).length-e.length)>=0&&n.indexOf(e,r)==r);var n,e,r}var C="amp-onetap-google",D="onetap_google",F=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}(h,t);var r,o,l=(r=h,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=e(r);if(o){var u=e(this).constructor;t=Reflect.construct(n,arguments,u)}else t=n.apply(this,arguments);return i(this,t)});function h(t){var n;return(n=l.call(this,t)).tb=null,n.Qut=!0,n.Xg=null,n}var v=h.prototype;return v.isLayoutSupported=function(t){return"nodisplay"==t},v.buildCallback=function(){var t=this;this.getAmpDoc().whenFirstVisible().then((function(){t.Xut(function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"source";return y(null!=t,"%s %s must be available",n,e),y(Z(t)||/^\/\//.test(t),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',n,e,t),t}(t.element.dataset.src,t.element))}))},v.cb=function(t,n,e){t.postMessage(n,e)},v.eft=function(t,n){var e=this;if(this.tb&&n.source==this.tb.contentWindow&&n.origin===t){var r,i=function(t){return t.data}(n);if(r=i,"[object Object]"===u.call(r)&&i.sentinel==D)switch(i.command){case"intermediate_iframe_ready":var o=i.nonce;if(!o)return;this.cb(n.source,{"sentinel":D,"command":"parent_frame_ready","nonce":o},n.origin);break;case"intermediate_iframe_resize":var l=i.height;"number"==typeof l&&!isNaN(l)&&l>0&&this.mutateElement((function(){c(e.element,l>0),function(t,n,e,r,i){var o=function(t,n,e){if(n.startsWith("--"))return n;s||(s=f());var r=s[n];if(!r||e){if(r=n,void 0===t[n]){var i=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(n),o=function(t,n){for(var e=0;e<a.length;e++){var r=a[e]+n;if(void 0!==t[r])return r}return""}(t,i);void 0!==t[o]&&(r=o)}e||(s[n]=r)}return r}(t.style,n,i);if(o){var u,c=r?e+r:e;t.style.setProperty((u=o.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()})),a.some((function(t){return u.startsWith(t+"-")}))?"-".concat(u):u),c)}}(e.tb,"height",function(t){return"".concat(t,"px")}(i.height))}));break;case"intermediate_iframe_close":this.mutateElement((function(){e.HS()}));break;case"intermediate_iframe_done":this.mutateElement((function(){e.HS(),e.oft()}));break;case"set_ui_mode":var h=i.mode;if(!h)return;this.uft(h);break;case"set_tap_outside_mode":this.Qut=!!i.cancel;break;default:(p.dev||(p.dev=m())).warn(C,"Unknown action type: ".concat(i.command))}}},v.uft=function(t){var n=this;this.mutateElement((function(){n.tb.classList.add("i-amphtml-onetap-google-ui-".concat(t))}))},v.oft=function(){Promise.all([this.fft(),this.sft()]).then((function(t){t.reduce((function(t,n){return t||n}))||d().warn(C,"Sign-in was completed, but there were no entitlements to refresh. Please include amp-access or amp-subscriptions.")}))},v.fft=function(){var t,n=this.getAmpDoc().getElementById("amp-access");return!!n&&((t=this.element,j(t,"action")).execute(n,"refresh",null,null,null,null,2),!0)},v.sft=function(){return A(this.element).then((function(t){return!!t&&(t.resetPlatforms(),!0)}))},v.Xut=function(t){var n,e=this;this.tb||(this.tb=this.getAmpDoc().win.document.createElement("iframe"),(n=this.element,j(n,"url-replace")).expandUrlAsync(t).then((function(t){e.win&&e.WR(t)})))},v.WR=function(t){var n=this;g(this.tb),c(this.element,!1);var e,r=(e=this.element,j(e,"url")).parse(t).origin;this.Xg=[B(this.win,"message",(function(t){n.eft(r,t)})),B(this.getAmpDoc().getRootNode(),"click",(function(){n.Qut&&!n.element.hasAttribute("hidden")&&n.HS()}))],this.tb.classList.add("i-amphtml-onetap-google-iframe"),this.tb.src=t,this.element.appendChild(this.tb),this.getViewport().addToFixedLayer(this.tb)},v.HS=function(){var t,n;if(this.tb&&(c(this.element,!1),null===(n=(t=this.tb).parentElement)||void 0===n||n.removeChild(t),this.tb=null,this.Xg))for(;this.Xg.length>0;)this.Xg.pop()()},h}(t.BaseElement);t.registerElement(C,F,".i-amphtml-onetap-google-iframe{z-index:2147483647;border:none;position:fixed}.i-amphtml-onetap-google-ui-card{width:391px;right:20px;top:20px}.i-amphtml-onetap-google-ui-bottom_sheet{right:auto;left:0;top:auto;bottom:0;width:100%}\n/*# sourceURL=/extensions/amp-onetap-google/0.1/amp-onetap-google.css*/")}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-onetap-google-0.1.js.map