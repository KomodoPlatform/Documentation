(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{345:function(t,e,s){"use strict";s.r(e);var a=s(10),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"komodo-developer-path-connecting-to-another-programming-environment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#komodo-developer-path-connecting-to-another-programming-environment"}},[t._v("#")]),t._v(" Komodo Developer Path | Connecting to Another Programming Environment")]),t._v(" "),e("h4",{attrs:{id:"total-estimated-time-10-20-minutes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#total-estimated-time-10-20-minutes"}},[t._v("#")]),t._v(" Total Estimated Time: ~10-20 Minutes")]),t._v(" "),e("p",[t._v("This tutorial is part of a series.")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/basic-docs/antara/antara-tutorials/beginner-series-part-2.html"}},[t._v("To return to the previous tutorial, click here.")])],1),t._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v("Until now we have relied on automated functions in the guided tutorials for assistance in executing Remote Procedure Calls (RPC's). Such RPC's include "),e("b",[t._v("getinfo")]),t._v(", "),e("b",[t._v("listunspent")]),t._v(", "),e("b",[t._v("faucetfund")]),t._v(", and more.")]),t._v(" "),e("p",[t._v("The very purpose of an RPC is to allow another programming environment to access the functionality of the software. For example, an RPC allows Python or JavaScript source code to send a secure call to the Komodo Smart Chain with a request to perform an action, and to return information about the result.")]),t._v(" "),e("p",[t._v("All RPC's are available in any mainstream programming language, and we are now prepared to experiment with this feature.")]),t._v(" "),e("p",[t._v("In this tutorial, we focus on the most essential aspect of this process, the Unix "),e("code",[t._v("curl")]),t._v(" command. Using "),e("code",[t._v("curl")]),t._v(" to access Komodo software from the source code of another environment is relatively straightforward, depending upon the programming language itself.")]),t._v(" "),e("p",[t._v("The guided-tutorial software that holds our "),e("code",[t._v("TUT1")]),t._v(" Smart Chain has an exposed RPC port that we use to connect to our seed node.")]),t._v(" "),e("h4",{attrs:{id:"inquiring-about-language-wrappers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inquiring-about-language-wrappers"}},[t._v("#")]),t._v(" Inquiring About Language Wrappers")]),t._v(" "),e("p",[t._v("Before we continue with the tutorial, there is a tangential point to mention.")]),t._v(" "),e("p",[t._v("In the Komodo community, for many popular programming languages there are available enhancements beyond the "),e("code",[t._v("curl")]),t._v(" command. These enhancements allow a developer to more easily integrate with Komodo.")]),t._v(" "),e("p",[t._v('In these languages, someone from the Komodo community has created a language "wrapper." A wrapper essentially allows a developer to import all the Komodo RPC calls directly into the source files of their chosen language.')]),t._v(" "),e("p",[t._v("Therefore, the developer can often simply call the Komodo RPC suite into the source file and access each RPC on demand.")]),t._v(" "),e("p",[t._v("For information regarding availability of language wrappers for your preferred language, please reach out to our team and to the community on "),e("a",{attrs:{href:"https://komodoplatform.com/discord",target:"_blank",rel:"noopener noreferrer"}},[t._v("Discord."),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"obtaining-the-necessary-passwords-and-credentials"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#obtaining-the-necessary-passwords-and-credentials"}},[t._v("#")]),t._v(" Obtaining the Necessary Passwords and Credentials")]),t._v(" "),e("h5",{attrs:{id:"estimated-time-1-minute"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#estimated-time-1-minute"}},[t._v("#")]),t._v(" Estimated Time: 1 minute")]),t._v(" "),e("p",[t._v("The Smart Chain software controls access to all your valuable assets. Allowing other software on your node to access and manipulate these assets is a potential security risk. Therefore, the Smart Chain software requires a password and username from any software that attempts to access the Smart Chain's exposed port.")]),t._v(" "),e("p",[t._v("These credentials are called the rpcpassword, rpcuser, and rpcport.")]),t._v(" "),e("p",[t._v("The file that holds these values is typically installed in a "),e("code",[t._v("~/komodo/COINNAME/COINNAME.conf")]),t._v(" file. You can change the values in this file before launching the Komodo software, and they will be loaded at runtime.")]),t._v(" "),e("p",[t._v("In our guided tutorial, the name of our coin is "),e("code",[t._v("TUT1")]),t._v(", and therefore the name of the credential file is "),e("code",[t._v("TUT1.conf")]),t._v(".")]),t._v(" "),e("p",[t._v("We have placed the "),e("code",[t._v("TUT1.conf")]),t._v(" file for the "),e("code",[t._v("SEED")]),t._v(" node in a different location, to allow for the underlying tutorial software to function properly.")]),t._v(" "),e("p",[t._v("Here is the location: "),e("code",[t._v("/root/.komodo/TUT1/TUT1.conf")])]),t._v(" "),e("p",[t._v("Obtain your "),e("code",[t._v("TUT1")]),t._v(" RPC credentials and copy/paste them into a nearby location before continuing with the tutorial.")]),t._v(" "),e("h2",{attrs:{id:"using-curl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-curl"}},[t._v("#")]),t._v(" Using curl")]),t._v(" "),e("h5",{attrs:{id:"estimated-time-5-minutes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#estimated-time-5-minutes"}},[t._v("#")]),t._v(" Estimated Time: 5 minutes")]),t._v(" "),e("h4",{attrs:{id:"conceptualizing-the-curl-command"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conceptualizing-the-curl-command"}},[t._v("#")]),t._v(" Conceptualizing the curl Command")]),t._v(" "),e("p",[t._v("A "),e("code",[t._v("curl")]),t._v(" command must be sent to the Komodo software daemon through a Unix shell, or terminal.")]),t._v(" "),e("p",[t._v("When using "),e("code",[t._v("curl")]),t._v(" from another programming environment, the developer's source code first opens an instance of a Unix terminal. This is typically achieved through some type of environment enhancement. For example, a JavaScript developer might use Node.js to open a Unix terminal instance. The specific Node.js function the developer would use is "),e("a",{attrs:{href:"https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback",target:"_blank",rel:"noopener noreferrer"}},[e("b",[t._v("child_process.exec().")]),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("The developer's source file then creates a "),e("code",[t._v("curl")]),t._v(" command that fulfills the intended purposes of the developer's software, and sends this "),e("code",[t._v("curl")]),t._v(" command to the Komodo software daemon.")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("curl")]),t._v(" command sends a json reply, which the developer captures in their source code and utilizes in any manner the developer desires.")]),t._v(" "),e("h4",{attrs:{id:"installing-jq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-jq"}},[t._v("#")]),t._v(" Installing jq")]),t._v(" "),e("p",[t._v("The returned json object is provided without human-friendly json formatting.")]),t._v(" "),e("p",[t._v('To make json responses easier to read, Komodo developers typically make use of a third-party software called "jq".')]),t._v(" "),e("p",[e("a",{attrs:{href:"https://stedolan.github.io/jq/",target:"_blank",rel:"noopener noreferrer"}},[t._v("You can download and install jq at this link."),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Once installed, with each "),e("code",[t._v("curl")]),t._v(" command simply include a pipe and a call to jq, along with any desired jq optional parameters. Komodo developers typically include the  "),e("code",[t._v("-r")]),t._v(" parameter for raw outputs, to help jq interpret the raw string.")]),t._v(" "),e("h2",{attrs:{id:"the-anatomy-of-a-curl-command"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-anatomy-of-a-curl-command"}},[t._v("#")]),t._v(" The Anatomy of a curl Command")]),t._v(" "),e("p",[t._v("Observe the anatomy of a sample "),e("code",[t._v("curl")]),t._v(" command, as executed in the terminal. For this example, we use the "),e("b",[t._v("getinfo")]),t._v(" RPC.")]),t._v(" "),e("h4",{attrs:{id:"command"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#command"}},[t._v("#")]),t._v(" Command")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--user")]),t._v(" user3044755432:passd30f503069f140e8e0ffe4d3f1645a8eae8e923b20e6011630cc98880ec5c47320 --data-binary "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{'),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("jsonrpc"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("1.0"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("id"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("curl test"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("getinfo"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("params"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(': []}"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type: text/plain;'")]),t._v(" http://127.0.0.1:9253/ "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" jq "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-r")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.result'")]),t._v("\n")])])]),e("table",[e("thead",[e("tr",[e("th",[t._v("Property")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("curl")]),t._v(" "),e("td",[t._v("the name of the Unix command")])]),t._v(" "),e("tr",[e("td",[t._v("-s")]),t._v(" "),e("td",[t._v('the "silent" option; this prevents the shell from returning extraneous information about the command\'s progress')])]),t._v(" "),e("tr",[e("td",[t._v("--user")]),t._v(" "),e("td",[t._v("informs the shell that there will be a username and a password directly following this property")])]),t._v(" "),e("tr",[e("td",[t._v("userXXXX:passXXXX")]),t._v(" "),e("td",[t._v("the rpcuser and rpcpassword, as provided in the coin's .conf file")])]),t._v(" "),e("tr",[e("td",[t._v("--data-binary")]),t._v(" "),e("td",[t._v("informs the shell that additional data should be included with the curl command, and that the data should be sent exactly as it is provided")])]),t._v(" "),e("tr",[e("td",[t._v('"{')]),t._v(" "),e("td",[t._v("begin the string that contains the data object; everything within this string is sent directly to the Komodo daemon for processing")])]),t._v(" "),e("tr",[e("td",[t._v('"jsonrpc": "1.0"')]),t._v(" "),e("td",[t._v("informs the Komodo daemon that it is receiving a json rpc object, and that the object is formatted according to version 1.0 of the Komodo RPC's source code")])]),t._v(" "),e("tr",[e("td",[t._v('"id": "curl test"')]),t._v(" "),e("td",[t._v("informs the daemon that the json object sent is a curl command")])]),t._v(" "),e("tr",[e("td",[t._v('"method": "getinfo"')]),t._v(" "),e("td",[t._v("informs the daemon that the developer is using the "),e("RouterLink",{attrs:{to:"/basic-docs/smart-chains/smart-chain-api/control.html#getinfo"}},[e("b",[t._v("getinfo")])]),t._v(" RPC")],1)]),t._v(" "),e("tr",[e("td",[t._v('"params": []')]),t._v(" "),e("td",[t._v("provides the required or optional parameters that accompany the Komodo RPC; in this case, the "),e("b",[t._v("getinfo")]),t._v(" RPC does not have any parameters, and therefore the array is empty")])]),t._v(" "),e("tr",[e("td",[t._v('}"')]),t._v(" "),e("td",[t._v("end of the string that contains the data object")])]),t._v(" "),e("tr",[e("td",[t._v("-H")]),t._v(" "),e("td",[t._v("informs the shell that there is an extra http header to include")])]),t._v(" "),e("tr",[e("td",[t._v("'content-type: text/plain;'")]),t._v(" "),e("td",[t._v("the http character set parameter; states that the header is provided in plain-text format")])]),t._v(" "),e("tr",[e("td",[t._v("http://127.0.0.1:9253/")]),t._v(" "),e("td",[t._v("the http destination. The 127.0.0.1 tells the shell to serve the content to the node's localhost server. The :9253 extension is the rpcport, as provided in the coin's .conf file")])]),t._v(" "),e("tr",[e("td",[t._v("| jq -r")]),t._v(" "),e("td",[t._v("instructs the shell to pipe the response through the jq software; the -r instruction informs jq that this is a raw object")])])])]),t._v(" "),e("p",[t._v("The response to the "),e("b",[t._v("getinfo")]),t._v(" RPC "),e("code",[t._v("curl")]),t._v(" command is as follows. Note that this is a json string and the developer must actively convert the response into a json object. For example, in JavaScript the appropriate function is "),e("code",[t._v("JSON.parse()")]),t._v(".")]),t._v(" "),e("h4",{attrs:{id:"response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2001526")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocolversion"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("170007")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"KMDversion"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.4.0a"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"synced"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"notarized"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"prevMoMheight"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"notarizedhash"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0000000000000000000000000000000000000000000000000000000000000000"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"notarizedtxid"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0000000000000000000000000000000000000000000000000000000000000000"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"notarizedtxid_height"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mempool"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"KMDnotarized_height"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"notarized_confirms"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"walletversion"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("60000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"balance"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"blocks"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"longestchain"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timeoffset"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tiptime"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1231006505")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"connections"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"proxy"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"difficulty"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"testnet"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"keypoololdest"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1561227622")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"keypoolsize"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("101")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"paytxfee"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"relayfee"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1e-06")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"errors"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pubkey"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"030746f79b31d1bb46aa10ee8ee72a06eba7375ca0aca411fa684936457363cdad"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"CCid"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TUT1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sapling"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("-1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"p2pport"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9252")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rpcport"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9253")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"magic"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("230635964")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"premine"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"mine-on-the-seed-node-using-curl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mine-on-the-seed-node-using-curl"}},[t._v("#")]),t._v(" Mine on the Seed Node Using curl")]),t._v(" "),e("p",[t._v("Use "),e("code",[t._v("curl")]),t._v(" to tell the "),e("code",[t._v("SEED")]),t._v(" node to begin mining the "),e("code",[t._v("TUT1")]),t._v(" Smart Chain. Use the "),e("RouterLink",{attrs:{to:"/basic-docs/smart-chains/smart-chain-api/generate.html#setgenerate"}},[e("b",[t._v("setgenerate")])]),t._v(" RPC for this function.")],1),t._v(" "),e("p",[t._v("Note that this RPC requires parameters in the "),e("code",[t._v("curl")]),t._v(" command: "),e("code",[t._v('\\"params\\": [true,1]')])]),t._v(" "),e("h4",{attrs:{id:"command-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#command-2"}},[t._v("#")]),t._v(" Command")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--user")]),t._v(" user3044755432:passd30f503069f140e8e0ffe4d3f1645a8eae8e923b20e6011630cc98880ec5c47320 --data-binary "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{'),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("jsonrpc"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("1.0"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("id"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("curl test"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("setgenerate"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("params"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(': [true,1]}"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type: text/plain;'")]),t._v(" http://127.0.0.1:9253/ "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" jq "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-r")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.result'")]),t._v("\n")])])]),e("p",[t._v("The "),e("b",[t._v("setgenerate")]),t._v(" RPC always returns "),e("code",[t._v("null")]),t._v(" as a response.")]),t._v(" "),e("h4",{attrs:{id:"response-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),t._v("\n")])])]),e("h2",{attrs:{id:"discover-the-state-of-mining-on-the-seed-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discover-the-state-of-mining-on-the-seed-node"}},[t._v("#")]),t._v(" Discover the State of Mining on the Seed Node")]),t._v(" "),e("p",[t._v("Use the "),e("RouterLink",{attrs:{to:"/basic-docs/smart-chains/smart-chain-api/mining.html#getmininginfo"}},[e("b",[t._v("getmininginfo")])]),t._v(" RPC to ensure that the command executed successfully.")],1),t._v(" "),e("h4",{attrs:{id:"command-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#command-3"}},[t._v("#")]),t._v(" Command")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--user")]),t._v(" user3044755432:passd30f503069f140e8e0ffe4d3f1645a8eae8e923b20e6011630cc98880ec5c47320 --data-binary "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{'),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("jsonrpc"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("1.0"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("id"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("curl test"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("getmininginfo"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("params"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(': []}"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type: text/plain;'")]),t._v(" http://127.0.0.1:9253/ "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" jq "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-r")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.result'")]),t._v("                  \n")])])]),e("h4",{attrs:{id:"response-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-3"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"blocks"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"currentblocksize"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"currentblocktx"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"difficulty"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"errors"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"genproclimit"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"localsolps"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.041666666666667")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"networksolps"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"networkhashps"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pooledtx"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"testnet"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"chain"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"staking"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"generate"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"numthreads"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"stop-mining-on-the-seed-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stop-mining-on-the-seed-node"}},[t._v("#")]),t._v(" Stop Mining on the Seed Node")]),t._v(" "),e("p",[t._v("To instruct the node to cease mining, we again use the "),e("RouterLink",{attrs:{to:"/basic-docs/smart-chains/smart-chain-api/generate.html#setgenerate"}},[e("b",[t._v("setgenerate")])]),t._v(" RPC, but this time we provide the parameter as "),e("code",[t._v("false")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--user")]),t._v(" user3044755432:passd30f503069f140e8e0ffe4d3f1645a8eae8e923b20e6011630cc98880ec5c47320 --data-binary "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{'),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("jsonrpc"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("1.0"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("id"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("curl test"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("setgenerate"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("params"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(': [false]}"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type: text/plain;'")]),t._v(" http://127.0.0.1:9253/ "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" jq "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-r")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.result'")]),t._v("       \n")])])]),e("h4",{attrs:{id:"response-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-4"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("null\n")])])]),e("hr"),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/basic-docs/antara/antara-tutorials/beginner-series-part-4.html#introduction"}},[t._v("Proceed to next tutorial article in the series.")])],1)])}),[],!1,null,null,null);e.default=r.exports}}]);