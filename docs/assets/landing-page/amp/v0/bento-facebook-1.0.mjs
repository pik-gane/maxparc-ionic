;
import{defineBentoElement as e}from"../bento.mjs";var{isArray:t}=Array;function r(e,t){const r=[];let n=0;for(let o=0;o<e.length;o++){const a=e[o];t(a,o,e)?r.push(a):(n<o&&(e[n]=a),n++)}return n<e.length&&(e.length=n),r}function n(e){return e.replace("-","_")}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var{hasOwnProperty:l,toString:s}=Object.prototype;function i(e){return 1==(null==(t=e)?void 0:t.nodeType)?(e=e).tagName.toLowerCase()+(e.id?`#${e.id}`:""):e;var t}import{PreactBaseElement as c}from"../bento.mjs";function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}function b(e){const t=Object.getOwnPropertyDescriptor(e,"message");if(null!=t&&t.writable)return e;const{message:r,stack:n}=e,o=new Error(r);for(const t in e)o[t]=e[t];return o.stack=n,o}function p(e){let t=null,r="";for(var n,o=a(arguments,!0);!(n=o()).done;){const e=n.value;e instanceof Error&&!t?t=b(e):(r&&(r+=" "),r+=e)}return t?r&&(t.message=r+": "+t.message):t=new Error(r),t}function v(e){var t,r;null===(t=(r=self).__AMP_REPORT_ERROR)||void 0===t||t.call(r,e)}function h(e,t){try{return function(e){return JSON.parse(e)}(e)}catch(e){return null==t||t(e),null}}import{createElement as y}from"../bento.mjs";import{useCallback as g,useLayoutEffect as w,useMemo as j,useState as S}from"../bento.mjs";import{forwardRef as x}from"../bento.mjs";import{useValueRef as O}from"../bento.mjs";import{createElement as k}from"../bento.mjs";import{useEffect as A,useImperativeHandle as E,useLayoutEffect as C,useMemo as F,useRef as R,useState as H}from"../bento.mjs";import{forwardRef as $}from"../bento.mjs";import{createElement as z}from"../bento.mjs";import{useCallback as P,useEffect as L,useImperativeHandle as I,useLayoutEffect as B,useRef as M}from"../bento.mjs";import{forwardRef as T}from"../bento.mjs";import{ContainWrapper as _,useValueRef as N}from"../bento.mjs";import{useAmpContext as U,useLoading as V}from"../bento.mjs";var q=["allow","allowFullScreen","iframeStyle","name","title","matchesMessagingOrigin","messageHandler","ready","loading","onReadyState","sandbox","src"],G=()=>!1,J=T((function(e,t){let{allow:r,allowFullScreen:n,iframeStyle:o,name:a,title:l,matchesMessagingOrigin:s=G,messageHandler:i,ready:c=!0,loading:u,onReadyState:d,sandbox:b,src:p}=e,v=f(e,q);const{playable:h}=U(),y=V(u),g="unload"!==y,w=M(!1),j=N(d),S=P((e=>{if(e!==w.current){w.current=e;const t=j.current;null==t||t(e?"complete":"loading")}}),[j]),x=M(null);return I(t,(()=>({get readyState(){return w.current?"complete":"loading"},get node(){return x.current}})),[]),B((()=>{g||S(!1)}),[g,S]),L((()=>{const e=x.current;if(!h&&e){const{src:t}=e;(e=>!(!e||"about:blank"==e||e.includes("#")))(t)?e.src=e.src:e.parentNode.insertBefore(e,e.nextSibling)}}),[h]),B((()=>{const e=x.current;if(!e||!g)return;const t=e=>{const t=x.current;t&&e.source==t.contentWindow&&s(e.origin)&&i(e)},{defaultView:r}=e.ownerDocument;return r.addEventListener("message",t),()=>r.removeEventListener("message",t)}),[s,i,g,c]),z(_,m(m({},v),{},{layout:!0,size:!0,paint:!0}),g&&c&&z("iframe",{allow:r,allowFullScreen:n,frameBorder:"0",loading:y,name:a,onLoad:()=>S(!0),part:"iframe",ref:x,sandbox:b,scrolling:"no",src:p,style:m(m({},o),{},{width:"100%",height:"100%",contentVisibility:"auto"}),title:l}))}));J.displayName="IframeEmbed";var Z=self.AMP_CONFIG||{},D=("string"==typeof Z.thirdPartyFrameRegex?new RegExp(Z.thirdPartyFrameRegex):Z.thirdPartyFrameRegex,("string"==typeof Z.cdnProxyRegex?new RegExp(Z.cdnProxyRegex):Z.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function K(e){if(!self.document||!self.document.head)return null;if(self.location&&D.test(self.location.origin))return null;const t=self.document.head.querySelector(`meta[name="${e}"]`);return t&&t.getAttribute("content")||null}var Q,W=Z.thirdPartyUrl||"https://3p.ampproject.net",X=Z.thirdPartyFrameHost||"ampproject.net";function Y(e){return`${W}/2203281422000/vendor/${e}.mjs`}function ee(e){let t;if(e.crypto&&e.crypto.getRandomValues){const r=new Uint32Array(2);e.crypto.getRandomValues(r),t=String(r[0])+r[1]}else t=String(e.Math.random()).substr(2)+"0";return t}Z.cdnUrl||K("runtime-host"),Z.errorReportingUrl,Z.betaErrorReportingUrl,Z.localDev,Z.geoApiUrl||K("amp-geo-api"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null},self.__AMP_LOG,new Set(["c","v","a","ad"]);var te=["allow","excludeSandbox","name","messageHandler","options","sandbox","src","type","title"],re={},ne="sync-xhr 'none'",oe=["allow-top-navigation-by-user-activation","allow-popups-to-escape-sandbox"].join(" ")+" "+["allow-forms","allow-modals","allow-pointer-lock","allow-popups","allow-same-origin","allow-scripts"].join(" "),ae=$((function(e,t){let{allow:r=ne,excludeSandbox:n,name:o,messageHandler:a,options:l,sandbox:s=oe,src:i,type:c,title:u=c}=e,d=f(e,te);if(b=r,"number"!=typeof v&&(v=0),v+(p=ne).length>b.length||-1===b.indexOf(p,v))throw new Error(`'allow' prop must contain "${ne}". Found "${r}".`);var b,p,v;const h=R(null),y=R(null),g=F((()=>(re[c]||(re[c]=function(){let e=0;return()=>String(++e)}()),re[c]())),[c]),[w,j]=H({name:o,src:i}),{name:S,src:x}=w,O=R(null);return C((()=>{var e,t;const r=null===(e=h.current)||void 0===e||null===(t=e.ownerDocument)||void 0===t?void 0:t.defaultView,n=null!=i?i:r?((a=r).__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN=a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN||"d-"+ee(a),"https://"+a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN+`.${X}/2203281422000/frame.html`):"about:blank";var a;if(o)return void j({name:o,src:n});if(!r)return;O.current||(O.current=function(e){let t=0;for(let r=e;r&&r!=r.parent;r=r.parent)t++;return String(t)+"-"+ee(e)}(r));const s=Object.assign({"location":{"href":r.location.href},"sentinel":O.current}),d=m({"title":u,"type":c,"_context":s},l);var f;j({name:JSON.stringify({"host":(f=n,Q||(Q=self.document.createElement("a")),function(e,t,r){return e.href="",new URL(t,e.href)}(Q,f)).hostname,"bootstrap":Y(c),"type":c,"count":g,"attributes":d}),src:n})}),[g,o,l,i,u,c]),A((()=>{var e;const t=null===(e=y.current)||void 0===e?void 0:e.node;t&&t.parentNode.insertBefore(t,t.nextSibling)}),[S]),E(t,(()=>({get readyState(){var e;return null===(e=y.current)||void 0===e?void 0:e.readyState},get node(){var e;return null===(e=y.current)||void 0===e?void 0:e.node}})),[]),k(J,m(m({},d),{},{allow:r,contentRef:h,messageHandler:a,name:S,ref:y,ready:!!S,sandbox:n?void 0:s,src:x,title:u}))}));ae.displayName="ProxyIframeEmbed";var le=["action","colorscheme","embedAs","hideCover","hideCta","href","includeCommentParent","kdSite","layout","locale","numPosts","onLoad","orderBy","refLabel","requestResize","share","showFacepile","showText","size","smallHeader","style","tabs","title"],se=()=>!0,ie="Facebook comments",ce=x((function(e,t){let{action:r,colorscheme:o,embedAs:a,hideCover:l,hideCta:s,href:i,includeCommentParent:c,kdSite:u,layout:d,locale:b,numPosts:x,onLoad:k,orderBy:A,refLabel:E,requestResize:C,share:F,showFacepile:R,showText:H,size:$,smallHeader:z,style:P,tabs:L,title:I=ie}=e,B=f(e,le);const[M,T]=S(null),_=O(k),N=g((e=>{var t;const r=null!==(t=h(e.data))&&void 0!==t?t:function(e){if(!function(e){return"string"==typeof e&&e.startsWith("amp-")&&-1!=e.indexOf("{")}(e))return null;const t=e.indexOf("{");return h(e.substr(t),(t=>{!function(e){const t=p.apply(null,arguments);setTimeout((()=>{throw v(t),t}))}(new Error(`MESSAGING: Failed to parse message: ${e}\n${t.message}`))}))}(e.data);var n;if("ready"==r.action&&(null===(n=_.current)||void 0===n||n.call(_)),"embed-size"==r.type){const e=r.height;C?(C(e),T("100%")):T(e)}}),[C,_]),[U,V]=S(b);w((()=>{var e,r;if(b)return void V(b);const o=null==t||null===(e=t.current)||void 0===e||null===(r=e.ownerDocument)||void 0===r?void 0:r.defaultView;o&&V(n(o.navigator.language))}),[b,t]);const q=j((()=>({action:r,colorscheme:o,embedAs:a,hideCover:l,hideCta:s,href:i,includeCommentParent:c,"kd_site":u,layout:d,locale:U,numPosts:x,orderBy:A,ref:E,share:F,showFacepile:R,showText:H,size:$,smallHeader:z,tabs:L})),[r,o,a,l,s,i,c,u,d,U,x,A,E,F,R,H,$,z,L]);return y(ae,m(m({options:q,ref:t,title:I},B),{},{excludeSandbox:!0,matchesMessagingOrigin:se,messageHandler:N,type:"facebook",style:M?m(m({},P),{},{height:M}):P}))}));ce.displayName="BentoFacebook";var ue=class extends c{};ue.Component=ce,ue.loadable=!0,ue.props={"title":{attr:"title"},"href":{attr:"data-href"},"locale":{attr:"data-locale",default:n(window.navigator.language)},"loading":{attr:"data-loading"},"allowFullScreen":{attr:"data-allowfullscreen"},"embedAs":{attrs:["data-embed-as"],parseAttrs:function(e){const t=e.getAttribute("data-embed-as");return function(e,t,n="Assertion failed",o){var a,l;if(t)return t;e&&-1==n.indexOf(e)&&(n+=e);let s=3;const c=n.split("%s");let u=c.shift();const d=[u];for(;c.length;){const e=arguments[s++],t=c.shift();u+=i(e)+t,d.push(e,t.trim())}const m=new Error(u);throw m.messageArray=r(d,(e=>""!==e)),null===(a=(l=self).__AMP_REPORT_ERROR)||void 0===a||a.call(l,m),m}("​​​",!t||-1!==["post","video","comments","like","page"].indexOf(t),'Attribute data-embed-as for <amp-facebook> value is wrong, should be "post", "video", "comments", "like", or "page", but was: %s',t,n,o,a,l,s,c,u,d),t;var n,o,a,l,s,c,u,d}},"includeCommentParent":{attr:"data-include-comment-parent",type:"boolean",default:!1},"showText":{attr:"data-show-text"},"numPosts":{attr:"data-numposts"},"orderBy":{attr:"data-order-by"},"colorscheme":{attr:"data-colorscheme"},"action":{attr:"data-action"},"kdSite":{attr:"data-kd_site"},"layout":{attr:"data-layout"},"refLabel":{attr:"data-ref"},"share":{attr:"data-share"},"size":{attr:"data-size"},"hideCover":{attr:"data-hide-cover"},"hideCta":{attr:"data-hide-cta"},"showFacepile":{attr:"data-show-facepile"},"smallHeader":{attr:"data-small-header"},"tabs":{attr:"data-tabs"}},ue.layoutSizeDefined=!0,ue.usesShadowDom=!0;var de=class extends ue{};de.staticProps={"embedAs":"comments"};var me=class extends ue{};me.staticProps={"embedAs":"like"};var fe=class extends ue{};fe.staticProps={"embedAs":"page"},e("bento-facebook",ue,undefined),e("bento-facebook-comments",de,void 0),e("bento-facebook-like",me,void 0),e("bento-facebook-page",fe,void 0);
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
//# sourceMappingURL=bento-facebook-1.0.mjs.map