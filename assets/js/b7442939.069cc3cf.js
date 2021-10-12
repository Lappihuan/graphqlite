"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2998],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,h=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6824:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"argument-resolving",title:"Extending argument resolving",sidebar_label:"Custom argument resolving"},p=void 0,s={unversionedId:"argument-resolving",id:"version-4.3/argument-resolving",isDocsHomePage:!1,title:"Extending argument resolving",description:"Available in GraphQLite 4.0+",source:"@site/versioned_docs/version-4.3/argument-resolving.md",sourceDirName:".",slug:"/argument-resolving",permalink:"/docs/argument-resolving",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.3/argument-resolving.md",tags:[],version:"4.3",lastUpdatedBy:"dsavina",lastUpdatedAt:1634055671,formattedLastUpdatedAt:"10/12/2021",frontMatter:{id:"argument-resolving",title:"Extending argument resolving",sidebar_label:"Custom argument resolving"},sidebar:"version-4.3/docs",previous:{title:"Custom annotations",permalink:"/docs/field-middlewares"},next:{title:"Extending an input type",permalink:"/docs/extend-input-type"}},m=[{value:"Annotations parsing",id:"annotations-parsing",children:[]},{value:"Writing the parameter middleware",id:"writing-the-parameter-middleware",children:[]},{value:"Registering a parameter middleware",id:"registering-a-parameter-middleware",children:[]}],c={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("small",null,"Available in GraphQLite 4.0+"),(0,i.kt)("p",null,"Using a ",(0,i.kt)("strong",{parentName:"p"},"parameter middleware"),", you can hook into the argument resolution of field/query/mutation/factory."),(0,i.kt)("div",{class:"alert alert--info"},"Use a parameter middleware if you want to alter the way arguments are injected  in a method or if you want to alter the way input types are imported (for instance if you want to add a validation step)"),(0,i.kt)("p",null,"As an example, GraphQLite uses ",(0,i.kt)("em",{parentName:"p"},"parameter middlewares")," internally to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Inject the Webonyx GraphQL resolution object when you type-hint on the ",(0,i.kt)("inlineCode",{parentName:"p"},"ResolveInfo")," object. For instance:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @return Product[]\n */\n#[Query]\npublic function products(ResolveInfo $info): array\n")),(0,i.kt)("p",{parentName:"li"},"In the query above, the ",(0,i.kt)("inlineCode",{parentName:"p"},"$info")," argument is filled with the Webonyx ",(0,i.kt)("inlineCode",{parentName:"p"},"ResolveInfo")," class thanks to the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/thecodingmachine/graphqlite/blob/master/src/Mappers/Parameters/ResolveInfoParameterHandler.php"},(0,i.kt)("inlineCode",{parentName:"a"},"ResolveInfoParameterHandler parameter middleware")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Inject a service from the container when you use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Autowire")," annotation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Perform validation with the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Validate")," annotation (in Laravel package)"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameter middlewares")),(0,i.kt)("img",{src:"/img/parameter_middleware.svg",width:"70%"}),(0,i.kt)("p",null,"Each middleware is passed number of objects describing the parameter:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a PHP ",(0,i.kt)("inlineCode",{parentName:"li"},"ReflectionParameter")," object representing the parameter being manipulated"),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("inlineCode",{parentName:"li"},"phpDocumentor\\Reflection\\DocBlock")," instance (useful to analyze the ",(0,i.kt)("inlineCode",{parentName:"li"},"@param")," comment if any)"),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("inlineCode",{parentName:"li"},"phpDocumentor\\Reflection\\Type")," instance (useful to analyze the type if the argument)"),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("inlineCode",{parentName:"li"},"TheCodingMachine\\GraphQLite\\Annotations\\ParameterAnnotations")," instance. This is a collection of all custom annotations that apply to this specific argument (more on that later)"),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("inlineCode",{parentName:"li"},"$next")," handler to pass the argument resolving to the next middleware.")),(0,i.kt)("p",null,"Parameter resolution is done in 2 passes."),(0,i.kt)("p",null,"On the first pass, middlewares are traversed. They must return a ",(0,i.kt)("inlineCode",{parentName:"p"},"TheCodingMachine\\GraphQLite\\Parameters\\ParameterInterface")," (an object that does the actual resolving)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"interface ParameterMiddlewareInterface\n{\n    public function mapParameter(ReflectionParameter $parameter, DocBlock $docBlock, ?Type $paramTagType, ParameterAnnotations $parameterAnnotations, ParameterHandlerInterface $next): ParameterInterface;\n}\n")),(0,i.kt)("p",null,"Then, resolution actually happen by executing the resolver (this is the second pass)."),(0,i.kt)("h2",{id:"annotations-parsing"},"Annotations parsing"),(0,i.kt)("p",null,"If you plan to use annotations while resolving arguments, your annotation should extend the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/thecodingmachine/graphqlite/blob/master/src/Annotations/ParameterAnnotationInterface.php"},(0,i.kt)("inlineCode",{parentName:"a"},"ParameterAnnotationInterface"))),(0,i.kt)("p",null,"For instance, if we want GraphQLite to inject a service in an argument, we can use ",(0,i.kt)("inlineCode",{parentName:"p"},'@Autowire(for="myService")'),"."),(0,i.kt)("p",null,"For PHP 8 attributes, we only need to put declare the annotation can target parameters: ",(0,i.kt)("inlineCode",{parentName:"p"},"#[Attribute(Attribute::TARGET_PARAMETER)]"),"."),(0,i.kt)("p",null,"The annotation looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use Attribute;\n\n/**\n * Use this annotation to autowire a service from the container into a given parameter of a field/query/mutation.\n *\n * @Annotation\n */\n#[Attribute(Attribute::TARGET_PARAMETER)]\nclass Autowire implements ParameterAnnotationInterface\n{\n    /**\n     * @var string\n     */\n    public $for;\n\n    /**\n     * The getTarget method must return the name of the argument\n     */\n    public function getTarget(): string\n    {\n        return $this->for;\n    }\n}\n")),(0,i.kt)("h2",{id:"writing-the-parameter-middleware"},"Writing the parameter middleware"),(0,i.kt)("p",null,"The middleware purpose is to analyze a parameter and decide whether or not it can handle it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Parameter middleware class"',title:'"Parameter',middleware:!0,'class"':!0},"class ContainerParameterHandler implements ParameterMiddlewareInterface\n{\n    /** @var ContainerInterface */\n    private $container;\n\n    public function __construct(ContainerInterface $container)\n    {\n        $this->container = $container;\n    }\n\n    public function mapParameter(ReflectionParameter $parameter, DocBlock $docBlock, ?Type $paramTagType, ParameterAnnotations $parameterAnnotations, ParameterHandlerInterface $next): ParameterInterface\n    {\n        // The $parameterAnnotations object can be used to fetch any annotation implementing ParameterAnnotationInterface\n        $autowire = $parameterAnnotations->getAnnotationByType(Autowire::class);\n\n        if ($autowire === null) {\n            // If there are no annotation, this middleware cannot handle the parameter. Let's ask\n            // the next middleware in the chain (using the $next object)\n            return $next->mapParameter($parameter, $docBlock, $paramTagType, $parameterAnnotations);\n        }\n\n        // We found a @Autowire annotation, let's return a parameter resolver.\n        return new ContainerParameter($this->container, $parameter->getType());\n    }\n}\n")),(0,i.kt)("p",null,"The last step is to write the actual parameter resolver."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Parameter resolver class"',title:'"Parameter',resolver:!0,'class"':!0},'/**\n * A parameter filled from the container.\n */\nclass ContainerParameter implements ParameterInterface\n{\n    /** @var ContainerInterface */\n    private $container;\n    /** @var string */\n    private $identifier;\n\n    public function __construct(ContainerInterface $container, string $identifier)\n    {\n        $this->container = $container;\n        $this->identifier = $identifier;\n    }\n\n    /**\n     * The "resolver" returns the actual value that will be fed to the function.\n     */\n    public function resolve(?object $source, array $args, $context, ResolveInfo $info)\n    {\n        return $this->container->get($this->identifier);\n    }\n}\n')),(0,i.kt)("h2",{id:"registering-a-parameter-middleware"},"Registering a parameter middleware"),(0,i.kt)("p",null,"The last step is to register the parameter middleware we just wrote:"),(0,i.kt)("p",null,"You can register your own parameter middlewares using the ",(0,i.kt)("inlineCode",{parentName:"p"},"SchemaFactory::addParameterMiddleware()")," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$schemaFactory->addParameterMiddleware(new ContainerParameterHandler($container));\n")),(0,i.kt)("p",null,'If you are using the Symfony bundle, you can tag the service as "graphql.parameter_middleware".'))}u.isMDXComponent=!0}}]);