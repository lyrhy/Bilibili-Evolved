!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["video/player/show-cover"]=o():e["video/player/show-cover"]=o()}(globalThis,(()=>(()=>{var e,o,t={63:(e,o,t)=>{var r=t(355)((function(e){return e[1]}));r.push([e.id,'.bpx-player-video-wrap::after,\n.bilibili-player-video::after {\n  position: absolute;\n  content: "";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: none;\n  background: black var(--cover-url) center no-repeat;\n  background-size: contain;\n  pointer-events: none;\n  z-index: 10;\n}\n\n.bpx-player-container.bpx-state-paused .bpx-player-video-wrap::after {\n  display: block;\n}\n\n.bilibili-player-area.video-state-pause .bilibili-player-video::after {\n  display: block;\n}',""]),e.exports=r},355:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var o=[];return o.toString=function(){return this.map((function(o){var t=e(o);return o[2]?"@media ".concat(o[2]," {").concat(t,"}"):t})).join("")},
// eslint-disable-next-line func-names
o.i=function(e,t,r){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var n={};if(r)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(n[a]=!0)}for(var p=0;p<e.length;p++){var l=[].concat(e[p]);r&&n[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),o.push(l))}},o}},443:(e,o,t)=>{var r=t(63);r&&r.__esModule&&(r=r.default),e.exports="string"==typeof r?r:r.toString()},77:e=>{"use strict";e.exports=coreApis.componentApis.video.videoInfo}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={id:e,exports:{}};return t[e](i,i.exports,n),i.exports}o=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(t,r){if(1&r&&(t=this(t)),8&r)return t;if("object"==typeof t&&t){if(4&r&&t.__esModule)return t;if(16&r&&"function"==typeof t.then)return t}var i=Object.create(null);n.r(i);var a={};e=e||[null,o({}),o([]),o(o)];for(var p=2&r&&t;"object"==typeof p&&!~e.indexOf(p);p=o(p))Object.getOwnPropertyNames(p).forEach((e=>a[e]=()=>t[e]));return a.default=()=>t,n.d(i,a),i},n.d=(e,o)=>{for(var t in o)n.o(o,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},n.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";n.d(i,{component:()=>a});const e=coreApis.componentApis.define,o=coreApis.observer,t=coreApis.utils,r=coreApis.utils.urls,a=(0,e.defineComponentMetadata)({name:"showCoverBeforePlay",displayName:"播放前显示封面",urlInclude:r.playerUrls,entry:async()=>{let e;const r=()=>document.documentElement.style.removeProperty("--cover-url"),i=await(0,t.isBwpVideo)()?BwpElement.prototype:HTMLVideoElement.prototype,a=dq(".bpx-player-video-wrap"),p=Boolean(a);(0,t.createHook)(i,"play",(()=>(r(),!0))),p&&(0,o.videoChange)((()=>{console.debug("isBpxPlayer");const e=dq(".bpx-player-video-wrap video");e?(0,t.createHook)(e,"play",(()=>(r(),!0))):console.warn("bpx player not found")}));(0,o.videoChange)((async o=>{let{aid:t}=o;if(!t)return void console.warn("[播放前显示封面] 未找到av号");if(t===e)return;e=t;const{VideoInfo:r}=await Promise.resolve().then(n.t.bind(n,77,23)),i=new r(t);await i.fetchInfo(),document.documentElement.style.setProperty("--cover-url",`url('${i.coverUrl}')`)}))},instantStyles:[{name:"showCoverBeforePlay",style:()=>Promise.resolve().then(n.t.bind(n,443,23))}],description:{"zh-CN":"在视频开始播放前, 在播放器中显示封面."},tags:[componentsTags.video],commitHash:"2bfc43d3a1410b04a7e4310eb990054f905b1a8d",coreVersion:"2.6.3"})})(),i=i.component})()));