import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,d as e}from"./app-Cx48BsNM.js";const n={},h=e(`<h1 id="artisan-cli" tabindex="-1"><a class="header-anchor" href="#artisan-cli"><span>Artisan CLI</span></a></h1><p>Artisan CLI（命令行界面）是 Laravel 框架的一部分，翼龙正是基于该框架构建的。如果您遵循官方指南，Artisan 文件位于 <code>/var/www/pterodactyl</code> 中（具体位置为你安装的地方）。本指南介绍了更多翼龙特定/相关的 Artisan 命令，这些命令均以字母 <code>p</code> 为前缀（例如 <code>p:user:make</code>）。如果您想查看所有命令，可以通过运行：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">php</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> artisan</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> list</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>要获取有关特定命令的信息，您可以运行以下命令：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">php</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> artisan</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> help</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">comman</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">d&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>为了简化本文档，在命令使用中您将看到类似以下内容：</p><p><code>&lt;hello-world&gt;</code> - 必填参数</p><p><code>[hello-world]</code> - 可选参数</p><p><code>{--hello-world}</code> - 选项</p></div><h2 id="用户管理" tabindex="-1"><a class="header-anchor" href="#用户管理"><span>用户管理</span></a></h2><p>运行以下任何命令时，您可以使用选项不提供任何内容将会有交互式提示。也可以提供部分的选项剩余部分也会通过交互式来提示。</p><h3 id="创建用户" tabindex="-1"><a class="header-anchor" href="#创建用户"><span>创建用户</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">php</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> artisan</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> p:user:make</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {--email=user@example.com}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                        {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">--username</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">myusername</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                        {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">--name-first</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">My</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                        {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">--name-last</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                        {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">--password</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">supersecret</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                        {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">--admin</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">|</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">0}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                        {</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">--no-password}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除用户" tabindex="-1"><a class="header-anchor" href="#删除用户"><span>删除用户</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">php</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> artisan</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> p:user:delete</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {--user=username/email/UUID}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="禁用动态口令认证" tabindex="-1"><a class="header-anchor" href="#禁用动态口令认证"><span>禁用动态口令认证</span></a></h3><div class="hint-container warning"><p class="hint-container-title">注意</p><p>禁用动态口令认证只能作为用户恢复的最后手段。 <strong>请谨慎使用。</strong></p></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">php</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> artisan</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> p:user:disable2fa</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {--email=user@example.com}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="服务器和节点管理" tabindex="-1"><a class="header-anchor" href="#服务器和节点管理"><span>服务器和节点管理</span></a></h2><h3 id="创建地域" tabindex="-1"><a class="header-anchor" href="#创建地域"><span>创建地域</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">php</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> artisan</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> p:location:make</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {--short=us1}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                            {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">--long</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;该地域的描述.&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除地域" tabindex="-1"><a class="header-anchor" href="#删除地域"><span>删除地域</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">php</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> artisan</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> p:location:delete</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {--short=us1}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="服务器电源管理" tabindex="-1"><a class="header-anchor" href="#服务器电源管理"><span>服务器电源管理</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">php</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> artisan</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> p:server:bulk-power</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">start,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> stop,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kill,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> restar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">t&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                                {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">--servers</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">1,2,3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                                {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">--nodes</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">1,2,3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="面板管理" tabindex="-1"><a class="header-anchor" href="#面板管理"><span>面板管理</span></a></h2><h3 id="查看面板信息" tabindex="-1"><a class="header-anchor" href="#查看面板信息"><span>查看面板信息</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">php</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> artisan</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> p:info</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>显示各种面板信息，可用于检查数据库和电子邮箱等配置。</p><h3 id="更新面板" tabindex="-1"><a class="header-anchor" href="#更新面板"><span>更新面板</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">php</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> artisan</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> p:upgrade</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   {--user=www-data}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                        {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">--group</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">www-data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                        {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">--url</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">https://example.com/panel.tar.gz</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                        {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">--release</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">latest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                        {</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">--skip-download}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下载翼龙的新版本并执行正常的升级命令。</p>`,29),t=[h];function l(r,p){return a(),s("div",null,t)}const c=i(n,[["render",l],["__file","artisan.html.vue"]]),o=JSON.parse('{"path":"/community/tutorials/artisan.html","title":"Artisan CLI","lang":"zh-CN","frontmatter":{"description":"Artisan CLI Artisan CLI（命令行界面）是 Laravel 框架的一部分，翼龙正是基于该框架构建的。如果您遵循官方指南，Artisan 文件位于 /var/www/pterodactyl 中（具体位置为你安装的地方）。本指南介绍了更多翼龙特定/相关的 Artisan 命令，这些命令均以字母 p 为前缀（例如 p:user:make）...","head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/community/tutorials/artisan.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"Artisan CLI"}],["meta",{"property":"og:description","content":"Artisan CLI Artisan CLI（命令行界面）是 Laravel 框架的一部分，翼龙正是基于该框架构建的。如果您遵循官方指南，Artisan 文件位于 /var/www/pterodactyl 中（具体位置为你安装的地方）。本指南介绍了更多翼龙特定/相关的 Artisan 命令，这些命令均以字母 p 为前缀（例如 p:user:make）..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-16T05:32:33.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-16T05:32:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Artisan CLI\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-16T05:32:33.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"用户管理","slug":"用户管理","link":"#用户管理","children":[{"level":3,"title":"创建用户","slug":"创建用户","link":"#创建用户","children":[]},{"level":3,"title":"删除用户","slug":"删除用户","link":"#删除用户","children":[]},{"level":3,"title":"禁用动态口令认证","slug":"禁用动态口令认证","link":"#禁用动态口令认证","children":[]}]},{"level":2,"title":"服务器和节点管理","slug":"服务器和节点管理","link":"#服务器和节点管理","children":[{"level":3,"title":"创建地域","slug":"创建地域","link":"#创建地域","children":[]},{"level":3,"title":"删除地域","slug":"删除地域","link":"#删除地域","children":[]},{"level":3,"title":"服务器电源管理","slug":"服务器电源管理","link":"#服务器电源管理","children":[]}]},{"level":2,"title":"面板管理","slug":"面板管理","link":"#面板管理","children":[{"level":3,"title":"查看面板信息","slug":"查看面板信息","link":"#查看面板信息","children":[]},{"level":3,"title":"更新面板","slug":"更新面板","link":"#更新面板","children":[]}]}],"git":{"createdTime":1567932663000,"updatedTime":1692163953000,"contributors":[{"name":"Matthew Hatcher","email":"matthewh@halfpetal.com","commits":7},{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":2},{"name":"Lance Pioch","email":"git@lance.sh","commits":1},{"name":"LogischJo","email":"66436499+LogischJo@users.noreply.github.com","commits":1},{"name":"Marino","email":"48334228+marinofranz@users.noreply.github.com","commits":1},{"name":"Softwarenoob","email":"admin@softwarenoob.com","commits":1},{"name":"hwalker928","email":"hjohnw13@gmail.com","commits":1}]},"readingTime":{"minutes":1.55,"words":464},"filePathRelative":"community/tutorials/artisan.md","localizedDate":"2019年9月8日","autoDesc":true}');export{c as comp,o as data};
