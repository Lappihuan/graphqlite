"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[593],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),r=n(79443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var p=37,c=39;var u=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,u=e.values,d=e.groupId,m=e.className,h=i(),g=h.tabGroupChoices,f=h.setTabGroupChoices,y=(0,a.useState)(r),v=y[0],b=y[1],k=a.Children.toArray(e.children),T=[];if(null!=d){var x=g[d];null!=x&&x!==v&&u.some((function(e){return e.value===x}))&&b(x)}var P=function(e){var t=e.currentTarget,n=T.indexOf(t),a=u[n].value;b(a),null!=d&&(f(d,a),setTimeout((function(){var e,n,a,r,i,o,l,p;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,p=o.innerWidth,n>=0&&i<=p&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case c:var a=T.indexOf(e.target)+1;n=T[a]||T[0];break;case p:var r=T.indexOf(e.target)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":v===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:N,onFocus:P,onClick:P},n)}))),t?(0,a.cloneElement)(k.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},59402:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return h}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(55064),l=n(58215),s=["components"],p={id:"extend-type",title:"Extending a type",sidebar_label:"Extending a type"},c=void 0,u={unversionedId:"extend-type",id:"version-4.3/extend-type",isDocsHomePage:!1,title:"Extending a type",description:"Fields exposed in a GraphQL type do not need to be all part of the same class.",source:"@site/versioned_docs/version-4.3/extend-type.mdx",sourceDirName:".",slug:"/extend-type",permalink:"/docs/extend-type",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.3/extend-type.mdx",tags:[],version:"4.3",lastUpdatedBy:"Daniel Melchior",lastUpdatedAt:1634117024,formattedLastUpdatedAt:"10/13/2021",frontMatter:{id:"extend-type",title:"Extending a type",sidebar_label:"Extending a type"},sidebar:"version-4.3/docs",previous:{title:"Autowiring services",permalink:"/docs/autowiring"},next:{title:"External type declaration",permalink:"/docs/external-type-declaration"}},d=[],m={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Fields exposed in a GraphQL type do not need to be all part of the same class."),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@ExtendType")," annotation to add additional fields to a type that is already declared."),(0,i.kt)("div",{class:"alert alert--info"},"Extending a type has nothing to do with type inheritance. If you are looking for a way to expose a class and its children classes, have a look at the ",(0,i.kt)("a",{href:"inheritance-interfaces"},"Inheritance")," section"),(0,i.kt)("p",null,"Let's assume you have a ",(0,i.kt)("inlineCode",{parentName:"p"},"Product")," class. In order to get the name of a product, there is no ",(0,i.kt)("inlineCode",{parentName:"p"},"getName()")," method in\nthe product because the name needs to be translated in the correct language. You have a ",(0,i.kt)("inlineCode",{parentName:"p"},"TranslationService")," to do that."),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n#[Type]\nclass Product\n{\n    // ...\n\n    #[Field]\n    public function getId(): string\n    {\n        return $this->id;\n    }\n\n    #[Field]\n    public function getPrice(): ?float\n    {\n        return $this->price;\n    }\n}\n"))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n/**\n * @Type()\n */\nclass Product\n{\n    // ...\n\n    /**\n     * @Field()\n     */\n    public function getId(): string\n    {\n        return $this->id;\n    }\n\n    /**\n     * @Field()\n     */\n    public function getPrice(): ?float\n    {\n        return $this->price;\n    }\n}\n")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"// You need to use a service to get the name of the product in the correct language.\n$name = $translationService->getProductName($productId, $language);\n")),(0,i.kt)("p",null,"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"@ExtendType"),", you can add an additional ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," field to your product:"),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Types;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\ExtendType;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse App\\Entities\\Product;\n\n#[ExtendType(class: Product::class)]\nclass ProductType\n{\n    private $translationService;\n\n    public function __construct(TranslationServiceInterface $translationService)\n    {\n        $this->translationService = $translationService;\n    }\n\n    #[Field]\n    public function getName(Product $product, string $language): string\n    {\n        return $this->translationService->getProductName($product->getId(), $language);\n    }\n}\n"))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Types;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\ExtendType;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse App\\Entities\\Product;\n\n/**\n * @ExtendType(class=Product::class)\n */\nclass ProductType\n{\n    private $translationService;\n\n    public function __construct(TranslationServiceInterface $translationService)\n    {\n        $this->translationService = $translationService;\n    }\n\n    /**\n     * @Field()\n     */\n    public function getName(Product $product, string $language): string\n    {\n        return $this->translationService->getProductName($product->getId(), $language);\n    }\n}\n")))),(0,i.kt)("p",null,"Let's break this sample:"),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"#[ExtendType(class=Product::class)]\n"))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @ExtendType(class=Product::class)\n */\n")))),(0,i.kt)("p",null,"With the ",(0,i.kt)("inlineCode",{parentName:"p"},"@ExtendType")," annotation, we tell GraphQLite that we want to add fields in the GraphQL type mapped to\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"Product")," PHP class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class ProductType\n{\n    private $translationService;\n\n    public function __construct(TranslationServiceInterface $translationService)\n    {\n        $this->translationService = $translationService;\n    }\n\n    // ...\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"ProductType")," class must be in the types namespace. You configured this namespace when you installed GraphQLite."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"ProductType")," class is actually a ",(0,i.kt)("strong",{parentName:"li"},"service"),". You can therefore inject dependencies in it (like the ",(0,i.kt)("inlineCode",{parentName:"li"},"$translationService")," in this example)")),(0,i.kt)("div",{class:"alert alert--warning"},(0,i.kt)("strong",null,"Heads up!")," The ",(0,i.kt)("code",null,"ProductType")," class must exist in the container of your application and the container identifier MUST be the fully qualified class name.",(0,i.kt)("br",null),(0,i.kt)("br",null),"If you are using the Symfony bundle (or a framework with autowiring like Laravel), this is usually not an issue as the container will automatically create the controller entry if you do not explicitly declare it."),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"#[Field]\npublic function getName(Product $product, string $language): string\n{\n    return $this->translationService->getProductName($product->getId(), $language);\n}\n"))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Field()\n */\npublic function getName(Product $product, string $language): string\n{\n    return $this->translationService->getProductName($product->getId(), $language);\n}\n")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@Field"),' annotation is used to add the "name" field to the ',(0,i.kt)("inlineCode",{parentName:"p"},"Product")," type."),(0,i.kt)("p",null,'Take a close look at the signature. The first parameter is the "resolved object" we are working on.\nAny additional parameters are used as arguments.'),(0,i.kt)("p",null,'Using the "',(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/learn/schema/#type-language"},"Type language"),'" notation, we defined a type extension for\nthe GraphQL "Product" type:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"Extend type Product {\n    name(language: !String): String!\n}\n")),(0,i.kt)("div",{class:"alert alert--success"},"Type extension is a very powerful tool. Use it to add fields that needs to be computed from services not available in the entity."))}h.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);