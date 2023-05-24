"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[14589],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83504:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={id:"administration-geo",title:"Pulsar geo-replication",sidebar_label:"Geo-replication",original_id:"administration-geo"},s=void 0,o={unversionedId:"administration-geo",id:"version-2.6.2/administration-geo",title:"Pulsar geo-replication",description:"Geo-replication is the replication of persistently stored message data across multiple clusters of a Pulsar instance.",source:"@site/versioned_docs/version-2.6.2/administration-geo.md",sourceDirName:".",slug:"/administration-geo",permalink:"/docs/2.6.2/administration-geo",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.2/administration-geo.md",tags:[],version:"2.6.2",frontMatter:{id:"administration-geo",title:"Pulsar geo-replication",sidebar_label:"Geo-replication",original_id:"administration-geo"},sidebar:"version-2.6.2/docsSidebar",previous:{title:"ZooKeeper and BookKeeper",permalink:"/docs/2.6.2/administration-zk-bk"},next:{title:"Pulsar Manager",permalink:"/docs/2.6.2/administration-pulsar-manager"}},l={},c=[{value:"How geo-replication works",id:"how-geo-replication-works",level:2},{value:"Geo-replication and Pulsar properties",id:"geo-replication-and-pulsar-properties",level:2},{value:"Local persistence and forwarding",id:"local-persistence-and-forwarding",level:2},{value:"Configure replication",id:"configure-replication",level:2},{value:"Connect replication clusters",id:"connect-replication-clusters",level:3},{value:"Grant permissions to properties",id:"grant-permissions-to-properties",level:3},{value:"Enable geo-replication namespaces",id:"enable-geo-replication-namespaces",level:3},{value:"Use topics with geo-replication",id:"use-topics-with-geo-replication",level:3},{value:"Selective replication",id:"selective-replication",level:4},{value:"Topic stats",id:"topic-stats",level:4},{value:"Delete a geo-replication topic",id:"delete-a-geo-replication-topic",level:4},{value:"Replicated subscriptions",id:"replicated-subscriptions",level:2},{value:"Enable replicated subscription",id:"enable-replicated-subscription",level:3},{value:"Advantages",id:"advantages",level:3},{value:"Limitations",id:"limitations",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Geo-replication")," is the replication of persistently stored message data across multiple clusters of a Pulsar instance."),(0,r.kt)("h2",{id:"how-geo-replication-works"},"How geo-replication works"),(0,r.kt)("p",null,"The diagram below illustrates the process of geo-replication across Pulsar clusters:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Replication Diagram",src:n(4005).Z,width:"709",height:"349"})),(0,r.kt)("p",null,"In this diagram, whenever ",(0,r.kt)("strong",{parentName:"p"},"P1"),", ",(0,r.kt)("strong",{parentName:"p"},"P2"),", and ",(0,r.kt)("strong",{parentName:"p"},"P3")," producers publish messages to the ",(0,r.kt)("strong",{parentName:"p"},"T1")," topic on ",(0,r.kt)("strong",{parentName:"p"},"Cluster-A"),", ",(0,r.kt)("strong",{parentName:"p"},"Cluster-B"),", and ",(0,r.kt)("strong",{parentName:"p"},"Cluster-C")," clusters respectively, those messages are instantly replicated across clusters. Once the messages are replicated, ",(0,r.kt)("strong",{parentName:"p"},"C1")," and ",(0,r.kt)("strong",{parentName:"p"},"C2")," consumers can consume those messages from their respective clusters."),(0,r.kt)("p",null,"Without geo-replication, ",(0,r.kt)("strong",{parentName:"p"},"C1")," and ",(0,r.kt)("strong",{parentName:"p"},"C2")," consumers are not able to consume messages that ",(0,r.kt)("strong",{parentName:"p"},"P3")," producer publishes."),(0,r.kt)("h2",{id:"geo-replication-and-pulsar-properties"},"Geo-replication and Pulsar properties"),(0,r.kt)("p",null,"You must enable geo-replication on a per-tenant basis in Pulsar. You can enable geo-replication between clusters only when a tenant is created that allows access to both clusters."),(0,r.kt)("p",null,"Although geo-replication must be enabled between two clusters, actually geo-replication is managed at the namespace level. You must complete the following tasks to enable geo-replication for a namespace:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#enable-geo-replication-namespaces"},"Enable geo-replication namespaces")),(0,r.kt)("li",{parentName:"ul"},"Configure that namespace to replicate across two or more provisioned clusters")),(0,r.kt)("p",null,"Any message published on ",(0,r.kt)("em",{parentName:"p"},"any")," topic in that namespace is replicated to all clusters in the specified set."),(0,r.kt)("h2",{id:"local-persistence-and-forwarding"},"Local persistence and forwarding"),(0,r.kt)("p",null,"When messages are produced on a Pulsar topic, messages are first persisted in the local cluster, and then forwarded asynchronously to the remote clusters."),(0,r.kt)("p",null,"In normal cases, when connectivity issues are none, messages are replicated immediately, at the same time as they are dispatched to local consumers. Typically, the network ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Round-trip_delay_time"},"round-trip time")," (RTT) between the remote regions defines end-to-end delivery latency."),(0,r.kt)("p",null,"Applications can create producers and consumers in any of the clusters, even when the remote clusters are not reachable (like during a network partition)."),(0,r.kt)("p",null,"Producers and consumers can publish messages to and consume messages from any cluster in a Pulsar instance. However, subscriptions cannot only be local to the cluster where the subscriptions are created but also can be transferred between clusters after replicated subscription is enabled. Once replicated subscription is enabled, you can keep subscription state in synchronization. Therefore, a topic can be asynchronously replicated across multiple geographical regions. In case of failover, a consumer can restart consuming messages from the failure point in a different cluster."),(0,r.kt)("p",null,"In the aforementioned example, the ",(0,r.kt)("strong",{parentName:"p"},"T1")," topic is replicated among three clusters, ",(0,r.kt)("strong",{parentName:"p"},"Cluster-A"),", ",(0,r.kt)("strong",{parentName:"p"},"Cluster-B"),", and ",(0,r.kt)("strong",{parentName:"p"},"Cluster-C"),"."),(0,r.kt)("p",null,"All messages produced in any of the three clusters are delivered to all subscriptions in other clusters. In this case, ",(0,r.kt)("strong",{parentName:"p"},"C1")," and ",(0,r.kt)("strong",{parentName:"p"},"C2")," consumers receive all messages that ",(0,r.kt)("strong",{parentName:"p"},"P1"),", ",(0,r.kt)("strong",{parentName:"p"},"P2"),", and ",(0,r.kt)("strong",{parentName:"p"},"P3")," producers publish. Ordering is still guaranteed on a per-producer basis."),(0,r.kt)("h2",{id:"configure-replication"},"Configure replication"),(0,r.kt)("p",null,"As stated in ",(0,r.kt)("a",{parentName:"p",href:"#geo-replication-and-pulsar-properties"},"Geo-replication and Pulsar properties")," section, geo-replication in Pulsar is managed at the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.2/reference-terminology#tenant"},"tenant")," level."),(0,r.kt)("p",null,"The following example connects three clusters: ",(0,r.kt)("strong",{parentName:"p"},"us-east"),", ",(0,r.kt)("strong",{parentName:"p"},"us-west"),", and ",(0,r.kt)("strong",{parentName:"p"},"us-cent"),"."),(0,r.kt)("h3",{id:"connect-replication-clusters"},"Connect replication clusters"),(0,r.kt)("p",null,"To replicate data among clusters, you need to configure each cluster to connect to the other. You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin")," tool to create a connection."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"Suppose that you have 3 replication clusters: ",(0,r.kt)("inlineCode",{parentName:"p"},"us-west"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"us-cent"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"us-east"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the connection from ",(0,r.kt)("inlineCode",{parentName:"p"},"us-west")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"us-east"),"."),(0,r.kt)("p",{parentName:"li"},"Run the following command on ",(0,r.kt)("inlineCode",{parentName:"p"},"us-west"),"."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin clusters create \\\n  --broker-url pulsar://<DNS-OF-US-EAST>:<PORT> \\\n  --url http://<DNS-OF-US-EAST>:<PORT> \\\n  us-east\n\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you want to use a secure connection for a cluster, you can use the flags ",(0,r.kt)("inlineCode",{parentName:"p"},"--broker-url-secure")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--url-secure"),". For more information, see pulsar-admin clusters create.")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the connection from ",(0,r.kt)("inlineCode",{parentName:"p"},"us-west")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"us-cent"),"."),(0,r.kt)("p",{parentName:"li"},"Run the following command on ",(0,r.kt)("inlineCode",{parentName:"p"},"us-west"),"."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin clusters create \\\n  --broker-url pulsar://<DNS-OF-US-CENT>:<PORT> \\\n  --url http://<DNS-OF-US-CENT>:<PORT> \\\n  us-cent\n\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Run similar commands on ",(0,r.kt)("inlineCode",{parentName:"li"},"us-east")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"us-cent")," to create connections among clusters.")),(0,r.kt)("h3",{id:"grant-permissions-to-properties"},"Grant permissions to properties"),(0,r.kt)("p",null,"To replicate to a cluster, the tenant needs permission to use that cluster. You can grant permission to the tenant when you create the tenant or grant later."),(0,r.kt)("p",null,"Specify all the intended clusters when you create a tenant:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin tenants create my-tenant \\\n  --admin-roles my-admin-role \\\n  --allowed-clusters us-west,us-east,us-cent\n\n")),(0,r.kt)("p",null,"To update permissions of an existing tenant, use ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"create"),"."),(0,r.kt)("h3",{id:"enable-geo-replication-namespaces"},"Enable geo-replication namespaces"),(0,r.kt)("p",null,"You can create a namespace with the following command sample."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin namespaces create my-tenant/my-namespace\n\n")),(0,r.kt)("p",null,"Initially, the namespace is not assigned to any cluster. You can assign the namespace to clusters using the ",(0,r.kt)("inlineCode",{parentName:"p"},"set-clusters")," subcommand:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin namespaces set-clusters my-tenant/my-namespace \\\n  --clusters us-west,us-east,us-cent\n\n")),(0,r.kt)("p",null,"You can change the replication clusters for a namespace at any time, without disruption to ongoing traffic. Replication channels are immediately set up or stopped in all clusters as soon as the configuration changes."),(0,r.kt)("h3",{id:"use-topics-with-geo-replication"},"Use topics with geo-replication"),(0,r.kt)("p",null,"Once you create a geo-replication namespace, any topics that producers or consumers create within that namespace is replicated across clusters. Typically, each application uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"serviceUrl")," for the local cluster."),(0,r.kt)("h4",{id:"selective-replication"},"Selective replication"),(0,r.kt)("p",null,"By default, messages are replicated to all clusters configured for the namespace. You can restrict replication selectively by specifying a replication list for a message, and then that message is replicated only to the subset in the replication list."),(0,r.kt)("p",null,"The following is an example for the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.2/client-libraries-java"},"Java API"),". Note the use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"setReplicationClusters")," method when you construct the ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/Message"},"Message")," object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nList<String> restrictReplicationTo = Arrays.asList(\n        "us-west",\n        "us-east"\n);\n\nProducer producer = client.newProducer()\n        .topic("some-topic")\n        .create();\n\nproducer.newMessage()\n        .value("my-payload".getBytes())\n        .setReplicationClusters(restrictReplicationTo)\n        .send();\n\n')),(0,r.kt)("h4",{id:"topic-stats"},"Topic stats"),(0,r.kt)("p",null,"Topic-specific statistics for geo-replication topics are available via the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.2/reference-pulsar-admin"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool and ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin persistent stats persistent://my-tenant/my-namespace/my-topic\n\n")),(0,r.kt)("p",null,"Each cluster reports its own local stats, including the incoming and outgoing replication rates and backlogs."),(0,r.kt)("h4",{id:"delete-a-geo-replication-topic"},"Delete a geo-replication topic"),(0,r.kt)("p",null,"Given that geo-replication topics exist in multiple regions, directly deleting a geo-replication topic is not possible. Instead, you should rely on automatic topic garbage collection."),(0,r.kt)("p",null,"In Pulsar, a topic is automatically deleted when the topic meets the following three conditions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"no producers or consumers are connected to it;"),(0,r.kt)("li",{parentName:"ul"},"no subscriptions to it;"),(0,r.kt)("li",{parentName:"ul"},"no more messages are kept for retention.\nFor geo-replication topics, each region uses a fault-tolerant mechanism to decide when deleting the topic locally is safe.")),(0,r.kt)("p",null,"You can explicitly disable topic garbage collection by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"brokerDeleteInactiveTopicsEnabled")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," in your ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.2/reference-configuration#broker"},"broker configuration"),"."),(0,r.kt)("p",null,"To delete a geo-replication topic, close all producers and consumers on the topic, and delete all of its local subscriptions in every replication cluster. When Pulsar determines that no valid subscription for the topic remains across the system, it will garbage collect the topic."),(0,r.kt)("h2",{id:"replicated-subscriptions"},"Replicated subscriptions"),(0,r.kt)("p",null,"Pulsar supports replicated subscriptions, so you can keep subscription state in sync, within a sub-second timeframe, in the context of a topic that is being asynchronously replicated across multiple geographical regions."),(0,r.kt)("p",null,"In case of failover, a consumer can restart consuming from the failure point in a different cluster."),(0,r.kt)("h3",{id:"enable-replicated-subscription"},"Enable replicated subscription"),(0,r.kt)("p",null,"Replicated subscription is disabled by default. You can enable replicated subscription when creating a consumer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nConsumer<String> consumer = client.newConsumer(Schema.STRING)\n            .topic("my-topic")\n            .subscriptionName("my-subscription")\n            .replicateSubscriptionState(true)\n            .subscribe();\n\n')),(0,r.kt)("h3",{id:"advantages"},"Advantages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It is easy to implement the logic."),(0,r.kt)("li",{parentName:"ul"},"You can choose to enable or disable replicated subscription."),(0,r.kt)("li",{parentName:"ul"},"When you enable it, the overhead is low, and it is easy to configure."),(0,r.kt)("li",{parentName:"ul"},"When you disable it, the overhead is zero.")),(0,r.kt)("h3",{id:"limitations"},"Limitations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When you enable replicated subscription, you're creating a consistent distributed snapshot to establish an association between message ids from different clusters. The snapshots are taken periodically. The default value is ",(0,r.kt)("inlineCode",{parentName:"li"},"1 second"),". It means that a consumer failing over to a different cluster can potentially receive 1 second of duplicates. You can also configure the frequency of the snapshot in the ",(0,r.kt)("inlineCode",{parentName:"li"},"broker.conf")," file."),(0,r.kt)("li",{parentName:"ul"},"Only the base line cursor position is synced in replicated subscriptions while the individual acknowledgments are not synced. This means the messages acknowledged out-of-order could end up getting delivered again, in the case of a cluster failover.")))}d.isMDXComponent=!0},4005:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/geo-replication-34036a887215513a9173d150f92e093e.png"}}]);