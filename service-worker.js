if(!self.define){let e,s={};const o=(o,r)=>(o=new URL(o+".js",r).href,s[o]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=s,document.head.appendChild(e)}else e=o,importScripts(o),s()})).then((()=>{let e=s[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(r,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const t=e=>o(e,i),l={module:{uri:i},exports:c,require:t};s[i]=Promise.all(r.map((e=>l[e]||t(e)))).then((e=>(n(...e),c)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue-project1"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.8ed5bd5c.css",revision:null},{url:"/css/chunk-vendors.0ba11049.css",revision:null},{url:"/fonts/bootstrap-icons.35e09da2.woff2",revision:null},{url:"/fonts/bootstrap-icons.cb4c7c05.woff",revision:null},{url:"/index.html",revision:"9eeec18c68873d63c9e825f2285a2f6a"},{url:"/js/app.cf759a00.js",revision:null},{url:"/js/chunk-vendors.cf9ee581.js",revision:null},{url:"/manifest.json",revision:"7774a26111dad591880a7e63255f4acb"},{url:"/photofilter.css",revision:"16f683c2dc102e3825506d6792b605bd"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
