(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{386:function(t,e,a){"use strict";a.r(e);var s=a(48),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"centos-8-rocky-linux-8-almalinux-8-fedora-server-38"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos-8-rocky-linux-8-almalinux-8-fedora-server-38"}},[t._v("#")]),t._v(" CentOS 8, Rocky Linux 8, AlmaLinux 8, Fedora Server 38")]),t._v(" "),a("p",[t._v("在本指南中，我们将安装 Pterodactyl v1.X（包括它的所有依赖项）并配置我们的网络服务器以使用 SSL 为其提供服务。")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#install-requirements-and-additional-utilities"}},[t._v("Install Requirements and Additional Utilities")]),a("ul",[a("li",[a("a",{attrs:{href:"#selinux-tools"}},[t._v("SELinux tools")])]),a("li",[a("a",{attrs:{href:"#mariadb"}},[t._v("MariaDB")])]),a("li",[a("a",{attrs:{href:"#php-8-0"}},[t._v("PHP 8.0")])]),a("li",[a("a",{attrs:{href:"#if-using-fedora-server-38-install-php-8-1-and-dependencies-from-this-section-if-not-skip-this-section"}},[t._v("If using Fedora Server 38 install PHP 8.1 and Dependencies from this section. If not, skip this section.")])]),a("li",[a("a",{attrs:{href:"#composer"}},[t._v("Composer")])])])]),a("li",[a("a",{attrs:{href:"#install-utility-packages"}},[t._v("Install Utility Packages")]),a("ul",[a("li",[a("a",{attrs:{href:"#nginx"}},[t._v("Nginx")])]),a("li",[a("a",{attrs:{href:"#redis"}},[t._v("Redis")])])])]),a("li",[a("a",{attrs:{href:"#server-configuration"}},[t._v("Server Configuration")]),a("ul",[a("li",[a("a",{attrs:{href:"#configuring-mariadb"}},[t._v("Configuring MariaDB")])]),a("li",[a("a",{attrs:{href:"#setup-php"}},[t._v("Setup PHP")])]),a("li",[a("a",{attrs:{href:"#nginx"}},[t._v("Nginx")])]),a("li",[a("a",{attrs:{href:"#redis-setup"}},[t._v("Redis Setup")])])])]),a("li",[a("a",{attrs:{href:"#installing-the-panel"}},[t._v("Installing the Panel")])])])]),a("p"),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("This guide is based off the "),a("RouterLink",{attrs:{to:"/panel/1.0/getting_started.html"}},[t._v("official installation documentation")]),t._v(" but is tailored specifically for Enterprise Linux 8.")],1)]),t._v(" "),a("h2",{attrs:{id:"install-requirements-and-additional-utilities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-requirements-and-additional-utilities"}},[t._v("#")]),t._v(" Install Requirements and Additional Utilities")]),t._v(" "),a("p",[t._v("We will install all of Pterodactyl's "),a("RouterLink",{attrs:{to:"/panel/1.0/getting_started.html#dependencies"}},[t._v("required")]),t._v(" dependencies and a few aditional utilities.")],1),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("If you run "),a("code",[t._v("sestatus")]),t._v(" and it shows "),a("code",[t._v("SELinux status: enabled")]),t._v(" you should install the following packages for later")])]),t._v(" "),a("h3",{attrs:{id:"selinux-tools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#selinux-tools"}},[t._v("#")]),t._v(" SELinux tools")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("dnf "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y policycoreutils selinux-policy selinux-policy-targeted setroubleshoot-server setools setools-console mcstrans\n")])])]),a("h3",{attrs:{id:"mariadb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mariadb"}},[t._v("#")]),t._v(" MariaDB")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("dnf "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y mariadb mariadb-server\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Start maraidb")]),t._v("\nsystemctl start mariadb\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" mariadb\n")])])]),a("h3",{attrs:{id:"php-8-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php-8-0"}},[t._v("#")]),t._v(" PHP 8.0")]),t._v(" "),a("p",[t._v("We recommend the remi repo to get the latest php packages. (Skip to next section if on Fedora 38)")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Install Repos")]),t._v("\ndnf "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" epel-release\ndnf "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" https://rpms.remirepo.net/enterprise/remi-release-8.rpm\ndnf module "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" php:remi-8.0\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Get dnf updates")]),t._v("\ndnf update -y\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Install PHP 8.0")]),t._v("\ndnf "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y php php-"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("common,fpm,cli,json,mysqlnd,gd,mbstring,pdo,zip,bcmath,dom,opcache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"if-using-fedora-server-38-install-php-8-1-and-dependencies-from-this-section-if-not-skip-this-section"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#if-using-fedora-server-38-install-php-8-1-and-dependencies-from-this-section-if-not-skip-this-section"}},[t._v("#")]),t._v(" If using Fedora Server 38 install PHP 8.1 and Dependencies from this section. If not, skip this section.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("dnf "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" https://rpms.remirepo.net/fedora/remi-release-38.rpm\ndnf module "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" php:remi-8.1\ndnf "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" php php-"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("common,fpm,cli,json,mysqlnd,gd,mbstring,pdo,zip,bcmath,dom,opcache,process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"composer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#composer"}},[t._v("#")]),t._v(" Composer")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("dnf "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("zip")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Required for Composer")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sS https://getcomposer.org/installer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" php -- --install-dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/bin --filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("composer\n")])])]),a("h2",{attrs:{id:"install-utility-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-utility-packages"}},[t._v("#")]),t._v(" Install Utility Packages")]),t._v(" "),a("h3",{attrs:{id:"nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[t._v("#")]),t._v(" Nginx")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("dnf "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y nginx\n\nfirewall-cmd --add-service"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http --permanent\nfirewall-cmd --add-service"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https --permanent \nfirewall-cmd --reload\n")])])]),a("h3",{attrs:{id:"redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[t._v("#")]),t._v(" Redis")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("dnf "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y redis\n\nsystemctl start redis\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" redis\n")])])]),a("h4",{attrs:{id:"selinux-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#selinux-commands"}},[t._v("#")]),t._v(" SELinux commands")]),t._v(" "),a("p",[t._v("The following command will allow nginx to work with redis and")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("setsebool -P httpd_can_network_connect "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nsetsebool -P httpd_execmem "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nsetsebool -P httpd_unified "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),a("h2",{attrs:{id:"server-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-configuration"}},[t._v("#")]),t._v(" Server Configuration")]),t._v(" "),a("p",[t._v("This following section covers the configuration of parts of the server to run the panel.")]),t._v(" "),a("h3",{attrs:{id:"configuring-mariadb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-mariadb"}},[t._v("#")]),t._v(" Configuring MariaDB")]),t._v(" "),a("p",[t._v("The fastest way to set up mariadb is to use the "),a("code",[t._v("mysql_secure_installation")]),t._v(" command and follow prompts")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("mysql_secure_installation\n")])])]),a("p",[t._v("The following are safe defaults.")]),t._v(" "),a("p",[t._v("Change to your own secure password"),a("br"),t._v(" "),a("code",[t._v("Set root password? [Y/n] Y")])]),t._v(" "),a("p",[t._v("Get rid of users that could access the db by default"),a("br"),t._v(" "),a("code",[t._v("Remove anonymous users? [Y/n] Y")])]),t._v(" "),a("p",[t._v("Keep root off the external interfaces"),a("br"),t._v(" "),a("code",[t._v("Disallow root login remotely? [Y/n] Y")])]),t._v(" "),a("p",[t._v("Extra databases that aren't needed"),a("br"),t._v(" "),a("code",[t._v("Remove test database and access to it? [Y/n] Y")])]),t._v(" "),a("p",[t._v("Clears and sets all the changes made"),a("br"),t._v(" "),a("code",[t._v("Reload privilege tables now? [Y/n] Y")])]),t._v(" "),a("p",[t._v("All done! If you've completed all of the above steps, your MariaDB"),a("br"),t._v("\ninstallation should now be secure.")]),t._v(" "),a("h4",{attrs:{id:"adding-mariadb-user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-mariadb-user"}},[t._v("#")]),t._v(" Adding MariaDB user")]),t._v(" "),a("p",[t._v("To add your first user to the database, see our tutorial on "),a("RouterLink",{attrs:{to:"/tutorials/mysql_setup.html"}},[t._v("setting up MySQL")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"setup-php"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-php"}},[t._v("#")]),t._v(" Setup PHP")]),t._v(" "),a("p",[t._v("Place the contents below in a file inside the "),a("code",[t._v("/etc/php-fpm.d")]),t._v(" folder. The file can be named anything, but a good standard is "),a("code",[t._v("www-pterodactyl.conf")]),t._v(". This config will match the nginx config later in the guide.")]),t._v(" "),a("div",{staticClass:"language-conf extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[pterodactyl]\n\nuser = nginx\ngroup = nginx\n\nlisten = /var/run/php-fpm/pterodactyl.sock\nlisten.owner = nginx\nlisten.group = nginx\nlisten.mode = 0750\n\npm = ondemand\npm.max_children = 9\npm.process_idle_timeout = 10s\npm.max_requests = 200")])])]),a("p",[t._v("Start and enable php-fpm on the system.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" php-fpm\nsystemctl start php-fpm\n")])])]),a("h3",{attrs:{id:"nginx-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-2"}},[t._v("#")]),t._v(" Nginx")]),t._v(" "),a("p",[t._v("Please check our "),a("RouterLink",{attrs:{to:"/tutorials/creating_ssl_certificates.html"}},[t._v("tutorial")]),t._v(" on generating SSL certificates for more information.")],1),t._v(" "),a("h4",{attrs:{id:"ssl-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssl-configuration"}},[t._v("#")]),t._v(" SSL Configuration")]),t._v(" "),a("div",{staticClass:"language-conf extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('server_tokens off;\n\nserver {\n    listen 80;\n    server_name <domain>;\n    return 301 https://$server_name$request_uri;\n}\n\nserver {\n    listen 443 ssl http2;\n    server_name <domain>;\n\n    root /var/www/pterodactyl/public;\n    index index.php;\n\n    access_log /var/log/nginx/pterodactyl.app-access.log;\n    error_log  /var/log/nginx/pterodactyl.app-error.log error;\n\n    # allow larger file uploads and longer script runtimes\n    client_max_body_size 100m;\n    client_body_timeout 120s;\n    \n    sendfile off;\n\n    # SSL Configuration\n    ssl_certificate /etc/letsencrypt/live/<domain>/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/<domain>/privkey.pem;\n    ssl_session_cache shared:SSL:10m;\n    ssl_protocols TLSv1.2 TLSv1.3;\n    ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";\n    ssl_prefer_server_ciphers on;\n\n    # See https://hstspreload.org/ before uncommenting the line below.\n    # add_header Strict-Transport-Security "max-age=15768000; preload;";\n    add_header X-Content-Type-Options nosniff;\n    add_header X-XSS-Protection "1; mode=block";\n    add_header X-Robots-Tag none;\n    add_header Content-Security-Policy "frame-ancestors \'self\'";\n    add_header X-Frame-Options DENY;\n    add_header Referrer-Policy same-origin;\n\n    location / {\n        try_files $uri $uri/ /index.php?$query_string;\n    }\n\n    location ~ \\.php$ {\n        fastcgi_split_path_info ^(.+\\.php)(/.+)$;\n        fastcgi_pass unix:/var/run/php-fpm/pterodactyl.sock;\n        fastcgi_index index.php;\n        include fastcgi_params;\n        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \\n post_max_size=100M";\n        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n        fastcgi_param HTTP_PROXY "";\n        fastcgi_intercept_errors off;\n        fastcgi_buffer_size 16k;\n        fastcgi_buffers 4 16k;\n        fastcgi_connect_timeout 300;\n        fastcgi_send_timeout 300;\n        fastcgi_read_timeout 300;\n        include /etc/nginx/fastcgi_params;\n    }\n\n    location ~ /\\.ht {\n        deny all;\n    }\n}')])])]),a("h3",{attrs:{id:"redis-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-setup"}},[t._v("#")]),t._v(" Redis Setup")]),t._v(" "),a("p",[t._v("The default Redis install is perfectly fine for the panel. If you have Redis already in use you may want to look into\n"),a("a",{attrs:{href:"https://community.pivotal.io/s/article/How-to-setup-and-run-multiple-Redis-server-instances-on-a-Linux-host",target:"_blank",rel:"noopener noreferrer"}},[t._v("running another Redis instance"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"installing-the-panel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-panel"}},[t._v("#")]),t._v(" Installing the Panel")]),t._v(" "),a("p",[t._v("Excellent, we now have all of the required dependencies installed and configured. From here, follow the "),a("RouterLink",{attrs:{to:"/panel/1.0/getting_started.html#download-files"}},[t._v("official Panel installation documentation")]),t._v(".")],1)])}),[],!1,null,null,null);e.default=n.exports}}]);