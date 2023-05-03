"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[32748],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,b=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return a?r.createElement(b,i(i({ref:t},c),{},{components:a})):r.createElement(b,i({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>I});var r=a(87462),n=a(67294),o=a(86010),i=a(12466),s=a(16550),l=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=m(e),[i,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,u]=b({queryString:a,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),y=(()=>{const e=l??p;return d({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var y=a(72389);const h="tabList__CuJ",v="tabItem_LNqP";function k(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),r=u[a].value;r!==s&&(p(t),l(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",v,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",h)},n.createElement(k,(0,r.Z)({},e,t)),n.createElement(g,(0,r.Z)({},e,t)))}function I(e){const t=(0,y.Z)();return n.createElement(w,(0,r.Z)({key:String(t)},e))}},10369:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),o=a(74866),i=a(85162);const s={id:"administration-isolation-broker",title:"Isolate brokers",sidebar_label:"Isolate brokers"},l=void 0,u={unversionedId:"administration-isolation-broker",id:"version-3.0.x/administration-isolation-broker",title:"Isolate brokers",description:"In Pulsar, when namespaces (more specifically, namespace bundles) are assigned dynamically to brokers, the namespace isolation policy limits the set of brokers that can be used for assignment. Before topics are assigned to brokers, you can set the namespace isolation policy with a primary or a secondary regex to select desired brokers.",source:"@site/versioned_docs/version-3.0.x/administration-isolation-broker.md",sourceDirName:".",slug:"/administration-isolation-broker",permalink:"/docs/3.0.x/administration-isolation-broker",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/administration-isolation-broker.md",tags:[],version:"3.0.x",frontMatter:{id:"administration-isolation-broker",title:"Isolate brokers",sidebar_label:"Isolate brokers"},sidebar:"docsSidebar",previous:{title:"Pulsar isolation",permalink:"/docs/3.0.x/administration-isolation"},next:{title:"Isolate bookies",permalink:"/docs/3.0.x/administration-isolation-bookie"}},c={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In Pulsar, when namespaces (more specifically, namespace bundles) are assigned dynamically to brokers, the namespace isolation policy limits the set of brokers that can be used for assignment. Before topics are assigned to brokers, you can set the namespace isolation policy with a primary or a secondary regex to select desired brokers."),(0,n.kt)("p",null,"To set a namespace isolation policy for a broker cluster, you can use one of the following methods."),(0,n.kt)(o.Z,{defaultValue:"Pulsar-admin CLI",values:[{label:"Pulsar-admin CLI",value:"Pulsar-admin CLI"},{label:"REST API",value:"REST API"},{label:"Java admin API",value:"Java admin API"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Pulsar-admin CLI",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin ns-isolation-policy set options\n")),(0,n.kt)("p",null,"For more information about the command ",(0,n.kt)("inlineCode",{parentName:"p"},"pulsar-admin ns-isolation-policy set options"),", see ",(0,n.kt)("a",{parentName:"p",href:"pathname:///reference/#/3.0.x/pulsar-admin/"},"Pulsar admin docs"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin ns-isolation-policy set \\\n--auto-failover-policy-type min_available \\\n--auto-failover-policy-params min_limit=1,usage_threshold=80 \\\n--namespaces my-tenant/my-namespace \\\n--primary 10.193.216.*  my-cluster policy-name\n"))),(0,n.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=3.0.0&apiversion=v2#operation/createNamespace"},"PUT /admin/v2/:namespace/:tenant/:namespace"))),(0,n.kt)(i.Z,{value:"Java admin API",mdxType:"TabItem"},(0,n.kt)("p",null,"For how to set namespace isolation policy using Java admin API, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-admin/src/main/java/org/apache/pulsar/client/admin/internal/NamespacesImpl.java#L251"},"code"),"."))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"To guarantee all the data that belongs to a namespace is stored in desired bookies, you can isolate the data of the namespace into user-defined groups of bookies. See ",(0,n.kt)("a",{parentName:"p",href:"/docs/3.0.x/administration-isolation-bookie#configure-bookie-affinity-groups"},"configure bookie affinity groups")," for more details.")))}d.isMDXComponent=!0}}]);