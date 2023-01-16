"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[2006],{3905:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>h});var a=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,a,r=function(e,t){if(null==e)return{};var l,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var f=a.createContext({}),s=function(e){var t=a.useContext(f),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},u=function(e){var t=s(e.components);return a.createElement(f.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var l=e.components,r=e.mdxType,n=e.originalType,f=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(l),k=r,h=c["".concat(f,".").concat(k)]||c[k]||g[k]||n;return l?a.createElement(h,i(i({ref:t},u),{},{components:l})):a.createElement(h,i({ref:t},u))}));function h(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=l.length,i=new Array(n);i[0]=k;var o={};for(var f in t)hasOwnProperty.call(t,f)&&(o[f]=t[f]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<n;s++)i[s]=l[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,l)}k.displayName="MDXCreateElement"},108:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>f,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var a=l(7462),r=(l(7294),l(3905));const n={id:"offers-gui",slug:"/guides/offers-gui-tutorial",title:"Offers - GUI"},i="Offers tutorial (GUI)",o={unversionedId:"guides/tutorials/offers-gui",id:"guides/tutorials/offers-gui",title:"Offers - GUI",description:"This tutorial covers Chia offers using the official wallet's graphical user interface.",source:"@site/docs/guides/tutorials/offers-gui.md",sourceDirName:"guides/tutorials",slug:"/guides/offers-gui-tutorial",permalink:"/guides/offers-gui-tutorial",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/guides/tutorials/offers-gui.md",tags:[],version:"current",frontMatter:{id:"offers-gui",slug:"/guides/offers-gui-tutorial",title:"Offers - GUI"},sidebar:"guides",previous:{title:"Application Structure",permalink:"/guides/application-structure-tutorial"},next:{title:"Offers - CLI",permalink:"/guides/offers-cli-tutorial"}},f={},s=[{value:"Contents:",id:"contents",level:2},{value:"Add a new CAT wallet",id:"add-a-new-cat-wallet",level:2},{value:"Create a single-token offer",id:"create-a-single-token-offer",level:2},{value:"Accept a single-token offer",id:"accept-a-single-token-offer",level:2},{value:"Cancel an offer",id:"cancel-an-offer",level:2},{value:"Create a multiple-token offer",id:"create-a-multiple-token-offer",level:2},{value:"Accept a multiple-token offer",id:"accept-a-multiple-token-offer",level:2},{value:"Potential issues",id:"potential-issues",level:2},{value:"Contents:",id:"contents-1",level:2},{value:"Maker doesn&#39;t have enough money",id:"maker-doesnt-have-enough-money",level:3},{value:"Taker doesn&#39;t have enough money",id:"taker-doesnt-have-enough-money",level:3},{value:"Taker accepts an unknown CAT offer",id:"taker-accepts-an-unknown-cat-offer",level:3},{value:"Taker attempts to accept an invalid offer",id:"taker-attempts-to-accept-an-invalid-offer",level:3},{value:"Maker cancels an offer locally, Taker accepts the offer",id:"maker-cancels-an-offer-locally-taker-accepts-the-offer",level:3},{value:"Whole coins must be reserved",id:"whole-coins-must-be-reserved",level:3},{value:"Offer involving a CAT1 is invalid",id:"offer-involving-a-cat1-is-invalid",level:3},{value:"Further reading",id:"further-reading",level:2}],u={toc:s};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"offers-tutorial-gui"},"Offers tutorial (GUI)"),(0,r.kt)("p",null,"This tutorial covers Chia offers using the official wallet's graphical user interface."),(0,r.kt)("p",null,"See also our ",(0,r.kt)("a",{parentName:"p",href:"/guides/offers-cli-tutorial"},"command line tutorial")," and our ",(0,r.kt)("a",{parentName:"p",href:"https://chialisp.com/offers"},"reference document"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'This tutorial occasionally references a token called "CAT King Cole" (CKC). This token is for demonstration purposes only.')),(0,r.kt)("h2",{id:"contents"},"Contents:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#add-a-new-cat-wallet"},"Add a new CAT wallet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#create-a-single-token-offer"},"Create a single-token offer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#accept-a-single-token-offer"},"Accept a single-token offer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#cancel-an-offer"},"Cancel an offer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#create-a-multiple-token-offer"},"Create a multiple-token offer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#accept-a-multiple-token-offer"},"Accept a multiple-token offer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#potential-issues"},"Potential issues")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#further-reading"},"Further reading"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"add-a-new-cat-wallet"},"Add a new CAT wallet"),(0,r.kt)("p",null,"In order to create an offer, you must have a wallet for any Chia Asset Tokens (CATs) you want to acquire. If you don't have such a wallet, it's easy to add one."),(0,r.kt)("p",null,"For example, here's how to add the Stably USD (USDS) token:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Click "+ ADD TOKEN".')),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/wallet_add/1_xch_balance.png",alt:"XCH balance before offer"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},'Click the "USDS / Stably USD" button.')),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/wallet_add/2_add_usds.png",alt:"Add USDS wallet"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},'"Adding USDS token" will be displayed while your new wallet is being created. This will take some time.')),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/wallet_add/3_adding_usds_token.png",alt:"Add USDS wallet"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"You now have a USDS wallet, in addition to your standard Chia wallet.")),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/wallet_add/4_two_wallets.png",alt:"Two wallets"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"create-a-single-token-offer"},"Create a single-token offer"),(0,r.kt)("p",null,"In this example, we'll offer 0.1 XCH in exchange for 10 USDS."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Click "MANAGE OFFERS".')),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/offer_single_create/1_usds_wallet.png",alt:"Add USDS wallet"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},'Click "CREATE AN OFFER".')),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/offer_single_create/2_create_offer.png",alt:"Create offer"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},'The "Create an Offer" dialog will appear. When you select an asset type to be offered, the dialog will display your spendable balance. After you have filled in the details of your offer, you will also be shown the exchange rate of the assets you want to trade, using the values you have entered.',(0,r.kt)("br",null),(0,r.kt)("br",null),'When you are satisfied with your offer, click "SAVE OFFER".')),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/offer_single_create/3_save_offer.png",alt:"Save offer"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Choose a name and location for your offer file.",(0,r.kt)("br",null),"(Depending on your operating system, this dialog may appear different to what is shown.)")),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/offer_single_create/4_save_dialog.png",alt:"Save offer"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"A new dialog will appear, suggesting a few locations to share your offer. This is strictly optional. You could also directly share your offer file with a friend, or on social media, or anywhere else you want.",(0,r.kt)("br",null),(0,r.kt)("br",null),'That said, for this tutorial we\'ll click the "OFFERBIN" button.')),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/offer_single_create/5_share_offer.png",alt:"Share offer"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},'You will be shown the details of your offer once again. Click the "SHARE" button to share your offer.')),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/offer_single_create/6_share_on_offer_bin.png",alt:"Share on offer bin"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Your offer has now been shared on Offer Bin, a website dedicated to sharing Chia offers. Offer Bin is not affiliated with Chia Network Inc.",(0,r.kt)("br",null),(0,r.kt)("br",null),"You now have the option to view your offer on Offer Bin, copy the URL to share in more locations, or simply wait for someone to accept your offer.")),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/offer_single_create/7_view_on_offer_bin.png",alt:"View on offer bin"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},'There is now one offer in the "Manage Offers" dialog. Its status is "Pending Accept".')),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/offer_single_create/8_pending_accept.png",alt:"Pending accept"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"Congratulations! You have created an offer. A few things to note:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Your wallet has reserved the coin(s) necessary to complete the offer."),(0,r.kt)("li",{parentName:"ul"},"The blockchain has not recorded this offer."),(0,r.kt)("li",{parentName:"ul"},"You can distribute the offer file wherever you want."),(0,r.kt)("li",{parentName:"ul"},"Anyone who sees the offer file can attempt to accept it.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"accept-a-single-token-offer"},"Accept a single-token offer"),(0,r.kt)("p",null,"This example will use a different computer to accept the offer that was created in the previous example. Keep in mind, offers are accepted on a first-come, first-served basis."),(0,r.kt)("br",null),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'From your light wallet\'s main dialog, click "MANAGE OFFERS".')),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/offer_single_accept/1_chia_wallet.png",alt:"Chia wallet"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},'Click "VIEW AN OFFER".')),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/offer_single_accept/2_view_an_offer.png",alt:"View an offer"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"You can either paste the contents of an offer file, or load the whole file. In this example, we'll do the latter.")),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/offer_single_accept/3_select_offer_file.png",alt:"Select offer file"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"A new dialog will open. This may look different than what is pictured, depending on your operating system.",(0,r.kt)("br",null),(0,r.kt)("br",null),'Find the offer file and click "Open". Keep in mind, the name of the offer file doesn\'t necessarily reflect the actual offer.')),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/offer_single_accept/4_open.png",alt:"Open"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"You'll be shown a summary of the offer. You can add an optional fee (payable in XCH) if you want Chia's blockchain to prioritize your offer. If you agree with the terms, click \"ACCEPT OFFER\".")),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/offer_single_accept/5_accept_offer.png",alt:"Accept offer"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},'You\'ll be given a chance to cancel your acceptance of the offer. Click "ACCEPT OFFER" to continue.')),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/offer_single_accept/6_accept_offer.png",alt:"Accept offer"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},'After a few seconds, you\'ll receive a "Success" message. This means the offer has been completed and sent to the blockchain for confirmation.')),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/offer_single_accept/7_success.png",alt:"Success"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},'The offer is now in the "Pending Confirm" state.')),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/offer_single_accept/8_pending_confirm.png",alt:"Pending confirm"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"The offer will take a few minutes to be confirmed. Note that this time can vary, depending on how full the mempool is and whether you included a fee upon accepting the offer.")),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/offer_single_accept/9_confirmed.png",alt:"Confirmed"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},"After the offer has been confirmed, your new balance will be shown in your wallet.")),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/offer_single_accept/10_wallet_post_trade.png",alt:"Wallet post trade"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"cancel-an-offer"},"Cancel an offer"),(0,r.kt)("p",null,"You can cancel any offer you created, as long as it has not already been accepted."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'In the "Manage Offers" dialog, locate the offer you want to cancel. It must be in the "Pending Accept" state.',(0,r.kt)("br",null),(0,r.kt)("br",null),'Click the three dots in the "Actions" column.')),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/cancel/1_actions.png",alt:"Offer actions"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},'Click "Cancel Offer".')),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/cancel/2_cancel.png",alt:"Cancel an offer"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},'The "Cancel Offer" dialog will appear. The default option is to cancel on the blockchain. This option will use your wallet to spend the coins you had offered, and create new coins of the same type and value. This process does not involve taking the other end of the offer, so you will not receive any funds of the type you had requested. The end result is that your wallet\'s balance will be the same as it was before you made the offer (minus any transaction fees).')),(0,r.kt)("p",null,"The advantage of canceling in this manner is that it ensures that nobody can accept your offer in the future. The disadvantages are that you will need to wait a few minutes for your transaction to be processed, and that you may have to pay a transaction fee."),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/cancel/3_cancel_on_chain.png",alt:"Cancel on chain"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"If you uncheck the checkbox, your wallet will un-reserve the coins for your offer. However, nothing will be recorded on the blockchain. If you have copied your offer file elsewhere, someone could still accept it.")),(0,r.kt)("p",null,"The advantages of this option are that it will cancel your offer instantly, and there's no need to include a fee."),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/cancel/4_cancel_off_chain.png",alt:"Cancel off chain"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},'If you left the checkbox checked in the previous step, your offer will enter the "Pending Cancel" state while the cancellation is being recorded on the blockchain. This could take several minutes.')),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/cancel/5_pending_cancel.png",alt:"Pending cancel"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},'When your order has been successfully canceled, it will enter the "Cancelled" state. Your funds are now available in your wallet.')),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/cancel/6_cancelled.png",alt:"Cancelled"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"create-a-multiple-token-offer"},"Create a multiple-token offer"),(0,r.kt)("p",null,"It's easy to create an offer with multiple tokens, on one or both ends of the trade."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'In the "Create an Offer" dialog, click the "+" to add more tokens. In order for the "+" to be accessible, you must have a wallet with a token that has not been used in this offer.')),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/offer_multiple_create/1_plus_buttons.png",alt:"Plus buttons"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},'When you are satisfied with the number of tokens being offered and received, click "SAVE OFFER".')),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/offer_multiple_create/2_save_multiple_offer.png",alt:"Save multiple offer"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},'Your new offer, including all tokens, is now in the "Pending Accept" state.')),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/offer_multiple_create/3_manage_multiple.png",alt:"Manage multiple offer"})),(0,r.kt)("p",null,"You now free to share your offer file anywhere you wish, just as you were with the single-token offer."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"accept-a-multiple-token-offer"},"Accept a multiple-token offer"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The process to accept a multiple-token offer is the same as for a single-token offer.")),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/offer_multiple_accept/1_multiple_accept_dialog.png",alt:"Multiple accept dialog"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"The confirmation dialog shows all assets involved in the offer.")),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/offer_multiple_accept/2_confirmed.png",alt:"Multiple confirmation dialog"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"After accepting the offer, a new wallet will be created for any tokens the Taker didn't already have.")),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/offer_multiple_accept/3_ckc_wallet.png",alt:"CKC wallet"})),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/offer_multiple_accept/4_usds_wallet.png",alt:"USDS wallet"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"potential-issues"},"Potential issues"),(0,r.kt)("p",null,"This section will detail a non-comprehensive list of issues you might encounter while making or taking offers."),(0,r.kt)("h2",{id:"contents-1"},"Contents:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#maker-doesnt-have-enough-money"},"Maker doesn't have enough money")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#taker-doesnt-have-enough-money"},"Taker doesn't have enough money")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#taker-accepts-an-unknown-cat-offer"},"Taker accepts an unknown CAT offer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#taker-attempts-to-accept-an-invalid-offer"},"Taker attempts to accept an invalid offer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#maker-cancels-an-offer-locally-taker-accepts-the-offer"},"Maker cancels an offer locally, Taker accepts the offer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#whole-coins-must-be-reserved"},"Whole coins must be reserved")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#offer-involving-a-cat1-is-invalid"},"Offer involving a CAT1 is invalid"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"maker-doesnt-have-enough-money"},"Maker doesn't have enough money"),(0,r.kt)("p",null,"Let's say a Maker has wallets for XCH and CKC, with no money in either of them."),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/01_xch_wallet.png",alt:"0 XCH wallet"})),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/02_ckc_wallet.png",alt:"0 CKC wallet"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"The maker attempts to make an ambitious offer: 100 XCH for 1 million CKC."),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/03_100xch_for_1mckc.png",alt:"Offer 100 XCH for 1 million CKC"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"However, the Maker does not have enough money to create this offer. As a result, an Error is displayed:"),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/04_100xch_for_1mckc_fail.png",alt:"Amount exceeds spendable balance"})),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"taker-doesnt-have-enough-money"},"Taker doesn't have enough money"),(0,r.kt)("p",null,"Let's say the Taker has a wallet with no money in it:"),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/01_xch_wallet.png",alt:"0 XCH wallet"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"And there's an outstanding offer requesting 0.1 XCH for 10,000 CKC:"),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/05_accept_offer.png",alt:"Accept offer"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"However, the Taker does not have enough money to accept this offer. As a result, an Error is displayed:"),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/06_insufficient_funds.png",alt:"Insufficient funds"})),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"taker-accepts-an-unknown-cat-offer"},"Taker accepts an unknown CAT offer"),(0,r.kt)("p",null,"You should be extra careful before accepting offers for unknown CATs. This is because the offer ",(0,r.kt)("em",{parentName:"p"},"might")," be a scam where a different -- and worthless -- token is actually being offered."),(0,r.kt)("p",null,"Here's how the scam would work:"),(0,r.kt)("p",null,"Let's say a potential Taker has 0.1 XCH in their wallet."),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/07_0.1xch_wallet.png",alt:"0.1 XCH wallet"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"There is an offer of 0.25 Shibe (an unknown CAT) in exchange for 0.1 XCH."),(0,r.kt)("p",null,"Here's the offer from the Taker's perspective:"),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/08_0.25_shibe_for_0.1_xch.png",alt:"Offer shibe for XCH"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"The Taker decides to accept the offer."),(0,r.kt)("p",null,"There is a warning dialog about the unknown cat, after which the offer is confirmed successfully:"),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/09_accept_unknown_warning.png",alt:"Unknown CAT warning"})),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/10_unknown_success.png",alt:"Unknown CAT success"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"Notice that the offer file was named ",(0,r.kt)("inlineCode",{parentName:"p"},"0.25_Shibe_for_0.1_XCH.offer"),", but the file name itself does ",(0,r.kt)("em",{parentName:"p"},"not")," dictate the contents of the offer. The Taker may have inadvertently accepted an offer for a worthless token!"),(0,r.kt)("p",null,"Luckily, it is easy to avoid this scam by cross-referencing the unknown CAT's ID before accepting the offer. In this case, the Taker should verify from a trusted source that ",(0,r.kt)("inlineCode",{parentName:"p"},"4ac6a35e5fecb50d85604b19250a942afdc81876fe11db1f9d970c95dcf2c43f")," indeed corresponds to Shibe."),(0,r.kt)("p",null,"Chia does install a list of known CATs by default, so this scam should be rare, but you should always be diligent in scrutinizing offers for unknown CATs."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"taker-attempts-to-accept-an-invalid-offer"},"Taker attempts to accept an invalid offer"),(0,r.kt)("p",null,"If the Maker has canceled the offer on the blockchain, or a Taker has already taken the offer, it is no longer valid."),(0,r.kt)("p",null,"Any potential Takers will be conveyed this information upon viewing the offer. For example:"),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/11_invalid_offer.png",alt:"Invalid offer"})),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"maker-cancels-an-offer-locally-taker-accepts-the-offer"},"Maker cancels an offer locally, Taker accepts the offer"),(0,r.kt)("p",null,"This example will demonstrate that if you need to cancel an offer, you should always do so on-chain unless you are certain the offer file has not left your computer."),(0,r.kt)("p",null,"Let's say a Maker has 0.1 XCH and 1 USDS:"),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/12_0.1xch_wallet.png",alt:"0.1 XCH in wallet"})),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/13_1usds_wallet.png",alt:"1 USDS in wallet"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"The Maker offers 0.1 XCH in exchange for 10 USDS:"),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/14_view_offer_0.1xch_10usds.png",alt:"Offer 0.1 XCH for 10 USDS"})),(0,r.kt)("br",null),(0,r.kt)("p",null,'The Maker then decides to cancel the offer, and unchecks the "Cancel on blockchain" checkbox:'),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/15_cancel_off_chain.png",alt:"Cancel offer off chain"})),(0,r.kt)("br",null),(0,r.kt)("p",null,'The offer\'s state is immediately changed to "Cancelled".'),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/16_canceled_off_chain.png",alt:"Canceled offer off chain"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"After the offer has been canceled, a Taker notices the offer file and decides to accept it:"),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/17_accept_a_canceled_offer.png",alt:"Accept a canceled offer"})),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/18_confirmed_canceled_offer.png",alt:"Confirm a canceled offer"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"Later, the Maker notices that the offer has gone through, despite having been canceled:"),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/19_0xch_wallet.png",alt:"Post-offer 0 XCH"})),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/20_11usds_wallet.png",alt:"Post-offer 11 USDS"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"If the offer had been canceled on-chain, the reserved coins would have been spent. At that point, even if someone else had gotten access to the offer file, the offer itself would've been invalid."),(0,r.kt)("p",null,"The lesson here is do ",(0,r.kt)("em",{parentName:"p"},"not"),' uncheck the "Cancel on blockchain" checkbox unless you\'re certain the offer file has never left your computer.'),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"whole-coins-must-be-reserved"},"Whole coins must be reserved"),(0,r.kt)("p",null,"Under the coin set model, coins can be of any value. When an offer is created, the Maker's wallet must reserve enough coins to meet the requirements of the offer."),(0,r.kt)("p",null,"The coin set model ",(0,r.kt)("a",{parentName:"p",href:"/coin-set-intro"},"has many advantages")," over the account model, but it can create some situations that take time to understand."),(0,r.kt)("p",null,"For example, let's say a Maker has 1 XCH and 0 USDS:"),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/21_1xch_wallet.png",alt:"1 XCH in wallet"})),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/22_0usds_wallet.png",alt:"0 USDS in wallet"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"The Maker creates an offer of 0.1 XCH for 10 USDS."),(0,r.kt)("p",null,"The Maker received the XCH in one lump sum, so there is a single coin worth 1 XCH in the Maker's wallet."),(0,r.kt)("p",null,"This is viewable in the offer's details:"),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/23_pending_accept.png",alt:"Offer in Pending Accept state"})),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/24_show_details.png",alt:"Show offer's details"})),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/25_one_coin.png",alt:"One coin used for offer"}),(0,r.kt)("figcaption",null,(0,r.kt)("em",null,"Scroll to the bottom to view coins reserved for the offer."))),(0,r.kt)("br",null),(0,r.kt)("p",null,"While the offer is pending, the Maker attempts to send 0.1 XCH to another address."),(0,r.kt)("p",null,"Notice that while the Total Balance is 1, the Spendable Balance is 0."),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/26_cant_send_offer_pending.png",alt:"Can't send while offer pending"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"This should be possible -- the Maker has 0.9 XCH, even after taking the offer into account. The reason for the Exception is because the Maker only has a single coin worth 1 XCH, and that coin has already been reserved for the offer."),(0,r.kt)("p",null,"It's similar to using a $10 bill to buy something for $1. Before you receive your change, you can't buy anything else. On the other hand, if you had started with two $5 bills and bought the same $1 item, you could've purchased something else while waiting for your change."),(0,r.kt)("p",null,"The Maker can work around this issue by canceling the offer, then breaking the single large coin into multiple small ones. One simple way to do this would be to send money to him/herself:"),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/27_send_0.1xch_to_self.png",alt:"Maker sends money to him/herself"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"The Maker can then recreate the same offer. The new offer's details show a coin worth 0.9 XCH being reserved:"),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/28_0.1_coin_in_offer.png",alt:"New details of Maker's offer"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"The Maker's wallet shows a Total Balance of 1 XCH. This is the same as before, but there are now two coins that sum to 1 XCH."),(0,r.kt)("p",null,"Because there are now two coins in the Maker's wallet, and only one (worth 0.9 XCH) has been reserved for the offer, the Spendable Balance is 0.1 XCH:"),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/29_0.1xch_available.png",alt:"Maker has 0.1 XCH available"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"The Maker can now send 0.1 XCH to another wallet, even while the offer is still pending:"),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/30_send_while_offer_pending.png",alt:"Successful send while offer pending"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"One of the Maker's coins has been reserved for the offer, and the other has been sent to another wallet. The Maker can further break apart the large coin as needed."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"offer-involving-a-cat1-is-invalid"},"Offer involving a CAT1 is invalid"),(0,r.kt)("p",null,"The CAT1 Standard reached its end of life (EOL) with block 2,311,760 in July 2022. Any offers that include a CAT1 on either side of the trade will result in an invalid offer error."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"further-reading"},"Further reading"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.chia.net/2022/01/12/chia-offers-are-here-en.html"},"Offers blog entry")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://chialisp.com/offers"},"Offers reference")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/guides/offers-cli-tutorial"},"CLI tutorial")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/coin-set-intro"},"Info on the coin set model"))))}c.isMDXComponent=!0}}]);