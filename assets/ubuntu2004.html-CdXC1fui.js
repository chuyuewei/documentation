import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o,c,a as e,e as n,b as a,w as i,d as r}from"./app-BvXIAJGb.js";const d={},u=e("h1",{id:"ubuntu-20-04",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ubuntu-20-04"},[e("span",null,"Ubuntu 20.04")])],-1),m=e("p",null,"在本指南中，我们将安装 Wings v1.X（包括它的所有依赖项）并配置使用 SSL 为其提供服务。",-1),p={class:"hint-container tip"},h=e("p",{class:"hint-container-title"},"提示",-1),g=e("h2",{id:"安装要求",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装要求"},[e("span",null,"安装要求")])],-1),b=r(`<h3 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>Docker</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## Install docker</span>
<span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> docker.io

<span class="token comment">## Enable docker service</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="installing-wings" tabindex="-1"><a class="header-anchor" href="#installing-wings"><span>Installing Wings</span></a></h2>`,3);function k(v,_){const t=l("RouteLink");return o(),c("div",null,[u,m,e("div",p,[h,e("p",null,[n("本指南基于"),a(t,{to:"/wings/1.0/installing.html"},{default:i(()=>[n("官方安装文档")]),_:1}),n("，但专为 Ubuntu 20.04 量身定制。")])]),g,e("p",null,[n("我们要安装 Wings"),a(t,{to:"/wings/1.0/installing.html#%E4%BE%9D%E8%B5%96%E9%A1%B9"},{default:i(()=>[n("所需依赖项")]),_:1}),n("。")]),b,e("p",null,[n("Great, now all of the dependencies and firewall rules have been dealt with. From here follow the "),a(t,{to:"/wings/1.0/installing.html#enabling-swap"},{default:i(()=>[n("official Wings installation documentation")]),_:1}),n(".")])])}const w=s(d,[["render",k],["__file","ubuntu2004.html.vue"]]),x=JSON.parse('{"path":"/community/installation-guides/wings/ubuntu2004.html","title":"Ubuntu 20.04","lang":"zh-CN","frontmatter":{"description":"Ubuntu 20.04 在本指南中，我们将安装 Wings v1.X（包括它的所有依赖项）并配置使用 SSL 为其提供服务。 提示 本指南基于，但专为 Ubuntu 20.04 量身定制。 安装要求 我们要安装 Wings。 Docker Installing Wings Great, now all of the dependencies and ...","head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/community/installation-guides/wings/ubuntu2004.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"Ubuntu 20.04"}],["meta",{"property":"og:description","content":"Ubuntu 20.04 在本指南中，我们将安装 Wings v1.X（包括它的所有依赖项）并配置使用 SSL 为其提供服务。 提示 本指南基于，但专为 Ubuntu 20.04 量身定制。 安装要求 我们要安装 Wings。 Docker Installing Wings Great, now all of the dependencies and ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-10T06:15:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-10T06:15:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Ubuntu 20.04\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-10T06:15:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"安装要求","slug":"安装要求","link":"#安装要求","children":[{"level":3,"title":"Docker","slug":"docker","link":"#docker","children":[]}]},{"level":2,"title":"Installing Wings","slug":"installing-wings","link":"#installing-wings","children":[]}],"git":{"createdTime":1603850925000,"updatedTime":1715321703000,"contributors":[{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":2},{"name":"Gamer4life","email":"42851999+gamer4life1@users.noreply.github.com","commits":1},{"name":"JohnB17","email":"63297273+JohnB17@users.noreply.github.com","commits":1},{"name":"Michael Parker","email":"parkervcp@gmail.com","commits":1},{"name":"TekExplorer","email":"tekexplorerm@gmail.com","commits":1}]},"readingTime":{"minutes":0.4,"words":120},"filePathRelative":"community/installation-guides/wings/ubuntu2004.md","localizedDate":"2020年10月28日","autoDesc":true}');export{w as comp,x as data};
