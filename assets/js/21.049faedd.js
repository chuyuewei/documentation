(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{340:function(t,s,a){t.exports=a.p+"assets/img/wings_configuration_example.9f3fdd0b.png"},373:function(t,s,a){t.exports=a.p+"assets/img/node_allocations.323d67f2.png"},432:function(t,s,a){"use strict";a.r(s);var e=a(48),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"安装-wings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-wings"}},[t._v("#")]),t._v(" 安装 Wings")]),t._v(" "),e("p",[t._v("Wings 是翼龙的下一代服务器控制平面。它已经使用 Go 从头开始重建，并从我们的第一个 Nodejs 守护进程中吸取了教训。")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),e("p",[t._v("只有在运行 "),e("strong",[t._v("翼龙 1.x")]),t._v(" 时才应安装 Wings。不要为以前版本的翼龙安装此软件。")])]),t._v(" "),e("h2",{attrs:{id:"支持的系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支持的系统"}},[t._v("#")]),t._v(" 支持的系统")]),t._v(" "),e("p",[t._v("以下是支持的操作系统列表。请注意，这不是一个详尽的列表，您很有可能可以毫不费力地在其他 Linux 发行版上运行该软件。您有责任确定这些系统上可能需要哪些软件包。以下受支持操作系统的新版本也很有可能正常工作，您在安装是不仅限于以下列出的版本。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("操作系统")]),t._v(" "),e("th",[t._v("版本")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("支持状况")]),t._v(" "),e("th",[t._v("注意事项")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[t._v("Ubuntu")])]),t._v(" "),e("td",[t._v("18.04")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",[t._v("文档基于 Ubuntu 18.04 作为操作系统所编写的。")])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[t._v("20.04")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[t._v("22.04")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("CentOS")])]),t._v(" "),e("td",[t._v("7")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[t._v("8")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",[t._v("请注意，CentOS 8 已停运。使用 Rocky 或 Alma Linux.")])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("Debian")])]),t._v(" "),e("td",[t._v("10")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[t._v("11")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("Windows")])]),t._v(" "),e("td",[t._v("All")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),e("td",[t._v("该软件将无法在 Windows 环境中运行。")])])])]),t._v(" "),e("h2",{attrs:{id:"系统要求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统要求"}},[t._v("#")]),t._v(" 系统要求")]),t._v(" "),e("p",[t._v("要运行 Wings，您需要一个能够运行 Docker 镜像的 Linux 系统。大多数 VPS 和几乎所有专用服务器都应该能够运行 Docker，但也有一些极端情况。")]),t._v(" "),e("p",[t._v("当您的供应商使用 "),e("code",[t._v("Virtuozzo")]),t._v("、"),e("code",[t._v("OpenVZ")]),t._v("（或 "),e("code",[t._v("OVZ")]),t._v("）或 "),e("code",[t._v("LXC")]),t._v(" 虚拟化时，您很可能无法运行 Wings。一些提供商已经对嵌套虚拟化进行了必要的更改以支持 Docker。请咨询您的提供商的支持团队。KVM 保证可以工作。")]),t._v(" "),e("p",[t._v("最简单的检查方法是输入 "),e("code",[t._v("systemd-detect-virt")]),t._v("。\n如果结果不包含 "),e("code",[t._v("OpenVZ")]),t._v(" 或 "),e("code",[t._v("LXC")]),t._v("，应该没问题。当运行没有任何虚拟化的专用硬件时，将出现 "),e("code",[t._v("none")]),t._v(" 的结果。")]),t._v(" "),e("p",[t._v("如果由于某种原因不能正常工作，或者您仍然不确定，您也可以运行以下命令。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("dane@pterodactyl:~$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" dmidecode -s system-manufacturer\nVMware, Inc.\n")])])]),e("h2",{attrs:{id:"依赖项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#依赖项"}},[t._v("#")]),t._v(" 依赖项")]),t._v(" "),e("ul",[e("li",[t._v("curl")]),t._v(" "),e("li",[t._v("Docker")])]),t._v(" "),e("h3",{attrs:{id:"安装-docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker"}},[t._v("#")]),t._v(" 安装 Docker")]),t._v(" "),e("p",[t._v("如需快速安装 Docker 社区版，您可以执行以下命令：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sSL https://get.docker.com/ "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("CHANNEL")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("stable "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果速度过慢可以尝试阿里云源")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sSL https://get.docker.com/ "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("CHANNEL")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("stable "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" -s docker --mirror Aliyun\n")])])]),e("p",[t._v("如果您希望手动安装，请参考官方 Docker 文档了解如何在您的服务器上安装 Docker 社区版。下面列出了一些常用系统支持的快速链接。")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/centos/#install-docker-ce",target:"_blank",rel:"noopener noreferrer"}},[t._v("CentOS"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/debian/#install-docker-ce",target:"_blank",rel:"noopener noreferrer"}},[t._v("Debian"),e("OutboundLink")],1)])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("检查你的内核")]),t._v(" "),e("p",[t._v("请注意，某些主机安装了不支持 docker 重要功能的修改内核。 请通过运行 "),e("code",[t._v("uname -r")]),t._v(" 检查您的内核。 如果您的内核以 "),e("code",[t._v("-xxxx-grs-ipv6-64")]),t._v(" 或 "),e("code",[t._v("-xxxx-mod-std-ipv6-64")]),t._v(" 结尾，您可能使用的是不受支持的内核。 查看我们的 "),e("RouterLink",{attrs:{to:"/daemon/0.6/kernel_modifications.html"}},[t._v("内核修改")]),t._v(" 指南了解详细信息。")],1)]),t._v(" "),e("h4",{attrs:{id:"在启动时启动-docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在启动时启动-docker"}},[t._v("#")]),t._v(" 在启动时启动 Docker")]),t._v(" "),e("p",[t._v("如果您使用的是带有 systemd 的操作系统（Ubuntu 16+、Debian 8+、CentOS 7+），请运行以下命令以在您启动机器时启动 Docker。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("systemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" --now docker\n")])])]),e("h4",{attrs:{id:"启用虚拟内存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启用虚拟内存"}},[t._v("#")]),t._v(" 启用虚拟内存")]),t._v(" "),e("p",[t._v("在大多数系统上，默认情况下 Docker 将无法设置交换空间。您可以通过运行 "),e("code",[t._v("docker info")]),t._v(" 并在底部附近查找 "),e("code",[t._v("WARNING: No swap limit support")]),t._v(" 的输出来确认这一点。")]),t._v(" "),e("p",[t._v("启用虚拟内存是完全可选的，但如果您要为他人托管并防止出现 OOM 错误，我们建议您这样做。")]),t._v(" "),e("p",[t._v("要启用虚拟内存，请以 root 用户身份打开 "),e("code",[t._v("/etc/default/grub")]),t._v(" 并找到以 "),e("code",[t._v("GRUB_CMDLINE_LINUX_DEFAULT")]),t._v(" 为开头的一行。确保该行在双引号内的某处包含 "),e("code",[t._v("swapaccount=1")]),t._v("。")]),t._v(" "),e("p",[t._v("之后，运行 "),e("code",[t._v("sudo update-grub")]),t._v(" 然后运行 "),e("code",[t._v("sudo reboot")]),t._v(" 重启服务器并启用虚拟内存。\n下面是该行内容示例，"),e("em",[t._v("请勿逐字复制此行。 它通常具有其他特定于操作系统的参数。")])]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('GRUB_CMDLINE_LINUX_DEFAULT="swapaccount=1"\n')])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("GRUB 配置")]),t._v(" "),e("p",[t._v("一些 Linux 发行版可能会忽略 "),e("code",[t._v("GRUB_CMDLINE_LINUX_DEFAULT")]),t._v("。因此，如果默认的不适合您，您可能不得不使用 "),e("code",[t._v("GRUB_CMDLINE_LINUX")]),t._v("。")])]),t._v(" "),e("h2",{attrs:{id:"安装-wings-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-wings-2"}},[t._v("#")]),t._v(" 安装 Wings")]),t._v(" "),e("p",[t._v("安装 Wings 的第一步是确保我们已经设置了所需的目录结构。为此，请运行以下命令，这将创建基本目录并下载 wings 可执行文件。")]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("危险")]),t._v(" "),e("p",[t._v("Wings 及配置文件路径已写死，请不要想着更改路径。（当然，你可以修改配置中的存储路径）"),e("br"),t._v("\n并且 wings 文件和配置文件占用空间很低，在配置完设置后自行备份配置文件以防不测(如果真没了，那也是整个服务器没了吧...)。")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /etc/pterodactyl\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -L -o /usr/local/bin/wings "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/pterodactyl-china/wings/releases/latest/download/wings_linux_$([[ "'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("uname")]),t._v(" -m"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"x86_64"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"amd64"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"arm64"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\nchmod u+x /usr/local/bin/wings\n\n# 若阁下在上条指令上无法正常拉取压缩包或者拉取缓慢 可使用 Fastgit 提供的国内反向代理来拉取\ncurl -L -o /usr/local/bin/wings "')]),t._v("https://hub.fastgit.xyz/pterodactyl-china/wings/releases/latest/download/wings_linux_"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("uname")]),t._v(" -m"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"x86_64"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"amd64"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"arm64"')]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"\n')])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("OVH/SYS 服务器")]),t._v(" "),e("p",[t._v("如果您使用的是 OVH 或 SoYouStart 提供的服务器，请注意您的主驱动器空间可能分配给 "),e("code",[t._v("/home")]),t._v("，而不是默认分配给 "),e("code",[t._v("/")]),t._v("。\n请考虑使用 "),e("code",[t._v("/home/daemon-data")]),t._v(" 来存储服务器数据。在创建节点时可以很容易地设置。")])]),t._v(" "),e("h2",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),e("p",[t._v("安装 Wings 和所需组件后，下一步是在已安装的面板上创建一个节点。转到您的面板管理窗口，从侧边栏中选择节点，然后在右侧单击创建新按钮。")]),t._v(" "),e("p",[t._v("创建节点后，单击它，将出现一个名为“配置”的选项卡。复制代码块内容，将其粘贴到 "),e("code",[t._v("/etc/pterodactyl")]),t._v(" 中的一个名为 "),e("code",[t._v("config.yml")]),t._v(" 的新文件中并保存。")]),t._v(" "),e("p",[t._v("或者，您可以单击 “生成自动部署指令” 按钮，复制 bash 命令并将其粘贴到终端中。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(340),alt:"Wings 配置示例图片"}})]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),e("p",[t._v("当您的面板使用 SSL 时，Wings 还必须为其 域名(FQDN) 创建一个。在继续之前，请参阅 "),e("RouterLink",{attrs:{to:"/tutorials/creating_ssl_certificates.html"}},[t._v("创建 SSL 证书")]),t._v(" 文档页面了解如何创建这些证书。")],1)]),t._v(" "),e("h3",{attrs:{id:"启动-wings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动-wings"}},[t._v("#")]),t._v(" 启动 Wings")]),t._v(" "),e("p",[t._v("要启动 Wings，只需运行以下命令，它将以调试模式启动。一旦你确认它运行没有错误，使用 "),e("code",[t._v("CTRL+C")]),t._v(" 来终止进程并按照下面的说明使用守护进程。根据您服务器的互联网连接，第一次拉取和启动 Wings 可能需要几分钟时间。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" wings --debug\n")])])]),e("p",[t._v("您可以选择添加 "),e("code",[t._v("--debug")]),t._v(" 参数以在调试模式下运行 Wings。")]),t._v(" "),e("h3",{attrs:{id:"守护进程-使用-systemd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#守护进程-使用-systemd"}},[t._v("#")]),t._v(" 守护进程（使用 systemd）")]),t._v(" "),e("p",[t._v("在后台运行 Wings 是一项简单的任务，只需在执行此操作之前确保它运行无误即可。将下面的内容放在 "),e("code",[t._v("/etc/systemd/system")]),t._v(" 目录下的 "),e("code",[t._v("wings.service")]),t._v(" 文件中。")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[Unit]\nDescription=Pterodactyl Wings Daemon\nAfter=docker.service\nRequires=docker.service\nPartOf=docker.service\n\n[Service]\nUser=root\nWorkingDirectory=/etc/pterodactyl\nLimitNOFILE=4096\nPIDFile=/var/run/wings/daemon.pid\nExecStart=/usr/local/bin/wings\nRestart=on-failure\nStartLimitInterval=180\nStartLimitBurst=30\nRestartSec=5s\n\n[Install]\nWantedBy=multi-user.target\n")])])]),e("p",[t._v("然后，运行以下命令重新加载 systemd 并启动 Wings。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("systemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" --now wings\n")])])]),e("h3",{attrs:{id:"节点分配"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#节点分配"}},[t._v("#")]),t._v(" 节点分配")]),t._v(" "),e("p",[t._v("分配是 IP 和端口的组合，您可以分配给服务器。 每个创建的服务器必须至少有一个分配。 分配将是您的网络接口的 IP 地址。 在某些情况下，例如在使用了 NAT 的情况下，它将是内部 IP。 要创建新分配，请转到节点 > 您的节点 > 分配。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(373),alt:"节点分配示例图"}})]),t._v(" "),e("p",[t._v("输入 "),e("code",[t._v("hostname -I | awk '{print $1}'")]),t._v(" 查找要用于分配的 IP。或者，您可以输入 "),e("code",[t._v('ip addr | grep "inet "')]),t._v(" 查看所有可用的接口和 IP 地址。不要使用 127.0.0.1 进行分配。")])])}),[],!1,null,null,null);s.default=n.exports}}]);