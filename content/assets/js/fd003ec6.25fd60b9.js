"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[18959],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70672:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],l={id:"pulsar-client-go-0.5.0",title:"Pulsar Client Go",sidebar_label:"Pulsar Client Go"},u=void 0,c={unversionedId:"docs/pulsar-client-go-0.5.0",id:"docs/pulsar-client-go-0.5.0",title:"Pulsar Client Go",description:"Fixes",source:"@site/release-notes/docs/pulsar-client-go-0.5.0.md",sourceDirName:"docs",slug:"/docs/pulsar-client-go-0.5.0",permalink:"/release-notes/docs/pulsar-client-go-0.5.0",tags:[],version:"current",frontMatter:{id:"pulsar-client-go-0.5.0",title:"Pulsar Client Go",sidebar_label:"Pulsar Client Go"}},p={},s=[{value:"Fixes",id:"fixes",level:3},{value:"Improvements",id:"improvements",level:3}],m={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"fixes"},"Fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"#465 Reverted datadog to DataDog"),(0,i.kt)("li",{parentName:"ul"},"#499 Fix range channel deadlock error"),(0,i.kt)("li",{parentName:"ul"},"#509 Add sentAt when put item into pendingQueue"),(0,i.kt)("li",{parentName:"ul"},"#474 Fix race condition/goroutine leak in partition discovery goroutine"),(0,i.kt)("li",{parentName:"ul"},"#494 Close cnxPool when closing a Client "),(0,i.kt)("li",{parentName:"ul"},"#478 Move GetPartitionedTopicMetadata to lookup service"),(0,i.kt)("li",{parentName:"ul"},"#470 Fix unexpected nil pointer when reading item from keyring"),(0,i.kt)("li",{parentName:"ul"},"#467 Fix reader with start latest message id inclusive ")),(0,i.kt)("h3",{id:"improvements"},"Improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"#510 Added http lookup service support"),(0,i.kt)("li",{parentName:"ul"},"#502 Support listener name for go client"),(0,i.kt)("li",{parentName:"ul"},"#484 Add multiple hosts support "),(0,i.kt)("li",{parentName:"ul"},"#471 Use newError to build return error"),(0,i.kt)("li",{parentName:"ul"},"#459 Improve error log for frame size too big and maxMessageSize")))}d.isMDXComponent=!0}}]);