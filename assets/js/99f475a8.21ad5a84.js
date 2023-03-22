(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[6133],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(r),d=a,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5015:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i={},l="What does early startup do?",s={unversionedId:"faq/Early-Startup/What-do-it-do",id:"faq/Early-Startup/What-do-it-do",isDocsHomePage:!1,title:"What does early startup do?",description:"There is info on how to use here in the documentation",source:"@site/docs/faq/Early-Startup/What-do-it-do.mdx",sourceDirName:"faq/Early-Startup",slug:"/faq/Early-Startup/What-do-it-do",permalink:"/faq/Early-Startup/What-do-it-do",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/faq/Early-Startup/What-do-it-do.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Local configuration for natural enrollments",permalink:"/local-enrollment"},next:{title:"How early is early?",permalink:"/faq/Early-Startup/how-early-is-early"}},u=[],c={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-does-early-startup-do"},"What does early startup do?"),(0,o.kt)("p",null,"There is info on how to use ",(0,o.kt)("a",{parentName:"p",href:"https://experimenter.info/desktop-feature-api/#registering-a-new-feature"},"here in the documentation")),(0,o.kt)("p",null,'Include "isEarlyStartup" in the FeatureManifest.yaml if you need sychronous access / very early access at startup or if you are registering this to use for platform experiments.'),(0,o.kt)("p",null,"What does this do?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It caches the feature values to disk using temporary prefs so that they\u2019re available as soon as user prefs are initialized and loaded, so they\u2019re available earlier in browser initialization and also helps make them available to gecko more easily."),(0,o.kt)("li",{parentName:"ul"},"IsEarlyStartup means we persist the experiment data in prefs so you can a) use them from c++ or b) use the JS experiment API before we've loaded experiments from disk.")),(0,o.kt)("p",null,"So why don't I always use Early Startup to be sure my feature is controllable by an experiment early enough?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You have to reconcile storing state in multiple places, it's only needed for a specific set of features in specific circumstances, so for the rest of them it's much safer to not touch the pref store at all and only worry about a single source of state."),(0,o.kt)("li",{parentName:"ul"},"It also makes tests more annoying because if you don't clean them up properly it's easy to break adjacent tests")))}p.isMDXComponent=!0}}]);