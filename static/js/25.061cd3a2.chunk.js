(this["webpackJsonppwa-demo"]=this["webpackJsonppwa-demo"]||[]).push([[25,30],{215:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return s}));var r=n(12),o=function(){var e={name:"__LSM__",middleWares:[],persist:"action"},t={};try{e.storageType="undefined"!=typeof sessionStorage?window.sessionStorage:void 0}catch(e){}return{updateStore:function(n){try{t=e.storageType&&JSON.parse(e.storageType.getItem(e.name)||"")||n}catch(e){t=n}},saveStore:function(){e.storageType&&e.storageType.setItem(e.name,JSON.stringify(t))},get state(){return t},set state(e){t=e},get options(){return e},set options(t){e=t}}}(),a=r.createContext(void 0),i=function(e){var t=e.children,n=r.useState(o.state),i=n[0],c=n[1];return r.useEffect((function(){"beforeUnload"===o.options.persist&&(window.onbeforeunload=function(){return o.saveStore()},o.options.storageType&&o.options.storageType.removeItem(o.options.name))}),[]),r.createElement(a.Provider,{value:{state:i,setState:c}},t)};function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function u(e,t){t&&(o.options=c({},o.options,t)),o.updateStore(e)}function s(e){var t=r.useContext(a),n=t.state,i=t.setState,c=r.useRef(Object.entries(e||{}).reduce((function(e,t){var n;return Object.assign({},e,((n={})[t[0]]=function(e,t){return function(n,r){o.state=t(o.state,n),o.options.middleWares&&(o.state=o.options.middleWares.reduce((function(e,r){return r(e,t.name,n)||e}),o.state)),(!r||!r.skipRender)&&e(o.state),"action"===o.options.persist&&o.saveStore()}}(i,t[1]),n))}),{}));return{actions:c.current,state:n,getState:r.useCallback((function(){return o.state}),[])}}},218:function(e,t,n){"use strict";var r=n(12),o=n.n(r),a=n(239);t.a=()=>{const{title:e,setTitle:t,subtitle:n,setSubtitle:r,type:i,setType:c,logoSize:u,setLogoSize:s,setDoGoBack:l,doGoBack:d}=o.a.useContext(a.a);return{title:e,setTitle:t,subtitle:n,setSubtitle:r,type:i,setType:c,logoSize:u,setLogoSize:s,doGoBack:d,setDoGoBack:l}}},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=function(){window.scrollTo({top:0,behavior:"smooth"})}},222:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var r=n(210),o=n(213);const a=r.css`
  font-family: 'Source Sans Pro';
  font-size: 0.875rem;
  line-height: 20px;
`,i=r.default.div`
  ${a}
  color: ${e=>{let{dark:t}=e;return t?o.a.darkBlack:o.a.black}};
  ${e=>e.fontSize?`font-size: ${e.fontSize};`:""}
`,c=r.default.div`
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 24px;
  line-height: 1;
  color: ${o.a.darkBlack};
`},227:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(12),o=n.n(r),a=n(210),i=n(213);const c=a.default.button`
  height: 52px;
  border-radius: 15px; 
  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */
  font-weight: bold;
  font-size: 14px;
  font-weight: bold;
  width: 100%;

  ${e=>{let{dark:t,disabled:n}=e;const r=n?i.a.purple_50:i.a.purple;return t?`\n    background-color: ${r};\n    color: ${i.a.white};\n    border: none;\n  `:`\n    background-color: ${i.a.white};\n    color: ${r};\n    border: 1px solid ${r};\n  `}}
`;var u=n(49);var s=o.a.memo((e=>{let{children:t,...n}=e;return Object(u.jsx)(c,{type:"button",...n,children:t})}))},229:function(e,t,n){"use strict";function r(e){return(t,n)=>({...t,[e]:{...t[e],...n}})}n.d(t,"a",(function(){return r}))},230:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(12),o=n.n(r),a=n(227);const i=n(210).default.div`
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
`;var c=n(49);const u=o.a.memo((e=>{let{invert:t=!1,leftLabel:n,leftDisabled:r,leftHandler:o,rightLabel:u,rightDisabled:s,rightHandler:l}=e;return Object(c.jsxs)(i,{children:[Object(c.jsx)(a.a,{dark:t,disabled:r,onClick:o,children:n}),u&&l&&Object(c.jsx)(a.a,{dark:!t,disabled:s,onClick:l,children:u})]})}));var s=o.a.memo(u)},232:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),c=n(33),u=a(n(234));t.errorMessage1="You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e) when the `programmaticallyOpen` option is not set to `true`.",t.default=function(e){void 0===e&&(e={});var n=e.closeOnOutsideClick,a=void 0===n||n,s=e.closeOnEsc,l=void 0===s||s,d=e.bindTo,f=e.isOpen,p=void 0!==f&&f,b=e.onOpen,m=e.onClose,v=e.onPortalClick,h=e.programmaticallyOpen,g=void 0!==h&&h,O=o(e,["closeOnOutsideClick","closeOnEsc","bindTo","isOpen","onOpen","onClose","onPortalClick","programmaticallyOpen"]),C=u.default(),w=C.isServer,x=C.isBrowser,j=i.useState(p),y=j[0],k=j[1],E=i.useRef(y),S=i.useCallback((function(e){E.current=e,k(e)}),[]),R=i.useRef(),T=i.useRef(x?document.createElement("div"):null);i.useEffect((function(){x&&!T.current&&(T.current=document.createElement("div"))}),[x,T]);var L=i.useMemo((function(){if(!w)return d&&c.findDOMNode(d)||document.body}),[w,d]),P=function(e){if(!e)return{portal:T,targetEl:R,event:e};var t=e||{};t.persist&&t.persist(),t.portal=T,t.targetEl=R,t.event=e;var n=e.currentTarget;return!R.current&&n&&n!==document&&(R.current=t.currentTarget),t},_=Object.entries(O).reduce((function(e,t){var n=t[0],r=t[1];return e[n]=function(e){w||r(P(e))},e}),{}),F=i.useCallback((function(e){if(!w){var n=P(e);if(null==R.current&&!g)throw setTimeout((function(){return S(!0)}),0),Error(t.errorMessage1);b&&b(n),S(!0)}}),[w,T,S,R,b]),M=i.useCallback((function(e){if(!w){var t=P(e);m&&E.current&&m(t),E.current&&S(!1)}}),[w,m,S]),$=i.useCallback((function(e){return E.current?M(e):F(e)}),[M,F]),B=i.useCallback((function(e){return"Escape"===e.key&&l?M(e):void 0}),[l,M]),I=i.useCallback((function(e){var t=function(t){return t.current.contains(e.target)};t(T)||0!==e.button||!E.current||R.current&&t(R)||a&&M(e)}),[w,M,a,T]),z=i.useCallback((function(e){if(!w&&T.current instanceof HTMLElement){var t=P(e);T.current.contains(t.target)&&v&&v(t),I(e)}}),[I]),D=i.useRef({});i.useEffect((function(){if(!w&&L instanceof HTMLElement&&T.current instanceof HTMLElement){var e={onScroll:"scroll",onWheel:"wheel"},t=T.current;return L.appendChild(T.current),Object.entries(e).forEach((function(e){var t=e[0],n=e[1];O[t]&&(D.current[t]=function(e){return O[t](P(e))},document.addEventListener(n,D.current[t]))})),document.addEventListener("keydown",B),document.addEventListener("mousedown",z),function(){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];O[t]&&(document.removeEventListener(n,D.current[t]),delete D.current[t])})),document.removeEventListener("keydown",B),document.removeEventListener("mousedown",z),L.removeChild(t)}}}),[w,I,B,L,T]);var U=i.useCallback((function(e){var t=e.children;return null!=T.current?c.createPortal(t,T.current):null}),[T]);return Object.assign([F,M,E.current,U,$,R,T],r(r({isOpen:E.current,openPortal:F,ref:R,closePortal:M,togglePortal:$,Portal:U,portalRef:T},_),{bind:r({ref:R},_)}))}},234:function(e,t,n){"use strict";var r,o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Browser="browser",e.Server="server",e.Native="native"}(r=t.Device||(t.Device={}));var a=r.Browser,i=r.Server,c=r.Native,u=!("undefined"===typeof window||!window.document||!window.document.createElement),s="undefined"!=typeof navigator&&"ReactNative"==navigator.product?c:u?a:i,l={isBrowser:s===a,isServer:s===i,isNative:s===c,device:s,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:s===a&&!!window.addEventListener,canUseViewport:s===a&&!!window.screen},d=function(){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce((function(e,t){return o(o({},e),t)}),{})}((e=l,Object.keys(e).map((function(t){return e[t]})),l));var e},f=d();t.weAreServer=function(){l.isServer=!0,f=d()},t.useSSR=function(){return f},t.default=t.useSSR},282:function(e,t,n){"use strict";n.r(t),n.d(t,"MainContainer",(function(){return g})),n.d(t,"Title",(function(){return O})),n.d(t,"Text",(function(){return C})),n.d(t,"TextAddFile",(function(){return w})),n.d(t,"TextFileConstraints",(function(){return x})),n.d(t,"TextErrorContainer",(function(){return j})),n.d(t,"UploadContainer",(function(){return y})),n.d(t,"UploadInput",(function(){return k})),n.d(t,"UploadButton",(function(){return E})),n.d(t,"ArrowUp",(function(){return S})),n.d(t,"CloudsSVG",(function(){return R}));var r,o,a,i=n(210),c=n(213),u=n(222),s=n(12);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(null,arguments)}function d(e,t){let{title:n,titleId:i,...c}=e;return s.createElement("svg",l({viewBox:"0 0 197 123",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},c),n?s.createElement("title",{id:i},n):null,r||(r=s.createElement("path",{d:"M166.609 94.6731C166.611 91.0315 165.894 87.4254 164.502 84.0606C163.109 80.6959 161.067 77.6385 158.492 75.063C155.917 72.4876 152.86 70.4445 149.495 69.0507C146.13 67.6568 142.524 66.9394 138.882 66.9394C137.294 66.94 135.71 67.079 134.146 67.3547C134.166 56.8902 130.027 46.8467 122.64 39.4335C115.253 32.0204 105.223 27.8449 94.7569 27.8256C84.2909 27.8064 74.2459 31.9449 66.8317 39.3307C59.4175 46.7166 55.2414 56.7449 55.2221 67.2093C53.9521 67.0353 52.672 66.9451 51.3901 66.9394C44.1573 66.9086 37.1987 69.705 31.9989 74.7319C26.799 79.7588 23.7696 86.6183 23.5569 93.8471C23.3442 101.076 25.965 108.102 30.8602 113.425C35.7554 118.749 42.5375 121.95 49.7597 122.344H140.585C147.631 121.911 154.246 118.807 159.081 113.665C163.917 108.523 166.609 101.731 166.609 94.6731Z",fill:"#D5E4FF"})),o||(o=s.createElement("path",{d:"M197 38.8013C197.007 36.4261 196.493 34.0783 195.494 31.9232C194.495 29.7681 193.036 27.8581 191.219 26.3277C189.403 24.7973 187.272 23.6837 184.979 23.0654C182.685 22.4471 180.284 22.339 177.944 22.7488C177.827 16.6826 175.337 10.9037 171.009 6.65113C166.681 2.39858 160.858 0.0109033 154.79 3.72496e-05C148.722 -0.0108288 142.891 2.35598 138.548 6.593C134.204 10.83 131.694 16.6 131.555 22.6657C130.809 22.5576 130.056 22.5021 129.302 22.4996C125.066 22.5049 121 24.1578 117.962 27.1082C114.924 30.0587 113.154 34.0753 113.026 38.3078C112.897 42.5403 114.421 46.6567 117.275 49.7855C120.129 52.9144 124.088 54.8102 128.315 55.0718H181.703C185.844 54.8131 189.731 52.9865 192.573 49.9639C195.414 46.9413 196.997 42.9497 197 38.8013Z",fill:"#EAF1FF"})),a||(a=s.createElement("path",{d:"M47.3115 91.1833C47.3115 88.7461 46.3432 86.4088 44.6197 84.6855C42.8961 82.9622 40.5585 81.9941 38.121 81.9941C37.5953 81.9913 37.0704 82.0364 36.5529 82.129C36.5529 78.662 35.1754 75.337 32.7235 72.8854C30.2715 70.4338 26.946 69.0565 23.4785 69.0565C20.0109 69.0565 16.6854 70.4338 14.2334 72.8854C11.7815 75.337 10.404 78.662 10.404 82.129C9.98039 82.0749 9.55377 82.0471 9.12669 82.046C6.74799 82.0625 4.46834 83.0005 2.76706 84.6628C1.06577 86.3252 0.0754078 88.5823 0.00413104 90.9596C-0.0671457 93.3369 0.786245 95.6493 2.38488 97.4105C3.98352 99.1718 6.20286 100.245 8.57629 100.404H38.6922C41.0347 100.258 43.2327 99.2214 44.8354 97.507C46.4381 95.7925 47.324 93.53 47.3115 91.1833Z",fill:"#B1CDFF"})))}const f=s.forwardRef(d);var p,b;n.p;function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(null,arguments)}function v(e,t){let{title:n,titleId:r,...o}=e;return s.createElement("svg",m({viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},o),n?s.createElement("title",{id:r},n):null,p||(p=s.createElement("path",{d:"M20 33.4749V6.52485",stroke:"#3578DE",strokeWidth:3.675,strokeLinecap:"round",strokeLinejoin:"round"})),b||(b=s.createElement("path",{d:"M8.97504 17.5499L20 6.52493L31.025 17.5499",stroke:"#3578DE",strokeWidth:3.675,strokeLinecap:"round",strokeLinejoin:"round"})))}const h=s.forwardRef(v);n.p;const g=i.default.div`
  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    margin-bottom: 64px;
  }
`,O=Object(i.default)(u.a)`
  margin-top: 65px;
  margin-bottom: 16px;
  margin-left: 20px;

`,C=Object(i.default)(u.b)`
  margin-bottom: 125px;
  color: ${e=>e.theme.colors.darkGray_70};

  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    @media (orientation: portrait) {
      margin-bottom: 185px;
    }

    @media (orientation: landscape) {
      margin-bottom: 24px;
    }
  }
`,w=Object(i.default)(u.b).attrs({dark:!0,fontSize:"1rem"})`
  text-align: center;
  line-height: 24px;

  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    font-size: 1.75rem;
  }
`,x=Object(i.default)(u.b).attrs({dark:!0,fontSize:"0.625rem"})`
  text-align: center;
  line-height: 24px;
  color: ${e=>e.theme.colors.darkGray};

  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    font-size: 1rem;
    margin-top: 20px;
  }
`,j=i.default.div`
  font-size: 16px;
  line-height: 20px;
  color: ${c.a.red};
  font-family: 'Source Sans Pro';
  display: 'flex';
  height: 50px;
`,y=i.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 0 auto;
  position: relative;
`,k=i.default.input`
  display: none;
`,E=i.default.label`
  width: 98px;
  height: 98px;
  background-color: #EBF1FC;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  margin-top: -40%;

  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    width: 200px;
    height: 200px;
    margin-bottom: 30px;
  }
`,S=Object(i.default)(h)`
  width: 39px;
  height: 39px;
  position: absolute; 
  bottom: 55%;
  pointer-events: none;

  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    width: 80px;
    height: 80px;
    position: absolute;
    bottom: 60%;
  } 
`,R=Object(i.default)(f)`
  width: 197px;
  height: 122px;
  margin: 0 auto;
  margin-top: 110px;
  display: block;

  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    width: 374px;
    height: 299px;
  }
`},302:function(e,t,n){"use strict";n.r(t);var r=n(12),o=n.n(r),a=n(223),i=n(232),c=n.n(i),u=n(963),s=n(267),l=n(215),d=n(279),f=n(280),p=n(230),b=n(218),m=n(229),v=n(219),h=n(282),g=n(49);const O=f.b({uploadedFile:f.a().required("ERROR.FILE_REQUIRED").test("fileSize","ERROR.FILE_SIZE",(e=>{if(e){const t=e,{size:n}=t;return n<=1024**3*5}return!!e})).test("fileDuration","ERROR.FILE_DURATION",(async e=>{if(e){const t=e,n=new Audio(URL.createObjectURL(t));return n.load(),await new Promise((e=>n.addEventListener("loadedmetadata",e))),n.duration>=3}return!!e}))}).defined(),C=e=>{var t;let{storeKey:n,previousStep:i,nextStep:f,metadata:C}=e;const{Portal:w}=c()({bindTo:document&&document.getElementById("wizard-buttons")}),{setDoGoBack:x,setTitle:j,setSubtitle:y,setType:k}=Object(b.a)(),E=Object(a.g)(),{state:S,actions:R}=Object(l.c)({updateAction:Object(m.a)(n)}),{control:T}=Object(s.c)({mode:"onChange",defaultValues:null===S||void 0===S||null===(t=S[n])||void 0===t?void 0:t[null===C||void 0===C?void 0:C.currentLogic],resolver:Object(d.a)(O)}),{t:L}=Object(u.a)(),[P,_]=o.a.useState(!0),[F,M]=o.a.useState(""),$=Object(r.useRef)(null),B=o.a.useCallback((e=>{f&&(R.updateAction({[null===C||void 0===C?void 0:C.currentLogic]:{recordingFile:null,uploadedFile:e}}),_(!1),E.push(f,{from:"step-manual-upload"}))}),[f,R,C,E]),I=o.a.useCallback((()=>{_(!1),i?E.push(i):E.goBack()}),[E,i]),z=o.a.useCallback((e=>{O.validate({uploadedFile:e}).then((()=>{B(e)})).catch((e=>{"ERROR.FILE_SIZE"===e.errors[0]&&M(L("recordingsRecordManual:fileSizeTooBig")),"ERROR.FILE_REQUIRED"===e.errors[0]?M(L("recordingsRecordManual:fileRequired")):M(L("recordingsRecordManual:fileDurationTooShort"))}))}),[B,L]);return Object(r.useEffect)((()=>{Object(v.a)(),j(L("recordingsRecordManual:header")),y(""),k("shapeUp"),x((()=>I))}),[I,x,k,y,j,L]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(h.MainContainer,{children:[Object(g.jsx)(h.Title,{children:L("recordingsRecordManual:micError")}),Object(g.jsx)(h.CloudsSVG,{}),Object(g.jsx)(s.a,{control:T,name:"uploadedFile",render:e=>{let{name:t}=e;return Object(g.jsxs)(h.UploadContainer,{children:[Object(g.jsx)(h.UploadButton,{htmlFor:"uploaded-file"}),Object(g.jsx)(h.ArrowUp,{}),Object(g.jsx)(h.UploadInput,{ref:$,id:"uploaded-file",type:"file",name:t,accept:"audio/wav,audio/wave,audio/wav,audio/x-wav,audio/x-pn-wav,audio/mp3,audio/ogg",onChange:e=>{var t;return z(null===(t=e.currentTarget.files)||void 0===t?void 0:t[0])}})]})}})]}),Object(g.jsx)(h.TextErrorContainer,{children:F}),P&&Object(g.jsx)(w,{children:Object(g.jsx)(p.a,{invert:!0,leftLabel:L("recordingsRecordManual:uploadFile"),leftHandler:()=>{var e;return null===(e=$.current)||void 0===e?void 0:e.click()}})})]})};t.default=o.a.memo(C)}}]);
//# sourceMappingURL=25.061cd3a2.chunk.js.map