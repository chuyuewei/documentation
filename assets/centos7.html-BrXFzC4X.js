import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as r,c as o,a as e,e as n,b as s,w as t,d as c}from"./app-BvXIAJGb.js";const d={},p=e("h1",{id:"centos-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#centos-7"},[e("span",null,"CentOS 7")])],-1),m=e("p",null,"在本指南中，我们将安装 Wings v1.X（包括它的所有依赖项）并配置使用 SSL 为其提供服务。",-1),h={class:"hint-container tip"},u=e("p",{class:"hint-container-title"},"提示",-1),g=e("h2",{id:"安装要求",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装要求"},[e("span",null,"安装要求")])],-1),v=c(`<h3 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>Docker</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## Install yum tools</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils device-mapper-persistent-data lvm2

<span class="token comment">## Add the docker repo</span>
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

<span class="token comment">## Install docker</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> docker-ce docker-ce-cli

<span class="token comment">## Enable docker service</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="firewalld-changes" tabindex="-1"><a class="header-anchor" href="#firewalld-changes"><span>FirewallD Changes</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>firewall-cmd --add-port <span class="token number">8080</span>/tcp <span class="token parameter variable">--permanent</span>
firewall-cmd --add-port <span class="token number">2022</span>/tcp <span class="token parameter variable">--permanent</span>
firewall-cmd <span class="token parameter variable">--permanent</span> <span class="token parameter variable">--zone</span><span class="token operator">=</span>trusted --change-interface<span class="token operator">=</span>docker0
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>trusted --add-masquerade <span class="token parameter variable">--permanent</span>
firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="installing-wings" tabindex="-1"><a class="header-anchor" href="#installing-wings"><span>Installing Wings</span></a></h2>`,5);function k(b,f){const a=i("RouteLink");return r(),o("div",null,[p,m,e("div",h,[u,e("p",null,[n("本指南基于"),s(a,{to:"/wings/1.0/installing.html"},{default:t(()=>[n("官方安装文档")]),_:1}),n("，但专为 CentOS 7 量身定制。")])]),g,e("p",null,[n("我们要安装 Wings"),s(a,{to:"/wings/1.0/installing.html#%E4%BE%9D%E8%B5%96%E9%A1%B9"},{default:t(()=>[n("所需依赖项")]),_:1}),n("。")]),v,e("p",null,[n("Great, now all of the dependencies and firewall rules have been dealt with. From here follow the "),s(a,{to:"/wings/1.0/installing.html#enabling-swap"},{default:t(()=>[n("official Wings installation documentation")]),_:1}),n(".")])])}const y=l(d,[["render",k],["__file","centos7.html.vue"]]),C=JSON.parse('{"path":"/community/installation-guides/wings/centos7.html","title":"CentOS 7","lang":"zh-CN","frontmatter":{"description":"CentOS 7 在本指南中，我们将安装 Wings v1.X（包括它的所有依赖项）并配置使用 SSL 为其提供服务。 提示 本指南基于，但专为 CentOS 7 量身定制。 安装要求 我们要安装 Wings。 Docker FirewallD Changes Installing Wings Great, now all of the depende...","head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/community/installation-guides/wings/centos7.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"CentOS 7"}],["meta",{"property":"og:description","content":"CentOS 7 在本指南中，我们将安装 Wings v1.X（包括它的所有依赖项）并配置使用 SSL 为其提供服务。 提示 本指南基于，但专为 CentOS 7 量身定制。 安装要求 我们要安装 Wings。 Docker FirewallD Changes Installing Wings Great, now all of the depende..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-10T06:15:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-10T06:15:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CentOS 7\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-10T06:15:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"安装要求","slug":"安装要求","link":"#安装要求","children":[{"level":3,"title":"Docker","slug":"docker","link":"#docker","children":[]},{"level":3,"title":"FirewallD Changes","slug":"firewalld-changes","link":"#firewalld-changes","children":[]}]},{"level":2,"title":"Installing Wings","slug":"installing-wings","link":"#installing-wings","children":[]}],"git":{"createdTime":1603850925000,"updatedTime":1715321703000,"contributors":[{"name":"Gamer4life","email":"42851999+gamer4life1@users.noreply.github.com","commits":2},{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":2},{"name":"JohnB17","email":"63297273+JohnB17@users.noreply.github.com","commits":1},{"name":"Michael Parker","email":"parkervcp@gmail.com","commits":1},{"name":"TekExplorer","email":"tekexplorerm@gmail.com","commits":1}]},"readingTime":{"minutes":0.61,"words":182},"filePathRelative":"community/installation-guides/wings/centos7.md","localizedDate":"2020年10月28日","autoDesc":true}');export{y as comp,C as data};
