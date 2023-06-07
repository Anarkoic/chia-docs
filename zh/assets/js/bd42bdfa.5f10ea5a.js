"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[3380],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=o.createContext({}),c=function(e){var t=o.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(r.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,m=u["".concat(r,".").concat(p)]||u[p]||d[p]||i;return n?o.createElement(m,l(l({ref:t},h),{},{components:n})):o.createElement(m,l({ref:t},h))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const i={sidebar_label:"Introduction",title:"Coin Set Intro",slug:"/coin-set-intro"},l=void 0,s={unversionedId:"coin-set-model/intro",id:"coin-set-model/intro",title:"Coin Set Intro",description:'In any given blockchain, one of the most fundamental questions is, "How do we keep track of the state of the whole system?" Bitcoin uses the Unspent Transaction Output (UTXO) model. Ethereum, along with many other blockchains, use the account model. Chia uses the coin set model, which is similar to UTXO.',source:"@site/docs/coin-set-model/intro.md",sourceDirName:"coin-set-model",slug:"/coin-set-intro",permalink:"/zh/coin-set-intro",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/coin-set-model/intro.md",tags:[],version:"current",frontMatter:{sidebar_label:"Introduction",title:"Coin Set Intro",slug:"/coin-set-intro"},sidebar:"tutorialSidebar",previous:{title:"Offers",permalink:"/zh/walletconnect-offers"},next:{title:"Costs",permalink:"/zh/coin-set-costs"}},r={},c=[{value:"Key Features",id:"key-features",level:2},{value:"Blockchain",id:"blockchain",level:2},{value:"Puzzles",id:"puzzles",level:2},{value:"Spends",id:"spends",level:2},{value:"Value Added and Spent",id:"value-added-and-spent",level:2},{value:"Account Model vs Coin Set Model",id:"account-model-vs-coin-set-model",level:2},{value:"Benefits of the Account Model",id:"benefits-of-the-account-model",level:3},{value:"Benefits of the Coin Set Model",id:"benefits-of-the-coin-set-model",level:3}],h={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'In any given blockchain, one of the most fundamental questions is, "How do we keep track of the state of the whole system?" Bitcoin uses the Unspent Transaction Output (UTXO) model. Ethereum, along with many other blockchains, use the account model. Chia uses the ',(0,a.kt)("em",{parentName:"p"},"coin set")," model, which is similar to UTXO."),(0,a.kt)("p",null,"The differences between the above models will be covered in the ",(0,a.kt)("a",{parentName:"p",href:"/coin-set-vs-utxo"},"Coin Set vs UTXO page")," and the ",(0,a.kt)("a",{parentName:"p",href:"/coin-set-vs-account"},"Coin Set vs Account page"),". For now, we'll start with a brief explanation of the coin set model."),(0,a.kt)("p",null,"The mantra ",(0,a.kt)("em",{parentName:"p"},"everything is a coin")," will go a long way in helping you to understand the coin set model. There are no accounts. There are only coins."),(0,a.kt)("p",null,"Coins may only be spent once and anyone can attempt to spend them. However coins are locked with specific rules. They are written in Chialisp, a Turing-complete language with no side effects, allowing for complex functionality, including composability and interoperability between coins."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://chialisp.com/standard-transactions/"},"majority of Chia's coins"),' have one simple rule \u2013 "Anyone with the right private key can spend me."'),(0,a.kt)("h2",{id:"key-features"},"Key Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"As stated above, Chia's blockchain only understands coins. There are no accounts at the blockchain level."),(0,a.kt)("li",{parentName:"ul"},'Technically the coins do not have owners. Anyone can attempt to spend any coin. Most coins are secured such that only someone who possesses a certain public/private key pair may spend them. This person is the coin\'s de facto "owner."'),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("em",{parentName:"li"},"coin set")," is the total set of all coins on Chia's blockchain."),(0,a.kt)("li",{parentName:"ul"},"The minimum value of a coin is 0 mojos. The theoretical maximum value of a coin is around 18 million XCH (2^64-1 mojos). Each coin can be of any value within this range.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Note 1: One use case for a zero-mojo coin is to convey information. For example, upon being spent, a zero-mojo coin could make an announcement for a singleton to recreate itself"),(0,a.kt)("li",{parentName:"ul"},"Note 2: ",(0,a.kt)("a",{parentName:"li",href:"https://chialisp.com/singletons"},"Singletons")," must have an odd-numbered value, so their minimum value is 1 mojo (1 trillionth of an XCH)"))),(0,a.kt)("li",{parentName:"ul"},"The first block of Chia's blockchain introduced four coins to the coin set, with a total value of 21 million XCH. This is the pre-farm, controlled by Chia Network Inc."),(0,a.kt)("li",{parentName:"ul"},"Each additional block introduces a reward of two coins to the coin set (see the ",(0,a.kt)("a",{parentName:"li",href:"/block-rewards#farmer-vs-pool-reward"},"Block Rewards page")," for more info). For the first three years of Chia's blockchain, the targeted daily average to be introduced is 9216 XCH. This amount will be cut in half in 2024, 2027, 2030, and 2033, after which the targeted daily average will always be 576 XCH. While the exact amount introduced on any given day will vary slightly, one can predict the total amount of XCH in the coin set at any given time, with a high degree of accuracy."),(0,a.kt)("li",{parentName:"ul"},"Each coin can only be spent once. Thus, a coin has only two states: unspent and spent. (Technically, there is a third state: not created. This happens when there is a re-org and the creation transaction gets reverted. Re-orgs in Chia are rare, though possible.)"),(0,a.kt)("li",{parentName:"ul"},"A coin's value cannot be destroyed. Instead, when a coin is spent, its value is released. One or more new coins will be created in the same block, the total value of which will equal the value of the spent coin."),(0,a.kt)("li",{parentName:"ul"},"The coins themselves are highly programmable, so a wide variety of behavior is possible when a coin is spent.")),(0,a.kt)("h2",{id:"blockchain"},"Blockchain"),(0,a.kt)("p",null,"The Chia blockchain, as explained in the consensus section, is a linked list of blocks, agreed upon by nodes. Nodes also maintain a table of coins. At a low level, a coin in Chia is a record of ownership of a certain amount of XCH, which can be unlocked by providing the correct puzzle and a valid solution."),(0,a.kt)("p",null,"These 3 properties make up each coin, and when hashed together form its id:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Parent Coin Id"),(0,a.kt)("li",{parentName:"ul"},"Puzzle Hash (hash of the program)"),(0,a.kt)("li",{parentName:"ul"},"Amount (in mojos)")),(0,a.kt)("p",null,"The ID of a coin is computed by hashing together its three fields, where amount is encoded in CLVM format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-chialisp"},"(sha256 parent_coin_id puzzle_hash amount)\n")),(0,a.kt)("p",null,"Because the id is a sha256 hash, coins can never be changed. They can only be created and then spent once."),(0,a.kt)("h2",{id:"puzzles"},"Puzzles"),(0,a.kt)("p",null,"A puzzle is a type of CLVM program that outputs ",(0,a.kt)("a",{parentName:"p",href:"/conditions"},"conditions")," that determine the result of the spend."),(0,a.kt)("p",null,"Each coin has a puzzle associated with it that determines how, when, and by whom this coin can be spent. It must be chosen at the time of the coin's creation."),(0,a.kt)("p",null,"For example, if Bob wanted to pay Alice, Bob would create a coin with a puzzle (and thus a puzzle hash) which Alice knows how to unlock. Bob can create a coin worth 5 XCH using Alice's puzzle hash, so that only Alice can unlock it."),(0,a.kt)("p",null,"Puzzle hashes are addresses. When you send XCH to someone's address, you're doing this exact thing."),(0,a.kt)("h2",{id:"spends"},"Spends"),(0,a.kt)("p",null,"When Alice wants to spend her coin, she creates a spend bundle that reveals the coin she will spend, the original puzzle, and the solution to that puzzle. The solution usually involves things such as conditions (which can include recipients of the coin). In a standard transaction, Alice is the only one that knows the private key used to sign the transaction, and thus controls that coin."),(0,a.kt)("p",null,"The network has no concept of accounts, or of coin ownership. Anybody can attempt to spend any coin on the network. It's up to the puzzles to prevent coins from being stolen or spent in unintended ways."),(0,a.kt)("p",null,"The data required to spend a coin is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Coin Id"),(0,a.kt)("li",{parentName:"ul"},"Puzzle (serialized CLVM program)"),(0,a.kt)("li",{parentName:"ul"},"Solution (serialized CLVM value)")),(0,a.kt)("p",null,"A coin also has the option of requiring an aggregate signature in order to spend it."),(0,a.kt)("p",null,"You can read more on the ",(0,a.kt)("a",{parentName:"p",href:"/spend-bundles"},"Spend Bundle page"),"."),(0,a.kt)("h2",{id:"value-added-and-spent"},"Value Added and Spent"),(0,a.kt)("p",null,'Value may only be added to the coin set via the pre-farm (a one-time occurrence) and block rewards (which occur with each transaction block). Value can never be destroyed, though it can be "bricked," for example by sending it to an address for which nobody possesses the private keys.'),(0,a.kt)("p",null,"Typically, in a block's combined spend bundle, value added will be equal to value spent, other than the block rewards. By definition, there are two possible exceptions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Value added > value spent -- This is not allowed, so the transaction will be rejected. The rejection will usually happen at the mempool level, though a malicious actor could write their own mempool to accept the transaction, in which case the blockchain will reject it."),(0,a.kt)("li",{parentName:"ul"},"Value added < value spent -- This is allowed, so the transaction will succeed. If the value added is less than the value spent the remaining value will be rewarded to the farmer of the block containing the transaction awarded as a tip (you probably don't want to do that!).")),(0,a.kt)("h2",{id:"account-model-vs-coin-set-model"},"Account Model vs Coin Set Model"),(0,a.kt)("p",null,"In the account model, which is used by Ethereum and many other systems, balances are kept in accounts. These are permanent data structures which do not get destroyed when they send funds. There are some tradeoffs between the account model and the coin set model (similar to Bitcoin's UTXO model)."),(0,a.kt)("h3",{id:"benefits-of-the-account-model"},"Benefits of the Account Model"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All logic and state can be stored in one program and one account, simplifying development."),(0,a.kt)("li",{parentName:"ul"},"It is simple to combine multiple transactions that affect the same dApp in one block."),(0,a.kt)("li",{parentName:"ul"},"Users and wallets only have to keep track of one account for all of their balances (although the UTXO model can support this).")),(0,a.kt)("h3",{id:"benefits-of-the-coin-set-model"},"Benefits of the Coin Set Model"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Very parallelizable since each coin spend is independent."),(0,a.kt)("li",{parentName:"ul"},"Coin value is split between many coins, increasing sandboxing and security. One program cannot call or affect another."),(0,a.kt)("li",{parentName:"ul"},"Deterministic operation of every spend."),(0,a.kt)("li",{parentName:"ul"},"More efficient storage of state (although this depends on implementation)."),(0,a.kt)("li",{parentName:"ul"},"Increased privacy, since one user usually has many coins."),(0,a.kt)("li",{parentName:"ul"},"Re-applying mempool transactions after a new block is not necessary due to deterministic results.")))}d.isMDXComponent=!0}}]);