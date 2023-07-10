(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{348:function(t,e,a){"use strict";a.r(e);var s=a(10),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"tutorial-getting-started"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-getting-started"}},[t._v("#")]),t._v(" Tutorial: Getting Started")]),t._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v("This tutorial covers the installation and initiation of the Antara Gaming Software Development Kit (SDK).")]),t._v(" "),e("h4",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://cmake.org/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CMake"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("Requires at least version 3.14 or greater")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://clang.llvm.org/get_started.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("clang-8 or higher"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("Windows Antara Gaming SDK supports both clang and clang-cl")])])]),t._v(" "),e("li",[t._v("(optional) "),e("a",{attrs:{href:"https://emscripten.org/docs/getting_started/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Emscripten"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("(Install the latest web version)")])])]),t._v(" "),e("li",[t._v("(optional) "),e("a",{attrs:{href:"https://docs.microsoft.com/en-us/visualstudio/install/install-visual-studio?view=vs-2019",target:"_blank",rel:"noopener noreferrer"}},[t._v("Visual Studio 2019"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("(optional) "),e("a",{attrs:{href:"https://docs.microsoft.com/en-us/cpp/build/clang-support-msbuild?view=vs-2019",target:"_blank",rel:"noopener noreferrer"}},[t._v("Clang VS Toolset"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("(installable through Visual Studio installer)")])])])]),t._v(" "),e("h2",{attrs:{id:"getting-started"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),e("p",[t._v("The following instructions create an installation of the Antara Gaming SDK that is useful for development and testing purposes.")]),t._v(" "),e("h3",{attrs:{id:"build"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[t._v("#")]),t._v(" Build")]),t._v(" "),e("p",[t._v("Execute the following commands in the terminal to build the project.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" build "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## bash or powershell")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" build "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## bash or powershell")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Release or Debug are available")]),t._v("\ncmake "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-DCMAKE_BUILD_TYPE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Debug "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-DCMAKE_CXX_COMPILER")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("your_path_to_your_clang++ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/ "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Linux / Osx")]),t._v("\ncmake "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-DCMAKE_BUILD_TYPE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Debug "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-G")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Visual Studio 16 2019"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-A")]),t._v(" x64 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-T")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ClangCl"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-DCMAKE_CXX_COMPILER")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C:/Program Files/LLVM/bin/clang-cl.exe"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/ "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Windows")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## We can even use Ninja for Windows / Linux / OSX")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## On Windows you may want to open x64 Visual Studio Terminal Prompt for using Ninja")]),t._v("\ncmake "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-G")]),t._v(" Ninja "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-DCMAKE_BUILD_TYPE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Debug "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-DCMAKE_CXX_COMPILER")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("path_to_clang++ "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-DCMAKE_C_COMPILER")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("path_to_clang "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Build (Debug / Release available)")]),t._v("\ncmake "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--build")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--config")]),t._v(" Debug\n")])])]),e("p",[t._v("There are also additional options with the CMake that allows to activate certain features of the SDK:")]),t._v(" "),e("h3",{attrs:{id:"cmake-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cmake-options"}},[t._v("#")]),t._v(" CMake Options")]),t._v(" "),e("p",[t._v("(Please use the scroll bar at the bottom of the table to view all table cells.)")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("How to enable it")]),t._v(" "),e("th",[t._v("Notes")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("USE_SFML_ANTARA_WRAPPER")])]),t._v(" "),e("td",[t._v("Enable the SFML module of the SDK")]),t._v(" "),e("td",[e("code",[t._v("-DUSE_SFML_ANTARA_WRAPPER=ON")])]),t._v(" "),e("td",[t._v("Requires SFML dependencies on Linux")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("USE_IMGUI_ANTARA_WRAPPER")])]),t._v(" "),e("td",[t._v("Enable the IMGUI Support for the SDK")]),t._v(" "),e("td",[e("code",[t._v("-DUSE_IMGUI_ANTARA_WRAPPER=ON")])]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("ENABLE_BLOCKCHAIN_MODULES")])]),t._v(" "),e("td",[t._v("Enable the Blockchain modules for the SDK (need additional dependencies)")]),t._v(" "),e("td",[e("code",[t._v("-DENABLE_BLOCKCHAIN_MODULES=ON")])]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("ANTARA_BUILD_DOCS")])]),t._v(" "),e("td",[t._v("Enable the build of the documentation for the SDK")]),t._v(" "),e("td",[e("code",[t._v("-DANTARA_BUILD_DOCS=ON")])]),t._v(" "),e("td",[t._v("Require Sphinx And Doxygen")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("USE_LUA_ANTARA_WRAPPER")])]),t._v(" "),e("td",[t._v("Enable the lua module for the SDK")]),t._v(" "),e("td",[e("code",[t._v("-DUSE_LUA_ANTARA_WRAPPER=ON")])]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("USE_ASAN")])]),t._v(" "),e("td",[t._v("Enable the Address Sanitizer for the Unit tests of the SDK")]),t._v(" "),e("td",[e("code",[t._v("-DUSE_ASAN=ON")])]),t._v(" "),e("td",[t._v("Cannot be mixed with "),e("code",[t._v("USE_TSAN")]),t._v(" and "),e("code",[t._v("USE_UBSAN")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("USE_UBSAN")])]),t._v(" "),e("td",[t._v("Enable the Undefined Behavior Sanitizer for the Unit tests of the SDK")]),t._v(" "),e("td",[e("code",[t._v("-DUSE_UBSAN=ON")])]),t._v(" "),e("td",[t._v("Cannot be mixed with "),e("code",[t._v("USE_TSAN")]),t._v(" and "),e("code",[t._v("USE_ASAN")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("USE_TSAN")])]),t._v(" "),e("td",[t._v("Enable the Undefined Behavior Sanitizer for the Unit tests of the SDK")]),t._v(" "),e("td",[e("code",[t._v("-DUSE_TSAN=ON")])]),t._v(" "),e("td",[t._v("Cannot be mixed with "),e("code",[t._v("USE_UBSAN")]),t._v(" and "),e("code",[t._v("USE_ASAN")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("BUILD_WITH_APPIMAGE")])]),t._v(" "),e("td",[t._v("Enable the AppImage auto-generation on Linux for bundle an executable builded with the SDK")]),t._v(" "),e("td",[e("code",[t._v("-DBUILD_WITH_APPIMAGE=ON")])]),t._v(" "),e("td",[t._v("Work’s only on Linux.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("ENABLE_HTML_COMPILATION")])]),t._v(" "),e("td",[t._v("Enable the HTML Compilation on Emscripten for an executable builded with the SDK")]),t._v(" "),e("td",[e("code",[t._v("-DENABLE_HTML_COMPILATION=ON")])]),t._v(" "),e("td",[t._v("Work’s only on Emscripten")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("COVERAGE_CLION_TOOLS")])]),t._v(" "),e("td",[t._v("Enable the Coverage inside CLion IDE")]),t._v(" "),e("td",[e("code",[t._v("-DCOVERAGE_CLION_TOOLS=ON")])]),t._v(" "),e("td",[t._v("Work’s only with CLion IDE and Require "),e("code",[t._v("ENABLE_COVERAGE")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("ANTARA_BUILD_EXAMPLES")])]),t._v(" "),e("td",[t._v("Enable the example of the SDK.")]),t._v(" "),e("td",[e("code",[t._v("-DANTARA_BUILD_EXAMPLES=ON")])]),t._v(" "),e("td",[t._v("Some examples need mix of options such as "),e("code",[t._v("USE_SFML_ANTARA_WRAPPER + ANTARA_BUILD_EXAMPLES")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("ANTARA_BUILD_UNIT_TESTS")])]),t._v(" "),e("td",[t._v("Enable the unit tests of the SDK.")]),t._v(" "),e("td",[e("code",[t._v("-DANTARA_BUILD_UNIT_TESTS=ON")])]),t._v(" "),e("td",[t._v("Some examples need mix of options such as "),e("code",[t._v("USE_LUA_ANTARA_WRAPPER + ANTARA_BUILD_UNIT_TESTS")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("USE_BOX2D_ANTARA_WRAPPER")])]),t._v(" "),e("td",[t._v("Enable the Box2D modules of the SDK.")]),t._v(" "),e("td",[e("code",[t._v("-DUSE_BOX2D_ANTARA_WRAPPER=ON")])]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("ENABLE_COVERAGE")])]),t._v(" "),e("td",[t._v("Enable the coverage macros for the SDK.")]),t._v(" "),e("td",[e("code",[t._v("-DENABLE_COVERAGE=ON")])]),t._v(" "),e("td")])])]),t._v(" "),e("h3",{attrs:{id:"initiating-the-project"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#initiating-the-project"}},[t._v("#")]),t._v(" Initiating the Project")]),t._v(" "),e("p",[t._v("Installation is not necessary.")]),t._v(" "),e("p",[t._v("Simply use the CMake "),e("code",[t._v("fetch_content")]),t._v(" command to use the project.")]),t._v(" "),e("h2",{attrs:{id:"running-tests"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#running-tests"}},[t._v("#")]),t._v(" Running Tests")]),t._v(" "),e("p",[t._v("(This section assumes that the reader has compiled the Antara Gaming SDK with the option to perform unit tests enabled.)")]),t._v(" "),e("p",[t._v("Unit tests are located in the following folders.")]),t._v(" "),e("ul",[e("li",[t._v("Linux/OSX: "),e("code",[t._v("bin/unit_tests")])]),t._v(" "),e("li",[t._v("Windows: "),e("code",[t._v("bin/unit_tests/%CMAKE_BUILD_TYPE%")])])]),t._v(" "),e("h2",{attrs:{id:"deployment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[t._v("#")]),t._v(" Deployment")]),t._v(" "),e("p",[t._v("(This section is still in development.)")]),t._v(" "),e("h2",{attrs:{id:"quick-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quick-example"}},[t._v("#")]),t._v(" Quick Example")]),t._v(" "),e("h4",{attrs:{id:"cmakelists-txt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cmakelists-txt"}},[t._v("#")]),t._v(" CMakeLists.txt")]),t._v(" "),e("p",[t._v("Create a basic "),e("code",[t._v("CMakeLists.txt")]),t._v(". This allows the SDK to compile source code.")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[t._v("##"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" Uncomment those lines "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" you use the gaming sdk as an external project\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("CMAKE_SYSTEM_NAME"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" STREQUAL ")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Linux"')]),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("set")]),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LINUX TRUE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("endif")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FetchContent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("FetchContent_Declare")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")])])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v("        "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("antara")]),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("gaming"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("sdk")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v("        "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("URL https"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")])]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//github.com/KomodoPlatform/antara-gaming-sdk/archive/master.zip")])]),t._v("\n#"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("FetchContent_MakeAvailable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("antara"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("gaming"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("sdk"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("init")]),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("_apple_env")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_executable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("quick_and_dirty quick_and_dirty"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cpp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("target_link_libraries")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("quick_and_dirty PUBLIC antara"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("world"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h4",{attrs:{id:"a-cpp-file-with-necessary-primitives"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#a-cpp-file-with-necessary-primitives"}},[t._v("#")]),t._v(" A Cpp File with Necessary Primitives")]),t._v(" "),e("p",[t._v("Create a cpp file with the primitives necessary to launch the intended game.")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("<iostream>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("<antara/gaming/core/safe.refl.hpp>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("<antara/gaming/world/world.app.hpp>")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("example_system")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" antara"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("gaming"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("ecs"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("post_update_system"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("example_system"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("example_system")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entt"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("registry"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" entity_registry"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("noexcept")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("system")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entity_registry"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//! Here you can initialize your system, adding entities etc")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("noexcept")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//! Your game logic here")]),t._v("\n        nb_iteration "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        std"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("cout "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nb_iteration: "')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" nb_iteration "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\n"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nb_iteration "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10ull")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            std"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("cout "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Maximum iteration reached, leaving game now\\n"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("dispatcher_"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token generic-function"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("trigger")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("antara"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("gaming"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("event"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("quit_game"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    std"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("size_t nb_iteration"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0ull")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("REFL_AUTO")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("example_system"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("my_world_example")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token base-clause"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" antara"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("gaming"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("world"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("app")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("my_world_example")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("noexcept")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("system_manager_"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token generic-function"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("create_system")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("example_system"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//! Here we load our system to use it.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    my_world_example world"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" world"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"sdk-components"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sdk-components"}},[t._v("#")]),t._v(" SDK Components")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/onqtam/doctest",target:"_blank",rel:"noopener noreferrer"}},[t._v("doctest"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("The fastest feature-rich C++11/14/17/20 single-header testing framework for unit tests and TDD "),e("a",{attrs:{href:"http://bit.ly/doctest-docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://bit.ly/doctest-docs"),e("OutboundLink")],1),t._v(" (MIT)")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/doom/strong_type",target:"_blank",rel:"noopener noreferrer"}},[t._v("doom-st"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("C++ implementation of strong types (MIT)")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/doom/meta",target:"_blank",rel:"noopener noreferrer"}},[t._v("doom-meta"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("Several metaprogramming utilities in C++ (MIT)")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/emilk/loguru",target:"_blank",rel:"noopener noreferrer"}},[t._v("loguru"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("A lightweight C++ logging library (Public Domain)")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/fmtlib/fmt",target:"_blank",rel:"noopener noreferrer"}},[t._v("fmt"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("A modern formatting library "),e("a",{attrs:{href:"https://fmt.dev",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://fmt.dev"),e("OutboundLink")],1),t._v(" (MIT)")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/nlohmann/json",target:"_blank",rel:"noopener noreferrer"}},[t._v("nlohmann-json"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("JSON for Modern C++ "),e("a",{attrs:{href:"https://nlohmann.github.io/json/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://nlohmann.github.io/json/"),e("OutboundLink")],1),t._v(" (MIT)")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/skypjack/entt",target:"_blank",rel:"noopener noreferrer"}},[t._v("EnTT"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("Gaming meets modern C++")]),t._v(" "),e("li",[t._v("A fast and reliable entity-component system (ECS) (MIT)")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/veselink1/refl-cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("refl-cpp"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("A compile-time reflection library for modern C++ (MIT)")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/ericniebler/range-v3",target:"_blank",rel:"noopener noreferrer"}},[t._v("range-v3"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("Range library for C++14/17/20")]),t._v(" "),e("li",[t._v("Basis for C++20’s "),e("code",[t._v("std::ranges")]),t._v(" (Boost Software License)")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/TartanLlama/expected",target:"_blank",rel:"noopener noreferrer"}},[t._v("expected"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("C++11/14/17 "),e("code",[t._v("std::expected")]),t._v(" with functional-style extensions")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://tl.tartanllama.xyz",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://tl.tartanllama.xyz"),e("OutboundLink")],1),t._v(" (CC0 1.0 Universal)")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/ocornut/imgui",target:"_blank",rel:"noopener noreferrer"}},[t._v("ImGui"),e("OutboundLink")],1),t._v(" (optional)\n"),e("ul",[e("li",[t._v("Dear ImGui: Bloat-free Immediate Mode Graphical User interface for C++ with minimal dependencies (MIT)")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/eliasdaler/imgui-sfml",target:"_blank",rel:"noopener noreferrer"}},[t._v("ImGui-SFML"),e("OutboundLink")],1),t._v(" (optional)\n"),e("ul",[e("li",[t._v("ImGui binding for use with SFML (MIT)")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/SFML/SFML",target:"_blank",rel:"noopener noreferrer"}},[t._v("SFML"),e("OutboundLink")],1),t._v(" (optional)\n"),e("ul",[e("li",[t._v("Simple and Fast Multimedia Library")]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.sfml-dev.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.sfml-dev.org/"),e("OutboundLink")],1)])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/DaanDeMeyer/reproc",target:"_blank",rel:"noopener noreferrer"}},[t._v("reproc"),e("OutboundLink")],1),t._v(" (optional)\n"),e("ul",[e("li",[t._v("Cross-platform (C99/C++11) process library (MIT)")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/lua/lua",target:"_blank",rel:"noopener noreferrer"}},[t._v("lua"),e("OutboundLink")],1),t._v(" (optional)\n"),e("ul",[e("li",[t._v("The Lua repo, as seen by the Lua team. (MIT)")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/ThePhD/sol2",target:"_blank",rel:"noopener noreferrer"}},[t._v("sol2"),e("OutboundLink")],1),t._v(" (optional)\n"),e("ul",[e("li",[t._v("Sol3 (sol2 v3.0)")]),t._v(" "),e("li",[t._v("a C++ <-> Lua API wrapper with advanced features and top notch performance")]),t._v(" "),e("li",[e("a",{attrs:{href:"http://sol2.rtfd.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://sol2.rtfd.io/"),e("OutboundLink")],1),t._v(" (MIT)")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/mrtazz/restclient-cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("restclient-cpp"),e("OutboundLink")],1),t._v(" (optional)\n"),e("ul",[e("li",[t._v("C++ client for making HTTP/REST requests")]),t._v(" "),e("li",[e("a",{attrs:{href:"http://code.mrtazz.com/restclient-cpp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://code.mrtazz.com/restclient-cpp/"),e("OutboundLink")],1),t._v(" (MIT)")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/erincatto/Box2D",target:"_blank",rel:"noopener noreferrer"}},[t._v("box2D"),e("OutboundLink")],1),t._v(" (optional)\n"),e("ul",[e("li",[t._v("Box2D is a 2D physics engine for games")]),t._v(" "),e("li",[e("a",{attrs:{href:"http://box2d.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://box2d.org"),e("OutboundLink")],1),t._v(" (ZLib)")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);