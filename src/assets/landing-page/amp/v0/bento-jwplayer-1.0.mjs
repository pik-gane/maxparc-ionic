;
function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function e(e,n){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(o)return(o=o.call(e)).next.bind(o);if(Array.isArray(e)||(o=function(e,n){if(e){if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){o&&(e=o);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}import{PreactBaseElement as n}from"../bento.mjs";function o(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){var e=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==a(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===a(e)?e:String(e)}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c=class{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}},{isArray:u}=Array;function f(t,e){return e.toUpperCase()}var{hasOwnProperty:d,toString:m}=Object.prototype;function p(t){return"[object Object]"===m.call(t)}function y(t){const e=Object.getOwnPropertyDescriptor(t,"message");if(null!=e&&e.writable)return t;const{message:n,stack:o}=t,a=new Error(n);for(const e in t)a[e]=t[e];return a.stack=o,a}function b(t){let n=null,o="";for(var a,r=e(arguments,!0);!(a=r()).done;){const t=a.value;t instanceof Error&&!n?n=y(t):(o&&(o+=" "),o+=t)}return n?o&&(n.message=o+": "+n.message):n=new Error(o),n}function v(t){const e=b.apply(null,arguments);return e.expected=!0,e}function g(t,...e){var n,o,a;n=v.apply(null,e),null===(o=(a=self).__AMP_REPORT_ERROR)||void 0===o||o.call(a,n)}import{Fragment as h,createElement as w}from"../bento.mjs";import{useCallback as j,useEffect as k,useImperativeHandle as S,useLayoutEffect as P,useMemo as I,useRef as O,useState as C}from"../bento.mjs";import{forwardRef as M}from"../bento.mjs";import{ContainWrapper as q,useValueRef as R}from"../bento.mjs";import{useAmpContext as x,useLoading as E}from"../bento.mjs";import{useCallback as A,useLayoutEffect as L}from"../bento.mjs";import{useAmpContext as N}from"../bento.mjs";function $(t,e){try{return function(t){return JSON.parse(t)}(t)}catch(t){return null==e||e(t),null}}var U={bubbles:!0,cancelable:!0};function T(t,e,n){const o=e||(t=>t),{dataset:a}=t,r={},l=n||/^param(.+)/;for(const t in a){const e=t.match(l);e&&(r[o(e[1][0].toLowerCase()+e[1].substr(1))]=a[t])}return r}function F(t,e,n,o){const a=n||{};t.ownerDocument;const r=t.ownerDocument.createEvent("Event");r.data=a;const{bubbles:l,cancelable:s}=o||U;r.initEvent(e,l,s),t.dispatchEvent(r)}var _=self.AMP_CONFIG||{},J=("string"==typeof _.thirdPartyFrameRegex?new RegExp(_.thirdPartyFrameRegex):_.thirdPartyFrameRegex,("string"==typeof _.cdnProxyRegex?new RegExp(_.cdnProxyRegex):_.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function V(t){if(!self.document||!self.document.head)return null;if(self.location&&J.test(self.location.origin))return null;const e=self.document.head.querySelector(`meta[name="${t}"]`);return e&&e.getAttribute("content")||null}_.thirdPartyUrl,_.thirdPartyFrameHost,_.cdnUrl||V("runtime-host"),_.errorReportingUrl,_.betaErrorReportingUrl,_.localDev,_.geoApiUrl||V("amp-geo-api"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null},self.__AMP_LOG;var z={"title":"","artist":"","album":"","artwork":[{"src":""}]};function B(t){const e=t.querySelector('script[type="application/ld+json"]');if(!e)return;const n=$(e.textContent);return n&&n.image?"string"==typeof n.image?n.image:n.image["@list"]&&"string"==typeof n.image["@list"][0]?n.image["@list"][0]:"string"==typeof n.image.url?n.image.url:"string"==typeof n.image[0]?n.image[0]:void 0:void 0}function Y(t){const e=t.querySelector('meta[property="og:image"]');return e?e.getAttribute("content"):void 0}function G(t){const e=t.querySelector('link[rel="shortcut icon"]')||t.querySelector('link[rel="icon"]');return e?e.getAttribute("href"):void 0}function H({displayIcon:t,displayOverlay:e,metadata:n,onOverlayClick:o,pause:a,play:r,playing:l,wrapperRef:s}){const{playable:i}=x();return k((()=>{if(!i)return void a();const t=new IntersectionObserver((t=>{t[t.length-1].isIntersecting?r().catch((()=>{})):a()}),{threshold:.5});return t.observe(s.current),()=>{t.disconnect()}}),[s,r,a,i]),w(h,null,t&&w("div",{class:"eq-9e7199f"+(l?" eq-playing-9e7199f":"")},w(Q,null)),e&&w("button",{"aria-label":n&&n.title||"Unmute video",tabindex:"0",class:"autoplay-mask-button-9e7199f fill-content-overlay-fc551a7",onClick:o}))}var Q=function(t){let e=!1,n=null,o=()=>[1,2,3,4].map((t=>w("div",{class:"eq-col-9e7199f",key:t})));return(...t)=>(e||(n=o.apply(self,t),e=!0,o=null),n)}(),W=M((function(t,e){let n="class",{autoplay:a=!1,component:l="video",controls:s=!1,loading:u,loop:f=!1,mediasession:d=!0,noaudio:m=!1,onPlayingState:p,onReadyState:y,poster:b,sources:v,src:h,style:M,[n]:A}=t,$=o(t,["autoplay","component","controls","loading","loop","mediasession","noaudio","onPlayingState","onReadyState","poster","sources","src","style",n].map(r));!function(){const{notify:t}=N();L((()=>{t&&t()}))}();const{playable:U}=x(),T=E(u),F="unload"!==T,[_,J]=C(a),[V,Q]=C(!1),[W,X]=C(null),[Z,D]=C(!a),K=O(null),tt=O(null),et=I((()=>new c),[]),nt=O("loading"),ot=R(y),at=j(((t,e)=>{if(t!==nt.current){nt.current=t;const n=ot.current;n&&n(t,e)}}),[ot]),rt=R(p),lt=j((t=>{Q(t);const e=rt.current;e&&e(t)}),[rt]);P((()=>{F||lt(!1)}),[F,lt]);const st=j((()=>et.promise.then((()=>function(t,e){const n=(o=()=>t.play(!1),new Promise((t=>{t(o())})));var o;return n.catch((t=>{g(0,t)})),n}(tt.current)))),[et]),it=j((()=>{et.promise.then((()=>{var t;return null===(t=tt.current)||void 0===t?void 0:t.pause()}))}),[et]),ct=j((()=>et.promise.then((()=>tt.current.requestFullscreen()))),[et]),ut=j((()=>{J(!1),D(!0)}),[]);return P((()=>{var t;const e=null===(t=tt.current)||void 0===t?void 0:t.readyState;null!=e&&at(e>0?"complete":"loading")}),[at]),P((()=>(d&&V&&W&&function(t,e,n,o){const{navigator:a}=t;"mediaSession"in a&&t.MediaMetadata&&(a.mediaSession.metadata=new t.MediaMetadata(z),a.mediaSession.metadata=new t.MediaMetadata(e),a.mediaSession.setActionHandler("play",n),a.mediaSession.setActionHandler("pause",o))}(window,W,st,it),()=>{})),[d,V,W,st,it]),k((()=>{U||it()}),[U,it]),S(e,(()=>({get readyState(){return nt.current},play:st,pause:it,requestFullscreen:ct,get currentTime(){return tt.current?tt.current.currentTime:0},get duration(){return tt.current?tt.current.duration:NaN},get autoplay(){return a},get controls(){return s},get loop(){return f},userInteracted:ut,mute:()=>J(!0),unmute:()=>{Z&&J(!1)}})),[st,it,ct,ut,Z,a,s,f]),w(q,{contentRef:K,class:A,style:M,size:!0,layout:!0,paint:!0},F&&w(l,i(i({},$),{},{ref:tt,loading:T,muted:_,loop:f,controls:s&&(!a||Z),onCanPlay:()=>{et.resolve(),at("complete")},onLoadedMetadata:()=>{d&&et.promise.then((()=>{var t,e;X((t=tt.current,i({"title":(e=$).title||e["aria-label"]||document.title,"artist":e.artist||"","album":e.album||"","artwork":[{"src":e.artwork||e.poster||B(document)||Y(document)||G(document)||""}]},t&&t.getMetadata?t.getMetadata():Object.create(null))))})),at("complete")},onPlaying:()=>lt(!0),onPause:()=>lt(!1),onEnded:()=>lt(!1),onError:t=>{at("error",t),et.reject(t)},class:"fill-stretch-fc551a7",src:h,poster:b}),v),a&&!Z&&w(H,{metadata:W,playing:V,displayIcon:!m&&_,wrapperRef:K,play:st,pause:it,displayOverlay:s,onOverlayClick:ut}))}));W.displayName="VideoWrapper";var X=class extends n{};X.Component=W,X.loadable=!0,X.layoutSizeDefined=!0,X.staticProps,X.props={"album":{attr:"album"},"alt":{attr:"alt"},"artist":{attr:"artist"},"artwork":{attr:"artwork"},"attribution":{attr:"attribution"},"autoplay":{attr:"autoplay",type:"boolean"},"controls":{attr:"controls",type:"boolean"},"controlslist":{attr:"controlslist"},"crossorigin":{attr:"crossorigin"},"disableremoteplayback":{attr:"disableremoteplayback"},"loop":{attr:"loop",type:"boolean"},"noaudio":{attr:"noaudio",type:"boolean"},"poster":{attr:"poster"},"sources":{selector:"source",single:!1,clone:!0},"src":{attr:"src"},"title":{attr:"title"},"dock":{attr:"dock",media:!0},"rotate-to-fullscreen":{attr:"rotate-to-fullscreen",type:"boolean",media:!0}},X.shadowCss='.fill-stretch-fc551a7{width:100%;height:100%;position:relative}.fill-content-overlay-fc551a7{top:0;left:0;right:0;bottom:0;position:absolute}.autoplay-mask-button-9e7199f{width:100%;border:none;display:block;-webkit-appearance:none;appearance:none;background:transparent}.eq-9e7199f{right:7px;width:20px;bottom:7px;height:12px;display:-ms-flexbox;display:flex;opacity:0.8;z-index:1;overflow:hidden;position:absolute;-ms-flex-align:end;align-items:flex-end;pointer-events:none!important}.eq-playing-9e7199f>div:after,.eq-playing-9e7199f>div:before{animation-play-state:running}.eq-col-9e7199f{-ms-flex:1;flex:1;height:100%;position:relative;margin-right:1px}.eq-col-9e7199f:after,.eq-col-9e7199f:before{width:100%;height:100%;content:"";position:absolute;animation:keyframes-eq-animation-9e7199f 0s linear infinite alternate;will-change:transform;background-color:#fafafa;animation-play-state:paused}.eq-col-9e7199f:nth-child(4):before{animation-duration:0.4s}.eq-col-9e7199f:nth-child(4):after{animation-duration:0.25s}.eq-col-9e7199f:nth-child(3):before{animation-duration:0.3s}.eq-col-9e7199f:nth-child(3):after{animation-duration:0.35s}.eq-col-9e7199f:nth-child(2):before{animation-duration:0.5s}.eq-col-9e7199f:nth-child(2):after{animation-duration:0.4s}.eq-col-9e7199f:first-child:before{animation-duration:0.3s}.eq-col-9e7199f:first-child:after{animation-duration:0.45s}@keyframes keyframes-eq-animation-9e7199f{0%{transform:translateY(100%)}to{transform:translateY(0)}}',X.usesShadowDom=!0;import{createElement as Z}from"../bento.mjs";import{Slot as D,createSlot as K}from"../bento.mjs";function tt(t){const e=e=>(null==e?void 0:e.startsWith(t))&&e!==t;return{"attrMatches":e,"parseAttrs":n=>{let o;const a=n.attributes;for(let n=0;n<a.length;n++){const l=a[n];e(l.name)&&(o||(o={}),o[(r=l.name.slice(t.length),r.replace(/-([a-z])/g,f))]=l.value)}var r;return o}}}new Set(["c","v","a","ad"]);var et={"play":"playing","pause":"pause","complete":"ended","visible":"amp:video:visibility","adImpression":"ad_start","adComplete":"ad_end"};import{createElement as nt}from"../bento.mjs";import{useCallback as ot,useImperativeHandle as at,useLayoutEffect as rt,useMemo as lt,useRef as st}from"../bento.mjs";import{forwardRef as it}from"../bento.mjs";var ct=["loading","unloadOnPause","sandbox","muted","controls","origin","onCanPlay","onMessage","playerStateRef","makeMethodMessage","makeFullscreenMessage","onIframeLoad"],ut=["allow-scripts","allow-same-origin","allow-popups","allow-popups-to-escape-sandbox","allow-top-navigation-by-user-activation"].join(" ");function ft(t,e,n){t&&t.contentWindow&&e.then((()=>{t.contentWindow.postMessage(n(),"*")}))}var dt=it((function(t,e){let{loading:n,unloadOnPause:a=!1,sandbox:r=ut,muted:l=!1,controls:s=!1,origin:u,onCanPlay:f,onMessage:d,playerStateRef:m,makeMethodMessage:p,makeFullscreenMessage:y,onIframeLoad:b}=t,v=o(t,ct);const g=st(null),h=lt((()=>new c),[]),w=st(p),j=ot((t=>{ft(null==g?void 0:g.current,h.promise,(()=>w.current(t)))}),[h.promise]),k=st(y),S=ot((()=>ft(null==g?void 0:g.current,h.promise,k.current)),[h.promise]);at(e,(()=>({get currentTime(){var t,e;return null!==(t=null==m||null===(e=m.current)||void 0===e?void 0:e.currentTime)&&void 0!==t?t:NaN},get duration(){var t,e;return null!==(t=null==m||null===(e=m.current)||void 0===e?void 0:e.duration)&&void 0!==t?t:NaN},requestFullscreen:()=>{if(!k.current)return h.promise.then((()=>{g.current.requestFullscreen()}));S()},play:()=>j("play"),pause:()=>{if(a){const t=g.current;t&&(t.src=t.src)}else j("pause")}})),[m,j,S,h.promise,a]);const P=function(t){const e=st(null);return e.current=t,e}(d);return rt((()=>{if(!g.current)return;function t(t){P.current&&(u&&!u.test(t.origin)||t.source!=g.current.contentWindow||P.current({currentTarget:g.current,target:g.current,data:t.data}))}const{defaultView:e}=g.current.ownerDocument;return e.addEventListener("message",t),()=>e.removeEventListener("message",t)}),[u,P]),rt((()=>{j(l?"mute":"unmute")}),[l,j]),rt((()=>{j(s?"showControls":"hideControls")}),[s,j]),nt("iframe",i(i({},v),{},{ref:g,allowfullscreen:!0,frameborder:"0",sandbox:r,loading:n,onCanPlay:()=>{f&&h.promise.then(f),h.resolve()},onLoad:t=>{null==b||b(t)}}))}));dt.displayName="VideoIframeInternal";var mt=it((function(t,e){return nt(W,i(i({ref:e},t),{},{component:dt}))}));mt.displayName="VideoIframe";import{createElement as pt}from"../bento.mjs";import{useCallback as yt,useMemo as bt,useRef as vt}from"../bento.mjs";import{forwardRef as gt}from"../bento.mjs";var ht=["adCustParams","adMacros","autoplay","config","consentParams","contentBackfill","contentRecency","contentSearch","mediaId","onLoad","onPlayingState","playerId","playlistId","queryParams"],wt=["json"],jt=/https:\/\/content\.jwplatform\.com/,kt=gt((function(t,e){const{adCustParams:n,adMacros:a,autoplay:r,config:l,consentParams:s={},contentBackfill:c=!0,contentRecency:f,contentSearch:d,mediaId:m,onLoad:y,onPlayingState:b,playerId:v,playlistId:g,queryParams:h}=t,w=o(t,ht),j=vt({}),k=bt((()=>function(t,e,n,o,a,r,l,s){if(!t)return null;const c=encodeURIComponent(t);let f=encodeURIComponent(e||n);"outstream"===f&&(f="oi7pAMI1");let d=`https://content.jwplatform.com/players/${f}-${c}.html`;const{policyInfo:m,policyMetadata:p,policyState:y}=s;return d=function(t,e){return function(t,e,n){if(!e)return t;const o=t.split("#",2),a=o[0].split("?",2);let r=a[0]+(a[1]?`?${a[1]}&${e}`:`?${e}`);return r+=o[1]?`#${o[1]}`:"",r}(t,function(t){const e=[];for(const r in t){let l=t[r];if(null!=l){l=u(a=l)?a:[a];for(let t=0;t<l.length;t++)e.push((n=r,o=l[t],`${encodeURIComponent(n)}=${encodeURIComponent(o)}`))}}var n,o,a;return e.join("&")}(e))}(d,i(i({},l),{},{"search":o||void 0,"recency":a||void 0,"backfill":r||void 0,"isAMP":!0,"consentState":y||void 0,"consentValue":m||void 0,"consentGdpr":(null==p?void 0:p.gdprApplies)||void 0})),d}(v,g,m,d,f,c,h,s)),[v,g,m,d,f,c,h,s]),S=yt((t=>function(t,e){const{currentTarget:n,data:a}=t,{adCustParams:r,adMacros:l,config:s,onLoad:c,onPlayingState:u,playerStateRef:f}=e;if(!(d=a)||!p(d)&&!d.startsWith("{"))return;var d;const m=p(v=a)?v:$(v),{detail:y,event:b}=m;var v;if("setup"!==b)if("ready"===b&&y)!function(t,e,n){const{muted:o}=e;F(t,"canplay"),null==n||n(),o&&F(t,"muted"),F(t,"load")}(n,y,c);else{switch(b){case"play":case"adPlay":null==u||u(!0);break;case"pause":case"complete":null==u||u(!1)}y.currentTime&&(f.current.currentTime=y.currentTime),y.duration&&(f.current.duration=y.duration),b in et&&F(n,et[b])}else!function(t,e,n,a){const r=e||{},{json:l}=r,s=o(r,wt),c=i(i({},$(l)||{}),s);a&&0!==Object.keys(a).length&&(c.adMacros=a),n&&(c.adCustParams=$(n)),function(t,e,n){t&&t.contentWindow&&t.contentWindow.postMessage(JSON.stringify({"method":"setupConfig","optParams":n}),"*")}(t,0,c)}(n,s,r,l)}(t,{config:l,adCustParams:n,adMacros:a,onPlayingState:b,onLoad:y,playerStateRef:j})),[l,n,a,b,y]),P=yt((t=>function(t,e){let n,o;switch(t){case"play":{const{autoplay:t}=e;t&&(o=!0),n="play";break}case"pause":n="pause";break;case"mute":n="setMute",o=!0;break;case"unmute":n="setMute",o=!1;break;case"showControls":n="setControls",o=!0;break;case"hideControls":n="setControls",o=!1}const a={method:n,optParams:o};return JSON.stringify(a)}(t,{autoplay:r})),[r]),I=bt((()=>window.document.body.requestFullscreen?null:()=>JSON.stringify({method:"setFullscreen",optParams:!0})),[]);return!!function(t){const{mediaId:e,playerId:n,playlistId:o}=t;return!(!n||!e&&!o)||(console.warn("playerId and one of: mediaId or playlistId are required for <Jwplayer>"),!1)}(t)&&pt(mt,i({ref:e,playerStateRef:j,src:k,makeMethodMessage:P,makeFullscreenMessage:I,onMessage:S,origin:jt,controls:!0},w))}));kt.displayName="BentoJwPlayer";var St=class extends X{init(){return super.init(),{"queryParams":this.mergeQueryParams(T(this.element,null,/^playerParam(.+)/),this.element.getAttribute("data-player-querystring")),"contentSearch":this.getContextualSearch(this.element.getAttribute("data-content-search"))}}getContextualSearch(t){if("__CONTEXTUAL__"!==t)return t;const{head:e,title:n}=this.element.ownerDocument,o=e.querySelector('meta[property="og:title"]');return(o?o.getAttribute("content"):null)||n||""}mergeQueryParams(t,n){const o=(t,n)=>{for(var o,a=e(n,!0);!(o=a()).done;){const e=o.value;t[e[0]]=e[1]}},a=new URLSearchParams(t||""),r=new URLSearchParams(n||""),l={};return o(l,a.entries()),o(l,r.entries()),l}};St.Component=kt,St.props={"playerId":{attr:"data-player-id"},"mediaId":{attr:"data-media-id"},"playlistId":{attr:"data-playlist-id"},"contentRecency":{attr:"data-content-recency"},"contentBackfill":{attr:"data-content-backfill",type:"boolean"},"adCustParams":{attr:"data-ad-cust-params"},"adMacros":tt("data-ad-macro-"),"config":tt("data-config-"),"autoplay":{attr:"autoplay",type:"boolean"},"loading":{attr:"data-loading"},"dock":{attr:"dock",media:!0}},St.layoutSizeDefined=!0,St.usesShadowDom=!0,St.loadable=!0;import{defineBentoElement as Pt}from"../bento.mjs";Pt("bento-jwplayer",St,void 0);
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
//# sourceMappingURL=bento-jwplayer-1.0.mjs.map