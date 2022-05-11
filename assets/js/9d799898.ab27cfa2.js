"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[997],{5318:function(e,n,a){a.d(n,{Zo:function(){return m},kt:function(){return c}});var r=a(7378);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=r.createContext({}),i=function(e){var n=r.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},m=function(e){var n=i(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,l=e.originalType,s=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),p=i(a),c=t,g=p["".concat(s,".").concat(c)]||p[c]||u[c]||l;return a?r.createElement(g,o(o({ref:n},m),{},{components:a})):r.createElement(g,o({ref:n},m))}));function c(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=a.length,o=new Array(l);o[0]=p;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d.mdxType="string"==typeof e?e:t,o[1]=d;for(var i=2;i<l;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5278:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return m},default:function(){return p}});var r=a(5773),t=a(808),l=(a(7378),a(5318)),o=["components"],d={slug:"/person"},s="Person",i={unversionedId:"auto-generated/person",id:"auto-generated/person",title:"Person",description:"`randAvatar`",source:"@site/docs/auto-generated/person.mdx",sourceDirName:"auto-generated",slug:"/person",permalink:"/falso/docs/person",editUrl:"https://github.com/ngneat/falso/blob/main/docs/updating-docs.md",tags:[],version:"current",frontMatter:{slug:"/person"},sidebar:"falso",previous:{title:"Music",permalink:"/falso/docs/music"},next:{title:"Sports",permalink:"/falso/docs/sports"}},m=[{value:"<code>randAvatar</code>",id:"randavatar",children:[],level:3},{value:"<code>randEmail</code>",id:"randemail",children:[],level:3},{value:"<code>randFirstName</code>",id:"randfirstname",children:[],level:3},{value:"<code>randFullName</code>",id:"randfullname",children:[],level:3},{value:"<code>randGender</code>",id:"randgender",children:[],level:3},{value:"<code>randLanguage</code>",id:"randlanguage",children:[],level:3},{value:"<code>randLastName</code>",id:"randlastname",children:[],level:3},{value:"<code>randPassword</code>",id:"randpassword",children:[],level:3},{value:"<code>randPersonTitle</code>",id:"randpersontitle",children:[],level:3},{value:"<code>randPhoneNumber</code>",id:"randphonenumber",children:[],level:3},{value:"<code>randPronoun</code>",id:"randpronoun",children:[],level:3},{value:"<code>randSkill</code>",id:"randskill",children:[],level:3},{value:"<code>randUserName</code>",id:"randusername",children:[],level:3}],u={toc:m};function p(e){var n=e.components,a=(0,t.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"person"},"Person"),(0,l.kt)("h3",{id:"randavatar"},(0,l.kt)("inlineCode",{parentName:"h3"},"randAvatar")),(0,l.kt)("p",null,"Generate a random avatar."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randAvatar } from '@ngneat/falso';\n\nrandAvatar()\nrandAvatar({ length: 10 })\nrandAvatar({ size: 200 }) // default is 100\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randAvatar()}/>;\n}\n")),(0,l.kt)("h3",{id:"randemail"},(0,l.kt)("inlineCode",{parentName:"h3"},"randEmail")),(0,l.kt)("p",null,"Generate a random email."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randEmail } from '@ngneat/falso';\n\nrandEmail()\nrandEmail({ length: 10 })\nrandEmail({ firstName: 'Netanel' })\nrandEmail({ lastName: 'Basal' })\nrandEmail({ nameSeparator: '.' })\nrandEmail({ provider: 'gmail' })\nrandEmail({ suffix: 'com' })\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randEmail()}/>;\n}\n")),(0,l.kt)("h3",{id:"randfirstname"},(0,l.kt)("inlineCode",{parentName:"h3"},"randFirstName")),(0,l.kt)("p",null,"Generate a random first name."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randFirstName } from '@ngneat/falso';\n\nrandFirstName()\nrandFirstName({ withAccents: true })\nrandFirstName({ gender: 'female' }) // Emma\nrandFirstName({ length: 10 })\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randFirstName()}/>;\n}\n")),(0,l.kt)("h3",{id:"randfullname"},(0,l.kt)("inlineCode",{parentName:"h3"},"randFullName")),(0,l.kt)("p",null,"Generate a random full name."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randFullName } from '@ngneat/falso';\n\nrandFullName()\nrandFullName({ gender: 'female' }) // Emma Markov\xe1\nrandFullName({ withAccents: false }) // return full name without special symbols like \xe2, \xee or \xf4 and etc\nrandFullName({ length: 10 })\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randFullName()}/>;\n}\n")),(0,l.kt)("h3",{id:"randgender"},(0,l.kt)("inlineCode",{parentName:"h3"},"randGender")),(0,l.kt)("p",null,"Generate a random gender."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randGender } from '@ngneat/falso';\n\nrandGender()\nrandGender({ length: 10 })\nrandGender({ code: true }) // default is false\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randGender()}/>;\n}\n")),(0,l.kt)("h3",{id:"randlanguage"},(0,l.kt)("inlineCode",{parentName:"h3"},"randLanguage")),(0,l.kt)("p",null,"Generate a random language."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randLanguage } from '@ngneat/falso';\n\nrandLanguage()\nrandLanguage({ length: 10 })\nrandLanguage({ code: true }) // default is false\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randLanguage()}/>;\n}\n")),(0,l.kt)("h3",{id:"randlastname"},(0,l.kt)("inlineCode",{parentName:"h3"},"randLastName")),(0,l.kt)("p",null,"Generate a random last name."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randLastName } from '@ngneat/falso';\n\nrandLastName()\nrandLastName({ withAccents: false })\nrandLastName({ length: 10 })\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randLastName()}/>;\n}\n")),(0,l.kt)("h3",{id:"randpassword"},(0,l.kt)("inlineCode",{parentName:"h3"},"randPassword")),(0,l.kt)("p",null,"Generate a random password."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randPassword } from '@ngneat/falso';\n\nrandPassword()\nrandPassword({ length: 10 })\nrandPassword({ size: 10 }) // default is 15\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randPassword()}/>;\n}\n")),(0,l.kt)("h3",{id:"randpersontitle"},(0,l.kt)("inlineCode",{parentName:"h3"},"randPersonTitle")),(0,l.kt)("p",null,"Generate a random person title."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randPersonTitle } from '@ngneat/falso';\n\nrandPersonTitle()\nrandPersonTitle({ length: 10 })\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randPersonTitle()}/>;\n}\n")),(0,l.kt)("h3",{id:"randphonenumber"},(0,l.kt)("inlineCode",{parentName:"h3"},"randPhoneNumber")),(0,l.kt)("p",null,"Generate a random phone number."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randPhoneNumber } from '@ngneat/falso';\n\nrandPhoneNumber()\nrandPhoneNumber({ countryCode: 'US' })\nrandPhoneNumber({ length: 10 })\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randPhoneNumber()}/>;\n}\n")),(0,l.kt)("h3",{id:"randpronoun"},(0,l.kt)("inlineCode",{parentName:"h3"},"randPronoun")),(0,l.kt)("p",null,"Generate a random pronoun."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randPronoun } from '@ngneat/falso';\n\nrandPronoun()\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randPronoun()}/>;\n}\n")),(0,l.kt)("h3",{id:"randskill"},(0,l.kt)("inlineCode",{parentName:"h3"},"randSkill")),(0,l.kt)("p",null,"Generate a random skill."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randSkill } from '@ngneat/falso';\n\nrandSkill()\nrandSkill({ length: 10 })\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randSkill()}/>;\n}\n")),(0,l.kt)("h3",{id:"randusername"},(0,l.kt)("inlineCode",{parentName:"h3"},"randUserName")),(0,l.kt)("p",null,"Generate a random user name."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randUserName } from '@ngneat/falso';\n\nrandUserName()\nrandUserName({ length: 10 })\nrandUserName({ firstName: 'Ryan' })\nrandUserName({ lastName: 'Smee' })\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randUserName()}/>;\n}\n")))}p.isMDXComponent=!0}}]);