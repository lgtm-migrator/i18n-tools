"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[466],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(n),p=o,f=u["".concat(l,".").concat(p)]||u[p]||d[p]||a;return n?r.createElement(f,c(c({ref:t},m),{},{components:n})):r.createElement(f,c({ref:t},m))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(7294),o=n(6010),a=n(3438),c=n(9960),i=n(3919),l=n(5999);const s="cardContainer_fWXF",m="cardTitle_rnsV",d="cardDescription_PWke";function u(e){let{href:t,children:n}=e;return r.createElement(c.Z,{href:t,className:(0,o.Z)("card padding--lg",s)},n)}function p(e){let{href:t,icon:n,title:a,description:c}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",m),title:a},n," ",a),c&&r.createElement("p",{className:(0,o.Z)("text--truncate",d),title:c},c))}function f(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t;let{item:n}=e;const o=(0,i.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,a.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(p,{href:n.href,icon:o,title:n.label,description:null==c?void 0:c.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){let{items:t,className:n}=e;return r.createElement("section",{className:(0,o.Z)("row",n)},function(e){return e.filter((e=>"category"!==e.type||!!(0,a.Wl)(e)))}(t).map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(b,{item:e})))))}},3901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7462),o=(n(7294),n(3905)),a=n(2991),c=n(3438);const i={sidebar_label:"Commands",title:"Commands",id:"commands"},l=void 0,s={unversionedId:"commands/commands",id:"commands/commands",title:"Commands",description:"",source:"@site/docs/commands/index.mdx",sourceDirName:"commands",slug:"/commands/",permalink:"/i18n-tools/docs/commands/",draft:!1,editUrl:"https://github.com/jy95/i18n-tools/edit/master/website/docs/commands/index.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Commands",title:"Commands",id:"commands"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/i18n-tools/docs/installation"},next:{title:"Export commands",permalink:"/i18n-tools/docs/commands/export/"}},m={},d=[],u={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Display all available commands\nnpx @jy95/i18n-tools --help\n")),(0,o.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);