"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7334],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(67294),r=n(79443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,c=39;var p=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,p=e.values,d=e.groupId,m=e.className,f=i(),h=f.tabGroupChoices,y=f.setTabGroupChoices,v=(0,a.useState)(r),g=v[0],b=v[1],k=a.Children.toArray(e.children),w=[];if(null!=d){var T=h[d];null!=T&&T!==g&&p.some((function(e){return e.value===T}))&&b(T)}var A=function(e){var t=e.currentTarget,n=w.indexOf(t),a=p[n].value;b(a),null!=d&&(y(d,a),setTimeout((function(){var e,n,a,r,i,o,l,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,u=o.innerWidth,n>=0&&i<=u&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case c:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case u:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":g===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:A,onClick:A},n)}))),t?(0,a.cloneElement)(k.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},8316:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(55064),l=n(58215),s=["components"],u={id:"autowiring",title:"Autowiring services",sidebar_label:"Autowiring services"},c=void 0,p={unversionedId:"autowiring",id:"version-4.2/autowiring",isDocsHomePage:!1,title:"Autowiring services",description:"GraphQLite can automatically inject services in your fields/queries/mutations signatures.",source:"@site/versioned_docs/version-4.2/autowiring.mdx",sourceDirName:".",slug:"/autowiring",permalink:"/docs/4.2/autowiring",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.2/autowiring.mdx",tags:[],version:"4.2",lastUpdatedBy:"dsavina",lastUpdatedAt:1634055671,formattedLastUpdatedAt:"10/12/2021",frontMatter:{id:"autowiring",title:"Autowiring services",sidebar_label:"Autowiring services"},sidebar:"version-4.2/docs",previous:{title:"Type mapping",permalink:"/docs/4.2/type-mapping"},next:{title:"Extending a type",permalink:"/docs/4.2/extend-type"}},d=[{value:"Sample",id:"sample",children:[]},{value:"Best practices",id:"best-practices",children:[]},{value:"Fetching a service by name (discouraged!)",id:"fetching-a-service-by-name-discouraged",children:[]},{value:"Alternative solution",id:"alternative-solution",children:[]}],m={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"GraphQLite can automatically inject services in your fields/queries/mutations signatures."),(0,i.kt)("p",null,"Some of your fields may be computed. In order to compute these fields, you might need to call a service."),(0,i.kt)("p",null,"Most of the time, your ",(0,i.kt)("inlineCode",{parentName:"p"},"@Type")," annotation will be put on a model. And models do not have access to services.\nHopefully, if you add a type-hinted service in your field's declaration, GraphQLite will automatically fill it with\nthe service instance."),(0,i.kt)("h2",{id:"sample"},"Sample"),(0,i.kt)("p",null,"Let's assume you are running an international store. You have a ",(0,i.kt)("inlineCode",{parentName:"p"},"Product")," class. Each product has many names (depending\non the language of the user)."),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Autowire;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\nuse Symfony\\Component\\Translation\\TranslatorInterface;\n\n#[Type]\nclass Product\n{\n    // ...\n\n    #[Field]\n    public function getName(\n            #[Autowire]\n            TranslatorInterface $translator\n        ): string\n    {\n        return $translator->trans('product_name_'.$this->id);\n    }\n}\n"))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Autowire;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\nuse Symfony\\Component\\Translation\\TranslatorInterface;\n\n/**\n * @Type()\n */\nclass Product\n{\n    // ...\n\n    /**\n     * @Field()\n     * @Autowire(for=\"$translator\")\n     */\n    public function getName(TranslatorInterface $translator): string\n    {\n        return $translator->trans('product_name_'.$this->id);\n    }\n}\n")))),(0,i.kt)("p",null,"When GraphQLite queries the name, it will automatically fetch the translator service."),(0,i.kt)("div",{class:"alert alert--warning"},"As with most autowiring solutions, GraphQLite assumes that the service identifier in the container is the fully qualified class name of the type-hint. So in the example above, GraphQLite will look for a service whose name is ",(0,i.kt)("code",null,"Symfony\\Component\\Translation\\TranslatorInterface"),"."),(0,i.kt)("h2",{id:"best-practices"},"Best practices"),(0,i.kt)("p",null,"It is a good idea to refrain from type-hinting on concrete implementations.\nMost often, your field declaration will be in your model. If you add a type-hint on a service, you are binding your domain\nwith a particular service implementation. This makes your code tightly coupled and less testable."),(0,i.kt)("div",{class:"alert alert--danger"},"Please don't do that:",(0,i.kt)("pre",null,(0,i.kt)("code",null,"#[Field] public function getName(#[Autowire] MyTranslator $translator): string"))),(0,i.kt)("p",null,"Instead, be sure to type-hint against an interface."),(0,i.kt)("div",{class:"alert alert--success"},"Do this instead:",(0,i.kt)("pre",null,(0,i.kt)("code",null,"#[Field] public function getName(#[Autowire] TranslatorInterface $translator): string"))),(0,i.kt)("p",null,"By type-hinting against an interface, your code remains testable and is decoupled from the service implementation."),(0,i.kt)("h2",{id:"fetching-a-service-by-name-discouraged"},"Fetching a service by name (discouraged!)"),(0,i.kt)("p",null,"Optionally, you can specify the identifier of the service you want to fetch from the controller:"),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'#[Autowire(identifier: "translator")]\n'))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Autowire(for="$translator", identifier="translator")\n */\n')))),(0,i.kt)("div",{class:"alert alert--danger"},"While GraphQLite offers the possibility to specify the name of the service to be autowired, we would like to emphasize that this is ",(0,i.kt)("strong",null,"highly discouraged"),'. Hard-coding a container identifier in the code of your class is akin to using the "service locator" pattern, which is known to be an anti-pattern. Please refrain from doing this as much as possible.'),(0,i.kt)("h2",{id:"alternative-solution"},"Alternative solution"),(0,i.kt)("p",null,"You may find yourself uncomfortable with the autowiring mechanism of GraphQLite. For instance maybe:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your service identifier in the container is not the fully qualified class name of the service (this is often true if you are not using a container supporting autowiring)"),(0,i.kt)("li",{parentName:"ul"},"You do not want to inject a service in a domain object"),(0,i.kt)("li",{parentName:"ul"},"You simply do not like the magic of injecting services in a method signature")),(0,i.kt)("p",null,"If you do not want to use autowiring and if you still need to access services to compute a field, please read on\nthe next chapter to learn ",(0,i.kt)("a",{parentName:"p",href:"extend-type"},"how to extend a type"),"."))}f.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);