(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{28:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(9),i=c(3),s=c(1),a=c(0),l=Object(s.createContext)(),r=function(e){var t=e.children,c=Object(s.useState)("light"),n=Object(i.a)(c,2),r=n[0],o=n[1];Object(s.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://brncode.github.io/",j="",d="Bruno de Oliveira",b="Cientista de Dados",u="Tenho experi\xeancia em desenvolvimento de modelos preditivos aplicados \xe0 concess\xe3o de cr\xe9dito, previs\xe3o de commodities, an\xe1lise de churn e Marketing Mix Modeling (MMM). Al\xe9m disso, vale destacar que mantenho conhecimentos intermedi\xe1rios em ingl\xeas e espanhol.",h="/CV_Bruno.pdf",m={linkedin:"https://www.linkedin.com/in/o-brn/",github:"https://github.com/BrnCode/"},O=[{name:"Project 1",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com",livePreview:"https://github.com"},{name:"Project 2",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com",livePreview:"https://github.com"},{name:"Project 3",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com",livePreview:"https://github.com"}],p=["SQL","Python","Excel","PowerBI","Flask","Git"],x="brn.olives@gmail.com",f=c(16),v=c.n(f),k=c(14),N=c.n(k),g=c(18),_=c.n(g),w=c(17),C=c.n(w),S=(c(28),function(){var e=Object(s.useContext)(l),t=Object(i.a)(e,1)[0],c=t.themeName,n=t.toggleTheme,r=Object(s.useState)(!1),o=Object(i.a)(r,2),j=o[0],d=o[1],b=function(){return d(!j)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[O.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projetos",onClick:b,className:"link link--nav",children:"Projetos"})}):null,p.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#habilidades",onClick:b,className:"link link--nav",children:"Habilidades"})}):null,x?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contato",onClick:b,className:"link link--nav",children:"Contato"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:n,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===c?Object(a.jsx)(N.a,{}):Object(a.jsx)(v.a,{})}),Object(a.jsx)("button",{type:"button",onClick:b,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(a.jsx)(C.a,{}):Object(a.jsx)(_.a,{})})]})}),P=(c(32),function(){var e=o,t=j;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(S,{})]})}),y=c(11),M=c.n(y),q=c(19),A=c.n(q),E=(c(33),function(){var e=d,t=b,c=u,n=h,i=m;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Oii, eu sou ",Object(a.jsx)("span",{className:"about__name",children:e})]}),t&&Object(a.jsx)("h2",{className:"about__role",children:t}),Object(a.jsx)("p",{className:"about__desc",children:c&&c}),Object(a.jsxs)("div",{className:"about__contact center",children:[n&&Object(a.jsx)("a",{href:n,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Curr\xedculo"})}),i&&Object(a.jsxs)(a.Fragment,{children:[i.github&&Object(a.jsx)("a",{href:i.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(M.a,{})}),i.linkedin&&Object(a.jsx)("a",{href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(A.a,{})})]})]})]})}),T=c(7),B=c.n(T),L=c(20),V=c.n(L),I=(c(35),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},B()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(M.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(V.a,{})})]})}),R=(c(36),function(){return O.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projetos"}),Object(a.jsx)("div",{className:"projects__grid",children:O.map((function(e){return Object(a.jsx)(I,{project:e},B()())}))})]}):null}),F=(c(37),function(){return p.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Habilidades"}),Object(a.jsx)("ul",{className:"skills__list",children:p.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},B()())}))})]}):null}),H=c(21),J=c.n(H),z=(c(38),function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?n(!0):n(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),c?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(J.a,{fontSize:"large"})})}):null}),D=(c(39),function(){return x?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contato"}),Object(a.jsx)("a",{href:"mailto:".concat(x),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Me envie um e-mail"})})]}):null}),G=(c(40),function(){var e=Object(s.useContext)(l),t=Object(i.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(P,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(E,{}),Object(a.jsx)(R,{}),Object(a.jsx)(F,{}),Object(a.jsx)(D,{})]}),Object(a.jsx)(z,{})]})});c(41);Object(n.render)(Object(a.jsx)(r,{children:Object(a.jsx)(G,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.b622ac39.chunk.js.map