"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[96393],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,h=p["".concat(i,".").concat(d)]||p[d]||m[d]||s;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:a,o[1]=u;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(86010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,o),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>C});var n=r(87462),a=r(67294),s=r(86010),o=r(12466),u=r(16550),i=r(91980),l=r(67392),c=r(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function m(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,u.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=m(e),[o,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[i,l]=h({queryString:r,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),b=(()=>{const e=i??p;return d({value:e,tabValues:s})?e:null})();(0,a.useLayoutEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),l(e),f(e)}),[l,f,s]),tabValues:s}}var b=r(72389);const g="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:r,selectedValue:u,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,r=c.indexOf(t),n=l[r].value;n!==u&&(p(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t)},l.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},o,{className:(0,s.Z)("tabs__item",v,o?.className,{"tabs__item--active":u===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:n}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return a.createElement("div",{className:(0,s.Z)("tabs-container",g)},a.createElement(y,(0,n.Z)({},e,t)),a.createElement(k,(0,n.Z)({},e,t)))}function C(e){const t=(0,b.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},80942:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>u,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),s=r(74866),o=r(85162);const u={id:"cookbooks-message-queue",title:"Use Pulsar as a message queue",sidebar_label:"Message queue"},i=void 0,l={unversionedId:"cookbooks-message-queue",id:"version-3.0.x/cookbooks-message-queue",title:"Use Pulsar as a message queue",description:"Message queues are essential components of many large-scale data architectures. If every single work object that passes through your system absolutely must be processed in spite of the slowness or downright failure of this or that system component, there's a good chance that you'll need a message queue to step in and ensure that unprocessed data is retained---with correct ordering---until the required actions are taken.",source:"@site/versioned_docs/version-3.0.x/cookbooks-message-queue.md",sourceDirName:".",slug:"/cookbooks-message-queue",permalink:"/docs/3.0.x/cookbooks-message-queue",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/cookbooks-message-queue.md",tags:[],version:"3.0.x",frontMatter:{id:"cookbooks-message-queue",title:"Use Pulsar as a message queue",sidebar_label:"Message queue"},sidebar:"docsSidebar",previous:{title:"Message retention and expiry",permalink:"/docs/3.0.x/cookbooks-retention-expiry"},next:{title:"BookKeeper Ledger Metadata",permalink:"/docs/3.0.x/cookbooks-bookkeepermetadata"}},c={},p=[{value:"Client configuration changes",id:"client-configuration-changes",level:2},{value:"Example",id:"example",level:2}],m={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Message queues are essential components of many large-scale data architectures. If every single work object that passes through your system absolutely ",(0,a.kt)("em",{parentName:"p"},"must")," be processed in spite of the slowness or downright failure of this or that system component, there's a good chance that you'll need a message queue to step in and ensure that unprocessed data is retained---with correct ordering---until the required actions are taken."),(0,a.kt)("p",null,"Pulsar is a great choice for a message queue because:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"it was built with ",(0,a.kt)("a",{parentName:"li",href:"/docs/3.0.x/concepts-architecture-overview#persistent-storage"},"persistent message storage")," in mind"),(0,a.kt)("li",{parentName:"ul"},"it offers automatic load balancing across ",(0,a.kt)("a",{parentName:"li",href:"/docs/3.0.x/reference-terminology#consumer"},"consumers")," for messages on a topic (or custom load balancing if you wish)")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can use the same Pulsar installation to act as a real-time message bus and as a message queue if you wish (or just one or the other). You can set aside some topics for real-time purposes and other topics for message queue purposes (or use specific namespaces for either purpose if you wish).")),(0,a.kt)("h2",{id:"client-configuration-changes"},"Client configuration changes"),(0,a.kt)("p",null,"To use a Pulsar ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.0.x/reference-terminology#topic"},"topic")," as a message queue, you should distribute the receiver load on that topic across several consumers (the optimal number of consumers depends on the load)."),(0,a.kt)("p",null,"Each consumer must establish a ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.0.x/concepts-messaging#shared"},"shared subscription")," and use the same subscription name as the other consumers (otherwise the subscription is not shared and the consumers can't act as a processing ensemble)."),(0,a.kt)("p",null,"If you'd like to have tight control over message dispatching across consumers, set the consumers' ",(0,a.kt)("strong",{parentName:"p"},"receiver queue")," size very low (potentially even to 0 if necessary). Each consumer has a receiver queue that determines how many messages the consumer attempts to fetch at a time. For example, a receiver queue of 1000 (the default) means that the consumer attempts to process 1000 messages from the topic's backlog upon connection. Setting the receiver queue to 0 essentially means ensuring that each consumer is only doing one thing at a time."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The receiver queue size of a partitioned topic consumer adopts the minimum one of the following two values:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"receiver_queue_size")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"max_total_receiver_queue_size_across_partitions"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"NumPartitions")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Here's an example that uses a shared subscription."),(0,a.kt)(s.Z,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"C++",value:"C++"},{label:"Go",value:"Go"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.pulsar.client.api.Consumer;\nimport org.apache.pulsar.client.api.PulsarClient;\nimport org.apache.pulsar.client.api.SubscriptionType;\n\nString SERVICE_URL = "pulsar://localhost:6650";\nString TOPIC = "persistent://public/default/mq-topic-1";\nString subscription = "sub-1";\n\nPulsarClient client = PulsarClient.builder()\n        .serviceUrl(SERVICE_URL)\n        .build();\n\nConsumer consumer = client.newConsumer()\n        .topic(TOPIC)\n        .subscriptionName(subscription)\n        .subscriptionType(SubscriptionType.Shared)\n        // If you\'d like to restrict the receiver queue size\n        .receiverQueueSize(10)\n        .subscribe();\n'))),(0,a.kt)(o.Z,{value:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from pulsar import Client, ConsumerType\n\nSERVICE_URL = "pulsar://localhost:6650"\nTOPIC = "persistent://public/default/mq-topic-1"\nSUBSCRIPTION = "sub-1"\n\nclient = Client(SERVICE_URL)\nconsumer = client.subscribe(\n    TOPIC,\n    SUBSCRIPTION,\n    # If you\'d like to restrict the receiver queue size\n    receiver_queue_size=10,\n    consumer_type=ConsumerType.Shared)\n'))),(0,a.kt)(o.Z,{value:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <pulsar/Client.h>\n\nstd::string serviceUrl = "pulsar://localhost:6650";\nstd::string topic = "persistent://public/defaultmq-topic-1";\nstd::string subscription = "sub-1";\n\nClient client(serviceUrl);\n\nConsumerConfiguration consumerConfig;\nconsumerConfig.setConsumerType(ConsumerType.ConsumerShared);\n// If you\'d like to restrict the receiver queue size\nconsumerConfig.setReceiverQueueSize(10);\n\nConsumer consumer;\n\nResult result = client.subscribe(topic, subscription, consumerConfig, consumer);\n'))),(0,a.kt)(o.Z,{value:"Go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/apache/pulsar-client-go/pulsar"\n\nclient, err := pulsar.NewClient(pulsar.ClientOptions{\n    URL: "pulsar://localhost:6650",\n})\nif err != nil {\n    log.Fatal(err)\n}\nconsumer, err := client.Subscribe(pulsar.ConsumerOptions{\n    Topic:             "persistent://public/default/mq-topic-1",\n    SubscriptionName:  "sub-1",\n    Type:              pulsar.Shared,\n    ReceiverQueueSize: 10, // If you\'d like to restrict the receiver queue size\n})\nif err != nil {\n    log.Fatal(err)\n}\n')))))}d.isMDXComponent=!0}}]);