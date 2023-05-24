"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[95497],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),l=a(86010),i=a(12466),o=a(16550),s=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=h({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),b=(()=>{const e=s??p;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var b=a(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==o&&(p(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},i,{className:(0,l.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},79703:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=a(74866),i=a(85162);const o={id:"admin-api-overview",title:"The Pulsar admin interface",sidebar_label:"Overview",original_id:"admin-api-overview"},s=void 0,u={unversionedId:"admin-api-overview",id:"version-2.7.4/admin-api-overview",title:"The Pulsar admin interface",description:"The Pulsar admin interface enables you to manage all of the important entities in a Pulsar instance, such as tenants, topics, and namespaces.",source:"@site/versioned_docs/version-2.7.4/admin-api-overview.md",sourceDirName:".",slug:"/admin-api-overview",permalink:"/docs/2.7.4/admin-api-overview",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.4/admin-api-overview.md",tags:[],version:"2.7.4",frontMatter:{id:"admin-api-overview",title:"The Pulsar admin interface",sidebar_label:"Overview",original_id:"admin-api-overview"},sidebar:"version-2.7.4/docsSidebar",previous:{title:"C#",permalink:"/docs/2.7.4/client-libraries-dotnet"},next:{title:"Clusters",permalink:"/docs/2.7.4/admin-api-clusters"}},c={},p=[{value:"Admin setup",id:"admin-setup",level:2},{value:"How to define Pulsar resource names when running Pulsar in Kubernetes",id:"how-to-define-pulsar-resource-names-when-running-pulsar-in-kubernetes",level:2}],m={toc:p},d="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Pulsar admin interface enables you to manage all of the important entities in a Pulsar ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.4/reference-terminology#instance"},"instance"),", such as ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.4/reference-terminology#tenant"},"tenants"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.4/reference-terminology#topic"},"topics"),", and ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.4/reference-terminology#namespace"},"namespaces"),"."),(0,r.kt)("p",null,"You can currently interact with the admin interface via:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Making HTTP calls against the admin ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API provided by Pulsar ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.4/reference-terminology#broker"},"brokers"),". For some restful apis, they might be redirected to topic owner brokers for serving\nwith ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307"},(0,r.kt)("inlineCode",{parentName:"a"},"307 Temporary Redirect")),", hence the HTTP callers should handle ",(0,r.kt)("inlineCode",{parentName:"p"},"307 Temporary Redirect"),". If you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),", you should specify ",(0,r.kt)("inlineCode",{parentName:"p"},"-L"),"\nto handle redirections.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin")," CLI tool, which is available in the ",(0,r.kt)("inlineCode",{parentName:"p"},"bin")," folder of your ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.4/getting-started-standalone"},"Pulsar installation"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin\n\n")),(0,r.kt)("p",{parentName:"li"},"For the complete commands and descriptions of ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin"),", see here.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A Java client interface."))),(0,r.kt)("blockquote",null,(0,r.kt)("h4",{parentName:"blockquote",id:"the-rest-api-is-the-admin-interface"},"The REST API is the admin interface"),(0,r.kt)("p",{parentName:"blockquote"},"Under the hood, both the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin")," CLI tool and the Java client both use the REST API. If you\u2019d like to implement your own admin interface client, you should use the REST API as well. Full documentation can be found here.")),(0,r.kt)("p",null,"In this document, examples from each of the three available interfaces will be shown."),(0,r.kt)("h2",{id:"admin-setup"},"Admin setup"),(0,r.kt)("p",null,"Each of Pulsar's three admin interfaces---the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.4/reference-pulsar-admin"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," CLI tool, the ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/2.7.4"},"Java admin API"),", and the ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API ---requires some special setup if you have ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.4/security-overview#authentication-providers"},"authentication")," enabled in your Pulsar ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.4/reference-terminology#instance"},"instance"),"."),(0,r.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"If you have ",(0,r.kt)("a",{parentName:"p",href:"security-overview.md#authentication-providers"},"authentication")," enabled, you will need to provide an auth configuration to use the ",(0,r.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool. By default, the configuration for the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin")," tool is found in the ",(0,r.kt)("a",{parentName:"p",href:"reference-configuration.md#client"},(0,r.kt)("inlineCode",{parentName:"a"},"conf/client.conf"))," file. Here are the available parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"webServiceUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"The web URL for the cluster."),(0,r.kt)("td",{parentName:"tr",align:null},"http://localhost:8080/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"brokerServiceUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"The Pulsar protocol URL for the cluster."),(0,r.kt)("td",{parentName:"tr",align:null},"pulsar://localhost:6650/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authPlugin"),(0,r.kt)("td",{parentName:"tr",align:null},"The authentication plugin."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authParams"),(0,r.kt)("td",{parentName:"tr",align:null},"The authentication parameters for the cluster, as a comma-separated string."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"useTls"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether or not TLS authentication will be enforced in the cluster."),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tlsAllowInsecureConnection"),(0,r.kt)("td",{parentName:"tr",align:null},"Accept untrusted TLS certificate from client."),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tlsTrustCertsFilePath"),(0,r.kt)("td",{parentName:"tr",align:null},"Path for the trusted TLS certificate file."),(0,r.kt)("td",{parentName:"tr",align:null}))))),(0,r.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,"You can find documentation for the REST API exposed by Pulsar ",(0,r.kt)("a",{parentName:"p",href:"reference-terminology.md#broker"},"brokers")," in this reference ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"document"),".")),(0,r.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("p",null,"To use the Java admin API, instantiate a ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/org/apache/pulsar/client/admin/PulsarAdmin"},"PulsarAdmin")," object, specifying a URL for a Pulsar ",(0,r.kt)("a",{parentName:"p",href:"reference-terminology.md#broker"},"broker")," and a ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/org/apache/pulsar/client/admin/PulsarAdminBuilder"},"PulsarAdminBuilder"),". Here's a minimal example using ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nString url = "http://localhost:8080";\n// Pass auth-plugin class fully-qualified name if Pulsar-security enabled\nString authPluginClassName = "com.org.MyAuthPluginClass";\n// Pass auth-param if auth-plugin class requires it\nString authParams = "param1=value1";\nboolean useTls = false;\nboolean tlsAllowInsecureConnection = false;\nString tlsTrustCertsFilePath = null;\nPulsarAdmin admin = PulsarAdmin.builder()\n.authentication(authPluginClassName,authParams)\n.serviceHttpUrl(url)\n.tlsTrustCertsFilePath(tlsTrustCertsFilePath)\n.allowTlsInsecureConnection(tlsAllowInsecureConnection)\n.build();\n\n')),(0,r.kt)("p",null,"If you have multiple brokers to use, you can use multi-host like Pulsar service. For example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nString url = "http://localhost:8080,localhost:8081,localhost:8082";\n// Pass auth-plugin class fully-qualified name if Pulsar-security enabled\nString authPluginClassName = "com.org.MyAuthPluginClass";\n// Pass auth-param if auth-plugin class requires it\nString authParams = "param1=value1";\nboolean useTls = false;\nboolean tlsAllowInsecureConnection = false;\nString tlsTrustCertsFilePath = null;\nPulsarAdmin admin = PulsarAdmin.builder()\n.authentication(authPluginClassName,authParams)\n.serviceHttpUrl(url)\n.tlsTrustCertsFilePath(tlsTrustCertsFilePath)\n.allowTlsInsecureConnection(tlsAllowInsecureConnection)\n.build();\n\n')))),(0,r.kt)("h2",{id:"how-to-define-pulsar-resource-names-when-running-pulsar-in-kubernetes"},"How to define Pulsar resource names when running Pulsar in Kubernetes"),(0,r.kt)("p",null,"If you run Pulsar Functions or connectors on Kubernetes, you need to follow Kubernetes naming convention to define the names of your Pulsar resources, whichever admin interface you use."),(0,r.kt)("p",null,"Kubernetes requires a name that can be used as a DNS subdomain name as defined in ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names"},"RFC 1123"),". Pulsar supports more legal characters than Kubernetes naming convention. If you create a Pulsar resource name with special characters that are not supported by Kubernetes (for example, including colons in a Pulsar namespace name), Kubernetes runtime translates the Pulsar object names into Kubernetes resource labels which are in RFC 1123-compliant forms. Consequently, you can run functions or connectors using Kubernetes runtime. The rules for translating Pulsar object names into Kubernetes resource labels are as below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Truncate to 63 characters")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Replace the following characters with dashes (-):"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Non-alphanumeric characters")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Underscores (_)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Dots (.)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Replace beginning and ending non-alphanumeric characters with 0"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"If you get an error in translating Pulsar object names into Kubernetes resource labels (for example, you may have a naming collision if your Pulsar object name is too long) or want to customize the translating rules, see ",(0,r.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/docs/en/next/functions-runtime/#customize-kubernetes-runtime"},"customize Kubernetes runtime"),"."),(0,r.kt)("li",{parentName:"ul"},"For how to configure Kubernetes runtime, see ",(0,r.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/docs/en/next/functions-runtime/#configure-kubernetes-runtime"},"here"),"."))))}h.isMDXComponent=!0}}]);