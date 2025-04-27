(this["webpackJsonppwa-demo"]=this["webpackJsonppwa-demo"]||[]).push([[16,32],{274:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a(6),r=a.n(n),c=a(81),o=a(348),s=a(16),i=a(221),p=a(217);var l=p.default.div`
  @media screen and (${e=>e.theme.breakpoints.tablet}){
    margin: auto;

    max-width: 768px;
    width: 100%;
  }
`;const d=p.default.div`
  display: flex;
  flex-direction:column;

  height:100%;
`,u=p.default.div`
  height: 100%;
`,h=p.default.div`
  margin-bottom: 16px;
`;var m=a(46);const b=Object(c.a)((e=>{let{container:t}=e;return a(290)(`./${t}`)}),{fallback:Object(m.jsx)("div",{children:"Loading ..."}),cacheKey:e=>{let{container:t}=e;return t}});const j=e=>{let{steps:t,children:a}=e;const n=Object(s.i)(),c=Object(s.h)(),[p,j]=r.a.useState(!1),x=r.a.useMemo((()=>{const e=n.url.replace(/\/$/,"");return t.map((t=>e+t.path))}),[n.url,t]);return r.a.useEffect((()=>{j(!0)}),[]),Object(m.jsx)(i.a,{children:Object(m.jsxs)(d,{children:[Object(m.jsx)(u,{children:p&&Object(m.jsx)(o.a,{location:c,timing:"ease-in-out",duration:500,pathList:x,children:t.map((e=>Object(m.jsx)(s.b,{exact:!0,path:Array.isArray(e.path)?e.path.map((e=>n.path+e)):n.path+e.path,render:()=>Object(m.jsx)(l,{children:Object(m.jsx)(b,{container:e.componentPath,...e.props})})},e.componentPath)))})}),Object(m.jsx)(h,{id:"wizard-buttons",children:a})]})})};var x=r.a.memo(j)},312:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a.n(n),c=a(221),o=a(16),s=a(274),i=a(217);const p=i.default.ul`
  display: flex;
  justify-content:center;
  padding: 0;
  margin-bottom: 22px;

 @media screen and (${e=>e.theme.breakpoints.tablet}){
    margin-bottom: 40px;
  }
`,l=i.default.li`
  background-color: ${e=>e.theme.colors.gray};
  border-radius: 50%;
  display: inline-block;

  height: 7px;
  width: 7px;

  &:not(:first-of-type){
    margin-left: 6px;
  };

  &.active {
    background-color: ${e=>e.theme.colors.darkBlack};
  };

`;var d=a(46);const u=e=>{let{className:t="",current:a,total:n}=e;const c=r.a.useMemo((()=>{const e=[];for(let t=0;t<n;t+=1)e.push(Object(d.jsx)(l,{className:t===a?"active":"",id:`WelcomeStepButton-${t}`},`WelcomeStepButton-${t}`));return e}),[a,n]);return Object(d.jsx)(p,{className:t,children:c})};var h=r.a.memo(u);const m="welcome";Object(c.b)({[m]:{}},{name:"VirufyWizard",middleWares:[],storageType:window.localStorage});const b="/welcome",j=[{path:"/",componentPath:"Welcome/Step2",props:{storeKey:m,previousStep:`${b}`,nextStep:`${b}/step-3`}}],x=[{path:"/step-3",componentPath:"Welcome/Step3",props:{storeKey:m,previousStep:`${b}/step-2`,nextStep:"/submit-steps/step-record/cough"}}],f=()=>{const e=Object(o.h)(),t=Object(o.i)(),a=e.pathname.replace(t.url,""),n=x.findIndex((e=>e.path===a));return Object(d.jsx)(s.a,{steps:[...j,...x],children:n>=0&&Object(d.jsx)(h,{current:n,total:x.length})})};t.default=r.a.memo(f)},347:function(e,t,a){"use strict";a.r(t);var n=a(312);a.d(t,"default",(function(){return n.default}))}}]);
//# sourceMappingURL=16.2911a3b2.chunk.js.map