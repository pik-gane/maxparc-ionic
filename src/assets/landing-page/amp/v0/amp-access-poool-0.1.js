;
(self.AMP=self.AMP||[]).push({m:0,v:"2203281422000",n:"amp-access-poool",ev:"0.1",l:!0,f:function(n,t){!function(){var t=Array.isArray;function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=n[r];return i}function i(n,t){var i="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(i)return(i=i.call(n)).next.bind(i);if(Array.isArray(n)||(i=function(n,t){if(n){if("string"==typeof n)return r(n,t);var i=Object.prototype.toString.call(n).slice(8,-1);return"Object"===i&&n.constructor&&(i=n.constructor.name),"Map"===i||"Set"===i?Array.from(n):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?r(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){i&&(n=i);var e=0;return function(){return e>=n.length?{done:!0}:{done:!1,value:n[e++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var e=Object.prototype;function o(n){var t=Object.create(null);return n&&Object.assign(t,n),t}function u(n,t){try{return function(n){return JSON.parse(n)}(n)}catch(n){return null==t||t(n),null}}e.hasOwnProperty,e.toString;var f=self.AMP_CONFIG||{},a=("string"==typeof f.thirdPartyFrameRegex?new RegExp(f.thirdPartyFrameRegex):f.thirdPartyFrameRegex,("string"==typeof f.cdnProxyRegex?new RegExp(f.cdnProxyRegex):f.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function s(n){if(!self.document||!self.document.head)return null;if(self.location&&a.test(self.location.origin))return null;var t=self.document.head.querySelector('meta[name="'.concat(n,'"]'));return t&&t.getAttribute("content")||null}f.thirdPartyUrl,f.thirdPartyFrameHost,f.cdnUrl||s("runtime-host"),f.errorReportingUrl,f.betaErrorReportingUrl,f.localDev,f.geoApiUrl||s("amp-geo-api");var c=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function l(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";try{return decodeURIComponent(n)}catch(n){return t}}function v(n){var t=(n||self).location;return function(n){var t,r=o();if(!n)return r;for(;t=c.exec(n);){var i=l(t[1],t[1]),e=t[2]?l(t[2].replace(/\+/g," "),t[2]):"";r[i]=e}return r}(t.originalHash||t.hash)}var h="";function p(n){var t;return h||(h=(null===(t=n.AMP_CONFIG)||void 0===t?void 0:t.v)||"01".concat("2203281422000")),h}function d(n,t){var r=t||v(n);return["1","actions","amp","amp4ads","amp4email"].includes(r.development)||!!n.AMP_DEV_MODE}function m(n){var t=Object.getOwnPropertyDescriptor(n,"message");if(null!=t&&t.writable)return n;var r=n.message,i=n.stack,e=new Error(r);for(var o in n)e[o]=n[o];return e.stack=i,e}function b(n){for(var t,r=null,e="",o=i(arguments,!0);!(t=o()).done;){var u=t.value;u instanceof Error&&!r?r=m(u):(e&&(e+=" "),e+=u)}return r?e&&(r.message=e+": "+r.message):r=new Error(e),r}function g(n){var t,r;null===(t=(r=self).__AMP_REPORT_ERROR)||void 0===t||t.call(r,n)}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var w,y=self.__AMP_LOG;function E(n,t){throw new Error("failed to call initLogConstructor")}function R(n){return y.user||(y.user=A()),function(n,t){return t&&t.ownerDocument.defaultView!=n}(y.user.win,n)?y.userForEmbed||(y.userForEmbed=A()):y.user}function A(n){return E()}function I(){return y.dev||(y.dev=E())}function O(n,t,r,i,e,o,u,f,a,s,c){return n}function j(n,t,r,i,e,o,u,f,a,s,c){return R().assert(n,t,r,i,e,o,u,f,a,s,c)}var S=function(){var n=this;this.promise=new Promise((function(t,r){n.resolve=t,n.reject=r}))};function x(n,t){return k(n=function(n){return n.__AMP_TOP||(n.__AMP_TOP=n)}(n),t)}function C(n,t){return k(N(U(n)),t)}function D(n,t){return L(N(n),t)}function U(n){return n.nodeType?(r=n,t=(r.ownerDocument||r).defaultView,x(t,"ampdoc")).getAmpDoc(n):n;var t,r}function N(n){var t=U(n);return t.isSingleDoc()?t.win:t}function k(n,t){O(function(n,t){var r=n.__AMP_SERVICES&&n.__AMP_SERVICES[t];return!(!r||!r.ctor)}(n,t));var r=M(n)[t];return r.obj||(O(r.ctor),O(r.context),r.obj=new r.ctor(r.context),O(r.obj),r.context=null,r.resolve&&r.resolve(r.obj)),r.obj}function L(n,t){var r=M(n)[t];return r?r.promise?r.promise:(k(n,t),r.promise=Promise.resolve(r.obj)):null}function M(n){var t=n.__AMP_SERVICES;return t||(t=n.__AMP_SERVICES={}),t}function P(n,t,r,i){return function(n,t,r,i){var e=D(n,t);if(e)return e;var o=U(n);return o.whenExtensionsKnown().then((function(){var n=o.getExtensionVersion(r);return n?x(o.win,"extensions").waitForExtension(r,n):null})).then((function(r){return r?i?D(n,t):function(n,t){return function(n,t){var r=L(n,t);if(r)return r;var i,e,o,u,f=M(n);return f[t]=(e=(i=new S).promise,o=i.reject,u=i.resolve,e.catch((function(){})),{obj:null,promise:e,resolve:u,reject:o,context:null,ctor:null}),f[t].promise}(N(n),t)}(n,t):null}))}(n,t,r,i).then((function(n){return function(n,t,r){return j(n,"Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.",t,r,r,r)}(n,t,r)}))}var _,z=["Webkit","webkit","Moz","moz","ms","O","o"];function T(n,t,r,i,e){var u=function(n,t,r){if(t.startsWith("--"))return t;_||(_=o());var i=_[t];if(!i||r){if(i=t,void 0===n[t]){var e=function(n){return n.charAt(0).toUpperCase()+n.slice(1)}(t),u=function(n,t){for(var r=0;r<z.length;r++){var i=z[r]+t;if(void 0!==n[i])return i}return""}(n,e);void 0!==n[u]&&(i=u)}r||(_[t]=i)}return i}(n.style,t,e);if(u){var f,a=i?r+i:r;n.style.setProperty((f=u.replace(/[A-Z]/g,(function(n){return"-"+n.toLowerCase()})),z.some((function(n){return f.startsWith(n+"-")}))?"-".concat(f):f),a)}}function F(n,t){for(var r in t)T(n,r,t[r])}function J(n){return"string"==typeof n&&n.startsWith("amp-")&&-1!=n.indexOf("{")}function G(n){return n.data}var Z,$,q=function(){function n(n){this.St=n,this.It=0,this.Ct=0,this.Ot=o()}var t=n.prototype;return t.has=function(n){return!!this.Ot[n]},t.get=function(n){var t=this.Ot[n];if(t)return t.access=++this.Ct,t.payload},t.put=function(n,t){this.has(n)||this.It++,this.Ot[n]={payload:t,access:this.Ct},this.Rt()},t.Rt=function(){if(!(this.It<=this.St)){var n,t=this.Ot,r=this.Ct+1;for(var i in t){var e=t[i].access;e<r&&(r=e,n=i)}void 0!==n&&(delete t[n],this.It--)}},n}();function B(n,t,r){if(!t)return n;var i=n.split("#",2),e=i[0].split("?",2);return e[0]+(e[1]?r?"?".concat(t,"&").concat(e[1]):"?".concat(e[1],"&").concat(t):"?".concat(t))+(i[1]?"#".concat(i[1]):"")}function H(n,t){return"".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(t))}new Set(["c","v","a","ad"]);var V="unlisten";function W(n,t,r){var i=function(n,t){var r=n.listeningFors;return!r&&t&&(r=n.listeningFors=Object.create(null)),r||null}(n,r);if(!i)return i;var e=i[t];return!e&&r&&(e=i[t]=[]),e||null}function Y(n,t){for(var r=t;r&&r!=r.parent;r=r.parent)if(r==n)return!0;return!1}function K(n){for(var t={"sentinel":V},r=n.length-1;r>=0;r--){var i=n[r];if(!i.frame.contentWindow){n.splice(r,1);var e=i.events;for(var o in e)e[o].splice(0,1/0).forEach((function(n){n(t)}))}}}function Q(n,t,r,i,e,o){O(n.src),O(!n.parentNode),O(r);var f=n.ownerDocument.defaultView;!function(n){n.listeningFors||n.addEventListener("message",(function(t){if(G(t)){var r=function(n){return"string"==typeof n&&(n="{"==n.charAt(0)?u(n,(function(n){I().warn("IFRAME-HELPER","Postmessage could not be parsed. Is it in a valid JSON format?",n)}))||null:J(n)?function(n){if(!J(n))return null;var t=n.indexOf("{");return u(n.substr(t),(function(t){!function(n){var t=b.apply(null,arguments);setTimeout((function(){throw g(t),t}))}(new Error("MESSAGING: Failed to parse message: ".concat(n,"\n").concat(t.message)))}))}(n):null),n}(G(t));if(r&&r.sentinel){var i=function(n,t,r,i){var e,o=W(n,t);if(!o)return o;for(var u=0;u<o.length;u++){var f=o[u],a=f.frame.contentWindow;if(a){if(i==a||Y(a,i)){e=f;break}}else setTimeout(K,0,o)}return e?e.events:null}(n,r.sentinel,t.origin,t.source);if(i){var e=i[r.type];if(e){e=e.slice();for(var o=0;o<e.length;o++)(0,e[o])(r,t.source,t.origin,t)}}}}}))}(f);var a,s,c=function(n,t,r){for(var i,e=function(n,t){return t?n.getAttribute("data-amp-3p-sentinel"):"amp"}(t,r),o=W(n,e,!0),u=0;u<o.length;u++){var f=o[u];if(f.frame===t){i=f;break}}return i||(i={frame:t,events:Object.create(null)},o.push(i)),i.events}(f,n,i),l=(s=n.src,Z||(Z=self.document.createElement("a"),$=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new q(100))),function(n,t,r){if(r&&r.has(t))return r.get(t);n.href=t,n.protocol||(n.href=n.href);var i,e={href:n.href,protocol:n.protocol,host:n.host,hostname:n.hostname,port:"0"==n.port?"":n.port,pathname:n.pathname,search:n.search,hash:n.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname),("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)&&(e.port="",e.host=e.hostname),i=n.origin&&"null"!=n.origin?n.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href,e.origin=i;var o=e;return r&&r.put(t,o),o}(Z,s,$)).origin,v=c[t]||(c[t]=[]),h=function(t,i,u,f){if("amp"==t.sentinel){if(i!=n.contentWindow)return;if(l!=u&&("null"!=u||!o))return}(e||i==n.contentWindow)&&(t.sentinel!=V?r(t,i,u,f):a())};return v.push(h),a=function(){if(h){var n=v.indexOf(h);n>-1&&v.splice(n,1),h=null,v=null,r=null}}}var X=function(){function n(n,t){this.ampdoc=n.ampdoc,this.oE=t,this.Aa=C(this.ampdoc,"mutator"),this.uE="https://api.poool.fr/api/v3/amp/access?rid=READER_ID",this.fE="https://assets.poool.fr/amp.html?rid=READER_ID&c=CANONICAL_URL&o=AMPDOC_URL&r=DOCUMENT_REFERRER",this.js=k(this.ampdoc.win,"timer"),this.Sr=x(this.ampdoc.win,"xhr"),this.aE=C(this.ampdoc,"navigation"),this.sE=this.oE.getAdapterConfig(),this.cE=this.sE.bundleID||"",this.lE="",this.vE=this.sE.itemID||"",this.tb=this.ampdoc.win.document.createElement("iframe"),this.hE(),this.pE()}var r=n.prototype;return r.authorize=function(){var n=this;return this.dE().then((function(n){return{access:n.access}}),(function(t){if(!t||!t.response)throw t;if(402!==t.response.status)throw t;return n.mE(),{access:!1}}))},r.hE=function(){this.tb.setAttribute("id","poool-iframe"),this.tb.setAttribute("scrolling","no"),this.tb.setAttribute("frameborder","0"),T(this.tb,"width","100%"),"unlock"==this.sE.forceWidget?F(this.tb,{"height":"250px","position":"fixed","bottom":"0"}):F(this.tb,{"height":"500px","transform":"translateY(-70px)"})},r.pE=function(){j(this.cE,"BundleID is incorrect or not provided."),j(this.vE,"ItemID is not provided.")},r.dE=function(){var n=this,t=function(n,t,r,i){return B(n,H("iid",r),void 0)}(this.uE,0,this.vE);return this.oE.buildUrl(t,!1).then((function(t){return n.oE.getLoginUrl(t)})).then((function(t){return I().info("amp-access-poool","Authorization URL: ",t),n.js.timeoutPromise(3e3,n.Sr.fetchJson(t)).then((function(n){return n.json()}))}))},r.bE=function(){var n=this.ampdoc.getElementById("poool");return R().assertElement(n,"No element with id #poool found to render paywall into, got")},r.mE=function(){var n,r,i,e=this,o=this.bE();return this.oE.buildUrl((n=this.fE,r={"bi":this.sE.bundleID,"iid":this.sE.itemID,"ce":this.sE.cookiesEnabled,"d":void 0!==this.sE.debug&&null!==this.sE.debug?this.sE.debug:(i=self,i.__AMP_MODE?i.__AMP_MODE:i.__AMP_MODE=function(n){return{localDev:!1,development:d(n,v(n)),esm:!1,test:!1,rtvVersion:p(n)}}(i)).development||!1,"fw":this.sE.forceWidget,"cs":this.sE.customSegment,"lo":this.sE.locale,"co":this.sE.context},B(n,function(n){var r,i=[];for(var e in n){var o=n[e];if(null!=o){o=t(r=o)?r:[r];for(var u=0;u<o.length;u++)i.push(H(e,o[u]))}}return i.join("&")}(r))),!1).then((function(n){e.tb.src=n,Q(e.tb,"release",e.gE.bind(e)),Q(e.tb,"resize",e.wE.bind(e)),Q(e.tb,"click",e.yE.bind(e)),o.appendChild(e.tb)}))},r.gE=function(){var n=this.ampdoc.getRootNode().querySelector("[poool-access-preview]");n&&this.Aa.mutateElement(n,(function(){n.setAttribute("amp-access-hide","")}));var t=this.ampdoc.getRootNode().querySelector("[poool-access-content]");t&&this.Aa.mutateElement(t,(function(){t.removeAttribute("amp-access-hide")})),function(n,t){for(var r=0;r<t.length;r++)T(n,t[r],null)}(this.tb,["transform"])},r.wE=function(n){T(this.tb,"height",n.height)},r.yE=function(n){n.url&&this.aE.navigateTo(this.ampdoc.win,n.url)},r.pingback=function(){return w||(w=Promise.resolve(void 0))},n}();n.registerServiceForDoc("poool",(function(n){return(t=n.getHeadNode(),P(t,"access","amp-access")).then((function(n){var t=n.getVendorSource("poool"),r=new X(n,t);return t.getAdapter().registerVendor(r),r}));var t}))}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-access-poool-0.1.js.map