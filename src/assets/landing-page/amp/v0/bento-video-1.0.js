;
!function(t){var n=self.BENTO=self.BENTO||{};(n.bento=n.bento||[]).push((function(t){"use strict";function n(t,e){return(n=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,e)}function e(t){return(e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,n){if(n&&("object"===r(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}var i;function a(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function u(t,n){if(t){if("string"==typeof t)return a(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(t,n):void 0}}function l(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,i=[],a=!0,u=!1;try{for(e=e.call(t);!(a=(r=e.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==e.return||e.return()}finally{if(u)throw o}}return i}}(t,n)||u(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t){var n=function(t,n){if("object"!==r(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,n);if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===r(n)?n:String(n)}function c(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function s(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?s(Object(e),!0).forEach((function(n){c(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var p="unload",y=(c(i={},"auto",0),c(i,"lazy",1),c(i,"eager",2),c(i,p,3),"loading"),b="complete";function v(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(e)return(e=e.call(t)).next.bind(e);if(Array.isArray(t)||(e=u(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var m=function(){var t=this;this.promise=new Promise((function(n,e){t.resolve=n,t.reject=e}))};Array.isArray;var h=Object.prototype;function g(t){var n=Object.getOwnPropertyDescriptor(t,"message");if(null!=n&&n.writable)return t;var e=t.message,r=t.stack,o=new Error(e);for(var i in t)o[i]=t[i];return o.stack=r,o}function w(t){for(var n,e=null,r="",o=v(arguments,!0);!(n=o()).done;){var i=n.value;i instanceof Error&&!e?e=g(i):(r&&(r+=" "),r+=i)}return e?r&&(e.message=r+": "+e.message):e=new Error(r),e}function j(t){var n,e;null===(n=(e=self).__AMP_REPORT_ERROR)||void 0===n||n.call(e,t)}function O(t){var n=w.apply(null,arguments);return n.expected=!0,n}h.hasOwnProperty,h.toString;var k=self.AMP_CONFIG||{},S=("string"==typeof k.thirdPartyFrameRegex?new RegExp(k.thirdPartyFrameRegex):k.thirdPartyFrameRegex,("string"==typeof k.cdnProxyRegex?new RegExp(k.cdnProxyRegex):k.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function q(t){if(!self.document||!self.document.head)return null;if(self.location&&S.test(self.location.origin))return null;var n=self.document.head.querySelector('meta[name="'.concat(t,'"]'));return n&&n.getAttribute("content")||null}k.thirdPartyUrl,k.thirdPartyFrameHost,k.cdnUrl||q("runtime-host"),k.errorReportingUrl,k.betaErrorReportingUrl,k.localDev,k.geoApiUrl||q("amp-geo-api"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null},self.__AMP_LOG;var x={"title":"","artist":"","album":"","artwork":[{"src":""}]};function E(t){var n=t.querySelector('script[type="application/ld+json"]');if(n){var e=function(t,n){try{return function(t){return JSON.parse(t)}(t)}catch(t){return null==n||n(t),null}}(n.textContent);if(e&&e.image)return"string"==typeof e.image?e.image:e.image["@list"]&&"string"==typeof e.image["@list"][0]?e.image["@list"][0]:"string"==typeof e.image.url?e.image.url:"string"==typeof e.image[0]?e.image[0]:void 0}}function R(t){var n=t.querySelector('link[rel="shortcut icon"]')||t.querySelector('link[rel="icon"]');return n?n.getAttribute("href"):void 0}function A(n){var e=n.displayIcon,r=n.displayOverlay,o=n.metadata,i=n.onOverlayClick,a=n.pause,u=n.play,l=n.playing,f=n.wrapperRef,c=(0,t.useAmpContext)().playable;return(0,t.useEffect)((function(){if(c){var t=new IntersectionObserver((function(t){t[t.length-1].isIntersecting?u().catch((function(){})):a()}),{threshold:.5});return t.observe(f.current),function(){t.disconnect()}}a()}),[f,u,a,c]),(0,t.createElement)(t.Fragment,null,e&&(0,t.createElement)("div",{class:"eq-9e7199f"+(l?" eq-playing-9e7199f":"")},(0,t.createElement)(z,null)),r&&(0,t.createElement)("button",{"aria-label":o&&o.title||"Unmute video",tabindex:"0",class:"autoplay-mask-button-9e7199f fill-content-overlay-fc551a7",onClick:i}))}var P,I,T,z=(P=!1,I=null,T=function(){return[1,2,3,4].map((function(n){return(0,t.createElement)("div",{class:"eq-col-9e7199f",key:n})}))},function(){if(!P){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];I=T.apply(self,n),P=!0,T=null}return I}),C=(0,t.forwardRef)((function(n,e){var r,o="class",i=n.autoplay,a=void 0!==i&&i,u=n.component,c=void 0===u?"video":u,s=n.controls,v=void 0!==s&&s,h=n.loading,g=n.loop,w=void 0!==g&&g,k=n.mediasession,S=void 0===k||k,q=n.noaudio,P=void 0!==q&&q,I=n.onPlayingState,T=n.onReadyState,z=n.poster,C=n.sources,Y=n.src,N=n.style,B=n[o],F=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(n,["autoplay","component","controls","loading","loop","mediasession","noaudio","onPlayingState","onReadyState","poster","sources","src","style",o].map(f));r=(0,t.useAmpContext)().notify,(0,t.useLayoutEffect)((function(){r&&r()}));var L=(0,t.useAmpContext)().playable,M=(0,t.useLoading)(h),U=M!==p,$=l((0,t.useState)(a),2),D=$[0],J=$[1],V=l((0,t.useState)(!1),2),W=V[0],Z=V[1],_=l((0,t.useState)(null),2),G=_[0],H=_[1],K=l((0,t.useState)(!a),2),Q=K[0],X=K[1],tt=(0,t.useRef)(null),nt=(0,t.useRef)(null),et=(0,t.useMemo)((function(){return new m}),[]),rt=(0,t.useRef)(y),ot=(0,t.useValueRef)(T),it=(0,t.useCallback)((function(t,n){if(t!==rt.current){rt.current=t;var e=ot.current;e&&e(t,n)}}),[ot]),at=(0,t.useValueRef)(I),ut=(0,t.useCallback)((function(t){Z(t);var n=at.current;n&&n(t)}),[at]);(0,t.useLayoutEffect)((function(){U||ut(!1)}),[U,ut]);var lt=(0,t.useCallback)((function(){return et.promise.then((function(){return t=nt.current,e=function(){return t.play(!!n)},(r=new Promise((function(t){t(e())}))).catch((function(t){!function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];j(O.apply(null,e))}("TRYPLAY",t)})),r;var t,n,e,r}))}),[et]),ft=(0,t.useCallback)((function(){et.promise.then((function(){var t;return null===(t=nt.current)||void 0===t?void 0:t.pause()}))}),[et]),ct=(0,t.useCallback)((function(){return et.promise.then((function(){return nt.current.requestFullscreen()}))}),[et]),st=(0,t.useCallback)((function(){J(!1),X(!0)}),[]);return(0,t.useLayoutEffect)((function(){var t,n=null===(t=nt.current)||void 0===t?void 0:t.readyState;null!=n&&it(n>0?b:y)}),[it]),(0,t.useLayoutEffect)((function(){return S&&W&&G&&function(t,n,e,r){var o=t.navigator;"mediaSession"in o&&t.MediaMetadata&&(o.mediaSession.metadata=new t.MediaMetadata(x),o.mediaSession.metadata=new t.MediaMetadata(n),o.mediaSession.setActionHandler("play",e),o.mediaSession.setActionHandler("pause",r))}(window,G,lt,ft),function(){}}),[S,W,G,lt,ft]),(0,t.useEffect)((function(){L||ft()}),[L,ft]),(0,t.useImperativeHandle)(e,(function(){return{get readyState(){return rt.current},play:lt,pause:ft,requestFullscreen:ct,get currentTime(){return nt.current?nt.current.currentTime:0},get duration(){return nt.current?nt.current.duration:NaN},get autoplay(){return a},get controls(){return v},get loop(){return w},userInteracted:st,mute:function(){return J(!0)},unmute:function(){Q&&J(!1)}}}),[lt,ft,ct,st,Q,a,v,w]),(0,t.createElement)(t.ContainWrapper,{contentRef:tt,class:B,style:N,size:!0,layout:!0,paint:!0},U&&(0,t.createElement)(c,d(d({},F),{},{ref:nt,loading:M,muted:D,loop:w,controls:v&&(!a||Q),onCanPlay:function(){et.resolve(),it(b)},onLoadedMetadata:function(){S&&et.promise.then((function(){var t,n,e,r;H((t=nt.current,d({"title":(n=F).title||n["aria-label"]||document.title,"artist":n.artist||"","album":n.album||"","artwork":[{"src":n.artwork||n.poster||E(document)||(e=document,r=e.querySelector('meta[property="og:image"]'),r?r.getAttribute("content"):void 0)||R(document)||""}]},t&&t.getMetadata?t.getMetadata():Object.create(null))))})),it(b)},onPlaying:function(){return ut(!0)},onPause:function(){return ut(!1)},onEnded:function(){return ut(!1)},onError:function(t){it("error",t),et.reject(t)},class:"fill-stretch-fc551a7",src:Y,poster:z}),C),a&&!Q&&(0,t.createElement)(A,{metadata:G,playing:W,displayIcon:!P&&D,wrapperRef:tt,play:lt,pause:ft,displayOverlay:v,onOverlayClick:st}))}));C.displayName="VideoWrapper";var Y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}(u,t);var r,i,a=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=e(r);if(i){var a=e(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return o(this,t)});function u(){return a.apply(this,arguments)}return u}(t.PreactBaseElement);Y.Component=C,Y.loadable=!0,Y.layoutSizeDefined=!0,Y.staticProps,Y.props={"album":{attr:"album"},"alt":{attr:"alt"},"artist":{attr:"artist"},"artwork":{attr:"artwork"},"attribution":{attr:"attribution"},"autoplay":{attr:"autoplay",type:"boolean"},"controls":{attr:"controls",type:"boolean"},"controlslist":{attr:"controlslist"},"crossorigin":{attr:"crossorigin"},"disableremoteplayback":{attr:"disableremoteplayback"},"loop":{attr:"loop",type:"boolean"},"noaudio":{attr:"noaudio",type:"boolean"},"poster":{attr:"poster"},"sources":{selector:"source",single:!1,clone:!0},"src":{attr:"src"},"title":{attr:"title"},"dock":{attr:"dock",media:!0},"rotate-to-fullscreen":{attr:"rotate-to-fullscreen",type:"boolean",media:!0}},Y.shadowCss='.fill-stretch-fc551a7{width:100%;height:100%;position:relative}.fill-content-overlay-fc551a7{top:0;left:0;right:0;bottom:0;position:absolute}.autoplay-mask-button-9e7199f{width:100%;border:none;display:block;-webkit-appearance:none;appearance:none;background:transparent}.eq-9e7199f{right:7px;width:20px;bottom:7px;height:12px;display:-ms-flexbox;display:flex;opacity:0.8;z-index:1;overflow:hidden;position:absolute;-ms-flex-align:end;align-items:flex-end;pointer-events:none!important}.eq-playing-9e7199f>div:after,.eq-playing-9e7199f>div:before{animation-play-state:running}.eq-col-9e7199f{-ms-flex:1;flex:1;height:100%;position:relative;margin-right:1px}.eq-col-9e7199f:after,.eq-col-9e7199f:before{width:100%;height:100%;content:"";position:absolute;animation:keyframes-eq-animation-9e7199f 0s linear infinite alternate;will-change:transform;background-color:#fafafa;animation-play-state:paused}.eq-col-9e7199f:nth-child(4):before{animation-duration:0.4s}.eq-col-9e7199f:nth-child(4):after{animation-duration:0.25s}.eq-col-9e7199f:nth-child(3):before{animation-duration:0.3s}.eq-col-9e7199f:nth-child(3):after{animation-duration:0.35s}.eq-col-9e7199f:nth-child(2):before{animation-duration:0.5s}.eq-col-9e7199f:nth-child(2):after{animation-duration:0.4s}.eq-col-9e7199f:first-child:before{animation-duration:0.3s}.eq-col-9e7199f:first-child:after{animation-duration:0.45s}@keyframes keyframes-eq-animation-9e7199f{0%{transform:translateY(100%)}to{transform:translateY(0)}}',Y.usesShadowDom=!0,(0,t.defineBentoElement)("bento-video",Y,undefined)}))}();
//# sourceMappingURL=bento-video-1.0.js.map