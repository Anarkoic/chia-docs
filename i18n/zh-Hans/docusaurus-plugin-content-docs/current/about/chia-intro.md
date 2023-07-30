---
title: Chia简介
slug: /chia-intro
---

Chia 是一个加密货币和区块链智能交易平台。 Chia是从头设计的，其目的是使加密货币更容易使用，更难于损失现金而非现金。 The PoST consensus has a much [lower energy consumption](https://chiapower.org "Chia's energy consumption statistics") compared to Proof of Work (PoW), and part of Chia's vision involves improving the carbon footprint of the blockchain industry.

2017年8月1日， [Bram Cohen](https://www.chia.net/profiles/bram-cohen "Bram Cohen's Chia profile") 创建了Chia公司，并将其注册于Delaware州。 布拉姆领导Chia的发展，还有许多工程师、研究人员和开源贡献者。 在此过程中，Chia创造了应用加密技术方面的三个新发明，并提高了人们对第四个方面的兴趣和采纳：

- [Proofs of Space](https://github.com/Chia-Network/chiapos "Chia's Proof of Space repository on GitHub") and [Time](https://github.com/Chia-Network/chiavdf "Chia's VDF on GitHub") (PoST), the first (and only) Nakamoto consensus since Proof of Work.
- The first production use of [BLS Signatures](https://github.com/Chia-Network/bls-signatures "Chia's BLS Signatures on GitHub").
- The first production use of a [Verifiable Delay Function (VDF)](https://github.com/Chia-Network/chiavdf "Chia's VDF on GitHub").
- The first production use of [class groups of unknown order](https://github.com/Chia-Network/vdf-competition/blob/main/classgroups.pdf "Binary quadratic forms white paper, by Lipa Long").

Chia's mainnet was launched on March 19, 2021. Development of its ecosystem is ongoing.

For more information on the company's strategies, see [Chia's business white paper](https://www.chia.net/whitepaper "Chia's business white paper").

## Smart Transactions

Chia has a new smart transaction model, which uses a powerful (yet simple) higher-level language called [chialisp](https://chialisp.com "Chialisp.com"), and an accompanying lower-level language called CLVM (ChiaLisp Virtual Machine).

Chia uses the coin set model (similar to Bitcoin's UTXO) to track the blockchain's state. The simple nature of this model facilitates the writing of high value and secure contracts. Unlike in systems that use the account model such as Ethereum, the code that creates Chia's coins is strongly sandboxed. This increases security, reduces Maximum Extractable Value (MEV), and makes the code fully auditable.

:::info
For more info, see [chialisp.com](https://chialisp.com/ "Chialisp.com").
:::

## Decentralized

Chia uses a consensus algorithm called [Proofs of Space and Time](https://www.chia.net/assets/ChiaGreenPaper.pdf "Chia's Green Paper"). This algorithm allows anyone with an internet connection and some free disk space to participate in securing the network. Because of this process of farming (analogous to mining), Chia has become the most decentralized blockchain on the planet, with [hundreds of thousands of full nodes](https://dashboard.chia.net/d/em15uQ47k/peer-info) securing the system.

## Improved Pooling

Like many other blockchains, Chia allows pooling to smooth out the rewards structure for smaller farmers. However, Chia's pooling protocol has three unique features:

- Farmers create new blocks, whether they're farming solo or as a member of a pool.

This design decision was made in conjunction with Chia's goal of decentralization. In other blockchains such as Bitcoin, four or five pools control over 51% of the global hashrate on any given day. (Sources: [blockchain.com](https://www.blockchain.com/pools "blockchain.com pie chart of Bitcoin's hashrate distribution"), [blockchair.com](https://blockchair.com/bitcoin/charts/hashrate-distribution "blockchair.com pie chart of Bitcoin's hashrate distribution")) Arguably, the easiest way to attack Bitcoin would be to bribe each of these pools' operators.

In Chia, the pool operators are only responsible for distributing rewards. They cannot modify the blockchain. Therefore, Chia's pooling protocol doesn't lead to increased centralization.

- Joining a pool is permissionless. Farmers don't need to sign up for anything in order to join.

- When a block is won, the farmer gets 1/8 of the rewards, and the pool operator gets the other 7/8. This was done to discourage pool operators from harming their competition by farming on a competing pool and neglecting to create a block when they find a proof (Solo farmers collect the entire reward when they create a block).

:::info
For more info on Chia's pooling protocol, see the [Pool Protocol page](/pool-protocol).
:::

## Other key features

There are many other innovations in Chia, some of which include:

- **BLS signatures**, which allow aggregating all of a block's signatures together.

- **Scalability and performance** improvements, which allow running a Chia node on a Raspberry Pi. Here are [instructions for farming on a Raspberry Pi](/chia-on-raspberry-pi).

- **Weight proofs and light clients**, which enable fast syncing from a mobile device. For more info, see [light clients](/light-clients).

- **Chia Asset Tokens** (CATs) are fungible tokens that can be minted from standard XCH. The possiblilties are endless! [Read more on CATs](/cats) or watch a [CATs video intro](https://www.youtube.com/watch?v=yxagP_VC8BE). Additionally, a community member has created [TAIL Database](https://www.taildatabase.com/ "TAIL database"), which contains a list of CATs in the wild.

- **Offer files** enable the peer-to-peer exchange of assets, including standard XCH, as well as CATs. [Read more on Offers](/offers) or watch a [brief intro video](https://youtu.be/Z2FoZSNtttM "Offers intro on YouTube").

- **NFTs** enable and drive real-world applications of digital ownership through true marketplace independence, consistent provenance, and digital permanence. We laid out our [vision for NFTs on Chia](https://www.chia.net/2022/05/11/our-vision-for-chia-nfts.en.html) and launched our [NFT1 standard](https://www.chia.net/2022/06/29/1.4.0-introducing-the-chia-nft1-standard.en.html) in June 2022.

- This documentation will explain the motivation and implementation of the different components of the Chia system to a technical audience, and provide in-depth explanations of how everything works. If you would like to skip to how to make dapps (decentralized apps) on Chia, please visit [chialisp.com](https://chialisp.com).
