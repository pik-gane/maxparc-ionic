;
(self.AMP=self.AMP||[]).push({m:0,v:"2203281422000",n:"amp-date-display",ev:"0.1",l:!0,f:function(t,n){!function(){function n(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function e(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function r(t){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?e(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))}))}return t}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t,n){return(o=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,n){if(n&&("object"===a(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return i(t)}function f(t,n){return n.toUpperCase()}function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function l(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(e)return(e=e.call(t)).next.bind(e);if(Array.isArray(t)||(e=function(t,n){if(t){if("string"==typeof t)return c(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?c(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Array.isArray;var h=Object.prototype;h.hasOwnProperty,h.toString;var m=self.AMP_CONFIG||{},d=("string"==typeof m.thirdPartyFrameRegex?new RegExp(m.thirdPartyFrameRegex):m.thirdPartyFrameRegex,("string"==typeof m.cdnProxyRegex?new RegExp(m.cdnProxyRegex):m.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function v(t){if(!self.document||!self.document.head)return null;if(self.location&&d.test(self.location.origin))return null;var n=self.document.head.querySelector('meta[name="'.concat(t,'"]'));return n&&n.getAttribute("content")||null}m.thirdPartyUrl,m.thirdPartyFrameHost,m.cdnUrl||v("runtime-host"),m.errorReportingUrl,m.betaErrorReportingUrl,m.localDev,m.geoApiUrl||v("amp-geo-api"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var y=self.__AMP_LOG;function b(t){return y.user||(y.user=p()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(y.user.win,t)?y.userForEmbed||(y.userForEmbed=p()):y.user}function p(t){return function(t,n){throw new Error("failed to call initLogConstructor")}()}function w(t,n,e,r,i,o,u,a,s,f,c){return t}function g(t,n,e,r,i,o,u,a,s,f,c){return b().assert(t,n,e,r,i,o,u,a,s,f,c)}function j(t){return t.nodeType?(e=t,n=(e.ownerDocument||e).defaultView,function(t,n){return O(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),"ampdoc")}(n)).getAmpDoc(t):t;var n,e}function O(t,n){w(function(t,n){var e=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!e||!e.ctor)}(t,n));var e=function(t){var n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}(t)[n];return e.obj||(w(e.ctor),w(e.context),e.obj=new e.ctor(e.context),w(e.obj),e.context=null,e.resolve&&e.resolve(e.obj)),e.obj}function N(t,n,e){var r,i,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"long";if(null===(r=Intl)||void 0===r||!r.DateTimeFormat)return"";for(var u,a=new Intl.DateTimeFormat(n,{timeZone:null==e?void 0:e.timeZone,timeZoneName:o}),s=(null===(i=a.formatToParts)||void 0===i?void 0:i.call(a,t))||[],f=l(s,!0);!(u=f()).done;){var c=u.value;if("timeZoneName"===c.type)return c.value}return""}var S="amp-date-display",T={"year":"numeric","month":"short","day":"numeric","hour":"numeric","minute":"numeric"},Z=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&o(t,n)}(c,t);var n,e,a=(n=c,e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=u(n);if(e){var i=u(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return s(this,t)});function c(t){var n;return(n=a.call(this,t)).Yy=n.qy.bind(i(n)),n.yj="",n.Ky=0,n.bj=0,n.pj="",n.Qy=0,n.Vy="",n.wj=null,n.Dy=null,n.Ft=null,n}var l=c.prototype;return l.buildCallback=function(){var t,n,e,r;this.Dy=(t=this.element,n="templates",O((e=j(t),(r=j(e)).isSingleDoc()?r.win:r),n)),this.Ft=this.element.ownerDocument.createElement("div"),this.element.appendChild(w(this.Ft)),this.yj=this.element.getAttribute("datetime")||"",this.Ky=Number(this.element.getAttribute("timestamp-seconds")),this.bj=Number(this.element.getAttribute("timestamp-ms")),this.pj=this.element.getAttribute("display-in")||"",this.Qy=Number(this.element.getAttribute("offset-seconds"))||0,this.Vy=this.element.getAttribute("locale")||"en",this.wj=this.gj(this.element,"data-options-");var i=this.jj();this.Dy.findAndRenderTemplate(this.element,i).then(this.Yy)},l.isLayoutSupported=function(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)},l.jj=function(){var t=new(0,this.win.Date)(this.Ub()+1e3*this.Qy),n="utc"===this.pj.toLowerCase()?this.Oj(t,this.Vy,this.wj):this.Nj(t,this.Vy,this.wj);return this.Sj(n)},l.Ub=function(){var t,n=this.win.Date;return"now"===this.yj.toLowerCase()?t=n.now():this.yj?(t=n.parse(this.yj),g(!isNaN(t),"Invalid date: %s",this.yj)):this.bj?t=this.bj:this.Ky&&(t=1e3*this.Ky),g(void 0!==t,"One of datetime, timestamp-ms, or timestamp-seconds is required"),t},l.Tj=function(t,n){return null!==t&&void 0!==n&&t.startsWith(n)&&t!==n},l.gj=function(t,n){for(var e,r={},i=!1,o=t.attributes,u=0;u<o.length;u++){var a=o[u];this.Tj(a.name,n)&&(r[(e=a.name.slice(n.length),e.replace(/-([a-z])/g,f))]=a.value,i=!0)}if(i)return r},l.Zj=function(t,n,e){try{return t.toLocaleString(n,e)}catch(t){b().error(S,"localeOptions",t)}},l.Nj=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:T;return{year:t.getFullYear(),month:t.getMonth()+1,monthName:t.toLocaleDateString(n,{month:"long"}),monthNameShort:t.toLocaleDateString(n,{month:"short"}),day:t.getDate(),dayName:t.toLocaleDateString(n,{weekday:"long"}),dayNameShort:t.toLocaleDateString(n,{weekday:"short"}),hour:t.getHours(),minute:t.getMinutes(),second:t.getSeconds(),iso:t.toISOString(),localeString:this.Zj(t,n,e),timeZoneName:N(t,n,e),timeZoneNameShort:N(t,n,e,"short")}},l.Oj=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:T,i=r(r({},e),{},{timeZone:"UTC"});return{year:t.getUTCFullYear(),month:t.getUTCMonth()+1,monthName:t.toLocaleDateString(n,{month:"long",timeZone:"UTC"}),monthNameShort:t.toLocaleDateString(n,{month:"short",timeZone:"UTC"}),day:t.getUTCDate(),dayName:t.toLocaleDateString(n,{weekday:"long",timeZone:"UTC"}),dayNameShort:t.toLocaleDateString(n,{weekday:"short",timeZone:"UTC"}),hour:t.getUTCHours(),minute:t.getUTCMinutes(),second:t.getUTCSeconds(),iso:t.toISOString(),localeString:this.Zj(t,n,i),timeZoneName:N(t,n,i),timeZoneNameShort:N(t,n,i,"short")}},l.Sj=function(t){var n=t.hour%12||12;return r(r({},t),{},{yearTwoDigit:this.Kb(t.year%100),monthTwoDigit:this.Kb(t.month),dayTwoDigit:this.Kb(t.day),hourTwoDigit:this.Kb(t.hour),hour12:n,hour12TwoDigit:this.Kb(n),minuteTwoDigit:this.Kb(t.minute),secondTwoDigit:this.Kb(t.second),dayPeriod:t.hour<12?"am":"pm"})},l.Kb=function(t){return t>9?t.toString():"0"+t},l.qy=function(t){var n=this;this.mutateElement((function(){!function(t){for(;t.firstChild;)t.removeChild(t.firstChild)}(n.Ft),n.Ft.appendChild(t);var e=function(t,n,e,r){var i={detail:null};if(Object.assign(i,{bubbles:!0}),"function"==typeof t.CustomEvent)return new t.CustomEvent(n,i);var o=t.document.createEvent("CustomEvent");return o.initCustomEvent(n,!!i.bubbles,!!i.cancelable,null),o}(n.win,"amp:dom-update");n.element.dispatchEvent(e)}))},c}(t.BaseElement);t.registerElement(S,Z)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-date-display-0.1.js.map