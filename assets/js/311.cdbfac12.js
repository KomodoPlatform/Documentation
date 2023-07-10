(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{604:function(t,e,a){"use strict";a.r(e);var s=a(10),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"enabling-native-wallet-coins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enabling-native-wallet-coins"}},[t._v("#")]),t._v(" Enabling Native Wallet Coins")]),t._v(" "),e("p",[t._v("There are two ways of enabling coins. One method is to edit the "),e("code",[t._v("./enable")]),t._v(" file, the other is to edit the "),e("code",[t._v("./coins")]),t._v(" file. The "),e("code",[t._v("./enable")]),t._v(" file is simple to edit but it will need to be executed manually every time the "),e("code",[t._v("./client")]),t._v(" is executed. On the other hand, the "),e("code",[t._v("./coins")]),t._v(" file is a little more complicated to edit, but a coin that has been activated in the coins file will automatically be activated after "),e("code",[t._v("./client")]),t._v(" is executed.")]),t._v(" "),e("h2",{attrs:{id:"editing-the-enable-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#editing-the-enable-file"}},[t._v("#")]),t._v(" Editing the "),e("code",[t._v("./enable")]),t._v(" file")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/SuperNET/iguana/dexscripts\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" ./enable\n")])])]),e("p",[t._v("Will show:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" userpass\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--url")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--data")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{'),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("userpass"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("enable"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("coin"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("NAME_OF_COIN"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('}"')]),t._v("\n")])])]),e("p",[t._v("To list a coin on the enable file you need to change NAME_OF_COIN for the coin you want enabled. Copy and paste the line with a new coin for whatever other coins you want enabled. NOTE: KMD is enabled by default and doesn't need to be listed in the enable file.")]),t._v(" "),e("p",[t._v("After changes in the enable file, run:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./enable\n")])])]),e("h2",{attrs:{id:"editing-the-coins-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#editing-the-coins-file"}},[t._v("#")]),t._v(" Editing the "),e("code",[t._v("./coins")]),t._v(" file")]),t._v(" "),e("p",[t._v("Assuming you are in "),e("code",[t._v("~/SuperNET/iguana/dexscripts")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" ./coins\n")])])]),e("p",[t._v("Will show:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("coins")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[{'),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("coin"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("REVS"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("active"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":1, "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("asset"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("REVS"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("rpcport"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":10196}, {"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("coin"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("JUMBLR"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("active"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":1, "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("asset"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("JUMBLR"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("rpcport"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(':15106}, etc, etc, etc}]"')]),t._v("\n")])])]),e("p",[t._v('Add ,``"active":1``, to any coin you want to be active by default at startup like this:')]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('"coin'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('":'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('"NAME_OF_COIN'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('",'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('"active'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('":1, '),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('"asset'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('":'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('"NAME_OF_COIN'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('",'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('"rpcport'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('":10196'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("If a coin is PoS, add the following parameter:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('"isPos'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v('":1,\n')])])]),e("p",[t._v("You will need to restart the "),e("code",[t._v("./client")]),t._v(" for the coin to get active. This change won't take effect automatically. But once a coin is active, it will activate automatically when you restart "),e("code",[t._v("./client")]),t._v(" without the need to run "),e("code",[t._v("./enable")]),t._v(" first.")]),t._v(" "),e("p",[e("strong",[t._v("To stop the")]),t._v(" "),e("code",[t._v("./client")]),t._v(" "),e("strong",[t._v("process, use")]),t._v(" "),e("code",[t._v("./stop")])])])}),[],!1,null,null,null);e.default=n.exports}}]);