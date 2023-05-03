"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[26279],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>N});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,N=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(N,l(l({ref:t},c),{},{components:n})):a.createElement(N,l({ref:t},c))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={id:"io-netty-source",title:"Netty source connector",sidebar_label:"Netty source connector"},l=void 0,p={unversionedId:"io-netty-source",id:"io-netty-source",title:"Netty source connector",description:"You can download all the Pulsar connectors on download page.",source:"@site/docs/io-netty-source.md",sourceDirName:".",slug:"/io-netty-source",permalink:"/docs/next/io-netty-source",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/io-netty-source.md",tags:[],version:"current",frontMatter:{id:"io-netty-source",title:"Netty source connector",sidebar_label:"Netty source connector"}},i={},s=[],c={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can download all the Pulsar connectors on ",(0,r.kt)("a",{parentName:"p",href:"pathname:///download"},"download page"),"."),(0,r.kt)("p",{parentName:"admonition"},"::::"),(0,r.kt)("p",{parentName:"admonition"},"The Netty source connector opens a port that accepts incoming data via the configured network protocol and publishes it to user-defined Pulsar topics."),(0,r.kt)("p",{parentName:"admonition"},"This connector can be used in a containerized (for example, k8s) deployment. Otherwise, if the connector is running in process or thread mode, the instance may be conflicting on listening to ports."),(0,r.kt)("h2",{parentName:"admonition",id:"configuration"},"Configuration"),(0,r.kt)("p",{parentName:"admonition"},"The configuration of the Netty source connector has the following properties."),(0,r.kt)("h3",{parentName:"admonition",id:"property"},"Property"),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"tcp"),(0,r.kt)("td",{parentName:"tr",align:null},"The network protocol over which data is transmitted to netty. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Below are the available options:",(0,r.kt)("br",null),(0,r.kt)("li",null,"tcp"),(0,r.kt)("li",null,"http"),(0,r.kt)("li",null,"udp "))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"host")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"127.0.0.1"),(0,r.kt)("td",{parentName:"tr",align:null},"The host name or address on which the source instance listen.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"port")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"10999"),(0,r.kt)("td",{parentName:"tr",align:null},"The port on which the source instance listen.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"numberOfThreads")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of threads of Netty TCP server to accept incoming connections and handle the traffic of accepted connections.")))),(0,r.kt)("h3",{parentName:"admonition",id:"example"},"Example"),(0,r.kt)("p",{parentName:"admonition"},"Before using the Netty source connector, you need to create a configuration file through one of the following methods."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JSON"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "configs": {\n      "type": "tcp",\n      "host": "127.0.0.1",\n      "port": "10911",\n      "numberOfThreads": "1"\n   }\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"YAML"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'configs:\n    type: "tcp"\n    host: "127.0.0.1"\n    port: 10999\n    numberOfThreads: 1\n')))),(0,r.kt)("h2",{parentName:"admonition",id:"usage"},"Usage"),(0,r.kt)("p",{parentName:"admonition"},"The following examples show how to use the Netty source connector with TCP and HTTP."),(0,r.kt)("h3",{parentName:"admonition",id:"tcp"},"TCP"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start Pulsar standalone."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull apachepulsar/pulsar:{version}\n\ndocker run -d -it -p 6650:6650 -p 8080:8080 -v $PWD/data:/pulsar/data --name pulsar-netty-standalone apachepulsar/pulsar:{version} bin/pulsar standalone\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a configuration file ",(0,r.kt)("em",{parentName:"p"},"netty-source-config.yaml"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'configs:\n    type: "tcp"\n    host: "127.0.0.1"\n    port: 10999\n    numberOfThreads: 1\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the configuration file ",(0,r.kt)("em",{parentName:"p"},"netty-source-config.yaml")," to Pulsar server."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker cp netty-source-config.yaml pulsar-netty-standalone:/pulsar/conf/\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the Netty source connector."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it pulsar-netty-standalone /bin/bash\ncurl -O http://mirror-hk.koddos.net/apache/pulsar/pulsar-{version}/connectors/pulsar-io-netty-{version}.nar\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start the Netty source connector."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/pulsar-admin sources localrun \\\n--archive pulsar-io-3.0.0.nar \\\n--tenant public \\\n--namespace default \\\n--name netty \\\n--destination-topic-name netty-topic \\\n--source-config-file netty-source-config.yaml \\\n--parallelism 1\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Consume data."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it pulsar-netty-standalone /bin/bash\n./bin/pulsar-client consume -t Exclusive -s netty-sub netty-topic -n 0\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open another terminal window to send data to the Netty source."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it pulsar-netty-standalone /bin/bash\napt-get update\napt-get -y install telnet\nroot@1d19327b2c67:/pulsar# telnet 127.0.0.1 10999\nTrying 127.0.0.1...\nConnected to 127.0.0.1.\nEscape character is '^]'.\nhello\nworld\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The following information appears on the consumer terminal window."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"----- got message -----\nhello\n\n----- got message -----\nworld\n")))),(0,r.kt)("h3",{parentName:"admonition",id:"http"},"HTTP"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start Pulsar standalone."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull apachepulsar/pulsar:{version}\ndocker run -d -it -p 6650:6650 -p 8080:8080 -v $PWD/data:/pulsar/data --name pulsar-netty-standalone apachepulsar/pulsar:{version} bin/pulsar standalone\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a configuration file ",(0,r.kt)("em",{parentName:"p"},"netty-source-config.yaml"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'configs:\n    type: "http"\n    host: "127.0.0.1"\n    port: 10999\n    numberOfThreads: 1\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the configuration file ",(0,r.kt)("em",{parentName:"p"},"netty-source-config.yaml")," to Pulsar server."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker cp netty-source-config.yaml pulsar-netty-standalone:/pulsar/conf/\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the Netty source connector."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it pulsar-netty-standalone /bin/bash\ncurl -O http://mirror-hk.koddos.net/apache/pulsar/pulsar-{version}/connectors/pulsar-io-netty-{version}.nar\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start the Netty source connector."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/pulsar-admin sources localrun \\\n--archive pulsar-io-3.0.0.nar \\\n--tenant public \\\n--namespace default \\\n--name netty \\\n--destination-topic-name netty-topic \\\n--source-config-file netty-source-config.yaml \\\n--parallelism 1\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Consume data."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it pulsar-netty-standalone /bin/bash\n./bin/pulsar-client consume -t Exclusive -s netty-sub netty-topic -n 0\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open another terminal window to send data to the Netty source."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it pulsar-netty-standalone /bin/bash\ncurl -X POST --data 'hello, world!' http://127.0.0.1:10999/\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The following information appears on the consumer terminal window."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"----- got message -----\nhello, world!\n"))))))}m.isMDXComponent=!0}}]);