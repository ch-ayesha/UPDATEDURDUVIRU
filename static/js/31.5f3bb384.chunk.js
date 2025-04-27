(this["webpackJsonppwa-demo"]=this["webpackJsonppwa-demo"]||[]).push([[31],{274:function(e,t,o){"use strict";o.d(t,"a",(function(){return j}));var r=o(6),a=o.n(r),c=o(81),n=o(348),s=o(16),i=o(221),p=o(217);var u=p.default.div`
  @media screen and (${e=>e.theme.breakpoints.tablet}){
    margin: auto;

    max-width: 768px;
    width: 100%;
  }
`;const d=p.default.div`
  display: flex;
  flex-direction:column;

  height:100%;
`,l=p.default.div`
  height: 100%;
`,h=p.default.div`
  margin-bottom: 16px;
`;var m=o(46);const b=Object(c.a)((e=>{let{container:t}=e;return o(290)(`./${t}`)}),{fallback:Object(m.jsx)("div",{children:"Loading ..."}),cacheKey:e=>{let{container:t}=e;return t}});const g=e=>{let{steps:t,children:o}=e;const r=Object(s.i)(),c=Object(s.h)(),[p,g]=a.a.useState(!1),j=a.a.useMemo((()=>{const e=r.url.replace(/\/$/,"");return t.map((t=>e+t.path))}),[r.url,t]);return a.a.useEffect((()=>{g(!0)}),[]),Object(m.jsx)(i.a,{children:Object(m.jsxs)(d,{children:[Object(m.jsx)(l,{children:p&&Object(m.jsx)(n.a,{location:c,timing:"ease-in-out",duration:500,pathList:j,children:t.map((e=>Object(m.jsx)(s.b,{exact:!0,path:Array.isArray(e.path)?e.path.map((e=>r.path+e)):r.path+e.path,render:()=>Object(m.jsx)(u,{children:Object(m.jsx)(b,{container:e.componentPath,...e.props})})},e.componentPath)))})}),Object(m.jsx)(h,{id:"wizard-buttons",children:o})]})})};var j=a.a.memo(g)},308:function(e,t,o){"use strict";o.r(t);var r=o(6),a=o.n(r),c=o(221),n=o(16),s=o(274),i=o(46);const p="submit-steps";Object(c.b)({[p]:{recordYourCough:{recordingFile:void 0,uploadedFile:void 0}}},{name:"VirufyWizard",middleWares:[],storageType:window.localStorage});const u="/submit-steps",d="SubmitSteps",l="RecordingsSteps",h="recordYourCough",m=[{path:"/step-record/cough",componentPath:`${d}/${l}/Introduction`,props:{storeKey:p,previousStep:"/welcome/step-3",nextStep:`${u}/step-listen/cough`,otherSteps:{manualUploadStep:`${u}/step-manual-upload/cough`},metadata:{currentLogic:h}}},{path:"/step-manual-upload/cough",componentPath:`${d}/${l}/RecordManualUpload`,props:{storeKey:p,previousStep:`${u}/step-record/cough`,nextStep:`${u}/step-listen/cough`,metadata:{currentLogic:h}}},{path:"/step-listen/cough",componentPath:`${d}/${l}/ListenAudio`,props:{storeKey:p,previousStep:`${u}/step-record/cough`,nextStep:`${u}/prediction-result`,metadata:{currentLogic:h}}},{path:"/prediction-result",componentPath:`${d}/Submission/PredictionResult`,props:{storeKey:p,previousStep:`${u}/step-record/cough`,nextStep:""}}],b=()=>{const{state:e}=Object(c.c)(),t=Object(n.g)();return a.a.useEffect((()=>{const o=(e=>{let t=null;if(e[p]){const{recordYourCough:o}=e[p],r=[];if(o){const{recordingFile:e,uploadedFile:t}=o;e&&r.push({file:e,route:"/step-record/cough"}),t&&r.push({file:t,route:"/step-manual-upload/cough"})}const a=r.find((e=>{return!(!(t=e.file)||void 0!==t.size);var t}));a&&(t=a.route)}return t})(e);o&&t.push(`/${p}${o}`)}),[]),null},g=()=>Object(i.jsx)(s.a,{steps:m,children:Object(i.jsx)(b,{})});t.default=a.a.memo(g)}}]);
//# sourceMappingURL=31.5f3bb384.chunk.js.map