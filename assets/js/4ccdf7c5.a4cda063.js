(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[3543],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o={id:"localization-process",title:"Localization",slug:"/localization-process"},l=void 0,s={unversionedId:"workflow/localization-process",id:"workflow/localization-process",isDocsHomePage:!1,title:"Localization",description:"Localization support for Nimbus experiments is under active development. Make sure to check this page again before setting up new experiments.",source:"@site/docs/workflow/localization.md",sourceDirName:"workflow",slug:"/localization-process",permalink:"/localization-process",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/workflow/localization.md",tags:[],version:"current",frontMatter:{id:"localization-process",title:"Localization",slug:"/localization-process"},sidebar:"sidebar",previous:{title:"Overview",permalink:"/workflow/overview"},next:{title:"Rollouts FAQ",permalink:"/rollouts-faq"}},p=[{value:"Request Translation",id:"request-translation",children:[{value:"Issue title",id:"issue-title",children:[]},{value:"Information about the experiment",id:"information-about-the-experiment",children:[]},{value:"List of locales",id:"list-of-locales",children:[]},{value:"Deadline",id:"deadline",children:[]},{value:"Content to translate",id:"content-to-translate",children:[]}]},{value:"Translation",id:"translation",children:[]},{value:"Retrieve Translated Content",id:"retrieve-translated-content",children:[]}],c={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Localization support for Nimbus experiments is under active development. Make sure to check this page again before setting up new experiments."))),(0,r.kt)("p",null,"Using the process described in this page it\u2019s possible to localize content for experiments outside of the standard product release cycle. The current solution has a few known limitations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To target a subset of locales (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"de")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"fr"),"), it\u2019s necessary to create separate experiments, each targeting a single locale."),(0,r.kt)("li",{parentName:"ul"},"The process to request translations and retrieve translated content is completely manual.")),(0,r.kt)("img",{src:"/img/workflow/localization_workflow.png",alt:"Overview of localization workflow",class:"img-xl-center"}),(0,r.kt)("h2",{id:"request-translation"},"Request Translation"),(0,r.kt)("p",null,"Once the content needed for the experiment is finalized, to initiate a translation request ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mozilla-l10n/nimbus-l10n/issues/new?assignees=flodolo&template=new_translation.yaml"},"create a new issue here"),". Use the ",(0,r.kt)("strong",{parentName:"p"},"Submit new issue")," button at the bottom of the page after filling all mandatory fields in the form; this will generate a standard GitHub issue, so it will still be possible to add comments later."),(0,r.kt)("h3",{id:"issue-title"},"Issue title"),(0,r.kt)("p",null,"Include a descriptive name for the experiment, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"PiP alternative dismiss message"),"."),(0,r.kt)("h3",{id:"information-about-the-experiment"},"Information about the experiment"),(0,r.kt)("p",null,"Provide as much information as possible about the experiment, including links to the experiment brief and mock-ups of the UI where applicable. This information will be used by the Localization EPM assigned to the issue to set up the file for translation, and provide context to localizers."),(0,r.kt)("h3",{id:"list-of-locales"},"List of locales"),(0,r.kt)("p",null,"Provide a list of the locales that need to be translated. Keep in mind that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mozilla-l10n.github.io/documentation/localization/globalization_best_practices.html#region--language"},"Locales are not regions"),". So, for example, French (fr) should be requested, not France."),(0,r.kt)("li",{parentName:"ul"},"Not all locales are supported. For example, our infrastructure supports a generic ",(0,r.kt)("inlineCode",{parentName:"li"},"French (fr)"),", but not ",(0,r.kt)("inlineCode",{parentName:"li"},"Canadian French (fr-CA)"),". In case, reach out to the ",(0,r.kt)("a",{parentName:"li",href:"https://mozilla-hub.atlassian.net/wiki/spaces/FIREFOX/pages/11045331/Localization+l10n+and+Translation"},"Localization Team")," to clarify any doubts.")),(0,r.kt)("p",null,"In the initial testing phase for this workflow, we plan to limit the requests to tier 1 locales (",(0,r.kt)("inlineCode",{parentName:"p"},"de"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fr"),") \u2014 where we potentially also have internal copywriters \u2014 and locales that have internal staff available for support (",(0,r.kt)("inlineCode",{parentName:"p"},"it"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ja"),")."),(0,r.kt)("h3",{id:"deadline"},"Deadline"),(0,r.kt)("p",null,"Provide the desired deadline (optional). Keep in mind that this process is still in a testing phase, so it will take longer to set up the request and complete the translation. Unless there is pre-established availability from staff to localize the content, expect about 7 days to complete the process from request to delivery. The time required might change depending on the amount of text to translate."),(0,r.kt)("h3",{id:"content-to-translate"},"Content to translate"),(0,r.kt)("p",null,"If the experiment is small, it\u2019s possible to provide the content to translate directly in the issue. Alternatively, consider providing a link to a spreadsheet with one string per row, and 2 columns (one for the English text, one for comments or context) (an example is available ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/11pIMJUxkiMELx-w6Czywy2ZRqCy2McUebnOT__yTU_Y/edit"},"here"),")."),(0,r.kt)("p",null,"If you\u2019re working with a developer already familiar with ",(0,r.kt)("a",{parentName:"p",href:"https://projectfluent.org/"},"Fluent"),", they can also help providing directly a Fluent (",(0,r.kt)("inlineCode",{parentName:"p"},".ftl"),") file with comments. Note that we only support a subset of features for this workflow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Only plain messages with a value, no attributes or variants."),(0,r.kt)("li",{parentName:"ul"},"No terms or variables, so brand names like ",(0,r.kt)("inlineCode",{parentName:"li"},"Firefox")," will be hard-coded in the text.")),(0,r.kt)("p",null,"Example of a Fluent file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"intro-message = Switch to Firefox Home with themed background\n# Button label that enables the theme\nintro-button-enable = Use background\n")),(0,r.kt)("h2",{id:"translation"},"Translation"),(0,r.kt)("p",null,"In most cases, the translation will be performed through ",(0,r.kt)("a",{parentName:"p",href:"https://pontoon.mozilla.org/"},"Pontoon"),", the internal Translation Management System (TMS) in use at Mozilla. The standard process expects content to be translated and reviewed by ",(0,r.kt)("strong",{parentName:"p"},"community"),", which ensures higher quality but requires longer turn-around. On a case by case basis, it will be possible to consider alternative sources (internal staff, external paid vendors, or machine translation)."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PROVIDER"),(0,r.kt)("th",{parentName:"tr",align:null},"QUALITY"),(0,r.kt)("th",{parentName:"tr",align:null},"SPEED"),(0,r.kt)("th",{parentName:"tr",align:null},"SLA"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Community (Pontoon)"),(0,r.kt)("td",{parentName:"tr",align:null},"High"),(0,r.kt)("td",{parentName:"tr",align:null},"Low (1-2 weeks)"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pre-translation (Pontoon)",(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:null},"Medium-Low"),(0,r.kt)("td",{parentName:"tr",align:null},"High (minutes without review)"),(0,r.kt)("td",{parentName:"tr",align:null},"100%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Paid vendors"),(0,r.kt)("td",{parentName:"tr",align:null},"Medium-High"),(0,r.kt)("td",{parentName:"tr",align:null},"Medium-High (48h or more)"),(0,r.kt)("td",{parentName:"tr",align:null},"100%")))),(0,r.kt)("p",null,"The localization EPM assigned to the issue will be able to advise on these choices."),(0,r.kt)("h2",{id:"retrieve-translated-content"},"Retrieve Translated Content"),(0,r.kt)("p",null,"Once translation has been completed, the requester will be notified in the original issue, with a link to a JSON file that include all translations. The experiment owner will need to copy them manually in the experiment recipe for each locale."),(0,r.kt)("p",null,"The JSON file uses the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "translations": {\n    "en-US": {\n      "colorways-title": "Life in color",\n      "fx100-message": "Switch to Firefox Home with themed background"\n    },\n    "it": {\n      "colorways-title": "Una vita a colori",\n      "fx100-message": "Passa alla Pagina iniziale di Firefox con uno sfondo a tema"\n    }\n  },\n  "complete_locales": [\n    "en-US",\n    "it"\n  ]\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"translations")," includes a key for each locale (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"it")," for Italian), which in turns includes all pairs of unique message identifiers and translations. ",(0,r.kt)("inlineCode",{parentName:"p"},"en-US")," is also provided as a reference."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"complete_locales")," key includes the list of all locales completely translated."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Currently still in a testing phase.",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);