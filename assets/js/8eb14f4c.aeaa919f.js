"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[870],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7462),a=n(7294),o=n(2389),s=n(9548),l=n(6010),i="tabItem_LplD";function u(e){var t,n,o,u=e.lazy,p=e.block,c=e.defaultValue,m=e.values,d=e.groupId,f=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),x=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,s.lx)(x,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(t=null!=c?c:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=g[0])?void 0:o.props.value;if(null!==y&&!x.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+x.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,s.UB)(),k=b.tabGroupChoices,v=b.setTabGroupChoices,j=(0,a.useState)(y),N=j[0],w=j[1],T=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var D=k[d];null!=D&&D!==N&&x.some((function(e){return e.value===D}))&&w(D)}var C=function(e){var t=e.currentTarget,n=T.indexOf(t),r=x[n].value;r!==N&&(E(t),w(r),null!=d&&v(d,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},f)},x.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return T.push(e)},onKeyDown:P,onFocus:C,onClick:C},o,{className:(0,l.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(g.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function p(e){var t=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},8373:function(e,t,n){n.d(t,{ZP:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=n(9877),l=n(8215),i=["components"],u={toc:[]};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{defaultValue:"fr.json",values:[{label:"fr.json",value:"fr.json"},{label:"nl.json",value:"nl.json"},{label:"de.json",value:"de.json"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"fr.json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="fr.json"',title:'"fr.json"'},'{\n  "commons":{\n    "myNestedKey":"Hello world FR",\n    "myNestedArray":[\n      "1 FR",\n      "2 FR",\n      "3 FR"\n    ]\n  },\n  "array":[\n    "1 FR",\n    "2 FR",\n    "3 FR"\n  ],\n  "simpleKey":"[FR] not setted key",\n  "Key with spaces":[\n    {\n      "test":"42 is the answer"\n    }\n  ],\n  "Missing key in DE":"present"\n}\n'))),(0,o.kt)(l.Z,{value:"nl.json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="nl.json"',title:'"nl.json"'},'{\n  "commons":{\n    "myNestedKey":"Hello world NL",\n    "myNestedArray":[\n      "1 NL",\n      "2 NL",\n      "3 NL"\n    ]\n  },\n  "array":[\n    "1 NL",\n    "2 NL",\n    "3 NL"\n  ],\n  "simpleKey":"[NL] not setted key",\n  "Key with spaces":[\n    {\n      "test":"42 is the answer"\n    }\n  ],\n  "Missing key in DE":"present"\n}\n'))),(0,o.kt)(l.Z,{value:"de.json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="de.json"',title:'"de.json"'},'{\n  "commons":{\n    "myNestedKey":"Hello world DE",\n    "myNestedArray":[\n      "1 DE",\n      "2 DE",\n      "3 DE"\n    ]\n  },\n  "array":[\n    "1 DE",\n    "2 DE",\n    "3 DE"\n  ],\n  "simpleKey":"[DE] not setted key",\n  "Key with spaces":[\n    {\n      "test":"42 is the answer"\n    }\n  ]\n}\n')))))}p.isMDXComponent=!0},3775:function(e,t,n){n.d(t,{ZP:function(){return i}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],l={toc:[]};function i(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("details",null,(0,o.kt)("summary",null,"I only want a subset of the data. How can I achieve that ?"),(0,o.kt)("p",null,"Simply add the ",(0,o.kt)("inlineCode",{parentName:"p"},"resultsFilter")," option in your ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.json")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.js")," :"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Reminder - the type of the function parameter :"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type I18N_Merged_Data = {\n  technical_key: string;\n  labels: {\n    [locale: string]: string;\n  };\n}[];\n")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="settings.js"',title:'"settings.js"'},'"resultsFilter": function(data /*: I18N_Merged_Data*/) {\n  return data.filter((row) => \n    // Takes rows that have at least a missing label in one i18n file such as "Missing key in DE" case\n    // Object.keys(row.labels).length !== 3 ||\n    Object\n      .values(row.labels)\n      // Takes rows that have at least one empty label or contains a given prefix\n      .some(\n        (label) =>\n          label.length === 0 ||\n          ["[FR]", "[NL]", "[DE]"].some((prefix) => label.startsWith(prefix))\n      )\n  );\n}\n')),(0,o.kt)("p",null,"OR "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="settings.json"',title:'"settings.json"'},'"resultsFilter": "D:\\\\TEMP\\\\TEMP\\\\resultsFilter.js"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="resultsFilter.js"',title:'"resultsFilter.js"'},'module.exports = function(data /*: I18N_Merged_Data*/) {\n  return data.filter((row) => \n    // Takes rows that have at least a missing label in one i18n file such as "Missing key in DE" case\n    // Object.keys(row.labels).length !== 3 ||\n    Object\n      .values(row.labels)\n      // Takes rows that have at least one empty label or contains a given prefix\n      .some(\n        (label) =>\n          label.length === 0 ||\n          ["[FR]", "[NL]", "[DE]"].some((prefix) => label.startsWith(prefix))\n      )\n  );\n}\n'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"I want the locales in a given order in the result file. How can I achieve that ?"),(0,o.kt)("p",null,"Simply update the ",(0,o.kt)("inlineCode",{parentName:"p"},"columns")," option with your given order in your ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.json")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.js"),", such as :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="settings.js"',title:'"settings.js"'},'"columns": [\n  {\n      "locale":"NL",\n      "label":"Dutch translation"\n  },\n  {\n      "locale":"FR",\n      "label":"French translation"\n  }\n]\n'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"I only work with flat JSON file(s). How can I make this command work ?"),(0,o.kt)("p",null,"Simply set option ",(0,o.kt)("inlineCode",{parentName:"p"},"keySeparator")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.json")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.js"),", such as :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="settings.json"',title:'"settings.json"'},'{\n  "keySeparator": false\n}\n'))))}i.isMDXComponent=!0},4296:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return f},default:function(){return x}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=n(9877),l=n(8215),i=n(3775),u=n(8373),p=["components"],c={sidebar_position:1,sidebar_label:"export to_xlsx",title:"export to_xlsx",description:"Export i18n files into a xlsx file, created by exceljs"},m=void 0,d={unversionedId:"commands/export/export to_xlsx",id:"commands/export/export to_xlsx",title:"export to_xlsx",description:"Export i18n files into a xlsx file, created by exceljs",source:"@site/docs/commands/export/export to_xlsx.mdx",sourceDirName:"commands/export",slug:"/commands/export/export to_xlsx",permalink:"/i18n-tools/docs/commands/export/export to_xlsx",editUrl:"https://github.com/jy95/i18n-tools/edit/master/website/docs/commands/export/export to_xlsx.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"export to_xlsx",title:"export to_xlsx",description:"Export i18n files into a xlsx file, created by exceljs"},sidebar:"tutorialSidebar",previous:{title:"Export commands",permalink:"/i18n-tools/docs/commands/export/"},next:{title:"export to_csv",permalink:"/i18n-tools/docs/commands/export/export to_csv"}},f=[{value:"Command",id:"command",children:[],level:2},{value:"Purpose",id:"purpose",children:[],level:2},{value:"Examples of settings",id:"examples-of-settings",children:[],level:2},{value:"FAQ",id:"faq",children:[],level:2}],g={toc:f};function x(e){var t=e.components,c=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},g,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Export i18n files into a xlsx file, created by exceljs")),(0,o.kt)("h2",{id:"command"},"Command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Display help for export to_xlsx\nnpx @jy95/i18n-tools export to_xlsx --help\n")),(0,o.kt)("h2",{id:"purpose"},"Purpose"),(0,o.kt)("p",null,"Suppose you have several i18n locales such as :"),(0,o.kt)(u.ZP,{mdxType:"I18NFilesTabs"}),(0,o.kt)("p",null,"This command helps you to turn them into a single xlsx file such as ",(0,o.kt)("a",{target:"_blank",href:n(7199).Z},"this one"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Export example",src:n(8241).Z,width:"767",height:"304"})),(0,o.kt)("h2",{id:"examples-of-settings"},"Examples of settings"),(0,o.kt)(s.Z,{defaultValue:"settings1",values:[{label:"Paths",value:"settings1"},{label:"Objects/Arrays",value:"settings2"},{label:"Customize xlsx file",value:"settings3"},{label:"Settings.js",value:"settings4"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"settings1",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'npx @jy95/i18n-tools export to_xlsx --settings "/absolutePath/to/settings1.json"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="settings1.json"',title:'"settings1.json"'},'{\n   "files":"D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\files.json",\n   "columns":"D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\columns.json",\n   "worksheetName":"Settings 1 - Worksheet",\n   "filename":"settings1-output",\n   "outputDir":"D:\\\\TEMP\\\\TEMP"\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="files.json"',title:'"files.json"'},'{\n    "FR":"D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\fr.json",\n    "NL":"D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\nl.json",\n    "DE":"D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\de.json"\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="columns.json"',title:'"columns.json"'},'[\n    {\n        "locale":"FR",\n        "label":"French translation"\n    },\n    {\n        "locale":"NL",\n        "label":"Dutch translation"\n    },\n    {\n        "locale":"DE",\n        "label":"German translation"\n    }\n]\n'))),(0,o.kt)(l.Z,{value:"settings2",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'npx @jy95/i18n-tools export to_xlsx --settings "/absolutePath/to/settings2.json"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="settings2.json"',title:'"settings2.json"'},'{\n   "files":{\n      "FR":"D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\fr.json",\n      "NL":"D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\nl.json",\n      "DE":"D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\de.json"\n   },\n   "columns":[\n      {\n         "locale":"FR",\n         "label":"French translation"\n      },\n      {\n         "locale":"NL",\n         "label":"Dutch translation"\n      },\n      {\n         "locale":"DE",\n         "label":"German translation"\n      }\n   ],\n   "worksheetName":"Settings 2 - Worksheet",\n   "filename":"settings2-output",\n   "outputDir":"D:\\\\TEMP\\\\TEMP"\n}\n'))),(0,o.kt)(l.Z,{value:"settings3",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'npx @jy95/i18n-tools export to_xlsx --settings "/absolutePath/to/settings3.json"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="settings3.json"',title:'"settings3.json"'},'{\n   "files":{\n      "FR":"D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\fr.json",\n      "NL":"D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\nl.json",\n      "DE":"D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\de.json"\n   },\n   "columns":[\n      {\n         "locale":"FR",\n         "label":"French translation"\n      },\n      {\n         "locale":"NL",\n         "label":"Dutch translation"\n      },\n      {\n         "locale":"DE",\n         "label":"German translation"\n      }\n   ],\n   "worksheetCustomizer":"D:\\\\workspace\\\\i18n-tools\\\\test\\\\fixtures\\\\export-xlsx\\\\worksheetCustomizer-dynamic.js",\n   "worksheetName":"Settings 3 - Worksheet",\n   "filename":"settings3-output",\n   "outputDir":"D:\\\\TEMP\\\\TEMP"\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="worksheetCustomizer-dynamic.js"',title:'"worksheetCustomizer-dynamic.js"'},"// I keep in comments the stuff needed to convert that into a TS file\n// (So I can easily update this script in the future)\n//import { Worksheet } from \"exceljs\";\n\nmodule.exports = async function(worksheet /*: Worksheet*/) {\n  // Conditionaly formatting (to better view stuff)\n  let rowCount = worksheet.rowCount;\n  let columnCount = worksheet.columnCount;\n\n  // for easiness in the future, for arbitrary number of translations\n  // As table have a least one language (starting to 'B'), pretty simple to compute last column letter\n  let lastColumnLetter = String.fromCharCode(66 + (columnCount - 2));\n\n  // domain for rules ; All the cells\n  // Ex : \"B2:D\" + rowCount + 2\" for three languages\n  let computedRef = `B2:${lastColumnLetter + rowCount + 2}`;\n\n  worksheet.addConditionalFormatting({\n    ref: computedRef,\n    rules: [\n      // cell is empty : put it in red\n      {\n        type: 'containsText',\n        operator: 'containsBlanks',\n        style: {\n          fill: {\n            type: 'pattern',\n            pattern: 'solid',\n            bgColor: { argb: 'FF5733' },\n          },\n        },\n        priority: 1,\n      },\n      // cell contains either [FR], [NL] or [DE] : put it in orange\n      {\n        type: 'containsText',\n        operator: 'containsText',\n        text: '[FR]',\n        style: {\n          fill: {\n            type: 'pattern',\n            pattern: 'solid',\n            bgColor: { argb: 'FF9633' },\n          },\n        },\n        priority: 2,\n      },\n      {\n        type: 'containsText',\n        operator: 'containsText',\n        text: '[NL]',\n        style: {\n          fill: {\n            type: 'pattern',\n            pattern: 'solid',\n            bgColor: { argb: 'FF9633' },\n          },\n        },\n        priority: 2,\n      },\n      {\n        type: 'containsText',\n        operator: 'containsText',\n        text: '[DE]',\n        style: {\n          fill: {\n            type: 'pattern',\n            pattern: 'solid',\n            bgColor: { argb: 'FF9633' },\n          },\n        },\n        priority: 2,\n      },\n    ],\n  });\n\n  return worksheet;\n};\n"))),(0,o.kt)(l.Z,{value:"settings4",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'npx @jy95/i18n-tools export to_xlsx --settings "/absolutePath/to/settings4.js"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="settings4.js"',title:'"settings4.js"'},'// I keep in comments the stuff needed for the typings\n// (So I can easily update this script in the future)\n//import { Worksheet } from "exceljs";\n\nmodule.exports = {\n  files: ["fr", "nl", "de"].reduce(\n    (prev, curr) =>\n      Object.assign(prev, {\n        [curr.toUpperCase()]: `D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\${curr}.json`,\n      }),\n    {}\n  ),\n  columns: [\n    ["FR", "French translation"],\n    ["NL", "Dutch translation"],\n    ["DE", "German translation"],\n  ].map(([locale, label]) => ({ locale: locale, label: label })),\n  worksheetCustomizer: async function (worksheet /*: Worksheet*/) {\n    // Conditionaly formatting (to better view stuff)\n    let rowCount = worksheet.rowCount;\n    let columnCount = worksheet.columnCount;\n\n    // for easiness in the future, for arbitrary number of translations\n    // As table have a least one language (starting to \'B\'), pretty simple to compute last column letter\n    let lastColumnLetter = String.fromCharCode(66 + (columnCount - 2));\n\n    // domain for rules ; All the cells\n    // Ex : "B2:D" + rowCount + 2" for three languages\n    let computedRef = `B2:${lastColumnLetter + rowCount + 2}`;\n\n    worksheet.addConditionalFormatting({\n      ref: computedRef,\n      rules: [\n        // cell is empty : put it in red\n        {\n          type: "containsText",\n          operator: "containsBlanks",\n          style: {\n            fill: {\n              type: "pattern",\n              pattern: "solid",\n              bgColor: { argb: "FF5733" },\n            },\n          },\n          priority: 1,\n        },\n        // cell contains either [FR], [NL] or [DE] : put it in orange\n        {\n          type: "containsText",\n          operator: "containsText",\n          text: "[FR]",\n          style: {\n            fill: {\n              type: "pattern",\n              pattern: "solid",\n              bgColor: { argb: "FF9633" },\n            },\n          },\n          priority: 2,\n        },\n        {\n          type: "containsText",\n          operator: "containsText",\n          text: "[NL]",\n          style: {\n            fill: {\n              type: "pattern",\n              pattern: "solid",\n              bgColor: { argb: "FF9633" },\n            },\n          },\n          priority: 2,\n        },\n        {\n          type: "containsText",\n          operator: "containsText",\n          text: "[DE]",\n          style: {\n            fill: {\n              type: "pattern",\n              pattern: "solid",\n              bgColor: { argb: "FF9633" },\n            },\n          },\n          priority: 2,\n        },\n      ],\n    });\n    return worksheet;\n  },\n  worksheetName: "Settings 4 - Worksheet",\n  filename: "settings4-output",\n  outputDir: "D:\\\\TEMP\\\\TEMP"\n};\n')))),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)(i.ZP,{mdxType:"ExportFaq"}))}x.isMDXComponent=!0},7199:function(e,t,n){t.Z=n.p+"assets/files/export-xlsx-b49c8130a1f24945ac7ffaea8dc3523b.xlsx"},8241:function(e,t,n){t.Z=n.p+"assets/images/exampleXlsxExport-213b9c4623f1fd8ea91bab64bbe6b39e.png"}}]);