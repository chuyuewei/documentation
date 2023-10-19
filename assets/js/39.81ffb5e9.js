(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{388:function(a,t,s){"use strict";s.r(t);var e=s(48),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"ubuntu-18-04"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-18-04"}},[a._v("#")]),a._v(" Ubuntu 18.04")]),a._v(" "),s("p",[a._v("在本指南中，我们将安装 Pterodactyl v1.X（包括它的所有依赖项）并配置我们的网络服务器以使用 SSL 为其提供服务。")]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#安装要求"}},[a._v("安装要求")]),s("ul",[s("li",[s("a",{attrs:{href:"#mariadb"}},[a._v("MariaDB")])]),s("li",[s("a",{attrs:{href:"#php-7-4"}},[a._v("PHP 7.4")])]),s("li",[s("a",{attrs:{href:"#nginx"}},[a._v("Nginx")])]),s("li",[s("a",{attrs:{href:"#redis"}},[a._v("Redis")])]),s("li",[s("a",{attrs:{href:"#其他实用工具"}},[a._v("其他实用工具")])])])]),s("li",[s("a",{attrs:{href:"#服务器配置"}},[a._v("服务器配置")]),s("ul",[s("li",[s("a",{attrs:{href:"#配置-mariadb"}},[a._v("配置 MariaDB")])]),s("li",[s("a",{attrs:{href:"#setup-php"}},[a._v("Setup PHP")])]),s("li",[s("a",{attrs:{href:"#nginx"}},[a._v("Nginx")])]),s("li",[s("a",{attrs:{href:"#redis-setup"}},[a._v("Redis Setup")])])])]),s("li",[s("a",{attrs:{href:"#installing-the-panel"}},[a._v("Installing the Panel")])])])]),s("p"),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),s("p",[a._v("本指南基于 "),s("RouterLink",{attrs:{to:"/panel/1.0/getting_started.html"}},[a._v("官方安装文档")]),a._v("，但专为 Ubuntu 18.04 量身定制。")],1)]),a._v(" "),s("h2",{attrs:{id:"安装要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装要求"}},[a._v("#")]),a._v(" 安装要求")]),a._v(" "),s("p",[a._v("首先，我们要安装翼龙 "),s("RouterLink",{attrs:{to:"/panel/1.0/getting_started.html#dependencies"}},[a._v("所需依赖项")]),a._v("。")],1),a._v(" "),s("h3",{attrs:{id:"mariadb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mariadb"}},[a._v("#")]),a._v(" MariaDB")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 获取 apt 更新")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" update -y\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 安装 MariaDB")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y mariadb-common mariadb-server mariadb-client\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 启动 MariaDB")]),a._v("\nsystemctl start mariadb\nsystemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" mariadb\n")])])]),s("h3",{attrs:{id:"php-7-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#php-7-4"}},[a._v("#")]),a._v(" PHP 7.4")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 获取 apt 更新")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" update -y\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 安装 PHP 7.4")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y php7.4 php7.4-"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("cli,gd,mysql,pdo,mbstring,tokenizer,bcmath,xml,fpm,curl,zip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[a._v("#")]),a._v(" Nginx")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y nginx\n")])])]),s("h3",{attrs:{id:"redis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[a._v("#")]),a._v(" Redis")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y redis-server\n\nsystemctl start redis-server\nsystemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" redis-server\n")])])]),s("h3",{attrs:{id:"其他实用工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他实用工具"}},[a._v("#")]),a._v(" 其他实用工具")]),a._v(" "),s("h4",{attrs:{id:"certbot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#certbot"}},[a._v("#")]),a._v(" Certbot")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y certbot\n")])])]),s("h4",{attrs:{id:"composer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#composer"}},[a._v("#")]),a._v(" Composer")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -sS https://getcomposer.org/installer "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" php -- --install-dir"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/bin --filename"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("composer\n")])])]),s("h2",{attrs:{id:"服务器配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务器配置"}},[a._v("#")]),a._v(" 服务器配置")]),a._v(" "),s("p",[a._v("本节将介绍运行面板所需的部分服务器配置。")]),a._v(" "),s("h3",{attrs:{id:"配置-mariadb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-mariadb"}},[a._v("#")]),a._v(" 配置 MariaDB")]),a._v(" "),s("p",[a._v("设置 MariaDB 的最快方法是使用 "),s("code",[a._v("mysql_secure_installation")]),a._v(" 命令并按提示操作")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("mysql_secure_installation\n")])])]),s("p",[a._v("The following are safe defaults.")]),a._v(" "),s("p",[a._v("Change to your own secure password"),s("br"),a._v(" "),s("code",[a._v("Set root password? [Y/n] Y")])]),a._v(" "),s("p",[a._v("Get rid of users that could access the db by default"),s("br"),a._v(" "),s("code",[a._v("Remove anonymous users? [Y/n] Y")])]),a._v(" "),s("p",[a._v("Keep root off the external interfaces"),s("br"),a._v(" "),s("code",[a._v("Disallow root login remotely? [Y/n] Y")])]),a._v(" "),s("p",[a._v("Extra databases that aren't needed"),s("br"),a._v(" "),s("code",[a._v("Remove test database and access to it? [Y/n] Y")])]),a._v(" "),s("p",[a._v("Clears and sets all the changes made"),s("br"),a._v(" "),s("code",[a._v("Reload privilege tables now? [Y/n] Y")])]),a._v(" "),s("p",[a._v("All done! If you've completed all of the above steps, your MariaDB installation should now be secure.")]),a._v(" "),s("h4",{attrs:{id:"adding-mariadb-user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-mariadb-user"}},[a._v("#")]),a._v(" Adding MariaDB user")]),a._v(" "),s("p",[a._v("To add your first user to the database, see our tutorial on "),s("RouterLink",{attrs:{to:"/tutorials/mysql_setup.html"}},[a._v("setting up MySQL")]),a._v(".")],1),a._v(" "),s("h3",{attrs:{id:"setup-php"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-php"}},[a._v("#")]),a._v(" Setup PHP")]),a._v(" "),s("p",[a._v("The default php-fpm configuration is fine to use and can be started and then enabled on the system using the\ncommands below.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("systemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" php7.4-fpm\nsystemctl start php7.4-fpm\n")])])]),s("h3",{attrs:{id:"nginx-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-2"}},[a._v("#")]),a._v(" Nginx")]),a._v(" "),s("p",[a._v("Please check our "),s("RouterLink",{attrs:{to:"/tutorials/creating_ssl_certificates.html"}},[a._v("tutorial")]),a._v(" on generating SSL certificates for more information.")],1),a._v(" "),s("h4",{attrs:{id:"ssl-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssl-configuration"}},[a._v("#")]),a._v(" SSL Configuration")]),a._v(" "),s("div",{staticClass:"language-conf extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('server_tokens off;\n\nserver {\n    listen 80;\n    server_name <domain>;\n    return 301 https://$server_name$request_uri;\n}\n\nserver {\n    listen 443 ssl http2;\n    server_name <domain>;\n\n    root /var/www/pterodactyl/public;\n    index index.php;\n\n    access_log /var/log/nginx/pterodactyl.app-access.log;\n    error_log  /var/log/nginx/pterodactyl.app-error.log error;\n\n    # allow larger file uploads and longer script runtimes\n    client_max_body_size 100m;\n    client_body_timeout 120s;\n\n    sendfile off;\n\n    # SSL Configuration\n    ssl_certificate /etc/letsencrypt/live/<domain>/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/<domain>/privkey.pem;\n    ssl_session_cache shared:SSL:10m;\n    ssl_protocols TLSv1.2 TLSv1.3;\n    ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";\n    ssl_prefer_server_ciphers on;\n\n    # See https://hstspreload.org/ before uncommenting the line below.\n    # add_header Strict-Transport-Security "max-age=15768000; preload;";\n    add_header X-Content-Type-Options nosniff;\n    add_header X-XSS-Protection "1; mode=block";\n    add_header X-Robots-Tag none;\n    add_header Content-Security-Policy "frame-ancestors \'self\'";\n    add_header X-Frame-Options DENY;\n    add_header Referrer-Policy same-origin;\n\n    location / {\n        try_files $uri $uri/ /index.php?$query_string;\n    }\n\n    location ~ \\.php$ {\n        fastcgi_split_path_info ^(.+\\.php)(/.+)$;\n        fastcgi_pass unix:/run/php/php7.4-fpm.sock;\n        fastcgi_index index.php;\n        include fastcgi_params;\n        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \\n post_max_size=100M";\n        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n        fastcgi_param HTTP_PROXY "";\n        fastcgi_intercept_errors off;\n        fastcgi_buffer_size 16k;\n        fastcgi_buffers 4 16k;\n        fastcgi_connect_timeout 300;\n        fastcgi_send_timeout 300;\n        fastcgi_read_timeout 300;\n        include /etc/nginx/fastcgi_params;\n    }\n\n    location ~ /\\.ht {\n        deny all;\n    }\n}\n')])])]),s("h3",{attrs:{id:"redis-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis-setup"}},[a._v("#")]),a._v(" Redis Setup")]),a._v(" "),s("p",[a._v("The default Redis install is perfectly fine for the panel. If you have Redis already in use you may want to look into\n"),s("a",{attrs:{href:"https://community.pivotal.io/s/article/How-to-setup-and-run-multiple-Redis-server-instances-on-a-Linux-host",target:"_blank",rel:"noopener noreferrer"}},[a._v("running another Redis instance"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("h2",{attrs:{id:"installing-the-panel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-panel"}},[a._v("#")]),a._v(" Installing the Panel")]),a._v(" "),s("p",[a._v("Excellent, we now have all of the required dependencies installed and configured. From here, follow the "),s("RouterLink",{attrs:{to:"/panel/1.0/getting_started.html#download-files"}},[a._v("official Panel installation documentation")]),a._v(".")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);