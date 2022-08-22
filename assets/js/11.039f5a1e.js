(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{342:function(t,a,s){t.exports=s.p+"assets/img/bt_3.ac996c9b.jpg"},366:function(t,a,s){t.exports=s.p+"assets/img/bt_1.0b7bb98c.png"},367:function(t,a,s){t.exports=s.p+"assets/img/bt_4.a78d60d9.png"},368:function(t,a,s){t.exports=s.p+"assets/img/bt_5.c7b3c8fd.png"},369:function(t,a,s){t.exports=s.p+"assets/img/bt_6.ec319b00.png"},370:function(t,a,s){t.exports=s.p+"assets/img/bt_2.8f44376e.png"},419:function(t,a,s){"use strict";s.r(a);var e=s(48),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"使用宝塔-bt-panel-面板搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用宝塔-bt-panel-面板搭建"}},[t._v("#")]),t._v(" 使用宝塔（BT-Panel）面板搭建")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#选择服务器操作系统"}},[t._v("选择服务器操作系统")])]),e("li",[e("a",{attrs:{href:"#安装宝塔面板"}},[t._v("安装宝塔面板")])]),e("li",[e("a",{attrs:{href:"#安装lnmp或lamp基础环境"}},[t._v("安装LNMP或LAMP基础环境")])]),e("li",[e("a",{attrs:{href:"#新建站点并开始构建"}},[t._v("新建站点并开始构建")]),e("ul",[e("li",[e("a",{attrs:{href:"#新建站点"}},[t._v("新建站点")])]),e("li",[e("a",{attrs:{href:"#下载并上传程序文件至网站目录"}},[t._v("下载并上传程序文件至网站目录")])]),e("li",[e("a",{attrs:{href:"#进入网站目录解压程序文件并设置环境文件"}},[t._v("进入网站目录解压程序文件并设置环境文件")])]),e("li",[e("a",{attrs:{href:"#使用-composer-安装相关依赖"}},[t._v("使用 Composer 安装相关依赖")])]),e("li",[e("a",{attrs:{href:"#伪静态及二级目录设置"}},[t._v("伪静态及二级目录设置")])]),e("li",[e("a",{attrs:{href:"#生成app-key并进行环境配置"}},[t._v("生成APP_KEY并进行环境配置")])]),e("li",[e("a",{attrs:{href:"#添加首位用户"}},[t._v("添加首位用户")])]),e("li",[e("a",{attrs:{href:"#设置程序文件权限"}},[t._v("设置程序文件权限")])])])]),e("li",[e("a",{attrs:{href:"#注册队列监听服务"}},[t._v("注册队列监听服务")]),e("ul",[e("li",[e("a",{attrs:{href:"#crontab-定时任务设置"}},[t._v("Crontab 定时任务设置")])]),e("li",[e("a",{attrs:{href:"#创建队列监听服务"}},[t._v("创建队列监听服务")])])])])])]),e("p"),t._v(" "),e("p",[t._v("翼龙面板运行在您自己的 Web 服务器上。为了运行和使用这个面板，您需要对您的服务器具有 root 访问权限。")]),t._v(" "),e("p",[t._v("您需要了解如何阅读文档以使用此面板。我们花了很多时间详细介绍如何安装或升级我们的软件；\n所以你也要花点时间去阅读而不是复制粘贴，然后在事情不起作用时候而抱怨。\n此面板不作为运行服务器的拖放服务存在。\n这是一个高度复杂的系统，需要多个依赖项，并且使用搭建他的网站管理人员需要付出一些时间学习如何使用它。"),e("br"),t._v(" "),e("strong",[t._v("如果您希望能够在一点一点一点都不了解基本 linux 系统管理的情况下来搭建翼龙面板，您现在应该停下来然后出门左拐。")])]),t._v(" "),e("h2",{attrs:{id:"选择服务器操作系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#选择服务器操作系统"}},[t._v("#")]),t._v(" 选择服务器操作系统")]),t._v(" "),e("p",[t._v("翼龙可在多种操作系统上运行，因此请选择最适合您使用的操作系统。")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),e("p",[t._v("由于与 Docker 不兼容，翼龙不支持大多数 OpenVZ 系统。如果您计划在基于 OpenVZ 的系统上运行此软件，您将很大概率不会成功。"),e("br"),t._v("\n不过翼龙面板前端就没那么需求了，只要阁下前端服务器能装 "),e("code",[t._v("BT-Panel")]),t._v("，和 "),e("code",[t._v("LNMP")]),t._v(" 或者 "),e("code",[t._v("LAMP")]),t._v("，就可以用来搭建翼龙面板前端了。一般服务器均能满足前端的搭建要求。")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("操作系统")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("版本")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("支持状况")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("注意事项")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("Ubuntu")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("18.04")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("文档基于 Ubuntu 18.04 作为操作系统所编写的。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("20.04")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("22.04")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("MariaDB 无需 repo 安装脚本即可安装。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("CentOS")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("7")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("需要额外的 repos。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("请注意，CentOS 8 已停运。使用 Rocky 或 Alma Linux。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("Debian")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("9")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("需要额外的 repos。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("11")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),e("h2",{attrs:{id:"安装宝塔面板"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装宝塔面板"}},[t._v("#")]),t._v(" 安装宝塔面板")]),t._v(" "),e("p",[t._v("此界面提供的安装脚本具有时间局限性，可能落后于官方最新版本，有条件的话请去宝塔官网查看")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Centos安装脚本")]),t._v("\nyum "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -O install.sh http://download.bt.cn/install/install_6.0.sh "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" install.sh ed8484bec\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Ubuntu/Deepin安装脚本")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -O install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" install.sh ed8484bec\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Debian安装脚本")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -O install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" install.sh ed8484bec\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 万能安装脚本")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" -f /usr/bin/curl "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sSO https://download.bt.cn/install/install_panel.sh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -O install_panel.sh https://download.bt.cn/install/install_panel.sh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" install_panel.sh ed8484bec\n")])])]),e("h2",{attrs:{id:"安装lnmp或lamp基础环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装lnmp或lamp基础环境"}},[t._v("#")]),t._v(" 安装LNMP或LAMP基础环境")]),t._v(" "),e("p",[e("code",[t._v("LNMP")]),t._v(" 和 "),e("code",[t._v("LAMP")]),t._v(" 分别代表着 "),e("code",[t._v("Linux")]),t._v(" "),e("code",[t._v("Nginx\\Apache")]),t._v(" "),e("code",[t._v("Mysql")]),t._v(" "),e("code",[t._v("PHP")]),e("br"),t._v("\n阁下选择版本请务必保证 "),e("code",[t._v("PHP")]),t._v("版本 >=  "),e("code",[t._v("8.1")]),t._v("、 "),e("code",[t._v("MySQL")]),t._v("版本 >=  "),e("code",[t._v("5.7")]),e("br"),t._v("\n这一般会在阁下第一次登录宝塔面板时提示安装，我不在此赘述，若阁下错过提示，可点击 "),e("code",[t._v("软件商店")]),t._v(" 自行安装"),e("br"),t._v("\n在安装完毕时，建议将 "),e("code",[t._v("PHP")]),t._v(" 的"),e("strong",[t._v("函数禁用")]),t._v("全部删除，并且在拓展里安装 "),e("code",[t._v("fileinfo")]),t._v(" ,他的作用还是很大的。")]),t._v(" "),e("h2",{attrs:{id:"新建站点并开始构建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新建站点并开始构建"}},[t._v("#")]),t._v(" 新建站点并开始构建")]),t._v(" "),e("h3",{attrs:{id:"新建站点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新建站点"}},[t._v("#")]),t._v(" 新建站点")]),t._v(" "),e("p",[t._v("我觉得你应该会使用宝塔面板来新建一个网站")]),t._v(" "),e("p",[e("img",{attrs:{src:s(366),alt:"如果你看到我说明图挂了"}})]),t._v(" "),e("h3",{attrs:{id:"下载并上传程序文件至网站目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载并上传程序文件至网站目录"}},[t._v("#")]),t._v(" 下载并上传程序文件至网站目录")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("strong",[t._v("官方版")])]),t._v(" "),e("th",[e("strong",[t._v("稳定版")])]),t._v(" "),e("th",[e("strong",[t._v("开发版")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("img",{attrs:{src:"https://img.shields.io/github/v/release/pterodactyl/panel?style=for-the-badge&logo=appveyor&label=%E6%9C%80%E6%96%B0%E5%8F%91%E5%B8%83%E7%89%88%E6%9C%AC",alt:"GitHub Releases"}})]),t._v(" "),e("td",[e("img",{attrs:{src:"https://img.shields.io/github/v/release/pterodactyl-china/pterodactyl-chinese-stable?style=for-the-badge&logo=appveyor&label=%E6%9C%80%E6%96%B0%E5%8F%91%E5%B8%83%E7%89%88%E6%9C%AC",alt:"GitHub Releases"}})]),t._v(" "),e("td",[e("img",{attrs:{src:"https://img.shields.io/github/v/release/pterodactyl-china/panel?style=for-the-badge&logo=appveyor&label=%E6%9C%80%E6%96%B0%E5%8F%91%E5%B8%83%E7%89%88%E6%9C%AC",alt:"GitHub Releases"}})])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("img",{attrs:{src:"https://img.shields.io/github/v/tag/pterodactyl-china/panel?display_name=tag&include_prereleases&style=for-the-badge&logo=appveyor&label=%E6%9C%80%E6%96%B0%E9%A2%84%E5%8F%91%E5%B8%83%E7%89%88%E6%9C%AC",alt:"GitHub Releases pre-releases"}})])])])]),t._v(" "),e("p",[t._v("二选一即可")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("使用翼龙中国稳定版程序")]),t._v(" "),e("p",[t._v("翼龙中国稳定版 是在 翼龙官方最新的发行版 基础上进行的汉化，若阁下喜欢稳定，则可使用以下命令下载稳定版程序")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("https://github.com/pterodactyl-china/pterodactyl-china-stable/releases/latest/download/panel.tar.gz\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果阁下下不动这个文件，可以使用 Fastgit 提供的国内反向代理来下载 链接如下")]),t._v("\nhttps://hub.fastgit.xyz/pterodactyl-china/pterodactyl-china-stable/releases/latest/download/panel.tar.gz\n")])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("使用翼龙中国开发版程序")]),t._v(" "),e("p",[t._v("翼龙中国开发版 是在 翼龙官方上游仓库上实时同步 进行的汉化，包含了翼龙官方最新的功能更新/修复，同时也可能带来了新的问题，若阁下喜欢使用开发版，则可使用以下命令下载开发版程序")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("https://github.com/pterodactyl-china/panel/releases/latest/download/panel.tar.gz\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果阁下下不动这个文件，可以使用 Fastgit 提供的国内反向代理来下载 链接如下")]),t._v("\nhttps://hub.fastgit.xyz/pterodactyl-china/panel/releases/latest/download/panel.tar.gz\n")])])])]),t._v(" "),e("h3",{attrs:{id:"进入网站目录解压程序文件并设置环境文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进入网站目录解压程序文件并设置环境文件"}},[t._v("#")]),t._v(" 进入网站目录解压程序文件并设置环境文件")]),t._v(" "),e("p",[t._v("现在所有文件都已下载，我们需要进入网站目录解压刚刚上传的 "),e("code",[t._v("panel.tar.gz")]),t._v(" 压缩包")]),t._v(" "),e("p",[t._v("然后将 "),e("code",[t._v(".env.example")]),t._v("  文件重命名为 "),e("code",[t._v(".env")])]),t._v(" "),e("h3",{attrs:{id:"使用-composer-安装相关依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-composer-安装相关依赖"}},[t._v("#")]),t._v(" 使用 Composer 安装相关依赖")]),t._v(" "),e("p",[t._v("点击 网站的 "),e("code",[t._v("设置")]),t._v(" ，再点击 "),e("code",[t._v("设置")]),t._v(" 里的 "),e("code",[t._v("Composer")]),e("br"),t._v(" "),e("img",{attrs:{src:s(342),alt:"如果你看到我说明图挂了"}}),t._v(" "),e("img",{attrs:{src:s(367),alt:"如果你看到我说明图挂了"}})]),t._v(" "),e("p",[t._v("先点击 "),e("code",[t._v("升级Composer")]),t._v(" 确保其为最新版本，并按红圈所示选择"),e("br"),t._v("\n在 "),e("code",[t._v("补充命令")]),t._v(" 中输入以下命令后点击 "),e("code",[t._v("执行")]),t._v(" ，等待命令执行完成后关闭窗口即可。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("composer install --no-dev --optimize-autoloader\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),e("p",[t._v("在进行以下步骤之前，请阁下为面板前端新建一个数据库，我相信阁下的聪明脑袋一定会用宝塔面板新建一个数据库吧。")])]),t._v(" "),e("h3",{attrs:{id:"伪静态及二级目录设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#伪静态及二级目录设置"}},[t._v("#")]),t._v(" 伪静态及二级目录设置")]),t._v(" "),e("p",[t._v("点击 网站的 "),e("code",[t._v("设置")]),t._v(" ，进入设置界面\n"),e("img",{attrs:{src:s(342),alt:"如果你看到我说明图挂了"}})]),t._v(" "),e("h4",{attrs:{id:"伪静态设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#伪静态设置"}},[t._v("#")]),t._v(" 伪静态设置")]),t._v(" "),e("p",[t._v("点击 "),e("code",[t._v("设置")]),t._v(" 里的 "),e("code",[t._v("伪静态")]),e("br"),t._v(" "),e("img",{attrs:{src:s(368),alt:"如果你看到我说明图挂了"}})]),t._v(" "),e("p",[t._v("先点击左上角的伪静态模板，并使用 "),e("code",[t._v("laravel5")]),t._v(" 伪静态模板\n点击 "),e("code",[t._v("保存")]),t._v(" 即可设置成功。")]),t._v(" "),e("h4",{attrs:{id:"二级目录设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二级目录设置"}},[t._v("#")]),t._v(" 二级目录设置")]),t._v(" "),e("p",[t._v("点击 "),e("code",[t._v("设置")]),t._v(" 里的 "),e("code",[t._v("网站目录")]),t._v(" "),e("img",{attrs:{src:s(369),alt:"如果你看到我说明图挂了"}})]),t._v(" "),e("p",[t._v("点击 "),e("code",[t._v("运行目录")]),t._v(" 一栏，并选择 "),e("code",[t._v("/public")]),t._v("\n点击 "),e("code",[t._v("保存")]),t._v(" 即可设置成功。")]),t._v(" "),e("h3",{attrs:{id:"生成app-key并进行环境配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生成app-key并进行环境配置"}},[t._v("#")]),t._v(" 生成APP_KEY并进行环境配置")]),t._v(" "),e("p",[t._v("现在我们要开始输入一些指令了，请阁下先记住在宝塔新建站点时设置的站点目录")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#进入站点目录")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("阁下在宝塔新建站点时设置的站点目录"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 例如 cd /www/wwwroot/pterodactyl")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注意，以下指令仅针对于第一次安装部署翼龙面板前端")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 且对应数据库内无数据时执行，若阁下并非第一次安装且数据库内有数据，请忽略此指令")]),t._v("\nphp artisan key:generate --force\n")])])]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#下面两个指令是设置一些基础信息和数据库配置，阁下应该在此步骤之前为面板前端新建一个数据库")]),t._v("\nphp artisan p:environment:setup\nphp artisan p:environment:database\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下面这个指令是配置面板的发件系统，如果阁下不需要可忽略")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 若使用 PHP 自带的 mail 拓展 (不推荐使用), 请在执行以下指令后选择 "mail"。')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 若使用自定义 SMTP 服务器，请在执行以下指令后选择 "smtp"。')]),t._v("\nphp artisan p:environment:mail\n")])])]),e("p",[t._v("现在我们要将面板所有的核心数据写入我们之前为面板准备的数据库内。")]),t._v(" "),e("p",[e("strong",[t._v("此步骤可能花费较长时间来进行执行，花费的时间取决于您的主机性能，主机与数据库主机的网络连接状态等因素。请耐心等待数据导入完成，切勿中途使用 CTRL+C 强制中断执行！")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("php artisan migrate --seed --force\n")])])]),e("h3",{attrs:{id:"添加首位用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加首位用户"}},[t._v("#")]),t._v(" 添加首位用户")]),t._v(" "),e("p",[t._v("数据库配置完成后，您需要为面板创建一个管理用户，以便您可以登录面板。 为此，请运行以下命令。 并保证账户密码满足以下要求：8 个字符，大小写混合，至少一个数字。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("php artisan p:user:make\n")])])]),e("h3",{attrs:{id:"设置程序文件权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置程序文件权限"}},[t._v("#")]),t._v(" 设置程序文件权限")]),t._v(" "),e("p",[t._v("我们需要进入网站目录并全选设置文件权限为 "),e("code",[t._v("755")]),t._v(" 所有者为 "),e("code",[t._v("www")])]),t._v(" "),e("p",[e("img",{attrs:{src:s(370),alt:"如果你看到我说明图挂了"}})]),t._v(" "),e("h2",{attrs:{id:"注册队列监听服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注册队列监听服务"}},[t._v("#")]),t._v(" 注册队列监听服务")]),t._v(" "),e("p",[t._v("我们使用队列来使应用程序更快，并在后台处理发送电子邮件和其他操作。您需要设置工作队列以处理这些操作。")]),t._v(" "),e("h3",{attrs:{id:"crontab-定时任务设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crontab-定时任务设置"}},[t._v("#")]),t._v(" Crontab 定时任务设置")]),t._v(" "),e("p",[t._v("我们需要做的第一件事是创建一个新的 Cronjob，它每分钟运行一次以处理特定的任务，例如会话清理并将计划任务发送到守护进程。 您需要使用 "),e("code",[t._v("sudo crontab -e")]),t._v(" 打开您的 "),e("code",[t._v("crontab")]),t._v("，然后将以下字符串以新一行粘贴进去，并保存更改。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("* * * * * php /var/www/pterodactyl/artisan schedule:run "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /dev/null "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v("\n")])])]),e("h3",{attrs:{id:"创建队列监听服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建队列监听服务"}},[t._v("#")]),t._v(" 创建队列监听服务")]),t._v(" "),e("p",[t._v("接下来，您需要创建一个新的 systemd 来保持我们的队列进程在后台运行。 该队列负责发送电子邮件并为翼龙面板处理许多其他后台任务。")]),t._v(" "),e("p",[t._v("在 "),e("code",[t._v("/etc/systemd/system")]),t._v(" 文件夹中创建一个名为 "),e("code",[t._v("pteroq.service")]),t._v(" 的文件，其内容如下。")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 翼龙工作队列文件\n# ----------------------------------\n\n[Unit]\nDescription=Pterodactyl Queue Worker\nAfter=redis-server.service\n\n[Service]\n# 在某些系统上用户和组可能不同。\n# 有些系统使用 `apache` 或 `nginx` 作为用户和组。\nUser=www\nGroup=www\nRestart=always\nExecStart=/usr/bin/php /var/www/pterodactyl/artisan queue:work --queue=high,standard,low --sleep=3 --tries=3\nStartLimitInterval=180\nStartLimitBurst=30\nRestartSec=5s\n\n[Install]\nWantedBy=multi-user.target\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("CentOS 上的 Redis")]),t._v(" "),e("p",[t._v("如果您使用的是 CentOS，则需要在 "),e("code",[t._v("After=")]),t._v(" 一行将 "),e("code",[t._v("redis-server.service")]),t._v(" 替换为 "),e("code",[t._v("redis.service")]),t._v("，以确保 "),e("code",[t._v("redis")]),t._v(" 在工作队列之前启动。")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("如果你没有使用 "),e("code",[t._v("redis")]),t._v(" 做任何事情，你应该删除 "),e("code",[t._v("After=")]),t._v(" 一行，否则服务启动时会遇到错误。"),e("br"),t._v("\n如果你的面板路径并不是 "),e("code",[t._v("/var/www/pterodactyl/")]),t._v("，请替换为你面板的绝对路径，否则邮件服务将无法使用。"),e("br"),t._v("\n如果你宝塔默认命令行使用的并不是 "),e("code",[t._v("8.1")]),t._v("PHP 可以尝试使用绝对路径，将 "),e("code",[t._v("/usr/bin/php")]),t._v(" 改为 "),e("code",[t._v("/www/server/php/81/bin/php")])])]),t._v(" "),e("p",[t._v("如果您在系统中使用 redis，则需要确保启用它会在引导时启动。您可以通过运行以下命令来执行此操作：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" --now redis-server\n")])])]),e("p",[t._v("最后，启动队列监听服务并设置开启自动启动")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" --now pteroq.service\n")])])]),e("h4",{attrs:{id:"下一步-网络服务器配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下一步-网络服务器配置"}},[t._v("#")]),t._v(" 下一步："),e("a",{attrs:{href:"./webserver_configuration"}},[t._v("网络服务器配置")])])])}),[],!1,null,null,null);a.default=r.exports}}]);