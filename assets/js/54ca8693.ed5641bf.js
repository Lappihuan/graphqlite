"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9506],{1962:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),l=["components"],o={id:"symfony-bundle",title:"Getting started with Symfony",sidebar_label:"Symfony bundle",original_id:"symfony-bundle"},s=void 0,p={unversionedId:"symfony-bundle",id:"version-3.0/symfony-bundle",isDocsHomePage:!1,title:"Getting started with Symfony",description:"The GraphQLite bundle is compatible with Symfony 4.x.",source:"@site/versioned_docs/version-3.0/symfony-bundle.md",sourceDirName:".",slug:"/symfony-bundle",permalink:"/docs/3.0/symfony-bundle",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-3.0/symfony-bundle.md",tags:[],version:"3.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1645553371,formattedLastUpdatedAt:"2/22/2022",frontMatter:{id:"symfony-bundle",title:"Getting started with Symfony",sidebar_label:"Symfony bundle",original_id:"symfony-bundle"},sidebar:"version-3.0/docs",previous:{title:"Getting Started",permalink:"/docs/3.0/getting-started"},next:{title:"Laravel package",permalink:"/docs/3.0/laravel-package"}},d=[{value:"Installation",id:"installation",children:[],level:2}],u={toc:d};function c(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The GraphQLite bundle is compatible with ",(0,i.kt)("strong",{parentName:"p"},"Symfony 4.x"),"."),(0,i.kt)("div",{class:"alert alert--warning"},"The Symfony Flex recipe is not yet available."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Open a terminal in your current project directory and run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ composer require thecodingmachine/graphqlite-bundle\n")),(0,i.kt)("p",null,"Enable the library by adding it to the list of registered bundles in the ",(0,i.kt)("inlineCode",{parentName:"p"},"app/AppKernel.php")," file:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"app/AppKernel.php")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nclass AppKernel extends Kernel\n{\n    public function registerBundles()\n    {\n        $bundles = array(\n            // other bundles...\n            new TheCodingMachine\\GraphQLite\\Bundle\\GraphQLiteBundle,\n        );\n    }\n}\n")),(0,i.kt)("p",null,'Now, enable the "graphql/" route by editing the ',(0,i.kt)("inlineCode",{parentName:"p"},"config/routes.yaml")," file:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"config/routes.yaml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# Add these 2 lines to config/routes.yaml\ngraphqlite_bundle:\n  resource: '@GraphqliteBundle/Resources/config/routes.xml'\n")),(0,i.kt)("p",null,"Last but not least, create the configuration file at ",(0,i.kt)("inlineCode",{parentName:"p"},"config/packages/graphqlite.yaml"),":"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"config/packages/graphqlite.yaml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n    namespace:\n      # The namespace(s) that will store your GraphQLite controllers.\n      # It accept either a string or a list of strings.\n      controllers: App\\Controller\\\n      # The namespace(s) that will store your GraphQL types and factories.\n      # It accept either a string or a list of strings.\n      types:\n      - App\\Types\\\n      - App\\Entity\\\n    debug:\n      # Include exception messages in output when an error arises.\n      INCLUDE_DEBUG_MESSAGE: false\n      # Include stacktrace in output when an error arises.\n      INCLUDE_TRACE: false\n      # Exceptions are not caught by the engine and propagated to Symfony.\n      RETHROW_INTERNAL_EXCEPTIONS: false\n      # Exceptions that do not implement ClientAware interface are\n      # not caught by the engine and propagated to Symfony.\n      RETHROW_UNSAFE_EXCEPTIONS: true\n")),(0,i.kt)("p",null,"The debug parameters are detailed in the ",(0,i.kt)("a",{parentName:"p",href:"https://webonyx.github.io/graphql-php/error-handling/"},"documentation of the Webonyx GraphQL library"),"\nwhich is used internally by GraphQLite."))}c.isMDXComponent=!0}}]);