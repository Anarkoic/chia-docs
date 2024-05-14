"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[7955],{7493:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var s=t(5893),i=t(1151),o=t(4866),a=t(5162);const l={slug:"/guides/cat-creation-tutorial",title:"CAT Creation Tutorial"},r=void 0,c={id:"guides/cat/cat-creation-tutorial",title:"CAT Creation Tutorial",description:"The CAT standard allows you to create fungible tokens on the Chia blockchain. This step-by-step guide will go through creating your own CATs. For info on how CATs are built at the Chialisp level, see our CAT primitive page.",source:"@site/docs/guides/cat/cat-creation-tutorial.md",sourceDirName:"guides/cat",slug:"/guides/cat-creation-tutorial",permalink:"/guides/cat-creation-tutorial",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/guides/cat/cat-creation-tutorial.md",tags:[],version:"current",frontMatter:{slug:"/guides/cat-creation-tutorial",title:"CAT Creation Tutorial"},sidebar:"guides",previous:{title:"3. Token Reissuance",permalink:"/guides/cat2-issuance"},next:{title:"CR-CAT Creation Tutorial",permalink:"/guides/cr-CAT-tutorial"}},h={},d=[{value:"Introduction",id:"introduction",level:2},{value:"CAT Issuance Granularity",id:"cat-issuance-granularity",level:2},{value:"Setting up your Chia Environment",id:"setting-up-your-chia-environment",level:2},{value:"CAT Admin Tool",id:"cat-admin-tool",level:2},{value:"Creating a Single Issuance CAT",id:"creating-a-single-issuance-cat",level:2},{value:"Creating a Multiple Issuance CAT",id:"creating-a-multiple-issuance-cat",level:2},{value:"Add a CAT to Your Wallet",id:"add-a-cat-to-your-wallet",level:2},{value:"Preparing for Mainnet",id:"preparing-for-mainnet",level:2},{value:"Conclusion",id:"conclusion",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The CAT standard allows you to create fungible tokens on the Chia blockchain. This step-by-step guide will go through creating your own CATs. For info on how CATs are built at the Chialisp level, see our ",(0,s.jsx)(n.a,{href:"https://chialisp.com/cats",children:"CAT primitive page"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Alternatively, if you're looking for non-fungible tokens on Chia, check out our ",(0,s.jsx)(n.a,{href:"/guides/nft-intro",children:"NFT guide"}),"."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"Welcome to the world of CATs! We're excited to have you here, and we can't wait to see the creative ideas you come up with."}),"\n",(0,s.jsx)(n.p,{children:"This tutorial will help you jump right in and get started with issuing your own CATs. To minimize your risk of running into unexpected results, we recommend that you do following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Generate a new public/private key pair for each CAT you issue."}),"\n",(0,s.jsx)(n.li,{children:"Test thoroughly on testnet before issuing your CAT to mainnet."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For any questions regarding this tutorial, head over to the #chialisp channel on our ",(0,s.jsx)(n.a,{href:"https://discord.gg/chia",children:"Discord"})," chatroom, where there are lots of friendly folks who can help you."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"cat-issuance-granularity",children:"CAT Issuance Granularity"}),"\n",(0,s.jsx)(n.p,{children:"CAT denominations, as well as the rules behind issuance and melting, can take some getting used to. Here are a few things to keep in mind before you issue your CAT:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Most Chia wallets choose to display their value in XCH. However, this is a purely cosmetic choice because Chia's blockchain only knows about mojos. One XCH is equal to one trillion (1,000,000,000,000) mojos."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In a similar vein, Chia Network Inc. has made the design decision to map 1 CAT to 1000 mojos. This ratio will be the same for all CATs."}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["Theoretically, it would be possible to set the CAT",":mojo"," ratio to something other than 1:1000 for a specific CAT, but we strongly recommend against doing this. The Chia reference wallet will not support CATs with a ratio other than 1:1000. Additionally, if you created your own wallet with support for different ratios, users of this wallet would almost certainly be confused and accidentally spend too much or too little money, by multiple orders of magnitude. Please don't attempt this."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The melt value of a single token is 1000 mojos. This remains true regardless of the token's face value or its circulating supply."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"A token's face value and its melt value are not necessarily correlated, let alone matched."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"With one XCH, you can issue 1 billion CATs. The face value of these tokens could be zero, or multiple XCH, or anywhere in between. This value is decided by the market -- it's worth whatever someone is willing to pay for it. The value of the tokens has nothing to do with the underlying XCH, other than their 1000-mojo melt value."}),"\n",(0,s.jsxs)(n.p,{children:["These concepts are discussed in greater detail in our ",(0,s.jsx)(n.a,{href:"https://chialisp.com/cats#valuation",children:"CAT primitive page"}),"."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"setting-up-your-chia-environment",children:"Setting up your Chia Environment"}),"\n",(0,s.jsx)(n.p,{children:"Cat issuance comes in two phases. First, you will test your issuance on a testnet. Once ready, you will issue on mainnet."}),"\n",(0,s.jsx)(n.p,{children:"For this tutorial, we'll use testnet11."}),"\n",(0,s.jsx)(n.p,{children:"Ensure that you have Python 3.7 or later by running:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Linux/MacOS -- ",(0,s.jsx)(n.code,{children:"python3 --version"})]}),"\n",(0,s.jsxs)(n.li,{children:["Windows -- ",(0,s.jsx)(n.code,{children:"python --version"})]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Install the latest version of Chia's reference wallet. For more info, see our ",(0,s.jsx)(n.a,{href:"/installation",children:"installation guide"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Configure Chia to run on testnet11. For more info, see our ",(0,s.jsx)(n.a,{href:"/guides/crash-course/introduction#getting-on-testnet",children:"testnet documentation"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Start Chia's reference wallet GUI. The command you use will depend on your OS, as well as whether you used a binary installer or installed from source. If you need help, see the installation guide."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["When using the GUI, you have the option of running in ",(0,s.jsx)(n.code,{children:"Farming Mode"})," or ",(0,s.jsx)(n.code,{children:"Wallet Mode"}),". Both of these options will work for creating CATs. ",(0,s.jsx)(n.code,{children:"Farming Mode"})," will be faster if you already have a synced full node, but this is not necessary for CAT issuance."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["You can also run Chia's reference wallet from a ",(0,s.jsx)(n.a,{href:"/installation#cli",children:"command line"})," if you prefer."]})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add a new wallet if you have not already done so."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["You will need to have a sufficient number of mojos for your CAT issuance and transaction fee(s). You can request some TXCH from the ",(0,s.jsx)(n.a,{href:"https://testnet11-faucet.chia.net",children:"Testnet11 faucet"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Before issuing a CAT, you will need to have a synced wallet, as demonstrated by the green checkmark inside the red circle in this image:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("img",{src:"/img/cat/01_cat.png",alt:"Synced wallet"})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.p,{children:"Once you have a synced wallet and some TXCH, you are ready to run the CAT admin tool."}),"\n",(0,s.jsx)(n.h2,{id:"cat-admin-tool",children:"CAT Admin Tool"}),"\n",(0,s.jsx)(n.p,{children:"Now we will set up the CAT admin tool, which will help you to issue your CATs:"}),"\n",(0,s.jsxs)(o.Z,{defaultValue:"mac",groupId:"os",values:[{label:"Linux/macOS",value:"mac"},{label:"Windows",value:"windows"}],children:[(0,s.jsxs)(a.Z,{value:"mac",children:[(0,s.jsx)(n.p,{children:"Your Linux installation may not come with Python's development tools installed by default. To be sure that these tools are installed, run:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install -y build-essential python3-dev\n"})}),(0,s.jsx)(n.p,{children:"Next, clone the tool's GitHub repository:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/Chia-Network/CAT-admin-tool.git -b main --recurse-submodules\n"})}),(0,s.jsx)(n.p,{children:"Change to the admin tool's directory:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd CAT-admin-tool\n"})}),(0,s.jsx)(n.p,{children:"Create and activate a virtual environment:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"python3 -m venv venv\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:". ./venv/bin/activate\n"})}),(0,s.jsx)(n.p,{children:"Install the prerequisites:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"python3 -m pip install --upgrade pip setuptools wheel\n"})}),(0,s.jsx)(n.p,{children:"Install the tool:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install .\n"})}),(0,s.jsx)(n.p,{children:"Install chia dev tools:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install chia-dev-tools --no-deps\n"})}),(0,s.jsx)(n.p,{children:"Install pytest:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install pytest\n"})})]}),(0,s.jsxs)(a.Z,{value:"windows",children:[(0,s.jsx)(n.p,{children:"Next, clone the tool's GitHub repository:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/Chia-Network/CAT-admin-tool.git -b main --recurse-submodules\n"})}),(0,s.jsx)(n.p,{children:"Change to the admin tool's directory:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd CAT-admin-tool\n"})}),(0,s.jsx)(n.p,{children:"Create and activate a virtual environment:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"python -m venv venv\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:".\\venv\\Scripts\\Activate.ps1\n"})}),(0,s.jsx)(n.p,{children:"Install the prerequisites:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install --upgrade pip setuptools wheel\n"})}),(0,s.jsx)(n.p,{children:"Install the tool:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install .\n"})}),(0,s.jsx)(n.p,{children:"Install Chia dev tools:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install chia-dev-tools --no-deps\n"})}),(0,s.jsx)(n.p,{children:"Install pytest:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install pytest\n"})}),(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"You might receive an error such as ERROR: Failed building wheel for CAT-admin-tool. This is likely safe to ignore. As long as you can run cats --help without errors, the tool has been installed properly."})})]})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.p,{children:"Your environment should be all set, but let's make sure:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"cats --help"}),". You should get a usage statement."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"cdv --help"}),". You should get another usage statement."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Your environment is now set up and you are ready to start issuing CATs!"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"creating-a-single-issuance-cat",children:"Creating a Single Issuance CAT"}),"\n",(0,s.jsx)(n.p,{children:"To get started, you will create a single-issuance CAT. This is the default way to issue a CAT. It's also the simplest. It contains a TAIL that only allows the CAT to issue tokens once."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["A TAIL is a Chialisp program that defines the rules for issuing and melting tokens. Learn more about the ",(0,s.jsx)(n.a,{href:"https://chialisp.com/cats/#tail",children:"Token and Asset Issuance Limitations program"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:"A CAT with a single-issuance TAIL will be useful for anyone who wants to create a token with a guaranteed fixed supply."}),"\n",(0,s.jsx)(n.p,{children:"First, figure out how many tokens you want to issue. Because creating a single token takes 1,000 mojos, you will multiply your supply by 1,000 to figure out how much TXCH (or XCH on mainnet) is needed. For example, if you want to issue 1 million tokens, you'll need 1 billion mojos (1/1000 of a TXCH/XCH)."}),"\n",(0,s.jsxs)(n.p,{children:["Take note of your ",(0,s.jsx)(n.em,{children:"Receive Address"})," in the Chia GUI. (Alternatively, run ",(0,s.jsx)(n.code,{children:"chia wallet get_address"})," from a terminal window.) You'll need this address for the next step."]}),"\n",(0,s.jsx)(n.p,{children:"After confirming you are within the admin tool directory, run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cats --tail ./reference_tails/genesis_by_coin_id.clsp.hex --send-to <your receive address> --amount <mojos> -m <fee in mojos> --as-bytes --select-coin\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["We recommend that you include a fee with your transaction. This fee will ensure that your transaction is processed in front of any dust in the mempool. Whether you're running on testnet or mainnet, the recommended fee amount is 100 million mojos (",(0,s.jsx)(n.code,{children:"-m 100000000"}),"). Even though you will run the ",(0,s.jsx)(n.code,{children:"cats"})," command multiple times, the fee will only be applied once when the transaction is pushed to the network."]})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"--select-coin"})," flag will choose a coin from your wallet for issuing your tokens. The final line of the output will be ",(0,s.jsx)(n.code,{children:"Name: <Coin ID>"}),". You'll use the coin ID value in the next step."]}),"\n",(0,s.jsxs)(n.p,{children:["Run the same command again, this time removing the ",(0,s.jsx)(n.code,{children:"--select-coin"})," flag and adding a new flag, ",(0,s.jsx)(n.code,{children:"--curry <Coin ID>"}),". It's very important to preface the coin ID with ",(0,s.jsx)(n.code,{children:"0x"})," here to make CLVM interpret the value as bytes and not a string. Here's the full command to run:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cats --tail ./reference_tails/genesis_by_coin_id.clsp.hex --send-to <your receive address> --amount <mojos> -m <fee in mojos> --as-bytes --curry 0x<Coin ID>`\n"})}),"\n",(0,s.jsx)(n.p,{children:"If everything's good so far, this command will give the following output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"The transaction has been created, would you like to push it to the network? (Y/N)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Enter ",(0,s.jsx)(n.code,{children:"Y"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The output will be ",(0,s.jsx)(n.code,{children:"Asset ID: <Asset ID>"}),". Copy the ",(0,s.jsx)(n.strong,{children:"asset ID"})," value, which you will need in the next step. Meanwhile, the transaction to create your CAT is being pushed to the blockchain."]}),"\n",(0,s.jsx)(n.p,{children:"Congratulations! You have issued your first CAT. You still need to tell your wallet about it, though."}),"\n",(0,s.jsxs)(n.p,{children:["Next, jump to ",(0,s.jsx)(n.a,{href:"#add-a-cat-to-your-wallet",children:"Add a CAT to Your Wallet"}),"."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"creating-a-multiple-issuance-cat",children:"Creating a Multiple Issuance CAT"}),"\n",(0,s.jsx)(n.p,{children:"Next we'll create a CAT capable of issuing tokens multiple times. This CAT uses a delegated TAIL, which is much more flexible than the previous one. As long as you sign a puzzle hash that you specify, you can issue new tokens using whatever TAIL you want. This allows for features such as rebate offers and distributed issuing and retiring of tokens."}),"\n",(0,s.jsx)(n.p,{children:"We'll set up this CAT to delegate the same TAIL we set up previously. What this means is that nobody else can issue new tokens until you allow it. Keep in mind that this is only one of many possible implementations of a delegated TAIL."}),"\n",(0,s.jsx)(n.p,{children:"First, figure out how many tokens you want to issue. Because creating a single token takes 1,000 mojos, you will multiply your supply by 1,000 to figure out how much TXCH (or XCH on mainnet) is needed. For example, if you want to issue 1 million tokens, you'll need 1 billion mojos (1/1000 of a TXCH/XCH)."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Just as with the Single Issuance CAT, we recommend that you include a fee with your transaction. This fee will ensure that your transaction is processed in front of any dust in the mempool. Whether you're running on testnet or mainnet, the recommended fee amount is 100 million mojos (",(0,s.jsx)(n.code,{children:"-m 100000000"}),"). Even though you will run the ",(0,s.jsx)(n.code,{children:"cats"})," command multiple times, the fee will only be applied once, when the transaction is pushed to the network."]})}),"\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"chia wallet get_address"})," from a terminal window to get a new receive address. You will use this address shortly."]}),"\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"chia keys show"}),". Take note of your ",(0,s.jsx)(n.strong,{children:"fingerprint"})," and ",(0,s.jsx)(n.strong,{children:"master public key"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"After confirming you are within the admin tool directory, run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cats --tail ./reference_tails/delegated_tail.clsp.hex --curry 0x<Master public key> --send-to <wallet address> -a <XCH mojos> -m <fee in XCH mojos> --as-bytes --select-coin\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"--select-coin"})," flag will choose a coin from your wallet to issue the CAT from. The final line of the output will be ",(0,s.jsx)(n.code,{children:"Name: <Coin ID>"}),". You'll use the ",(0,s.jsx)(n.strong,{children:"coin ID"})," in the next step."]}),"\n",(0,s.jsx)(n.p,{children:"Now that you have a coin, you can create a full delegated TAIL. In our case, the TAIL it delegates will be of the single-issuance variety."}),"\n",(0,s.jsx)(n.p,{children:"Run"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cdv clsp curry ./reference_tails/genesis_by_coin_id.clsp.hex -a 0x<Coin ID>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Keep in mind the 0x before the coin ID is necessary. The result of this command will be a ",(0,s.jsx)(n.strong,{children:"delegated puzzle"}),", which you'll pass in as part of the solution to your main TAIL."]}),"\n",(0,s.jsxs)(n.p,{children:["Run the same command again, with the additional ",(0,s.jsx)(n.code,{children:"--treehash"})," flag. This will give you the ",(0,s.jsx)(n.strong,{children:"treehash"})," of the puzzle you just created:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cdv clsp curry ./reference_tails/genesis_by_coin_id.clsp.hex -a 0x<Coin ID> --treehash\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Sign the treehash (you do ",(0,s.jsx)(n.em,{children:"not"})," need 0x here) with the fingerprint you noted above by running this command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"chia keys sign -d <treehash> -f <Fingerprint> -t m -b\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The last two flags are for the path and bytes. Make sure the resulting public key corresponds to the fingerprint you just used. Copy the ",(0,s.jsx)(n.strong,{children:"signature"})," to use in the next step."]}),"\n",(0,s.jsxs)(n.p,{children:["Run the same ",(0,s.jsx)(n.code,{children:"cats"})," command as above, but remove the ",(0,s.jsx)(n.code,{children:"--select-coin"})," flag and add the ",(0,s.jsx)(n.code,{children:"--solution"})," flag, passing in the delegated puzzle you just calculated. This must be surrounded by quotes and parenthesis and it must contain a solution, which we'll leave empty. Add the ",(0,s.jsx)(n.code,{children:"--signature"})," flag as well:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'cats --tail ./reference_tails/delegated_tail.clsp.hex --curry 0x<Master public key> --send-to <wallet address> -a <amount in mojos to issue> -m <fee in XCH mojos> --as-bytes --solution "(<delegated puzzle> ())" --signature <Signature>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This command will give the following output: ",(0,s.jsx)(n.code,{children:"The transaction has been created, would you like to push it to the network? (Y/N)"})]}),"\n",(0,s.jsxs)(n.p,{children:["Enter ",(0,s.jsx)(n.code,{children:"Y"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The output will be ",(0,s.jsx)(n.code,{children:"Asset ID: <Asset ID>"}),". Copy the ",(0,s.jsx)(n.strong,{children:"asset ID"}),", which you'll need in the next step. Meanwhile, the transaction to create your CAT is being pushed to the blockchain."]}),"\n",(0,s.jsx)(n.p,{children:"Because this CAT uses a delegated TAIL, you can issue more by re-doing step 1 from this section. After you run the \u201ccdv rpc pushtx\u201d command, the balance in your CAT wallet will increase according to the new issuance."}),"\n",(0,s.jsx)(n.h2,{id:"add-a-cat-to-your-wallet",children:"Add a CAT to Your Wallet"}),"\n",(0,s.jsx)(n.p,{children:"Switch to the Chia GUI. Within a few minutes, your balance should decrease by the number of mojos you spent issuing tokens (+ fees). It will not show up in your transaction history."}),"\n",(0,s.jsxs)(n.p,{children:["Now you can add a wallet ID for your new CAT. In the lower left corner, click ",(0,s.jsx)(n.code,{children:"MANAGE TOKEN LIST"}),":"]}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("img",{src:"/img/cat/02_cat.png",alt:"Manage Token List"})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.p,{children:["The first few tokens listed will be there by default (Marmot, Spacebucks, etc). At the end of the list, you should find your CAT's ",(0,s.jsx)(n.code,{children:"asset ID"}),". Feel free to rename your CAT, and click the slider to add a new wallet with that CAT:"]}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("img",{src:"/img/cat/03_cat.png",alt:"Enable new CAT"})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.p,{children:"You will now see your token in your wallet with the full issued quantity. As a reminder, this should be the number of mojos spent divided by 1,000 (as each CAT token requires 1,000 mojos to issue)."}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("img",{src:"/img/cat/04_cat.png",alt:"View new CAT"})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.p,{children:"You now have access to your CAT in the GUI. You can send and receive your new tokens just like you would with regular XCH."}),"\n",(0,s.jsx)(n.h2,{id:"preparing-for-mainnet",children:"Preparing for Mainnet"}),"\n",(0,s.jsxs)(n.p,{children:["After you are comfortable with issuing your CAT on testnet, you may wish to move to mainnet. ",(0,s.jsx)(n.strong,{children:"Please keep in mind that there are extra risks inherent to publishing code on a public blockchain."})," If your seed phrase is ever exposed, your funds could be stolen. If you created a custom TAIL, there is a possiblity of funds being bricked. ",(0,s.jsx)(n.strong,{children:"Proceed with caution."})]}),"\n",(0,s.jsx)(n.p,{children:"That said, issuing a CAT to mainnet isn't very different from issuing one to testnet. You can continue to use the light wallet, or a full node if desired."}),"\n",(0,s.jsx)(n.p,{children:"When you are ready to issue your CAT to mainnet, the first step is to switch to mainnet."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"chia configure -t false\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The second step is to generate a new key pair and store the mnemonic in a secure manner. You can generate your key by clicking ",(0,s.jsx)(n.code,{children:"Add Wallet"})," and ",(0,s.jsx)(n.code,{children:"Create New"})," from the ",(0,s.jsx)(n.code,{children:"Wallet Keys"})," login screen of the GUI. This will work in the same manner as earlier for our testnet CAT."]}),"\n",(0,s.jsxs)(n.admonition,{type:"danger",children:[(0,s.jsx)(n.p,{children:"We recommend the new keypair being used exclusively for the CAT ownership."}),(0,s.jsxs)(n.p,{children:["The key pair you are about to use will control the issuing and retirement of these tokens ",(0,s.jsx)(n.strong,{children:"forever."})," If the private key were ever compromised, an attacker could issue new tokens and melt any they owned into regular XCH."]}),(0,s.jsx)(n.p,{children:"The only way to nullify an attack would be to keep track of illegitimate issuances (luckily all of this is fully visible on the public ledger), issue a new CAT, and then offer an exchange of legitimate old CATs for the new CAT type."}),(0,s.jsxs)(n.p,{children:["This would be a complex and time-consuming process that would likely result in people being sold counterfeit CATs at some point. It's very important to ",(0,s.jsx)(n.strong,{children:"keep your private key secret"}),"."]})]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["You can generate keys from the CLI as well.\nUse ",(0,s.jsx)(n.code,{children:"chia keys show"})," to see your available keys. Take note of their fingerprint as you will want to ",(0,s.jsx)(n.em,{children:"not"})," use an existing key.\nGenerate a key with ",(0,s.jsx)(n.code,{children:"chia keys generate"}),", followed by ",(0,s.jsx)(n.code,{children:"chia keys show --show-mnemonic-seed"})," to reveal the 24 words."]})}),"\n",(0,s.jsxs)(n.p,{children:["Copy your new key pair's ",(0,s.jsx)(n.strong,{children:"mnemonic seed (24 secret words)"})," to a secure offline location. These 24 words are all you'll need to restore your wallet in the future."]}),"\n",(0,s.jsx)(n.p,{children:"Finally, you can go through the same process to create a CAT now using real XCH on mainnet."}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"Congratulations! You've created your first CAT. What now?"}),"\n",(0,s.jsxs)(n.p,{children:["Well, hopefully you can share your CAT with the world and get some traction. In the meantime, you can learn more about the ",(0,s.jsx)(n.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/wallet/cat_wallet/puzzles/genesis_by_coin_id.clsp",children:"Single Issuance TAIL"})," and ",(0,s.jsx)(n.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/wallet/cat_wallet/puzzles/delegated_tail.clsp",children:"Multi Issuance TAIL"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["This guide was for fungible tokens. Now you can learn about ",(0,s.jsx)(n.a,{href:"/guides/nft-intro",children:"non-fungible tokens"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>a});t(7294);var s=t(512);const i={tabItem:"tabItem_Ymn6"};var o=t(5893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.Z)(i.tabItem,a),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>v});var s=t(7294),i=t(512),o=t(2466),a=t(6550),l=t(469),r=t(1980),c=t(7392),h=t(12);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:i}}=e;return{value:n,label:t,attributes:s,default:i}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,a.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,r._X)(o),(0,s.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(i.location.search);n.set(o,e),i.replace({...i.location,search:n.toString()})}),[o,i])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,o=u(e),[a,r]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:o}))),[c,d]=m({queryString:t,groupId:i}),[g,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,o]=(0,h.Nk)(t);return[i,(0,s.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:i}),y=(()=>{const e=c??g;return p({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{y&&r(y)}),[y]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);r(e),d(e),x(e)}),[d,x,o]),tabValues:o}}var x=t(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(5893);function f(e){let{className:n,block:t,selectedValue:s,selectValue:a,tabValues:l}=e;const r=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),h=e=>{const n=e.currentTarget,t=r.indexOf(n),i=l[t].value;i!==s&&(c(n),a(i))},d=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=r.indexOf(e.currentTarget)+1;n=r[t]??r[0];break}case"ArrowLeft":{const t=r.indexOf(e.currentTarget)-1;n=r[t]??r[r.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>r.push(e),onKeyDown:d,onClick:h,...o,className:(0,i.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:i}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function b(e){const n=g(e);return(0,j.jsxs)("div",{className:(0,i.Z)("tabs-container",y.tabList),children:[(0,j.jsx)(f,{...e,...n}),(0,j.jsx)(w,{...e,...n})]})}function v(e){const n=(0,x.Z)();return(0,j.jsx)(b,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var s=t(7294);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);