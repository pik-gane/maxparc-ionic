;
(self.AMP=self.AMP||[]).push({m:1,v:"2203281422000",n:"amp-pan-zoom",ev:"0.1",l:!0,f:function(t,s){(()=>{function s(t,s){(null==s||s>t.length)&&(s=t.length);for(var i=0,h=new Array(s);i<s;i++)h[i]=t[i];return h}function i(t,i){var h="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(h)return(h=h.call(t)).next.bind(h);if(Array.isArray(t)||(h=function(t,i){if(t){if("string"==typeof t)return s(t,i);var h=Object.prototype.toString.call(t).slice(8,-1);return"Object"===h&&t.constructor&&(h=t.constructor.name),"Map"===h||"Set"===h?Array.from(t):"Arguments"===h||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h)?s(t,i):void 0}}(t))||i&&t&&"number"==typeof t.length){h&&(t=h);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var h;function n(){return h||(h=Promise.resolve(void 0))}var e=class{constructor(){this.promise=new Promise(((t,s)=>{this.resolve=t,this.reject=s}))}},{isArray:r}=Array;function o(t){return"string"==typeof t}var{hasOwnProperty:u,toString:c}=Object.prototype;function a(t,s,i,h,n,e,r,o,u,c,a){return t}function l(t,s,i,h){return n=>f.solveYValueFromXValue(n,0,0,t,s,i,h,1,1)}var f=class{static solveYValueFromXValue(t,s,i,h,n,e,r,o,u){return f.yr(f.Ir(t,s,h,e,o),i,n,r,u)}static Ir(t,s,i,h,n){const e=1e-6;let r=(t-s)/(n-s);if(r<=0)return 0;if(r>=1)return 1;let o=0,u=1,c=0;for(let a=0;a<8;a++){c=f.Mr(r,s,i,h,n);const a=(f.Mr(r+e,s,i,h,n)-c)/e;if(Math.abs(c-t)<e)return r;if(Math.abs(a)<e)break;c<t?o=r:u=r,r-=(c-t)/a}for(let a=0;Math.abs(c-t)>e&&a<8;a++)c<t?(o=r,r=(r+u)/2):(u=r,r=(r+o)/2),c=f.Mr(r,s,i,h,n);return r}static Mr(t,s,i,h,n){if(0==t)return s;if(1==t)return n;let e=f.Rr(s,i,t),r=f.Rr(i,h,t);const o=f.Rr(h,n,t);return e=f.Rr(e,r,t),r=f.Rr(r,o,t),f.Rr(e,r,t)}static yr(t,s,i,h,n){if(0==t)return s;if(1==t)return n;let e=f.Rr(s,i,t),r=f.Rr(i,h,t);const o=f.Rr(h,n,t);return e=f.Rr(e,r,t),r=f.Rr(r,o,t),f.Rr(e,r,t)}static Rr(t,s,i){return t+i*(s-t)}},_={LINEAR:t=>t,EASE:t=>f.solveYValueFromXValue(t,0,0,.25,.1,.25,1,1,1),EASE_IN:t=>f.solveYValueFromXValue(t,0,0,.42,0,1,1,1,1),EASE_OUT:t=>f.solveYValueFromXValue(t,0,0,0,0,.58,1,1,1),EASE_IN_OUT:t=>f.solveYValueFromXValue(t,0,0,.42,0,.58,1,1,1)},P={"linear":_.LINEAR,"ease":_.EASE,"ease-in":_.EASE_IN,"ease-out":_.EASE_OUT,"ease-in-out":_.EASE_IN_OUT};function A(t){if(!t)return null;if(o(t)){if(-1!=(t=t).indexOf("cubic-bezier")){const s=t.match(/cubic-bezier\((.+)\)/);if(s){const t=s[1].split(",").map(parseFloat);if(4==t.length){for(let s=0;s<4;s++)if(isNaN(t[s]))return null;return l(t[0],t[1],t[2],t[3])}}return null}return P[t]}return t}function p(t){return(t.ownerDocument||t).defaultView}var M,d={bubbles:!0,cancelable:!0};function m(t,s,i,h){return{left:t,top:s,width:i,height:h,bottom:s+h,right:t+i,x:t,y:s}}function E(t){const s=Object.getOwnPropertyDescriptor(t,"message");if(null!=s&&s.writable)return t;const{message:i,stack:h}=t,n=new Error(i);for(const s in t)n[s]=t[s];return n.stack=h,n}function v(t){let s=null,h="";for(var n,e=i(arguments,!0);!(n=e()).done;){const t=n.value;t instanceof Error&&!s?s=E(t):(h&&(h+=" "),h+=t)}return s?h&&(s.message=h+": "+s.message):s=new Error(h),s}function T(t){var s,i;null===(s=(i=self).__AMP_REPORT_ERROR)||void 0===s||s.call(i,t)}function g(t,...s){try{return t.apply(null,s)}catch(t){!function(t){const s=v.apply(null,arguments);setTimeout((()=>{throw T(s),s}))}(t)}}var R=["Webkit","webkit","Moz","moz","ms","O","o"],I={"getPropertyPriority":()=>"","getPropertyValue":()=>""};function V(t,s,i,h,n){const e=function(t,s,i){if(s.startsWith("--"))return s;M||(M=Object.create(null));let h=M[s];if(!h||i){if(h=s,void 0===t[s]){const i=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(s),n=function(t,s){for(let i=0;i<R.length;i++){const h=R[i]+s;if(void 0!==t[h])return h}return""}(t,i);void 0!==t[n]&&(h=n)}i||(M[s]=h)}return h}(t.style,s,n);if(!e)return;const r=h?i+h:i;t.style.setProperty(function(t){const s=t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()));return R.some((t=>s.startsWith(t+"-")))?`-${s}`:s}(e),r)}function b(t,s){for(const i in s)V(t,i,s[i])}function w(t){return`${t}px`}function y(t,s){return"number"==typeof t?s(t):t}function x(t,s){return null==s?`translate(${y(t,w)})`:`translate(${y(t,w)}, ${y(s,w)})`}var z,S=/vertical/,k=new WeakMap,C=new WeakMap,D=new WeakMap;function X(t){let s=k.get(t);return s||(s=new t.ResizeObserver(Y),k.set(t,s)),s}function Y(t){const s=new Set;for(let i=t.length-1;i>=0;i--){const h=t[i],{target:n}=h;if(s.has(n))continue;s.add(n);const e=C.get(n);if(e){D.set(n,h);for(let t=0;t<e.length;t++){const{callback:s,type:i}=e[t];O(i,s,h)}}}}function O(t,s,i){if(0==t){const{contentRect:t}=i,{height:h,width:n}=t;g(s,{width:n,height:h})}else if(1==t){const{borderBoxSize:t}=i;let h;if(t)h=t.length>0?t[0]:{inlineSize:0,blockSize:0};else{const{target:t}=i,s=p(t),n=S.test(function(t,s){return t.getComputedStyle(s)||I}(s,t).writingMode),{offsetHeight:e,offsetWidth:r}=t;let o,u;n?(u=r,o=e):(o=r,u=e),h={inlineSize:o,blockSize:u}}g(s,h)}}function N(t){return function(t,s){a(1===s.length),t.innerHTML=s[0];const i=t.firstElementChild;return a(i),a(!i.nextElementSibling),t.removeChild(i),i}(z,t)}function j(t,s){return i=>t+(s-t)*i}function Z(t,s,i,h){return a(s<=i),function(t,s,i){return a(s<=i),Math.min(Math.max(t,s),i)}(t,s-h,i+h)}function $(t,s){return Math.sqrt(t*t+s*s)}var G=self.AMP_CONFIG||{},B=("string"==typeof G.thirdPartyFrameRegex?new RegExp(G.thirdPartyFrameRegex):G.thirdPartyFrameRegex,("string"==typeof G.cdnProxyRegex?new RegExp(G.cdnProxyRegex):G.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function H(t){if(!self.document||!self.document.head)return null;if(self.location&&B.test(self.location.origin))return null;const s=self.document.head.querySelector(`meta[name="${t}"]`);return s&&s.getAttribute("content")||null}G.thirdPartyUrl,G.thirdPartyFrameHost,G.cdnUrl||H("runtime-host"),G.errorReportingUrl,G.betaErrorReportingUrl,G.localDev,G.geoApiUrl||H("amp-geo-api"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var L=self.__AMP_LOG;function U(t,s){throw new Error("failed to call initLogConstructor")}function W(t){return U()}function F(){return L.dev||(L.dev=U())}function q(t,s,i,h,n,e,r,o,u,c,a){return t}function J(t,s,i,h,n,e,r,o,u,c,a){return(L.user||(L.user=W()),void L.user.win?L.userForEmbed||(L.userForEmbed=W()):L.user).assert(t,s,i,h,n,e,r,o,u,c,a)}function K(t,s){return st(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),s)}function Q(t){return t.nodeType?(s=p(t),K(s,"ampdoc")).getAmpDoc(t):t;var s}function tt(t){const s=Q(t);return s.isSingleDoc()?s.win:s}function st(t,s){q(it(t,s));const i=function(t){let s=t.__AMP_SERVICES;return s||(s=t.__AMP_SERVICES={}),s}(t)[s];return i.obj||(q(i.ctor),q(i.context),i.obj=new i.ctor(i.context),q(i.obj),i.context=null,i.resolve&&i.resolve(i.obj)),i.obj}function it(t,s){const i=t.__AMP_SERVICES&&t.__AMP_SERVICES[s];return!(!i||!i.ctor)}var ht,nt,et=t=>function(t,s){const i=tt(Q(t));return it(i,s)?st(i,s):null}(t,"action"),rt=t=>function(t,s){return st(tt(Q(t)),s)}(t,"owners"),ot=t=>K(t,"vsync"),ut="Animation",ct=function(){},at=class{static animate(t,s,i,h){return new at(t).setCurve(h).add(0,s,1).start(i)}constructor(t,s){this.wr=t,this.br=s||ot(self),this.Vr=null,this.Sr=[]}setCurve(t){return t&&(this.Vr=A(t)),this}add(t,s,i,h){return this.Sr.push({delay:t,func:s,duration:i,curve:A(h)}),this}start(t){return new lt(this.br,this.wr,this.Sr,this.Vr,t)}},lt=class{constructor(t,s,i,h,n){this.br=t,this.wr=s,this.Sr=[];for(let t=0;t<i.length;t++){const s=i[t];this.Sr.push({delay:s.delay,func:s.func,duration:s.duration,curve:s.curve||h,started:!1,completed:!1})}this.Or=n,this.hr=Date.now(),this.Re=!0,this.mi={};const r=new e;this.Cr=r.promise,this.Xs=r.resolve,this.kr=r.reject,this.Nr=this.br.createAnimTask(this.wr,{mutate:this.Dr.bind(this)}),this.br.canAnimate(this.wr)?this.Nr(this.mi):this.Lr(!1,0)}then(t,s){return t||s?this.Cr.then(t,s):this.Cr}thenAlways(t){const s=t||ct;return this.then(s,s)}halt(t){this.Lr(!1,t||0)}Lr(t,s){if(this.Re){if(this.Re=!1,0!=s){this.Sr.length>1&&this.Sr.sort(((t,s)=>t.delay+t.duration-(s.delay+s.duration)));try{if(s>0)for(let t=0;t<this.Sr.length;t++)this.Sr[t].func(1,!0);else for(let t=this.Sr.length-1;t>=0;t--)this.Sr[t].func(0,!1)}catch(s){F().error(ut,"completion failed: "+s,s),t=!1}}t?this.Xs():this.kr()}}Dr(t){if(!this.Re)return;const s=Date.now(),i=Math.min((s-this.hr)/this.Or,1);for(let t=0;t<this.Sr.length;t++){const s=this.Sr[t];!s.started&&i>=s.delay&&(s.started=!0)}for(let t=0;t<this.Sr.length;t++){const s=this.Sr[t];s.started&&!s.completed&&this.Ur(s,i)}1==i?this.Lr(!0,0):this.br.canAnimate(this.wr)?this.Nr(this.mi):this.Lr(!1,0)}Ur(t,s){let i,h;if(t.duration>0){if(i=Math.min((s-t.delay)/t.duration,1),h=i,t.curve&&1!=h)try{h=t.curve(i)}catch(t){return F().error(ut,"step curve failed: "+t,t),void this.Lr(!1,0)}}else i=1,h=1;1==i&&(t.completed=!0);try{t.func(h,t.completed)}catch(t){return F().error(ut,"step mutate failed: "+t,t),void this.Lr(!1,0)}}};function ft(t,s,i,h){const n={detail:i};return Object.assign(n,h),new t.CustomEvent(s,n)}function _t(t,s,i,h){return function(t,s,i,h){let n=t,e=i,r=t=>{try{return e(t)}catch(t){var s,i;throw null===(s=(i=self).__AMP_REPORT_ERROR)||void 0===s||s.call(i,t),t}};const o=function(){if(void 0!==ht)return ht;ht=!1;try{const t={get capture(){return ht=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return ht}(),u=!(null==h||!h.capture);return n.addEventListener(s,r,o?h:u),()=>{null==n||n.removeEventListener(s,r,o?h:u),e=null,n=null,r=null}}(t,s,i,h)}var Pt=class{constructor(){this.Tt=null}add(t){return this.Tt||(this.Tt=[]),this.Tt.push(t),()=>{this.remove(t)}}remove(t){this.Tt&&function(t,s){const i=t.indexOf(s);-1!=i&&t.splice(i,1)}(this.Tt,t)}removeAll(){this.Tt&&(this.Tt.length=0)}fire(t){if(this.Tt)for(var s,h=i(this.Tt.slice(),!0);!(s=h()).done;)(0,s.value)(t)}getHandlerCount(){var t,s;return null!==(t=null===(s=this.Tt)||void 0===s?void 0:s.length)&&void 0!==t?t:0}},At="__AMP_Gestures",pt=class{static get(t,s=!1,i=!1){let h=t[At];return h||(h=new pt(t,s,i),t[At]=h),h}constructor(t,s,i){this.yf=t,this.EI=[],this.h_=[],this.ui=[],this.TI=[],this.RI=null,this.VI=s,this.xI=i,this.kI=!1,this.be=new class{constructor(t,s,i){this.Ee=st(t,"timer"),this.Te=s,this.ye=i||0,this.Ie=-1,this.Me=0,this.Re=!1,this.we=()=>{this.be()}}isPending(){return-1!=this.Ie}schedule(t){let s=t||this.ye;this.Re&&s<10&&(s=10);const i=Date.now()+s;return(!this.isPending()||i-this.Me<-10)&&(this.cancel(),this.Me=i,this.Ie=this.Ee.delay(this.we,s),!0)}be(){this.Ie=-1,this.Me=0,this.Re=!0,this.Te(),this.Re=!1}cancel(){this.isPending()&&(this.Ee.cancel(this.Ie),this.Ie=-1)}}(p(t),this.Ip.bind(this)),this.SI=new Pt,this.DI=Object.create(null),this.CI=this.py.bind(this),this.zI=this.yy.bind(this),this.GI=this.my.bind(this),this.jI=this.d_.bind(this);const h=function(t){if(void 0!==nt)return nt;nt=!1;try{const s={get passive(){return nt=!0,!1}};t.addEventListener("test-options",null,s),t.removeEventListener("test-options",null,s)}catch(t){}return nt}(t.ownerDocument.defaultView);this.yf.addEventListener("touchstart",this.CI,!!h&&{passive:!0}),this.yf.addEventListener("touchend",this.zI),this.yf.addEventListener("touchmove",this.GI,!!h&&{passive:!0}),this.yf.addEventListener("touchcancel",this.jI),this.OI=!1}cleanup(){this.yf.removeEventListener("touchstart",this.CI),this.yf.removeEventListener("touchend",this.zI),this.yf.removeEventListener("touchmove",this.GI),this.yf.removeEventListener("touchcancel",this.jI),delete this.yf[At],this.be.cancel()}onGesture(t,s){const i=new t(this),h=i.getType();let n=this.DI[h];return n||(this.EI.push(i),n=new Pt,this.DI[h]=n),n.add(s)}removeGesture(t){const s=new t(this).getType(),i=this.DI[s];if(i){i.removeAll();const t=function(t,i){for(let i=0;i<t.length;i++)if(t[i].getType()==s)return i;return-1}(this.EI);return!(t<0||(this.EI.splice(t,1),this.ui.splice(t,1),this.TI.splice(t,1),this.h_.splice(t,1),delete this.DI[s],0))}return!1}onPointerDown(t){return this.SI.add(t)}py(t){const s=Date.now();this.kI=!1,this.SI.fire(t);for(let i=0;i<this.EI.length;i++)this.ui[i]||(this.TI[i]&&this.TI[i]<s&&this.f_(i),this.EI[i].onTouchStart(t)&&this.p_(i));this.XI(t)}my(t){const s=Date.now();for(let i=0;i<this.EI.length;i++)this.h_[i]&&(this.TI[i]&&this.TI[i]<s?this.f_(i):this.EI[i].onTouchMove(t)||this.f_(i));this.XI(t)}yy(t){const s=Date.now();for(let i=0;i<this.EI.length;i++){if(!this.h_[i])continue;if(this.TI[i]&&this.TI[i]<s){this.f_(i);continue}this.EI[i].onTouchEnd(t);const h=!this.TI[i],n=this.TI[i]<s;this.RI==this.EI[i]||!h&&!n||this.f_(i)}this.XI(t)}d_(t){for(let t=0;t<this.EI.length;t++)this.$I(t);this.XI(t)}ny(t,s){if(this.RI)return void t.acceptCancel();const i=Date.now();for(let h=0;h<this.EI.length;h++)this.EI[h]==t&&(this.ui[h]=i+s,this.TI[h]=0);this.OI=!0}HI(t,s){if(this.RI)return void t.acceptCancel();const i=Date.now();for(let h=0;h<this.EI.length;h++)this.EI[h]==t&&(this.TI[h]=i+s)}LI(t){this.RI==t&&(this.RI=null,this.kI=!0)}UI(t,s,i){q(this.RI==t);const h=this.DI[t.getType()];h&&h.fire(new class{constructor(t,s,i,h){this.type=t,this.data=s,this.time=i,this.event=h}}(t.getType(),s,Date.now(),i))}XI(t){let s=!!this.RI||this.kI;if(this.kI=!1,!s){const t=Date.now();for(let i=0;i<this.EI.length;i++)if(this.ui[i]||this.TI[i]&&this.TI[i]>=t){s=!0;break}}s?(t.stopPropagation(),this.VI||t.preventDefault()):this.xI&&t.stopPropagation(),this.OI&&(this.OI=!1,this.Ip())}Ip(){const t=Date.now();let s=-1;for(let i=0;i<this.EI.length;i++)this.ui[i]?(-1==s||this.ui[i]>this.ui[s])&&(s=i):this.TI[i]&&this.TI[i]<t&&this.f_(i);if(-1==s)return;let i=0;for(let s=0;s<this.EI.length;s++)!this.ui[s]&&this.h_[s]&&(i=Math.max(i,this.TI[s]-t));i<2?this.YI(s):this.be.schedule(i)}YI(t){const s=this.EI[t];for(let s=0;s<this.EI.length;s++)s!=t&&this.$I(s);this.ui[t]=0,this.TI[t]=0,this.RI=s,s.acceptStart()}p_(t){this.h_[t]=!0,this.TI[t]=0}f_(t){this.h_[t]=!1,this.TI[t]=0,this.ui[t]||this.EI[t].acceptCancel()}$I(t){this.ui[t]=0,this.f_(t)}},Mt=class{constructor(t,s){this.TT=t,this.E_=s}getType(){return this.TT}signalReady(t){this.E_.ny(this,t)}signalPending(t){this.E_.HI(this,t)}signalEnd(){this.E_.LI(this)}signalEmit(t,s){this.E_.UI(this,t,s)}acceptStart(){}acceptCancel(){}onTouchStart(t){return!1}onTouchMove(t){return!1}onTouchEnd(t){}},dt=function(){},mt=.02,Et=Math.round(-16.67/Math.log(.95));function vt(t,s,i){s<1&&(s=1);const h=t/s,n=.5+Math.min(s/33.34,.5);return h*n+i*(1-n)}var Tt=class extends Mt{constructor(t){super("tap",t),this.MV=0,this.bV=0,this.wV=0,this.EV=0,this.o=null}onTouchStart(t){const{touches:s}=t;return this.o=t.target,!(!s||1!=s.length||(this.MV=s[0].clientX,this.bV=s[0].clientY,0))}onTouchMove(t){const s=t.changedTouches||t.touches;if(s&&1==s.length){this.wV=s[0].clientX,this.EV=s[0].clientY;const t=Math.abs(this.wV-this.MV)>=8,i=Math.abs(this.EV-this.bV)>=8;if(t||i)return!1}return!0}onTouchEnd(t){this.signalReady(0)}acceptStart(){this.signalEmit({clientX:this.wV,clientY:this.EV,target:this.o},null),this.signalEnd()}},gt=class extends Mt{constructor(t){super("doubletap",t),this.MV=0,this.bV=0,this.wV=0,this.EV=0,this.tz=0,this.sz=null}onTouchStart(t){if(this.tz>1)return!1;const{touches:s}=t;return!(!s||1!=s.length||(this.MV=s[0].clientX,this.bV=s[0].clientY,this.wV=s[0].clientX,this.EV=s[0].clientY,0))}onTouchMove(t){const{touches:s}=t;if(s&&1==s.length){this.wV=s[0].clientX,this.EV=s[0].clientY;const t=Math.abs(this.wV-this.MV)>=8,i=Math.abs(this.EV-this.bV)>=8;return!t&&!i||(this.acceptCancel(),!1)}return!1}onTouchEnd(t){this.tz++,this.tz<2?this.signalPending(200):(this.sz=t,this.signalReady(0))}acceptStart(){this.tz=0,this.signalEmit({clientX:this.wV,clientY:this.EV},this.sz),this.signalEnd()}acceptCancel(){this.tz=0}},Rt=class extends Mt{constructor(t,s,i,h){super(t,s),this.AV=i,this.PV=h,this.RI=!1,this.MV=0,this.bV=0,this.wV=0,this.EV=0,this.TV=0,this.IV=0,this.hr=0,this.RV=0,this.VV=0,this.yV=0,this.xV=0}onTouchStart(t){const{touches:s}=t;return!!(this.RI&&s&&s.length>1)||!(!s||1!=s.length)&&(this.hr=Date.now(),this.MV=s[0].clientX,this.bV=s[0].clientY,!0)}onTouchMove(t){const{touches:s}=t;if(s&&s.length>=1){const{clientX:i,clientY:h}=s[0];if(this.wV=i,this.EV=h,this.RI)this.kV(!1,!1,t);else{const t=Math.abs(i-this.MV),s=Math.abs(h-this.bV);if(this.AV&&this.PV)(t>=8||s>=8)&&this.signalReady(-10);else if(this.AV){if(t>=8&&t>s)this.signalReady(-10);else if(s>=8)return!1}else{if(!this.PV)return!1;if(s>=8&&s>t)this.signalReady(-10);else if(t>=8)return!1}}return!0}return!1}onTouchEnd(t){const{touches:s}=t;s&&0==s.length&&this.SV(t)}acceptStart(){this.RI=!0,this.TV=this.MV,this.IV=this.bV,this.VV=this.hr,this.MV=this.wV,this.bV=this.EV,this.kV(!0,!1,null)}acceptCancel(){this.RI=!1}kV(t,s,i){this.RV=Date.now();const h=this.RV-this.VV;if(!s&&h>4||s&&h>16){const t=vt(this.wV-this.TV,h,this.yV),i=vt(this.EV-this.IV,h,this.xV);(!s||h>32||0!=t||0!=i)&&(this.yV=Math.abs(t)>1e-4?t:0,this.xV=Math.abs(i)>1e-4?i:0),this.TV=this.wV,this.IV=this.EV,this.VV=this.RV}this.signalEmit({first:t,last:s,time:this.RV,deltaX:this.wV-this.MV,deltaY:this.EV-this.bV,startX:this.MV,startY:this.bV,lastX:this.wV,lastY:this.EV,velocityX:this.yV,velocityY:this.xV},i)}SV(t){this.RI&&(this.RI=!1,this.kV(!1,!0,t),this.signalEnd())}},It=class extends Rt{constructor(t){super("swipe-xy",t,!0,!0)}},Vt=class extends Mt{constructor(t){super("pinch",t),this.RI=!1,this.iz=0,this.hz=0,this.nz=0,this.ez=0,this.rz=0,this.oz=0,this.uz=0,this.cz=0,this.az=0,this.lz=0,this.fz=0,this._z=0,this.hr=0,this.RV=0,this.VV=0,this.yV=0,this.xV=0}onTouchStart(t){const{touches:s}=t;return!!s&&(1==s.length||!!(this.RI&&s.length>2)||2==s.length&&(this.hr=Date.now(),this.iz=s[0].clientX,this.hz=s[0].clientY,this.nz=s[1].clientX,this.ez=s[1].clientY,!0))}onTouchMove(t){const{touches:s}=t;return!(!s||0==s.length||1!=s.length&&(this.rz=s[0].clientX,this.oz=s[0].clientY,this.uz=s[1].clientX,this.cz=s[1].clientY,this.RI?(this.kV(!1,!1,t),0):this.Pz()||(this.Az()&&this.signalReady(0),0)))}Az(){const t=this.rz-this.iz,s=this.oz-this.hz,i=this.uz-this.nz,h=this.cz-this.ez,n=t*i<=0&&s*h<=0,e=Math.abs(t-i)>=4,r=Math.abs(s-h)>=4;return n&&(e||r)}Pz(){const t=this.rz-this.iz,s=this.oz-this.hz,i=this.uz-this.nz,h=this.cz-this.ez,n=t*i>0||s*h>0,e=Math.abs(t+i)>=10,r=Math.abs(s+h)>=10;return n&&(e||r)}onTouchEnd(t){const{touches:s}=t;s&&s.length<2&&this.SV(t)}acceptStart(){this.RI=!0,this.VV=this.hr,this.az=0,this.lz=0,this.fz=.5*(this.iz+this.nz),this._z=.5*(this.hz+this.ez),this.kV(!0,!1,null)}acceptCancel(){this.RI=!1}kV(t,s,i){this.RV=Date.now();const h=this.RV-this.VV,n=this.pz(),e=this.Mz();(!s&&h>4||s&&h>16)&&(this.yV=vt(n-this.az,h,this.yV),this.xV=vt(e-this.lz,h,this.xV),this.yV=Math.abs(this.yV)>1e-4?this.yV:0,this.xV=Math.abs(this.xV)>1e-4?this.xV:0,this.az=n,this.lz=e,this.VV=this.RV);const r=this.dz(this.iz,this.nz,this.hz,this.ez),o=this.dz(this.rz,this.uz,this.oz,this.cz);this.signalEmit({first:t,last:s,time:this.RV,centerClientX:this.fz,centerClientY:this._z,dir:Math.sign(o-r),deltaX:.5*n,deltaY:.5*e,velocityX:.5*this.yV,velocityY:.5*this.xV},i)}SV(t){this.RI&&(this.RI=!1,this.kV(!1,!0,t),this.signalEnd())}dz(t,s,i,h){return(t-s)*(t-s)+(i-h)*(i-h)}pz(){return Math.abs(this.rz-this.iz-(this.uz-this.nz))}Mz(){return Math.abs(this.oz-this.hz-(this.cz-this.ez))}},bt=['<div class="amp-pan-zoom-in-icon amp-pan-zoom-button"></div>'],wt=l(.4,0,.2,1.4),yt="amp-pan-zoom",xt=new Set(["svg","DIV","AMP-IMG","AMP-LAYOUT","AMP-SELECTOR","IMG"]),zt=class extends t.BaseElement{constructor(t){super(t),this.mz=null,this.fc=null,this.Ez=0,this.vz=0,this.Tz=null,this.gz=null,this.Rz=null,this.Iz=1,this.Vz=1,this.bz=1,this.wz=3,this.yz=0,this.xz=0,this.zz=1,this.MV=0,this.bV=0,this.Sz=0,this.kz=0,this.Cz=0,this.Dz=0,this.Xz=0,this.Yz=0,this.cV=null,this.Oz=null,this.Nz=!1,this.jz=null,this.Zz=!1,this.nV=null,this.rV=null,this.oV=null,this.$z=0,this.Gz=0,this.dR=this.dR.bind(this)}buildCallback(){this.fc=et(this.element);const t=function(t,s){const i=[];for(let s=t.firstElementChild;s;s=s.nextElementSibling)!(function(t){let s;var i;return o(t)?s=t:1==(null==(i=t)?void 0:i.nodeType)&&(s=t.tagName),!!s&&s.toLowerCase().startsWith("i-")}(h=s)||h.nodeType===Node.ELEMENT_NODE&&(h.hasAttribute("placeholder")||h.hasAttribute("fallback")||h.hasAttribute("overflow")))&&i.push(s);var h;return i}(this.element);J(1==t.length,"%s should have its target element as its one and only child",yt),J(xt.has(t[0].tagName),"%s is not supported by %s",t[0].tagName,yt),this.element.classList.add("i-amphtml-pan-zoom"),this.mz=t[0],this.mz.classList.add("i-amphtml-pan-zoom-child"),this.wz=this.Bz("max-scale",3),this.zz=this.Bz("initial-scale",1),this.yz=this.Bz("initial-x",0),this.xz=this.Bz("initial-y",0),this.Nz=this.element.hasAttribute("reset-on-resize"),this.Zz=this.element.hasAttribute("disable-double-tap"),this.registerAction("transform",(t=>{const{args:s}=t;if(!s)return;const i=s.scale||1,h=s.x||0,n=s.y||0;return this.transform(h,n,i)}))}transform(t,s,i){this.Lz(i);const h=this.Uz(t,!1),n=this.Wz(s,!1);return this.Fz(i,h,n,!0).then((()=>this.qz()))}layoutCallback(){return this.Jz(),rt(this.element).scheduleLayout(this.element,this.mz),this.Kz().then(this.Qz())}pauseCallback(){this.ZS()}resumeCallback(){this.mz&&rt(this.element).scheduleLayout(this.element,this.mz),this.Qz()}unlayoutCallback(){return this.ZS(),!0}isLayoutSupported(t){return"fixed"==t||"fixed-height"==t||"fill"==t||"responsive"==t}dR(){this.Nz&&this.Kz()}Jz(){this.jz=function(t){const s=t.ownerDocument||t;return z&&z.ownerDocument===s||(z=s.createElement("div")),N}(this.element)(bt),this.jz.addEventListener("click",(()=>{this.jz.classList.contains("amp-pan-zoom-in-icon")?(this.transform(0,0,this.wz),this.BS()):(this.transform(0,0,this.bz),this.qS())})),this.element.appendChild(this.jz)}Bz(t,s){const{element:i}=this;return i.hasAttribute(t)?parseInt(i.getAttribute(t),10):s}JS(t){const s=this.Tz.width/t,i=this.Tz.height*t;let h=Math.min(s,this.Tz.height),n=Math.min(i,this.Tz.width);Math.abs(n-this.Ez)<=16&&Math.abs(h-this.vz)<=16&&(n=this.Ez,h=this.vz),this.gz=m(0,0,Math.round(n),Math.round(h))}KS(t){const{height:s,width:i}=this.Tz,h=i/s,n=Math.max(h/t,t/h);isNaN(n)||(this.wz=Math.max(this.wz,n))}sx(){this.Ez=this.mz.scrollWidth,this.vz=this.mz.scrollHeight;const t=this.Ez/this.vz;this.Tz=this.getViewport().getLayoutRect(this.element),this.JS(t),this.KS(t),this.Vz=this.Iz=this.zz,this.MV=this.Sz=this.yz,this.bV=this.kz=this.xz}Kz(){return this.mutateElement((()=>this.QS())).then((()=>this.measureMutateElement((()=>this.sx()),(()=>this.tC()),this.mz))).then((()=>(this.sC(),this.Lz(this.Iz),this.iC())))}sC(){const t=(s=this.mz.getBoundingClientRect(),m(Number(s.left),Number(s.top),Number(s.width),Number(s.height)));var s;this.gz.top=t.top-this.Tz.top,this.gz.left=t.left-this.Tz.left}tC(){b(this.mz,{width:w(this.gz.width),height:w(this.gz.height)})}QS(){b(this.mz,{width:"",height:""})}hC(t){const{left:s}=this.Tz;return t-(s-this.getViewport().getScrollLeft())}nC(t){const{top:s}=this.Tz;return t-(s-this.getViewport().getScrollTop())}Qz(){this.eC(),this.nV=_t(this.element,"mousedown",(t=>this.so(t))),function(t,s,i){const h=t.ownerDocument.defaultView;if(!h)return;let n=C.get(t);if(n||(n=[],C.set(t,n),X(h).observe(t)),!n.some((t=>t.callback===i&&0===t.type))){n.push({type:0,callback:i});const s=D.get(t);s&&setTimeout((()=>O(0,i,s)))}}(this.element,0,this.dR)}Wv(t){t&&(t(),t=null)}ZS(){this.rC(),this.Wv(this.nV),this.Wv(this.oV),this.Wv(this.rV),function(t,s,i){const h=C.get(t);if(h&&(function(t,s){const h=[];let n=0;for(let s=0;s<t.length;s++){const r=t[s];(e=r).callback===i&&0===e.type?h.push(r):(n<s&&(t[n]=r),n++)}var e;n<t.length&&(t.length=n)}(h),0==h.length)){C.delete(t),D.delete(t);const s=t.ownerDocument.defaultView;s&&X(s).unobserve(t)}}(this.element,0,this.dR)}so(t){if(2==t.button)return;t.preventDefault();const{clientX:s,clientY:i}=t;this.Wv(this.oV),this.Wv(this.rV),this.Gz=s,this.$z=i,this.oV=_t(this.element,"mousemove",(t=>this.fo(t))),this.rV=_t(this.win,"mouseup",(t=>this.jV(t)))}fo(t){t.preventDefault();const{clientX:s,clientY:i}=t,h=s-this.Gz,n=i-this.$z;this.oC(h,n,!1)}jV(t){t.preventDefault(),this.uC(),this.Wv(this.oV),this.Wv(this.rV)}rC(){this.cV&&(this.cV.cleanup(),this.cV=null)}eC(){this.cV||(this.cV=pt.get(this.element),this.cV.onPointerDown((()=>{this.Oz&&this.Oz.halt()})),this.cV.onGesture(Vt,(t=>this.handlePinch(t.data))),this.Zz||(this.cV.onGesture(gt,(t=>this.handleDoubleTap(t.data))),this.cV.onGesture(Tt,(t=>this.cC(t.data)))))}handleDoubleTap(t){const{clientX:s,clientY:i}=t;return this.aC(s,i).then((()=>this.qz()))}handlePinch(t){const{centerClientX:s,centerClientY:i,deltaX:h,deltaY:n,dir:e,last:r}=t;return this.lC(s,i,h,n,e).then((()=>{if(r)return this.qz()}))}handleSwipe(t){const{deltaX:s,deltaY:i,last:h,velocityX:n,velocityY:e}=t;return this.oC(s,i,!1).then((()=>{if(h)return this.fC(n,e)}))}cC(t){const s=ft(this.win,"click",null,{bubbles:!0});t.target.dispatchEvent(s)}_C(){this.Rz=this.cV.onGesture(It,(t=>this.handleSwipe(t.data)))}PC(){this.Rz&&(this.Rz(),this.Rz=null,this.cV.removeGesture(It))}AC(t,s){const i=s?.25:0;return Z(t,this.bz,this.wz,i)}Uz(t,s){const i=.25*this.Tz.width,h=s&&this.Iz>1?i:0;return Z(t,this.Cz,this.Xz,h)}Wz(t,s){const i=.25*this.Tz.height,h=s&&this.Iz>1?i:0;return Z(t,this.Dz,this.Yz,h)}Lz(t){const{height:s,left:i,top:h,width:n}=this.gz,{height:e,width:r}=this.Tz;this.Cz=Math.min(0,r-(i+n*(t+1)/2)),this.Xz=Math.max(0,(n*t-n)/2-i),this.Dz=Math.min(0,e-(h+s*(t+1)/2)),this.Yz=Math.max(0,(s*t-s)/2-h)}iC(){const{mz:t,Sz:s,kz:i,Iz:h}=this;return this.mutateElement((()=>{var n;b(t,{transform:x(s,i)+" "+(n=h,`scale(${n})`)})}),t)}pC(t,s,i){const h=ft(this.win,`${yt}.transformEnd`,{"scale":t,"x":s,"y":i});this.fc.trigger(this.element,"transformEnd",h,3),function(t,s,i,h){a(t.ownerDocument);const n=t.ownerDocument.createEvent("Event");n.data={};const{bubbles:e,cancelable:r}=d;n.initEvent("transformEnd",e,r),t.dispatchEvent(n)}(this.element)}oC(t,s,i){const h=this.Uz(this.MV+t,!0),n=this.Wz(this.bV+s,!0);return this.Fz(this.Iz,h,n,i)}fC(t,s){return this.Oz=function(t,s,i,h,n,r,o){return new class{constructor(t,s,i,h,n,r,o){this.br=o||ot(self),this.wr=t,this.st=r,this.wV=s,this.EV=i,this.MC=h,this.dC=n,this.yV=0,this.xV=0;const u=new e;this.Cr=u.promise,this.Xs=u.resolve,this.kr=u.reject,this.mC=!1}start(){return this.mC=!0,Math.abs(this.MC)<=mt&&Math.abs(this.dC)<=mt?(this.EC(),this.vC(!0)):this.TC(),this}halt(){this.mC&&this.vC(!1)}then(t,s){return t||s?this.Cr.then(t,s):this.Cr}thenAlways(t){const s=t||dt;return this.then(s,s)}TC(){this.yV=this.MC,this.xV=this.dC;const t=this.gC.bind(this),s=this.vC.bind(this,!0);return this.br.runAnimMutateSeries(this.wr,t,5e3).then(s,s)}gC(t,s){if(!this.mC)return!1;if(this.wV+=s*this.yV,this.EV+=s*this.xV,!this.EC())return!1;const i=Math.exp(-t/Et);return this.yV=this.MC*i,this.xV=this.dC*i,Math.abs(this.yV)>mt||Math.abs(this.xV)>mt}vC(t){this.mC&&(this.mC=!1,this.EC(),t?this.Xs():this.kr())}EC(){return this.st(this.wV,this.EV)}}(t,s,i,h,n,r,void 0).start()}(this.mz,this.Sz,this.kz,t,s,((t,s)=>{const i=this.Uz(t,!0),h=this.Wz(s,!0);return!(Math.abs(i-this.Sz)<1&&Math.abs(h-this.kz)<1||(this.Fz(this.Iz,i,h,!1),0))})),this.Oz.thenAlways((()=>(this.Oz=null,this.uC())))}aC(t,s){const i=this.Iz==this.bz?this.wz:this.bz,h=this.Tz.width/2-this.hC(t),n=this.Tz.height/2-this.nC(s);return this.RC(i,h,n,!0)}lC(t,s,i,h,e){if(0==e)return n();const{height:r,width:o}=this.Tz,u=$(i,h),c=this.Vz*(1+e*u/100),a=o/2-this.hC(t),l=r/2-this.nC(s),f=Math.min(u/100,1)*a,_=Math.min(u/100,1)*l;return this.RC(c,f,_,!1)}RC(t,s,i,h){const e=this.AC(t,!0);if(e==this.Iz)return n();this.Lz(e);const r=this.Uz(this.MV+s*e,!1),o=this.Wz(this.bV+i*e,!1);return this.Fz(e,r,o,h)}qS(){this.jz&&(this.jz.classList.add("amp-pan-zoom-in-icon"),this.jz.classList.remove("amp-pan-zoom-out-icon"))}BS(){this.jz&&(this.jz.classList.remove("amp-pan-zoom-in-icon"),this.jz.classList.add("amp-pan-zoom-out-icon"))}qz(){return this.uC().then((()=>{this.Iz<=this.bz?(this.PC(),this.qS(),this.mz.classList.remove("i-amphtml-pan-zoom-scrollable")):(this._C(),this.BS(),this.mz.classList.add("i-amphtml-pan-zoom-scrollable"))}))}Fz(t,s,i,h){const n=t-this.Iz,e=(r=this.Sz,o=this.kz,$(s-r,i-o));var r,o;const u=h?250*Math.min(1,Math.max(.01*e,Math.abs(n))):0;if(u>16&&h){const h=j(this.Iz,t),n=j(this.Sz,s),e=j(this.kz,i);return at.animate(this.mz,(t=>{this.Iz=h(t),this.Sz=n(t),this.kz=e(t),this.iC()}),u,wt).thenAlways((()=>{this.Iz=t,this.Sz=s,this.kz=i,this.iC()}))}return this.Iz=t,this.Sz=s,this.kz=i,this.iC()}uC(){const t=this.AC(this.Iz,!1);t!=this.Iz&&this.Lz(t);const s=this.Uz(this.Sz/this.Iz*t,!1),i=this.Wz(this.kz/this.Iz*t,!1);return this.Fz(t,s,i,!0).then((()=>{this.Vz=this.Iz,this.MV=this.Sz,this.bV=this.kz,this.pC(this.Iz,this.Sz,this.kz)}))}};t.registerElement(yt,zt,'.i-amphtml-pan-zoom{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.i-amphtml-pan-zoom-child{position:absolute}.i-amphtml-pan-zoom-scrollable{cursor:all-scroll}.amp-pan-zoom-button{position:absolute;right:12px;width:36px;height:36px;bottom:12px;background-repeat:no-repeat;background-position:50%;box-shadow:1px 1px 2px;background-color:#fff;border-radius:3px}.amp-pan-zoom-in-icon{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>\')}.amp-pan-zoom-out-icon{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 13H5v-2h14z"/><path d="M0 0h24v24H0z" fill="none"/></svg>\')}\n/*# sourceURL=/extensions/amp-pan-zoom/0.1/amp-pan-zoom.css*/')})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-pan-zoom-0.1.mjs.map