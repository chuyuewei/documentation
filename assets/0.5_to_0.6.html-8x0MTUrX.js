import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,a as i,f as s,d as a,e as n,b as l,r as h,o as d}from"./app-FDp01XaM.js";const p={},g={class:"hint-container caution"};function c(u,e){const t=h("RouteLink");return d(),r("div",null,[e[7]||(e[7]=i("h1",{id:"upgrading-0-5-x-to-0-6-x",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#upgrading-0-5-x-to-0-6-x"},[i("span",null,"Upgrading 0.5.X to 0.6.X")])],-1)),i("div",g,[e[5]||(e[5]=i("p",{class:"hint-container-title"},"This Software is Abandoned",-1)),e[6]||(e[6]=i("p",null,[s("This documentation is for "),i("strong",null,"abandoned software"),s(" which does not recieve any security updates or support from the community. This documentation has been left accessible for historial reasons.")],-1)),i("p",null,[e[2]||(e[2]=s("You should be installing and using ")),a(t,{to:"/wings/1.0/installing.html"},{default:n(()=>e[0]||(e[0]=[s("Wings")])),_:1}),e[3]||(e[3]=s(" in production environments with ")),a(t,{to:"/panel/1.0/getting_started.html"},{default:n(()=>e[1]||(e[1]=[s("Pterodactyl Panel 1.0")])),_:1}),e[4]||(e[4]=s("."))])]),e[8]||(e[8]=l('<div class="hint-container warning"><p class="hint-container-title">Server Restart Required</p><p>Your servers will need to be restarted after upgrading the daemon in order to see the expected log output in the Panel.</p></div><h2 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes"><span>Breaking Changes</span></a></h2><p>This release introduces a few breaking changes to how the Daemon operates, but maintains compatibility with <code>v0.7.X</code> of the Panel, so you don&#39;t need to worry about updating the Panel.</p><p>Of notable change in this release is that we&#39;ve switched from using custom logging functionality to using Docker logging functionality. This allows us to better output events that happen before we can attach to the container, centralizes logic, and allows Docker to manage the logs (which it does very well). Now, when your server refuses to boot, instead of seeing an unhelpful &quot;Server has crashed&quot; message with nothing before it, you&#39;ll see <em>everything</em> that happened in the container leading up to that point, assuming things were output.</p><h2 id="download-files" tabindex="-1"><a class="header-anchor" href="#download-files"><span>Download Files</span></a></h2><p>To upgrade from v0.5.X first switch the directory where you installed your Daemon. If you followed the installation guide your Daemon is most likely located in <code>/srv/daemon</code>. Then, download and unpack the archive using the command below.</p><div class="hint-container caution"><p class="hint-container-title">警告</p><p>Stop your Daemon process before continuing in order to avoid any issues and ensure everything updates as expected.</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> stop</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> wings</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -L</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/pterodactyl/daemon/releases/download/v0.6.13/daemon.tar.gz</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">tar</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --strip-components=1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -xzv</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Then, update the core dependencies for the Daemon with the following command.</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --only=production</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="start-the-daemon" tabindex="-1"><a class="header-anchor" href="#start-the-daemon"><span>Start the Daemon</span></a></h3><p>Finally, start your daemon up, most likely with the command below.</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> wings</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="rebuild-containers" tabindex="-1"><a class="header-anchor" href="#rebuild-containers"><span>Rebuild Containers</span></a></h2><p>Because of some changes we made behind the scenes when it comes to displaying server output you&#39;ll need to rebuild and restart all of your servers. The rebuild step is required, the restart step is optional, but highly recommended otherwise you will not be able to see any console output.</p><p>Run the following commands <em>from the Panel server</em> in order to perform a mass rebuild and restart. Replace <code>###</code> with the ID of the node you just upgraded, or remove the <code>--node</code> flag entirely to rebuild on all nodes.</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">php</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> artisan</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> p:server:rebuild</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --node=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">###</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Then, restart all of the servers using the following command, or by manually restarting them one at a time in the Panel.</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">php</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> artisan</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> p:server:bulk-power</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> restart</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --nodes=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">###</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',19))])}const b=o(p,[["render",c],["__file","0.5_to_0.6.html.vue"]]),y=JSON.parse('{"path":"/daemon/0.6/upgrade/0.5_to_0.6.html","title":"Upgrading 0.5.X to 0.6.X","lang":"zh-CN","frontmatter":{"head":[["meta",{"name":"robots","content":"noindex"}],["meta",{"property":"og:url","content":"https://pterodactyl.top/daemon/0.6/upgrade/0.5_to_0.6.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"Upgrading 0.5.X to 0.6.X"}],["meta",{"property":"og:description","content":"Upgrading 0.5.X to 0.6.X This Software is Abandoned This documentation is for abandoned software which does not recieve any security updates or support from the community. This ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Upgrading 0.5.X to 0.6.X\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"description":"Upgrading 0.5.X to 0.6.X This Software is Abandoned This documentation is for abandoned software which does not recieve any security updates or support from the community. This ...","gitInclude":[]},"headers":[{"level":2,"title":"Breaking Changes","slug":"breaking-changes","link":"#breaking-changes","children":[]},{"level":2,"title":"Download Files","slug":"download-files","link":"#download-files","children":[{"level":3,"title":"Start the Daemon","slug":"start-the-daemon","link":"#start-the-daemon","children":[]}]},{"level":2,"title":"Rebuild Containers","slug":"rebuild-containers","link":"#rebuild-containers","children":[]}],"readingTime":{"minutes":1.48,"words":445},"filePathRelative":"daemon/0.6/upgrade/0.5_to_0.6.md","autoDesc":true}');export{b as comp,y as data};
