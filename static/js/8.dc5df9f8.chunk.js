(this["webpackJsonppwa-demo"]=this["webpackJsonppwa-demo"]||[]).push([[8,29],{215:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return l}));var r=n(12),i=function(){var e={name:"__LSM__",middleWares:[],persist:"action"},t={};try{e.storageType="undefined"!=typeof sessionStorage?window.sessionStorage:void 0}catch(e){}return{updateStore:function(n){try{t=e.storageType&&JSON.parse(e.storageType.getItem(e.name)||"")||n}catch(e){t=n}},saveStore:function(){e.storageType&&e.storageType.setItem(e.name,JSON.stringify(t))},get state(){return t},set state(e){t=e},get options(){return e},set options(t){e=t}}}(),a=r.createContext(void 0),o=function(e){var t=e.children,n=r.useState(i.state),o=n[0],s=n[1];return r.useEffect((function(){"beforeUnload"===i.options.persist&&(window.onbeforeunload=function(){return i.saveStore()},i.options.storageType&&i.options.storageType.removeItem(i.options.name))}),[]),r.createElement(a.Provider,{value:{state:o,setState:s}},t)};function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function c(e,t){t&&(i.options=s({},i.options,t)),i.updateStore(e)}function l(e){var t=r.useContext(a),n=t.state,o=t.setState,s=r.useRef(Object.entries(e||{}).reduce((function(e,t){var n;return Object.assign({},e,((n={})[t[0]]=function(e,t){return function(n,r){i.state=t(i.state,n),i.options.middleWares&&(i.state=i.options.middleWares.reduce((function(e,r){return r(e,t.name,n)||e}),i.state)),(!r||!r.skipRender)&&e(i.state),"action"===i.options.persist&&i.saveStore()}}(o,t[1]),n))}),{}));return{actions:s.current,state:n,getState:r.useCallback((function(){return i.state}),[])}}},218:function(e,t,n){"use strict";var r=n(12),i=n.n(r),a=n(239);t.a=()=>{const{title:e,setTitle:t,subtitle:n,setSubtitle:r,type:o,setType:s,logoSize:c,setLogoSize:l,setDoGoBack:u,doGoBack:d}=i.a.useContext(a.a);return{title:e,setTitle:t,subtitle:n,setSubtitle:r,type:o,setType:s,logoSize:c,setLogoSize:l,doGoBack:d,setDoGoBack:u}}},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=function(){window.scrollTo({top:0,behavior:"smooth"})}},222:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));var r=n(210),i=n(213);const a=r.css`
  font-family: 'Source Sans Pro';
  font-size: 0.875rem;
  line-height: 20px;
`,o=r.default.div`
  ${a}
  color: ${e=>{let{dark:t}=e;return t?i.a.darkBlack:i.a.black}};
  ${e=>e.fontSize?`font-size: ${e.fontSize};`:""}
`,s=r.default.div`
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 24px;
  line-height: 1;
  color: ${i.a.darkBlack};
`},227:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(12),i=n.n(r),a=n(210),o=n(213);const s=a.default.button`
  height: 52px;
  border-radius: 15px; 
  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */
  font-weight: bold;
  font-size: 14px;
  font-weight: bold;
  width: 100%;

  ${e=>{let{dark:t,disabled:n}=e;const r=n?o.a.purple_50:o.a.purple;return t?`\n    background-color: ${r};\n    color: ${o.a.white};\n    border: none;\n  `:`\n    background-color: ${o.a.white};\n    color: ${r};\n    border: 1px solid ${r};\n  `}}
`;var c=n(49);var l=i.a.memo((e=>{let{children:t,...n}=e;return Object(c.jsx)(s,{type:"button",...n,children:t})}))},229:function(e,t,n){"use strict";function r(e){return(t,n)=>({...t,[e]:{...t[e],...n}})}n.d(t,"a",(function(){return r}))},230:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(12),i=n.n(r),a=n(227);const o=n(210).default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: ${e=>`calc(100% - ${2*e.theme.layout.generalPaddingAmount}px)`};
  margin: 0 auto;

  button {
    flex: 1;

    &:first-of-type {
      margin-left: 0px !important;
    }

    &:last-of-type {
      margin-left: 20px;
    }
  }

  @media screen and (${e=>e.theme.breakpoints.tablet}){
    max-width: 470px;
  }
`;var s=n(49);const c=i.a.memo((e=>{let{invert:t=!1,leftLabel:n,leftDisabled:r,leftHandler:i,rightLabel:c,rightDisabled:l,rightHandler:u}=e;return Object(s.jsxs)(o,{children:[Object(s.jsx)(a.a,{dark:t,disabled:r,onClick:i,children:n}),c&&u&&Object(s.jsx)(a.a,{dark:!t,disabled:l,onClick:u,children:c})]})}));var l=i.a.memo(c)},235:function(e,t,n){var r=n(73);e.exports=function(e,t){if(null==e)return{};var n,i,a=r(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],-1===t.indexOf(n)&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a},e.exports.__esModule=!0,e.exports.default=e.exports},236:function(e,t){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},283:function(e,t,n){"use strict";n.d(t,"a",(function(){return $}));var r=n(235),i=n.n(r),a=n(72),o=n.n(a),s=n(13),c=n.n(s),l=n(12),u=n(236),d=n.n(u),p=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function f(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(d.a[n[1]]||"/"===e.charAt(e.length-2))&&(t.voidElement=!0),t.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var i=new RegExp(p),a=null;null!==(a=i.exec(e));)if(a[0].trim())if(a[1]){var o=a[1].trim(),s=[o,""];o.indexOf("=")>-1&&(s=o.split("=")),t.attrs[s[0]]=s[1],i.lastIndex--}else a[2]&&(t.attrs[a[2]]=a[3].trim().substring(1,a[3].length-1));return t}var m=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,h=/^\s*$/,b=Object.create(null);function g(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(g,"")+"</"+t.name+">";case"comment":return e+"\x3c!--"+t.comment+"--\x3e"}}var y={parse:function(e,t){t||(t={}),t.components||(t.components=b);var n,r=[],i=[],a=-1,o=!1;if(0!==e.indexOf("<")){var s=e.indexOf("<");r.push({type:"text",content:-1===s?e:e.substring(0,s)})}return e.replace(m,(function(s,c){if(o){if(s!=="</"+n.name+">")return;o=!1}var l,u="/"!==s.charAt(1),d=s.startsWith("\x3c!--"),p=c+s.length,m=e.charAt(p);if(d){var b=f(s);return a<0?(r.push(b),r):((l=i[a]).children.push(b),r)}if(u&&(a++,"tag"===(n=f(s)).type&&t.components[n.name]&&(n.type="component",o=!0),n.voidElement||o||!m||"<"===m||n.children.push({type:"text",content:e.slice(p,e.indexOf("<",p))}),0===a&&r.push(n),(l=i[a-1])&&l.children.push(n),i[a]=n),(!u||n.voidElement)&&(a>-1&&(n.voidElement||n.name===s.slice(2,-1))&&(a--,n=-1===a?r:i[a]),!o&&"<"!==m&&m)){l=-1===a?r:i[a].children;var g=e.indexOf("<",p),y=e.slice(p,-1===g?void 0:g);h.test(y)&&(y=" "),(g>-1&&a+l.length>=0||" "!==y)&&l.push({type:"text",content:y})}})),r},stringify:function(e){return e.reduce((function(e,t){return e+g("",t)}),"")}},v=n(198),x=n(245),j=["format"],O=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function S(e){return e?e.props?e.props.children:e.children:[]}function T(e){return Array.isArray(e)?e:[e]}function B(e,t){if(!e)return"";var n="",r=T(e),a=t.transSupportBasicHtmlNodes&&t.transKeepBasicHtmlNodesFor?t.transKeepBasicHtmlNodesFor:[];return r.forEach((function(e,r){if("string"===typeof e)n+="".concat(e);else if(Object(l.isValidElement)(e)){var s=Object.keys(e.props).length,c=a.indexOf(e.type)>-1,u=e.props.children;if(!u&&c&&0===s)n+="<".concat(e.type,"/>");else if(u||c&&0===s)if(e.props.i18nIsDynamicList)n+="<".concat(r,"></").concat(r,">");else if(c&&1===s&&"string"===typeof u)n+="<".concat(e.type,">").concat(u,"</").concat(e.type,">");else{var d=B(u,t);n+="<".concat(r,">").concat(d,"</").concat(r,">")}else n+="<".concat(r,"></").concat(r,">")}else if(null===e)Object(x.c)("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===o()(e)){var p=e.format,f=i()(e,j),m=Object.keys(f);if(1===m.length){var h=p?"".concat(m[0],", ").concat(p):m[0];n+="{{".concat(h,"}}")}else Object(x.c)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else Object(x.c)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),n}function E(e,t,n,r,i,a){if(""===t)return[];var s=r.transKeepBasicHtmlNodesFor||[],c=t&&new RegExp(s.join("|")).test(t);if(!e&&!c)return[t];var u={};!function e(t){T(t).forEach((function(t){"string"!==typeof t&&(P(t)?e(S(t)):"object"!==o()(t)||Object(l.isValidElement)(t)||Object.assign(u,t))}))}(e);var d=y.parse("<0>".concat(t,"</0>")),p=w(w({},u),i);function f(e,t,n){var r=S(e),i=h(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return Object(l.isValidElement)(e)}))}(r)&&0===i.length?r:i}function m(e,t,n,r,i){e.dummy&&(e.children=t),n.push(Object(l.cloneElement)(e,w(w({},e.props),{},{key:r}),i?void 0:t))}function h(t,i,u){var d=T(t);return T(i).reduce((function(t,i,b){var g=i.children&&i.children[0]&&i.children[0].content&&n.services.interpolator.interpolate(i.children[0].content,p,n.language);if("tag"===i.type){var y=d[parseInt(i.name,10)];!y&&1===u.length&&u[0][i.name]&&(y=u[0][i.name]),y||(y={});var v=0!==Object.keys(i.attrs).length?function(e,t){var n=w({},t);return n.props=Object.assign(e.props,t.props),n}({props:i.attrs},y):y,x=Object(l.isValidElement)(v),j=x&&P(i,!0)&&!i.voidElement,O=c&&"object"===o()(v)&&v.dummy&&!x,k="object"===o()(e)&&null!==e&&Object.hasOwnProperty.call(e,i.name);if("string"===typeof v){var S=n.services.interpolator.interpolate(v,p,n.language);t.push(S)}else if(P(v)||j){m(v,f(v,i,u),t,b)}else if(O){var T=h(d,i.children,u);t.push(Object(l.cloneElement)(v,w(w({},v.props),{},{key:b}),T))}else if(Number.isNaN(parseFloat(i.name))){if(k)m(v,f(v,i,u),t,b,i.voidElement);else if(r.transSupportBasicHtmlNodes&&s.indexOf(i.name)>-1)if(i.voidElement)t.push(Object(l.createElement)(i.name,{key:"".concat(i.name,"-").concat(b)}));else{var B=h(d,i.children,u);t.push(Object(l.createElement)(i.name,{key:"".concat(i.name,"-").concat(b)},B))}else if(i.voidElement)t.push("<".concat(i.name," />"));else{var E=h(d,i.children,u);t.push("<".concat(i.name,">").concat(E,"</").concat(i.name,">"))}}else if("object"!==o()(v)||x)1===i.children.length&&g?t.push(Object(l.cloneElement)(v,w(w({},v.props),{},{key:b}),g)):t.push(Object(l.cloneElement)(v,w(w({},v.props),{},{key:b})));else{var $=i.children[0]?g:null;$&&t.push($)}}else if("text"===i.type){var C=r.transWrapTextNodes,z=a?r.unescape(n.services.interpolator.interpolate(i.content,p,n.language)):n.services.interpolator.interpolate(i.content,p,n.language);C?t.push(Object(l.createElement)(C,{key:"".concat(i.name,"-").concat(b)},z)):t.push(z)}return t}),[])}return S(h([{dummy:!0,children:e||[]}],d,T(e||[]))[0])}function $(e){var t=e.children,n=e.count,r=e.parent,a=e.i18nKey,o=e.context,s=e.tOptions,c=void 0===s?{}:s,u=e.values,d=e.defaults,p=e.components,f=e.ns,m=e.i18n,h=e.t,b=e.shouldUnescape,g=i()(e,O),y=Object(l.useContext)(v.a)||{},j=y.i18n,k=y.defaultNS,P=m||j||Object(v.d)();if(!P)return Object(x.d)("You will need to pass in an i18next instance by using i18nextReactModule"),t;var S=h||P.t.bind(P)||function(e){return e};o&&(c.context=o);var T=w(w({},Object(v.c)()),P.options&&P.options.react),$=f||S.ns||k||P.options&&P.options.defaultNS;$="string"===typeof $?[$]:$||["translation"];var C=d||B(t,T)||T.transEmptyNodeValue||a,z=T.hashTransKey,L=a||(z?z(C):C),N=u?c.interpolation:{interpolation:w(w({},c.interpolation),{},{prefix:"#$?",suffix:"?$#"})},M=w(w(w(w({},c),{},{count:n},u),N),{},{defaultValue:C,ns:$}),I=E(p||t,L?S(L,M):C,P,T,M,b),F=void 0!==r?r:T.defaultTransParent;return F?Object(l.createElement)(F,g,I):I}},331:function(e,t,n){"use strict";n.r(t),n.d(t,"MainContainer",(function(){return o})),n.d(t,"ImportantNote",(function(){return s})),n.d(t,"Subtitle",(function(){return c})),n.d(t,"PlayerContainer",(function(){return l})),n.d(t,"PlayerContainerTop",(function(){return u})),n.d(t,"PlayerPlayContainer",(function(){return d})),n.d(t,"PlayerPlayButton",(function(){return p})),n.d(t,"PlayerPlay",(function(){return f})),n.d(t,"PlayerCrossContainer",(function(){return m})),n.d(t,"PlayerCross",(function(){return h})),n.d(t,"PlayerTopMiddle",(function(){return b})),n.d(t,"PlayerFileName",(function(){return g})),n.d(t,"PlayerFileSize",(function(){return y})),n.d(t,"PlayerContainerBottom",(function(){return v})),n.d(t,"PlayerBottomTop",(function(){return x})),n.d(t,"PlayerBottomTrack",(function(){return j})),n.d(t,"PlayerBottomThumb",(function(){return O})),n.d(t,"PlayerBottomBottom",(function(){return k})),n.d(t,"PlayerTimeIndicator",(function(){return w}));var r=n(210),i=n(213),a=n(222);const o=r.default.div`
  margin-bottom: 77px;

  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    max-width: 470px;
    margin-left: auto;
    margin-right: auto;
  }
`,s=r.default.span`
  font-family: "Source Sans Pro";
  font-size: 0.75rem;
  line-height: 1.42;
  font-weight: ${e=>{let{isBold:t}=e;return t?700:400}};
 
  display: block;
  max-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin: 52px auto;
  
  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    max-width: 470px;
    margin-left: auto;
    margin-right: auto;
  }
`,c=r.default.h2`
  color: ${e=>{let{theme:t}=e;return t.colors.mineShaft}};
  font-size: 18px;
  font-family: "Source Sans Pro";
  margin-left: 20px;
  margin-top: 35px;
  text-align: left;
  white-space: pre-wrap;
  width: 100%;
  
  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    align-text: center; 
    max-width: 592px;
    margin: 30px auto;
  }
`,l=r.default.div`
  display: flex;
  flex-direction: column;
  margin: 60px 20px 0px 20px;

  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    max-width: 592px;
    margin: 0 auto;
  }
`,u=r.default.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 10px;
`,d=r.default.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 76px;
`,p=r.default.div`
  width: 108px;
  height: 108px;
  background-color: ${i.a.purple_10};
  border-radius: 50%;
  cursor: pointer;
  display: flex; 
  align-items: center; 
  justify-content: center; 
`,f=r.default.img`
  width: 33px;
  height: 40px;
`,m=r.default.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  width: 22px;
  padding-bottom: 22px;
  margin-right: -20px;
  padding-right: 20px;
  box-sizing: content-box;
  cursor: pointer;
`,h=r.default.img`
  width: 14px;
  height: 14px;
`,b=r.default.div`
  flex: 1;
`,g=Object(r.default)(a.b).attrs({dark:!0,fontSize:"1rem"})`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-align: left;
  font-size: 14px;

  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    font-size: 1.5rem;
    line-height: 24px;
  }
`,y=Object(r.default)(a.b).attrs({dark:!0,fontSize:"0.625rem"})`
  text-align: left;
  color: ${e=>e.theme.colors.darkGray};

  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    font-size: 0.875rem;
    line-height: 24px;
  }
`,v=r.default.div``,x=r.default.div`
  position: relative;
  margin-bottom: 4px;
`,j=r.default.div`
  position: relative;
  width: 100%;
  height: 4px;
  background-color: ${i.a.purple_10};

  &:after{
    content: '';
    position: absolute; 
    left: 0;
    height: 4px;
    background-color: ${i.a.purple};
    width: ${e=>e.progress?`${e.progress}%`:"0%"};
    ${e=>e.playing?"transition: width 0.2s linear;":""}

  }
`,O=r.default.div`
  position: absolute;
  top: -6px;
  left: ${e=>e.progress?`${e.progress}%`:"0px"};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${i.a.purple};
  transform: translateX(-50%);
  ${e=>e.playing?"transition: left 0.2s linear;":""}
`,k=r.default.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`,w=Object(r.default)(a.b).attrs({dark:!0,fontSize:"14px"})`
  opacity: 0.5;
  margin-top: 8px;
`},344:function(e,t,n){"use strict";n.r(t);var r=n(12),i=n.n(r),a=n(223),o=n(232),s=n.n(o),c=n(963),l=n(283),u=n(215),d=n(218),p=n(230),f=n(229),m=n(219),h=n(386),b=n.p+"static/media/play.e148f529.svg",g=n.p+"static/media/pause.6d9603fe.svg",y=n.p+"static/media/cross.2dabeb54.svg",v=n(385),x=n(331),j=n(49);const O=e=>{var t;let{storeKey:n,previousStep:o,nextStep:O,metadata:k}=e;const{Portal:w}=s()({bindTo:document&&document.getElementById("wizard-buttons")}),{setDoGoBack:P,setSubtitle:S}=Object(d.a)(),T=Object(a.g)(),B=Object(a.h)(),{state:E,actions:$}=Object(u.c)({updateAction:Object(f.a)(n)}),{t:C}=Object(c.a)(),z=null===E||void 0===E||null===(t=E[n])||void 0===t?void 0:t[null===k||void 0===k?void 0:k.currentLogic],L=z?z.recordingFile||z.uploadedFile:null,N=i.a.useRef(null),M=i.a.useRef(),I=i.a.useRef(0),[F,D]=i.a.useState(!0),[A,H]=i.a.useState(!1),[R,K]=i.a.useState(0),[V,_]=i.a.useState(0);i.a.useEffect((()=>{const e=t=>{_(t/1e3),I.current=t,M.current=setTimeout((()=>{e(t+200)}),200)},t=()=>{e(I.current),setTimeout((()=>{H(!0)}),0)},n=e=>{e.target.currentTime>=e.target.duration&&(_(0),I.current=0),H(!1),clearTimeout(M.current)},r=async e=>{const t=await Object(h.a)(e.target);K(t)};return N.current&&(N.current.addEventListener("playing",t),N.current.addEventListener("pause",n),N.current.addEventListener("loadedmetadata",r)),()=>{N.current&&(N.current.removeEventListener("playing",t),N.current.removeEventListener("pause",n),N.current.removeEventListener("loadedmetadata",r))}}),[]);const{fileUrl:G,fileName:U}=i.a.useMemo((()=>{const e={fileUrl:"",fileName:"",fileSize:""};if(L&&void 0!==L.size)try{const t=URL.createObjectURL(L);e.fileUrl=t,e.fileName=L.name,e.fileSize=v.a.sizeAsHuman(L.size,!0)}catch(t){console.log("Error",t)}return e}),[L]),W=i.a.useCallback((()=>{O&&(D(!1),T.push(O))}),[T,O]),J=i.a.useCallback((()=>{if(A&&N.current&&N.current.pause(),D(!1),B.state&&B.state.from){const e="/submit-steps/step-record/cough";T.push(e)}else o?T.push(o):T.goBack()}),[B.state,o,T,A]),Y=i.a.useCallback((()=>{A&&N.current&&N.current.pause(),null!==E&&void 0!==E&&E[n][null===k||void 0===k?void 0:k.currentLogic]&&($.updateAction({[null===k||void 0===k?void 0:k.currentLogic]:{recordingFile:null,uploadFile:null}}),J())}),[A,E,n,k,$,J]),Z=i.a.useCallback((()=>{A||(_(0),N.current&&N.current.play())}),[A]),X=i.a.useCallback((()=>{A&&N.current&&N.current.pause()}),[A]);Object(r.useEffect)((()=>{Object(m.a)(),S(C("recordingsListen:title")),P((()=>J))}),[J,P,S,C]);const{currentTime:q,remainingTime:Q,trackProgress:ee}=i.a.useMemo((()=>{const e={currentTime:"0:00",remainingTime:"0:00",trackProgress:0};if(R){const t=Math.floor(Math.floor(V)/60),n=Math.floor(V)-60*t;e.currentTime=`${t}:${n<10?`0${n}`:n}`;const r=R>V?Math.ceil(R-V):0,i=Math.floor(r/60),a=r-60*i;e.remainingTime=`-${i}:${a<10?`0${a}`:a}`,e.trackProgress=Math.ceil(V/R*100)}return e}),[R,V]);return Object(j.jsxs)(j.Fragment,{children:[G&&Object(j.jsx)("audio",{ref:N,children:Object(j.jsx)("source",{src:G})}),Object(j.jsxs)(x.MainContainer,{children:[Object(j.jsx)(x.Subtitle,{children:C("recordingsListen:subtitle")}),Object(j.jsxs)(x.PlayerContainer,{children:[Object(j.jsxs)(x.PlayerContainerTop,{children:[Object(j.jsx)(x.PlayerTopMiddle,{children:Object(j.jsx)(x.PlayerFileName,{children:U})}),Object(j.jsx)(x.PlayerCrossContainer,{onClick:Y,children:Object(j.jsx)(x.PlayerCross,{src:y})})]}),Object(j.jsxs)(x.PlayerContainerBottom,{children:[Object(j.jsxs)(x.PlayerBottomTop,{children:[Object(j.jsx)(x.PlayerBottomTrack,{playing:A,progress:ee}),Object(j.jsx)(x.PlayerBottomThumb,{playing:A,progress:ee})]}),Object(j.jsxs)(x.PlayerBottomBottom,{children:[Object(j.jsx)(x.PlayerTimeIndicator,{children:q}),Object(j.jsx)(x.PlayerTimeIndicator,{children:Q})]})]})]}),Object(j.jsx)(x.PlayerPlayContainer,{onClick:A?X:Z,children:Object(j.jsx)(x.PlayerPlayButton,{children:Object(j.jsx)(x.PlayerPlay,{src:A?g:b})})})]}),Object(j.jsx)(x.ImportantNote,{children:Object(j.jsxs)(l.a,{i18nKey:"main:note",children:[Object(j.jsx)("strong",{children:"Please note:"})," This form is for data collection only. It will not predict your COVID-19 status or diagnose any disease, disorder, or other health condition. Virufy is conducting research and will use the information you provide for that research only. Virufy will not take place of a doctor and would like to remind you it is your responsibility to seek medical advice from your doctor."]})}),F&&Object(j.jsx)(w,{children:Object(j.jsx)(p.a,{invert:!0,leftLabel:C("recordingsListen:next"),leftHandler:W,rightLabel:C("recordingsListen:retake"),rightHandler:Y})})]})};t.default=i.a.memo(O)},385:function(e,t,n){"use strict";t.a={sizeAsHuman:(e,t)=>{const n=t?1e3:1024;if(Math.abs(e)<n)return`${e} B`;const r=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"];let i=-1;do{e/=n,++i}while(Math.abs(e)>=n&&i<r.length-1);return`${e.toFixed(1)} ${r[i]}`},blobToFile:(e,t)=>{const n=e;return n.lastModifiedDate=new Date,n.name=t,e}}},386:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(466);function i(e,t){return new Promise((n=>{e.duration===1/0||r.isSafari&&!(r.isSafari&&e.duration>0)?(e.addEventListener("durationchange",(()=>{t?e.remove():(e.pause(),e.volume=1,e.currentTime=0),n(e.duration)})),e.currentTime=86400,e.play()):n(e.duration)}))}}}]);
//# sourceMappingURL=8.dc5df9f8.chunk.js.map