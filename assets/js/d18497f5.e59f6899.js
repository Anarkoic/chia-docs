"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[395],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,f=m["".concat(c,".").concat(u)]||m[u]||s[u]||l;return a?r.createElement(f,i(i({ref:t},d),{},{components:a})):r.createElement(f,i({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),n=a(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(7462),n=a(7294),l=a(6010),i=a(2466),o=a(6550),c=a(1980),p=a(7392),d=a(12);function m(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function s(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function u(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=s(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[c,p]=f({queryString:a,groupId:r}),[m,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,d.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),g=(()=>{const e=c??m;return u({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),k(e)}),[p,k,l]),tabValues:l}}var g=a(2389);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:a,selectedValue:o,selectValue:c,tabValues:p}=e;const d=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),s=e=>{const t=e.currentTarget,a=d.indexOf(t),r=p[a].value;r!==o&&(m(t),c(r))},u=e=>{let t=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:u,onClick:s},i,{className:(0,l.Z)("tabs__item",N.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=k(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",N.tabList)},n.createElement(h,(0,r.Z)({},e,t)),n.createElement(b,(0,r.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},9847:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));a(4866),a(5162);const l={sidebar_label:"Offers",title:"Offer CLI",slug:"/offer-cli"},i=void 0,o={unversionedId:"cli-reference/offers",id:"cli-reference/offers",title:"Offer CLI",description:"Note about Windows command escaping",source:"@site/docs/cli-reference/offers.md",sourceDirName:"cli-reference",slug:"/offer-cli",permalink:"/offer-cli",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/cli-reference/offers.md",tags:[],version:"current",frontMatter:{sidebar_label:"Offers",title:"Offer CLI",slug:"/offer-cli"},sidebar:"tutorialSidebar",previous:{title:"NFTs",permalink:"/nft-cli"},next:{title:"Simulator",permalink:"/simulator-cli"}},c={},p=[{value:"Reference",id:"reference",level:2},{value:"<code>make_offer</code>",id:"make_offer",level:3},{value:"<strong><code>take_offer</code></strong>",id:"take_offer",level:3},{value:"<strong><code>cancel_offer</code></strong>",id:"cancel_offer",level:3},{value:"<strong><code>get_offers</code></strong>",id:"get_offers",level:3}],d={toc:p},m="wrapper";function s(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Note about Windows command escaping"),(0,n.kt)("p",null,"This document will use Linux/MacOS RPC syntax. When running rpc commands on Windows, you'll need to escape all quotes with backslashes."),(0,n.kt)("p",null,"For example, here is a typical RPC command on Linux and MacOS:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'chia rpc wallet create_new_wallet \'{"wallet_type": "nft_wallet"}\'\n')),(0,n.kt)("p",null,"To run the same command on Windows, you need to escape the quotes, so it looks like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'chia rpc wallet create_new_wallet \'{\\"wallet_type\\": \\"nft_wallet\\"}\'\n'))),(0,n.kt)("h2",{id:"reference"},"Reference"),(0,n.kt)("h3",{id:"make_offer"},(0,n.kt)("inlineCode",{parentName:"h3"},"make_offer")),(0,n.kt)("p",null,"Functionality: Create an offer of XCH/CATs for XCH/CATs."),(0,n.kt)("p",null,"Usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"chia wallet make_offer [OPTIONS]")),(0,n.kt)("p",null,"Options:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Short Command"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Long Command"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-wp"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--wallet-rpc-port"),(0,n.kt)("td",{parentName:"tr",align:"center"},"INTEGER"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--fingerprint"),(0,n.kt)("td",{parentName:"tr",align:"center"},"INTEGER"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set the fingerprint to specify which wallet to use")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-o"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--offer"),(0,n.kt)("td",{parentName:"tr",align:"center"},"TEXT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"True"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A wallet id to offer and the amount to offer (formatted like wallet_id:amount)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-r"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--request"),(0,n.kt)("td",{parentName:"tr",align:"center"},"TEXT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"True"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A wallet id of an asset to receive and the amount you wish to receive (formatted like wallet_id:amount)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-p"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--filepath"),(0,n.kt)("td",{parentName:"tr",align:"center"},"TEXT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"True"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The path to write the generated offer file to")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-m"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--fee"),(0,n.kt)("td",{parentName:"tr",align:"center"},"TEXT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A fee to add to the offer when it gets taken")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"--reuse"),(0,n.kt)("td",{parentName:"tr",align:"center"},"None"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set this flag to reuse an existing address for the offer ","[Default: generate a new address]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-h"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--help"),(0,n.kt)("td",{parentName:"tr",align:"center"},"None"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"take_offer"},(0,n.kt)("strong",{parentName:"h3"},(0,n.kt)("inlineCode",{parentName:"strong"},"take_offer"))),(0,n.kt)("p",null,"Functionality: Examine or take an offer."),(0,n.kt)("p",null,"Usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"chia wallet take_offer [OPTIONS] PATH_OR_HEX")),(0,n.kt)("p",null,"Options:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Short Command"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Long Command"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-wp"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--wallet-rpc-port"),(0,n.kt)("td",{parentName:"tr",align:"center"},"INTEGER"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--fingerprint"),(0,n.kt)("td",{parentName:"tr",align:"center"},"INTEGER"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set the fingerprint to specify which wallet to use")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-e"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--examine-only"),(0,n.kt)("td",{parentName:"tr",align:"center"},"None"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Print the summary of the offer file but do not take it")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-m"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--fee"),(0,n.kt)("td",{parentName:"tr",align:"center"},"TEXT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The fee to use when pushing the completed offer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"--reuse"),(0,n.kt)("td",{parentName:"tr",align:"center"},"None"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set this flag to reuse an existing address for the offer ","[Default: generate a new address]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-h"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--help"),(0,n.kt)("td",{parentName:"tr",align:"center"},"None"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"cancel_offer"},(0,n.kt)("strong",{parentName:"h3"},(0,n.kt)("inlineCode",{parentName:"strong"},"cancel_offer"))),(0,n.kt)("p",null,"Functionality: Cancel an existing offer. Must be the offer's Maker."),(0,n.kt)("p",null,"Usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"chia wallet cancel_offer [OPTIONS]")),(0,n.kt)("p",null,"Options:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Short Command"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Long Command"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-wp"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--wallet-rpc-port"),(0,n.kt)("td",{parentName:"tr",align:"center"},"INTEGER"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--fingerprint"),(0,n.kt)("td",{parentName:"tr",align:"center"},"INTEGER"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set the fingerprint to specify which wallet to use")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-id"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--id"),(0,n.kt)("td",{parentName:"tr",align:"center"},"TEXT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"True"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The offer ID that you wish to cancel")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"--insecure"),(0,n.kt)("td",{parentName:"tr",align:"center"},"None"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set this flag to disable making an on-chain transaction and simply mark the offer as canceled ","[Default: cancel on-chain]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-m"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--fee"),(0,n.kt)("td",{parentName:"tr",align:"center"},"TEXT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The fee to use when canceling the offer securely")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-h"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--help"),(0,n.kt)("td",{parentName:"tr",align:"center"},"None"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"get_offers"},(0,n.kt)("strong",{parentName:"h3"},(0,n.kt)("inlineCode",{parentName:"strong"},"get_offers"))),(0,n.kt)("p",null,"Functionality: Get the status of existing offers."),(0,n.kt)("p",null,"Usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"chia wallet get_offers [OPTIONS]")),(0,n.kt)("p",null,"Options:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Short Command"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Long Command"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-wp"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--wallet-rpc-port"),(0,n.kt)("td",{parentName:"tr",align:"center"},"INTEGER"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--fingerprint"),(0,n.kt)("td",{parentName:"tr",align:"center"},"INTEGER"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set the fingerprint to specify which wallet to use")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-id"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--id"),(0,n.kt)("td",{parentName:"tr",align:"center"},"TEXT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The ID of the offer that you wish to examine")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-p"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--filepath"),(0,n.kt)("td",{parentName:"tr",align:"center"},"TEXT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The path to rewrite the offer file to (must be used in conjunction with --id)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-em"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--exclude-my-offers"),(0,n.kt)("td",{parentName:"tr",align:"center"},"None"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Exclude your own offers from the output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-et"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--exclude-taken-offers"),(0,n.kt)("td",{parentName:"tr",align:"center"},"None"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Exclude offers that you've accepted from the output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-ic"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--include-completed"),(0,n.kt)("td",{parentName:"tr",align:"center"},"None"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Include offers that have already been confirmed/canceled or failed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-s"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--summaries"),(0,n.kt)("td",{parentName:"tr",align:"center"},"None"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Show the assets being offered and requested for each offer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-r"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--reverse"),(0,n.kt)("td",{parentName:"tr",align:"center"},"None"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Reverse the order of the output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-h"),(0,n.kt)("td",{parentName:"tr",align:"center"},"--help"),(0,n.kt)("td",{parentName:"tr",align:"center"},"None"),(0,n.kt)("td",{parentName:"tr",align:"center"},"False"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))))}s.isMDXComponent=!0}}]);