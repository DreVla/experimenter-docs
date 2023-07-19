"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[1487],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var g=n.createContext({}),l=function(e){var t=n.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(g.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,g=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(r),u=s,h=m["".concat(g,".").concat(u)]||m[u]||p[u]||a;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=u;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i[m]="string"==typeof e?e:s,o[1]=i;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8344:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(7462),s=(r(7294),r(4137));const a={id:"how-a-message-gets-shown",title:"How a Message Gets Shown",slug:"/messaging/how-a-message-gets-shown",sidebar_position:3},o=void 0,i={unversionedId:"workflow/implementing/messaging/how-a-message-gets-shown",id:"workflow/implementing/messaging/how-a-message-gets-shown",title:"How a Message Gets Shown",description:"All messages belong to a message provider (a source):",source:"@site/docs/workflow/implementing/messaging/how-a-message-gets-shown.md",sourceDirName:"workflow/implementing/messaging",slug:"/messaging/how-a-message-gets-shown",permalink:"/messaging/how-a-message-gets-shown",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/workflow/implementing/messaging/how-a-message-gets-shown.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"how-a-message-gets-shown",title:"How a Message Gets Shown",slug:"/messaging/how-a-message-gets-shown",sidebar_position:3},sidebar:"sidebar",previous:{title:"Messaging Display Logic",permalink:"/messaging/display-logic"},next:{title:"Messaging Telemetry",permalink:"/messaging/telemetry"}},g={},l=[{value:"Message Priority",id:"message-priority",level:3}],c={toc:l},m="wrapper";function p(e){let{components:t,...r}=e;return(0,s.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"All messages belong to a message provider (a source):"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Local provider: shipped with Firefox"),(0,s.kt)("li",{parentName:"ul"},"Remote settings: a remote settings bucket"),(0,s.kt)("li",{parentName:"ul"},"Experiments: part of a treatment branch")),(0,s.kt)("p",null,"All messages have an associated ",(0,s.kt)("a",{parentName:"p",href:"/messaging/display-logic/#triggers"},"trigger")," (user action targeted by the message) and targeting condition. Additionally messages have a frequency cap and they can belong to a group that also has a frequency cap."),(0,s.kt)("p",null,"Deciding to show a message ",(0,s.kt)("a",{parentName:"p",href:"https://searchfox.org/mozilla-central/rev/65d4d3399afa79c8de5a0cc11752d2ba7c31edc1/browser/components/newtab/lib/ASRouter.jsm#1323"},"starts with the trigger action"),", when this happens we look at all the messages matching that trigger. We filter out blocked messages or messages that reached their frequency cap (or their groups frequency cap) and we evaluate targeting returning the first message that matched targeting."),(0,s.kt)("p",null,"This cycle can result in a message being shown (which will send an Exposure event + message specific telemetry events) or no message being shown if targeting didn\u2019t match (but it can still result in a Reach event being sent)."),(0,s.kt)("h3",{id:"message-priority"},"Message Priority"),(0,s.kt)("p",null,"Several messages can be listening for the same trigger condition in which case we can set a higher priority for the message we prefer."))}p.isMDXComponent=!0}}]);