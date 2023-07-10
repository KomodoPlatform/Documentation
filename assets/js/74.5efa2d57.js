(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{365:function(t,e,s){"use strict";s.r(e);var a=s(10),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"heirarchical-deterministic-address-management"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#heirarchical-deterministic-address-management"}},[t._v("#")]),t._v(" Heirarchical Deterministic Address Management")]),t._v(" "),e("p",[t._v("A hierarchical-deterministic (HD) wallet generates a new key pair from a master key pair, allowing for multiple addresses to be generated from the same seed so that change from transactions go to a previously unused address, enhancing privacy and security. The hierarchical structure resembles that of a tree, with the master key “determining” the key pairs that follow it in the hierarchy. If you have activated a coin with the "),e("RouterLink",{attrs:{to:"/basic-docs/atomicdex-api-20-dev/coin_activation_tasks.html#task-enable-utxo-init"}},[t._v("task::enable_utxo::init")]),t._v(" or "),e("RouterLink",{attrs:{to:"/basic-docs/atomicdex-api-20-dev/coin_activation_tasks.html#task-enable-qtum-init"}},[t._v("task::enable_qtum::init")]),t._v(" and used the "),e("code",[t._v('"priv_key_policy": "Trezor"')]),t._v(" parameter, you can use the methods below to generate new addresses.")],1),t._v(" "),e("h2",{attrs:{id:"can-get-new-address"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#can-get-new-address"}},[t._v("#")]),t._v(" can_get_new_address")]),t._v(" "),e("p",[t._v("To avoid generating too many addresses at once, we can use a "),e("code",[t._v("gap_limit")]),t._v(" constraint so that no more than a specific amount of unused addresses can be generated before more addresses can be generated.")]),t._v(" "),e("h4",{attrs:{id:"arguments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameter")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("coin")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("The ticker of the coin you want to get a new address for")])]),t._v(" "),e("tr",[e("td",[t._v("account_id")]),t._v(" "),e("td",[t._v("integer")]),t._v(" "),e("td",[t._v("Generally this will be "),e("code",[t._v("0")]),t._v(" unless you have multiple accounts registered on your Trezor")])]),t._v(" "),e("tr",[e("td",[t._v("chain")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[e("code",[t._v("Internal")]),t._v(", or "),e("code",[t._v("External")]),t._v(". External is used for addresses that are meant to be visible outside of the wallet (e.g. for receiving payments). Internal is used for addresses which are not meant to be visible outside of the wallet and is used for return transaction change.")])]),t._v(" "),e("tr",[e("td",[t._v("gap_limit")]),t._v(" "),e("td",[t._v("integer")]),t._v(" "),e("td",[t._v("The maximum number of empty addresses in a row.")])])])]),t._v(" "),e("h4",{attrs:{id:"response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameter")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("result")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Returns with value "),e("code",[t._v("success")]),t._v(" when successful, otherwise returns the error values below")])]),t._v(" "),e("tr",[e("td",[t._v("result.allowed")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("Whether or not you can get a new address.")])]),t._v(" "),e("tr",[e("td",[t._v("result.reason")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("The reason you cant get a new address (if allowed is "),e("code",[t._v("false")]),t._v(").")])]),t._v(" "),e("tr",[e("td",[t._v("result.details")]),t._v(" "),e("td",[t._v("object")]),t._v(" "),e("td",[t._v("Contains extra contextual information about the reason why allowed is "),e("code",[t._v("false")])])]),t._v(" "),e("tr",[e("td",[t._v("result.details.address")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("If reason is "),e("code",[t._v("LastAddressNotUsed")]),t._v(", this is the address that should be used before you can get a new address.")])])])]),t._v(" "),e("p",[t._v("Other reasons you might not be able to get a new address are:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("EmptyAddressesLimitReached")]),t._v(" - Last gap_limit addresses are still unused.")]),t._v(" "),e("li",[e("code",[t._v("AddressLimitReached")]),t._v(" - Addresses limit reached. Currently, the limit is "),e("a",{attrs:{href:"https://www.wolframalpha.com/input?i=2%5E%2832%29",target:"_blank",rel:"noopener noreferrer"}},[t._v("2^31"),e("OutboundLink")],1)])]),t._v(" "),e("h4",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" 📌 Examples")]),t._v(" "),e("h4",{attrs:{id:"command"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#command"}},[t._v("#")]),t._v(" Command")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--url")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--data")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\n    '),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("userpass"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("YOUR_PASS"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n    "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("mmrpc"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("2.0"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n    "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("can_get_new_address"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n    "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("params"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": {\n        "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("coin"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("RICK"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("account_id"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": 0,\n        "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("chain"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("External"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("gap_limit"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(': 20\n    }\n}"')]),t._v("\n")])])]),e("div",{staticStyle:{"margin-top":"0.5rem"}},[e("collapse-text",{attrs:{hidden:"",title:"Response"}},[e("h4",{attrs:{id:"response-success-allowed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-success-allowed"}},[t._v("#")]),t._v(" Response (success, allowed)")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mmrpc"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"allowed"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h4",{attrs:{id:"response-success-not-allowed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-success-not-allowed"}},[t._v("#")]),t._v(" Response (success, not allowed)")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mmrpc"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"allowed"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reason"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LastAddressNotUsed"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"details"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RMHFCEWacWP7dYw1DWxH3TF5YW8q8hM5z7"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])],1),t._v(" "),e("h2",{attrs:{id:"get-new-address"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-new-address"}},[t._v("#")]),t._v(" get_new_address")]),t._v(" "),e("p",[t._v("If we don't already have too many unused addresses, we can use the "),e("code",[t._v("get_new_address")]),t._v(" method to generate a new address. The generated address will be shown in account_balance and init_account_balance RPCs and on the next coin activation.")]),t._v(" "),e("h4",{attrs:{id:"arguments-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arguments-2"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameter")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("coin")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("The ticker of the coin you want to get a new address for")])]),t._v(" "),e("tr",[e("td",[t._v("account_id")]),t._v(" "),e("td",[t._v("integer")]),t._v(" "),e("td",[t._v("Generally this will be "),e("code",[t._v("0")]),t._v(" unless you have multiple accounts registered on your Trezor")])]),t._v(" "),e("tr",[e("td",[t._v("chain")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[e("code",[t._v("Internal")]),t._v(", or "),e("code",[t._v("External")]),t._v(". External is used for addresses that are meant to be visible outside of the wallet (e.g. for receiving payments). Internal is used for addresses which are not meant to be visible outside of the wallet and is used for return transaction change.")])]),t._v(" "),e("tr",[e("td",[t._v("gap_limit")]),t._v(" "),e("td",[t._v("integer")]),t._v(" "),e("td",[t._v("The maximum number of empty addresses in a row.")])])])]),t._v(" "),e("h4",{attrs:{id:"response-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameter")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("result")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Returns with value "),e("code",[t._v("success")]),t._v(" when successful, otherwise returns the error values below")])]),t._v(" "),e("tr",[e("td",[t._v("result.new_address")]),t._v(" "),e("td",[t._v("object")]),t._v(" "),e("td",[t._v("Contains details about your new address.")])]),t._v(" "),e("tr",[e("td",[t._v("result.address")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("The new address that was generated.")])]),t._v(" "),e("tr",[e("td",[t._v("result.details")]),t._v(" "),e("td",[t._v("object")]),t._v(" "),e("td",[t._v("Contains extra contextual information about the reason why allowed is "),e("code",[t._v("false")])])]),t._v(" "),e("tr",[e("td",[t._v("result.details.address")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("If reason is "),e("code",[t._v("LastAddressNotUsed")]),t._v(", this is the address that should be used before you can get a new address.")])]),t._v(" "),e("tr",[e("td",[t._v("result.details.derivation_path")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("The "),e("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("BIP44 derivation path"),e("OutboundLink")],1),t._v(" of the address.")])]),t._v(" "),e("tr",[e("td",[t._v("result.details.chain")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[e("code",[t._v("External")]),t._v(" or "),e("code",[t._v("Internal")]),t._v(" External is used for addresses that are meant to be visible outside of the wallet (e.g. for receiving payments). Internal is used for addresses which are not meant to be visible outside of the wallet and is used for return transaction change.")])]),t._v(" "),e("tr",[e("td",[t._v("result.details.balance")]),t._v(" "),e("td",[t._v("object")]),t._v(" "),e("td",[t._v("Contains the spendable and unspendable balance for this address")])]),t._v(" "),e("tr",[e("td",[t._v("result.details.balance.spendable")]),t._v(" "),e("td",[t._v("string(numeric)")]),t._v(" "),e("td",[t._v("Spendable balance for this address")])]),t._v(" "),e("tr",[e("td",[t._v("result.details.balance.unspendable")]),t._v(" "),e("td",[t._v("string(numeric)")]),t._v(" "),e("td",[t._v("Unspendable balance for this address (e.g. from unconfirmed incoming transactions)")])])])]),t._v(" "),e("p",[t._v("Other reasons you might not be able to get a new address are:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("EmptyAddressesLimitReached")]),t._v(" - Last gap_limit addresses are still unused.")]),t._v(" "),e("li",[e("code",[t._v("AddressLimitReached")]),t._v(" - Addresses limit reached. Currently, the limit is "),e("a",{attrs:{href:"https://www.wolframalpha.com/input?i=2%5E%2832%29",target:"_blank",rel:"noopener noreferrer"}},[t._v("2^31"),e("OutboundLink")],1)])]),t._v(" "),e("h4",{attrs:{id:"examples-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[t._v("#")]),t._v(" 📌 Examples")]),t._v(" "),e("h4",{attrs:{id:"command-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#command-2"}},[t._v("#")]),t._v(" Command")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--url")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--data")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\n    '),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("userpass"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("YOUR_PASS"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n    "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("mmrpc"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("2.0"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n    "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("get_new_address"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n    "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("params"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": {\n        "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("coin"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("RICK"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("account_id"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": 0,\n        "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("chain"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("External"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("gap_limit"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(': 20\n    }\n}"')]),t._v("\n")])])]),e("div",{staticStyle:{"margin-top":"0.5rem"}},[e("collapse-text",{attrs:{hidden:"",title:"Response"}},[e("h4",{attrs:{id:"response-success"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-success"}},[t._v("#")]),t._v(" Response (success)")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mmrpc"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"allowed"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h4",{attrs:{id:"response-success-not-allowed-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-success-not-allowed-2"}},[t._v("#")]),t._v(" Response (success, not allowed)")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mmrpc"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"new_address"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RRqF4cYniMwYs66S4QDUUZ4GJQFQF69rBE"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"derivation_path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"m/44'/141'/0'/0/3\"")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"chain"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"External"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"balance"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"spendable"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"unspendable"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])],1)])}),[],!1,null,null,null);e.default=r.exports}}]);