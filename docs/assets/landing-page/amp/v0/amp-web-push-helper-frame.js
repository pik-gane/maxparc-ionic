;
!function(){function n(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function t(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(e)return(e=e.call(t)).next.bind(e);if(Array.isArray(t)||(e=function(t,r){if(t){if("string"==typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(t,r):void 0}}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r=Object.prototype;function e(n){var t=Object.create(null);return n&&Object.assign(t,n),t}r.hasOwnProperty,r.toString;var i=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function o(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";try{return decodeURIComponent(n)}catch(n){return t}}function s(n){var t,r=e();if(!n)return r;for(;t=i.exec(n);){var s=o(t[1],t[1]),u=t[2]?o(t[2].replace(/\+/g," "),t[2]):"";r[s]=u}return r}function u(n){var t=(n||self).location;return s(t.originalHash||t.hash)}function a(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var c=Array.isArray;function f(n,t){for(var r=[],e=0,i=0;i<n.length;i++){var o=n[i];t(o,i,n)?r.push(o):(e<i&&(n[e]=o),e++)}return e<n.length&&(n.length=e),r}function l(n){return"string"==typeof n}function h(n){return 1==(null==n?void 0:n.nodeType)}var v="​​​";function d(n){return h(n)?(n=n).tagName.toLowerCase()+(n.id?"#".concat(n.id):""):n}function p(n){return n.indexOf(v)>=0}function m(n,t){var r,e,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Assertion failed";if(t)return t;n&&-1==i.indexOf(n)&&(i+=n);for(var o=3,s=i.split("%s"),u=s.shift(),a=[u];s.length;){var c=arguments[o++],l=s.shift();u+=d(c)+l,a.push(c,l.trim())}var h=new Error(u);throw h.messageArray=f(a,(function(n){return""!==n})),null===(r=(e=self).__AMP_REPORT_ERROR)||void 0===r||r.call(e,h),h}function g(n,t,r,e,i){return c(i)?n(r,i.concat([t])):n(r,"".concat(i||e,": %s"),t),t}function w(n){var t=Object.getOwnPropertyDescriptor(n,"message");if(null!=t&&t.writable)return n;var r=n.message,e=n.stack,i=new Error(r);for(var o in n)i[o]=n[o];return i.stack=e,i}function y(n){for(var r,e=null,i="",o=t(arguments,!0);!(r=o()).done;){var s=r.value;s instanceof Error&&!e?e=w(s):(i&&(i+=" "),i+=s)}return e?i&&(e.message=i+": "+e.message):e=new Error(i),e}function E(n){var t=y.apply(null,arguments);return t.expected=!0,t}function b(n){var t=!1,r=null,e=n;return function(){if(!t){for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];r=e.apply(self,i),t=!0,e=null}return r}}var R=self.AMP_CONFIG||{},A=("string"==typeof R.thirdPartyFrameRegex?new RegExp(R.thirdPartyFrameRegex):R.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,O=("string"==typeof R.cdnProxyRegex?new RegExp(R.cdnProxyRegex):R.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function S(n){if(!self.document||!self.document.head)return null;if(self.location&&O.test(self.location.origin))return null;var t=self.document.head.querySelector('meta[name="'.concat(n,'"]'));return t&&t.getAttribute("content")||null}var x={thirdParty:R.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:R.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:A,cdn:R.cdnUrl||S("runtime-host")||"https://cdn.ampproject.org",cdnProxyRegex:O,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,errorReporting:R.errorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",betaErrorReporting:R.betaErrorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",localDev:R.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/],geoApi:R.geoApiUrl||S("amp-geo-api")},P="";function C(n){var t=n||self;return t.__AMP_MODE?t.__AMP_MODE:t.__AMP_MODE=function(n){return{localDev:!1,development:j(n,u(n)),esm:!1,test:!1,rtvVersion:I(n)}}(t)}function I(n){var t;return P||(P=(null===(t=n.AMP_CONFIG)||void 0===t?void 0:t.v)||"01".concat("2203281422000")),P}function j(n,t){var r=t||u(n);return["1","actions","amp","amp4ads","amp4email"].includes(r.development)||!!n.AMP_DEV_MODE}var T=function(){},_=function(){return"01".concat("2203281422000")},M=function(n,t){return t.reduce((function(n,t){return"".concat(n,"&s[]=").concat(N(t))}),"https://log.amp.dev/?v=".concat(_(),"&id=").concat(encodeURIComponent(n)))},k=function(){return"".concat(x.cdn,"/rtv/").concat(_(),"/log-messages.simple.json")},N=function(n){return encodeURIComponent(String(d(n)))},U=function(n){return parseInt(u(n).log,10)},L=function(){function n(n,t){var r=this,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";this.win=n,this.tt=t,this.nt=this.rt(),this.it=e,this.et=null,this.ft=b((function(){n.fetch(k()).then((function(n){return n.json()}),T).then((function(n){n&&(r.et=n)}))})),this.ot=this.assert.bind(this)}var t=n.prototype;return t.rt=function(){var n,t=this.win;return null!==(n=t.console)&&void 0!==n&&n.log&&0!=U(t)?this.ut():0},t.ut=function(n){return this.tt(U(n),C().development)},t.st=function(n,t,r){var e,i;if(t>this.nt)return!1;var o=this.win.console,s=null!==(e=(i={},a(i,1,o.error),a(i,3,o.info),a(i,2,o.warn),i)[t])&&void 0!==e?e:o.log,u=this.ct(r),c="[".concat(n,"]");return l(u[0])?u[0]=c+" "+u[0]:u.unshift(c),s.apply(o,u),!0},t.fine=function(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];this.st(n,4,r)},t.info=function(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];this.st(n,3,r)},t.warn=function(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];this.st(n,2,r)},t.error=function(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];if(!this.st(n,1,r)){var i,o,s=this.createError.apply(this,r);s.name=n||s.name,null===(i=(o=self).__AMP_REPORT_ERROR)||void 0===i||i.call(o,s)}},t.expectedError=function(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];var i,o;this.st(n,1,r)||null===(i=(o=self).__AMP_REPORT_ERROR)||void 0===i||i.call(o,this.createExpectedError.apply(this,r))},t.createError=function(n){return this.ht(y.apply(null,arguments))},t.createExpectedError=function(n){return this.ht(E.apply(null,arguments))},t.ht=function(n){return n=w(n),this.it?n.message?-1==n.message.indexOf(this.it)&&(n.message+=this.it):n.message=this.it:p(n.message)&&(n.message=n.message.replace(v,"")),n},t.ct=function(n){return c(n[0])?this.lt(n[0]):n},t.lt=function(n){var t,r=n.shift();return C(this.win).development&&this.ft(),null!==(t=this.et)&&void 0!==t&&t[r]?[this.et[r]].concat(n):["More info at ".concat(M(r,n))]},t.assert=function(n,t,r){return c(t)?this.assert.apply(this,[n].concat(this.lt(t))):m.apply(null,[this.it].concat(Array.prototype.slice.call(arguments)))},t.assertElement=function(n,t){return function(n,t,r){return g(n,t,h(t),"Element expected",r)}(this.ot,n,t)},t.assertString=function(n,t){return function(n,t,r){return g(n,t,l(t),"String expected",r)}(this.ot,n,t)},t.assertNumber=function(n,t){return function(n,t,r){return g(n,t,"number"==typeof t,"Number expected",r)}(this.ot,n,t)},t.assertArray=function(n,t){return function(n,t,r){return g(n,t,c(t),"Array expected",r)}(this.ot,n,t)},t.assertBoolean=function(n,t){return function(n,t,r){return g(n,t,!!t===t,"Boolean expected",r)}(this.ot,n,t)},n}();self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var W=self.__AMP_LOG,D=null;function F(n,t){if(!D)throw new Error("failed to call initLogConstructor");return new D(self,n,t)}function $(n){return W.user||(W.user=z(v)),function(n,t){return t&&t.ownerDocument.defaultView!=n}(W.user.win,n)?W.userForEmbed||(W.userForEmbed=z("​​​​")):W.user}function z(n){return F((function(n,t){return t||n>=1?4:2}),n)}function H(){return W.dev||(W.dev=F((function(n){return n>=3?4:n>=2?3:0})))}function V(n,t,r,e,i,o,s,u,a,c,f){return n}var G="amp-web-push";function K(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function q(n){return n.data}var J,Z,B=function(){function n(n){this.St=n,this.It=0,this.Ct=0,this.Ot=e()}var t=n.prototype;return t.has=function(n){return!!this.Ot[n]},t.get=function(n){var t=this.Ot[n];if(t)return t.access=++this.Ct,t.payload},t.put=function(n,t){this.has(n)||this.It++,this.Ot[n]={payload:t,access:this.Ct},this.Rt()},t.Rt=function(){if(!(this.It<=this.St)){var n,t=this.Ot,r=this.Ct+1;for(var e in t){var i=t[e].access;i<r&&(r=i,n=e)}void 0!==n&&(delete t[n],this.It--)}},n}();function Q(n,t){return J||(J=self.document.createElement("a"),Z=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new B(100))),function(n,t,r){if(r&&r.has(t))return r.get(t);n.href=t,n.protocol||(n.href=n.href);var e,i={href:n.href,protocol:n.protocol,host:n.host,hostname:n.hostname,port:"0"==n.port?"":n.port,pathname:n.pathname,search:n.search,hash:n.hash,origin:null};"/"!==i.pathname[0]&&(i.pathname="/"+i.pathname),("http:"==i.protocol&&80==i.port||"https:"==i.protocol&&443==i.port)&&(i.port="",i.host=i.hostname),e=n.origin&&"null"!=n.origin?n.origin:"data:"!=i.protocol&&i.host?i.protocol+"//"+i.host:i.href,i.origin=e;var o=i;return r&&r.put(t,o),o}(J,n,t?null:Z)}new Set(["c","v","a","ad"]);var X,Y=function(){function n(n){n||(n={debug:!1,windowContext:window}),this.et={},this._r={},this.Nr=n.debug,this.Wr=!1,this.Dr=!1,this.Fr=!1,this.$r=null,this.zr=null,this.Hr=null,this.Vr=null,this.Gr=null,this.Kr=n.windowContext||window}var t,r,e=n.prototype;return e.listen=function(t){var r=this;return new Promise((function(n,e){r.Fr?e(new Error("Already connected.")):r.Wr?e(new Error("Already listening for connections.")):Array.isArray(t)?(r.Hr=r.qr.bind(r,t,n,e),r.Kr.addEventListener("message",r.Hr),r.Nr&&H().fine(G,"Listening for a connection message...")):e(new Error("allowedOrigins should be a string array of allowed origins to accept messages from. Got:",t))})).then((function(){r.send(n.Topics.CONNECT_HANDSHAKE,null),r.Fr=!0}))},e.Jr=function(n,t){for(var r=Q(n).origin,e=0;e<t.length;e++)if(Q(t[e]).origin===r)return!0;return!1},e.qr=function(t,r,e,i){var o=q(i),s=i.origin,u=i.ports;this.Nr&&H().fine(G,"Window message for listen() connection received:",o),this.Jr(s,t)?o&&o.topic===n.Topics.CONNECT_HANDSHAKE?(H().fine(G,"Received expected connection handshake message:",o),this.Kr.removeEventListener("message",this.Hr),this.zr=u[0],this.Gr=this.Zr.bind(this),this.zr.addEventListener("message",this.Gr,!1),this.zr.start(),r()):H().fine(G,"Discarding connection message because it did not contain our expected handshake:",o):H().fine(G,"Discarding connection message from ".concat(s," ")+"because it isn't an allowed origin:",o," (allowed  origins are)",t)},e.connect=function(t,r){var e=this;return new Promise((function(i,o){t||o(new Error("Provide a valid Window context to connect to.")),r||o(new Error("Provide an expected origin for the remote Window or provide the wildcard *.")),e.Fr?o(new Error("Already connected.")):e.Dr?o(new Error("Already connecting.")):(e.$r=new MessageChannel,e.zr=e.$r.port1,e.Vr=e.Br.bind(e,e.zr,r,i),e.zr.addEventListener("message",e.Vr),e.zr.start(),t.postMessage({topic:n.Topics.CONNECT_HANDSHAKE},"*"===r?"*":Q(r).origin,[e.$r.port2]),H().fine(G,"Opening channel to ".concat(r,"...")))}))},e.Br=function(n,t,r){this.Fr=!0,this.Nr&&H().fine(G,"Messenger channel to ".concat(t," established.")),n.removeEventListener("message",this.Vr),this.Gr=this.Zr.bind(this),n.addEventListener("message",this.Gr,!1),r()},e.Zr=function(n){var t=q(n);if(this.et[t.id]&&t.isReply){var r=this.et[t.id];delete this.et[t.id];var e=r.promiseResolver;r.message=t.data,this.Nr&&H().fine(G,"Received reply for topic '%s': %s",t.topic,t.data),e([t.data,this.Qr.bind(this,t.id,r.topic)])}else{var i=this._r[t.topic];if(!i)return;this.Nr&&H().fine(G,"Received new message for "+"topic '".concat(t.topic,"': ").concat(t.data));for(var o=0;o<i.length;o++)(0,i[o])(t.data,this.Qr.bind(this,t.id,t.topic))}},e.on=function(n,t){this._r[n]?this._r[n].push(t):this._r[n]=[t]},e.off=function(n,t){if(t){var r=this._r[n].indexOf(t);-1!==r&&this._r[n].splice(r,1)}else this._r[n]&&delete this._r[n]},e.Qr=function(n,t,r){var e=this,i={id:n,topic:t,data:r,isReply:!0};return this.zr.postMessage(i),new Promise((function(n){e.et[i.id]={message:r,topic:t,promiseResolver:n}}))},e.send=function(n,t){var r=this,e={id:crypto.getRandomValues(new Uint8Array(10)).join(""),topic:n,data:t};return this.Nr&&H().fine(G,"Sending %s: %s",n,t),this.zr.postMessage(e),new Promise((function(i){r.et[e.id]={message:t,topic:n,promiseResolver:i}}))},t=n,(r=[{key:"Topics",get:function(){return{CONNECT_HANDSHAKE:"topic-connect-handshake",NOTIFICATION_PERMISSION_STATE:"topic-notification-permission-state",SERVICE_WORKER_STATE:"topic-service-worker-state",SERVICE_WORKER_REGISTRATION:"topic-service-worker-registration",SERVICE_WORKER_QUERY:"topic-service-worker-query",STORAGE_GET:"topic-storage-get"}}}])&&K(t,r),n}();function nn(n,t){return rn(n=function(n){return n.__AMP_TOP||(n.__AMP_TOP=n)}(n),t)}function tn(n){return n.nodeType?(r=n,t=(r.ownerDocument||r).defaultView,nn(t,"ampdoc")).getAmpDoc(n):n;var t,r}function rn(n,t){V(function(n,t){var r=n.__AMP_SERVICES&&n.__AMP_SERVICES[t];return!(!r||!r.ctor)}(n,t));var r=function(n){var t=n.__AMP_SERVICES;return t||(t=n.__AMP_SERVICES={}),t}(n)[t];return r.obj||(V(r.ctor),V(r.context),r.obj=new r.ctor(r.context),V(r.obj),r.context=null,r.resolve&&r.resolve(r.obj)),r.obj}var en,on=["Webkit","webkit","Moz","moz","ms","O","o"];function sn(n,t,r,i,o){var s=function(n,t,r){if(t.startsWith("--"))return t;en||(en=e());var i=en[t];if(!i||r){if(i=t,void 0===n[t]){var o=function(n){return n.charAt(0).toUpperCase()+n.slice(1)}(t),s=function(n,t){for(var r=0;r<on.length;r++){var e=on[r]+t;if(void 0!==n[e])return e}return""}(n,o);void 0!==n[s]&&(i=s)}r||(en[t]=i)}return i}(n.style,t,o);if(s){var u,a=i?r+i:r;n.style.setProperty((u=s.replace(/[A-Z]/g,(function(n){return"-"+n.toLowerCase()})),on.some((function(n){return u.startsWith(n+"-")}))?"-".concat(u):u),a)}}var un=!1,an=self.__AMP_ERRORS||[];self.__AMP_ERRORS=an;var cn,fn=function(n){return(t=0,r=function(){var n=Math.pow(1.5,t++);return 1e3*(n+function(n,t){var r=n*(t=t||.3)*Math.random();return Math.random()>.5&&(r*=-1),r}(n))},fn=function(n){return setTimeout(n,r())})(n);var t,r};function ln(n,t,r,e,i){var o,s=this;if(!this||!this.document||i&&i.expected||(V((o=this.document).defaultView),un||(un=!0,function(n){!function(n,t){for(var r in t)sn(n,r,t[r])}(n.body,{opacity:1,visibility:"visible","animation":"none"})}(o))),!C().development){var u=!1;try{u=function(n){if(!n.document)return!1;for(var t=n.document.querySelectorAll("script[src]"),r=0;r<t.length;r++)if(e=t[r].src.toLowerCase(),!x.cdnProxyRegex.test(function(n){return"string"==typeof n?Q(n):n}(e).origin))return!0;var e;return!1}(self)}catch(n){}if(!(u&&Math.random()>.01)){var a=function(n,t,r,e,i,o){n=function(n,t){return t&&(n=t.message?t.message:String(t)),n||(n="Unknown error"),n}(n,i);var s=!(!i||!i.expected);if(!/_reported_/.test(n)&&"CANCELLED"!=n){var u=!(self&&self.window),a=Math.random();if(!((function(n){return-1!=n.indexOf("Failed to load:")}(n)||"Script error."==n||u)&&(s=!0,a>.001))){var c=p(n);if(!(c&&a>.1)){var f=Object.create(null);f.v=C().rtvVersion,f.noAmp=o?"1":"0",f.m=n.replace(v,""),f.a=c?"1":"0",f.ex=s?"1":"0",f.dw=u?"1":"0";var l,h,d="1p";if(self.context&&self.context.location?(f["3p"]="1",d="3p"):C().runtime&&(d=C().runtime),f.rt=d,"inabox"===d&&(f.adid=C().a4aId),f.ca=null!==(h=self.AMP_CONFIG)&&void 0!==h&&h.canary?"1":"0",f.bt=(null===(l=self.AMP_CONFIG)||void 0===l?void 0:l.type)||"unknown",self.location.ancestorOrigins&&self.location.ancestorOrigins[0]&&(f.or=self.location.ancestorOrigins[0]),self.viewerState&&(f.vs=self.viewerState),self.parent&&self.parent!=self&&(f.iem="1"),self.AMP&&self.AMP.viewer){var m=self.AMP.viewer.getResolvedViewerUrl(),g=self.AMP.viewer.maybeGetMessagingOrigin();m&&(f.rvu=m),g&&(f.mso=g)}var w,y,E,b=[],R=self.__AMP__EXPERIMENT_TOGGLES||null;for(var A in R){var O=R[A];b.push("".concat(A,"=").concat(O?"1":"0"))}return f.exps=b.join(","),i?(f.el=(null===(w=i.associatedElement)||void 0===w?void 0:w.tagName)||"u",i.args&&(f.args=JSON.stringify(i.args)),c||i.ignoreStack||!i.stack||(f.s=i.stack),i.message&&(i.message+=" _reported_")):(f.f=t||"",f.l=r||"",f.c=e||""),f.r=self.document?self.document.referrer:"",f.ae=an.join(","),f.fr=self.location.originalHash||self.location.hash,"production"===f.bt&&(f.pt="1"),E=n,(y=an).length>=25&&y.splice(0,y.length-25+1),y.push(E),f}}}}(n,t,r,e,i,u);a&&fn((function(){try{return function(n,t){return t.pt&&Math.random()<.9?X||(X=Promise.resolve(void 0)):function(n,t){var r=function(n){return nn(n,"ampdoc")}(n);if(!r.isSingleDoc())return Promise.resolve(!1);var e=r.getSingleDoc();if(!e.getRootNode().documentElement.hasAttribute("report-errors-to-viewer"))return Promise.resolve(!1);var i,o,s,u=(i="viewer",rn((o=tn(e),(s=tn(o)).isSingleDoc()?s.win:s),i));return u.hasCapability("errorReporter")?u.isTrustedViewer().then((function(n){return!!n&&(u.sendMessage("error",{"m":(r=t).m,"a":r.a,"s":r.s,"el":r.el,"ex":r.ex,"v":r.v,"pt":r.pt}),!0);var r})):Promise.resolve(!1)}(n,t).then((function(n){if(!n){var r=new XMLHttpRequest;r.open("POST",Math.random()<.1?x.betaErrorReporting:x.errorReporting,!0),r.send(JSON.stringify(t))}}))}(s,a).catch((function(){}))}catch(n){}}))}}}D=L,H(),$(),cn=function(n,t){try{if(n)if(void 0!==n.message)n=w(n);else{var r=n;(n=new Error(function(n){try{return JSON.stringify(n)}catch(t){return String(n)}}(r))).origError=r}else n=new Error("Unknown error");if(n.reported)return n;if(n.reported=!0,n.messageArray){var e=function(n,t){for(var r=0;r<n.length;r++)if(null==(e=n[r])?void 0:e.tagName)return r;var e;return-1}(n.messageArray);e>-1&&(n.associatedElement=n.messageArray[e])}var i=t||n.associatedElement;if(i&&i.classList&&(i.classList.add("i-amphtml-error"),C().development&&(i.classList.add("i-amphtml-element-error"),i.setAttribute("error-message",n.message))),self.console&&(p(n.message)||!n.expected)){var o=console.error||console.log;n.messageArray?o.apply(console,n.messageArray):i?o.call(console,n.message,i):o.call(console,n.message)}i&&i.dispatchCustomEventForTesting&&i.dispatchCustomEventForTesting("amp:error",n.message),ln.call(self,void 0,void 0,void 0,void 0,n)}catch(n){setTimeout((function(){throw n}))}return n},self.__AMP_REPORT_ERROR=cn;var hn=function(){function n(n){this.Nr=n&&n.debug,this.Kr=n.windowContext||window,this.Xr=new Y({debug:this.Nr,windowContext:this.Kr}),this.Yr={}}var t=n.prototype;return t.ne=function(n,t,r,e){n({success:t,error:t?void 0:r,result:t?e:void 0})},t.te=function(n,t){if(n&&n.isQueryTopicSupported){var r=!1;for(var e in Y.Topics)n.isQueryTopicSupported===Y.Topics[e]&&(r=!0);this.ne(t,!0,null,r)}else this.ne(t,!0,null,Notification.permission)},t.re=function(n,t){var r=null;try{n&&n.key&&this.Kr.localStorage?r=this.Kr.localStorage.getItem(n.key):$().warn(G,"LocalStorage retrieval failed.")}catch(n){}this.ne(t,!0,null,r)},t.ee=function(n,t){var r={isControllingFrame:!!this.Kr.navigator.serviceWorker.controller,url:this.Kr.navigator.serviceWorker.controller?this.Kr.navigator.serviceWorker.controller.scriptURL:null,state:this.Kr.navigator.serviceWorker.controller?this.Kr.navigator.serviceWorker.controller.state:null};this.ne(t,!0,null,r)},t.ie=function(n,t){var r=this;if(!n||!n.workerUrl||!n.registrationOptions)throw new Error("Expected arguments workerUrl and registrationOptions in message, got:",n);this.Kr.navigator.serviceWorker.register(n.workerUrl,n.registrationOptions).then((function(){r.ne(t,!0,null,null)})).catch((function(n){r.ne(t,!0,null,n?n.message||n.toString():null)}))},t.messageServiceWorker=function(n){this.Kr.navigator.serviceWorker.controller.postMessage({command:n.topic,payload:n.payload})},t.oe=function(n,t){var r=this;if(!n||!n.topic)throw new Error("Expected argument topic in message, got:",n);new Promise((function(t){r.Yr[n.topic]=t,r.waitUntilWorkerControlsPage().then((function(){r.messageServiceWorker(n)}))})).then((function(e){return delete r.Yr[n.topic],r.ne(t,!0,null,e)}))},t.se=function(){var n=s(this.Kr.location.search);if(!n.parentOrigin)throw new Error("Expecting parentOrigin URL query parameter.");return n.parentOrigin},t.ue=function(n){var t=n.data,r=t.command,e=t.payload,i=this.Yr[r];"function"==typeof i&&i(e)},t.ae=function(){return this.Kr.navigator.serviceWorker&&this.Kr.navigator.serviceWorker.controller&&"activated"===this.Kr.navigator.serviceWorker.controller.state},t.waitUntilWorkerControlsPage=function(){var n=this;return new Promise((function(t){n.ae()?t():n.Kr.navigator.serviceWorker.addEventListener("controllerchange",(function(){n.ae()?t():n.Kr.navigator.serviceWorker.controller.addEventListener("statechange",(function(){n.ae()&&t()}))}))}))},t.run=function(n){var t=this;this.Xr.on(Y.Topics.NOTIFICATION_PERMISSION_STATE,this.te.bind(this)),this.Xr.on(Y.Topics.SERVICE_WORKER_STATE,this.ee.bind(this)),this.Xr.on(Y.Topics.SERVICE_WORKER_REGISTRATION,this.ie.bind(this)),this.Xr.on(Y.Topics.SERVICE_WORKER_QUERY,this.oe.bind(this)),this.Xr.on(Y.Topics.STORAGE_GET,this.re.bind(this)),this.waitUntilWorkerControlsPage().then((function(){t.Kr.navigator.serviceWorker.addEventListener("message",t.ue.bind(t))})),this.Xr.listen([n||this.se()])},n}();window._ampWebPushHelperFrame=new hn({debug:!1}),window._ampWebPushHelperFrame.run()}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
//# sourceMappingURL=amp-web-push-helper-frame.js.map