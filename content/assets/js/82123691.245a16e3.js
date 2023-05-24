"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[89196],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>k});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return t?n.createElement(k,l(l({ref:a},u),{},{components:t})):n.createElement(k,l({ref:a},u))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},32069:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=t(87462),r=(t(67294),t(3905));const o={id:"getting-started-standalone",title:"Set up a standalone Pulsar locally",sidebar_label:"Run Pulsar locally",original_id:"getting-started-standalone"},l=void 0,i={unversionedId:"getting-started-standalone",id:"version-2.6.1/getting-started-standalone",title:"Set up a standalone Pulsar locally",description:"For local development and testing, you can run Pulsar in standalone mode on your machine. The standalone mode includes a Pulsar broker, the necessary ZooKeeper and BookKeeper components running inside of a single Java Virtual Machine (JVM) process.",source:"@site/versioned_docs/version-2.6.1/getting-started-standalone.md",sourceDirName:".",slug:"/getting-started-standalone",permalink:"/docs/2.6.1/getting-started-standalone",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.1/getting-started-standalone.md",tags:[],version:"2.6.1",frontMatter:{id:"getting-started-standalone",title:"Set up a standalone Pulsar locally",sidebar_label:"Run Pulsar locally",original_id:"getting-started-standalone"},sidebar:"version-2.6.1/docsSidebar",previous:{title:"Pulsar 2.0",permalink:"/docs/2.6.1/pulsar-2.0"},next:{title:"Run Pulsar in Docker",permalink:"/docs/2.6.1/getting-started-docker"}},s={},p=[{value:"Install Pulsar standalone",id:"install-pulsar-standalone",level:2},{value:"System requirements",id:"system-requirements",level:3},{value:"Install Pulsar using binary release",id:"install-pulsar-using-binary-release",level:3},{value:"What your package contains",id:"what-your-package-contains",level:4},{value:"Install builtin connectors (optional)",id:"install-builtin-connectors-optional",level:3},{value:"Install tiered storage offloaders (optional)",id:"install-tiered-storage-offloaders-optional",level:3},{value:"Start Pulsar standalone",id:"start-pulsar-standalone",level:2},{value:"Use Pulsar standalone",id:"use-pulsar-standalone",level:2},{value:"Consume a message",id:"consume-a-message",level:3},{value:"Produce a message",id:"produce-a-message",level:3},{value:"Stop Pulsar standalone",id:"stop-pulsar-standalone",level:2}],u={toc:p},d="wrapper";function c(e){let{components:a,...t}=e;return(0,r.kt)(d,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For local development and testing, you can run Pulsar in standalone mode on your machine. The standalone mode includes a Pulsar broker, the necessary ZooKeeper and BookKeeper components running inside of a single Java Virtual Machine (JVM) process."),(0,r.kt)("blockquote",null,(0,r.kt)("h4",{parentName:"blockquote",id:"pulsar-in-production"},"Pulsar in production?"),(0,r.kt)("p",{parentName:"blockquote"},"If you're looking to run a full production Pulsar installation, see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.1/deploy-bare-metal"},"Deploying a Pulsar instance")," guide.")),(0,r.kt)("h2",{id:"install-pulsar-standalone"},"Install Pulsar standalone"),(0,r.kt)("p",null,"This tutorial guides you through every step of the installation process."),(0,r.kt)("h3",{id:"system-requirements"},"System requirements"),(0,r.kt)("p",null,"Currently, Pulsar is available for 64-bit ",(0,r.kt)("strong",{parentName:"p"},"macOS"),", ",(0,r.kt)("strong",{parentName:"p"},"Linux"),", and ",(0,r.kt)("strong",{parentName:"p"},"Windows"),". To use Pulsar, you need to install 64-bit JRE/JDK 8 or later versions."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"By default, Pulsar allocates 2G JVM heap memory to start. It can be changed in ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/pulsar_env.sh")," file under ",(0,r.kt)("inlineCode",{parentName:"p"},"PULSAR_MEM"),". This is extra options passed into JVM.")),(0,r.kt)("h3",{id:"install-pulsar-using-binary-release"},"Install Pulsar using binary release"),(0,r.kt)("p",null,"To get started with Pulsar, download a binary tarball release in one of the following ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"download from the Apache mirror (",(0,r.kt)("a",{href:"https://archive.apache.org/dist/pulsar/pulsar-2.6.1/apache-pulsar-2.6.1-bin.tar.gz",download:!0},"Pulsar 2.6.1 binary release"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"download from the Pulsar ",(0,r.kt)("a",{parentName:"p",href:"/download"},"downloads page"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"download from the Pulsar ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/releases/latest"},"releases page"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"use ",(0,r.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ wget https://archive.apache.org/dist/pulsar/pulsar-2.6.1/apache-pulsar-2.6.1-bin.tar.gz\n\n")))),(0,r.kt)("p",null,"After you download the tarball, untar it and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," command to navigate to the resulting directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ tar xvfz apache-pulsar-2.6.1-bin.tar.gz\n$ cd apache-pulsar-2.6.1\n\n")),(0,r.kt)("h4",{id:"what-your-package-contains"},"What your package contains"),(0,r.kt)("p",null,"The Pulsar binary package initially contains the following directories:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Directory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Contains"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bin")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Pulsar's command-line tools, such as ",(0,r.kt)("inlineCode",{parentName:"td"},"pulsar"),"](/docs/2.6.1/reference-cli-tools#pulsar) and [",(0,r.kt)("inlineCode",{parentName:"td"},"pulsar-admin"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"conf")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Configuration files for Pulsar, including ",(0,r.kt)("a",{parentName:"td",href:"/docs/2.6.1/reference-configuration#broker"},"broker configuration"),", ",(0,r.kt)("a",{parentName:"td",href:"/docs/2.6.1/reference-configuration#zookeeper"},"ZooKeeper configuration"),", and more.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"examples")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A Java JAR file containing ",(0,r.kt)("a",{parentName:"td",href:"/docs/2.6.1/functions-overview"},"Pulsar Functions")," example.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"lib")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ",(0,r.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/JAR_(file_format)"},"JAR")," files used by Pulsar.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"licenses")),(0,r.kt)("td",{parentName:"tr",align:"left"},"License files, in the",(0,r.kt)("inlineCode",{parentName:"td"},".txt")," form, for various components of the Pulsar ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar"},"codebase"),".")))),(0,r.kt)("p",null,"These directories are created once you begin running Pulsar."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Directory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Contains"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The data storage directory used by ZooKeeper and BookKeeper.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"instances")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Artifacts created for ",(0,r.kt)("a",{parentName:"td",href:"/docs/2.6.1/functions-overview"},"Pulsar Functions"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"logs")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Logs created by the installation.")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you want to use builtin connectors and tiered storage offloaders, you can install them according to the following instructions\uff1a"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#install-builtin-connectors-optional"},"Install builtin connectors (optional)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#install-tiered-storage-offloaders-optional"},"Install tiered storage offloaders (optional)"),"\nOtherwise, skip this step and perform the next step ",(0,r.kt)("a",{parentName:"li",href:"#start-pulsar-standalone"},"Start Pulsar standalone"),". Pulsar can be successfully installed without installing bulitin connectors and tiered storage offloaders."))),(0,r.kt)("h3",{id:"install-builtin-connectors-optional"},"Install builtin connectors (optional)"),(0,r.kt)("p",null,"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"2.1.0-incubating")," release, Pulsar releases a separate binary distribution, containing all the ",(0,r.kt)("inlineCode",{parentName:"p"},"builtin")," connectors.\nTo enable those ",(0,r.kt)("inlineCode",{parentName:"p"},"builtin")," connectors, you can download the connectors tarball release in one of the following ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"download from the Apache mirror ",(0,r.kt)("a",{href:"https://archive.apache.org/dist/pulsar/pulsar-2.6.1/connectors",download:!0},"Pulsar IO Connectors 2.6.1 release"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"download from the Pulsar ",(0,r.kt)("a",{parentName:"p",href:"/download"},"downloads page"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"download from the Pulsar ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/releases/latest"},"releases page"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"use ",(0,r.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ wget https://archive.apache.org/dist/pulsar/pulsar-2.6.1/connectors/{connector}-2.6.1.nar\n\n")))),(0,r.kt)("p",null,"After you download the nar file, copy the file to the ",(0,r.kt)("inlineCode",{parentName:"p"},"connectors")," directory in the pulsar directory.\nFor example, if you download the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-io-aerospike-2.6.1.nar")," connector file, enter the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ mkdir connectors\n$ mv pulsar-io-aerospike-2.6.1.nar connectors\n\n$ ls connectors\npulsar-io-aerospike-2.6.1.nar\n...\n\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"If you are running Pulsar in a bare metal cluster, make sure ",(0,r.kt)("inlineCode",{parentName:"li"},"connectors")," tarball is unzipped in every pulsar directory of the broker\n(or in every pulsar directory of function-worker if you are running a separate worker cluster for Pulsar Functions)."),(0,r.kt)("li",{parentName:"ul"},"If you are ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.6.1/getting-started-docker"},"running Pulsar in Docker")," or deploying Pulsar using a docker image (e.g. ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.6.1/deploy-kubernetes"},"K8S")," or ",(0,r.kt)("a",{parentName:"li",href:"https://dcos.io/"},"DC/OS"),"),\nyou can use the ",(0,r.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image instead of the ",(0,r.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar")," image. ",(0,r.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image has already bundled ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.6.1/io-overview#working-with-connectors"},"all builtin connectors"),"."))),(0,r.kt)("h3",{id:"install-tiered-storage-offloaders-optional"},"Install tiered storage offloaders (optional)"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"2.2.0")," release, Pulsar releases a separate binary distribution, containing the tiered storage offloaders.\nTo enable tiered storage feature, follow the instructions below; otherwise skip this section.")),(0,r.kt)("p",null,"To get started with ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.1/concepts-tiered-storage"},"tiered storage offloaders"),", you need to download the offloaders tarball release on every broker node in one of the following ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"download from the Apache mirror ",(0,r.kt)("a",{href:"https://archive.apache.org/dist/pulsar/pulsar-2.6.1/apache-pulsar-offloaders-2.6.1-bin.tar.gz",download:!0},"Pulsar Tiered Storage Offloaders 2.6.1 release"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"download from the Pulsar ",(0,r.kt)("a",{parentName:"p",href:"/download"},"downloads page"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"download from the Pulsar ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/releases/latest"},"releases page"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"use ",(0,r.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ wget https://archive.apache.org/dist/pulsar/pulsar-2.6.1/apache-pulsar-offloaders-2.6.1-bin.tar.gz\n\n")))),(0,r.kt)("p",null,"After you download the tarball, untar the offloaders package and copy the offloaders as ",(0,r.kt)("inlineCode",{parentName:"p"},"offloaders"),"\nin the pulsar directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ tar xvfz apache-pulsar-offloaders-2.6.1-bin.tar.gz\n\n// you will find a directory named `apache-pulsar-offloaders-2.6.1` in the pulsar directory\n// then copy the offloaders\n\n$ mv apache-pulsar-offloaders-2.6.1/offloaders offloaders\n\n$ ls offloaders\ntiered-storage-jcloud-2.6.1.nar\n\n")),(0,r.kt)("p",null,"For more information on how to configure tiered storage, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.1/cookbooks-tiered-storage"},"Tiered storage cookbook"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"If you are running Pulsar in a bare metal cluster, make sure that ",(0,r.kt)("inlineCode",{parentName:"li"},"offloaders")," tarball is unzipped in every broker's pulsar directory."),(0,r.kt)("li",{parentName:"ul"},"If you are ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.6.1/getting-started-docker"},"running Pulsar in Docker")," or deploying Pulsar using a docker image (e.g. ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.6.1/deploy-kubernetes"},"K8S")," or ",(0,r.kt)("a",{parentName:"li",href:"https://dcos.io/"},"DC/OS"),"),\nyou can use the ",(0,r.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image instead of the ",(0,r.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar")," image. ",(0,r.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image has already bundled tiered storage offloaders."))),(0,r.kt)("h2",{id:"start-pulsar-standalone"},"Start Pulsar standalone"),(0,r.kt)("p",null,"Once you have an up-to-date local copy of the release, you can start a local cluster using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-cli-tools#pulsar"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar"))," command, which is stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"bin")," directory, and specifying that you want to start Pulsar in standalone mode."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar standalone\n\n")),(0,r.kt)("p",null,"If you have started Pulsar successfully, you will see ",(0,r.kt)("inlineCode",{parentName:"p"},"INFO"),"-level log messages like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n2017-06-01 14:46:29,192 - INFO  - [main:WebSocketService@95] - Configuration Store cache started\n2017-06-01 14:46:29,192 - INFO  - [main:AuthenticationService@61] - Authentication is disabled\n2017-06-01 14:46:29,192 - INFO  - [main:WebSocketService@108] - Pulsar WebSocket Service started\n\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"The service is running on your terminal, which is under your direct control. If you need to run other commands, open a new terminal window."))),(0,r.kt)("p",null,"You can also run the service as a background process using the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-daemon start standalone")," command. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/docs/en/reference-cli-tools/#pulsar-daemon"},"pulsar-daemon"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"By default, there is no encryption, authentication, or authorization configured. Apache Pulsar can be accessed from remote server without any authorization. Please do check ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.1/security-overview"},"Security Overview")," document to secure your deployment.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When you start a local standalone cluster, a ",(0,r.kt)("inlineCode",{parentName:"p"},"public/default")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.1/concepts-messaging#namespaces"},"namespace")," is created automatically. The namespace is used for development purposes. All Pulsar topics are managed within namespaces. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.1/concepts-messaging#topics"},"Topics"),".")))),(0,r.kt)("h2",{id:"use-pulsar-standalone"},"Use Pulsar standalone"),(0,r.kt)("p",null,"Pulsar provides a CLI tool called ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-cli-tools#pulsar-client"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-client")),". The pulsar-client tool enables you to consume and produce messages to a Pulsar topic in a running cluster."),(0,r.kt)("h3",{id:"consume-a-message"},"Consume a message"),(0,r.kt)("p",null,"The following command consumes a message with the subscription name ",(0,r.kt)("inlineCode",{parentName:"p"},"first-subscription")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"my-topic")," topic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\n$ bin/pulsar-client consume my-topic -s "first-subscription"\n\n')),(0,r.kt)("p",null,"If the message has been successfully consumed, you will see a confirmation like the following in the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-client")," logs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n09:56:55.566 [pulsar-client-io-1-1] INFO  org.apache.pulsar.client.impl.MultiTopicsConsumerImpl - [TopicsConsumerFakeTopicNamee2df9] [first-subscription] Success subscribe new topic my-topic in topics consumer, partitions: 4, allTopicPartitionsNumber: 4\n\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"As you have noticed that we do not explicitly create the ",(0,r.kt)("inlineCode",{parentName:"p"},"my-topic")," topic, from which we consume the message. When you consume a message from a topic that does not yet exist, Pulsar creates that topic for you automatically. Producing a message to a topic that does not exist will automatically create that topic for you as well.")),(0,r.kt)("h3",{id:"produce-a-message"},"Produce a message"),(0,r.kt)("p",null,"The following command produces a message saying ",(0,r.kt)("inlineCode",{parentName:"p"},"hello-pulsar")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"my-topic")," topic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\n$ bin/pulsar-client produce my-topic --messages "hello-pulsar"\n\n')),(0,r.kt)("p",null,"If the message has been successfully published to the topic, you will see a confirmation like the following in the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-client")," logs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n13:09:39.356 [main] INFO  org.apache.pulsar.client.cli.PulsarClientTool - 1 messages successfully produced\n\n")),(0,r.kt)("h2",{id:"stop-pulsar-standalone"},"Stop Pulsar standalone"),(0,r.kt)("p",null,"Press ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl+C")," to stop a local standalone Pulsar."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If the service runs as a background process using the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-daemon start standalone")," command, then use the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-daemon stop standalone"),"  command to stop the service.\nFor more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/docs/en/reference-cli-tools/#pulsar-daemon"},"pulsar-daemon"),".")))}c.isMDXComponent=!0}}]);