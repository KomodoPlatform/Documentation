(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{540:function(t,e,a){"use strict";a.r(e);var o=a(10),n=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"chapter-06-faucet-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chapter-06-faucet-example"}},[t._v("#")]),t._v(" Chapter 06 - Faucet Example")]),t._v(" "),e("p",[t._v("Finally, we are ready for the first actual example of a CC contract. The faucet. This is a very simple contract and it ran into some interesting bugs in the first incarnation.")]),t._v(" "),e("p",[t._v("The code in "),e("a",{attrs:{href:"https://github.com/jl777/komodo/tree/jl777/src/cc/faucet.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("~/komodo/src/cc/faucet.cpp"),e("OutboundLink")],1),t._v(" is the ultimate documentation for it with all the details, so I will just address the conceptual issues here.")]),t._v(" "),e("p",[t._v("The idea is that people send funds to the faucet by locking it in faucet's global CC address and anybody is allowed to create a faucetget transaction that spends it.")]),t._v(" "),e("p",[t._v("There are only 7 functions in "),e("a",{attrs:{href:"https://github.com/jl777/komodo/tree/jl777/src/cc/faucet.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("faucet.cpp"),e("OutboundLink")],1),t._v(", a bit over 200 lines including comments. The first three are for validation, the last four for the rpc calls to use.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Functions")]),t._v(" "),e("ul",[e("li",[t._v("int64_t IsFaucetvout(struct CCcontract_info *cp,const CTransaction& tx,int32_t v)")]),t._v(" "),e("li",[t._v("bool FaucetExactAmounts(struct CCcontract_info "),e("em",[t._v("cp,Eval")]),t._v(" eval,const CTransaction &tx,int32_t minage,uint64_t txfee)")]),t._v(" "),e("li",[t._v("bool FaucetValidate(struct CCcontract_info "),e("em",[t._v("cp,Eval")]),t._v(" eval,const CTransaction &tx)")]),t._v(" "),e("li",[t._v("int64_t AddFaucetInputs(struct CCcontract_infoCC_info *cp,CMutableTransaction &mtx,CPubKey pk,int64_t total,int32_t maxinputs)")]),t._v(" "),e("li",[t._v("std::string FaucetGet(uint64_t txfee)")]),t._v(" "),e("li",[t._v("std::string FaucetFund(uint64_t txfee,int64_t funds)")]),t._v(" "),e("li",[t._v("UniValue FaucetInfo()")])])]),t._v(" "),e("p",[t._v("Functions in "),e("code",[t._v("rpcwallet")]),t._v(" implement:")]),t._v(" "),e("p",[e("code",[t._v("faucetaddress")]),t._v(" fully implemented in "),e("a",{attrs:{href:"https://github.com/jl777/komodo/tree/jl777/src/wallet/rpcwallet.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("rpcwallet.cpp"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("code",[t._v("faucetfund")]),t._v(" calls "),e("code",[t._v("FaucetFund")])]),t._v(" "),e("p",[e("code",[t._v("faucetget")]),t._v(" calls "),e("code",[t._v("FaucetGet")])]),t._v(" "),e("p",[e("code",[t._v("faucetinfo")]),t._v(" calls "),e("code",[t._v("FaucetInfo")])]),t._v(" "),e("p",[t._v("Now you might not be a programmer, but I hope you are able to understand the above sequence. user types in a cli call, "),e("code",[t._v("komodo-cli")]),t._v(" processes it by calling the rpc function, which in turn calls the function inside "),e("a",{attrs:{href:"://github.com/jl777/komodo/tree/jl777/src/cc/faucet.cpp"}},[t._v("faucet.cpp")])]),t._v(" "),e("p",[t._v("No magic, just simple conversion of a user command line call that runs code inside the komodod. Both the "),e("code",[t._v("faucetfund")]),t._v(" and "),e("code",[t._v("faucetget")]),t._v(" create properly signed rawtransaction that is ready to be broadcast to the network using the standard "),e("code",[t._v("sendrawtransaction")]),t._v(" rpc. It doesnt automatically do this to allow the GUI to have a confirmation step with all the details before doing an irrevocable CC contract transaction.")]),t._v(" "),e("p",[e("code",[t._v("faucetfund")]),t._v(" allows anybody to add funds to the faucet\n"),e("code",[t._v("faucetget")]),t._v(" allows anybody to get 0.1 coins from the faucet as long as they dont violate the rules.")]),t._v(" "),e("p",[t._v("And we come to what it is all about. The rules of the faucet. Initially it was much less strict and that allowed it to be drained slowly, but automatically and it prevented most from being able to use the faucet.")]),t._v(" "),e("p",[t._v("To make it much harder to leech, it was made so each "),e("code",[t._v("faucetget")]),t._v(" returned only 0.1 coins (down from 1.0) so it was worth 90% less. It was also made so that it had to be to a fresh address with less than 3 transactions. Finally each txid was constrained to start and end with 00! This is a cool trick to force usage of precious CPU time (20 to 60 seconds depending on system) to generate a valid txid. Like PoW mining for the txid and I expect other CC contracts to use a similar mechanism if they want to rate limit usage.")]),t._v(" "),e("p",[t._v("Combined, it became such a pain to get 0.1 coins, the faucet leeching problem was solved. It might not seem like too much trouble to change an address to get another 0.1 coins, but the way things are setup you need to launch the "),e("code",[t._v("komodod")]),t._v(" "),e("code",[t._v("-pubkey=<your pubkey>")]),t._v(" to change the pubkey that is active for a node. That means to change the pubkey being used, the komodod needs to be restarted and this creates a lot of issues for any automation trying to do this. Combined with the PoW required, only when 0.1 coins becomes worth a significant effort will faucet leeching return. In that case, the PoW requirement can be increased and coin amount decreased, likely with a faucet2 CC contract as I dont expect many such variations to be needed.")])])}),[],!1,null,null,null);e.default=n.exports}}]);