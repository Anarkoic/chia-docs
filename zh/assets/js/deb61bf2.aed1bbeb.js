"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[6357],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(a),c=r,h=p["".concat(s,".").concat(c)]||p[c]||m[c]||l;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),l=a(6010),i=a(2466),o=a(6550),s=a(1980),d=a(7392),u=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,d]=h({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),k=(()=>{const e=s??p;return c({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var k=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=d[a].value;n!==o&&(p(t),s(n))},c=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:c,onClick:m},i,{className:(0,l.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function b(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},r.createElement(N,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return r.createElement(b,(0,n.Z)({key:String(t)},e))}},2506:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));a(4866),a(5162);const l={slug:"/guides/datalayer-permissions",title:"DataLayer Permissions"},i=void 0,o={unversionedId:"guides/datalayer/datalayer-permissions",id:"guides/datalayer/datalayer-permissions",title:"DataLayer Permissions",description:"Intro",source:"@site/docs/guides/datalayer/datalayer-permissions.md",sourceDirName:"guides/datalayer",slug:"/guides/datalayer-permissions",permalink:"/zh/guides/datalayer-permissions",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/guides/datalayer/datalayer-permissions.md",tags:[],version:"current",frontMatter:{slug:"/guides/datalayer-permissions",title:"DataLayer Permissions"},sidebar:"guides",previous:{title:"DataLayer User Guide",permalink:"/zh/guides/datalayer-user-guide"},next:{title:"Simulator User Guide",permalink:"/zh/guides/simulator-user-guide"}},s={},d=[{value:"Intro",id:"intro",level:2},{value:"About DataLayer permissions",id:"about-datalayer-permissions",level:2},{value:"Chia configuration",id:"chia-configuration",level:2},{value:"REST API",id:"rest-api",level:2},{value:"<code>handle_upload</code>",id:"handle_upload",level:3},{value:"<code>handle_download</code>",id:"handle_download",level:3},{value:"<code>upload</code>",id:"upload",level:3},{value:"<code>download</code>",id:"download",level:3},{value:"<code>add_missing_files</code>",id:"add_missing_files",level:3},{value:"<code>plugin_info</code>",id:"plugin_info",level:3},{value:"The Chia S3 plugin",id:"the-chia-s3-plugin",level:2},{value:"<code>healthz</code>",id:"healthz",level:3},{value:"<code>add_store_id</code>",id:"add_store_id",level:3},{value:"<code>remove_store_id</code>",id:"remove_store_id",level:3}],u={toc:d},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"Chia DataLayer\u2122 is a decentralized database that enables the redundant storage of off-chain data, auditable on the Chia blockchain. DataLayer uses an open and permissionless publish/subscribe model, which makes it possible for anyone to view and audit the data."),(0,r.kt)("p",null,"Many users -- especially those in the enterprise space -- would like to keep their data private."),(0,r.kt)("p",null,"DataLayer Permissions give owners of data stores a method to gate participation, thus keeping their data private. This is accomplished by using customizable plugins."),(0,r.kt)("p",null,"This guide will show you how to get started with DataLayer Permissions. Additional resources include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/guides/datalayer-user-guide"},"DataLayer user guide")," -- You should already be familiar with using DataLayer before working with permissions. This guide will help you to get started"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/data_layer/s3_plugin_service.py"},"S3 plugin")," -- This is the reference plugin for Amazon S3 integration. It is ",(0,r.kt)("a",{parentName:"li",href:"#the-chia-s3-plugin"},"discussed")," later in this guide"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/data_layer/data_layer.py"},"Source API calls")," -- In case you want to dig into the source code"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/datalayer-cli"},"CLI documentation")," for DataLayer"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/datalayer-rpc"},"RPC documentation")," for DataLayer")),(0,r.kt)("h2",{id:"about-datalayer-permissions"},"About DataLayer permissions"),(0,r.kt)("p",null,"Support for permissions were added to DataLayer in version 1.8.0 of the Chia reference wallet. The permissioning system requires uploader (publisher) and downloader (subscriber) plugins, which function as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When you push any changes to your DataLayer singleton, the uploader plugin is called"),(0,r.kt)("li",{parentName:"ul"},"When one of your subscribed singletons makes any on-chain changes, the downloader plugin is called")),(0,r.kt)("p",null,"The uploader and downloader plugins take the form of a service that exposes a specific RESTful API that DataLayer will call. This service can be configured in multiple different ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Uploader only"),(0,r.kt)("li",{parentName:"ul"},"Downloader only"),(0,r.kt)("li",{parentName:"ul"},"Both uploader and downloader")),(0,r.kt)("p",null,"Multiple instances of the same service are also possible. The service can be configured to require credentials, thereby gating access to data."),(0,r.kt)("h2",{id:"chia-configuration"},"Chia configuration"),(0,r.kt)("p",null,"To configure Chia to use DataLayer permissions, you need to add a list of URLs to config.yaml which allows access to the uploaders and downloaders. The settings to configure are new as of 1.8.0. To add them, you have two options:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start from scratch"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Delete or rename ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.chia/mainnet/config/config.yaml")),(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"chia init"),"; a new copy of config.yaml that contains the new settings will be generated"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the settings manually"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Edit ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.chia/mainnet/config/config.yaml")),(0,r.kt)("li",{parentName:"ul"},"Under the ",(0,r.kt)("inlineCode",{parentName:"li"},"data_layer:")," settings, add the following new lines:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"downloaders: []")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"uploaders: []"))))))),(0,r.kt)("p",null,"At this point, you can edit config.yaml and add the URL path(s) to either or both of the plugins. Be sure to remove the square brackets ",(0,r.kt)("inlineCode",{parentName:"p"},"[]")," if you add any URLs. For example, a snippet of config.yaml with the uploaders and downloaders configured might look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"data_layer:\n  client_timeout: 15\n  database_path: data_layer/db/data_layer_CHALLENGE.sqlite\n  downloaders:\n  - http://localhost:9456\n  - http://localhost:3145\n...\n  uploaders:\n  - http://localhost:9456\n  - http://localhost:9384\n")),(0,r.kt)("p",null,"Finally, restart Chia, ensuring that DataLayer and the propagation server are both configured to run. This is the only configuration that is required in Chia itself. The rest of the configuration is left up to the plugin service."),(0,r.kt)("h2",{id:"rest-api"},"REST API"),(0,r.kt)("p",null,"The expected REST API for the plugins is as follows - all requests are ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," requests."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"TLS connections are not yet supported. They may work as long as the proper root certificates are in the Chia certificate bundle, but this is untested.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"handle_upload"},(0,r.kt)("inlineCode",{parentName:"h3"},"handle_upload")),(0,r.kt)("p",null,"Functionality: Configure a store for uploading"),(0,r.kt)("p",null,"Request Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"store_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The store ID, in hex format")))),(0,r.kt)("p",null,"Response: ",(0,r.kt)("inlineCode",{parentName:"p"},'{"handle_upload": [true|false]}')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"handle_download"},(0,r.kt)("inlineCode",{parentName:"h3"},"handle_download")),(0,r.kt)("p",null,"Functionality: Configure a store for downloading from a mirror"),(0,r.kt)("p",null,"Request Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"store_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The store ID, in hex format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"url"),(0,r.kt)("td",{parentName:"tr",align:"left"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The URL of the mirror to download from")))),(0,r.kt)("p",null,"Response: ",(0,r.kt)("inlineCode",{parentName:"p"},'Response: {"handle_download": [true|false]}')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Technically the mirror URL is just a string. It's not required to be formatted as a URI, but it's expected it will normally be such (eg, http://, s3://, file://, ftp://, etc)")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"upload"},(0,r.kt)("inlineCode",{parentName:"h3"},"upload")),(0,r.kt)("p",null,"Functionality: Upload data to a store"),(0,r.kt)("p",null,"Request Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"store_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The store ID, in hex format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"full_tree_filename"),(0,r.kt)("td",{parentName:"tr",align:"left"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of full tree dat file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"diff_filename"),(0,r.kt)("td",{parentName:"tr",align:"left"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of delta dat file")))),(0,r.kt)("p",null,"Response: ",(0,r.kt)("inlineCode",{parentName:"p"},'{"uploaded": [true|false]}')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The filenames are just - names - and the plugin is expected to be configured such that it can locate these files. We do ",(0,r.kt)("em",{parentName:"p"},"not")," send the entire file contents. This does mean that the plugin needs access to a shared file system. Therefore, although the plugin service could technically run on a separate machine, we expect most plugin services to be run on the localhost.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"download"},(0,r.kt)("inlineCode",{parentName:"h3"},"download")),(0,r.kt)("p",null,"Functionality: Download a data file from a URI"),(0,r.kt)("p",null,"Request Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"url"),(0,r.kt)("td",{parentName:"tr",align:"left"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The URI for the download, eg ",(0,r.kt)("inlineCode",{parentName:"td"},'"server_info.url"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"filename"),(0,r.kt)("td",{parentName:"tr",align:"left"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the file to download, eg ",(0,r.kt)("inlineCode",{parentName:"td"},'"file1.dat"'))))),(0,r.kt)("p",null,"Response:  ",(0,r.kt)("inlineCode",{parentName:"p"},'{"downloaded": [true|false]}')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The downloader plugin ",(0,r.kt)("em",{parentName:"p"},"must")," place the files into the same directory that Chia DataLayer expects files - which is configured in the chia config.yaml configuration as ",(0,r.kt)("inlineCode",{parentName:"p"},"service_files_location"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"add_missing_files"},(0,r.kt)("inlineCode",{parentName:"h3"},"add_missing_files")),(0,r.kt)("p",null,"Functionality: Add missing files to a store"),(0,r.kt)("p",null,"Request Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"store_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The store ID, in hex format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"files"),(0,r.kt)("td",{parentName:"tr",align:"left"},"LIST"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The list of files to be added, for example: ",(0,r.kt)("inlineCode",{parentName:"td"},'["file1.dat", "file2.dat"]'))))),(0,r.kt)("p",null,"Response: ",(0,r.kt)("inlineCode",{parentName:"p"},'{"uploaded": [true|false]}')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Chia DataLayer will provide a complete list of DAT files for all generations from the beginning to the end that are needed to reconstruct the entire data. The plugin is expected to check its internal list of files and then upload whatever files might be missing. This is useful when adding a new uploader plugin to an existing deployment, or for troubleshooting. This is triggered automatically when ",(0,r.kt)("a",{parentName:"p",href:"/datalayer-cli#add_missing_files"},"add_missing_files")," is run on the CLI.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"plugin_info"},(0,r.kt)("inlineCode",{parentName:"h3"},"plugin_info")),(0,r.kt)("p",null,"Functionality: Show info about the plugin"),(0,r.kt)("p",null,"Request Parameters: None"),(0,r.kt)("p",null,"Response: The plugin may return any information it considers useful for this call. The output will be displayed when the ",(0,r.kt)("inlineCode",{parentName:"p"},"chia data plugins check")," CLI command is run. As a minimum, the plugin should response with an ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP 200")," response code , but typically some amount of text information is also expected (name, version, etc) in JSON format."),(0,r.kt)("h2",{id:"the-chia-s3-plugin"},"The Chia S3 plugin"),(0,r.kt)("p",null,"Chia Network has released a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/data_layer/s3_plugin_service.py"},"reference S3 uploader/downloader plugin"),", which demonstrates how to use the plugin system, and also offers support for ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"Amazon S3"),"."),(0,r.kt)("p",null,"This plugin implements the REST API from the ",(0,r.kt)("a",{parentName:"p",href:"#rest-api"},"previous section"),". It uses the native AWS python library (",(0,r.kt)("a",{parentName:"p",href:"https://pypi.org/project/boto3/"},"boto3"),") to upload and download from S3. Along with this, it uses the typical credentials expected by an AWS resource."),(0,r.kt)("p",null,"By providing credentials configured correctly, the plugin can do downloads with a read-only credential and uploads with a write-credential. ",(0,r.kt)("strong",{parentName:"p"},'Without access to the credentials, the data in S3 is unavailable at large to the public - hence "permissioned".')),(0,r.kt)("p",null,"A few notes about the S3 plugin:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It expects the mirror URL to use the ",(0,r.kt)("inlineCode",{parentName:"li"},"s3://")," scheme for downloads; it requires a bucket name for uploads."),(0,r.kt)("li",{parentName:"ul"},"It expects to be configured with a list of ",(0,r.kt)("inlineCode",{parentName:"li"},"store_ids")," it is responsible for, along with an ",(0,r.kt)("inlineCode",{parentName:"li"},"upload_bucket")," and/or a list of s3 ",(0,r.kt)("inlineCode",{parentName:"li"},"download_urls"),"."),(0,r.kt)("li",{parentName:"ul"},"Either ",(0,r.kt)("inlineCode",{parentName:"li"},"upload_bucket"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"download_urls"),", or both must be configured.")),(0,r.kt)("p",null,"Example configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Test-Instance: # just a name for the instance\n  log_filename: "s3_plugin.log"\n  log_level: INFO \n  server_files_location: # generally this only works if set to the same location as the Chia DataLayer `server_files_location`\n  port: 8998\n  aws_credentials:\n    access_key_id: "xxx"\n    secret_access_key: "xxx"\n    region: "xxx"\n\n  stores:\n    - store_id: "7acfcbd1ed73bfe2b698508f4ea5ed353c60ace154360272ce91f9ab0c8423c3"\n      upload_bucket: "chia-datalayer-test-bucket-2"\n      download_urls: ["s3://hello", "s3://goodbye"]\n    - store_id: "a14daf55d41ced6419bcd011fbc1f74ab9567fe55340d88435aa6493d628fa47"\n      upload_bucket:\n      download_urls: ["s3://hello", "s3://goodbye"]\n')),(0,r.kt)("p",null,"The S3 plugin also supports the following optional endpoints. These are not called directly by the chia datalayer service, but are useful for further configuration of the plugin:"),(0,r.kt)("h3",{id:"healthz"},(0,r.kt)("inlineCode",{parentName:"h3"},"healthz")),(0,r.kt)("p",null,"Functionality: Verifies that the RPC service is running"),(0,r.kt)("p",null,"Request Parameters: None"),(0,r.kt)("p",null,"Response: ",(0,r.kt)("inlineCode",{parentName:"p"},'{"success": true}')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"add_store_id"},(0,r.kt)("inlineCode",{parentName:"h3"},"add_store_id")),(0,r.kt)("p",null,"Functionality: Add a new store"),(0,r.kt)("p",null,"Request Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"store_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The store ID, in hex format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"bucket"),(0,r.kt)("td",{parentName:"tr",align:"left"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True*"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the S3 bucket ","[* Either ",(0,r.kt)("inlineCode",{parentName:"td"},"bucket")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"urls")," or both is required]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"urls"),(0,r.kt)("td",{parentName:"tr",align:"left"},"LIST"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True*"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A list of s3 URLs, for example ",(0,r.kt)("inlineCode",{parentName:"td"},'["s3://one", "s3://two"]')," ","[* Either ",(0,r.kt)("inlineCode",{parentName:"td"},"bucket")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"urls")," or both is required]")))),(0,r.kt)("p",null,"Success Response: ",(0,r.kt)("inlineCode",{parentName:"p"},'{"success": true, "id": store id}')),(0,r.kt)("p",null,"Failure Response: ",(0,r.kt)("inlineCode",{parentName:"p"},'{"success": false, "reason": "reason for failure"}')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Calling ",(0,r.kt)("inlineCode",{parentName:"p"},"add_store_id")," for a ",(0,r.kt)("inlineCode",{parentName:"p"},"store_id")," already in the config returns an error - there is no update option, only add and delete.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"remove_store_id"},(0,r.kt)("inlineCode",{parentName:"h3"},"remove_store_id")),(0,r.kt)("p",null,"Functionality: Remove a store"),(0,r.kt)("p",null,"Request Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"store_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The store ID, in hex format")))),(0,r.kt)("p",null,"Response: ",(0,r.kt)("inlineCode",{parentName:"p"},'{"success": [true|false], "store_id":store id in hex if successful}')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Removing a store ID that is not present in the config returns a True success code, but is otherwise ignored")),(0,r.kt)("hr",null))}m.isMDXComponent=!0}}]);