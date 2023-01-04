"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[81254],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={id:"document-intro",title:"Introduction",sidebar_label:"Introduction"},a=void 0,l={unversionedId:"document-intro",id:"document-intro",title:"Introduction",description:"Good documentation is crucial for any kind of software. This is especially true for sophisticated software systems such as distributed messaging system like Apache Pulsar. The Apache Pulsar community aims to provide concise, precise, and complete documentation and welcomes any contribution to improve Apache Pulsar's documentation.",source:"@site/contribute/document-intro.md",sourceDirName:".",slug:"/document-intro",permalink:"/contribute/document-intro",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/contribute/document-intro.md",tags:[],version:"current",lastUpdatedBy:"momo-jun",lastUpdatedAt:1672807622,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{id:"document-intro",title:"Introduction",sidebar_label:"Introduction"},sidebar:"sidebarDevelopment",previous:{title:"Personal CI",permalink:"/contribute/personal-ci"},next:{title:"Updating document",permalink:"/contribute/document-contribution"}},c={},u=[{value:"Writing documents",id:"writing-documents",level:2},{value:"Testing changes",id:"testing-changes",level:2},{value:"Submitting changes",id:"submitting-changes",level:2},{value:"Convention",id:"convention",level:3},{value:"Pull request process",id:"pull-request-process",level:3},{value:"Reference",id:"reference",level:2}],s={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Good documentation is crucial for any kind of software. This is especially true for sophisticated software systems such as distributed messaging system like Apache Pulsar. The Apache Pulsar community aims to provide concise, precise, and complete documentation and welcomes any contribution to improve Apache Pulsar's documentation."),(0,o.kt)("p",null,"This introduction provides a set of guides offering best-practice suggestions for contributing documentation to Pulsar. It provides detailed instructions on the contribution workflow and conventions. Please follow these guidelines to keep the documentation structure, style, and syntax consistent."),(0,o.kt)("h2",{id:"writing-documents"},"Writing documents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/contribute/document-contribution"},"How to update document")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/contribute/document-syntax"},"Writing Syntax Guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1lc5j4RtuLIzlEYCBo97AC8-U_3Erzs_lxpkDuseU0n4/edit#"},"Writing Style Guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/16Hp7Sc86MQtL0m8fc2w_TrcKXAuglwRwHmdmwfk00mI/edit#heading=h.b8ogodj5sj0"},"Design Style Guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1-I1oQp1_HUaQopqilU-JdC-ksrLAgYNi93FZVnECwV8/edit#heading=h.wu6ygjne8e35"},"API Documentation Guide"))),(0,o.kt)("h2",{id:"testing-changes"},"Testing changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/contribute/document-preview"},"How to preview changes"))),(0,o.kt)("h2",{id:"submitting-changes"},"Submitting changes"),(0,o.kt)("h3",{id:"convention"},"Convention"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/contribute/develop-labels"},"Labels")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/contribute/develop-semantic-title"},"Conventional commits"))),(0,o.kt)("h3",{id:"pull-request-process"},"Pull request process"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork"},"Creating a pull request from a fork"))),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("p",null,"In addition, the following resources can help you craft and contribute to docs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/tech-writing/overview"},"Google Technical Writing Courses"))))}d.isMDXComponent=!0}}]);