;
(self.AMP=self.AMP||[]).push({m:0,v:"2203281422000",n:"amp-video-iframe",ev:"0.1",l:!0,f:function(n,t){!function(){function t(n,i){return(t=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,i)}function i(n){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function e(n,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}var o=Array.isArray;function u(n){return o(n)?n:[n]}function a(n,t){(null==t||t>n.length)&&(t=n.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=n[i];return r}function s(n,t){var i="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(i)return(i=i.call(n)).next.bind(i);if(Array.isArray(n)||(i=function(n,t){if(n){if("string"==typeof n)return a(n,t);var i=Object.prototype.toString.call(n).slice(8,-1);return"Object"===i&&n.constructor&&(i=n.constructor.name),"Map"===i||"Set"===i?Array.from(n):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){i&&(n=i);var r=0;return function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f,c=Object.prototype,h=(c.hasOwnProperty,c.toString);function l(n){return"[object Object]"===h.call(n)}function v(n){var t=Object.create(null);return n&&Object.assign(t,n),t}function d(n){return"number"==typeof n&&isFinite(n)}function m(n,t,i,r,e,o,u,a,s,f,c){return n}function p(){return f||(f=Promise.resolve(void 0))}var y=function(){var n=this;this.promise=new Promise((function(t,i){n.resolve=t,n.reject=i}))};function b(n){return new Promise((function(t){t(n())}))}var w="registered",g="load",k="playing",x="pause",j="ended",S="muted",q="unmuted",O="ad_start",P="ad_end",M="amp:video:tick",R="playing_manual",E="paused",T="video-play",A="user-interacted";function Y(n){n.signals().signal(A)}var z=[k,x,j,S,q,O,P];function I(n,t){try{return function(n){return JSON.parse(n)}(n)}catch(n){return null==t||t(n),null}}function U(n){return(n.ownerDocument||n).defaultView}var _,C,W,N={bubbles:!0,cancelable:!0};function J(n){var t;null===(t=n.parentElement)||void 0===t||t.removeChild(n)}function L(n,t){n.insertBefore(t,n.firstChild)}function D(n){return n.parent&&n.parent!=n}function F(n,t,i,r){var e=i||{};m(n.ownerDocument);var o=n.ownerDocument.createEvent("Event");o.data=e;var u=r||N,a=u.bubbles,s=u.cancelable;o.initEvent(t,a,s),n.dispatchEvent(o)}function B(n,t){n.classList.add("i-amphtml-fill-content"),t&&n.classList.add("i-amphtml-replaced-content")}function V(n,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=i.needsRootBounds,e=i.rootMargin,o=i.threshold,u=D(t)&&(r||e)?t.document:void 0;return new t.IntersectionObserver(n,{threshold:o,root:u,rootMargin:e})}function Z(n){var t,i=null===(t=_)||void 0===t?void 0:t.get(n);if(!i){var r=function(n){_||(_=new WeakMap,C=new WeakMap),m(C);var t=C.get(n);return t||(t=V((function(n){for(var i=new Set,r=n.length-1;r>=0;r--){var e,o=n[r].target;i.has(o)||(i.add(o),m(t),t.unobserve(o),m(_),null===(e=_.get(o))||void 0===e||e.resolve(n[r]),_.delete(o))}}),n,{needsRootBounds:!0}),C.set(n,t)),t}(U(n));m(_),r.observe(n),i=new y,_.set(n,i)}return i.promise}function $(n){var t=Object.getOwnPropertyDescriptor(n,"message");if(null!=t&&t.writable)return n;var i=n.message,r=n.stack,e=new Error(i);for(var o in n)e[o]=n[o];return e.stack=r,e}function H(n){for(var t,i=null,r="",e=s(arguments,!0);!(t=e()).done;){var o=t.value;o instanceof Error&&!i?i=$(o):(r&&(r+=" "),r+=o)}return i?r&&(i.message=r+": "+i.message):i=new Error(r),i}function G(n){var t,i;null===(t=(i=self).__AMP_REPORT_ERROR)||void 0===t||t.call(i,n)}function K(n){var t=H.apply(null,arguments);setTimeout((function(){throw G(t),t}))}function Q(n){try{for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];return n.apply(null,i)}catch(n){K(n)}}function X(n){var t=H.apply(null,arguments);return t.expected=!0,t}new WeakMap,new WeakMap;var nn=["Webkit","webkit","Moz","moz","ms","O","o"],tn={"getPropertyPriority":function(){return""},"getPropertyValue":function(){return""}};function rn(n,t,i,r,e){var o=function(n,t,i){if(t.startsWith("--"))return t;W||(W=v());var r=W[t];if(!r||i){if(r=t,void 0===n[t]){var e=function(n){return n.charAt(0).toUpperCase()+n.slice(1)}(t),o=function(n,t){for(var i=0;i<nn.length;i++){var r=nn[i]+t;if(void 0!==n[r])return r}return""}(n,e);void 0!==n[o]&&(r=o)}i||(W[t]=r)}return r}(n.style,t,e);if(o){var u,a=r?i+r:i;n.style.setProperty((u=o.replace(/[A-Z]/g,(function(n){return"-"+n.toLowerCase()})),nn.some((function(n){return u.startsWith(n+"-")}))?"-".concat(u):u),a)}}var en=/vertical/,on=new WeakMap,un=new WeakMap,an=new WeakMap;function sn(n){var t=on.get(n);return t||(t=new n.ResizeObserver(fn),on.set(n,t)),t}function fn(n){for(var t=new Set,i=n.length-1;i>=0;i--){var r=n[i],e=r.target;if(!t.has(e)){t.add(e);var o=un.get(e);if(o){an.set(e,r);for(var u=0;u<o.length;u++){var a=o[u],s=a.callback;cn(a.type,s,r)}}}}}function cn(n,t,i){if(0==n){var r=i.contentRect,e=r.height;Q(t,{width:r.width,height:e})}else if(1==n){var o,u=i.borderBoxSize;if(u)o=u.length>0?u[0]:{inlineSize:0,blockSize:0};else{var a,s,f=i.target,c=U(f),h=en.test(function(n,t){return n.getComputedStyle(t)||tn}(c,f).writingMode),l=f,v=l.offsetHeight,d=l.offsetWidth;h?(s=d,a=v):(a=d,s=v),o={inlineSize:a,blockSize:s}}Q(t,o)}}var hn=function(){function n(n){this.Gn=n,this.Zn=!1,this.Un=!1,this.Jn=this.Jn.bind(this)}var t=n.prototype;return t.updatePlaying=function(n){n!==this.Zn&&(this.Zn=n,n?(this.Un=!1,function(n,t,i){var r=n.ownerDocument.defaultView;if(r){var e=un.get(n);if(e||(e=[],un.set(n,e),sn(r).observe(n)),!e.some((function(n){return n.callback===i&&1===n.type}))){e.push({type:1,callback:i});var o=an.get(n);o&&setTimeout((function(){return cn(1,i,o)}))}}}(this.Gn,0,this.Jn)):function(n,t){!function(n,t,i){var r=un.get(n);if(r&&(function(n,t){for(var r=[],e=0,o=0;o<n.length;o++){var u=n[o];(a=u).callback===i&&1===a.type?r.push(u):(e<o&&(n[e]=u),e++)}var a;e<n.length&&(n.length=e)}(r),0==r.length)){un.delete(n),an.delete(n);var e=n.ownerDocument.defaultView;e&&sn(e).unobserve(n)}}(n,0,t)}(this.Gn,this.Jn))},t.Jn=function(n){var t=n.blockSize,i=n.inlineSize>0&&t>0;if(i!==this.Un){this.Un=i;var r=this.Gn;i||r.pause()}},n}();function ln(n){var t=!1,i=null,r=n;return function(){if(!t){for(var n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];i=r.apply(self,e),t=!0,r=null}return i}}var vn=self.AMP_CONFIG||{},dn=("string"==typeof vn.thirdPartyFrameRegex?new RegExp(vn.thirdPartyFrameRegex):vn.thirdPartyFrameRegex,("string"==typeof vn.cdnProxyRegex?new RegExp(vn.cdnProxyRegex):vn.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function mn(n){if(!self.document||!self.document.head)return null;if(self.location&&dn.test(self.location.origin))return null;var t=self.document.head.querySelector('meta[name="'.concat(n,'"]'));return t&&t.getAttribute("content")||null}function pn(n,t,i){return t in n?Object.defineProperty(n,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[t]=i,n}vn.thirdPartyUrl,vn.thirdPartyFrameHost,vn.cdnUrl||mn("runtime-host"),vn.errorReportingUrl,vn.betaErrorReportingUrl,vn.localDev,vn.geoApiUrl||mn("amp-geo-api"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var yn=self.__AMP_LOG;function bn(n){return yn.user||(yn.user=wn()),function(n,t){return t&&t.ownerDocument.defaultView!=n}(yn.user.win,n)?yn.userForEmbed||(yn.userForEmbed=wn()):yn.user}function wn(n){return function(n,t){throw new Error("failed to call initLogConstructor")}()}function gn(n,t,i,r,e,o,u,a,s,f,c){return n}function kn(n,t,i,r,e,o,u,a,s,f,c){return bn().assert(n,t,i,r,e,o,u,a,s,f,c)}function xn(n,t){return Mn(n=function(n){return n.__AMP_TOP||(n.__AMP_TOP=n)}(n),t)}function jn(n,t){return Mn(Pn(On(n)),t)}function Sn(n,t){var i=Pn(On(n));return Tn(i,t)?Mn(i,t):null}function qn(n,t){return Rn(Pn(n),t)}function On(n){return n.nodeType?(t=U(n),xn(t,"ampdoc")).getAmpDoc(n):n;var t}function Pn(n){var t=On(n);return t.isSingleDoc()?t.win:t}function Mn(n,t){gn(Tn(n,t));var i=En(n)[t];return i.obj||(gn(i.ctor),gn(i.context),i.obj=new i.ctor(i.context),gn(i.obj),i.context=null,i.resolve&&i.resolve(i.obj)),i.obj}function Rn(n,t){var i=En(n)[t];return i?i.promise?i.promise:(Mn(n,t),i.promise=Promise.resolve(i.obj)):null}function En(n){var t=n.__AMP_SERVICES;return t||(t=n.__AMP_SERVICES={}),t}function Tn(n,t){var i=n.__AMP_SERVICES&&n.__AMP_SERVICES[t];return!(!i||!i.ctor)}var An,Yn=function(n){return Sn(n,"action")},zn=function(n){return xn(n,"platform")},In=function(n){return Mn(n,"timer")},Un=function(n){return function(n,t,i,r){var e=qn(n,t);if(e)return e;var o=On(n);return o.whenExtensionsKnown().then((function(){var n=o.getExtensionVersion(i);return n?xn(o.win,"extensions").waitForExtension(i,n):null})).then((function(i){return i?function(n,t){return function(n,t){var i=Rn(n,t);if(i)return i;var r,e,o,u,a=En(n);return a[t]=(e=(r=new y).promise,o=r.reject,u=r.resolve,e.catch((function(){})),{obj:null,promise:e,resolve:u,reject:o,context:null,ctor:null}),a[t].promise}(Pn(n),t)}(n,t):null}))}(n,"consentPolicyManager","amp-consent")},_n=function(n){return Sn(n,"url")},Cn=function(n){return jn(n,"viewport")};function Wn(n){return null==n.__AMP_AUTOPLAY&&(n.__AMP_AUTOPLAY=function(n){var t,i=n.document.createElement("video");return i.setAttribute("muted",""),i.setAttribute("playsinline",""),i.setAttribute("webkit-playsinline",""),i.setAttribute("height","0"),i.setAttribute("width","0"),i.muted=!0,i.playsInline=!0,i.playsinline=!0,i.webkitPlaysinline=!0,function(n,t){for(var i in t)rn(n,i,t[i])}(i,{position:"fixed",top:"0",width:"0",height:"0",opacity:"0"}),t=i,b((function(){return t.play()})).catch((function(){})),Promise.resolve(!i.paused)}(n)),n.__AMP_AUTOPLAY}function Nn(n){return n.querySelector("video, iframe")}function Jn(n,t){var i=b((function(){return n.play(!!t)}));return i.catch((function(n){!function(n){for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];G(X.apply(null,i))}("TRYPLAY",n)})),i}function Ln(n,t,i,r){var e=n,o=i,u=function(n){try{return o(n)}catch(n){var t,i;throw null===(t=(i=self).__AMP_REPORT_ERROR)||void 0===t||t.call(i,n),n}},a=function(){if(void 0!==An)return An;An=!1;try{var n={get capture(){return An=!0,!1}};self.addEventListener("test-options",null,n),self.removeEventListener("test-options",null,n)}catch(n){}return An}(),s=!(null==r||!r.capture);return e.addEventListener(t,u,a?r:s),function(){null==e||e.removeEventListener(t,u,a?r:s),o=null,e=null,u=null}}function Dn(n,t,i,r){var e={detail:i};if(Object.assign(e,r),"function"==typeof n.CustomEvent)return new n.CustomEvent(t,e);var o=n.document.createEvent("CustomEvent");return o.initCustomEvent(t,!!e.bubbles,!!e.cancelable,i),o}function Fn(n,t,i,r){return Ln(n,t,i,r)}function Bn(n){return n.data}var Vn,Zn=function(){function n(){this.vt=null}var t=n.prototype;return t.add=function(n){var t=this;return this.vt||(this.vt=[]),this.vt.push(n),function(){t.remove(n)}},t.remove=function(n){var t,i,r;this.vt&&(i=n,-1!=(r=(t=this.vt).indexOf(i))&&t.splice(r,1))},t.removeAll=function(){this.vt&&(this.vt.length=0)},t.fire=function(n){if(this.vt)for(var t,i=s(this.vt.slice(),!0);!(t=i()).done;)(0,t.value)(n)},t.getHandlerCount=function(){var n,t;return null!==(n=null===(t=this.vt)||void 0===t?void 0:t.length)&&void 0!==n?n:0},n}(),$n=function(){function n(){this.ag=!1,this.fg=new Zn}var t=n.prototype;return t.onSessionEnd=function(n){this.fg.add(n)},t.beginSession=function(){this.ag=!0},t.endSession=function(){this.ag&&this.fg.fire(),this.ag=!1},t.isSessionActive=function(){return this.ag},n}();function Hn(n){var t=n.ownerDocument||n;return Vn&&Vn.ownerDocument===t||(Vn=t.createElement("div")),Gn}function Gn(n){return function(n,t){m(1===t.length),n.innerHTML=t[0];var i=n.firstElementChild;return m(i),m(!i.nextElementSibling),n.removeChild(i),i}(Vn,n)}var Kn=['<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>'],Qn=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function Xn(n,t,i){if(t[i])return t[i];var r=n.querySelector("style[".concat(i,"], link[").concat(i,"]"));return r?(t[i]=r,r):null}var nt={"title":"","artist":"","album":"","artwork":[{"src":""}]},tt="video-manager",it=function(){function n(n){var t=this;this.ampdoc=n,this.installAutoplayStyles=ln((function(){return function(n){!function(n,t,i,r,e){var o=n.getHeadNode();!function(n,t,i,r){var e=n.__AMP_CSS_SM;e||(e=n.__AMP_CSS_SM=v());var o="amp-extension=".concat(r);if(o){var u=Xn(n,e,o);if(u)return"STYLE"==u.tagName&&u.textContent!==t&&(u.textContent=t),u}var a=(n.ownerDocument||n).createElement("style");a.textContent=t;a.setAttribute("amp-extension",r),function(n,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(i){var r=i.nextSibling;n.insertBefore(t,r)}else L(n,t)}(n,a,Xn(n,e,"amp-runtime")),o&&(e[o]=a)}(o,function(n,t){var i=n.__AMP_CSS_TR;return i?i(t):t}(o,".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/"),0,"amp-video-autoplay")}(n)}(t.ampdoc)})),this.cg=null,this.lg=null,this.vg=null,this.js=In(n.win),this.dg=Yn(n.getHeadNode()),this.pg=function(){return t.mg()},this.yg=ln((function(){return new ot(t.ampdoc,t)})),this.js.delay(this.pg,1e3)}var t=n.prototype;return t.dispose=function(){if(this.yg().dispose(),this.lg.disconnect(),this.lg=null,this.cg)for(var n=0;n<this.cg.length;n++)this.cg[n].dispose()},t.mg=function(){for(var n=0;n<this.cg.length;n++){var t=this.cg[n];t.getPlayingState()!==E&&(ct(t,"video-seconds-played"),this.bg(t))}this.js.delay(this.pg,1e3)},t.bg=function(n){var t="timeUpdate",i=n.video.getCurrentTime(),r=n.video.getDuration();if(d(i)&&d(r)&&r>0){var e=i/r,o=Dn(this.ampdoc.win,"".concat(tt,".").concat(t),{"time":i,"percent":e});this.dg.trigger(n.video.element,t,o,1)}},t.register=function(n){var t=this;gn(n);var i=n;if(this.gg(n),n.supportsPlatform()&&!this.wg(n)){this.lg||(this.lg=V((function(n){return n.forEach((function(n){var i=n.isIntersecting,r=n.target;t.kg(r).updateVisibility(i)}))}),this.ampdoc.win,{threshold:.5})),this.lg.observe(i.element),Fn(i.element,"reloaded",(function(){return r.videoLoaded()})),this.cg=this.cg||[];var r=new et(this,n);this.cg.push(r);var e=r.video.element;F(e,w),function(n){n.classList.add("i-amphtml-media-component")}(e),n.signals().signal(w),e.classList.add("i-amphtml-video-interface")}},t.gg=function(n){i("play",(function(){return Jn(n,!1)})),i("pause",(function(){return n.pause()})),i("mute",(function(){return n.mute()})),i("unmute",(function(){return n.unmute()}));var t=function(){return n.fullscreenEnter()};function i(t,i){n.registerAction(t,(function(){Y(n),i()}),1)}i("fullscreenenter",t),i("fullscreen",t)},t.wg=function(n){if(rt(this.vg,n))return this.vg;for(var t=0;this.cg&&t<this.cg.length;t++){var i=this.cg[t];if(rt(i,n))return this.vg=i,i}return null},t.kg=function(n){return gn(this.wg(n))},t.registerForAutoFullscreen=function(n){this.yg().register(n)},t.qg=function(){return this.yg()},t.getVideoStateProperty=function(n,t){var i=this.ampdoc.getRootNode(),r=bn().assertElement(i.getElementById(n),'Could not find an element with id="'.concat(n,'" for VIDEO_STATE')),e=this.kg(r);return(e?e.getAnalyticsDetails():p()).then((function(n){return n?n[t]:""}))},t.getPlayingState=function(n){return this.kg(n).getPlayingState()},t.isMuted=function(n){return this.kg(n).isMuted()},t.userInteracted=function(n){return this.kg(n).userInteracted()},t.isRollingAd=function(n){return this.kg(n).isRollingAd()},t.pauseOtherVideos=function(n){this.cg.forEach((function(t){t.isPlaybackManaged()&&t!==n&&t.getPlayingState()==R&&t.video.pause()}))},n}(),rt=function(n,t){return!!n&&(n.video===t||n.video.element===t)},et=function(){function n(n,t){var i=this;this.Sg=n,this.qi=n.ampdoc,this.video=t,this.xg=!0,this.jg=!1,this.Zn=!1,this.Og=!1,this.xe=!1,this.Rg=new $n,this.Rg.onSessionEnd((function(){return ct(i,"video-session")})),this.Mg=new $n,this.Mg.onSessionEnd((function(){return ct(i,"video-session-visible")})),this.Pg=ln((function(){return new ft(i.qi.win,i)})),this.Ag=!1,this.Eg=!1,this.Tg=null,this.$=!1,this.Cg=!1,this.hasAutoplay=t.element.hasAttribute("autoplay"),this.hasAutoplay&&this.Sg.installAutoplayStyles(),this.Yg=nt,this.zg=function(){Jn(i.video,!1)},this.Ig=function(){i.video.pause()},Fn(t.element,g,(function(){return i.videoLoaded()})),Fn(t.element,x,(function(){return i.Ug()})),Fn(t.element,"play",(function(){i.Cg=!0,ct(i,T)})),Fn(t.element,k,(function(){return i._g()})),Fn(t.element,S,(function(){return i.$=!0})),Fn(t.element,q,(function(){i.$=!1,i.Sg.pauseOtherVideos(i)})),Fn(t.element,M,(function(n){var t=Bn(n),r=t.eventType;r&&i.Wg(r,t.vars)})),Fn(t.element,j,(function(){i.Og=!1,ct(i,"video-ended")})),Fn(t.element,O,(function(){i.Og=!0,ct(i,"video-ad-start")})),Fn(t.element,P,(function(){i.Og=!1,ct(i,"video-ad-end")})),t.signals().whenSignal(w).then((function(){return i.Fg()})),this.Lg=ln((function(){var n="firstPlay",t=Dn(i.qi.win,n,{}),r=i.video.element;Yn(r).trigger(r,n,t,1)})),this.Bg()}var t=n.prototype;return t.dispose=function(){this.Pg().stop()},t.Wg=function(n,t){var i=pn({},"__amp:eventType",n);Object.keys(t).forEach((function(n){i["custom_".concat(n)]=t[n]})),ct(this,"video-hosted-custom",i)},t.Bg=function(){var n=this;this.video.signals().whenSignal("playback-delegated").then((function(){n.xg=!1,n.Zn&&n.video.pause()}))},t.isMuted=function(){return this.$},t.isPlaybackManaged=function(){return this.xg},t.Fg=function(){this.Ng()&&this.Sg.registerForAutoFullscreen(this),this.hasAutoplay&&this.Dg()},t.Ng=function(){var n=this.video.element;return!(this.video.preimplementsAutoFullscreen()||!n.hasAttribute("rotate-to-fullscreen"))&&kn(this.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",n)},t._g=function(){this.Zn=!0,this.getPlayingState()==R&&(this.Lg(),this.Sg.pauseOtherVideos(this));var n,t,i,r,e,u=this.video,a=u.element;u.preimplementsMediaSessionAPI()||a.classList.contains("i-amphtml-disable-mediasession")||(function(n,t){var i=_n(n);if(t&&t.artwork){var r=t.artwork;gn(o(r)),r.forEach((function(n){if(n){var t=l(n)?n.src:n;kn(i.isProtocolValid(t))}}))}}(a,this.Yg),n=this.qi.win,t=this.Yg,i=this.zg,r=this.Ig,"mediaSession"in(e=n.navigator)&&n.MediaMetadata&&(e.mediaSession.metadata=new n.MediaMetadata(nt),e.mediaSession.metadata=new n.MediaMetadata(t),e.mediaSession.setActionHandler("play",i),e.mediaSession.setActionHandler("pause",r))),this.Rg.beginSession(),this.xe&&this.Mg.beginSession(),this.Cg||ct(this,T)},t.Ug=function(){ct(this,"video-pause"),this.Zn=!1,this.Eg?this.Eg=!1:this.Rg.endSession()},t.videoLoaded=function(){this.jg=!0,this.Tg=Nn(this.video.element),this.Jg(),this.Pg().start(),this.xe&&this.Gg()},t.Jg=function(){if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.Yg=v(this.video.getMetadata()));var n=this.qi.win.document;if(!this.Yg.artwork||0==this.Yg.artwork.length){var t=function(n){var t=n.querySelector('script[type="application/ld+json"]');if(t){var i=I(t.textContent);if(i&&i.image)return"string"==typeof i.image?i.image:i.image["@list"]&&"string"==typeof i.image["@list"][0]?i.image["@list"][0]:"string"==typeof i.image.url?i.image.url:"string"==typeof i.image[0]?i.image[0]:void 0}}(n)||function(n){var t=n.querySelector('meta[property="og:image"]');return t?t.getAttribute("content"):void 0}(n)||function(n){var t=n.querySelector('link[rel="shortcut icon"]')||n.querySelector('link[rel="icon"]');return t?t.getAttribute("href"):void 0}(n);t&&(this.Yg.artwork=[{"src":t}])}if(!this.Yg.title){var i=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.Tg.getAttribute("title")||this.Tg.getAttribute("aria-label")||n.title;i&&(this.Yg.title=i)}}},t.Vg=function(){this.jg&&this.Gg()},t.Gg=function(){var n=this;this.qi.isVisible()&&Wn(this.qi.win).then((function(t){n.hasAutoplay&&!n.userInteracted()&&t?n.Zg():n.$g()}))},t.Dg=function(){var n=this;this.video.isInteractive()&&this.video.hideControls(),Wn(this.qi.win).then((function(t){t||!n.video.isInteractive()?(n.video.mute(),n.Hg()):n.video.showControls()}))},t.Hg=function(){var n=this,t=this.video,i=this.video,r=i.element;if(i.win,!r.hasAttribute("noaudio")&&!r.signals().get(A)){var e=function(n,t){for(var i=Hn(t)(Qn),r=i.firstElementChild,e=0;e<4;e++){for(var o=r.cloneNode(!0),u=o.children,a=0;a<u.length;a++)u[a].classList.add("amp-video-eq-".concat(e+1,"-").concat(a+1));i.appendChild(o)}return J(r),i}(0,r),o=[e],u=[Fn(r,x,(function(){return f(!1)})),Fn(r,k,(function(){return f(!0)})),Fn(r,O,(function(){s(!1),t.showControls()})),Fn(r,P,(function(){s(!0),t.hideControls()})),Fn(r,q,(function(){return Y(t)}))];if(t.isInteractive()){t.hideControls();var a=function(n,t){var i=Hn(n)(Kn);return t&&t.title&&i.setAttribute("aria-label",t.title),i}(r,this.Yg);o.push(a),u.push(Fn(a,"click",(function(){return Y(t)})))}t.mutateElementSkipRemeasure((function(){o.forEach((function(n){r.appendChild(n)}))})),this.Og&&s(!1),t.signals().whenSignal(A).then((function(){n.Lg(),t.isInteractive()&&t.showControls(),t.unmute(),u.forEach((function(n){n()})),t.mutateElementSkipRemeasure((function(){o.forEach((function(n){J(n)}))}))}))}function s(n){t.mutateElementSkipRemeasure((function(){o.forEach((function(t){!function(n,t){void 0===t&&(t=n.hasAttribute("hidden")),t?n.removeAttribute("hidden"):n.setAttribute("hidden","")}(t,n)}))}))}function f(n){t.mutateElementSkipRemeasure((function(){return e.classList.toggle("amp-video-eq-play",n)}))}},t.Zg=function(){this.xg&&(this.xe?(this.Mg.beginSession(),Jn(this.video,!0),this.Ag=!0):(this.Zn&&this.Mg.endSession(),this.video.pause(),this.Eg=!0))},t.$g=function(){this.xe?this.Mg.beginSession():this.Zn&&this.Mg.endSession()},t.updateVisibility=function(n){var t=this.xe;this.xe=n,n!=t&&this.Vg()},t.getPlayingState=function(){return this.Zn?this.Zn&&this.Ag&&!this.userInteracted()?"playing_auto":R:E},t.isRollingAd=function(){return this.Og},t.userInteracted=function(){return null!=this.video.signals().get(A)},t.getAnalyticsDetails=function(){var n=this,t=this.video;return Promise.all([Wn(this.qi.win),Z(t.element)]).then((function(i){var r=i[0],e=i[1].boundingClientRect,o=e.height,u=e.width,a=n.hasAutoplay&&r,s=t.getPlayedRanges(),f=s.reduce((function(n,t){return n+t[1]-t[0]}),0);return{"autoplay":a,"currentTime":t.getCurrentTime(),"duration":t.getDuration(),"height":o,"id":t.element.id,"muted":n.$,"playedTotal":f,"playedRangesJson":JSON.stringify(s),"state":n.getPlayingState(),"width":u}}))},n}(),ot=function(){function n(n,t){var i=this;this.Sg=t,this.qi=n,this.Kg=null,this.Qg=null,this.cg=[],this.Xg=[],this.hw=function(){return i.dw()},this.pw=function(n){return i.mw(n)==R},this.yw=function(n,t){return i.bw(n,t)},this.gw(),this.ww()}var t=n.prototype;return t.dispose=function(){this.Xg.forEach((function(n){return n()})),this.Xg.length=0},t.register=function(n){var t=n.video,i=t.element;this.kw(i)&&(this.cg.push(t),Fn(i,x,this.hw),Fn(i,k,this.hw),Fn(i,j,this.hw),t.signals().whenSignal(A).then(this.hw),this.dw())},t.ww=function(){var n=this,t=this.qi.getRootNode(),i=function(){return n.qw()};this.Xg.push(Fn(t,"webkitfullscreenchange",i),Fn(t,"mozfullscreenchange",i),Fn(t,"fullscreenchange",i),Fn(t,"MSFullscreenChange",i))},t.isInLandscape=function(){return(n=this.qi.win).screen&&"orientation"in n.screen?n.screen.orientation.type.startsWith("landscape"):90==Math.abs(n.orientation);var n},t.kw=function(n){if("video"==Nn(n).tagName.toLowerCase())return!0;var t=zn(this.qi.win);return!t.isIos()&&!t.isSafari()||function(n){return!!{"amp-dailymotion":!0,"amp-ima-video":!0}[n.tagName.toLowerCase()]}(n)},t.qw=function(){this.Kg=null},t.gw=function(){var n=this,t=this.qi.win,i=t.screen;if(i&&"orientation"in i){var r=i.orientation;this.Xg.push(Fn(r,"change",(function(){return n.Sw()})))}this.Xg.push(Fn(t,"orientationchange",(function(){return n.Sw()})))},t.Sw=function(){this.isInLandscape()?null!=this.Qg&&this.xw(this.Qg):this.Kg&&this.jw(this.Kg)},t.xw=function(n){var t=zn(this.qi.win);this.Kg=n,t.isAndroid()&&t.isChrome()?n.fullscreenEnter():this.Ow(n).then((function(){return n.fullscreenEnter()}))},t.jw=function(n){this.Kg=null,this.Ow(n,"center").then((function(){return n.fullscreenExit()}))},t.Ow=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=n.element,r=this.Rw();return this.Mw().then((function(){return Z(i)})).then((function(n){var e=n.boundingClientRect,o=e.bottom,u=e.top,a=r.getSize().height;if(u>=0&&o<=a)return p();var s=t||(o>a?"bottom":"top");return r.animateScrollIntoView(i,s)}))},t.Rw=function(){return Cn(this.qi)},t.Mw=function(){return In(this.qi.win).promise(330)},t.dw=function(){var n=this;if(this.isInLandscape())return Promise.resolve(this.Qg);this.Qg=null;var t=this.cg.filter(this.pw).map((function(n){return Z(n.element)}));return Promise.all(t).then((function(t){var i=t.sort(n.yw)[0];return i&&i.intersectionRatio>.5?i.target.getImpl().then((function(t){return n.Qg=t})):n.Qg}))},t.bw=function(n,t){var i=n.boundingClientRect,r=n.intersectionRatio,e=t.boundingClientRect,o=r-t.intersectionRatio;if(Math.abs(o)>.1)return o;var u=Cn(this.qi),a=ut(u,i),s=ut(u,e);return a<s||a>s?a-s:i.top-e.top},t.mw=function(n){return this.Sg.getPlayingState(n)},n}();function ut(n,t){var i=t.top+t.height/2,r=n.getSize().height/2;return Math.abs(i-r)}function at(n){return 10*n*5}var st=function(n){return!!n&&!isNaN(n)&&n>1},ft=function(){function n(n,t){this.js=In(n),this.Pw=t,this.Xg=null,this.Aw=0,this.Ew=0}var t=n.prototype;return t.start=function(){var n=this,t=this.Pw.video.element;this.stop(),this.Xg=this.Xg||[],this.Tw()?this.Cw(this.Ew):this.Xg.push(function(t,i,r,e){var o=function(){n.Tw()&&n.Cw(n.Ew)},u=Ln(t,"loadedmetadata",(function(n){try{o(n)}finally{o=null,u()}}),void 0);return u}(t)),this.Xg.push(Fn(t,j,(function(){n.Tw()&&n.Yw(100)})))},t.stop=function(){if(this.Xg){for(;this.Xg.length>0;)this.Xg.pop()();this.Ew++}},t.Tw=function(){var n=this.Pw.video,t=n.getDuration();if(!st(t))return!1;if(at(t)<250){var i=Math.ceil(5);this.zw("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",i,"seconds long.",n.element)}return!0},t.zw=function(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];bn().warn.apply(bn(),[tt].concat(t))},t.Cw=function(n){var t,i=this;if(n==this.Ew){var r=this.Pw,e=this.js,o=r.video,u=function(){return i.Cw(n)};if(r.getPlayingState()!=E){var a=o.getDuration();if(st(a)){var s=(t=at(a),m(!0),Math.min(Math.max(t,250),4e3)),f=o.getCurrentTime()/a*100,c=5*Math.floor(f/5);gn(d(c)),this.Yw(c),e.delay(u,s)}else e.delay(u,500)}else e.delay(u,500)}},t.Yw=function(n){n<=0||this.Aw!=n&&(this.Aw=n,this.Iw(n))},t.Iw=function(n){ct(this.Pw,"video-percentage-played",{"normalizedPercentage":n.toString()})},n}();function ct(n,t,i){var r=n.video;n.getAnalyticsDetails().then((function(n){i&&Object.assign(n,i),F(r.element,t,n)}))}new Set(["c","v","a","ad"]);var ht=["<iframe frameborder=0 allowfullscreen></iframe>"],lt="amp-video-iframe",vt="video-custom-",dt=["allow-scripts","allow-same-origin","allow-popups","allow-popups-to-escape-sandbox","allow-top-navigation-by-user-activation"],mt=ln((function(){return new RegExp("^".concat(vt))})),pt=function(n,t){return function(n,t){return function(n,t,i){if(!t)return n;var r=n.split("#",2),e=r[0].split("?",2);return e[0]+(e[1]?"?".concat(e[1],"&").concat(t):"?".concat(t))+(r[1]?"#".concat(r[1]):"")}(n,function(n){var t,i,r=[];for(var e in n){var o=n[e];if(null!=o){o=u(o);for(var a=0;a<o.length;a++)r.push((t=e,i=o[a],"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(i))))}}return r.join("&")}(t))}(n,function(n,t,i){var r=n.dataset,e={},o=/^param(.+)/;for(var u in r){var a=u.match(o);a&&(e[a[1][0].toLowerCase()+a[1].substr(1)]=r[u])}return e}(t))},yt=function(n){!function(n,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(i&&i.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),i&&t(n,i)}(f,n);var r,o,a=(r=f,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,t=i(r);if(o){var u=i(this).constructor;n=Reflect.construct(t,arguments,u)}else n=t.apply(this,arguments);return e(this,n)});function f(n){var t;return(t=a.call(this,n)).tb=null,t.YS=null,t.LS=null,t.BS=!1,t.VS=function(n){return t.Z(n)},t.Gt=new hn(t.element),t}var c=f.prototype;return c.isLayoutSupported=function(n){return function(n){return"fixed"==n||"fixed-height"==n||"responsive"==n||"fill"==n||"flex-item"==n||"fluid"==n||"intrinsic"==n}(n)},c.buildCallback=function(){var n,t,i,r;n=this.element,t="video-manager",i=it,function(n,t,i,r,e,o){var u=En(n),a=u[i];a||(a=u[i]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),a.ctor||(a.ctor=r,a.context=t,a.sharedInstance=!1,a.resolve&&Mn(n,i))}(Pn(r=On(n)),r,t,i)},c.layoutCallback=function(){var n,t,i,r=this;this.user().assert((i=(t=(n=this.element).getLayoutSize()).height,!!(t.width>10||i>10||function(n,t){return n.closest?n.closest(".i-amphtml-overlay"):function(n,t,i){var r;for(r=n;r&&void 0!==r;r=r.parentElement)if(t(r))return r;return null}(n,(function(n){return function(n,t){var i=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector;return!!i&&i.call(n,".i-amphtml-overlay")}(n)}))}(n))),"<amp-video-iframe> does not allow tracking iframes. Please use amp-analytics instead.");var e,o=JSON.stringify(this.lq());return this.tb=(function(n,t){for(var i in t)n.setAttribute(i,t[i])}(e=function(n,t,i,r){var e=n.element,o=Hn(e)(ht);return i&&o.setAttribute("name",i),r&&o.setAttribute("sandbox",r.join(" ")),function(n,t,i,r){for(var e,o=s(u(["referrerpolicy"]),!0);!(e=o()).done;){var a=e.value,f=t.getAttribute(a);null!==f&&i.setAttribute(a,f)}}(0,n.element,o),o.src=_n(e).assertHttpsUrl(t,e),B(o),e.appendChild(o),o}(this,this.mj(),o,dt),{"scrolling":"no"}),rn(e,"overflow","hidden"),e),this.YS=Fn(this.win,"message",this.VS),this.ZS().then((function(){return r.uk()}))},c.mutatedAttributesCallback=function(n){n.src&&this.$S()},c.$S=function(){var n=this.tb;n&&n.src!=this.mj()&&(n.src=this.mj())},c.lq=function(){var n,t,i=jn(this.element,"documentInfo").get(),r=i.canonicalUrl,e=i.sourceUrl,o=this.getAmpDoc().getRootNode(),u=o.documentElement;return{"sourceUrl":e,"canonicalUrl":r,"title":o.title||null,"lang":(null==u?void 0:u.lang)||null,"jsonLd":(n=o,t=n.querySelector('script[type="application/ld+json"]'),t&&I(t.textContent))}},c.uk=function(){var n,t=this.element;(n=t,jn(n,"video-manager")).register(this),F(t,g)},c.createPlaceholderCallback=function(){var n=this.element,t=n.getAttribute("poster");if(!t)return null;var i=new Image;return i.src=pt(t,n),i.setAttribute("loading","lazy"),i.setAttribute("placeholder",""),B(i),i},c.unlayoutCallback=function(){return this.BS=!1,this.HS(),this.Gt.updatePlaying(!1),!0},c.HS=function(){this.BS=!1,this.tb&&(J(this.tb),this.tb=null),this.YS&&(this.YS(),this.YS=null)},c.mj=function(){var n=this.element,t=_n(n),i=n.getAttribute("src");return t.getSourceOrigin(i)===t.getWinOrigin(this.win)&&bn().warn(lt,"Origins of document inside amp-video-iframe and the host are the same, which allows for same-origin behavior. However in AMP cache, origins won't match. Please ensure you do not rely on any same-origin privileges.",n),function(n){return n.indexOf("#")>-1?n:"".concat(n,"#amp=1")}(pt(i,n))},c.ZS=function(){return this.LS=new y,this.LS.promise},c.GS=function(n){return function(n,t,i){return!(!t||n.source!=t.contentWindow)&&("string"==typeof i?i==n.origin:i.test(n.origin))}(n,this.tb,/.*/)},c.Z=function(n){var t=this;if(this.tb&&this.GS(n)){var i=Bn(n);if((r=i)&&(l(r)||r.startsWith("{"))){var r,e,o=l(e=i)?e:I(e);if(null!=o){var u=o.method;if(u){var a=o.id;return"getIntersection"==u?Z(this.element).then((function(n){t.KS(a,n)})):"getConsentData"===u?void this.QS(a):void kn(!1,"Unknown method `%s`.",u)}var s=o.event,f="canplay"==s;this.BS=this.BS||f;var c=gn(this.LS),h=c.reject,v=c.resolve;if(f)return v();if("error"==s&&!this.BS)return h("Received `error` event.");if("analytics"!=s){switch(s){case"playing":this.Gt.updatePlaying(!0);break;case"pause":case"ended":this.Gt.updatePlaying(!1)}z.indexOf(s)>-1&&F(this.element,s)}else{var d=gn(o.analytics);this.XS(d.eventType,d.vars)}}}}},c.XS=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};bn().assertString(n,"`eventType` missing in analytics event"),kn(mt().test(n),"Invalid analytics `eventType`. Value must start with `%s`.",vt),F(this.element,M,{"eventType":n,"vars":t})},c.KS=function(n,t){var i=t.intersectionRatio,r=t.time,e=i<.5?0:i;this.cb({"id":n,"args":{"intersectionRatio":e,"time":r}})},c.QS=function(n){var t,i,r=this;(t=this.element,i=this.getConsentPolicy(),Un(t).then((function(n){var t={"consentMetadata":n&&n.getConsentMetadataInfo,"consentString":n&&n.getConsentStringInfo,"consentPolicyState":n&&n.whenPolicyResolved,"consentPolicySharedData":n&&n.getMergedSharedData};return n?Promise.all(Object.keys(t).map((function(r){return t[r].call(n,i||"default").then((function(n){return pn({},r,n)}))}))).then((function(n){return Object.assign.apply({},n)})):t}))).then((function(t){r.cb({"id":n,"args":t})}))},c.dq=function(n){var t=this,i=(this.LS||{}).promise;i&&i.then((function(){t.cb({"event":"method","method":n})}))},c.cb=function(n){this.tb&&this.tb.contentWindow&&this.tb.contentWindow.postMessage(JSON.stringify(n),"*")},c.pauseCallback=function(){this.pause()},c.pause=function(){this.dq("pause")},c.play=function(){this.dq("play")},c.mute=function(){this.dq("mute")},c.unmute=function(){this.dq("unmute")},c.isInteractive=function(){return!0},c.supportsPlatform=function(){return!0},c.preimplementsMediaSessionAPI=function(){return this.element.hasAttribute("implements-media-session")},c.preimplementsAutoFullscreen=function(){return this.element.hasAttribute("implements-rotate-to-fullscreen")},c.fullscreenEnter=function(){this.dq("fullscreenenter")},c.fullscreenExit=function(){this.dq("fullscreenexit")},c.isFullscreen=function(){return!!this.tb&&function(n){var t=n.webkitDisplayingFullscreen;if(void 0!==t)return t;var i=n.ownerDocument;return!!i&&(i.fullscreenElement||i.webkitFullscreenElement||i.mozFullScreenElement||i.webkitCurrentFullScreenElement)==n}(this.tb)},c.showControls=function(){this.dq("showcontrols")},c.hideControls=function(){this.dq("hidecontrols")},c.getMetadata=function(){},c.getDuration=function(){return 0},c.getCurrentTime=function(){return 0},c.getPlayedRanges=function(){return[]},c.seekTo=function(n){this.user().error(lt,"`seekTo` not supported.")},f}(n.BaseElement);n.registerElement(lt,yt)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-video-iframe-0.1.js.map