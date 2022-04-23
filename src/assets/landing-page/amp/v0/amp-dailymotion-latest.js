;
(self.AMP=self.AMP||[]).push({m:0,v:"2203281422000",n:"amp-dailymotion",ev:"0.1",l:!0,f:function(t,n){!function(){function n(t,n,i){return n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t}function i(t,n){return(i=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function u(t,n){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),i.push.apply(i,r)}return i}function a(t){for(var i=1;i<arguments.length;i++){var r=null!=arguments[i]?arguments[i]:{};i%2?u(Object(r),!0).forEach((function(i){n(t,i,r[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}var s=Array.isArray;function f(t){return s(t)?t:[t]}function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,r=new Array(n);i<n;i++)r[i]=t[i];return r}function h(t,n){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(i)return(i=i.call(t)).next.bind(i);if(Array.isArray(t)||(i=function(t,n){if(t){if("string"==typeof t)return c(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?c(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){i&&(t=i);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,v=Object.prototype,d=(v.hasOwnProperty,v.toString);function m(t){var n=Object.create(null);return t&&Object.assign(n,t),n}function p(t){return"number"==typeof t&&isFinite(t)}function y(t,n,i,r,e,o,u,a,s,f,c){return t}function b(){return l||(l=Promise.resolve(void 0))}var w,g=function(){var t=this;this.promise=new Promise((function(n,i){t.resolve=n,t.reject=i}))};function j(t){return new Promise((function(n){n(t())}))}function k(t){var n=Object.getOwnPropertyDescriptor(t,"message");if(null!=n&&n.writable)return t;var i=t.message,r=t.stack,e=new Error(i);for(var o in t)e[o]=t[o];return e.stack=r,e}function O(t){for(var n,i=null,r="",e=h(arguments,!0);!(n=e()).done;){var o=n.value;o instanceof Error&&!i?i=k(o):(r&&(r+=" "),r+=o)}return i?r&&(i.message=r+": "+i.message):i=new Error(r),i}function q(t){var n,i;null===(n=(i=self).__AMP_REPORT_ERROR)||void 0===n||n.call(i,t)}function x(t){var n=O.apply(null,arguments);setTimeout((function(){throw q(n),n}))}function S(t){try{for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return t.apply(null,i)}catch(t){x(t)}}function M(t){var n=O.apply(null,arguments);return n.expected=!0,n}var R=["Webkit","webkit","Moz","moz","ms","O","o"],E={"getPropertyPriority":function(){return""},"getPropertyValue":function(){return""}};function T(t,n,i,r,e){var o=function(t,n,i){if(n.startsWith("--"))return n;w||(w=m());var r=w[n];if(!r||i){if(r=n,void 0===t[n]){var e=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(n),o=function(t,n){for(var i=0;i<R.length;i++){var r=R[i]+n;if(void 0!==t[r])return r}return""}(t,e);void 0!==t[o]&&(r=o)}i||(w[n]=r)}return r}(t.style,n,e);if(o){var u,a=r?i+r:i;t.style.setProperty((u=o.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()})),R.some((function(t){return u.startsWith(t+"-")}))?"-".concat(u):u),a)}}function A(t){return null==t.__AMP_AUTOPLAY&&(t.__AMP_AUTOPLAY=function(t){var n,i=t.document.createElement("video");return i.setAttribute("muted",""),i.setAttribute("playsinline",""),i.setAttribute("webkit-playsinline",""),i.setAttribute("height","0"),i.setAttribute("width","0"),i.muted=!0,i.playsInline=!0,i.playsinline=!0,i.webkitPlaysinline=!0,function(t,n){for(var i in n)T(t,i,n[i])}(i,{position:"fixed",top:"0",width:"0",height:"0",opacity:"0"}),n=i,j((function(){return n.play()})).catch((function(){})),Promise.resolve(!i.paused)}(t)),t.__AMP_AUTOPLAY}function P(t){return t.querySelector("video, iframe")}function Y(t,n){var i=j((function(){return t.play(!!n)}));return i.catch((function(t){!function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];q(M.apply(null,i))}("TRYPLAY",t)})),i}var z=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function C(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";try{return decodeURIComponent(t)}catch(t){return n}}function I(t){var n=!1,i=null,r=t;return function(){if(!n){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];i=r.apply(self,e),n=!0,r=null}return i}}var _=self.AMP_CONFIG||{},U=("string"==typeof _.thirdPartyFrameRegex?new RegExp(_.thirdPartyFrameRegex):_.thirdPartyFrameRegex,("string"==typeof _.cdnProxyRegex?new RegExp(_.cdnProxyRegex):_.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function W(t){if(!self.document||!self.document.head)return null;if(self.location&&U.test(self.location.origin))return null;var n=self.document.head.querySelector('meta[name="'.concat(t,'"]'));return n&&n.getAttribute("content")||null}_.thirdPartyUrl,_.thirdPartyFrameHost,_.cdnUrl||W("runtime-host"),_.errorReportingUrl,_.betaErrorReportingUrl,_.localDev,_.geoApiUrl||W("amp-geo-api"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var N=self.__AMP_LOG;function F(t){return N.user||(N.user=J()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(N.user.win,t)?N.userForEmbed||(N.userForEmbed=J()):N.user}function J(t){return function(t,n){throw new Error("failed to call initLogConstructor")}()}function L(t,n,i,r,e,o,u,a,s,f,c){return t}function B(t,n,i,r,e,o,u,a,s,f,c){return F().assert(t,n,i,r,e,o,u,a,s,f,c)}function D(t,n){return function(t,n,i){if(!n)return t;var r=t.split("#",2),e=r[0].split("?",2);return e[0]+(e[1]?"?".concat(e[1],"&").concat(n):"?".concat(n))+(r[1]?"#".concat(r[1]):"")}(t,function(t){var n,i,r=[];for(var e in t){var o=t[e];if(null!=o){o=f(o);for(var u=0;u<o.length;u++)r.push((n=e,i=o[u],"".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(i))))}}return r.join("&")}(n))}new Set(["c","v","a","ad"]);var V="unstarted",Z="apiready",$="play",G="pause";function H(t){return(t.ownerDocument||t).defaultView}var K={bubbles:!0,cancelable:!0};function Q(t){var n;null===(n=t.parentElement)||void 0===n||n.removeChild(t)}function X(t,n){t.insertBefore(n,t.firstChild)}function tt(t){return t.parent&&t.parent!=t}function nt(t,n,i,r){var e=i||{};y(t.ownerDocument);var o=t.ownerDocument.createEvent("Event");o.data=e;var u=r||K,a=u.bubbles,s=u.cancelable;o.initEvent(n,a,s),t.dispatchEvent(o)}var it=/vertical/,rt=new WeakMap,et=new WeakMap,ot=new WeakMap;function ut(t){var n=rt.get(t);return n||(n=new t.ResizeObserver(at),rt.set(t,n)),n}function at(t){for(var n=new Set,i=t.length-1;i>=0;i--){var r=t[i],e=r.target;if(!n.has(e)){n.add(e);var o=et.get(e);if(o){ot.set(e,r);for(var u=0;u<o.length;u++){var a=o[u],s=a.callback;st(a.type,s,r)}}}}}function st(t,n,i){if(0==t){var r=i.contentRect,e=r.height;S(n,{width:r.width,height:e})}else if(1==t){var o,u=i.borderBoxSize;if(u)o=u.length>0?u[0]:{inlineSize:0,blockSize:0};else{var a,s,f=i.target,c=H(f),h=it.test(function(t,n){return t.getComputedStyle(n)||E}(c,f).writingMode),l=f,v=l.offsetHeight,d=l.offsetWidth;h?(s=d,a=v):(a=d,s=v),o={inlineSize:a,blockSize:s}}S(n,o)}}var ft=function(){function t(t){this.Gn=t,this.Zn=!1,this.Un=!1,this.Jn=this.Jn.bind(this)}var n=t.prototype;return n.updatePlaying=function(t){t!==this.Zn&&(this.Zn=t,t?(this.Un=!1,function(t,n,i){var r=t.ownerDocument.defaultView;if(r){var e=et.get(t);if(e||(e=[],et.set(t,e),ut(r).observe(t)),!e.some((function(t){return t.callback===i&&1===t.type}))){e.push({type:1,callback:i});var o=ot.get(t);o&&setTimeout((function(){return st(1,i,o)}))}}}(this.Gn,0,this.Jn)):function(t,n){!function(t,n,i){var r=et.get(t);if(r&&(function(t,n){for(var r=[],e=0,o=0;o<t.length;o++){var u=t[o];(a=u).callback===i&&1===a.type?r.push(u):(e<o&&(t[e]=u),e++)}var a;e<t.length&&(t.length=e)}(r),0==r.length)){et.delete(t),ot.delete(t);var e=t.ownerDocument.defaultView;e&&ut(e).unobserve(t)}}(t,0,n)}(this.Gn,this.Jn))},n.Jn=function(t){var n=t.blockSize,i=t.inlineSize>0&&n>0;if(i!==this.Un){this.Un=i;var r=this.Gn;i||r.pause()}},t}();function ct(t,n){return mt(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n)}function ht(t,n){return mt(dt(vt(t)),n)}function lt(t,n){var i=dt(vt(t));return yt(i,n)?mt(i,n):null}function vt(t){return t.nodeType?(n=H(t),ct(n,"ampdoc")).getAmpDoc(t):t;var n}function dt(t){var n=vt(t);return n.isSingleDoc()?n.win:n}function mt(t,n){L(yt(t,n));var i=pt(t)[n];return i.obj||(L(i.ctor),L(i.context),i.obj=new i.ctor(i.context),L(i.obj),i.context=null,i.resolve&&i.resolve(i.obj)),i.obj}function pt(t){var n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}function yt(t,n){var i=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!i||!i.ctor)}var bt,wt,gt,jt=function(t){return lt(t,"action")},kt=function(t){return ct(t,"platform")},Ot=function(t){return ct(t,"preconnect")},qt=function(t){return mt(t,"timer")},xt=function(t){return lt(t,"url")},St=function(t){return ht(t,"viewport")};function Mt(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=i.needsRootBounds,e=i.rootMargin,o=i.threshold,u=tt(n)&&(r||e)?n.document:void 0;return new n.IntersectionObserver(t,{threshold:o,root:u,rootMargin:e})}function Rt(t){var n,i=null===(n=bt)||void 0===n?void 0:n.get(t);if(!i){var r=function(t){bt||(bt=new WeakMap,wt=new WeakMap),y(wt);var n=wt.get(t);return n||(n=Mt((function(t){for(var i=new Set,r=t.length-1;r>=0;r--){var e,o=t[r].target;i.has(o)||(i.add(o),y(n),n.unobserve(o),y(bt),null===(e=bt.get(o))||void 0===e||e.resolve(t[r]),bt.delete(o))}}),t,{needsRootBounds:!0}),wt.set(t,n)),n}(H(t));y(bt),r.observe(t),i=new g,bt.set(t,i)}return i.promise}function Et(t,n,i,r){var e=t,o=i,u=function(t){try{return o(t)}catch(t){var n,i;throw null===(n=(i=self).__AMP_REPORT_ERROR)||void 0===n||n.call(i,t),t}},a=function(){if(void 0!==gt)return gt;gt=!1;try{var t={get capture(){return gt=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return gt}(),s=!(null==r||!r.capture);return e.addEventListener(n,u,a?r:s),function(){null==e||e.removeEventListener(n,u,a?r:s),o=null,e=null,u=null}}function Tt(t,n,i,r){var e={detail:i};if(Object.assign(e,r),"function"==typeof t.CustomEvent)return new t.CustomEvent(n,e);var o=t.document.createEvent("CustomEvent");return o.initCustomEvent(n,!!e.bubbles,!!e.cancelable,i),o}function At(t,n,i,r){return Et(t,n,i,r)}function Pt(t){return t.data}new WeakMap,new WeakMap;var Yt,zt=function(){function t(){this.vt=null}var n=t.prototype;return n.add=function(t){var n=this;return this.vt||(this.vt=[]),this.vt.push(t),function(){n.remove(t)}},n.remove=function(t){var n,i,r;this.vt&&(i=t,-1!=(r=(n=this.vt).indexOf(i))&&n.splice(r,1))},n.removeAll=function(){this.vt&&(this.vt.length=0)},n.fire=function(t){if(this.vt)for(var n,i=h(this.vt.slice(),!0);!(n=i()).done;)(0,n.value)(t)},n.getHandlerCount=function(){var t,n;return null!==(t=null===(n=this.vt)||void 0===n?void 0:n.length)&&void 0!==t?t:0},t}(),Ct=function(){function t(){this.ag=!1,this.fg=new zt}var n=t.prototype;return n.onSessionEnd=function(t){this.fg.add(t)},n.beginSession=function(){this.ag=!0},n.endSession=function(){this.ag&&this.fg.fire(),this.ag=!1},n.isSessionActive=function(){return this.ag},t}();function It(t){var n=t.ownerDocument||t;return Yt&&Yt.ownerDocument===n||(Yt=n.createElement("div")),_t}function _t(t){return function(t,n){y(1===n.length),t.innerHTML=n[0];var i=t.firstElementChild;return y(i),y(!i.nextElementSibling),t.removeChild(i),i}(Yt,t)}var Ut=['<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>'],Wt=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function Nt(t,n,i){if(n[i])return n[i];var r=t.querySelector("style[".concat(i,"], link[").concat(i,"]"));return r?(n[i]=r,r):null}var Ft={"title":"","artist":"","album":"","artwork":[{"src":""}]},Jt="registered",Lt="load",Bt="playing",Dt="pause",Vt="ended",Zt="muted",$t="unmuted",Gt="ad_start",Ht="ad_end",Kt="playing_manual",Qt="paused",Xt="video-play",tn="user-interacted";function nn(t){t.signals().signal(tn)}var rn="video-manager",en=function(){function t(t){var n=this;this.ampdoc=t,this.installAutoplayStyles=I((function(){return function(t){!function(t,n,i,r,e){var o=t.getHeadNode();!function(t,n,i,r){var e=t.__AMP_CSS_SM;e||(e=t.__AMP_CSS_SM=m());var o="amp-extension=".concat(r);if(o){var u=Nt(t,e,o);if(u)return"STYLE"==u.tagName&&u.textContent!==n&&(u.textContent=n),u}var a=(t.ownerDocument||t).createElement("style");a.textContent=n;a.setAttribute("amp-extension",r),function(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(i){var r=i.nextSibling;t.insertBefore(n,r)}else X(t,n)}(t,a,Nt(t,e,"amp-runtime")),o&&(e[o]=a)}(o,function(t,n){var i=t.__AMP_CSS_TR;return i?i(n):n}(o,".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/"),0,"amp-video-autoplay")}(t)}(n.ampdoc)})),this.cg=null,this.lg=null,this.vg=null,this.js=qt(t.win),this.dg=jt(t.getHeadNode()),this.pg=function(){return n.mg()},this.yg=I((function(){return new an(n.ampdoc,n)})),this.js.delay(this.pg,1e3)}var n=t.prototype;return n.dispose=function(){if(this.yg().dispose(),this.lg.disconnect(),this.lg=null,this.cg)for(var t=0;t<this.cg.length;t++)this.cg[t].dispose()},n.mg=function(){for(var t=0;t<this.cg.length;t++){var n=this.cg[t];n.getPlayingState()!==Qt&&(ln(n,"video-seconds-played"),this.bg(n))}this.js.delay(this.pg,1e3)},n.bg=function(t){var n="timeUpdate",i=t.video.getCurrentTime(),r=t.video.getDuration();if(p(i)&&p(r)&&r>0){var e=i/r,o=Tt(this.ampdoc.win,"".concat(rn,".").concat(n),{"time":i,"percent":e});this.dg.trigger(t.video.element,n,o,1)}},n.register=function(t){var n=this;L(t);var i=t;if(this.gg(t),t.supportsPlatform()&&!this.wg(t)){this.lg||(this.lg=Mt((function(t){return t.forEach((function(t){var i=t.isIntersecting,r=t.target;n.kg(r).updateVisibility(i)}))}),this.ampdoc.win,{threshold:.5})),this.lg.observe(i.element),At(i.element,"reloaded",(function(){return r.videoLoaded()})),this.cg=this.cg||[];var r=new un(this,t);this.cg.push(r);var e=r.video.element;nt(e,Jt),function(t){t.classList.add("i-amphtml-media-component")}(e),t.signals().signal(Jt),e.classList.add("i-amphtml-video-interface")}},n.gg=function(t){i("play",(function(){return Y(t,!1)})),i("pause",(function(){return t.pause()})),i("mute",(function(){return t.mute()})),i("unmute",(function(){return t.unmute()}));var n=function(){return t.fullscreenEnter()};function i(n,i){t.registerAction(n,(function(){nn(t),i()}),1)}i("fullscreenenter",n),i("fullscreen",n)},n.wg=function(t){if(on(this.vg,t))return this.vg;for(var n=0;this.cg&&n<this.cg.length;n++){var i=this.cg[n];if(on(i,t))return this.vg=i,i}return null},n.kg=function(t){return L(this.wg(t))},n.registerForAutoFullscreen=function(t){this.yg().register(t)},n.qg=function(){return this.yg()},n.getVideoStateProperty=function(t,n){var i=this.ampdoc.getRootNode(),r=F().assertElement(i.getElementById(t),'Could not find an element with id="'.concat(t,'" for VIDEO_STATE')),e=this.kg(r);return(e?e.getAnalyticsDetails():b()).then((function(t){return t?t[n]:""}))},n.getPlayingState=function(t){return this.kg(t).getPlayingState()},n.isMuted=function(t){return this.kg(t).isMuted()},n.userInteracted=function(t){return this.kg(t).userInteracted()},n.isRollingAd=function(t){return this.kg(t).isRollingAd()},n.pauseOtherVideos=function(t){this.cg.forEach((function(n){n.isPlaybackManaged()&&n!==t&&n.getPlayingState()==Kt&&n.video.pause()}))},t}(),on=function(t,n){return!!t&&(t.video===n||t.video.element===n)},un=function(){function t(t,n){var i=this;this.Sg=t,this.qi=t.ampdoc,this.video=n,this.xg=!0,this.jg=!1,this.Zn=!1,this.Og=!1,this.xe=!1,this.Rg=new Ct,this.Rg.onSessionEnd((function(){return ln(i,"video-session")})),this.Mg=new Ct,this.Mg.onSessionEnd((function(){return ln(i,"video-session-visible")})),this.Pg=I((function(){return new hn(i.qi.win,i)})),this.Ag=!1,this.Eg=!1,this.Tg=null,this.$=!1,this.Cg=!1,this.hasAutoplay=n.element.hasAttribute("autoplay"),this.hasAutoplay&&this.Sg.installAutoplayStyles(),this.Yg=Ft,this.zg=function(){Y(i.video,!1)},this.Ig=function(){i.video.pause()},At(n.element,Lt,(function(){return i.videoLoaded()})),At(n.element,Dt,(function(){return i.Ug()})),At(n.element,"play",(function(){i.Cg=!0,ln(i,Xt)})),At(n.element,Bt,(function(){return i._g()})),At(n.element,Zt,(function(){return i.$=!0})),At(n.element,$t,(function(){i.$=!1,i.Sg.pauseOtherVideos(i)})),At(n.element,"amp:video:tick",(function(t){var n=Pt(t),r=n.eventType;r&&i.Wg(r,n.vars)})),At(n.element,Vt,(function(){i.Og=!1,ln(i,"video-ended")})),At(n.element,Gt,(function(){i.Og=!0,ln(i,"video-ad-start")})),At(n.element,Ht,(function(){i.Og=!1,ln(i,"video-ad-end")})),n.signals().whenSignal(Jt).then((function(){return i.Fg()})),this.Lg=I((function(){var t="firstPlay",n=Tt(i.qi.win,t,{}),r=i.video.element;jt(r).trigger(r,t,n,1)})),this.Bg()}var i=t.prototype;return i.dispose=function(){this.Pg().stop()},i.Wg=function(t,i){var r=n({},"__amp:eventType",t);Object.keys(i).forEach((function(t){r["custom_".concat(t)]=i[t]})),ln(this,"video-hosted-custom",r)},i.Bg=function(){var t=this;this.video.signals().whenSignal("playback-delegated").then((function(){t.xg=!1,t.Zn&&t.video.pause()}))},i.isMuted=function(){return this.$},i.isPlaybackManaged=function(){return this.xg},i.Fg=function(){this.Ng()&&this.Sg.registerForAutoFullscreen(this),this.hasAutoplay&&this.Dg()},i.Ng=function(){var t=this.video.element;return!(this.video.preimplementsAutoFullscreen()||!t.hasAttribute("rotate-to-fullscreen"))&&B(this.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",t)},i._g=function(){this.Zn=!0,this.getPlayingState()==Kt&&(this.Lg(),this.Sg.pauseOtherVideos(this));var t,n,i,r,e,o=this.video,u=o.element;o.preimplementsMediaSessionAPI()||u.classList.contains("i-amphtml-disable-mediasession")||(function(t,n){var i=xt(t);if(n&&n.artwork){var r=n.artwork;L(s(r)),r.forEach((function(t){if(t){var n=(r=t,"[object Object]"===d.call(r)?t.src:t);B(i.isProtocolValid(n))}var r}))}}(u,this.Yg),t=this.qi.win,n=this.Yg,i=this.zg,r=this.Ig,"mediaSession"in(e=t.navigator)&&t.MediaMetadata&&(e.mediaSession.metadata=new t.MediaMetadata(Ft),e.mediaSession.metadata=new t.MediaMetadata(n),e.mediaSession.setActionHandler("play",i),e.mediaSession.setActionHandler("pause",r))),this.Rg.beginSession(),this.xe&&this.Mg.beginSession(),this.Cg||ln(this,Xt)},i.Ug=function(){ln(this,"video-pause"),this.Zn=!1,this.Eg?this.Eg=!1:this.Rg.endSession()},i.videoLoaded=function(){this.jg=!0,this.Tg=P(this.video.element),this.Jg(),this.Pg().start(),this.xe&&this.Gg()},i.Jg=function(){if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.Yg=m(this.video.getMetadata()));var t=this.qi.win.document;if(!this.Yg.artwork||0==this.Yg.artwork.length){var n=function(t){var n=t.querySelector('script[type="application/ld+json"]');if(n){var i=function(t,n){try{return function(t){return JSON.parse(t)}(t)}catch(t){return null}}(n.textContent);if(i&&i.image)return"string"==typeof i.image?i.image:i.image["@list"]&&"string"==typeof i.image["@list"][0]?i.image["@list"][0]:"string"==typeof i.image.url?i.image.url:"string"==typeof i.image[0]?i.image[0]:void 0}}(t)||function(t){var n=t.querySelector('meta[property="og:image"]');return n?n.getAttribute("content"):void 0}(t)||function(t){var n=t.querySelector('link[rel="shortcut icon"]')||t.querySelector('link[rel="icon"]');return n?n.getAttribute("href"):void 0}(t);n&&(this.Yg.artwork=[{"src":n}])}if(!this.Yg.title){var i=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.Tg.getAttribute("title")||this.Tg.getAttribute("aria-label")||t.title;i&&(this.Yg.title=i)}}},i.Vg=function(){this.jg&&this.Gg()},i.Gg=function(){var t=this;this.qi.isVisible()&&A(this.qi.win).then((function(n){t.hasAutoplay&&!t.userInteracted()&&n?t.Zg():t.$g()}))},i.Dg=function(){var t=this;this.video.isInteractive()&&this.video.hideControls(),A(this.qi.win).then((function(n){n||!t.video.isInteractive()?(t.video.mute(),t.Hg()):t.video.showControls()}))},i.Hg=function(){var t=this,n=this.video,i=this.video,r=i.element;if(i.win,!r.hasAttribute("noaudio")&&!r.signals().get(tn)){var e=function(t,n){for(var i=It(n)(Wt),r=i.firstElementChild,e=0;e<4;e++){for(var o=r.cloneNode(!0),u=o.children,a=0;a<u.length;a++)u[a].classList.add("amp-video-eq-".concat(e+1,"-").concat(a+1));i.appendChild(o)}return Q(r),i}(0,r),o=[e],u=[At(r,Dt,(function(){return f(!1)})),At(r,Bt,(function(){return f(!0)})),At(r,Gt,(function(){s(!1),n.showControls()})),At(r,Ht,(function(){s(!0),n.hideControls()})),At(r,$t,(function(){return nn(n)}))];if(n.isInteractive()){n.hideControls();var a=function(t,n){var i=It(t)(Ut);return n&&n.title&&i.setAttribute("aria-label",n.title),i}(r,this.Yg);o.push(a),u.push(At(a,"click",(function(){return nn(n)})))}n.mutateElementSkipRemeasure((function(){o.forEach((function(t){r.appendChild(t)}))})),this.Og&&s(!1),n.signals().whenSignal(tn).then((function(){t.Lg(),n.isInteractive()&&n.showControls(),n.unmute(),u.forEach((function(t){t()})),n.mutateElementSkipRemeasure((function(){o.forEach((function(t){Q(t)}))}))}))}function s(t){n.mutateElementSkipRemeasure((function(){o.forEach((function(n){!function(t,n){void 0===n&&(n=t.hasAttribute("hidden")),n?t.removeAttribute("hidden"):t.setAttribute("hidden","")}(n,t)}))}))}function f(t){n.mutateElementSkipRemeasure((function(){return e.classList.toggle("amp-video-eq-play",t)}))}},i.Zg=function(){this.xg&&(this.xe?(this.Mg.beginSession(),Y(this.video,!0),this.Ag=!0):(this.Zn&&this.Mg.endSession(),this.video.pause(),this.Eg=!0))},i.$g=function(){this.xe?this.Mg.beginSession():this.Zn&&this.Mg.endSession()},i.updateVisibility=function(t){var n=this.xe;this.xe=t,t!=n&&this.Vg()},i.getPlayingState=function(){return this.Zn?this.Zn&&this.Ag&&!this.userInteracted()?"playing_auto":Kt:Qt},i.isRollingAd=function(){return this.Og},i.userInteracted=function(){return null!=this.video.signals().get(tn)},i.getAnalyticsDetails=function(){var t=this,n=this.video;return Promise.all([A(this.qi.win),Rt(n.element)]).then((function(i){var r=i[0],e=i[1].boundingClientRect,o=e.height,u=e.width,a=t.hasAutoplay&&r,s=n.getPlayedRanges(),f=s.reduce((function(t,n){return t+n[1]-n[0]}),0);return{"autoplay":a,"currentTime":n.getCurrentTime(),"duration":n.getDuration(),"height":o,"id":n.element.id,"muted":t.$,"playedTotal":f,"playedRangesJson":JSON.stringify(s),"state":t.getPlayingState(),"width":u}}))},t}(),an=function(){function t(t,n){var i=this;this.Sg=n,this.qi=t,this.Kg=null,this.Qg=null,this.cg=[],this.Xg=[],this.hw=function(){return i.dw()},this.pw=function(t){return i.mw(t)==Kt},this.yw=function(t,n){return i.bw(t,n)},this.gw(),this.ww()}var n=t.prototype;return n.dispose=function(){this.Xg.forEach((function(t){return t()})),this.Xg.length=0},n.register=function(t){var n=t.video,i=n.element;this.kw(i)&&(this.cg.push(n),At(i,Dt,this.hw),At(i,Bt,this.hw),At(i,Vt,this.hw),n.signals().whenSignal(tn).then(this.hw),this.dw())},n.ww=function(){var t=this,n=this.qi.getRootNode(),i=function(){return t.qw()};this.Xg.push(At(n,"webkitfullscreenchange",i),At(n,"mozfullscreenchange",i),At(n,"fullscreenchange",i),At(n,"MSFullscreenChange",i))},n.isInLandscape=function(){return(t=this.qi.win).screen&&"orientation"in t.screen?t.screen.orientation.type.startsWith("landscape"):90==Math.abs(t.orientation);var t},n.kw=function(t){if("video"==P(t).tagName.toLowerCase())return!0;var n=kt(this.qi.win);return!n.isIos()&&!n.isSafari()||function(t){return!!{"amp-dailymotion":!0,"amp-ima-video":!0}[t.tagName.toLowerCase()]}(t)},n.qw=function(){this.Kg=null},n.gw=function(){var t=this,n=this.qi.win,i=n.screen;if(i&&"orientation"in i){var r=i.orientation;this.Xg.push(At(r,"change",(function(){return t.Sw()})))}this.Xg.push(At(n,"orientationchange",(function(){return t.Sw()})))},n.Sw=function(){this.isInLandscape()?null!=this.Qg&&this.xw(this.Qg):this.Kg&&this.jw(this.Kg)},n.xw=function(t){var n=kt(this.qi.win);this.Kg=t,n.isAndroid()&&n.isChrome()?t.fullscreenEnter():this.Ow(t).then((function(){return t.fullscreenEnter()}))},n.jw=function(t){this.Kg=null,this.Ow(t,"center").then((function(){return t.fullscreenExit()}))},n.Ow=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=t.element,r=this.Rw();return this.Mw().then((function(){return Rt(i)})).then((function(t){var e=t.boundingClientRect,o=e.bottom,u=e.top,a=r.getSize().height;if(u>=0&&o<=a)return b();var s=n||(o>a?"bottom":"top");return r.animateScrollIntoView(i,s)}))},n.Rw=function(){return St(this.qi)},n.Mw=function(){return qt(this.qi.win).promise(330)},n.dw=function(){var t=this;if(this.isInLandscape())return Promise.resolve(this.Qg);this.Qg=null;var n=this.cg.filter(this.pw).map((function(t){return Rt(t.element)}));return Promise.all(n).then((function(n){var i=n.sort(t.yw)[0];return i&&i.intersectionRatio>.5?i.target.getImpl().then((function(n){return t.Qg=n})):t.Qg}))},n.bw=function(t,n){var i=t.boundingClientRect,r=t.intersectionRatio,e=n.boundingClientRect,o=r-n.intersectionRatio;if(Math.abs(o)>.1)return o;var u=St(this.qi),a=sn(u,i),s=sn(u,e);return a<s||a>s?a-s:i.top-e.top},n.mw=function(t){return this.Sg.getPlayingState(t)},t}();function sn(t,n){var i=n.top+n.height/2,r=t.getSize().height/2;return Math.abs(i-r)}function fn(t){return 10*t*5}var cn=function(t){return!!t&&!isNaN(t)&&t>1},hn=function(){function t(t,n){this.js=qt(t),this.Pw=n,this.Xg=null,this.Aw=0,this.Ew=0}var n=t.prototype;return n.start=function(){var t=this,n=this.Pw.video.element;this.stop(),this.Xg=this.Xg||[],this.Tw()?this.Cw(this.Ew):this.Xg.push(function(n,i,r,e){var o=function(){t.Tw()&&t.Cw(t.Ew)},u=Et(n,"loadedmetadata",(function(t){try{o(t)}finally{o=null,u()}}),void 0);return u}(n)),this.Xg.push(At(n,Vt,(function(){t.Tw()&&t.Yw(100)})))},n.stop=function(){if(this.Xg){for(;this.Xg.length>0;)this.Xg.pop()();this.Ew++}},n.Tw=function(){var t=this.Pw.video,n=t.getDuration();if(!cn(n))return!1;if(fn(n)<250){var i=Math.ceil(5);this.zw("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",i,"seconds long.",t.element)}return!0},n.zw=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];F().warn.apply(F(),[rn].concat(n))},n.Cw=function(t){var n,i=this;if(t==this.Ew){var r=this.Pw,e=this.js,o=r.video,u=function(){return i.Cw(t)};if(r.getPlayingState()!=Qt){var a=o.getDuration();if(cn(a)){var s=(n=fn(a),y(!0),Math.min(Math.max(n,250),4e3)),f=o.getCurrentTime()/a*100,c=5*Math.floor(f/5);L(p(c)),this.Yw(c),e.delay(u,s)}else e.delay(u,500)}else e.delay(u,500)}},n.Yw=function(t){t<=0||this.Aw!=t&&(this.Aw=t,this.Iw(t))},n.Iw=function(t){ln(this.Pw,"video-percentage-played",{"normalizedPercentage":t.toString()})},t}();function ln(t,n,i){var r=t.video;t.getAnalyticsDetails().then((function(t){i&&Object.assign(t,i),nt(r.element,n,t)}))}var vn=["<iframe frameborder=0 allowfullscreen></iframe>"],dn="amp-dailymotion",mn=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&i(t,n)}(l,t);var e,u,c=(e=l,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=r(e);if(u){var i=r(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return o(this,t)});function l(t){var n;return(n=c.call(this,t)).cj=V,n.hj=null,n.tb=null,n.$=!1,n.Xb=null,n.uw=null,n.lj=null,n.vj=null,n.Hw=!1,n.Gt=new ft(n.element),n}var v=l.prototype;return v.preconnectCallback=function(t){Ot(this.win).url(this.getAmpDoc(),"https://www.dailymotion.com",t),Ot(this.win).url(this.getAmpDoc(),"https://static1.dmcdn.net",t)},v.supportsPlatform=function(){return!0},v.isInteractive=function(){return!0},v.isLayoutSupported=function(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)},v.buildCallback=function(){var t,n,i,r,e;this.hj=B(this.element.getAttribute("data-videoid"),"The data-videoid attribute is required for <amp-dailymotion> %s",this.element),n=this.element,i="video-manager",r=en,function(t,n,i,r,e,o){var u=pt(t),a=u[i];a||(a=u[i]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),a.ctor||(a.ctor=r,a.context=n,a.sharedInstance=!1,a.resolve&&mt(t,i))}(dt(e=vt(n)),e,i,r),(t=this.element,ht(t,"video-manager")).register(this);var o=new g;this.Xb=o.promise,this.uw=o.resolve;var u=new g;this.lj=u.promise,this.vj=u.resolve},v.layoutCallback=function(){return L(this.hj),this.tb=(this,t=this.ek(),i=It(n=this.element)(vn),function(t,n,i,r){for(var e,o=h(f(["referrerpolicy"]),!0);!(e=o()).done;){var u=e.value,a=n.getAttribute(u);null!==a&&i.setAttribute(u,a)}}(0,this.element,i),i.src=xt(n).assertHttpsUrl(t,n),function(t,n){t.classList.add("i-amphtml-fill-content")}(i),n.appendChild(i),i),At(this.win,"message",this.dj.bind(this)),this.loadPromise(this.tb);var t,n,i},v.unlayoutCallback=function(){var t=this.tb;return t&&(this.element.removeChild(t),this.tb=null),this.Gt.updatePlaying(!1),!0},v.dj=function(t){var i;if(function(t,n,i){return!(!n||t.source!=n.contentWindow)&&"https://www.dailymotion.com"==t.origin}(t,this.tb)){var r=Pt(t);if(r&&t.type&&"message"==t.type){var e=function(t){var n,i=m();if(!t)return i;for(;n=z.exec(t);){var r=C(n[1],n[1]),e=n[2]?C(n[2].replace(/\+/g," "),n[2]):"";i[r]=e}return i}(r);if(void 0!==e)switch(function(t,n,i){if(null==i[n])return!1;var r=i[n];(s(r)?r:[r]).forEach((function(n){nt(t,n)}))}(this.element,e.event,(n(i={},Z,Lt),n(i,"end",[Vt,Dt]),n(i,G,Dt),n(i,$,Bt),i)),e.event){case Z:this.uw(!0);break;case $:this.cj=e.event,this.Gt.updatePlaying(!0);break;case G:this.cj=e.event,this.Gt.updatePlaying(!1);break;case"end":this.cj=G,this.Gt.updatePlaying(!1);break;case"volumechange":var o=0==e.volume||"true"==e.muted;this.cj!=V&&this.$==o||(this.$=o,nt(this.element,function(t){return t?Zt:$t}(o)));break;case"progress":this.vj(!0);break;case"fullscreenchange":this.Hw="true"==e.fullscreen}}}},v.aw=function(t,n){var i=this;this.Xb.then((function(){i.tb&&i.tb.contentWindow&&i.tb.contentWindow.postMessage(function(t,n){return JSON.stringify({"command":t,"parameters":n})}(t,n),"https://www.dailymotion.com")}))},v.ek=function(){var t=this.element.dataset,n=t.endscreenEnable,i=t.info,r=t.mute,e=t.sharingEnable,o=t.start,u=t.uiHighlight,s=t.uiLogo;return function(t,n){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],e=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],u=!(arguments.length>6&&void 0!==arguments[6])||arguments[6],s=arguments.length>7?arguments[7]:void 0,f=arguments.length>8?arguments[8]:void 0,c=!(arguments.length>9&&void 0!==arguments[9])||arguments[9],h=arguments.length>10?arguments[10]:void 0;return D("https://www.dailymotion.com/embed/video/".concat(encodeURIComponent(n),"?api=1&html=1&app=amp"),a({"endscreen-enable":r?void 0:r,"info":e?void 0:e,"mute":o||i&&A(t)?1:void 0,"sharing-enable":u?void 0:u,"start":s,"ui-highlight":f,"ui-logo":c?void 0:c},h))}(this.win,this.hj,this.element.hasAttribute("autoplay"),"false"!==n,"false"!==i,"true"===r,"false"!==e,o,u,"false"!==s,function(t,n,i){var r=t.dataset,e={},o=/^param(.+)/;for(var u in r){var a=u.match(o);a&&(e[a[1][0].toLowerCase()+a[1].substr(1)]=r[u])}return e}(this.element))},v.pauseCallback=function(){this.pause()},v.play=function(t){var n=this;this.aw("play"),t&&this.cj!=G&&this.lj.then((function(){n.aw("play")}))},v.pause=function(){this.aw("pause")},v.mute=function(){var t=this;this.aw("muted",[!0]),this.Xb.then((function(){nt(t.element,Zt),t.$=!0}))},v.unmute=function(){var t=this;this.aw("muted",[!1]),this.Xb.then((function(){nt(t.element,$t),t.$=!1}))},v.showControls=function(){this.aw("controls",[!0])},v.hideControls=function(){this.aw("controls",[!1])},v.fullscreenEnter=function(){var t,n,i=kt(this.win);if(i.isSafari()||i.isIos())this.aw("fullscreen",[!0]);else{if(!this.tb)return;(n=(t=this.tb).requestFullscreen||t.requestFullScreen||t.webkitRequestFullscreen||t.webkitEnterFullscreen||t.msRequestFullscreen||t.mozRequestFullScreen)&&n.call(t)}},v.fullscreenExit=function(){var t=kt(this.win);if(t.isSafari()||t.isIos())this.aw("fullscreen",[!1]);else{if(!this.tb)return;!function(t){var n=t.cancelFullScreen||t.exitFullscreen||t.webkitExitFullscreen||t.webkitCancelFullScreen||t.mozCancelFullScreen||t.msExitFullscreen;if(n)n.call(t);else{var i=t.ownerDocument;if(i){var r=i.cancelFullScreen||i.exitFullscreen||i.webkitExitFullscreen||i.webkitCancelFullScreen||i.mozCancelFullScreen||i.msExitFullscreen;r&&r.call(i)}}}(this.tb)}},v.isFullscreen=function(){var t=kt(this.win);return t.isSafari()||t.isIos()?this.Hw:!!this.tb&&function(t){var n=t.webkitDisplayingFullscreen;if(void 0!==n)return n;var i=t.ownerDocument;return!!i&&(i.fullscreenElement||i.webkitFullscreenElement||i.mozFullScreenElement||i.webkitCurrentFullScreenElement)==t}(this.tb)},v.getMetadata=function(){},v.preimplementsMediaSessionAPI=function(){return!1},v.preimplementsAutoFullscreen=function(){return!1},v.getCurrentTime=function(){return 0},v.getDuration=function(){return 1},v.getPlayedRanges=function(){return[]},v.seekTo=function(t){this.user().error(dn,"`seekTo` not supported.")},l}(t.BaseElement);t.registerElement(dn,mn)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-dailymotion-0.1.js.map