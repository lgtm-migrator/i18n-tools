"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[870],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=s,g=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),s=n(6010);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,s.Z)(o,r),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),s=n(7294),o=n(6010),r=n(2389),l=n(7392),i=n(7094),p=n(2466);const u="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,n;const{lazy:r,block:m,defaultValue:d,values:g,groupId:f,className:x}=e,b=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=g?g:b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,l.l)(y,((e,t)=>e.value===t.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===d?d:null!=(t=null!=d?d:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:j,setTabGroupChoices:v}=(0,i.U)(),[N,T]=(0,s.useState)(k),E=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=f){const e=j[f];null!=e&&e!==N&&y.some((t=>t.value===e))&&T(e)}const D=e=>{const t=e.currentTarget,n=E.indexOf(t),a=y[n].value;a!==N&&(w(t),T(a),null!=f&&v(f,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=E.indexOf(e.currentTarget)+1;n=null!=(a=E[t])?a:E[0];break}case"ArrowLeft":{var s;const t=E.indexOf(e.currentTarget)-1;n=null!=(s=E[t])?s:E[E.length-1];break}}null==(t=n)||t.focus()};return s.createElement("div",{className:(0,o.Z)("tabs-container",u)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},x)},y.map((e=>{let{value:t,label:n,attributes:r}=e;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>E.push(e),onKeyDown:C,onFocus:D,onClick:D},r,{className:(0,o.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),r?(0,s.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,r.Z)();return s.createElement(m,(0,a.Z)({key:String(t)},e))}},8373:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(7462),s=(n(7294),n(3905)),o=n(5488),r=n(5162);const l={toc:[]};function i(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(o.Z,{defaultValue:"fr.json",values:[{label:"fr.json",value:"fr.json"},{label:"nl.json",value:"nl.json"},{label:"de.json",value:"de.json"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"fr.json",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="fr.json"',title:'"fr.json"'},'{\n  "commons":{\n    "myNestedKey":"Hello world FR",\n    "myNestedArray":[\n      "1 FR",\n      "2 FR",\n      "3 FR"\n    ]\n  },\n  "array":[\n    "1 FR",\n    "2 FR",\n    "3 FR"\n  ],\n  "simpleKey":"[FR] not setted key",\n  "Key with spaces":[\n    {\n      "test":"42 is the answer"\n    }\n  ],\n  "Missing key in DE":"present"\n}\n'))),(0,s.kt)(r.Z,{value:"nl.json",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="nl.json"',title:'"nl.json"'},'{\n  "commons":{\n    "myNestedKey":"Hello world NL",\n    "myNestedArray":[\n      "1 NL",\n      "2 NL",\n      "3 NL"\n    ]\n  },\n  "array":[\n    "1 NL",\n    "2 NL",\n    "3 NL"\n  ],\n  "simpleKey":"[NL] not setted key",\n  "Key with spaces":[\n    {\n      "test":"42 is the answer"\n    }\n  ],\n  "Missing key in DE":"present"\n}\n'))),(0,s.kt)(r.Z,{value:"de.json",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="de.json"',title:'"de.json"'},'{\n  "commons":{\n    "myNestedKey":"Hello world DE",\n    "myNestedArray":[\n      "1 DE",\n      "2 DE",\n      "3 DE"\n    ]\n  },\n  "array":[\n    "1 DE",\n    "2 DE",\n    "3 DE"\n  ],\n  "simpleKey":"[DE] not setted key",\n  "Key with spaces":[\n    {\n      "test":"42 is the answer"\n    }\n  ]\n}\n')))))}i.isMDXComponent=!0},3775:(e,t,n)=>{n.d(t,{ZP:()=>r});var a=n(7462),s=(n(7294),n(3905));const o={toc:[]};function r(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("details",null,(0,s.kt)("summary",null,"I only want a subset of the data. How can I achieve that ?"),(0,s.kt)("p",null,"Simply add the ",(0,s.kt)("inlineCode",{parentName:"p"},"resultsFilter")," option in your ",(0,s.kt)("inlineCode",{parentName:"p"},"settings.json")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"settings.js")," :"),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Reminder - the type of the function parameter :"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"type I18N_Merged_Data = {\n  technical_key: string;\n  labels: {\n    [locale: string]: string;\n  };\n}[];\n"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="settings.js"',title:'"settings.js"'},'"resultsFilter": function(data /*: I18N_Merged_Data*/) {\n  return data.filter((row) => \n    // Takes rows that have at least a missing label in one i18n file such as "Missing key in DE" case\n    // Object.keys(row.labels).length !== 3 ||\n    Object\n      .values(row.labels)\n      // Takes rows that have at least one empty label or contains a given prefix\n      .some(\n        (label) =>\n          label.length === 0 ||\n          ["[FR]", "[NL]", "[DE]"].some((prefix) => label.startsWith(prefix))\n      )\n  );\n}\n')),(0,s.kt)("p",null,"OR "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="settings.json"',title:'"settings.json"'},'"resultsFilter": "D:\\\\TEMP\\\\TEMP\\\\resultsFilter.js"\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="resultsFilter.js"',title:'"resultsFilter.js"'},'module.exports = function(data /*: I18N_Merged_Data*/) {\n  return data.filter((row) => \n    // Takes rows that have at least a missing label in one i18n file such as "Missing key in DE" case\n    // Object.keys(row.labels).length !== 3 ||\n    Object\n      .values(row.labels)\n      // Takes rows that have at least one empty label or contains a given prefix\n      .some(\n        (label) =>\n          label.length === 0 ||\n          ["[FR]", "[NL]", "[DE]"].some((prefix) => label.startsWith(prefix))\n      )\n  );\n}\n'))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"I want the locales in a given order in the result file. How can I achieve that ?"),(0,s.kt)("p",null,"Simply update the ",(0,s.kt)("inlineCode",{parentName:"p"},"columns")," option with your given order in your ",(0,s.kt)("inlineCode",{parentName:"p"},"settings.json")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"settings.js"),", such as :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="settings.js"',title:'"settings.js"'},'"columns": [\n  {\n      "locale":"NL",\n      "label":"Dutch translation"\n  },\n  {\n      "locale":"FR",\n      "label":"French translation"\n  }\n]\n'))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"I only work with flat JSON file(s). How can I make this command work ?"),(0,s.kt)("p",null,"Simply set option ",(0,s.kt)("inlineCode",{parentName:"p"},"keySeparator")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"false")," in your ",(0,s.kt)("inlineCode",{parentName:"p"},"settings.json")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"settings.js"),", such as :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="settings.json"',title:'"settings.json"'},'{\n  "keySeparator": false\n}\n'))))}r.isMDXComponent=!0},4296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var a=n(7462),s=(n(7294),n(3905)),o=n(5488),r=n(5162),l=n(3775),i=n(8373);const p={sidebar_position:1,sidebar_label:"export to_xlsx",title:"export to_xlsx",description:"Export i18n files into a xlsx file, created by exceljs"},u=void 0,c={unversionedId:"commands/export/export to_xlsx",id:"commands/export/export to_xlsx",title:"export to_xlsx",description:"Export i18n files into a xlsx file, created by exceljs",source:"@site/docs/commands/export/export to_xlsx.mdx",sourceDirName:"commands/export",slug:"/commands/export/export to_xlsx",permalink:"/i18n-tools/docs/commands/export/export to_xlsx",draft:!1,editUrl:"https://github.com/jy95/i18n-tools/edit/master/website/docs/commands/export/export to_xlsx.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"export to_xlsx",title:"export to_xlsx",description:"Export i18n files into a xlsx file, created by exceljs"},sidebar:"tutorialSidebar",previous:{title:"Export commands",permalink:"/i18n-tools/docs/commands/export/"},next:{title:"export to_csv",permalink:"/i18n-tools/docs/commands/export/export to_csv"}},m={},d=[{value:"Command",id:"command",level:2},{value:"Purpose",id:"purpose",level:2},{value:"Examples of settings",id:"examples-of-settings",level:2},{value:"FAQ",id:"faq",level:2}],g={toc:d};function f(e){let{components:t,...p}=e;return(0,s.kt)("wrapper",(0,a.Z)({},g,p,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Export i18n files into a xlsx file, created by exceljs")),(0,s.kt)("h2",{id:"command"},"Command"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Display help for export to_xlsx\nnpx @jy95/i18n-tools export to_xlsx --help\n")),(0,s.kt)("h2",{id:"purpose"},"Purpose"),(0,s.kt)("p",null,"Suppose you have several i18n locales such as :"),(0,s.kt)(i.ZP,{mdxType:"I18NFilesTabs"}),(0,s.kt)("p",null,"This command helps you to turn them into a single xlsx file such as ",(0,s.kt)("a",{target:"_blank",href:n(8091).Z},"this one"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Export example",src:n(9586).Z,width:"767",height:"304"})),(0,s.kt)("h2",{id:"examples-of-settings"},"Examples of settings"),(0,s.kt)(o.Z,{defaultValue:"settings1",values:[{label:"Paths",value:"settings1"},{label:"Objects/Arrays",value:"settings2"},{label:"Customize xlsx file",value:"settings3"},{label:"Settings.js",value:"settings4"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"settings1",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'npx @jy95/i18n-tools export to_xlsx --settings "/absolutePath/to/settings1.json"\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="settings1.json"',title:'"settings1.json"'},'{\n   "files":"D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\files.json",\n   "columns":"D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\columns.json",\n   "worksheetName":"Settings 1 - Worksheet",\n   "filename":"settings1-output",\n   "outputDir":"D:\\\\TEMP\\\\TEMP"\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="files.json"',title:'"files.json"'},'{\n    "FR":"D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\fr.json",\n    "NL":"D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\nl.json",\n    "DE":"D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\de.json"\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="columns.json"',title:'"columns.json"'},'[\n    {\n        "locale":"FR",\n        "label":"French translation"\n    },\n    {\n        "locale":"NL",\n        "label":"Dutch translation"\n    },\n    {\n        "locale":"DE",\n        "label":"German translation"\n    }\n]\n'))),(0,s.kt)(r.Z,{value:"settings2",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'npx @jy95/i18n-tools export to_xlsx --settings "/absolutePath/to/settings2.json"\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="settings2.json"',title:'"settings2.json"'},'{\n   "files":{\n      "FR":"D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\fr.json",\n      "NL":"D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\nl.json",\n      "DE":"D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\de.json"\n   },\n   "columns":[\n      {\n         "locale":"FR",\n         "label":"French translation"\n      },\n      {\n         "locale":"NL",\n         "label":"Dutch translation"\n      },\n      {\n         "locale":"DE",\n         "label":"German translation"\n      }\n   ],\n   "worksheetName":"Settings 2 - Worksheet",\n   "filename":"settings2-output",\n   "outputDir":"D:\\\\TEMP\\\\TEMP"\n}\n'))),(0,s.kt)(r.Z,{value:"settings3",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'npx @jy95/i18n-tools export to_xlsx --settings "/absolutePath/to/settings3.json"\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="settings3.json"',title:'"settings3.json"'},'{\n   "files":{\n      "FR":"D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\fr.json",\n      "NL":"D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\nl.json",\n      "DE":"D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\de.json"\n   },\n   "columns":[\n      {\n         "locale":"FR",\n         "label":"French translation"\n      },\n      {\n         "locale":"NL",\n         "label":"Dutch translation"\n      },\n      {\n         "locale":"DE",\n         "label":"German translation"\n      }\n   ],\n   "worksheetCustomizer":"D:\\\\workspace\\\\i18n-tools\\\\test\\\\fixtures\\\\export-xlsx\\\\worksheetCustomizer-dynamic.js",\n   "worksheetName":"Settings 3 - Worksheet",\n   "filename":"settings3-output",\n   "outputDir":"D:\\\\TEMP\\\\TEMP"\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="worksheetCustomizer-dynamic.js"',title:'"worksheetCustomizer-dynamic.js"'},"// I keep in comments the stuff needed to convert that into a TS file\n// (So I can easily update this script in the future)\n//import { Worksheet } from \"exceljs\";\n\nmodule.exports = async function(worksheet /*: Worksheet*/) {\n  // Conditionaly formatting (to better view stuff)\n  let rowCount = worksheet.rowCount;\n  let columnCount = worksheet.columnCount;\n\n  // for easiness in the future, for arbitrary number of translations\n  // As table have a least one language (starting to 'B'), pretty simple to compute last column letter\n  let lastColumnLetter = String.fromCharCode(66 + (columnCount - 2));\n\n  // domain for rules ; All the cells\n  // Ex : \"B2:D\" + rowCount + 2\" for three languages\n  let computedRef = `B2:${lastColumnLetter + rowCount + 2}`;\n\n  worksheet.addConditionalFormatting({\n    ref: computedRef,\n    rules: [\n      // cell is empty : put it in red\n      {\n        type: 'containsText',\n        operator: 'containsBlanks',\n        style: {\n          fill: {\n            type: 'pattern',\n            pattern: 'solid',\n            bgColor: { argb: 'FF5733' },\n          },\n        },\n        priority: 1,\n      },\n      // cell contains either [FR], [NL] or [DE] : put it in orange\n      {\n        type: 'containsText',\n        operator: 'containsText',\n        text: '[FR]',\n        style: {\n          fill: {\n            type: 'pattern',\n            pattern: 'solid',\n            bgColor: { argb: 'FF9633' },\n          },\n        },\n        priority: 2,\n      },\n      {\n        type: 'containsText',\n        operator: 'containsText',\n        text: '[NL]',\n        style: {\n          fill: {\n            type: 'pattern',\n            pattern: 'solid',\n            bgColor: { argb: 'FF9633' },\n          },\n        },\n        priority: 2,\n      },\n      {\n        type: 'containsText',\n        operator: 'containsText',\n        text: '[DE]',\n        style: {\n          fill: {\n            type: 'pattern',\n            pattern: 'solid',\n            bgColor: { argb: 'FF9633' },\n          },\n        },\n        priority: 2,\n      },\n    ],\n  });\n\n  return worksheet;\n};\n"))),(0,s.kt)(r.Z,{value:"settings4",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'npx @jy95/i18n-tools export to_xlsx --settings "/absolutePath/to/settings4.js"\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="settings4.js"',title:'"settings4.js"'},'// I keep in comments the stuff needed for the typings\n// (So I can easily update this script in the future)\n//import { Worksheet } from "exceljs";\n\nmodule.exports = {\n  files: ["fr", "nl", "de"].reduce(\n    (prev, curr) =>\n      Object.assign(prev, {\n        [curr.toUpperCase()]: `D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\${curr}.json`,\n      }),\n    {}\n  ),\n  columns: [\n    ["FR", "French translation"],\n    ["NL", "Dutch translation"],\n    ["DE", "German translation"],\n  ].map(([locale, label]) => ({ locale: locale, label: label })),\n  worksheetCustomizer: async function (worksheet /*: Worksheet*/) {\n    // Conditionaly formatting (to better view stuff)\n    let rowCount = worksheet.rowCount;\n    let columnCount = worksheet.columnCount;\n\n    // for easiness in the future, for arbitrary number of translations\n    // As table have a least one language (starting to \'B\'), pretty simple to compute last column letter\n    let lastColumnLetter = String.fromCharCode(66 + (columnCount - 2));\n\n    // domain for rules ; All the cells\n    // Ex : "B2:D" + rowCount + 2" for three languages\n    let computedRef = `B2:${lastColumnLetter + rowCount + 2}`;\n\n    worksheet.addConditionalFormatting({\n      ref: computedRef,\n      rules: [\n        // cell is empty : put it in red\n        {\n          type: "containsText",\n          operator: "containsBlanks",\n          style: {\n            fill: {\n              type: "pattern",\n              pattern: "solid",\n              bgColor: { argb: "FF5733" },\n            },\n          },\n          priority: 1,\n        },\n        // cell contains either [FR], [NL] or [DE] : put it in orange\n        {\n          type: "containsText",\n          operator: "containsText",\n          text: "[FR]",\n          style: {\n            fill: {\n              type: "pattern",\n              pattern: "solid",\n              bgColor: { argb: "FF9633" },\n            },\n          },\n          priority: 2,\n        },\n        {\n          type: "containsText",\n          operator: "containsText",\n          text: "[NL]",\n          style: {\n            fill: {\n              type: "pattern",\n              pattern: "solid",\n              bgColor: { argb: "FF9633" },\n            },\n          },\n          priority: 2,\n        },\n        {\n          type: "containsText",\n          operator: "containsText",\n          text: "[DE]",\n          style: {\n            fill: {\n              type: "pattern",\n              pattern: "solid",\n              bgColor: { argb: "FF9633" },\n            },\n          },\n          priority: 2,\n        },\n      ],\n    });\n    return worksheet;\n  },\n  worksheetName: "Settings 4 - Worksheet",\n  filename: "settings4-output",\n  outputDir: "D:\\\\TEMP\\\\TEMP"\n};\n')))),(0,s.kt)("h2",{id:"faq"},"FAQ"),(0,s.kt)(l.ZP,{mdxType:"ExportFaq"}))}f.isMDXComponent=!0},8091:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/export-xlsx-b49c8130a1f24945ac7ffaea8dc3523b.xlsx"},9586:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/exampleXlsxExport-213b9c4623f1fd8ea91bab64bbe6b39e.png"}}]);