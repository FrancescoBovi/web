(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return h})),n.d(t,"metadata",(function(){return O})),n.d(t,"rightToc",(function(){return v})),n.d(t,"default",(function(){return g}));var a=n(2),r=n(0),o=n.n(r),i=n(84),s=n(91),c=n(87),l=n(68),u=n.n(l);const p=37,b=39;var d=function(e){const{block:t,children:n,defaultValue:a,values:i,groupId:l}=e,{tabGroupChoices:d,setTabGroupChoices:m}=Object(s.a)(),[f,h]=Object(r.useState)(a),[O,v]=Object(r.useState)(!1);if(null!=l){const e=d[l];null!=e&&e!==f&&i.some((t=>t.value===e))&&h(e)}const j=e=>{h(e),null!=l&&m(l,e)},g=[],w=e=>{e.metaKey||e.altKey||e.ctrlKey||v(!0)},y=()=>{v(!1)};return Object(r.useEffect)((()=>{window.addEventListener("keydown",w),window.addEventListener("mousedown",y)}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},i.map((({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(c.a)("tabs__item",u.a.tabItem,{"tabs__item--active":f===e}),style:O?{}:{outline:"none"},key:e,ref:e=>g.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case b:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case p:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e),w(e)},onFocus:()=>j(e),onClick:()=>{j(e),v(!1)},onPointerDown:()=>v(!1)},t)))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((e=>e.props.value===f))[0]))};var m=function(e){return o.a.createElement("div",null,e.children)},f=n(85);const h={title:"Getting Started"},O={unversionedId:"tutorials/getting-started",id:"tutorials/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Requirements",source:"@site/docs/tutorials/getting-started.md",slug:"/tutorials/getting-started",permalink:"/docs/tutorials/getting-started",editUrl:"https://github.com/wasp-lang/web/edit/master/docs/tutorials/getting-started.md",version:"current",sidebar:"docs",previous:{title:"How it works",permalink:"/docs/how-it-works"},next:{title:"Introduction",permalink:"/docs/tutorials/todo-app"}},v=[{value:"Requirements",id:"requirements",children:[{value:"Node.js",id:"nodejs",children:[]}]},{value:"Installation",id:"installation",children:[]},{value:"Creating and running your first app",id:"creating-and-running-your-first-app",children:[]},{value:"IDE support",id:"ide-support",children:[{value:"Visual Studio Code",id:"visual-studio-code",children:[]}]},{value:"What next?",id:"what-next",children:[]}],j={rightToc:v};function g({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},j,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("h3",{id:"nodejs"},"Node.js"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"You need to have Node.js installed and it needs to be at least version 12.18.0.")),Object(i.b)("p",null,"We recommend using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/nvm-sh/nvm"}),"nvm")," for managing your Node.js installation version(s)."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("details",null,Object(i.b)("summary",{style:{cursor:"pointer","text-decoration":"underline"}},"Quick guide on installing/using nvm"),Object(i.b)("p",null,Object(i.b)("p",{parentName:"div"},"  Install nvm via your OS package manager (aptitude, pacman, homebrew, ...) or alternatively via ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/nvm-sh/nvm#install--update-script"}),"nvm install script"),"."),Object(i.b)("p",{parentName:"div"},"  Then, install a version of node that you need (any >= 12.18.0), e.g.:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell-session"}),"$ nvm install 12\n")),Object(i.b)("p",{parentName:"div"},"  Finally, whenever you need to ensure specific version of node is used, run e.g."),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell-session"}),"$ nvm use 12\n")),Object(i.b)("p",{parentName:"div"},"  to set the node version for current shell session."),Object(i.b)("p",{parentName:"div"},"  You can run"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell-session"}),"$ nvm current\n")),Object(i.b)("p",{parentName:"div"},"  to check the version of node currently being used in this shell session."),Object(i.b)("p",{parentName:"div"},"  Check NVM repo for more details: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/nvm-sh/nvm"}),"https://github.com/nvm-sh/nvm")," ."),"  ")))),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)(d,{defaultValue:"linux/osx",values:[{label:"Linux / OS X",value:"linux/osx"},{label:"Windows",value:"win"},{label:"From source",value:"source"}],mdxType:"Tabs"},Object(i.b)(m,{value:"linux/osx",mdxType:"TabItem"},Object(i.b)("p",null,"Run following command to download and install ",Object(i.b)("inlineCode",{parentName:"p"},"wasp")," binary:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl -sSL http://get.wasp-lang.dev | sh\n"))),Object(i.b)(m,{value:"win",mdxType:"TabItem"},Object(i.b)("p",null,"With Wasp for Windows, we are almost there: Wasp is successfully compiling and running on Windows but there is a bug or two stopping it from fully working."),Object(i.b)("p",null,"Check it out ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wasp-lang/wasp/issues/48"}),"here")," if you are interested in helping.")),Object(i.b)(m,{value:"source",mdxType:"TabItem"},Object(i.b)("p",null,"If installer is not working for you or your OS is not supported, you can try building Wasp from source."),Object(i.b)("p",null,"To install from source, you need to clone the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wasp-lang/wasp"}),"wasp repo"),", install ",Object(i.b)("inlineCode",{parentName:"p"},"stack")," on your machine and then run ",Object(i.b)("inlineCode",{parentName:"p"},"stack install")," from the ",Object(i.b)("inlineCode",{parentName:"p"},"waspc/")," dir."),Object(i.b)("p",null,"If you have never built Wasp before, this might take some time due to ",Object(i.b)("inlineCode",{parentName:"p"},"stack")," downloading dependencies for the first time.  "),Object(i.b)("p",null,"Check ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wasp-lang/wasp/tree/master/waspc"}),"waspc/")," for more details on building."))),Object(i.b)("h2",{id:"creating-and-running-your-first-app"},"Creating and running your first app"),Object(i.b)("p",null,"Execute the following commands in your terminal:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell-session"}),"$ wasp new MyNewApp # Creates a new web app named MyNewApp.\n$ cd MyNewApp\n$ wasp start # Serves the web app.\n")),Object(i.b)("p",null,"That's it! You have successfully created and served a new web app at ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:3000"}),"http://localhost:3000")," and Wasp is serving both frontend and backend for you."),Object(i.b)("h2",{id:"ide-support"},"IDE support"),Object(i.b)("h3",{id:"visual-studio-code"},"Visual Studio Code"),Object(i.b)("img",{width:"20px",alt:"Visual Studio Code logo",src:Object(f.a)("img/vscode-logo.png")}),"\xa0 If you are using Visual Studio Code, install our ",Object(i.b)("a",{href:"https://marketplace.visualstudio.com/items?itemName=wasp-lang.wasp"},"Wasp language extension"),"!",Object(i.b)("h2",{id:"what-next"},"What next?"),Object(i.b)("p",null,"Check out our ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/tutorials/todo-app"}),"Todo App tutorial"),"."))}g.isMDXComponent=!0},83:function(e,t,n){"use strict";var a=n(0),r=n(19);t.a=function(){const e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(83),r=n(86);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.a)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(a)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+i:i}(t,e,n,a)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},86:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},87:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},90:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},91:function(e,t,n){"use strict";var a=n(0),r=n(90);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}}}]);