"use strict";(self.webpackChunkrescript_react_template=self.webpackChunkrescript_react_template||[]).push([[179],{579:(e,t,r)=>{var n=r(294),a=function(e){return n.createElement("svg",{className:"h-6 w-6 fill-klor-900",fill:"none",stroke:"fill-klor-200",strokeWidth:"1",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5",strokeLinecap:"round",strokeLinejoin:"round"}))},l=r(834),o=r(704),c=function(e){var t,r,a=e.to_,c=e.children,s=o.wG(void 0,void 0);if(s.path){var i=(r=function(e,t){return e+"/"+t},function(e,t,r){for(;;){var n=e;if(!n)return t;t=r(t,n.hd),e=n.tl}}(s.path,"",l.uv(r))),u=new RegExp("/\\/$/g");t=i.replace(u,"")}else t="/";console.log(t);var m="focus:outline-none h-8 rounded-sm hover:bg-400/60 dark:hover:bg-slate-500 px-3 text-900",d=t===a?" "+m+" bg-400/60 dark:bg-slate-500 ":m;return n.createElement("button",{className:d,type:"button",onClick:function(e){e.preventDefault(),o.VF(a)}},c)};function s(e,t){return function(e,t){for(var r=e.length,n=new Array(r),a=0;a<r;++a)n[a]=t(e[a]);return n}(e,l.Dm(t))}var i=r(961),u=n.createContext((function(e){})),m=u.Provider,d=function(e){var t=e.value,r=e.children;return n.createElement(m,{value:t,children:r})},f=[{category:"gray",themes:[{color:"#000000",name:"dark"},{color:"#94A3B8",name:"theme-slate"},{color:"#A3A3A3",name:"theme-neutral"},{color:"#cccccc",name:"theme-lightgray"}]},{category:"rose",themes:[{color:"#FB7185",name:"theme-rose"},{color:"#F472B6",name:"theme-pink"},{color:"#ff9494",name:"theme-monalisa"},{color:"#cf9068",name:"theme-coffee"}]},{category:"orange",themes:[{color:"#FB923C",name:"theme-orange"},{color:"#b2ad55",name:"theme-olive"},{color:"#FACC15",name:"theme-yellow"},{color:"#e8e121",name:"theme-sunflower"}]},{category:"green",themes:[{color:"#4ADE80",name:"theme-green"},{color:"#34D399",name:"theme-emerald"},{color:"#2DD4BF",name:"theme-teal"},{color:"#A3E635",name:"theme-lime"}]},{category:"blue",themes:[{color:"#60A5FA",name:"theme-blue"},{color:"#38BDF8",name:"theme-sky"},{color:"#22D3EE",name:"theme-cyan"},{color:"#a2b3d7",name:"theme-polo"}]},{category:"indigo",themes:[{color:"#818CF8",name:"theme-indigo"},{color:"#A78BFA",name:"theme-violet"},{color:"#C084FC",name:"theme-purple"},{color:"#E879F9",name:"theme-fuchsia"}]}];function h(e){var t=e.color,r=e.theme,a=e.onClick;return n.cloneElement(n.createElement("button",{"aria-label":"color",className:"flex h-8 w-8 items-center justify-center rounded-full p-1 shadow shadow-500 hover:ring-2 hover:ring-slate-300 focus:shadow-600 focus:outline-none dark:shadow-xl dark:shadow-gray-800 md:h-6 md:w-6",style:{backgroundColor:t},type:"button",onClick:a}),{"data-theme":r})}var v=function(e){var t=n.useContext(u),r=n.useCallback((function(e){l._1(t,e.target.getAttribute("data-theme"))}),[t]);return n.createElement(i.v,{children:function(e){return n.createElement(n.Fragment,void 0,n.createElement(i.v.Button,{children:n.createElement("svg",{className:"self-center w-5 h-5 text-900 dark:text-white",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z",strokeLinecap:"round",strokeLinejoin:"round"})),className:"flex h-8 w-8 items-center justify-center rounded-full border-transparent bg-200 text-700 outline-none ring-0 saturate-150 hover:bg-400 hover:text-white dark:border-[1px] dark:border-slate-400 dark:bg-slate-400 dark:hover:bg-slate-700"}),n.createElement(i.v.Items,{as_:"div",children:s(f,(function(e){return n.createElement("div",{key:e.category,className:"z-10 flex items-center justify-center bg-300/80 gap-[1rem]"},s(e.themes,(function(e){var t=e.name,a=e.color;return n.createElement(i.v.Item,{as_:"div",children:function(e){return n.createElement(h,{color:a,theme:t,onClick:r})},className:"flex flex-row items-center justify-center gap-2 p-1",key:t})})))})),className:"absolute right-1 top-6 mt-3 flex w-[12rem] origin-top-right flex-col rounded bg-300 shadow-md border-[1px] border-200 focus:outline-none dark:border-[1px] dark:border-slate-500 dark:bg-slate-600 md:w-40 gap-[1rem] p-2"}))},className:"relative z-50 flex items-center justify-center text-left"})},g=function(e){return n.createElement("nav",{className:"fixed inset-x-0 z-50 flex-1 py-1 shadow bg-300 md:pt-1\n    shadow-200 dark:bg-slate-800 dark:text-white"},n.createElement("div",{className:"px-2"},n.createElement("div",{className:"flex items-center justify-between"},n.createElement("div",{className:"flex space-x-2 items-center"},n.createElement("div",{className:"flex shrink-0 items-center justify-center h-8 w-8\n            rounded-full shadow-md shadow-400 dark:bg-slate-400"},n.createElement(a,{})),n.createElement("div",{className:"items-center hidden pr-6 md:flex"},n.createElement("span",{className:"text-lg text-center font-brand text-900 drop-shadow-2xl dark:text-slate-400"},"Melange")),n.createElement("div",{className:"flex gap-4 text-xl font-black font-nav"},n.createElement(c,{to_:"/",children:n.createElement("span",void 0,"Home")}),n.createElement(c,{to_:"/about",children:n.createElement("span",void 0,"About")}))),n.createElement("div",{className:"relative flex items-center pr-1 space-x-2"},n.createElement(v,{})))))},p=function(e){return n.createElement("div",{className:"w-full h-full flex flex-col items-center justify-center font-medium text-center text-slate-600 bg-50"},n.createElement("span",{className:"text-[10rem] md:text-[16rem] text-100"},"404"),n.createElement("span",{className:"text-900 pb-5 text-[1.2rem] dark:text-slate-200"},"Hmm... this page doesn't exist. Please go to the home page by clicking\n        the button below."),n.createElement("button",{className:"font-nav font-medium text-900 text-[2rem] py-2 px-7 rounded-lg cursor hover:bg-400 bg-300 dark:text-slate-200 dark:bg-slate-600 dark:hover:bg-slate-700",type:"button",onClick:function(e){o.VF("/")}},"Home"))},x={contents:0};function k(e){return x.contents=x.contents+1|0,e+"/"+x.contents}var E=k("Caml_js_exceptions.Error");var b=E,w="Melange_React_Theme",y=r(96),N=function(e){var t=e.children;return n.createElement(n.Suspense,{fallback:n.createElement(y.S,{className:"w-[4rem] h-[3rem] stroke-[0.2rem] p-3 stroke-klor-200 text-700 dark:fill-slate-600 dark:stroke-slate-400 dark:text-900"}),children:t})},C=function(e){var t=n.createElement(n.lazy((function(e){return r.e(568).then(r.bind(r,568)).then((function(e){return Promise.resolve({default:e.make})}))})),void 0),a=n.createElement(n.lazy((function(e){return r.e(202).then(r.bind(r,202)).then((function(e){return Promise.resolve({default:e.make})}))})),void 0),c=o.wG(void 0,void 0).path,s=c?"about"===c.hd?c.tl?n.createElement(p,{}):n.createElement(N,{children:a}):n.createElement(p,{}):n.createElement(N,{children:t}),i=function(e){var t=n.useState((function(){try{var t=localStorage.getItem(w);return null!==t?t:e}catch(t){return e}})),r=t[1];return[t[0],function(e){try{return localStorage.setItem(w,e),void l._1(r,(function(t){return e}))}catch(e){var t=function(e){return function(e){return null!=e&&"string"==typeof e.RE_EXN_ID}(e)?e:{RE_EXN_ID:E,_1:e}}(e);if(t.RE_EXN_ID===b){var n=t._1.message;return void 0!==n?void console.log(n):void 0}throw t}}]}("theme-blue");return n.createElement(d,{value:i[1],children:n.createElement("div",{className:i[0]+" flex flex-col h-[100vh] dark:bg-slate-700 "},n.createElement(g,{}),n.createElement("div",{className:"flex w-full h-full m-auto dark:bg-slate-700"},s))})},_=r(745),A=document.querySelector("#root");null==A?console.error("Failed to start React: couldn't find the #root element"):_.s(A).render(n.createElement(n.StrictMode,{children:n.createElement(C,{})}))},96:(e,t,r)=>{r.d(t,{S:()=>a});var n=r(294),a=function(e){var t=e.className;return n.createElement("div",{className:"flex w-full items-center justify-center"},n.createElement("svg",{className:t,fill:"none",viewBox:"0 0 131 55"},n.createElement("defs",void 0,n.createElement("path",{id:"spinners-react-infinity-path",d:"M46.57 45.5138C36.346 55.4954 19.8919 55.4954 9.66794 45.5138C-0.55598 35.5321 -0.55598 19.4678 9.66794 9.48624C19.8919 -0.495412 36.346 -0.495412 46.57 9.48624L84.4303 45.5138C94.6543 55.4954 111.108 55.4954 121.332 45.5138C131.556 35.5321 131.556 19.4678 121.332 9.48624C111.108 -0.495412 94.6543 -0.495412 84.4303 9.48624L46.57 45.5138Z"})),n.createElement("use",{xlinkHref:"#spinners-react-infinity-path"}),n.createElement("use",{className:"animate-loading_spin_infinity",fill:"none",stroke:"currentColor",strokeDasharray:"1, 347",strokeDashoffset:"75",strokeLinecap:"round",xlinkHref:"#spinners-react-infinity-path"})))}},834:(e,t,r)=>{function n(e,t,r){for(var n=new Array(r),a=0,l=t;a<r;)n[a]=e[l],a=a+1|0,l=l+1|0;return n}function a(e,t){for(;;){var r=t,l=e,o=l.length,c=0===o?1:o,s=c-r.length|0;if(0===s)return l.apply(null,r);if(s>=0)return function(e,t){return function(r){return a(e,t.concat([r]))}}(l,r);t=n(r,c,0|-s),e=l.apply(null,n(r,0,c))}}function l(e,t){var r=e.length;if(1===r)return e(t);switch(r){case 1:return e(t);case 2:return function(r){return e(t,r)};case 3:return function(r,n){return e(t,r,n)};case 4:return function(r,n,a){return e(t,r,n,a)};case 5:return function(r,n,a,l){return e(t,r,n,a,l)};case 6:return function(r,n,a,l,o){return e(t,r,n,a,l,o)};case 7:return function(r,n,a,l,o,c){return e(t,r,n,a,l,o,c)};default:return a(e,[t])}}function o(e){return 1===e.length?e:function(t){return l(e,t)}}function c(e){return 2===e.length?e:function(t,r){return function(e,t,r){var n=e.length;if(2===n)return e(t,r);switch(n){case 1:return a(e(t),[r]);case 2:return e(t,r);case 3:return function(n){return e(t,r,n)};case 4:return function(n,a){return e(t,r,n,a)};case 5:return function(n,a,l){return e(t,r,n,a,l)};case 6:return function(n,a,l,o){return e(t,r,n,a,l,o)};case 7:return function(n,a,l,o,c){return e(t,r,n,a,l,o,c)};default:return a(e,[t,r])}}(e,t,r)}}r.d(t,{_1:()=>l,Dm:()=>o,uv:()=>c})}},e=>{e.O(0,[412,105,655,25,459],(()=>(579,e(e.s=579)))),e.O()}]);