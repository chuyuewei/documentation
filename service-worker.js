if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,d)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let n={};const r=e=>i(e,t),c={module:{uri:t},exports:n,require:r};s[t]=Promise.all(a.map((e=>c[e]||r(e)))).then((e=>(d(...e),n)))}}define(["./workbox-1ab968a5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/0.4_to_0.5.html-BLJ_Hicu.js",revision:"bdf0b2dc65c05957f7ed330ade6bf948"},{url:"assets/0.5_to_0.6.html-Bczcmiv1.js",revision:"567e3195ce3c492a08f76e864a858997"},{url:"assets/0.5.html-DyOrw_5h.js",revision:"36719136054133b24f08524615eacfdd"},{url:"assets/0.6_to_0.7.html-UOZIXstO.js",revision:"98c6b8e4c552170a377899185209b03f"},{url:"assets/0.6.html-BAR6Cxwo.js",revision:"5749b3f79219b3eb80448e468ae163a9"},{url:"assets/0.7.html-MCoHCq9f.js",revision:"1051de02cb6b4f20673233b63bef989b"},{url:"assets/404.html-Bq2aThMc.js",revision:"1b0792998ecdbb674adb5fca4cc7faf1"},{url:"assets/about.html-C58Oamb6.js",revision:"1bb6346795790fb705ea659acebfa9f1"},{url:"assets/about.html-D1K-j4Vh.js",revision:"07ffb4cbbca13703dd2a7f2ad64d46b0"},{url:"assets/add_node.html-pjL9AkbG.js",revision:"c7c17620e62fbac24378b17d0d282f83"},{url:"assets/additional_configuration.html-BsJvO98A.js",revision:"a18efa6d4427a6da8861d3ff650e351f"},{url:"assets/app-BnkftYh0.js",revision:"22e2f78cd4d6b0273571889aae0e1a95"},{url:"assets/artisan.html-Btfonikb.js",revision:"ebd299b405c0246df21f8d8e06f6f223"},{url:"assets/btpanel_getstarted.html-BYnGwORX.js",revision:"8ef80ef0d1712f91d8530bca20821483"},{url:"assets/centos7.html-ChTxjvbH.js",revision:"4a1e1c5b0191f83fcd8c4bcf3699710f"},{url:"assets/centos7.html-DYSt6RDh.js",revision:"a1e0c0c86d0e37509642a195ffccae5d"},{url:"assets/centos8.html-B6BcnKp6.js",revision:"fd0baf4faf086262459051463580dad9"},{url:"assets/centos8.html-BriR-grR.js",revision:"add6ddb6a8e377875f3177e75b814a69"},{url:"assets/community.html-THuyYXi1.js",revision:"34d208885b84603126a48aa7e7f99e26"},{url:"assets/configuration.html-BVf5FNLB.js",revision:"422fe334abe670c26228c20b8dde564e"},{url:"assets/configuration.html-C0DiESTz.js",revision:"88529c06c2d701036dd1f0bd30fed19f"},{url:"assets/configuration.html-CmqizVkv.js",revision:"ae85dffa6b912eac2422e04cd1a07611"},{url:"assets/creating_a_custom_egg.html-AkOtAzy4.js",revision:"ec951a7fb98509c2ef00b3cee236234f"},{url:"assets/creating_a_custom_image.html-WR3katGA.js",revision:"344ad0115be75a37038c4569deb6335f"},{url:"assets/creating_ssl_certificates.html-BUzmlM8u.js",revision:"292fad1aef9671a8f32e9407ae7008f8"},{url:"assets/debian_8_docker.html-iqXfnxfX.js",revision:"37abc87e23393e3709be551b30178a60"},{url:"assets/debian.html-CtcgevHo.js",revision:"78621969fd0f03af57d1369cfd3e3193"},{url:"assets/debian.html-OnR1r8yy.js",revision:"ac7f055fa5d9cb575eb572dd0eb25005"},{url:"assets/docker_getstarted.html-BwHHYfBK.js",revision:"0132c0d07c2c21a03765527d9f4af2c8"},{url:"assets/docsearch-l0sNRNKZ.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/faq.html-D2xgMxfN.js",revision:"5e7f53e62949eb73ad2891451db8207a"},{url:"assets/getting_started.html-BdhoVVaC.js",revision:"9b1e856f1dd6ac40347f72c242cee825"},{url:"assets/getting_started.html-DVgDIWQH.js",revision:"5e8580e8e7a84fe3952e6a824cd82b2c"},{url:"assets/image/advanced.svg",revision:"2934a573b64033bebb71f067ebc8d082"},{url:"assets/image/blog.svg",revision:"5686f361aca8bcf73522de225d09016d"},{url:"assets/image/box.svg",revision:"5f732c9705e288e8fb8ae6d2e5ce906a"},{url:"assets/image/features.svg",revision:"2eb292180d361e4af3f4bf411ef06062"},{url:"assets/image/github-dark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"assets/image/github-light.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"assets/image/layout.svg",revision:"db603c70eb017066ff30923ca5a2cd4a"},{url:"assets/image/markdown.svg",revision:"1a8b4476dae8f52cdd873d2b00fa27fb"},{url:"assets/index-Ds2TtRM5.js",revision:"4b2541a3a6e4abc1431da28a1aa02b8c"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-B_0_rDx1.js",revision:"c5136b4f973b53c48a94d3e93e232593"},{url:"assets/index.html-B0hba9e7.js",revision:"99a1110dceb500b9bc843401c0124e72"},{url:"assets/index.html-BH42bBtM.js",revision:"f07e1d41e789e5786d53303bfdbda803"},{url:"assets/index.html-BI5VQd4D.js",revision:"cd53f48fa14288fa93f6c5a64426e2c2"},{url:"assets/index.html-BKOltgGb.js",revision:"11f18dcce10e9db8068fbe9a560ed961"},{url:"assets/index.html-Bs0kzRmO.js",revision:"53505de9a11f17067c53568ef0c067e1"},{url:"assets/index.html-BymOwRZy.js",revision:"a02c9bcb084643aa600650a8bce72252"},{url:"assets/index.html-BZMbTq0-.js",revision:"a1ece8ea9ca93f0c1c332482c8aa0199"},{url:"assets/index.html-C3KvqnJ3.js",revision:"c63e1f46de11cb6c22ea06560a95dc18"},{url:"assets/index.html-C6HkaY6n.js",revision:"ad099009655442e2375bdb13aaf518a7"},{url:"assets/index.html-CAgXUcLJ.js",revision:"dbd449ad0d75249d246d371e8d73f9a4"},{url:"assets/index.html-CMhS62Cu.js",revision:"e0c130e77a53c3100c85d030824266c2"},{url:"assets/index.html-Cn7fVtGA.js",revision:"5158bfcd3ba13875c77d44e8edce8fb1"},{url:"assets/index.html-CnNQ4Yg6.js",revision:"2a4583e0e86ae66b9930a722b531d59b"},{url:"assets/index.html-CSnLBmPx.js",revision:"2167d603638568c955b783ac895d6bf6"},{url:"assets/index.html-CZE6n5XC.js",revision:"d2008513d2ec945ac54e26d46efe7021"},{url:"assets/index.html-DmTP46Yi.js",revision:"710dbdcc870b479079f5bf80d9ec48b3"},{url:"assets/index.html-DnpjlBXn.js",revision:"b21707939489ca8401f5052cc7d15ff0"},{url:"assets/index.html-DV8k6CJL.js",revision:"873c061523bcdf18c8f99d7129b43d22"},{url:"assets/index.html-Dz_5QZii.js",revision:"6d369a70c29353d1afa9bfdd31178a9b"},{url:"assets/index.html-jmIy8BqB.js",revision:"fa7d2919a957a5c2688f1eaf3f666798"},{url:"assets/index.html-MJ_dAeJu.js",revision:"79e5fb6251a6cb9a4ec43521b179d0df"},{url:"assets/index.html-rpDsaSFw.js",revision:"776dfc7d169bd8bb7fa72fca986e07b1"},{url:"assets/installing.html-Bl5C4U73.js",revision:"5ed277630eb5eab443490c3dccfb05fd"},{url:"assets/installing.html-Dj4876I3.js",revision:"209560d75688391f9b93fd1f8224194c"},{url:"assets/introduction.html-D7fEGg5J.js",revision:"d3d7497ade755740341e451393426dae"},{url:"assets/kernel_modifications.html-yo7a5H2x.js",revision:"1a94a414e8856ea1dcfa6cd50ae9bc1a"},{url:"assets/legacy_upgrade.html-Dn-gaj1i.js",revision:"7588373dea9ec553315b6431c360bbd5"},{url:"assets/markdown.esm-BG2Xu2Hd.js",revision:"dfebc8121864151002204ef714f81472"},{url:"assets/migrating.html-Cw7wryHV.js",revision:"38e543088ec4447fdeeadb0fbb38be56"},{url:"assets/migrating.html-DHoaOiXA.js",revision:"cec44c6de7d8b70b92c09763876fa24d"},{url:"assets/minecraft.html-D77EzWlG.js",revision:"b331c6e847515ff91307d492b0c0145a"},{url:"assets/mounts.html-BoeZszIG.js",revision:"10249a3fb089fb030fd7cf377a95144d"},{url:"assets/mysql_setup.html-ieLVZZJB.js",revision:"0d7f8204aec66f36abb89adc4cd62d67"},{url:"assets/panel.html-BF1YlOZf.js",revision:"cc3a68741f7827e87d3a7c467d1d47ec"},{url:"assets/photoswipe.esm-SzV8tJDW.js",revision:"481d5342d9bb799640b63b15b698dcd4"},{url:"assets/php_upgrade.html-DTNDxzp9.js",revision:"a758bc0efec5c3d6f7b193eb12bfec47"},{url:"assets/plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/reveal.esm-CYbl4_PU.js",revision:"d7a2a78c9e57530577ca771ebd6203f1"},{url:"assets/standalone_sftp.html-Du0RB7GQ.js",revision:"b9097ee91c44adeecacb5bee4d2c7409"},{url:"assets/style-DTzY5I4H.css",revision:"f6d784d32f3ddf7cc44ffb3b42000f2d"},{url:"assets/style-l0sNRNKZ.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/terms.html-T5Dur-7L.js",revision:"fd5e97f2f8a4bc4cec33d068e4384717"},{url:"assets/troubleshooting.html-BPHhCClq.js",revision:"83e4bae1245119d6f2f62a508d506974"},{url:"assets/troubleshooting.html-D2Vn-2KE.js",revision:"b0c2169fdb906a3fed69c8487b804c6d"},{url:"assets/ubuntu1804.html-67CI5OJX.js",revision:"306dda2d184755869c91325ef88b0975"},{url:"assets/ubuntu1804.html-CEmXSwIo.js",revision:"0648571a5413d6c6461e4fef499cf961"},{url:"assets/ubuntu2004.html-DLXP9ZHL.js",revision:"e7fa5a4c129478870e5f24aaddea2831"},{url:"assets/ubuntu2004.html-DygBcrt-.js",revision:"c5bdbe296e025e8a12a0843780a5ae6e"},{url:"assets/updating.html-Cf7NSWev.js",revision:"9f8f784188b1781af98b2f1e1d826cf9"},{url:"assets/upgrading.html-2Lz3JJpy.js",revision:"4dfb1d576e9f2e3e1c65974cf4455582"},{url:"assets/upgrading.html-Bt0w582o.js",revision:"20cd92758ea12a3be81397096404f7f3"},{url:"assets/upgrading.html-CGjUaavy.js",revision:"6d995f1ac7936a69226a79a6fb5d123e"},{url:"assets/webserver_configuration.html-Cf1rouzg.js",revision:"5ac72266bd07feb981031bba4a986955"},{url:"assets/webserver_configuration.html-Dz-34wYF.js",revision:"d671f7cfc869224a37813aba614bd164"},{url:"assets/wings_configuration_example-CiiF11xE.js",revision:"e0576ca1ee55a2bea8484bb93399c3da"},{url:"assets/wings.html-BKzRDIxQ.js",revision:"0179398b43464f5b79086e94893d2534"},{url:"favicons/safari-pinned-tab.svg",revision:"db7d6b19affde4828e29e156a292d578"},{url:"frontpage/loading.svg",revision:"f9ac6b8127286b1a1b15d6938f96ea4a"},{url:"logos/pterry.svg",revision:"f3fb9eb4376d84e63d648afd82d42591"},{url:"pterodactyl-flat.svg",revision:"210292be2b55fff33f927f259db9f81c"},{url:"404.html",revision:"e478e4552311b8b4f1f54f5acb947681"},{url:"community/about.html",revision:"8353ee0add3761d08e8589e5a3d54370"},{url:"community/config/eggs/creating_a_custom_egg.html",revision:"a63a78b7c5bc7460454ca226e1282a19"},{url:"community/config/eggs/creating_a_custom_image.html",revision:"5c6132faa9736b9346af363122e4dd1a"},{url:"community/config/eggs/index.html",revision:"87d8db402537f58249c69b4f6a2d0e3c"},{url:"community/config/index.html",revision:"b4ea62a7f27b3d4b950ef34feb0aa70c"},{url:"community/config/nodes/add_node.html",revision:"48ad1a5fa5613bcd45d24bfab040f3c9"},{url:"community/config/nodes/index.html",revision:"e1bb129e53e3c2feeaa3aad8add9e2f5"},{url:"community/customization/index.html",revision:"f664a33553fccf0f2114c4c7862944a2"},{url:"community/customization/panel.html",revision:"0898222c81e80901df046731363257d5"},{url:"community/customization/wings.html",revision:"2aa6015e0fcd19e080b5ccf82fda7781"},{url:"community/faq.html",revision:"ed392d3197a8b9e3ee8da8da52f36b85"},{url:"community/games/index.html",revision:"ad775dee75bd49588dac85023c18145e"},{url:"community/games/minecraft.html",revision:"296378571535a24bb99df89e91a51afc"},{url:"community/index.html",revision:"f63f3f964649fc22162cfa96a18bb65b"},{url:"community/installation-guides/index.html",revision:"5cbebcd81cbdaf53834c75ccbbb4079b"},{url:"community/installation-guides/panel/centos7.html",revision:"225d512074fed564ed194d8a64ec9af6"},{url:"community/installation-guides/panel/centos8.html",revision:"0a18b43c8710b04625dcfb202f36bde8"},{url:"community/installation-guides/panel/debian.html",revision:"c222f3b6e88ccddac3c81971ee3914de"},{url:"community/installation-guides/panel/index.html",revision:"c89811ca5149d123808c432a4e172758"},{url:"community/installation-guides/panel/ubuntu1804.html",revision:"b0edc7c4ad348703b398d9bc90bbe515"},{url:"community/installation-guides/panel/ubuntu2004.html",revision:"40f152bb60b193a8d7b95e46023bc150"},{url:"community/installation-guides/wings/centos7.html",revision:"698d1dbc7a77b613beab83fab382d8e1"},{url:"community/installation-guides/wings/centos8.html",revision:"d5f74b52af887cbbfd358e707ace4b10"},{url:"community/installation-guides/wings/debian.html",revision:"58432c65c3952d9f5488436a39fc06a7"},{url:"community/installation-guides/wings/index.html",revision:"6ac48cf0e2e82c60c4ecd699fd368897"},{url:"community/installation-guides/wings/ubuntu1804.html",revision:"553099c605968197e89731b01c89972e"},{url:"community/installation-guides/wings/ubuntu2004.html",revision:"8a4ff19b6a996e4e5326d042e5399758"},{url:"community/tutorials/artisan.html",revision:"3989d050859bf44f0fc360fd25cc1c27"},{url:"community/tutorials/index.html",revision:"4d9bfd46fa138156d9f67dd2b412ccfb"},{url:"community/tutorials/migrating.html",revision:"33a14b5705d7b52a09d48c02b428ce9c"},{url:"daemon/0.6/configuration.html",revision:"bf707bafb3da9ae4b520f220e8d76e1d"},{url:"daemon/0.6/debian_8_docker.html",revision:"4c44166ac930287943777d83c817e799"},{url:"daemon/0.6/index.html",revision:"46d1f213fcced7525e6f64e164380a1a"},{url:"daemon/0.6/installing.html",revision:"db0be3ae6996c6827a8e8e5f375f9ada"},{url:"daemon/0.6/kernel_modifications.html",revision:"22c72b3a1730b5d34733fa6b7e946b29"},{url:"daemon/0.6/standalone_sftp.html",revision:"44ba342b42b9e911f3f62cc4ea91b2bc"},{url:"daemon/0.6/upgrade/0.4_to_0.5.html",revision:"1e2f07fee7c65a40c107cc1436f697e7"},{url:"daemon/0.6/upgrade/0.5_to_0.6.html",revision:"95dda726c286f354bbd2dc2becc4238a"},{url:"daemon/0.6/upgrade/0.5.html",revision:"b622481e3e99377070d74b6fd0ea168f"},{url:"daemon/0.6/upgrade/0.6.html",revision:"9716495b8bc0f70bc1b1b2e1495e16fb"},{url:"daemon/0.6/upgrade/index.html",revision:"72b9050841119fdc7060b88823e1a5b0"},{url:"daemon/0.6/upgrading.html",revision:"a726ec7e3b804ed93aab816e3f2c8c90"},{url:"daemon/index.html",revision:"bb09430d7d0fe55cc8144f9fde9388f1"},{url:"guides/index.html",revision:"c4b9a1afbddd22c6158daf605aaadb45"},{url:"guides/mounts.html",revision:"3f02eeaef5cebc5ae68739b0874f127f"},{url:"guides/php_upgrade.html",revision:"1c86f14da58c8e449e49e26608b5b86c"},{url:"index.html",revision:"1d2d3ca03bee7a455977554b81bed2d5"},{url:"panel/0.7/configuration.html",revision:"eb5318024b8a2b82e99b4c788babd967"},{url:"panel/0.7/getting_started.html",revision:"f9855677c8ac6bc328813cc28e087708"},{url:"panel/0.7/index.html",revision:"95d150f8f5bffeb52280ba50d2b328cf"},{url:"panel/0.7/troubleshooting.html",revision:"652ac7217531b1314dd1544d400d05ff"},{url:"panel/0.7/upgrade/0.6_to_0.7.html",revision:"8d50b16286c02bff815bcd67f0c8d2b4"},{url:"panel/0.7/upgrade/0.7.html",revision:"2c5c4cbcdada26cd4811f679ed15dc9f"},{url:"panel/0.7/upgrade/index.html",revision:"16b5126ca79f555353fe0a0ab35014e4"},{url:"panel/0.7/upgrading.html",revision:"f627390a73256ecd7d648e37063e36a0"},{url:"panel/0.7/webserver_configuration.html",revision:"b15b587601ed6bae9d5b9eb8a9dcb4ac"},{url:"panel/1.0/additional_configuration.html",revision:"e8957f9671bc9d788f6f11a2609d48f8"},{url:"panel/1.0/btpanel_getstarted.html",revision:"e0b5ea6b90cea3fabb58d16b7f601d3a"},{url:"panel/1.0/docker_getstarted.html",revision:"1b14ff1fbb421bbfba15e3febdddc615"},{url:"panel/1.0/getting_started.html",revision:"eb99e6bc8f836dae64cf2191e5d6c8af"},{url:"panel/1.0/index.html",revision:"5f9cbe16b2c287d9b5be0db9e86e5bf4"},{url:"panel/1.0/legacy_upgrade.html",revision:"070e41c8dea208809b9032e4b169201f"},{url:"panel/1.0/troubleshooting.html",revision:"8437c5ea8b9f5ddc522e954388ca6dc2"},{url:"panel/1.0/updating.html",revision:"7ca28ccc43ffb49e0446b15523c54805"},{url:"panel/1.0/webserver_configuration.html",revision:"53a37a5a83ccceb5494eb42ae89f092a"},{url:"panel/index.html",revision:"4f07a0002b87abcd6991f7827deaced4"},{url:"project/about.html",revision:"c711db75585055cf58e6e77ec8ad4e41"},{url:"project/community.html",revision:"293626d2ef94057a63e49064781b3853"},{url:"project/index.html",revision:"e5c6eeac202dcc5123951d2aaf8ddc19"},{url:"project/introduction.html",revision:"3235661c6de76f4ed319643e961e3c12"},{url:"project/terms.html",revision:"d8f9289c97936493189a23eace3d31a1"},{url:"tutorials/creating_ssl_certificates.html",revision:"38497da8b127ec5b3e03000183f7513b"},{url:"tutorials/index.html",revision:"d353457c4c7e44b436c6bbd9c7b192fe"},{url:"tutorials/mysql_setup.html",revision:"0d135987bdb6b083553fba22fe3ff03d"},{url:"wings/1.0/configuration.html",revision:"067a6745d722a7c69c75c65c30ed790f"},{url:"wings/1.0/index.html",revision:"4c669877cae223512d918fddd82e3032"},{url:"wings/1.0/installing.html",revision:"147358d51a145ddcc986d27b5e458291"},{url:"wings/1.0/migrating.html",revision:"42d62e0c7d89eec2ad2f40691f44570c"},{url:"wings/1.0/upgrading.html",revision:"2eb20e5cacc2c70e5fb0b94800f89bd3"},{url:"wings/index.html",revision:"bfec0b47ec5695c462bd22a0839b650b"}],{}),e.cleanupOutdatedCaches()}));
