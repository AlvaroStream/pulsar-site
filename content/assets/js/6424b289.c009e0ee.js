"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[59819],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),d=p(n),c=a,k=d["".concat(s,".").concat(c)]||d[c]||u[c]||l;return n?r.createElement(k,o(o({ref:e},m),{},{components:n})):r.createElement(k,o({ref:e},m))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[d]="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},65133:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={id:"io-solr-sink",title:"Solr sink connector",sidebar_label:"Solr sink connector"},o=void 0,i={unversionedId:"io-solr-sink",id:"io-solr-sink",title:"Solr sink connector",description:"You can download all the Pulsar connectors on download page.",source:"@site/docs/io-solr-sink.md",sourceDirName:".",slug:"/io-solr-sink",permalink:"/docs/next/io-solr-sink",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/io-solr-sink.md",tags:[],version:"current",frontMatter:{id:"io-solr-sink",title:"Solr sink connector",sidebar_label:"Solr sink connector"}},s={},p=[],m={toc:p};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You can download all the Pulsar connectors on ",(0,a.kt)("a",{parentName:"p",href:"pathname:///download"},"download page"),"."),(0,a.kt)("p",{parentName:"admonition"},"::::"),(0,a.kt)("p",{parentName:"admonition"},"The Solr sink connector pulls messages from Pulsar topics and persists the messages to Solr collections."),(0,a.kt)("h2",{parentName:"admonition",id:"configuration"},"Configuration"),(0,a.kt)("p",{parentName:"admonition"},"The configuration of the Solr sink connector has the following properties."),(0,a.kt)("h3",{parentName:"admonition",id:"property"},"Property"),(0,a.kt)("table",{parentName:"admonition"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"solrUrl")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("li",null,"Comma-separated zookeeper hosts with chroot used in the SolrCloud mode. ",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Example"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"localhost:2181,localhost:2182/chroot")," ",(0,a.kt)("br",null),(0,a.kt)("br",null)),(0,a.kt)("li",null,"URL to connect to Solr used in standalone mode. ",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Example"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"localhost:8983/solr")," "))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"solrMode")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null},"SolrCloud"),(0,a.kt)("td",{parentName:"tr",align:null},"The client mode when interacting with the Solr cluster. ",(0,a.kt)("br",null),(0,a.kt)("br",null),"Below are the available options:",(0,a.kt)("br",null),(0,a.kt)("li",null,"Standalone",(0,a.kt)("br",null)),(0,a.kt)("li",null," SolrCloud"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"solrCollection")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,a.kt)("td",{parentName:"tr",align:null},"Solr collection name to which records need to be written.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"solrCommitWithinMs")),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"The time within million seconds for Solr updating commits.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"username")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,a.kt)("td",{parentName:"tr",align:null},"The username for basic authentication.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Note: ",(0,a.kt)("inlineCode",{parentName:"strong"},"usename")," is case-sensitive."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"password")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,a.kt)("td",{parentName:"tr",align:null},"The password for basic authentication. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Note: ",(0,a.kt)("inlineCode",{parentName:"strong"},"password")," is case-sensitive."))))),(0,a.kt)("h3",{parentName:"admonition",id:"example"},"Example"),(0,a.kt)("p",{parentName:"admonition"},"Before using the Solr sink connector, you need to create a configuration file through one of the following methods."),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"JSON"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "configs": {\n      "solrUrl": "localhost:2181,localhost:2182/chroot",\n      "solrMode": "SolrCloud",\n      "solrCollection": "techproducts",\n      "solrCommitWithinMs": 100,\n      "username": "fakeuser",\n      "password": "fake@123"\n   }\n}\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"YAML"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'configs:\n  solrUrl: "localhost:2181,localhost:2182/chroot"\n  solrMode: "SolrCloud"\n  solrCollection: "techproducts"\n  solrCommitWithinMs: 100\n  username: "fakeuser"\n  password: "fake@123"\n'))))))}d.isMDXComponent=!0}}]);