if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),n={module:{uri:c},exports:t,require:r};s[c]=Promise.all(i.map((e=>n[e]||r(e)))).then((e=>(d(...e),t)))}}define(["./workbox-a3cf1d8c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/0.4_to_0.5.html-CGbI5fkS.js",revision:"9d58cca5eae4353416bab919448819bc"},{url:"assets/0.5_to_0.6.html-D8IiFstL.js",revision:"4042c5257ae70459b0475fbaf8ccff26"},{url:"assets/0.5.html-Dy9oM5q7.js",revision:"ffdaeff991764413caf5ced142d1df54"},{url:"assets/0.6_to_0.7.html-D7ysOPvl.js",revision:"b11bdef1e5bac2f2d3961061e0c7cd3c"},{url:"assets/0.6.html-m9DCpRLQ.js",revision:"955355b55ac8bafdcf2a67c1839cd1dc"},{url:"assets/0.7.html-CWuc60qf.js",revision:"ec6947e89c384bd31f2530d3945b099f"},{url:"assets/404.html-X_cPhv1X.js",revision:"ef8bf71a48a25df5a7a7065686e6093e"},{url:"assets/about.html-oIuWx5nx.js",revision:"8ddf1f057f93bd17ca16577c0adaf203"},{url:"assets/about.html-xKmpw1we.js",revision:"99d3568b5c5f4a43426e6b4e90999282"},{url:"assets/add_node.html-yMNEWur6.js",revision:"4f9f898e6cfa3eaa949a351ad1a5950f"},{url:"assets/additional_configuration.html-o9J3oesi.js",revision:"ceb80f4615ff185284341b9deae0bb50"},{url:"assets/app-DPNkEWqQ.js",revision:"30a563f06ceb9129a955d1afd26e6c4e"},{url:"assets/artisan.html-BKgstkyq.js",revision:"b8c899ada48f2fc2f5749817484397c6"},{url:"assets/btpanel_getstarted.html-BgikYAqk.js",revision:"eaa5c6310a0aca969f39121ded70781c"},{url:"assets/centos7.html-2oMn22dN.js",revision:"c2a4e12eb22d9d32d91bc4fcf8cee76d"},{url:"assets/centos7.html-C0MMRMy8.js",revision:"8224650640c1c46c4faf7c2c7021ea46"},{url:"assets/centos8.html-CJ61408G.js",revision:"fc8c038f19162a5188ac734de44dd7e6"},{url:"assets/centos8.html-sGJqKbCK.js",revision:"e053a0c47c0a3d93c613006b34e78a5c"},{url:"assets/community.html-WMt-j_jT.js",revision:"33a4317034c9dd49ac5a446581a95dd8"},{url:"assets/configuration.html-BWDd9n8N.js",revision:"de08df74befc54a8540353ccd0da8052"},{url:"assets/configuration.html-Ct639BsL.js",revision:"518388c2723b4084084c1021806e5ef9"},{url:"assets/configuration.html-D91kLEAh.js",revision:"0453e9ac5d6665f23c1e4167c044f386"},{url:"assets/creating_a_custom_egg.html-RM3DX8JU.js",revision:"9dff3fc838e8e68bde4868c0cd97610a"},{url:"assets/creating_a_custom_image.html-Ceq7tpQ5.js",revision:"3fb6d3885e1ad122c340f15a5dbde332"},{url:"assets/creating_ssl_certificates.html-oo_UO0cM.js",revision:"c8b6556918b46a994cec9d68e7d628a4"},{url:"assets/debian_8_docker.html-bqSB2333.js",revision:"594802dc1d4cf097c115ff174cbc0080"},{url:"assets/debian.html-DUNRw0i8.js",revision:"e9e728b4159a2c51a8d018c7412556c4"},{url:"assets/debian.html-JOMsocTE.js",revision:"edb37e785aa669576124cdf0655ecbd8"},{url:"assets/docker_getstarted.html-B3YYQQ3U.js",revision:"e17816b9ac6e4d3ebc93763001c93146"},{url:"assets/faq.html-Br-hKczh.js",revision:"d2568344f49590329f408a748b66072c"},{url:"assets/getting_started.html-B5RKLlO-.js",revision:"8921ba7dc3127f3ba8018ebf44817e4f"},{url:"assets/getting_started.html-D03Ary6Z.js",revision:"66e34ba9e5a933fcb11bde1e5618dd1c"},{url:"assets/image/advanced.svg",revision:"2934a573b64033bebb71f067ebc8d082"},{url:"assets/image/blog.svg",revision:"5686f361aca8bcf73522de225d09016d"},{url:"assets/image/box.svg",revision:"5f732c9705e288e8fb8ae6d2e5ce906a"},{url:"assets/image/features.svg",revision:"2eb292180d361e4af3f4bf411ef06062"},{url:"assets/image/github-dark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"assets/image/github-light.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"assets/image/layout.svg",revision:"db603c70eb017066ff30923ca5a2cd4a"},{url:"assets/image/markdown.svg",revision:"1a8b4476dae8f52cdd873d2b00fa27fb"},{url:"assets/index-Cc8Ec0XB.js",revision:"17f91d68b3c225c9f43d412f97812057"},{url:"assets/index-DGYl2PJE.js",revision:"b74447eb9dc821f0b71fbd6e80220e62"},{url:"assets/index.html-B-hzYSGD.js",revision:"1cce290f7799ec6a4e28a839b6d2ec58"},{url:"assets/index.html-B04yj897.js",revision:"1aab614035ff6bd7e799901870d60cd9"},{url:"assets/index.html-B8xdJ7Vz.js",revision:"5fef72f7998f7383a7a8b0802a319265"},{url:"assets/index.html-B9iaCOSi.js",revision:"6a122f68ae836cdc7a9bedd6e05ad382"},{url:"assets/index.html-BgXxPDXD.js",revision:"f45e57346bf767804a40c757c669c22b"},{url:"assets/index.html-BjEKt924.js",revision:"e1c1240c2aec66c33152f35492f31d7e"},{url:"assets/index.html-Bp5kz2NW.js",revision:"297af96f78615d0ce9195f16f1afcea9"},{url:"assets/index.html-BPvIgtD1.js",revision:"772cc7f6dd673d9a8fb99849531d0332"},{url:"assets/index.html-BTih_QAz.js",revision:"e962308d89aa563b0cfc2ca7ba757e6d"},{url:"assets/index.html-Bv1YVPpi.js",revision:"39b3cf5967a7f6ad991b6661a227f590"},{url:"assets/index.html-C00pyO5e.js",revision:"b79c63e758c4c3c3762a313554d7f561"},{url:"assets/index.html-C54c1UOE.js",revision:"579894f37ee8bf3f6d9bc2bf62c861ab"},{url:"assets/index.html-CIidfntR.js",revision:"f75cc8222f588dd4e6df3332f9b81562"},{url:"assets/index.html-CuQxcKpv.js",revision:"3814063f905f1a2bee0f5101c6248803"},{url:"assets/index.html-CuztfYuB.js",revision:"78538b300683e046562c7bc07d777b85"},{url:"assets/index.html-Cxy1km6i.js",revision:"47b05d88c03a94a9b91e7e04933de05a"},{url:"assets/index.html-DQxn4Zk2.js",revision:"bd539a33e5586858e5cb23984c60261c"},{url:"assets/index.html-DruIF-_W.js",revision:"5697cdeaf07ec9bfb87daece812fcc7a"},{url:"assets/index.html-DT6sZKJH.js",revision:"af85ecd38f032cedf7c221976e6f984b"},{url:"assets/index.html-DUn1Xv4Z.js",revision:"a80cc5f2e3aa7604198195b373e8615e"},{url:"assets/index.html-edd7buet.js",revision:"640c0f7fdc5b695c0f1ac6320a96e70e"},{url:"assets/index.html-FHYHCbJK.js",revision:"9f7b93e4c4630fb02dba1ce46e00dceb"},{url:"assets/index.html-qxJ-x9zo.js",revision:"cf250460a01cd0961c16cccca431ba1d"},{url:"assets/installing.html-CAHdEkLt.js",revision:"24319c7b84b137d7888788e1ddf65a78"},{url:"assets/installing.html-DGalsYbm.js",revision:"aa336d6204fa15279c69309d8018d8c7"},{url:"assets/introduction.html-AnXb3Ev1.js",revision:"6a05269f4bcdaeebe18247bcc971efbe"},{url:"assets/kernel_modifications.html-BNUp3M2m.js",revision:"5dda85ae18832a2406fa8cd454f4d13b"},{url:"assets/legacy_upgrade.html-B_oZNo2Y.js",revision:"0962f56129e335ed1873e3e3d7804b09"},{url:"assets/markdown.esm-DotuGrRK.js",revision:"105f3e127e961fc5731b3c7484dadcfb"},{url:"assets/migrating.html-BF3Eqnzv.js",revision:"247bc491ceb0da7e93005285589cfbce"},{url:"assets/migrating.html-BOC0cpyg.js",revision:"39f155f8743c61e8d03baa87e0a8d8ea"},{url:"assets/minecraft.html-Dbw28fOg.js",revision:"20ce6eaf5d8f389f9f921915d3dcd236"},{url:"assets/mounts.html-BKMuCmKl.js",revision:"aebe45d60e58d1932f1fcb6461eb54ee"},{url:"assets/mysql_setup.html-Dp6LAsVt.js",revision:"a39a65fa848007274bef7696d31ca5dc"},{url:"assets/panel.html-C1wW5Y-R.js",revision:"33e0eddc4f4231980888ed909e8ac649"},{url:"assets/photoswipe.esm-CMg0yb1C.js",revision:"db710d3cad6b3910c961f69d701b069a"},{url:"assets/php_upgrade.html-BLCwld8_.js",revision:"3c041919157aacbac797d200141cc8f0"},{url:"assets/plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/reveal.esm-B3O8JSaZ.js",revision:"96159e200211fae3ae52d7531326e475"},{url:"assets/setupDevtools-7MC2TMWH-CwC4_zYc.js",revision:"8b0e9acd664a395b1deb1dabcbae12e0"},{url:"assets/standalone_sftp.html-BMB8Y0IS.js",revision:"b7acaa6a6eef6ce7db30c5c92da6d946"},{url:"assets/style-CO1eWOHL.css",revision:"aae01523522efe0783a312308a9bd788"},{url:"assets/terms.html-Bu4P20A6.js",revision:"ccb7cff5d6b63d4c782c9e140f3b51bb"},{url:"assets/troubleshooting.html-00ryIIwo.js",revision:"15f599deec9825d609c0c2eb566e6905"},{url:"assets/troubleshooting.html-C1FKlT3O.js",revision:"503745b1ee001be9cfa4df209d2e32aa"},{url:"assets/updating.html-C7C-p8Yz.js",revision:"d67c9e9c11abe58d77023792f2c0602e"},{url:"assets/upgrading.html-BDfUQXDE.js",revision:"ba686210066f4401b047f21d5408410d"},{url:"assets/upgrading.html-C2hs6gus.js",revision:"9568ed57eebdcd04dfb286396b178b24"},{url:"assets/upgrading.html-DESZXJSr.js",revision:"70f5233ebf7a9ae370072a5e7b36484a"},{url:"assets/webserver_configuration.html-B29RvZ8W.js",revision:"471dfc3aab8d0cb126086d630fff8e6a"},{url:"assets/webserver_configuration.html-ClTroaGD.js",revision:"77d5f9ca78e73123e92a421da2dce81d"},{url:"assets/wings_configuration_example-CiiF11xE.js",revision:"e0576ca1ee55a2bea8484bb93399c3da"},{url:"assets/wings.html-98_Ulgcu.js",revision:"42d7088d20873d0a8a251c77299369bc"},{url:"favicons/safari-pinned-tab.svg",revision:"db7d6b19affde4828e29e156a292d578"},{url:"frontpage/loading.svg",revision:"f9ac6b8127286b1a1b15d6938f96ea4a"},{url:"logos/pterry.svg",revision:"f3fb9eb4376d84e63d648afd82d42591"},{url:"pterodactyl-flat.svg",revision:"210292be2b55fff33f927f259db9f81c"},{url:"404.html",revision:"a645fbd0151e7e7aabad9f931cc7634e"},{url:"community/about.html",revision:"f07140e146bcdaecbfc534470a524522"},{url:"community/config/eggs/creating_a_custom_egg.html",revision:"2b621c0c538d14e573077b82bf3c4fd1"},{url:"community/config/eggs/creating_a_custom_image.html",revision:"1c65024e675b9f6a3b6c0256170b19a5"},{url:"community/config/eggs/index.html",revision:"2541e78baa06d70ffcd06341e1609424"},{url:"community/config/index.html",revision:"17cde31306863f046bf842d12b7fe472"},{url:"community/config/nodes/add_node.html",revision:"0a40550cc19d0587a37fb497a0511418"},{url:"community/config/nodes/index.html",revision:"19972e6249741dae73787c09b1b38e40"},{url:"community/customization/index.html",revision:"e1b4c84cfe80207f174cb625483e10f7"},{url:"community/customization/panel.html",revision:"26e2f8d247d65f8cb42166ac7bc59b9b"},{url:"community/customization/wings.html",revision:"c5959fa4a2f96a1d3c4ca6be85894d85"},{url:"community/faq.html",revision:"9a4661833589450f53e1c944b66481f7"},{url:"community/games/index.html",revision:"f9d948587f3800920337bb9fe3af47f6"},{url:"community/games/minecraft.html",revision:"9f3104481ebd47481db71a024af3041a"},{url:"community/index.html",revision:"eb9d48bb46627391e8bfdc73d45da5ed"},{url:"community/installation-guides/index.html",revision:"12cb625eb7d4eaa1d701612b723529d3"},{url:"community/installation-guides/panel/centos7.html",revision:"2ef0bf6b8a96e6e4a89ec5d173475295"},{url:"community/installation-guides/panel/centos8.html",revision:"6ddd6cc192d07b51a7035deec4111881"},{url:"community/installation-guides/panel/debian.html",revision:"2e6a3eb200e2343991717fdb00762a71"},{url:"community/installation-guides/panel/index.html",revision:"32a14131b180fb13a21ac8e00b911323"},{url:"community/installation-guides/wings/centos7.html",revision:"e245ff6c95a928f585496c9ecca0ef7c"},{url:"community/installation-guides/wings/centos8.html",revision:"809962bf242c633ba58b6643d50ffe1c"},{url:"community/installation-guides/wings/debian.html",revision:"e1291470330d732f7bb6b349eada8fa3"},{url:"community/installation-guides/wings/index.html",revision:"6681962105e5303036913d3458485130"},{url:"community/tutorials/artisan.html",revision:"bb4e967b919b856a721521fadffa247b"},{url:"community/tutorials/index.html",revision:"00304fb1342f219c48d2ea840b093421"},{url:"community/tutorials/migrating.html",revision:"a8eefa61c626596b6f88295312b9aff3"},{url:"daemon/0.6/configuration.html",revision:"9acfa78194ead4a4b56ae5ccfe7433ae"},{url:"daemon/0.6/debian_8_docker.html",revision:"0ccf649d8e49e93d45e55070e65a6836"},{url:"daemon/0.6/index.html",revision:"d67e58c19c5d0139ae21ff5ce3a61a13"},{url:"daemon/0.6/installing.html",revision:"14d5e9448cf557848fb8725fdc50b5a8"},{url:"daemon/0.6/kernel_modifications.html",revision:"a27a4b3a00d56262a8e68054be218198"},{url:"daemon/0.6/standalone_sftp.html",revision:"66fd1958ed2ad2fc93f1ec3ec9ac982a"},{url:"daemon/0.6/upgrade/0.4_to_0.5.html",revision:"28c30b192c4fd3400a46186723deded4"},{url:"daemon/0.6/upgrade/0.5_to_0.6.html",revision:"16e9feda26986219d086c1f10f0bf245"},{url:"daemon/0.6/upgrade/0.5.html",revision:"a5fdeb3165029dbd6d0a8901d7accf2d"},{url:"daemon/0.6/upgrade/0.6.html",revision:"e09559b9b8675c8794901b0e60865f7d"},{url:"daemon/0.6/upgrade/index.html",revision:"bdec9d7c0448a59df821c716b60d5617"},{url:"daemon/0.6/upgrading.html",revision:"59cc6ee9927b1d0eb5c50ca6a5b9c889"},{url:"daemon/index.html",revision:"9a24adfd297f216af72e542824cc398e"},{url:"guides/index.html",revision:"aa214791d2b27fbbee9dbe85862d79ab"},{url:"guides/mounts.html",revision:"e4eaedb3299ba097bc4f93c0c7fdbd08"},{url:"guides/php_upgrade.html",revision:"32623b40cffabb69534467fdb037d319"},{url:"index.html",revision:"3541c6a851000aab993802594fee3955"},{url:"panel/0.7/configuration.html",revision:"5b46de229179d020911615505f172a9c"},{url:"panel/0.7/getting_started.html",revision:"f0f90dc8a9beb4b8d5e9654058f2af3f"},{url:"panel/0.7/index.html",revision:"63dc5536896359f67a1cfc798d2b5546"},{url:"panel/0.7/troubleshooting.html",revision:"e42888ac83c0f8a0c0a24b68e0e69ac8"},{url:"panel/0.7/upgrade/0.6_to_0.7.html",revision:"bc600e4c7c8b15645d5c922620ab5cfc"},{url:"panel/0.7/upgrade/0.7.html",revision:"c26c057e472b4aa27dc89ed43cdb7931"},{url:"panel/0.7/upgrade/index.html",revision:"512ce969b27b5d136d1d80c33b09bb21"},{url:"panel/0.7/upgrading.html",revision:"8091733bf51064fc3a4e4a9bf68ccc48"},{url:"panel/0.7/webserver_configuration.html",revision:"767a383c3843e7f453015d6251653d26"},{url:"panel/1.0/additional_configuration.html",revision:"33a4c0c03dc94d652c2a61b89955d8d2"},{url:"panel/1.0/btpanel_getstarted.html",revision:"094da17aa2d917a30c437ca969bf0fbc"},{url:"panel/1.0/docker_getstarted.html",revision:"3d0598f63f3e1a77b9c5de7a853f05dc"},{url:"panel/1.0/getting_started.html",revision:"411e726e73a93dc433c2374e30964f31"},{url:"panel/1.0/index.html",revision:"6196b00b671485ed1e015e06b7f40564"},{url:"panel/1.0/legacy_upgrade.html",revision:"d77f2f6375bc3b45d0a06448bbea4d80"},{url:"panel/1.0/troubleshooting.html",revision:"157e04ca17f70d2532bc30c74ce5893f"},{url:"panel/1.0/updating.html",revision:"6cad70e780dbaf0084322e9fdb260acc"},{url:"panel/1.0/webserver_configuration.html",revision:"9ce9fb23583e8d62b7def914a46b2bc2"},{url:"panel/index.html",revision:"b7058481abe8947219f9c7d154ce186e"},{url:"project/about.html",revision:"89237ee59cfc038eec716f89f58ce1a1"},{url:"project/community.html",revision:"6b6d48147c3a42ef207907b55d8bf739"},{url:"project/index.html",revision:"01e5b2a1023dcaf8cbd67faf7090dda0"},{url:"project/introduction.html",revision:"8753ca572628c3e8181159ebc7e8b9c9"},{url:"project/terms.html",revision:"16b2c391d7d8508ca3653d9094359323"},{url:"tutorials/creating_ssl_certificates.html",revision:"59a2f0d66538199b9993d4b39e1a234f"},{url:"tutorials/index.html",revision:"79513f9ac94d6c030ddd47245c3fcfbb"},{url:"tutorials/mysql_setup.html",revision:"04dee6cc23850bddcb1c25d244d276a4"},{url:"wings/1.0/configuration.html",revision:"9fe9d091a27d57f2a8d6684f8660348f"},{url:"wings/1.0/index.html",revision:"f00cb77cf2c9093117a71184e34cc3af"},{url:"wings/1.0/installing.html",revision:"8fa7d453307c2329d328cd4b77362179"},{url:"wings/1.0/migrating.html",revision:"d8ad69d0bcac62431ace4eedae67ebb5"},{url:"wings/1.0/upgrading.html",revision:"5e4850c4532b7e896df49e146ac9ba94"},{url:"wings/index.html",revision:"a2e33ef527afbbe9f68e1ada4df25790"}],{}),e.cleanupOutdatedCaches()}));
