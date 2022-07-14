"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[180],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>c});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(t),c=l,d=f["".concat(i,".").concat(c)]||f[c]||m[c]||r;return t?a.createElement(d,o(o({ref:n},p),{},{components:t})):a.createElement(d,o({ref:n},p))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=f;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(7294),l=t(6010);const r="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(7462),l=t(7294),r=t(6010),o=t(2389),s=t(7392),i=t(7094),u=t(2466);const p="tabList__CuJ",m="tabItem_LNqP";function f(e){var n,t;const{lazy:o,block:f,defaultValue:c,values:d,groupId:v,className:g}=e,y=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=d?d:y.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),b=(0,s.l)(k,((e,n)=>e.value===n.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===c?c:null!=(n=null!=c?c:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?n:y[0].props.value;if(null!==h&&!k.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:j,setTabGroupChoices:_}=(0,i.U)(),[N,T]=(0,l.useState)(h),D=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=v){const e=j[v];null!=e&&e!==N&&k.some((n=>n.value===e))&&T(e)}const P=e=>{const n=e.currentTarget,t=D.indexOf(n),a=k[t].value;a!==N&&(E(n),T(a),null!=v&&_(v,String(a)))},w=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var a;const n=D.indexOf(e.currentTarget)+1;t=null!=(a=D[n])?a:D[0];break}case"ArrowLeft":{var l;const n=D.indexOf(e.currentTarget)-1;t=null!=(l=D[n])?l:D[D.length-1];break}}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":f},g)},k.map((e=>{let{value:n,label:t,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>D.push(e),onKeyDown:w,onFocus:P,onClick:P},o,{className:(0,r.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":N===n})}),null!=t?t:n)}))),o?(0,l.cloneElement)(y.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},y.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function c(e){const n=(0,o.Z)();return l.createElement(f,(0,a.Z)({key:String(n)},e))}},9505:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>p,default:()=>v,frontMatter:()=>u,metadata:()=>m,toc:()=>c});var a=t(7462),l=(t(7294),t(3905)),r=t(5488),o=t(5162);const s={toc:[]};function i(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,"The files I use are flat JSON. How can I make this command work ?"),(0,l.kt)("p",null,"Simply set option ",(0,l.kt)("inlineCode",{parentName:"p"},"keySeparator")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," in your ",(0,l.kt)("inlineCode",{parentName:"p"},"settings.json")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"settings.js"),", such as :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="settings.json"',title:'"settings.json"'},'{\n  "keySeparator": false\n}\n'))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"I only want some types of changes reported in the result file. How can I achieve that ?"),(0,l.kt)("p",null,"Simply set the ",(0,l.kt)("inlineCode",{parentName:"p"},"operations")," option in your ",(0,l.kt)("inlineCode",{parentName:"p"},"settings.json")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"settings.js")," to your liking :"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Current operations are :"),(0,l.kt)("table",{parentName:"admonition"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operation"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PUT"),(0,l.kt)("td",{parentName:"tr",align:null},"When key exists in both file1 & file2 but value was replaced")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ADD"),(0,l.kt)("td",{parentName:"tr",align:null},"When key exists in file2 but not in file1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DEL"),(0,l.kt)("td",{parentName:"tr",align:null},"When key exists in file1 but not in file2"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="settings.json"',title:'"settings.json"'},'{\n  "operations": ["PUT"]\n}\n'))))}i.isMDXComponent=!0;const u={sidebar_position:3,sidebar_label:"Diff",title:"Diff",description:"Compare at least two i18n files and generate a report"},p=void 0,m={unversionedId:"commands/diff",id:"commands/diff",title:"Diff",description:"Compare at least two i18n files and generate a report",source:"@site/docs/commands/diff.mdx",sourceDirName:"commands",slug:"/commands/diff",permalink:"/i18n-tools/docs/commands/diff",draft:!1,editUrl:"https://github.com/jy95/i18n-tools/edit/master/website/docs/commands/diff.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Diff",title:"Diff",description:"Compare at least two i18n files and generate a report"},sidebar:"tutorialSidebar",previous:{title:"import from_csv",permalink:"/i18n-tools/docs/commands/import/import from_csv"},next:{title:"FAQ",permalink:"/i18n-tools/docs/faq"}},f={},c=[{value:"Command",id:"command",level:2},{value:"Purpose",id:"purpose",level:2},{value:"Examples of settings",id:"examples-of-settings",level:2},{value:"FAQ",id:"faq",level:2}],d={toc:c};function v(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Compare at least two i18n files and generate a report")),(0,l.kt)("h2",{id:"command"},"Command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Display help for diff\nnpx @jy95/i18n-tools diff --help\n")),(0,l.kt)("h2",{id:"purpose"},"Purpose"),(0,l.kt)("p",null,"Suppose you have several versions of a i18n locale file such as :"),(0,l.kt)(r.Z,{defaultValue:"fr_v0.json",values:[{label:"fr_v0.json",value:"fr_v0.json"},{label:"fr_v1.json",value:"fr_v1.json"},{label:"fr_v2.json",value:"fr_v2.json"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"fr_v0.json",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="fr_v0.json"',title:'"fr_v0.json"'},'{\n    "untouchedKey":"Hello World",\n    "commons":{\n      "nestedKey":{\n        "changedValue":"Changed value 0"\n      },\n      "array":[\n        "Pierre"\n      ],\n      "conditionalDeletedKey":"Present"\n    }\n}\n'))),(0,l.kt)(o.Z,{value:"fr_v1.json",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="fr_v1.json"',title:'"fr_v1.json"'},'{\n    "untouchedKey":"Hello World",\n    "commons":{\n      "nestedKey":{\n        "changedValue":"Changed value 1"\n      },\n      "array":[\n        "Pierre",\n        "Paul"\n      ]\n    }\n}\n'))),(0,l.kt)(o.Z,{value:"fr_v2.json",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="fr_v2.json"',title:'"fr_v2.json"'},'{\n    "untouchedKey":"Hello World",\n    "commons":{\n      "nestedKey":{\n        "changedValue":"Changed value 2"\n      },\n      "array":[\n        "Pierre",\n        "Paul",\n        "Jacques"\n      ],\n      "conditionalDeletedKey":"Present"\n    }\n}\n')))),(0,l.kt)("p",null,"This command generates a report (in JSON by default) that shows change(s) between files :"),(0,l.kt)(r.Z,{defaultValue:"fr_v0-fr_v0",values:[{label:"fr_v0.json & fr_v0.json",value:"fr_v0-fr_v0"},{label:"fr_v0.json & fr_v1.json",value:"fr_v0-fr_v1"},{label:"fr_v0.json & fr_v1.json & fr_v2.json",value:"fr_v0-fr_v1-fr_v2"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"fr_v0-fr_v0",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="fr_v0-fr_v0.json"',title:'"fr_v0-fr_v0.json"'},'{\n  "files": {\n    "file1":"D:\\\\TEMP\\\\fr_v0.json",\n    "file2":"D:\\\\TEMP\\\\fr_v0.json"\n  },\n  "changes": []\n}\n'))),(0,l.kt)(o.Z,{value:"fr_v0-fr_v1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="fr_v0-fr_v1.json"',title:'"fr_v0-fr_v1.json"'},'{\n  "files":{\n    "file1":"D:\\\\TEMP\\\\fr_v0.json",\n    "file2":"D:\\\\TEMP\\\\fr_v1.json"\n  },\n  "changes":[\n    {\n      "from":"file1",\n      "key":"commons.nestedKey.changedValue",\n      "newValue":"Changed value 1",\n      "oldValue":"Changed value 0",\n      "to":"file2",\n      "type":"REPLACED"\n    },\n    {\n      "from":"file1",\n      "key":"commons.conditionalDeletedKey",\n      "oldValue":"Present",\n      "to":"file2",\n      "type":"DELETE"\n    },\n    {\n      "from":"file1",\n      "key":"commons.array[1]",\n      "newValue":"Paul",\n      "to":"file2",\n      "type":"ADD"\n    }\n  ]\n}\n'))),(0,l.kt)(o.Z,{value:"fr_v0-fr_v1-fr_v2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="fr_v0-fr_v1-fr_v2.json"',title:'"fr_v0-fr_v1-fr_v2.json"'},'{\n  "files":{\n    "file1":"D:\\\\TEMP\\\\fr_v0.json",\n    "file2":"D:\\\\TEMP\\\\fr_v1.json",\n    "file3":"D:\\\\TEMP\\\\fr_v2.json"\n  },\n  "changes":[\n    {\n      "key":"commons.nestedKey.changedValue",\n      "type":"REPLACED",\n      "from":"file1",\n      "to":"file2",\n      "oldValue":"Changed value 0",\n      "newValue":"Changed value 1"\n    },\n    {\n      "key":"commons.conditionalDeletedKey",\n      "type":"DELETE",\n      "from":"file1",\n      "to":"file2",\n      "oldValue":"Present"\n    },\n    {\n      "key":"commons.array[1]",\n      "type":"ADD",\n      "from":"file1",\n      "to":"file2",\n      "newValue":"Paul"\n    },\n    {\n      "key":"commons.nestedKey.changedValue",\n      "type":"REPLACED",\n      "from":"file2",\n      "to":"file3",\n      "oldValue":"Changed value 1",\n      "newValue":"Changed value 2"\n    },\n    {\n      "key":"commons.array[2]",\n      "type":"ADD",\n      "from":"file2",\n      "to":"file3",\n      "newValue":"Jacques"\n    },\n    {\n      "key":"commons.conditionalDeletedKey",\n      "type":"ADD",\n      "from":"file2",\n      "to":"file3",\n      "newValue":"Present"\n    }\n  ]\n}\n')))),(0,l.kt)("h2",{id:"examples-of-settings"},"Examples of settings"),(0,l.kt)(r.Z,{defaultValue:"settings1",values:[{label:"With two files",value:"settings1"},{label:"With three files",value:"settings2"},{label:"Settings.js",value:"settings3"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"settings1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'npx @jy95/i18n-tools diff --settings "/absolutePath/to/settings1.json"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="settings1.json"',title:'"settings1.json"'},'{\n   "filename":"diff_settings1-JSON",\n   "outputDir":"D:\\\\TEMP\\\\TEMP",\n   "outputFormat":"JSON",\n   "files":[\n      "D:\\\\TEMP\\\\fr_v0.json",\n      "D:\\\\TEMP\\\\fr_v1.json"\n   ]\n}\n'))),(0,l.kt)(o.Z,{value:"settings2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'npx @jy95/i18n-tools diff --settings "/absolutePath/to/settings2.json"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="settings2.json"',title:'"settings2.json"'},'{\n   "filename":"diff_settings2-JSON",\n   "outputDir":"D:\\\\TEMP\\\\TEMP",\n   "outputFormat":"JSON",\n   "files":[\n      "D:\\\\TEMP\\\\fr_v0.json",\n      "D:\\\\TEMP\\\\fr_v1.json",\n      "D:\\\\TEMP\\\\fr_v2.json",\n   ]\n}\n'))),(0,l.kt)(o.Z,{value:"settings3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'npx @jy95/i18n-tools diff --settings "/absolutePath/to/settings3.js"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="settings3.js"',title:'"settings3.js"'},'module.exports = {\n   "filename":"diff_settings3-JSON",\n   "outputDir":"D:\\\\TEMP\\\\TEMP",\n   "outputFormat":"JSON",\n   "files":[\n      "D:\\\\TEMP\\\\fr_v0.json",\n      "D:\\\\TEMP\\\\fr_v1.json"\n   ]\n}\n')))),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)(i,{mdxType:"DiffFaq"}))}v.isMDXComponent=!0}}]);