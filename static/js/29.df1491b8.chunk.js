(this["webpackJsonppwa-demo"]=this["webpackJsonppwa-demo"]||[]).push([[29],{228:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return l}));var i=n(217),r=n(219);const a=i.css`
  font-family: 'Source Sans Pro';
  font-size: 0.875rem;
  line-height: 20px;
`,o=i.default.div`
  ${a}
  color: ${t=>{let{dark:e}=t;return e?r.a.darkBlack:r.a.black}};
  ${t=>t.fontSize?`font-size: ${t.fontSize};`:""}
`,l=i.default.div`
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 24px;
  line-height: 1;
  color: ${r.a.darkBlack};
`},336:function(t,e,n){"use strict";n.r(e),n.d(e,"MainContainer",(function(){return o})),n.d(e,"ImportantNote",(function(){return l})),n.d(e,"Subtitle",(function(){return d})),n.d(e,"PlayerContainer",(function(){return p})),n.d(e,"PlayerContainerTop",(function(){return u})),n.d(e,"PlayerPlayContainer",(function(){return f})),n.d(e,"PlayerPlayButton",(function(){return s})),n.d(e,"PlayerPlay",(function(){return c})),n.d(e,"PlayerCrossContainer",(function(){return m})),n.d(e,"PlayerCross",(function(){return x})),n.d(e,"PlayerTopMiddle",(function(){return h})),n.d(e,"PlayerFileName",(function(){return g})),n.d(e,"PlayerFileSize",(function(){return b})),n.d(e,"PlayerContainerBottom",(function(){return y})),n.d(e,"PlayerBottomTop",(function(){return w})),n.d(e,"PlayerBottomTrack",(function(){return k})),n.d(e,"PlayerBottomThumb",(function(){return $})),n.d(e,"PlayerBottomBottom",(function(){return P})),n.d(e,"PlayerTimeIndicator",(function(){return v}));var i=n(217),r=n(219),a=n(228);const o=i.default.div`
  margin-bottom: 77px;

  @media screen and (${t=>t.theme.breakpoints.tablet}) {
    max-width: 470px;
    margin-left: auto;
    margin-right: auto;
  }
`,l=i.default.span`
  font-family: "Source Sans Pro";
  font-size: 0.75rem;
  line-height: 1.42;
  font-weight: ${t=>{let{isBold:e}=t;return e?700:400}};
 
  display: block;
  max-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin: 52px auto;
  
  @media screen and (${t=>t.theme.breakpoints.tablet}) {
    max-width: 470px;
    margin-left: auto;
    margin-right: auto;
  }
`,d=i.default.h2`
  color: ${t=>{let{theme:e}=t;return e.colors.mineShaft}};
  font-size: 18px;
  font-family: "Source Sans Pro";
  margin-left: 20px;
  margin-top: 35px;
  text-align: left;
  white-space: pre-wrap;
  width: 100%;
  
  @media screen and (${t=>t.theme.breakpoints.tablet}) {
    align-text: center; 
    max-width: 592px;
    margin: 30px auto;
  }
`,p=i.default.div`
  display: flex;
  flex-direction: column;
  margin: 60px 20px 0px 20px;

  @media screen and (${t=>t.theme.breakpoints.tablet}) {
    max-width: 592px;
    margin: 0 auto;
  }
`,u=i.default.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 10px;
`,f=i.default.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 76px;
`,s=i.default.div`
  width: 108px;
  height: 108px;
  background-color: ${r.a.purple_10};
  border-radius: 50%;
  cursor: pointer;
  display: flex; 
  align-items: center; 
  justify-content: center; 
`,c=i.default.img`
  width: 33px;
  height: 40px;
`,m=i.default.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  width: 22px;
  padding-bottom: 22px;
  margin-right: -20px;
  padding-right: 20px;
  box-sizing: content-box;
  cursor: pointer;
`,x=i.default.img`
  width: 14px;
  height: 14px;
`,h=i.default.div`
  flex: 1;
`,g=Object(i.default)(a.b).attrs({dark:!0,fontSize:"1rem"})`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-align: left;
  font-size: 14px;

  @media screen and (${t=>t.theme.breakpoints.tablet}) {
    font-size: 1.5rem;
    line-height: 24px;
  }
`,b=Object(i.default)(a.b).attrs({dark:!0,fontSize:"0.625rem"})`
  text-align: left;
  color: ${t=>t.theme.colors.darkGray};

  @media screen and (${t=>t.theme.breakpoints.tablet}) {
    font-size: 0.875rem;
    line-height: 24px;
  }
`,y=i.default.div``,w=i.default.div`
  position: relative;
  margin-bottom: 4px;
`,k=i.default.div`
  position: relative;
  width: 100%;
  height: 4px;
  background-color: ${r.a.purple_10};

  &:after{
    content: '';
    position: absolute; 
    left: 0;
    height: 4px;
    background-color: ${r.a.purple};
    width: ${t=>t.progress?`${t.progress}%`:"0%"};
    ${t=>t.playing?"transition: width 0.2s linear;":""}

  }
`,$=i.default.div`
  position: absolute;
  top: -6px;
  left: ${t=>t.progress?`${t.progress}%`:"0px"};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${r.a.purple};
  transform: translateX(-50%);
  ${t=>t.playing?"transition: left 0.2s linear;":""}
`,P=i.default.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`,v=Object(i.default)(a.b).attrs({dark:!0,fontSize:"14px"})`
  opacity: 0.5;
  margin-top: 8px;
`}}]);
//# sourceMappingURL=29.df1491b8.chunk.js.map