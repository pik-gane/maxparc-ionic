;
(self.AMP=self.AMP||[]).push({m:1,v:"2203281422000",n:"amp-gfycat",ev:"0.1",l:!0,f:function(t,i){(()=>{var{isArray:i}=Array;function n(t){return i(t)?t:[t]}function e(t,i){(null==i||i>t.length)&&(i=t.length);for(var n=0,e=new Array(i);n<i;n++)e[n]=t[n];return e}function s(t,i){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,i){if(t){if("string"==typeof t)return e(t,i);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,i):void 0}}(t))||i&&t&&"number"==typeof t.length){n&&(t=n);var s=0;return function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var{hasOwnProperty:o,toString:r}=Object.prototype;function a(t){const i=Object.create(null);return t&&Object.assign(i,t),i}function l(t){return"number"==typeof t&&isFinite(t)}function h(t,i,n,e,s,o,r,a,l,h,u){return t}function u(t){return(t.ownerDocument||t).defaultView}var c={bubbles:!0,cancelable:!0};function d(t){var i;null===(i=t.parentElement)||void 0===i||i.removeChild(t)}function f(t,i,n,e){const s=n||{};h(t.ownerDocument);const o=t.ownerDocument.createEvent("Event");o.data=s;const{bubbles:r,cancelable:a}=e||c;o.initEvent(i,r,a),t.dispatchEvent(o)}function m(t,i){t.classList.add("i-amphtml-fill-content"),i&&t.classList.add("i-amphtml-replaced-content")}var p=self.AMP_CONFIG||{},v=("string"==typeof p.thirdPartyFrameRegex?new RegExp(p.thirdPartyFrameRegex):p.thirdPartyFrameRegex,("string"==typeof p.cdnProxyRegex?new RegExp(p.cdnProxyRegex):p.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function _(t){if(!self.document||!self.document.head)return null;if(self.location&&v.test(self.location.origin))return null;const i=self.document.head.querySelector(`meta[name="${t}"]`);return i&&i.getAttribute("content")||null}function g(t){const i=Object.getOwnPropertyDescriptor(t,"message");if(null!=i&&i.writable)return t;const{message:n,stack:e}=t,s=new Error(n);for(const i in t)s[i]=t[i];return s.stack=e,s}function y(t){let i=null,n="";for(var e,o=s(arguments,!0);!(e=o()).done;){const t=e.value;t instanceof Error&&!i?i=g(t):(n&&(n+=" "),n+=t)}return i?n&&(i.message=n+": "+i.message):i=new Error(n),i}function A(t){const i=y.apply(null,arguments);return i.expected=!0,i}function P(t,...i){var n,e,s;n=A.apply(null,i),null===(e=(s=self).__AMP_REPORT_ERROR)||void 0===e||e.call(s,n)}function b(t){let i=!1,n=null,e=t;return(...t)=>(i||(n=e.apply(self,t),i=!0,e=null),n)}p.thirdPartyUrl,p.thirdPartyFrameHost,p.cdnUrl||_("runtime-host"),p.errorReportingUrl,p.betaErrorReportingUrl,p.localDev,p.geoApiUrl||_("amp-geo-api"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var M,E=self.__AMP_LOG;function I(t){return E.user||(E.user=R()),function(t,i){return i&&i.ownerDocument.defaultView!=t}(E.user.win,t)?E.userForEmbed||(E.userForEmbed=R()):E.user}function R(t){return function(t,i){throw new Error("failed to call initLogConstructor")}()}function T(t,i,n,e,s,o,r,a,l,h,u){return t}function V(t,i,n,e,s,o,r,a,l,h,u){return I().assert(t,i,n,e,s,o,r,a,l,h,u)}function w(){return M||(M=Promise.resolve(void 0))}function k(t){return new Promise((i=>{i(t())}))}function C(t,i){return $(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function q(t,i){return $(O(S(t)),i)}function x(t,i){const n=O(S(t));return F(n,i)?$(n,i):null}function S(t){return t.nodeType?(i=u(t),C(i,"ampdoc")).getAmpDoc(t):t;var i}function O(t){const i=S(t);return i.isSingleDoc()?i.win:i}function $(t,i){T(F(t,i));const n=j(t)[i];return n.obj||(T(n.ctor),T(n.context),n.obj=new n.ctor(n.context),T(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}function j(t){let i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}function F(t,i){const n=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!n||!n.ctor)}var L,Y,U,z=t=>x(t,"action"),N=t=>C(t,"platform"),D=t=>$(t,"timer"),W=t=>q(t,"viewport");function B(t,i,n={}){const{needsRootBounds:e,rootMargin:s,threshold:o}=n,r=function(t){return t.parent&&t.parent!=t}(i)&&(e||s)?i.document:void 0;return new i.IntersectionObserver(t,{threshold:o,root:r,rootMargin:s})}function J(t){var i;let n=null===(i=L)||void 0===i?void 0:i.get(t);if(!n){const i=function(t){L||(L=new WeakMap,Y=new WeakMap),h(Y);let i=Y.get(t);return i||(i=B((t=>{const n=new Set;for(let s=t.length-1;s>=0;s--){var e;const{target:o}=t[s];n.has(o)||(n.add(o),h(i),i.unobserve(o),h(L),null===(e=L.get(o))||void 0===e||e.resolve(t[s]),L.delete(o))}}),t,{needsRootBounds:!0}),Y.set(t,i)),i}(u(t));h(L),i.observe(t),n=new class{constructor(){this.promise=new Promise(((t,i)=>{this.resolve=t,this.reject=i}))}},L.set(t,n)}return n.promise}new WeakMap,new WeakMap;var Z,G=["Webkit","webkit","Moz","moz","ms","O","o"];function H(t,i,n,e,s){const o=function(t,i,n){if(i.startsWith("--"))return i;U||(U=a());let e=U[i];if(!e||n){if(e=i,void 0===t[i]){const n=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(i),s=function(t,i){for(let n=0;n<G.length;n++){const e=G[n]+i;if(void 0!==t[e])return e}return""}(t,n);void 0!==t[s]&&(e=s)}n||(U[i]=e)}return e}(t.style,i,s);if(!o)return;const r=e?n+e:n;t.style.setProperty(function(t){const i=t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()));return G.some((t=>i.startsWith(t+"-")))?`-${i}`:i}(o),r)}function K(t){return null==t.__AMP_AUTOPLAY&&(t.__AMP_AUTOPLAY=function(t){const i=t.document.createElement("video");var n;return i.setAttribute("muted",""),i.setAttribute("playsinline",""),i.setAttribute("webkit-playsinline",""),i.setAttribute("height","0"),i.setAttribute("width","0"),i.muted=!0,i.playsInline=!0,i.playsinline=!0,i.webkitPlaysinline=!0,function(t,i){for(const n in i)H(t,n,i[n])}(i,{position:"fixed",top:"0",width:"0",height:"0",opacity:"0"}),n=i,k((()=>n.play())).catch((()=>{})),Promise.resolve(!i.paused)}(t)),t.__AMP_AUTOPLAY}function Q(t){return t.querySelector("video, iframe")}function X(t,i){const n=k((()=>t.play(!!i)));return n.catch((t=>{P(0,t)})),n}function tt(t,i,n,e){let s=t,o=n,r=t=>{try{return o(t)}catch(t){var i,n;throw null===(i=(n=self).__AMP_REPORT_ERROR)||void 0===i||i.call(n,t),t}};const a=function(){if(void 0!==Z)return Z;Z=!1;try{const t={get capture(){return Z=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return Z}(),l=!(null==e||!e.capture);return s.addEventListener(i,r,a?e:l),()=>{null==s||s.removeEventListener(i,r,a?e:l),o=null,s=null,r=null}}function it(t,i,n,e){const s={detail:n};return Object.assign(s,e),new t.CustomEvent(i,s)}function nt(t,i,n,e){return tt(t,i,n,e)}function et(t){return t.data}var st,ot=class{constructor(){this.m_=!1,this.v_=new class{constructor(){this.Tt=null}add(t){return this.Tt||(this.Tt=[]),this.Tt.push(t),()=>{this.remove(t)}}remove(t){this.Tt&&function(t,i){const n=t.indexOf(i);-1!=n&&t.splice(n,1)}(this.Tt,t)}removeAll(){this.Tt&&(this.Tt.length=0)}fire(t){if(this.Tt)for(var i,n=s(this.Tt.slice(),!0);!(i=n()).done;)(0,i.value)(t)}getHandlerCount(){var t,i;return null!==(t=null===(i=this.Tt)||void 0===i?void 0:i.length)&&void 0!==t?t:0}}}onSessionEnd(t){this.v_.add(t)}beginSession(){this.m_=!0}endSession(){this.m_&&this.v_.fire(),this.m_=!1}isSessionActive(){return this.m_}};function rt(t){const i=t.ownerDocument||t;return st&&st.ownerDocument===i||(st=i.createElement("div")),at}function at(t){return function(t,i){h(1===i.length),t.innerHTML=i[0];const n=t.firstElementChild;return h(n),h(!n.nextElementSibling),t.removeChild(n),n}(st,t)}var lt=['<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>'],ht=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function ut(t,i,n){if(i[n])return i[n];const e=t.querySelector(`style[${n}], link[${n}]`);return e?(i[n]=e,e):null}function ct(t,i){const n=t.styleSheets;for(let t=0;t<n.length;t++)if(n[t].ownerNode==i)return!0;return!1}var dt={"title":"","artist":"","album":"","artwork":[{"src":""}]},ft="registered",mt="load",pt="playing",vt="pause",_t="ended",gt="unmuted",yt="ad_start",At="ad_end",Pt="playing_manual",bt="paused",Mt="video-play",Et="user-interacted";function It(t){t.signals().signal(Et)}var Rt="video-manager",Tt=(t,i)=>!!t&&(t.video===i||t.video.element===i);function Vt(t,i){const n=i.top+i.height/2,e=t.getSize().height/2;return Math.abs(n-e)}function wt(t){return 10*t*5}var kt=t=>!!t&&!isNaN(t)&&t>1;function Ct(t,i,n){const{video:e}=t;t.getAnalyticsDetails().then((t=>{n&&Object.assign(t,n),f(e.element,i,t)}))}function qt(t){!function(t,n,e,s){const o=S(t),u=O(o);!function(t,i,n,e,s,o){const r=j(t);let a=r[n];a||(a=r[n]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),a.ctor||(a.ctor=e,a.context=i,a.sharedInstance=!1,a.resolve&&$(t,n))}(u,o,n,class{constructor(t){this.ampdoc=t,this.installAutoplayStyles=b((()=>function(t){!function(t,i,n,e,s){const o=t.getHeadNode(),r=function(t,i,n,e){let s=t.__AMP_CSS_SM;s||(s=t.__AMP_CSS_SM=a());const o=!n&&e&&"amp-custom"!=e&&"amp-keyframes"!=e,r=n?"amp-runtime":o?`amp-extension=${e}`:null;if(r){const n=ut(t,s,r);if(n)return"STYLE"==n.tagName&&n.textContent!==i&&(n.textContent=i),n}const l=(t.ownerDocument||t).createElement("style");l.textContent=i;let h=null;return n?l.setAttribute("amp-runtime",""):o?(l.setAttribute("amp-extension",e||""),h=ut(t,s,"amp-runtime")):(e&&l.setAttribute(e,""),h=t.lastChild),function(t,i,n=null){if(!n)return void function(t,i){t.insertBefore(i,t.firstChild)}(t,i);const e=n.nextSibling;t.insertBefore(i,e)}(t,l,h),r&&(s[r]=l),l}(o,function(t,i){const n=t.__AMP_CSS_TR;return n?n(i):i}(o,i),e||!1,s||null);if(n){const i=t.getRootNode();if(ct(i,r))return n(r),r;const e=setInterval((()=>{ct(i,r)&&(clearInterval(e),n(r))}),4)}}(t,".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/",null,!1,"amp-video-autoplay")}(this.ampdoc))),this.__=null,this.g_=null,this.y_=null,this.Ee=D(t.win),this.A_=z(t.getHeadNode()),this.P_=()=>this.b_(),this.M_=b((()=>new class{constructor(t,i){this.E_=i,this.Ci=t,this.I_=null,this.R_=null,this.__=[],this.T_=[],this.V_=()=>this.w_(),this.k_=t=>this.C_(t)==Pt,this.q_=(t,i)=>this.x_(t,i),this.S_(),this.O_()}dispose(){this.T_.forEach((t=>t())),this.T_.length=0}register(t){const{video:i}=t,{element:n}=i;this.j_(n)&&(this.__.push(i),nt(n,vt,this.V_),nt(n,pt,this.V_),nt(n,_t,this.V_),i.signals().whenSignal(Et).then(this.V_),this.w_())}O_(){const t=this.Ci.getRootNode(),i=()=>this.F_();this.T_.push(nt(t,"webkitfullscreenchange",i),nt(t,"mozfullscreenchange",i),nt(t,"fullscreenchange",i),nt(t,"MSFullscreenChange",i))}isInLandscape(){return(t=this.Ci.win).screen&&"orientation"in t.screen?t.screen.orientation.type.startsWith("landscape"):90==Math.abs(t.orientation);var t}j_(t){if("video"==Q(t).tagName.toLowerCase())return!0;const i=N(this.Ci.win);return!i.isIos()&&!i.isSafari()||function(t){return!!{"amp-dailymotion":!0,"amp-ima-video":!0}[t.tagName.toLowerCase()]}(t)}F_(){this.I_=null}S_(){const{win:t}=this.Ci,{screen:i}=t;if(i&&"orientation"in i){const t=i.orientation;this.T_.push(nt(t,"change",(()=>this.L_())))}this.T_.push(nt(t,"orientationchange",(()=>this.L_())))}L_(){this.isInLandscape()?null!=this.R_&&this.Y_(this.R_):this.I_&&this.U_(this.I_)}Y_(t){const i=N(this.Ci.win);this.I_=t,i.isAndroid()&&i.isChrome()?t.fullscreenEnter():this.z_(t).then((()=>t.fullscreenEnter()))}U_(t){this.I_=null,this.z_(t,"center").then((()=>t.fullscreenExit()))}z_(t,i=null){const{element:n}=t,e=this.N_();return this.D_().then((()=>J(n))).then((({boundingClientRect:t})=>{const{bottom:s,top:o}=t,r=e.getSize().height;if(o>=0&&s<=r)return w();const a=i||(s>r?"bottom":"top");return e.animateScrollIntoView(n,a)}))}N_(){return W(this.Ci)}D_(){return D(this.Ci.win).promise(330)}w_(){if(this.isInLandscape())return Promise.resolve(this.R_);this.R_=null;const t=this.__.filter(this.k_).map((t=>J(t.element)));return Promise.all(t).then((t=>{const i=t.sort(this.q_)[0];return i&&i.intersectionRatio>.5?i.target.getImpl().then((t=>this.R_=t)):this.R_}))}x_(t,i){const{boundingClientRect:n,intersectionRatio:e}=t,{boundingClientRect:s,intersectionRatio:o}=i,r=e-o;if(Math.abs(r)>.1)return r;const a=W(this.Ci),l=Vt(a,n),h=Vt(a,s);return l<h||l>h?l-h:n.top-s.top}C_(t){return this.E_.getPlayingState(t)}}(this.ampdoc,this))),this.Ee.delay(this.P_,1e3)}dispose(){if(this.M_().dispose(),this.g_.disconnect(),this.g_=null,this.__)for(let t=0;t<this.__.length;t++)this.__[t].dispose()}b_(){for(let t=0;t<this.__.length;t++){const i=this.__[t];i.getPlayingState()!==bt&&(Ct(i,"video-seconds-played"),this.W_(i))}this.Ee.delay(this.P_,1e3)}W_(t){const i="timeUpdate",n=t.video.getCurrentTime(),e=t.video.getDuration();if(l(n)&&l(e)&&e>0){const s=n/e,o=it(this.ampdoc.win,`${Rt}.${i}`,{"time":n,"percent":s});this.A_.trigger(t.video.element,i,o,1)}}register(t){T(t);const n=t;if(this.B_(t),!t.supportsPlatform())return;if(this.J_(t))return;if(!this.g_){const t=t=>t.forEach((({isIntersecting:t,target:i})=>{this.Z_(i).updateVisibility(t)}));this.g_=B(t,this.ampdoc.win,{threshold:.5})}this.g_.observe(n.element),nt(n.element,"reloaded",(()=>e.videoLoaded())),this.__=this.__||[];const e=new class{constructor(t,i){this.E_=t,this.Ci=t.ampdoc,this.video=i,this.G_=!0,this.H_=!1,this.mf=!1,this.K_=!1,this.es=!1,this.Q_=new ot,this.Q_.onSessionEnd((()=>Ct(this,"video-session"))),this.X_=new ot,this.X_.onSessionEnd((()=>Ct(this,"video-session-visible"))),this.vg=b((()=>new class{constructor(t,i){this.Ee=D(t),this.yg=i,this.T_=null,this.Ag=0,this.Pg=0}start(){const{element:t}=this.yg.video;this.stop(),this.T_=this.T_||[],this.bg()?this.Eg(this.Pg):this.T_.push(function(t,i,n,e){let s=n;const o=tt(t,"loadedmetadata",(t=>{try{s(t)}finally{s=null,o()}}),void 0);return o}(t,0,(()=>{this.bg()&&this.Eg(this.Pg)}))),this.T_.push(nt(t,_t,(()=>{this.bg()&&this.Ig(100)})))}stop(){if(this.T_){for(;this.T_.length>0;)this.T_.pop()();this.Pg++}}bg(){const{video:t}=this.yg,i=t.getDuration();if(!kt(i))return!1;if(wt(i)<250){const i=Math.ceil(5);this.Rg("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",i,"seconds long.",t.element)}return!0}Rg(...t){I().warn.apply(I(),[Rt].concat(t))}Eg(t){if(t!=this.Pg)return;const{yg:i,Ee:n}=this,{video:e}=i,s=()=>this.Eg(t);if(i.getPlayingState()==bt)return void n.delay(s,500);const o=e.getDuration();if(!kt(o))return void n.delay(s,500);const r=(c=wt(o),h(!0),Math.min(Math.max(c,250),4e3)),a=e.getCurrentTime()/o*100,u=5*Math.floor(a/5);var c;T(l(u)),this.Ig(u),n.delay(s,r)}Ig(t){t<=0||this.Ag!=t&&(this.Ag=t,this.Tg(t))}Tg(t){Ct(this.yg,"video-percentage-played",{"normalizedPercentage":t.toString()})}}(this.Ci.win,this))),this.Vg=!1,this.kg=!1,this.Cg=null,this.Z=!1,this.qg=!1,this.hasAutoplay=i.element.hasAttribute("autoplay"),this.hasAutoplay&&this.E_.installAutoplayStyles(),this.xg=dt,this.Sg=()=>{X(this.video,!1)},this.Og=()=>{this.video.pause()},nt(i.element,mt,(()=>this.videoLoaded())),nt(i.element,vt,(()=>this.$g())),nt(i.element,"play",(()=>{this.qg=!0,Ct(this,Mt)})),nt(i.element,pt,(()=>this.jg())),nt(i.element,"muted",(()=>this.Z=!0)),nt(i.element,gt,(()=>{this.Z=!1,this.E_.pauseOtherVideos(this)})),nt(i.element,"amp:video:tick",(t=>{const i=et(t),n=i.eventType;n&&this.Fg(n,i.vars)})),nt(i.element,_t,(()=>{this.K_=!1,Ct(this,"video-ended")})),nt(i.element,yt,(()=>{this.K_=!0,Ct(this,"video-ad-start")})),nt(i.element,At,(()=>{this.K_=!1,Ct(this,"video-ad-end")})),i.signals().whenSignal(ft).then((()=>this.Lg())),this.Yg=b((()=>{const t="firstPlay",i=it(this.Ci.win,t,{}),{element:n}=this.video;z(n).trigger(n,t,i,1)})),this.Ug()}dispose(){this.vg().stop()}Fg(t,i){const n={"__amp:eventType":t};Object.keys(i).forEach((t=>{n[`custom_${t}`]=i[t]})),Ct(this,"video-hosted-custom",n)}Ug(){this.video.signals().whenSignal("playback-delegated").then((()=>{this.G_=!1,this.mf&&this.video.pause()}))}isMuted(){return this.Z}isPlaybackManaged(){return this.G_}Lg(){this.zg()&&this.E_.registerForAutoFullscreen(this),this.hasAutoplay&&this.Ng()}zg(){const{element:t}=this.video;return!(this.video.preimplementsAutoFullscreen()||!t.hasAttribute("rotate-to-fullscreen"))&&V(this.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",t)}jg(){this.mf=!0,this.getPlayingState()==Pt&&(this.Yg(),this.E_.pauseOtherVideos(this));const{video:t}=this,{element:n}=t;t.preimplementsMediaSessionAPI()||n.classList.contains("i-amphtml-disable-mediasession")||(function(t,n){const e=(t=>x(t,"url"))(t);if(n&&n.artwork){const{artwork:t}=n;T(i(t)),t.forEach((t=>{if(t){const n=(i=t,"[object Object]"===r.call(i)?t.src:t);V(e.isProtocolValid(n))}var i}))}}(n,this.xg),function(t,i,n,e){const{navigator:s}=t;"mediaSession"in s&&t.MediaMetadata&&(s.mediaSession.metadata=new t.MediaMetadata(dt),s.mediaSession.metadata=new t.MediaMetadata(i),s.mediaSession.setActionHandler("play",n),s.mediaSession.setActionHandler("pause",e))}(this.Ci.win,this.xg,this.Sg,this.Og)),this.Q_.beginSession(),this.es&&this.X_.beginSession(),this.qg||Ct(this,Mt)}$g(){Ct(this,"video-pause"),this.mf=!1,this.kg?this.kg=!1:this.Q_.endSession()}videoLoaded(){this.H_=!0,this.Cg=Q(this.video.element),this.Dg(),this.vg().start(),this.es&&this.Wg()}Dg(){if(this.video.preimplementsMediaSessionAPI())return;this.video.getMetadata()&&(this.xg=a(this.video.getMetadata()));const t=this.Ci.win.document;if(!this.xg.artwork||0==this.xg.artwork.length){const i=function(t){const i=t.querySelector('script[type="application/ld+json"]');if(!i)return;const n=function(t,i){try{return function(t){return JSON.parse(t)}(t)}catch(t){return null==i||i(t),null}}(i.textContent);return n&&n.image?"string"==typeof n.image?n.image:n.image["@list"]&&"string"==typeof n.image["@list"][0]?n.image["@list"][0]:"string"==typeof n.image.url?n.image.url:"string"==typeof n.image[0]?n.image[0]:void 0:void 0}(t)||function(t){const i=t.querySelector('meta[property="og:image"]');return i?i.getAttribute("content"):void 0}(t)||function(t){const i=t.querySelector('link[rel="shortcut icon"]')||t.querySelector('link[rel="icon"]');return i?i.getAttribute("href"):void 0}(t);i&&(this.xg.artwork=[{"src":i}])}if(!this.xg.title){const i=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.Cg.getAttribute("title")||this.Cg.getAttribute("aria-label")||t.title;i&&(this.xg.title=i)}}Bg(){this.H_&&this.Wg()}Wg(){this.Ci.isVisible()&&K(this.Ci.win).then((t=>{this.hasAutoplay&&!this.userInteracted()&&t?this.Jg():this.Zg()}))}Ng(){this.video.isInteractive()&&this.video.hideControls(),K(this.Ci.win).then((t=>{t||!this.video.isInteractive()?(this.video.mute(),this.Gg()):this.video.showControls()}))}Gg(){const{video:t}=this,{element:i,win:n}=this.video;if(i.hasAttribute("noaudio")||i.signals().get(Et))return;const e=function(t,i){const n=rt(i)(ht),e=n.firstElementChild;for(let t=0;t<4;t++){const i=e.cloneNode(!0),s=i.children;for(let i=0;i<s.length;i++)s[i].classList.add(`amp-video-eq-${t+1}-${i+1}`);n.appendChild(i)}return d(e),n}(0,i),s=[e];function o(i){t.mutateElementSkipRemeasure((()=>{s.forEach((t=>{!function(t,i){void 0===i&&(i=t.hasAttribute("hidden")),i?t.removeAttribute("hidden"):t.setAttribute("hidden","")}(t,i)}))}))}function r(i){t.mutateElementSkipRemeasure((()=>e.classList.toggle("amp-video-eq-play",i)))}const a=[nt(i,vt,(()=>r(!1))),nt(i,pt,(()=>r(!0))),nt(i,yt,(()=>{o(!1),t.showControls()})),nt(i,At,(()=>{o(!0),t.hideControls()})),nt(i,gt,(()=>It(t)))];if(t.isInteractive()){t.hideControls();const n=function(t,i){const n=rt(t)(lt);return i&&i.title&&n.setAttribute("aria-label",i.title),n}(i,this.xg);s.push(n),a.push(nt(n,"click",(()=>It(t))))}t.mutateElementSkipRemeasure((()=>{s.forEach((t=>{i.appendChild(t)}))})),this.K_&&o(!1),t.signals().whenSignal(Et).then((()=>{this.Yg(),t.isInteractive()&&t.showControls(),t.unmute(),a.forEach((t=>{t()})),t.mutateElementSkipRemeasure((()=>{s.forEach((t=>{d(t)}))}))}))}Jg(){this.G_&&(this.es?(this.X_.beginSession(),X(this.video,!0),this.Vg=!0):(this.mf&&this.X_.endSession(),this.video.pause(),this.kg=!0))}Zg(){this.es?this.X_.beginSession():this.mf&&this.X_.endSession()}updateVisibility(t){const i=this.es;this.es=t,t!=i&&this.Bg()}getPlayingState(){return this.mf?this.mf&&this.Vg&&!this.userInteracted()?"playing_auto":Pt:bt}isRollingAd(){return this.K_}userInteracted(){return null!=this.video.signals().get(Et)}getAnalyticsDetails(){const{video:t}=this;return Promise.all([K(this.Ci.win),J(t.element)]).then((i=>{const n=i[0],e=i[1],{height:s,width:o}=e.boundingClientRect,r=this.hasAutoplay&&n,a=t.getPlayedRanges(),l=a.reduce(((t,i)=>t+i[1]-i[0]),0);return{"autoplay":r,"currentTime":t.getCurrentTime(),"duration":t.getDuration(),"height":s,"id":t.element.id,"muted":this.Z,"playedTotal":l,"playedRangesJson":JSON.stringify(a),"state":this.getPlayingState(),"width":o}}))}}(this,t);this.__.push(e);const{element:s}=e.video;f(s,ft),function(t){t.classList.add("i-amphtml-media-component")}(s),t.signals().signal(ft),s.classList.add("i-amphtml-video-interface")}B_(t){n("play",(()=>X(t,!1))),n("pause",(()=>t.pause())),n("mute",(()=>t.mute())),n("unmute",(()=>t.unmute()));const i=()=>t.fullscreenEnter();function n(i,n){t.registerAction(i,(()=>{It(t),n()}),1)}n("fullscreenenter",i),n("fullscreen",i)}J_(t){if(Tt(this.y_,t))return this.y_;for(let i=0;this.__&&i<this.__.length;i++){const n=this.__[i];if(Tt(n,t))return this.y_=n,n}return null}Z_(t){return T(this.J_(t))}registerForAutoFullscreen(t){this.M_().register(t)}Hg(){return this.M_()}getVideoStateProperty(t,i){const n=this.ampdoc.getRootNode(),e=I().assertElement(n.getElementById(t),`Could not find an element with id="${t}" for VIDEO_STATE`),s=this.Z_(e);return(s?s.getAnalyticsDetails():w()).then((t=>t?t[i]:""))}getPlayingState(t){return this.Z_(t).getPlayingState()}isMuted(t){return this.Z_(t).isMuted()}userInteracted(t){return this.Z_(t).userInteracted()}isRollingAd(t){return this.Z_(t).isRollingAd()}pauseOtherVideos(t){this.__.forEach((i=>{i.isPlaybackManaged()&&i!==t&&i.getPlayingState()==Pt&&i.video.pause()}))}})}(t,"video-manager")}new Set(["c","v","a","ad"]);var xt="amp-gfycat",St=class extends t.BaseElement{constructor(t){super(t),this.Kg="",this.Mv=null,this.Qg=null,this.Xg=null}preconnectCallback(t){const i=C(this.win,"preconnect"),n=this.getAmpDoc();i.url(n,"https://gfycat.com",t),i.url(n,"https://giant.gfycat.com",t),i.url(n,"https://thumbs.gfycat.com",t)}isLayoutSupported(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)}buildCallback(){var t;this.Kg=this.tA(),this.element.hasAttribute("noautoplay")||this.element.setAttribute("autoplay",""),qt(this.element),(t=this.element,q(t,"video-manager")).register(this)}createPlaceholderCallback(){const t=this.win.document.createElement("img"),i=this.Kg;return m(t),function(t,i,e,o){for(var r,a=s(n(["alt","aria-label"]),!0);!(r=a()).done;){const t=r.value,n=i.getAttribute(t);null!==n&&e.setAttribute(t,n)}}(0,this.element,t),t.setAttribute("loading","lazy"),t.setAttribute("placeholder",""),t.setAttribute("referrerpolicy","origin"),this.element.hasAttribute("aria-label")?t.setAttribute("alt","Loading gif "+this.element.getAttribute("aria-label")):this.element.hasAttribute("alt")?t.setAttribute("alt","Loading gif "+this.element.getAttribute("alt")):t.setAttribute("alt","Loading gif"),t.setAttribute("src","https://thumbs.gfycat.com/"+encodeURIComponent(i)+"-poster.jpg"),t}tA(){return V(this.element.getAttribute("data-gfyid"),"The data-gfyid attribute is required for <amp-gfycat> %s",this.element)}iA(){if(this.Qg)return this.Qg;const t=this.Kg;let i="https://gfycat.com/ifr/"+encodeURIComponent(t);const e=function(t,i,n){const{dataset:e}=t,s={},o=/^param(.+)/;for(const t in e){const i=t.match(o);i&&(s[i[1][0].toLowerCase()+i[1].substr(1)]=e[t])}return s}(this.element);return this.element.hasAttribute("noautoplay")&&(e.autoplay="0"),i=function(t,i){return function(t,i,n){if(!i)return t;const e=t.split("#",2),s=e[0].split("?",2);let o=s[0]+(s[1]?`?${s[1]}&${i}`:`?${i}`);return o+=e[1]?`#${e[1]}`:"",o}(t,function(t){const i=[];for(const o in t){let r=t[o];if(null!=r){r=n(r);for(let t=0;t<r.length;t++)i.push((e=o,s=r[t],`${encodeURIComponent(e)}=${encodeURIComponent(s)}`))}}var e,s;return i.join("&")}(i))}(i,e),this.Qg=i}layoutCallback(){const t=this.element.ownerDocument.createElement("iframe"),i=this.iA();return t.setAttribute("frameborder","0"),t.src=i,m(t),this.Mv=t,this.Xg=nt(this.win,"message",this.nA.bind(this)),this.element.appendChild(t),this.loadPromise(this.Mv).then((()=>{f(this.element,mt)}))}unlayoutCallback(){return this.Mv&&(d(this.Mv),this.Mv=null),this.Xg&&this.Xg(),!0}rb(t,i){if(this.Mv&&this.Mv.contentWindow){const i=t;this.Mv.contentWindow.postMessage(i,"*")}}nA(t){const i=et(t);"https://gfycat.com"===t.origin&&t.source==this.Mv.contentWindow&&"string"==typeof i&&("paused"==i?f(this.element,vt):"playing"==i&&f(this.element,pt))}pauseCallback(){this.pause()}supportsPlatform(){return!0}isInteractive(){return!1}play(t){this.rb("play")}pause(){this.rb("pause")}mute(){}unmute(){}showControls(){}hideControls(){}fullscreenEnter(){}fullscreenExit(){}isFullscreen(){return!1}getMetadata(){}preimplementsMediaSessionAPI(){return!1}preimplementsAutoFullscreen(){return!1}getCurrentTime(){return 0}getDuration(){return 1}getPlayedRanges(){return[]}seekTo(t){this.user().error(xt,"`seekTo` not supported.")}};t.registerElement(xt,St)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-gfycat-0.1.mjs.map