;
!function(){function n(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function t(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}Array.isArray;var e,r=Object.prototype;function i(n){var t=!1,e=null,r=n;return function(){if(!t){for(var n=arguments.length,i=new Array(n),u=0;u<n;u++)i[u]=arguments[u];e=r.apply(self,i),t=!0,r=null}return e}}function u(n,t){try{return function(n){return JSON.parse(n)}(n)}catch(n){return null==t||t(n),null}}r.hasOwnProperty,r.toString;var o=self.AMP_CONFIG||{},c=("string"==typeof o.thirdPartyFrameRegex?new RegExp(o.thirdPartyFrameRegex):o.thirdPartyFrameRegex,("string"==typeof o.cdnProxyRegex?new RegExp(o.cdnProxyRegex):o.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function s(n){if(!self.document||!self.document.head)return null;if(self.location&&c.test(self.location.origin))return null;var t=self.document.head.querySelector('meta[name="'.concat(n,'"]'));return t&&t.getAttribute("content")||null}function a(n,t,r,i){return function(n,t,r,i){var u=n,o=r,c=function(n){try{return o(n)}catch(n){var t,e;throw null===(t=(e=self).__AMP_REPORT_ERROR)||void 0===t||t.call(e,n),n}},s=function(){if(void 0!==e)return e;e=!1;try{var n={get capture(){return e=!0,!1}};self.addEventListener("test-options",null,n),self.removeEventListener("test-options",null,n)}catch(n){}return e}(),a=!(null==i||!i.capture);return u.addEventListener(t,c,s?i:a),function(){null==u||u.removeEventListener(t,c,s?i:a),o=null,u=null,c=null}}(n,t,r,i)}o.thirdPartyUrl,o.thirdPartyFrameHost,o.cdnUrl||s("runtime-host"),o.errorReportingUrl,o.betaErrorReportingUrl,o.localDev,o.geoApiUrl||s("amp-geo-api"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null},self.__AMP_LOG;var f="<amp-video-iframe>",l="https://go.amp.dev/c/amp-video-iframe",h="__AMP__VIDEO_IFRAME__";function p(n){if(!n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];throw new Error("[".concat(f,"] ").concat(e.join(" ")," ").concat(l))}return n}var d=["pause","play","mute","unmute","fullscreenenter","fullscreenexit","showcontrols","hidecontrols"],v=function(){function e(n){var t=this;this.T=!0,this.F=0,this.V={},this.t=n,this.D={},this.N=i((function(){!function(n,e){a(n,"message",(function(n){var e=u(n.data);e&&function(n){t.Z(n)}(e)}))}(t.t)})),this.$=!1,this.B=!1,this.G=i((function(){return u(t.t.name)}))}var r=e.prototype;return r.getMetadata=function(){return this.G()},r.method=function(n,t){p(d.indexOf(n)>-1,"Invalid method ".concat(n,"."));var e="play"==n||"pause"==n?this.K(t):t;this.D[n]=e,this.N()},r.Z=function(n){var t,e=n.id;"number"==typeof(t=e)&&isFinite(t)&&this.V[e]?this.R(e,n.args):"method"==n.event&&this.L(n.method)},r.R=function(n,t){(0,this.V[n])(t),delete this.V[n]},r.L=function(n){n in this.D&&this.D[n]()},r.listenTo=function(n,t,e){var r=this;p(!this.B,"`listenTo` is meant to be used once per page.");var i={"jwplayer":function(){p(!e,"listenTo('jwplayer', opt_instance) does not take an initializer."),r.U(r.W(t))},"videojs":function(){r.X(p(t,"listenTo('videojs', element) expects a second argument"),e)}};p(i[n.toLowerCase()],"Invalid listener type [".concat(n,"]."),"Valid types are [".concat(Object.keys(i).join(", "),"]"))(),this.B=!0},r.W=function(n){return n?(p(n.on,"listenTo('jwplayer', myjwplayer) takes a jwplayer instance as ","second argument"),n):p(this.t.jwplayer,"listenTo('jwplayer') expects a global jwplayer() in window.")()},r.U=function(n){var t=arguments,e=this;["error","setupError"].forEach((function(r){n.on(r,(function(){p.apply(null,[!1].concat(t)),e.postEvent("error")}))})),["adSkipped","adComplete","adError"].forEach((function(t){n.on(t,(function(){return e.postEvent("ad_end")}))})),n.on("adStarted",(function(){return e.postEvent("ad_start")}));var r={"play":"playing","ready":"canplay","pause":"pause"};Object.keys(r).forEach((function(t){n.on(t,(function(){return e.postEvent(r[t])}))})),n.on("volume",(function(n){return e.Y(n.volume)})),this.method("play",(function(){return n.play()})),this.method("pause",(function(){return n.pause()})),this.method("mute",(function(){return n.setMute(!0)})),this.method("unmute",(function(){return n.setMute(!1)})),this.method("showcontrols",(function(){return n.setControls(!0)})),this.method("hidecontrols",(function(){return n.setControls(!1)})),this.method("fullscreenenter",(function(){return n.setFullscreen(!0)})),this.method("fullscreenexit",(function(){return n.setFullscreen(!1)}))},r.X=function(n,t){var e=this,r=function(n,t){return p(t||n.videojs,"Video.JS not imported or initializer undefined.")}(this.t,t),i=r(n);i.ready((function(){var t="canplay";["playing","pause","ended"].forEach((function(n){i.on(n,(function(){return e.postEvent(n)}))})),i.readyState()>=3?e.postEvent(t):i.on(t,(function(){return e.postEvent(t)})),a(n,"volumechange",(function(){return e.Y(i.volume())})),e.method("play",(function(){return i.play()})),e.method("pause",(function(){return i.pause()})),e.method("mute",(function(){return i.muted(!0)})),e.method("unmute",(function(){return i.muted(!1)})),e.method("showcontrols",(function(){return i.controls(!0)})),e.method("hidecontrols",(function(){return i.controls(!1)})),e.method("fullscreenenter",(function(){return i.requestFullscreen()})),e.method("fullscreenexit",(function(){return i.exitFullscreen()}))}))},r.Y=function(n){if(n<.01)return this.$=!0,void this.postEvent("muted");this.$&&(this.$=!1,this.postEvent("unmuted"))},r.K=function(n){return function(){try{t=function(){return n()},new Promise((function(n){n(t())}))}catch(n){}var t}},r.postEvent=function(n){this.nn({"event":n})},r.postAnalyticsEvent=function(n,t){this.nn({"event":"analytics","analytics":{"eventType":n,"vars":t}})},r.nn=function(e,r){var i=this.F++,u=function(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?t(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}({id:i},e);return this.t.parent&&this.t.parent.postMessage(u,"*"),r&&(this.V[i]=r),i},r.getIntersection=function(n){this.tn("getIntersection",n)},r.getConsentData=function(n){this.tn("getConsentData",n)},r.tn=function(n,t){return this.N(),this.nn({"method":n},t)},e}();!function(n){p(!n[h],"video-iframe-integration-v0.js should only be included once."),n[h]=!0,n.__AMP_REPORT_ERROR=console.error.bind(console);var t=new v(n),e=n.AmpVideoIframe=n.AmpVideoIframe||[];e.push=function(n){return n(t)},e.forEach(e.push)}(self)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
//# sourceMappingURL=video-iframe-integration-v0.js.map