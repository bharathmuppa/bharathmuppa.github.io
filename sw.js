if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,i,d)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return s;case"module":return c;default:return e(r)}})).then(e=>{const r=d(...e);return s.default||(s.default=r),s})}))}}define("./sw.js",["./workbox-18e9e952"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2de758cb.js",revision:"d1f5f9223ac50a83e9045830ad0418e7"},{url:"8baed165.js",revision:"ccd7eafb55d11d04c78456e63e18b919"},{url:"ad85c640.js",revision:"75d47d5bae9b790107b9bd9e1367c018"},{url:"d5bd5c63.js",revision:"6c42b39b13163b9eca73dd5884078d97"},{url:"index.html",revision:"6d629bd9f441c2674cd1749be4d8ddec"},{url:"src/assets/vendor/d3.v5.min.js",revision:"b88a69683a1ac17c74a100af60dc3541"},{url:"styles.css",revision:"3d6538621386fec8758860bc3b46f168"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw.js.map
