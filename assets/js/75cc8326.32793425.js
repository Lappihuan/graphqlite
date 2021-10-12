"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4690],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a=n(79443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),l="tabItem_1uMI",u="tabItemActive_2DSg";var s=37,p=39;var c=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,c=e.values,d=e.groupId,f=e.className,m=o(),h=m.tabGroupChoices,y=m.setTabGroupChoices,v=(0,r.useState)(a),g=v[0],b=v[1],k=r.Children.toArray(e.children),w=[];if(null!=d){var O=h[d];null!=O&&O!==g&&c.some((function(e){return e.value===O}))&&b(O)}var P=function(e){var t=e.currentTarget,n=w.indexOf(t),r=c[n].value;b(r),null!=d&&(y(d,r),setTimeout((function(){var e,n,r,a,o,i,l,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,l=i.innerHeight,s=i.innerWidth,n>=0&&o<=s&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case p:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case s:var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},f)},c.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":g===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:N,onFocus:P,onClick:P},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},21504:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(55064),l=n(58215),u=["components"],s={id:"file-uploads",title:"File uploads",sidebar_label:"File uploads",original_id:"file-uploads"},p=void 0,c={unversionedId:"file-uploads",id:"version-4.1/file-uploads",isDocsHomePage:!1,title:"File uploads",description:"GraphQL does not support natively the notion of file uploads, but an extension to the GraphQL protocol was proposed",source:"@site/versioned_docs/version-4.1/file_uploads.mdx",sourceDirName:".",slug:"/file-uploads",permalink:"/docs/4.1/file-uploads",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.1/file_uploads.mdx",tags:[],version:"4.1",lastUpdatedBy:"dsavina",lastUpdatedAt:1634055671,formattedLastUpdatedAt:"10/12/2021",frontMatter:{id:"file-uploads",title:"File uploads",sidebar_label:"File uploads",original_id:"file-uploads"},sidebar:"version-4.1/docs",previous:{title:"Prefetching records",permalink:"/docs/4.1/prefetch-method"},next:{title:"Pagination",permalink:"/docs/4.1/pagination"}},d=[{value:"Installation",id:"installation",children:[]},{value:"If you are using the Symfony bundle",id:"if-you-are-using-the-symfony-bundle",children:[]},{value:"If you are using a PSR-15 compatible framework",id:"if-you-are-using-a-psr-15-compatible-framework",children:[]},{value:"If you are using another framework not compatible with PSR-15",id:"if-you-are-using-another-framework-not-compatible-with-psr-15",children:[]},{value:"Usage",id:"usage",children:[]}],f={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"GraphQL does not support natively the notion of file uploads, but an extension to the GraphQL protocol was proposed\nto add support for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jaydenseric/graphql-multipart-request-spec"},"multipart requests"),"."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"GraphQLite supports this extension through the use of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Ecodev/graphql-upload"},"Ecodev/graphql-upload")," library."),(0,o.kt)("p",null,"You must start by installing this package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ composer require ecodev/graphql-upload\n")),(0,o.kt)("h2",{id:"if-you-are-using-the-symfony-bundle"},"If you are using the Symfony bundle"),(0,o.kt)("p",null,"If you are using our Symfony bundle, the file upload middleware is managed by the bundle. You have nothing to do\nand can start using it right away."),(0,o.kt)("h2",{id:"if-you-are-using-a-psr-15-compatible-framework"},"If you are using a PSR-15 compatible framework"),(0,o.kt)("p",null,"In order to use this, you must first be sure that the ",(0,o.kt)("inlineCode",{parentName:"p"},"ecodev/graphql-upload")," PSR-15 middleware is part of your middleware pipe."),(0,o.kt)("p",null,"Simply add ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQL\\Upload\\UploadMiddleware")," to your middleware pipe."),(0,o.kt)("h2",{id:"if-you-are-using-another-framework-not-compatible-with-psr-15"},"If you are using another framework not compatible with PSR-15"),(0,o.kt)("p",null,"Please check the Ecodev/graphql-upload library ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Ecodev/graphql-upload"},"documentation"),"\nfor more information on how to integrate it in your framework."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"To handle an uploaded file, you type-hint against the PSR-7 ",(0,o.kt)("inlineCode",{parentName:"p"},"UploadedFileInterface"),":"),(0,o.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    #[Mutation]\n    public function saveDocument(string $name, UploadedFileInterface $file): Document\n    {\n        // Some code that saves the document.\n        $file->moveTo($someDir);\n    }\n}\n"))),(0,o.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @Mutation\n     */\n    public function saveDocument(string $name, UploadedFileInterface $file): Document\n    {\n        // Some code that saves the document.\n        $file->moveTo($someDir);\n    }\n}\n")))),(0,o.kt)("p",null,"Of course, you need to use a GraphQL client that is compatible with multipart requests. See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jaydenseric/graphql-multipart-request-spec#client"},"jaydenseric/graphql-multipart-request-spec")," for a list of compatible clients."),(0,o.kt)("p",null,"The GraphQL client must send the file using the Upload type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mutation upload($file: Upload!) {\n    upload(file: $file)\n}\n")))}m.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);