if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let f={};const n=e=>s(e,c),l={module:{uri:c},exports:f,require:n};i[c]=Promise.all(r.map((e=>l[e]||n(e)))).then((e=>(d(...e),f)))}}define(["./workbox-ad8011fb"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/07/31/hello-world/index.html",revision:"f791b85f66d8877d0018d08f70c3d956"},{url:"2022/07/31/test/index.html",revision:"e4fe667a3feb91aef7ce143d9a94d2ee"},{url:"2022/08/01/SpringSecuirty/index.html",revision:"5628766a36c05d2197b4804cd40bd966"},{url:"about/index.html",revision:"d2c3f36d70a659a1c275789a362751e5"},{url:"archives/2022/07/index.html",revision:"1f78f48f6524067bdd17724ebcb4fe27"},{url:"archives/2022/08/index.html",revision:"fe37dc543d402158bd5694ab6de54a27"},{url:"archives/2022/index.html",revision:"93c673f033c57e576c9384ae74f2fd16"},{url:"archives/index.html",revision:"fd2b8918cfa702649910adfbd4302450"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/index.html",revision:"96d78085a3969e134ff80879b0e49968"},{url:"categories/后端/index.html",revision:"0e36ebe423a9fe336f342eb42282fe20"},{url:"css/index.css",revision:"ceca79897c4cedb81e03ec18b0784d97"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"034bd8eba98563d41a26cd73f4b9cfe1"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/top_img.png",revision:"10362eff2454480d5feaceeccd28c97b"},{url:"index.html",revision:"ab31ad0824136706c22c0fb68e4ce57e"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"11c2dcd2257453513b441808f93d2176"},{url:"tags/index.html",revision:"cd59dab57466b77f57982cfb6d6aa5f4"},{url:"tags/SpringSecurity-后端-SpringBoot-权限管理/index.html",revision:"c250cdf31a462eaca21edaf5c99f9025"},{url:"tags/博客test/index.html",revision:"2e0c62ef826474303d62d30f2c0876cf"}],{})}));
//# sourceMappingURL=service-worker.js.map
