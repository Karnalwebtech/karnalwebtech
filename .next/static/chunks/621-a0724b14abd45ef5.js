(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[621],{5621:function(e,t,a){Promise.resolve().then(a.bind(a,7547))},1976:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.407.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,a(8030).Z)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])},6463:function(e,t,a){"use strict";var r=a(1169);a.o(r,"useParams")&&a.d(t,{useParams:function(){return r.useParams}}),a.o(r,"usePathname")&&a.d(t,{usePathname:function(){return r.usePathname}}),a.o(r,"useRouter")&&a.d(t,{useRouter:function(){return r.useRouter}}),a.o(r,"useSearchParams")&&a.d(t,{useSearchParams:function(){return r.useSearchParams}})},7730:function(e,t,a){"use strict";a.d(t,{d:function(){return s}});var r=a(7437),l=a(6648);function s(e){let{src:t,alt:a,width:s,height:n,className:i}=e;return(0,r.jsx)(l.default,{src:t,alt:a,width:s,height:n,loading:"lazy",placeholder:"blur",className:i,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAH0lEQVR42mNgoBfgz9D8z+DAwMDAABWTAwMDIwMAAAD8QRBgwAAAAAASUVORK5CYII=   "})}},3706:function(e,t,a){"use strict";a.d(t,{RecentlyViewed:function(){return d}});var r=a(7437),l=a(8185),s=a(2265);let n=e=>{let{time:t}=e;return(0,r.jsx)("span",{children:(e=>{let t=new Date,a=new Date(e),r=Math.floor(Math.floor((t-a)/1e3)/60),l=Math.floor(r/60),s=Math.floor(l/24);return l<1?"".concat(r," minutes ago"):s<1?"".concat(l," hours ago"):1===s?"Yesterday":s<7?"".concat(s," days ago"):a.toLocaleDateString(void 0,{month:"short",day:"numeric"})})(t)})};var i=a(7138),o=a(7730);let d=e=>{let{apidata:t,page_title:a,path:d}=e,[c,u]=(0,s.useState)([]);return(0,s.useEffect)(()=>{var e,a,r,l;let s=localStorage.getItem("recentlyViewedPosts"),n=s?JSON.parse(s):[];if(u(n),!(null==t?void 0:t.slug)||!(null==t?void 0:t.title)||!(null==t?void 0:null===(e=t.feature_image)||void 0===e?void 0:e.path))return;let i={id:null==t?void 0:t.slug,title:null==t?void 0:t.title,image:null==t?void 0:null===(a=t.feature_image)||void 0===a?void 0:a.path,categorie:null==t?void 0:null===(r=t.categorie[0])||void 0===r?void 0:r.slug,alt:(null==t?void 0:null===(l=t.feature_image)||void 0===l?void 0:l.altText)||"Karnalwebtech",time:null==t?void 0:t.createdAt},o=[i,...n.filter(e=>e.id!==i.id)].slice(0,4);u(o),localStorage.setItem("recentlyViewedPosts",JSON.stringify(o))},[t]),(0,r.jsx)("div",{children:(0,r.jsxs)(l.Zb,{children:[(0,r.jsx)(l.Ol,{children:(0,r.jsx)(l.ll,{children:a})}),(0,r.jsx)(l.aY,{className:"space-y-4",children:null==c?void 0:c.map(e=>(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsx)(o.d,{src:null==e?void 0:e.image,alt:(null==e?void 0:e.alt)||"karnalwebtech",width:60,height:60,className:"rounded-lg object-cover bg-cover"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(i.default,{href:"/".concat(null==e?void 0:e.categorie,"/").concat(e.id),prefetch:!0,children:(0,r.jsx)("h3",{className:"text-sm font-medium line-clamp-2",children:null==e?void 0:e.title})}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:(0,r.jsx)(n,{time:null==e?void 0:e.time})})]})]},e.id))})]})})}},420:function(e,t,a){"use strict";a.d(t,{Avatar:function(){return i},AvatarFallback:function(){return d},AvatarImage:function(){return o}});var r=a(7437),l=a(2265),s=a(4458),n=a(9354);let i=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,r.jsx)(s.fC,{ref:t,className:(0,n.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",a),...l})});i.displayName=s.fC.displayName;let o=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,r.jsx)(s.Ee,{ref:t,className:(0,n.cn)("aspect-square h-full w-full",a),...l})});o.displayName=s.Ee.displayName;let d=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,r.jsx)(s.NY,{ref:t,className:(0,n.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",a),...l})});d.displayName=s.NY.displayName},9055:function(e,t,a){"use strict";a.d(t,{C:function(){return i}});var r=a(7437);a(2265);var l=a(2218),s=a(9354);let n=(0,l.j)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function i(e){let{className:t,variant:a,...l}=e;return(0,r.jsx)("div",{className:(0,s.cn)(n({variant:a}),t),...l})}},7547:function(e,t,a){"use strict";a.d(t,{default:function(){return S}});var r=a(7437),l=a(2265),s=a(9733),n=a(8185),i=a(9055),o=a(420);/**
 * @license lucide-react v0.407.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let d=(0,a(8030).Z)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);var c=a(1976),u=a(7138),h=a(6906),g=a(8521),m=a(6463),f=e=>{let{projects:t=[],searchQuery:a="",selectedCategories:r=[],sortBy:s="latest"}=e;return(0,l.useMemo)(()=>t.filter(e=>{var t;let l=!a||e.title.toLowerCase().includes(a.toLowerCase()),s=0===r.length||r.includes(null==e?void 0:null===(t=e.category)||void 0===t?void 0:t._id);return l&&s}).sort((e,t)=>"az"===s?e.title.localeCompare(t.title):"za"===s?t.title.localeCompare(e.title):0),[t,a,r,s])},v=a(2413),x=a(3706),p=a(1136),j=a(7209),w=a(4184),y=a(4817),b=e=>{var t;let{searchQuery:a,setSearchQuery:l,apidata:s}=e,{data:i,isLoading:o}=(0,w.Jc)({type:"post",rowsPerPage:100,page:1}),{data:d}=i||{};return(0,r.jsxs)("aside",{className:"lg:w-1/3",children:[(0,r.jsxs)(n.Zb,{className:"mb-8",children:[(0,r.jsx)(n.Ol,{children:(0,r.jsx)(n.ll,{children:"Search"})}),(0,r.jsx)(n.aY,{children:(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(y.Z,{className:"absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"}),(0,r.jsx)(j.I,{placeholder:"Search blog posts...",value:a,onChange:e=>l(e.target.value),className:"pl-8"})]})})]}),(0,r.jsxs)(n.Zb,{className:"mb-8",children:[(0,r.jsx)(n.Ol,{children:(0,r.jsx)(n.ll,{children:"Categories"})}),(0,r.jsx)(n.aY,{children:o?(0,r.jsx)(p.Z,{perPage:9,height:3}):null==d?void 0:null===(t=d.result)||void 0===t?void 0:t.map((e,t)=>(0,r.jsxs)("p",{children:[" ",(0,r.jsx)(u.default,{href:null==e?void 0:e.slug,prefetch:!0,children:null==e?void 0:e.title})]},t))})]}),(0,r.jsx)(x.RecentlyViewed,{apidata:s,path:"blog",page_title:"Recently Viewed"})]})},N=a(2183),A=()=>(0,r.jsxs)("div",{className:"space-y-4 mb-4",children:[(0,r.jsx)(N.O,{className:"h-[400px] bg-gray-300 w-full rounded-lg"}),(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)(N.O,{className:"h-8 bg-gray-300 w-3/4"}),(0,r.jsx)(N.O,{className:"h-4 bg-gray-300 w-full"}),(0,r.jsx)(N.O,{className:"h-4 bg-gray-300 w-full"})]}),(0,r.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,r.jsx)(N.O,{className:"h-10 bg-gray-300 w-10 rounded-full"}),(0,r.jsx)(N.O,{className:"h-4 bg-gray-300 w-24"}),(0,r.jsx)(N.O,{className:"h-4 bg-gray-300 w-24"})]}),(0,r.jsx)(N.O,{className:"h-10 bg-gray-300 w-32"})]}),P=a(7730);function S(e){let{cat_id:t}=e,a=(0,m.useRouter)(),[x,p]=(0,l.useState)(1),[j,w]=(0,l.useState)(6),{data:y,error:N,isLoading:S}=(0,h.XA)({categorie:t&&t,rowsPerPage:Number(j),page:x}),{data:C}=y||{},[R,k]=(0,l.useState)(""),[O,_]=(0,l.useState)([]),[I,E]=(0,l.useState)("latest"),M=f({projects:null==C?void 0:C.result,searchQuery:R,selectedCategories:O,sortBy:I});return(0,r.jsxs)("div",{className:"container mx-auto px-4 py-8",children:[(0,r.jsx)("h1",{className:"text-4xl font-bold mb-8",children:"Our Blog"}),(0,r.jsxs)("div",{className:"flex flex-col lg:flex-row gap-8",children:[(0,r.jsx)("main",{className:"lg:w-2/3",children:S?[...Array(j)].map((e,t)=>(0,r.jsx)(A,{},t)):0===M.length?(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)("p",{className:"text-xl mb-4",children:"There are no posts in this category yet."}),(0,r.jsx)(u.default,{href:"/blog",prefetch:!0,className:"text-blue-500 hover:underline",children:"Return to blog page"})]}):null==M?void 0:M.map((e,t)=>{var l,h,m,f,v,x;return(0,r.jsxs)(n.Zb,{className:"mb-8 overflow-hidden",children:[(0,r.jsx)(n.aY,{className:"p-0",children:(0,r.jsx)(g.E.div,{whileHover:{scale:1.1},transition:{duration:.3},children:(0,r.jsx)(u.default,{href:"/".concat(null==e?void 0:null===(l=e.categorie[0])||void 0===l?void 0:l.slug,"/").concat(null==e?void 0:e.slug),prefetch:!0,children:(0,r.jsx)(P.d,{src:null==e?void 0:null===(h=e.feature_image)||void 0===h?void 0:h.path,alt:(null==e?void 0:null===(m=e.feature_image)||void 0===m?void 0:m.altText)||(null==e?void 0:e.title),width:600,height:400,className:"w-full h-48 object-cover"})})})}),(0,r.jsxs)(n.Ol,{children:[(0,r.jsx)(n.ll,{children:e.title}),(0,r.jsx)(n.SZ,{children:e.description})]}),(0,r.jsxs)(n.eW,{className:"flex justify-between items-center",children:[(0,r.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,r.jsxs)(o.Avatar,{children:[(0,r.jsx)(o.AvatarImage,{src:"/assets/avatar.webp?height=40&width=40",alt:"karnal web tech"}),(0,r.jsx)(o.AvatarFallback,{children:null===(f=e.audit_log)||void 0===f?void 0:f.name.split(" ").map(e=>e[0]).join("")})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-sm font-medium",children:null===(v=e.audit_log)||void 0===v?void 0:v.name}),(0,r.jsxs)("p",{className:"text-sm text-muted-foreground",children:[(0,r.jsx)(d,{className:"inline-block w-4 h-4 mr-1"}),new Date(e.createdAt).toLocaleDateString()]})]})]}),(0,r.jsx)(i.C,{children:null===(x=e.category)||void 0===x?void 0:x.title})]}),(0,r.jsx)(n.eW,{children:(0,r.jsxs)(s.z,{variant:"outline",onClick:()=>{var t;return a.push("/".concat(null==e?void 0:null===(t=e.categorie[0])||void 0===t?void 0:t.slug,"/").concat(null==e?void 0:e.slug))},children:["Read More ",(0,r.jsx)(c.Z,{className:"ml-2 h-4 w-4"})]})})]},t)})}),(0,r.jsx)(b,{searchQuery:R,setSearchQuery:k,apidata:null==C?void 0:C.result})]}),(0,r.jsx)(v.U,{currentPage:x,totalPages:null==C?void 0:C.resultPerPage,setCurrentPage:p,data_length:null==C?void 0:C.dataCounter,perPage:j,setPerPage:w})]})}},6906:function(e,t,a){"use strict";a.d(t,{XA:function(){return n},tj:function(){return s}});var r=a(8507),l=a(6074);let s=(0,r.LC)({reducerPath:"Post_Api",baseQuery:(0,l.ni)({baseUrl:"http://localhost:9000/api"}),tagTypes:["Post"],endpoints:e=>({getSingle:e.query({query:e=>({url:"v2/post/blog/".concat(e),method:"GET"}),providesTags:[{type:"Post",id:"LIST"}]}),getAllPost:e.query({query:e=>{let t={};return e&&(e.categorie&&(t.categorie=e.categorie),e.rowsPerPage&&(t.rowsPerPage=e.rowsPerPage),e.page&&(t.page=e.page)),{url:"v2/post/store",params:t,method:"GET"}},providesTags:[{type:"Post",id:"LIST"}]})})}),{useGetAllPostQuery:n,useGetSingleQuery:i}=s},4458:function(e,t,a){"use strict";a.d(t,{Ee:function(){return w},NY:function(){return y},fC:function(){return j}});var r=a(2265),l=a(8324),s=a(5137),n=a(1336),i=a(5171),o=a(7437),d="Avatar",[c,u]=(0,l.b)(d),[h,g]=c(d),m=r.forwardRef((e,t)=>{let{__scopeAvatar:a,...l}=e,[s,n]=r.useState("idle");return(0,o.jsx)(h,{scope:a,imageLoadingStatus:s,onImageLoadingStatusChange:n,children:(0,o.jsx)(i.WV.span,{...l,ref:t})})});m.displayName=d;var f="AvatarImage",v=r.forwardRef((e,t)=>{let{__scopeAvatar:a,src:l,onLoadingStatusChange:d=()=>{},...c}=e,u=g(f,a),h=function(e,t){let[a,l]=r.useState("idle");return(0,n.b)(()=>{if(!e){l("error");return}let a=!0,r=new window.Image,s=e=>()=>{a&&l(e)};return l("loading"),r.onload=s("loaded"),r.onerror=s("error"),r.src=e,t&&(r.referrerPolicy=t),()=>{a=!1}},[e,t]),a}(l,c.referrerPolicy),m=(0,s.W)(e=>{d(e),u.onImageLoadingStatusChange(e)});return(0,n.b)(()=>{"idle"!==h&&m(h)},[h,m]),"loaded"===h?(0,o.jsx)(i.WV.img,{...c,ref:t,src:l}):null});v.displayName=f;var x="AvatarFallback",p=r.forwardRef((e,t)=>{let{__scopeAvatar:a,delayMs:l,...s}=e,n=g(x,a),[d,c]=r.useState(void 0===l);return r.useEffect(()=>{if(void 0!==l){let e=window.setTimeout(()=>c(!0),l);return()=>window.clearTimeout(e)}},[l]),d&&"loaded"!==n.imageLoadingStatus?(0,o.jsx)(i.WV.span,{...s,ref:t}):null});p.displayName=x;var j=m,w=v,y=p}}]);