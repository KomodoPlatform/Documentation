(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{467:function(e,o,t){"use strict";t.r(o);var a=t(10),r=Object(a.a)({},(function(){var e=this,o=e._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"additional-notes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#additional-notes"}},[e._v("#")]),e._v(" Additional Notes")]),e._v(" "),o("h2",{attrs:{id:"a-back-end-for-front-end-implementations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#a-back-end-for-front-end-implementations"}},[e._v("#")]),e._v(" A Back End for Front-End Implementations")]),e._v(" "),o("p",[e._v("The Komodo DeFi Framework is built to have a core component that can serve many front-end graphical-user interfaces (GUIs).")]),e._v(" "),o("p",[e._v("Various front-end GUIs exist in our ecosystem, some of them built by the volunteer efforts of our community members.")]),e._v(" "),o("p",[e._v("This also allows developers and entrepreneurs the freedom to create your own front-end implementation for your own purposes. For example, you can create your own front-end implementation that acts on the same atomic-swap network as other communities. Or, you could make a front-end implementation for your own private network.")]),e._v(" "),o("p",[e._v("The documentation here only concerns the core component, the Komodo DeFi Framework. This component is typically accessed via an API or a terminal interface.")]),e._v(" "),o("p",[e._v("Documentation for GUIs based on Komodo DeFi Framework are not yet available.")]),e._v(" "),o("h2",{attrs:{id:"new-features-of-komodo-defi-framework-desktop"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#new-features-of-komodo-defi-framework-desktop"}},[e._v("#")]),e._v(" New Features of Komodo DeFi Framework (Desktop)")]),e._v(" "),o("p",[e._v("Users who worked with the previous version of the Komodo DeFi Framework software, MarketMaker 1.0 (MM1), will note several differences with the new release.")]),e._v(" "),o("h3",{attrs:{id:"new-off-chain-technology"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#new-off-chain-technology"}},[e._v("#")]),e._v(" New Off-Chain Technology")]),e._v(" "),o("p",[e._v("MM1 used nanomsg technology for its off-chain network layer (e.g. orderbook propagation, ordermatching, client traffic routing, and other technologies that are not active on the blockchain itself).")]),e._v(" "),o("p",[e._v("Komodo DeFi Framework replaced nanomsg with Rust TCP implementation and also uses "),o("code",[e._v("libtorrent")]),e._v(" as a torrent/DHT network system for the off-chain network layer. This p2p software is widely used and highly reliable, granting a greater development experience.")]),e._v(" "),o("h3",{attrs:{id:"rust-implementation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rust-implementation"}},[e._v("#")]),e._v(" Rust Implementation")]),e._v(" "),o("p",[e._v("MM1 was based on ANSI C.")]),e._v(" "),o("p",[e._v("For Komodo DeFi Framework we ported the system to Rust, utilizing the cargo ecosystem. Internal benchmarks prove this to be more efficient. Furthermore, the Rust code base supports mobile devices, including Android & iOS. This is a key benefit, as we expect mobile devices to be a key component of Komodo DeFi Framework adoption.")]),e._v(" "),o("h3",{attrs:{id:"multi-threading-and-other-multi-tasking-improvements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#multi-threading-and-other-multi-tasking-improvements"}},[e._v("#")]),e._v(" Multi-Threading and Other Multi-Tasking Improvements")]),e._v(" "),o("p",[e._v("MM1 had limited multi-tasking capabilities. Also, the bob-side technology was not reliable when using MM1 in lite mode (SPV), wherein blockchain syncing is not required for end-users.")]),e._v(" "),o("p",[e._v("Komodo DeFi Framework has multi-threading. This allows it to reliably manage multiple concurrent requests.")]),e._v(" "),o("h2",{attrs:{id:"komodo-defi-framework-for-mobile-new"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#komodo-defi-framework-for-mobile-new"}},[e._v("#")]),e._v(" Komodo DeFi Framework for Mobile (New!)")]),e._v(" "),o("p",[e._v("Komodo is pleased to announce that Komodo DeFi Framework is preparing for release on compatible Android and iOS devices. The software is currently undergoing quality tests and external reviews before publication.")]),e._v(" "),o("p",[e._v("Notable aspects of the Komodo Mobile Wallet software include:")]),e._v(" "),o("ul",[o("li",[e._v("Optimization for low-data usage and CPU consumption")]),e._v(" "),o("li",[e._v("Low storage requirements (less than 50 MB)")]),e._v(" "),o("li",[e._v("Integrates seamlessly with the desktop Komodo DeFi Framework software")])]),e._v(" "),o("p",[e._v("Through the Komodo API, mobile-device developers can integrate Komodo DeFi Framework for Mobile into other software packages.")]),e._v(" "),o("p",[e._v("Please reach out to our team on "),o("a",{attrs:{href:"https://komodoplatform.com/discord",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discord"),o("OutboundLink")],1),e._v(" to be involved with the software release.")]),e._v(" "),o("h2",{attrs:{id:"add-your-coin-to-the-komodo-defi-framework"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#add-your-coin-to-the-komodo-defi-framework"}},[e._v("#")]),e._v(" Add Your Coin to the Komodo DeFi Framework")]),e._v(" "),o("p",[e._v('All coins that are built on the BTC and ETH core software can be added to the Komodo DeFi Framework quickly and simply. Coins built on other software frameworks may be able to be added as well, depending on specific details. Specifically, a coin must support functionality that is similar to the "CheckLockTimeVerify" of the Bitcoin protocol, wherein a utxo can be locked for a specific amount of time and then released in a manner determined by the developer. For more information, please reach out to our team on Discord.')]),e._v(" "),o("p",[e._v("To add your BTC or ETH-based coin to Komodo DeFi Framework, first follow the linked checklist below:")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/KomodoPlatform/coins#about-this-repository",target:"_blank",rel:"noopener noreferrer"}},[e._v("Link to checklist for adding coin to Komodo DeFi Framework"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("Upon completing the checklist, please submit your proposed coin configuration files to the same repository with a pull request.")]),e._v(" "),o("h2",{attrs:{id:"features-carried-from-mm1"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#features-carried-from-mm1"}},[e._v("#")]),e._v(" Features Carried From MM1")]),e._v(" "),o("h5",{attrs:{id:"spv-based-trading"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#spv-based-trading"}},[e._v("#")]),e._v(" SPV-based Trading")]),e._v(" "),o("p",[e._v("Komodo DeFi Framework holds support for "),o("a",{attrs:{href:"https://en.bitcoin.it/wiki/Electrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("SPV Electrum-based"),o("OutboundLink")],1),e._v(" coins. This feature allows a user to trade with their coins without downloading their coins' blockchain data. This feature is available for all Bitcoin-protocol based coins running native-coin daemons, Ethereum, and Ethereum-based ERC20 tokens. The Komodo DeFi Framework is built to handle the nature of the SPV requirements, providing additional functionality to developers.")]),e._v(" "),o("h5",{attrs:{id:"liquidity-multiplication"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#liquidity-multiplication"}},[e._v("#")]),e._v(" Liquidity Multiplication")]),e._v(" "),o("p",[e._v('Komodo DeFi Framework also enables a feature known as Liquidity Multiplication, a protocol that allows the same funds to be used in multiple requests on Komodo DeFi Framework "orderbooks." The first request to fill completes the trade, and all outstanding requests are immediately cancelled. This feature is available to the user when providing liquidity to the exchange (called a "Bob-side" trade).')]),e._v(" "),o("p",[e._v("Liquidity Multiplication therefore allows an initial amount of funding to create an exponentially higher amount of liquidity on the exchange. This also provides a special advantage for traders that like to wait for below-market dumps. While this feature is something that any other exchange could implement, few do.")]),e._v(" "),o("p",[e._v("On Komodo DeFi Framework, all orderbook entries are 100% backed by real funds, as opposed to a centralized exchange’s vouchers, which may be one reason why Komodo DeFi Framework can more readily offer this feature.")])])}),[],!1,null,null,null);o.default=r.exports}}]);