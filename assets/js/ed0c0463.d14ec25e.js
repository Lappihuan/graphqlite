"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3597],{58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:o},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(87462),o=a(67294),l=a(72389),r=a(79443);var i=function(){var e=(0,o.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=a(83039),s=a(86010),p="tabItem_vU9c";function d(e){var t,a,n,l=e.lazy,r=e.block,d=e.defaultValue,c=e.values,m=e.groupId,h=e.className,f=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=c?c:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,u.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=f[0])?void 0:n.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=i(),k=y.tabGroupChoices,w=y.setTabGroupChoices,N=(0,o.useState)(g),T=N[0],I=N[1],q=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=k[m];null!=x&&x!==T&&v.some((function(e){return e.value===x}))&&I(x)}var P=function(e){var t=e.currentTarget,a=q.indexOf(t),n=v[a].value;n!==T&&(E(t),I(n),null!=m&&w(m,n))},S=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=q.indexOf(e.currentTarget)+1;a=q[n]||q[0];break;case"ArrowLeft":var o=q.indexOf(e.currentTarget)-1;a=q[o]||q[q.length-1]}null==(t=a)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},h)},v.map((function(e){var t=e.value,a=e.label;return o.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,s.Z)("tabs__item",p,{"tabs__item--active":T===t}),key:t,ref:function(e){return q.push(e)},onKeyDown:S,onFocus:P,onClick:P},null!=a?a:t)}))),l?(0,o.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function c(e){var t=(0,l.Z)();return o.createElement(d,(0,n.Z)({key:String(t)},e))}},54953:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return h}});var n=a(87462),o=a(63366),l=(a(67294),a(3905)),r=a(55064),i=a(58215),u=["components"],s={id:"file-uploads",title:"File uploads",sidebar_label:"File uploads"},p=void 0,d={unversionedId:"file-uploads",id:"version-5.0/file-uploads",isDocsHomePage:!1,title:"File uploads",description:"GraphQL does not support natively the notion of file uploads, but an extension to the GraphQL protocol was proposed",source:"@site/versioned_docs/version-5.0/file-uploads.mdx",sourceDirName:".",slug:"/file-uploads",permalink:"/docs/file-uploads",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-5.0/file-uploads.mdx",tags:[],version:"5.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1645553371,formattedLastUpdatedAt:"2/22/2022",frontMatter:{id:"file-uploads",title:"File uploads",sidebar_label:"File uploads"},sidebar:"version-5.0/docs",previous:{title:"Prefetching records",permalink:"/docs/prefetch-method"},next:{title:"Pagination",permalink:"/docs/pagination"}},c=[{value:"Installation",id:"installation",children:[{value:"If you are using the Symfony bundle",id:"if-you-are-using-the-symfony-bundle",children:[],level:3},{value:"If you are using a PSR-15 compatible framework",id:"if-you-are-using-a-psr-15-compatible-framework",children:[],level:3},{value:"If you are using another framework not compatible with PSR-15",id:"if-you-are-using-another-framework-not-compatible-with-psr-15",children:[],level:3}],level:2},{value:"Usage",id:"usage",children:[],level:2}],m={toc:c};function h(e){var t=e.components,a=(0,o.Z)(e,u);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"GraphQL does not support natively the notion of file uploads, but an extension to the GraphQL protocol was proposed\nto add support for ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/jaydenseric/graphql-multipart-request-spec"},"multipart requests"),"."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"GraphQLite supports this extension through the use of the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Ecodev/graphql-upload"},"Ecodev/graphql-upload")," library."),(0,l.kt)("p",null,"You must start by installing this package:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ composer require ecodev/graphql-upload\n")),(0,l.kt)("h3",{id:"if-you-are-using-the-symfony-bundle"},"If you are using the Symfony bundle"),(0,l.kt)("p",null,"If you are using our Symfony bundle, the file upload middleware is managed by the bundle. You have nothing to do\nand can start using it right away."),(0,l.kt)("h3",{id:"if-you-are-using-a-psr-15-compatible-framework"},"If you are using a PSR-15 compatible framework"),(0,l.kt)("p",null,"In order to use this, you must first be sure that the ",(0,l.kt)("inlineCode",{parentName:"p"},"ecodev/graphql-upload")," PSR-15 middleware is part of your middleware pipe."),(0,l.kt)("p",null,"Simply add ",(0,l.kt)("inlineCode",{parentName:"p"},"GraphQL\\Upload\\UploadMiddleware")," to your middleware pipe."),(0,l.kt)("h3",{id:"if-you-are-using-another-framework-not-compatible-with-psr-15"},"If you are using another framework not compatible with PSR-15"),(0,l.kt)("p",null,"Please check the Ecodev/graphql-upload library ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Ecodev/graphql-upload"},"documentation"),"\nfor more information on how to integrate it in your framework."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"To handle an uploaded file, you type-hint against the PSR-7 ",(0,l.kt)("inlineCode",{parentName:"p"},"UploadedFileInterface"),":"),(0,l.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    #[Mutation]\n    public function saveDocument(string $name, UploadedFileInterface $file): Document\n    {\n        // Some code that saves the document.\n        $file->moveTo($someDir);\n    }\n}\n"))),(0,l.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @Mutation\n     */\n    public function saveDocument(string $name, UploadedFileInterface $file): Document\n    {\n        // Some code that saves the document.\n        $file->moveTo($someDir);\n    }\n}\n")))),(0,l.kt)("p",null,"Of course, you need to use a GraphQL client that is compatible with multipart requests. See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/jaydenseric/graphql-multipart-request-spec#client"},"jaydenseric/graphql-multipart-request-spec")," for a list of compatible clients."),(0,l.kt)("p",null,"The GraphQL client must send the file using the Upload type."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation upload($file: Upload!) {\n    upload(file: $file)\n}\n")))}h.isMDXComponent=!0}}]);