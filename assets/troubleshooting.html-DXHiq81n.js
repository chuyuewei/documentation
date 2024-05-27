import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as n,d as s}from"./app-ydblb6sM.js";const t={},r=s(`<h1 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting"><span>Troubleshooting</span></a></h1><h2 id="reading-error-logs" tabindex="-1"><a class="header-anchor" href="#reading-error-logs"><span>Reading Error Logs</span></a></h2><p>If you ever encounter an unexpected error with the Panel the first thing you will likely be asked for is the logs. To retrieve these, simply execute the command below which will output the last 100 lines of the Panel&#39;s log file.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">tail</span> <span class="token parameter variable">-n</span> <span class="token number">100</span> /var/www/pterodactyl/storage/logs/laravel-<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%F<span class="token variable">)</span></span>.log</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="parsing-the-error" tabindex="-1"><a class="header-anchor" href="#parsing-the-error"><span>Parsing the Error</span></a></h3><p>When you run the command above, you&#39;ll probably be hit with a huge wall of text that might scare you. Fear not, this is simply a stacktrace leading to the cause of the error, and you can actually ignore almost all of it when looking for the cause of the error. Lets take a look at some example output below, which has been truncated to make this easier to follow with.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">#70 /srv/www/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(116): Illuminate\\Foundation\\Http\\Kernel-&gt;sendRequestThroughRouter(Object(Illuminate\\Http\\Request))</span>
<span class="line">#71 /srv/www/public/index.php(53): Illuminate\\Foundation\\Http\\Kernel-&gt;handle(Object(Illuminate\\Http\\Request))</span>
<span class="line">#72 {main}</span>
<span class="line">[2018-07-19 00:50:24] local.ERROR: ErrorException: file_put_contents(/srv/www/storage/framework/views/c9c05d1357df1ce4ec8fc5df78c16c493b0d4f48.php): failed to open stream: Permission denied in /srv/www/vendor/laravel/framework/src/Illuminate/Filesystem/Filesystem.php:122</span>
<span class="line">Stack trace:</span>
<span class="line">#0 [internal function]: Illuminate\\Foundation\\Bootstrap\\HandleExceptions-&gt;handleError(2, &#39;file_put_conten...&#39;, &#39;/srv/www/vendor...&#39;, 122, Array)</span>
<span class="line">#1 /srv/www/vendor/laravel/framework/src/Illuminate/Filesystem/Filesystem.php(122): file_put_contents(&#39;/srv/www/storag...&#39;, &#39;&lt;?php $__env-&gt;s...&#39;, 0)</span>
<span class="line">#2 /srv/www/vendor/laravel/framework/src/Illuminate/View/Compilers/BladeCompiler.php(122): Illuminate\\Filesystem\\Filesystem-&gt;put(&#39;/srv/www/storag...&#39;, &#39;&lt;?php $__env-&gt;s...&#39;)</span>
<span class="line">#3 /srv/www/vendor/laravel/framework/src/Illuminate/View/Engines/CompilerEngine.php(51): Illuminate\\View\\Compilers\\BladeCompiler-&gt;compile(&#39;/srv/www/resour...&#39;)</span>
<span class="line">#4 /srv/www/vendor/laravel/framework/src/Illuminate/View/View.php(142): Illuminate\\View\\Engines\\CompilerEngine-&gt;get(&#39;/srv/www/resour...&#39;, Array)</span>
<span class="line">#5 /srv/www/vendor/laravel/framework/src/Illuminate/View/View.php(125): Illuminate\\View\\View-&gt;getContents()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The first thing you&#39;ll want to do is follow the chain of numbers <em>up</em> until you find <code>#0</code>, this will be the function that triggered the exception. Right above line 0 you will see a line that has the date and time in brackets, <code>[2018-07-19 00:50:24]</code> above for example. This line will be the human readable exception that you can use to understand what went wrong.</p><h3 id="understanding-the-error" tabindex="-1"><a class="header-anchor" href="#understanding-the-error"><span>Understanding the Error</span></a></h3><p>In the example above we can see that the actual error was:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">local.ERROR: ErrorException: file_put_contents(...): failed to open stream: Permission denied in /srv/www/vendor/laravel/framework/src/Illuminate/Filesystem/Filesystem.php:122</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>From this error we can determine that there was an error performing a <a href="http://php.net/manual/en/function.file-put-contents.php" target="_blank" rel="noopener noreferrer">file_put_contents()</a> call, and the error was that we couldn&#39;t open the file because permissions were denied. Its okay if you don&#39;t understand the error at all, but it does help you get faster support if you&#39;re able to provide these logs, and at least find the source of the error. Sometimes the errors are pretty straightforward and will tell you exactly what went wrong, such as a <code>ConnectionException</code> being thrown when the Panel can&#39;t connect to the Daemon.</p><h3 id="utilizing-grep" tabindex="-1"><a class="header-anchor" href="#utilizing-grep"><span>Utilizing GREP</span></a></h3><p>If you&#39;re trying to go through a bunch of errors quickly, you can use the command below which will limit the results returned to only be the actual error lines, without all of the stack traces.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">tail</span> <span class="token parameter variable">-n</span> <span class="token number">1000</span> /var/www/pterodactyl/storage/logs/laravel-<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%F<span class="token variable">)</span></span>.log <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;\\[<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y<span class="token variable">)</span></span>&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="transfer-exceptions-xhr-poll-error" tabindex="-1"><a class="header-anchor" href="#transfer-exceptions-xhr-poll-error"><span>Transfer Exceptions / XHR Poll Error</span></a></h2><p>If you are seeing errors similar to the examples below, chances are there is some networking related issue, or you just don&#39;t have a required service running.</p><h3 id="example-errors" tabindex="-1"><a class="header-anchor" href="#example-errors"><span>Example Errors</span></a></h3><ul><li><p>&quot;We were unable to connect to the main Socket.IO server, there may be network issues currently. The panel may not work as expected.&quot;</p></li><li><p>&quot;A TransferException was encountered while trying to contact the daemon, please ensure it&#39;s online and accessible. This error has been logged.&quot;</p></li></ul><h3 id="basic-debugging-steps" tabindex="-1"><a class="header-anchor" href="#basic-debugging-steps"><span>Basic Debugging Steps</span></a></h3><ul><li><p>Ensure you have AdBlock disabled or whitelisted for your Panel and Daemon domains.</p></li><li><p>Check your browser&#39;s console by pressing <code>Ctrl + Shift + J</code> (in Chrome) or <code>Cmd + Alt + I</code> (in Safari). If there is a red error in it, chances are that it will narrow down the potential problem.</p></li><li><p>Make sure if the daemon is properly installed and the active configuration matches the configuration shown under <code>Admin -&gt; Node -&gt; Configuration</code> in the Panel.</p></li><li><p>Check that the Daemon is running, and not reporting errors. Use <code>service wings status</code> to check the current status of the process.</p></li><li><p>Check that the Daemon ports are open on your firewall. The Daemon uses ports <code>8080</code> or <code>8443</code> for HTTP traffic, and <code>2022</code> for SFTP traffic.</p></li><li><p>Check that the Panel can reach the Daemon using the domain that is configured on the Panel. Run <code>curl https://domain.com:8080</code> on the Panel server and ensure that it can connect to the Daemon.</p></li><li><p>Ensure that you are using the correct HTTP scheme for your Panel and Daemon. If the Panel is running over HTTPS the Daemon will also need to be running on HTTPS.</p></li></ul><h3 id="more-advanced-debugging-steps" tabindex="-1"><a class="header-anchor" href="#more-advanced-debugging-steps"><span>More Advanced Debugging Steps</span></a></h3><ul><li><p>Stop the Daemon and run <code>cd /srv/daemon; sudo npm start</code> to see if there are any errors being output by the Daemon. If so, try resolving them manually, or contact us on Discord for more assistance.</p></li><li><p>Check your DNS and ensure that the response you receive is the one you expect using a tool such as <code>nslookup</code> or <code>dig</code>.</p></li><li><p>If you use CloudFlare make sure that the yellow cloud is disabled for your Daemon or Panel <code>A</code> records.</p></li><li><p>Make sure when using the daemon behind a firewall — pfSense, OpenSwitch, etc — that the correct NAT settings to access the Daemon&#39;s ports from the outside network are setup.</p></li><li><p>If nothing is working so far, check your own DNS settings and consider switching DNS servers.</p></li><li><p>When running the Panel and Daemon on one server it can sometimes help if to add an entry in <code>/etc/hosts</code> that directs the public IP back to the server. Sometimes the reverse path is also needed, so you may need to add an entry to your servers <code>/etc/hosts</code> file that points the Panel&#39;s domain to the correct IP.</p></li><li><p>When running the Daemon and Panel on separate VM&#39;s using the same adapter make sure the VM&#39;s can connect to each other. Promiscuous mode might be needed.</p></li></ul><h2 id="invalid-mac-exception" tabindex="-1"><a class="header-anchor" href="#invalid-mac-exception"><span>Invalid MAC Exception</span></a></h2><div class="hint-container warning"><p class="hint-container-title">注意</p><p>This error should never happen if you correctly follow our installation and upgrade guides. The only time we have ever seen this error occur is when you blindly restore the Panel database from a backup and try to use a fresh installation of the Panel.</p><p>When restoring backups you should <em>always</em> restore the <code>.env</code> file!</p></div><p>Sometimes when using the Panel you&#39;ll unexpectedly encounter a broken page, and upon checking the logs you&#39;ll see an exception mentioning an invalid MAC when decrypting. This error is caused by mismatched <code>APP_KEY</code>s in your <code>.env</code> file when the data was encrypted versus decrypted.</p><p>If you are seeing this error the only solution is to restore the <code>APP_KEY</code> from your <code>.env</code> file. If you have lost that original key there is no way to recover the lost data.</p><h2 id="selinux-issues" tabindex="-1"><a class="header-anchor" href="#selinux-issues"><span>SELinux Issues</span></a></h2><p>On systems with SELinux installed you might encounter unexpected errors when running redis or attempting to connect to the daemon to perform actions. These issues can generally be resolved by executing the commands below to allow these programs to work with SELinux.</p><h3 id="redis-permissions-errors" tabindex="-1"><a class="header-anchor" href="#redis-permissions-errors"><span>Redis Permissions Errors</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">audit2allow <span class="token parameter variable">-a</span> <span class="token parameter variable">-M</span> redis_t</span>
<span class="line">semodule <span class="token parameter variable">-i</span> redis_t.pp</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="in-case-there-is-any-weirdness-with-parts-of-the-panel" tabindex="-1"><a class="header-anchor" href="#in-case-there-is-any-weirdness-with-parts-of-the-panel"><span>In case there is any weirdness with parts of the panel</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">restorecon <span class="token parameter variable">-R</span> /var/www/pterodactyl/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="daemon-connection-errors" tabindex="-1"><a class="header-anchor" href="#daemon-connection-errors"><span>Daemon Connection Errors</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">audit2allow <span class="token parameter variable">-a</span> <span class="token parameter variable">-M</span> http_port_t</span>
<span class="line">semodule <span class="token parameter variable">-i</span> http_port_t.pp</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="firewalld-issues" tabindex="-1"><a class="header-anchor" href="#firewalld-issues"><span>FirewallD issues</span></a></h2><p>If you are on a RHEL/CentOS server with firewalld installed you may have broken DNS.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">firewall-cmd --permanent --zone=trusted --change-interface=pterodactyl0</span>
<span class="line">firewall-cmd --reload</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>restart docker and wings after running these to be sure the rules are applied.</p><h2 id="database-errors" tabindex="-1"><a class="header-anchor" href="#database-errors"><span>Database Errors</span></a></h2><h3 id="databasecontroller-php-142" tabindex="-1"><a class="header-anchor" href="#databasecontroller-php-142"><span>DatabaseController.php:142</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">production.ERROR: ErrorException: Undefined variable: host in /var/www/pterodactyl/app/Http/Controllers/Admin/DatabaseController.php:142</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The database user you are trying to use doesn&#39;t have appropriate grants/has used incorrect password.</p>`,43),i=[r];function o(l,d){return n(),a("div",null,i)}const h=e(t,[["render",o],["__file","troubleshooting.html.vue"]]),u=JSON.parse('{"path":"/panel/0.7/troubleshooting.html","title":"Troubleshooting","lang":"zh-CN","frontmatter":{"description":"Troubleshooting Reading Error Logs If you ever encounter an unexpected error with the Panel the first thing you will likely be asked for is the logs. To retrieve these, simply e...","head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/panel/0.7/troubleshooting.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"Troubleshooting"}],["meta",{"property":"og:description","content":"Troubleshooting Reading Error Logs If you ever encounter an unexpected error with the Panel the first thing you will likely be asked for is the logs. To retrieve these, simply e..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-17T00:57:54.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-17T00:57:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Troubleshooting\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-17T00:57:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Reading Error Logs","slug":"reading-error-logs","link":"#reading-error-logs","children":[{"level":3,"title":"Parsing the Error","slug":"parsing-the-error","link":"#parsing-the-error","children":[]},{"level":3,"title":"Understanding the Error","slug":"understanding-the-error","link":"#understanding-the-error","children":[]},{"level":3,"title":"Utilizing GREP","slug":"utilizing-grep","link":"#utilizing-grep","children":[]}]},{"level":2,"title":"Transfer Exceptions / XHR Poll Error","slug":"transfer-exceptions-xhr-poll-error","link":"#transfer-exceptions-xhr-poll-error","children":[{"level":3,"title":"Example Errors","slug":"example-errors","link":"#example-errors","children":[]},{"level":3,"title":"Basic Debugging Steps","slug":"basic-debugging-steps","link":"#basic-debugging-steps","children":[]},{"level":3,"title":"More Advanced Debugging Steps","slug":"more-advanced-debugging-steps","link":"#more-advanced-debugging-steps","children":[]}]},{"level":2,"title":"Invalid MAC Exception","slug":"invalid-mac-exception","link":"#invalid-mac-exception","children":[]},{"level":2,"title":"SELinux Issues","slug":"selinux-issues","link":"#selinux-issues","children":[{"level":3,"title":"Redis Permissions Errors","slug":"redis-permissions-errors","link":"#redis-permissions-errors","children":[]},{"level":3,"title":"In case there is any weirdness with parts of the panel","slug":"in-case-there-is-any-weirdness-with-parts-of-the-panel","link":"#in-case-there-is-any-weirdness-with-parts-of-the-panel","children":[]},{"level":3,"title":"Daemon Connection Errors","slug":"daemon-connection-errors","link":"#daemon-connection-errors","children":[]}]},{"level":2,"title":"FirewallD issues","slug":"firewalld-issues","link":"#firewalld-issues","children":[]},{"level":2,"title":"Database Errors","slug":"database-errors","link":"#database-errors","children":[{"level":3,"title":"DatabaseController.php:142","slug":"databasecontroller-php-142","link":"#databasecontroller-php-142","children":[]}]}],"git":{"createdTime":1532812513000,"updatedTime":1713315474000,"contributors":[{"name":"Jakob Schrettenbrunner","email":"dev@schrej.net","commits":1},{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.2,"words":1261},"filePathRelative":"panel/0.7/troubleshooting.md","localizedDate":"2018年7月28日","autoDesc":true}');export{h as comp,u as data};
