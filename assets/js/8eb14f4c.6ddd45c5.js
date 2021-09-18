"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[870],{8215:function(e,t,n){var o=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,s=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:s},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(7294),s=n(9443);var r=function(){var e=(0,o.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},a=n(6010),l="tabItem_1uMI",i="tabItemActive_2DSg";var u=function(e){var t,n=e.lazy,s=e.block,u=e.defaultValue,p=e.values,c=e.groupId,m=e.className,d=o.Children.toArray(e.children),x=null!=p?p:d.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=u?u:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,g=r(),b=g.tabGroupChoices,h=g.setTabGroupChoices,k=(0,o.useState)(f),y=k[0],T=k[1],j=[];if(null!=c){var v=b[c];null!=v&&v!==y&&x.some((function(e){return e.value===v}))&&T(v)}var E=function(e){var t=e.currentTarget,n=j.indexOf(t),o=x[n].value;T(o),null!=c&&(h(c,o),setTimeout((function(){var e,n,o,s,r,a,l,u;(e=t.getBoundingClientRect(),n=e.top,o=e.left,s=e.bottom,r=e.right,a=window,l=a.innerHeight,u=a.innerWidth,n>=0&&r<=u&&s<=l&&o>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},N=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o=j.indexOf(e.target)+1;n=j[o]||j[0];break;case"ArrowLeft":var s=j.indexOf(e.target)-1;n=j[s]||j[j.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":s},m)},x.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,a.Z)("tabs__item",l,{"tabs__item--active":y===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:N,onFocus:E,onClick:E},null!=n?n:t)}))),n?(0,o.cloneElement)(d.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},4296:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return m},default:function(){return x}});var o=n(7462),s=n(3366),r=(n(7294),n(3905)),a=n(5064),l=n(8215),i=["components"],u={sidebar_position:1,sidebar_label:"export to_xlsx"},p="export to_xlsx",c={unversionedId:"commands/export/export to_xlsx",id:"commands/export/export to_xlsx",isDocsHomePage:!1,title:"export to_xlsx",description:"Export i18n files into a xlsx file, created by exceljs",source:"@site/docs/commands/export/export to_xlsx.mdx",sourceDirName:"commands/export",slug:"/commands/export/export to_xlsx",permalink:"/i18n-tools/docs/commands/export/export to_xlsx",editUrl:"https://github.com/jy95/i18n-tools/edit/master/website/docs/commands/export/export to_xlsx.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"export to_xlsx"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/i18n-tools/docs/installation"},next:{title:"export to_csv",permalink:"/i18n-tools/docs/commands/export/export to_csv"}},m=[{value:"Command",id:"command",children:[]},{value:"Purpose",id:"purpose",children:[]},{value:"Examples of settings",id:"examples-of-settings",children:[]}],d={toc:m};function x(e){var t=e.components,u=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"export-to_xlsx"},"export to_xlsx"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Export i18n files into a xlsx file, created by exceljs")),(0,r.kt)("h2",{id:"command"},"Command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Display help for export to_xlsx\nnpx @jy95/i18n-tools export to_xlsx --help\n")),(0,r.kt)("h2",{id:"purpose"},"Purpose"),(0,r.kt)("p",null,"Suppose you have several i18n locales such as :"),(0,r.kt)(a.Z,{defaultValue:"fr.json",values:[{label:"fr.json",value:"fr.json"},{label:"nl.json",value:"nl.json"},{label:"de.json",value:"de.json"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"fr.json",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="fr.json"',title:'"fr.json"'},'{\n  "commons":{\n    "myNestedKey":"Hello world FR",\n    "myNestedArray":[\n      "1 FR",\n      "2 FR",\n      "3 FR"\n    ]\n  },\n  "array":[\n    "1 FR",\n    "2 FR",\n    "3 FR"\n  ],\n  "simpleKey":"[FR] not setted key",\n  "Key with spaces":[\n    {\n      "test":"42 is the answer"\n    }\n  ],\n  "Missing key in DE":"present"\n}\n'))),(0,r.kt)(l.Z,{value:"nl.json",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="nl.json"',title:'"nl.json"'},'{\n  "commons":{\n    "myNestedKey":"Hello world NL",\n    "myNestedArray":[\n      "1 NL",\n      "2 NL",\n      "3 NL"\n    ]\n  },\n  "array":[\n    "1 NL",\n    "2 NL",\n    "3 NL"\n  ],\n  "simpleKey":"[NL] not setted key",\n  "Key with spaces":[\n    {\n      "test":"42 is the answer"\n    }\n  ],\n  "Missing key in DE":"present"\n}\n'))),(0,r.kt)(l.Z,{value:"de.json",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="de.json"',title:'"de.json"'},'{\n  "commons":{\n    "myNestedKey":"Hello world DE",\n    "myNestedArray":[\n      "1 DE",\n      "2 DE",\n      "3 DE"\n    ]\n  },\n  "array":[\n    "1 DE",\n    "2 DE",\n    "3 DE"\n  ],\n  "simpleKey":"[DE] not setted key",\n  "Key with spaces":[\n    {\n      "test":"42 is the answer"\n    }\n  ]\n}\n')))),(0,r.kt)("p",null,"This command helps you to turn them into a single xlsx file such as ",(0,r.kt)("a",{target:"_blank",href:n(7199).Z},"this one"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Export example",src:n(9066).Z})),(0,r.kt)("h2",{id:"examples-of-settings"},"Examples of settings"),(0,r.kt)(a.Z,{defaultValue:"settings1",values:[{label:"Paths",value:"settings1"},{label:"Objects/Arrays",value:"settings2"},{label:"Customize xlsx file",value:"settings3"},{label:"Settings.js",value:"settings4"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"settings1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'npx @jy95/i18n-tools export to_xlsx --settings "/absolutePath/to/settings1.json"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="settings1.json"',title:'"settings1.json"'},'{\n   "files":"D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\files.json",\n   "columns":"D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\columns.json",\n   "worksheetName":"Settings 1 - Worksheet",\n   "filename":"settings1-output",\n   "outputDir":"D:\\\\TEMP\\\\TEMP"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="files.json"',title:'"files.json"'},'{\n    "FR":"D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\fr.json",\n    "NL":"D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\nl.json",\n    "DE":"D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\de.json"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="columns.json"',title:'"columns.json"'},'[\n    {\n        "locale":"FR",\n        "label":"French translation"\n    },\n    {\n        "locale":"NL",\n        "label":"Dutch translation"\n    },\n    {\n        "locale":"DE",\n        "label":"German translation"\n    }\n]\n'))),(0,r.kt)(l.Z,{value:"settings2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'npx @jy95/i18n-tools export to_xlsx --settings "/absolutePath/to/settings2.json"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="settings2.json"',title:'"settings2.json"'},'{\n   "files":{\n      "FR":"D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\fr.json",\n      "NL":"D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\nl.json",\n      "DE":"D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\de.json"\n   },\n   "columns":[\n      {\n         "locale":"FR",\n         "label":"French translation"\n      },\n      {\n         "locale":"NL",\n         "label":"Dutch translation"\n      },\n      {\n         "locale":"DE",\n         "label":"German translation"\n      }\n   ],\n   "worksheetName":"Settings 2 - Worksheet",\n   "filename":"settings2-output",\n   "outputDir":"D:\\\\TEMP\\\\TEMP"\n}\n'))),(0,r.kt)(l.Z,{value:"settings3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'npx @jy95/i18n-tools export to_xlsx --settings "/absolutePath/to/settings3.json"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="settings3.json"',title:'"settings3.json"'},'{\n   "files":{\n      "FR":"D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\fr.json",\n      "NL":"D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\nl.json",\n      "DE":"D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\de.json"\n   },\n   "columns":[\n      {\n         "locale":"FR",\n         "label":"French translation"\n      },\n      {\n         "locale":"NL",\n         "label":"Dutch translation"\n      },\n      {\n         "locale":"DE",\n         "label":"German translation"\n      }\n   ],\n   "worksheetCustomizer":"D:\\\\workspace\\\\i18n-tools\\\\test\\\\fixtures\\\\export-xlsx\\\\worksheetCustomizer-dynamic.js",\n   "worksheetName":"Settings 3 - Worksheet",\n   "filename":"settings3-output",\n   "outputDir":"D:\\\\TEMP\\\\TEMP"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="worksheetCustomizer-dynamic.js"',title:'"worksheetCustomizer-dynamic.js"'},"// I keep in comments the stuff needed to convert that into a TS file\n// (So I can easily update this script in the future)\n//import { Worksheet } from \"exceljs\";\n\nmodule.exports = async function(worksheet /*: Worksheet*/) {\n  // Conditionaly formatting (to better view stuff)\n  let rowCount = worksheet.rowCount;\n  let columnCount = worksheet.columnCount;\n\n  // for easiness in the future, for arbitrary number of translations\n  // As table have a least one language (starting to 'B'), pretty simple to compute last column letter\n  let lastColumnLetter = String.fromCharCode(66 + (columnCount - 2));\n\n  // domain for rules ; All the cells\n  // Ex : \"B2:D\" + rowCount + 2\" for three languages\n  let computedRef = `B2:${lastColumnLetter + rowCount + 2}`;\n\n  worksheet.addConditionalFormatting({\n    ref: computedRef,\n    rules: [\n      // cell is empty : put it in red\n      {\n        type: 'containsText',\n        operator: 'containsBlanks',\n        style: {\n          fill: {\n            type: 'pattern',\n            pattern: 'solid',\n            bgColor: { argb: 'FF5733' },\n          },\n        },\n        priority: 1,\n      },\n      // cell contains either [FR], [NL] or [DE] : put it in orange\n      {\n        type: 'containsText',\n        operator: 'containsText',\n        text: '[FR]',\n        style: {\n          fill: {\n            type: 'pattern',\n            pattern: 'solid',\n            bgColor: { argb: 'FF9633' },\n          },\n        },\n        priority: 2,\n      },\n      {\n        type: 'containsText',\n        operator: 'containsText',\n        text: '[NL]',\n        style: {\n          fill: {\n            type: 'pattern',\n            pattern: 'solid',\n            bgColor: { argb: 'FF9633' },\n          },\n        },\n        priority: 2,\n      },\n      {\n        type: 'containsText',\n        operator: 'containsText',\n        text: '[DE]',\n        style: {\n          fill: {\n            type: 'pattern',\n            pattern: 'solid',\n            bgColor: { argb: 'FF9633' },\n          },\n        },\n        priority: 2,\n      },\n    ],\n  });\n\n  return worksheet;\n};\n"))),(0,r.kt)(l.Z,{value:"settings4",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'npx @jy95/i18n-tools export to_xlsx --settings "/absolutePath/to/settings4.js"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="settings4.js"',title:'"settings4.js"'},'// I keep in comments the stuff needed for the typings\n// (So I can easily update this script in the future)\n//import { Worksheet } from "exceljs";\n\nmodule.exports = {\n  files2: ["fr", "nl", "de"].reduce(\n    (prev, curr) =>\n      Object.assign(prev, {\n        [curr.toUpperCase()]: `D:\\\\TEMP\\\\TEMP\\\\tests-for-export\\\\correct\\\\${curr}.json`,\n      }),\n    {}\n  ),\n  columns: [\n    ["FR", "French translation"],\n    ["NL", "Dutch translation"],\n    ["DE", "German translation"],\n  ].map(([locale, label]) => ({ locale: locale, label: label })),\n  worksheetCustomizer: async function (worksheet /*: Worksheet*/) {\n    // Conditionaly formatting (to better view stuff)\n    let rowCount = worksheet.rowCount;\n    let columnCount = worksheet.columnCount;\n\n    // for easiness in the future, for arbitrary number of translations\n    // As table have a least one language (starting to \'B\'), pretty simple to compute last column letter\n    let lastColumnLetter = String.fromCharCode(66 + (columnCount - 2));\n\n    // domain for rules ; All the cells\n    // Ex : "B2:D" + rowCount + 2" for three languages\n    let computedRef = `B2:${lastColumnLetter + rowCount + 2}`;\n\n    worksheet.addConditionalFormatting({\n      ref: computedRef,\n      rules: [\n        // cell is empty : put it in red\n        {\n          type: "containsText",\n          operator: "containsBlanks",\n          style: {\n            fill: {\n              type: "pattern",\n              pattern: "solid",\n              bgColor: { argb: "FF5733" },\n            },\n          },\n          priority: 1,\n        },\n        // cell contains either [FR], [NL] or [DE] : put it in orange\n        {\n          type: "containsText",\n          operator: "containsText",\n          text: "[FR]",\n          style: {\n            fill: {\n              type: "pattern",\n              pattern: "solid",\n              bgColor: { argb: "FF9633" },\n            },\n          },\n          priority: 2,\n        },\n        {\n          type: "containsText",\n          operator: "containsText",\n          text: "[NL]",\n          style: {\n            fill: {\n              type: "pattern",\n              pattern: "solid",\n              bgColor: { argb: "FF9633" },\n            },\n          },\n          priority: 2,\n        },\n        {\n          type: "containsText",\n          operator: "containsText",\n          text: "[DE]",\n          style: {\n            fill: {\n              type: "pattern",\n              pattern: "solid",\n              bgColor: { argb: "FF9633" },\n            },\n          },\n          priority: 2,\n        },\n      ],\n    });\n    return worksheet;\n  },\n  worksheetName: "Settings 4 - Worksheet",\n  filename: "settings4-output",\n  outputDir: "D:\\\\TEMP\\\\TEMP"\n};\n')))))}x.isMDXComponent=!0},7199:function(e,t,n){t.Z=n.p+"assets/files/export-xlsx-b49c8130a1f24945ac7ffaea8dc3523b.xlsx"},9066:function(e,t,n){t.Z=n.p+"assets/images/exampleXlsxExport-213b9c4623f1fd8ea91bab64bbe6b39e.png"}}]);