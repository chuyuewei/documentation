import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,c as p,a as n,e as s,b as e,w as t,d as o,o as c}from"./app-ydblb6sM.js";const r={},d=n("h1",{id:"debian-11-12",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#debian-11-12"},[n("span",null,"Debian 11 & 12")])],-1),u={class:"hint-container tip"},m=n("p",{class:"hint-container-title"},"提示",-1),h=o(`<h2 id="dependency-installation" tabindex="-1"><a class="header-anchor" href="#dependency-installation"><span>Dependency Installation</span></a></h2><p>In this guide, we will install the required dependencies for the Pterodactyl panel. After that, you can follow the official installation documentation.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># Update  package lists</span></span>
<span class="line"><span class="token function">apt</span> update <span class="token parameter variable">-y</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Install necessary packages</span></span>
<span class="line"><span class="token function">apt</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> software-properties-common <span class="token function">curl</span> ca-certificates gnupg2 <span class="token function">sudo</span> lsb-release</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Add repository for PHP</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;deb https://packages.sury.org/php/ <span class="token variable"><span class="token variable">$(</span>lsb_release <span class="token parameter variable">-sc</span><span class="token variable">)</span></span> main&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/sury-php.list</span>
<span class="line"></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://packages.sury.org/php/apt.gpg <span class="token operator">|</span> <span class="token function">sudo</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token parameter variable">-o</span> /etc/apt/trusted.gpg.d/sury-keyring.gpg</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Add repository for Redis</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://packages.redis.io/gpg <span class="token operator">|</span> <span class="token function">sudo</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token parameter variable">-o</span> /usr/share/keyrings/redis-archive-keyring.gpg</span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb <span class="token variable"><span class="token variable">$(</span>lsb_release <span class="token parameter variable">-cs</span><span class="token variable">)</span></span> main&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/redis.list</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Update  package lists</span></span>
<span class="line"><span class="token function">apt</span> update <span class="token parameter variable">-y</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Install PHP and required extensions</span></span>
<span class="line"><span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> php8.1 php8.1-<span class="token punctuation">{</span>common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># MariaDB repo setup script</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-sS</span> https://downloads.mariadb.com/MariaDB/mariadb_repo_setup <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">bash</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Install the rest of dependencies</span></span>
<span class="line"><span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> mariadb-server nginx <span class="token function">tar</span> <span class="token function">unzip</span> <span class="token function">git</span> redis-server</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="installing-composer" tabindex="-1"><a class="header-anchor" href="#installing-composer"><span>Installing Composer</span></a></h3><p>Composer is a dependency manager for PHP that allows us to ship everything you&#39;ll need code wise to operate the Panel. You&#39;ll need composer installed before continuing in this process.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-sS</span> https://getcomposer.org/installer <span class="token operator">|</span> <span class="token function">sudo</span> php -- --install-dir<span class="token operator">=</span>/usr/local/bin <span class="token parameter variable">--filename</span><span class="token operator">=</span>composer</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="download-files" tabindex="-1"><a class="header-anchor" href="#download-files"><span>Download Files</span></a></h3>`,7);function v(b,k){const a=i("RouteLink");return c(),p("div",null,[d,n("div",u,[m,n("p",null,[s("本指南基于"),e(a,{to:"/panel/1.0/getting_started.html"},{default:t(()=>[s("官方安装文档")]),_:1}),s("，但专为 Debian 11、12 量身定制。")])]),h,n("p",null,[s("Great, now all of the dependencies have been dealt with. Continue the installation by following the "),e(a,{to:"/panel/1.0/getting_started.html#download-files"},{default:t(()=>[s("official documentation Download Files section")]),_:1}),s(".")])])}const y=l(r,[["render",v],["__file","debian.html.vue"]]),_=JSON.parse('{"path":"/community/installation-guides/panel/debian.html","title":"Debian 11 & 12","lang":"zh-CN","frontmatter":{"description":"Debian 11 & 12 提示 本指南基于，但专为 Debian 11、12 量身定制。 Dependency Installation In this guide, we will install the required dependencies for the Pterodactyl panel. After that, you can fo...","head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/community/installation-guides/panel/debian.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"Debian 11 & 12"}],["meta",{"property":"og:description","content":"Debian 11 & 12 提示 本指南基于，但专为 Debian 11、12 量身定制。 Dependency Installation In this guide, we will install the required dependencies for the Pterodactyl panel. After that, you can fo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-10T06:15:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-10T06:15:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Debian 11 & 12\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-10T06:15:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Dependency Installation","slug":"dependency-installation","link":"#dependency-installation","children":[{"level":3,"title":"Installing Composer","slug":"installing-composer","link":"#installing-composer","children":[]},{"level":3,"title":"Download Files","slug":"download-files","link":"#download-files","children":[]}]}],"git":{"createdTime":1667137571000,"updatedTime":1715321703000,"contributors":[{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":2},{"name":"Quinten","email":"67589015+QuintenQVD0@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.84,"words":253},"filePathRelative":"community/installation-guides/panel/debian.md","localizedDate":"2022年10月30日","autoDesc":true}');export{y as comp,_ as data};
