if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let r={};const n=e=>a(e,t),c={module:{uri:t},exports:r,require:n};s[t]=Promise.all(i.map((e=>c[e]||n(e)))).then((e=>(d(...e),r)))}}define(["./workbox-1ab968a5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/0.4_to_0.5.html-BKT_vB-Q.js",revision:"78939ceafbe0a43a43cd1e99882733cf"},{url:"assets/0.5_to_0.6.html-T3H-5DsW.js",revision:"e1d84dd4cb5a98f3465655d50cecdce7"},{url:"assets/0.5.html-nwsbrS4I.js",revision:"4617d92a889798669c7b74dd29da7951"},{url:"assets/0.6_to_0.7.html-DL01m0aX.js",revision:"993d12053c7e22e6e341f72f792681de"},{url:"assets/0.6.html-B7AKUyU0.js",revision:"2092e7497e8aa87de1b6e2cdeebe582d"},{url:"assets/0.7.html-DKA5mVCr.js",revision:"23e767891cc3f045227023f0bcc16b91"},{url:"assets/404.html-BMNQ7qm-.js",revision:"bd0eca86fcce82b30d04726f7ba35751"},{url:"assets/about.html-B7IncDVC.js",revision:"fbedb418ea5a8fdab8556524cd65a7b2"},{url:"assets/about.html-DzV32Fk4.js",revision:"7b0e176a01483315d1a6a56468444c12"},{url:"assets/add_node.html-BALHRsfs.js",revision:"40a98f4bde65121931edb05db78630fa"},{url:"assets/additional_configuration.html-Bll3RAfJ.js",revision:"78352dd01c9974bc4027cf0ec8b7e4b2"},{url:"assets/app-BUCBEFfR.js",revision:"872648ad69408243910386b414a44a4c"},{url:"assets/artisan.html-DAvBgpwK.js",revision:"9dfd74e9471eb56783b4a922f77eff86"},{url:"assets/btpanel_getstarted.html-DZEpqaPV.js",revision:"bf5a1c48494f4a0e662d50a58b6fa0f5"},{url:"assets/centos7.html-BaH00BkT.js",revision:"5a5662e7b4d05ae7a5f4be794cf22e35"},{url:"assets/centos7.html-Du5M1Zwc.js",revision:"28edec231a967f0c918260a71723c7ac"},{url:"assets/centos8.html-deJAc4D9.js",revision:"53ff762a75b21fb2de2ffb57c41e860b"},{url:"assets/centos8.html-LIFwB8H7.js",revision:"661a8c7a7c1ce98749afb9134ce2802a"},{url:"assets/community.html-Df5NQ7XW.js",revision:"1688e4f81275471ce19d29fde17bf47c"},{url:"assets/configuration.html-BtSyNrjb.js",revision:"aeff4859931b5e6e96538a2201c5802e"},{url:"assets/configuration.html-CbyoHzr6.js",revision:"26a0d8ad51f956237248eaf11be799ae"},{url:"assets/configuration.html-D7iWHrvB.js",revision:"0d2f116ef43600661d2b1e5afbd229f1"},{url:"assets/creating_a_custom_egg.html-DqH-LLR0.js",revision:"239736d08aade09cb528f963685f0736"},{url:"assets/creating_a_custom_image.html-BR3ZDm8E.js",revision:"99485481e7ed1fd3aabddaebe25cf189"},{url:"assets/creating_ssl_certificates.html-CI6UD1wW.js",revision:"8e2dcc7fd273f7c5f2da6718c2fb8d9f"},{url:"assets/debian_8_docker.html-DVUtVsZJ.js",revision:"c0ae7ad786a43207ea3b1f6561b8dbd4"},{url:"assets/debian.html-BPzHShDX.js",revision:"c0608a6d79943612a80c4a9da155e263"},{url:"assets/debian.html-d-83rjvr.js",revision:"860ac0364a2309b40dbc7b87f9a8d69b"},{url:"assets/docker_getstarted.html-CeV3BJQ5.js",revision:"a5f246b5bd73a42e87c18778acd3539a"},{url:"assets/getting_started.html-D56t3mAx.js",revision:"563170ad205b70bc95210a09c2c24935"},{url:"assets/getting_started.html-k4rlhnmL.js",revision:"93afa1f02f353f430f860a8b7abad454"},{url:"assets/image/advanced.svg",revision:"2934a573b64033bebb71f067ebc8d082"},{url:"assets/image/blog.svg",revision:"5686f361aca8bcf73522de225d09016d"},{url:"assets/image/box.svg",revision:"5f732c9705e288e8fb8ae6d2e5ce906a"},{url:"assets/image/features.svg",revision:"2eb292180d361e4af3f4bf411ef06062"},{url:"assets/image/github-dark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"assets/image/github-light.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"assets/image/layout.svg",revision:"db603c70eb017066ff30923ca5a2cd4a"},{url:"assets/image/markdown.svg",revision:"1a8b4476dae8f52cdd873d2b00fa27fb"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-b0GlzCnw.js",revision:"75d870c0038af48c2329b7a7345e112d"},{url:"assets/index.html-BEYE6qwZ.js",revision:"9c5904a7a4fc5f6d46565f912c0667c2"},{url:"assets/index.html-BMqy--VZ.js",revision:"717d8fc362037a218c9dfbb40327b2b9"},{url:"assets/index.html-Bngu4kkA.js",revision:"50a8e17c82d853c410be0a4241ee8eae"},{url:"assets/index.html-BYJ1RhBs.js",revision:"e10f20868d4b92bf5e8ba0795d81b53b"},{url:"assets/index.html-BYpmbQKG.js",revision:"66df72a84e7eb5c485a1e17177e4cacf"},{url:"assets/index.html-C6rsYfSw.js",revision:"6f767da551b2de03fbabdbc149175719"},{url:"assets/index.html-Ccvo5pKd.js",revision:"61af2dce1f7ea5c943b5e8f9d70ca345"},{url:"assets/index.html-COuKPoRB.js",revision:"db208aea28395ffcc0fbf4609c013fcc"},{url:"assets/index.html-CPMNDMh1.js",revision:"444c14b35d8f87e335d9c0e7e7a38097"},{url:"assets/index.html-CPZdvB1P.js",revision:"394c959c58b7bf50214282ba01351ec0"},{url:"assets/index.html-DeBWrONN.js",revision:"4747b35a2acdf4b2d232471dafa5181a"},{url:"assets/index.html-Dh7gfhjM.js",revision:"8f1c6e52ef8458d390ab2f8cb51f293c"},{url:"assets/index.html-DHd8MXy9.js",revision:"06043afc2efee1a1df8cafdc6c486f44"},{url:"assets/index.html-Djgr3ltJ.js",revision:"2216b5850404a9b15af79c0f0c5d2deb"},{url:"assets/index.html-DlBNyYyy.js",revision:"a1671bd78d6f3dd8476e502093e77db9"},{url:"assets/index.html-DSDQwIj0.js",revision:"77a5667a7adc001239c3fc1892ab2801"},{url:"assets/index.html-DXb24AJ4.js",revision:"b0bc64484cb70df3e4bc8471dc456ce7"},{url:"assets/index.html-Dyks8Znr.js",revision:"98c009e85965cb5e35847749fb2689a3"},{url:"assets/index.html-hbajToRS.js",revision:"8259d593b28599e4102b4452b2beb6e8"},{url:"assets/index.html-K5cdOEv5.js",revision:"11b4a157e84384df14f90276e535851b"},{url:"assets/index.html-oAbiUTvb.js",revision:"cb5e57e6246b2c96577fce31704ad331"},{url:"assets/index.html-qmPpiBTm.js",revision:"bd4902fc803fc2b8c04305b6cbc313e2"},{url:"assets/installing.html-C-PuZDFK.js",revision:"91939e0a39968eb34cf4af1250ded8bc"},{url:"assets/installing.html-CSLSBta7.js",revision:"02c094958a691142a6f57a7f56ef9347"},{url:"assets/introduction.html-DPq1daoj.js",revision:"6ba088ce76a2a9a78e9c26516d2587b9"},{url:"assets/kernel_modifications.html-h5MzIoT8.js",revision:"e40d21e8b015af02138089851182ed3f"},{url:"assets/legacy_upgrade.html-AHUj3i7r.js",revision:"11f451917b11776e4da83ccf8ab4d9bf"},{url:"assets/markdown.esm-BG2Xu2Hd.js",revision:"dfebc8121864151002204ef714f81472"},{url:"assets/migrating.html-CW1BCqc5.js",revision:"acd6696c2c03eb4f269b614e07b7bf5d"},{url:"assets/minecraft.html-BUW-foqJ.js",revision:"d727236e8a7eb11b901b57a566aba203"},{url:"assets/mounts.html-DdUX7aju.js",revision:"2a1413365d6db2f2a27d45bd7ce7b172"},{url:"assets/mysql_setup.html-Dc97d96q.js",revision:"7607ec26b5967ae286dea88b454b5969"},{url:"assets/panel.html-DPiNfhka.js",revision:"e79320db38bda44c845781599994b502"},{url:"assets/photoswipe.esm-SzV8tJDW.js",revision:"481d5342d9bb799640b63b15b698dcd4"},{url:"assets/php_upgrade.html-DkEmXy_r.js",revision:"80973f7d1430691ae2a99b6a4476c04f"},{url:"assets/plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/reveal.esm-CYbl4_PU.js",revision:"d7a2a78c9e57530577ca771ebd6203f1"},{url:"assets/standalone_sftp.html-C-SSahql.js",revision:"cac33197e8bdec02e10cc0935f1d82d1"},{url:"assets/style-DoHw-qs3.css",revision:"485a38da48156c6be15130f1eae3b1ed"},{url:"assets/terms.html-BGkxg7rz.js",revision:"6dbcf39a476e9df28da74f062add0905"},{url:"assets/troubleshooting.html-BpxPwNsW.js",revision:"e016e8d065d501671d9577d8ec256547"},{url:"assets/troubleshooting.html-DpmkLVcL.js",revision:"566363b7872d70194bd23ca4135d2ac8"},{url:"assets/ubuntu1804.html-B-c1YH2v.js",revision:"1eba3ae648667fefe0c5ec67ec0506c1"},{url:"assets/ubuntu1804.html-DIkkA9i4.js",revision:"861f97865a331d0b16d67146f1ce3d68"},{url:"assets/ubuntu2004.html-B8szbYRJ.js",revision:"0fb9cc7ec0223a492f2e8af77307327b"},{url:"assets/ubuntu2004.html-CArfbe2Q.js",revision:"659b8734482d3249dcb0f3a5f111af51"},{url:"assets/updating.html-DsugkCz4.js",revision:"18fbe147afdc169302d64560d0c921ad"},{url:"assets/upgrading.html-BIwbJo1W.js",revision:"ed11a4aec45982e4e79a2cfb8c345ab3"},{url:"assets/upgrading.html-Ch2-7zvL.js",revision:"739b83b86bee4362c8fb1348e1510de5"},{url:"assets/upgrading.html-qWjA8Wtx.js",revision:"8b2349138f6dcd95bdc3bcc1e23fe318"},{url:"assets/webserver_configuration.html-BeZJL2hY.js",revision:"1a05bd21225740c0abc36626d9fe71bd"},{url:"assets/webserver_configuration.html-DtxeF1WD.js",revision:"0c1f1db72a59a5c35b0accef5ecb14e6"},{url:"assets/wings_configuration_example-CiiF11xE.js",revision:"e0576ca1ee55a2bea8484bb93399c3da"},{url:"assets/wings.html-D4oCW3ty.js",revision:"370f780b6bab1dc49708c2d6a2e5b792"},{url:"favicons/safari-pinned-tab.svg",revision:"db7d6b19affde4828e29e156a292d578"},{url:"frontpage/loading.svg",revision:"f9ac6b8127286b1a1b15d6938f96ea4a"},{url:"logos/pterry.svg",revision:"f3fb9eb4376d84e63d648afd82d42591"},{url:"pterodactyl-flat.svg",revision:"210292be2b55fff33f927f259db9f81c"},{url:"404.html",revision:"ec46632d5f465450782e6acdc3d8ebb3"},{url:"community/about.html",revision:"6b7a9fb6ba60adb304c9f9496318b25d"},{url:"community/config/eggs/creating_a_custom_egg.html",revision:"c1a383ffc9704a82b508a5352c3fbecb"},{url:"community/config/eggs/creating_a_custom_image.html",revision:"7b490a2a7d30b23c302cfbceac1e694f"},{url:"community/config/eggs/index.html",revision:"cb206a5adcfae53c900328a39ed009d0"},{url:"community/config/index.html",revision:"c86a27e4292947c5ea28d550e3317a42"},{url:"community/config/nodes/add_node.html",revision:"c0a75c2c70d2e0eace96f0b8833cd8cc"},{url:"community/config/nodes/index.html",revision:"3c3bcd58298d2379a0b3753bf102bece"},{url:"community/customization/index.html",revision:"2b9d398ee39b4d849651da78154ad41b"},{url:"community/customization/panel.html",revision:"7a0654ac4f203316f9c3b5e69b1646fa"},{url:"community/customization/wings.html",revision:"c380dbd9651e62ecac1279a4012272cd"},{url:"community/games/index.html",revision:"ebab572ca35c87bff715f1137c3b64a7"},{url:"community/games/minecraft.html",revision:"d9fa0499bd2a08cf35b2d5c7ccce99a4"},{url:"community/index.html",revision:"56db77e9c35009da072ed5b72809cf9b"},{url:"community/installation-guides/index.html",revision:"35dc11367bf0f0254c6095493b376feb"},{url:"community/installation-guides/panel/centos7.html",revision:"4d9582bd00024553563af41f27631a7f"},{url:"community/installation-guides/panel/centos8.html",revision:"0bd6ebaa42e79458edb38a44d79073e0"},{url:"community/installation-guides/panel/debian.html",revision:"b5300819e29479f53d08c64c305ee520"},{url:"community/installation-guides/panel/index.html",revision:"40ec0b03ccf4c1b8cf752a5e91c14db8"},{url:"community/installation-guides/panel/ubuntu1804.html",revision:"c6856e6c916c04f1d309c0f73b74b186"},{url:"community/installation-guides/panel/ubuntu2004.html",revision:"c053f1a984979bc1dd1b3df71382db0c"},{url:"community/installation-guides/wings/centos7.html",revision:"037a1922a87b47e5477163e2658c0748"},{url:"community/installation-guides/wings/centos8.html",revision:"cb409da49fde184237e5283f772a1e58"},{url:"community/installation-guides/wings/debian.html",revision:"81416a3ff55a47b6a9d58cd71dad30c9"},{url:"community/installation-guides/wings/index.html",revision:"7d501f750443482560e99ae31a1a9b17"},{url:"community/installation-guides/wings/ubuntu1804.html",revision:"c0624a1fedce16056660f5a8b7c55a1f"},{url:"community/installation-guides/wings/ubuntu2004.html",revision:"6f108ac667ebd66bde82cfeac8eecb41"},{url:"community/tutorials/artisan.html",revision:"960df9da83694dafdbcc886afd006478"},{url:"community/tutorials/index.html",revision:"0cbfc73a6bc0768852daf3d94eed4fac"},{url:"daemon/0.6/configuration.html",revision:"be97380304e7d6f04a82776680c68336"},{url:"daemon/0.6/debian_8_docker.html",revision:"626c9ca7a0208fb5fb4206c77e9fef58"},{url:"daemon/0.6/index.html",revision:"2d97bf5d4df2362d674f489cef84590a"},{url:"daemon/0.6/installing.html",revision:"3606932606297bdfc9d318e5407c9ebb"},{url:"daemon/0.6/kernel_modifications.html",revision:"21af6a8357ab946be04a63018e84807b"},{url:"daemon/0.6/standalone_sftp.html",revision:"549f02894a99ff4008d79cd49cd3c552"},{url:"daemon/0.6/upgrade/0.4_to_0.5.html",revision:"98a498347980071423a9e9fb10c2d659"},{url:"daemon/0.6/upgrade/0.5_to_0.6.html",revision:"4bdb3a484c1503be6e61736b063e0325"},{url:"daemon/0.6/upgrade/0.5.html",revision:"ca7556a98b4309b0de44dec4f8a25bbe"},{url:"daemon/0.6/upgrade/0.6.html",revision:"8f435f92b89dabe2b699e2f34a7aaa75"},{url:"daemon/0.6/upgrade/index.html",revision:"9662c9424ac0aa391b82a82fd1ba8935"},{url:"daemon/0.6/upgrading.html",revision:"acf4ccacf401d260e1298cf154d0fafa"},{url:"daemon/index.html",revision:"72bc7826b62aff2026ca23d683bea096"},{url:"guides/index.html",revision:"9571b8a950520b5b9fedf89445d6bad6"},{url:"guides/mounts.html",revision:"80b020d715d743be7c3aa4ebd2e50e91"},{url:"guides/php_upgrade.html",revision:"df4974fe5e3c11ce51f445de464ec419"},{url:"index.html",revision:"acb3562167c2f2701dd970dfb9d3e4ad"},{url:"panel/0.7/configuration.html",revision:"619764eccc72a469c862d369fad8d6a9"},{url:"panel/0.7/getting_started.html",revision:"1b94b4239b1f918b56e7877b9a16d2ef"},{url:"panel/0.7/index.html",revision:"1ea42527a30025a1f11d7f4bbf6901f7"},{url:"panel/0.7/troubleshooting.html",revision:"dfbe0c62848fa7dac0141929f921c205"},{url:"panel/0.7/upgrade/0.6_to_0.7.html",revision:"e75fc59d16555ccefb1e64ca32a66a76"},{url:"panel/0.7/upgrade/0.7.html",revision:"145f3c0c188b9bc652c3c4923e11d09f"},{url:"panel/0.7/upgrade/index.html",revision:"4d97dd8950b6315ed2c4a9c9e192f59d"},{url:"panel/0.7/upgrading.html",revision:"1742ba50d37674d920499f09c63a2235"},{url:"panel/0.7/webserver_configuration.html",revision:"67eab60b1238fe9a961fe3797af13de7"},{url:"panel/1.0/additional_configuration.html",revision:"ea865c79768a8cab6e8d90f4105aea54"},{url:"panel/1.0/btpanel_getstarted.html",revision:"10d6962e45ff1bb75cc00b110174c97d"},{url:"panel/1.0/docker_getstarted.html",revision:"53354d5c494ac2199a55a2c8c88c569b"},{url:"panel/1.0/getting_started.html",revision:"f69da2269ab0f909128608537a2fe9df"},{url:"panel/1.0/index.html",revision:"54faaf8a8cde90f46f8679c20649b89f"},{url:"panel/1.0/legacy_upgrade.html",revision:"3060102262036eced5925aa793a52f6e"},{url:"panel/1.0/troubleshooting.html",revision:"3ec9275baea491ff3ddc4d5f6ddb4a1d"},{url:"panel/1.0/updating.html",revision:"824eb79340e3452872ec7b2664f22b44"},{url:"panel/1.0/webserver_configuration.html",revision:"4712481bac3d2a431980d7f1465a3381"},{url:"panel/index.html",revision:"bf6dc96bb03dbfbc82a4d7c51c5e0c45"},{url:"project/about.html",revision:"3e9b304d1ce771f7fbaa2999e6a0ffa6"},{url:"project/community.html",revision:"8ff0c60ebe34f3f83aa74be723dba452"},{url:"project/index.html",revision:"7839009984161341fcad27785bf1c5cb"},{url:"project/introduction.html",revision:"81952675af8326174903d38d79445abd"},{url:"project/terms.html",revision:"8a206d470dba31e49ce32e8f418fb5d4"},{url:"tutorials/creating_ssl_certificates.html",revision:"81f944c9030f55b26e33a7db7ee80b01"},{url:"tutorials/index.html",revision:"46d8a0e21af9317e0930abe91e162f39"},{url:"tutorials/mysql_setup.html",revision:"7ce67de376e0398fbaa3eb85a32ad748"},{url:"wings/1.0/configuration.html",revision:"49d9ae33d4bca872a89d561c76b7fb96"},{url:"wings/1.0/index.html",revision:"9e17fc2a240fb1f8391ed177c8159f6b"},{url:"wings/1.0/installing.html",revision:"a41012098cb180fe10d748d1ea449c51"},{url:"wings/1.0/migrating.html",revision:"8ee4de4c0c189fae2d30fe6d2eb3d28e"},{url:"wings/1.0/upgrading.html",revision:"148dd75cc745ecb93c19f6aab93870cb"},{url:"wings/index.html",revision:"715fbe9ef72f5c9be34e4196ea03730c"}],{}),e.cleanupOutdatedCaches()}));
