import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,c as o,b as d,w as a,a as e,o as r,e as s}from"./app-ydblb6sM.js";const u={},m=e("h1",{id:"创建-ssl-证书",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#创建-ssl-证书"},[e("span",null,"创建 SSL 证书")])],-1),p=e("p",null,"本页将为您介绍如何为面板和 Wings 创建新的 SSL 证书",-1),h=e("p",null,[s("首先,我们将安装 Certbot,这是一个脚本文件,它可以自动更新证书并一键创建证书。下面的命令只适合 Ubuntu，但您可以在 "),e("a",{href:"https://certbot.eff.org/",target:"_blank",rel:"noopener noreferrer"},"Certbot 官方网站"),s("查看相关安装说明,我们这里包含了安装 Certbot 必要的Nginx或Apache插件的指令,这样妈妈再也不用担心我需要迁移环境了!")],-1),b=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token function"},"sudo"),s(),e("span",{class:"token function"},"apt"),s(" update")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token function"},"sudo"),s(),e("span",{class:"token function"},"apt"),s(),e("span",{class:"token function"},"install"),s(),e("span",{class:"token parameter variable"},"-y"),s(" certbot")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Nginx 插件")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token function"},"sudo"),s(),e("span",{class:"token function"},"apt"),s(),e("span",{class:"token function"},"install"),s(),e("span",{class:"token parameter variable"},"-y"),s(" python3-certbot-nginx")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Apache 插件")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token function"},"sudo"),s(),e("span",{class:"token function"},"apt"),s(),e("span",{class:"token function"},"install"),s(),e("span",{class:"token parameter variable"},"-y"),s(" python3-certbot-apache")]),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),_=e("h2",{id:"创建证书",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#创建证书"},[e("span",null,"创建证书")])],-1),g=e("p",null,"安装Certbot之后我们需要生成一个证书,最简单的方法就是安装Web服务器的Certbot插件,如果没有Web服务器的话就需要DNS验证了",-1),v=e("p",null,[s("在下面命令中,请您替换 "),e("code",null,"example.com"),s(" 域名为您自己需要生成证书的域名,当您需要申请多个域名的证书时可以在每个域名前面添加 "),e("code",null,"-d"),s(" 参数 ，列如 "),e("code",null,"-d anotherdomain.com"),s("，当然您还可以考虑生成通配符证书，但本教程未涉及。")],-1),y=e("h3",{id:"http-验证",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#http-验证"},[e("span",null,"HTTP 验证")])],-1),f=e("p",null,"HTTP 验证需要您开放服务器 80 端口来进行验证",-1),k=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# Nginx")]),s(`
`),e("span",{class:"line"},[s("certbot certonly "),e("span",{class:"token parameter variable"},"--nginx"),s(),e("span",{class:"token parameter variable"},"-d"),s(" example.com")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Apache")]),s(`
`),e("span",{class:"line"},[s("certbot certonly "),e("span",{class:"token parameter variable"},"--apache"),s(),e("span",{class:"token parameter variable"},"-d"),s(" example.com")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# 如果以上两者都不起作用您可以试试这个,但是用之前请确保Web服务器已经关闭")]),s(`
`),e("span",{class:"line"},[s("certbot certonly "),e("span",{class:"token parameter variable"},"--standalone"),s(),e("span",{class:"token parameter variable"},"-d"),s(" example.com")]),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),x=e("h3",{id:"dns-验证",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dns-验证"},[e("span",null,"DNS 验证")])],-1),C=e("p",null,"DNS 验证要求您去您的域名购买商那里解析相应的TXT DNS记录值以验证域名所有权，而不必公开 80 端口。在运行下面的 certbot 命令时会显示说明。",-1),S=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"line"},[s("certbot "),e("span",{class:"token parameter variable"},"-d"),s(" example.com "),e("span",{class:"token parameter variable"},"--manual"),s(" --preferred-challenges dns certonly")]),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),A=e("h3",{id:"自动续签",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#自动续签"},[e("span",null,"自动续签")])],-1),P=e("p",null,[s("您可以配置证书自动续签以防止证书过期,您可以使用 "),e("code",null,"sudo crontab -e"),s(" 打开 crontab 来添加下面的代码,该代码将在每天 23点 (晚上11点)都会检查一遍SSL证书是否过期并尝试续签")],-1),I=e("p",null,[s("部署成功后将会自动重启 Nginx 并应用新的 SSL 证书,您可以将 "),e("code",null,"systemctl restart nginx"),s(" 中的 "),e("code",null,"nginx"),s(" 更改为 "),e("code",null,"apache"),s(" 或 "),e("code",null,"wings")],-1),N=e("p",null,[s("对更高级的用户来说,我们建议使用 "),e("a",{href:"https://acme.sh",target:"_blank",rel:"noopener noreferrer"},"acme.sh"),s(" ，它提供了更多更强大的功能")],-1),D=e("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[e("pre",{class:"language-text"},[e("code",null,[e("span",{class:"line"},'0 23 * * * certbot renew --quiet --deploy-hook "systemctl restart nginx"'),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),T=e("h3",{id:"疑难解答",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#疑难解答"},[e("span",null,"疑难解答")])],-1),L=e("p",null,[s("如果您在尝试访问面板或 Wings 时遇到 "),e("code",null,"不安全连接"),s(" 或 SSL/TLS 相关的错误时,有可能是您的 SSL 证书过期了,您可以通过更新 SSL 证书来解决,如果您的 80 端口正在被占用那就无法使用 "),e("code",null,"certbot-renew"),s(" 来完成自动续签")],-1),E=e("p",null,[s("如果您运行的是 Nginx,在运行 Certbot 并附带有 "),e("code",null,"-nginx"),s(" 时出现报错您可以先停止 Nginx 服务后来续签证书，然后再启动 Nginx,如果您在为 Wings 续签证书，那你可以替换为 "),e("code",null,"wings")],-1),w=e("p",null,"停止 Nginx:",-1),F=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"line"},"systemctl stop nginx"),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),B=e("p",null,"续签证书:",-1),W=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"line"},"certbot renew"),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),O=e("p",null,"在完成续签后请使用下面的命令来重启 Nginx:",-1),R=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"line"},"systemctl start nginx"),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),K=e("p",null,"您可能还需要重新启动 Wings，因为并非每个服务都能够自动应用更新的证书：",-1),M=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"line"},"systemctl restart wings"),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),U=e("p",null,[s("该方法适合高级用户和无法开放80端口的用户, 下面的命令适用于 Ubuntu 和 Cloudflare API,您可以查看 "),e("a",{href:"https://github.com/Neilpang/acme.sh",target:"_blank",rel:"noopener noreferrer"},"acme.sh 的官方网站"),s(" 来获取相关说明")],-1),V=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token function"},"curl"),s(" https://get.acme.sh "),e("span",{class:"token operator"},"|"),s(),e("span",{class:"token function"},"sh")]),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),q=e("h3",{id:"获取-cloudflare-api-密钥",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#获取-cloudflare-api-密钥"},[e("span",null,"获取 Cloudflare API 密钥")])],-1),Z=e("p",null,"安装 acme.sh 后，我们需要获取 CloudFlare API 密钥。 在 Cloudfare 的网站上，选择您的域名，然后在右侧复制您的 “区域 ID” 和 “帐户 ID”，然后单击 “获取您的 API 令牌”，单击 “创建令牌” > 选择模板 “编辑区域 DNS” > 选择 “区域资源” 的范围，然后单击 “继续以显示摘要”，复制您的令牌。",-1),j=e("h3",{id:"申请证书",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#申请证书"},[e("span",null,"申请证书")])],-1),z=e("p",null,"由于配置文件基于 Certbot,所以我们需要手动创建一个文件夹",-1),G=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token function"},"sudo"),s(),e("span",{class:"token function"},"mkdir"),s(),e("span",{class:"token parameter variable"},"-p"),s(" /etc/letsencrypt/live/example.com")]),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),Y=e("p",null,"安装 acme 之后执行它并获取 Cloudflare 的 API 密钥,然后输入 Cloudflare 的 API 凭据来生成证书",-1),H=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token builtin class-name"},"export"),s(),e("span",{class:"token assign-left variable"},"CF_Token"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},'"Your_CloudFlare_API_Key"')]),s(`
`),e("span",{class:"line"},[e("span",{class:"token builtin class-name"},"export"),s(),e("span",{class:"token assign-left variable"},"CF_Account_ID"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},'"Your_CloudFlare_Account_ID"')]),s(`
`),e("span",{class:"line"},[e("span",{class:"token builtin class-name"},"export"),s(),e("span",{class:"token assign-left variable"},"CF_Zone_ID"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},'"Your_CloudFlare_Zone_ID"')]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),J=e("p",null,"然后创建证书",-1),X=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"line"},[s("acme.sh "),e("span",{class:"token parameter variable"},"--issue"),s(),e("span",{class:"token parameter variable"},"--dns"),s(" dns_cf "),e("span",{class:"token parameter variable"},"-d"),s(),e("span",{class:"token string"},'"example.com"'),s(),e("span",{class:"token parameter variable"},"--server"),s(" letsencrypt "),e("span",{class:"token punctuation"},"\\")]),s(`
`),e("span",{class:"line"},[s("--key-file /etc/letsencrypt/live/example.com/privkey.pem "),e("span",{class:"token punctuation"},"\\")]),s(`
`),e("span",{class:"line"},"--fullchain-file /etc/letsencrypt/live/example.com/fullchain.pem"),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Q=e("h3",{id:"自动续签-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#自动续签-1"},[e("span",null,"自动续签")])],-1),$=e("p",null,"第一次运行脚本后,它将自动添加到 crontab,您可以使用以下命令来编辑自动续订间隔",-1),ee=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token function"},"sudo"),s(),e("span",{class:"token function"},"crontab"),s(),e("span",{class:"token parameter variable"},"-e")]),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),se=e("p",null,[s("这适用于高级用户，他们正在使用 Cloudflare 代理模式或无法访问端口 "),e("code",null,"80"),s(".")],-1),ae=e("h3",{id:"使用-cloudflare-dns-插件安装-caddy",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用-cloudflare-dns-插件安装-caddy"},[e("span",null,"使用 Cloudflare DNS 插件安装 Caddy")])],-1),ne=e("p",null,"Caddy 默认不带有 Cloudflare DNS 插件，您需要自行安装。",-1),le=e("p",null,"有两种主要方法:",-1),te=e("ol",null,[e("li",null,[s("使用 "),e("code",null,"xcaddy"),s(" - 用于构建自己的 Caddy 版本的 CLI 工具")]),e("li",null,[s("从 "),e("a",{href:"https://caddyserver.com/download",target:"_blank",rel:"noopener noreferrer"},"Caddy 的下载页面"),s("下载预构建的二进制文件。")]),e("li",null,[s("使用 Ansible 下载并安装带有插件的 Caddy。请参阅 "),e("a",{href:"https://github.com/caddy-ansible/caddy-ansible",target:"_blank",rel:"noopener noreferrer"},"caddy-ansible")])],-1),ie=e("h4",{id:"在您的服务器上使用-xcaddy-构建-caddy",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#在您的服务器上使用-xcaddy-构建-caddy"},[e("span",null,[s("在您的服务器上使用 "),e("code",null,"xcaddy"),s(" 构建 Caddy")])])],-1),ce=e("p",null,[s("请参阅 "),e("a",{href:"https://caddyserver.com/docs/build#xcaddy",target:"_blank",rel:"noopener noreferrer"},"Caddy 构建文档"),s("。")],-1),oe=e("h3",{id:"获取-cloudflare-api-令牌",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#获取-cloudflare-api-令牌"},[e("span",null,"获取 CloudFlare API 令牌")])],-1),de=e("p",null,"在安装 acme.sh 后，我们需要获取 CloudFlare API 密钥。请确保 DNS 记录（A 记录或 CNAME 记录）指向您的目标节点，并将云设置为灰色（绕过 CloudFlare 代理）。然后转到“我的配置文件”>“API 密钥”，在全局 API 密钥子选项卡上，单击“查看”，输入您的 CloudFlare 密码，并将 API 密钥复制到剪贴板。",-1),re=e("p",null,[s("在安装带有 Cloudflare DNS 插件的 Caddy 后，我们需要获取 Cloudflare API 令牌。请确保 DNS 记录（A 记录或 CNAME 记录）指向您的目标节点。然后转到“我的配置文件”>“API 令牌”，在 API 令牌上单击“创建令牌”。创建 API 令牌 > API 令牌模板，在带有“编辑区域 DNS”的行末尾，单击“使用模板”。在"),e("strong",null,"区域资源"),s("下，选择您希望创建 API 令牌的 DNS 区域，单击“继续到摘要”。查看 API 令牌摘要，然后单击“创建令牌”。最后将 API 令牌复制到剪贴板。")],-1),ue=e("h3",{id:"重新配置-caddy-以使用-cloudflare-dns-获取证书",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#重新配置-caddy-以使用-cloudflare-dns-获取证书"},[e("span",null,"重新配置 Caddy 以使用 Cloudflare DNS 获取证书")])],-1),me=e("p",null,[s("首先，您需要创建一个环境变量文件（例如 "),e("code",null,".env"),s("），请注意，此文件包含机密信息，不应该被公开访问。")],-1),pe=e("p",null,[s("我们建议您将此机密文件放在以下位置: "),e("code",null,"/etc/caddy/.secrets.env"),s("。")],-1),he=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token assign-left variable"},"CLOUDFLARE_API_TOKEN"),e("span",{class:"token operator"},"="),e("span",{class:"token operator"},"<"),s("您的 Cloudflare API 令牌"),e("span",{class:"token operator"},">")]),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),be=e("p",null,[s("出于安全原因，我们建议将权限设置为 "),e("code",null,"0600"),s(" （只有所有者可以读取或写入文件）。")],-1),_e=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# 将 `.secrets.env` 文件的所有权设置为 `caddy` 系统用户")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token function"},"chown"),s(" caddy:caddy /etc/caddy/.secrets.env")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# 仅允许所有者读写权限 - 即 `caddy` 系统用户")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token function"},"chmod"),s(" 0600 /etc/caddy/.secrets.env")]),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),ge=e("p",null,[s("接下来，修改 systemd 单元文件，以从文件加载环境变量（在 "),e("code",null,"ExecStart"),s(" 中添加 "),e("code",null,"--envfile /etc/caddy/.secrets.env"),s(" 标志）。默认的 systemd 单元文件位置是 "),e("code",null,"/etc/systemd/system/caddy.service"),s(":")],-1),ve=e("div",{class:"language-unit line-numbers-mode","data-ext":"unit","data-title":"unit"},[e("pre",{class:"language-unit"},[e("code",null,[e("span",{class:"line"},"[Unit]"),s(`
`),e("span",{class:"line"},"Description=Caddy"),s(`
`),e("span",{class:"line"},"Documentation=https://caddyserver.com/docs/"),s(`
`),e("span",{class:"line"},"After=network.target network-online.target"),s(`
`),e("span",{class:"line"},"Requires=network-online.target"),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},"[Service]"),s(`
`),e("span",{class:"line"},"Type=notify"),s(`
`),e("span",{class:"line"},"User=caddy"),s(`
`),e("span",{class:"line"},"Group=caddy"),s(`
`),e("span",{class:"line highlighted"},"ExecStart=/usr/bin/caddy run --environ --envfile /etc/caddy/.secrets.env --config /etc/caddy/Caddyfile"),s(`
`),e("span",{class:"line"},"ExecReload=/usr/bin/caddy reload --config /etc/caddy/Caddyfile"),s(`
`),e("span",{class:"line"},"TimeoutStopSec=5s"),s(`
`),e("span",{class:"line"},"LimitNOFILE=1048576"),s(`
`),e("span",{class:"line"},"LimitNPROC=512"),s(`
`),e("span",{class:"line"},"PrivateTmp=true"),s(`
`),e("span",{class:"line"},"ProtectSystem=full"),s(`
`),e("span",{class:"line"},"AmbientCapabilities=CAP_NET_BIND_SERVICE"),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},"[Install]"),s(`
`),e("span",{class:"line"},"WantedBy=multi-user.target"),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),ye=e("p",null,[s("最后，在您的面板配置的 "),e("code",null,"<domain>"),s(" 块下，您可以在 "),e("code",null,"Caddyfile"),s(" 中添加一个 "),e("code",null,"tls"),s(" 块。Caddy 配置文件的位置是 "),e("code",null,"/etc/caddy/Caddyfile"),s(":")],-1),fe=e("div",{class:"language-caddyfile line-numbers-mode","data-ext":"caddyfile","data-title":"caddyfile"},[e("pre",{class:"language-caddyfile"},[e("code",null,[e("span",{class:"line"},"<domain> {"),s(`
`),e("span",{class:"line"},"  # ..."),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line highlighted"},"  tls {"),s(`
`),e("span",{class:"line highlighted"},"    dns cloudflare {env.CLOUDFLARE_API_TOKEN}"),s(`
`),e("span",{class:"line highlighted"},"  }"),s(`
`),e("span",{class:"line"},"}"),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1);function ke(xe,Ce){const t=c("Tabs");return r(),o("div",null,[m,p,d(t,{id:"6",data:[{id:"方法 1: Certbot"},{id:"方法 2: acme.sh (使用 Cloudflare API)"},{id:"方法 3: Caddy（使用 Cloudflare API）"}]},{title0:a(({value:n,isActive:l})=>[s("方法 1: Certbot")]),title1:a(({value:n,isActive:l})=>[s("方法 2: acme.sh (使用 Cloudflare API)")]),title2:a(({value:n,isActive:l})=>[s("方法 3: Caddy（使用 Cloudflare API）")]),tab0:a(({value:n,isActive:l})=>[h,b,_,g,v,y,f,k,x,C,S,A,P,I,N,D,T,L,E,w,F,B,W,O,R,K,M]),tab1:a(({value:n,isActive:l})=>[U,V,q,Z,j,z,G,Y,H,J,X,Q,$,ee]),tab2:a(({value:n,isActive:l})=>[se,ae,ne,le,te,ie,ce,oe,de,re,ue,me,pe,he,be,_e,ge,ve,ye,fe]),_:1})])}const Pe=i(u,[["render",ke],["__file","creating_ssl_certificates.html.vue"]]),Ie=JSON.parse('{"path":"/tutorials/creating_ssl_certificates.html","title":"创建 SSL 证书","lang":"zh-CN","frontmatter":{"description":"创建 SSL 证书 本页将为您介绍如何为面板和 Wings 创建新的 SSL 证书","head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/tutorials/creating_ssl_certificates.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"创建 SSL 证书"}],["meta",{"property":"og:description","content":"创建 SSL 证书 本页将为您介绍如何为面板和 Wings 创建新的 SSL 证书"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-13T13:28:57.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-13T13:28:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"创建 SSL 证书\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-13T13:28:57.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1532407839000,"updatedTime":1713014937000,"contributors":[{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":8},{"name":"Lance Pioch","email":"git@lance.sh","commits":3},{"name":"Omar Kamel","email":"30291302+TekExplorer@users.noreply.github.com","commits":3},{"name":"Vojtech Mares","email":"iam@vojtechmares.com","commits":3},{"name":"Dane Everitt","email":"dane@daneeveritt.com","commits":2},{"name":"Alex","email":"admin@softwarenoob.com","commits":1},{"name":"BakiDance","email":"43658058+BakiDance@users.noreply.github.com","commits":1},{"name":"Baptiste Ferrando","email":"53260217+Verttigo28@users.noreply.github.com","commits":1},{"name":"Boy132","email":"Boy132@users.noreply.github.com","commits":1},{"name":"DeDiamondPro","email":"67508414+DeDiamondPro@users.noreply.github.com","commits":1},{"name":"DiscoverSquishy","email":"github@discoversquishy.me","commits":1},{"name":"DiscoverSquishy","email":"noaimi2214@gmail.com","commits":1},{"name":"GoldenEdit","email":"45533337+GoldenEdit@users.noreply.github.com","commits":1},{"name":"Khisab Kurniawan","email":"khisabkurniawan@outlook.com","commits":1},{"name":"MaddDogg98","email":"jdmon1998@gmail.com","commits":1},{"name":"Michael (Parker) Parker","email":"parkervcp@gmail.com","commits":1},{"name":"Purpur","email":"43528123+Pemigrade@users.noreply.github.com","commits":1},{"name":"Riley","email":"rileykotarba@gmail.com","commits":1},{"name":"SfTian","email":"52811930+saltedfisholdxu@users.noreply.github.com","commits":1},{"name":"Thien Tran","email":"42406302+Ethereal739@users.noreply.github.com","commits":1},{"name":"Thierry","email":"thierrylafeber@hotmail.com","commits":1},{"name":"ckykenken","email":"26035978+ckykenken@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":5.99,"words":1797},"filePathRelative":"tutorials/creating_ssl_certificates.md","localizedDate":"2018年7月24日","autoDesc":true}');export{Pe as comp,Ie as data};
