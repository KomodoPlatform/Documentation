(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{565:function(a,e,t){"use strict";t.r(e);var o=t(10),r=Object(o.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"a-note-to-exchanges"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#a-note-to-exchanges"}},[a._v("#")]),a._v(" A Note to Exchanges")]),a._v(" "),e("p",[a._v("When the Komodo daemon ("),e("code",[a._v("komodod")]),a._v(") is started with the parameter called "),e("code",[a._v("-exchange")]),a._v(", the daemon ignores the rewards that can be collected from a UTXO when it is used in a transaction. This allows exchanges to manage their account balances against their accounting software without any modification during account reconciliation.")]),a._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" Example")]),a._v(" "),e("p",[a._v("If you normally start the daemon using the command:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("./src/komodod "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-addnode")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("78.47")]),a._v(".196.146 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-daemon")]),a._v("\n")])])]),e("p",[a._v("adding the - parameter "),e("code",[a._v("-exchange")]),a._v(" will make it:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("./src/komodod "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-addnode")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("78.47")]),a._v(".196.146 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-exchange")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-daemon")]),a._v("\n")])])]),e("p",[a._v("This post on Bitcointalk gives the context related to addition of the parameter to Komodo: "),e("a",{attrs:{href:"https://bitcointalk.org/index.php?topic=1605144.msg17732151#msg17732151",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://bitcointalk.org/index.php?topic=1605144.msg17732151#msg17732151"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("If you were already running the normal mode, to enable the parameter,")]),a._v(" "),e("ol",[e("li",[a._v("Backup all privkeys (launch "),e("code",[a._v("komodod")]),a._v(" with "),e("code",[a._v("-exportdir=<path>")]),a._v(" and run "),e("code",[a._v("./komodo-cli dumpwallet <filename>")]),a._v(")")]),a._v(" "),e("li",[a._v("Start a totally new sync including a new "),e("code",[a._v("wallet.dat")]),a._v(", launch with the same "),e("code",[a._v("exportdir")]),a._v(" and the parameter")]),a._v(" "),e("li",[a._v("Stop it before it gets too far and import all the privkeys backed up during step a) using "),e("code",[a._v("./komodo-cli importwallet <filename>")])]),a._v(" "),e("li",[a._v("Resume sync till it gets to chaintip")])]),a._v(" "),e("p",[a._v("For example:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("./komodod "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-exportdir")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/tmp "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n./komodo-cli dumpwallet example\n./komodo-cli stop\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" ~/.komodo ~/.komodo.old "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" ~/.komodo "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" ~/.komodo.old/komodo.conf ~/.komodo.old/peers.dat ~/.komodo\n./komodod "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-exchange")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-exportdir")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/tmp "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n./komodo-cli importwallet /tmp/example\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);