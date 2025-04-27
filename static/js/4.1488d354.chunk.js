(this["webpackJsonppwa-demo"]=this["webpackJsonppwa-demo"]||[]).push([[4,27],{228:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));var i=n(217),o=n(219);const a=i.css`
  font-family: 'Source Sans Pro';
  font-size: 0.875rem;
  line-height: 20px;
`,r=i.default.div`
  ${a}
  color: ${e=>{let{dark:t}=e;return t?o.a.darkBlack:o.a.black}};
  ${e=>e.fontSize?`font-size: ${e.fontSize};`:""}
`,s=i.default.div`
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 24px;
  line-height: 1;
  color: ${o.a.darkBlack};
`},232:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var i=n(6),o=n.n(i),a=n(217),r=n(219);const s=a.default.button`
  height: 52px;
  border-radius: 15px; 
  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */
  font-weight: bold;
  font-size: 14px;
  font-weight: bold;
  width: 100%;

  ${e=>{let{dark:t,disabled:n}=e;const i=n?r.a.purple_50:r.a.purple;return t?`\n    background-color: ${i};\n    color: ${r.a.white};\n    border: none;\n  `:`\n    background-color: ${r.a.white};\n    color: ${i};\n    border: 1px solid ${i};\n  `}}
`;var c=n(46);var d=o.a.memo((e=>{let{children:t,...n}=e;return Object(c.jsx)(s,{type:"button",...n,children:t})}))},235:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var i=n(6),o=n.n(i),a=n(232);const r=n(217).default.div`
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
`;var s=n(46);const c=o.a.memo((e=>{let{invert:t=!1,leftLabel:n,leftDisabled:i,leftHandler:o,rightLabel:c,rightDisabled:d,rightHandler:l}=e;return Object(s.jsxs)(r,{children:[Object(s.jsx)(a.a,{dark:t,disabled:i,onClick:o,children:n}),c&&l&&Object(s.jsx)(a.a,{dark:!t,disabled:d,onClick:l,children:c})]})}));var d=o.a.memo(c)},258:function(e,t,n){"use strict";n.r(t);var i=n(6),o=n.n(i),a=n(237),r=n.n(a),s=n(963),c=n(272),d=n(284),l=n(285),u=n(944),h=n.n(u),p=function(){let e=[];this.onmessage=t=>{"encode"===t.data[0]?function(t){const{length:n}=t,i=new Uint8Array(2*n*1);for(let e=0;e<n;e+=1){const n=2*e*1;let o=t[e];o>1?o=1:o<-1&&(o=-1),o*=32768,i[n]=o,i[n+1]=o>>8}e.push(i)}(t.data[1]):"dump"===t.data[0]?function(t){const n=e.length?e[0].length:0,i=e.length*n,o=new Uint8Array(44+i),a=new DataView(o.buffer);a.setUint32(0,1380533830,!1),a.setUint32(4,36+i,!0),a.setUint32(8,1463899717,!1),a.setUint32(12,1718449184,!1),a.setUint32(16,16,!0),a.setUint16(20,1,!0),a.setUint16(22,1,!0),a.setUint32(24,t,!0),a.setUint32(28,1*t*2,!0),a.setUint16(32,2,!0),a.setUint16(34,16,!0),a.setUint32(36,1684108385,!1),a.setUint32(40,i,!0);for(let s=0;s<e.length;s+=1)o.set(e[s],s*n+44);e=[];const r=[o.buffer];postMessage(r,[r[0]])}(t.data[1]):"close"===t.data[0]&&this.close()}},m=function(){let e=null;const t=1152;let n=[];function i(e){const t=new Float32Array(e),n=new Int16Array(e.length);return function(e,t){for(let n=0;n<e.length;n+=1){const i=Math.max(-1,Math.min(1,e[n]));t[n]=i<0?32768*i:32767*i}}(t,n),n}onmessage=function(o){var a;"encode"===o.data[0]?function(o){const a=i(o);let r=a.length;for(let i=0;r>=0;i+=t){const o=a.subarray(i,i+t),s=e.encodeBuffer(o);n.push(s),r-=t}}(o.data[1]):"dump"===o.data[0]?function(){const t=e.flush();t.length>0&&n.push(t),postMessage(n),n=[]}(o.data[1]):"init"===o.data[0]?(a=o.data[1],importScripts(a.baseUrl+"/workers/encoders/lame.min.js"),e=new lamejs.Mp3Encoder(1,a.sampleRate,128)):"close"===o.data[0]&&this.close()}},f=function(){let e;importScripts("/UPDATEDURDUVIRU/workers/encoders/libflac.dev.js");let t=1,n=44100,i=5,o=16,a=1,r=0;const s=[];let c=!1;const d=[];function l(e,t){s.push(e),r+=e.byteLength}function u(){if(e=Flac.init_libflac_encoder(n,t,o,i,0),0!==e){const t=Flac.init_encoder_stream(e,l);a&=0==t,console.log(`flac init     : ${a}`),console.log(`status encoder: ${t}`),c=!0}else console.error("Error initializing the encoder.")}function h(n){const i=n.length,o=new Uint32Array(i),a=new DataView(o.buffer);let r=0;for(let e=0;e<i;e+=1)a.setInt32(r,32767*n[e],!0),r+=4;const s=Flac.FLAC__stream_encoder_process_interleaved(e,o,o.length/t);1!=s&&console.log(`Error: encode_buffer_pcm_as_flac returned false. ${s}`)}function p(e,t){const n=function(e,t){const n=new Uint8Array(t);let i=0;const o=e.length;for(let a=0;a<o;a+=1){const t=e[a];n.set(t,i),i+=t.length}return n}(e,t);return new Blob([n],{type:"audio/flac"})}this.onmessage=function(l){if("init"===l.data[0])!function(e){let a=e;a||(a={bps:o,channels:t,samplerate:n,compression:i}),a.channels=a.channels?a.channels:t,a.samplerate=a.samplerate?a.samplerate:n,a.bps=a.bps?a.bps:o,a.compression=a.compression?a.compression:i,i=a.compression,o=a.bps,n=a.samplerate,t=a.channels,Flac.isReady()?u():Flac.onready=function(){setTimeout((()=>{u()}),0)}}(l.data[1]);else if("encode"===l.data[0])!function(e){if(Flac.isReady()){if(d.length>0){const e=d.length,t=d.splice(0,e);for(let n=0;n<e;++n)h(t[n])}h(e)}else d.push(e),console.info("buffered audio data for Flac encdoing")}(l.data[1]);else if("dump"===l.data[0]){let t;Flac.isReady()?(a&=Flac.FLAC__stream_encoder_finish(e),console.log(`flac finish: ${a}`),t=p(s,r),Flac.FLAC__stream_encoder_delete(e)):console.error("Flac was not initialized: could not encode data!"),s.splice(0,s.length),r=0,d.splice(0,d.length),postMessage(t),c=!1}}};class g{constructor(e){this.cleanup=()=>{this.config.onRecording&&this.em.removeEventListener("recording",this.recordingFn),this.config.onAudioProcesss&&this.em.removeEventListener("onaudioprocess",this.onAudioProcessFn)},this.createWorker=e=>{const t=e.toString().replace(/^function\s*\(\)\s*{/,"").replace(/}$/,""),n=new Blob([t]);return new Worker(URL.createObjectURL(n))},this.startRecording=e=>{if("inactive"!==this.state)return;if(!navigator||!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)return;if(this.audioCtx=new AudioContext({sampleRate:this.config.sampleRate}),this.micGainNode=this.audioCtx.createGain(),this.outputGainNode=this.audioCtx.createGain(),this.config.createDynamicsCompressorNode&&(this.dynamicsCompressorNode=this.audioCtx.createDynamicsCompressor()),this.config.createAnalyserNode&&(this.analyserNode=this.audioCtx.createAnalyser()),(this.config.forceScriptProcessor||this.config.broadcastAudioProcessEvents||!this.config.usingMediaRecorder)&&(this.processorNode=this.audioCtx.createScriptProcessor(this.config.processorBufferSize,1,1)),this.audioCtx.createMediaStreamDestination?this.destinationNode=this.audioCtx.createMediaStreamDestination():this.destinationNode=this.audioCtx.destination,!this.config.usingMediaRecorder){if("mp3"===this.config.manualEncoderId){this.encoderWorker=this.createWorker(m);const e="/UPDATEDURDUVIRU";this.encoderWorker.postMessage(["init",{baseUrl:e,sampleRate:this.audioCtx.sampleRate}]),this.encoderMimeType="audio/mpeg"}else"flac"===this.config.manualEncoderId?(this.encoderWorker=this.createWorker(f),this.encoderWorker.postMessage(["init",{sampleRate:this.audioCtx.sampleRate}]),this.encoderMimeType="audio/flac"):(this.encoderWorker=this.createWorker(p),this.encoderMimeType="audio/wav");this.encoderWorker.addEventListener("message",(e=>{const t=new Event("dataavailable");"ogg"===this.config.manualEncoderId||"flac"===this.config.manualEncoderId?t.data=e.data:t.data=new Blob(e.data,{type:this.encoderMimeType}),this._onDataAvailable(t)}))}const t={audio:{echoCancellation:this.config.enableEchoCancellation}};return this.config.deviceId&&(t.audio.deviceId=this.config.deviceId),navigator.mediaDevices.getUserMedia(t).then((t=>{this._startRecordingWithStream(t,e)})).catch((e=>{console.log(e)}))},this.setMicGain=e=>{this.config.micGain=e,this.audioCtx&&this.micGainNode&&this.micGainNode.gain.setValueAtTime(e,this.audioCtx.currentTime)},this._startRecordingWithStream=(e,t)=>{this.micAudioStream=e,this.inputStreamNode=this.audioCtx.createMediaStreamSource(this.micAudioStream),this.audioCtx=this.inputStreamNode.context,this.onGraphSetupWithInputStream&&this.onGraphSetupWithInputStream(this.inputStreamNode),this.inputStreamNode.connect(this.micGainNode),this.micGainNode.gain.setValueAtTime(this.config.micGain,this.audioCtx.currentTime);let n=this.micGainNode;this.dynamicsCompressorNode&&(this.micGainNode.connect(this.dynamicsCompressorNode),n=this.dynamicsCompressorNode),this.state="recording",this.processorNode?(n.connect(this.processorNode),this.processorNode.connect(this.outputGainNode),this.processorNode.onaudioprocess=e=>this._onAudioProcess(e)):n.connect(this.outputGainNode),this.analyserNode&&n.connect(this.analyserNode),this.outputGainNode.connect(this.destinationNode),this.config.usingMediaRecorder?(this.mediaRecorder=new MediaRecorder(this.destinationNode.stream,{mimeType:this.encoderMimeType||"audio/wav"}),this.mediaRecorder.addEventListener("dataavailable",(e=>this._onDataAvailable(e))),this.mediaRecorder.addEventListener("error",(e=>this._onError(e))),this.mediaRecorder.start(t)):(this.outputGainNode.gain.setValueAtTime(0,this.audioCtx.currentTime),t&&(console.log("Time slicing without MediaRecorder is not yet supported. The resulting recording will not be playable."),this.slicing=setInterval((function(){"recording"===this.state&&this.encoderWorker.postMessage(["dump",this.context.sampleRate])}),t)))},this._onAudioProcess=e=>{this.config.broadcastAudioProcessEvents&&this.em.dispatchEvent(new CustomEvent("onaudioprocess",{detail:{inputBuffer:e.inputBuffer,outputBuffer:e.outputBuffer}})),this.config.usingMediaRecorder||"recording"===this.state&&(this.config.broadcastAudioProcessEvents?this.encoderWorker.postMessage(["encode",e.outputBuffer.getChannelData(0)]):this.encoderWorker.postMessage(["encode",e.inputBuffer.getChannelData(0)]))},this.stopRecording=()=>{"inactive"!==this.state&&(this.config.usingMediaRecorder?(this.state="inactive",this.mediaRecorder.stop()):(this.state="inactive",this.encoderWorker.postMessage(["dump",this.audioCtx.sampleRate]),clearInterval(this.slicing)))},this._onDataAvailable=e=>{if(this.chunks.push(e.data),this.chunkType=e.data.type,"inactive"!==this.state)return;const t=new Blob(this.chunks,{type:this.chunkType}),n=URL.createObjectURL(t),i={ts:(new Date).getTime(),blobUrl:n,mimeType:t.type,size:t.size};this.chunks=[],this.chunkType=null,this.destinationNode&&(this.destinationNode.disconnect(),this.destinationNode=null),this.outputGainNode&&(this.outputGainNode.disconnect(),this.outputGainNode=null),this.analyserNode&&(this.analyserNode.disconnect(),this.analyserNode=null),this.processorNode&&(this.processorNode.disconnect(),this.processorNode=null),this.encoderWorker&&(this.encoderWorker.postMessage(["close"]),this.encoderWorker=null),this.dynamicsCompressorNode&&(this.dynamicsCompressorNode.disconnect(),this.dynamicsCompressorNode=null),this.micGainNode&&(this.micGainNode.disconnect(),this.micGainNode=null),this.inputStreamNode&&(this.inputStreamNode.disconnect(),this.inputStreamNode=null),this.config.stopTracksAndCloseCtxWhenFinished&&(this.micAudioStream.getTracks().forEach((e=>e.stop())),this.micAudioStream=null,this.audioCtx.close(),this.audioCtx=null),this.em.dispatchEvent(new CustomEvent("recording",{detail:{recording:i}}))},this._onError=e=>{console.log("error",e),this.em.dispatchEvent(new Event("error"))},window.AudioContext=window.AudioContext||window.webkitAudioContext,this.em=document.createDocumentFragment(),this.state="inactive",this.chunks=[],this.chunkType="",this.encoderMimeType="audio/wav",this.config={broadcastAudioProcessEvents:void 0!==e.broadcastAudioProcessEvents&&e.broadcastAudioProcessEvents,createAnalyserNode:void 0!==e.createAnalyserNode&&e.createAnalyserNode,createDynamicsCompressorNode:void 0!==e.createDynamicsCompressorNode&&e.createDynamicsCompressorNode,forceScriptProcessor:void 0!==e.forceScriptProcessor&&e.forceScriptProcessor,manualEncoderId:void 0!==e.manualEncoderId?e.manualEncoderId:"wav",micGain:void 0!==e.micGain?e.micGain:1,processorBufferSize:void 0!==e.processorBufferSize?e.processorBufferSize:2048,stopTracksAndCloseCtxWhenFinished:void 0===e.stopTracksAndCloseCtxWhenFinished||e.stopTracksAndCloseCtxWhenFinished,usingMediaRecorder:void 0!==e.usingMediaRecorder?e.usingMediaRecorder:"undefined"!==typeof window.MediaRecorder,enableEchoCancellation:void 0===e.enableEchoCancellation||e.enableEchoCancellation,sampleRate:void 0!==e.sampleRate?e.sampleRate:44100,onRecording:e.onRecording,onAudioPress:e.onAudioPress},e.onRecording&&(this.recordingFn=t=>e.onRecording(t),this.em.addEventListener("recording",this.recordingFn)),e.onAudioProcesss&&(this.onAudioProcessFn=t=>e.onAudioProcesss(t),this.em.addEventListener("onaudioprocess",this.onAudioProcessFn))}}var b=n(389),x=n(390),v=n(951),y=n.n(v),j=n(232),C=n(217);const w=C.default.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    margin: auto;
`,R=C.default.div`
  font-family: 'Biko';
  font-size: 30px;
  line-height: 30px;
  margin-bottom: 10px;
  font-weight: 600;
`,k=C.default.div`
  font-family: 'Source Sans Pro';
  text-align: center;
  line-height: 25px;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 30px;
`;var S=n(46);y.a.setAppElement("#root");var N=o.a.memo((e=>{let{modalTitle:t,children:n,onConfirm:i,...o}=e;const{t:a}=Object(s.a)();return Object(S.jsx)(y.a,{...o,style:{content:{height:"281px",maxWidth:"348px",margin:"auto",borderRadius:"10px",border:"none"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.5)"}},children:Object(S.jsxs)(w,{className:"ModalBody",children:[Object(S.jsx)(R,{children:t}),Object(S.jsx)(k,{children:n}),Object(S.jsx)(j.a,{onClick:i,dark:!0,children:a("recordingsIntroduction:retryButton","Retry")})]})})})),E=n.p+"static/media/start.e0d4d3a6.svg",O=n(333),A=n(219);const M=C.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`,T=C.default.div`
  display:flex;
  justify-content: space-between;
  width: 144px;
  margin: auto;
`,U=C.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,B=C.default.p`
  font-size: 14px;
  color: ${A.a.lightDarkGray};
  margin-top: 8px;
  margin-bottom: 0px;
`,F=C.default.button`
  background-color: ${A.a.purple};
  width: 56px;
  height: 56px;
  position: relative;
  outline: none !important;
  border: none;
  border-radius: 50%;
  padding: 0;
  transition: background-color 0.25s;
  opacity: ${e=>e.disabled||e.opacity?"0.5":"1"};

  @supports not (-webkit-touch-callout: none) {
    /* CSS for other than iOS devices */
    -webkit-tap-highlight-color: transparent;
  }

  &:active {
    background-color: ${A.a.purple};
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: transparent;
    z-index: 1;
    border-radius: 50%;
  }

  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    width: 66px;
    height: 66px;
  }
`,D=C.default.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.25s;
`,$=Object(C.default)(D)`
  width: 27px;
  height: 27px;
`,I=Object(C.default)(D)`
  width: 15px;
  height: 15px;
`,P=C.default.div`
  width: 70px;
  height: 41px;
  font-size: 1.25rem;
  color: ${A.a.purple};
  font-weight: bold;
  font-family: 'Source Sans Pro';
  border: 1px solid ${A.a.purple};
  border-radius: 15px;
  display: flex; 
  align-items: center; 
  justify-content: center; 
  margin-bottom: 28px;

  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    font-size: 1.75rem;
    margin-top: 22px;
  }
`,L=C.default.div`
  font-size: 16px;
  line-height: 20px;
  color: ${A.a.red};
  font-family: 'Source Sans Pro';
  display: flex; 
  margin-left: 20px;
  margin-top:10px;
`,_=C.default.p`
  visibility: ${e=>e.show?"flex":"hidden"};
`,z={usingMediaRecorder:!1,sampleRate:48e3,manualEncoderId:"wav",processorBufferSize:2048},G=e=>{let{className:t="",maxTimeInSeconds:n=30,onNewRecord:i,delay:a=500,recordingFile:r}=e;const{t:c}=Object(s.a)(),d=o.a.useRef(),l=o.a.useRef(0),u=o.a.useRef(),p=o.a.useRef(),m=o.a.useRef(),[f,v]=o.a.useState(!0),[y,j]=o.a.useState(),[C,w]=o.a.useState(!1),[R,k]=o.a.useState(!1),[A,D]=o.a.useState(!1),G=o.a.useCallback((e=>{l.current+=1;const{inputBuffer:t,outputBuffer:n}=e.detail;for(let i=0;i<n.numberOfChannels;i+=1){const e=t.getChannelData(i),o=n.getChannelData(i);for(let n=0;n<t.length;n+=1)o[n]=e[n]}}),[]),W=o.a.useCallback((async e=>{const{detail:t}=e,{recording:n}=t,o=await fetch(n.blobUrl).then((e=>e.blob())),a=`Filename.${z.manualEncoderId}`,r=b.a.blobToFile(o,a),s=b.a.sizeAsHuman(r.size,!0);i(r,s)}),[i]);o.a.useEffect((()=>{d.current=new g({...z,onRecording:W,onAudioProcesss:G});const e={audio:{echoCancellation:d.current.config.enableEchoCancellation}};if(navigator.mediaDevices.getUserMedia(e).then((()=>{v(!0)})).catch((()=>{v(!1)})),r){const e=r;if(e.size){const t=new Audio(URL.createObjectURL(e));t.load();const n=async()=>{t.removeEventListener("loadedmetadata",n),Object(x.a)(t,!0).then((e=>{var t;null===(t=u.current)||void 0===t||t.setTime(1e3*e)}))};t.addEventListener("loadedmetadata",n)}}return()=>{d.current&&d.current.cleanup()}}),[]);const V=o.a.useCallback((()=>{d.current&&(l.current=0,d.current.startRecording().then((()=>{var e;(j(!0),k(!1),u.current)&&(u.current.reset(),null===(e=u.current)||void 0===e||e.setTime(0),u.current.start())})).catch((e=>console.error("ERROR",e))))}),[]),H=o.a.useCallback((()=>{d.current&&(d.current.stopRecording(),j(!1),u.current&&(u.current.getTime()/1e3<2&&k(!0),u.current.stop()))}),[]),Z=o.a.useCallback((e=>e<10?`0${e}`:e),[]),J=e=>{"touches"in e||e.preventDefault()},Y=o.a.useCallback((e=>{e.target&&(e.target.addEventListener("touchend",J,{passive:!1}),m.current=e.target),p.current=setTimeout((()=>{w(!0),D(!0),k(!1)}),a)}),[a]),q=o.a.useCallback((()=>{p.current&&clearTimeout(p.current),A&&w(!1),D(!1),m.current&&m.current.removeEventListener("touchend",J)}),[A]);return Object(S.jsxs)(M,{className:t,children:[Object(S.jsxs)(L,{children:[!R&&Object(S.jsx)(_,{show:C,children:c(y?"recordingsIntroduction:releaseButtonStop":"recordingsIntroduction:releaseButtonStart")}),Object(S.jsx)(N,{isOpen:R,modalTitle:"Oops.",onConfirm:V,children:c("recordingsIntroduction:shortRecording")})]}),Object(S.jsx)(P,{children:Object(S.jsxs)(h.a,{ref:u,startImmediately:!1,checkpoints:[{time:1e3*n,callback:H}],children:[Object(S.jsx)(h.a.Minutes,{}),":",Object(S.jsx)(h.a.Seconds,{formatValue:Z})]})}),Object(S.jsxs)(T,{children:[Object(S.jsxs)(U,{children:[Object(S.jsx)(F,{disabled:!f||y,onClick:V,onMouseDown:Y,onMouseUp:q,onTouchStart:Y,onTouchEnd:q,onMouseLeave:q,children:Object(S.jsx)($,{src:E,alt:"Start"})}),Object(S.jsx)(B,{children:c("recordingsIntroduction:recordCough.record")})]}),Object(S.jsxs)(U,{children:[Object(S.jsx)(F,{disabled:!f||!y,onClick:H,onMouseDown:Y,onMouseUp:q,onTouchStart:Y,onTouchEnd:q,onMouseLeave:q,children:Object(S.jsx)(I,{src:O.a,alt:"Stop"})}),Object(S.jsx)(B,{children:c("recordingsIntroduction:recordCough.stop")})]})]})]})};var W=o.a.memo(G),V=n(235),H=n.p+"static/media/upload.21eec1c7.svg",Z=n(334);const J=l.b({recordingFile:l.a().required("ERROR.FILE_REQUIRED").test("fileSize","ERROR.FILE_SIZE",(e=>{if(e){const t=e,{size:n}=t;return n<=1024**3*5}return!!e})).test("fileDuration","ERROR.FILE_DURATION",(async e=>{if(e){const t=e,n=new Audio(URL.createObjectURL(t));n.load(),await new Promise((e=>n.addEventListener("loadedmetadata",e)));return await new Promise((e=>{n.duration!==1/0&&e(n.duration),n.addEventListener("durationchange",(()=>{n.remove(),e(n.duration)})),n.volume=0,n.currentTime=86400,n.play()}))>=2}return!!e}))}).defined(),Y=e=>{let{onNext:t,onManualUpload:n,defaultValues:i,currentLogic:a,action:l}=e;const{Portal:u}=r()({bindTo:document&&document.getElementById("wizard-buttons")}),{handleSubmit:h,control:p,getValues:m,formState:f}=Object(c.c)({mode:"onChange",defaultValues:i,resolver:Object(d.a)(J)}),{t:g}=Object(s.a)(),{isValid:b}=f,x=o.a.useRef(1);return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(Z.MainContainer,{children:[Object(S.jsx)(Z.MicContainer,{children:Object(S.jsx)(c.a,{control:p,name:"recordingFile",render:e=>{let{onChange:t}=e;return Object(S.jsx)(W,{onNewRecord:t,recordingFile:null===i||void 0===i?void 0:i.recordingFile},x.current)}})}),Object(S.jsxs)(u,{children:[Object(S.jsx)(V.a,{invert:!0,leftLabel:g("recordingsRecord:next"),leftDisabled:!b,leftHandler:h(t)}),Object(S.jsxs)(Z.UploadContainer,{onClick:()=>{l({[a]:{recordingFile:m("recordingFile")||null,uploadedFile:null}}),null===n||void 0===n||n()},children:[Object(S.jsx)(Z.UploadImage,{src:H}),Object(S.jsx)(Z.UploadText,{children:g("recordingsRecord:upload")})]})]})]})})};t.default=o.a.memo(Y)},333:function(e,t,n){"use strict";t.a=n.p+"static/media/stop.e6f44abd.svg"},334:function(e,t,n){"use strict";n.r(t),n.d(t,"MainContainer",(function(){return s})),n.d(t,"Text",(function(){return c})),n.d(t,"MicContainer",(function(){return d})),n.d(t,"UploadContainer",(function(){return l})),n.d(t,"UploadImage",(function(){return u})),n.d(t,"UploadText",(function(){return h})),n.d(t,"StopImg",(function(){return p}));var i=n(217),o=n(228),a=n(219),r=n(333);const s=i.default.div`
  padding: 0px 0px;
`,c=Object(i.default)(o.b)`
  color: ${e=>e.theme.colors.darkBlack};
  margin-bottom: 2px;
  text-align: left;

  @media screen and (${e=>e.theme.breakpoints.tablet}){
    max-width: 470px;
    margin: 0 auto;
    font-size: 16px;
  }

  @media screen and (${e=>e.theme.breakpoints.tablet}){
    @media (orientation: portrait) {
      margin-bottom: 248px;
    }

    @media (orientation: landscape) {
      margin-bottom: 24px;
    }
  }
`,d=i.default.div``,l=i.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  margin: 20px auto;
  width: fit-content;


  @media screen and (${e=>e.theme.breakpoints.tablet}){
    padding: 0px 22px;
    margin: 22px auto;
  }
`,u=i.default.img`
  cursor: pointer;
  width: 13px;
  height: 12px;
  margin-right: 7px;
`,h=i.default.div`
  cursor: pointer;
  font-family: Source Sans Pro;
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 24px;
  color: ${a.a.darkBlack};
`,p=i.default.img.attrs((()=>({src:r.a})))`
  display: inline;
  height: 10px;
  margin: 0px 2px 4px;
`},389:function(e,t,n){"use strict";t.a={sizeAsHuman:(e,t)=>{const n=t?1e3:1024;if(Math.abs(e)<n)return`${e} B`;const i=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"];let o=-1;do{e/=n,++o}while(Math.abs(e)>=n&&o<i.length-1);return`${e.toFixed(1)} ${i[o]}`},blobToFile:(e,t)=>{const n=e;return n.lastModifiedDate=new Date,n.name=t,e}}},390:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(469);function o(e,t){return new Promise((n=>{e.duration===1/0||i.isSafari&&!(i.isSafari&&e.duration>0)?(e.addEventListener("durationchange",(()=>{t?e.remove():(e.pause(),e.volume=1,e.currentTime=0),n(e.duration)})),e.currentTime=86400,e.play()):n(e.duration)}))}}}]);
//# sourceMappingURL=4.1488d354.chunk.js.map