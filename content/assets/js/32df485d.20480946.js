"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[13825],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,u(u({ref:t},s),{},{components:r})):n.createElement(m,u({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var l=2;l<a;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},17567:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),u=["components"],c={id:"pulsar-cs-0.9.7",title:"Pulsar DotPulsar",sidebar_label:"Pulsar DotPulsar"},i=void 0,l={unversionedId:"docs/pulsar-cs-0.9.7",id:"docs/pulsar-cs-0.9.7",title:"Pulsar DotPulsar",description:"Added",source:"@site/release-notes/docs/pulsar-cs-0.9.7.md",sourceDirName:"docs",slug:"/docs/pulsar-cs-0.9.7",permalink:"/release-notes/docs/pulsar-cs-0.9.7",tags:[],version:"current",frontMatter:{id:"pulsar-cs-0.9.7",title:"Pulsar DotPulsar",sidebar_label:"Pulsar DotPulsar"}},s={},p=[{value:"Added",id:"added",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"added"},"Added"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added an ExceptionHandler method on the IPulsarClientBuilder taking an Action\\<ExceptionContext",">"," for easy sync exception handling"),(0,a.kt)("li",{parentName:"ul"},"Added .NET 5 as a target framework and started using C# 9.0"),(0,a.kt)("li",{parentName:"ul"},"Added performance improvements when sending and receiving data"),(0,a.kt)("li",{parentName:"ul"},"The default values for ConsumerOptions, ReaderOptions, and ProducerOptions are now public")))}f.isMDXComponent=!0}}]);