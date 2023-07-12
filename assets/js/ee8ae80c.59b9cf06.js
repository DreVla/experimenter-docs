"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[7595],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=r.createContext({}),p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,m=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(m,".").concat(d)]||u[d]||s[d]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=d;var a={};for(var m in t)hasOwnProperty.call(t,m)&&(a[m]=t[m]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const l={title:"A/B Experiments",slug:"/a-b-experiments"},i=void 0,a={unversionedId:"workflow/a-b-experiments",id:"workflow/a-b-experiments",title:"A/B Experiments",description:"To implement an A/A or A/B experiment on Desktop",source:"@site/docs/workflow/a-b-experiments.md",sourceDirName:"workflow",slug:"/a-b-experiments",permalink:"/a-b-experiments",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/workflow/a-b-experiments.md",tags:[],version:"current",frontMatter:{title:"A/B Experiments",slug:"/a-b-experiments"},sidebar:"sidebar",previous:{title:"Feature Definition",permalink:"/feature-definition"},next:{title:"Custom Audiences",permalink:"/workflow/custom-audiences"}},m={},p=[{value:"To implement an A/A or A/B experiment on Desktop",id:"to-implement-an-aa-or-ab-experiment-on-desktop",level:2},{value:"To implement an A/A or A/B experiment on Mobile",id:"to-implement-an-aa-or-ab-experiment-on-mobile",level:2},{value:"To implement a holdback experiment",id:"to-implement-a-holdback-experiment",level:2},{value:"To implement custom telemetry collection",id:"to-implement-custom-telemetry-collection",level:2},{value:"To locally validate your changes",id:"to-locally-validate-your-changes",level:2}],c={toc:p},u="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"to-implement-an-aa-or-ab-experiment-on-desktop"},"To implement an A/A or A/B experiment on Desktop"),(0,o.kt)("h2",{id:"to-implement-an-aa-or-ab-experiment-on-mobile"},"To implement an A/A or A/B experiment on Mobile"),(0,o.kt)("h2",{id:"to-implement-a-holdback-experiment"},"To implement a holdback experiment"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Desktop"),(0,o.kt)("li",{parentName:"ul"},"Mobile")),(0,o.kt)("h2",{id:"to-implement-custom-telemetry-collection"},"To implement custom telemetry collection"),(0,o.kt)("p",null,"If you need telemetry beyond what is already specified for your mobile client as part of your implementation process you will need to add the additional telemetry to your client."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Desktop"),(0,o.kt)("li",{parentName:"ul"},"Mobile")),(0,o.kt)("h2",{id:"to-locally-validate-your-changes"},"To locally validate your changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Desktop"),(0,o.kt)("li",{parentName:"ul"},"Mobile")))}s.isMDXComponent=!0}}]);