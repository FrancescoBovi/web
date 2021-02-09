(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{68:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return i})),n.d(e,"metadata",(function(){return c})),n.d(e,"rightToc",(function(){return s})),n.d(e,"default",(function(){return p}));var r=n(2),a=(n(0),n(90)),o=n(91);const i={title:"Introduction"},c={unversionedId:"tutorials/todo-app",id:"tutorials/todo-app",isDocsHomePage:!1,title:"Introduction",description:"If you haven't yet set up Wasp, check out Getting Started first for installation instructions, and then continue with the tutorial.",source:"@site/docs/tutorials/todo-app.md",slug:"/tutorials/todo-app",permalink:"/docs/tutorials/todo-app",editUrl:"https://github.com/wasp-lang/web/edit/master/docs/tutorials/todo-app.md",version:"current",sidebar:"docs",previous:{title:"How it works",permalink:"/docs/how-it-works"},next:{title:"Creating new project",permalink:"/docs/tutorials/todo-app/creating-new-project"}},s=[],u={rightToc:s};function p({components:t,...e}){return Object(a.b)("wrapper",Object(r.a)({},u,e,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"If you haven't yet set up Wasp, check out ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/"}),"Getting Started")," first for installation instructions, and then continue with the tutorial."))),Object(a.b)("p",null,"Let's build together a simple Todo App in Wasp!"),Object(a.b)("img",{alt:"How Todo App will work once it is done",src:Object(o.a)("img/todo-app-tutorial-intro.gif"),style:{border:"1px solid black"}}),Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)("p",null,"This tutorial will take you step by step through the most important features of Wasp."),Object(a.b)("p",null,"If you get stuck at any point (or just want to chat), reach out to us on ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://discord.gg/rzdnErX"}),"Discord")," and we will help you!"),Object(a.b)("p",null,"You can check out the complete code of the app we are about to build with Wasp ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wasp-lang/wasp/tree/master/examples/tutorials/TodoApp"}),"here"),"."),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"If you are interested at any moment in what is Wasp actually generating in the background, take a look at ",Object(a.b)("inlineCode",{parentName:"p"},".wasp/out/")," directory in your project."))))}p.isMDXComponent=!0},89:function(t,e,n){"use strict";var r=n(0),a=n(19);e.a=function(){const t=Object(r.useContext)(a.a);if(null===t)throw new Error("Docusaurus context not provided");return t}},90:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=a.a.createContext({}),p=function(t){var e=a.a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},l=function(t){var e=p(t.components);return a.a.createElement(u.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},d=a.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),l=p(n),d=r,f=l["".concat(i,".").concat(d)]||l[d]||b[d]||o;return n?a.a.createElement(f,c(c({ref:e},u),{},{components:n})):a.a.createElement(f,c({ref:e},u))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return i}));var r=n(89),a=n(92);function o(){const{siteConfig:{baseUrl:t="/",url:e}={}}=Object(r.a)();return{withBaseUrl:(n,r)=>function(t,e,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return e+n;const i=n.startsWith(e)?n:e+n.replace(/^\//,"");return o?t+i:i}(e,t,n,r)}}function i(t,e={}){const{withBaseUrl:n}=o();return n(t,e)}},92:function(t,e,n){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!r(t)}n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a}))}}]);