"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[421],{5318:function(e,n,r){r.d(n,{Zo:function(){return d},kt:function(){return m}});var t=r(7378);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),c=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=c(e.components);return t.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(u,".").concat(m)]||p[m]||s[m]||l;return r?t.createElement(f,i(i({ref:n},d),{},{components:r})):t.createElement(f,i({ref:n},d))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2537:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var t=r(5773),a=r(808),l=(r(7378),r(5318)),i=["components"],o={slug:"/flight"},u="Flight",c={unversionedId:"auto-generated/flight",id:"auto-generated/flight",title:"Flight",description:"`randAirline`",source:"@site/docs/auto-generated/flight.mdx",sourceDirName:"auto-generated",slug:"/flight",permalink:"/falso/docs/flight",editUrl:"https://github.com/ngneat/falso/blob/main/docs/updating-docs.md",tags:[],version:"current",frontMatter:{slug:"/flight"},sidebar:"falso",previous:{title:"Finance",permalink:"/falso/docs/finance"},next:{title:"Food",permalink:"/falso/docs/food"}},d=[{value:"<code>randAirline</code>",id:"randairline",children:[],level:3},{value:"<code>randFlightDetails</code>",id:"randflightdetails",children:[],level:3},{value:"<code>randFlightNumber</code>",id:"randflightnumber",children:[],level:3},{value:"<code>randSeatNumber</code>",id:"randseatnumber",children:[],level:3}],s={toc:d};function p(e){var n=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"flight"},"Flight"),(0,l.kt)("h3",{id:"randairline"},(0,l.kt)("inlineCode",{parentName:"h3"},"randAirline")),(0,l.kt)("p",null,"Generate a random airline."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randAirline } from '@ngneat/falso';\n\nrandAirline()\nrandAirline({ length: 10 })\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randAirline()}/>;\n}\n")),(0,l.kt)("h3",{id:"randflightdetails"},(0,l.kt)("inlineCode",{parentName:"h3"},"randFlightDetails")),(0,l.kt)("p",null,"Generate a random flight details."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randFlightDetails } from '@ngneat/falso';\n\nrandFlightDetails()\nrandFlightDetails({ length: 10 })\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randFlightDetails()}/>;\n}\n")),(0,l.kt)("h3",{id:"randflightnumber"},(0,l.kt)("inlineCode",{parentName:"h3"},"randFlightNumber")),(0,l.kt)("p",null,"Generate a random flight number."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randFlightNumber } from '@ngneat/falso';\n\nrandFlightNumber()\nrandFlightNumber({ airline: 'RyanAir' })\nrandFlightNumber({ length: 10 })\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randFlightNumber()}/>;\n}\n")),(0,l.kt)("h3",{id:"randseatnumber"},(0,l.kt)("inlineCode",{parentName:"h3"},"randSeatNumber")),(0,l.kt)("p",null,"Generate a random seat number."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randSeatNumber } from '@ngneat/falso';\n\nrandSeatNumber()\nrandSeatNumber({ length: 10 })\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randSeatNumber()}/>;\n}\n")))}p.isMDXComponent=!0}}]);