;
!function(n){var t=self.BENTO=self.BENTO||{};(t.bento=t.bento||[]).push((function(n){"use strict";function t(n,r){return(t=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,r)}function r(n,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&t(n,r)}function e(n){return(e=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function i(n){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function u(n,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}function o(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,i=e(n);if(t){var o=e(this).constructor;r=Reflect.construct(i,arguments,o)}else r=i.apply(this,arguments);return u(this,r)}}var f={};!function(n){var t=Object.prototype.toString,r=Array.isArray||function(n){return"[object Array]"===t.call(n)};function e(n){return"function"==typeof n}function u(n){return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function o(n,t){return null!=n&&"object"===i(n)&&Object.prototype.hasOwnProperty.call(n,t)}var f=RegExp.prototype.test,a=/\S/;var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},c=/\s*/,l=/\s+/,h=/\s*=/,v=/\s*\}/,d=/#|\^|\/|>|\{|&|=|!/;function m(n){this.string=n,this.tail=n,this.pos=0}function b(n,t){this.view=n,this.cache={".":this.view},this.parent=t}function y(){this.cache={}}m.prototype.eos=function(){return""===this.tail},m.prototype.scan=function(n){var t=this.tail.match(n);if(!t||0!==t.index)return"";var r=t[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r},m.prototype.scanUntil=function(n){var t,r=this.tail.search(n);switch(r){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,r),this.tail=this.tail.substring(r)}return this.pos+=t.length,t},b.prototype.push=function(n){return new b(n,this)},b.prototype.lookup=function(n){var t,r=this.cache;if(r.hasOwnProperty(n))t=r[n];else{for(var i,u,f=this,a=!1;f;){if(n.indexOf(".")>0)for(t=f.view,i=n.split("."),u=0;null!=t&&u<i.length;){if(!o(t,i[u])){t=null;break}u===i.length-1&&(a=!0),t=t[i[u++]]}else o(f.view,n)?(t=f.view[n],a=!0):t=null;if(a)break;f=f.parent}r[n]=t}return e(t)&&(t=t.call(this.view)),t},y.prototype.clearCache=function(){this.cache={}},y.prototype.parse=function(t,e){var i=this.cache,o=i[t];return null==o&&(o=i[t]=function(t,e){if(!t)return[];var i,o,s,b,y=[],p=[],w=[],g=!1,j=!1;function O(){if(g&&!j)for(;w.length;)delete p[w.pop()];else w=[];g=!1,j=!1}!function(n){if("string"==typeof n&&(n=n.split(l,2)),!r(n)||2!==n.length)throw new Error("Invalid tags: "+n);i=new RegExp(u(n[0])+"\\s*"),o=new RegExp("\\s*"+u(n[1])),s=new RegExp("\\s*"+u("}"+n[1]))}(e||n.tags);for(var S,E,x,M,A,k,D=new m(t);!D.eos();){if(S=D.pos,x=D.scanUntil(i))for(var R=0,U=x.length;R<U;++R)b=M=x.charAt(R),function(n,t){return f.call(n,t)}(a,b)?j=!0:w.push(p.length),p.push(["text",M,S,S+1]),S+=1,"\n"===M&&O();if(!D.scan(i))break;if(g=!0,E=D.scan(d)||"name",D.scan(c),"="===E?(x=D.scanUntil(h),D.scan(h),D.scanUntil(o)):"{"===E?(x=D.scanUntil(s),D.scan(v),D.scanUntil(o),E="&"):x=D.scanUntil(o),!D.scan(o))throw new Error("Unclosed tag at "+D.pos);if(A=[E,x,S,D.pos],p.push(A),"#"===E||"^"===E)y.push(A);else if("/"===E){if(!(k=y.pop()))throw new Error('Unopened section "'+x+'" at '+S);if(k[1]!==x)throw new Error('Unclosed section "'+k[1]+'" at '+S)}else"name"!==E&&"{"!==E&&"&"!==E||(j=!0)}if(k=y.pop())throw new Error('Unclosed section "'+k[1]+'" at '+D.pos);return function(n){for(var t,r=[],e=r,i=[],u=0,o=n.length;u<o;++u)switch((t=n[u])[0]){case"#":case"^":e.push(t),i.push(t),e=t[4]=[];break;case"/":i.pop()[5]=t[2],e=i.length>0?i[i.length-1][4]:r;break;default:e.push(t)}return r}(function(n){for(var t,r,e=[],i=0,u=n.length;i<u;++i)(t=n[i])&&("text"===t[0]&&r&&"text"===r[0]?(r[1]+=t[1],r[3]=t[3]):(e.push(t),r=t));return e}(p))}(t,e)),o},y.prototype.render=function(n,t,r){var e=this.parse(n),i=t instanceof b?t:new b(t);return this.renderTokens(e,i,r,n)},y.prototype.renderTokens=function(n,t,r,e){for(var i,u,o,f="",a=0,s=n.length;a<s;++a)o=void 0,"#"===(u=(i=n[a])[0])?o=this.renderSection(i,t,r,e):"^"===u?o=this.renderInverted(i,t,r,e):">"===u?o=this.renderPartial(i,t,r,e):"&"===u?o=this.unescapedValue(i,t):"name"===u?o=this.escapedValue(i,t):"text"===u&&(o=this.rawValue(i)),void 0!==o&&(f+=o);return f},y.prototype.renderSection=function(n,t,u,o){var f=this,a="",s=t.lookup(n[1]);if(s){if(r(s))for(var c=0,l=s.length;c<l;++c)a+=this.renderTokens(n[4],t.push(s[c]),u,o);else if("object"===i(s)||"string"==typeof s||"number"==typeof s)a+=this.renderTokens(n[4],t.push(s),u,o);else if(e(s)){if("string"!=typeof o)throw new Error("Cannot use higher-order sections without the original template");null!=(s=s.call(t.view,o.slice(n[3],n[5]),(function(n){return f.render(n,t,u)})))&&(a+=s)}else a+=this.renderTokens(n[4],t,u,o);return a}},y.prototype.renderInverted=function(n,t,e,i){var u=t.lookup(n[1]);if(!u||r(u)&&0===u.length)return this.renderTokens(n[4],t,e,i)},y.prototype.renderPartial=function(n,t,r){if(r){var i=e(r)?r(n[1]):r[n[1]];return null!=i?this.renderTokens(this.parse(i),t,r,i):void 0}},y.prototype.unescapedValue=function(t,r){var e=r.lookup(t[1]);if(null!=e)return n.sanitizeUnescaped?n.sanitizeUnescaped(e):e},y.prototype.escapedValue=function(t,r){var e=r.lookup(t[1]);if(null!=e)return n.escape(e)},y.prototype.rawValue=function(n){return n[1]},n.name="mustache.js",n.version="2.2.0",n.tags=["{{","}}"];var p=new y;n.clearCache=function(){return p.clearCache()},n.parse=function(n,t){return p.parse(n,t)},n.render=function(n,t,e){if("string"!=typeof n)throw new TypeError('Invalid template! Template should be a "string" but "'+(r(u=n)?"array":i(u))+'" was given as the first argument for mustache#render(template, view, partials)');var u;return p.render(n,t,e)},n.to_html=function(t,r,i,u){var o=n.render(t,r,i);if(!e(u))return o;u(o)},n.escape=function(n){return String(n).replace(/[&<>"'`=\/]/g,(function(n){return s[n]}))},n.sanitizeUnescaped=null,n.setUnescapedSanitizer=function(t){n.sanitizeUnescaped=t},n.Scanner=m,n.Context=b,n.Writer=y}(f);var a=f;function s(n,t){for(var r=[],e=0,i=0;i<n.length;i++){var u=n[i];t(u,i,n)?r.push(u):(e<i&&(n[e]=u),e++)}return e<n.length&&(n.length=e),r}function c(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}Array.isArray;var l=Object.prototype;function h(n){return 1==(null==(t=n)?void 0:t.nodeType)?(n=n).tagName.toLowerCase()+(n.id?"#".concat(n.id):""):n;var t}function v(n,t,r,e,i,u,o,f,a,c,l){return function(n,t){var r,e,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Assertion failed";if(t)return t;n&&-1==i.indexOf(n)&&(i+=n);for(var u=3,o=i.split("%s"),f=o.shift(),a=[f];o.length;){var c=arguments[u++],l=o.shift();f+=h(c)+l,a.push(c,l.trim())}var v=new Error(f);throw v.messageArray=s(a,(function(n){return""!==n})),null===(r=(e=self).__AMP_REPORT_ERROR)||void 0===r||r.call(e,v),v}("​​​",n,t,r,e,i,u,o,f,a,c,l)}l.hasOwnProperty,l.toString;var d=/(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;function m(n,t,r,e,i){return i||(t?"�":e?n.slice(0,-1)+"\\"+n.slice(-1).charCodeAt(0).toString(16)+" ":"\\"+n)}function b(n){return String(n).replace(d,m)}function y(n){if(!n)return null;if("now"===n.toLowerCase())return Date.now();var t=Date.parse(n);return isNaN(t)?null:t}var p={"datetime":function(n){var t=y(n);return v(t,"Invalid date: %s",n),t},"end-date":function(n){var t=y(n);return v(t,"Invalid date: %s",n),t},"timeleft-ms":function(n){return Date.now()+Number(n)},"timestamp-ms":function(n){return Number(n)},"timestamp-seconds":function(n){return 1e3*Number(n)}};function w(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function g(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.push.apply(r,e)}return r}function j(n){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){w(n,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))}))}return n}function O(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var e,i,u=[],o=!0,f=!1;try{for(r=r.call(n);!(o=(e=r.next()).done)&&(u.push(e.value),!t||u.length!==t);o=!0);}catch(n){f=!0,i=n}finally{try{o||null==r.return||r.return()}finally{if(f)throw i}}return u}}(n,t)||function(n,t){if(n){if("string"==typeof n)return c(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(n,t):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(n){return E[n]}var E={"de":["Jahren","Monaten","Tagen","Stunden","Minuten","Sekunden"],"en":["Years","Months","Days","Hours","Minutes","Seconds"],"es":["años","meses","días","horas","minutos","segundos"],"fr":["ans","mois","jours","heures","minutes","secondes"],"id":["tahun","bulan","hari","jam","menit","detik"],"it":["anni","mesi","giorni","ore","minuti","secondi"],"ja":["年","ヶ月","日","時間","分","秒"],"ko":["년","달","일","시간","분","초"],"nl":["jaar","maanden","dagen","uur","minuten","seconden"],"pt":["anos","meses","dias","horas","minutos","segundos"],"ru":["год","месяц","день","час","минута","секунда"],"th":["ปี","เดือน","วัน","ชั่วโมง","นาที","วินาที"],"tr":["yıl","ay","gün","saat","dakika","saniye"],"vi":["năm","tháng","ngày","giờ","phút","giây"],"zh-cn":["年","月","天","小时","分钟","秒"],"zh-tw":["年","月","天","小時","分鐘","秒"]},x=["datetime","whenEnded","locale","biggestUnit","countUp","render"],M=864e5,A=36e5,k=6e4,D=1e3,R={DAYS:1,HOURS:2,MINUTES:3,SECONDS:4},U="en",I="stop",N=function(n){return"".concat(n.days," ").concat(n.dd,", ")+"".concat(n.hours," ").concat(n.hh,", ")+"".concat(n.minutes," ").concat(n.mm,", ")+"".concat(n.seconds," ").concat(n.ss)};function T(n){return n<-9||n>9?String(n):n>=-9&&n<0?"-0"+-n:"0"+n}function _(n){return n<0?n+1:n}var C=function(n){r(e,n);var t=o(e);function e(){return t.apply(this,arguments)}return e}(n.PreactBaseElement);C.Component=function(t){var r,e=t.datetime,u=t.whenEnded,o=void 0===u?I:u,f=t.locale,a=void 0===f?U:f,s=t.biggestUnit,c=void 0===s?"DAYS":s,l=t.countUp,h=void 0!==l&&l,v=t.render,d=void 0===v?N:v,m=function(n,t){if(null==n)return{};var r,e,i={},u=Object.keys(n);for(e=0;e<u.length;e++)r=u[e],t.indexOf(r)>=0||(i[r]=n[r]);return i}(t,x);r=(0,n.useAmpContext)().notify,(0,n.useLayoutEffect)((function(){r&&r()}));var b=(0,n.useAmpContext)().playable,p=(0,n.useMemo)((function(){return(n=e)?"number"==typeof n?n:"string"==typeof n?y(n):(n=n).getTime():null;var n}),[e]),w=(0,n.useMemo)((function(){return function(n){var t;void 0===S(n)&&(t="Invalid locale ".concat(n,", defaulting to ").concat(U,". ").concat("DateCountdown"),console.warn(t),n=U);var r=S(n);return{"years":r[0],"months":r[1],"days":r[2],"hours":r[3],"minutes":r[4],"seconds":r[5]}}(a)}),[a]),g=O((0,n.useState)(p-Date.now()+D),2),E=g[0],C=g[1],$=(0,n.useMemo)((function(){return function(n,t,r,e){return j(j({},function(n,t,r){r&&(n*=-1);var e=R[t]==R.DAYS?_(Math.floor(n/M)):0,i=R[t]==R.HOURS?_(Math.floor(n/A)):R[t]<R.HOURS?_(Math.floor(n%M/A)):0,u=R[t]==R.MINUTES?_(Math.floor(n/k)):R[t]<R.MINUTES?_(Math.floor(n%A/k)):0,o=_(R[t]==R.SECONDS?Math.floor(n/1e3):Math.floor(n%k/1e3));return{"d":e,"dd":T(e),"h":i,"hh":T(i),"m":u,"mm":T(u),"s":o,"ss":T(o)}}(n,t,e)),r)}(E,c,w,h)}),[E,c,w,h]),z=(0,n.useRef)(null);(0,n.useEffect)((function(){if(b&&z.current){var n=z.current.ownerDocument.defaultView,t=n.setInterval((function(){var r=p-Date.now()+D;C(r),o===I&&r<1e3&&n.clearInterval(t)}),D);return function(){return n.clearInterval(t)}}}),[b,p,o]);var B=function(t,r){var e=O((0,n.useState)(null),2),i=e[0],u=e[1];return(0,n.useLayoutEffect)((function(){var n,e=t&&t(r)||null;if("function"==typeof(null==(n=e)?void 0:n.then)){var i=!1;return e.then((function(n){i||u(n)})),function(){i=!0}}u(e)}),[t,r]),i}(d,$),H=B&&"object"==i(B)&&"__html"in B;return(0,n.createElement)(n.Wrapper,j(j({},m),{},{ref:z,dangerouslySetInnerHTML:H?B:null}),H?null:B)},C.layoutSizeDefined=!0,C.lightDomTag="div",C.usesTemplate=!0,C.props={"datetime":{attrs:["end-date","timeleft-ms","timestamp-ms","timestamp-seconds","offset-seconds"],parseAttrs:function(n){return function(n,t){var r=function(n,t){for(var r=t.map((function(n){return p[n]})),e=0;e<t.length;++e){var i=n.getAttribute(t[e]);if(i)return r[e](i)}return null}(n,t);return v(r,"One of attributes [%s] is required",t.join(", ")),r+1e3*(Number(n.getAttribute("offset-seconds"))||0)}(n,["end-date","timeleft-ms","timestamp-ms","timestamp-seconds"])}},"whenEnded":{attr:"when-ended"},"locale":{attr:"locale"},"biggestUnit":{attr:"biggest-unit"},"countUp":{attr:"count-up",type:"boolean"}};var $=function(n){r(e,n);var t=o(e);function e(){return t.apply(this,arguments)}return e.prototype.checkPropsPostMutations=function(){var n=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"template";if(n.hasAttribute(t)){var r=n.getAttribute(t);return Boolean(r)?n.ownerDocument.querySelector("template#".concat(b(r))):null}return n.querySelector("template")}(this.element);n&&this.mutateProps({"render":function(t){return{"__html":a.render(n.innerHTML,t)}}})},e}(C);(0,n.defineBentoElement)("bento-date-countdown",$,undefined)}))}();
//# sourceMappingURL=bento-date-countdown-1.0.js.map