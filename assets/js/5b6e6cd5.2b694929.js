"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[294],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||s;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=p;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<s;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2360:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(7294),a=t(6010),s="tabItem_OmH5";function o(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,o),hidden:t},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(7462),a=t(7294),s=t(2389),o=t(7392),l=t(7094),i=t(2466),u=t(6010),c="tabList_uSqn",m="tabItem_LplD";function p(e){var n,t,s,p=e.lazy,d=e.block,f=e.defaultValue,v=e.values,y=e.groupId,b=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=v?v:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,o.l)(k,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===f?f:null!=(n=null!=f?f:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(s=g[0])?void 0:s.props.value;if(null!==N&&!k.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var j=(0,l.U)(),D=j.tabGroupChoices,E=j.setTabGroupChoices,T=(0,a.useState)(N),x=T[0],w=T[1],_=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var P=D[y];null!=P&&P!==x&&k.some((function(e){return e.value===P}))&&w(P)}var F=function(e){var n=e.currentTarget,t=_.indexOf(n),r=k[t].value;r!==x&&(O(n),w(r),null!=y&&E(y,r))},Z=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=_.indexOf(e.currentTarget)+1;t=_[r]||_[0];break;case"ArrowLeft":var a=_.indexOf(e.currentTarget)-1;t=_[a]||_[_.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,u.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},b)},k.map((function(e){var n=e.value,t=e.label,s=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:function(e){return _.push(e)},onKeyDown:Z,onFocus:F,onClick:F},s,{className:(0,u.Z)("tabs__item",m,null==s?void 0:s.className,{"tabs__item--active":x===n})}),null!=t?t:n)}))),p?(0,a.cloneElement)(g.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function d(e){var n=(0,s.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}},8373:function(e,n,t){t.d(n,{ZP:function(){return c}});var r=t(7462),a=t(3366),s=(t(7294),t(3905)),o=t(9877),l=t(2360),i=["components"],u={toc:[]};function c(e){var n=e.components,t=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)(o.Z,{defaultValue:"fr.json",values:[{label:"fr.json",value:"fr.json"},{label:"nl.json",value:"nl.json"},{label:"de.json",value:"de.json"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"fr.json",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="fr.json"',title:'"fr.json"'},'{\n  "commons":{\n    "myNestedKey":"Hello world FR",\n    "myNestedArray":[\n      "1 FR",\n      "2 FR",\n      "3 FR"\n    ]\n  },\n  "array":[\n    "1 FR",\n    "2 FR",\n    "3 FR"\n  ],\n  "simpleKey":"[FR] not setted key",\n  "Key with spaces":[\n    {\n      "test":"42 is the answer"\n    }\n  ],\n  "Missing key in DE":"present"\n}\n'))),(0,s.kt)(l.Z,{value:"nl.json",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="nl.json"',title:'"nl.json"'},'{\n  "commons":{\n    "myNestedKey":"Hello world NL",\n    "myNestedArray":[\n      "1 NL",\n      "2 NL",\n      "3 NL"\n    ]\n  },\n  "array":[\n    "1 NL",\n    "2 NL",\n    "3 NL"\n  ],\n  "simpleKey":"[NL] not setted key",\n  "Key with spaces":[\n    {\n      "test":"42 is the answer"\n    }\n  ],\n  "Missing key in DE":"present"\n}\n'))),(0,s.kt)(l.Z,{value:"de.json",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="de.json"',title:'"de.json"'},'{\n  "commons":{\n    "myNestedKey":"Hello world DE",\n    "myNestedArray":[\n      "1 DE",\n      "2 DE",\n      "3 DE"\n    ]\n  },\n  "array":[\n    "1 DE",\n    "2 DE",\n    "3 DE"\n  ],\n  "simpleKey":"[DE] not setted key",\n  "Key with spaces":[\n    {\n      "test":"42 is the answer"\n    }\n  ]\n}\n')))))}c.isMDXComponent=!0},3256:function(e,n,t){t.d(n,{ZP:function(){return i}});var r=t(7462),a=t(3366),s=(t(7294),t(3905)),o=["components"],l={toc:[]};function i(e){var n=e.components,t=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("details",null,(0,s.kt)("summary",null,"I want as result flat JSON file(s). How can I achieve that ?"),(0,s.kt)("p",null,"Simply set option ",(0,s.kt)("inlineCode",{parentName:"p"},"keySeparator")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"false")," in your ",(0,s.kt)("inlineCode",{parentName:"p"},"settings.json")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"settings.js"),", such as :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="settings.json"',title:'"settings.json"'},'{\n  "keySeparator": false\n}\n'))))}i.isMDXComponent=!0},8280:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return v}});var r=t(7462),a=t(3366),s=(t(7294),t(3905)),o=t(9877),l=t(2360),i=t(3256),u=t(8373),c=["components"],m={sidebar_position:2,sidebar_label:"import from_csv",title:"import from_csv",description:"Turn a csv file to i18n file(s)"},p=void 0,d={unversionedId:"commands/import/import from_csv",id:"commands/import/import from_csv",title:"import from_csv",description:"Turn a csv file to i18n file(s)",source:"@site/docs/commands/import/import from_csv.mdx",sourceDirName:"commands/import",slug:"/commands/import/import from_csv",permalink:"/i18n-tools/docs/commands/import/import from_csv",draft:!1,editUrl:"https://github.com/jy95/i18n-tools/edit/master/website/docs/commands/import/import from_csv.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"import from_csv",title:"import from_csv",description:"Turn a csv file to i18n file(s)"},sidebar:"tutorialSidebar",previous:{title:"import from_xlsx",permalink:"/i18n-tools/docs/commands/import/import from_xlsx"},next:{title:"Diff",permalink:"/i18n-tools/docs/commands/diff"}},f={},v=[{value:"Command",id:"command",level:2},{value:"Purpose",id:"purpose",level:2},{value:"Examples of settings",id:"examples-of-settings",level:2},{value:"FAQ",id:"faq",level:2}],y={toc:v};function b(e){var n=e.components,m=(0,a.Z)(e,c);return(0,s.kt)("wrapper",(0,r.Z)({},y,m,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Turn a csv file to i18n file(s)")),(0,s.kt)("h2",{id:"command"},"Command"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Display help for import from_csv\nnpx @jy95/i18n-tools import from_csv --help\n")),(0,s.kt)("h2",{id:"purpose"},"Purpose"),(0,s.kt)("p",null,"Suppose you have a ",(0,s.kt)("a",{target:"_blank",href:t(4555).Z},"csv file")," structured as :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csv",metastring:'title="export-csv.csv"',title:'"export-csv.csv"'},"Technical Key;French translation;Dutch translation;German translation\nKey with spaces[0].test;42 is the answer;42 is the answer;42 is the answer\nMissing key in DE;present;present;\narray[0];1 FR;1 NL;1 DE\narray[1];2 FR;2 NL;2 DE\narray[2];3 FR;3 NL;3 DE\ncommons.myNestedArray[0];1 FR;1 NL;1 DE\ncommons.myNestedArray[1];2 FR;2 NL;2 DE\ncommons.myNestedArray[2];3 FR;3 NL;3 DE\ncommons.myNestedKey;Hello world FR;Hello world NL;Hello world DE\nsimpleKey;[FR] not setted key;[NL] not setted key;[DE] not setted key\n")),(0,s.kt)("p",null,"This command helps you to turn this into several i18n json files :"),(0,s.kt)(u.ZP,{mdxType:"I18NFilesTabs"}),(0,s.kt)("h2",{id:"examples-of-settings"},"Examples of settings"),(0,s.kt)(o.Z,{defaultValue:"settings1",values:[{label:"Paths",value:"settings1"},{label:"Objects/Arrays",value:"settings2"},{label:"Settings.js",value:"settings3"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"settings1",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'npx @jy95/i18n-tools import from_csv --settings "/absolutePath/to/settings1.json"\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="settings1.json"',title:'"settings1.json"'},'{\n   "input":"D:\\\\workspace\\\\i18n-tools\\\\test\\\\fixtures\\\\import-csv\\\\export-csv.csv",\n   "columns":"D:\\\\TEMP\\\\TEMP\\\\tests-for-import\\\\correct\\\\columns.json",\n   "locales":[\n      "FR",\n      "NL",\n      "DE"\n   ],\n   "outputDir":"D:\\\\TEMP\\\\TEMP\\\\tests-for-import",\n   "suffix":"_settings1"\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="columns.json"',title:'"columns.json"'},'{\n    "technical_key":"Technical Key",\n    "locales":{\n        "FR":"French translation",\n        "NL":"Dutch translation",\n        "DE":"German translation"\n    }\n}\n'))),(0,s.kt)(l.Z,{value:"settings2",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'npx @jy95/i18n-tools import from_csv --settings "/absolutePath/to/settings2.json"\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="settings2.json"',title:'"settings2.json"'},'{\n   "input":"D:\\\\workspace\\\\i18n-tools\\\\test\\\\fixtures\\\\import-csv\\\\export-csv.csv",\n   "columns":{\n      "technical_key":"Technical Key",\n      "locales":{\n         "FR":"French translation",\n         "NL":"Dutch translation",\n         "DE":"German translation"\n      }\n   },\n   "locales":[\n      "FR",\n      "NL",\n      "DE"\n   ],\n   "outputDir":"D:\\\\TEMP\\\\TEMP\\\\tests-for-import",\n   "suffix":"_settings2"\n}\n'))),(0,s.kt)(l.Z,{value:"settings3",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'npx @jy95/i18n-tools import from_csv --settings "/absolutePath/to/settings3.js"\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="settings3.js"',title:'"settings3.js"'},'module.exports = {\n  input: "D:\\\\workspace\\\\i18n-tools\\\\test\\\\fixtures\\\\import-csv\\\\export-csv.csv",\n  columns: {\n    technical_key: "Technical Key",\n    locales: [\n      ["FR", "French translation"],\n      ["NL", "Dutch translation"],\n      ["DE", "German translation"],\n    ].reduce(\n      (prev, [locale, label]) =>\n        Object.assign(prev, {\n          [locale]: label,\n        }),\n      {}\n    ),\n  },\n  locales: ["FR", "NL", "DE"],\n  outputDir: "D:\\\\TEMP\\\\TEMP\\\\tests-for-import",\n  suffix: "_settings3",\n};\n')))),(0,s.kt)("h2",{id:"faq"},"FAQ"),(0,s.kt)(i.ZP,{mdxType:"ImportFaq"}))}b.isMDXComponent=!0},4555:function(e,n,t){n.Z=t.p+"assets/files/export-csv-61f16c92d714e9d227be95e74170289a.csv"}}]);