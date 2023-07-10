(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{587:function(a,t,s){"use strict";s.r(t);var n=s(10),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"compile-marketmaker-binary-with-static-nanomsg-in-macos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compile-marketmaker-binary-with-static-nanomsg-in-macos"}},[a._v("#")]),a._v(" Compile marketmaker Binary with Static nanomsg in MacOS")]),a._v(" "),t("p",[a._v("This guide will help you to compile your own marketmaker binary in MacOS (OSX) with static nanomsg. Follow this\n"),t("RouterLink",{attrs:{to:"/mmV1/guides/compile-marketmaker-binary-with-static-nanomsg-in-Linux.html"}},[a._v("guide")]),a._v(" for Linux.")],1),a._v(" "),t("h2",{attrs:{id:"install-dependency-packages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-dependency-packages"}},[a._v("#")]),a._v(" Install Dependency packages:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" update\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" cmake "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" libcurl4-openssl-dev build-essential\n")])])]),t("h2",{attrs:{id:"install-nanomsg"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-nanomsg"}},[a._v("#")]),a._v(" Install "),t("code",[a._v("nanomsg")])]),a._v(" "),t("p",[a._v("You'll need to install "),t("code",[a._v("homebrew")]),a._v(" (Google how to do it)")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" nanomsg\n")])])]),t("h2",{attrs:{id:"clone-supernet-repo-and-compile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clone-supernet-repo-and-compile"}},[a._v("#")]),a._v(" Clone SuperNET repo and compile")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/jl777/SuperNET\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/SuperNET/iguana\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout dev\n./m_mm\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("\n./osx_deploy.sh\n")])])]),t("p",[a._v("Once all done, you should be able to find both "),t("code",[a._v("iguana")]),a._v(" and "),t("code",[a._v("marketmaker")]),a._v(" static binaries in user's home directory, under "),t("code",[a._v("~/tmp/iguana/")]),a._v(".")])])}),[],!1,null,null,null);t.default=e.exports}}]);