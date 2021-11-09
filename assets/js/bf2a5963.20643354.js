"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[630],{58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(87462),r=n(67294),l=n(72389),i=n(79443);var o=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(83039),s=n(86010),p="tabItem_vU9c";function c(e){var t,n,a,l=e.lazy,i=e.block,c=e.defaultValue,d=e.values,m=e.groupId,h=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,u.lx)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=o(),y=k.tabGroupChoices,w=k.setTabGroupChoices,N=(0,r.useState)(b),P=N[0],T=N[1],I=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=y[m];null!=C&&C!==P&&v.some((function(e){return e.value===C}))&&T(C)}var x=function(e){var t=e.currentTarget,n=I.indexOf(t),a=v[n].value;a!==P&&(E(t),T(a),null!=m&&w(m,a))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=I.indexOf(e.currentTarget)+1;n=I[a]||I[0];break;case"ArrowLeft":var r=I.indexOf(e.currentTarget)-1;n=I[r]||I[I.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},h)},v.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,className:(0,s.Z)("tabs__item",p,{"tabs__item--active":P===t}),key:t,ref:function(e){return I.push(e)},onKeyDown:D,onFocus:x,onClick:x},null!=n?n:t)}))),l?(0,r.cloneElement)(f.filter((function(e){return e.props.value===P}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function d(e){var t=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},45583:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(55064),o=n(58215),u=["components"],s={id:"pagination",title:"Paginating large result sets",sidebar_label:"Pagination"},p=void 0,c={unversionedId:"pagination",id:"version-4.3/pagination",isDocsHomePage:!1,title:"Paginating large result sets",description:"It is quite common to have to paginate over large result sets.",source:"@site/versioned_docs/version-4.3/pagination.mdx",sourceDirName:".",slug:"/pagination",permalink:"/docs/4.3/pagination",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.3/pagination.mdx",tags:[],version:"4.3",lastUpdatedBy:"Andrew Maslov",lastUpdatedAt:1636470013,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"pagination",title:"Paginating large result sets",sidebar_label:"Pagination"},sidebar:"version-4.3/docs",previous:{title:"File uploads",permalink:"/docs/4.3/file-uploads"},next:{title:"Custom types",permalink:"/docs/4.3/custom-types"}},d=[{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],m={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"It is quite common to have to paginate over large result sets."),(0,l.kt)("p",null,"GraphQLite offers a simple way to do that using ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/beberlei/porpaginas"},"Porpaginas"),"."),(0,l.kt)("p",null,"Porpaginas is a set of PHP interfaces that can be implemented by result iterators. It comes with a native support for\nPHP arrays, Doctrine and ",(0,l.kt)("a",{parentName:"p",href:"https://thecodingmachine.github.io/tdbm/doc/limit_offset_resultset.html"},"TDBM"),"."),(0,l.kt)("div",{class:"alert alert--warning"},"If you are a Laravel user, Eloquent does not come with a Porpaginas iterator. However, ",(0,l.kt)("a",{href:"laravel-package-advanced"},"the GraphQLite Laravel bundle comes with its own pagination system"),"."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"You will need to install the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/beberlei/porpaginas"},"Porpaginas")," library to benefit from this feature."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ composer require beberlei/porpaginas\n")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"In your query, simply return a class that implements ",(0,l.kt)("inlineCode",{parentName:"p"},"Porpaginas\\Result"),":"),(0,l.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @return Product[]\n     */\n    #[Query]\n    public function products(): Porpaginas\\Result\n    {\n        // Some code that returns a list of products\n\n        // If you are using Doctrine, something like:\n        return new Porpaginas\\Doctrine\\ORM\\ORMQueryResult($doctrineQuery);\n    }\n}\n"))),(0,l.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @Query\n     * @return Product[]\n     */\n    public function products(): Porpaginas\\Result\n    {\n        // Some code that returns a list of products\n\n        // If you are using Doctrine, something like:\n        return new Porpaginas\\Doctrine\\ORM\\ORMQueryResult($doctrineQuery);\n    }\n}\n")))),(0,l.kt)("p",null,"Notice that:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the method return type MUST BE ",(0,l.kt)("inlineCode",{parentName:"li"},"Porpaginas\\Result")," or a class implementing ",(0,l.kt)("inlineCode",{parentName:"li"},"Porpaginas\\Result")),(0,l.kt)("li",{parentName:"ul"},"you MUST add a ",(0,l.kt)("inlineCode",{parentName:"li"},"@return")," statement to help GraphQLite find the type of the list")),(0,l.kt)("p",null,"Once this is done, you can paginate directly from your GraphQL query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"products {\n    items(limit: 10, offset: 20) {\n        id\n        name\n    }\n    count\n}\n")),(0,l.kt)("p",null,'Results are wrapped into an item field. You can use the "limit" and "offset" parameters to apply pagination automatically.'),(0,l.kt)("p",null,'The "count" field returns the ',(0,l.kt)("strong",{parentName:"p"},"total count")," of items."))}h.isMDXComponent=!0}}]);