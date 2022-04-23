;
(self.AMP=self.AMP||[]).push({m:0,v:"2203281422000",n:"amp-date-countdown",ev:"0.1",l:!0,f:function(t,n){!function(){var n;function e(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t,n){return(i=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,n){if(n&&("object"===s(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return e(t)}Array.isArray;var o=Object.prototype,f=(o.hasOwnProperty,o.toString,1),a=self.AMP_CONFIG||{},h=("string"==typeof a.thirdPartyFrameRegex?new RegExp(a.thirdPartyFrameRegex):a.thirdPartyFrameRegex,("string"==typeof a.cdnProxyRegex?new RegExp(a.cdnProxyRegex):a.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function c(t){if(!self.document||!self.document.head)return null;if(self.location&&h.test(self.location.origin))return null;var n=self.document.head.querySelector('meta[name="'.concat(t,'"]'));return n&&n.getAttribute("content")||null}a.thirdPartyUrl,a.thirdPartyFrameHost,a.cdnUrl||c("runtime-host"),a.errorReportingUrl,a.betaErrorReportingUrl,a.localDev,a.geoApiUrl||c("amp-geo-api"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var l=self.__AMP_LOG;function d(t){return l.user||(l.user=m()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(l.user.win,t)?l.userForEmbed||(l.userForEmbed=m()):l.user}function m(t){return function(t,n){throw new Error("failed to call initLogConstructor")}()}function p(t,n,e,i,r,s,u,o,f,a,h){return t}function v(t){return t.nodeType?(e=t,n=(e.ownerDocument||e).defaultView,function(t,n){return b(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),"ampdoc")}(n)).getAmpDoc(t):t;var n,e}function y(t){var n=v(t);return n.isSingleDoc()?n.win:n}function b(t,n){p(g(t,n));var e=function(t){var n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}(t)[n];return e.obj||(p(e.ctor),p(e.context),e.obj=new e.ctor(e.context),p(e.obj),e.context=null,e.resolve&&e.resolve(e.obj)),e.obj}function g(t,n){var e=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!e||!e.ctor)}var w="amp-date-countdown",S=864e5,j=36e5,M=6e4,D={"de":["Jahren","Monaten","Tagen","Stunden","Minuten","Sekunden"],"en":["Years","Months","Days","Hours","Minutes","Seconds"],"es":["años","meses","días","horas","minutos","segundos"],"fr":["ans","mois","jours","heures","minutes","secondes"],"id":["tahun","bulan","hari","jam","menit","detik"],"it":["anni","mesi","giorni","ore","minuti","secondi"],"ja":["年","ヶ月","日","時間","分","秒"],"ko":["년","달","일","시간","분","초"],"nl":["jaar","maanden","dagen","uur","minuten","seconden"],"pt":["anos","meses","dias","horas","minutos","segundos"],"ru":["год","месяц","день","час","минута","секунда"],"th":["ปี","เดือน","วัน","ชั่วโมง","นาที","วินาที"],"tr":["yıl","ay","gün","saat","dakika","saniye"],"vi":["năm","tháng","ngày","giờ","phút","giây"],"zh-cn":["年","月","天","小时","分钟","秒"],"zh-tw":["年","月","天","小時","分鐘","秒"]},O=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&i(t,n)}(h,t);var s,o,a=(s=h,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=r(s);if(o){var e=r(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return u(this,t)});function h(t){var n;return(n=a.call(this,t)).Dy=null,n.Yy=n.qy.bind(e(n)),n.By="",n.Jy=0,n.Zy=0,n.Ky=0,n.Qy=0,n.Vy="",n.Wy="",n.Xy="",n.Yb=null,n.qb=null,n.Bb=!1,n}var c=h.prototype;return c.buildCallback=function(){var t=this;this.Dy=function(t,n){return b(y(v(t)),"templates")}(this.element),this.By=this.element.getAttribute("end-date"),this.Jy=Number(this.element.getAttribute("timeleft-ms")),this.Zy=Number(this.element.getAttribute("timestamp-ms")),this.Ky=Number(this.element.getAttribute("timestamp-seconds")),this.Qy=Number(this.element.getAttribute("offset-seconds"))||0,this.Vy=(this.element.getAttribute("locale")||"en").toLowerCase(),this.Wy=(this.element.getAttribute("when-ended")||"stop").toLowerCase(),this.Xy=(this.element.getAttribute("biggest-unit")||"DAYS").toUpperCase(),this.Yb=this.Hb(this.Vy),this.Bb=this.element.hasAttribute("data-count-up"),this.getAmpDoc().whenFirstVisible().then((function(){var n=t.Ub()+1e3*t.Qy;t.Jb(new Date(n)-new Date)}))},c.renderOutsideViewport=function(){return!0},c.layoutCallback=function(){var t=this,e=1e3,i=this.Ub()+this.Qy*e,r=new Date(i)-new Date-e;return this.qb=this.win.setInterval((function(){t.Jb(r),r-=e}),e),n||(n=Promise.resolve(void 0))},c.unlayoutCallback=function(){return this.win.clearInterval(this.qb),!0},c.isLayoutSupported=function(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)},c.Jb=function(t){var n,e,i,r={},s=this.Zb(t,this.Bb)||{};"stop"===this.Wy&&t<1e3&&((n=this.element,e="action",g(i=y(v(n)),e)?b(i,e):null).trigger(this.element,"timeout",null,f),this.win.clearInterval(this.qb)),r.data=Object.assign(s,this.Yb),this.Dy.findAndRenderTemplate(this.element,r.data).then(this.Yy)},c.Ub=function(){var t,n;return this.By?t=Date.parse(this.By):this.Jy?t=Number(new Date)+this.Jy:this.Zy?t=this.Zy:this.Ky&&(t=1e3*this.Ky),n=!isNaN(t),"One of end-date, timeleft-ms, timestamp-ms, timestamp-seconds is required",d().assert(n,"One of end-date, timeleft-ms, timestamp-ms, timestamp-seconds is required",undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined),t},c.Hb=function(t){if(D[t]){var n=D[t];return{"years":n[0],"months":n[1],"days":n[2],"hours":n[3],"minutes":n[4],"seconds":n[5]}}return d().error(w,"Invalid locale %s, return empty locale word",t),{}},c.Zb=function(t,n){var e={DAYS:1,HOURS:2,MINUTES:3,SECONDS:4};n&&(t*=-1);var i=e[this.Xy]==e.DAYS?this.$b(Math.floor(t/S)):0,r=e[this.Xy]==e.HOURS?this.$b(Math.floor(t/j)):e[this.Xy]<e.HOURS?this.$b(Math.floor(t%S/j)):0,s=e[this.Xy]==e.MINUTES?this.$b(Math.floor(t/M)):e[this.Xy]<e.MINUTES?this.$b(Math.floor(t%j/M)):0,u=e[this.Xy]==e.SECONDS?this.$b(Math.floor(t/1e3)):this.$b(Math.floor(t%M/1e3));return{d:i,dd:this.Kb(i),h:r,hh:this.Kb(r),m:s,mm:this.Kb(s),s:u,ss:this.Kb(u)}},c.Kb=function(t){return t<-9||t>9?String(t):t>=-9&&t<0?"-0"+Math.abs(t):"0"+t},c.$b=function(t){return t<0?t+1:t},c.qy=function(t){var n=this;return this.mutateElement((function(){var e=n.Dy.findTemplate(n.element),i=n.element.contains(e);!function(t){for(;t.firstChild;)t.removeChild(t.firstChild)}(n.element),i&&n.element.appendChild(e),n.element.appendChild(t)}))},h}(t.BaseElement);t.registerElement(w,O)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-date-countdown-0.1.js.map