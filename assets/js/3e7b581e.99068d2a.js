"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[3100],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||n;return r?i.createElement(f,o(o({ref:t},u),{},{components:r})):i.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<n;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5780:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var i=r(7462),a=(r(7294),r(4137));const n={id:"feature-metrics",title:"Feature metrics aren't there?",slug:"/metric-availability/feature-metrics"},o=void 0,s={unversionedId:"faq/metric-availability/feature-metrics",id:"faq/metric-availability/feature-metrics",title:"Feature metrics aren't there?",description:"Watch this video to know how metrics work with experiments.  The video covers the steps below. These details are provided here for ease of reference and links.",source:"@site/docs/faq/metric-availability/non-guardrail-outcome.mdx",sourceDirName:"faq/metric-availability",slug:"/metric-availability/feature-metrics",permalink:"/metric-availability/feature-metrics",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/faq/metric-availability/non-guardrail-outcome.mdx",tags:[],version:"current",frontMatter:{id:"feature-metrics",title:"Feature metrics aren't there?",slug:"/metric-availability/feature-metrics"},sidebar:"sidebar",previous:{title:"Is this supported?",permalink:"/feature-requires-restart/how-to-restart"},next:{title:"Mobile How-To's",permalink:"/mobile/mobile-how-to"}},l={},c=[],u={toc:c},m="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Watch ",(0,a.kt)("a",{parentName:"p",href:"https://mozilla.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7f677cde-3b61-4cd5-8119-af7b013c7579"},"this video")," to know how metrics work with experiments.  The video covers the steps below. These details are provided here for ease of reference and links.")),(0,a.kt)("p",null,"After completing your experiment brief and defining your learning goals - attend an office hours to discuss how you could measure the changes.  Based on that discussion - go through the steps below until the metrics needed for this experiment are covered.  You do not need to complete all the steps - just enough to answer your questions."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1")," - Check  ",(0,a.kt)("a",{parentName:"p",href:"/jetstream/metrics/#how-do-i-add-a-metric-to-my-experiment"},"here")," to learn if the existing Guardrail/Core metrics or Outcomes will answer your questions."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2")," - Did an experiment run previously had these metrics you need?  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Look at previous experiments in your feature area - do those metrics meet your needs?  Re-using metrics is a much quicker than writing custom metrics from scratch.   "),(0,a.kt)("li",{parentName:"ul"},"If yes, create a ",(0,a.kt)("a",{parentName:"li",href:"https://mozilla-hub.atlassian.net/jira/software/c/projects/DO/boards/269"},"DO Jira ticket")," including:  ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"the link to your current experiment "),(0,a.kt)("li",{parentName:"ul"},"the link to the previous experiment(s) results.  Specify the metrics from the previous experiment you are interested in and how they answer your question.    "))),(0,a.kt)("li",{parentName:"ul"},"BEST PRACTICE: If you want these metrics for future experiments on this feature - ask to have an Outcome added instead of a custom config file.  Adding an Outcome means these metrics will be available to select from the Outcome drop down in Metrics for future experiments.  ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3")," - Provide information to create a custom metric for this experiment."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a ",(0,a.kt)("a",{parentName:"li",href:"https://mozilla-hub.atlassian.net/jira/software/c/projects/DO/boards/269"},"DO Jira ticket")," including: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"the link to your current experiment  "),(0,a.kt)("li",{parentName:"ul"},"the questions you need to answer about the feature (that aren't covered by metrics from step 1 or step 2)"),(0,a.kt)("li",{parentName:"ul"},"the specific telemetry probes in your feature that will be used to answer the question - including the possible values those probes collect and when they are sent. "))),(0,a.kt)("li",{parentName:"ul"},"A data scientist will work with feature product and engineering to create a custom jetstream config file to add these metrics.  Provided the telemetry probes exist and are testing - the custom configuration file can be written after experiment launch (before end) and applied.")))}p.isMDXComponent=!0}}]);