import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,c as r,a as e,e as a,b as t,w as o,d as l,o as d}from"./app-ydblb6sM.js";const c={},p=e("h1",{id:"upgrading-0-4-x-to-0-5-x",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#upgrading-0-4-x-to-0-5-x"},[e("span",null,"Upgrading 0.4.X to 0.5.X")])],-1),h={class:"hint-container caution"},u=e("p",{class:"hint-container-title"},"This Software is Abandoned",-1),m=e("p",null,[a("This documentation is for "),e("strong",null,"abandoned software"),a(" which does not recieve any security updates or support from the community. This documentation has been left accessible for historial reasons.")],-1),g=l(`<div class="hint-container caution"><p class="hint-container-title">警告</p><p>This upgrade process will require that <strong>all</strong> servers running through the Daemon be offline for a short period of time while data is reorganized and server containers are rebuilt. Please plan accordingly for this.</p><p>You will need to update your Panel to the 0.7.X series in order to complete this process as well.</p></div><h2 id="docker-adjustments" tabindex="-1"><a class="header-anchor" href="#docker-adjustments"><span>Docker Adjustments</span></a></h2><p>Previously we provided a quick Docker installation script in our installation instructions. We made the regrettable mistake of not reading deeper into it and realizing it enabled edge release channels for Docker. You&#39;ll want to take a look at the official documentation for Docker and change your channel to be a stable release channel.</p><p>Please reference the official Docker documentation for how to install Docker CE on your server. Some quick links are listed below for commonly supported systems.</p><ul><li><a href="https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce" target="_blank" rel="noopener noreferrer">Ubuntu</a></li><li><a href="https://docs.docker.com/install/linux/docker-ce/centos/#install-docker-ce" target="_blank" rel="noopener noreferrer">CentOS</a></li><li><a href="https://docs.docker.com/install/linux/docker-ce/debian/#install-docker-ce" target="_blank" rel="noopener noreferrer">Debian</a></li></ul><h2 id="download-files" tabindex="-1"><a class="header-anchor" href="#download-files"><span>Download Files</span></a></h2><p>To upgrade from v0.4.X first switch the directory where you installed your Daemon. If you followed the installation guide your Daemon is most likely located in <code>/srv/daemon</code>. Then, download and unpack the archive using the command below.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-L</span> https://github.com/pterodactyl/daemon/releases/download/v0.5.7/daemon.tar.gz <span class="token operator">|</span> <span class="token function">tar</span> --strip-components<span class="token operator">=</span><span class="token number">1</span> <span class="token parameter variable">-xzv</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then, update the core dependencies for the Daemon with the following command.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">npm</span> update <span class="token parameter variable">--only</span><span class="token operator">=</span>production</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sftp-cleanup" tabindex="-1"><a class="header-anchor" href="#sftp-cleanup"><span>SFTP Cleanup</span></a></h2><p>This version of the Daemon ships with an internal SFTP subsystem, no more need for a special Docker container or confusing file permissions. For the most part the Daemon can handle all of the internal changes that make this possible, you&#39;ll just need to remove the old Docker container for SFTP.</p><p>To do so, simply run the following commands, changing <code>2022</code> if you are using a different port.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> quay.io/pterodactyl/scrappy</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">kill</span> <span class="token variable"><span class="token variable">$(</span> <span class="token function">sudo</span> <span class="token function">lsof</span> <span class="token parameter variable">-i:2022</span> <span class="token parameter variable">-t</span> <span class="token variable">)</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Once you have completed that step, you will need to boot the Daemon in order to have the new system user created automatically. This can be done by running <code>sudo npm start</code> in the Daemon directory. You&#39;ll want to run it in the foreground in order to monitor progress and make sure it executes without issues. Once it has finished running and the Daemon is up and running, stop it again using <code>CTRL+C</code>.</p><p>If for whatever reason you need your user to be named something other than <code>pterodactyl</code> you can change that in the <code>core.json</code> before booting the Daemon by setting the <code>docker.container.username</code> key. 99.9% of users will not need to change the username.</p><h2 id="file-migration" tabindex="-1"><a class="header-anchor" href="#file-migration"><span>File Migration</span></a></h2><p>Now for the longest part of the upgrade: data migration. You only need to migrate data once when updating from v0.4.X.</p><p>You&#39;ll need all of your servers to be stopped for this part of the migration. All of their containers will also need to be rebuilt, but this will be completed on the Panel with a console command since we also need to update their configurations with some new data. We will run that command after we migrate all of the data.</p><p>To perform this migration, simply run the command below in the Daemon directory and follow its prompts. Be aware it might take a few minutes to run, especially with large volumes of data.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">sudo</span> <span class="token function">npm</span> run migrate</span>
<span class="line"><span class="token function">docker</span> system prune</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rebuild-containers" tabindex="-1"><a class="header-anchor" href="#rebuild-containers"><span>Rebuild Containers</span></a></h3><p>After migrating your data, you&#39;ll also need to run a command on the Panel in order to update all of the configurations for these servers. First, be sure to boot the Daemon in foreground mode (<code>sudo npm start</code>). You&#39;ll then want to run the following command in the Panel directory, <strong>not the Daemon directory</strong>.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">php artisan p:server:rebuild <span class="token parameter variable">--node</span><span class="token operator">=</span><span class="token comment">###</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Replace <code>###</code> above with the ID of your node that is being updated. This will toggle all servers for a rebuild, as well as push the latest information to their configurations. Once this is done, stop the Daemon, run the command below, and then boot it. If you have all daemons running and wish to update them all at once, remove the <code>--node</code> flag.</p><p>Boot the Daemon one last time in the foreground, make sure it completes without errors, and then you can stop it and restart it using your service: <code>sudo systemctl start wings</code>.</p><div class="hint-container tip"><p class="hint-container-title">Thanks!</p><p>You&#39;re all finished! Thanks for bearing with us, this update addresses a lot of flaws in the previous implementations of the software, and also prepares your data for the eventual migration to our new daemon — which is still in the works.</p></div>`,27);function f(b,v){const n=i("RouteLink");return d(),r("div",null,[p,e("div",h,[u,m,e("p",null,[a("You should be installing and using "),t(n,{to:"/wings/1.0/installing.html"},{default:o(()=>[a("Wings")]),_:1}),a(" in production environments with "),t(n,{to:"/panel/1.0/getting_started.html"},{default:o(()=>[a("Pterodactyl Panel 1.0")]),_:1}),a(".")])]),g])}const y=s(c,[["render",f],["__file","0.4_to_0.5.html.vue"]]),_=JSON.parse('{"path":"/daemon/0.6/upgrade/0.4_to_0.5.html","title":"Upgrading 0.4.X to 0.5.X","lang":"zh-CN","frontmatter":{"description":"Upgrading 0.4.X to 0.5.X This Software is Abandoned This documentation is for abandoned software which does not recieve any security updates or support from the community. This ...","head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/daemon/0.6/upgrade/0.4_to_0.5.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"Upgrading 0.4.X to 0.5.X"}],["meta",{"property":"og:description","content":"Upgrading 0.4.X to 0.5.X This Software is Abandoned This documentation is for abandoned software which does not recieve any security updates or support from the community. This ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-17T00:57:54.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-17T00:57:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Upgrading 0.4.X to 0.5.X\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-17T00:57:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Docker Adjustments","slug":"docker-adjustments","link":"#docker-adjustments","children":[]},{"level":2,"title":"Download Files","slug":"download-files","link":"#download-files","children":[]},{"level":2,"title":"SFTP Cleanup","slug":"sftp-cleanup","link":"#sftp-cleanup","children":[]},{"level":2,"title":"File Migration","slug":"file-migration","link":"#file-migration","children":[{"level":3,"title":"Rebuild Containers","slug":"rebuild-containers","link":"#rebuild-containers","children":[]}]}],"git":{"createdTime":1532759158000,"updatedTime":1713315474000,"contributors":[{"name":"Dane Everitt","email":"dane@daneeveritt.com","commits":1},{"name":"Jakob Schrettenbrunner","email":"dev@schrej.net","commits":1},{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.7,"words":809},"filePathRelative":"daemon/0.6/upgrade/0.4_to_0.5.md","localizedDate":"2018年7月28日","autoDesc":true}');export{y as comp,_ as data};
