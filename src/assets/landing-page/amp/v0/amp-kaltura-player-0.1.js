;
(self.AMP=self.AMP||[]).push({m:0,v:"2203281422000",n:"amp-kaltura-player",ev:"0.1",l:!0,f:function(n,t){!function(){function t(n,e){return(t=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,e)}function e(n){return(e=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function i(n,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}var o=Array.isArray;function u(n){return o(n)?n:[n]}function a(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function f(n,t){var e="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(e)return(e=e.call(n)).next.bind(e);if(Array.isArray(n)||(e=function(n,t){if(n){if("string"==typeof n)return a(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var r=0;return function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c=Object.prototype;function l(n,t){n.classList.add("i-amphtml-fill-content"),t&&n.classList.add("i-amphtml-replaced-content")}function s(n){var t=Object.getOwnPropertyDescriptor(n,"message");if(null!=t&&t.writable)return n;var e=n.message,r=n.stack,i=new Error(e);for(var o in n)i[o]=n[o];return i.stack=r,i}function h(n){for(var t,e=null,r="",i=f(arguments,!0);!(t=i()).done;){var o=t.value;o instanceof Error&&!e?e=s(o):(r&&(r+=" "),r+=o)}return e?r&&(e.message=r+": "+e.message):e=new Error(r),e}function d(n){var t,e;null===(t=(e=self).__AMP_REPORT_ERROR)||void 0===t||t.call(e,n)}function v(n){var t=h.apply(null,arguments);setTimeout((function(){throw d(t),t}))}function p(n){try{for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];return n.apply(null,e)}catch(n){v(n)}}c.hasOwnProperty,c.toString;var m={"getPropertyPriority":function(){return""},"getPropertyValue":function(){return""}},y=/vertical/,b=new WeakMap,w=new WeakMap,g=new WeakMap;function R(n){var t=b.get(n);return t||(t=new n.ResizeObserver(I),b.set(n,t)),t}function I(n){for(var t=new Set,e=n.length-1;e>=0;e--){var r=n[e],i=r.target;if(!t.has(i)){t.add(i);var o=w.get(i);if(o){g.set(i,r);for(var u=0;u<o.length;u++){var a=o[u],f=a.callback;S(a.type,f,r)}}}}}function S(n,t,e){if(0==n){var r=e.contentRect,i=r.height;p(t,{width:r.width,height:i})}else if(1==n){var o,u=e.borderBoxSize;if(u)o=u.length>0?u[0]:{inlineSize:0,blockSize:0};else{var a,f,c=e.target,l=((b=c).ownerDocument||b).defaultView,s=y.test(function(n,t){return n.getComputedStyle(t)||m}(l,c).writingMode),h=c,d=h.offsetHeight,v=h.offsetWidth;s?(f=v,a=d):(a=v,f=d),o={inlineSize:a,blockSize:f}}p(t,o)}var b}var C=function(){function n(n){this.Gn=n,this.Zn=!1,this.Un=!1,this.Jn=this.Jn.bind(this)}var t=n.prototype;return t.updatePlaying=function(n){n!==this.Zn&&(this.Zn=n,n?(this.Un=!1,function(n,t,e){var r=n.ownerDocument.defaultView;if(r){var i=w.get(n);if(i||(i=[],w.set(n,i),R(r).observe(n)),!i.some((function(n){return n.callback===e&&1===n.type}))){i.push({type:1,callback:e});var o=g.get(n);o&&setTimeout((function(){return S(1,e,o)}))}}}(this.Gn,0,this.Jn)):function(n,t){!function(n,t,e){var r=w.get(n);if(r&&(function(n,t){for(var r=[],i=0,o=0;o<n.length;o++){var u=n[o];(a=u).callback===e&&1===a.type?r.push(u):(i<o&&(n[i]=u),i++)}var a;i<n.length&&(n.length=i)}(r),0==r.length)){w.delete(n),g.delete(n);var i=n.ownerDocument.defaultView;i&&R(i).unobserve(n)}}(n,0,t)}(this.Gn,this.Jn))},t.Jn=function(n){var t=n.blockSize,e=n.inlineSize>0&&t>0;if(e!==this.Un){this.Un=e;var r=this.Gn;e||r.pause()}},n}(),j=self.AMP_CONFIG||{},U=("string"==typeof j.thirdPartyFrameRegex?new RegExp(j.thirdPartyFrameRegex):j.thirdPartyFrameRegex,("string"==typeof j.cdnProxyRegex?new RegExp(j.cdnProxyRegex):j.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function k(n){if(!self.document||!self.document.head)return null;if(self.location&&U.test(self.location.origin))return null;var t=self.document.head.querySelector('meta[name="'.concat(n,'"]'));return t&&t.getAttribute("content")||null}j.thirdPartyUrl,j.thirdPartyFrameHost,j.cdnUrl||k("runtime-host"),j.errorReportingUrl,j.betaErrorReportingUrl,j.localDev,j.geoApiUrl||k("amp-geo-api"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var E=self.__AMP_LOG;function O(n){return function(n,t){throw new Error("failed to call initLogConstructor")}()}function A(n,t,e,r,i,o,u,a,f,c,l){return n}new Set(["c","v","a","ad"]);var x=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&t(n,e)}(c,n);var r,o,a=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,t=e(r);if(o){var u=e(this).constructor;n=Reflect.construct(t,arguments,u)}else n=t.apply(this,arguments);return i(this,n)});function c(n){var t;return(t=a.call(this,n)).tb=null,t.nR="",t.tR="",t.eR="",t.Gt=new C(t.element),t}var s=c.prototype;return s.preconnectCallback=function(n){var t,e,r;(t=this.win,e=t,r="preconnect",function(n,t){A(function(n,t){var e=n.__AMP_SERVICES&&n.__AMP_SERVICES[t];return!(!e||!e.ctor)}(n,t));var e=function(n){var t=n.__AMP_SERVICES;return t||(t=n.__AMP_SERVICES={}),t}(n)[t];return e.obj||(A(e.ctor),A(e.context),e.obj=new e.ctor(e.context),A(e.obj),e.context=null,e.resolve&&e.resolve(e.obj)),e.obj}(e=function(n){return n.__AMP_TOP||(n.__AMP_TOP=n)}(e),r)).url(this.getAmpDoc(),"https://".concat(encodeURIComponent(this.nR)).concat(n))},s.isLayoutSupported=function(n){return function(n){return"fixed"==n||"fixed-height"==n||"responsive"==n||"fill"==n||"flex-item"==n||"fluid"==n||"intrinsic"==n}(n)},s.buildCallback=function(){var n,t;this.tR=(n=this.element.getAttribute("data-partner"),"The data-partner attribute is required for <amp-kaltura-player> %s",t=this.element,(E.user||(E.user=O()),void E.user.win?E.userForEmbed||(E.userForEmbed=O()):E.user).assert(n,"The data-partner attribute is required for <amp-kaltura-player> %s",t,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined)),this.element.classList.add("i-amphtml-media-component"),this.eR=this.element.getAttribute("data-entryid")||"default",this.nR=this.element.getAttribute("data-service-url")||"cdnapisec.kaltura.com"},s.layoutCallback=function(){var n=this.element.getAttribute("data-uiconf")||this.element.getAttribute("data-uiconf-id")||"default",t=this.element.ownerDocument.createElement("iframe"),e="https://".concat(encodeURIComponent(this.nR),"/p/").concat(encodeURIComponent(this.tR),"/sp/").concat(encodeURIComponent(this.tR),"00/embedIframeJs/uiconf_id/").concat(encodeURIComponent(n),"/partner_id/").concat(encodeURIComponent(this.tR),"?iframeembed=true&playerId=kaltura_player_amp&entry_id=").concat(encodeURIComponent(this.eR));return e=function(n,t,e){if(!t)return n;var r=n.split("#",2),i=r[0].split("?",2);return i[0]+(i[1]?"?".concat(i[1],"&").concat(t):"?".concat(t))+(r[1]?"#".concat(r[1]):"")}(e,function(n){var t,e,r=[];for(var i in n){var o=n[i];if(null!=o){o=u(o);for(var a=0;a<o.length;a++)r.push((t=i,e=o[a],"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(e))))}}return r.join("&")}(function(n,t,e){var r=function(n){return"flashvars[".concat(n,"]")}||function(n){return n},i=n.dataset,o={},u=/^param(.+)/;for(var a in i){var f=a.match(u);f&&(o[r(f[1][0].toLowerCase()+f[1].substr(1))]=i[a])}return o}(this.element))),t.setAttribute("frameborder","0"),t.setAttribute("allowfullscreen","true"),t.src=e,l(t),this.element.appendChild(t),this.tb=t,this.Gt.updatePlaying(!0),this.loadPromise(t)},s.unlayoutCallback=function(){var n=this.tb;return n&&(this.element.removeChild(n),this.tb=null),this.Gt.updatePlaying(!1),!0},s.createPlaceholderCallback=function(){var n=this.win.document.createElement("img");!function(n,t,e,r){for(var i,o=f(u(["aria-label"]),!0);!(i=o()).done;){var a=i.value,c=t.getAttribute(a);null!==c&&e.setAttribute(a,c)}}(0,this.element,n),l(n),n.setAttribute("loading","lazy"),n.setAttribute("placeholder",""),n.setAttribute("referrerpolicy","origin"),n.hasAttribute("aria-label")?n.setAttribute("alt","Loading video - "+n.getAttribute("aria-label")):n.setAttribute("alt","Loading video");var t=this.element.getAttribute("width"),e=this.element.getAttribute("height"),r="https://".concat(encodeURIComponent(this.nR),"/p/").concat(encodeURIComponent(this.tR),"/thumbnail/entry_id/").concat(encodeURIComponent(this.eR));return t&&(r+="/width/".concat(t)),e&&(r+="/height/".concat(e)),n.setAttribute("src",r),n},s.pauseCallback=function(){this.tb&&this.tb.contentWindow&&this.tb.contentWindow.postMessage(JSON.stringify({"method":"pause","value":""}),"*")},c}(n.BaseElement);n.registerElement("amp-kaltura-player",x)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-kaltura-player-0.1.js.map