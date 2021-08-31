"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7582],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(67294),r=n(79443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,p=39;var c=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,c=e.values,d=e.groupId,m=e.className,h=i(),g=h.tabGroupChoices,y=h.setTabGroupChoices,f=(0,a.useState)(r),k=f[0],b=f[1],v=a.Children.toArray(e.children),N=[];if(null!=d){var T=g[d];null!=T&&T!==k&&c.some((function(e){return e.value===T}))&&b(T)}var P=function(e){var t=e.currentTarget,n=N.indexOf(t),a=c[n].value;b(a),null!=d&&(y(d,a),setTimeout((function(){var e,n,a,r,i,o,l,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,u=o.innerWidth,n>=0&&i<=u&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},S=function(e){var t,n;switch(e.keyCode){case p:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case u:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},c.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:S,onFocus:P,onClick:P},n)}))),t?(0,a.cloneElement)(v.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},50047:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(55064),l=n(58215),s=["components"],u={id:"fine-grained-security",title:"Fine grained security",sidebar_label:"Fine grained security"},p=void 0,c={unversionedId:"fine-grained-security",id:"version-4.3/fine-grained-security",isDocsHomePage:!1,title:"Fine grained security",description:"If the @Logged and @Right annotations are not",source:"@site/versioned_docs/version-4.3/fine-grained-security.mdx",sourceDirName:".",slug:"/fine-grained-security",permalink:"/docs/fine-grained-security",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.3/fine-grained-security.mdx",tags:[],version:"4.3",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1630407726,formattedLastUpdatedAt:"8/31/2021",frontMatter:{id:"fine-grained-security",title:"Fine grained security",sidebar_label:"Fine grained security"},sidebar:"version-4.3/docs",previous:{title:"Authentication and authorization",permalink:"/docs/authentication-authorization"},next:{title:"Connecting security to your framework",permalink:"/docs/implementing-security"}},d=[{value:"Using the @Security annotation",id:"using-the-security-annotation",children:[]},{value:"The <code>is_granted</code> function",id:"the-is_granted-function",children:[]},{value:"Accessing method parameters",id:"accessing-method-parameters",children:[]},{value:"Setting HTTP code and error message",id:"setting-http-code-and-error-message",children:[]},{value:"Setting a default value",id:"setting-a-default-value",children:[]},{value:"Accessing the user",id:"accessing-the-user",children:[]},{value:"Accessing the current object",id:"accessing-the-current-object",children:[]},{value:"Available scope",id:"available-scope",children:[]},{value:"How to restrict access to a given resource",id:"how-to-restrict-access-to-a-given-resource",children:[]}],m={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If the ",(0,i.kt)("a",{parentName:"p",href:"/docs/authentication-authorization#logged-and-right-annotations"},(0,i.kt)("inlineCode",{parentName:"a"},"@Logged")," and ",(0,i.kt)("inlineCode",{parentName:"a"},"@Right")," annotations")," are not\ngranular enough for your needs, you can use the advanced ",(0,i.kt)("inlineCode",{parentName:"p"},"@Security")," annotation."),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Security")," annotation, you can write an ",(0,i.kt)("em",{parentName:"p"},"expression")," that can contain custom logic. For instance:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check that a user can access a given resource"),(0,i.kt)("li",{parentName:"ul"},"Check that a user has one right or another right"),(0,i.kt)("li",{parentName:"ul"},"...")),(0,i.kt)("h2",{id:"using-the-security-annotation"},"Using the @Security annotation"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@Security")," annotation is very flexible: it allows you to pass an expression that can contains custom logic:"),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Annotations\\Security;\n\n// ...\n\n#[Query]\n#[Security(\"is_granted('ROLE_ADMIN') or is_granted('POST_SHOW', post)\")]\npublic function getPost(Post $post): array\n{\n    // ...\n}\n"))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Annotations\\Security;\n\n// ...\n\n/**\n * @Query\n * @Security(\"is_granted('ROLE_ADMIN') or is_granted('POST_SHOW', post)\")\n */\npublic function getPost(Post $post): array\n{\n    // ...\n}\n")))),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"expression")," defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Security")," annotation must conform to ",(0,i.kt)("a",{parentName:"p",href:"https://symfony.com/doc/4.4/components/expression_language/syntax.html"},"Symfony's Expression Language syntax")),(0,i.kt)("div",{class:"alert alert--info"},"If you are a Symfony user, you might already be used to the ",(0,i.kt)("code",null,"@Security")," annotation. Most of the inspiration of this annotation comes from Symfony. Warning though! GraphQLite's ",(0,i.kt)("code",null,"@Security")," annotation and Symfony's ",(0,i.kt)("code",null,"@Security")," annotation are slightly different. Especially, the two annotations do not live in the same namespace!"),(0,i.kt)("h2",{id:"the-is_granted-function"},"The ",(0,i.kt)("inlineCode",{parentName:"h2"},"is_granted")," function"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"is_granted")," function to check if a user has a special right."),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"#[Security(\"is_granted('ROLE_ADMIN')\")]\n"))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"@Security(\"is_granted('ROLE_ADMIN')\")\n")))),(0,i.kt)("p",null,"is similar to"),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'#[Right("ROLE_ADMIN")]\n'))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'@Right("ROLE_ADMIN")\n')))),(0,i.kt)("p",null,"In addition, the ",(0,i.kt)("inlineCode",{parentName:"p"},"is_granted"),' function accepts a second optional parameter: the "scope" of the right.'),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"#[Query]\n#[Security(\"is_granted('POST_SHOW', post)\")]\npublic function getPost(Post $post): array\n{\n    // ...\n}\n"))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Query\n * @Security(\"is_granted('POST_SHOW', post)\")\n */\npublic function getPost(Post $post): array\n{\n    // ...\n}\n")))),(0,i.kt)("p",null,"In the example above, the ",(0,i.kt)("inlineCode",{parentName:"p"},"getPost")," method can be called only if the logged user has the 'POST_SHOW' permission on the\n",(0,i.kt)("inlineCode",{parentName:"p"},"$post")," object. You can notice that the ",(0,i.kt)("inlineCode",{parentName:"p"},"$post")," object comes from the parameters."),(0,i.kt)("h2",{id:"accessing-method-parameters"},"Accessing method parameters"),(0,i.kt)("p",null,"All parameters passed to the method can be accessed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Security")," expression."),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'#[Query]\n#[Security(expression: "startDate < endDate", statusCode: 400, message: "End date must be after start date")]\npublic function getPosts(DateTimeImmutable $startDate, DateTimeImmutable $endDate): array\n{\n    // ...\n}\n'))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Query\n * @Security("startDate < endDate", statusCode=400, message="End date must be after start date")\n */\npublic function getPosts(DateTimeImmutable $startDate, DateTimeImmutable $endDate): array\n{\n    // ...\n}\n')))),(0,i.kt)("p",null,"In the example above, we tweak a bit the Security annotation purpose to do simple input validation."),(0,i.kt)("h2",{id:"setting-http-code-and-error-message"},"Setting HTTP code and error message"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"statusCode")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," attributes to set the HTTP code and GraphQL error message."),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'#[Query]\n#[Security(expression: "is_granted(\'POST_SHOW\', post)", statusCode: 404, message: "Post not found (let\'s pretend the post does not exists!)")]\npublic function getPost(Post $post): array\n{\n    // ...\n}\n'))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Query\n * @Security("is_granted(\'POST_SHOW\', post)", statusCode=404, message="Post not found (let\'s pretend the post does not exists!)")\n */\npublic function getPost(Post $post): array\n{\n    // ...\n}\n')))),(0,i.kt)("p",null,"Note: since a single GraphQL call contain many errors, 2 errors might have conflicting HTTP status code.\nThe resulting status code is up to the GraphQL middleware you use. Most of the time, the status code with the\nhigher error code will be returned."),(0,i.kt)("h2",{id:"setting-a-default-value"},"Setting a default value"),(0,i.kt)("p",null,"If you do not want an error to be thrown when the security condition is not met, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"failWith")," attribute\nto set a default value."),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"#[Query]\n#[Security(expression: \"is_granted('CAN_SEE_MARGIN', this)\", failWith: null)]\npublic function getMargin(): float\n{\n    // ...\n}\n"))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Field\n * @Security(\"is_granted('CAN_SEE_MARGIN', this)\", failWith=null)\n */\npublic function getMargin(): float\n{\n    // ...\n}\n")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"failWith")," attribute behaves just like the ",(0,i.kt)("a",{parentName:"p",href:"/docs/authentication-authorization#not-throwing-errors"},(0,i.kt)("inlineCode",{parentName:"a"},"@FailWith")," annotation"),"\nbut for a given ",(0,i.kt)("inlineCode",{parentName:"p"},"@Security")," annotation."),(0,i.kt)("p",null,"You cannot use the ",(0,i.kt)("inlineCode",{parentName:"p"},"failWith")," attribute along ",(0,i.kt)("inlineCode",{parentName:"p"},"statusCode")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," attributes."),(0,i.kt)("h2",{id:"accessing-the-user"},"Accessing the user"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," variable to access the currently logged user.\nYou can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"is_logged()")," function to check if a user is logged or not."),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'#[Query]\n#[Security("is_logged() && user.age > 18")]\npublic function getNSFWImages(): array\n{\n    // ...\n}\n'))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Query\n * @Security("is_logged() && user.age > 18")\n */\npublic function getNSFWImages(): array\n{\n    // ...\n}\n')))),(0,i.kt)("h2",{id:"accessing-the-current-object"},"Accessing the current object"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," variable to access any (public) property / method of the current class."),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'class Post {\n    #[Field]\n    #[Security("this.canAccessBody(user)")]\n    public function getBody(): array\n    {\n        // ...\n    }\n\n    public function canAccessBody(User $user): bool\n    {\n        // Some custom logic here\n    }\n}\n'))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'class Post {\n    /**\n     * @Field\n     * @Security("this.canAccessBody(user)")\n     */\n    public function getBody(): array\n    {\n        // ...\n    }\n\n    public function canAccessBody(User $user): bool\n    {\n        // Some custom logic here\n    }\n}\n')))),(0,i.kt)("h2",{id:"available-scope"},"Available scope"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@Security")," annotation can be used in any query, mutation or field, so anywhere you have a ",(0,i.kt)("inlineCode",{parentName:"p"},"@Query"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"@Mutation"),"\nor ",(0,i.kt)("inlineCode",{parentName:"p"},"@Field")," annotation."),(0,i.kt)("h2",{id:"how-to-restrict-access-to-a-given-resource"},"How to restrict access to a given resource"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"is_granted")," method can be used to restrict access to a specific resource."),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"#[Security(\"is_granted('POST_SHOW', post)\")]\n"))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"@Security(\"is_granted('POST_SHOW', post)\")\n")))),(0,i.kt)("p",null,"If you are wondering how to configure these fine-grained permissions, this is not something that GraphQLite handles\nitself. Instead, this depends on the framework you are using."),(0,i.kt)("p",null,"If you are using Symfony, you will ",(0,i.kt)("a",{parentName:"p",href:"https://symfony.com/doc/current/security/voters.html"},"create a custom voter"),"."),(0,i.kt)("p",null,"If you are using Laravel, you will ",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/6.x/authorization"},"create a Gate or a Policy"),"."),(0,i.kt)("p",null,"If you are using another framework, you need to know that the ",(0,i.kt)("inlineCode",{parentName:"p"},"is_granted")," function simply forwards the call to\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"isAllowed")," method of the configured ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthorizationSerice"),". See ",(0,i.kt)("a",{parentName:"p",href:"/docs/implementing-security"},"Connecting GraphQLite to your framework's security module\n")," for more details"))}h.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);