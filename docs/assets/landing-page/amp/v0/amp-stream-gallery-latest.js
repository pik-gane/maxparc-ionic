;
(self.AMP=self.AMP||[]).push({m:0,v:"2203281422000",n:"amp-stream-gallery",ev:"0.1",l:!0,f:function(t,i){!function(){function i(t,i){(null==i||i>t.length)&&(i=t.length);for(var n=0,r=new Array(i);n<i;n++)r[n]=t[n];return r}function n(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return i(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var s=0;return function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r;function s(t,i){return(s=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,i)}function e(t){return(e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,i){if(i&&("object"===o(i)||"function"==typeof i))return i;if(void 0!==i)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function l(t){return t?Array.prototype.slice.call(t):[]}var h=Array.isArray,u=Object.prototype;function c(t){var i=Object.create(null);return t&&Object.assign(i,t),i}function f(t,i,n,r,s,e,o,a,l,h,u){return t}u.hasOwnProperty,u.toString;var m,p,v=!0,d=!0;function g(t,i){for(var n=t.length,r=0;r<n;r++)i(t[r],r)}function y(t,i,n){var r=t.hasAttribute(i),s=void 0!==n?n:!r;return s!==r&&(s?t.setAttribute(i,""):t.removeAttribute(i)),s}function b(t){var i=t.ownerDocument||t;return m&&m.ownerDocument===i||(m=i.createElement("div")),x}function x(t){return function(t,i){f(1===i.length),t.innerHTML=i[0];var n=t.firstElementChild;return f(n),f(!n.nextElementSibling),t.removeChild(n),n}(m,t)}var w=["Webkit","webkit","Moz","moz","ms","O","o"];function k(t){var i=t.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()}));return w.some((function(t){return i.startsWith(t+"-")}))?"-".concat(i):i}function j(t,i,n){if(S(i))return i;p||(p=c());var r=p[i];if(!r||n){if(r=i,void 0===t[i]){var s=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(i),e=function(t,i){for(var n=0;n<w.length;n++){var r=w[n]+i;if(void 0!==t[r])return r}return""}(t,s);void 0!==t[e]&&(r=e)}n||(p[i]=r)}return r}function M(t,i){var n=t.style;for(var r in i)n.setProperty(k(j(n,r)),String(i[r]),"important")}function O(t,i,n,r,s){var e=j(t.style,i,s);if(e){var o=r?n+r:n;t.style.setProperty(k(e),o)}}function S(t){return t.startsWith("--")}function E(t,i,n){return i in t?Object.defineProperty(t,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[i]=n,t}function N(t,i){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),n.push.apply(n,r)}return n}function z(t){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?N(Object(n),!0).forEach((function(i){E(t,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))}))}return t}var R=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function A(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";try{return decodeURIComponent(t)}catch(t){return i}}function _(t,i,n){var r=0,s=0,e=null;function o(){r=0;var a,l=n-(t.Date.now()-s);l>0?r=t.setTimeout(o,l):(a=e,e=null,i.apply(null,a))}return function(){s=t.Date.now();for(var i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l];e=a,r||(r=t.setTimeout(o,n))}}var I=self.AMP_CONFIG||{},C=("string"==typeof I.thirdPartyFrameRegex?new RegExp(I.thirdPartyFrameRegex):I.thirdPartyFrameRegex,("string"==typeof I.cdnProxyRegex?new RegExp(I.cdnProxyRegex):I.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function P(t){if(!self.document||!self.document.head)return null;if(self.location&&C.test(self.location.origin))return null;var i=self.document.head.querySelector('meta[name="'.concat(t,'"]'));return i&&i.getAttribute("content")||null}I.thirdPartyUrl,I.thirdPartyFrameHost,I.cdnUrl||P("runtime-host"),I.errorReportingUrl,I.betaErrorReportingUrl,I.localDev,I.geoApiUrl||P("amp-geo-api"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var T=self.__AMP_LOG;function B(t,i){throw new Error("failed to call initLogConstructor")}function L(t){return T.user||(T.user=U()),function(t,i){return i&&i.ownerDocument.defaultView!=t}(T.user.win,t)?T.userForEmbed||(T.userForEmbed=U()):T.user}function U(t){return B()}function W(){return T.dev||(T.dev=B())}function G(t,i,n,r,s,e,o,a,l,h,u){return t}function X(t,i){return F(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function Z(t){return t.nodeType?(n=t,i=(n.ownerDocument||n).defaultView,X(i,"ampdoc")).getAmpDoc(t):t;var i,n}function $(t){var i=Z(t);return i.isSingleDoc()?i.win:i}function F(t,i){G(V(t,i));var n=function(t){var i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}(t)[i];return n.obj||(G(n.ctor),G(n.context),n.obj=new n.ctor(n.context),G(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}function V(t,i){var n=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!n||!n.ctor)}var D,H="__AMP__EXPERIMENT_TOGGLES",J=function(t){return function(t,i){return F($(Z(t)),"owners")}(t)},Q=function(t){return X(t,"platform")};function q(t,i,n,r){var s=t,e=n,o=function(t){try{return e(t)}catch(t){var i,n;throw null===(i=(n=self).__AMP_REPORT_ERROR)||void 0===i||i.call(n,t),t}},a=function(){if(void 0!==D)return D;D=!1;try{var t={get capture(){return D=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return D}(),l=!(null==r||!r.capture);return s.addEventListener(i,o,a?r:l),function(){null==s||s.removeEventListener(i,o,a?r:l),e=null,s=null,o=null}}function K(t,i,n,r){var s={detail:n};if(Object.assign(s,r),"function"==typeof t.CustomEvent)return new t.CustomEvent(i,s);var e=t.document.createEvent("CustomEvent");return e.initCustomEvent(i,!!s.bubbles,!!s.cancelable,n),e}function Y(t,i,n,r){return q(t,i,n,r)}function tt(t){return t.detail}function it(t,i,n,r){var s=n,e=q(t,i,(function(t){try{s(t)}finally{s=null,e()}}),r);return e}function nt(t,i){return t>0&&i>0?t%i:(t%i+i)%i}function rt(t,i,n){return f(i<=n),Math.min(Math.max(t,i),n)}var st="amp-carousel:indexchange",et="amp-carousel:scrollstart",ot="amp-carousel:scrollpositionchange",at=function(){function t(t){var i=this,n=t.advanceable,r=t.element,s=t.scrollContainer,e=t.win;this.t=e,this.QZ=s,this.YZ=n,this.tK=0,this.iK=!1,this.nK=1,this.sK=1e3,this.rK=!1,this.oK=!1,this.eK=null,this.hK=Number.POSITIVE_INFINITY,this.qi=r.getAmpDoc(),this.uK(this.sK),this.QZ.addEventListener("scroll",(function(){return i.aK()}),!0),Y(this.QZ,"touchstart",(function(){return i.lK()}),{capture:!0,passive:!0}),Y(r,st,(function(t){i.cK(t)}))}var i=t.prototype;return i.stop=function(){this.oK=!0},i.pause=function(){this.rK=!0},i.resume=function(){this.rK=!1,this.fK()},i.updateAutoAdvance=function(t){this.iK=t,this.fK()},i.updateAutoAdvanceCount=function(t){this.nK=t,this.fK()},i.updateAutoAdvanceInterval=function(t){this.sK=Math.max(t,1e3),this.uK(this.sK),this.fK()},i.updateMaxAdvances=function(t){this.hK=t},i.uK=function(t){var i=this,n=_(this.t,(function(){n==i.eK&&i.mK()}),t);this.eK=n},i.lK=function(){var t=this;this.pause(),it(window,"touchend",(function(){t.resume()}),{capture:!0,passive:!0})},i.pK=function(){return this.iK&&this.qi.isVisible()&&!this.rK&&!this.oK&&this.tK<this.hK},i.aK=function(){this.fK()},i.cK=function(t){var i=tt(t).actionSource;i&&4!==i&&this.stop()},i.mK=function(){this.pK()&&(this.YZ.advance(this.nK,{actionSource:4,allowWrap:!0}),this.tK+=this.nK)},i.fK=function(){this.pK()&&this.eK()},t}(),lt=function(){function t(t){var i=this,n=t.element,r=t.runMutate,s=t.scrollContainer,e=t.stoppable,o=t.win;this.t=o,this.QZ=s,this.vK=r,this.dK=[],this.bK=1,this.gK=!1,this.xK=!1,this.ro=0,n.addEventListener("focus",(function(){e.stop()}),!0),n.addEventListener(st,(function(t){i.wK(t)}))}var i=t.prototype;return i.updateMixedLength=function(t){this.gK=t},i.updateUi=function(){var t=this;this.xK||(this.xK=!0,this.vK((function(){t.xK=!1,t.yK(),t.SK()})))},i.updateSlides=function(t){this.dK=t,this.updateUi()},i.updateVisibleCount=function(t){this.bK=t,this.updateUi()},i.zK=function(){return this.gK||this.bK>=2},i.yK=function(){this.zK()?(this.QZ.removeAttribute("aria-live"),this.QZ.setAttribute("role","list"),this.dK.forEach((function(t){t.setAttribute("role","listitem")}))):(this.QZ.setAttribute("aria-live","polite"),this.QZ.removeAttribute("role"),this.dK.forEach((function(t){t.removeAttribute("role")})))},i.SK=function(){var t=this;this.dK.forEach((function(i,n){var r=!t.zK()&&n!==t.ro;i.setAttribute("aria-hidden",r)}))},i.wK=function(t){var i=this,n=tt(t).index;this.ro=n,this.vK((function(){i.SK()}))},t}(),ht="start";function ut(t,i){var n=i.getBoundingClientRect(),r=n.bottom,s=n.height,e=n.left,o=n.right,a=n.top,l=n.width;return{start:0==t?e:a,end:0==t?o:r,length:0==t?l:s}}function ct(t,i){var n=ut(t,i),r=n.end;return(n.start+r)/2}function ft(t,i){return ut(t,i).start}function mt(t,i,n){return i==ht?ft(t,n):ct(t,n)}function pt(t,i,n){O(i,0==t?"width":"height","".concat(n,"px"))}function vt(t,i,n){var r=ut(t,i),s=r.end;return r.start<=n&&n<s}function dt(t,i,n,r){return(mt(t,i,r)-mt(t,i,n))/ut(t,r).length}function gt(t,i,n){!function(t,i,n){0==t?i.scrollLeft=n:i.scrollTop=n}(t,i,function(t,i){return 0==t?i.scrollLeft:i.scrollTop}(t,i)+n)}var yt="i-amphtml-carousel-spacer";function bt(t,i){var n=function(t,i,n){var r=j(t.style,"scrollBehavior",void 0);if(r)return S(r)?t.style.getPropertyValue(r):t.style[r]}(t);O(t,"scrollBehavior","auto"),i(),O(t,"scrollBehavior",n)}function xt(t){return t.reduce((function(t,i){return t+i}),0)}var wt=function(){function t(t){var i=this,n=t.element,r=t.initialIndex,s=t.runMutate,e=t.scrollContainer,o=t.win;this.t=o,this.vK=s,this.Gn=n,this.QZ=e,this.iK=new at({win:o,element:n,scrollContainer:e,advanceable:this}),this.MK=new lt({win:o,element:n,scrollContainer:e,runMutate:s,stoppable:this.iK}),this.kK=_(o,(function(){return i.NK()}),200),this.jK=1,this.EK=Number.POSITIVE_INFINITY,this.gK=!1,this.dK=[],this.RK=!0,this.xK=!1,this.PK=[],this.AK=[],this.CK=[],this._K=[],this.IK=!1,this.TK=!1,this.LK=0,this.BK=null,this.UK=NaN,this.WK=!1,this.HK=!1,this.VK=void 0,this.ZK=ht,this.DK=0,this.FK=!0,this.XK=!0,this.QT=r||0,this.kd=!1,this.vV=!0,this.$K=1,this.bK=1,this.QZ.addEventListener("scroll",(function(){return i.aK()}),!0),this.QZ.addEventListener("scrollend",(function(){return i.qK()}),!0),Y(this.QZ,"touchstart",(function(){return i.lK()}),{capture:!0,passive:!0}),Y(this.QZ,"wheel",(function(){return i.GK()}),{capture:!0,passive:!0})}var i=t.prototype;return i.next=function(t){this.advance(this.jK,{actionSource:t})},i.prev=function(t){this.advance(-this.jK,{actionSource:t})},i.advance=function(t){var i,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=this.QT,s=this.BK,e=this.dK,o=n.actionSource,a=n.allowWrap,l=void 0!==a&&a,h=null!==s?s:r,u=h+t,c=e.length-1,f=0===h,m=h===c,p=u<0,v=u>c,d=t>0&&this.JK(h)&&this.JK(u);i=this.isLooping()?nt(u,c+1):l?d?0:p&&f||v&&!m?c:p&&!f||v&&m?0:u:d?h:rt(u,0,c),this.goToSlide(i,{actionSource:o})},i.pauseLayout=function(){this.IK=!0,this.iK.pause()},i.resumeLayout=function(){this.IK=!1,this.updateUi(),this.iK.resume()},i.getCurrentIndex=function(){return this.QT},i.getVisibleCount=function(){return this.bK},i.isLooping=function(){return this.kd&&this.dK.length/this.bK>=3},i.goToSlide=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=i.actionSource,r=i.smoothScroll,s=void 0===r||r;t<0||t>this.dK.length-1||isNaN(t)||t!==this.QT&&(this.WK||this.KK()||(this.TK=!1,this.BK=t,this.VK=n,this.QK(this.dK[t],{smoothScroll:s})))},i.updateAdvanceCount=function(t){this.jK=t},i.updateAlignment=function(t){this.ZK="start"===t?ht:"center",this.updateUi()},i.updateAutoAdvance=function(t){this.iK.updateAutoAdvance(t)},i.updateAutoAdvanceCount=function(t){this.iK.updateAutoAdvanceCount(t)},i.updateAutoAdvanceInterval=function(t){this.iK.updateAutoAdvanceInterval(t)},i.updateAutoAdvanceLoops=function(t){this.EK=t,this.updateUi()},i.updateForwards=function(t){this.FK=t,this.updateUi()},i.updateHideScrollbar=function(t){this.XK=t,this.updateUi()},i.updateHorizontal=function(t){this.DK=t?0:1,this.updateUi()},i.updateLoop=function(t){this.kd=t,this.updateUi()},i.updateMixedLength=function(t){this.gK=t,this.MK.updateMixedLength(t),this.updateUi()},i.updateSlides=function(t){var i=t.length;if(i)this.dK=t,this.QT=this.isLooping()?nt(this.QT,i):rt(this.QT,0,i-1)||0,this.MK.updateSlides(t),this.updateUi();else{var n=this.Gn.tagName.toUpperCase();W().warn(n,"No slides were found.")}},i.updateSnap=function(t){this.vV=t,this.updateUi()},i.updateSnapBy=function(t){this.$K=Math.max(1,t),this.updateUi()},i.updateUserScrollable=function(t){this.RK=t,this.updateUi()},i.updateUi=function(){var t=this;this.xK||this.IK||(this.xK=!0,this.vK((function(){t.xK=!1,t.QZ.setAttribute("mixed-length",t.gK),t.QZ.setAttribute("user-scrollable",t.RK),t.QZ.setAttribute("hide-scrollbar",t.XK),t.QZ.setAttribute("horizontal",0===t.DK),t.QZ.setAttribute("loop",t.isLooping()),t.QZ.setAttribute("snap",t.vV),M(t.QZ,{"--visible-count":t.bK}),t.dK.length&&(t.iK.updateMaxAdvances(t.EK*t.dK.length-1),t.YK(),t.tQ(),t.iQ(),t.NK(!0))})))},i.updateVisibleCount=function(t){this.bK=Math.max(1,t),this.MK.updateVisibleCount(t),this.updateUi()},i.nQ=function(t,i){this.UK!==t&&(this.UK=t,this.Gn.dispatchEvent(K(this.t,st,{"index":t,"total":this.dK.length,"actionSource":i,"slides":this.dK},{bubbles:!0})))},i.sQ=function(t,i){this.QT=t,this.LK=i,this.Gn.dispatchEvent(K(this.t,"amp-carousel:offsetchange",{"index":t,"total":this.dK.length,"offset":this.FK?-i:i,"slides":this.dK},{bubbles:!0}))},i.notifyScrollStart=function(){this.Gn.dispatchEvent(K(this.t,et,null))},i.rQ=function(){this.Gn.dispatchEvent(K(this.t,ot,null))},i.lK=function(){var t=this;this.WK=!0,this.VK=3,this.BK=null,this.TK=!1,it(window,"touchend",(function(){t.WK=!1,t.kK()}),{capture:!0,passive:!0})},i.GK=function(){this.VK=2,this.BK=null,this.TK=!1},i.aK=function(){this.TK?this.TK=!1:(this.HK=!0,this.oQ(),this.notifyScrollStart(),this.kK())},i.qK=function(){null===this.BK&&this.NK()},i.KK=function(){return this.HK&&(3===this.VK||2===this.VK)},i.eQ=function(t,i,n){var r=i*n*(this.FK?1:-1);!function(t,i,n){var r=0==t?n:0,s=0==t?0:n;O(i,"transform","translate(".concat(r,"px, ").concat(s,"px)")),M(i,{"--content-transform":"translate(".concat(r,"px, ").concat(s,"px)")})}(this.DK,t,r),t._revolutions=i},i.hQ=function(t){var i=this;this.dK.forEach((function(n){i.eQ(n,0,t)}))},i.uQ=function(){var t=this;return this.dK.map((function(i){return ut(t.DK,i).length}))},i.isAtEnd=function(){return!this.isLooping()&&this.aQ()},i.isAtStart=function(){return!this.isLooping()&&this.lQ()},i.aQ=function(){var t=this.QZ,i=t.getBoundingClientRect().width*(this.FK?1:-1),n=this.FK?Math.ceil(i):Math.floor(i),r=t.scrollLeft+n,s=t.scrollWidth;return this.FK?r>=s:r<=-s},i.lQ=function(){var t=this.QZ.scrollLeft;return this.FK?t<=0:t>=0},i.cQ=function(t){for(var i=[],n=0;n<t;n++){var r=document.createElement("div");r.className=yt,i.push(r)}return i},i.YK=function(){var t=this,i=this.DK,n=this.dK,r=this.uQ(),s=xt(r),e=this.isLooping()?n.length:0;this.PK.forEach((function(i){t.QZ.removeChild(i)})),this.PK=this.cQ(e),this.PK.forEach((function(s,e){pt(i,s,r[e]),t.QZ.insertBefore(s,n[0])})),this.AK.forEach((function(i){t.QZ.removeChild(i)})),this.AK=this.cQ(e),this.AK.forEach((function(n,e){pt(i,n,r[e]),t.eQ(n,-1,s),t.QZ.appendChild(n)})),this.CK.forEach((function(i){t.QZ.removeChild(i)})),this.CK=this.cQ(e),this.CK.forEach((function(n,e){pt(i,n,r[e]),t.eQ(n,-1,s),t.QZ.appendChild(n)})),this._K=this.PK.concat(this.AK,this.CK)},i.tQ=function(){var t=this,i=this.dK.length,n=this.ZK===ht,r=1===nt(this.bK,2),s=n||r?"0%":"50%";g(this.QZ.children,(function(n,r){var e=nt(r,i),o=0===nt(e,t.$K);!n.classList.contains(yt)&&t.isLooping()||function(t,i){for(var n in i)O(t,n,i[n])}(n,{"scroll-snap-align":o?t.ZK:"none","scroll-snap-coordinate":o?s:"none"})}))},i.iQ=function(){var t=this.CK,i=this.PK,n=this.QT,r=this.dK,s=Math.max(0,r.length-n-1),e=Math.max(0,n-1);i.forEach((function(t,e){var o,a,l,h=(o=n,a=e,l=i.length,(o===a?l:nt(o-a,l))>r.length-1);t.hidden=h||e<r.length-s})),t.forEach((function(i,s){var o,a,l,h=(o=n,a=s,l=t.length,(o===a?l:nt(a-o,l))>r.length-1);i.hidden=h||s>e}))},i.oQ=function(){var t=this,i=this.ZK,n=this._K,r=this.DK,s=this.QT,e=this.QZ,o=this.dK,a=xt(this.uQ()),l=!!n.length,h=l?n:o,u=function(t,i,n,r,s){var e=mt(t,i,n);if(vt(t,r[s],e))return s;for(var o=1;o<=r.length/2;o++){var a=nt(s+o,r.length),l=nt(s-o,r.length);if(vt(t,r[a],e))return a;if(vt(t,r[l],e))return l}}(r,i,e,h,l?s+o.length:s);if(void 0!==u){var c=h[u],f=u%o.length,m=dt(r,i,e,c);this.sQ(f,m),f!==s&&this.vK((function(){t.fQ(a)}))}},i.NK=function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this.VK;if(!this.WK&&(this.VK=void 0,this.HK=!1,this.vK((function(){t.rQ()})),this.UK!==this.QT||null!==this.BK||i)){null!==this.BK&&(this.QT=this.BK,this.BK=null,this.LK=0);var r=xt(this.uQ());this.vK((function(){t.nQ(t.QT,n),t.sQ(t.QT,t.LK),t.hQ(r),t.iQ(),t.fQ(r),t.mQ()}))}},i.mQ=function(){var t=this.ZK,i=this.DK,n=this.LK,r=this.QT,s=this.QZ,e=this.dK[r],o=(dt(i,t,s,e)-n)*ut(i,e).length;o&&(this.TK=!0,bt(s,(function(){gt(i,s,o)})))},i.QK=function(t,i){var n=this;(i.smoothScroll?function(t,i){return i()}:bt)(this.QZ,(function(){!function(t,i,n,r){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,e=i==ht,o=ut(t,r).length,a=e?ft(t,r):ct(t,r),l=e?ft(t,n):ct(t,n);gt(t,n,a-l-s*o)}(n.DK,n.ZK,n.QZ,t)}))},i.pQ=function(t,i,n){for(var r=this.QT,s=this.UK,e=this.dK,o=e[r]._revolutions||0,a=n?1:-1,l=1;l<=i;l++){var h=nt(r+l*a,e.length);if(h===s&&r!==s)break;var u=e[h],c=h>r!==n?o+a:o;this.eQ(u,c,t)}},i.fQ=function(t){if(this.isLooping()){var i=this.ZK,n=this.dK,r=this.bK,s=i===ht?r-1:0,e=(n.length-1-s)/2,o=(n.length-1+s)/2;this.pQ(t,Math.round(e),!1),this.pQ(t,Math.round(o),!0)}},i.JK=function(t){var i=this.ZK,n=this.dK,r=this.bK,s=i===ht?r:r/2;return t>=n.length-s},t}(),kt="__AMP_CAROUSEL_NEAR_VIEWPORT",jt="__AMP_CAROUSEL_IN_VIEWPORT",Mt=function(){function t(t){var i=t.ampElement,n=t.intersectionElement,r=t.intersectionThreshold,s=void 0===r?.01:r,e=t.nearbyMarginInPercent,o=void 0===e?100:e,a=t.viewportIntersectionThreshold,l=void 0===a?s:a,h=t.viewportIntersectionCallback,u=void 0===h?function(){}:h;this.vQ=i,this.MT=J(i.element),this.dQ=n,this.bQ=s,this.gQ=o,this.xQ=l,this.wQ=u,this.yQ=!1,this.aC=[],this.SQ=null,this.zQ=null,this.np=null,this.MQ=!1}var i=t.prototype;return i.setQueueChanges=function(t){this.yQ=t},i.kQ=function(t,i){i?this.MT.scheduleLayout(this.vQ.element,t):this.MT.scheduleUnlayout(this.vQ.element,t)},i.NQ=function(t,i){this.wQ(t,i)},i.Cf=function(){var t=this;if(!(this.SQ&&this.zQ&&this.np)){var i=this.vQ.win;this.SQ=new i.IntersectionObserver((function(i){return t.jQ(i)}),{root:this.dQ,rootMargin:"".concat(this.gQ,"%"),threshold:this.bQ}),this.zQ=new i.IntersectionObserver((function(i){return t.EQ(i)}),{root:this.dQ,rootMargin:"".concat(this.gQ+10,"%"),threshold:this.bQ}),this.np=new i.IntersectionObserver((function(i){return t.OQ(i)}),{root:this.dQ,rootMargin:"0%",threshold:this.xQ})}},i.jQ=function(t){t.filter((function(t){return t.isIntersecting})).forEach((function(t){t.target[kt]=0})),this.yQ||this.RQ()},i.EQ=function(t){t.filter((function(t){return!t.isIntersecting})).forEach((function(t){t.target[kt]=1})),this.yQ||this.PQ()},i.OQ=function(t){t.forEach((function(t){var i=t.isIntersecting;t.target[jt]=i?0:1})),this.yQ||this.AQ()},i.flushChanges=function(){this.RQ(),this.PQ(),this.AQ()},i.RQ=function(){for(var t=0;t<this.aC.length;t++){var i=this.aC[t];0==i[kt]&&(this.kQ(i,!0),i[kt]=null)}},i.PQ=function(){for(var t=0;t<this.aC.length;t++){var i=this.aC[t];1==i[kt]&&(this.kQ(i,!1),i[kt]=null)}},i.AQ=function(){for(var t=0;t<this.aC.length;t++){var i=this.aC[t];0==i[jt]?(this.kQ(i,!0),this.NQ(i,!0)):1==i[jt]&&this.NQ(i,!1),i[jt]=null}},i.CQ=function(t){if("IntersectionObserver"in this.vQ.win){if(this.Cf(),!t)return this.SQ.disconnect(),this.zQ.disconnect(),void this.np.disconnect();for(var i=0;i<this.aC.length;i++)this.SQ.observe(this.aC[i]),this.zQ.observe(this.aC[i]),this.np.observe(this.aC[i])}},i.updateChildren=function(t){if(this.aC=t,"IntersectionObserver"in this.vQ.win){for(var i=0;i<this.aC.length;i++)this.MT.setOwner(this.aC[i],this.vQ.element);this.CQ(!1),this.CQ(this.MQ)}},i.wasLaidOut=function(){this.MQ=!0,this.CQ(this.MQ)},i.wasUnlaidOut=function(){this.MQ=!1,this.CQ(this.MQ);for(var t=0;t<this.aC.length;t++)this.kQ(this.aC[t],!1),this.NQ(this.aC[t],!1)},t}();function Ot(t){return t.split(",").map((function(t){var i=/[a-z0-9.]+$/.exec(t);if(i){var n=i.index,r=t.slice(n),s=t.slice(0,n).trim();return{mediaQueryList:window.matchMedia(s),value:r}}})).filter(Boolean)}function St(t){for(var i=0;i<t.length;i++){var n=t[i],r=n.mediaQueryList,s=n.value;if(r.matches)return s}return""}var Et=function(){function t(t){this.IN=t,this.o0={},this.e0={}}var i=t.prototype;return i.updateAttribute=function(t,i){var n=this;if(this.IN[t]){var r=this.e0[t];r&&this.a0(r,null);var s=Ot(i),e=function(){n.h0(t,St(s))};this.a0(s,e),e(),this.e0[t]=s}},i.h0=function(t,i){if(this.o0[t]!==i){var n=this.IN[t];n&&n(i),this.o0[t]=i}},i.a0=function(t,i){t.forEach((function(t){t.mediaQueryList.onchange=i}))},t}(),Nt=["<div class=i-amphtml-carousel-content><div class=i-amphtml-stream-gallery-slides><div class=i-amphtml-carousel-scroll></div></div><div class=i-amphtml-stream-gallery-arrow-prev-slot></div><div class=i-amphtml-stream-gallery-arrow-next-slot></div></div>"],zt=["<button class=i-amphtml-stream-gallery-next aria-hidden=true></button>"],Rt=["<button class=i-amphtml-stream-gallery-prev aria-hidden=true></button>"],At={"never":0,"auto":1,"always":2},_t="amp-stream-gallery",It=function(t){!function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&s(t,i)}(m,t);var i,o,u=(i=m,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=e(i);if(o){var r=e(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return a(this,t)});function m(t){var i;return(i=u.call(this,t)).u0=new Et(i.l0()),i.yD=Q(i.win).isIos(),i.Ks=null,i.gZ=null,i.bX=null,i.c0=null,i.f0=null,i.QZ=null,i.P2=null,i.B2=1,i.W2=Number.MAX_VALUE,i.G2=Number.MAX_VALUE,i.X2=1,i.Z2=1,i.V2=!1,i.D2=0,i.dK=[],i.QT=null,i._Q=!1,i.IQ=null,i}m.prerenderAllowed=function(){return!0};var p=m.prototype;return p.l0=function(){var t=this;return{"extra-space":function(i){t.H2(i)},"inset-arrow-visibility":function(i){t.J2(i)},"loop":function(i){t.Q2("true"==i)},"outset-arrows":function(i){t.q2("true"==i)},"peek":function(i){t.K2(Number(i))},"slide":function(i){t.gZ.goToSlide(Number(i))},"slide-align":function(i){t.gZ.updateAlignment(i)},"snap":function(i){t.gZ.updateSnap("false"!=i)},"max-item-width":function(i){t.Y2(Number(i))},"max-visible-count":function(i){t.t4(Number(i))},"min-item-width":function(i){t.i4(Number(i))},"min-visible-count":function(i){t.n4(Number(i))}}},p.w0=function(){var t=this;this.registerAction("prev",(function(i){var n=i.trust;t.gZ.prev(t.BQ(n))}),1),this.registerAction("next",(function(i){var n=i.trust;t.gZ.next(t.BQ(n))}),1),this.registerAction("goToSlide",(function(i){var n=i.args,r=i.trust;t.gZ.goToSlide(n.index||-1,{actionSource:t.BQ(r)})}),1)},p.UU=function(){var t=this;this.element.addEventListener(st,(function(i){t.wK(i)})),this.element.addEventListener(et,(function(){t.VQ()})),this.element.addEventListener(ot,(function(){t.ZQ()})),this.f0.addEventListener("click",(function(i){i.target!=i.currentTarget&&t.gZ.prev(0)})),this.c0.addEventListener("click",(function(i){i.target!=i.currentTarget&&t.gZ.next(0)}))},p.goToSlide=function(t){this.gZ.goToSlide(t,{smoothScroll:!1})},p.isLayoutSupported=function(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)},p.buildCallback=function(){var t,i,r,s,e,o,a=this;r=function(t){var i,r,s,e,o;if(t[H])return t[H];t[H]=c();var a=t[H];f(a);var l,u=z(z({},null!==(i=t.AMP_CONFIG)&&void 0!==i?i:{}),null!==(r=t.AMP_EXP)&&void 0!==r?r:(l=(null===(s=t.__AMP_EXP)||void 0===s?void 0:s.textContent)||"{}",JSON.parse(l)));for(var m in u){var p=u[m];"number"==typeof p&&p>=0&&p<=1&&(a[m]=Math.random()<p)}var v=null===(e=t.AMP_CONFIG)||void 0===e?void 0:e["allow-doc-opt-in"];if(h(v)&&v.length){var d=t.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(d)for(var g,y,b=n((null===(g=d.getAttribute("content"))||void 0===g?void 0:g.split(","))||[],!0);!(y=b()).done;){var x=y.value;v.includes(x)&&(a[x]=!0)}}Object.assign(a,function(t){var i,r="";try{var s;"localStorage"in t&&(r=null!==(s=t.localStorage.getItem("amp-experiment-toggles"))&&void 0!==s?s:"")}catch(t){W().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}for(var e,o=(null===(i=r)||void 0===i?void 0:i.split(/\s*,\s*/g))||[],a=c(),l=n(o,!0);!(e=l()).done;){var h=e.value;h&&("-"==h[0]?a[h.substr(1)]=!1:a[h]=!0)}return a}(t));var w=null===(o=t.AMP_CONFIG)||void 0===o?void 0:o["allow-url-opt-in"];if(h(w)&&w.length)for(var k,j=function(t){var i,n=c();if(!t)return n;for(;i=R.exec(t);){var r=A(i[1],i[1]),s=i[2]?A(i[2].replace(/\+/g," "),i[2]):"";n[r]=s}return n}(t.location.originalHash||t.location.hash),M=n(w,!0);!(k=M()).done;){var O=k.value,S=j["e-".concat(O)];"1"==S&&(a[O]=!0),"0"==S&&(a[O]=!1)}return a}(this.win),i=!!r["amp-stream-gallery"],L().assert(i,"The amp-stream-gallery experiment must be enabled to use the component",undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined),this.Ks=(s=this.element,e="action",V(o=$(Z(s)),e)?F(o,e):null),this.p0(),this.gZ=new wt({win:this.win,element:this.element,scrollContainer:this.QZ,initialIndex:this.v0(),runMutate:function(t){return a.mutateElement(t)}}),this.gZ.updateSnap(!1),this.gZ.updateForwards(!("rtl"==((t=G(this.element.ownerDocument)).body.getAttribute("dir")||t.documentElement.getAttribute("dir")||"ltr"))),l(this.element.attributes).forEach((function(t){a.d0(t.name,t.value)})),this.gZ.updateSlides(this.dK),this.b0(),this.w0(),this.UU(),this.FQ()},p.p0=function(){var t,i,n=this,r=this.element;l(r.children).forEach((function(r){var s=r.getAttribute("slot");"prev-arrow"==s?t=r:"next-arrow"==s?i=r:"I-AMPHTML-SIZER"!=r.tagName&&n.dK.push(r)})),r.appendChild(this.WQ()),this.QZ=r.querySelector(".i-amphtml-carousel-scroll"),this.P2=r.querySelector(".i-amphtml-stream-gallery-slides"),this.bX=r.querySelector(".i-amphtml-carousel-content"),this.f0=r.querySelector(".i-amphtml-stream-gallery-arrow-prev-slot"),this.c0=r.querySelector(".i-amphtml-stream-gallery-arrow-next-slot"),this.dK.forEach((function(t){t.classList.add("i-amphtml-carousel-slotted"),n.QZ.appendChild(t)})),this.f0.appendChild(t||this.x0()),this.c0.appendChild(i||this.g0())},p.isRelayoutNeeded=function(){return!0},p.pauseCallback=function(){this.gZ.pauseLayout()},p.resumeCallback=function(){this.gZ.resumeLayout()},p.layoutCallback=function(){return this.r4(),this.gZ.updateUi(),this.IQ.wasLaidOut(),r||(r=Promise.resolve(void 0))},p.unlayoutCallback=function(){return this.IQ.wasUnlaidOut(),!0},p.mutatedAttributesCallback=function(t){for(var i in t)this.d0(i,String(t[i]))},p.d0=function(t,i){this.u0.updateAttribute(t,i)},p.WQ=function(){return b(this.element)(Nt)},p.g0=function(){return b(this.element)(zt)},p.x0=function(){return b(this.element)(Rt)},p.BQ=function(t){return 3==t?0:1},p.v0=function(){var t=this.element.getAttribute("slide")||"0";return Number(St(Ot(t)))},p.s4=function(t,i){var n=(t-this.D2*i)/i,r=Math.floor(n);return Math.max(1,r)+this.D2},p.e4=function(){return this.V2?this.f0.getBoundingClientRect().width+this.c0.getBoundingClientRect().width:0},p.n0=function(t){return 2==t||3==t||0==t},p.o4=function(){return 2!=this.B2&&(0==this.B2||this._Q||0!=this.D2)},p.K2=function(t){this.D2=Math.max(0,t||0),this.r4()},p.Y2=function(t){this.W2=t||Number.MAX_VALUE,this.r4()},p.t4=function(t){this.G2=t||Number.MAX_VALUE,this.r4()},p.i4=function(t){this.X2=t||1,this.r4()},p.n4=function(t){this.Z2=t||1,this.r4()},p.r4=function(){var t=this,i=this.W2,n=this.G2,r=this.X2,s=this.Z2,e=this.dK,o=this.element.getBoundingClientRect().width-this.e4(),a=this.s4(o,r),l=Math.min(e.length,n),h=Math.min(Math.max(s,a),l),u=Math.floor(h);this.mutateElement((function(){var n="".concat(a>l?l*i:a*i,"px");O(t.P2,"max-width",n)})),this.gZ.updateSlides(this.dK),this.gZ.updateAdvanceCount(u),this.gZ.updateSnapBy(u),this.gZ.updateVisibleCount(h)},p.q2=function(t){this.V2=t,this.FQ()},p.H2=function(t){this.bX.setAttribute("i-amphtml-stream-gallery-extra-space",t)},p.J2=function(t){this.B2=At[t]||1,this.FQ()},p.Q2=function(t){t&&Q(this.win).isIos()?L().warn(_t,"amp-stream-gallery does not support looping on iOS due to https://bugs.webkit.org/show_bug.cgi?id=191218."):this.gZ.updateLoop(t)},p.FQ=function(){var t=this;g(this.f0.children,(function(i){y(i,"disabled",t.gZ.isAtStart())})),g(this.c0.children,(function(i){y(i,"disabled",t.gZ.isAtEnd())})),y(this.bX,"i-amphtml-stream-gallery-hide-inset-buttons",this.o4()),y(this.bX,"amp-stream-gallery-outset-arrows",this.V2)},p.b0=function(){var t=this,i=J(this.element);this.IQ=new Mt({ampElement:this,intersectionElement:this.QZ,nearbyMarginInPercent:this.yD?200:100,viewportIntersectionCallback:function(n,r){r?i.scheduleResume(t.element,n):i.schedulePause(t.element,n)}}),this.IQ.setQueueChanges(this.yD),this.IQ.updateChildren(this.dK)},p.VQ=function(){this.IQ.setQueueChanges(this.yD)},p.ZQ=function(){this.IQ.flushChanges(),this.IQ.setQueueChanges(!1),this.FQ()},p.i0=function(t,i){var n=this.QT;if(this.QT=t,null!=n){var r={"index":t},s="slideChange",e=this.n0(i)?3:1,o=K(this.win,"streamGallery.".concat(s),r);this.Ks.trigger(this.element,s,o,e),function(t,i,n,r){var s=n||{};f(t.ownerDocument);var e=t.ownerDocument.createEvent("Event");e.data=s;var o=v,a=d;e.initEvent("slideChange",o,a),t.dispatchEvent(e)}(this.element,0,r)}},p.wK=function(t){var i=tt(t),n=i.index,r=i.actionSource;this._Q=this._Q||3==r,this.i0(n,r),this.FQ()},m}(t.BaseElement);t.registerElement(_t,It,'.i-amphtml-carousel-content{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-carousel-scroll{display:-ms-flexbox;display:flex;width:100%;height:100%;-ms-flex-align:center;align-items:center;outline:none;scroll-behavior:smooth;-webkit-overflow-scrolling:touch!important;--visible-count:1}.i-amphtml-carousel-scroll[hide-scrollbar=true]{scrollbar-width:none}.i-amphtml-carousel-scroll[hide-scrollbar=true]::-webkit-scrollbar{display:none;box-sizing:content-box!important}.i-amphtml-carousel-scroll[horizontal=true]{-ms-flex-direction:row;flex-direction:row;scroll-snap-type-x:mandatory;scroll-snap-type:x mandatory;padding-bottom:20px!important;overflow-y:hidden}.i-amphtml-carousel-scroll[horizontal=false]{-ms-flex-direction:column;flex-direction:column;scroll-snap-type-y:mandatory;scroll-snap-type:y mandatory;padding-right:20px!important;overflow-x:hidden}.i-amphtml-carousel-scroll[snap=false]{scroll-snap-type:none}.i-amphtml-carousel-scroll[user-scrollable=false]{overflow:hidden}.i-amphtml-carousel-spacer{visibility:hidden;z-index:-1}.i-amphtml-carousel-slotted,.i-amphtml-carousel-spacer{box-sizing:border-box!important;margin:0!important;-ms-flex-negative:0!important;flex-shrink:0!important;width:100%;height:100%;scroll-snap-stop:always}.i-amphtml-carousel-scroll[horizontal=true][mixed-length=false]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=true][mixed-length=false]>.i-amphtml-carousel-spacer{width:calc(100%/var(--visible-count))!important;min-width:auto!important;max-width:none!important}.i-amphtml-carousel-scroll[horizontal=false][mixed-length=false]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=false][mixed-length=false]>.i-amphtml-carousel-spacer{height:calc(100%/var(--visible-count))!important;min-height:auto!important;max-height:none!important}.i-amphtml-carousel-scroll[horizontal=true][snap=true][mixed-length=true]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=true][snap=true][mixed-length=true]>.i-amphtml-carousel-spacer{max-width:100%!important}.i-amphtml-carousel-scroll[horizontal=false][snap=true][mixed-length=true]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=false][snap=true][mixed-length=true]>.i-amphtml-carousel-spacer{max-height:100%!important}.i-amphtml-carousel-scroll>.i-amphtml-carousel-slotted{will-change:transform}:not([amp-stream-gallery-outset-arrows])>.i-amphtml-stream-gallery-arrow-prev-slot{width:0;-ms-flex-pack:start;justify-content:flex-start}:not([amp-stream-gallery-outset-arrows])>.i-amphtml-stream-gallery-arrow-next-slot{width:0;-ms-flex-pack:end;justify-content:flex-end}:not([amp-stream-gallery-outset-arrows])>.i-amphtml-stream-gallery-arrow-next-slot>[disabled],:not([amp-stream-gallery-outset-arrows])>.i-amphtml-stream-gallery-arrow-prev-slot>[disabled],[i-amphtml-stream-gallery-hide-inset-buttons]:not([amp-stream-gallery-outset-arrows]) .i-amphtml-stream-gallery-arrow-next-slot>*,[i-amphtml-stream-gallery-hide-inset-buttons]:not([amp-stream-gallery-outset-arrows]) .i-amphtml-stream-gallery-arrow-prev-slot>*{opacity:0;pointer-events:none!important}:not([amp-stream-gallery-outset-arrows])>.i-amphtml-stream-gallery-arrow-next-slot>.i-amphtml-stream-gallery-next,:not([amp-stream-gallery-outset-arrows])>.i-amphtml-stream-gallery-arrow-prev-slot>.i-amphtml-stream-gallery-prev{-ms-flex-negative:0;flex-shrink:0;width:40px;height:40px}:not([amp-stream-gallery-outset-arrows])>.i-amphtml-stream-gallery-arrow-prev-slot>.i-amphtml-stream-gallery-prev{border-radius:0px 4px 4px 0px;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 7.4 9.4 12l4.6 4.6" fill="none" stroke="%23000" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/></svg>\')}:not([amp-stream-gallery-outset-arrows])>.i-amphtml-stream-gallery-arrow-next-slot>.i-amphtml-stream-gallery-next{border-radius:4px 0px 0px 4px;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10 7.4 4.6 4.6-4.6 4.6" fill="none" stroke="%23000" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/></svg>\')}[amp-stream-gallery-outset-arrows]>.i-amphtml-stream-gallery-arrow-next-slot>[disabled],[amp-stream-gallery-outset-arrows]>.i-amphtml-stream-gallery-arrow-prev-slot>[disabled]{opacity:0.4}[amp-stream-gallery-outset-arrows]>.i-amphtml-stream-gallery-arrow-next-slot>.i-amphtml-stream-gallery-next,[amp-stream-gallery-outset-arrows]>.i-amphtml-stream-gallery-arrow-prev-slot>.i-amphtml-stream-gallery-prev{width:32px;height:32px;border-radius:50%;background-size:24px 24px}[amp-stream-gallery-outset-arrows]>.i-amphtml-stream-gallery-arrow-prev-slot>.i-amphtml-stream-gallery-prev{margin-inline-start:6px;margin-inline-end:12px;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 7.4 9.4 12l4.6 4.6" fill="none" stroke="%23000" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/></svg>\')}[amp-stream-gallery-outset-arrows]>.i-amphtml-stream-gallery-arrow-next-slot>.i-amphtml-stream-gallery-next{margin-inline-start:12px;margin-inline-end:6px;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10 7.4 4.6 4.6-4.6 4.6" fill="none" stroke="%23000" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/></svg>\')}.i-amphtml-stream-gallery-inset-arrows{position:absolute;top:0;bottom:0;left:0;right:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;pointer-events:none}.i-amphtml-stream-gallery-arrow-prev-slot{-ms-flex-order:0;order:0}.i-amphtml-stream-gallery-arrow-next-slot{-ms-flex-order:2;order:2}.i-amphtml-stream-gallery-arrow-next-slot,.i-amphtml-stream-gallery-arrow-prev-slot{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:all}.i-amphtml-stream-gallery-arrow-next-slot>*,.i-amphtml-stream-gallery-arrow-prev-slot>*{-ms-flex-negative:0;flex-shrink:0}.i-amphtml-stream-gallery-next,.i-amphtml-stream-gallery-prev{position:relative;z-index:1;padding:0;border:none;outline:none;box-shadow:0px 2px 6px 0px rgba(0,0,0,.4);background-color:rgba(255,255,255,0.6);background-size:24px 24px;background-position:50%;background-repeat:no-repeat;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);transition:opacity 200ms ease-in}.i-amphtml-stream-gallery-next[disabled],.i-amphtml-stream-gallery-prev[disabled]{transition-timing-function:ease-out}[dir=rtl] .i-amphtml-stream-gallery-next,[dir=rtl] .i-amphtml-stream-gallery-prev{transform:scaleX(-1)}amp-stream-gallery .i-amphtml-carousel-content{display:-ms-flexbox;display:flex}.i-amphtml-stream-gallery-slides{-ms-flex-order:1;order:1;-ms-flex-positive:1;flex-grow:1;min-width:1px}[i-amphtml-stream-gallery-extra-space=around]{-ms-flex-pack:center;justify-content:center}amp-stream-gallery .i-amphtml-carousel-slotted>.i-amphtml-replaced-content{-o-object-fit:contain;object-fit:contain}\n/*# sourceURL=/extensions/amp-stream-gallery/0.1/amp-stream-gallery.css*/')}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-stream-gallery-0.1.js.map