;
(self.AMP=self.AMP||[]).push({m:0,v:"2203281422000",n:"amp-selector",ev:"0.1",l:!0,f:function(t,e){!function(){var e;function i(){return e||(e=Promise.resolve(void 0))}function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){if(e&&("object"===o(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function u(t){return t?Array.prototype.slice.call(t):[]}function c(t,e){if(t.length!==e.length)return!1;for(var i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0}Array.isArray;var a=Object.prototype,l=(a.hasOwnProperty,a.toString,1),f="Enter",h="ArrowLeft",d="ArrowUp",p="ArrowRight",v="ArrowDown",b="Home",m="End";function y(t){return"rtl"==(t.body.getAttribute("dir")||t.documentElement.getAttribute("dir")||"ltr")}var w=self.AMP_CONFIG||{},g=("string"==typeof w.thirdPartyFrameRegex?new RegExp(w.thirdPartyFrameRegex):w.thirdPartyFrameRegex,("string"==typeof w.cdnProxyRegex?new RegExp(w.cdnProxyRegex):w.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function j(t){if(!self.document||!self.document.head)return null;if(self.location&&g.test(self.location.origin))return null;var e=self.document.head.querySelector('meta[name="'.concat(t,'"]'));return e&&e.getAttribute("content")||null}w.thirdPartyUrl,w.thirdPartyFrameHost,w.cdnUrl||j("runtime-host"),w.errorReportingUrl,w.betaErrorReportingUrl,w.localDev,w.geoApiUrl||j("amp-geo-api"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var k=self.__AMP_LOG;function x(t){return function(t,e){throw new Error("failed to call initLogConstructor")}()}function E(t,e,i,n,r,o,s,u,c,a,l){return t}function O(t,e,i,n,r,o,s,u,c,a,l){return(k.user||(k.user=x()),void k.user.win?k.userForEmbed||(k.userForEmbed=x()):k.user).assert(t,e,i,n,r,o,s,u,c,a,l)}function R(t){return t.nodeType?(i=t,e=(i.ownerDocument||i).defaultView,function(t,e){return A(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),"ampdoc")}(e)).getAmpDoc(t):t;var e,i}function A(t,e){E(S(t,e));var i=function(t){var e=t.__AMP_SERVICES;return e||(e=t.__AMP_SERVICES={}),e}(t)[e];return i.obj||(E(i.ctor),E(i.context),i.obj=new i.ctor(i.context),E(i.obj),i.context=null,i.resolve&&i.resolve(i.obj)),i.obj}function S(t,e){var i=t.__AMP_SERVICES&&t.__AMP_SERVICES[e];return!(!i||!i.ctor)}var U="amp-selector",D="none",L="select",P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}(w,t);var e,o,a=(e=w,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,i=r(e);if(o){var n=r(this).constructor;t=Reflect.construct(i,arguments,n)}else t=i.apply(this,arguments);return s(this,t)});function w(t){var e;return(e=a.call(this,t)).kZ=!1,e.EZ=[],e.Ar=[],e.RZ=[],e.Ks=null,e.AZ=0,e.SZ=D,e}w.prerenderAllowed=function(){return!0};var g=w.prototype;return g.isLayoutSupported=function(){return!0},g.buildCallback=function(){var t,e,i,n,r,o=this;this.Ks=(t=this.element,e="action",i=R(t),S(r=(n=R(i)).isSingleDoc()?n.win:n,e)?A(r,e):null),this.kZ=this.element.hasAttribute("multiple"),this.element.hasAttribute("role")||this.element.setAttribute("role","listbox"),this.kZ&&this.element.setAttribute("aria-multiselectable","true"),this.element.hasAttribute("disabled")&&this.element.setAttribute("aria-disabled","true");var s,u=this.element.getAttribute("keyboard-select-mode");u?(O("none"===(s=u=u.toLowerCase())||"focus"===s||"select"===s,"Unknown keyboard-select-mode: ".concat(u)),O(!(this.kZ&&u==L),"[keyboard-select-mode=select] not supported for multiple selection amp-selector")):u=D,this.SZ=u,this.registerAction("clear",this.UZ.bind(this)),this.zo(),this.element.addEventListener("click",this.Bq.bind(this)),this.element.addEventListener("keydown",this.IU.bind(this)),this.registerAction("selectUp",(function(t){var e=t.args,i=t.trust,n=e&&void 0!==e.delta?-e.delta:-1;o.DZ(n,i)}),l),this.registerAction("selectDown",(function(t){var e=t.args,i=t.trust,n=e&&void 0!==e.delta?e.delta:1;o.DZ(n,i)}),l),this.registerAction("toggle",(function(t){var e=t.args,i=t.trust;return O(e.index>=0,"'index' must be greater than 0"),O(e.index<o.Ar.length,"'index' must be less than the length of options in the <amp-selector>"),e&&void 0!==e.index?o.bA(e.index,e.value,i):Promise.reject("'index' must be specified")}),l),this.Ks.addToAllowlist(U,["clear","selectDown","selectUp","toggle"],["email"]),this.element.addEventListener("amp:dom-update",this.LZ.bind(this))},g.mutatedAttributesCallback=function(t){var e=t.selected;void 0!==e&&this.PZ(e);var i=t.disabled;void 0!==i&&(i?this.element.setAttribute("aria-disabled","true"):this.element.removeAttribute("aria-disabled"))},g.PZ=function(t){var e=Array.isArray(t)?t:[t];if(null!==t&&0!=e.length){if(this.kZ||(e=e.slice(0,1)),!c(this.BZ().sort(),e.sort())){for(var i=e.reduce((function(t,e){return t[e]=!0,t}),Object.create(null)),n=0;n<this.Ar.length;n++){var r=this.Ar[n];i[r.getAttribute("option")]?this.CZ(r):this.TZ(r)}this.zZ(),this.FZ()}}else this.UZ()},g.zZ=function(t){if(this.SZ!=D){this.Ar.forEach((function(t){t.tabIndex=-1}));var e=t;e||(e=this.kZ?this.Ar[0]:this.EZ[0]||this.Ar[0]),e&&(this.AZ=this.Ar.indexOf(e),e.tabIndex=0)}},g.LZ=function(t){var e=u(this.element.querySelectorAll("[option]"));c(this.Ar,e)||this.zo(e)},g.zo=function(t){var e=this;this.EZ.length=0;var i=t||u(this.element.querySelectorAll("[option]"));i.forEach((function(t){t.hasAttribute("role")||t.setAttribute("role","option"),t.hasAttribute("disabled")&&t.setAttribute("aria-disabled","true"),t.hasAttribute("selected")?e.CZ(t):e.TZ(t),t.tabIndex=0})),this.Ar=i,this.zZ(),this.FZ()},g.FZ=function(){var t=this,e=[],i=this.element.getAttribute("name");if(!i||this.element.hasAttribute("disabled"))return e;var n=this.element.getAttribute("form");this.RZ.forEach((function(e){t.element.removeChild(e)})),this.RZ=[];var r=this.win.document,o=r.createDocumentFragment();return this.EZ.forEach((function(s){if(!s.hasAttribute("disabled")){var u=r.createElement("input"),c=s.getAttribute("option");u.setAttribute("type","hidden"),u.setAttribute("name",i),u.setAttribute("value",c),n&&u.setAttribute("form",n),t.RZ.push(u),o.appendChild(u),e.push(c)}})),this.element.appendChild(o),e},g.HZ=function(t){var e=this;t.hasAttribute("disabled")||this.mutateElement((function(){t.hasAttribute("selected")?e.kZ&&(e.TZ(t),e.FZ()):(e.CZ(t),e.FZ()),e.zZ(t),e.ZZ(t,3)}))},g.BZ=function(){return this.EZ.map((function(t){return t.getAttribute("option")}))},g.Bq=function(t){if(!this.element.hasAttribute("disabled")){var e,i=t.target;i&&(i.hasAttribute("option")||("[option]",i=(e=i).closest?e.closest("[option]"):function(t,e,i){var n;for(n=t;n&&void 0!==n;n=n.parentElement)if(e(n))return n;return null}(e,(function(t){return function(t,e){var i=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector;return!!i&&i.call(t,"[option]")}(t)}))),i&&this.HZ(i))}},g.bA=function(t,e,n){var r=this,o=this.Ar[t],s=o.hasAttribute("selected"),u=void 0!==e?e:!s,c=this.Ar.indexOf(this.EZ[0]);return u===s?i():this.mutateElement((function(){if(c!==t){r.CZ(o);var e=r.Ar[c];e&&r.TZ(e)}else r.TZ(o);r.ZZ(o,n)}))},g.ZZ=function(t,e){var i="select",n=function(t,e,i,n){var r={detail:i};if(Object.assign(r,void 0),"function"==typeof t.CustomEvent)return new t.CustomEvent(e,r);var o=t.document.createEvent("CustomEvent");return o.initCustomEvent(e,!!r.bubbles,!!r.cancelable,i),o}(this.win,"amp-selector.".concat(i),{"targetOption":t.getAttribute("option"),"selectedOptions":this.BZ()});this.Ks.trigger(this.element,i,n,e)},g.DZ=function(t,e){var i,n,r=this.Ar.indexOf(this.EZ[0]),o=(i=-1===r&&t<0?t:r+t,n=this.Ar.length,i>0&&n>0?i%n:(i%n+n)%n),s=this.Ar[o];this.CZ(s);var u=this.Ar[r];u&&this.TZ(u),this.FZ(),this.ZZ(s,e)},g.IU=function(t){if(this.element.hasAttribute("disabled"))return i();switch(t.key){case h:case d:case p:case v:case b:case m:return this.SZ!=D?this.$Z(t):i();case f:case" ":return this._Z(t),i()}return i()},g.$Z=function(t){var e=this,n=this.win.document,r=0;switch(t.key){case h:r=y(n)?1:-1;break;case d:case m:r=-1;break;case p:r=y(n)?-1:1;break;case v:case b:r=1;break;default:return i()}return t.preventDefault(),this.Ar[this.AZ].tabIndex=-1,this.qZ().then((function(i){var n,o,s,u,c=e.AZ;switch(t.key){case b:e.AZ=e.Ar.length-1;break;case m:e.AZ=0}do{e.AZ=(e.AZ+r)%e.Ar.length,e.AZ<0&&(e.AZ=e.AZ+e.Ar.length)}while(n=e.Ar[e.AZ],s=(o=i[e.AZ]).height,u=o.width,(n.hidden||0==u||0==s)&&e.AZ!=c);var a=e.Ar[e.AZ];a.tabIndex=0,function(t){try{t.focus()}catch(t){}}(a);var l=e.Ar[e.AZ];e.SZ==L&&e.HZ(l)}))},g._Z=function(t){var e=t.key;if((" "==e||e==f)&&this.Ar.includes(t.target)){t.preventDefault();var i=t.target;this.HZ(i)}},g.TZ=function(t){t.removeAttribute("selected"),t.setAttribute("aria-selected","false");var e=this.EZ.indexOf(t);-1!==e&&this.EZ.splice(e,1)},g.UZ=function(){for(;this.EZ.length>0;){var t=this.EZ.pop();this.TZ(t)}this.FZ()},g.CZ=function(t){this.EZ.includes(t)||(this.kZ||this.UZ(),t.setAttribute("selected",""),t.setAttribute("aria-selected","true"),this.EZ.push(t))},g.getElementsForTesting=function(){return this.Ar},g.getSelectedElementsForTesting=function(){return this.EZ},g.qZ=function(){var t=this;return this.measureElement((function(){return t.Ar.map((function(t){return t.getBoundingClientRect()}))}))},w}(t.BaseElement);t.registerElement(U,P,"amp-selector [option]{cursor:pointer}amp-selector [option][selected]{cursor:auto;outline:1px solid rgba(0,0,0,0.7)}amp-selector[multiple] [option][selected]{cursor:pointer;outline:1px solid rgba(0,0,0,0.7)}amp-selector [disabled][option],amp-selector[disabled] [option],amp-selector[disabled] [selected],amp-selector [selected][disabled]{cursor:auto;outline:none}\n/*# sourceURL=/extensions/amp-selector/0.1/amp-selector.css*/")}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-selector-0.1.js.map