"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[4288],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>u});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},m="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=d(n),c=i,u=m["".concat(s,".").concat(c)]||m[c]||h[c]||r;return n?a.createElement(u,l(l({ref:e},p),{},{components:n})):a.createElement(u,l({ref:e},p))}));function u(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[m]="string"==typeof t?t:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},737:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const r={slug:"/conditions",title:"Conditions"},l=void 0,o={unversionedId:"coin-set-model/conditions",id:"coin-set-model/conditions",title:"Conditions",description:"When a coin is spent, its puzzle is executed on the Chialisp Virtual Machine (CLVM). If the program does not fail, it returns a list of conditions. These conditions determine what the outcome of the spend is, and whether or not the spend is valid.",source:"@site/docs/coin-set-model/conditions.md",sourceDirName:"coin-set-model",slug:"/conditions",permalink:"/zh/conditions",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/coin-set-model/conditions.md",tags:[],version:"current",frontMatter:{slug:"/conditions",title:"Conditions"},sidebar:"tutorialSidebar",previous:{title:"Costs",permalink:"/zh/coin-set-costs"},next:{title:"Spend Bundles",permalink:"/zh/spend-bundles"}},s={},d=[{value:"Condition List",id:"list",level:2},{value:"Condition Costs",id:"costs",level:2},{value:"Memos and Hinting",id:"memos",level:2},{value:"Announcements",id:"announcements",level:2}],p={toc:d},m="wrapper";function h(t){let{components:e,...n}=t;return(0,i.kt)(m,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When a coin is spent, its puzzle is executed on the Chialisp Virtual Machine (CLVM). If the program does not fail, it returns a list of conditions. These conditions determine what the outcome of the spend is, and whether or not the spend is valid."),(0,i.kt)("p",null,"Puzzles have no access to the outside world, or even to blockchain parameters like block height. Therefore, to interact with the outside environment, they return a list of conditions, each of which must be valid in order for the spend itself to be valid."),(0,i.kt)("p",null,"There are two kinds of conditions. Some require something to be true (such as time passing) in order for the spend to be valid. And others cause something to happen if the spend is valid (such as the creation of new coins)."),(0,i.kt)("h2",{id:"list"},"Condition List"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Be vigilant when using ",(0,i.kt)("inlineCode",{parentName:"p"},"ASSERT_MY_COIN_ID")," as a shortcut for validating the parent coin id, puzzle hash, and amount. If they are passed into the solution separately, then validated all at once by hashing them together, it is possible to shift the bytes to the left or right and manipulate the values."),(0,i.kt)("p",{parentName:"admonition"},"Consider either checking them individually or verifying that the hashes are indeed 32 bytes in length.")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"ASSERT_COIN_ANNOUNCEMENT")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ASSERT_PUZZLE_ANNOUNCEMENT")," should typically only be used in a puzzle's ",(0,i.kt)("em",{parentName:"p"},"solution"),", and not in the puzzle itself. This is especially important when using ",(0,i.kt)("inlineCode",{parentName:"p"},"ASSERT_COIN_ANNOUNCEMENT"),", because it refers to a specific coin."),(0,i.kt)("p",{parentName:"admonition"},"To illustrate the danger, let's say ",(0,i.kt)("inlineCode",{parentName:"p"},"coin A")," uses this condition in its puzzle, and it asserts a coin announcement from ",(0,i.kt)("inlineCode",{parentName:"p"},"coin B"),".\nIn this case, ",(0,i.kt)("inlineCode",{parentName:"p"},"coin A")," requires ",(0,i.kt)("inlineCode",{parentName:"p"},"coin B")," to be spent in the same block as it is spent.\nIf ",(0,i.kt)("inlineCode",{parentName:"p"},"coin B")," is spent before ",(0,i.kt)("inlineCode",{parentName:"p"},"coin A"),", then ",(0,i.kt)("inlineCode",{parentName:"p"},"coin A")," can ",(0,i.kt)("em",{parentName:"p"},"never")," be spent."),(0,i.kt)("p",{parentName:"admonition"},"However, if this condition is instead used in the ",(0,i.kt)("em",{parentName:"p"},"solution")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"coin A"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"coin B")," has already been spent, then ",(0,i.kt)("inlineCode",{parentName:"p"},"coin A")," can still be spent later, albeit with a different solution."),(0,i.kt)("p",{parentName:"admonition"},"It is somewhat less dangerous to use ",(0,i.kt)("inlineCode",{parentName:"p"},"ASSERT_PUZZLE_ANNOUNCEMENT")," in a coin's puzzle because it only relies on a coin with a specific puzzle, and many such coins might exist.\nHowever, it is still best practice to only use this condition in a coin's solution.")),(0,i.kt)("p",null,"This is an extensive list of each condition allowed on the Chia blockchain."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Condition"),(0,i.kt)("th",{parentName:"tr",align:null},"Format"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"REMARK"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(1)")),(0,i.kt)("td",{parentName:"tr",align:null},"Always a valid condition.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AGG_SIG_UNSAFE"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(49 public_key message)")),(0,i.kt)("td",{parentName:"tr",align:null},"Verifies a signature by its ",(0,i.kt)("inlineCode",{parentName:"td"},"public_key")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"message"),". Usually ",(0,i.kt)("inlineCode",{parentName:"td"},"AGG_SIG_ME")," is safer.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AGG_SIG_ME"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(50 public_key message)")),(0,i.kt)("td",{parentName:"tr",align:null},"Like ",(0,i.kt)("inlineCode",{parentName:"td"},"AGG_SIG_UNSAFE"),", but including the coin id and genesis id to prevent replay attacks.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CREATE_COIN"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(51 puzzle_hash amount (...memos))")),(0,i.kt)("td",{parentName:"tr",align:null},"Creates a coin with a given ",(0,i.kt)("inlineCode",{parentName:"td"},"puzzle_hash"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"amount"),", and an optional ",(0,i.kt)("a",{parentName:"td",href:"#memos"},"memos")," parameter.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RESERVE_FEE"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(52 amount)")),(0,i.kt)("td",{parentName:"tr",align:null},"Requires a given ",(0,i.kt)("inlineCode",{parentName:"td"},"amount")," to be remaining in the transaction as a fee.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CREATE_COIN_ANNOUNCEMENT"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(60 message)")),(0,i.kt)("td",{parentName:"tr",align:null},"Creates an announcement with a given ",(0,i.kt)("inlineCode",{parentName:"td"},"message"),", tied to this coin.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ASSERT_COIN_ANNOUNCEMENT"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(61 announcement_id)")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts a coin announcement was created within this transaction by its ",(0,i.kt)("inlineCode",{parentName:"td"},"announcement_id"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CREATE_PUZZLE_ANNOUNCEMENT"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(62 message)")),(0,i.kt)("td",{parentName:"tr",align:null},"Creates an announcement with a given ",(0,i.kt)("inlineCode",{parentName:"td"},"message"),", tied to this puzzle.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ASSERT_PUZZLE_ANNOUNCEMENT"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(63 announcement_id)")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts a puzzle announcement was created within this transaction by its ",(0,i.kt)("inlineCode",{parentName:"td"},"announcement_id"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ASSERT_CONCURRENT_SPEND"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(64 coin_id)")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that this coin is spent in the same block as a given ",(0,i.kt)("inlineCode",{parentName:"td"},"coin_id"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ASSERT_CONCURRENT_PUZZLE"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(65 puzzle_hash)")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that this coin is spent in the same block as a coin with a given ",(0,i.kt)("inlineCode",{parentName:"td"},"puzzle_hash"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ASSERT_MY_COIN_ID"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(70 coin_id)")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the coin's id matches the given ",(0,i.kt)("inlineCode",{parentName:"td"},"coin_id"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ASSERT_MY_PARENT_ID"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(71 parent_id)")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the coin's parent id matches the given ",(0,i.kt)("inlineCode",{parentName:"td"},"parent_id"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ASSERT_MY_PUZZLEHASH"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(72 puzzle_hash)")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the coin's puzzle hash matches the given ",(0,i.kt)("inlineCode",{parentName:"td"},"puzzle_hash"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ASSERT_MY_AMOUNT"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(73 amount)")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the coin's amount matches the given ",(0,i.kt)("inlineCode",{parentName:"td"},"amount"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ASSERT_MY_BIRTH_SECONDS"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(74 seconds)")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the coin was created with a timestamp of ",(0,i.kt)("inlineCode",{parentName:"td"},"seconds"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ASSERT_MY_BIRTH_HEIGHT"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(75 block_height)")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the coin was created on a given ",(0,i.kt)("inlineCode",{parentName:"td"},"block_height"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ASSERT_EPHEMERAL"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(76)")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the coin was both created and spent on the current block.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ASSERT_SECONDS_RELATIVE"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(80 seconds_passed)")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the previous transaction block's timestamp was at least ",(0,i.kt)("inlineCode",{parentName:"td"},"seconds_passed")," seconds after coin creation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ASSERT_SECONDS_ABSOLUTE"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(81 seconds)")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the previous transaction block's timestamp was at least ",(0,i.kt)("inlineCode",{parentName:"td"},"seconds"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ASSERT_HEIGHT_RELATIVE"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(82 block_height_passed)")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the previous transaction block's height was at least ",(0,i.kt)("inlineCode",{parentName:"td"},"block_height_passed")," after coin creation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ASSERT_HEIGHT_ABSOLUTE"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(83 block_height)")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the previous transaction block's height was at least ",(0,i.kt)("inlineCode",{parentName:"td"},"block_height"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ASSERT_BEFORE_SECONDS_RELATIVE"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(84 seconds_passed)")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the previous transaction block's timestamp was less than ",(0,i.kt)("inlineCode",{parentName:"td"},"seconds_passed")," seconds after coin creation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ASSERT_BEFORE_SECONDS_ABSOLUTE"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(85 seconds)")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the previous transaction block's timestamp was less than ",(0,i.kt)("inlineCode",{parentName:"td"},"seconds"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ASSERT_BEFORE_HEIGHT_RELATIVE"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(86 block_height_passed)")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the previous transaction block's height was less than ",(0,i.kt)("inlineCode",{parentName:"td"},"seconds_passed")," after coin creation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ASSERT_BEFORE_HEIGHT_ABSOLUTE"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(87 block_height)")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the previous transaction block's height was less than ",(0,i.kt)("inlineCode",{parentName:"td"},"block_height"),".")))),(0,i.kt)("h2",{id:"costs"},"Condition Costs"),(0,i.kt)("p",null,"Conditions not listed here do not have a cost associated with them."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Condition"),(0,i.kt)("th",{parentName:"tr",align:null},"Cost"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CREATE_COIN"),(0,i.kt)("td",{parentName:"tr",align:null},"1800000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AGG_SIG_UNSAFE"),(0,i.kt)("td",{parentName:"tr",align:null},"1200000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AGG_SIG_ME"),(0,i.kt)("td",{parentName:"tr",align:null},"1200000")))),(0,i.kt)("h2",{id:"memos"},"Memos and Hinting"),(0,i.kt)("p",null,"When a coin uses one or more outer puzzles that change their puzzle hash, it's challenging for wallets to know which coins they have the ability to spend. The memos field allows you to hint the inner puzzle hash of created coins, which consequently lets the wallet know that the coin belongs to it. Coins can be looked up by the inner puzzle hash rather than the outer puzzle hash."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE_COIN")," condition is defined as a list containing the opcode ",(0,i.kt)("inlineCode",{parentName:"p"},"51")," and the following arguments:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"; The third parameter is optional.\n(51 puzzle_hash amount (...memos))\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"memos")," parameter is an optional list, which must be null terminated."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"memos")," is present, and the first memo is exactly 32 bytes long, it's used as the hint and the rest of the list are memos. Otherwise, values in the entire list are memos."),(0,i.kt)("p",null,"As an example, the following inner solution for the ",(0,i.kt)("a",{parentName:"p",href:"https://chialisp.com/standard-transactions"},"standard transaction")," would create an unhinted coin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"(() (q . ((51 target_puzzle_hash amount))) ())\n")),(0,i.kt)("p",null,"The following solution would instead create a coin with the hint matching the inner puzzle hash:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"(() (q . ((51 target_puzzle_hash amount (target_puzzle_hash)))) ())\n")),(0,i.kt)("p",null,"This ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE_COIN")," condition creates the same coin as before, but now it specifies the hint with which the receiving wallet can look up to find this coin."),(0,i.kt)("p",null,"Hints are only necessary for outer puzzles, of which the inner puzzle hash matches the hint. For example, coins using the standard transaction itself with no outer puzzle do not need a hint."),(0,i.kt)("h2",{id:"announcements"},"Announcements"),(0,i.kt)("p",null,"Announcements are ephemeral, meaning that they don't last forever. They can only be asserted within the block they are created. Their purpose is to ensure multiple coins are spent together, either for fees, verification, or as a security measure."),(0,i.kt)("p",null,"For coin announcements, the id is the ",(0,i.kt)("inlineCode",{parentName:"p"},"coin_id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," sha256 hashed together. Likewise, for puzzle announcements, it's the ",(0,i.kt)("inlineCode",{parentName:"p"},"puzzle_hash")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," sha256 hashed together."))}h.isMDXComponent=!0}}]);