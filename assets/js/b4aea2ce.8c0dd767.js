"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8079],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,g=d["".concat(p,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1031:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={id:"laravel-package",title:"Getting started with Laravel",sidebar_label:"Laravel package",original_id:"laravel-package"},p=void 0,c={unversionedId:"laravel-package",id:"version-3.0/laravel-package",isDocsHomePage:!1,title:"Getting started with Laravel",description:"The GraphQLite-Laravel package is compatible with Laravel 5.x.",source:"@site/versioned_docs/version-3.0/laravel-package.md",sourceDirName:".",slug:"/laravel-package",permalink:"/docs/3.0/laravel-package",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-3.0/laravel-package.md",tags:[],version:"3.0",lastUpdatedBy:"Daniel Melchior",lastUpdatedAt:1634117024,formattedLastUpdatedAt:"10/13/2021",frontMatter:{id:"laravel-package",title:"Getting started with Laravel",sidebar_label:"Laravel package",original_id:"laravel-package"},sidebar:"version-3.0/docs",previous:{title:"Symfony bundle",permalink:"/docs/3.0/symfony-bundle"},next:{title:"Universal service providers",permalink:"/docs/3.0/universal_service_providers"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Adding GraphQL DevTools",id:"adding-graphql-devtools",children:[]}],u={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The GraphQLite-Laravel package is compatible with ",(0,o.kt)("strong",{parentName:"p"},"Laravel 5.x"),"."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Open a terminal in your current project directory and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ composer require thecodingmachine/graphqlite-laravel\n")),(0,o.kt)("p",null,"If you want to publish the configuration (in order to edit it), run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ php artisan vendor:publish --provider=TheCodingMachine\\GraphQLite\\Laravel\\Providers\\GraphQLiteServiceProvider\n")),(0,o.kt)("p",null,"You can then configure the library by editing ",(0,o.kt)("inlineCode",{parentName:"p"},"config/graphqlite.php"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"config/graphqlite.php")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nuse GraphQL\\Error\\Debug;\n\nreturn [\n    /*\n     |--------------------------------------------------------------------------\n     | GraphQLite Configuration\n     |--------------------------------------------------------------------------\n     |\n     | Use this configuration to customize the namespace of the controllers and\n     | types.\n     | These namespaces must be autoloadable from Composer.\n     | GraphQLite will find the path of the files based on composer.json settings.\n     |\n     | You can put a single namespace, or an array of namespaces.\n     |\n     */\n    'controllers' => 'App\\\\Http\\\\Controllers',\n    'types' => 'App\\\\',\n    'debug' => Debug::RETHROW_UNSAFE_EXCEPTIONS,\n    'uri' => '/graphql'\n];\n")),(0,o.kt)("p",null,"The debug parameters are detailed in the ",(0,o.kt)("a",{parentName:"p",href:"https://webonyx.github.io/graphql-php/error-handling/"},"documentation of the Webonyx GraphQL library"),"\nwhich is used internally by GraphQLite."),(0,o.kt)("h2",{id:"adding-graphql-devtools"},"Adding GraphQL DevTools"),(0,o.kt)("p",null,"GraphQLite does not include additional GraphQL tooling, such as the GraphiQL editor.\nTo integrate a web UI to query your GraphQL endpoint with your Laravel installation,\nwe recommend installing GraphQL Playground"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ composer require mll-lab/laravel-graphql-playground\n")),(0,o.kt)("p",null,"You can also use any external client with GraphQLite, make sure to point it to the URL defined in the config (",(0,o.kt)("inlineCode",{parentName:"p"},"'/graphql'")," by default)."))}d.isMDXComponent=!0}}]);