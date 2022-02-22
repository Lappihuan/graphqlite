"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9137],{52887:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],s={id:"doctrine-annotations-attributes",title:"Doctrine annotations VS PHP8 attributes",sidebar_label:"Annotations VS Attributes"},l=void 0,p={unversionedId:"doctrine-annotations-attributes",id:"version-4.0/doctrine-annotations-attributes",isDocsHomePage:!1,title:"Doctrine annotations VS PHP8 attributes",description:"GraphQLite is heavily relying on the concept of annotations (also called attributes in PHP 8+).",source:"@site/versioned_docs/version-4.0/doctrine_annotations_attributes.md",sourceDirName:".",slug:"/doctrine-annotations-attributes",permalink:"/docs/4.0/doctrine-annotations-attributes",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/doctrine_annotations_attributes.md",tags:[],version:"4.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1645553371,formattedLastUpdatedAt:"2/22/2022",frontMatter:{id:"doctrine-annotations-attributes",title:"Doctrine annotations VS PHP8 attributes",sidebar_label:"Annotations VS Attributes"}},u=[{value:"Doctrine annotations",id:"doctrine-annotations",children:[],level:2},{value:"PHP 8 attributes",id:"php-8-attributes",children:[],level:2}],c={toc:u};function d(t){var e=t.components,n=(0,i.Z)(t,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"GraphQLite is heavily relying on the concept of annotations (also called attributes in PHP 8+)."),(0,o.kt)("h2",{id:"doctrine-annotations"},"Doctrine annotations"),(0,o.kt)("div",{class:"alert alert--warning"},(0,o.kt)("strong",null,"Deprecated!")," Doctrine annotations are deprecated in favor of native PHP 8 attributes. Support will be dropped in GraphQLite 5.0"),(0,o.kt)("p",null,'Historically, attributes were not available in PHP and PHP developers had to "trick" PHP to get annotation support.\nThis was the purpose of the ',(0,o.kt)("a",{parentName:"p",href:"https://www.doctrine-project.org/projects/doctrine-annotations/en/latest/index.html"},"doctrine/annotation")," library."),(0,o.kt)("p",null,"Using Doctrine annotations, you write annotations in your docblocks:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n/**\n * @Type\n */\nclass MyType\n{\n}\n")),(0,o.kt)("p",null,"Please note that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The annotation is added in a ",(0,o.kt)("strong",{parentName:"li"},"docblock"),' (a comment starting with "',(0,o.kt)("inlineCode",{parentName:"li"},"/**"),'")'),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Type")," part is actually a class. It must be declared in the ",(0,o.kt)("inlineCode",{parentName:"li"},"use")," statements at the top of your file.")),(0,o.kt)("div",{class:"alert alert--info"},(0,o.kt)("strong",null,"Heads up!"),"Some IDEs provide support for Doctrine annotations:",(0,o.kt)("ul",null,(0,o.kt)("li",null,"PhpStorm via the ",(0,o.kt)("a",{href:"https://plugins.jetbrains.com/plugin/7320-php-annotations"},"PHP Annotations Plugin")),(0,o.kt)("li",null,"Eclipse via the ",(0,o.kt)("a",{href:"https://marketplace.eclipse.org/content/symfony-plugin"},"Symfony 2 Plugin")),(0,o.kt)("li",null,"Netbeans has native support")),(0,o.kt)("p",null,"We strongly recommend using an IDE that has Doctrine annotations support.")),(0,o.kt)("h2",{id:"php-8-attributes"},"PHP 8 attributes"),(0,o.kt)("p",null,'Starting with PHP 8, PHP got native annotations support. They are actually called "attributes" in the PHP world.'),(0,o.kt)("p",null,"The same code can be written this way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n#[Type]\nclass MyType\n{\n}\n")),(0,o.kt)("p",null,"GraphQLite v4.1+ has support for PHP 8 attributes."),(0,o.kt)("p",null,"The Doctrine annotation class and the PHP 8 attribute class is ",(0,o.kt)("strong",{parentName:"p"},"the same")," (so you will be using the same ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," statement at the top of your file)."),(0,o.kt)("p",null,"They support the same attributes too."),(0,o.kt)("p",null,"A few notable differences:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PHP 8 attributes do not support nested attributes (unlike Doctrine annotations). This means there is no equivalent to the ",(0,o.kt)("inlineCode",{parentName:"li"},"annotations")," attribute of ",(0,o.kt)("inlineCode",{parentName:"li"},"@MagicField")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"@SourceField"),"."),(0,o.kt)("li",{parentName:"ul"},'PHP 8 attributes can be written at the parameter level. Any attribute targeting a "parameter" must be written at the parameter level.')),(0,o.kt)("p",null,"Let's take an example with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.0/autowiring"},(0,o.kt)("inlineCode",{parentName:"a"},"#Autowire")," attribute"),":"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"PHP 7+")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'/**\n * @Field\n * @Autowire(for="$productRepository")\n */\npublic function getProduct(ProductRepository $productRepository) : Product {\n    //...\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"PHP 8")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#[Field]\npublic function getProduct(#[Autowire] ProductRepository $productRepository) : Product {\n    //...\n}\n")))}d.isMDXComponent=!0}}]);