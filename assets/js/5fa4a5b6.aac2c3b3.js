"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3312],{58215:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:l},n)}},55064:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(87462),l=t(67294),u=t(72389),r=t(79443);var i=function(){var e=(0,l.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=t(83039),s=t(86010),p="tabItem_vU9c";function d(e){var n,t,a,u=e.lazy,r=e.block,d=e.defaultValue,m=e.values,c=e.groupId,h=e.className,f=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:f.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),y=(0,o.lx)(g,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(n=null!=d?d:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=f[0])?void 0:a.props.value;if(null!==v&&!g.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=i(),b=k.tabGroupChoices,q=k.setTabGroupChoices,N=(0,l.useState)(v),w=N[0],T=N[1],x=[],_=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var S=b[c];null!=S&&S!==w&&g.some((function(e){return e.value===S}))&&T(S)}var C=function(e){var n=e.currentTarget,t=x.indexOf(n),a=g[t].value;a!==w&&(_(n),T(a),null!=c&&q(c,a))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break;case"ArrowLeft":var l=x.indexOf(e.currentTarget)-1;t=x[l]||x[x.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},h)},g.map((function(e){var n=e.value,t=e.label;return l.createElement("li",{role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,className:(0,s.Z)("tabs__item",p,{"tabs__item--active":w===n}),key:n,ref:function(e){return x.push(e)},onKeyDown:I,onFocus:C,onClick:C},null!=t?t:n)}))),u?(0,l.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function m(e){var n=(0,u.Z)();return l.createElement(d,(0,a.Z)({key:String(n)},e))}},47694:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return h}});var a=t(87462),l=t(63366),u=(t(67294),t(3905)),r=t(55064),i=t(58215),o=["components"],s={id:"symfony-bundle-advanced",title:"Symfony bundle: advanced usage",sidebar_label:"Symfony specific features",original_id:"symfony-bundle-advanced"},p=void 0,d={unversionedId:"symfony-bundle-advanced",id:"version-4.1/symfony-bundle-advanced",isDocsHomePage:!1,title:"Symfony bundle: advanced usage",description:"The Symfony bundle comes with a number of features to ease the integration of GraphQLite in Symfony.",source:"@site/versioned_docs/version-4.1/symfony-bundle-advanced.mdx",sourceDirName:".",slug:"/symfony-bundle-advanced",permalink:"/docs/4.1/symfony-bundle-advanced",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.1/symfony-bundle-advanced.mdx",tags:[],version:"4.1",lastUpdatedBy:"Andrew Maslov",lastUpdatedAt:1636470013,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"symfony-bundle-advanced",title:"Symfony bundle: advanced usage",sidebar_label:"Symfony specific features",original_id:"symfony-bundle-advanced"},sidebar:"version-4.1/docs",previous:{title:"Class with multiple output types",permalink:"/docs/4.1/multiple_output_types"},next:{title:"Laravel specific features",permalink:"/docs/4.1/laravel-package-advanced"}},m=[{value:"Login and logout",id:"login-and-logout",children:[],level:2},{value:"Schema and request security",id:"schema-and-request-security",children:[{value:"Login using the &quot;login&quot; mutation",id:"login-using-the-login-mutation",children:[],level:3},{value:"Get the current user with the &quot;me&quot; query",id:"get-the-current-user-with-the-me-query",children:[],level:3},{value:"Logout using the &quot;logout&quot; mutation",id:"logout-using-the-logout-mutation",children:[],level:3}],level:2},{value:"Injecting the Request",id:"injecting-the-request",children:[],level:2}],c={toc:m};function h(e){var n=e.components,t=(0,l.Z)(e,o);return(0,u.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"The Symfony bundle comes with a number of features to ease the integration of GraphQLite in Symfony."),(0,u.kt)("h2",{id:"login-and-logout"},"Login and logout"),(0,u.kt)("p",null,'Out of the box, the GraphQLite bundle will expose a "login" and a "logout" mutation as well\nas a "me" query (that returns the current user).'),(0,u.kt)("p",null,'If you need to customize this behaviour, you can edit the "graphqlite.security" configuration key.'),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n  security:\n    enable_login: auto # Default setting\n    enable_me: auto # Default setting\n")),(0,u.kt)("p",null,'By default, GraphQLite will enable "login" and "logout" mutations and the "me" query if the following conditions are met:'),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},'the "security" bundle is installed and configured (with a security provider and encoder)'),(0,u.kt)("li",{parentName:"ul"},'the "session" support is enabled (via the "framework.session.enabled" key).')),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n  security:\n    enable_login: on\n")),(0,u.kt)("p",null,"By settings ",(0,u.kt)("inlineCode",{parentName:"p"},"enable_login=on"),", you are stating that you explicitly want the login/logout mutations.\nIf one of the dependencies is missing, an exception is thrown (unlike in default mode where the mutations\nare silently discarded)."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n  security:\n    enable_login: off\n")),(0,u.kt)("p",null,"Use the ",(0,u.kt)("inlineCode",{parentName:"p"},"enable_login=off")," to disable the mutations."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n  security:\n    firewall_name: main # default value\n")),(0,u.kt)("p",null,'By default, GraphQLite assumes that your firewall name is "main". This is the default value used in the\nSymfony security bundle so it is likely the value you are using. If for some reason you want to use\nanother firewall, configure the name with ',(0,u.kt)("inlineCode",{parentName:"p"},"graphqlite.security.firewall_name"),"."),(0,u.kt)("h2",{id:"schema-and-request-security"},"Schema and request security"),(0,u.kt)("p",null,"You can disable the introspection of your GraphQL API (for instance in production mode) using\nthe ",(0,u.kt)("inlineCode",{parentName:"p"},"introspection")," configuration properties."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n  security:\n    introspection: false\n")),(0,u.kt)("p",null,"You can set the maximum complexity and depth of your GraphQL queries using the ",(0,u.kt)("inlineCode",{parentName:"p"},"maximum_query_complexity"),"\nand ",(0,u.kt)("inlineCode",{parentName:"p"},"maximum_query_depth")," configuration properties"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n  security:\n    maximum_query_complexity: 314\n    maximum_query_depth: 42\n")),(0,u.kt)("h3",{id:"login-using-the-login-mutation"},'Login using the "login" mutation'),(0,u.kt)("p",null,"The mutation below will log-in a user:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation login {\n  login(userName:"foo", password:"bar") {\n    userName\n    roles\n  }\n}\n')),(0,u.kt)("h3",{id:"get-the-current-user-with-the-me-query"},'Get the current user with the "me" query'),(0,u.kt)("p",null,'Retrieving the current user is easy with the "me" query:'),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  me {\n    userName\n    roles\n  }\n}\n")),(0,u.kt)("p",null,"In Symfony, user objects implement ",(0,u.kt)("inlineCode",{parentName:"p"},"Symfony\\Component\\Security\\Core\\User\\UserInterface"),".\nThis interface is automatically mapped to a type with 2 fields:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"userName: String!")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"roles: [String!]!"))),(0,u.kt)("p",null,"If you want to get more fields, just add the ",(0,u.kt)("inlineCode",{parentName:"p"},"@Type")," annotation to your user class:"),(0,u.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,u.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-php"},"#[Type]\nclass User implements UserInterface\n{\n    #[Field]\n    public function getEmail() : string\n    {\n        // ...\n    }\n\n}\n"))),(0,u.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type\n */\nclass User implements UserInterface\n{\n    /**\n     * @Field\n     */\n    public function getEmail() : string\n    {\n        // ...\n    }\n\n}\n")))),(0,u.kt)("p",null,"You can now query this field using an ",(0,u.kt)("a",{parentName:"p",href:"https://graphql.org/learn/queries/#inline-fragments"},"inline fragment"),":"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  me {\n    userName\n    roles\n    ... on User {\n      email\n    }\n  }\n}\n")),(0,u.kt)("h3",{id:"logout-using-the-logout-mutation"},'Logout using the "logout" mutation'),(0,u.kt)("p",null,'Use the "logout" mutation to log a user out'),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation logout {\n  logout\n}\n")),(0,u.kt)("h2",{id:"injecting-the-request"},"Injecting the Request"),(0,u.kt)("p",null,"You can inject the Symfony Request object in any query/mutation/field."),(0,u.kt)("p",null,"Most of the time, getting the request object is irrelevant. Indeed, it is GraphQLite's job to parse this request and\nmanage it for you. Sometimes yet, fetching the request can be needed. In those cases, simply type-hint on the request\nin any parameter of your query/mutation/field."),(0,u.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,u.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-php"},"use Symfony\\Component\\HttpFoundation\\Request;\n\n#[Query]\npublic function getUser(int $id, Request $request): User\n{\n    // The $request object contains the Symfony Request.\n}\n"))),(0,u.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-php"},"use Symfony\\Component\\HttpFoundation\\Request;\n\n/**\n * @Query\n */\npublic function getUser(int $id, Request $request): User\n{\n    // The $request object contains the Symfony Request.\n}\n")))))}h.isMDXComponent=!0}}]);