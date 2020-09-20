(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{64:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return o})),a.d(n,"metadata",(function(){return r})),a.d(n,"rightToc",(function(){return c})),a.d(n,"default",(function(){return l}));var t=a(2),i=a(6),s=(a(0),a(75)),o={title:"Overview"},r={unversionedId:"language/overview",id:"language/overview",isDocsHomePage:!1,title:"Overview",description:"Wasp is a declarative language which recognizes web application-specific terms (e.g. page or route) as",source:"@site/docs/language/overview.md",slug:"/language/overview",permalink:"/web/docs/language/overview",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/language/overview.md",version:"current",sidebar:"docs",previous:{title:"Getting Started",permalink:"/web/docs/language/getting-started"},next:{title:"Basic Elements",permalink:"/web/docs/language/basic-elements"}},c=[],p={rightToc:c};function l(e){var n=e.components,a=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(t.a)({},p,a,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Wasp is a declarative language which recognizes web application-specific terms (e.g. ",Object(s.b)("em",{parentName:"p"},"page")," or ",Object(s.b)("em",{parentName:"p"},"route"),") as\nwords of the language."),Object(s.b)("p",null,"The basic idea is that the skeleton of an app (e.g. pages, routes, database model, ...) is defined in a ",Object(s.b)("inlineCode",{parentName:"p"},".wasp")," file\nand then the specific parts (web components, back-end queries) are implemented in React and Node.js and referenced\nin the ",Object(s.b)("inlineCode",{parentName:"p"},".wasp")," file."),Object(s.b)("p",null,"Here is the minimal example of a web app written in Wasp:"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-css"}),'app todoApp {\n    title: "ToDo App"\n}\n\nentityPSL Task {=psl\n    id          Int     @id @default(autoincrement())\n    description String\n    isDone      Boolean @default(false)\npsl=}\n\nroute "/" -> page Main\npage Main {\n    component: import Main from "@ext/pages/Main"\n}\n\nquery getTasks {\n  fn: import { getTasks } from "@ext/queries.js"\n}\n\naction createTask {\n  fn: import { createTask } from "@ext/actions.js"\n}\n')),Object(s.b)("p",null,"In the following sections each of these basic language elements is explained. "))}l.isMDXComponent=!0}}]);