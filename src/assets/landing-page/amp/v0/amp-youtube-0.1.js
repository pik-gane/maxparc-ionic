;
(self.AMP=self.AMP||[]).push({m:0,v:"2203281422000",n:"amp-youtube",ev:"0.1",l:!0,f:function(t,n){!function(){function n(t,n,i){return n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t}function i(t,n){return(i=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,r=new Array(n);i<n;i++)r[i]=t[i];return r}function a(t,n){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(i)return(i=i.call(t)).next.bind(i);if(Array.isArray(t)||(i=function(t,n){if(t){if("string"==typeof t)return u(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?u(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){i&&(t=i);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s;function f(){return s||(s=Promise.resolve(void 0))}var c=function(){var t=this;this.promise=new Promise((function(n,i){t.resolve=n,t.reject=i}))};function h(t){return new Promise((function(n){n(t())}))}var l=Array.isArray;function v(t){return l(t)?t:[t]}var d=Object.prototype,p=(d.hasOwnProperty,d.toString);function m(t){return"[object Object]"===p.call(t)}function y(t){var n=Object.create(null);return t&&Object.assign(n,t),n}function b(t){return"number"==typeof t&&isFinite(t)}function w(t,n,i,r,e,o,u,a,s,f,c){return t}function g(t,n){try{return function(t){return JSON.parse(t)}(t)}catch(t){return null==n||n(t),null}}function k(t){return(t.ownerDocument||t).defaultView}var j,q,x={bubbles:!0,cancelable:!0};function S(t){var n;null===(n=t.parentElement)||void 0===n||n.removeChild(t)}function O(t,n){t.insertBefore(n,t.firstChild)}function M(t){return t.parent&&t.parent!=t}function E(t,n,i,r){var e=i||{};w(t.ownerDocument);var o=t.ownerDocument.createEvent("Event");o.data=e;var u=r||x,a=u.bubbles,s=u.cancelable;o.initEvent(n,a,s),t.dispatchEvent(o)}function R(t,n){t.classList.add("i-amphtml-fill-content"),n&&t.classList.add("i-amphtml-replaced-content")}function T(t,n,i,r){for(var e,o=a(v(t),!0);!(e=o()).done;){var u=e.value,s=n.getAttribute(u);null!==s?i.setAttribute(u,s):r&&i.removeAttribute(u)}}function A(t){var n=t.ownerDocument||t;return j&&j.ownerDocument===n||(j=n.createElement("div")),P}function P(t){return function(t,n){w(1===n.length),t.innerHTML=n[0];var i=t.firstElementChild;return w(i),w(!i.nextElementSibling),t.removeChild(i),i}(j,t)}function U(t){var n=Object.getOwnPropertyDescriptor(t,"message");if(null!=n&&n.writable)return t;var i=t.message,r=t.stack,e=new Error(i);for(var o in t)e[o]=t[o];return e.stack=r,e}function Y(t){for(var n,i=null,r="",e=a(arguments,!0);!(n=e()).done;){var o=n.value;o instanceof Error&&!i?i=U(o):(r&&(r+=" "),r+=o)}return i?r&&(i.message=r+": "+i.message):i=new Error(r),i}function _(t){var n,i;null===(n=(i=self).__AMP_REPORT_ERROR)||void 0===n||n.call(i,t)}function I(t){var n=Y.apply(null,arguments);setTimeout((function(){throw _(n),n}))}function z(t){try{for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return t.apply(null,i)}catch(t){I(t)}}function C(t){var n=Y.apply(null,arguments);return n.expected=!0,n}var N=["Webkit","webkit","Moz","moz","ms","O","o"],W={"getPropertyPriority":function(){return""},"getPropertyValue":function(){return""}};function B(t,n,i,r,e){var o=function(t,n,i){if(n.startsWith("--"))return n;q||(q=y());var r=q[n];if(!r||i){if(r=n,void 0===t[n]){var e=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(n),o=function(t,n){for(var i=0;i<N.length;i++){var r=N[i]+n;if(void 0!==t[r])return r}return""}(t,e);void 0!==t[o]&&(r=o)}i||(q[n]=r)}return r}(t.style,n,e);if(o){var u,a=r?i+r:i;t.style.setProperty((u=o.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()})),N.some((function(t){return u.startsWith(t+"-")}))?"-".concat(u):u),a)}}function D(t,n){for(var i in n)B(t,i,n[i])}var L=/vertical/,J=new WeakMap,V=new WeakMap,F=new WeakMap;function Z(t){var n=J.get(t);return n||(n=new t.ResizeObserver($),J.set(t,n)),n}function $(t){for(var n=new Set,i=t.length-1;i>=0;i--){var r=t[i],e=r.target;if(!n.has(e)){n.add(e);var o=V.get(e);if(o){F.set(e,r);for(var u=0;u<o.length;u++){var a=o[u],s=a.callback;G(a.type,s,r)}}}}}function G(t,n,i){if(0==t){var r=i.contentRect,e=r.height;z(n,{width:r.width,height:e})}else if(1==t){var o,u=i.borderBoxSize;if(u)o=u.length>0?u[0]:{inlineSize:0,blockSize:0};else{var a,s,f=i.target,c=k(f),h=L.test(function(t,n){return t.getComputedStyle(n)||W}(c,f).writingMode),l=f,v=l.offsetHeight,d=l.offsetWidth;h?(s=d,a=v):(a=d,s=v),o={inlineSize:a,blockSize:s}}z(n,o)}}var H=function(){function t(t){this.Gn=t,this.Zn=!1,this.Un=!1,this.Jn=this.Jn.bind(this)}var n=t.prototype;return n.updatePlaying=function(t){t!==this.Zn&&(this.Zn=t,t?(this.Un=!1,function(t,n,i){var r=t.ownerDocument.defaultView;if(r){var e=V.get(t);if(e||(e=[],V.set(t,e),Z(r).observe(t)),!e.some((function(t){return t.callback===i&&1===t.type}))){e.push({type:1,callback:i});var o=F.get(t);o&&setTimeout((function(){return G(1,i,o)}))}}}(this.Gn,0,this.Jn)):function(t,n){!function(t,n,i){var r=V.get(t);if(r&&(function(t,n){for(var r=[],e=0,o=0;o<t.length;o++){var u=t[o];(a=u).callback===i&&1===a.type?r.push(u):(e<o&&(t[e]=u),e++)}var a;e<t.length&&(t.length=e)}(r),0==r.length)){V.delete(t),F.delete(t);var e=t.ownerDocument.defaultView;e&&Z(e).unobserve(t)}}(t,0,n)}(this.Gn,this.Jn))},n.Jn=function(t){var n=t.blockSize,i=t.inlineSize>0&&n>0;if(i!==this.Un){this.Un=i;var r=this.Gn;i||r.pause()}},t}(),K=self.AMP_CONFIG||{},Q=("string"==typeof K.thirdPartyFrameRegex?new RegExp(K.thirdPartyFrameRegex):K.thirdPartyFrameRegex,("string"==typeof K.cdnProxyRegex?new RegExp(K.cdnProxyRegex):K.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function X(t){if(!self.document||!self.document.head)return null;if(self.location&&Q.test(self.location.origin))return null;var n=self.document.head.querySelector('meta[name="'.concat(t,'"]'));return n&&n.getAttribute("content")||null}function tt(t){var n=!1,i=null,r=t;return function(){if(!n){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];i=r.apply(self,e),n=!0,r=null}return i}}K.thirdPartyUrl,K.thirdPartyFrameHost,K.cdnUrl||X("runtime-host"),K.errorReportingUrl,K.betaErrorReportingUrl,K.localDev,K.geoApiUrl||X("amp-geo-api"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var nt=self.__AMP_LOG;function it(t){return nt.user||(nt.user=rt()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(nt.user.win,t)?nt.userForEmbed||(nt.userForEmbed=rt()):nt.user}function rt(t){return function(t,n){throw new Error("failed to call initLogConstructor")}()}function et(t,n,i,r,e,o,u,a,s,f,c){return t}function ot(t,n,i,r,e,o,u,a,s,f,c){return it().assert(t,n,i,r,e,o,u,a,s,f,c)}function ut(t,n){return ht(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n)}function at(t,n){return ht(ct(ft(t)),n)}function st(t,n){var i=ct(ft(t));return vt(i,n)?ht(i,n):null}function ft(t){return t.nodeType?(n=k(t),ut(n,"ampdoc")).getAmpDoc(t):t;var n}function ct(t){var n=ft(t);return n.isSingleDoc()?n.win:n}function ht(t,n){et(vt(t,n));var i=lt(t)[n];return i.obj||(et(i.ctor),et(i.context),i.obj=new i.ctor(i.context),et(i.obj),i.context=null,i.resolve&&i.resolve(i.obj)),i.obj}function lt(t){var n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}function vt(t,n){var i=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!i||!i.ctor)}var dt,pt,mt,yt=function(t){return st(t,"action")},bt=function(t){return ut(t,"platform")},wt=function(t){return ht(t,"timer")},gt=function(t){return st(t,"url")},kt=function(t){return at(t,"viewport")};function jt(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=i.needsRootBounds,e=i.rootMargin,o=i.threshold,u=M(n)&&(r||e)?n.document:void 0;return new n.IntersectionObserver(t,{threshold:o,root:u,rootMargin:e})}function qt(t){var n,i=null===(n=dt)||void 0===n?void 0:n.get(t);if(!i){var r=function(t){dt||(dt=new WeakMap,pt=new WeakMap),w(pt);var n=pt.get(t);return n||(n=jt((function(t){for(var i=new Set,r=t.length-1;r>=0;r--){var e,o=t[r].target;i.has(o)||(i.add(o),w(n),n.unobserve(o),w(dt),null===(e=dt.get(o))||void 0===e||e.resolve(t[r]),dt.delete(o))}}),t,{needsRootBounds:!0}),pt.set(t,n)),n}(k(t));w(dt),r.observe(t),i=new c,dt.set(t,i)}return i.promise}function xt(t){return null==t.__AMP_AUTOPLAY&&(t.__AMP_AUTOPLAY=function(t){var n,i=t.document.createElement("video");return i.setAttribute("muted",""),i.setAttribute("playsinline",""),i.setAttribute("webkit-playsinline",""),i.setAttribute("height","0"),i.setAttribute("width","0"),i.muted=!0,i.playsInline=!0,i.playsinline=!0,i.webkitPlaysinline=!0,D(i,{position:"fixed",top:"0",width:"0",height:"0",opacity:"0"}),n=i,h((function(){return n.play()})).catch((function(){})),Promise.resolve(!i.paused)}(t)),t.__AMP_AUTOPLAY}function St(t){return t.querySelector("video, iframe")}function Ot(t,n){var i=h((function(){return t.play(!!n)}));return i.catch((function(t){!function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];_(C.apply(null,i))}("TRYPLAY",t)})),i}function Mt(t,n,i,r){var e=t,o=i,u=function(t){try{return o(t)}catch(t){var n,i;throw null===(n=(i=self).__AMP_REPORT_ERROR)||void 0===n||n.call(i,t),t}},a=function(){if(void 0!==mt)return mt;mt=!1;try{var t={get capture(){return mt=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return mt}(),s=!(null==r||!r.capture);return e.addEventListener(n,u,a?r:s),function(){null==e||e.removeEventListener(n,u,a?r:s),o=null,e=null,u=null}}function Et(t,n,i,r){var e={detail:i};if(Object.assign(e,r),"function"==typeof t.CustomEvent)return new t.CustomEvent(n,e);var o=t.document.createEvent("CustomEvent");return o.initCustomEvent(n,!!e.bubbles,!!e.cancelable,i),o}function Rt(t,n,i,r){return Mt(t,n,i,r)}function Tt(t){return t.data}new WeakMap,new WeakMap;var At=function(){function t(){this.vt=null}var n=t.prototype;return n.add=function(t){var n=this;return this.vt||(this.vt=[]),this.vt.push(t),function(){n.remove(t)}},n.remove=function(t){var n,i,r;this.vt&&(i=t,-1!=(r=(n=this.vt).indexOf(i))&&n.splice(r,1))},n.removeAll=function(){this.vt&&(this.vt.length=0)},n.fire=function(t){if(this.vt)for(var n,i=a(this.vt.slice(),!0);!(n=i()).done;)(0,n.value)(t)},n.getHandlerCount=function(){var t,n;return null!==(t=null===(n=this.vt)||void 0===n?void 0:n.length)&&void 0!==t?t:0},t}(),Pt=function(){function t(){this.ag=!1,this.fg=new At}var n=t.prototype;return n.onSessionEnd=function(t){this.fg.add(t)},n.beginSession=function(){this.ag=!0},n.endSession=function(){this.ag&&this.fg.fire(),this.ag=!1},n.isSessionActive=function(){return this.ag},t}(),Ut=['<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>'],Yt=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function _t(t,n,i){if(n[i])return n[i];var r=t.querySelector("style[".concat(i,"], link[").concat(i,"]"));return r?(n[i]=r,r):null}var It={"title":"","artist":"","album":"","artwork":[{"src":""}]},zt="registered",Ct="load",Nt="playing",Wt="pause",Bt="ended",Dt="muted",Lt="unmuted",Jt="ad_start",Vt="ad_end",Ft="playing_manual",Zt="paused",$t="video-play",Gt="user-interacted";function Ht(t){t.signals().signal(Gt)}var Kt="video-manager",Qt=function(){function t(t){var n=this;this.ampdoc=t,this.installAutoplayStyles=tt((function(){return function(t){!function(t,n,i,r,e){var o=t.getHeadNode();!function(t,n,i,r){var e=t.__AMP_CSS_SM;e||(e=t.__AMP_CSS_SM=y());var o="amp-extension=".concat(r);if(o){var u=_t(t,e,o);if(u)return"STYLE"==u.tagName&&u.textContent!==n&&(u.textContent=n),u}var a=(t.ownerDocument||t).createElement("style");a.textContent=n;a.setAttribute("amp-extension",r),function(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(i){var r=i.nextSibling;t.insertBefore(n,r)}else O(t,n)}(t,a,_t(t,e,"amp-runtime")),o&&(e[o]=a)}(o,function(t,n){var i=t.__AMP_CSS_TR;return i?i(n):n}(o,".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/"),0,"amp-video-autoplay")}(t)}(n.ampdoc)})),this.cg=null,this.lg=null,this.vg=null,this.js=wt(t.win),this.dg=yt(t.getHeadNode()),this.pg=function(){return n.mg()},this.yg=tt((function(){return new nn(n.ampdoc,n)})),this.js.delay(this.pg,1e3)}var n=t.prototype;return n.dispose=function(){if(this.yg().dispose(),this.lg.disconnect(),this.lg=null,this.cg)for(var t=0;t<this.cg.length;t++)this.cg[t].dispose()},n.mg=function(){for(var t=0;t<this.cg.length;t++){var n=this.cg[t];n.getPlayingState()!==Zt&&(an(n,"video-seconds-played"),this.bg(n))}this.js.delay(this.pg,1e3)},n.bg=function(t){var n="timeUpdate",i=t.video.getCurrentTime(),r=t.video.getDuration();if(b(i)&&b(r)&&r>0){var e=i/r,o=Et(this.ampdoc.win,"".concat(Kt,".").concat(n),{"time":i,"percent":e});this.dg.trigger(t.video.element,n,o,1)}},n.register=function(t){var n=this;et(t);var i=t;if(this.gg(t),t.supportsPlatform()&&!this.wg(t)){this.lg||(this.lg=jt((function(t){return t.forEach((function(t){var i=t.isIntersecting,r=t.target;n.kg(r).updateVisibility(i)}))}),this.ampdoc.win,{threshold:.5})),this.lg.observe(i.element),Rt(i.element,"reloaded",(function(){return r.videoLoaded()})),this.cg=this.cg||[];var r=new tn(this,t);this.cg.push(r);var e=r.video.element;E(e,zt),function(t){t.classList.add("i-amphtml-media-component")}(e),t.signals().signal(zt),e.classList.add("i-amphtml-video-interface")}},n.gg=function(t){i("play",(function(){return Ot(t,!1)})),i("pause",(function(){return t.pause()})),i("mute",(function(){return t.mute()})),i("unmute",(function(){return t.unmute()}));var n=function(){return t.fullscreenEnter()};function i(n,i){t.registerAction(n,(function(){Ht(t),i()}),1)}i("fullscreenenter",n),i("fullscreen",n)},n.wg=function(t){if(Xt(this.vg,t))return this.vg;for(var n=0;this.cg&&n<this.cg.length;n++){var i=this.cg[n];if(Xt(i,t))return this.vg=i,i}return null},n.kg=function(t){return et(this.wg(t))},n.registerForAutoFullscreen=function(t){this.yg().register(t)},n.qg=function(){return this.yg()},n.getVideoStateProperty=function(t,n){var i=this.ampdoc.getRootNode(),r=it().assertElement(i.getElementById(t),'Could not find an element with id="'.concat(t,'" for VIDEO_STATE')),e=this.kg(r);return(e?e.getAnalyticsDetails():f()).then((function(t){return t?t[n]:""}))},n.getPlayingState=function(t){return this.kg(t).getPlayingState()},n.isMuted=function(t){return this.kg(t).isMuted()},n.userInteracted=function(t){return this.kg(t).userInteracted()},n.isRollingAd=function(t){return this.kg(t).isRollingAd()},n.pauseOtherVideos=function(t){this.cg.forEach((function(n){n.isPlaybackManaged()&&n!==t&&n.getPlayingState()==Ft&&n.video.pause()}))},t}(),Xt=function(t,n){return!!t&&(t.video===n||t.video.element===n)},tn=function(){function t(t,n){var i=this;this.Sg=t,this.qi=t.ampdoc,this.video=n,this.xg=!0,this.jg=!1,this.Zn=!1,this.Og=!1,this.xe=!1,this.Rg=new Pt,this.Rg.onSessionEnd((function(){return an(i,"video-session")})),this.Mg=new Pt,this.Mg.onSessionEnd((function(){return an(i,"video-session-visible")})),this.Pg=tt((function(){return new un(i.qi.win,i)})),this.Ag=!1,this.Eg=!1,this.Tg=null,this.$=!1,this.Cg=!1,this.hasAutoplay=n.element.hasAttribute("autoplay"),this.hasAutoplay&&this.Sg.installAutoplayStyles(),this.Yg=It,this.zg=function(){Ot(i.video,!1)},this.Ig=function(){i.video.pause()},Rt(n.element,Ct,(function(){return i.videoLoaded()})),Rt(n.element,Wt,(function(){return i.Ug()})),Rt(n.element,"play",(function(){i.Cg=!0,an(i,$t)})),Rt(n.element,Nt,(function(){return i._g()})),Rt(n.element,Dt,(function(){return i.$=!0})),Rt(n.element,Lt,(function(){i.$=!1,i.Sg.pauseOtherVideos(i)})),Rt(n.element,"amp:video:tick",(function(t){var n=Tt(t),r=n.eventType;r&&i.Wg(r,n.vars)})),Rt(n.element,Bt,(function(){i.Og=!1,an(i,"video-ended")})),Rt(n.element,Jt,(function(){i.Og=!0,an(i,"video-ad-start")})),Rt(n.element,Vt,(function(){i.Og=!1,an(i,"video-ad-end")})),n.signals().whenSignal(zt).then((function(){return i.Fg()})),this.Lg=tt((function(){var t="firstPlay",n=Et(i.qi.win,t,{}),r=i.video.element;yt(r).trigger(r,t,n,1)})),this.Bg()}var i=t.prototype;return i.dispose=function(){this.Pg().stop()},i.Wg=function(t,i){var r=n({},"__amp:eventType",t);Object.keys(i).forEach((function(t){r["custom_".concat(t)]=i[t]})),an(this,"video-hosted-custom",r)},i.Bg=function(){var t=this;this.video.signals().whenSignal("playback-delegated").then((function(){t.xg=!1,t.Zn&&t.video.pause()}))},i.isMuted=function(){return this.$},i.isPlaybackManaged=function(){return this.xg},i.Fg=function(){this.Ng()&&this.Sg.registerForAutoFullscreen(this),this.hasAutoplay&&this.Dg()},i.Ng=function(){var t=this.video.element;return!(this.video.preimplementsAutoFullscreen()||!t.hasAttribute("rotate-to-fullscreen"))&&ot(this.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",t)},i._g=function(){this.Zn=!0,this.getPlayingState()==Ft&&(this.Lg(),this.Sg.pauseOtherVideos(this));var t,n,i,r,e,o=this.video,u=o.element;o.preimplementsMediaSessionAPI()||u.classList.contains("i-amphtml-disable-mediasession")||(function(t,n){var i=gt(t);if(n&&n.artwork){var r=n.artwork;et(l(r)),r.forEach((function(t){if(t){var n=m(t)?t.src:t;ot(i.isProtocolValid(n))}}))}}(u,this.Yg),t=this.qi.win,n=this.Yg,i=this.zg,r=this.Ig,"mediaSession"in(e=t.navigator)&&t.MediaMetadata&&(e.mediaSession.metadata=new t.MediaMetadata(It),e.mediaSession.metadata=new t.MediaMetadata(n),e.mediaSession.setActionHandler("play",i),e.mediaSession.setActionHandler("pause",r))),this.Rg.beginSession(),this.xe&&this.Mg.beginSession(),this.Cg||an(this,$t)},i.Ug=function(){an(this,"video-pause"),this.Zn=!1,this.Eg?this.Eg=!1:this.Rg.endSession()},i.videoLoaded=function(){this.jg=!0,this.Tg=St(this.video.element),this.Jg(),this.Pg().start(),this.xe&&this.Gg()},i.Jg=function(){if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.Yg=y(this.video.getMetadata()));var t=this.qi.win.document;if(!this.Yg.artwork||0==this.Yg.artwork.length){var n=function(t){var n=t.querySelector('script[type="application/ld+json"]');if(n){var i=g(n.textContent);if(i&&i.image)return"string"==typeof i.image?i.image:i.image["@list"]&&"string"==typeof i.image["@list"][0]?i.image["@list"][0]:"string"==typeof i.image.url?i.image.url:"string"==typeof i.image[0]?i.image[0]:void 0}}(t)||function(t){var n=t.querySelector('meta[property="og:image"]');return n?n.getAttribute("content"):void 0}(t)||function(t){var n=t.querySelector('link[rel="shortcut icon"]')||t.querySelector('link[rel="icon"]');return n?n.getAttribute("href"):void 0}(t);n&&(this.Yg.artwork=[{"src":n}])}if(!this.Yg.title){var i=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.Tg.getAttribute("title")||this.Tg.getAttribute("aria-label")||t.title;i&&(this.Yg.title=i)}}},i.Vg=function(){this.jg&&this.Gg()},i.Gg=function(){var t=this;this.qi.isVisible()&&xt(this.qi.win).then((function(n){t.hasAutoplay&&!t.userInteracted()&&n?t.Zg():t.$g()}))},i.Dg=function(){var t=this;this.video.isInteractive()&&this.video.hideControls(),xt(this.qi.win).then((function(n){n||!t.video.isInteractive()?(t.video.mute(),t.Hg()):t.video.showControls()}))},i.Hg=function(){var t=this,n=this.video,i=this.video,r=i.element;if(i.win,!r.hasAttribute("noaudio")&&!r.signals().get(Gt)){var e=function(t,n){for(var i=A(n)(Yt),r=i.firstElementChild,e=0;e<4;e++){for(var o=r.cloneNode(!0),u=o.children,a=0;a<u.length;a++)u[a].classList.add("amp-video-eq-".concat(e+1,"-").concat(a+1));i.appendChild(o)}return S(r),i}(0,r),o=[e],u=[Rt(r,Wt,(function(){return f(!1)})),Rt(r,Nt,(function(){return f(!0)})),Rt(r,Jt,(function(){s(!1),n.showControls()})),Rt(r,Vt,(function(){s(!0),n.hideControls()})),Rt(r,Lt,(function(){return Ht(n)}))];if(n.isInteractive()){n.hideControls();var a=function(t,n){var i=A(t)(Ut);return n&&n.title&&i.setAttribute("aria-label",n.title),i}(r,this.Yg);o.push(a),u.push(Rt(a,"click",(function(){return Ht(n)})))}n.mutateElementSkipRemeasure((function(){o.forEach((function(t){r.appendChild(t)}))})),this.Og&&s(!1),n.signals().whenSignal(Gt).then((function(){t.Lg(),n.isInteractive()&&n.showControls(),n.unmute(),u.forEach((function(t){t()})),n.mutateElementSkipRemeasure((function(){o.forEach((function(t){S(t)}))}))}))}function s(t){n.mutateElementSkipRemeasure((function(){o.forEach((function(n){!function(t,n){void 0===n&&(n=t.hasAttribute("hidden")),n?t.removeAttribute("hidden"):t.setAttribute("hidden","")}(n,t)}))}))}function f(t){n.mutateElementSkipRemeasure((function(){return e.classList.toggle("amp-video-eq-play",t)}))}},i.Zg=function(){this.xg&&(this.xe?(this.Mg.beginSession(),Ot(this.video,!0),this.Ag=!0):(this.Zn&&this.Mg.endSession(),this.video.pause(),this.Eg=!0))},i.$g=function(){this.xe?this.Mg.beginSession():this.Zn&&this.Mg.endSession()},i.updateVisibility=function(t){var n=this.xe;this.xe=t,t!=n&&this.Vg()},i.getPlayingState=function(){return this.Zn?this.Zn&&this.Ag&&!this.userInteracted()?"playing_auto":Ft:Zt},i.isRollingAd=function(){return this.Og},i.userInteracted=function(){return null!=this.video.signals().get(Gt)},i.getAnalyticsDetails=function(){var t=this,n=this.video;return Promise.all([xt(this.qi.win),qt(n.element)]).then((function(i){var r=i[0],e=i[1].boundingClientRect,o=e.height,u=e.width,a=t.hasAutoplay&&r,s=n.getPlayedRanges(),f=s.reduce((function(t,n){return t+n[1]-n[0]}),0);return{"autoplay":a,"currentTime":n.getCurrentTime(),"duration":n.getDuration(),"height":o,"id":n.element.id,"muted":t.$,"playedTotal":f,"playedRangesJson":JSON.stringify(s),"state":t.getPlayingState(),"width":u}}))},t}(),nn=function(){function t(t,n){var i=this;this.Sg=n,this.qi=t,this.Kg=null,this.Qg=null,this.cg=[],this.Xg=[],this.hw=function(){return i.dw()},this.pw=function(t){return i.mw(t)==Ft},this.yw=function(t,n){return i.bw(t,n)},this.gw(),this.ww()}var n=t.prototype;return n.dispose=function(){this.Xg.forEach((function(t){return t()})),this.Xg.length=0},n.register=function(t){var n=t.video,i=n.element;this.kw(i)&&(this.cg.push(n),Rt(i,Wt,this.hw),Rt(i,Nt,this.hw),Rt(i,Bt,this.hw),n.signals().whenSignal(Gt).then(this.hw),this.dw())},n.ww=function(){var t=this,n=this.qi.getRootNode(),i=function(){return t.qw()};this.Xg.push(Rt(n,"webkitfullscreenchange",i),Rt(n,"mozfullscreenchange",i),Rt(n,"fullscreenchange",i),Rt(n,"MSFullscreenChange",i))},n.isInLandscape=function(){return(t=this.qi.win).screen&&"orientation"in t.screen?t.screen.orientation.type.startsWith("landscape"):90==Math.abs(t.orientation);var t},n.kw=function(t){if("video"==St(t).tagName.toLowerCase())return!0;var n=bt(this.qi.win);return!n.isIos()&&!n.isSafari()||function(t){return!!{"amp-dailymotion":!0,"amp-ima-video":!0}[t.tagName.toLowerCase()]}(t)},n.qw=function(){this.Kg=null},n.gw=function(){var t=this,n=this.qi.win,i=n.screen;if(i&&"orientation"in i){var r=i.orientation;this.Xg.push(Rt(r,"change",(function(){return t.Sw()})))}this.Xg.push(Rt(n,"orientationchange",(function(){return t.Sw()})))},n.Sw=function(){this.isInLandscape()?null!=this.Qg&&this.xw(this.Qg):this.Kg&&this.jw(this.Kg)},n.xw=function(t){var n=bt(this.qi.win);this.Kg=t,n.isAndroid()&&n.isChrome()?t.fullscreenEnter():this.Ow(t).then((function(){return t.fullscreenEnter()}))},n.jw=function(t){this.Kg=null,this.Ow(t,"center").then((function(){return t.fullscreenExit()}))},n.Ow=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=t.element,r=this.Rw();return this.Mw().then((function(){return qt(i)})).then((function(t){var e=t.boundingClientRect,o=e.bottom,u=e.top,a=r.getSize().height;if(u>=0&&o<=a)return f();var s=n||(o>a?"bottom":"top");return r.animateScrollIntoView(i,s)}))},n.Rw=function(){return kt(this.qi)},n.Mw=function(){return wt(this.qi.win).promise(330)},n.dw=function(){var t=this;if(this.isInLandscape())return Promise.resolve(this.Qg);this.Qg=null;var n=this.cg.filter(this.pw).map((function(t){return qt(t.element)}));return Promise.all(n).then((function(n){var i=n.sort(t.yw)[0];return i&&i.intersectionRatio>.5?i.target.getImpl().then((function(n){return t.Qg=n})):t.Qg}))},n.bw=function(t,n){var i=t.boundingClientRect,r=t.intersectionRatio,e=n.boundingClientRect,o=r-n.intersectionRatio;if(Math.abs(o)>.1)return o;var u=kt(this.qi),a=rn(u,i),s=rn(u,e);return a<s||a>s?a-s:i.top-e.top},n.mw=function(t){return this.Sg.getPlayingState(t)},t}();function rn(t,n){var i=n.top+n.height/2,r=t.getSize().height/2;return Math.abs(i-r)}function en(t){return 10*t*5}var on=function(t){return!!t&&!isNaN(t)&&t>1},un=function(){function t(t,n){this.js=wt(t),this.Pw=n,this.Xg=null,this.Aw=0,this.Ew=0}var n=t.prototype;return n.start=function(){var t=this,n=this.Pw.video.element;this.stop(),this.Xg=this.Xg||[],this.Tw()?this.Cw(this.Ew):this.Xg.push(function(n,i,r,e){var o=function(){t.Tw()&&t.Cw(t.Ew)},u=Mt(n,"loadedmetadata",(function(t){try{o(t)}finally{o=null,u()}}),void 0);return u}(n)),this.Xg.push(Rt(n,Bt,(function(){t.Tw()&&t.Yw(100)})))},n.stop=function(){if(this.Xg){for(;this.Xg.length>0;)this.Xg.pop()();this.Ew++}},n.Tw=function(){var t=this.Pw.video,n=t.getDuration();if(!on(n))return!1;if(en(n)<250){var i=Math.ceil(5);this.zw("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",i,"seconds long.",t.element)}return!0},n.zw=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];it().warn.apply(it(),[Kt].concat(n))},n.Cw=function(t){var n,i=this;if(t==this.Ew){var r=this.Pw,e=this.js,o=r.video,u=function(){return i.Cw(t)};if(r.getPlayingState()!=Zt){var a=o.getDuration();if(on(a)){var s=(n=en(a),w(!0),Math.min(Math.max(n,250),4e3)),f=o.getCurrentTime()/a*100,c=5*Math.floor(f/5);et(b(c)),this.Yw(c),e.delay(u,s)}else e.delay(u,500)}else e.delay(u,500)}},n.Yw=function(t){t<=0||this.Aw!=t&&(this.Aw=t,this.Iw(t))},n.Iw=function(t){an(this.Pw,"video-percentage-played",{"normalizedPercentage":t.toString()})},t}();function an(t,n,i){var r=t.video;t.getAnalyticsDetails().then((function(t){i&&Object.assign(t,i),E(r.element,n,t)}))}var sn=["<iframe frameborder=0 allowfullscreen></iframe>"];new Set(["c","v","a","ad"]);var fn=["<img placeholder referrerpolicy=origin>"],cn="amp-youtube",hn=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&i(t,n)}(s,t);var e,u,a=(e=s,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=r(e);if(u){var i=r(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return o(this,t)});function s(t){var n;return(n=a.call(this,t)).hj=null,n.Yj=null,n.$=!1,n.Wj=!1,n.Vj=!1,n.tb=null,n.Co=null,n.Lw=null,n.Xb=null,n.uw=null,n.eb=null,n.Xj=null,n.Gt=new H(n.element),n}var f=s.prototype;return f.preconnectCallback=function(t){var n=ut(this.win,"preconnect"),i=this.getAmpDoc();n.url(i,this.Nw()),n.url(i,"https://s.ytimg.com",t),n.url(i,"https://i.ytimg.com",t)},f.isLayoutSupported=function(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)},f.renderOutsideViewport=function(){return.75},f.buildCallback=function(){this.hj=this.tq(),this.Yj=this.uq(),this.aq();var t,n,i,r,e=new c;this.Xb=e.promise,this.uw=e.resolve,t=this.element,n="video-manager",i=Qt,function(t,n,i,r,e,o){var u=lt(t),a=u[i];a||(a=u[i]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),a.ctor||(a.ctor=r,a.context=n,a.sharedInstance=!1,a.resolve&&ht(t,i))}(ct(r=ft(t)),r,n,i)},f.sq=function(){this.aq();var t="omit"===this.fq()?"-nocookie":"",n="https://www.youtube".concat(t,".com/embed/"),i=this.hj?"".concat(encodeURIComponent(this.hj||""),"?"):"live_stream?channel=".concat(encodeURIComponent(this.Yj||""),"&");return"".concat(n).concat(i,"enablejsapi=1&amp=1")},f.Nw=function(){if(this.Lw)return this.Lw;var t=this.sq(),n=this.element,i=function(t,n,i){var r=t.dataset,e={},o=/^param(.+)/;for(var u in r){var a=u.match(o);a&&(e[a[1][0].toLowerCase()+a[1].substr(1)]=r[u])}return e}(n);return"autoplay"in i&&(delete i.autoplay,this.user().error("AMP-YOUTUBE","Use autoplay attribute instead of data-param-autoplay")),"playsinline"in i||(i.playsinline="1"),n.hasAttribute("autoplay")&&("iv_load_policy"in i||(i.iv_load_policy="".concat(3)),i.playsinline="1"),"loop"in i&&this.user().warn("AMP-YOUTUBE","Use loop attribute instead of the deprecated data-param-loop"),this.Wj=n.hasAttribute("loop")||"loop"in i&&"1"==i.loop,this.Vj="playlist"in i,this.Wj&&(this.Vj?i.loop="1":"loop"in i&&delete i.loop),t=function(t,n){return function(t,n,i){if(!n)return t;var r=t.split("#",2),e=r[0].split("?",2);return e[0]+(e[1]?"?".concat(e[1],"&").concat(n):"?".concat(n))+(r[1]?"#".concat(r[1]):"")}(t,function(t){var n,i,r=[];for(var e in t){var o=t[e];if(null!=o){o=v(o);for(var u=0;u<o.length;u++)r.push((n=e,i=o[u],"".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(i))))}}return r.join("&")}(n))}(t,i),this.Lw=t},f.layoutCallback=function(){var t,n,i,r,e=this,o=(t=this.Nw(),i=A(n=this.element)(sn),T(["referrerpolicy"],this.element,i),i.src=gt(n).assertHttpsUrl(t,n),R(i),n.appendChild(i),i);o.title=this.element.title||"YouTube video",function(t){var n=t.getAttribute("allow")||"";n+="autoplay;",t.setAttribute("allow",n)}(o),this.tb=o,(r=this.element,at(r,"video-manager")).register(this),this.eb=Rt(this.win,"message",this.cq.bind(this)),this.Wj&&!this.Vj&&(this.Xj=Rt(this.element,Bt,(function(t){return e.play(!1)})));var u=this.loadPromise(this.tb).then((function(){return wt(e.win).promise(300)})).then((function(){e.nk(),E(e.element,Ct)}));return this.uw(u),u},f.unlayoutCallback=function(){this.tb&&(S(this.tb),this.tb=null),this.eb&&this.eb(),this.Xj&&this.Xj();var t=new c;return this.Xb=t.promise,this.uw=t.resolve,this.Gt.updatePlaying(!1),!0},f.pauseCallback=function(){this.tb&&this.tb.contentWindow&&this.pause()},f.mutatedAttributesCallback=function(t){null!=t["data-videoid"]&&(this.hj=this.tq(),this.tb&&this.aw("loadVideoById",[this.hj]))},f.uq=function(){return this.element.getAttribute("data-live-channelid")},f.tq=function(){return this.element.getAttribute("data-videoid")},f.fq=function(){return this.element.getAttribute("credentials")||"include"},f.aq=function(){ot(!(this.hj&&this.Yj)&&(this.hj||this.Yj),"Exactly one of data-videoid or data-live-channelid should be present for <amp-youtube> %s",this.element)},f.aw=function(t,n){var i=this;this.Xb.then((function(){if(i.tb&&i.tb.contentWindow){var r=JSON.stringify({"event":"command","func":t,"args":n||""});i.tb.contentWindow.postMessage(r,"*")}}))},f.cq=function(t){if(function(t,n,i){return!(!n||t.source!=n.contentWindow)&&"https://www.youtube.com"==t.origin}(t,this.tb)){var i=Tt(t);if((r=i)&&(m(r)||r.startsWith("{"))){var r,e,o=m(e=i)?e:g(e);if(null!=o){var u=o.event,a=o.info||{},s=this.element,f=a.playerState;if("infoDelivery"!=u||null==f){var c,h=a.muted;if("infoDelivery"==u&&a&&null!=h){if(this.$==h)return;return this.$=h,void E(s,(c=this.$,c?Dt:Lt))}if("initialDelivery"==u)return this.Co=a,void E(s,"loadedmetadata");"infoDelivery"!=u||void 0===a.currentTime||(this.Co.currentTime=a.currentTime)}else{var v;switch(f){case 1:this.Gt.updatePlaying(!0);break;case 2:case 0:this.Gt.updatePlaying(!1)}!function(t,n,i){if(null==i[n])return!1;var r=i[n];(l(r)?r:[r]).forEach((function(n){E(t,n)}))}(s,f.toString(),(v={},n(v,1,Nt),n(v,2,Wt),n(v,0,[Bt,Wt]),v))}}}}},f.nk=function(){this.tb&&this.tb.contentWindow.postMessage(JSON.stringify({"event":"listening"}),"*")},f.createPlaceholderCallback=function(){var t=this;if(!this.hj)return null;var n=A(this.element)(fn),i=this.hj;return D(n,{"object-fit":"cover","visibility":"hidden"}),T(["aria-label"],this.element,n),n.src="https://i.ytimg.com/vi/".concat(encodeURIComponent(i),"/sddefault.jpg#404_is_fine"),n.hasAttribute("aria-label")?n.setAttribute("alt","Loading video - "+n.getAttribute("aria-label")):n.setAttribute("alt","Loading video"),R(n),this.loadPromise(n).then((function(){if(120==n.naturalWidth&&90==n.naturalHeight)throw new Error("sddefault.jpg is not found")})).catch((function(){return n.src="https://i.ytimg.com/vi/".concat(encodeURIComponent(i),"/hqdefault.jpg"),t.loadPromise(n)})).then((function(){t.getVsync().mutate((function(){D(n,{"visibility":""})}))})),n},f.supportsPlatform=function(){return!0},f.isInteractive=function(){return!0},f.play=function(t){this.aw("playVideo")},f.pause=function(){this.aw("pauseVideo")},f.mute=function(){this.aw("mute")},f.unmute=function(){this.aw("unMute")},f.showControls=function(){},f.hideControls=function(){},f.fullscreenEnter=function(){var t,n;this.tb&&(n=(t=this.tb).requestFullscreen||t.requestFullScreen||t.webkitRequestFullscreen||t.webkitEnterFullscreen||t.msRequestFullscreen||t.mozRequestFullScreen)&&n.call(t)},f.fullscreenExit=function(){this.tb&&function(t){var n=t.cancelFullScreen||t.exitFullscreen||t.webkitExitFullscreen||t.webkitCancelFullScreen||t.mozCancelFullScreen||t.msExitFullscreen;if(n)n.call(t);else{var i=t.ownerDocument;if(i){var r=i.cancelFullScreen||i.exitFullscreen||i.webkitExitFullscreen||i.webkitCancelFullScreen||i.mozCancelFullScreen||i.msExitFullscreen;r&&r.call(i)}}}(this.tb)},f.isFullscreen=function(){return!!this.tb&&function(t){var n=t.webkitDisplayingFullscreen;if(void 0!==n)return n;var i=t.ownerDocument;return!!i&&(i.fullscreenElement||i.webkitFullscreenElement||i.mozFullScreenElement||i.webkitCurrentFullScreenElement)==t}(this.tb)},f.getMetadata=function(){},f.preimplementsMediaSessionAPI=function(){return!0},f.preimplementsAutoFullscreen=function(){return!1},f.getCurrentTime=function(){return this.Co?this.Co.currentTime:NaN},f.getDuration=function(){return this.Co?this.Co.duration:NaN},f.getPlayedRanges=function(){return[]},f.seekTo=function(t){this.user().error(cn,"`seekTo` not supported.")},s}(t.BaseElement);t.registerElement(cn,hn)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-youtube-0.1.js.map