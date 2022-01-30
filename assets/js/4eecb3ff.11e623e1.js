"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,f=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return r?n.createElement(f,a(a({ref:t},m),{},{components:r})):n.createElement(f,a({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5360:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(7294),o=r(9960),i=r(9548),a=r(6010),c="cardContainer_woeA",l="cardContainerLink_iOSj",s="cardTitle_pNjP",m="cardDescription_qC_k",p=r(3919);function u(e){var t=e.href,r=e.children,i=(0,a.Z)("card margin-bottom--lg padding--lg",c,t&&l);return t?n.createElement(o.Z,{href:t,className:i},r):n.createElement("div",{className:i},r)}function d(e){var t=e.href,r=e.icon,o=e.title,i=e.description;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",s),title:o},r," ",o),n.createElement("div",{className:(0,a.Z)("text--truncate",m),title:i},i))}function f(e){var t=e.item,r=(0,i.Wl)(t);return n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.items.length+" items"})}function x(e){var t,r=e.item,o=(0,p.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(d,{href:r.href,icon:o,title:r.label,description:null==a?void 0:a.description})}function y(e){var t=e.item;switch(t.type){case"link":return n.createElement(x,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){var t=e.items;return n.createElement("div",{className:"row"},t.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6"},n.createElement(y,{item:e}))})))}},3036:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=r(5360),c=r(9548),l=["components"],s={sidebar_label:"Export commands",title:"Export commands",id:"export",description:"Export i18n files into something else"},m=void 0,p={unversionedId:"commands/export/export",id:"commands/export/export",title:"Export commands",description:"Export i18n files into something else",source:"@site/docs/commands/export/index.mdx",sourceDirName:"commands/export",slug:"/commands/export/",permalink:"/i18n-tools/docs/commands/export/",editUrl:"https://github.com/jy95/i18n-tools/edit/master/website/docs/commands/export/index.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Export commands",title:"Export commands",id:"export",description:"Export i18n files into something else"},sidebar:"tutorialSidebar",previous:{title:"Commands",permalink:"/i18n-tools/docs/commands/"},next:{title:"export to_xlsx",permalink:"/i18n-tools/docs/commands/export/export to_xlsx"}},u=[],d={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Display all available export commands\nnpx @jy95/i18n-tools export --help\n")),(0,i.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);