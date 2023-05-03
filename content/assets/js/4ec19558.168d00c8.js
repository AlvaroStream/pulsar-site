"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[75619],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={id:"io-jdbc-sink",title:"JDBC sink connector",sidebar_label:"JDBC sink connector"},i=void 0,o={unversionedId:"io-jdbc-sink",id:"version-3.0.x/io-jdbc-sink",title:"JDBC sink connector",description:"You can download all the Pulsar connectors on download page.",source:"@site/versioned_docs/version-3.0.x/io-jdbc-sink.md",sourceDirName:".",slug:"/io-jdbc-sink",permalink:"/docs/3.0.x/io-jdbc-sink",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/io-jdbc-sink.md",tags:[],version:"3.0.x",frontMatter:{id:"io-jdbc-sink",title:"JDBC sink connector",sidebar_label:"JDBC sink connector"}},p={},s=[],d={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can download all the Pulsar connectors on ",(0,r.kt)("a",{parentName:"p",href:"pathname:///download"},"download page"),"."),(0,r.kt)("p",{parentName:"admonition"},"::::"),(0,r.kt)("p",{parentName:"admonition"},"The JDBC sink connectors allow pulling messages from Pulsar topics and persist the messages to ClickHouse, MariaDB, PostgreSQL, and SQLite."),(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"Currently, INSERT, DELETE and UPDATE operations are supported.\nSQLite, MariaDB and PostgreSQL also support UPSERT operations and idempotent writes.")),(0,r.kt)("h2",{parentName:"admonition",id:"configuration"},"Configuration"),(0,r.kt)("p",{parentName:"admonition"},"The configuration of all JDBC sink connectors has the following properties."),(0,r.kt)("h3",{parentName:"admonition",id:"property"},"Property"),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"userName")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The username used to connect to the database specified by ",(0,r.kt)("inlineCode",{parentName:"td"},"jdbcUrl"),".",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Note: ",(0,r.kt)("inlineCode",{parentName:"strong"},"userName")," is case-sensitive."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"password")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The password used to connect to the database specified by ",(0,r.kt)("inlineCode",{parentName:"td"},"jdbcUrl"),". ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Note: ",(0,r.kt)("inlineCode",{parentName:"strong"},"password")," is case-sensitive."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"jdbcUrl")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The JDBC URL of the database that the connector connects to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tableName")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the table that the connector writes to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nonKey")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"A comma-separated list containing the fields used in updating events.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"key")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"A comma-separated list containing the fields used in ",(0,r.kt)("inlineCode",{parentName:"td"},"where")," condition of updating and deleting events.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timeoutMs")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"The JDBC operation timeout in milliseconds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"batchSize")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"The batch size of updates made to the database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"insertMode")),(0,r.kt)("td",{parentName:"tr",align:null},"enum( INSERT,UPSERT,UPDATE)"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"INSERT"),(0,r.kt)("td",{parentName:"tr",align:null},"If it is configured as UPSERT, the sink uses upsert semantics rather than plain INSERT/UPDATE statements. Upsert semantics refer to atomically adding a new row or updating the existing row if there is a primary key constraint violation, which provides idempotence.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nullValueAction")),(0,r.kt)("td",{parentName:"tr",align:null},"enum(FAIL, DELETE)"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"FAIL"),(0,r.kt)("td",{parentName:"tr",align:null},"How to handle records with NULL values. Possible options are ",(0,r.kt)("inlineCode",{parentName:"td"},"DELETE")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"FAIL"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"useTransactions")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Enable transactions of the database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"excludeNonDeclaredFields")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"All the table fields are discovered automatically. ",(0,r.kt)("inlineCode",{parentName:"td"},"excludeNonDeclaredFields")," indicates if the table fields not explicitly listed in ",(0,r.kt)("inlineCode",{parentName:"td"},"nonKey")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"key")," must be included in the query. By default all the table fields are included. To leverage of table fields defaults during insertion, it is suggested to set this value to ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"useJdbcBatch")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Use the JDBC batch API. This option is suggested to improve write performance.")))),(0,r.kt)("h3",{parentName:"admonition",id:"example-of-clickhouse"},"Example of ClickHouse"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JSON"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "configs": {\n      "userName": "clickhouse",\n      "password": "password",\n      "jdbcUrl": "jdbc:clickhouse://localhost:8123/pulsar_clickhouse_jdbc_sink",\n      "tableName": "pulsar_clickhouse_jdbc_sink"\n      "useTransactions": "false"\n   }\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"YAML"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'tenant: "public"\nnamespace: "default"\nname: "jdbc-clickhouse-sink"\ninputs: [ "persistent://public/default/jdbc-clickhouse-topic" ]\nsinkType: "jdbc-clickhouse"\nconfigs:\n    userName: "clickhouse"\n    password: "password"\n    jdbcUrl: "jdbc:clickhouse://localhost:8123/pulsar_clickhouse_jdbc_sink"\n    tableName: "pulsar_clickhouse_jdbc_sink"\n    useTransactions: "false"\n')))),(0,r.kt)("h3",{parentName:"admonition",id:"example-of-mariadb"},"Example of MariaDB"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JSON"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "configs": {\n      "userName": "mariadb",\n      "password": "password",\n      "jdbcUrl": "jdbc:mariadb://localhost:3306/pulsar_mariadb_jdbc_sink",\n      "tableName": "pulsar_mariadb_jdbc_sink"\n   }\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"YAML"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'tenant: "public"\nnamespace: "default"\nname: "jdbc-mariadb-sink"\ninputs: [ "persistent://public/default/jdbc-mariadb-topic" ]\nsinkType: "jdbc-mariadb"\nconfigs:\n    userName: "mariadb"\n    password: "password"\n    jdbcUrl: "jdbc:mariadb://localhost:3306/pulsar_mariadb_jdbc_sink"\n    tableName: "pulsar_mariadb_jdbc_sink"\n')))),(0,r.kt)("h3",{parentName:"admonition",id:"example-of-openmldb"},"Example of OpenMLDB"),(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"OpenMLDB does not support DELETE and UPDATE operations"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"JSON"))),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "configs": {\n      "jdbcUrl": "jdbc:openmldb:///pulsar_openmldb_db?zk=localhost:6181&zkPath=/openmldb",\n      "tableName": "pulsar_openmldb_jdbc_sink"\n   }\n}\n')),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"YAML"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'tenant: "public"\nnamespace: "default"\nname: "jdbc-openmldb-sink"\ninputs: [ "persistent://public/default/jdbc-openmldb-topic" ]\nsinkType: "jdbc-openmldb"\nconfigs:\n    jdbcUrl: "jdbc:openmldb:///pulsar_openmldb_db?zk=localhost:6181&zkPath=/openmldb"\n    tableName: "pulsar_openmldb_jdbc_sink"\n')))),(0,r.kt)("h3",{parentName:"admonition",id:"example-of-postgresql"},"Example of PostgreSQL"),(0,r.kt)("p",{parentName:"admonition"},"Before using the JDBC PostgreSQL sink connector, you need to create a configuration file through one of the following methods."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JSON"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "configs": {\n      "userName": "postgres",\n      "password": "password",\n      "jdbcUrl": "jdbc:postgresql://localhost:5432/pulsar_postgres_jdbc_sink",\n      "tableName": "pulsar_postgres_jdbc_sink"\n   }\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"YAML"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'tenant: "public"\nnamespace: "default"\nname: "jdbc-postgres-sink"\ninputs: [ "persistent://public/default/jdbc-postgres-topic" ]\nsinkType: "jdbc-postgres"\nconfigs:\n    userName: "postgres"\n    password: "password"\n    jdbcUrl: "jdbc:postgresql://localhost:5432/pulsar_postgres_jdbc_sink"\n    tableName: "pulsar_postgres_jdbc_sink"\n')))),(0,r.kt)("p",{parentName:"admonition"},"For more information on ",(0,r.kt)("strong",{parentName:"p"},"how to use this JDBC sink connector"),", see ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.0.x/io-quickstart#connect-pulsar-to-postgresql"},"connect Pulsar to PostgreSQL"),"."),(0,r.kt)("h3",{parentName:"admonition",id:"example-of-sqlite"},"Example of SQLite"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JSON"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "configs": {\n      "jdbcUrl": "jdbc:sqlite:db.sqlite",\n      "tableName": "pulsar_sqlite_jdbc_sink"\n   }\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"YAML"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'tenant: "public"\nnamespace: "default"\nname: "jdbc-sqlite-sink"\ninputs: [ "persistent://public/default/jdbc-sqlite-topic" ]\nsinkType: "jdbc-sqlite"\nconfigs:\n    jdbcUrl: "jdbc:sqlite:db.sqlite"\n    tableName: "pulsar_sqlite_jdbc_sink"\n'))))))}m.isMDXComponent=!0}}]);