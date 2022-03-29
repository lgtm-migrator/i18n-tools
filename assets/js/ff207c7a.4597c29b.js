"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[457],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=n.createContext({}),l=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,m=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,f=p["".concat(m,".").concat(d)]||p[d]||u[d]||i;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=p;var a={};for(var m in t)hasOwnProperty.call(t,m)&&(a[m]=t[m]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5360:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(7294),o=r(9960),i=r(5979),c=r(6010),a="cardContainer_woeA",m="cardTitle_pNjP",l="cardDescription_qC_k",s=r(3919),u=r(5999);function p(e){var t=e.href,r=e.children;return n.createElement(o.Z,{href:t,className:(0,c.Z)("card padding--lg",a)},r)}function d(e){var t=e.href,r=e.icon,o=e.title,i=e.description;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",m),title:o},r," ",o),i&&n.createElement("p",{className:(0,c.Z)("text--truncate",l),title:i},i))}function f(e){var t=e.item,r=(0,i.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t,r=e.item,o=(0,s.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,i.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(d,{href:r.href,icon:o,title:r.label,description:null==c?void 0:c.description})}function b(e){var t=e.item;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){var t=e.items;return n.createElement("div",{className:"row"},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,i.Wl)(e)}))}(t).map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(b,{key:t,item:e}))})))}},4708:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),c=r(5360),a=r(5979),m=["components"],l={sidebar_label:"Import commands",title:"Import commands",id:"import",description:"Turn something to i18n file(s)"},s=void 0,u={unversionedId:"commands/import/import",id:"commands/import/import",title:"Import commands",description:"Turn something to i18n file(s)",source:"@site/docs/commands/import/index.mdx",sourceDirName:"commands/import",slug:"/commands/import/",permalink:"/i18n-tools/docs/commands/import/",editUrl:"https://github.com/jy95/i18n-tools/edit/master/website/docs/commands/import/index.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Import commands",title:"Import commands",id:"import",description:"Turn something to i18n file(s)"},sidebar:"tutorialSidebar",previous:{title:"export to_csv",permalink:"/i18n-tools/docs/commands/export/export to_csv"},next:{title:"import from_xlsx",permalink:"/i18n-tools/docs/commands/import/import from_xlsx"}},p={},d=[],f={toc:d};function y(e){var t=e.components,r=(0,o.Z)(e,m);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Display all available import commands\nnpx @jy95/i18n-tools import --help\n")),(0,i.kt)(c.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);