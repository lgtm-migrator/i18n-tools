"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63],{8215:function(e,t,n){var s=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return s.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return m}});var s=n(7294),a=n(9443);var o=function(){var e=(0,s.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=n(6010),l="tabItem_1uMI",i="tabItemActive_2DSg";var m=function(e){var t,n=e.lazy,a=e.block,m=e.defaultValue,u=e.values,p=e.groupId,c=e.className,d=s.Children.toArray(e.children),f=null!=u?u:d.map((function(e){return{value:e.props.value,label:e.props.label}})),x=null!=m?m:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,g=o(),k=g.tabGroupChoices,b=g.setTabGroupChoices,v=(0,s.useState)(x),h=v[0],y=v[1],N=[];if(null!=p){var j=k[p];null!=j&&j!==h&&f.some((function(e){return e.value===j}))&&y(j)}var T=function(e){var t=e.currentTarget,n=N.indexOf(t),s=f[n].value;y(s),null!=p&&(b(p,s),setTimeout((function(){var e,n,s,a,o,r,l,m;(e=t.getBoundingClientRect(),n=e.top,s=e.left,a=e.bottom,o=e.right,r=window,l=r.innerHeight,m=r.innerWidth,n>=0&&o<=m&&a<=l&&s>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var s=N.indexOf(e.target)+1;n=N[s]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},c)},f.map((function(e){var t=e.value,n=e.label;return s.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,r.Z)("tabs__item",l,{"tabs__item--active":h===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:D,onFocus:T,onClick:T},null!=n?n:t)}))),n?(0,s.cloneElement)(d.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},8373:function(e,t,n){n.d(t,{ZP:function(){return u}});var s=n(7462),a=n(3366),o=(n(7294),n(3905)),r=n(5064),l=n(8215),i=["components"],m={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,s.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{defaultValue:"fr.json",values:[{label:"fr.json",value:"fr.json"},{label:"nl.json",value:"nl.json"},{label:"de.json",value:"de.json"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"fr.json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="fr.json"',title:'"fr.json"'},'{\n  "commons":{\n    "myNestedKey":"Hello world FR",\n    "myNestedArray":[\n      "1 FR",\n      "2 FR",\n      "3 FR"\n    ]\n  },\n  "array":[\n    "1 FR",\n    "2 FR",\n    "3 FR"\n  ],\n  "simpleKey":"[FR] not setted key",\n  "Key with spaces":[\n    {\n      "test":"42 is the answer"\n    }\n  ],\n  "Missing key in DE":"present"\n}\n'))),(0,o.kt)(l.Z,{value:"nl.json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="nl.json"',title:'"nl.json"'},'{\n  "commons":{\n    "myNestedKey":"Hello world NL",\n    "myNestedArray":[\n      "1 NL",\n      "2 NL",\n      "3 NL"\n    ]\n  },\n  "array":[\n    "1 NL",\n    "2 NL",\n    "3 NL"\n  ],\n  "simpleKey":"[NL] not setted key",\n  "Key with spaces":[\n    {\n      "test":"42 is the answer"\n    }\n  ],\n  "Missing key in DE":"present"\n}\n'))),(0,o.kt)(l.Z,{value:"de.json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="de.json"',title:'"de.json"'},'{\n  "commons":{\n    "myNestedKey":"Hello world DE",\n    "myNestedArray":[\n      "1 DE",\n      "2 DE",\n      "3 DE"\n    ]\n  },\n  "array":[\n    "1 DE",\n    "2 DE",\n    "3 DE"\n  ],\n  "simpleKey":"[DE] not setted key",\n  "Key with spaces":[\n    {\n      "test":"42 is the answer"\n    }\n  ]\n}\n')))))}u.isMDXComponent=!0},3256:function(e,t,n){n.d(t,{ZP:function(){return i}});var s=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],l={toc:[]};function i(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,s.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("details",null,(0,o.kt)("summary",null,"I want as result flat JSON file(s). How can I achieve that ?"),(0,o.kt)("p",null,"Simply set option ",(0,o.kt)("inlineCode",{parentName:"p"},"keySeparator")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.json")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.js"),", such as :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="settings.json"',title:'"settings.json"'},'{\n  "keySeparator": false\n}\n'))))}i.isMDXComponent=!0},376:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return f},default:function(){return g}});var s=n(7462),a=n(3366),o=(n(7294),n(3905)),r=n(5064),l=n(8215),i=n(3256),m=n(8373),u=["components"],p={sidebar_position:1,sidebar_label:"import from_xlsx"},c="import from_xlsx",d={unversionedId:"commands/import/import from_xlsx",id:"commands/import/import from_xlsx",isDocsHomePage:!1,title:"import from_xlsx",description:"Turn a xlsx file to i18n file(s)",source:"@site/docs/commands/import/import from_xlsx.mdx",sourceDirName:"commands/import",slug:"/commands/import/import from_xlsx",permalink:"/i18n-tools/docs/commands/import/import from_xlsx",editUrl:"https://github.com/jy95/i18n-tools/edit/master/website/docs/commands/import/import from_xlsx.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"import from_xlsx"},sidebar:"tutorialSidebar",previous:{title:"export to_csv",permalink:"/i18n-tools/docs/commands/export/export to_csv"},next:{title:"import from_csv",permalink:"/i18n-tools/docs/commands/import/import from_csv"}},f=[{value:"Command",id:"command",children:[]},{value:"Purpose",id:"purpose",children:[]},{value:"Examples of settings",id:"examples-of-settings",children:[]},{value:"FAQ",id:"faq",children:[]}],x={toc:f};function g(e){var t=e.components,p=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,s.Z)({},x,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"import-from_xlsx"},"import from_xlsx"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Turn a xlsx file to i18n file(s)")),(0,o.kt)("h2",{id:"command"},"Command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Display help for import from_xlsx\nnpx @jy95/i18n-tools import from_xlsx --help\n")),(0,o.kt)("h2",{id:"purpose"},"Purpose"),(0,o.kt)("p",null,"Suppose you have a ",(0,o.kt)("a",{target:"_blank",href:n(7199).Z},"xlsx file")," structured as :"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"xlsx file",src:n(9066).Z})),(0,o.kt)("p",null,"This command helps you to turn this into several i18n json files :"),(0,o.kt)(m.ZP,{mdxType:"I18NFilesTabs"}),(0,o.kt)("h2",{id:"examples-of-settings"},"Examples of settings"),(0,o.kt)(r.Z,{defaultValue:"settings1",values:[{label:"Paths",value:"settings1"},{label:"Objects/Arrays",value:"settings2"},{label:"Settings.js",value:"settings3"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"settings1",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'npx @jy95/i18n-tools import from_xlsx --settings "/absolutePath/to/settings1.json"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="settings1.json"',title:'"settings1.json"'},'{\n   "input":"D:\\\\workspace\\\\i18n-tools\\\\test\\\\fixtures\\\\import-xlsx\\\\export-xlsx.xlsx",\n   "columns":"D:\\\\TEMP\\\\TEMP\\\\tests-for-import\\\\correct\\\\columns.json",\n   "locales":[\n      "FR",\n      "NL",\n      "DE"\n   ],\n   "outputDir":"D:\\\\TEMP\\\\TEMP\\\\tests-for-import",\n   "suffix":"_settings1"\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="columns.json"',title:'"columns.json"'},'{\n    "technical_key":"Technical Key",\n    "locales":{\n        "FR":"French translation",\n        "NL":"Dutch translation",\n        "DE":"German translation"\n    }\n}\n'))),(0,o.kt)(l.Z,{value:"settings2",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'npx @jy95/i18n-tools import from_xlsx --settings "/absolutePath/to/settings2.json"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="settings2.json"',title:'"settings2.json"'},'{\n   "input":"D:\\\\workspace\\\\i18n-tools\\\\test\\\\fixtures\\\\import-xlsx\\\\export-xlsx.xlsx",\n   "columns":{\n      "technical_key":"Technical Key",\n      "locales":{\n         "FR":"French translation",\n         "NL":"Dutch translation",\n         "DE":"German translation"\n      }\n   },\n   "locales":[\n      "FR",\n      "NL",\n      "DE"\n   ],\n   "outputDir":"D:\\\\TEMP\\\\TEMP\\\\tests-for-import",\n   "suffix":"_settings2"\n}\n'))),(0,o.kt)(l.Z,{value:"settings3",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'npx @jy95/i18n-tools import from_xlsx --settings "/absolutePath/to/settings3.js"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="settings3.js"',title:'"settings3.js"'},'module.exports = {\n  input: "D:\\\\workspace\\\\i18n-tools\\\\test\\\\fixtures\\\\import-xlsx\\\\export-xlsx.xlsx",\n  columns: {\n    technical_key: "Technical Key",\n    locales: [\n      ["FR", "French translation"],\n      ["NL", "Dutch translation"],\n      ["DE", "German translation"],\n    ].reduce(\n      (prev, [locale, label]) =>\n        Object.assign(prev, {\n          [locale]: label,\n        }),\n      {}\n    ),\n  },\n  locales: ["FR", "NL", "DE"],\n  outputDir: "D:\\\\TEMP\\\\TEMP\\\\tests-for-import",\n  suffix: "_settings3",\n};\n')))),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)(i.ZP,{mdxType:"ImportFaq"}))}g.isMDXComponent=!0},7199:function(e,t,n){t.Z=n.p+"assets/files/export-xlsx-b49c8130a1f24945ac7ffaea8dc3523b.xlsx"},9066:function(e,t,n){t.Z=n.p+"assets/images/exampleXlsxExport-213b9c4623f1fd8ea91bab64bbe6b39e.png"}}]);