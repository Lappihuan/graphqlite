"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4716],{9949:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var a=t(87462),p=t(63366),i=(t(67294),t(3905)),r=["components"],l={id:"type_mapping",title:"Type mapping",sidebar_label:"Type mapping",original_id:"type_mapping"},o=void 0,s={unversionedId:"type_mapping",id:"version-3.0/type_mapping",isDocsHomePage:!1,title:"Type mapping",description:"As explained in the queries section, the job of GraphQLite is to create GraphQL types from PHP types.",source:"@site/versioned_docs/version-3.0/type_mapping.mdx",sourceDirName:".",slug:"/type_mapping",permalink:"/docs/3.0/type_mapping",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-3.0/type_mapping.mdx",tags:[],version:"3.0",lastUpdatedBy:"Andrew Maslov",lastUpdatedAt:1636470013,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"type_mapping",title:"Type mapping",sidebar_label:"Type mapping",original_id:"type_mapping"},sidebar:"version-3.0/docs",previous:{title:"Mutations",permalink:"/docs/3.0/mutations"},next:{title:"Extending a type",permalink:"/docs/3.0/extend_type"}},u=[{value:"Scalar mapping",id:"scalar-mapping",children:[],level:2},{value:"Class mapping",id:"class-mapping",children:[],level:2},{value:"Array mapping",id:"array-mapping",children:[],level:2},{value:"ID mapping",id:"id-mapping",children:[{value:"Force the outputType",id:"force-the-outputtype",children:[],level:3},{value:"ID class",id:"id-class",children:[],level:3}],level:2},{value:"Date mapping",id:"date-mapping",children:[],level:2},{value:"Union types",id:"union-types",children:[],level:2}],c={toc:u};function d(e){var n=e.components,t=(0,p.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As explained in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/3.0/queries"},"queries")," section, the job of GraphQLite is to create GraphQL types from PHP types."),(0,i.kt)("h2",{id:"scalar-mapping"},"Scalar mapping"),(0,i.kt)("p",null,"Scalar PHP types can be type-hinted to the corresponding GraphQL types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"string")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"int")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bool")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"float"))),(0,i.kt)("p",null,"For instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\n\nclass MyController\n{\n    /**\n     * @Query\n     */\n    public function hello(string $name): string\n    {\n        return 'Hello ' . $name;\n    }\n}\n")),(0,i.kt)("h2",{id:"class-mapping"},"Class mapping"),(0,i.kt)("p",null,"When returning a PHP class in a query, you must annotate this class using ",(0,i.kt)("inlineCode",{parentName:"p"},"@Type")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@Field")," annotations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n/**\n * @Type()\n */\nclass Product\n{\n    // ...\n\n    /**\n     * @Field()\n     */\n    public function getName(): string\n    {\n        return $this->name;\n    }\n\n    /**\n     * @Field()\n     */\n    public function getPrice(): ?float\n    {\n        return $this->price;\n    }\n}\n")),(0,i.kt)("h2",{id:"array-mapping"},"Array mapping"),(0,i.kt)("p",null,"You can type-hint against arrays (or iterators) as long as you add a detailed ",(0,i.kt)("inlineCode",{parentName:"p"},"@return")," statement in the PHPDoc."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Query\n * @return User[] <=== we specify that the array is an array of User objects.\n */\npublic function users(int $limit, int $offset): array\n{\n    // Some code that returns an array of "users".\n}\n')),(0,i.kt)("h2",{id:"id-mapping"},"ID mapping"),(0,i.kt)("p",null,"GraphQL comes with a native ",(0,i.kt)("inlineCode",{parentName:"p"},"ID")," type. PHP has no such type."),(0,i.kt)("p",null,"There are two ways with GraphQLite to handle such type."),(0,i.kt)("h3",{id:"force-the-outputtype"},"Force the outputType"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Field(outputType="ID")\n */\npublic function getId(): string\n{\n    // ...\n}\n')),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"outputType")," attribute of the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Field")," annotation, you can force the output type to ",(0,i.kt)("inlineCode",{parentName:"p"},"ID"),"."),(0,i.kt)("p",null,"You can learn more about forcing output types in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/3.0/custom-output-types"},"custom output types section"),"."),(0,i.kt)("h3",{id:"id-class"},"ID class"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Types\\ID;\n\n/**\n * @Field\n */\npublic function getId(): ID\n{\n    // ...\n}\n")),(0,i.kt)("p",null,"Note that you can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ID")," class as an input type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Types\\ID;\n\n/**\n * @Mutation\n */\npublic function save(ID $id, string $name): Product\n{\n    // ...\n}\n")),(0,i.kt)("h2",{id:"date-mapping"},"Date mapping"),(0,i.kt)("p",null,"Out of the box, GraphQL does not have a ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime")," type, but we took the liberty to add one, with sensible defaults."),(0,i.kt)("p",null,"When used as an output type, ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTimeImmutable")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTimeInterface")," PHP classes are\nautomatically mapped to this ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime")," GraphQL type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Field\n */\npublic function getDate(): \\DateTimeInterface\n{\n    return $this->date;\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"date")," field will be of type ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime"),". In the returned JSON response to a query, the date is formatted as a string\nin the ",(0,i.kt)("strong",{parentName:"p"},"ISO8601")," format (aka ATOM format)."),(0,i.kt)("div",{class:"alert alert--danger"},"PHP ",(0,i.kt)("code",null,"DateTime")," type is not supported."),(0,i.kt)("h2",{id:"union-types"},"Union types"),(0,i.kt)("p",null,"You can create a GraphQL union type ",(0,i.kt)("em",{parentName:"p"},"on the fly")," using the pipe ",(0,i.kt)("inlineCode",{parentName:"p"},"|")," operator in the PHPDoc:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Query\n * @return Company|Contact <== can return a company OR a contact.\n */\npublic function companyOrContact(int $id)\n{\n    // Some code that returns a company or a contact.\n}\n")))}d.isMDXComponent=!0}}]);