"use strict";(()=>{var e={};e.id=309,e.ids=[309],e.modules={2934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},1017:e=>{e.exports=require("path")},1815:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>R,patchFetch:()=>w,requestAsyncStorage:()=>y,routeModule:()=>g,serverHooks:()=>x,staticGenerationAsyncStorage:()=>h});var n={};r.r(n),r.d(n,{GET:()=>m});var a=r(9303),o=r(8716),i=r(3131),s=r(3722),u=r(2299);let l={},c=e=>{if(e.includes("firebasestorage.googleapis.com")){let t=e.match(/https:\/\/firebasestorage\.googleapis\.com.*/);return t?t[0]:e}return e},d=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&apos;").replace(/"/g,"&quot;"),p=e=>{let t=e.map(e=>e.displayedpath).join(",");if(l[t])return l[t];let r=e.reduce((e,t)=>{let r=`https://thesalesmens.com/${t.displayedpath.replace(/^\/+/g,"")}`;return e[r]||(e[r]={images:[],lastmod:t.updatedAt}),e[r].images.push(t),new Date(t.updatedAt)>new Date(e[r].lastmod)&&(e[r].lastmod=t.updatedAt),e},{});return l[t]=r,r},f=async()=>{let e="image-sitemap",t=(0,u.t)(e);if(t)return console.log("Using cached static sitemap"),t;let r=Object.entries(p(await (0,s.r)("image/image-url"))).map(([e,t])=>{let r=t.images.map(e=>`
        <image:image>
          <image:loc>${d(c(e.path))}</image:loc>
          <image:title>${d(e.title||"Boxify Pack")}</image:title>
          <image:caption>${d(e.caption||"Boxify Pack")}</image:caption>
        </image:image>
      `).join("");return`
      <url>
        <loc>${d(e)}</loc>
        <lastmod>${t.lastmod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
        ${r}
      </url>
    `}).join(""),n=`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
      ${r}
    </urlset>`;return(0,u.v)(e,n),n};async function m(){try{let e=await f();return new Response(e,{status:200,headers:{"Content-Type":"application/xml","Cache-Control":"public, max-age=3600, s-maxage=3600"}})}catch(e){return console.error("Error generating sitemap:",e),new Response("Error generating sitemap",{status:500})}}let g=new a.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/image-sitemap.xml/route",pathname:"/image-sitemap.xml",filename:"route",bundlePath:"app/image-sitemap.xml/route"},resolvedPagePath:"D:\\New folder\\Karnalwebtech\\src\\app\\image-sitemap.xml\\route.ts",nextConfigOutput:"",userland:n}),{requestAsyncStorage:y,staticGenerationAsyncStorage:h,serverHooks:x}=g,R="/image-sitemap.xml/route";function w(){return(0,i.patchFetch)({serverHooks:x,staticGenerationAsyncStorage:h})}},8585:(e,t,r)=>{var n=r(1085);r.o(n,"notFound")&&r.d(t,{notFound:function(){return n.notFound}})},1085:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return i},RedirectType:function(){return n.RedirectType},notFound:function(){return a.notFound},permanentRedirect:function(){return n.permanentRedirect},redirect:function(){return n.redirect}});let n=r(3953),a=r(6399);class o extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class i extends URLSearchParams{append(){throw new o}delete(){throw new o}set(){throw new o}sort(){throw new o}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6399:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isNotFoundError:function(){return a},notFound:function(){return n}});let r="NEXT_NOT_FOUND";function n(){let e=Error(r);throw e.digest=r,e}function a(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8586:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}}),function(e){e[e.SeeOther=303]="SeeOther",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect"}(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3953:(e,t,r)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return n},getRedirectError:function(){return u},getRedirectStatusCodeFromError:function(){return m},getRedirectTypeFromError:function(){return f},getURLFromRedirectError:function(){return p},isRedirectError:function(){return d},permanentRedirect:function(){return c},redirect:function(){return l}});let a=r(4580),o=r(2934),i=r(8586),s="NEXT_REDIRECT";function u(e,t,r){void 0===r&&(r=i.RedirectStatusCode.TemporaryRedirect);let n=Error(s);n.digest=s+";"+t+";"+e+";"+r+";";let o=a.requestAsyncStorage.getStore();return o&&(n.mutableCookies=o.mutableCookies),n}function l(e,t){void 0===t&&(t="replace");let r=o.actionAsyncStorage.getStore();throw u(e,t,(null==r?void 0:r.isAction)?i.RedirectStatusCode.SeeOther:i.RedirectStatusCode.TemporaryRedirect)}function c(e,t){void 0===t&&(t="replace");let r=o.actionAsyncStorage.getStore();throw u(e,t,(null==r?void 0:r.isAction)?i.RedirectStatusCode.SeeOther:i.RedirectStatusCode.PermanentRedirect)}function d(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,r,n,a]=e.digest.split(";",4),o=Number(a);return t===s&&("replace"===r||"push"===r)&&"string"==typeof n&&!isNaN(o)&&o in i.RedirectStatusCode}function p(e){return d(e)?e.digest.split(";",3)[2]:null}function f(e){if(!d(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function m(e){if(!d(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(function(e){e.push="push",e.replace="replace"})(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9303:(e,t,r)=>{e.exports=r(517)},3722:(e,t,r)=>{r.d(t,{r:()=>i});var n=r(8585);let a={maxRetries:3,initialDelay:1e3,maxDelay:1e4};async function o(e){return new Promise(t=>setTimeout(t,e))}async function i(e,t={}){let r={...a,...t},i=null,s=0;for(;s<r.maxRetries;)try{let t=await fetch(`http://localhost:9000/api/v2/${e}`,{next:{revalidate:3600}});switch(t.status){case 200:return await t.json();case 404:(0,n.notFound)();case 429:let a=t.headers.get("Retry-After"),i=Math.min(r.maxDelay,r.initialDelay*Math.pow(2,s)),u=a?1e3*parseInt(a):i;console.warn(`Rate limited. Retrying after ${u}ms... (Attempt ${s+1}/${r.maxRetries})`),await o(u),s++;continue;default:if(!t.ok)throw Error(`HTTP error! status: ${t.status} ${t.statusText}`)}}catch(e){if(i=e,e instanceof Error&&"NEXT_NOT_FOUND"===e.message)throw e;if(s<r.maxRetries-1){let e=Math.min(r.maxDelay,r.initialDelay*Math.pow(2,s));console.warn(`Request failed. Retrying after ${e}ms... (Attempt ${s+1}/${r.maxRetries})`),await o(e),s++;continue}throw console.error("Error fetching data:",i),Error(`Failed after ${r.maxRetries} attempts: ${i.message}`)}throw Error("Maximum retry attempts exceeded")}},2299:(e,t,r)=>{r.d(t,{t:()=>u,v:()=>l});let n=require("fs");var a=r.n(n),o=r(1017),i=r.n(o);let s=i().join(process.cwd(),".cache");function u(e){let t=i().join(s,`${e}.json`);if(a().existsSync(t)){let{data:e,timestamp:r}=JSON.parse(a().readFileSync(t,"utf-8"));if(Date.now()-r<36e5)return e}return null}function l(e,t){a().existsSync(s)||a().mkdirSync(s,{recursive:!0});let r=i().join(s,`${e}.json`);a().writeFileSync(r,JSON.stringify({data:t,timestamp:Date.now()}))}}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[948],()=>r(1815));module.exports=n})();