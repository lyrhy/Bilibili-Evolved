!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["video/full-description"]=o():e["video/full-description"]=o()}(globalThis,(()=>(()=>{var e={247:(e,o,t)=>{var n=t(355)((function(e){return e[1]}));n.push([e.id,".video-desc .info,\n.video-desc .desc-info,\n.video-desc-v1 .desc-info,\n.play-up-info .play-up-self {\n  height: auto !important;\n}\n\n.video-desc .btn,\n.video-desc .toggle-btn,\n.video-desc-v1 .toggle-btn,\n.play-up-info .play-up-self-btn {\n  display: none !important;\n}",""]),e.exports=n},355:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var o=[];return o.toString=function(){return this.map((function(o){var t=e(o);return o[2]?"@media ".concat(o[2]," {").concat(t,"}"):t})).join("")},
// eslint-disable-next-line func-names
o.i=function(e,t,n){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(n)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var s=this[i][0];null!=s&&(r[s]=!0)}for(var a=0;a<e.length;a++){var d=[].concat(e[a]);n&&r[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),o.push(d))}},o}},508:(e,o,t)=>{var n=t(247);n&&n.__esModule&&(n=n.default),e.exports="string"==typeof n?n:n.toString()}},o={};function t(n){var r=o[n];if(void 0!==r)return r.exports;var i=o[n]={id:n,exports:{}};return e[n](i,i.exports,t),i.exports}t.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},t.d=(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o);var n={};return(()=>{"use strict";t.d(n,{component:()=>l});const e=coreApis.componentApis.define,o=coreApis.utils.urls,r=coreApis.observer,i=coreApis.spinQuery,s=coreApis.style;var a=t(508),d=t.n(a);const c="fullVideoDescription",p=()=>{(0,s.addStyle)(d(),c),(0,r.videoChange)((async()=>{const e=await(0,i.select)(".video-desc, .video-desc-v1");if(!e)return;(await(0,i.sq)((()=>dq(e,'[report-id="abstract_spread"], .toggle-btn')),(e=>e&&"none"!==e.style.display)))?.click()}))},l=(0,e.defineComponentMetadata)({name:c,entry:p,reload:p,unload:()=>{(0,s.removeStyle)(c)},displayName:"展开视频简介",tags:[componentsTags.video,componentsTags.style],description:{"zh-CN":"总是展开完整的视频简介."},urlInclude:o.videoAndBangumiUrls,commitHash:"2bfc43d3a1410b04a7e4310eb990054f905b1a8d",coreVersion:"2.6.3"})})(),n=n.component})()));